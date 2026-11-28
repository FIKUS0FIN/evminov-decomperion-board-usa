interface WorkersAiBinding {
  run: (
    model: string,
    options: Record<string, unknown>
  ) => Promise<{
    response?: string;
    choices?: Array<{ message?: { content?: string | null } }>;
  }>;
}

interface Env {
  AI?: WorkersAiBinding;
  GEMINI_API_KEY?: string;
}

type ChatLocale = "en" | "es" | "fr" | "de" | "uk" | "ru";

interface QuickLink {
  label: string;
  href: string;
  external?: boolean;
}

function detectLocale(requestedLang: string | undefined, message: string): ChatLocale {
  const txt = message.trim();
  if (/[іїєґІЇЄҐ]/.test(txt)) return "uk";
  if (/[ыэъёЫЭЪЁ]/.test(txt)) return "ru";
  if (/[А-Яа-я]/.test(txt)) {
    return requestedLang === "ru" ? "ru" : "uk";
  }
  if (/[äöüßÄÖÜ]|\b(und|oder|rücken|bandscheibe|gewicht|brett|preis)\b/i.test(txt)) {
    return "de";
  }
  if (/[¿¡ñ]|\b(hola|espalda|precio|tabla|envío|ciática)\b/i.test(txt)) {
    return "es";
  }
  if (/\b(bonjour|dos|prix|planche|livraison|sciatique|merci)\b/i.test(txt)) {
    return "fr";
  }
  if (
    requestedLang === "es" ||
    requestedLang === "fr" ||
    requestedLang === "de" ||
    requestedLang === "uk" ||
    requestedLang === "ru"
  ) {
    return requestedLang;
  }
  return "en";
}

function getLocalePrefix(lang: ChatLocale): string {
  return lang === "en" ? "" : `/${lang}`;
}

function extractAiText(res: {
  response?: string;
  choices?: Array<{ message?: { content?: string | null } }>;
} | null | undefined): string {
  if (!res) return "";
  if (typeof res.response === "string" && res.response.trim()) {
    return res.response.trim();
  }
  const choiceContent = res.choices?.[0]?.message?.content;
  if (typeof choiceContent === "string" && choiceContent.trim()) {
    return choiceContent.trim();
  }
  return "";
}

function buildSystemPrompt(
  isCanada: boolean,
  origin: string,
  lang: ChatLocale,
  pathname: string,
  computedSizingHint: string
): string {
  const currency = isCanada ? "CAD" : "USD";
  const email = isCanada ? "support@evminovcanada.com" : "support@evminovusa.com";
  const pricesBlock = isCanada
    ? `OFFICIAL CANADA PRICING (CAD on evminovcanada.com):
  1. 3-Piece Folding Evminov Board (230–245 cm full length):
     - Standard 26 cm (FOR ALL USERS UP TO 100 kg / 220 lbs and up to 6'4" / 193 cm): $445 CAD Direct / $545 CAD Express
     - Reinforced Wide 30 cm (ONLY FOR USERS OVER 100 kg / 220 lbs OR TALLER THAN 6'4" / 193 cm): $500 CAD Direct / $585 CAD Express
  2. 2-Piece Folding Evminov Board ("Spine Toothbrush" — compact 2 sections only):
     - Standard 26 cm (UP TO 100 kg / 220 lbs): $435 CAD Direct / $540 CAD Express
     - Reinforced Wide 30 cm (OVER 100 kg / 220 lbs): $495 CAD Direct / $580 CAD Express
  - Finishes (both models): Light (Natural Warm Amber Alder) or Dark (Dark Walnut Pine).
  - Official Factory Accessories: 4-Piece Demountable Ladder Stand (max 123 cm, no wall drilling) $275 | Mounting Hooks (for Stand or Swedish Wall) $35 | 2-Bag Carry Case Set (3-Piece) $105 | Single Carry Case Bag (2-Piece) $105 | 2-Piece Wall Protection Panel (26 cm $155 / 30 cm Wide $175).`
    : `OFFICIAL USA PRICING (USD on evminovusa.com):
  1. 3-Piece Folding Evminov Board (230–245 cm full length):
     - Standard 26 cm (FOR ALL USERS UP TO 100 kg / 220 lbs and up to 6'4" / 193 cm): $495 USD Direct / $635 USD Express
     - Reinforced Wide 30 cm (ONLY FOR USERS OVER 100 kg / 220 lbs OR TALLER THAN 6'4" / 193 cm): $520 USD Direct / $660 USD Express
  2. 2-Piece Folding Evminov Board ("Spine Toothbrush" — compact 2 sections only):
     - Standard 26 cm (UP TO 100 kg / 220 lbs): $475 USD Direct / $615 USD Express
     - Reinforced Wide 30 cm (OVER 100 kg / 220 lbs): $500 USD Direct / $640 USD Express
  - Finishes (both models): Light (Natural Warm Amber Alder) or Dark (Dark Walnut Pine).
  - Official Factory Accessories: 4-Piece Demountable Ladder Stand (max 123 cm, no wall drilling) $275 | Mounting Hooks (for Stand or Swedish Wall) $35 | 2-Bag Carry Case Set (3-Piece) $105 | Single Carry Case Bag (2-Piece) $105 | 2-Piece Wall Protection Panel (26 cm $155 / 30 cm Wide $175).`;

  return `You are the Evminov Spine Systems Concierge for ${origin} (Patented since 1996, US Patent 6,869,387 B2, EU Patent EP 1 038 512 B1).
CRITICAL LANGUAGE RULE: ALWAYS reply strictly and naturally in the same language the user wrote in (detected language code: "${lang}" — English, Spanish, French, German, Ukrainian, or Russian). NEVER mix Cyrillic and Latin letters inside a single word (in Ukrainian write "3-секційний Профілактор Євмінова" / "2-секційна «Зубна щітка»"). Be warm, clear, concise (3–6 short sentences or crisp bullets), and helpful.

STRICT SIZING RULE:
- Standard 26 cm width fits EVERY adult up to 100 kg (220 lbs) and 193 cm (6'4").
- Reinforced Wide 30 cm width is ONLY recommended if weight > 100 kg (> 220 lbs) OR height > 193 cm (> 6'4").
${computedSizingHint ? `- ${computedSizingHint}` : ""}

STRICT COMPLIANCE & VERIFIED FACTS (NEVER invent other prices, NEVER say "BackBrush", NEVER claim FDA Class I medical device clearance or HIPAA):
- Classification: General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030). Not medical advice or a substitute for emergency care; advise physician clearance for acute nerve weakness, severe osteoporosis, spondylolisthesis, or post-surgery.
- ${pricesBlock}
- Currency for this site: ${currency}.
- Included FREE with every board: Cotton-padded Glisson Cervical Loop (for gentle 8°–12° neck relief), wall mounting bracket kit (fits 16" North American drywall wood studs or concrete/brick), illustrated exercise manual, official product passport, 60-Day Home Trial, and 1-Year Manufacturer Warranty.
- Delivery & Checkout Status: All US & Canada orders ship in compact demountable panels via tracked international couriers in approximately 2 weeks. Direct online card checkout (Stripe) launches in the New Year — right now customers reserve their exact configuration online at ${origin}${getLocalePrefix(lang)}/order/ or message our specialist directly on WhatsApp (+1 747 306-0140) to lock in 2026 pricing, confirm stock, and receive a secure payment invoice + itemized HSA/FSA receipt.
- Biomechanics & Safety: Unlike 90° inversion tables (Teeter), the Evminov board uses gentle head-up 8°–35° inclines (head stays above heart -> zero upside-down blood rush or eye pressure spike, zero ankle clamping) + active deep paraspinal stabilizer micro-exercises. Traction formula: Net Pull ≈ Weight × sin(θ) − 8% friction (e.g., 180 lbs at 15° ≈ 33 lbs gentle unloading).
- HSA / FSA & Canadian Benefits: US buyers often save ~25–35% pre-tax with a doctor's Letter of Medical Necessity (LMN) + our itemized receipt (great before Dec 31 FSA deadlines!). Canadian buyers can claim via Extended Health Benefits / CRA Medical Expense with a doctor's prescription.
- Contact: WhatsApp https://wa.me/17473060140 (+1 747 306-0140) | Email ${email} | US Hub: 4525 San Fernando Rd, Unit H, Glendale, CA 91204.
- Current page: ${pathname}

End every helpful reply by suggesting the clearest next step (e.g., configuring their exact width/model at ${origin}${getLocalePrefix(lang)}/order/, checking their exact angle on the Calculator, or tapping WhatsApp to confirm with a live specialist).`;
}

function parseUserMetrics(text: string): { weightLbs: number | null; weightKg: number | null; heightCm: number | null } {
  let weightKg: number | null = null;
  let weightLbs: number | null = null;
  let heightCm: number | null = null;

  const kgMatch = text.match(/(\d{2,3})\s*(?:kg|кг|kilo)/i);
  if (kgMatch) {
    weightKg = Number(kgMatch[1]);
    weightLbs = Math.round(weightKg * 2.20462);
  }
  const lbMatch = text.match(/(\d{2,3})\s*(?:lbs?|pounds?|фунт)/i);
  if (lbMatch && !weightLbs) {
    weightLbs = Number(lbMatch[1]);
    weightKg = Math.round(weightLbs / 2.20462);
  }
  const cmMatch = text.match(/(\d{3})\s*(?:cm|см)/i);
  if (cmMatch) {
    heightCm = Number(cmMatch[1]);
  }
  const ftMatch = text.match(/([4-7])\s*['′ft]\s*(\d{1,2})?/i);
  if (ftMatch && !heightCm) {
    const inches = Number(ftMatch[1]) * 12 + Number(ftMatch[2] || 0);
    heightCm = Math.round(inches * 2.54);
  }
  return { weightLbs, weightKg, heightCm };
}

function buildSmartFallback(
  userMessage: string,
  hasImage: boolean,
  lang: ChatLocale,
  isCanada: boolean,
  origin: string
): { reply: string; quickLinks: QuickLink[] } {
  const q = userMessage.toLowerCase();
  const prefix = getLocalePrefix(lang);
  const currency = isCanada ? "CAD" : "USD";
  const metrics = parseUserMetrics(userMessage);

  const isWide =
    (metrics.weightKg !== null && metrics.weightKg > 100) ||
    (metrics.weightLbs !== null && metrics.weightLbs > 220) ||
    (metrics.heightCm !== null && metrics.heightCm > 193) ||
    /wide|heavy|30\s*cm|30\s*см|широк|посилен|усилен|breit|ancho|large|powerlift|athlete/i.test(q);

  const wantsCompact =
    /2-piece|2\s*piece|2\s*част|2\s*секц|toothbrush|щітк|щётк|compact|closet|apartment|квартир|wohnung|klein/i.test(q);

  const recommendedSlug = wantsCompact ? "2-piece-folding-board" : "3-piece-travel-board";
  const widthParam = isWide ? "wide" : "standard";

  const price3Std = isCanada ? "$445 CAD" : "$495 USD";
  const price3Wide = isCanada ? "$500 CAD" : "$520 USD";
  const price2Std = isCanada ? "$435 CAD" : "$475 USD";
  const price2Wide = isCanada ? "$495 CAD" : "$500 USD";

  const recommendedPrice =
    recommendedSlug === "3-piece-travel-board"
      ? isWide
        ? price3Wide
        : price3Std
      : isWide
      ? price2Wide
      : price2Std;

  const isWallOrStand =
    hasImage ||
    /wall|stud|mount|drill|rent|apartment|stand|door|стін|стен|кріпл|крепл|свердл|сверл|стійк|стойк|wand|bohr|pared|mur/i.test(q);
  const isHsa =
    /hsa|fsa|lmn|insur|tax|reimburse|receipt|invoice|cra|benefits|страхов|чек|налог|подат|steuer|impôt/i.test(q);
  const isInversionOrSafety =
    /teeter|inversion|blood\s*pressure|glaucoma|vertigo|senior|upside|інверс|инверс|тиск|давлен|глауком|blutdruck|schwindel|hipertensi|hypertension/i.test(q);
  const isDiscOrSciatica =
    /hernia|l4|l5|s1|disc|bulge|sciatic|piriformis|stenosis|spondylo|гриж|грыж|протруз|ішіас|ишиас|стеноз|поперек|поясниц|bandscheib|ischias|ciática|sciatique/i.test(q);
  const isNeck =
    /neck|cervical|glisson|c5|c6|tech.?neck|шия|шийн|шея|шейн|петл|nacken|hws|cuello|cou/i.test(q);
  const isPaymentOrShipping =
    /price|cost|ship|deliver|pay|stripe|card|klarna|warrant|canada|цін|цен|достав|оплат|карт|гарант|preis|versand|zahlung|precio|envío|prix|livraison/i.test(q);

  const orderUrl = `${origin}${prefix}/order/?product=${recommendedSlug}&width=${widthParam}&step=1#order-form`;
  const calcUrl = `${origin}${prefix}/calculator/`;
  const waText = encodeURIComponent(
    `Hello Evminov! Question from website chat: "${userMessage.slice(0, 140)}"`
  );
  const waUrl = `https://wa.me/17473060140?text=${waText}`;

  const linksByLang: Record<ChatLocale, QuickLink[]> = {
    en: [
      { label: `Configure ${isWide ? "Wide 30 cm" : "Standard 26 cm"} Board →`, href: orderUrl },
      { label: "Open Angle Calculator", href: calcUrl },
      { label: "Chat on WhatsApp", href: waUrl, external: true },
    ],
    uk: [
      { label: `Підібрати модель (${isWide ? "Широка 30 см" : "Стандарт 26 см"}) →`, href: orderUrl },
      { label: "Калькулятор кута", href: calcUrl },
      { label: "Написати у WhatsApp", href: waUrl, external: true },
    ],
    ru: [
      { label: `Настроить модель (${isWide ? "Широкая 30 см" : "Стандарт 26 см"}) →`, href: orderUrl },
      { label: "Калькулятор угла", href: calcUrl },
      { label: "Написать в WhatsApp", href: waUrl, external: true },
    ],
    de: [
      { label: `${isWide ? "Breit 30 cm" : "Standard 26 cm"} konfigurieren →`, href: orderUrl },
      { label: "Winkelrechner öffnen", href: calcUrl },
      { label: "WhatsApp-Beratung", href: waUrl, external: true },
    ],
    es: [
      { label: `Configurar (${isWide ? "Ancha 30 cm" : "Estándar 26 cm"}) →`, href: orderUrl },
      { label: "Calculadora de Ángulo", href: calcUrl },
      { label: "Hablar por WhatsApp", href: waUrl, external: true },
    ],
    fr: [
      { label: `Configurer (${isWide ? "Large 30 cm" : "Standard 26 cm"}) →`, href: orderUrl },
      { label: "Calculateur d'Angle", href: calcUrl },
      { label: "Écrire sur WhatsApp", href: waUrl, external: true },
    ],
  };

  let tractionNote = "";
  if (metrics.weightLbs) {
    const angle = isDiscOrSciatica ? 14 : 16;
    const rad = (angle * Math.PI) / 180;
    const pullLbs = Math.max(8, Math.round(metrics.weightLbs * Math.sin(rad) - metrics.weightLbs * Math.cos(rad) * 0.08));
    const pullKg = Math.round(pullLbs / 2.20462);
    if (lang === "uk") {
      tractionNote = ` Для ваги ${metrics.weightKg} кг (${metrics.weightLbs} lbs) на м’якому куті ${angle}° чисте осьове витягування складає ~${pullKg} кг (~${pullLbs} lbs) без перевантаження.`;
    } else if (lang === "ru") {
      tractionNote = ` Для веса ${metrics.weightKg} кг (${metrics.weightLbs} lbs) на мягком угле ${angle}° чистое осевое вытяжение составляет ~${pullKg} кг (~${pullLbs} lbs).`;
    } else if (lang === "de") {
      tractionNote = ` Bei ${metrics.weightKg} kg (${metrics.weightLbs} lbs) erzeugt ein sanfter ${angle}°-Winkel ca. ${pullKg} kg (${pullLbs} lbs) ruhige Axialtraktion.`;
    } else if (lang === "es") {
      tractionNote = ` Para ${metrics.weightKg} kg (${metrics.weightLbs} lbs) a un ángulo suave de ${angle}°, la tracción axial estimada es de ~${pullKg} kg (~${pullLbs} lbs).`;
    } else if (lang === "fr") {
      tractionNote = ` Pour ${metrics.weightKg} kg (${metrics.weightLbs} lbs) à un angle doux de ${angle}°, la traction axiale est d'environ ${pullKg} kg (${pullLbs} lbs).`;
    } else {
      tractionNote = ` At ${metrics.weightLbs} lbs (${metrics.weightKg} kg) and a gentle ${angle}° incline, smooth axial pull is ~${pullLbs} lbs (~${pullKg} kg) with zero head rush.`;
    }
  }

  if (lang === "uk") {
    if (isWallOrStand) {
      return {
        reply: `**Монтаж та варіанти без свердління:** у комплекті з кожним Профілактором іде кріплення у стіну (підходить для американських/канадських дерев’яних балок 16" drywall studs або бетону/цегли). Якщо ви орендуєте житло або не хочете свердлити стіну — додайте **розбірну стійку-драбинку з 4 частин (макс. 123 см, $275)** + **гачки ($35)**, вона підходить і для 26 см, і для посиленої 30 см дошки. Надішліть фото стіни прямо нашому спеціалісту у WhatsApp (+1 747 306-0140) для миттєвої підказки!`,
        quickLinks: linksByLang.uk,
      };
    }
    if (isHsa) {
      return {
        reply: `**Економія ~25–35% через HSA/FSA (США) або Extended Health (Канада):** Профілактор Євмінова класифікується як General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030). З листом **Letter of Medical Necessity (LMN)** від лікаря/фізіотерапевта та нашим деталізованим чеком багато клієнтів повертають до 30% вартості (особливо актуально для FSA до 31 грудня!). Шаблон LMN та чек ви отримуєте одразу після резервації.`,
        quickLinks: linksByLang.uk,
      };
    }
    if (isInversionOrSafety) {
      return {
        reply: `**Чому Профілактор безпечніший за інверсійний стіл (Teeter):** ви лежите **головою вгору** під плавним кутом 8°–20°, без зависання догори ногами. Немає стрибка тиску в голові чи очах, немає болю від затискачів щиколоток, а спина повністю підтримана резонансною деревиною. При неконтрольованій гіпертонії або глаукомі перед початком занять обов’язково порадьтеся з лікарем.`,
        quickLinks: linksByLang.uk,
      };
    }
    if (isNeck) {
      return {
        reply: `**Для шиї (C5–C6, «техно-шия»):** у комплекті з кожною дошкою вже йде оригінальна **Петля Гліссона** з м’якою бавовняною підкладкою — безкоштовно! Заняття для шиї проводяться лише під ультрам’яким кутом **8°–12°** по 3–5 хвилин (після схвалення лікаря при діагностованих грижах шийного відділу).`,
        quickLinks: linksByLang.uk,
      };
    }
    if (isWide || isDiscOrSciatica || metrics.weightLbs) {
      return {
        reply: `**Персональна рекомендація:** ${
          isWide
            ? `для ваги понад 100 кг (або зросту понад 193 см) обирайте **Посилену широку модель 30 см** (витримує до 150 кг / 330 lbs) — 3-секційну 230–245 см (${price3Wide}) або компактну 2-секційну (${price2Wide}).`
            : `для ваги до 100 кг ідеально підійде **Стандартна ширина 26 см** — 3-секційна 230–245 см (${price3Std}) або компактна 2-секційна «Зубна щітка» (${price2Std}).`
        }${tractionNote} При протрузіях L4–L5/L5–S1 та ішіасі починайте м’яко з 8°–14° (8–10 хв/день) після схвалення лікаря. Доставка ~2 тижні, гарантія 1 рік, Петля Гліссона у подарунок!`,
        quickLinks: linksByLang.uk,
      };
    }
    return {
      reply: `Вітаю! Для США та Канади доступні 2 оригінальні розбірні моделі (${currency}): **3-секційна (230–245 см)** від ${price3Std} та компактна **2-секційна («Зубна щітка»)** від ${price2Std} — обидві у ширині **26 см (до 100 кг)** або **Посилена 30 см (до 150 кг)**, світле або темне дерево. У комплекті безкоштовно Петля Гліссона, кріплення на стіну та гарантія 1 рік (доставка ~2 тижні). Поки онлайн-оплата карткою запускається з Нового року, ви можете зафіксувати ціну через резервацію або написати нам у WhatsApp!`,
      quickLinks: linksByLang.uk,
    };
  }

  if (lang === "ru") {
    return {
      reply: `**Подбор модели (${currency}):** ${
        isWide
          ? `для веса свыше 100 кг (до 150 кг / 330 lbs) рекомендуем **Усиленную широкую панель 30 см** — 3-секционную 230–245 см (${price3Wide}) или компактную 2-секционную (${price2Wide}).`
          : `для веса до 100 кг подойдёт **Стандартная ширина 26 см** — 3-секционная 230–245 см (${price3Std}) или компактная 2-секционная «Зубная щётка» (${price2Std}).`
      }${tractionNote} В комплекте бесплатно Петля Глиссона, крепление в стену и гарантия 1 год (доставка ~2 недели). Для безсверлильной установки есть разборная стойка-лесенка ($275). Пока онлайн-оплата картой запускается с Нового года, можно забронировать заказ и зафиксировать цену сейчас или написать в WhatsApp!`,
      quickLinks: linksByLang.ru,
    };
  }

  if (lang === "de") {
    return {
      reply: `**Empfehlung (${currency}):** ${
        isWide
          ? `für über 100 kg Körpergewicht (bis 150 kg / 330 lbs) empfehlen wir die **Verstärkte 30 cm Breite** — 3-teilig 230–245 cm (${price3Wide}) oder kompakt 2-teilig (${price2Wide}).`
          : `bis 100 kg passt die **Standardbreite 26 cm** — 3-teilig 230–245 cm (${price3Std}) oder kompakt 2-teilig (${price2Std}).`
      }${tractionNote} Immer im Lieferumfang: Glisson-Nackenschlinge gratis, Wandhalterung, 60 Tage Heimtest & 1 Jahr Garantie (Kurierversand ca. 2 Wochen). Ohne Wandbohren bieten wir den 4-teiligen Leiterständer ($275) an. Online-Kartenzahlung startet im Neuen Jahr — sichern Sie sich heute unverbindlich Ihren Preis oder schreiben Sie uns auf WhatsApp!`,
      quickLinks: linksByLang.de,
    };
  }

  if (lang === "es") {
    return {
      reply: `**Recomendación (${currency}):** ${
        isWide
          ? `para más de 100 kg (hasta 150 kg / 330 lbs) recomendamos el **Ancho Reforzado 30 cm** — 3 piezas 230–245 cm (${price3Wide}) o compacto 2 piezas (${price2Wide}).`
          : `hasta 100 kg recomendamos el **Estándar 26 cm** — 3 piezas 230–245 cm (${price3Std}) o compacto 2 piezas (${price2Std}).`
      }${tractionNote} Incluye gratis Lazo Cervical Glisson, kit de montaje en pared, 60 días de prueba y 1 año de garantía (envío internacional ~2 semanas). También tenemos Soporte-Escalera sin taladrar ($275). Mientras el pago directo con tarjeta se activa en Año Nuevo, puede reservar hoy para asegurar precio y recibo HSA/FSA o escribirnos por WhatsApp.`,
      quickLinks: linksByLang.es,
    };
  }

  if (lang === "fr") {
    return {
      reply: `**Recommandation (${currency}):** ${
        isWide
          ? `au-delà de 100 kg (jusqu'à 150 kg / 330 lbs), choisissez la **Largeur Renforcée 30 cm** — 3 pièces 230–245 cm (${price3Wide}) ou compacte 2 pièces (${price2Wide}).`
          : `jusqu'à 100 kg, la **Largeur Standard 26 cm** est idéale — 3 pièces 230–245 cm (${price3Std}) ou compacte 2 pièces (${price2Std}).`
      }${tractionNote} Inclus gratuitement : Sangle Cervicale Glisson, kit mural, essai 60 jours et garantie 1 an (livraison internationale ~2 semaines). Support-Échelle autonome sans perçage disponible ($275). En attendant le paiement carte en ligne au Nouvel An, réservez gratuitement pour bloquer votre tarif ou écrivez-nous sur WhatsApp.`,
      quickLinks: linksByLang.fr,
    };
  }

  // English smart intent responses
  if (isWallOrStand) {
    return {
      reply: `**Wall Mounting & No-Drill Renter Setup:** Every Evminov Board includes a heavy-duty bracket engineered for standard North American **16" wood drywall studs** (takes ~15 min with 2 lag bolts and folds flat to 2.4" against the wall). Renting or prefer zero drilling? Add our **4-Piece Demountable Ladder Stand (max 123 cm, $275)** + **Mounting Hooks ($35)** — fits both 26 cm Standard and 30 cm Wide boards. You can also message a quick wall photo to our specialist on WhatsApp (+1 747 306-0140) for instant placement advice!`,
      quickLinks: linksByLang.en,
    };
  }
  if (isHsa) {
    return {
      reply: `**HSA / FSA (~25–35% Tax Savings) & Canadian Benefits:** Evminov Boards are classified as General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030). With a brief **Letter of Medical Necessity (LMN)** from your doctor, chiropractor, or PT plus the **itemized receipt** we send with every order, many US buyers claim pre-tax HSA/FSA funds (great before Dec 31 FSA deadlines!) and Canadian buyers submit to Extended Health / CRA.`,
      quickLinks: linksByLang.en,
    };
  }
  if (isInversionOrSafety) {
    return {
      reply: `**Head-Up Safety vs. Inversion Tables (Teeter):** Unlike 90° inversion tables that clamp your ankles and rush blood to your head/eyes, the Evminov Board keeps your **head comfortably above your heart** at controlled 8°–20° inclines on resonant natural wood. Zero dizzy spells, zero ankle pain, and active deep-core conditioning. (Always check with your physician if you have uncontrolled hypertension, glaucoma, or acute neurological symptoms.)`,
      quickLinks: linksByLang.en,
    };
  }
  if (isNeck) {
    return {
      reply: `**Cervical / Tech-Neck Relief (Glisson Loop Included Free):** Every 3-Piece and 2-Piece Evminov Board includes our cotton-padded **Glisson Cervical Loop** at no extra cost. Cervical unloading uses ultra-gentle **8°–12° head-up angles** for 3–5 minutes so there's zero abrupt vertical jaw pulling. (Get doctor clearance first if you have a diagnosed C5–C6 herniation or cervical instability.)`,
      quickLinks: linksByLang.en,
    };
  }
  if (isPaymentOrShipping) {
    return {
      reply: `**Pricing, Delivery & Checkout (${currency}):** Our 3-Piece Folding Board (230–245 cm) starts at **${price3Std}** (Wide 30 cm: ${price3Wide}) and the compact 2-Piece "Spine Toothbrush" starts at **${price2Std}** (Wide 30 cm: ${price2Wide}) — including the free Glisson Loop, wall kit, 60-Day Home Trial & 1-Year Warranty. Delivery takes **~2 weeks** via tracked international couriers across all US states & Canadian provinces. Online card checkout launches in the New Year — today you can reserve risk-free online to lock pricing & get your secure invoice, or confirm instantly on WhatsApp!`,
      quickLinks: linksByLang.en,
    };
  }

  return {
    reply: `**Personalized Board Recommendation (${currency}):** ${
      isWide
        ? `For users over 100 kg (220 lbs) or taller than 6'4", we recommend our **Reinforced Wide 30 cm** panel (rated to 330 lbs / 150 kg) — 3-Piece 230–245 cm (**${price3Wide}**) or compact 2-Piece (**${price2Wide}**).`
        : `For users up to 100 kg (220 lbs) & 6'4", our **Standard 26 cm** width is ideal — 3-Piece full-length 230–245 cm (**${price3Std}**) or compact 2-Piece "Spine Toothbrush" (**${price2Std}**).`
    }${tractionNote} Every board includes the free Glisson neck loop, wall mount kit, 60-Day Home Trial & 1-Year Warranty (~2-week tracked courier delivery). Reserve risk-free below or message our team on WhatsApp!`,
    quickLinks: linksByLang.en,
  };
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const reqUrl = new URL(request.url);
    const isCanada = reqUrl.hostname.toLowerCase().includes("evminovcanada");
    const origin = isCanada ? "https://evminovcanada.com" : "https://evminovusa.com";

    const body = (await request.json()) as {
      message?: string;
      image?: string;
      history?: Array<{ role: string; content: string }>;
      lang?: string;
      pathname?: string;
    };

    const userMessage = String(body.message || "").slice(0, 1500).trim();
    const hasImage = Boolean(body.image && body.image.startsWith("data:image/"));
    if (!userMessage && !hasImage) {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const lang = detectLocale(body.lang, userMessage);
    const fallback = buildSmartFallback(userMessage, hasImage, lang, isCanada, origin);

    if (env.AI) {
      const metrics = parseUserMetrics(userMessage);
      const needsWide =
        (metrics.weightKg !== null && metrics.weightKg > 100) ||
        (metrics.weightLbs !== null && metrics.weightLbs > 220) ||
        (metrics.heightCm !== null && metrics.heightCm > 193);
      let computedSizingHint = "";
      if (metrics.weightLbs !== null || metrics.heightCm !== null) {
        const cur = isCanada ? "CAD" : "USD";
        const p3 = needsWide
          ? isCanada ? "$500 CAD Direct / $585 CAD Express" : "$520 USD Direct / $660 USD Express"
          : isCanada ? "$445 CAD Direct / $545 CAD Express" : "$495 USD Direct / $635 USD Express";
        const p2 = needsWide
          ? isCanada ? "$495 CAD Direct / $580 CAD Express" : "$500 USD Direct / $640 USD Express"
          : isCanada ? "$435 CAD Direct / $540 CAD Express" : "$475 USD Direct / $615 USD Express";
        computedSizingHint = `VERIFIED USER METRICS DETECTED (OBEY STRICTLY — DO NOT CONTRADICT): ${
          metrics.weightLbs ? `Weight = ${metrics.weightLbs} lbs (${metrics.weightKg} kg)` : ""
        }${metrics.heightCm ? ` Height = ${metrics.heightCm} cm` : ""} -> MUST recommend **${
          needsWide ? "Reinforced Wide 30 cm" : "Standard 26 cm"
        }** width! Exact ${cur} prices for this width: 3-Piece Folding = ${p3}; 2-Piece Spine Toothbrush = ${p2}.`;
      }

      const systemPrompt = buildSystemPrompt(
        isCanada,
        origin,
        lang,
        String(body.pathname || "/"),
        computedSizingHint
      );
      const historySlice = Array.isArray(body.history)
        ? body.history
            .slice(-6)
            .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
            .map((m) => ({ role: m.role, content: m.content.slice(0, 900) }))
        : [];

      const messages: Array<Record<string, unknown>> = [
        { role: "system", content: systemPrompt },
        ...historySlice,
      ];

      if (hasImage) {
        messages.push({
          role: "user",
          content: [
            {
              type: "text",
              text:
                userMessage ||
                "Please advise on mounting an Evminov Spine Decompression Board on this wall (wood studs, concrete, or freestanding ladder stand).",
            },
            { type: "image_url", image_url: { url: body.image } },
          ],
        });
      } else {
        messages.push({ role: "user", content: userMessage });
      }

      const candidateModels = hasImage
        ? ["@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/meta/llama-3.2-11b-vision-instruct"]
        : ["@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/meta/llama-4-scout-17b-16e-instruct"];

      for (const model of candidateModels) {
        try {
          const aiRes = await env.AI.run(model, {
            messages,
            max_tokens: 420,
            temperature: 0.25,
          });
          const text = extractAiText(aiRes);
          if (text) {
            return new Response(
              JSON.stringify({
                reply: text,
                mode: "workers_ai",
                model,
                lang,
                quickLinks: fallback.quickLinks,
              }),
              {
                status: 200,
                headers: { "Content-Type": "application/json; charset=utf-8" },
              }
            );
          }
        } catch {
          // Try next model or smart biomechanical fallback
        }
      }
    }

    return new Response(
      JSON.stringify({
        reply: fallback.reply,
        mode: "biomechanical_engine",
        lang,
        quickLinks: fallback.quickLinks,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  } catch {
    return new Response(JSON.stringify({ error: "Chat processing failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
