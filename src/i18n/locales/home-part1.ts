import { Locale } from "@/i18n/types";

export interface HeroSlideText {
  badge: string;
  caption: string;
  alt: string;
}

export interface HeroGalleryCopy {
  prevAria: string;
  nextAria: string;
  tablistAria: string;
  viewPrefix: string;
  slides: [
    HeroSlideText,
    HeroSlideText,
    HeroSlideText,
    HeroSlideText,
    HeroSlideText,
    HeroSlideText,
  ];
}

export const HERO_GALLERY_COPY: Record<Locale, HeroGalleryCopy> = {
  en: {
    prevAria: "Previous product photo",
    nextAria: "Next product photo",
    tablistAria: "Evminov Board Showcase Photos",
    viewPrefix: "View",
    slides: [
      {
        badge: "15° Controlled Traction",
        caption: "Gentle axial spine unloading with zero upside-down head rush",
        alt: "Evminov Spine Decompression Board controlled inclined traction in home setup",
      },
      {
        badge: "Carpathian Resonant Pine",
        caption: "Multi-layer flexing wood beam absorbs impact and cushions vertebrae",
        alt: "Handcrafted resonant Carpathian pine Evminov board profile view",
      },
      {
        badge: "5-Second Height Lock",
        caption: "Aircraft-alloy sliding carriage adapts to users from 4'0\" to 6'9\"",
        alt: "Close-up of Evminov sliding carriage grip during gentle spinal elongation",
      },
      {
        badge: "Multi-Angle Versatility",
        caption: "Supports supine, prone, cervical, and athletic core routines",
        alt: "Evminov inclined reverse decompression posture for deep lumbar release",
      },
      {
        badge: "Included Free ($49 Value)",
        caption: "Soft padded Glisson Loop for gentle 8°–12° neck & tech-neck unloading",
        alt: "Official cotton-padded Glisson Loop cervical neck traction harness included free",
      },
      {
        badge: "Folds to 2.4\" Flat",
        caption: "Satin water-based finish folds flat against any US wall after use",
        alt: "Natural kiln-dried Carpathian pine woodgrain finish on Evminov decompression board",
      },
    ],
  },
  es: {
    prevAria: "Foto anterior del producto",
    nextAria: "Siguiente foto del producto",
    tablistAria: "Galería de la Tabla Evminov",
    viewPrefix: "Ver",
    slides: [
      {
        badge: "Tracción Controlada 15°",
        caption: "Descarga axial suave de la columna sin congestión cefálica",
        alt: "Tabla de descompresión espinal Evminov en tracción inclinada controlada",
      },
      {
        badge: "Pino de los Cárpatos",
        caption: "Viga de madera flexible multicapa que amortigua las vértebras",
        alt: "Vista lateral de la tabla Evminov artesanal en pino de los Cárpatos",
      },
      {
        badge: "Ajuste en 5 Segundos",
        caption: "Carro deslizante de aleación ajustable de 1,22 m a 2,06 m",
        alt: "Detalle del agarre del carro deslizante Evminov",
      },
      {
        badge: "Versatilidad Multiángulo",
        caption: "Compatible con rutinas supinas, pronas, cervicales y de core",
        alt: "Postura de descompresión inclinada Evminov para alivio lumbar",
      },
      {
        badge: "Gratis ($49 de Valor)",
        caption: "Petla Glissona acolchada para descarga cervical suave de 8°–12°",
        alt: "Arnés cervical Petla Glissona acolchado incluido gratis",
      },
      {
        badge: "Se Pliega a 6 cm",
        caption: "Acabado satinado al agua que se pliega plano contra cualquier pared",
        alt: "Acabado natural en pino de los Cárpatos de la tabla Evminov",
      },
    ],
  },
  fr: {
    prevAria: "Photo précédente",
    nextAria: "Photo suivante",
    tablistAria: "Photos de présentation de la Planche Evminov",
    viewPrefix: "Voir",
    slides: [
      {
        badge: "Traction Contrôlée 15°",
        caption: "Décharge vertébrale douce sans afflux sanguin vers la tête",
        alt: "Planche Evminov en traction inclinée contrôlée à domicile",
      },
      {
        badge: "Pin des Carpates",
        caption: "Poutre en bois flexible multicouche qui amortit les vertèbres",
        alt: "Vue de profil de la planche artisanale Evminov en pin des Carpates",
      },
      {
        badge: "Réglage en 5 Secondes",
        caption: "Chariot en alliage réglable de 1,22 m à 2,06 m",
        alt: "Gros plan sur les poignées du chariot coulissant Evminov",
      },
      {
        badge: "Polyvalence Multi-Angles",
        caption: "Adaptée aux routines dorsales, ventrales, cervicales et gainage",
        alt: "Posture de décompression inclinée Evminov",
      },
      {
        badge: "Offerte (Valeur 49 $)",
        caption: "Boucle de Glisson matelassée pour décharge cervicale douce 8°–12°",
        alt: "Harnais cervical Boucle de Glisson matelassé inclus gratuitement",
      },
      {
        badge: "Pliage Plat 6 cm",
        caption: "Finition satinée à l'eau se repliant à plat contre le mur",
        alt: "Finition pin naturel de la planche de décompression Evminov",
      },
    ],
  },
  uk: {
    prevAria: "Попереднє фото",
    nextAria: "Наступне фото",
    tablistAria: "Галерея Профілактора Євмінова",
    viewPrefix: "Переглянути",
    slides: [
      {
        badge: "Контрольована Тяга 15°",
        caption: "М'яке осьове розвантаження хребта без припливу крові до голови",
        alt: "Профілактор Євмінова під контрольованим нахилом вдома",
      },
      {
        badge: "Карпатська Сосна",
        caption: "Багатошарова пружна балка з дерева амортизує хребці",
        alt: "Вигляд збоку оригінальної дошки Євмінова з карпатської сосни",
      },
      {
        badge: "Фіксація за 5 Секунд",
        caption: "Каретка з авіасплаву підлаштовується під зріст 122–206 см",
        alt: "Деталь рухомої каретки профілактора Євмінова",
      },
      {
        badge: "Універсальні Кути",
        caption: "Підходить для вправ на спині, животі, шиї та глибокого кору",
        alt: "Похила декомпресія на дошці Євмінова для попереку",
      },
      {
        badge: "У Подарунок ($49)",
        caption: "М'яка Петля Гліссона для делікатної витяжки шиї під 8°–12°",
        alt: "Оригінальна м'яка Петля Гліссона в комплекті",
      },
      {
        badge: "Складається до 6 см",
        caption: "Екологічне сатинове покриття складається впритул до стіни",
        alt: "Натуральна текстура карпатської сосни на дошці Євмінова",
      },
    ],
  },
  ru: {
    prevAria: "Предыдущее фото",
    nextAria: "Следующее фото",
    tablistAria: "Галерея Профилактора Евминова",
    viewPrefix: "Посмотреть",
    slides: [
      {
        badge: "Контролируемая Тяга 15°",
        caption: "Мягкая осевая разгрузка позвоночника без прилива крови к голове",
        alt: "Профилактор Евминова под контролируемым наклоном дома",
      },
      {
        badge: "Карпатская Сосна",
        caption: "Многослойная упругая деревянная балка амортизирует позвонки",
        alt: "Вид сбоку оригинальной доски Евминова из карпатской сосны",
      },
      {
        badge: "Фиксация за 5 Секунд",
        caption: "Каретка из авиасплава настраивается под рост 122–206 см",
        alt: "Деталь подвижной каретки профилактора Евминова",
      },
      {
        badge: "Универсальные Углы",
        caption: "Подходит для упражнений на спине, животе, шеи и глубокого кора",
        alt: "Наклонная декомпрессия на доске Евминова для поясницы",
      },
      {
        badge: "В Подарок ($49)",
        caption: "Мягкая Петля Глиссона для деликатной вытяжки шеи под 8°–12°",
        alt: "Оригинальная мягкая Петля Глиссона в комплекте",
      },
      {
        badge: "Складывается до 6 см",
        caption: "Экологичное сатиновое покрытие складывается вплотную к стене",
        alt: "Натуральная текстура карпатской сосны на доске Евминова",
      },
    ],
  },
  de: {
    prevAria: "Vorheriges Produktfoto",
    nextAria: "Nächstes Produktfoto",
    tablistAria: "Evminov Board Produktfotos",
    viewPrefix: "Ansicht",
    slides: [
      {
        badge: "15° Kontrollierte Traktion",
        caption: "Sanfte axiale Wirbelsäulen-Entlastung ganz ohne Kopfüber-Blutstau",
        alt: "Evminov Wirbelsäulen-Dekompressionsboard bei kontrollierter geneigter Traktion zuhause",
      },
      {
        badge: "Karpaten-Resonanzkiefer",
        caption: "Mehrschichtiger federnder Holzbalken dämpft Stöße und stützt die Wirbel",
        alt: "Handgefertigtes Evminov Board aus resonanter Karpaten-Kiefer in Seitenansicht",
      },
      {
        badge: "5-Sekunden-Höhenverstellung",
        caption: "Gleitschlitten aus Luftfahrt-Aluminium passt für Körpergrößen von 1,22 m bis 2,06 m",
        alt: "Nahaufnahme des Evminov Gleitschlitten-Griffs bei sanfter Wirbelsäulenstreckung",
      },
      {
        badge: "Mehrwinkel-Vielseitigkeit",
        caption: "Für Rückenlage, Bauchlage, Halswirbel- und tiefes Core-Training geeignet",
        alt: "Geneigte Evminov-Dekompressionshaltung für tiefe Lendenwirbel-Entlastung",
      },
      {
        badge: "Gratis enthalten ($49 Wert)",
        caption: "Weich gepolsterte Glisson-Schlaufe für sanfte 8°–12° Nacken- & Tech-Neck-Entlastung",
        alt: "Offizielle baumwollgepolsterte Glisson-Halswirbelschlaufe kostenlos im Lieferumfang",
      },
      {
        badge: "Flach klappbar (6 cm)",
        caption: "Seidenmatte Lackierung auf Wasserbasis klappt platzsparend flach an jede Wand",
        alt: "Natürliche Holzmaserung aus kammergetrockneter Karpaten-Kiefer am Evminov Board",
      },
    ],
  },
};

export interface PathwayCardCopy {
  title: string;
  subtitle: string;
  tag: string;
}

export const PATHWAYS_ITEMS: Record<Locale, PathwayCardCopy[]> = {
  en: [
    { title: "Why Not Inversion?", subtitle: "Zero upside-down head rush", tag: "Safety Compare" },
    { title: "L4–S1 Disc Comfort", subtitle: "Low-angle 12°–20° unloading", tag: "Lumbar Focus" },
    { title: "Sciatica & Nerve Ease", subtitle: "Gentle lumbar decompression", tag: "Sciatic Mobility" },
    { title: "Kids & Family Posture", subtitle: "Ages 4–85+ Spine Toothbrush", tag: "Kids & Teens" },
    { title: "Cervical Neck Traction", subtitle: "Free Glisson Loop at 8°–12°", tag: "Neck & C1–C7" },
    { title: "Athletic Recovery", subtitle: "Post-deadlift & squat relief", tag: "Heavy Lifters" },
    { title: "Desk Worker Posture", subtitle: "Reverses 8h sitting slump", tag: "WFH & Nurses" },
    { title: "16\" Wall & Renter Setup", subtitle: "Single stud or no-drill stand", tag: "Installation" },
  ],
  es: [
    { title: "¿Por Qué No Inversión?", subtitle: "Cero congestión cefálica", tag: "Seguridad" },
    { title: "Confort Discal L4–S1", subtitle: "Descarga suave a 12°–20°", tag: "Enfoque Lumbar" },
    { title: "Alivio de Ciática", subtitle: "Descompresión lumbar suave", tag: "Movilidad Ciática" },
    { title: "Postura Infantil y Familiar", subtitle: "Edades 4–85+ Higiene Espinal", tag: "Niños y Familia" },
    { title: "Tracción Cervical", subtitle: "Petla Glissona gratis a 8°–12°", tag: "Cuello C1–C7" },
    { title: "Recuperación Atlética", subtitle: "Alivio post-peso muerto y squat", tag: "Atletas" },
    { title: "Postura de Escritorio", subtitle: "Revierte 8h sentado", tag: "Oficina y Salud" },
    { title: "Montaje 16\" o Sin Taladro", subtitle: "1 viga o soporte independiente", tag: "Instalación" },
  ],
  fr: [
    { title: "Pourquoi Pas l'Inversion ?", subtitle: "Zéro afflux sanguin tête", tag: "Sécurité" },
    { title: "Confort Discal L4–S1", subtitle: "Décharge douce 12°–20°", tag: "Focus Lombaire" },
    { title: "Confort Sciatique", subtitle: "Décompression lombaire douce", tag: "Mobilité" },
    { title: "Posture Enfants & Famille", subtitle: "4–85+ ans Hygiène Vertébrale", tag: "Famille" },
    { title: "Traction Cervicale", subtitle: "Boucle Glisson offerte 8°–12°", tag: "Nuque C1–C7" },
    { title: "Récupération Sportive", subtitle: "Post-squat & soulevé de terre", tag: "Athlètes" },
    { title: "Posture Télétravail", subtitle: "Inverse 8h en position assise", tag: "Bureau & Soins" },
    { title: "Fixation 16\" ou Sans Perçage", subtitle: "1 montant ou support libre", tag: "Installation" },
  ],
  uk: [
    { title: "Чому не інверсія?", subtitle: "Без припливу крові до голови", tag: "Порівняння" },
    { title: "Комфорт Дисків L4–S1", subtitle: "М'яке розвантаження 12°–20°", tag: "Поперек" },
    { title: "Ішіас та Нерв", subtitle: "Делікатна декомпресія", tag: "Мобільність" },
    { title: "Діти та Сімейна Постава", subtitle: "Вік 4–85+ «Зубна щітка»", tag: "Діти та Родина" },
    { title: "Витяжка Шиї", subtitle: "Петля Гліссона безкоштовно", tag: "Шия C1–C7" },
    { title: "Спортивне Відновлення", subtitle: "Після тяги та присідань", tag: "Атлети" },
    { title: "Офісна Постава", subtitle: "Знімає 8 год сидіння", tag: "Офіс та Медики" },
    { title: "Монтаж 16\" або Стійка", subtitle: "1 стійка або без свердління", tag: "Встановлення" },
  ],
  ru: [
    { title: "Почему не инверсия?", subtitle: "Без прилива крови к голове", tag: "Сравнение" },
    { title: "Комфорт Дисков L4–S1", subtitle: "Мягкая разгрузка 12°–20°", tag: "Поясница" },
    { title: "Ишиас и Нерв", subtitle: "Деликатная декомпрессия", tag: "Подвижность" },
    { title: "Дети и Семейная Осанка", subtitle: "Возраст 4–85+ «Зубная щётка»", tag: "Дети и Семья" },
    { title: "Вытяжка Шеи", subtitle: "Петля Глиссона бесплатно", tag: "Шея C1–C7" },
    { title: "Спортивное Восстановление", subtitle: "После тяги и приседаний", tag: "Атлеты" },
    { title: "Офисная Осанка", subtitle: "Снимает 8 ч сидения", tag: "Офис и Медики" },
    { title: "Монтаж 16\" или Стойка", subtitle: "1 стойка или без сверления", tag: "Установка" },
  ],
  de: [
    { title: "Warum keine Inversion?", subtitle: "Kein Kopfüber-Blutstau", tag: "Sicherheitsvergleich" },
    { title: "L4–S1 Bandscheiben-Komfort", subtitle: "Sanfte 12°–20° Entlastung", tag: "Lendenwirbel" },
    { title: "Ischias & Nervenentlastung", subtitle: "Sanfte Lenden-Dekompression", tag: "Ischias-Mobilität" },
    { title: "Kinder- & Familienhaltung", subtitle: "4–85+ Jahre Rücken-Zahnbürste", tag: "Kinder & Familie" },
    { title: "Halswirbel-Traktion", subtitle: "Gratis Glisson-Schlaufe 8°–12°", tag: "Nacken C1–C7" },
    { title: "Sportregeneration", subtitle: "Nach Kreuzheben & Kniebeugen", tag: "Kraftsportler" },
    { title: "Büro- & Homeoffice-Haltung", subtitle: "Gleicht 8 Std. Sitzen aus", tag: "Büro & Pflege" },
    { title: "16\"-Wand oder Ständer", subtitle: "1 Holzständer oder bohrfrei", tag: "Montage" },
  ],
};

export interface InversionVisualCopy {
  evminovBadge: string;
  evminovSub: string;
  evminovRecommended: string;
  evminovAria: string;
  evminovHeadUp: string;
  evminovSvgTitle: string;
  evminovSvgSub: string;
  evminovModes: Array<{
    angle: number;
    label: string;
    tractionPct: string;
    desc: string;
  }>;
  evminovMetrics: Array<{ label: string; value: string }>;
  evminovPoints: Array<{ bold: string; text: string }>;
  invBadge: string;
  invSub: string;
  invWarningTag: string;
  invAria: string;
  invSvgTitle: string;
  invSvgSub: string;
  invMetrics: Array<{ label: string; value: string }>;
  invPoints: Array<{ bold: string; text: string }>;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaTrustPills: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  ctaCompareLink: string;
}

export const INVERSION_VISUAL_COPY: Record<Locale, InversionVisualCopy> = {
  en: {
    evminovBadge: "Evminov Method (8°–35° Upright)",
    evminovSub: "Active + Relaxed",
    evminovRecommended: "Recommended Choice",
    evminovAria: "Interactive 3D Evminov inclined board keeping head above heart for calm spinal unloading",
    evminovHeadUp: "HEAD ABOVE HEART",
    evminovSvgTitle: "Controlled Flex-Pine Incline",
    evminovSvgSub: "Normal blood flow • Zero ankle clamping • Deep core activation",
    evminovModes: [
      { angle: 12, label: "12° Gentle", tractionPct: "21% traction", desc: "Calm lumbar & sciatic unloading" },
      { angle: 18, label: "18° Daily", tractionPct: "31% traction", desc: "Optimal disc hydration + deep core" },
      { angle: 28, label: "28° Athletic", tractionPct: "47% traction", desc: "Post-lifting spine reset & mobility" },
    ],
    evminovMetrics: [
      { label: "Head Pressure", value: "Normal (0 spike)" },
      { label: "Core Muscles", value: "Active Stabilizers" },
      { label: "Home Footprint", value: "2.4\" Flat Fold" },
    ],
    evminovPoints: [
      { bold: "Head stays above heart:", text: "zero cranial blood rush, dizziness, or ocular pressure spikes." },
      { bold: "Full spine support:", text: "resonant Carpathian wood cushions every vertebra while deep stabilizers train." },
      { bold: "All-ages safe (4 to 85+):", text: "2-Piece & 3-Piece folding models store neatly in any bedroom or office." },
    ],
    invBadge: "Traditional Inversion Tables (60°–90°)",
    invSub: "Passive Hang Only",
    invWarningTag: "High Pressure Risk",
    invAria: "Traditional 90 degree upside down inversion table showing cranial blood rush and ankle clamping stress",
    invSvgTitle: "60°–90° Upside-Down Hang",
    invSvgSub: "Blood rushes to head/eyes • Clamped ankles • Bulky 16 sq ft frame",
    invMetrics: [
      { label: "Head Pressure", value: "High Spike" },
      { label: "Core Muscles", value: "0% (Passive)" },
      { label: "Home Footprint", value: "16 sq ft Steel" },
    ],
    invPoints: [
      { bold: "Upside-down pressure:", text: "hanging inverted raises blood pressure in the head, sinuses, and eyes." },
      { bold: "Ankle & knee strain:", text: "clamps full body weight onto ankles and knees with zero core strengthening." },
      { bold: "Passive rebound:", text: "without stabilizer activation, gravity re-compresses discs minutes after standing up." },
    ],
    ctaEyebrow: "Switch to Calm, Head-Up Decompression",
    ctaTitle: "Experience 15 minutes a day without hanging upside down",
    ctaSubtitle: "Choose our 2-Piece Folding Board (Support Stand included) or 3-Piece Travel Board in Natural Warm Amber Alder or Dark Walnut Pine.",
    ctaTrustPills: ["From $475 USD", "60-Day Home Trial", "HSA/FSA Eligible (with LMN)", "10-Yr Warranty"],
    ctaPrimary: "Configure Your Evminov Board",
    ctaSecondary: "Calculate Your Safe Angle",
    ctaCompareLink: "Read full clinical comparison",
  },
  es: {
    evminovBadge: "Método Evminov (8°–35° Cabeza Arriba)",
    evminovSub: "Activo + Relajado",
    evminovRecommended: "Opción Recomendada",
    evminovAria: "Tabla inclinada 3D Evminov que mantiene la cabeza elevada para descarga espinal calma",
    evminovHeadUp: "CABEZA SOBRE CORAZÓN",
    evminovSvgTitle: "Inclinación Controlada en Madera",
    evminovSvgSub: "Flujo sanguíneo normal • Sin pinzas de tobillo • Core profundo",
    evminovModes: [
      { angle: 12, label: "12° Suave", tractionPct: "21% tracción", desc: "Alivio lumbar y ciático suave" },
      { angle: 18, label: "18° Diario", tractionPct: "31% tracción", desc: "Hidratación discal + core profundo" },
      { angle: 28, label: "28° Atlético", tractionPct: "47% tracción", desc: "Recuperación post-entrenamiento" },
    ],
    evminovMetrics: [
      { label: "Presión Cefálica", value: "Normal (0 picos)" },
      { label: "Músculos Core", value: "Estabilizadores Activos" },
      { label: "Espacio en Casa", value: "6 cm Plegada" },
    ],
    evminovPoints: [
      { bold: "Cabeza sobre el corazón:", text: "cero congestión craneal, mareos o picos de presión ocular." },
      { bold: "Soporte espinal total:", text: "la madera resonante amortigua cada vértebra mientras entrena estabilizadores." },
      { bold: "Seguro para todas las edades (4–85+):", text: "modelos plegables de 2 y 3 piezas ideales para cualquier hogar." },
    ],
    invBadge: "Mesas de Inversión Tradicionales (60°–90°)",
    invSub: "Solo Colgado Pasivo",
    invWarningTag: "Alto Riesgo de Presión",
    invAria: "Mesa de inversión tradicional a 90 grados con congestión cefálica y estrés en tobillos",
    invSvgTitle: "Colgado Boca Abajo 60°–90°",
    invSvgSub: "Sangre hacia cabeza/ojos • Tobillos apretados • Ocupa 1,5 m²",
    invMetrics: [
      { label: "Presión Cefálica", value: "Pico Elevado" },
      { label: "Músculos Core", value: "0% (Pasivo)" },
      { label: "Espacio en Casa", value: "1,5 m² Acero" },
    ],
    invPoints: [
      { bold: "Presión invertida:", text: "colgar boca abajo eleva la presión en cabeza, senos paranasales y ojos." },
      { bold: "Estrés en tobillos y rodillas:", text: "cuelga todo el peso por los tobillos sin fortalecer el core." },
      { bold: "Rebote pasivo:", text: "sin activar estabilizadores, la gravedad vuelve a comprimir los discos en minutos." },
    ],
    ctaEyebrow: "Pasa a una Descompresión Calma con Cabeza Arriba",
    ctaTitle: "Disfruta 15 minutos al día sin colgarte boca abajo",
    ctaSubtitle: "Elige nuestra Tabla Plegable de 2 Piezas (con soporte incluido) o 3 Piezas de Viaje en Aliso Ámbar o Pino Nogal Oscuro.",
    ctaTrustPills: ["Desde $475 USD", "Prueba de 60 Días", "Elegible HSA/FSA (con LMN)", "Garantía 10 Años"],
    ctaPrimary: "Configurar Tu Tabla Evminov",
    ctaSecondary: "Calcular Tu Ángulo Seguro",
    ctaCompareLink: "Ver comparativa clínica completa",
  },
  fr: {
    evminovBadge: "Méthode Evminov (8°–35° Tête Haute)",
    evminovSub: "Actif + Détendu",
    evminovRecommended: "Choix Recommandé",
    evminovAria: "Planche Evminov 3D interactive gardant la tête au-dessus du cœur pour une décompression calme",
    evminovHeadUp: "TÊTE AU-DESSUS DU CŒUR",
    evminovSvgTitle: "Inclinaison Douce Contrôlée",
    evminovSvgSub: "Circulation normale • Sans serrage chevilles • Gainage profond",
    evminovModes: [
      { angle: 12, label: "12° Doux", tractionPct: "21% traction", desc: "Soulagement lombaire & sciatique" },
      { angle: 18, label: "18° Quotidien", tractionPct: "31% traction", desc: "Hydratation discale + gainage" },
      { angle: 28, label: "28° Sportif", tractionPct: "47% traction", desc: "Récupération post-entraînement" },
    ],
    evminovMetrics: [
      { label: "Pression Crânienne", value: "Normale (0 pic)" },
      { label: "Muscles Profonds", value: "Stabilisateurs Actifs" },
      { label: "Encombrement", value: "6 cm Repliée" },
    ],
    evminovPoints: [
      { bold: "Tête au-dessus du cœur :", text: "aucun afflux sanguin, vertige ni pic de pression oculaire." },
      { bold: "Soutien dorsal intégral :", text: "le bois résonant des Carpates amortit chaque vertèbre pendant le renforcement." },
      { bold: "Adapté de 4 à 85+ ans :", text: "modèles pliables 2 ou 3 pièces faciles à ranger dans une chambre ou un bureau." },
    ],
    invBadge: "Tables d'Inversion Classiques (60°–90°)",
    invSub: "Suspension Passive Seule",
    invWarningTag: "Risque de Pression",
    invAria: "Table d'inversion à 90 degrés montrant l'afflux sanguin vers la tête et la tension aux chevilles",
    invSvgTitle: "Suspension Tête en Bas 60°–90°",
    invSvgSub: "Afflux vers tête/yeux • Chevilles serrées • Cadre 1,5 m²",
    invMetrics: [
      { label: "Pression Crânienne", value: "Pic Élevé" },
      { label: "Muscles Profonds", value: "0% (Passif)" },
      { label: "Encombrement", value: "1,5 m² Acier" },
    ],
    invPoints: [
      { bold: "Pression inversée :", text: "se suspendre tête en bas augmente la pression crânienne et oculaire." },
      { bold: "Tension chevilles et genoux :", text: "supporte tout le poids par les chevilles sans aucun gainage." },
      { bold: "Effet rebond passif :", text: "sans muscles stabilisateurs, la gravité recomprime les disques en quelques minutes." },
    ],
    ctaEyebrow: "Passez à une Décompression Calme Tête Haute",
    ctaTitle: "15 minutes par jour sans vous suspendre tête en bas",
    ctaSubtitle: "Choisissez le modèle Pliable 2 Pièces (support inclus) ou 3 Pièces Voyage en Aulne Ambré Naturel ou Pin Noyer Foncé.",
    ctaTrustPills: ["Dès 475 $ USD", "Essai 60 Jours", "Éligible HSA/FSA (LMN)", "Garantie 10 Ans"],
    ctaPrimary: "Configurer Votre Planche",
    ctaSecondary: "Calculer Mon Angle Sûr",
    ctaCompareLink: "Lire la comparaison complète",
  },
  uk: {
    evminovBadge: "Методика Євмінова (8°–35° Головою Вгору)",
    evminovSub: "Активно + Спокійно",
    evminovRecommended: "Розумний Вибір",
    evminovAria: "Інтерактивна 3D-дошка Євмінова тримає голову вище серця для безпечного розвантаження хребта",
    evminovHeadUp: "ГОЛОВА ВИЩЕ СЕРЦЯ",
    evminovSvgTitle: "Керований Нахил на Дереві",
    evminovSvgSub: "Нормальний кровотік • Без затиску щиколоток • Глибокий кор",
    evminovModes: [
      { angle: 12, label: "12° Делікатний", tractionPct: "21% витяжки", desc: "М'яке розвантаження попереку та сідничного нерва" },
      { angle: 18, label: "18° Щоденний", tractionPct: "31% витяжки", desc: "Живлення дисків + активація глибокого кору" },
      { angle: 28, label: "28° Атлетичний", tractionPct: "47% витяжки", desc: "Відновлення спини після тренувань і навантажень" },
    ],
    evminovMetrics: [
      { label: "Тиск у Голові", value: "Норма (0 стрибків)" },
      { label: "М'язи Кору", value: "Активні Стабілізатори" },
      { label: "Місце Вдома", value: "6 см Складена" },
    ],
    evminovPoints: [
      { bold: "Голова вище серця:", text: "нуль припливу крові, запаморочення чи стрибків очного тиску." },
      { bold: "Повна опора хребта:", text: "резонансна деревина амортизує кожен хребець під час тренування стабілізаторів." },
      { bold: "Безпечно для будь-якого віку (4–85+):", text: "складні моделі 2-Piece та 3-Piece легко поміщаються в кімнаті чи офісі." },
    ],
    invBadge: "Звичайні Інверсійні Столи (60°–90°)",
    invSub: "Лише Пасивний Вис",
    invWarningTag: "Ризик Тиску",
    invAria: "Звичайний інверсійний стіл на 90 градусів із припливом крові до голови та навантаженням на щиколотки",
    invSvgTitle: "Вис Головою Вниз 60°–90°",
    invSvgSub: "Приплив до голови/очей • Затиснуті щиколотки • Рама 1,5 м²",
    invMetrics: [
      { label: "Тиск у Голові", value: "Різкий Стрибок" },
      { label: "М'язи Кору", value: "0% (Пасивно)" },
      { label: "Місце Вдома", value: "1,5 м² Сталь" },
    ],
    invPoints: [
      { bold: "Тиск у голові:", text: "вис догори ногами підвищує тиск у голові, пазухах та очах." },
      { bold: "Біль у щиколотках і колінах:", text: "утримує всю вагу тіла за щиколотки без зміцнення кору." },
      { bold: "Швидкий відкат:", text: "без активації м'язів-стабілізаторів гравітація знову стискає диски за лічені хвилини." },
    ],
    ctaEyebrow: "Переходьте на Спокійну Декомпресію Головою Вгору",
    ctaTitle: "15 хвилин на день для здорової спини без вису догори ногами",
    ctaSubtitle: "Обирайте складну модель 2-Piece (зі стійкою в комплекті) або 3-Piece Travel у кольорах Natural Warm Amber Alder чи Dark Walnut Pine.",
    ctaTrustPills: ["Від $475 USD", "Тест-драйв 60 Днів", "HSA/FSA (з LMN)", "Гарантія 10 Років"],
    ctaPrimary: "Налаштувати Свою Дошку",
    ctaSecondary: "Розрахувати Безпечний Кут",
    ctaCompareLink: "Читати повне клінічне порівняння",
  },
  ru: {
    evminovBadge: "Методика Евминова (8°–35° Головой Вверх)",
    evminovSub: "Активно + Спокойно",
    evminovRecommended: "Умный Выбор",
    evminovAria: "Интерактивная 3D-доска Евминова держит голову выше сердца для безопасной разгрузки позвоночника",
    evminovHeadUp: "ГОЛОВА ВЫШЕ СЕРДЦА",
    evminovSvgTitle: "Управляемый Наклон на Дереве",
    evminovSvgSub: "Нормальный кровоток • Без зажима лодыжек • Глубокий кор",
    evminovModes: [
      { angle: 12, label: "12° Щадящий", tractionPct: "21% вытяжки", desc: "Мягкая разгрузка поясницы и седалищного нерва" },
      { angle: 18, label: "18° Ежедневный", tractionPct: "31% вытяжки", desc: "Питание дисков + активация глубокого кора" },
      { angle: 28, label: "28° Атлетичный", tractionPct: "47% вытяжки", desc: "Восстановление спины после тренировок" },
    ],
    evminovMetrics: [
      { label: "Давление в Голове", value: "Норма (0 скачков)" },
      { label: "Мышцы Кора", value: "Активные Стабилизаторы" },
      { label: "Место Дома", value: "6 см В Сложенном Виде" },
    ],
    evminovPoints: [
      { bold: "Голова выше сердца:", text: "ноль прилива крови, головокружения и скачков глазного давления." },
      { bold: "Полная опора позвоночника:", text: "резонансная древесина амортизирует каждый позвонок при тренировке стабилизаторов." },
      { bold: "Безопасно для любого возраста (4–85+):", text: "складные модели 2-Piece и 3-Piece легко хранятся в спальне или офисе." },
    ],
    invBadge: "Обычные Инверсионные Столы (60°–90°)",
    invSub: "Только Пассивный Вис",
    invWarningTag: "Риск Давления",
    invAria: "Обычный инверсионный стол на 90 градусов с приливом крови к голове и нагрузкой на лодыжки",
    invSvgTitle: "Вис Головой Вниз 60°–90°",
    invSvgSub: "Прилив к голове/глазам • Зажатые лодыжки • Рама 1,5 м²",
    invMetrics: [
      { label: "Давление в Голове", value: "Резкий Скачок" },
      { label: "Мышцы Кора", value: "0% (Пассивно)" },
      { label: "Место Дома", value: "1,5 м² Сталь" },
    ],
    invPoints: [
      { bold: "Давление в голове:", text: "вис вниз головой повышает давление в голове, пазухах и глазах." },
      { bold: "Боль в лодыжках и коленях:", text: "подвешивает весь вес тела за лодыжки без укрепления кора." },
      { bold: "Быстрый откат:", text: "без активации стабилизаторов гравитация снова сжимает диски за считаные минуты." },
    ],
    ctaEyebrow: "Переходите на Спокойную Декомпрессию Головой Вверх",
    ctaTitle: "15 минут в день для здоровой спины без виса вверх ногами",
    ctaSubtitle: "Выбирайте складную модель 2-Piece (со стойкой в комплекте) или 3-Piece Travel в цветах Natural Warm Amber Alder или Dark Walnut Pine.",
    ctaTrustPills: ["От $475 USD", "Тест-драйв 60 Дней", "HSA/FSA (с LMN)", "Гарантия 10 Лет"],
    ctaPrimary: "Настроить Свою Доску",
    ctaSecondary: "Рассчитать Безопасный Угол",
    ctaCompareLink: "Читать полное клиническое сравнение",
  },
  de: {
    evminovBadge: "Evminov-Methode (8°–35° Kopf oben)",
    evminovSub: "Aktiv + Entspannt",
    evminovRecommended: "Empfohlene Wahl",
    evminovAria: "Interaktives 3D-Evminov-Board hält den Kopf über dem Herzen für ruhige Wirbelsäulen-Entlastung",
    evminovHeadUp: "KOPF ÜBER HERZ",
    evminovSvgTitle: "Kontrollierte Holz-Neigung",
    evminovSvgSub: "Normaler Blutfluss • Keine Knöchelklemmen • Tiefes Core-Training",
    evminovModes: [
      { angle: 12, label: "12° Sanft", tractionPct: "21% Traktion", desc: "Ruhige Lenden- & Ischias-Entlastung" },
      { angle: 18, label: "18° Täglich", tractionPct: "31% Traktion", desc: "Bandscheiben-Hydration + tiefer Core" },
      { angle: 28, label: "28° Athletisch", tractionPct: "47% Traktion", desc: "Post-Workout-Rücken-Reset" },
    ],
    evminovMetrics: [
      { label: "Kopfdruck", value: "Normal (0 Spitzen)" },
      { label: "Rumpfmuskulatur", value: "Aktive Stabilisatoren" },
      { label: "Platzbedarf", value: "6 cm Flach Klappbar" },
    ],
    evminovPoints: [
      { bold: "Kopf bleibt über dem Herzen:", text: "kein Blutstau im Kopf, kein Schwindel und keine Augendruckspitzen." },
      { bold: "Volle Wirbelsäulen-Stützung:", text: "resonantes Karpatenholz polstert jeden Wirbel, während tiefe Stabilisatoren trainieren." },
      { bold: "Sicher für alle Altersgruppen (4 bis 85+):", text: "2-teilige & 3-teilige Klappmodelle passen ordentlich in jedes Zimmer oder Büro." },
    ],
    invBadge: "Klassische Inversionsbänke (60°–90°)",
    invSub: "Nur passives Hängen",
    invWarningTag: "Hohes Druckrisiko",
    invAria: "Klassische 90-Grad-Inversionsbank mit Blutstau im Kopf und Knöchelbelastung",
    invSvgTitle: "60°–90° Kopfüber-Hängen",
    invSvgSub: "Blut staut in Kopf/Augen • Eingeklemmte Knöchel • Sperriger 1,5 m² Rahmen",
    invMetrics: [
      { label: "Kopfdruck", value: "Starke Spitze" },
      { label: "Rumpfmuskulatur", value: "0% (Passiv)" },
      { label: "Platzbedarf", value: "1,5 m² Stahlrahmen" },
    ],
    invPoints: [
      { bold: "Kopfüber-Druck:", text: "Kopfüberhängen erhöht den Druck in Kopf, Nebenhöhlen und Augen." },
      { bold: "Knöchel- & Kniebelastung:", text: "hängt das gesamte Körpergewicht an Knöchel und Knie ohne jede Rumpfkräftigung." },
      { bold: "Passiver Rückfall:", text: "ohne Aktivierung der Stabilisatoren staucht die Schwerkraft die Bandscheiben Minuten nach dem Aufstehen erneut." },
    ],
    ctaEyebrow: "Wechseln Sie zu ruhiger Kopf-oben-Dekompression",
    ctaTitle: "15 Minuten täglich ohne Kopfüber-Hängen",
    ctaSubtitle: "Wählen Sie unser 2-teiliges Klappboard (inkl. Stützständer) oder das 3-teilige Reiseboard in Natural Warm Amber Alder oder Dark Walnut Pine.",
    ctaTrustPills: ["Ab $475 USD", "60-Tage-Testphase", "HSA/FSA (mit LMN)", "10 Jahre Garantie"],
    ctaPrimary: "Ihr Evminov Board Konfigurieren",
    ctaSecondary: "Sicheren Winkel Berechnen",
    ctaCompareLink: "Vollständigen klinischen Vergleich lesen",
  },
};

export interface HomeMatrixCopy {
  colFactor: string;
  colEvminov: string;
  colInversion: string;
  colClinic: string;
  rows: Array<{ metric: string; evminov: string; inversion: string; clinic: string }>;
}

export const HOME_MATRIX_COPY: Record<Locale, HomeMatrixCopy> = {
  en: {
    colFactor: "Factor",
    colEvminov: "Evminov Spine Board",
    colInversion: "90° Inversion Tables",
    colClinic: "Clinic Traction Visits",
    rows: [
      { metric: "Head & Eye Pressure", evminov: "Safe upright 8°–35° (zero rush)", inversion: "High cranial & intraocular spike", clinic: "Safe horizontal table" },
      { metric: "Active Core Strengthening", evminov: "Yes — builds deep stabilizers", inversion: "No — passive hanging only", clinic: "Passive machine pull only" },
      { metric: "Ankle & Knee Strain", evminov: "Zero — relaxed overhead grip", inversion: "Painful ankle locks & knee pull", clinic: "Zero ankle clamping" },
      { metric: "Cervical Neck Traction", evminov: "Free Glisson Loop included", inversion: "Not included", clinic: "Separate billed modality" },
      { metric: "Floor Space Required", evminov: "Folds flat to 2.4\" on wall", inversion: "Bulky 15+ sq ft steel A-frame", clinic: "Requires driving & parking" },
      { metric: "3-Year Cost", evminov: "$450 one-time (~$315 HSA)", inversion: "$350–$600 (often unused)", clinic: "$4,000–$12,000+ recurring" },
    ],
  },
  es: {
    colFactor: "Factor",
    colEvminov: "Tabla Espinal Evminov",
    colInversion: "Mesas de Inversión 90°",
    colClinic: "Visitas a Clínica",
    rows: [
      { metric: "Presión Cefálica y Ocular", evminov: "Seguro cabeza arriba 8°–35°", inversion: "Pico alto craneal y ocular", clinic: "Mesa horizontal segura" },
      { metric: "Fortalecimiento del Core", evminov: "Sí — entrena estabilizadores", inversion: "No — solo colgado pasivo", clinic: "Solo tracción pasiva" },
      { metric: "Tensión en Tobillos y Rodillas", evminov: "Cero — agarre superior suave", inversion: "Pinzas dolorosas en tobillos", clinic: "Sin pinzas de tobillo" },
      { metric: "Tracción Cervical", evminov: "Petla Glissona incluida gratis", inversion: "No incluida", clinic: "Sesión cobrada aparte" },
      { metric: "Espacio en Casa", evminov: "Se pliega a 6 cm en la pared", inversion: "Marco de acero de 1,5 m²", clinic: "Requiere traslados" },
      { metric: "Costo a 3 Años", evminov: "$450 pago único (~$315 HSA)", inversion: "$350–$600 (suele abandonarse)", clinic: "$4,000–$12,000+ recurrentes" },
    ],
  },
  fr: {
    colFactor: "Critère",
    colEvminov: "Planche Evminov",
    colInversion: "Tables d'Inversion 90°",
    colClinic: "Séances en Clinique",
    rows: [
      { metric: "Pression Crânienne & Oculaire", evminov: "Sûr tête haute 8°–35°", inversion: "Pic oculaire & crânien élevé", clinic: "Table horizontale sûre" },
      { metric: "Gainage Profond Actif", evminov: "Oui — muscles stabilisateurs", inversion: "Non — suspension passive", clinic: "Traction passive seule" },
      { metric: "Tension Chevilles & Genoux", evminov: "Zéro — poignées hautes", inversion: "Pinces douloureuses", clinic: "Aucun serrage cheville" },
      { metric: "Traction Cervicale", evminov: "Boucle de Glisson offerte", inversion: "Non incluse", clinic: "Facturée séparément" },
      { metric: "Encombrement au Sol", evminov: "Pliage plat 6 cm au mur", inversion: "Cadre acier 1,5 m²", clinic: "Trajets & attente" },
      { metric: "Coût sur 3 Ans", evminov: "450 $ unique (~315 $ HSA)", inversion: "350–600 $ (souvent inutilisée)", clinic: "4 000–12 000 $+ cumulés" },
    ],
  },
  uk: {
    colFactor: "Критерій",
    colEvminov: "Дошка Євмінова",
    colInversion: "Інверсійні Столи 90°",
    colClinic: "Візити в Клініку",
    rows: [
      { metric: "Тиск у Голові та Очах", evminov: "Безпечно 8°–35° (без припливу)", inversion: "Різкий стрибок очного тиску", clinic: "Горизонтальний стіл" },
      { metric: "Зміцнення Глибокого Кору", evminov: "Так — тренує стабілізатори", inversion: "Ні — лише пасивний вис", clinic: "Лише пасивна витяжка" },
      { metric: "Навантаження на Щиколотки", evminov: "Нульове — зручний хват руками", inversion: "Болючі затискачі щиколоток", clinic: "Без затиску щиколоток" },
      { metric: "Шийна Тракція", evminov: "Петля Гліссона в подарунок", inversion: "Не входить у комплект", clinic: "Окрема платна процедура" },
      { metric: "Місце в Квартурі", evminov: "Складається до 6 см до стіни", inversion: "Громіздка рама 1,5 м²", clinic: "Дорога та черги" },
      { metric: "Витрати за 3 Роки", evminov: "$450 разово (~$315 HSA)", inversion: "$350–$600 (часто припадає пилом)", clinic: "$4,000–$12,000+ постійно" },
    ],
  },
  ru: {
    colFactor: "Критерий",
    colEvminov: "Доска Евминова",
    colInversion: "Инверсионные Столы 90°",
    colClinic: "Визиты в Клинику",
    rows: [
      { metric: "Давление в Голове и Глазах", evminov: "Безопасно 8°–35° (без прилива)", inversion: "Резкий скачок глазного давления", clinic: "Горизонтальный стол" },
      { metric: "Укрепление Глубокого Кора", evminov: "Да — тренирует стабилизаторы", inversion: "Нет — только пассивный вис", clinic: "Только пассивная вытяжка" },
      { metric: "Нагрузка на Лодыжки", evminov: "Нулевая — удобный хват руками", inversion: "Болезненные зажимы лодыжек", clinic: "Без зажима лодыжек" },
      { metric: "Шейная Тракция", evminov: "Петля Глиссона в подарок", inversion: "Не входит в комплект", clinic: "Отдельная платная процедура" },
      { metric: "Место в Квартире", evminov: "Складывается до 6 см к стене", inversion: "Громоздкая рама 1,5 м²", clinic: "Дорога и очереди" },
      { metric: "Расходы за 3 Года", evminov: "$450 разово (~$315 HSA)", inversion: "$350–$600 (часто пылится)", clinic: "$4,000–$12,000+ регулярно" },
    ],
  },
  de: {
    colFactor: "Faktor",
    colEvminov: "Evminov Board",
    colInversion: "90° Inversionsbänke",
    colClinic: "Klinik-Traktionstermine",
    rows: [
      { metric: "Kopf- & Augendruck", evminov: "Sicher aufrecht 8°–35° (kein Stau)", inversion: "Hoher Kopf- & Augendruckanstieg", clinic: "Sichere horizontale Liege" },
      { metric: "Aktive Rumpfkräftigung", evminov: "Ja — stärkt tiefe Stabilisatoren", inversion: "Nein — nur passives Hängen", clinic: "Nur passiver Maschinenzug" },
      { metric: "Knöchel- & Kniebelastung", evminov: "Keine — entspannter Haltegriff", inversion: "Schmerzhafte Knöchelklemmen", clinic: "Keine Knöchelfixierung" },
      { metric: "Halswirbel-Traktion", evminov: "Glisson-Schlaufe gratis enthalten", inversion: "Nicht enthalten", clinic: "Separat abgerechnete Leistung" },
      { metric: "Platzbedarf zuhause", evminov: "Klappt auf 6 cm flach an die Wand", inversion: "Sperriger 1,5 m² Stahlrahmen", clinic: "Anfahrt & Parkplatzsuche" },
      { metric: "3-Jahres-Kosten", evminov: "$450 einmalig (~$315 HSA)", inversion: "$350–$600 (oft ungenutzt)", clinic: "$4,000–$12,000+ laufend" },
    ],
  },
};

export interface GlobalRoiCopy {
  badge: string;
  heading: string;
  intro: string;
  emblemTop: string;
  emblemSub: string;
  kpi1Title: string;
  kpi1Desc: string;
  kpi2Title: string;
  kpi2Desc: string;
  kpi3Title: string;
  kpi3Desc: string;
  kpi4Title: string;
  kpi4DescPrefix: string;
  kpi4DescSuffix: string;
  calcBadge: string;
  calcHeading: string;
  calcSub: string;
  visitsLabel: string;
  visitsUnit: string;
  copayLabel: string;
  clinicBarLabel: string;
  boardBarLabel: string;
  savingsLabel: string;
  ctaReserve: string;
  logisticsEyebrow: string;
  logisticsHeading: string;
  regions: Array<{ region: string; countries: string; transit: string }>;
}

export const GLOBAL_ROI_COPY: Record<Locale, GlobalRoiCopy> = {
  en: {
    badge: "Continuous Spine Methodology Since 1996 • 30 Years Worldwide",
    heading: "Trusted Across 40+ Countries — Built to Save Thousands vs. Endless Clinic Visits",
    intro: "Founded in Kyiv in 1996 by honored rowing coach Vyacheslav Evminov, the patented inclined board has supported home spine care, studios, and athletic programs for three decades — replacing recurring commute-heavy appointments with 10 calm minutes at home.",
    emblemTop: "EVMINOV ORIGINAL",
    emblemSub: "Patented Since 1996",
    kpi1Title: "Years Since 1996",
    kpi1Desc: "Three decades of continuous spine methodology across studios, sports clubs, and home setups.",
    kpi2Title: "Countries Delivered",
    kpi2Desc: "Glendale, CA express dispatch for all 50 US states plus worldwide tracked delivery.",
    kpi3Title: "Hours Reclaimed / Year",
    kpi3Desc: "Skip traffic, parking, and waiting rooms with a 10-minute home routine on your schedule.",
    kpi4Title: "Typical Annual Clinic Spend",
    kpi4DescPrefix: "One-time $450 board pays for itself in ~",
    kpi4DescSuffix: "typical therapy or massage sessions.",
    calcBadge: "Interactive Time & Cost Freedom Calculator",
    calcHeading: "See How Fast an Evminov Board Pays for Itself",
    calcSub: "Adjust your typical massage, chiropractic, or physical therapy co-pays to compare 3-year costs.",
    visitsLabel: "Clinic Visits / Week",
    visitsUnit: "× / week",
    copayLabel: "Avg. Co-Pay / Session",
    clinicBarLabel: "3 Years of Recurring Clinic Co-Pays",
    boardBarLabel: "Evminov Board (One-Time • 10-Year Frame Warranty)",
    savingsLabel: "Est. 3-Year Savings",
    ctaReserve: "Reserve Your Board ($450)",
    logisticsEyebrow: "Worldwide Tracked Logistics",
    logisticsHeading: "Global Delivery Coverage (40+ Countries)",
    regions: [
      { region: "North America", countries: "United States (All 50 States), Canada, Mexico", transit: "1–4 business days (CA Express)" },
      { region: "European Union", countries: "France, Germany, Poland, Italy, Spain, Netherlands, Austria, Sweden", transit: "3–7 business days" },
      { region: "United Kingdom & Ireland", countries: "England, Scotland, Wales, Northern Ireland, Ireland", transit: "5–8 business days" },
      { region: "Ukraine & Eastern Europe", countries: "Kyiv, Lviv, Odesa, Dnipro & regional partner centers", transit: "2–4 business days" },
      { region: "Australia & Oceania", countries: "Sydney, Melbourne, Brisbane, Perth, New Zealand", transit: "7–12 business days" },
      { region: "Middle East & Asia", countries: "UAE, Israel, Japan, South Korea, Singapore", transit: "7–12 business days" },
    ],
  },
  es: {
    badge: "Metodología Espinal Continua Desde 1996 • 30 Años en el Mundo",
    heading: "Confiado en Más de 40 Países — Ahorre Miles Frente a Visitas Sin Fin a Clínicas",
    intro: "Fundada en Kyiv en 1996 por el entrenador Vyacheslav Evminov, la tabla inclinada patentada lleva tres décadas ayudando en hogares y clubes — sustituyendo citas costosas por 10 minutos tranquilos en casa.",
    emblemTop: "EVMINOV ORIGINAL",
    emblemSub: "Patentado Desde 1996",
    kpi1Title: "Años Desde 1996",
    kpi1Desc: "Tres décadas de metodología espinal continua en estudios, clubes deportivos y hogares.",
    kpi2Title: "Países con Entrega",
    kpi2Desc: "Envío exprés desde Glendale, CA a los 50 estados de EE. UU. y envíos globales con rastreo.",
    kpi3Title: "Horas Ahorradas / Año",
    kpi3Desc: "Evite tráfico, estacionamiento y salas de espera con 10 minutos en su horario.",
    kpi4Title: "Gasto Anual Típico en Clínica",
    kpi4DescPrefix: "Una tabla de $450 se amortiza en ~",
    kpi4DescSuffix: "sesiones típicas de terapia o masaje.",
    calcBadge: "Calculadora Interactiva de Ahorro y Tiempo",
    calcHeading: "Vea Qué Rápido Se Amortiza Su Tabla Evminov",
    calcSub: "Ajuste sus copagos habituales de fisioterapia, quiropráctica o masaje para comparar 3 años.",
    visitsLabel: "Visitas / Semana",
    visitsUnit: "× / semana",
    copayLabel: "Copago Promedio / Sesión",
    clinicBarLabel: "3 Años de Copagos Recurrentes en Clínica",
    boardBarLabel: "Tabla Evminov (Pago Único • Garantía 10 Años)",
    savingsLabel: "Ahorro Est. en 3 Años",
    ctaReserve: "Reservar Mi Tabla ($450)",
    logisticsEyebrow: "Logística Mundial con Rastreo",
    logisticsHeading: "Cobertura Global (40+ Países)",
    regions: [
      { region: "Norteamérica", countries: "EE. UU. (50 estados), Canadá, México", transit: "1–4 días hábiles (CA Express)" },
      { region: "Unión Europea", countries: "España, Francia, Alemania, Polonia, Italia, Países Bajos", transit: "3–7 días hábiles" },
      { region: "Reino Unido e Irlanda", countries: "Inglaterra, Escocia, Gales, Irlanda", transit: "5–8 días hábiles" },
      { region: "Ucrania y Europa del Este", countries: "Kyiv, Lviv, Odesa, Dnipro y centros asociados", transit: "2–4 días hábiles" },
      { region: "Australia y Oceanía", countries: "Sídney, Melbourne, Brisbane, Nueva Zelanda", transit: "7–12 días hábiles" },
      { region: "Oriente Medio y Asia", countries: "EAU, Israel, Japón, Corea del Sur, Singapur", transit: "7–12 días hábiles" },
    ],
  },
  fr: {
    badge: "Méthode Vertébrale Continue Depuis 1996 • 30 Ans dans le Monde",
    heading: "Plébiscitée dans 40+ Pays — Économisez des Milliers vs. des Séances Sans Fin",
    intro: "Fondée à Kyiv en 1996 par l'entraîneur Vyacheslav Evminov, la planche inclinée brevetée accompagne foyers et sportifs depuis trois décennies — remplaçant les trajets répétés par 10 minutes calmes chez vous.",
    emblemTop: "EVMINOV ORIGINAL",
    emblemSub: "Breveté Depuis 1996",
    kpi1Title: "Ans Depuis 1996",
    kpi1Desc: "Trois décennies de méthode vertébrale continue en studios, clubs et à domicile.",
    kpi2Title: "Pays Livrés",
    kpi2Desc: "Expédition express depuis Glendale, CA (50 États US) et livraison mondiale suivie.",
    kpi3Title: "Heures Gagnées / An",
    kpi3Desc: "Évitez trajets, parking et salles d'attente avec 10 minutes à votre rythme.",
    kpi4Title: "Coût Annuel Moyen en Clinique",
    kpi4DescPrefix: "Une planche à 450 $ est rentabilisée en ~",
    kpi4DescSuffix: "séances de kiné ou massage.",
    calcBadge: "Calculateur Interactif Temps & Économies",
    calcHeading: "Découvrez en Combien de Séances Votre Planche Est Rentabilisée",
    calcSub: "Ajustez vos tarifs habituels de kiné, ostéo ou massage pour comparer sur 3 ans.",
    visitsLabel: "Séances / Semaine",
    visitsUnit: "× / sem.",
    copayLabel: "Tarif Moyen / Séance",
    clinicBarLabel: "3 Ans de Séances Répétées en Cabinet",
    boardBarLabel: "Planche Evminov (Achat Unique • Garantie 10 Ans)",
    savingsLabel: "Économie Est. sur 3 Ans",
    ctaReserve: "Réserver Ma Planche (450 $)",
    logisticsEyebrow: "Logistique Internationale Suivie",
    logisticsHeading: "Couverture Mondiale (40+ Pays)",
    regions: [
      { region: "Amérique du Nord", countries: "États-Unis (50 États), Canada, Mexique", transit: "1–4 jours ouvrés (CA Express)" },
      { region: "Union Européenne", countries: "France, Allemagne, Pologne, Italie, Espagne, Belgique, Suisse", transit: "3–7 jours ouvrés" },
      { region: "Royaume-Uni & Irlande", countries: "Angleterre, Écosse, Pays de Galles, Irlande", transit: "5–8 jours ouvrés" },
      { region: "Ukraine & Europe de l'Est", countries: "Kyiv, Lviv, Odesa, Dnipro & centres partenaires", transit: "2–4 jours ouvrés" },
      { region: "Australie & Océanie", countries: "Sydney, Melbourne, Brisbane, Nouvelle-Zélande", transit: "7–12 jours ouvrés" },
      { region: "Moyen-Orient & Asie", countries: "EAU, Israël, Japon, Corée du Sud, Singapour", transit: "7–12 jours ouvrés" },
    ],
  },
  uk: {
    badge: "Безперервна Методика з 1996 Року • 30 Років у Світі",
    heading: "Довіра у 40+ Країнах — Економте Тисячі Замість Нескінченних Візитів у Клініки",
    intro: "Заснована в Києві у 1996 році заслуженим тренером В'ячеславом Євміновим, запатентована похила дошка вже три десятиліття допомагає вдома, у студіях та спортклубах — замінюючи поїздки на 10 спокійних хвилин удома.",
    emblemTop: "EVMINOV ОРИГІНАЛ",
    emblemSub: "Запатентовано з 1996",
    kpi1Title: "Років із 1996",
    kpi1Desc: "Три десятиліття перевіреної методики в центрах, спортклубах та домашніх умовах.",
    kpi2Title: "Країн Доставки",
    kpi2Desc: "Експрес-доставка з Глендейла (CA) по всіх 50 штатах США та по всьому світу.",
    kpi3Title: "Годин Збережено / Рік",
    kpi3Desc: "Без заторів, паркування та черг — 10 хвилин вдома у зручний для вас час.",
    kpi4Title: "Типові Витрати на Клініку / Рік",
    kpi4DescPrefix: "Разова покупка дошки за $450 окупається за ~",
    kpi4DescSuffix: "сеансів масажу чи фізіотерапії.",
    calcBadge: "Інтерактивний Калькулятор Часу та Економії",
    calcHeading: "Порахуйте, Як Швидко Окупиться Дошка Євмінова",
    calcSub: "Вкажіть вашу типову частоту та вартість сеансів масажу чи мануальної терапії за 3 роки.",
    visitsLabel: "Візитів / Тиждень",
    visitsUnit: "× / тиждень",
    copayLabel: "Середня Ціна Сеансу",
    clinicBarLabel: "3 Роки Регулярних Візитів у Клініку",
    boardBarLabel: "Дошка Євмінова (Разово • Гарантія 10 Років)",
    savingsLabel: "Орієнтовна Економія за 3 Роки",
    ctaReserve: "Забронювати Дошку ($450)",
    logisticsEyebrow: "Міжнародна Логістика з Трекінгом",
    logisticsHeading: "Географія Доставки (40+ Країн)",
    regions: [
      { region: "Північна Америка", countries: "США (усі 50 штатів), Канада, Мексика", transit: "1–4 роб. дні (CA Express)" },
      { region: "Європейський Союз", countries: "Польща, Німеччина, Франція, Італія, Іспанія, Нідерланди", transit: "3–7 роб. днів" },
      { region: "Велика Британія та Ірландія", countries: "Англія, Шотландія, Уельс, Ірландія", transit: "5–8 роб. днів" },
      { region: "Україна та Східна Європа", countries: "Київ, Львів, Одеса, Дніпро та партнерські центри", transit: "2–4 роб. дні" },
      { region: "Австралія та Океанія", countries: "Сідней, Мельбурн, Брисбен, Нова Зеландія", transit: "7–12 роб. днів" },
      { region: "Близький Схід та Азія", countries: "ОАЕ, Ізраїль, Японія, Південна Корея, Сінгапур", transit: "7–12 роб. днів" },
    ],
  },
  ru: {
    badge: "Непрерывная Методика с 1996 Года • 30 Лет в Мире",
    heading: "Доверие в 40+ Странах — Экономьте Тысячи Вместо Бесконечных Визитов в Клиники",
    intro: "Основанная в Киеве в 1996 году заслуженным тренером Вячеславом Евминовым, запатентованная наклонная доска уже три десятилетия помогает дома, в студиях и спортклубах — заменяя поездки на 10 спокойных минут дома.",
    emblemTop: "EVMINOV ОРИГИНАЛ",
    emblemSub: "Запатентовано с 1996",
    kpi1Title: "Лет с 1996 Года",
    kpi1Desc: "Три десятилетия проверенной методики в центрах, спортклубах и дома.",
    kpi2Title: "Стран Доставки",
    kpi2Desc: "Экспресс-доставка из Глендейла (CA) по всем 50 штатам США и по всему миру.",
    kpi3Title: "Часов Сохранено / Год",
    kpi3Desc: "Без пробок, парковки и очередей — 10 минут дома в удобное время.",
    kpi4Title: "Обычные Расходы на Клинику / Год",
    kpi4DescPrefix: "Разовая покупка доски за $450 окупается за ~",
    kpi4DescSuffix: "сеансов массажа или физиотерапии.",
    calcBadge: "Интерактивный Калькулятор Времени и Экономии",
    calcHeading: "Посчитайте, Как Быстро Окупится Доска Евминова",
    calcSub: "Укажите вашу обычную частоту и стоимость сеансов массажа или терапии за 3 года.",
    visitsLabel: "Визитов / Неделю",
    visitsUnit: "× / неделю",
    copayLabel: "Средняя Цена Сеанса",
    clinicBarLabel: "3 Года Регулярных Визитов в Клинику",
    boardBarLabel: "Доска Евминова (Разово • Гарантия 10 Лет)",
    savingsLabel: "Ориентировочная Экономия за 3 Года",
    ctaReserve: "Забронировать Доску ($450)",
    logisticsEyebrow: "Международная Логистика с Трекингом",
    logisticsHeading: "География Доставки (40+ Стран)",
    regions: [
      { region: "Северная Америка", countries: "США (все 50 штатов), Канада, Мексика", transit: "1–4 раб. дня (CA Express)" },
      { region: "Европейский Союз", countries: "Польша, Германия, Франция, Италия, Испания, Нидерланды", transit: "3–7 раб. дней" },
      { region: "Великобритания и Ирландия", countries: "Англия, Шотландия, Уэльс, Ирландия", transit: "5–8 раб. дней" },
      { region: "Украина и Восточная Европа", countries: "Киев, Львов, Одесса, Днепр и партнёрские центры", transit: "2–4 раб. дня" },
      { region: "Австралия и Океания", countries: "Сидней, Мельбурн, Брисбен, Новая Зеландия", transit: "7–12 раб. дней" },
      { region: "Ближний Восток и Азия", countries: "ОАЭ, Израиль, Япония, Южная Корея, Сингапур", transit: "7–12 раб. дней" },
    ],
  },
  de: {
    badge: "Kontinuierliche Wirbelsäulen-Methodik seit 1996 • 30 Jahre weltweit",
    heading: "In über 40 Ländern bewährt — Spart Tausende gegenüber endlosen Klinikbesuchen",
    intro: "1996 in Kyjiw vom verdienten Rudertrainer Wjatscheslaw Ewminow gegründet, unterstützt das patentierte geneigte Board seit drei Jahrzehnten Privathaushalte, Studios und Sportprogramme — und ersetzt zeitraubende Termine durch 10 ruhige Minuten zuhause.",
    emblemTop: "EVMINOV ORIGINAL",
    emblemSub: "Patentiert seit 1996",
    kpi1Title: "Jahre seit 1996",
    kpi1Desc: "Drei Jahrzehnte kontinuierliche Wirbelsäulen-Methodik in Studios, Sportvereinen und Privathaushalten.",
    kpi2Title: "Belieferte Länder",
    kpi2Desc: "Expressversand ab Glendale, CA in alle 50 US-Bundesstaaten sowie weltweiter Versand mit Sendungsverfolgung.",
    kpi3Title: "Gesparte Stunden / Jahr",
    kpi3Desc: "Kein Stau, keine Parkplatzsuche, kein Wartezimmer — 10 Minuten zuhause nach Ihrem eigenen Zeitplan.",
    kpi4Title: "Typische Klinik-Kosten / Jahr",
    kpi4DescPrefix: "Ein einmaliges $450-Board amortisiert sich bereits nach ~",
    kpi4DescSuffix: "typischen Therapie- oder Massage-Sitzungen.",
    calcBadge: "Interaktiver Zeit- & Kosten-Ersparnisrechner",
    calcHeading: "Sehen Sie, wie schnell sich ein Evminov Board bezahlt macht",
    calcSub: "Passen Sie Ihre üblichen Zuzahlungen für Massage, Chiropraktik oder Physiotherapie für den 3-Jahres-Vergleich an.",
    visitsLabel: "Termine / Woche",
    visitsUnit: "× / Woche",
    copayLabel: "Durchschn. Eigenanteil / Sitzung",
    clinicBarLabel: "3 Jahre wiederkehrende Klinik-Zuzahlungen",
    boardBarLabel: "Evminov Board (Einmalig • 10 Jahre Rahmengarantie)",
    savingsLabel: "Gesch. 3-Jahres-Ersparnis",
    ctaReserve: "Ihr Board reservieren ($450)",
    logisticsEyebrow: "Weltweite Logistik mit Tracking",
    logisticsHeading: "Weltweite Lieferabdeckung (40+ Länder)",
    regions: [
      { region: "Nordamerika", countries: "USA (alle 50 Bundesstaaten), Kanada, Mexiko", transit: "1–4 Werktage (CA Express)" },
      { region: "Europäische Union", countries: "Deutschland, Österreich, Frankreich, Polen, Italien, Spanien, Niederlande, Schweden", transit: "3–7 Werktage" },
      { region: "Großbritannien & Irland", countries: "England, Schottland, Wales, Nordirland, Irland", transit: "5–8 Werktage" },
      { region: "Ukraine & Osteuropa", countries: "Kyjiw, Lwiw, Odessa, Dnipro & regionale Partnerzentren", transit: "2–4 Werktage" },
      { region: "Australien & Ozeanien", countries: "Sydney, Melbourne, Brisbane, Perth, Neuseeland", transit: "7–12 Werktage" },
      { region: "Naher Osten & Asien", countries: "VAE, Israel, Japan, Südkorea, Singapur", transit: "7–12 Werktage" },
    ],
  },
};

export interface AudienceTabCopy {
  id: string;
  label: string;
  angle: string;
  duration: string;
  problemTitle: string;
  problemDesc: string;
  whyOthersFail: string;
  evminovSolution: [string, string, string];
  ctaLabel: string;
}

export interface AthleteSectionCopy {
  badge: string;
  heading: string;
  subtitle: string;
  tablistAria: string;
  whyShortfallLabel: string;
  calcCta: string;
  stripHeading: string;
  stripLabels: string[];
  tabs: AudienceTabCopy[];
}

export const ATHLETE_DESK_COPY: Record<Locale, AthleteSectionCopy> = {
  en: {
    badge: "Performance & Everyday Ergonomics",
    heading: "Spine Restoration for Athletes, Desk Workers, Nurses & Active Lifestyles",
    subtitle: "Why traditional pull-up bars, foam rollers, and extreme inversion tables fall short — and how calibrated inclined unloading restores spinal comfort in 10 minutes.",
    tablistAria: "Audience spine recovery profiles",
    whyShortfallLabel: "Why Common Shortcuts Fall Short:",
    calcCta: "Calculate Your Safe Angle",
    stripHeading: "Authentic Evminov Movement Library",
    stripLabels: ["Pelvic Bridge", "Lateral Symmetry", "Lumbar Mobility", "Passive Unload", "Prone Stabilizers", "Posterior Chain", "Hip Flexor Release", "Thoracic Flow"],
    tabs: [
      {
        id: "athletes",
        label: "Strength Athletes & Lifters",
        angle: "20°–35° Athletic",
        duration: "12–15 min post-workout",
        problemTitle: "Barbell Compression After Heavy Deadlifts, Squats & CrossFit",
        problemDesc: "Heavy axial loading compresses lumbar discs and leaves paraspinal erectors locked tight for 48–72 hours. Hanging from a pull-up bar forces your lats and grip to tense — preventing deep spinal muscles from actually letting go.",
        whyOthersFail: "Pull-up bar hanging strains shoulders before the lower back relaxes; foam rollers only massage surface fascia without creating true longitudinal space.",
        evminovSolution: [
          "Lie supported along resilient Carpathian pine so erectors turn off while gravity gently elongates lumbar segments.",
          "Pair decompression with unloaded core activation (Wide Heavy-Duty model rated up to 330 lbs & 6'9\").",
          "Integrates directly into home gym walls — folds flat to 2.4\" between lifting sessions.",
        ],
        ctaLabel: "Explore Athlete Spine Recovery",
      },
      {
        id: "desk",
        label: "Desk & Remote Workers",
        angle: "12°–18° Daily Reset",
        duration: "10 min after work",
        problemTitle: "8+ Hours of Seated Compression, Tight Hip Flexors & Tech-Neck",
        problemDesc: "Prolonged sitting places up to 40% more pressure on lower lumbar discs than standing, shortening hip flexors (psoas) while pulling shoulders and cervical vertebrae forward.",
        whyOthersFail: "Ergonomic chairs slow slouching but never reverse gravity's downward axial compression accumulated across an 8-hour workday.",
        evminovSolution: [
          "10 calm evening minutes open tight chest fascia, lengthen shortened psoas muscles, and unload L4–S1 discs.",
          "Includes the padded Glisson Cervical Loop FREE for gentle 8°–12° neck and upper-back tension release.",
          "Mounts neatly behind a home-office door or pairs with the No-Drill Apartment Stand.",
        ],
        ctaLabel: "Explore Desk Worker Posture",
      },
      {
        id: "standing",
        label: "Nurses & Standing Shifts",
        angle: "10°–16° Evening Unload",
        duration: "8–12 min post-shift",
        problemTitle: "12-Hour Concrete Floors, Lumbar Fatigue & Leg Heaviness",
        problemDesc: "Nurses, surgeons, chefs, educators, and retail staff endure relentless vertical gravity all shift, leaving lower-back facet joints compressed and legs aching by evening.",
        whyOthersFail: "Lying flat on a soft couch offers no gentle longitudinal traction to restore natural lumbar spacing after 12 hours upright.",
        evminovSolution: [
          "Immediate zero-axial-load supine position eases compressed lower-back tightness within minutes.",
          "Gentle rhythmic ankle flexes and low-incline glides encourage circulation and calm nervous-system recovery.",
          "Lightweight Select Ukrainian Alder option (~19–21 lbs) makes angle changes effortless for anyone.",
        ],
        ctaLabel: "Explore Lower Back & Sciatic Mobility",
      },
      {
        id: "cervical",
        label: "Neck, Shoulders & Tactical",
        angle: "8°–12° Cervical / 18° Core",
        duration: "8–10 min daily",
        problemTitle: "Upper-Back Stiffness, Gear Load & Cervical Tension",
        problemDesc: "Whether from heavy vests, long commutes, or laptop screens, chronic upper-thoracic and neck tension restricts mobility and radiates fatigue across the shoulder blades.",
        whyOthersFail: "Inflatable neck collars can compress the jaw unevenly and ignore thoracic posture alignment underneath.",
        evminovSolution: [
          "Padded cotton Glisson Loop aligns smoothly with the inclined board plane at ultra-gentle 8°–12° angles.",
          "Builds symmetrical upper-back stabilizer endurance without impact or violent cracking.",
          "One compact station covers cervical, thoracic, and lumbar conditioning for the whole household.",
        ],
        ctaLabel: "Explore Cervical Neck Care",
      },
    ],
  },
  es: {
    badge: "Rendimiento y Ergonomía Diaria",
    heading: "Restauración Espinal para Atletas, Oficina, Enfermería y Vida Activa",
    subtitle: "Por qué las barras de dominadas, rodillos de espuma y mesas de inversión extremas se quedan cortos — y cómo 10 minutos inclinados restauran el confort.",
    tablistAria: "Perfiles de recuperación espinal",
    whyShortfallLabel: "Por Qué Fallan los Atajos Comunes:",
    calcCta: "Calcular Mi Ángulo Seguro",
    stripHeading: "Biblioteca de Movimientos Evminov",
    stripLabels: ["Puente Pélvico", "Simetría Lateral", "Movilidad Lumbar", "Descarga Pasiva", "Estabilizadores", "Cadena Posterior", "Flexores Cadera", "Flujo Torácico"],
    tabs: [
      {
        id: "athletes",
        label: "Atletas de Fuerza",
        angle: "20°–35° Atlético",
        duration: "12–15 min post-entreno",
        problemTitle: "Compresión por Barra tras Peso Muerto, Sentadillas y CrossFit",
        problemDesc: "Las cargas axiales pesadas comprimen los discos lumbares. Colgarse de una barra tensa dorsales y agarre, impidiendo que la espalda profunda se relaje.",
        whyOthersFail: "Colgarse fatiga los hombros antes de soltar la lumbar; el foam roller solo masajea la superficie.",
        evminovSolution: [
          "Apóyese en pino de los Cárpatos para apagar erectores mientras la gravedad alarga suavemente la lumbar.",
          "Combine descompresión con core sin carga (modelo Wide hasta 150 kg y 2,06 m).",
          "Se pliega a 6 cm en la pared de su gimnasio doméstico.",
        ],
        ctaLabel: "Ver Recuperación Atlética",
      },
      {
        id: "desk",
        label: "Oficina y Teletrabajo",
        angle: "12°–18° Reinicio Diario",
        duration: "10 min tras trabajar",
        problemTitle: "Más de 8 Horas Sentado, Psoas Corto y Cuello Tecnológico",
        problemDesc: "Sentarse ejerce hasta un 40% más presión sobre discos lumbares que estar de pie, acortando flexores de cadera y adelantando el cuello.",
        whyOthersFail: "Las sillas ergonómicas no revierten la compresión axial acumulada durante la jornada.",
        evminovSolution: [
          "10 minutos nocturnos abren el pecho, alargan el psoas y descargan L4–S1.",
          "Incluye Petla Glissona acolchada GRATIS para descarga cervical de 8°–12°.",
          "Cabe detrás de la puerta o con el Soporte Sin Taladro para departamentos.",
        ],
        ctaLabel: "Ver Postura de Escritorio",
      },
      {
        id: "standing",
        label: "Enfermería y Turnos de Pie",
        angle: "10°–16° Descarga Nocturna",
        duration: "8–12 min post-turno",
        problemTitle: "12 Horas sobre Suelos Duros, Fatiga Lumbar y Piernas Cansadas",
        problemDesc: "Personal sanitario, chefs y docentes soportan gravedad vertical continua que comprime las facetas lumbares al final del turno.",
        whyOthersFail: "Tumbarse en el sofá no aporta tracción longitudinal suave para recuperar el espacio lumbar.",
        evminovSolution: [
          "Posición supina sin carga axial alivia la rigidez lumbar en minutos.",
          "Flexiones rítmicas de tobillo favorecen la circulación y el descanso.",
          "Opción ligera en Aliso (~9 kg) muy fácil de ajustar.",
        ],
        ctaLabel: "Ver Alivio Lumbar y Ciática",
      },
      {
        id: "cervical",
        label: "Cuello, Hombros y Táctico",
        angle: "8°–12° Cervical / 18° Core",
        duration: "8–10 min diarios",
        problemTitle: "Rigidez Dorsal Alta, Carga de Equipo y Tensión Cervical",
        problemDesc: "Chalecos pesados, conducción larga o portátiles generan tensión crónica entre omóplatos y cuello.",
        whyOthersFail: "Los collarines inflables presionan la mandíbula y no alinean la zona torácica.",
        evminovSolution: [
          "La Petla Glissona de algodón se alinea con el plano inclinado a 8°–12°.",
          "Desarrolla resistencia simétrica superior sin crujidos bruscos.",
          "Una sola estación cubre cuello, dorsal y lumbar para toda la familia.",
        ],
        ctaLabel: "Ver Cuidado Cervical",
      },
    ],
  },
  fr: {
    badge: "Performance & Ergonomie Quotidienne",
    heading: "Restauration Vertébrale pour Sportifs, Télétravail, Soignants & Vie Active",
    subtitle: "Pourquoi barres fixes, rouleaux et tables d'inversion extrêmes ne suffisent pas — et comment 10 minutes inclinées libèrent votre dos.",
    tablistAria: "Profils de récupération vertébrale",
    whyShortfallLabel: "Limites des Solutions Classiques :",
    calcCta: "Calculer Mon Angle Sûr",
    stripHeading: "Mouvements Authentiques Evminov",
    stripLabels: ["Pont Pelvien", "Symétrie Latérale", "Mobilité Lombaire", "Décharge Passive", "Stabilisateurs", "Chaîne Postérieure", "Psoas & Hanches", "Mobilité Thoracique"],
    tabs: [
      {
        id: "athletes",
        label: "Sportifs & Force",
        angle: "20°–35° Athlétique",
        duration: "12–15 min post-séance",
        problemTitle: "Compression après Soulevé de Terre, Squat & CrossFit",
        problemDesc: "Les charges axiales lourdes compriment les disques lombaires. La suspension à la barre fixe crispe les dorsaux et empêche le relâchement profond.",
        whyOthersFail: "La barre fixe fatigue les épaules avant le dos ; le rouleau ne crée aucun espace longitudinal.",
        evminovSolution: [
          "Soutenu sur le pin des Carpates, le bas du dos se relâche complètement.",
          "Associez décompression et gainage sans charge (modèle Wide jusqu'à 150 kg).",
          "Se replie à 6 cm au mur de votre salle maison.",
        ],
        ctaLabel: "Voir Récupération Sportive",
      },
      {
        id: "desk",
        label: "Bureau & Télétravail",
        angle: "12°–18° Reset Quotidien",
        duration: "10 min après le travail",
        problemTitle: "8h+ Assis, Psoas Raccourcis & Tech-Neck",
        problemDesc: "Rester assis augmente la pression discale jusqu'à 40 %, raccourcit les fléchisseurs de hanche et projette la tête en avant.",
        whyOthersFail: "Même un fauteuil ergonomique n'annule pas la gravité accumulée sur 8 heures.",
        evminovSolution: [
          "10 minutes le soir ouvrent la cage thoracique et déchargent L4–S1.",
          "Boucle de Glisson matelassée OFFERTE pour la nuque à 8°–12°.",
          "Se fixe derrière une porte ou sur support autoportant sans perçage.",
        ],
        ctaLabel: "Voir Posture Télétravail",
      },
      {
        id: "standing",
        label: "Soignants & Postes Debout",
        angle: "10°–16° Décharge Soir",
        duration: "8–12 min post-garde",
        problemTitle: "12 Heures Debout, Fatigue Lombaire & Jambes Lourdes",
        problemDesc: "Infirmiers, chirurgiens et enseignants subissent une gravité constante qui comprime les lombaires en fin de journée.",
        whyOthersFail: "S'allonger sur un canapé n'apporte aucune traction longitudinale douce.",
        evminovSolution: [
          "Position dorsale sans charge axiale qui soulage le bas du dos en minutes.",
          "Flexions douces des chevilles stimulant circulation et détente.",
          "Option légère en Aulne (~9 kg) ultra-simple à manipuler.",
        ],
        ctaLabel: "Voir Confort Lombaire & Sciatique",
      },
      {
        id: "cervical",
        label: "Nuque, Épaules & Tactique",
        angle: "8°–12° Cervical / 18° Core",
        duration: "8–10 min/jour",
        problemTitle: "Raideur Dorsale Haute, Charge d'Équipement & Nuque Tendue",
        problemDesc: "Gilets lourds, trajets ou écrans créent des tensions chroniques entre les omoplates et dans le cou.",
        whyOthersFail: "Les colliers gonflables compriment la mâchoire sans corriger le dos.",
        evminovSolution: [
          "Boucle de Glisson en coton parfaitement alignée sur le plan à 8°–12°.",
          "Renforce les stabilisateurs cervicaux sans craquements brusques.",
          "Une station compacte pour nuque, dos et lombaires.",
        ],
        ctaLabel: "Voir Soin Cervical",
      },
    ],
  },
  uk: {
    badge: "Спорт та Щоденна Ергономіка",
    heading: "Відновлення Хребта для Атлетів, Офісу, Медиків та Активного Життя",
    subtitle: "Чому турніки, масажні роли та інверсійні столи не вирішують проблему — і як 10 хвилин під контрольованим кутом повертають легкість.",
    tablistAria: "Профілі відновлення хребта",
    whyShortfallLabel: "Чому Звичайні Засоби Не Працюють:",
    calcCta: "Розрахувати Мій Кут",
    stripHeading: "Автентична Бібліотека Вправ Євмінова",
    stripLabels: ["Тазовий Місток", "Бокова Симетрія", "Мобільність Попереку", "Пасивна Тяга", "Стабілізатори", "Задній Ланцюг", "Згиначі Стегна", "Грудний Відділ"],
    tabs: [
      {
        id: "athletes",
        label: "Атлети та Силовий Спорт",
        angle: "20°–35° Спортивний",
        duration: "12–15 хв після залу",
        problemTitle: "Компресія від Штанги після Станової Тяги, Присідань та CrossFit",
        problemDesc: "Важке осьове навантаження стискає диски й тримає розгиначі спини у спазмі 48–72 години. Вис на турніку напружує найширші м'язи й не дає попереку розслабитися.",
        whyOthersFail: "Турнік перевантажує плечі раніше, ніж розслабляється спина; рол масажує лише поверхневу фасцію.",
        evminovSolution: [
          "На пружній карпатській сосні м'язи спини вимикаються, а гравітація м'яко подовжує поперек.",
          "Поєднуйте декомпресію з кором без компресії (Широка модель до 150 кг і 206 см).",
          "Складається до 6 см уздовж стіни домашнього спортзалу.",
        ],
        ctaLabel: "Детальніше про Відновлення Атлетів",
      },
      {
        id: "desk",
        label: "Офіс та Віддалена Робота",
        angle: "12°–18° Щоденний Ресет",
        duration: "10 хв після роботи",
        problemTitle: "8+ Годин Сидіння, Затиснутий Псоас та «Офісна Шия»",
        problemDesc: "Тривале сидіння створює до 40% більший тиск на диски, ніж стояння, скорочує згиначі стегна й висуває шию вперед.",
        whyOthersFail: "Навіть дороге крісло не знімає накопичене за день гравітаційне стиснення.",
        evminovSolution: [
          "10 спокійних хвилин увечері розкривають грудну клітку, подовжують псоас і розвантажують L4–S1.",
          "М'яка Петля Гліссона в ПОДАРУНОК для делікатної витяжки шиї під 8°–12°.",
          "Кріпиться за дверима кабінету або ставиться на стійку без свердління.",
        ],
        ctaLabel: "Детальніше про Офісну Поставу",
      },
      {
        id: "standing",
        label: "Медики та Робота на Ногах",
        angle: "10°–16° Вечірня Витяжка",
        duration: "8–12 хв після зміни",
        problemTitle: "12 Годин на Ногах, Втома Попереку та Важкість у Ногах",
        problemDesc: "Медсестри, хірурги, кухарі та вчителі весь день відчувають вертикальне стиснення фасеткових суглобів попереку.",
        whyOthersFail: "Лежання на м'якому дивані не створює м'якої поздовжньої тяги для відновлення проміжків між хребцями.",
        evminovSolution: [
          "Положення без осьового навантаження за хвилини знімає вечірню скутість попереку.",
          "Плавні рухи стопами покращують кровообіг та заспокоюють нервову систему.",
          "Легка модель з Добірної Вільхи (~9 кг) дозволяє легко змінювати кут кожному.",
        ],
        ctaLabel: "Детальніше про Поперек та Ішіас",
      },
      {
        id: "cervical",
        label: "Шия, Плечі та Тактичні Навантаження",
        angle: "8°–12° Шия / 18° Кор",
        duration: "8–10 хв щодня",
        problemTitle: "Скутість Верхньої Спини, Спорядження та Шийна Напруга",
        problemDesc: "Важке спорядження, довге кермування чи ноутбук викликають хронічну напругу між лопатками й у шиї.",
        whyOthersFail: "Надувні коміри тиснуть на щелепу та ігнорують грудний відділ хребта.",
        evminovSolution: [
          "Бавовняна Петля Гліссона ідеально вирівнює шию під ультрам'яким кутом 8°–12°.",
          "Розвиває симетричну витривалість верхньої спини без різких хрустів.",
          "Одна компактна станція для шиї, грудного відділу та попереку.",
        ],
        ctaLabel: "Детальніше про Догляд за Шиєю",
      },
    ],
  },
  ru: {
    badge: "Спорт и Ежедневная Эргономика",
    heading: "Восстановление Позвоночника для Атлетов, Офиса, Медиков и Активной Жизни",
    subtitle: "Почему турники, роллы и инверсионные столы не решают проблему — и как 10 минут под контролируемым углом возвращают лёгкость.",
    tablistAria: "Профили восстановления позвоночника",
    whyShortfallLabel: "Почему Обычные Способы Не Работают:",
    calcCta: "Рассчитать Мой Угол",
    stripHeading: "Аутентичная Библиотека Упражнений Евминова",
    stripLabels: ["Тазовый Мостик", "Боковая Симметрия", "Подвижность Поясницы", "Пассивная Тяга", "Стабилизаторы", "Задняя Цепь", "Сгибатели Бедра", "Грудной Отдел"],
    tabs: [
      {
        id: "athletes",
        label: "Атлеты и Силовой Спорт",
        angle: "20°–35° Спортивный",
        duration: "12–15 мин после зала",
        problemTitle: "Компрессия от Штанги после Становой Тяги, Приседаний и CrossFit",
        problemDesc: "Тяжёлая осевая нагрузка сжимает диски и держит разгибатели спины в спазме 48–72 часа. Вис на турнике напрягает широчайшие и не даёт пояснице расслабиться.",
        whyOthersFail: "Турник утомляет плечи раньше, чем расслабляется спина; ролл массирует лишь поверхность.",
        evminovSolution: [
          "На упругой карпатской сосне мышцы спины отключаются, а гравитация мягко удлиняет поясницу.",
          "Сочетайте декомпрессию с кором без компрессии (Широкая модель до 150 кг и 206 см).",
          "Складывается до 6 см вдоль стены домашнего зала.",
        ],
        ctaLabel: "Подробнее о Восстановлении Атлетов",
      },
      {
        id: "desk",
        label: "Офис и Удалённая Работа",
        angle: "12°–18° Ежедневный Ресет",
        duration: "10 мин после работы",
        problemTitle: "8+ Часов Сидения, Зажатый Псоас и «Офисная Шея»",
        problemDesc: "Длительное сидение создаёт до 40% большее давление на диски, чем стояние, укорачивает сгибатели бедра и выдвигает шею вперёд.",
        whyOthersFail: "Даже дорогое кресло не снимает накопленное за день гравитационное сжатие.",
        evminovSolution: [
          "10 спокойных минут вечером раскрывают грудную клетку, удлиняют псоас и разгружают L4–S1.",
          "Мягкая Петля Глиссона в ПОДАРОК для деликатной вытяжки шеи под 8°–12°.",
          "Крепится за дверью кабинета или ставится на стойку без сверления.",
        ],
        ctaLabel: "Подробнее об Офисной Осанке",
      },
      {
        id: "standing",
        label: "Медики и Работа на Ногах",
        angle: "10°–16° Вечерняя Вытяжка",
        duration: "8–12 мин после смены",
        problemTitle: "12 Часов на Ногах, Усталость Поясницы и Тяжесть в Ногах",
        problemDesc: "Медсёстры, хирурги, повара и учителя весь день испытывают вертикальное сжатие фасеточных суставов поясницы.",
        whyOthersFail: "Лежание на мягком диване не даёт мягкой продольной тяги для восстановления межпозвонковых промежутков.",
        evminovSolution: [
          "Положение без осевой нагрузки за минуты снимает вечернюю скованность поясницы.",
          "Плавные движения стопами улучшают кровообращение и успокаивают нервную систему.",
          "Лёгкая модель из Отборной Ольхи (~9 кг) позволяет легко менять угол каждому.",
        ],
        ctaLabel: "Подробнее о Пояснице и Ишиасе",
      },
      {
        id: "cervical",
        label: "Шея, Плечи и Тактика",
        angle: "8°–12° Шея / 18° Кор",
        duration: "8–10 мин ежедневно",
        problemTitle: "Скованность Верхней Спины, Снаряжение и Шейное Напряжение",
        problemDesc: "Тяжёлое снаряжение, долгое вождение или ноутбук вызывают хроническое напряжение между лопатками и в шее.",
        whyOthersFail: "Надувные воротники давят на челюсть и игнорируют грудной отдел позвоночника.",
        evminovSolution: [
          "Хлопковая Петля Глиссона выравнивает шею под ультрамягким углом 8°–12°.",
          "Развивает симметричную выносливость верхней спины без резких хрустов.",
          "Одна компактная станция для шеи, грудного отдела и поясницы.",
        ],
        ctaLabel: "Подробнее об Уходе за Шеей",
      },
    ],
  },
  de: {
    badge: "Leistung & Alltagsergonomie",
    heading: "Wirbelsäulen-Regeneration für Sportler, Büroarbeit, Pflegekräfte & Aktive",
    subtitle: "Warum Klimmzugstangen, Faszienrollen und extreme Inversionsbänke zu kurz greifen — und wie kalibrierte geneigte Entlastung in 10 Minuten neuen Rückenkomfort bringt.",
    tablistAria: "Zielgruppen-Profile für Wirbelsäulen-Regeneration",
    whyShortfallLabel: "Warum gängige Abkürzungen zu kurz greifen:",
    calcCta: "Meinen sicheren Winkel berechnen",
    stripHeading: "Authentische Evminov-Bewegungsbibliothek",
    stripLabels: ["Beckenbrücke", "Seitliche Symmetrie", "Lendenmobilität", "Passive Entlastung", "Bauchlage-Stabilisatoren", "Hintere Kette", "Hüftbeuger-Dehnung", "Brustwirbel-Flow"],
    tabs: [
      {
        id: "athletes",
        label: "Kraftsportler & Lifter",
        angle: "20°–35° Athletisch",
        duration: "12–15 Min. nach dem Training",
        problemTitle: "Langhantel-Kompression nach schwerem Kreuzheben, Kniebeugen & CrossFit",
        problemDesc: "Schwere axiale Lasten komprimieren die Lendenbandscheiben und halten die Rückenstrecker 48–72 Stunden angespannt. Hängen an der Klimmzugstange spannt Latissimus und Griff an — sodass die tiefe Rückenmuskulatur nicht wirklich loslässt.",
        whyOthersFail: "Klimmzugstangen ermüden Schultern, bevor der untere Rücken entspannt; Faszienrollen massieren nur die Oberfläche ohne echten Längszug.",
        evminovSolution: [
          "Liegen Sie gestützt auf federnder Karpaten-Kiefer, sodass die Rückenstrecker abschalten, während die Schwerkraft die Lendenwirbel sanft streckt.",
          "Kombinieren Sie Dekompression mit entlasteter Core-Aktivierung (Wide Heavy-Duty Modell bis 330 lbs / 150 kg & 2,06 m).",
          "Passt direkt an die Home-Gym-Wand — klappt zwischen den Einheiten auf 6 cm flach zusammen.",
        ],
        ctaLabel: "Sportregeneration entdecken",
      },
      {
        id: "desk",
        label: "Büro & Homeoffice",
        angle: "12°–18° Täglicher Reset",
        duration: "10 Min. nach Feierabend",
        problemTitle: "8+ Stunden Sitzkompression, verkürzte Hüftbeuger & Tech-Neck",
        problemDesc: "Langes Sitzen belastet die unteren Lendenbandscheiben bis zu 40% stärker als Stehen, verkürzt die Hüftbeuger (Psoas) und zieht Schultern sowie Halswirbelsäule nach vorn.",
        whyOthersFail: "Ergonomische Stühle verlangsamen das Zusammensacken, kehren aber die über 8 Stunden angesammelte axiale Kompression nicht um.",
        evminovSolution: [
          "10 ruhige Minuten am Abend öffnen die Brustfaszien, strecken den verkürzten Psoas und entlasten L4–S1.",
          "Inklusive gepolsterter Glisson-Halswirbelschlaufe GRATIS für sanfte 8°–12° Nacken- und Schulterentlastung.",
          "Passt ordentlich hinter eine Bürotür oder auf den bohrfreien Wohnungsständer.",
        ],
        ctaLabel: "Bürohaltung-Programm ansehen",
      },
      {
        id: "standing",
        label: "Pflege & Stehberufe",
        angle: "10°–16° Abend-Entlastung",
        duration: "8–12 Min. nach der Schicht",
        problemTitle: "12 Stunden auf harten Böden, Lendenmüdigkeit & schwere Beine",
        problemDesc: "Pflegekräfte, Chirurgen, Köche, Lehrkräfte und Verkäufer tragen die gesamte Schicht vertikale Schwerkraft, was Facettengelenke staucht und Beine abends schwer macht.",
        whyOthersFail: "Flaches Liegen auf dem Sofa erzeugt keinen sanften Längszug, um die natürlichen Wirbelabstände wiederherzustellen.",
        evminovSolution: [
          "Sofortige Rückenlage ohne axiale Last löst abendliche Lendensteifheit innerhalb weniger Minuten.",
          "Sanfte rhythmische Fußgelenksbewegungen fördern Durchblutung und ruhige Regeneration.",
          "Leichte Variante aus ukrainischer Erle (~9 kg) ermöglicht müheloses Verstellen für jeden.",
        ],
        ctaLabel: "Lenden- & Ischias-Mobilität ansehen",
      },
      {
        id: "cervical",
        label: "Nacken, Schultern & Einsatz",
        angle: "8°–12° Nacken / 18° Core",
        duration: "8–10 Min. täglich",
        problemTitle: "Steifer oberer Rücken, Ausrüstungslast & Nackenverspannung",
        problemDesc: "Ob schwere Schutzwesten, langes Autofahren oder Laptop-Arbeit — chronische Spannung in Brustwirbelsäule und Nacken schränkt die Beweglichkeit ein.",
        whyOthersFail: "Aufblasbare Nackenkissen drücken oft ungleichmäßig auf den Kiefer und ignorieren die darunterliegende Brustwirbelhaltung.",
        evminovSolution: [
          "Die baumwollgepolsterte Glisson-Schlaufe richtet sich sauber auf der geneigten Ebene bei sanften 8°–12° aus.",
          "Stärkt symmetrische Stabilisatoren des oberen Rückens ohne Ruck oder gewaltsames Einrenken.",
          "Eine kompakte Station für Hals-, Brust- und Lendenwirbelsäule im ganzen Haushalt.",
        ],
        ctaLabel: "Nacken- & HWS-Pflege entdecken",
      },
    ],
  },
};
