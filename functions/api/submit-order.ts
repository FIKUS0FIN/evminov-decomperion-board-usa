import {
  AuthEnv,
  getRegionalEmailConfig,
  getSessionUser,
  normalizeEmail,
  sendTelegramAdminAlert,
} from "../_lib/auth";

export function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export const onRequestPost: PagesFunction<AuthEnv> = async ({ request, env }) => {
  try {
    const contentType = request.headers.get("content-type") || "";
    let payload: Record<string, unknown> = {};

    if (contentType.includes("application/json")) {
      payload = (await request.json()) as Record<string, unknown>;
    } else if (contentType.includes("form")) {
      const fd = await request.formData();
      fd.forEach((v, k) => {
        if (typeof v === "string") payload[k] = v;
      });
    }

    // Silent honeypot filter against automated form spam bots
    if (String(payload.website || payload.company_url || "").trim().length > 0) {
      return new Response(
        JSON.stringify({ ok: true, orderRef: "EV-RECEIVED" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    const mode = String(payload.mode || "order_reservation").slice(0, 40);
    const sessionUser = await getSessionUser(request, env);

    // Mandatory login before placing an order reservation
    if (mode === "order_reservation" && env.DB && !sessionUser) {
      return new Response(
        JSON.stringify({
          ok: false,
          code: "AUTH_REQUIRED",
          error: "Please sign in with Google or Email & Password before placing an order.",
        }),
        { status: 401, headers: { "Content-Type": "application/json; charset=utf-8" } }
      );
    }

    const name = String(payload.name || sessionUser?.name || "").trim().slice(0, 120);
    const email = normalizeEmail(payload.email || sessionUser?.email || "");
    const phone = String(payload.phone || sessionUser?.phone || "").trim().slice(0, 40);
    const product = String(payload.product || "2-piece-folding-board").slice(0, 80);
    const productName = String(payload.productName || product).slice(0, 140);
    const finish = String(payload.finish || "Light Natural Pine").slice(0, 60);
    const shipping = String(payload.shipping || "express").slice(0, 20);
    const includeStand = Boolean(payload.includeStand);
    const includeHsaDoc = payload.includeHsaDoc !== false;
    const totalUsd = Number(payload.totalUsd || 0);
    const stateOrCountry = String(payload.stateOrCountry || payload.state || "US").slice(0, 80);
    const address = String(payload.address || "").trim().slice(0, 220);
    const notes = String(payload.notes || "").trim().slice(0, 5000);
    const lang = String(payload.lang || "en").slice(0, 10);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Valid email address is required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const orderId = crypto.randomUUID();
    const orderRef = `EV-${crypto.randomUUID().replace(/-/g, "").slice(0, 8).toUpperCase()}`;
    const nowIso = new Date().toISOString();
    const emailCfg = getRegionalEmailConfig(request, env);
    const siteOrigin = emailCfg.siteOrigin;
    const isCanadaOrigin = emailCfg.isCanada;
    const orderCurrency = isCanadaOrigin ? "CAD" : "USD";
    const stripeCurrency = isCanadaOrigin ? "cad" : "usd";
    const localePrefix =
      lang === "es" || lang === "fr" || lang === "de" || lang === "uk" || lang === "ru"
        ? `/${lang}`
        : "";

    // Persist orders, warranty registrations, and calculator plan leads in Cloudflare D1
    if (env.DB) {
      const dbTotalUsd = mode === "protocol_lead" ? 0 : totalUsd;
      await env.DB.prepare(
        `INSERT INTO orders (
          id, order_ref, user_id, mode, status,
          customer_name, customer_email, customer_phone,
          product_slug, product_name, finish, shipping_method,
          include_stand, include_hsa_doc, total_usd,
          state_or_country, address, customer_notes, locale,
          created_at, updated_at
        ) VALUES (?, ?, ?, ?, 'new', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(
          orderId,
          orderRef,
          sessionUser?.id || null,
          mode,
          name || (mode === "protocol_lead" ? "Calculator Lead" : ""),
          email,
          phone,
          product,
          productName,
          finish,
          shipping,
          includeStand ? 1 : 0,
          includeHsaDoc ? 1 : 0,
          dbTotalUsd,
          stateOrCountry,
          address,
          notes,
          lang,
          nowIso,
          nowIso
        )
        .run();

      // Log initial order received event for timeline
      await env.DB.prepare(
        `INSERT INTO order_events (id, order_id, event_type, status, message, author_role, author_name, created_at)
         VALUES (?, ?, 'status_change', 'new', ?, 'system', 'Evminov Spine Med', ?)`
      )
        .bind(
          crypto.randomUUID(),
          orderId,
          `Order ${orderRef} received (${productName}, ${finish}).`,
          nowIso
        )
        .run();

      // Keep user's phone/name/address enriched on their profile
      if (sessionUser) {
        await env.DB.prepare(
          `UPDATE users
           SET name = COALESCE(NULLIF(?, ''), name),
               phone = COALESCE(NULLIF(?, ''), phone),
               shipping_state = COALESCE(NULLIF(shipping_state, ''), ?),
               shipping_address = COALESCE(NULLIF(shipping_address, ''), ?)
           WHERE id = ?`
        )
          .bind(name, phone, stateOrCountry, address, sessionUser.id)
          .run();
      }
    }

    // Optional live Stripe Checkout Session creation once STRIPE_SECRET_KEY is configured in Cloudflare
    let checkoutUrl: string | undefined;
    if (
      env.STRIPE_SECRET_KEY &&
      mode === "order_reservation" &&
      totalUsd >= 100 &&
      totalUsd <= 5000
    ) {
      const stripeBody = new URLSearchParams({
        mode: "payment",
        customer_email: email,
        success_url: `${siteOrigin}/welcome/?order=${orderRef}`,
        cancel_url: `${siteOrigin}/order/?product=${encodeURIComponent(product)}&step=3`,
        "line_items[0][price_data][currency]": stripeCurrency,
        "line_items[0][price_data][product_data][name]": `${productName} (${finish}, ${shipping})`,
        "line_items[0][price_data][unit_amount]": String(Math.round(totalUsd * 100)),
        "line_items[0][quantity]": "1",
        "metadata[order_ref]": orderRef,
        "metadata[hsa_receipt]": String(includeHsaDoc),
      });

      const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: stripeBody.toString(),
      });
      if (stripeRes.ok) {
        const stripeJson = (await stripeRes.json()) as { url?: string };
        checkoutUrl = stripeJson.url;
      }
    }

    const tasks: Array<Promise<unknown>> = [];

    // 1. Instant Telegram Operations Alert
    if (env.TELEGRAM_BOT_TOKEN?.trim() && env.TELEGRAM_CHAT_ID?.trim()) {
      const tgText = [
        mode === "protocol_lead"
          ? `📐 Новий лід з калькулятора (${isCanadaOrigin ? "CA" : "US"}) — ${orderRef}`
          : mode === "warranty_registration"
          ? `🛡️ Нова реєстрація гарантії 1 рік (${isCanadaOrigin ? "CA" : "US"}) — ${orderRef}`
          : `🌲 Нове замовлення (${isCanadaOrigin ? "CA" : "US"}) — ${orderRef}`,
        `Товар: ${productName} (${finish})`,
        `Доставка: ${shipping}${includeStand ? " + Стійка" : ""}`,
        totalUsd > 0 ? `Орієнтовна сума: $${totalUsd} ${orderCurrency}` : "",
        `HSA/FSA чек: ${includeHsaDoc ? "Так" : "Ні"}`,
        `Ім'я: ${name || "—"}`,
        `Email: ${email}`,
        phone ? `Телефон: ${phone}` : "",
        `Куди: ${stateOrCountry}${address ? ` — ${address}` : ""}`,
        notes ? `Примітка: ${notes.slice(0, 600)}` : "",
        `Мова: ${lang}`,
        `Адмінка: ${emailCfg.siteOrigin}/admin/`,
      ]
        .filter(Boolean)
        .join("\n");

      tasks.push(sendTelegramAdminAlert(env, tgText));
    }

    // 2. Branded HTML Emails via Resend (Customer confirmation + Operations admin copy)
    if (emailCfg.apiKey) {
      const safeName = escapeHtml(name || "Valued Customer");
      const safeEmail = escapeHtml(email);
      const safePhone = escapeHtml(phone || "Not provided");
      const safeProduct = escapeHtml(productName);
      const safeFinish = escapeHtml(finish);
      const safeShipping = escapeHtml(shipping);
      const safeStateOrCountry = escapeHtml(stateOrCountry || "Not provided");
      const safeAddress = escapeHtml(address || "Not provided");
      const safeLang = escapeHtml(lang);

      // Separate customer-typed notes from internal attribution suffix
      const attrSplitIdx = notes.indexOf("Attribution:");
      const rawCustomerNotes =
        attrSplitIdx === -1
          ? notes.trim()
          : notes.slice(0, attrSplitIdx).replace(/\|\s*$/, "").trim();
      const rawAttribution =
        attrSplitIdx === -1 ? "" : notes.slice(attrSplitIdx).trim();

      const safeCustomerNotes = escapeHtml(rawCustomerNotes);
      const safeAttribution = escapeHtml(rawAttribution);

      const calcRaw = (payload.calculatorData || {}) as Record<string, unknown>;
      const calcAngle = Number(calcRaw.angle || 15);
      const calcSafeWindow = escapeHtml(String(calcRaw.safeWindow || "12°–22°"));
      const calcPull = Number(calcRaw.netTractionLbs || 32);
      const calcPctBw = Number(calcRaw.percentBodyWeight || 18);
      const calcDiscPct = Number(calcRaw.discUnloadingPct || 67);
      const calcDuration = Number(calcRaw.durationMin || 10);
      const calcGoal = escapeHtml(String(calcRaw.goal || "hernia"));
      const calcGoalLabel = escapeHtml(String(calcRaw.goalLabel || "Personalized Spine Decompression Protocol"));
      const calcGoalDesc = escapeHtml(String(calcRaw.goalDescription || "Gentle low-angle head-up traction engineered to unload lumbar discs while activating deep spinal stabilizers."));
      const calcWeightLbs = Number(calcRaw.weightLbs || 175);
      const calcWeightKg = Number(calcRaw.weightKg || 79);
      const calcHeightLabel = escapeHtml(String(calcRaw.heightLabel || "5'10\""));
      const calcHeightCm = Number(calcRaw.heightCm || 178);
      const calcModel = escapeHtml(String(calcRaw.recommendedModel || productName || "2-Piece Folding Evminov Board (Home Storage)"));
      const calcIsWide = String(calcRaw.boardWidth || "standard") === "wide";
      const calcWidth = calcIsWide
        ? lang === "uk"
          ? "Посилена широка 30 см (понад 100 кг / до 150 кг)"
          : lang === "ru"
          ? "Усиленная широкая 30 см (свыше 100 кг / до 150 кг)"
          : "Reinforced Wide 30 cm (>100 kg / up to 330 lbs)"
        : lang === "uk"
        ? "Стандартна ширина 26 см (до 100 кг)"
        : lang === "ru"
        ? "Стандартная ширина 26 см (до 100 кг)"
        : "Standard Width 26 cm (up to 100 kg / 220 lbs)";
      const calcPrice = Number(calcRaw.priceUsd || totalUsd || 475);
      const calcOrderPath = String(calcRaw.prefilledOrderPath || `${localePrefix}/order/?product=${encodeURIComponent(product)}&angle=${calcAngle}&goal=${calcGoal}&step=1#order-form`);
      const calcOrderUrl = calcOrderPath.startsWith("http") ? calcOrderPath : `${siteOrigin}${calcOrderPath}`;
      const calcReopenUrl = `${siteOrigin}${localePrefix}/calculator/?goal=${encodeURIComponent(String(calcRaw.goal || "hernia"))}&weight=${calcWeightLbs}&angle=${calcAngle}`;
      const calcVideoUrl = `${siteOrigin}${localePrefix}/#videos`;
      const calcHeroImg = `${siteOrigin}/images/authentic/hero-full-device-traction.jpg`;
      const calcBoardImg =
        product === "3-piece-travel-board"
          ? `${siteOrigin}/images/products/board-perspective-view.jpg`
          : `${siteOrigin}/images/products/board-door-mount-setup.jpg`;
      const gentleStartAngle = Math.max(8, calcAngle - 3);

      const protocolEmailCopy = (() => {
        if (lang === "uk") {
          return {
            subject: `Ваш персональний план нахилу Evminov (${calcAngle}°) + Гайд`,
            preheader: `Безпечний кут ${calcAngle}°, тяга ${calcPull} lb і підбір розбірного Профілактора Євмінова + відео-демо.`,
            eyebrow: "ПЕРСОНАЛЬНИЙ ПЛАН ЗДОРОВОЇ СПИНИ • З 1996 РОКУ",
            title: `Ваш безпечний план розвантаження: ${calcAngle}°`,
            intro: "Нижче — персональний розрахунок за методикою Євмінова, оптимальна розбірна модель під ваш зріст і вагу, стартовий графік на перший тиждень та офіційне відео методики.",
            kpiAngle: "Кут нахилу",
            kpiPull: "Осьова тяга",
            kpiDisc: "Розвантаження",
            minDay: "хв/день",
            bwLabel: "від ваги тіла",
            profileLabel: "Ваш профіль",
            headUpNote: "Головою вгору (без припливу крові)",
            recTitle: "ІДЕАЛЬНА МОДЕЛЬ ПІД ВАШІ ПАРАМЕТРИ",
            recSpecs: "Світлий (вільха) або Темний (горіх) • Петля Гліссона у подарунок • Гарантія 1 рік",
            fromLabel: "Від",
            ctaOrder: "Замовити Цю Конфігурацію →",
            ctaWhatsApp: "Написати у WhatsApp (+1 747 306-0140)",
            ctaCalc: "Змінити параметри в калькуляторі",
            starterTitle: "Ваш м’який старт: план на перші 14 днів",
            step1Title: `Дні 1–3 • Адаптація (${gentleStartAngle}°)`,
            step1Desc: "5–8 хвилин спокійного лежання головою вгору з плавним диханням — без різких рухів.",
            step2Title: `Дні 4–7 • Цільове розвантаження (${calcAngle}°)`,
            step2Desc: `${calcDuration} хв/день: м’яке подовження хребта + делікатні малоамплітудні вправи для глибоких м’язів.`,
            step3Title: "Тиждень 2+ • Повна гігієна спини",
            step3Desc: "Додайте 3–5 хв розвантаження шиї з Петлею Гліссона (8°–12°), що йде безкоштовно в комплекті.",
            videoBadge: "ОФІЦІЙНЕ ВІДЕО • 4:15",
            videoTitle: "Подивіться Профілактор Євмінова в дії + Гайд по монтажу",
            videoDesc: "Реальна демонстрація методики, вправ і кріплення на стіну чи розбірну стійку-драбинку.",
            videoCta: "Дивитись відео на сайті →",
            whyTitle: "Чому 100 000+ людей обирають Evminov замість інверсійного стола",
            why1: "Голова вище серця — безпечно при тиску та чутливих очах, жодного болю в щиколотках.",
            why2: "Резонансне багатошарове дерево активує глибокі м’язи-стабілізатори, а не просто «тягне».",
            why3: "Розбірні 3- та 2-секційні панелі (до 120 см), 6 офіційних аксесуарів, інвойс HSA/FSA та гарантія 1 рік.",
            exploreTitle: "Корисні розділи та порівняння",
            linkProducts: "Порівняти 3-секційну та 2-секційну моделі",
            linkCompare: "Evminov vs. Інверсійні столи, Teeter, Nubax і Saunders",
            linkCenters: "30 років клінічної спадщини та патенти",
            linkGuides: "Гайди по L4–S1, стенозу, ішіасу та HSA/FSA",
            linkShipping: "Умови доставки по США та Канаді (~2 тижні)",
            linkPortal: "Клієнтський Портал і чекліст монтажу",
            shippingLabel: "Доставка США та Канада:",
            shippingNote: "Міжнародна кур’єрська доставка розбірних моделей займає приблизно 2 тижні. Офіційна гарантія — 1 рік.",
          };
        }
        if (lang === "ru") {
          return {
            subject: `Ваш персональный план наклона Evminov (${calcAngle}°) + Гайд`,
            preheader: `Безопасный угол ${calcAngle}°, тяга ${calcPull} lb и подбор разборного Профилактора Евминова + видео-демо.`,
            eyebrow: "ПЕРСОНАЛЬНЫЙ ПЛАН ЗДОРОВОЙ СПИНЫ • С 1996 ГОДА",
            title: `Ваш безопасный план разгрузки: ${calcAngle}°`,
            intro: "Ниже — персональный расчёт по методике Евминова, оптимальная разборная модель под ваш рост и вес, мягкий стартовый план на первую неделю и официальное видео.",
            kpiAngle: "Угол наклона",
            kpiPull: "Осевая тяга",
            kpiDisc: "Разгрузка",
            minDay: "мин/день",
            bwLabel: "от веса тела",
            profileLabel: "Ваш профиль",
            headUpNote: "Головой вверх (без прилива крови)",
            recTitle: "ИДЕАЛЬНАЯ МОДЕЛЬ ПОД ВАШИ ПАРАМЕТРЫ",
            recSpecs: "Светлый (ольха) или Тёмный (орех) • Петля Глиссона в подарок • Гарантия 1 год",
            fromLabel: "От",
            ctaOrder: "Заказать Эту Конфигурацию →",
            ctaWhatsApp: "Написать в WhatsApp (+1 747 306-0140)",
            ctaCalc: "Изменить параметры в калькуляторе",
            starterTitle: "Ваш мягкий старт: план на первые 14 дней",
            step1Title: `Дни 1–3 • Адаптация (${gentleStartAngle}°)`,
            step1Desc: "5–8 минут спокойного лежания головой вверх с ровным дыханием — без резких движений.",
            step2Title: `Дни 4–7 • Целевая разгрузка (${calcAngle}°)`,
            step2Desc: `${calcDuration} мин/день: мягкое вытяжение позвоночника + деликатные малоамплитудные упражнения.`,
            step3Title: "Неделя 2+ • Полная гигиена спины",
            step3Desc: "Добавьте 3–5 мин разгрузки шеи с Петлёй Глиссона (8°–12°), которая идёт бесплатно в комплекте.",
            videoBadge: "ОФИЦИАЛЬНОЕ ВИДЕО • 4:15",
            videoTitle: "Посмотрите Профилактор Евминова в действии + Гайд по монтажу",
            videoDesc: "Реальная демонстрация методики, упражнений и крепления на стену или разборную стойку-лесенку.",
            videoCta: "Смотреть видео на сайте →",
            whyTitle: "Почему 100 000+ человек выбирают Evminov вместо инверсионного стола",
            why1: "Голова выше сердца — безопасно при давлении и чувствительных глазах, без нагрузки на лодыжки.",
            why2: "Резонансное многослойное дерево активирует глубокие мышцы-стабилизаторы, а не просто «тянет».",
            why3: "Разборные 3- и 2-секционные панели (до 120 см), 6 официальных аксессуаров, чек HSA/FSA и гарантия 1 год.",
            exploreTitle: "Полезные разделы и сравнения",
            linkProducts: "Сравнить 3-секционную и 2-секционную модели",
            linkCompare: "Evminov vs. Инверсионные столы, Teeter, Nubax и Saunders",
            linkCenters: "30 лет клинической истории и патенты",
            linkGuides: "Гайды по L4–S1, стенозу, ишиасу и HSA/FSA",
            linkShipping: "Условия доставки по США и Канаде (~2 недели)",
            linkPortal: "Личный Кабинет и чеклист установки",
            shippingLabel: "Доставка США и Канада:",
            shippingNote: "Международная курьерская доставка разборных моделей занимает около 2 недель. Официальная гарантия — 1 год.",
          };
        }
        if (lang === "de") {
          return {
            subject: `Ihr persönlicher Evminov-Winkelplan (${calcAngle}°) + Guide`,
            preheader: `Sicherer Winkel ${calcAngle}°, ${calcPull} lb Zug & Ihr klappbares Evminov Board + offizielles Demo-Video.`,
            eyebrow: "PERSÖNLICHES WIRBELSÄULEN-PROTOKOLL • SEIT 1996",
            title: `Ihr sicherer Entlastungsplan: ${calcAngle}°`,
            intro: "Unten finden Sie Ihren individuellen Kopf-oben-Winkel, das passende klappbare Evminov Board für Ihre Maße, den sanften 14-Tage-Startplan und unser offizielles Demo-Video.",
            kpiAngle: "Startwinkel",
            kpiPull: "Axialer Zug",
            kpiDisc: "Entlastung",
            minDay: "Min./Tag",
            bwLabel: "Körpergewicht",
            profileLabel: "Ihr Profil",
            headUpNote: "Kopf oben (kein Blutstau)",
            recTitle: "PASSENDES EVMINOV BOARD FÜR IHR PROFIL",
            recSpecs: "Hell (Erle) oder Dunkel (Walnuss) • Gratis Glisson-Schlaufe • 1 Jahr Garantie",
            fromLabel: "Ab",
            ctaOrder: "Dieses Setup Konfigurieren →",
            ctaWhatsApp: "Per WhatsApp fragen (+1 747 306-0140)",
            ctaCalc: "Rechner erneut öffnen",
            starterTitle: "Ihr sanfter 14-Tage-Startplan",
            step1Title: `Tage 1–3 • Eingewöhnung (${gentleStartAngle}°)`,
            step1Desc: "5–8 Minuten ruhiges Liegen mit Kopf über Herzhöhe und entspannter Nasenatmung.",
            step2Title: `Tage 4–7 • Ziel-Entlastung (${calcAngle}°)`,
            step2Desc: `${calcDuration} Min./Tag sanfte Längsstreckung + kleine Mikrobewegungen für tiefe Stabilisatoren.`,
            step3Title: "Woche 2+ • Komplette Rückenhygiene",
            step3Desc: "Ergänzen Sie 3–5 Min. sanfte Nackenentlastung mit der gratis enthaltenen Glisson-Schlaufe (8°–12°).",
            videoBadge: "OFFIZIELLES VIDEO • 4:15",
            videoTitle: "Evminov Board in Aktion + Aufbau- & Montageguide ansehen",
            videoDesc: "Echte Übungsdemonstration, Wandmontage und der zerlegbare 4-teilige Ständer.",
            videoCta: "Offizielle Videos ansehen →",
            whyTitle: "Warum 100.000+ Nutzer Evminov der 90°-Inversionsbank vorziehen",
            why1: "Kopf bleibt ruhig über dem Herzen — kein Augen-/Blutdruckanstieg und kein Knöcheldruck.",
            why2: "Federndes Resonanzholz kombiniert Dekompression mit aktivem Tiefenmuskel-Training.",
            why3: "Zerlegbare 3- & 2-teilige Modelle, 6 Original-Zubehörteile, HSA/FSA-Beleg & 1 Jahr Garantie.",
            exploreTitle: "Hilfreiche Guides & Vergleiche",
            linkProducts: "3-teilige & 2-teilige Klappboards vergleichen",
            linkCompare: "Evminov vs. Inversionsbänke, Teeter, Nubax & Saunders",
            linkCenters: "30 Jahre Geschichte & internationale Patente",
            linkGuides: "Ratgeber: L4–S1, Stenose, Ischias & HSA/FSA",
            linkShipping: "Versand in die USA & nach Kanada (~2 Wochen)",
            linkPortal: "Patientenportal & Montage-Checkliste",
            shippingLabel: "Versand USA & Kanada:",
            shippingNote: "Internationaler Kurierversand für klappbare Modelle dauert ca. 2 Wochen. Inklusive 1 Jahr Garantie.",
          };
        }
        if (lang === "es") {
          return {
            subject: `Tu Plan Personalizado Evminov (${calcAngle}°) + Guía de Inicio`,
            preheader: `Ángulo seguro ${calcAngle}°, tracción de ${calcPull} lb, tabla plegable ideal y video demostrativo oficial.`,
            eyebrow: "PROTOCOLO ESPINAL PERSONALIZADO • DESDE 1996",
            title: `Tu Plan Seguro de Descarga: ${calcAngle}°`,
            intro: "Aquí tienes tu ángulo cabeza arriba personalizado, la tabla plegable Evminov ideal para tu peso y estatura, tu rutina suave de 14 días y nuestro video oficial.",
            kpiAngle: "Ángulo Ideal",
            kpiPull: "Tracción Suave",
            kpiDisc: "Descarga Discal",
            minDay: "min/día",
            bwLabel: "peso corporal",
            profileLabel: "Tu perfil",
            headUpNote: "Cabeza arriba (cero mareo)",
            recTitle: "TABLA EVMINOV IDEAL PARA TU PERFIL",
            recSpecs: "Claro (Aliso) u Oscuro (Nogal) • Lazo Glisson gratis • Garantía de 1 Año",
            fromLabel: "Desde",
            ctaOrder: "Configurar Esta Tabla Ahora →",
            ctaWhatsApp: "Consultar por WhatsApp (+1 747 306-0140)",
            ctaCalc: "Reabrir Mi Calculadora",
            starterTitle: "Tu Inicio Suave: Plan de 14 Días",
            step1Title: `Días 1–3 • Adaptación (${gentleStartAngle}°)`,
            step1Desc: "5–8 minutos tumbado cabeza arriba con respiración nasal calma — sin forzar.",
            step2Title: `Días 4–7 • Descarga Objetivo (${calcAngle}°)`,
            step2Desc: `${calcDuration} min/día de elongación axial suave + micro-movimientos para estabilizadores profundos.`,
            step3Title: "Semana 2+ • Higiene Espinal Completa",
            step3Desc: "Añade 3–5 min de alivio cervical con el Lazo de Glisson incluido gratis (8°–12°).",
            videoBadge: "VIDEO OFICIAL • 4:15",
            videoTitle: "Ver la Tabla Evminov en Acción + Guía de Montaje",
            videoDesc: "Demostración real del método, ejercicios en casa y soporte desmontable de 4 piezas.",
            videoCta: "Ver Videos Oficiales →",
            whyTitle: "Por qué 100,000+ usuarios eligen Evminov frente a mesas de inversión",
            why1: "Cabeza siempre sobre el corazón — sin picos de presión ocular ni dolor de tobillos.",
            why2: "Madera resonante multicapa que fortalece los músculos profundos mientras descarga los discos.",
            why3: "Modelos plegables de 3 y 2 piezas, 6 accesorios oficiales, recibo HSA/FSA y Garantía de 1 Año.",
            exploreTitle: "Explora Guías y Comparativas",
            linkProducts: "Comparar Tablas Plegables de 3 y 2 Piezas",
            linkCompare: "Evminov vs. Inversión, Teeter, Nubax y Saunders",
            linkCenters: "30 Años de Historia Clínica y Patentes",
            linkGuides: "Guías: L4–S1, Estenosis, Ciática y HSA/FSA",
            linkShipping: "Envíos a EE. UU. y Canadá (~2 semanas)",
            linkPortal: "Portal del Paciente y Guía de Montaje",
            shippingLabel: "Envío EE. UU. y Canadá:",
            shippingNote: "Entrega por mensajería internacional en aproximadamente 2 semanas. Garantía oficial de 1 año.",
          };
        }
        if (lang === "fr") {
          return {
            subject: `Votre Plan Personnalisé Evminov (${calcAngle}°) + Guide`,
            preheader: `Angle sûr ${calcAngle}°, traction ${calcPull} lb, planche pliable recommandée et vidéo officielle.`,
            eyebrow: "PROTOCOLE VERTÉBRAL PERSONNALISÉ • DEPUIS 1996",
            title: `Votre Plan de Décharge Sûr : ${calcAngle}°`,
            intro: "Voici votre angle tête en haut personnalisé, le modèle démontable Evminov adapté à votre gabarit, votre routine douce de 14 jours et notre vidéo officielle.",
            kpiAngle: "Angle Sûr",
            kpiPull: "Traction Douce",
            kpiDisc: "Décharge Discale",
            minDay: "min/jour",
            bwLabel: "du poids",
            profileLabel: "Votre profil",
            headUpNote: "Tête en haut (zéro afflux sanguin)",
            recTitle: "PLANCHE EVMINOV IDÉALE POUR VOTRE PROFIL",
            recSpecs: "Clair (Aulne) ou Foncé (Noyer) • Sangle Glisson offerte • Garantie 1 An",
            fromLabel: "Dès",
            ctaOrder: "Configurer Cette Planche →",
            ctaWhatsApp: "Écrire sur WhatsApp (+1 747 306-0140)",
            ctaCalc: "Rouvrir Mon Calculateur",
            starterTitle: "Votre Démarrage Doux : Plan 14 Jours",
            step1Title: `Jours 1–3 • Adaptation (${gentleStartAngle}°)`,
            step1Desc: "5–8 minutes allongé tête en haut avec respiration calme — zéro tension.",
            step2Title: `Jours 4–7 • Décharge Cible (${calcAngle}°)`,
            step2Desc: `${calcDuration} min/jour d'allongement axial doux + micro-mouvements profonds.`,
            step3Title: "Semaine 2+ • Hygiène Dorsale Complète",
            step3Desc: "Ajoutez 3–5 min de détente cervicale avec la Sangle de Glisson offerte (8°–12°).",
            videoBadge: "VIDÉO OFFICIELLE • 4:15",
            videoTitle: "Voir la Planche Evminov en Action + Guide d'Installation",
            videoDesc: "Démonstration réelle des exercices, fixation murale et support-échelle 4 pièces.",
            videoCta: "Regarder les Vidéos →",
            whyTitle: "Pourquoi 100 000+ utilisateurs choisissent Evminov plutôt que l'inversion",
            why1: "Tête au-dessus du cœur — sans pression oculaire ni blocage douloureux des chevilles.",
            why2: "Bois résonant multicouche associant décompression douce et renforcement profond.",
            why3: "Modèles démontables 3 et 2 pièces, 6 accessoires officiels, reçu détaillé et Garantie 1 An.",
            exploreTitle: "Explorer Guides & Comparatifs",
            linkProducts: "Comparer les Planches 3 et 2 Pièces",
            linkCompare: "Evminov vs. Inversion, Teeter, Nubax & Saunders",
            linkCenters: "30 Ans d'Héritage Clinique & Brevets",
            linkGuides: "Guides : L4–S1, Sténose, Sciatique & Avantages",
            linkShipping: "Livraison Canada & États-Unis (~2 semaines)",
            linkPortal: "Portail Patient & Guide de Montage",
            shippingLabel: "Livraison Canada & USA :",
            shippingNote: "Livraison internationale suivie en environ 2 semaines. Garantie fabricant officielle de 1 an.",
          };
        }
        return {
          subject: `Your Custom Evminov Spine Plan (${calcAngle}°) + Setup Guide`,
          preheader: `Your safe ${calcAngle}° head-up angle, ${calcPull} lb pull & best-fit folding Evminov Board + official 4-min demo.`,
          eyebrow: "PERSONALIZED SPINE DECOMPRESSION PLAN • EST. 1996",
          title: `Your Custom Head-Up Spine Plan: ${calcAngle}°`,
          intro: "Here is your personalized biomechanical calculation, the best-fit folding Evminov Board for your height and weight, your gentle 14-day starter plan, and our official demonstration video.",
          kpiAngle: "Target Angle",
          kpiPull: "Axial Pull",
          kpiDisc: "Disc Relief",
          minDay: "min/day",
          bwLabel: "bodyweight",
          profileLabel: "Your Profile",
          headUpNote: "Head Upright (Zero Blood Rush)",
          recTitle: "BEST-FIT EVMINOV BOARD FOR YOUR PROFILE",
          recSpecs: "Light (Warm Amber Alder) or Dark (Walnut Pine) • Free Glisson Loop • 1-Yr Warranty",
          fromLabel: "From",
          ctaOrder: "Order This Exact Setup →",
          ctaWhatsApp: "Chat on WhatsApp (+1 747 306-0140)",
          ctaCalc: "Adjust My Calculator",
          starterTitle: "Your Gentle 14-Day Starter Routine",
          step1Title: `Days 1–3 • Calm Acclimation (${gentleStartAngle}°)`,
          step1Desc: "5–8 minutes of relaxed head-up unloading with slow nasal breathing — zero straining.",
          step2Title: `Days 4–7 • Target Unloading (${calcAngle}°)`,
          step2Desc: `${calcDuration} min/day smooth axial lengthening + tiny pain-free deep stabilizer movements.`,
          step3Title: "Week 2+ • Complete Spine Hygiene",
          step3Desc: "Add 3–5 min of gentle cervical unloading with your free cotton-padded Glisson Loop (8°–12°).",
          videoBadge: "OFFICIAL DEMO • 4:15",
          videoTitle: "Watch the Evminov Board in Action + Home Setup Guide",
          videoDesc: "See real head-up exercises, 16\" wall mounting, and the 4-piece no-drill ladder stand.",
          videoCta: "Watch Official Videos →",
          whyTitle: "Why 100,000+ Users Choose Evminov Over 90° Inversion Tables",
          why1: "Head stays calmly above heart — safe for sensitive blood/eye pressure with zero ankle clamping.",
          why2: "Resonant multi-layer wood deck pairs decompression with active deep paraspinal strengthening.",
          why3: "Compact 3-piece & 2-piece folding models, 6 factory accessories, itemized HSA/FSA receipt & 1-Year Warranty.",
          exploreTitle: "Explore Clinical Guides & 2026 Comparisons",
          linkProducts: "Compare 3-Piece & 2-Piece Folding Boards",
          linkCompare: "Evminov vs. Inversion Tables, Teeter, Nubax & Saunders",
          linkCenters: "30 Years Clinical Heritage & Global Patents",
          linkGuides: "2026 Guides: L4–S1, Stenosis, High BP & HSA/FSA",
          linkShipping: "US & Canada Courier Delivery (~2 Weeks)",
          linkPortal: "Patient Portal & 16\" Mounting Checklist",
          shippingLabel: "US & Canada Delivery:",
          shippingNote: "Tracked international courier delivery for folding models takes approximately 2 weeks. Backed by a 1-Year Warranty.",
        };
      })();

      const subjectBase =
        mode === "protocol_lead"
          ? protocolEmailCopy.subject
          : mode === "warranty_registration"
          ? `Evminov 1-Year Structural Warranty Registered (${orderRef})`
          : `Evminov Reservation Confirmed — ${orderRef}`;

      // Dark-Mode-Safe Luxury Brochure HTML (Zero linear-gradient behind text; explicit solid surfaces for Gmail iOS/Android & Apple Mail)
      const protocolCustomerHtml = `<!DOCTYPE html>
<html lang="${safeLang}" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <meta name="color-scheme" content="light only" />
  <meta name="supported-color-schemes" content="light only" />
  <title>${protocolEmailCopy.subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <!-- Inbox Preview Preheader -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:#f1f5f9;">
    ${protocolEmailCopy.preheader}
  </div>

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1f5f9;">
    <tr>
      <td align="center" style="padding:20px 10px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #cbd5e1;">
          <!-- 1. Brand Header Bar -->
          <tr>
            <td style="background-color:#0b1f3a;padding:24px 24px 20px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <span style="display:inline-block;background-color:#064e3b;border:1px solid #10b981;border-radius:999px;padding:4px 12px;font-size:10px;font-weight:800;letter-spacing:1px;color:#6ee7b7;text-transform:uppercase;">
                      ${protocolEmailCopy.eyebrow}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:12px;">
                    <h1 style="margin:0;font-size:23px;line-height:1.22;font-weight:900;color:#ffffff;">
                      ${protocolEmailCopy.title}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:8px;">
                    <p style="margin:0;font-size:13px;line-height:1.55;color:#cbd5e1;">
                      ${protocolEmailCopy.intro}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 2. Authentic Lifestyle Hero Visual -->
          <tr>
            <td style="background-color:#0b1f3a;padding:0;">
              <a href="${calcOrderUrl}" style="display:block;text-decoration:none;">
                <img src="${calcHeroImg}" alt="Evminov Spine Decompression Board — Head-Up Inclined Unloading" width="600" style="display:block;width:100%;max-width:600px;height:auto;border:0;" />
              </a>
            </td>
          </tr>

          <!-- 3. Main Brochure Body -->
          <tr>
            <td style="padding:22px 20px 26px;background-color:#ffffff;">
              <!-- 3-Column Telemetry Strip (Solid light cards + nowrap numbers = crisp in Light & Dark Mode) -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:18px;">
                <tr>
                  <td width="32%" valign="top" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-top:3px solid #059669;border-radius:12px;padding:12px 6px;text-align:center;">
                    <div style="font-size:21px;line-height:1.1;font-weight:900;color:#059669;white-space:nowrap;">${calcAngle}°</div>
                    <div style="font-size:11px;font-weight:800;color:#0f172a;margin-top:5px;">${protocolEmailCopy.kpiAngle}</div>
                    <div style="font-size:10px;color:#64748b;margin-top:2px;white-space:nowrap;">${calcSafeWindow}</div>
                  </td>
                  <td width="2%">&nbsp;</td>
                  <td width="32%" valign="top" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-top:3px solid #d97706;border-radius:12px;padding:12px 6px;text-align:center;">
                    <div style="font-size:21px;line-height:1.1;font-weight:900;color:#b45309;white-space:nowrap;">${calcPull}&nbsp;lb</div>
                    <div style="font-size:11px;font-weight:800;color:#0f172a;margin-top:5px;">${protocolEmailCopy.kpiPull}</div>
                    <div style="font-size:10px;color:#64748b;margin-top:2px;white-space:nowrap;">${calcPctBw}% ${protocolEmailCopy.bwLabel}</div>
                  </td>
                  <td width="2%">&nbsp;</td>
                  <td width="32%" valign="top" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-top:3px solid #0284c7;border-radius:12px;padding:12px 6px;text-align:center;">
                    <div style="font-size:21px;line-height:1.1;font-weight:900;color:#0369a1;white-space:nowrap;">-${calcDiscPct}%</div>
                    <div style="font-size:11px;font-weight:800;color:#0f172a;margin-top:5px;">${protocolEmailCopy.kpiDisc}</div>
                    <div style="font-size:10px;color:#64748b;margin-top:2px;white-space:nowrap;">${calcDuration} ${protocolEmailCopy.minDay}</div>
                  </td>
                </tr>
              </table>

              <!-- Goal & Profile Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #0d9488;border-radius:12px;margin-bottom:20px;">
                <tr>
                  <td style="padding:15px 16px;">
                    <div style="font-size:11px;font-weight:800;color:#0f766e;text-transform:uppercase;letter-spacing:0.6px;">${calcGoalLabel}</div>
                    <p style="margin:6px 0 0;font-size:13px;line-height:1.55;color:#1e293b;">${calcGoalDesc}</p>
                    <p style="margin:10px 0 0;font-size:12px;line-height:1.45;color:#475569;">
                      <strong style="color:#0f172a;">${protocolEmailCopy.profileLabel}:</strong> ${calcWeightLbs} lbs (${calcWeightKg} kg) • ${calcHeightLabel} (${calcHeightCm} cm) • ${protocolEmailCopy.headUpNote}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Best-Fit Board Spotlight (Solid #ffffff surface + dark text = 100% immune to Gmail Dark Mode white-on-white!) -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#ffffff;border:2px solid #059669;border-radius:16px;overflow:hidden;margin-bottom:20px;">
                <tr>
                  <td style="background-color:#059669;padding:10px 16px;">
                    <span style="font-size:11px;font-weight:800;letter-spacing:0.8px;color:#ffffff;text-transform:uppercase;">
                      ★ ${protocolEmailCopy.recTitle}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 16px;background-color:#ffffff;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td valign="top" style="padding-bottom:12px;">
                          <a href="${calcOrderUrl}" style="display:block;text-decoration:none;">
                            <img src="${calcBoardImg}" alt="${calcModel}" width="520" style="display:block;width:100%;max-height:210px;object-fit:cover;border-radius:10px;border:1px solid #e2e8f0;" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 style="margin:0 0 6px;font-size:19px;line-height:1.25;font-weight:900;color:#0f172a;">
                            ${calcModel}
                          </h2>
                          <p style="margin:0;font-size:13px;line-height:1.5;color:#334155;">
                            <strong style="color:#0f172a;">${escapeHtml(calcWidth)}</strong><br/>
                            ${protocolEmailCopy.recSpecs}
                          </p>
                          <p style="margin:12px 0 16px;font-size:22px;line-height:1.2;font-weight:900;color:#047857;">
                            ${protocolEmailCopy.fromLabel} $${calcPrice} ${orderCurrency}
                            <span style="display:block;margin-top:3px;font-size:12px;font-weight:600;color:#475569;">
                              1-Year Warranty • ${isCanadaOrigin ? "Extended Health / HSA Eligible (with Rx)" : "HSA/FSA Eligible (with LMN)"} • ~2 Weeks Delivery
                            </span>
                          </p>
                        </td>
                      </tr>
                      <!-- Full-Width Stacked High-Contrast CTA Buttons -->
                      <tr>
                        <td style="padding-bottom:10px;">
                          <a href="${calcOrderUrl}" style="display:block;background-color:#059669;color:#ffffff;text-align:center;text-decoration:none;font-weight:900;font-size:15px;padding:14px 18px;border-radius:12px;">
                            ${protocolEmailCopy.ctaOrder}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom:10px;">
                          <a href="https://wa.me/17473060140?text=Hello%20Evminov!%20My%20calculator%20angle%20is%20${calcAngle}%C2%B0%20(${calcWeightLbs}%20lbs)%20and%20I%20want%20help%20choosing%20my%20folding%20board." style="display:block;background-color:#16a34a;color:#ffffff;text-align:center;text-decoration:none;font-weight:800;font-size:14px;padding:13px 18px;border-radius:12px;">
                            💬 ${protocolEmailCopy.ctaWhatsApp}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="${calcReopenUrl}" style="display:block;background-color:#f8fafc;color:#0f172a;text-align:center;text-decoration:none;font-weight:700;font-size:13px;padding:11px 16px;border-radius:12px;border:1px solid #cbd5e1;">
                            ${protocolEmailCopy.ctaCalc}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- 14-Day Gentle Starter Plan -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;margin-bottom:20px;">
                <tr>
                  <td style="padding:18px 16px;">
                    <h3 style="margin:0 0 12px;font-size:15px;font-weight:900;color:#0f172a;">${protocolEmailCopy.starterTitle}</h3>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="28" valign="top" style="padding-bottom:10px;">
                          <span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:999px;background-color:#059669;color:#ffffff;font-size:11px;font-weight:900;">1</span>
                        </td>
                        <td valign="top" style="padding-bottom:10px;">
                          <div style="font-size:13px;font-weight:800;color:#0f172a;">${protocolEmailCopy.step1Title}</div>
                          <div style="font-size:12px;line-height:1.5;color:#475569;margin-top:2px;">${protocolEmailCopy.step1Desc}</div>
                        </td>
                      </tr>
                      <tr>
                        <td width="28" valign="top" style="padding-bottom:10px;">
                          <span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:999px;background-color:#0284c7;color:#ffffff;font-size:11px;font-weight:900;">2</span>
                        </td>
                        <td valign="top" style="padding-bottom:10px;">
                          <div style="font-size:13px;font-weight:800;color:#0f172a;">${protocolEmailCopy.step2Title}</div>
                          <div style="font-size:12px;line-height:1.5;color:#475569;margin-top:2px;">${protocolEmailCopy.step2Desc}</div>
                        </td>
                      </tr>
                      <tr>
                        <td width="28" valign="top">
                          <span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:999px;background-color:#0f172a;color:#ffffff;font-size:11px;font-weight:900;">3</span>
                        </td>
                        <td valign="top">
                          <div style="font-size:13px;font-weight:800;color:#0f172a;">${protocolEmailCopy.step3Title}</div>
                          <div style="font-size:12px;line-height:1.5;color:#475569;margin-top:2px;">${protocolEmailCopy.step3Desc}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Official Video Demo Banner -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#0b1f3a;border-radius:14px;margin-bottom:20px;">
                <tr>
                  <td style="padding:18px 16px;">
                    <span style="display:inline-block;background-color:#065f46;color:#6ee7b7;font-size:10px;font-weight:800;letter-spacing:0.8px;padding:3px 10px;border-radius:999px;text-transform:uppercase;">
                      ▶ ${protocolEmailCopy.videoBadge}
                    </span>
                    <div style="margin-top:8px;font-size:15px;font-weight:900;color:#ffffff;">${protocolEmailCopy.videoTitle}</div>
                    <p style="margin:5px 0 12px;font-size:12px;line-height:1.5;color:#cbd5e1;">${protocolEmailCopy.videoDesc}</p>
                    <a href="${calcVideoUrl}" style="display:inline-block;background-color:#10b981;color:#052e16;text-decoration:none;font-weight:900;font-size:13px;padding:10px 16px;border-radius:10px;">
                      ${protocolEmailCopy.videoCta}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Why Evminov Highlights -->
              <div style="margin-bottom:20px;">
                <h3 style="margin:0 0 10px;font-size:15px;font-weight:900;color:#0f172a;">${protocolEmailCopy.whyTitle}</h3>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:13px;line-height:1.55;color:#334155;">
                  <tr><td valign="top" width="20" style="color:#059669;font-weight:900;padding-bottom:6px;">✓</td><td style="padding-bottom:6px;">${protocolEmailCopy.why1}</td></tr>
                  <tr><td valign="top" width="20" style="color:#059669;font-weight:900;padding-bottom:6px;">✓</td><td style="padding-bottom:6px;">${protocolEmailCopy.why2}</td></tr>
                  <tr><td valign="top" width="20" style="color:#059669;font-weight:900;">✓</td><td>${protocolEmailCopy.why3}</td></tr>
                </table>
              </div>

              <!-- Website Resource Hub -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;margin-bottom:18px;">
                <tr>
                  <td style="padding:16px;">
                    <h3 style="margin:0 0 10px;font-size:14px;font-weight:900;color:#0f172a;">${protocolEmailCopy.exploreTitle}</h3>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:13px;">
                      <tr><td style="padding:7px 0;border-bottom:1px solid #e2e8f0;"><a href="${siteOrigin}${localePrefix}/products/" style="color:#0f766e;font-weight:700;text-decoration:none;">→ ${protocolEmailCopy.linkProducts}</a></td></tr>
                      <tr><td style="padding:7px 0;border-bottom:1px solid #e2e8f0;"><a href="${siteOrigin}${localePrefix}/compare/evminov-vs-inversion-table/" style="color:#0f766e;font-weight:700;text-decoration:none;">→ ${protocolEmailCopy.linkCompare}</a></td></tr>
                      <tr><td style="padding:7px 0;border-bottom:1px solid #e2e8f0;"><a href="${siteOrigin}${localePrefix}/centers/" style="color:#0f766e;font-weight:700;text-decoration:none;">→ ${protocolEmailCopy.linkCenters}</a></td></tr>
                      <tr><td style="padding:7px 0;border-bottom:1px solid #e2e8f0;"><a href="${siteOrigin}${localePrefix}/guides/" style="color:#0f766e;font-weight:700;text-decoration:none;">→ ${protocolEmailCopy.linkGuides}</a></td></tr>
                      <tr><td style="padding:7px 0;border-bottom:1px solid #e2e8f0;"><a href="${siteOrigin}${localePrefix}/shipping/" style="color:#0f766e;font-weight:700;text-decoration:none;">→ ${protocolEmailCopy.linkShipping}</a></td></tr>
                      <tr><td style="padding:7px 0;"><a href="${siteOrigin}${localePrefix}/portal/" style="color:#0f766e;font-weight:700;text-decoration:none;">→ ${protocolEmailCopy.linkPortal}</a></td></tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Shipping Notice -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#fffbeb;border:1px solid #fcd34d;border-radius:12px;margin-bottom:18px;">
                <tr>
                  <td style="padding:12px 14px;font-size:12px;line-height:1.5;color:#78350f;">
                    <strong>${protocolEmailCopy.shippingLabel}</strong> ${protocolEmailCopy.shippingNote}
                  </td>
                </tr>
              </table>

              <!-- Footer -->
              <div style="border-top:1px solid #e2e8f0;padding-top:16px;font-size:11px;line-height:1.6;color:#64748b;">
                <p style="margin:0;"><strong style="color:#0f172a;">${emailCfg.brandHeader}</strong> • ${isCanadaOrigin ? "Nationwide Canadian Delivery" : "4525 San Fernando Rd, Unit H, Glendale, CA 91204, USA"}</p>
                <p style="margin:4px 0 0;">WhatsApp (Fastest): <a href="https://wa.me/17473060140" style="color:#059669;font-weight:700;text-decoration:none;">+1 (747) 306-0140</a> • Email: <a href="mailto:${emailCfg.supportEmail}" style="color:#0f766e;text-decoration:none;">${emailCfg.supportEmail}</a></p>
                <p style="margin:8px 0 0;font-size:10px;color:#94a3b8;">General Wellness &amp; Spine Conditioning Equipment (HTS 9506.91.0030). Not intended to diagnose, treat, cure, or prevent any disease. HSA/FSA pre-tax reimbursement requires a Letter of Medical Necessity (LMN) from your healthcare provider and plan approval.</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

      const detailsRowsHtml = `
        <table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:13px;">
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;width:38%;"><strong>Full Name</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeName}</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Email</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeEmail}</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Phone</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safePhone}</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>State / Country</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeStateOrCountry}</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Shipping Address</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeAddress}</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Model</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeProduct} (${safeFinish})</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Fulfillment</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeShipping}${includeStand ? " + Free-Standing Stand" : ""}</td></tr>
          <tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>HSA/FSA Receipt</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${includeHsaDoc ? "Yes (Itemized)" : "No"}</td></tr>
          ${totalUsd > 0 ? `<tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Estimated Total</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f766e;font-weight:700;">$${totalUsd} ${orderCurrency}</td></tr>` : ""}
          ${safeCustomerNotes ? `<tr><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#64748b;"><strong>Customer Notes</strong></td><td style="padding:7px 10px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeCustomerNotes}</td></tr>` : ""}
        </table>
      `;

      const customerHtml = `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:#0b1f3a;color:#fff;padding:24px;">
            <h1 style="margin:0;font-size:20px;">${emailCfg.brandHeader}</h1>
            <p style="margin:6px 0 0;font-size:12px;color:#34d399;">Reference: ${orderRef}</p>
          </div>
          <div style="padding:24px;color:#1e293b;font-size:14px;line-height:1.6;">
            <p>Hello ${safeName},</p>
            <p>Thank you for contacting Evminov Spine Systems. Our team has received your request with the following details:</p>
            ${detailsRowsHtml}
            <p>Track your order status anytime in your <a href="${emailCfg.siteOrigin}/portal/" style="color:#0f766e;font-weight:bold;">Patient Portal</a>. We will follow up within 1 business day with shipping confirmation and your itemized invoice${includeHsaDoc ? (isCanadaOrigin ? " (Extended Health / HSA ready)" : " (HSA/FSA ready)") : ""}.</p>
            <p style="font-size:12px;color:#64748b;">Evminov Spine Systems • WhatsApp: <a href="https://wa.me/17473060140" style="color:#059669;font-weight:700;text-decoration:none;">+1 (747) 306-0140</a> • ${emailCfg.supportEmail}</p>
          </div>
        </div>
      `;

      const adminHtml = `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:#0b1f3a;color:#fff;padding:24px;">
            <h1 style="margin:0;font-size:20px;">NEW ORDER / LEAD — ${orderRef}</h1>
            <p style="margin:6px 0 0;font-size:12px;color:#34d399;">Mode: ${escapeHtml(mode)} • Locale: ${safeLang}</p>
          </div>
          <div style="padding:24px;color:#1e293b;font-size:14px;line-height:1.6;">
            ${detailsRowsHtml}
            ${safeAttribution ? `<p style="font-size:12px;color:#64748b;"><strong>Traffic Source:</strong> ${safeAttribution}</p>` : ""}
            <p style="margin-top:18px;">
              <a href="${emailCfg.siteOrigin}/admin/" style="display:inline-block;background:#0f766e;color:#fff;text-decoration:none;font-weight:700;padding:10px 18px;border-radius:8px;">Open in Admin Dashboard</a>
            </p>
            <p style="font-size:12px;color:#64748b;">Hit Reply in Gmail to respond directly to ${safeEmail}.</p>
          </div>
        </div>
      `;

      const threadId = `<order-${orderRef.toLowerCase()}@${emailCfg.threadDomain}>`;
      const finalCustomerHtml =
        mode === "protocol_lead" ? protocolCustomerHtml : customerHtml;

      tasks.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${emailCfg.apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: emailCfg.fromOrders,
            to: [email],
            ...(mode === "protocol_lead" ? {} : { cc: [emailCfg.ordersEmail] }),
            reply_to: mode === "protocol_lead" ? emailCfg.supportEmail : emailCfg.ordersEmail,
            subject: subjectBase,
            headers: {
              References: threadId,
            },
            html: finalCustomerHtml,
          }),
        })
      );

      tasks.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${emailCfg.apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: emailCfg.fromOrders,
            to: [emailCfg.ordersEmail],
            reply_to: email,
            subject:
              mode === "protocol_lead"
                ? `[Calculator Lead ${isCanadaOrigin ? "CA" : "US"}] ${calcAngle}° / ${calcModel} — ${email}`
                : `[Admin ${isCanadaOrigin ? "CA" : "US"}] ${subjectBase} — ${name || email}`,
            html: adminHtml,
          }),
        })
      );
    }

    await Promise.allSettled(tasks);

    return new Response(
      JSON.stringify({
        ok: true,
        orderRef,
        checkoutUrl,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  } catch {
    return new Response(
      JSON.stringify({ ok: false, error: "Order submission error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
