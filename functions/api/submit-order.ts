import {
  AuthEnv,
  getRegionalEmailConfig,
  getSessionUser,
  normalizeEmail,
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
    if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
      const tgText = [
        mode === "protocol_lead"
          ? `📐 New Evminov Calculator Lead (${orderRef})`
          : mode === "warranty_registration"
          ? `🛡️ New 1-Year Warranty Registration (${orderRef})`
          : `🌲 New Evminov Board Reservation (${orderRef})`,
        `Product: ${productName} (${finish})`,
        `Shipping: ${shipping}${includeStand ? " + Free-Standing Stand" : ""}`,
        totalUsd > 0 ? `Est. Total: $${totalUsd} USD` : "",
        `HSA/FSA Receipt: ${includeHsaDoc ? "Yes" : "No"}`,
        `Name: ${name || "N/A"}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "",
        `Destination: ${stateOrCountry}${address ? ` — ${address}` : ""}`,
        notes ? `Notes: ${notes}` : "",
        `Locale: ${lang}`,
        `Admin: ${emailCfg.siteOrigin}/admin/`,
      ]
        .filter(Boolean)
        .join("\n");

      tasks.push(
        fetch(
          `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: env.TELEGRAM_CHAT_ID,
              text: tgText,
            }),
          }
        )
      );
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
      const calcWidth = String(calcRaw.boardWidth || "standard") === "wide" ? "Wide Heavy-Duty (up to 330 lbs)" : "Standard Width (up to 220 lbs)";
      const calcPrice = Number(calcRaw.priceUsd || totalUsd || 475);
      const calcOrderPath = String(calcRaw.prefilledOrderPath || `${localePrefix}/order/?product=${encodeURIComponent(product)}&angle=${calcAngle}&goal=${calcGoal}&step=1#order-form`);
      const calcOrderUrl = calcOrderPath.startsWith("http") ? calcOrderPath : `${siteOrigin}${calcOrderPath}`;
      const calcReopenUrl = `${siteOrigin}${localePrefix}/calculator/?goal=${encodeURIComponent(String(calcRaw.goal || "hernia"))}&weight=${calcWeightLbs}&angle=${calcAngle}`;

      const protocolEmailCopy = (() => {
        if (lang === "uk") {
          return {
            subject: `Ваш персональний план нахилу Evminov (${calcAngle}°) + Бонуси`,
            eyebrow: "ПЕРСОНАЛЬНИЙ ПЛАН ЗДОРОВОЇ СПИНИ • З 1996 РОКУ",
            title: "Ваші результати біомеханічного калькулятора Evminov",
            intro: "Дякуємо, що скористалися нашим калькулятором! Нижче — ваш персональний безпечний кут нахилу, рекомендована модель дошки Євмінова та корисні матеріали, які допоможуть почати заняття вдома без ризику.",
            kpiAngle: "Рекомендований кут",
            kpiPull: "М'яка осьова тяга",
            kpiDisc: "Зниження тиску на диски",
            minDay: "хв/день",
            recTitle: "ІДЕАЛЬНА МОДЕЛЬ ДЛЯ ВАШИХ ПАРАМЕТРІВ",
            ctaOrder: "Замовити Цю Конфігурацію →",
            ctaCalc: "Відкрити Мій Калькулятор",
            whyTitle: "Чому 100 000+ користувачів обирають Evminov замість інверсійного столу?",
            why1: "Голова вище серця — нуль припливу крові до очей, запаморочення та затиску щиколоток.",
            why2: "Резонансна деревина (Natural Warm Amber Alder або Dark Walnut Pine) + активація глибоких м'язів-стабілізаторів.",
            why3: "Безкоштовна Петля Гліссона в комплекті, 60-денний тест-драйв вдома та гарантія 1 рік.",
            exploreTitle: "Корисні розділи на нашому сайті",
            linkProducts: "Порівняти 2-Piece та 3-Piece дошки",
            linkCompare: "Evminov vs. Інверсійні столи (3D-порівняння)",
            linkCenters: "30 років клінічної історії та відео вправ",
            linkGuides: "Гайди по грижах L4–S1, ішіасу та поставі",
            linkShipping: "Доставка до США та Канади (~2 тижні)",
            linkPortal: "Клієнтський Портал і Гайд по монтажу",
            shippingNote: "Актуальна доставка до США та Канади зараз займає ~2 тижні прямою відправкою. З Нового року повернеться швидка локальна експрес-доставка.",
          };
        }
        if (lang === "ru") {
          return {
            subject: `Ваш персональный план наклона Evminov (${calcAngle}°) + Материалы`,
            eyebrow: "ПЕРСОНАЛЬНЫЙ ПЛАН ЗДОРОВОЙ СПИНЫ • С 1996 ГОДА",
            title: "Ваши результаты биомеханического калькулятора Evminov",
            intro: "Спасибо, что воспользовались нашим калькулятором! Ниже — ваш персональный безопасный угол наклона, рекомендованная модель доски Евминова и все полезные материалы нашего сайта.",
            kpiAngle: "Рекомендуемый угол",
            kpiPull: "Мягкая осевая тяга",
            kpiDisc: "Снижение нагрузки на диски",
            minDay: "мин/день",
            recTitle: "ИДЕАЛЬНАЯ МОДЕЛЬ ДЛЯ ВАШИХ ПАРАМЕТРОВ",
            ctaOrder: "Заказать Эту Конфигурацию →",
            ctaCalc: "Открыть Мой Калькулятор",
            whyTitle: "Почему 100 000+ пользователей выбирают Evminov вместо инверсионного стола?",
            why1: "Голова выше сердца — ноль прилива крови к глазам, головокружения и зажима лодыжек.",
            why2: "Резонансная древесина (Natural Warm Amber Alder или Dark Walnut Pine) + активация глубоких мышц-стабилизаторов.",
            why3: "Бесплатная Петля Глиссона в комплекте, 60-дневный тест-драйв дома и гарантия 1 год.",
            exploreTitle: "Полезные разделы нашего сайта",
            linkProducts: "Сравнить складные модели 2-Piece и 3-Piece",
            linkCompare: "Evminov vs. Инверсионные столы (3D-сравнение)",
            linkCenters: "30 лет клинической истории и видео упражнений",
            linkGuides: "Гайды по грыжам L4–S1, ишиасу и осанке",
            linkShipping: "Доставка в США и Канаду (~2 недели)",
            linkPortal: "Личный Кабинет и Инструкция по установке",
            shippingNote: "Сейчас доставка в США и Канаду занимает ~2 недели прямой отправкой. С Нового года вернётся быстрая локальная экспресс-доставка.",
          };
        }
        if (lang === "de") {
          return {
            subject: `Ihr persönlicher Evminov-Winkelplan (${calcAngle}°) & Empfehlungen`,
            eyebrow: "PERSÖNLICHES WIRBELSÄULEN-PROTOKOLL • SEIT 1996",
            title: "Ihre Ergebnisse aus dem Evminov Biomechanik-Rechner",
            intro: "Vielen Dank für die Nutzung unseres Rechners! Hier finden Sie Ihren persönlichen sicheren Neigungswinkel, Ihr passendes Evminov-Board und alle wichtigen Ressourcen unserer Website.",
            kpiAngle: "Empfohlener Winkel",
            kpiPull: "Sanfter Zug",
            kpiDisc: "Bandscheiben-Entlastung",
            minDay: "Min./Tag",
            recTitle: "PASSENDES EVMINOV-MODELL FÜR IHRE DATEN",
            ctaOrder: "Dieses Setup Konfigurieren →",
            ctaCalc: "Meinen Rechner Öffnen",
            whyTitle: "Warum 100.000+ Nutzer das Evminov Board der Inversionsbank vorziehen",
            why1: "Kopf bleibt über dem Herzen — kein Blutstau im Kopf, kein Schwindel und keine Knöchelklemmen.",
            why2: "Resonantes Karpatenholz (Natural Warm Amber Alder oder Dark Walnut Pine) + tiefe Rumpfstabilisatoren.",
            why3: "Gratis Glisson-Schlaufe enthalten, 60-Tage-Testphase zuhause & 1 Jahr Rahmengarantie.",
            exploreTitle: "Entdecken Sie unsere Website-Ressourcen",
            linkProducts: "2-teilige & 3-teilige Klappboards vergleichen",
            linkCompare: "Evminov vs. Inversionsbänke (3D-Vergleich)",
            linkCenters: "30 Jahre klinische Erfahrung & Übungsvideos",
            linkGuides: "Ratgeber zu Bandscheiben L4–S1, Ischias & Haltung",
            linkShipping: "Versand in die USA & nach Kanada (~2 Wochen)",
            linkPortal: "Patientenportal & Montage-Checkliste",
            shippingNote: "Aktuell beträgt die Lieferzeit in die USA & nach Kanada ca. 2 Wochen per Direktversand. Ab Neujahr kehrt der schnellere Express-Versand zurück.",
          };
        }
        if (lang === "es") {
          return {
            subject: `Tu Plan Personalizado de Ángulo Evminov (${calcAngle}°) + Guías`,
            eyebrow: "PROTOCOLO ESPINAL PERSONALIZADO • DESDE 1996",
            title: "Tus Resultados de la Calculadora Biomecánica Evminov",
            intro: "¡Gracias por usar nuestra calculadora! Aquí tienes tu ángulo seguro personalizado, el modelo Evminov ideal para ti y todos los recursos de nuestro sitio web.",
            kpiAngle: "Ángulo Recomendado",
            kpiPull: "Tracción Axial Suave",
            kpiDisc: "Descarga Discal Est.",
            minDay: "min/día",
            recTitle: "MODELO IDEAL PARA TU PERFIL",
            ctaOrder: "Configurar Esta Tabla Ahora →",
            ctaCalc: "Abrir Mi Calculadora",
            whyTitle: "¿Por qué 100,000+ usuarios eligen Evminov frente a mesas de inversión?",
            why1: "Cabeza siempre sobre el corazón: cero presión ocular, mareos ni dolor en tobillos.",
            why2: "Madera resonante (Natural Warm Amber Alder o Dark Walnut Pine) + activación de estabilizadores profundos.",
            why3: "Lazo de Glisson incluido gratis, prueba de 60 días en casa y garantía de 1 año.",
            exploreTitle: "Explora Todo en Nuestro Sitio Web",
            linkProducts: "Comparar Tablas Plegables de 2 y 3 Piezas",
            linkCompare: "Evminov vs. Mesas de Inversión (Comparativa 3D)",
            linkCenters: "30 Años de Historia Clínica y Videos",
            linkGuides: "Guías de Hernia L4–S1, Ciática y Postura",
            linkShipping: "Envíos a EE. UU. y Canadá (~2 semanas)",
            linkPortal: "Portal del Paciente y Guía de Montaje",
            shippingNote: "Actualmente los envíos a EE. UU. y Canadá tardan ~2 semanas por envío directo. El envío exprés local más rápido vuelve en Año Nuevo.",
          };
        }
        if (lang === "fr") {
          return {
            subject: `Votre Plan d'Angle Evminov Personnalisé (${calcAngle}°) + Guides`,
            eyebrow: "PROTOCOLE VERTÉBRAL PERSONNALISÉ • DEPUIS 1996",
            title: "Vos Résultats du Calculateur Biomécanique Evminov",
            intro: "Merci d'avoir utilisé notre calculateur ! Voici votre angle sûr personnalisé, le modèle Evminov recommandé et toutes les ressources utiles de notre site.",
            kpiAngle: "Angle Recommandé",
            kpiPull: "Traction Axiale Douce",
            kpiDisc: "Décharge Discale Est.",
            minDay: "min/jour",
            recTitle: "MODÈLE IDÉAL POUR VOTRE PROFIL",
            ctaOrder: "Configurer Cette Planche →",
            ctaCalc: "Rouvrir Mon Calculateur",
            whyTitle: "Pourquoi 100 000+ utilisateurs choisissent Evminov plutôt que l'inversion ?",
            why1: "Tête au-dessus du cœur : zéro afflux sanguin vers les yeux, zéro vertige, aucune tension aux chevilles.",
            why2: "Bois résonant (Natural Warm Amber Alder ou Dark Walnut Pine) + activation des stabilisateurs profonds.",
            why3: "Boucle de Glisson offerte, essai 60 jours à domicile et garantie structurelle de 1 an.",
            exploreTitle: "Découvrez Toutes Nos Ressources",
            linkProducts: "Comparer nos Planches Pliables 2 et 3 Pièces",
            linkCompare: "Evminov vs. Tables d'Inversion (Comparatif 3D)",
            linkCenters: "30 Ans d'Héritage Clinique & Vidéos",
            linkGuides: "Guides L4–S1, Sciatique & Posture",
            linkShipping: "Livraison États-Unis & Canada (~2 semaines)",
            linkPortal: "Portail Patient & Guide d'Installation",
            shippingNote: "Les livraisons vers les États-Unis et le Canada prennent actuellement ~2 semaines par envoi direct. La livraison express locale reprend au Nouvel An.",
          };
        }
        return {
          subject: `Your Custom Evminov Spine Angle Plan (${calcAngle}°) + Setup Guide`,
          eyebrow: "PERSONALIZED SPINE DECOMPRESSION PLAN • EST. 1996",
          title: "Your Biomechanical Calculator Results Are Ready",
          intro: "Thanks for using the Evminov Biomechanical Calculator! Below is your custom head-up traction angle, your best-fit folding Evminov Board, and direct links to our clinical guides, 3D comparisons, and home setup resources.",
          kpiAngle: "Recommended Angle",
          kpiPull: "Smooth Axial Pull",
          kpiDisc: "Est. Disc Unloading",
          minDay: "min/day",
          recTitle: "BEST-FIT EVMINOV BOARD FOR YOUR PROFILE",
          ctaOrder: "Order This Exact Setup →",
          ctaCalc: "Re-Open My Calculator",
          whyTitle: "Why 100,000+ Users Choose Evminov Over 90° Inversion Tables",
          why1: "Head stays calmly above heart — zero cranial blood rush, dizziness, or clamped ankles.",
          why2: "Resonant wood deck (Natural Warm Amber Alder or Dark Walnut Pine) activates deep spinal stabilizers.",
          why3: "Free Glisson Cervical Loop included, 60-Day Home Trial, HSA/FSA Eligible (with LMN), and 1-Year Warranty.",
          exploreTitle: "Explore Everything on Our Website",
          linkProducts: "Compare 2-Piece & 3-Piece Folding Boards",
          linkCompare: "Evminov vs. Inversion Tables (Interactive 3D)",
          linkCenters: "30 Years Clinical Heritage & Exercise Videos",
          linkGuides: "Home Relief Guides (L4–S1, Sciatica, Posture)",
          linkShipping: "US & Canada Shipping (~2 Weeks Dispatch)",
          linkPortal: "Patient Portal & 16\" Mounting Checklist",
          shippingNote: "Current Shipping Update: All US & Canada orders currently deliver in ~2 weeks via direct dispatch. Faster local express shipping (2–5 days) resumes in the New Year.",
        };
      })();

      const subjectBase =
        mode === "protocol_lead"
          ? protocolEmailCopy.subject
          : mode === "warranty_registration"
          ? `Evminov 1-Year Structural Warranty Registered (${orderRef})`
          : `Evminov Reservation Confirmed — ${orderRef}`;

      const protocolCustomerHtml = `
        <div style="background:#f1f5f9;padding:24px 12px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 12px 32px rgba(11,31,58,0.08);">
            <!-- Dark Navy Hero Header -->
            <div style="background:#0b1f3a;padding:28px 28px 24px;color:#ffffff;">
              <p style="margin:0;font-size:11px;font-weight:800;letter-spacing:1.2px;color:#34d399;text-transform:uppercase;">${protocolEmailCopy.eyebrow}</p>
              <h1 style="margin:8px 0 0;font-size:22px;line-height:1.25;font-weight:900;color:#ffffff;">${protocolEmailCopy.title}</h1>
              <p style="margin:10px 0 0;font-size:13px;line-height:1.55;color:#cbd5e1;">${protocolEmailCopy.intro}</p>
            </div>

            <div style="padding:24px 28px;">
              <!-- 3-Column Biomechanical KPI Dashboard -->
              <table role="presentation" style="width:100%;border-collapse:separate;border-spacing:8px 0;margin:0 -8px 20px;">
                <tr>
                  <td style="width:33.3%;background:#0b1f3a;border-radius:14px;padding:14px 10px;text-align:center;">
                    <div style="font-size:24px;font-weight:900;color:#34d399;">${calcAngle}°</div>
                    <div style="font-size:11px;font-weight:700;color:#e2e8f0;margin-top:4px;">${protocolEmailCopy.kpiAngle}</div>
                    <div style="font-size:10px;color:#94a3b8;margin-top:2px;">${calcSafeWindow}</div>
                  </td>
                  <td style="width:33.3%;background:#0b1f3a;border-radius:14px;padding:14px 10px;text-align:center;">
                    <div style="font-size:24px;font-weight:900;color:#fbbf24;">${calcPull} lb</div>
                    <div style="font-size:11px;font-weight:700;color:#e2e8f0;margin-top:4px;">${protocolEmailCopy.kpiPull}</div>
                    <div style="font-size:10px;color:#94a3b8;margin-top:2px;">${calcPctBw}% Bodyweight</div>
                  </td>
                  <td style="width:33.3%;background:#0b1f3a;border-radius:14px;padding:14px 10px;text-align:center;">
                    <div style="font-size:24px;font-weight:900;color:#38bdf8;">-${calcDiscPct}%</div>
                    <div style="font-size:11px;font-weight:700;color:#e2e8f0;margin-top:4px;">${protocolEmailCopy.kpiDisc}</div>
                    <div style="font-size:10px;color:#94a3b8;margin-top:2px;">${calcDuration} ${protocolEmailCopy.minDay}</div>
                  </td>
                </tr>
              </table>

              <!-- Profile & Goal Summary -->
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:16px 18px;margin-bottom:20px;">
                <p style="margin:0;font-size:12px;font-weight:800;color:#0f766e;text-transform:uppercase;letter-spacing:0.6px;">${calcGoalLabel}</p>
                <p style="margin:6px 0 0;font-size:13px;line-height:1.55;color:#334155;">${calcGoalDesc}</p>
                <p style="margin:10px 0 0;font-size:12px;color:#64748b;">
                  <strong>Profile:</strong> ${calcWeightLbs} lbs (${calcWeightKg} kg) • ${calcHeightLabel} (${calcHeightCm} cm) • Head Upright (Zero Blood Rush)
                </p>
              </div>

              <!-- Recommended Model Spotlight + Primary Conversion CTA -->
              <div style="background:linear-gradient(135deg,#ecfdf5 0%,#ffffff 100%);border:2px solid #10b981;border-radius:16px;padding:20px;margin-bottom:22px;">
                <p style="margin:0;font-size:11px;font-weight:800;color:#047857;letter-spacing:0.8px;text-transform:uppercase;">${protocolEmailCopy.recTitle}</p>
                <h2 style="margin:6px 0 4px;font-size:18px;font-weight:900;color:#0f172a;">${calcModel}</h2>
                <p style="margin:0;font-size:13px;color:#334155;">${escapeHtml(calcWidth)} • Natural Warm Amber Alder / Dark Walnut Pine • Free Glisson Loop</p>
                <p style="margin:10px 0 16px;font-size:20px;font-weight:900;color:#0f766e;">From $${calcPrice} ${orderCurrency} <span style="font-size:12px;font-weight:600;color:#475569;">(60-Day Trial • 1-Yr Warranty • ${isCanadaOrigin ? "Extended Health / HSA" : "HSA/FSA with LMN"})</span></p>
                <div>
                  <a href="${calcOrderUrl}" style="display:inline-block;background:#10b981;color:#052e16;text-decoration:none;font-weight:900;font-size:14px;padding:13px 24px;border-radius:12px;">${protocolEmailCopy.ctaOrder}</a>
                  <a href="${calcReopenUrl}" style="display:inline-block;margin-left:8px;margin-top:8px;background:#ffffff;color:#0f172a;text-decoration:none;font-weight:700;font-size:13px;padding:11px 18px;border-radius:12px;border:1px solid #cbd5e1;">${protocolEmailCopy.ctaCalc}</a>
                </div>
              </div>

              <!-- Why Evminov Highlights -->
              <div style="margin-bottom:22px;">
                <h3 style="margin:0 0 10px;font-size:15px;font-weight:900;color:#0f172a;">${protocolEmailCopy.whyTitle}</h3>
                <ul style="margin:0;padding-left:18px;color:#334155;font-size:13px;line-height:1.65;">
                  <li style="margin-bottom:6px;">${protocolEmailCopy.why1}</li>
                  <li style="margin-bottom:6px;">${protocolEmailCopy.why2}</li>
                  <li>${protocolEmailCopy.why3}</li>
                </ul>
              </div>

              <!-- Promotional Website Resource Hub -->
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:18px;margin-bottom:18px;">
                <h3 style="margin:0 0 12px;font-size:14px;font-weight:900;color:#0f172a;">${protocolEmailCopy.exploreTitle}</h3>
                <table role="presentation" style="width:100%;border-collapse:collapse;font-size:13px;">
                  <tr>
                    <td style="padding:6px 0;border-bottom:1px solid #e2e8f0;"><a href="${siteOrigin}${localePrefix}/products/" style="color:#0f766e;font-weight:700;text-decoration:none;">→ ${protocolEmailCopy.linkProducts}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;border-bottom:1px solid #e2e8f0;"><a href="${siteOrigin}${localePrefix}/compare/evminov-vs-inversion-table/" style="color:#0f766e;font-weight:700;text-decoration:none;">→ ${protocolEmailCopy.linkCompare}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;border-bottom:1px solid #e2e8f0;"><a href="${siteOrigin}${localePrefix}/centers/" style="color:#0f766e;font-weight:700;text-decoration:none;">→ ${protocolEmailCopy.linkCenters}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;border-bottom:1px solid #e2e8f0;"><a href="${siteOrigin}${localePrefix}/guides/" style="color:#0f766e;font-weight:700;text-decoration:none;">→ ${protocolEmailCopy.linkGuides}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;border-bottom:1px solid #e2e8f0;"><a href="${siteOrigin}${localePrefix}/shipping/" style="color:#0f766e;font-weight:700;text-decoration:none;">→ ${protocolEmailCopy.linkShipping}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;"><a href="${siteOrigin}${localePrefix}/portal/" style="color:#0f766e;font-weight:700;text-decoration:none;">→ ${protocolEmailCopy.linkPortal}</a></td>
                  </tr>
                </table>
              </div>

              <!-- Current 2-Week Shipping Note -->
              <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:12px 14px;font-size:12px;line-height:1.5;color:#92400e;margin-bottom:18px;">
                <strong>Shipping Note:</strong> ${protocolEmailCopy.shippingNote}
              </div>

              <!-- Footer -->
              <div style="border-top:1px solid #e2e8f0;padding-top:16px;font-size:11px;line-height:1.6;color:#64748b;">
                <p style="margin:0;"><strong>Evminov Spine Systems</strong> • 4525 San Fernando Rd, Unit H, Glendale, CA 91204, USA</p>
                <p style="margin:4px 0 0;">WhatsApp (Fastest): <a href="https://wa.me/17473060140" style="color:#059669;font-weight:700;text-decoration:none;">+1 (747) 306-0140</a> • Email: <a href="mailto:${emailCfg.supportEmail}" style="color:#0f766e;text-decoration:none;">${emailCfg.supportEmail}</a></p>
                <p style="margin:8px 0 0;font-size:10px;color:#94a3b8;">General Wellness &amp; Spine Conditioning Equipment (HTS 9506.91.0030). HSA/FSA pre-tax reimbursement requires a Letter of Medical Necessity (LMN) from your healthcare provider and plan approval.</p>
              </div>
            </div>
          </div>
        </div>
      `;

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
