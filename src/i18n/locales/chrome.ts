import { Locale } from "@/i18n/types";
import { SITE_CONFIG } from "@/lib/site-config";

export interface HeaderExtraStrings {
  heritageBarAria: string;
  hsaOnShort: string;
  hsaMobileShort: string;
  langSwitcherAria: string;
  homeAria: string;
  scrollLeftAria: string;
  scrollRightAria: string;
  primaryNavAria: string;
  mobileNavAria: string;
  toggleMenuAria: string;
  portalShort: string;
  mobileSince1996Sub: string;
  mobilePortalSub: string;
}

export const HEADER_EXTRA: Record<Locale, HeaderExtraStrings> = {
  en: {
    heritageBarAria: "Heritage & Trust Bar",
    hsaOnShort: "HSA/FSA -30% ON",
    hsaMobileShort: "HSA -30%",
    langSwitcherAria: "Language switcher",
    homeAria: "Evminov Spine Systems Home",
    scrollLeftAria: "Scroll navigation left",
    scrollRightAria: "Scroll navigation right",
    primaryNavAria: "Primary Navigation",
    mobileNavAria: "Mobile Directory",
    toggleMenuAria: "Toggle Navigation Menu",
    portalShort: "Portal",
    mobileSince1996Sub: "Patented 1996 • Global",
    mobilePortalSub: "Routine, Timer & HSA Kit",
  },
  es: {
    heritageBarAria: "Barra de Trayectoria y Confianza",
    hsaOnShort: "HSA/FSA -30% ACTIVO",
    hsaMobileShort: "HSA -30%",
    langSwitcherAria: "Selector de idioma",
    homeAria: "Inicio de Evminov Spine Systems",
    scrollLeftAria: "Desplazar navegación a la izquierda",
    scrollRightAria: "Desplazar navegación a la derecha",
    primaryNavAria: "Navegación Principal",
    mobileNavAria: "Menú Móvil",
    toggleMenuAria: "Abrir o cerrar menú de navegación",
    portalShort: "Portal",
    mobileSince1996Sub: "Patentado 1996 • Global",
    mobilePortalSub: "Rutina, Temporizador y Kit HSA",
  },
  fr: {
    heritageBarAria: "Barre Héritage et Confiance",
    hsaOnShort: "HSA/FSA -30% ACTIF",
    hsaMobileShort: "HSA -30%",
    langSwitcherAria: "Sélecteur de langue",
    homeAria: "Accueil Evminov Spine Systems",
    scrollLeftAria: "Faire défiler le menu à gauche",
    scrollRightAria: "Faire défiler le menu à droite",
    primaryNavAria: "Navigation Principale",
    mobileNavAria: "Menu Mobile",
    toggleMenuAria: "Ouvrir ou fermer le menu de navigation",
    portalShort: "Portail",
    mobileSince1996Sub: "Breveté 1996 • Mondial",
    mobilePortalSub: "Routine, Minuteur et Kit HSA",
  },
  uk: {
    heritageBarAria: "Панель спадщини та довіри",
    hsaOnShort: "HSA/FSA -30% УВІМК.",
    hsaMobileShort: "HSA -30%",
    langSwitcherAria: "Перемикач мови",
    homeAria: "Головна Evminov Spine Systems",
    scrollLeftAria: "Прокрутити меню ліворуч",
    scrollRightAria: "Прокрутити меню праворуч",
    primaryNavAria: "Основна навігація",
    mobileNavAria: "Мобільне меню",
    toggleMenuAria: "Відкрити або закрити меню навігації",
    portalShort: "Кабінет",
    mobileSince1996Sub: "Патент 1996 • Світ",
    mobilePortalSub: "Програма, таймер і пакет HSA",
  },
  ru: {
    heritageBarAria: "Панель наследия и доверия",
    hsaOnShort: "HSA/FSA -30% ВКЛ",
    hsaMobileShort: "HSA -30%",
    langSwitcherAria: "Переключатель языка",
    homeAria: "Главная Evminov Spine Systems",
    scrollLeftAria: "Прокрутить меню влево",
    scrollRightAria: "Прокрутить меню вправо",
    primaryNavAria: "Основная навигация",
    mobileNavAria: "Мобильное меню",
    toggleMenuAria: "Открыть или закрыть меню навигации",
    portalShort: "Кабинет",
    mobileSince1996Sub: "Патент 1996 • Мир",
    mobilePortalSub: "Программа, таймер и пакет HSA",
  },
};

export interface FooterTrustCardCopy {
  title: string;
  sub: string;
  tag: string;
}

export interface FooterContent {
  homeAria: string;
  usHubLabel: string;
  euroCraftLabel: string;
  euroCraftLocation: string;
  shipping50Link: string;
  kidsPostureLink: string;
  vsInversionLink: string;
  vsTeeterLink: string;
  calculatorLink: string;
  centersLink: string;
  athleteLink: string;
  guidesLink: string;
  patientPortalLink: string;
  trial60Link: string;
  trustHeading: string;
  trustCards: [
    FooterTrustCardCopy,
    FooterTrustCardCopy,
    FooterTrustCardCopy,
    FooterTrustCardCopy,
    FooterTrustCardCopy,
    FooterTrustCardCopy,
  ];
  heritageBannerLead: string;
  heritageBannerBody: string;
  securitySsl: string;
  securityPrivacy: string;
  securityShipping: string;
  acceptedLabel: string;
  wellnessNotice: string;
  architectureCredit: string;
  sitemapLabel: string;
}

export const FOOTER_CONTENT: Record<Locale, FooterContent> = {
  en: {
    homeAria: "Evminov Spine Systems Home",
    usHubLabel: "US Operations & Hub:",
    euroCraftLabel: "European Craftsmanship:",
    euroCraftLocation: "Kyiv & Odesa, Ukraine (Est. 1996)",
    shipping50Link: "50 US States & Global Delivery",
    kidsPostureLink: "Kids & Family Posture Station",
    vsInversionLink: "Evminov vs. Inversion Tables",
    vsTeeterLink: "Evminov vs. Teeter Alternative",
    calculatorLink: "Incline Angle Calculator",
    centersLink: "Since 1996 Centers & Heritage",
    athleteLink: "Athletic Recovery (Deadlifts & Squats)",
    guidesLink: "Evidence-Informed Guides",
    patientPortalLink: "Patient Portal",
    trial60Link: "60-Day Home Trial",
    trustHeading: "Patents, Craftsmanship & Buyer Protections",
    trustCards: [
      {
        title: "US & EU Patented",
        sub: "Original Evminov Design",
        tag: "US 6,869,387 B2",
      },
      {
        title: "HSA / FSA Ready",
        sub: "Pre-Tax Health Savings",
        tag: "Itemized Receipt + LMN",
      },
      {
        title: "30-Year Heritage",
        sub: "Continuous Since 1996",
        tag: "EP 1 038 512 B1 • MOH 711",
      },
      {
        title: "Sports & PT",
        sub: "Spine Axial Unloading",
        tag: "Rated Up to 330 lbs",
      },
      {
        title: "10-Year Warranty",
        sub: "Carpathian Pine & Alder",
        tag: "Structural Frame Guarantee",
      },
      {
        title: "60-Day Trial",
        sub: "Risk-Free Home Relief",
        tag: "100% Refund Guarantee",
      },
    ],
    heritageBannerLead: "30 Years of Continuous Spine Methodology (Since 1996):",
    heritageBannerBody:
      "Internationally patented inclined plane design across the US, European Union, and WIPO — handcrafted from resonant Carpathian pine and select Ukrainian alder.",
    securitySsl: "256-Bit SSL Encrypted",
    securityPrivacy: "CCPA & GDPR Privacy Protected",
    securityShipping: "Insured UPS / FedEx from California",
    acceptedLabel: "Accepted / Planned:",
    wellnessNotice:
      "General Wellness Equipment Notice: Evminov Spine Systems boards are classified as General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030). Information on this website is for educational purposes and is not intended to diagnose, treat, cure, or prevent any disease. Consult a licensed physician before starting any new exercise or traction routine, especially if you have acute spinal trauma or severe medical conditions.",
    architectureCredit: "Architecture by Apex Root LLC.",
    sitemapLabel: "Sitemap",
  },
  es: {
    homeAria: "Inicio de Evminov Spine Systems",
    usHubLabel: "Operaciones y Centro en EE. UU.:",
    euroCraftLabel: "Artesanía Europea:",
    euroCraftLocation: "Kyiv y Odesa, Ucrania (Desde 1996)",
    shipping50Link: "Envío a 50 Estados de EE. UU. y Global",
    kidsPostureLink: "Estación de Postura Infantil y Familiar",
    vsInversionLink: "Evminov vs. Mesas de Inversión",
    vsTeeterLink: "Alternativa a Teeter: Tabla Evminov",
    calculatorLink: "Calculadora de Ángulo de Inclinación",
    centersLink: "Centros y Trayectoria Desde 1996",
    athleteLink: "Recuperación Atlética (Peso Muerto y Sentadillas)",
    guidesLink: "Guías Basadas en Evidencia",
    patientPortalLink: "Portal del Paciente",
    trial60Link: "Prueba en Casa de 60 Días",
    trustHeading: "Patentes, Artesanía y Protecciones al Comprador",
    trustCards: [
      {
        title: "Patente EE. UU. y UE",
        sub: "Diseño Original Evminov",
        tag: "US 6,869,387 B2",
      },
      {
        title: "Apto HSA / FSA",
        sub: "Ahorro de Salud Antes de Impuestos",
        tag: "Factura Detallada + LMN",
      },
      {
        title: "30 Años de Historia",
        sub: "Trayectoria Continua Desde 1996",
        tag: "EP 1 038 512 B1 • MOH 711",
      },
      {
        title: "Deporte y Fisioterapia",
        sub: "Descarga Axial de Columna",
        tag: "Hasta 330 lbs (150 kg)",
      },
      {
        title: "Garantía 10 Años",
        sub: "Pino de los Cárpatos y Aliso",
        tag: "Garantía Estructural",
      },
      {
        title: "Prueba 60 Días",
        sub: "Alivio en Casa Sin Riesgo",
        tag: "Reembolso 100% Garantizado",
      },
    ],
    heritageBannerLead: "30 Años de Metodología Espinal Continua (Desde 1996):",
    heritageBannerBody:
      "Diseño de plano inclinado con patentes internacionales en Estados Unidos, Unión Europea y WIPO — fabricado a mano en pino resonante de los Cárpatos y aliso ucraniano selecto.",
    securitySsl: "Cifrado SSL de 256 Bits",
    securityPrivacy: "Privacidad Protegida CCPA y GDPR",
    securityShipping: "UPS / FedEx Asegurado desde California",
    acceptedLabel: "Aceptado / Previsto:",
    wellnessNotice:
      "Aviso de Equipo de Bienestar General: Las tablas Evminov Spine Systems están clasificadas como Equipo de Bienestar General y Acondicionamiento Espinal (HTS 9506.91.0030). La información de este sitio es únicamente educativa y no pretende diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Consulta con un médico autorizado antes de iniciar cualquier rutina de ejercicio o tracción, especialmente ante trauma espinal agudo o afecciones graves.",
    architectureCredit: "Arquitectura por Apex Root LLC.",
    sitemapLabel: "Mapa del Sitio",
  },
  fr: {
    homeAria: "Accueil Evminov Spine Systems",
    usHubLabel: "Centre & Opérations USA :",
    euroCraftLabel: "Savoir-Faire Européen :",
    euroCraftLocation: "Kyiv et Odesa, Ukraine (Depuis 1996)",
    shipping50Link: "Livraison 50 États US, Canada & Europe",
    kidsPostureLink: "Station Posture Enfants & Famille",
    vsInversionLink: "Evminov vs. Tables d'Inversion",
    vsTeeterLink: "Alternative à Teeter : Planche Evminov",
    calculatorLink: "Calculateur d'Angle d'Inclinaison",
    centersLink: "Centres & Héritage Depuis 1996",
    athleteLink: "Récupération Sportive (Soulevé de Terre & Squats)",
    guidesLink: "Guides Documentés",
    patientPortalLink: "Portail Patient",
    trial60Link: "Essai à Domicile 60 Jours",
    trustHeading: "Brevets, Savoir-Faire et Protections Acheteur",
    trustCards: [
      {
        title: "Breveté US & UE",
        sub: "Conception Originale Evminov",
        tag: "US 6,869,387 B2",
      },
      {
        title: "Éligible HSA / FSA",
        sub: "Facture Santé Détaillée (US)",
        tag: "Reçu Détaillé + LMN",
      },
      {
        title: "30 Ans d'Héritage",
        sub: "Méthode Continue Depuis 1996",
        tag: "EP 1 038 512 B1 • MOH 711",
      },
      {
        title: "Sport & Kiné",
        sub: "Décompression Axiale",
        tag: "Certifié Jusqu'à 150 kg",
      },
      {
        title: "Garantie 10 Ans",
        sub: "Pin des Carpates & Aulne",
        tag: "Garantie Structurelle",
      },
      {
        title: "Essai 60 Jours",
        sub: "Essai Sans Risque à Domicile",
        tag: "Remboursement Garanti",
      },
    ],
    heritageBannerLead: "30 Ans de Méthodologie Vertébrale Continue (Depuis 1996) :",
    heritageBannerBody:
      "Plan incliné breveté à l'international aux États-Unis, dans l'Union européenne et auprès de l'OMPI (WIPO) — fabriqué artisanalement en pin résonant des Carpates et aulne ukrainien sélectionné.",
    securitySsl: "Chiffrement SSL 256 Bits",
    securityPrivacy: "Confidentialité CCPA & RGPD",
    securityShipping: "UPS / FedEx Assuré depuis la Californie",
    acceptedLabel: "Acceptés / Prévus :",
    wellnessNotice:
      "Avis Équipement de Bien-Être Général : Les planches Evminov Spine Systems sont classées comme équipements de bien-être général et de conditionnement dorsal (HTS 9506.91.0030). Les informations présentées sur ce site sont à visée éducative et ne visent pas à diagnostiquer, traiter, guérir ou prévenir une maladie. Consultez un médecin qualifié avant de commencer toute routine d'exercice ou de traction, en particulier en cas de traumatisme vertébral aigu.",
    architectureCredit: "Architecture par Apex Root LLC.",
    sitemapLabel: "Plan du Site",
  },
  uk: {
    homeAria: "Головна Evminov Spine Systems",
    usHubLabel: "Операційний Хаб у США:",
    euroCraftLabel: "Європейське Виробництво:",
    euroCraftLocation: "Київ та Одеса, Україна (з 1996 року)",
    shipping50Link: "Доставка в 50 Штатів США та по Світу",
    kidsPostureLink: "Станція Постави для Дітей і Родини",
    vsInversionLink: "Дошка Євмінова vs. Інверсійні Столи",
    vsTeeterLink: "Альтернатива Teeter: Профілактор Євмінова",
    calculatorLink: "Калькулятор Кута Нахилу",
    centersLink: "Центри та Спадщина з 1996 Року",
    athleteLink: "Відновлення Спортсменів (Тяга та Присідання)",
    guidesLink: "Експертні Гайди",
    patientPortalLink: "Кабінет Пацієнта",
    trial60Link: "60 Днів Тест-Драйву Вдома",
    trustHeading: "Патенти, Майстерність та Гарантії Покупця",
    trustCards: [
      {
        title: "Патенти США та ЄС",
        sub: "Оригінальна Конструкція Evminov",
        tag: "US 6,869,387 B2",
      },
      {
        title: "Підходить для HSA / FSA",
        sub: "Економія на Податках у США",
        tag: "Деталізований Чек + LMN",
      },
      {
        title: "30 Років Спадщини",
        sub: "Безперервна Методика з 1996",
        tag: "EP 1 038 512 B1 • МОЗ 711",
      },
      {
        title: "Спорт і Реабілітація",
        sub: "Осьове Розвантаження Хребта",
        tag: "Навантаження до 150 кг",
      },
      {
        title: "Гарантія 10 Років",
        sub: "Карпатська Сосна та Вільха",
        tag: "Гарантія на Раму",
      },
      {
        title: "60 Днів Тесту",
        sub: "Комфорт Вдома Без Ризику",
        tag: "100% Гарантія Повернення",
      },
    ],
    heritageBannerLead: "30 Років Безперервної Методики Здоров'я Хребта (з 1996 Року):",
    heritageBannerBody:
      "Міжнародно запатентована похила площина у США, Європейському Союзі та WIPO — ручна робота з резонансної карпатської сосни та відбірної української вільхи.",
    securitySsl: "256-Бітне SSL Шифрування",
    securityPrivacy: "Захист Приватності CCPA та GDPR",
    securityShipping: "Застрахована Доставка UPS / FedEx із Каліфорнії",
    acceptedLabel: "Доступно / Планується:",
    wellnessNotice:
      "Повідомлення про Обладнання Загального Оздоровлення: Профілактори Evminov Spine Systems класифікуються як обладнання загального оздоровлення та зміцнення спини (HTS 9506.91.0030). Інформація на цьому сайті має освітній характер і не призначена для діагностики, лікування чи профілактики захворювань. Проконсультуйтеся з лікарем перед початком будь-яких вправ або тракції, особливо при гострих травмах хребта чи серйозних медичних станах.",
    architectureCredit: "Архітектура Apex Root LLC.",
    sitemapLabel: "Мапа Сайту",
  },
  ru: {
    homeAria: "Главная Evminov Spine Systems",
    usHubLabel: "Операционный Хаб в США:",
    euroCraftLabel: "Европейское Производство:",
    euroCraftLocation: "Киев и Одесса, Украина (с 1996 года)",
    shipping50Link: "Доставка в 50 Штатов США и по Миру",
    kidsPostureLink: "Станция Осанки для Детей и Семьи",
    vsInversionLink: "Доска Евминова vs. Инверсионные Столы",
    vsTeeterLink: "Альтернатива Teeter: Доска Евминова",
    calculatorLink: "Калькулятор Угла Наклона",
    centersLink: "Центры и Наследие с 1996 Года",
    athleteLink: "Восстановление Спортсменов (Тяга и Приседания)",
    guidesLink: "Экспертные Статьи",
    patientPortalLink: "Кабинет Пациента",
    trial60Link: "60 Дней Домашнего Теста",
    trustHeading: "Патенты, Мастерство и Защита Покупателя",
    trustCards: [
      {
        title: "Патенты США и ЕС",
        sub: "Оригинальная Конструкция Evminov",
        tag: "US 6,869,387 B2",
      },
      {
        title: "Подходит для HSA / FSA",
        sub: "Налоговая Экономия в США",
        tag: "Детализированный Чек + LMN",
      },
      {
        title: "30 Лет Наследия",
        sub: "Непрерывная Методика с 1996",
        tag: "EP 1 038 512 B1 • МОЗ 711",
      },
      {
        title: "Спорт и Реабилитация",
        sub: "Осевая Разгрузка Позвоночника",
        tag: "Нагрузка до 150 кг",
      },
      {
        title: "Гарантия 10 Лет",
        sub: "Карпатская Сосна и Ольха",
        tag: "Гарантия на Конструкцию",
      },
      {
        title: "60 Дней Теста",
        sub: "Комфорт Дома Без Риска",
        tag: "100% Гарантия Возврата",
      },
    ],
    heritageBannerLead: "30 Лет Непрерывной Методики Здоровья Позвоночника (с 1996 Года):",
    heritageBannerBody:
      "Международно запатентованная наклонная плоскость в США, Европейском Союзе и WIPO — ручная работа из резонансной карпатской сосны и отборной украинской ольхи.",
    securitySsl: "256-Битное SSL Шифрование",
    securityPrivacy: "Защита Приватности CCPA и GDPR",
    securityShipping: "Застрахованная Доставка UPS / FedEx из Калифорнии",
    acceptedLabel: "Принимаем / Планируется:",
    wellnessNotice:
      "Уведомление об Оборудовании Общего Оздоровления: Доски Evminov Spine Systems классифицируются как оборудование для общего оздоровления и укрепления спины (HTS 9506.91.0030). Информация на этом сайте носит образовательный характер и не предназначена для диагностики, лечения или профилактики заболеваний. Проконсультируйтесь с врачом перед началом любых упражнений или тракции, особенно при острых травмах позвоночника.",
    architectureCredit: "Архитектура Apex Root LLC.",
    sitemapLabel: "Карта Сайта",
  },
};

export interface MobileDockExtra {
  navAria: string;
  fromPrice: string;
  installments: string;
  trialExpress: string;
}

export const MOBILE_DOCK_EXTRA: Record<Locale, MobileDockExtra> = {
  en: {
    navAria: "Mobile quick actions",
    fromPrice: "From $450",
    installments: "(or 4× $112.50)",
    trialExpress: "60-Day Trial • US Express",
  },
  es: {
    navAria: "Acciones rápidas móviles",
    fromPrice: "Desde $450",
    installments: "(o 4× $112.50)",
    trialExpress: "Prueba 60 Días • Express EE. UU.",
  },
  fr: {
    navAria: "Actions rapides mobiles",
    fromPrice: "Dès 450 $",
    installments: "(ou 4× 112,50 $)",
    trialExpress: "Essai 60 Jours • Express US",
  },
  uk: {
    navAria: "Швидкі дії на мобільному",
    fromPrice: "Від $450",
    installments: "(або 4× $112.50)",
    trialExpress: "60 Днів Тесту • Експрес США",
  },
  ru: {
    navAria: "Быстрые действия на мобильном",
    fromPrice: "От $450",
    installments: "(или 4× $112.50)",
    trialExpress: "60 Дней Теста • Экспресс США",
  },
};

export interface BreadcrumbCopy {
  home: string;
  navAria: string;
}

export const BREADCRUMB_COPY: Record<Locale, BreadcrumbCopy> = {
  en: { home: "Home", navAria: "Breadcrumb" },
  es: { home: "Inicio", navAria: "Ruta de navegación" },
  fr: { home: "Accueil", navAria: "Fil d'Ariane" },
  uk: { home: "Головна", navAria: "Навігаційний ланцюжок" },
  ru: { home: "Главная", navAria: "Навигационная цепочка" },
};

export interface WelcomeHubCopy {
  badge: string;
  pageTitle: string;
  pageSubtitle: string;
  metaDescription: string;
  wallMountingVideoTitle: string;
  methodDemoVideoTitle: string;
  reviewHeading: string;
  reviewSubtitle: string;
  templateWord: string;
  samplePrompts: [string, string];
  textareaAria: string;
  copyBtn: string;
  copiedBtn: string;
  youtubeBtn: string;
}

export const WELCOME_HUB_COPY: Record<Locale, WelcomeHubCopy> = {
  en: {
    badge: "Evminov Owner QR Hub • Setup & Community",
    pageTitle: "Welcome to Your Evminov Board — Mounting Guide & Owner Feedback",
    pageSubtitle:
      "Watch our 16-inch US wood-stud installation guide and starter routine below, then share your real experience with fellow back-care seekers.",
    metaDescription:
      "Watch the official 16-inch US wood stud mounting video and starter exercise guide for your Evminov Spine Decompression Board.",
    wallMountingVideoTitle:
      "Evminov Board 16-Inch US Wood Stud Wall Mounting & Setup Guide",
    methodDemoVideoTitle:
      "Evminov Method Official Spine Decompression & Exercise Demonstration",
    reviewHeading:
      "Love Your Evminov Board? Share Your Experience in 15 Seconds",
    reviewSubtitle:
      "Honest verified owner feedback helps others find a safer alternative to upside-down inversion tables. Customize your note below, copy it with one click, and share it on Google or YouTube.",
    templateWord: "Template",
    samplePrompts: [
      "Mounted my Evminov Carpathian pine board to a 16\" drywall stud in 15 minutes. 10 minutes at 15 degrees feels dramatically safer than hanging upside down on an inversion table!",
      "Fast California delivery and sturdy natural wood craftsmanship. Using the Free-Standing Stand in my apartment with zero wall holes — my lower back feels noticeably looser every evening.",
    ],
    textareaAria: "Your Evminov owner review draft",
    copyBtn: "1-Tap Copy Review",
    copiedBtn: "Copied to Clipboard!",
    youtubeBtn: "Open Evminov USA Channel",
  },
  es: {
    badge: "Centro QR para Propietarios Evminov • Instalación y Comunidad",
    pageTitle: "Bienvenido a Tu Tabla Evminov — Guía de Montaje y Reseñas",
    pageSubtitle:
      "Mira nuestra guía de instalación en vigas de madera de 16\" de EE. UU. y la rutina inicial abajo, y luego comparte tu experiencia real con quienes buscan cuidar su espalda.",
    metaDescription:
      "Video oficial de montaje en vigas de madera de 16 pulgadas en EE. UU., rutina inicial y centro de opiniones de propietarios de la Tabla Evminov.",
    wallMountingVideoTitle:
      "Guía de Montaje de la Tabla Evminov en Vigas de Madera de 16\" (EE. UU.)",
    methodDemoVideoTitle:
      "Demostración Oficial del Método Evminov de Descompresión y Ejercicios",
    reviewHeading:
      "¿Te Encanta Tu Tabla Evminov? Comparte Tu Experiencia en 15 Segundos",
    reviewSubtitle:
      "Las opiniones honestas de propietarios ayudan a otras personas a descubrir una alternativa más segura a las mesas de inversión boca abajo. Personaliza tu nota, cópiala en un clic y compártela en Google o YouTube.",
    templateWord: "Plantilla",
    samplePrompts: [
      "Instalé mi tabla Evminov de pino de los Cárpatos en una viga de drywall de 16\" en 15 minutos. ¡10 minutos a 15 grados se sienten muchísimo más seguros que colgar boca abajo en una mesa de inversión!",
      "Envío rápido desde California y excelente calidad de madera natural. Uso el Soporte Independiente en mi apartamento sin perforar paredes: mi espalda baja se siente notablemente más suelta cada noche.",
    ],
    textareaAria: "Borrador de tu reseña como propietario de Evminov",
    copyBtn: "Copiar Reseña en 1 Clic",
    copiedBtn: "¡Copiado al Portapapeles!",
    youtubeBtn: "Abrir Canal Evminov USA",
  },
  fr: {
    badge: "Espace QR Propriétaires Evminov • Montage & Communauté",
    pageTitle: "Bienvenue sur Votre Planche Evminov — Montage & Avis Clients",
    pageSubtitle:
      "Regardez notre guide de fixation murale sur montants bois 16 pouces et la routine de départ ci-dessous, puis partagez votre retour d'expérience.",
    metaDescription:
      "Vidéo officielle de fixation murale sur montants bois 16 pouces, routine d'initiation et espace avis pour votre Planche Evminov.",
    wallMountingVideoTitle:
      "Guide de Fixation Murale sur Montants Bois 16 Pouces — Planche Evminov",
    methodDemoVideoTitle:
      "Démonstration Officielle de la Méthode Evminov : Décompression & Exercices",
    reviewHeading:
      "Vous Appréciez Votre Planche Evminov ? Partagez Votre Avis en 15 Secondes",
    reviewSubtitle:
      "Les retours authentiques aident d'autres personnes à découvrir une alternative plus sûre aux tables d'inversion tête en bas. Personnalisez votre texte, copiez-le en un clic et publiez-le sur Google ou YouTube.",
    templateWord: "Modèle",
    samplePrompts: [
      "Planche Evminov en pin des Carpates fixée sur un montant de 16 pouces en 15 minutes. 10 minutes à 15 degrés sont nettement plus sûres et agréables que de pendre la tête en bas sur une table d'inversion !",
      "Livraison rapide depuis la Californie et superbe finition bois naturel. J'utilise le Support Autoportant dans mon appartement sans aucun trou au mur — mon bas du dos est bien plus détendu chaque soir.",
    ],
    textareaAria: "Votre brouillon d'avis propriétaire Evminov",
    copyBtn: "Copier l'Avis en 1 Clic",
    copiedBtn: "Copié dans le Presse-Papiers !",
    youtubeBtn: "Ouvrir la Chaîne Evminov USA",
  },
  uk: {
    badge: "QR-Хаб Власників Evminov • Монтаж і Спільнота",
    pageTitle: "Вітаємо з Вашим Профілактором Євмінова — Монтаж і Відгуки",
    pageSubtitle:
      "Перегляньте інструкцію з кріплення на американську стіну (стійки 16\") та стартову програму нижче, а потім поділіться власним досвідом з іншими.",
    metaDescription:
      "Офіційне відео монтажу Профілактора Євмінова на стійки 16 дюймів у США, стартові вправи та хаб відгуків власників.",
    wallMountingVideoTitle:
      "Відеоінструкція: Монтаж Дошки Євмінова на Дерев'яні Стійки 16\" (США)",
    methodDemoVideoTitle:
      "Офіційна Демонстрація Методики Євмінова: Декомпресія та Вправи",
    reviewHeading:
      "Задоволені Своєю Дошкою Євмінова? Поділіться Досвідом за 15 Секунд",
    reviewSubtitle:
      "Чесні відгуки реальних власників допомагають іншим знайти безпечнішу альтернативу інверсійним столам догори ногами. Відредагуйте текст нижче, скопіюйте одним кліком та опублікуйте в Google або YouTube.",
    templateWord: "Шаблон",
    samplePrompts: [
      "Закріпив Профілактор Євмінова з карпатської сосни на американську стійку 16\" за 15 хвилин. 10 хвилин під кутом 15° відчуваються значно безпечніше й комфортніше, ніж висіти догори ногами на інверсійному столі!",
      "Швидка доставка з Каліфорнії та чудова якість натуральної деревини. Використовую підлогову стійку у квартирі без свердління стін — поперек помітно розслабляється щовечора.",
    ],
    textareaAria: "Чернетка вашого відгуку власника Evminov",
    copyBtn: "Скопіювати Відгук в 1 Клік",
    copiedBtn: "Скопійовано в Буфер Обміну!",
    youtubeBtn: "Відкрити Канал Evminov USA",
  },
  ru: {
    badge: "QR-Хаб Владельцев Evminov • Монтаж и Сообщество",
    pageTitle: "Добро Пожаловать в Клуб Владельцев Evminov — Монтаж и Отзывы",
    pageSubtitle:
      "Посмотрите инструкцию по креплению на американскую стену (стойки 16\") и базовый комплекс упражнений ниже, а затем поделитесь своим реальным опытом.",
    metaDescription:
      "Официальное видео монтажа Доски Евминова на стойки 16 дюймов в США, стартовый комплекс упражнений и хаб отзывов владельцев.",
    wallMountingVideoTitle:
      "Видеоинструкция: Монтаж Доски Евминова на Деревянные Стойки 16\" (США)",
    methodDemoVideoTitle:
      "Официальная Демонстрация Методики Евминова: Декомпрессия и Упражнения",
    reviewHeading:
      "Нравится Ваша Доска Евминова? Поделитесь Опытом за 15 Секунд",
    reviewSubtitle:
      "Честные отзывы владельцев помогают другим найти безопасную альтернативу инверсионным столам вниз головой. Отредактируйте текст ниже, скопируйте одним нажатием и опубликуйте в Google или YouTube.",
    templateWord: "Шаблон",
    samplePrompts: [
      "Установил Доску Евминова из карпатской сосны на американскую стойку 16\" за 15 минут. 10 минут под углом 15° ощущаются несравненно безопаснее и комфортнее, чем висеть вниз головой на инверсионном столе!",
      "Быстрая доставка из Калифорнии и отличная обработка натурального дерева. Использую напольную стойку в съёмной квартире без сверления стен — поясница заметно расслабляется каждый вечер.",
    ],
    textareaAria: "Черновик вашего отзыва владельца Evminov",
    copyBtn: "Скопировать Отзыв в 1 Клик",
    copiedBtn: "Скопировано в Буфер Обмена!",
    youtubeBtn: "Открыть Канал Evminov USA",
  },
};

export interface HubViewsCopy {
  compareCta: string;
  conditionsCta: string;
  guidesCta: string;
  shippingCards: {
    usLabel: string;
    usTime: string;
    usDesc: string;
    caLabel: string;
    caTime: string;
    caDesc: string;
    euLabel: string;
    euTime: string;
    euDesc: string;
  };
  usDirectoryTitle: string;
  minReadSuffix: string;
}

export const HUB_VIEWS_COPY: Record<Locale, HubViewsCopy> = {
  en: {
    compareCta: "Read Side-by-Side Comparison",
    conditionsCta: "View Routine & Sizing",
    guidesCta: "Read Guide",
    shippingCards: {
      usLabel: "United States",
      usTime: "1–4 Business Days",
      usDesc: `Dispatched from Glendale, CA (${SITE_CONFIG.address.street}) via insured UPS / FedEx.`,
      caLabel: "Canada (CAD / USD)",
      caTime: "4–8 Business Days",
      caDesc:
        "Tracked cross-border UPS / Canada Post delivery across Ontario, Quebec, BC & Alberta.",
      euLabel: "Europe & Ukraine",
      euTime: "Direct Workshop",
      euDesc:
        "Direct European dispatch across EU nations, UK, Poland, Italy, and Ukraine.",
    },
    usDirectoryTitle: "All 50 US States Transit Directory",
    minReadSuffix: "min read",
  },
  es: {
    compareCta: "Leer Comparativa Detallada",
    conditionsCta: "Ver Rutina y Tallas",
    guidesCta: "Leer Guía",
    shippingCards: {
      usLabel: "Estados Unidos",
      usTime: "1–4 Días Hábiles",
      usDesc: `Despachado desde Glendale, CA (${SITE_CONFIG.address.street}) por UPS / FedEx asegurado.`,
      caLabel: "Canadá (CAD / USD)",
      caTime: "4–8 Días Hábiles",
      caDesc:
        "Entrega transfronteriza rastreada por UPS / Canada Post en Ontario, Quebec, Columbia Británica y Alberta.",
      euLabel: "Europa y Ucrania",
      euTime: "Envío Directo de Taller",
      euDesc:
        "Despacho europeo directo hacia la UE, Reino Unido, Polonia, Italia y Ucrania.",
    },
    usDirectoryTitle: "Directorio de Tiempos de Envío — 50 Estados de EE. UU.",
    minReadSuffix: "min de lectura",
  },
  fr: {
    compareCta: "Lire le Comparatif Détaillé",
    conditionsCta: "Voir la Routine & la Taille",
    guidesCta: "Lire le Guide",
    shippingCards: {
      usLabel: "États-Unis",
      usTime: "1 à 4 Jours Ouvrables",
      usDesc: `Expédié depuis Glendale, CA (${SITE_CONFIG.address.street}) par UPS / FedEx assuré.`,
      caLabel: "Canada (CAD / USD)",
      caTime: "4 à 8 Jours Ouvrables",
      caDesc:
        "Livraison transfrontalière suivie par UPS / Postes Canada en Ontario, au Québec, en C.-B. et en Alberta.",
      euLabel: "Europe & Ukraine",
      euTime: "Direct Atelier",
      euDesc:
        "Expédition directe en Europe vers l'UE, le Royaume-Uni, la Pologne, l'Italie et l'Ukraine.",
    },
    usDirectoryTitle: "Délais de Livraison pour les 50 États Américains",
    minReadSuffix: "min de lecture",
  },
  uk: {
    compareCta: "Читати Детальне Порівняння",
    conditionsCta: "Переглянути Програму й Розмір",
    guidesCta: "Читати Гайд",
    shippingCards: {
      usLabel: "Сполучені Штати (США)",
      usTime: "1–4 Робочі Дні",
      usDesc: `Відправка зі складу в Glendale, CA (${SITE_CONFIG.address.street}) застрахованою службою UPS / FedEx.`,
      caLabel: "Канада (CAD / USD)",
      caTime: "4–8 Робочих Днів",
      caDesc:
        "Відстежувана доставка UPS / Canada Post по Онтаріо, Квебеку, Британській Колумбії та Альберті.",
      euLabel: "Європа та Україна",
      euTime: "Прямо з Виробництва",
      euDesc:
        "Пряма європейська відправка до країн ЄС, Великої Британії, Польщі, Італії та України.",
    },
    usDirectoryTitle: "Довідник Термінів Доставки — Усі 50 Штатів США",
    minReadSuffix: "хв читання",
  },
  ru: {
    compareCta: "Читать Подробное Сравнение",
    conditionsCta: "Смотреть Программу и Размер",
    guidesCta: "Читать Статью",
    shippingCards: {
      usLabel: "Соединённые Штаты (США)",
      usTime: "1–4 Рабочих Дня",
      usDesc: `Отправка со склада в Glendale, CA (${SITE_CONFIG.address.street}) застрахованной доставкой UPS / FedEx.`,
      caLabel: "Канада (CAD / USD)",
      caTime: "4–8 Рабочих Дней",
      caDesc:
        "Отслеживаемая доставка UPS / Canada Post в Онтарио, Квебек, Британскую Колумбию и Альберту.",
      euLabel: "Европа и Украина",
      euTime: "Напрямую из Мастерской",
      euDesc:
        "Прямая европейская отправка по странам ЕС, в Великобританию, Польшу, Италию и Украину.",
    },
    usDirectoryTitle: "Сроки Доставки по Всем 50 Штатам США",
    minReadSuffix: "мин чтения",
  },
};

export const COMPARISON_EYEBROWS: Record<string, Record<Locale, string>> = {
  "evminov-vs-inversion-table": {
    en: "High-Intent Comparison • Inversion Table Alternative",
    es: "Comparativa Clave • Alternativa a la Mesa de Inversión",
    fr: "Comparatif Clé • Alternative Table d'Inversion",
    uk: "Ключове Порівняння • Альтернатива Інверсійному Столу",
    ru: "Ключевое Сравнение • Альтернатива Инверсионному Столу",
  },
  "evminov-vs-teeter": {
    en: "Competitor Comparison • Teeter Alternative",
    es: "Comparativa Directa • Alternativa a Teeter",
    fr: "Comparatif Direct • Alternative à Teeter",
    uk: "Пряме Порівняння • Альтернатива Teeter",
    ru: "Прямое Сравнение • Альтернатива Teeter",
  },
  "evminov-vs-back-stretcher": {
    en: "Equipment Comparison • Real Axial Unloading",
    es: "Comparativa de Equipos • Descarga Axial Real",
    fr: "Comparatif Matériel • Vraie Décompression Axiale",
    uk: "Порівняння Обладнання • Справжнє Осьове Витяжіння",
    ru: "Сравнение Оборудования • Настоящая Осевая Разгрузка",
  },
  "evminov-vs-decompression-clinic": {
    en: "Economics & Consistency • Home Spine Station",
    es: "Ahorro y Constancia • Estación Espinal en Casa",
    fr: "Budget & Régularité • Station Dorsale à Domicile",
    uk: "Економіка та Регулярність • Домашня Станція Хребта",
    ru: "Экономика и Регулярность • Домашняя Станция для Спины",
  },
  "evminov-vs-back-surgery": {
    en: "Evidence-Informed Overview • Non-Invasive First",
    es: "Enfoque Informado • Opciones No Invasivas Primero",
    fr: "Approche Documentée • Soins Non Invasifs d'Abord",
    uk: "Виважений Підхід • Спершу Неінвазивні Методи",
    ru: "Взвешенный Подход • Сначала Неинвазивные Методы",
  },
};

export const CONDITION_HUB_BADGES: Record<string, Record<Locale, string>> = {
  "herniated-disc-l4-l5": {
    en: "10° – 18° Low Incline • 10–12 min, 1–2× daily",
    es: "Inclinación suave 10° – 18° • 10–12 min, 1–2× al día",
    fr: "Inclinaison douce 10° – 18° • 10–12 min, 1–2×/jour",
    uk: "М'який кут 10° – 18° • 10–12 хв, 1–2× на день",
    ru: "Мягкий угол 10° – 18° • 10–12 мин, 1–2× в день",
  },
  "sciatica-relief": {
    en: "10° – 18° Incline • 10–12 min daily",
    es: "Inclinación 10° – 18° • 10–12 min al día",
    fr: "Inclinaison 10° – 18° • 10–12 min par jour",
    uk: "Кут 10° – 18° • 10–12 хв щодня",
    ru: "Угол 10° – 18° • 10–12 мин ежедневно",
  },
  "degenerative-disc-disease": {
    en: "8° – 15° Gentle Incline • 8–10 min daily",
    es: "Inclinación suave 8° – 15° • 8–10 min al día",
    fr: "Inclinaison très douce 8° – 15° • 8–10 min/jour",
    uk: "Делікатний кут 8° – 15° • 8–10 хв щодня",
    ru: "Деликатный угол 8° – 15° • 8–10 мин ежедневно",
  },
  "lower-back-pain": {
    en: "12° – 20° Incline • 10 min daily",
    es: "Inclinación 12° – 20° • 10 min al día",
    fr: "Inclinaison 12° – 20° • 10 min par jour",
    uk: "Кут 12° – 20° • 10 хв щодня",
    ru: "Угол 12° – 20° • 10 мин ежедневно",
  },
  "scoliosis-posture": {
    en: "8° – 14° Low Incline • 5–8 min daily (supervised)",
    es: "Inclinación baja 8° – 14° • 5–8 min al día (supervisado)",
    fr: "Faible inclinaison 8° – 14° • 5–8 min/jour (encadré)",
    uk: "Низький кут 8° – 14° • 5–8 хв щодня (під наглядом)",
    ru: "Низкий угол 8° – 14° • 5–8 мин ежедневно (под присмотром)",
  },
  "cervical-neck-traction": {
    en: "8° – 12° Ultra-Gentle Incline • 5–8 min daily",
    es: "Inclinación ultrasuave 8° – 12° • 5–8 min al día",
    fr: "Inclinaison ultra-douce 8° – 12° • 5–8 min/jour",
    uk: "Надм'який кут 8° – 12° • 5–8 хв щодня",
    ru: "Сверхмягкий угол 8° – 12° • 5–8 мин ежедневно",
  },
  "athlete-spine-recovery": {
    en: "20° – 32° Athletic Incline • 10–15 min post-workout",
    es: "Inclinación atlética 20° – 32° • 10–15 min post-entreno",
    fr: "Inclinaison sportive 20° – 32° • 10–15 min post-séance",
    uk: "Спортивний кут 20° – 32° • 10–15 хв після тренування",
    ru: "Спортивный угол 20° – 32° • 10–15 мин после тренировки",
  },
  "desk-worker-posture": {
    en: "14° – 22° Incline • 7–10 min daily",
    es: "Inclinación 14° – 22° • 7–10 min al día",
    fr: "Inclinaison 14° – 22° • 7–10 min par jour",
    uk: "Кут 14° – 22° • 7–10 хв щодня",
    ru: "Угол 14° – 22° • 7–10 мин ежедневно",
  },
};

export const GUIDE_CATEGORY_LABELS: Record<string, Record<Locale, string>> = {
  "Inversion Alternative": {
    en: "Inversion Alternative",
    es: "Alternativa a Inversión",
    fr: "Alternative Inversion",
    uk: "Альтернатива Інверсії",
    ru: "Альтернатива Инверсии",
  },
  "Lumbar Biomechanics": {
    en: "Lumbar Biomechanics",
    es: "Biomecánica Lumbar",
    fr: "Biomécanique Lombaire",
    uk: "Біомеханіка Попереку",
    ru: "Биомеханика Поясницы",
  },
  "Athletic Recovery": {
    en: "Athletic Recovery",
    es: "Recuperación Deportiva",
    fr: "Récupération Sportive",
    uk: "Спортивне Відновлення",
    ru: "Спортивное Восстановление",
  },
  "Sciatica Comfort": {
    en: "Sciatica Comfort",
    es: "Confort Ciático",
    fr: "Confort Sciatique",
    uk: "Комфорт при Ішіасі",
    ru: "Комфорт при Ишиасе",
  },
  "Desk Ergonomics": {
    en: "Desk Ergonomics",
    es: "Ergonomía de Oficina",
    fr: "Ergonomie Bureau",
    uk: "Офісна Ергономіка",
    ru: "Офисная Эргономика",
  },
  "Preventive Spine Hygiene": {
    en: "Preventive Spine Hygiene",
    es: "Higiene Espinal Preventiva",
    fr: "Hygiène Vertébrale Préventive",
    uk: "Профілактична Гігієна Хребта",
    ru: "Профилактическая Гигиена Спины",
  },
  "Buyer's Guide": {
    en: "Buyer's Guide",
    es: "Guía de Compra",
    fr: "Guide d'Achat",
    uk: "Гід Покупця",
    ru: "Гид Покупателя",
  },
  "Family & Youth Posture": {
    en: "Family & Youth Posture",
    es: "Postura Familiar y Juvenil",
    fr: "Posture Famille & Jeunes",
    uk: "Дитяча та Сімейна Постава",
    ru: "Детская и Семейная Осанка",
  },
};

export function localizeReadTime(readTime: string, lang: Locale): string {
  const match = readTime.match(/(\d+)/);
  if (!match) return readTime;
  return `${match[1]} ${HUB_VIEWS_COPY[lang].minReadSuffix}`;
}

export function localizeTransitDays(expressDays: string, lang: Locale): string {
  if (lang === "en") return expressDays;
  const suffixMap: Record<Exclude<Locale, "en">, string> = {
    es: "días hábiles",
    fr: "jours ouvrables",
    uk: "робочі дні",
    ru: "рабочих дня",
  };
  return expressDays.replace(/business days/i, suffixMap[lang]);
}

export function localizeCarrier(carrier: string, lang: Locale): string {
  if (lang === "en") return carrier;
  const map: Record<string, Record<Exclude<Locale, "en">, string>> = {
    "Local Express / UPS Ground": {
      es: "Express Local / UPS Ground",
      fr: "Express Local / UPS Ground",
      uk: "Локальний Експрес / UPS Ground",
      ru: "Локальный Экспресс / UPS Ground",
    },
    "Tracked Air Freight": {
      es: "Carga Aérea con Rastreo",
      fr: "Fret Aérien Suivi",
      uk: "Авіадоставка з Трекінгом",
      ru: "Авиадоставка с Трекингом",
    },
    "Air Cargo Express": {
      es: "Carga Aérea Express",
      fr: "Fret Aérien Express",
      uk: "Експрес-Авіадоставка",
      ru: "Экспресс-Авиадоставка",
    },
  };
  return map[carrier]?.[lang] || carrier;
}

export type LegalDocType =
  | "privacy"
  | "terms"
  | "shipping-returns"
  | "wellness-disclaimer";

export interface LegalDocContent {
  title: string;
  metaDescription: string;
  updated: string;
  sections: Array<{ h: string; p: string }>;
}

export const LEGAL_META_LABELS: Record<Locale, { lastUpdated: string }> = {
  en: { lastUpdated: "Last Updated" },
  es: { lastUpdated: "Última actualización" },
  fr: { lastUpdated: "Dernière mise à jour" },
  uk: { lastUpdated: "Останнє оновлення" },
  ru: { lastUpdated: "Последнее обновление" },
};

export const LEGAL_PAGES_CONTENT: Record<
  Locale,
  Record<LegalDocType, LegalDocContent>
> = {
  en: {
    privacy: {
      title: "Privacy Policy (CCPA / CPRA & GDPR Compliant)",
      metaDescription:
        "How Evminov Spine Systems protects customer data, handles cookies honestly under Consent Mode v2, and respects CCPA/GDPR rights.",
      updated: "November 2026",
      sections: [
        {
          h: "1. Data We Collect",
          p: "When you reserve an Evminov board, request a custom angle guide, or chat with our concierge on evminovusa.com, we collect only the contact and shipping information you voluntarily provide (name, email, phone, delivery state/address, and optional notes). We never store raw payment card numbers on our servers.",
        },
        {
          h: "2. Cookies & Consent Mode v2",
          p: "Essential cookies store your cookie preferences. Optional analytics (Google Analytics 4, Microsoft Clarity) and marketing tags only activate after you explicitly grant consent via our Cookie Preferences banner. You may change or revoke consent anytime from the footer.",
        },
        {
          h: "3. Your Rights (California CCPA/CPRA & EU GDPR)",
          p: `You have the right to request access, correction, or deletion of your personal records at any time by emailing ${SITE_CONFIG.supportEmail} or calling ${SITE_CONFIG.phoneDisplay}. We never sell personal data to third parties.`,
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      metaDescription:
        "Evminov Spine Systems ordering terms, pricing clarity, 10-year timber frame warranty, and patent rights.",
      updated: "November 2026",
      sections: [
        {
          h: "1. Orders, Pricing & Availability",
          p: "All product prices on evminovusa.com are listed in US Dollars (USD) and clearly distinguish Direct Workshop Delivery from Glendale, California Express Fulfillment. Reservations submitted prior to payment completion are confirmed by email from orders@evminovusa.com.",
        },
        {
          h: "2. 10-Year Structural Frame Warranty",
          p: "Every authentic Evminov Carpathian pine or Ukrainian alder board carries a 10-year warranty against structural manufacturing defects under normal home or studio use within the specified user weight limit (210–220 lbs Standard/Folding/Alder; 330 lbs Wide Heavy-Duty).",
        },
        {
          h: "3. Intellectual Property",
          p: `Evminov Spine Systems hardware designs are protected by international patents (${SITE_CONFIG.compliance.patentsSummary}).`,
        },
      ],
    },
    "shipping-returns": {
      title: "Shipping, 60-Day Home Trial & Returns Policy",
      metaDescription:
        "Glendale CA 1-4 day express shipping across all 50 US states, global workshop delivery, and 60-day home trial return procedure.",
      updated: "November 2026",
      sections: [
        {
          h: "1. US 50-State & International Delivery",
          p: `California Warehouse Express orders ship from ${SITE_CONFIG.address.full} via insured UPS/FedEx (1–2 business days West Coast, 2–3 days Central/South, 3–4 days East Coast, 4–5 days AK/HI). Direct Workshop Delivery ships to the US, Canada, EU, UK, and Ukraine in 10–16 business days.`,
        },
        {
          h: "2. 60-Day Risk-Free Home Trial",
          p: `You have 60 calendar days from delivery to evaluate your Evminov board at home. To initiate a return, email ${SITE_CONFIG.supportEmail} with your order reference for return authorization and instructions. Refunds are processed within 5–7 business days after inspection of returned merchandise.`,
        },
        {
          h: "3. Damaged in Transit Replacement",
          p: `Every shipment is 100% insured. If a crate arrives damaged, photograph the box and item within 48 hours and email ${SITE_CONFIG.supportEmail} for a prompt replacement at no cost to you.`,
        },
      ],
    },
    "wellness-disclaimer": {
      title: "General Wellness Equipment & Safety Disclaimer",
      metaDescription:
        "HTS 9506.91.0030 general wellness classification, HSA/FSA LMN guidance, and spine exercise contraindications.",
      updated: "November 2026",
      sections: [
        {
          h: "1. Product Classification (General Wellness / Exercise Equipment)",
          p: `Evminov Spine Systems boards sold in the United States are classified as ${SITE_CONFIG.compliance.classification}. Statements on this site have not been evaluated by the US Food and Drug Administration (FDA). Our equipment is intended to support general spine wellness, posture conditioning, flexibility, and athletic recovery — not to diagnose, treat, cure, or prevent any disease.`,
        },
        {
          h: "2. HSA / FSA Pre-Tax Reimbursement",
          p: SITE_CONFIG.compliance.hsaFsaNote,
        },
        {
          h: "3. Consult Your Physician & Contraindications",
          p: "Consult a licensed physician before starting inclined spine exercises if you have acute back trauma, recent surgery, osteoporosis, severe hypertension, pregnancy, or neurological red flags (foot drop, severe numbness, or bladder/bowel changes). Absolute contraindications include: Acute fever (>99.5°F / 37.5°C) or systemic infection; Recent unhealed spinal fractures or acute spinal trauma; Active spinal malignancies or bone metastases; Active internal hemorrhage or severe aortic/vascular aneurysm; Recent stroke or myocardial infarction (within 6 months); Acute cauda equina symptoms (urgent emergency medical care required).",
        },
      ],
    },
  },
  es: {
    privacy: {
      title: "Política de Privacidad (Conforme a CCPA / CPRA y GDPR)",
      metaDescription:
        "Cómo Evminov Spine Systems protege tus datos personales, gestiona cookies bajo Consent Mode v2 y garantiza tus derechos CCPA y GDPR.",
      updated: "Noviembre de 2026",
      sections: [
        {
          h: "1. Datos que Recopilamos",
          p: "Cuando reservas una tabla Evminov, solicitas una guía personalizada de ángulos o conversas con nuestro asistente en evminovusa.com, recopilamos únicamente la información de contacto y envío que proporcionas voluntariamente (nombre, correo electrónico, teléfono, estado/dirección de entrega y notas opcionales). Nunca almacenamos números completos de tarjetas de pago en nuestros servidores.",
        },
        {
          h: "2. Cookies y Consent Mode v2",
          p: "Las cookies esenciales guardan tus preferencias de privacidad. Las etiquetas opcionales de analítica (Google Analytics 4, Microsoft Clarity) y marketing solo se activan después de otorgar tu consentimiento explícito en el banner de Preferencias de Cookies. Puedes modificar o revocar tu consentimiento en cualquier momento desde el pie de página.",
        },
        {
          h: "3. Tus Derechos (California CCPA/CPRA y GDPR de la UE)",
          p: `Tienes derecho a solicitar acceso, corrección o eliminación de tus registros personales en cualquier momento escribiendo a ${SITE_CONFIG.supportEmail} o llamando al ${SITE_CONFIG.phoneDisplay}. Nunca vendemos datos personales a terceros.`,
        },
      ],
    },
    terms: {
      title: "Términos de Servicio",
      metaDescription:
        "Condiciones de pedido de Evminov Spine Systems, transparencia de precios, garantía estructural de 10 años y patentes internacionales.",
      updated: "Noviembre de 2026",
      sections: [
        {
          h: "1. Pedidos, Precios y Disponibilidad",
          p: "Todos los precios de productos en evminovusa.com se muestran en dólares estadounidenses (USD) y distinguen claramente el Envío Directo de Taller del Despacho Express desde Glendale, California. Las reservas enviadas antes de completar el pago se confirman por correo electrónico desde orders@evminovusa.com.",
        },
        {
          h: "2. Garantía Estructural de 10 Años",
          p: "Cada tabla Evminov auténtica de pino de los Cárpatos o aliso ucraniano cuenta con una garantía de 10 años contra defectos estructurales de fabricación bajo uso doméstico o de estudio normal dentro del límite de peso especificado (210–220 lbs Estándar/Plegable/Aliso; 330 lbs Ancha Reforzada).",
        },
        {
          h: "3. Propiedad Intelectual",
          p: `Los diseños mecánicos de Evminov Spine Systems están protegidos por patentes internacionales (${SITE_CONFIG.compliance.patentsSummary}).`,
        },
      ],
    },
    "shipping-returns": {
      title: "Política de Envíos, Prueba en Casa de 60 Días y Devoluciones",
      metaDescription:
        "Envío express de 1–4 días desde Glendale, CA a los 50 estados de EE. UU., entrega internacional y garantía de prueba en casa de 60 días.",
      updated: "Noviembre de 2026",
      sections: [
        {
          h: "1. Entrega en los 50 Estados de EE. UU. e Internacional",
          p: `Los pedidos Express desde el almacén de California salen de ${SITE_CONFIG.address.full} por UPS/FedEx asegurado (1–2 días hábiles Costa Oeste, 2–3 días Centro/Sur, 3–4 días Costa Este, 4–5 días Alaska/Hawái). El Envío Directo de Taller llega a EE. UU., Canadá, UE, Reino Unido y Ucrania en 10–16 días hábiles.`,
        },
        {
          h: "2. Prueba en Casa de 60 Días Sin Riesgo",
          p: `Dispones de 60 días calendario desde la entrega para probar tu tabla Evminov en casa. Para iniciar una devolución, escribe a ${SITE_CONFIG.supportEmail} indicando tu número de referencia para recibir autorización e instrucciones. Los reembolsos se procesan en 5–7 días hábiles tras inspeccionar el artículo devuelto.`,
        },
        {
          h: "3. Reemplazo por Daños en Tránsito",
          p: `Cada envío está 100% asegurado. Si un paquete llega dañado, fotografía la caja y el producto dentro de las 48 horas siguientes y escríbenos a ${SITE_CONFIG.supportEmail} para gestionar un reemplazo inmediato sin costo para ti.`,
        },
      ],
    },
    "wellness-disclaimer": {
      title: "Aviso de Equipo de Bienestar General y Seguridad",
      metaDescription:
        "Clasificación HTS 9506.91.0030 de equipo de bienestar general, guía para reembolso HSA/FSA con carta LMN y contraindicaciones de seguridad.",
      updated: "Noviembre de 2026",
      sections: [
        {
          h: "1. Clasificación del Producto (Bienestar General / Equipo de Ejercicio)",
          p: "Las tablas Evminov Spine Systems vendidas en Estados Unidos están clasificadas como Equipo de Bienestar General y Acondicionamiento Espinal (HTS 9506.91.0030). Las declaraciones de este sitio no han sido evaluadas por la Administración de Alimentos y Medicamentos de EE. UU. (FDA). Nuestro equipo está destinado a apoyar el bienestar espinal general, la postura, la flexibilidad y la recuperación deportiva, no a diagnosticar, tratar, curar ni prevenir enfermedades.",
        },
        {
          h: "2. Reembolso Antes de Impuestos HSA / FSA",
          p: "Muchos clientes en Estados Unidos utilizan fondos HSA/FSA antes de impuestos junto con una Carta de Necesidad Médica (LMN) de su profesional de salud. Proporcionamos una factura detallada de equipo de bienestar inmediatamente después de tu compra.",
        },
        {
          h: "3. Consulta a Tu Médico y Contraindicaciones",
          p: "Consulta a un médico autorizado antes de iniciar ejercicios en plano inclinado si presentas trauma espinal agudo, cirugía reciente, osteoporosis, hipertensión severa, embarazo o signos neurológicos de alarma (pie caído, entumecimiento severo o alteraciones vesicales/intestinales). Las contraindicaciones absolutas incluyen: fiebre aguda (>99.5°F / 37.5°C) o infección sistémica; fracturas espinales recientes no consolidadas o trauma espinal agudo; neoplasias espinales activas o metástasis óseas; hemorragia interna activa o aneurisma aórtico/vascular severo; accidente cerebrovascular o infarto de miocardio reciente (últimos 6 meses); síntomas agudos de síndrome de cauda equina (requiere atención médica de urgencia).",
        },
      ],
    },
  },
  fr: {
    privacy: {
      title: "Politique de Confidentialité (Conforme CCPA / CPRA & RGPD)",
      metaDescription:
        "Comment Evminov Spine Systems protège vos données personnelles, gère les cookies avec Consent Mode v2 et respecte vos droits CCPA et RGPD.",
      updated: "Novembre 2026",
      sections: [
        {
          h: "1. Données Collectées",
          p: "Lorsque vous réservez une planche Evminov, demandez un guide d'angle personnalisé ou échangez avec notre concierge sur evminovusa.com, nous recueillons uniquement les coordonnées et informations de livraison que vous fournissez volontairement (nom, courriel, téléphone, État/province/adresse et remarques optionnelles). Nous ne conservons jamais de numéros bruts de carte bancaire sur nos serveurs.",
        },
        {
          h: "2. Cookies et Consent Mode v2",
          p: "Les cookies essentiels mémorisent vos choix de confidentialité. Les balises optionnelles de mesure d'audience (Google Analytics 4, Microsoft Clarity) et de marketing ne s'activent qu'après votre accord explicite dans notre bandeau de préférences. Vous pouvez modifier ou retirer votre consentement à tout moment depuis le pied de page.",
        },
        {
          h: "3. Vos Droits (CCPA/CPRA Californie & RGPD Européen)",
          p: `Vous pouvez demander l'accès, la rectification ou la suppression de vos données personnelles à tout moment par courriel à ${SITE_CONFIG.supportEmail} ou par téléphone au ${SITE_CONFIG.phoneDisplay}. Nous ne vendons jamais vos données personnelles à des tiers.`,
        },
      ],
    },
    terms: {
      title: "Conditions d'Utilisation",
      metaDescription:
        "Conditions de commande Evminov Spine Systems, tarification transparente, garantie structurelle de 10 ans et brevets internationaux.",
      updated: "Novembre 2026",
      sections: [
        {
          h: "1. Commandes, Tarifs et Disponibilité",
          p: "Tous les prix affichés sur evminovusa.com sont indiqués en dollars américains (USD) et distinguent clairement la Livraison Directe Atelier de l'Expédition Express depuis Glendale, Californie. Les réservations soumises avant le règlement sont confirmées par courriel depuis orders@evminovusa.com.",
        },
        {
          h: "2. Garantie Structurelle de 10 Ans",
          p: "Chaque planche Evminov authentique en pin des Carpates ou en aulne ukrainien bénéficie d'une garantie de 10 ans contre les défauts structurels de fabrication dans le cadre d'une utilisation normale à domicile ou en studio, dans la limite de poids prévue (95–100 kg Standard/Pliable/Aulne ; 150 kg Modèle Large Renforcé).",
        },
        {
          h: "3. Propriété Intellectuelle",
          p: `Les conceptions matérielles d'Evminov Spine Systems sont protégées par des brevets internationaux (${SITE_CONFIG.compliance.patentsSummary}).`,
        },
      ],
    },
    "shipping-returns": {
      title: "Politique de Livraison, Essai 60 Jours et Retours",
      metaDescription:
        "Expédition express 1–4 jours depuis Glendale (CA) dans les 50 États US, livraison Canada/Europe et essai à domicile 60 jours sans risque.",
      updated: "Novembre 2026",
      sections: [
        {
          h: "1. Livraison dans les 50 États US et à l'International",
          p: `Les commandes Express depuis l'entrepôt de Californie partent de ${SITE_CONFIG.address.full} par UPS/FedEx assuré (1–2 jours ouvrables Côte Ouest, 2–3 jours Centre/Sud, 3–4 jours Côte Est, 4–5 jours Alaska/Hawaï). La Livraison Directe Atelier dessert les États-Unis, le Canada, l'UE, le Royaume-Uni et l'Ukraine en 10 à 16 jours ouvrables.`,
        },
        {
          h: "2. Essai à Domicile de 60 Jours Sans Risque",
          p: `Vous disposez de 60 jours calendaires après réception pour évaluer votre planche Evminov chez vous. Pour demander un retour, écrivez à ${SITE_CONFIG.supportEmail} avec votre référence de commande afin d'obtenir l'autorisation et les instructions de renvoi. Les remboursements sont traités sous 5 à 7 jours ouvrables après contrôle du matériel retourné.`,
        },
        {
          h: "3. Remplacement en Cas de Dommage de Transport",
          p: `Chaque colis est assuré à 100 %. En cas d'avarie à la livraison, photographiez l'emballage et le produit dans les 48 heures et contactez ${SITE_CONFIG.supportEmail} pour un remplacement rapide sans frais.`,
        },
      ],
    },
    "wellness-disclaimer": {
      title: "Avis Équipement de Bien-Être Général et Sécurité",
      metaDescription:
        "Classification HTS 9506.91.0030 d'équipement de bien-être général, justificatif HSA/FSA (LMN) et contre-indications de sécurité.",
      updated: "Novembre 2026",
      sections: [
        {
          h: "1. Classification du Produit (Bien-Être Général / Équipement d'Exercice)",
          p: "Les planches Evminov Spine Systems commercialisées aux États-Unis sont classées comme Équipement de Bien-Être Général et de Conditionnement Vertébral (HTS 9506.91.0030). Les déclarations de ce site n'ont pas été évaluées par la FDA américaine. Notre matériel vise à soutenir le bien-être dorsal général, la posture, la souplesse et la récupération sportive, et non à diagnostiquer, traiter, guérir ou prévenir une maladie.",
        },
        {
          h: "2. Remboursement Santé Pré-Impôt HSA / FSA (USA)",
          p: "De nombreux clients résidant aux États-Unis utilisent des fonds HSA/FSA pré-impôt avec une Lettre de Nécessité Médicale (LMN) délivrée par leur praticien. Nous fournissons une facture détaillée d'équipement de bien-être immédiatement après l'achat.",
        },
        {
          h: "3. Avis Médical et Contre-Indications",
          p: "Consultez un médecin avant d'entreprendre des exercices sur plan incliné en cas de traumatisme dorsal aigu, chirurgie récente, ostéoporose, hypertension sévère, grossesse ou signaux neurologiques d'alerte (pied tombant, engourdissement prononcé ou troubles sphinctériens). Contre-indications absolues : fièvre aiguë (>37,5 °C / 99,5 °F) ou infection systémique ; fracture vertébrale récente non consolidée ou traumatisme aigu ; tumeur vertébrale active ou métastase osseuse ; hémorragie interne active ou anévrisme aortique/vasculaire grave ; AVC ou infarctus du myocarde récent (moins de 6 mois) ; symptômes aigus du syndrome de la queue-de-cheval (urgence médicale immédiate).",
        },
      ],
    },
  },
  uk: {
    privacy: {
      title: "Політика Конфіденційності (Відповідність CCPA / CPRA та GDPR)",
      metaDescription:
        "Як Evminov Spine Systems захищає персональні дані клієнтів, працює з cookies за стандартом Consent Mode v2 та поважає права CCPA/GDPR.",
      updated: "Листопад 2026",
      sections: [
        {
          h: "1. Які Дані Ми Збираємо",
          p: "Коли ви бронюєте Профілактор Євмінова, замовляєте персональний план кутів нахилу або спілкуєтеся з нашим консультантом на evminovusa.com, ми збираємо лише ті контактні та адресні дані, які ви добровільно надаєте (ім'я, email, телефон, штат/адресу доставки та додаткові примітки). Ми ніколи не зберігаємо повні номери банківських карток на наших серверах.",
        },
        {
          h: "2. Cookies та Consent Mode v2",
          p: "Необхідні cookies зберігають ваші налаштування приватності. Додаткові інструменти аналітики (Google Analytics 4, Microsoft Clarity) та маркетингові теги активуються лише після вашої прямої згоди у банері налаштувань cookies. Ви можете змінити або відкликати згоду в будь-який момент у футері сайту.",
        },
        {
          h: "3. Ваші Права (Каліфорнійський CCPA/CPRA та Європейський GDPR)",
          p: `Ви маєте право в будь-який момент запросити доступ, виправлення або видалення ваших персональних записів, написавши на ${SITE_CONFIG.supportEmail} або зателефонувавши за номером ${SITE_CONFIG.phoneDisplay}. Ми ніколи не продаємо персональні дані третім сторонам.`,
        },
      ],
    },
    terms: {
      title: "Умови Використання",
      metaDescription:
        "Умови замовлення Evminov Spine Systems, прозоре ціноутворення, 10-річна гарантія на дерев'яну конструкцію та міжнародні патенти.",
      updated: "Листопад 2026",
      sections: [
        {
          h: "1. Замовлення, Ціни та Наявність",
          p: "Усі ціни на сайті evminovusa.com вказані в доларах США (USD) і чітко розрізняють Пряму Доставку з Виробництва та Експрес-відправку зі складу в Глендейлі, Каліфорнія. Бронювання, подані до завершення оплати, підтверджуються листом з адреси orders@evminovusa.com.",
        },
        {
          h: "2. 10-Річна Гарантія на Конструкцію",
          p: "Кожен оригінальний Профілактор Євмінова з карпатської сосни або української вільхи має 10-річну гарантію від конструктивних виробничих дефектів за умов звичайного домашнього чи студійного використання в межах зазначеної ваги користувача (95–100 кг / 210–220 lbs для Стандартної, Складаної та Вільхової моделей; 150 кг / 330 lbs для Широкої Посиленої).",
        },
        {
          h: "3. Інтелектуальна Власність",
          p: `Конструктивні рішення Evminov Spine Systems захищені міжнародними патентами (${SITE_CONFIG.compliance.patentsSummary}).`,
        },
      ],
    },
    "shipping-returns": {
      title: "Доставка, 60-Денний Домашній Тест та Політика Повернення",
      metaDescription:
        "Експрес-доставка 1–4 дні з Глендейла (CA) по всіх 50 штатах США, міжнародна доставка та умови 60-денного повернення.",
      updated: "Листопад 2026",
      sections: [
        {
          h: "1. Доставка у 50 Штатів США та Міжнародні Відправлення",
          p: `Замовлення California Warehouse Express відправляються за адресою ${SITE_CONFIG.address.full} застрахованими службами UPS/FedEx (1–2 робочі дні Західне узбережжя, 2–3 дні Центр/Південь, 3–4 дні Східне узбережжя, 4–5 днів Аляска/Гаваї). Пряма доставка з виробництва до США, Канади, ЄС, Великої Британії та України триває 10–16 робочих днів.`,
        },
        {
          h: "2. 60-Денний Домашній Тест-Драйв Без Ризику",
          p: `Ви маєте 60 календарних днів з моменту отримання, щоб оцінити ваш Профілактор Євмінова вдома. Щоб оформити повернення, напишіть на ${SITE_CONFIG.supportEmail} із номером заявки для отримання інструкцій та авторизації повернення. Кошти повертаються протягом 5–7 робочих днів після перевірки повернутого товару.`,
        },
        {
          h: "3. Заміна при Пошкодженні під час Транспортування",
          p: `Кожне відправлення застраховане на 100%. Якщо пакування надійшло пошкодженим, сфотографуйте коробку та виріб протягом 48 годин і надішліть на ${SITE_CONFIG.supportEmail} — ми оперативно оформимо безкоштовну заміну.`,
        },
      ],
    },
    "wellness-disclaimer": {
      title: "Застереження щодо Оздоровчого Обладнання та Безпеки",
      metaDescription:
        "Класифікація HTS 9506.91.0030 як обладнання загального оздоровлення, супровід для HSA/FSA (LMN) та протипоказання для занять.",
      updated: "Листопад 2026",
      sections: [
        {
          h: "1. Класифікація Продукту (Обладнання Загального Оздоровлення / Фітнес)",
          p: "Дошки Evminov Spine Systems, що продаються у США, класифікуються як Обладнання Загального Оздоровлення та Зміцнення Хребта (HTS 9506.91.0030). Твердження на цьому сайті не проходили оцінку Управління з продовольства і медикаментів США (FDA). Обладнання призначене для підтримки загального комфорту спини, постави, гнучкості та спортивного відновлення, а не для діагностики, лікування чи профілактики хвороб.",
        },
        {
          h: "2. Відшкодування через HSA / FSA у США",
          p: "Багато клієнтів у США використовують неоподатковувані кошти HSA/FSA за наявності листа медичної необхідності (LMN) від лікаря. Ми надаємо деталізований інвойс на оздоровче обладнання одразу після покупки.",
        },
        {
          h: "3. Консультація Лікаря та Протипоказання",
          p: "Обов'язково проконсультуйтеся з лікарем перед початком вправ на похилій дошці при гострих травмах спини, нещодавніх операціях, остеопорозі, тяжкій гіпертонії, вагітності або тривожних неврологічних симптомах (слабкість стопи, виражене оніміння, порушення функцій тазових органів). Абсолютні протипоказання включають: гостру гарячку (>37,5 °C / 99,5 °F) або системну інфекцію; свіжі незрощені переломи хребта чи гостру спінальну травму; активні злоякісні новоутворення хребта або кісткові метастази; активну внутрішню кровотечу чи тяжку аневризму аорти/судин; нещодавній інсульт або інфаркт міокарда (протягом останніх 6 місяців); гострі симптоми синдрому кінського хвоста (потребують невідкладної медичної допомоги).",
        },
      ],
    },
  },
  ru: {
    privacy: {
      title: "Политика Конфиденциальности (Соответствие CCPA / CPRA и GDPR)",
      metaDescription:
        "Как Evminov Spine Systems защищает данные клиентов, управляет cookies по стандарту Consent Mode v2 и соблюдает права CCPA и GDPR.",
      updated: "Ноябрь 2026",
      sections: [
        {
          h: "1. Какие Данные Мы Собираем",
          p: "Когда вы бронируете Доску Евминова, запрашиваете персональный план углов наклона или общаетесь с нашим консультантом на evminovusa.com, мы собираем только те контактные и адресные данные, которые вы добровольно указываете (имя, email, телефон, штат/адрес доставки и дополнительные заметки). Мы никогда не храним полные номера банковских карт на наших серверах.",
        },
        {
          h: "2. Cookies и Consent Mode v2",
          p: "Обязательные cookies сохраняют ваши настройки конфиденциальности. Дополнительная аналитика (Google Analytics 4, Microsoft Clarity) и маркетинговые теги активируются только после вашего явного согласия в баннере настроек cookies. Вы можете изменить или отозвать согласие в любое время в футере сайта.",
        },
        {
          h: "3. Ваши Права (Калифорнийский CCPA/CPRA и Европейский GDPR)",
          p: `Вы вправе в любой момент запросить доступ, исправление или удаление ваших персональных записей, написав на ${SITE_CONFIG.supportEmail} или позвонив по телефону ${SITE_CONFIG.phoneDisplay}. Мы никогда не продаём персональные данные третьим лицам.`,
        },
      ],
    },
    terms: {
      title: "Условия Использования",
      metaDescription:
        "Условия оформления заказов Evminov Spine Systems, прозрачность цен, 10-летняя гарантия на деревянную конструкцию и патентные права.",
      updated: "Ноябрь 2026",
      sections: [
        {
          h: "1. Заказы, Цены и Наличие",
          p: "Все цены на сайте evminovusa.com указаны в долларах США (USD) и чётко разделяют Прямую Доставку с Производства и Экспресс-отправку со склада в Глендейле, Калифорния. Заявки, отправленные до завершения оплаты, подтверждаются письмом с адреса orders@evminovusa.com.",
        },
        {
          h: "2. 10-Летняя Гарантия на Конструкцию",
          p: "Каждая оригинальная Доска Евминова из карпатской сосны или украинской ольхи имеет 10-летнюю гарантию от конструктивных производственных дефектов при обычном домашнем или студийном использовании в пределах указанного лимита веса (95–100 кг / 210–220 lbs для Стандартной, Складной и Ольховой моделей; 150 кг / 330 lbs для Широкой Усиленной).",
        },
        {
          h: "3. Интеллектуальная Собственность",
          p: `Конструктивные решения Evminov Spine Systems защищены международными патентами (${SITE_CONFIG.compliance.patentsSummary}).`,
        },
      ],
    },
    "shipping-returns": {
      title: "Доставка, 60-Дневный Домашний Тест и Политика Возврата",
      metaDescription:
        "Экспресс-доставка 1–4 дня из Глендейла (CA) по всем 50 штатам США, международная доставка и условия 60-дневного домашнего теста.",
      updated: "Ноябрь 2026",
      sections: [
        {
          h: "1. Доставка в 50 Штатов США и по Миру",
          p: `Заказы California Warehouse Express отправляются со склада по адресу ${SITE_CONFIG.address.full} застрахованными службами UPS/FedEx (1–2 рабочих дня Западное побережье, 2–3 дня Центр/Юг, 3–4 дня Восточное побережье, 4–5 дней Аляска/Гавайи). Прямая доставка с производства в США, Канаду, ЕС, Великобританию и Украину занимает 10–16 рабочих дней.`,
        },
        {
          h: "2. 60-Дневный Домашний Тест Без Риска",
          p: `У вас есть 60 календарных дней с даты доставки, чтобы оценить Доску Евминова дома. Чтобы оформить возврат, напишите на ${SITE_CONFIG.supportEmail} с номером заявки для получения авторизации и инструкций. Возврат средств обрабатывается в течение 5–7 рабочих дней после проверки возвращённого изделия.`,
        },
        {
          h: "3. Замена при Повреждении в Пути",
          p: `Каждая отправка застрахована на 100%. Если упаковка пришла повреждённой, сфотографируйте коробку и изделие в течение 48 часов и напишите на ${SITE_CONFIG.supportEmail} — мы оперативно организуем бесплатную замену.`,
        },
      ],
    },
    "wellness-disclaimer": {
      title: "Уведомление об Оздоровительном Оборудовании и Безопасности",
      metaDescription:
        "Классификация HTS 9506.91.0030 как оборудования общего оздоровления, документы для HSA/FSA (LMN) и противопоказания к занятиям.",
      updated: "Ноябрь 2026",
      sections: [
        {
          h: "1. Классификация Продукта (Оборудование Общего Оздоровления / Фитнес)",
          p: "Доски Evminov Spine Systems, реализуемые в США, классифицируются как Оборудование для Общего Оздоровления и Укрепления Позвоночника (HTS 9506.91.0030). Заявления на данном сайте не проходили оценку Управления по контролю за продуктами и лекарствами США (FDA). Оборудование предназначено для поддержки общего комфорта спины, осанки, гибкости и спортивного восстановления и не предназначено для диагностики, лечения или профилактики заболеваний.",
        },
        {
          h: "2. Возмещение через HSA / FSA в США",
          p: "Многие клиенты в США используют безналоговые счета HSA/FSA при наличии письма медицинской необходимости (LMN) от врача. Мы предоставляем детализированный инвойс на оздоровительное оборудование сразу после покупки.",
        },
        {
          h: "3. Консультация Врача и Противопоказания",
          p: "Проконсультируйтесь с врачом перед началом упражнений на наклонной доске при острых травмах спины, недавних операциях, остеопорозе, тяжёлой гипертонии, беременности или тревожных неврологических симптомах (слабость стопы, выраженное онемение, нарушения функций тазовых органов). Абсолютные противопоказания включают: острую лихорадку (>37,5 °C / 99,5 °F) или системную инфекцию; свежие несросшиеся переломы позвоночника или острую спинальную травму; активные злокачественные образования позвоночника или костные метастазы; активное внутреннее кровотечение или тяжёлую аневризму аорты/сосудов; недавний инсульт или инфаркт миокарда (в течение последних 6 месяцев); острые симптомы синдрома конского хвоста (требуют экстренной медицинской помощи).",
        },
      ],
    },
  },
};
