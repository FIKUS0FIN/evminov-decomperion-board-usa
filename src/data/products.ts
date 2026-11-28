import { Locale } from "@/i18n/types";
import { toRegionalPrice } from "@/lib/region-config";

export interface ProductGalleryImage {
  url: string;
  label: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  sku: string;
  category: "board" | "accessory";
  boardType: "solid" | "folding-2" | "folding-3" | "wide" | "alder" | "stand";
  name: string;
  localizedNames: Record<Locale, string>;
  badge: string;
  subtitle: string;
  keyFeature: string;
  directPriceUsd: number;
  expressPriceUsd: number;
  wideSurchargeUsd: number;
  standIncluded: boolean;
  standOptional: boolean;
  standAddUsd: number;
  weightLimitLbs: number;
  wideWeightLimitLbs: number;
  heightLimitLabel: string;
  boardWeightLabel: string;
  material: string;
  construction: string;
  mobility: string;
  inclineRange: string;
  foldedDepth: string;
  includes: string[];
  finishes: string[];
  image: string;
  galleryImages: ProductGalleryImage[];
  popular: boolean;
  faqs: Array<{ q: string; a: string }>;
}

export type OfficialAccessoryId =
  | "ladder-stand-4pc"
  | "mounting-hooks"
  | "carry-case-2bag-3pc"
  | "carry-case-1bag-2pc";

export interface OfficialAccessory {
  id: OfficialAccessoryId;
  sku: string;
  priceUsd: number;
  image: string;
  compatibleWith: "all" | "3-piece-travel-board" | "2-piece-folding-board";
  tag: Record<Locale, string>;
  name: Record<Locale, string>;
  spec: Record<Locale, string>;
  desc: Record<Locale, string>;
}

export const OFFICIAL_ACCESSORIES: OfficialAccessory[] = [
  {
    id: "ladder-stand-4pc",
    sku: "EV-STAND-4PC-123",
    priceUsd: toRegionalPrice(275),
    image: "/images/authentic/evminov-board-profile.jpg",
    compatibleWith: "all",
    tag: {
      en: "4-Piece Demountable • Max 123 cm",
      es: "Desmontable 4 Piezas • Máx. 123 cm",
      fr: "Démontable 4 Pièces • Max 123 cm",
      de: "4-teilig Zerlegbar • Max. 123 cm",
      uk: "Розбірна з 4 частин • Макс. 123 см",
      ru: "Разборная из 4 частей • Макс. 123 см",
    },
    name: {
      en: "4-Piece Demountable Ladder Stand (Max 123 cm)",
      es: "Soporte-Escalera Desmontable de 4 Piezas (Máx. 123 cm)",
      fr: "Support-Échelle Démontable 4 Pièces (Max 123 cm)",
      de: "4-teiliger Zerlegbarer Leiterständer (Max. 123 cm)",
      uk: "Стійка-драбинка розбірна з 4 частин (макс. 123 см)",
      ru: "Стойка-лесенка разборная из 4 частей (макс. 123 см)",
    },
    spec: {
      en: "Fits Standard (26 cm) & Reinforced Wide (30 cm) Evminov Boards • Zero wall drilling",
      es: "Compatible con modelos Estándar (26 cm) y Reforzado (30 cm) • Sin perforar paredes",
      fr: "Compatible Standard (26 cm) et Large Renforcé (30 cm) • Zéro perçage mural",
      de: "Für Standard (26 cm) & Verstärkt (30 cm) Evminov Boards • Ohne Wandbohren",
      uk: "Для стандартної (26 см) та посиленої (30 см) моделі Профілактора Євмінова",
      ru: "Для стандартной (26 см) и усиленной (30 см) модели Профилактора Евминова",
    },
    desc: {
      en: "Freestanding 4-part demountable wooden ladder stand (max height 123 cm / 48.4\") engineered for both Standard 26 cm and Reinforced Wide 30 cm Evminov Boards.",
      es: "Soporte-escalera independiente desmontable en 4 partes (altura máx. 123 cm) para tablas Evminov Estándar (26 cm) y Reforzadas (30 cm).",
      fr: "Support-échelle autoportant démontable en 4 pièces (hauteur max 123 cm) compatible avec les planches Evminov Standard (26 cm) et Larges (30 cm).",
      de: "Freistehender 4-teiliger zerlegbarer Leiterständer (max. Höhe 123 cm) für Standard- (26 cm) und verstärkte (30 cm) Evminov Boards.",
      uk: "Розбірна підлогова стійка-драбинка з 4 частин (макс. висота 123 см) для стандартної (26 см) і посиленої (30 см) моделі Профілактора Євмінова без свердління стін.",
      ru: "Разборная напольная стойка-лесенка из 4 частей (макс. высота 123 см) для стандартной (26 см) и усиленной (30 см) модели Профилактора Евминова без сверления стен.",
    },
  },
  {
    id: "mounting-hooks",
    sku: "EV-HOOKS-LADDER",
    priceUsd: toRegionalPrice(45),
    image: "/images/products/board-wall-mount-hardware.jpg",
    compatibleWith: "all",
    tag: {
      en: "Stand & Swedish Wall",
      es: "Soporte y Espaldera",
      fr: "Support & Espalier",
      de: "Ständer & Sprossenwand",
      uk: "Для стійки та шведської стінки",
      ru: "Для стойки и шведской стенки",
    },
    name: {
      en: "Evminov Board Mounting Hooks",
      es: "Ganchos de Montaje para Tabla Evminov",
      fr: "Crochets de Fixation pour Planche Evminov",
      de: "Befestigungshaken für Evminov Board",
      uk: "Гачки для Профілактора Євмінова",
      ru: "Крючки для Профилактора Евминова",
    },
    spec: {
      en: "Heavy-duty steel hooks for Ladder Stand or Swedish Wall rungs",
      es: "Ganchos de acero para fijar en soporte-escalera o espaldera sueca",
      fr: "Crochets acier robustes pour support-échelle ou espalier suédois",
      de: "Robuste Stahlhaken für Leiterständer oder Sprossenwand",
      uk: "Для надійного кріплення на стійку-драбинку або шведську стінку",
      ru: "Для надёжного крепления на стойку-лесенку или на шведскую стенку",
    },
    desc: {
      en: "Precision-formed steel mounting hooks that lock your Evminov Board onto any rung of the 4-Piece Ladder Stand or a home Swedish Wall for fast angle changes.",
      es: "Ganchos metálicos de precisión para fijar la tabla Evminov a cualquier peldaño del soporte-escalera o espaldera sueca y cambiar el ángulo al instante.",
      fr: "Crochets en acier de précision permettant d'accrocher la planche Evminov sur le support-échelle ou un espalier suédois pour changer d'angle rapidement.",
      de: "Präzisions-Stahlhaken zum sicheren Einhängen des Evminov Boards an Leiterständer oder Sprossenwand für schnelle Winkelwechsel.",
      uk: "Посилені сталеві гачки для фіксації Профілактора Євмінова на перекладинах стійки-драбинки або шведської стінки для швидкої зміни кута нахилу.",
      ru: "Усиленные стальные крючки для крепления Профилактора Евминова на перекладины стойки-лесенки или шведской стенки для быстрой смены угла наклона.",
    },
  },
  {
    id: "carry-case-2bag-3pc",
    sku: "EV-CASE-2BAG-3PC",
    priceUsd: toRegionalPrice(75),
    image: "/images/products/board-natural-pine-finish.jpg",
    compatibleWith: "3-piece-travel-board",
    tag: {
      en: "2-Bag Set • For 3-Piece Board",
      es: "Set 2 Bolsas • Para Tabla 3 Piezas",
      fr: "Lot 2 Sacs • Pour Planche 3 Pièces",
      de: "2-Taschen-Set • Für 3-teiliges Board",
      uk: "Комплект 2 сумки • Для 3-секційної",
      ru: "Комплект 2 сумки • Для 3-секционной",
    },
    name: {
      en: "2-Bag Protective Carry Case Set (3-Piece Board)",
      es: "Set de 2 Fundas Protectoras (Tabla de 3 Piezas)",
      fr: "Ensemble 2 Housses de Transport (Planche 3 Pièces)",
      de: "2-teiliges Tragetaschen-Set (3-teiliges Board)",
      uk: "Комплект чохлів із двох сумок для Профілактора Євмінова",
      ru: "Комплект чехлов из двух сумок для Профилактора Евминова",
    },
    spec: {
      en: "2 fitted heavy-duty carry bags for the 3-Piece (230–245 cm) board & carriage",
      es: "2 bolsas reforzadas para las secciones de la tabla de 3 piezas y carro",
      fr: "2 sacs robustes adaptés aux 3 sections (230–245 cm) et au chariot",
      de: "2 passgenaue Taschen für 3-teilige Paneele (230–245 cm) & Schlitten",
      uk: "2 міцні сумки для 3-секційного Профілактора (230–245 см) та каретки",
      ru: "2 прочные сумки для 3-секционного Профилактора (230–245 см) и каретки",
    },
    desc: {
      en: "Durable 2-bag protective case set specifically tailored for storing and transporting the 3-Piece Folding Evminov Board (230–245 cm) plus sliding carriage.",
      es: "Set resistente de 2 bolsas diseñado a medida para guardar y transportar la tabla Evminov plegable de 3 piezas (230–245 cm) y su carro.",
      fr: "Ensemble de 2 housses résistantes sur mesure pour ranger et transporter la planche Evminov 3 pièces (230–245 cm) et son chariot.",
      de: "Strapazierfähiges 2-Taschen-Set passgenau für Lagerung und Transport des 3-teiligen Evminov Boards (230–245 cm) inklusive Schlitten.",
      uk: "Міцний комплект із двох захисних сумок, пошитий спеціально для зручного зберігання та транспортування 3-секційного Профілактора Євмінова (230–245 см) і каретки.",
      ru: "Прочный комплект из двух защитных сумок, сшитый специально для удобного хранения и перевозки 3-секционного Профилактора Евминова (230–245 см) и каретки.",
    },
  },
  {
    id: "carry-case-1bag-2pc",
    sku: "EV-CASE-1BAG-2PC",
    priceUsd: toRegionalPrice(55),
    image: "/images/products/board-natural-pine-finish.jpg",
    compatibleWith: "2-piece-folding-board",
    tag: {
      en: "1 Bag • For 2-Piece Board",
      es: "1 Bolsa • Para Tabla 2 Piezas",
      fr: "1 Sac • Pour Planche 2 Pièces",
      de: "1 Tasche • Für 2-teiliges Board",
      uk: "1 сумка • Для 2-секційної дошки",
      ru: "1 сумка • Для 2-секционной доски",
    },
    name: {
      en: "Single Carry Case Bag (2-Piece Spine Toothbrush Board)",
      es: "Funda Individual de Transporte (Tabla de 2 Piezas)",
      fr: "Housse de Transport Individuelle (Planche 2 Pièces)",
      de: "Einzel-Tragetasche (2-teiliges Board)",
      uk: "Чохол для 2-секційної дошки «Зубна щітка» (одна сумка)",
      ru: "Чехол для 2-секционной доски «Зубная щётка» (одна сумка)",
    },
    spec: {
      en: "1 fitted protective bag tailored for the 2-Piece Evminov Board",
      es: "1 bolsa protectora a medida para la tabla plegable de 2 piezas",
      fr: "1 sac de protection ajusté pour la planche pliable 2 pièces",
      de: "1 passgenaue Schutztasche für das 2-teilige Evminov Board",
      uk: "1 міцна сумка-чохол для компактної 2-секційної дошки",
      ru: "1 прочная сумка-чехол для компактной 2-секционной доски",
    },
    desc: {
      en: "Dedicated single protective carry bag with reinforced handles designed specifically for the 2-Piece Folding Evminov Board (\"Spine Toothbrush\" compact model).",
      es: "Bolsa protectora individual con asas reforzadas diseñada específicamente para el modelo compacto plegable de 2 piezas.",
      fr: "Housse de transport individuelle avec poignées renforcées conçue spécialement pour la planche Evminov pliable en 2 pièces.",
      de: "Passgenaue Einzel-Schutztasche mit verstärkten Griffen speziell für das kompakte 2-teilige Evminov Board.",
      uk: "Окрема захисна сумка-чохол із посиленими ручками, розроблена спеціально для 2-секційної моделі «Зубна щітка для хребта».",
      ru: "Отдельная защитная сумка-чехол с усиленными ручками, разработанная специально для 2-секционной модели «Зубная щётка для позвоночника».",
    },
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "evminov-folding-3part",
    slug: "3-piece-travel-board",
    sku: "EV-FOLD-3P-245",
    category: "board",
    boardType: "folding-3",
    name: "3-Piece Folding Evminov Board (230–245 cm • US & Canada Flagship)",
    localizedNames: {
      en: "3-Piece Folding Evminov Board (230–245 cm)",
      es: "Tabla Evminov Plegable de 3 Piezas (230–245 cm)",
      fr: "Planche Evminov Pliable 3 Pièces (230–245 cm)",
      de: "3-teiliges Faltbares Evminov Board (230–245 cm)",
      uk: "Профілактор Євмінова з 3-х частин (230–245 см)",
      ru: "Профилактор Евминова из 3-х частей (230–245 см)",
    },
    badge: "US & Canada Flagship • 3-Piece (230–245 cm) • 26 cm / 30 cm",
    subtitle:
      "Full-length 230–245 cm (90.5\"–96.5\") Evminov Board engineered exclusively in 3 demountable sections for US & Canada international courier delivery (~2 weeks). Choose Standard 26 cm (up to 100 kg / 220 lbs) or Reinforced Wide 30 cm (>100 kg / up to 330 lbs) in Light or Dark wood finish.",
    keyFeature:
      "3 demountable sections (230–245 cm total) with precision steel couplers. Available in Standard 26 cm or Reinforced Wide 30 cm (>100 kg), Light or Dark finish. 1-Year Warranty.",
    directPriceUsd: toRegionalPrice(495),
    expressPriceUsd: toRegionalPrice(635),
    wideSurchargeUsd: toRegionalPrice(25),
    standIncluded: false,
    standOptional: true,
    standAddUsd: toRegionalPrice(275),
    weightLimitLbs: 220,
    wideWeightLimitLbs: 330,
    heightLimitLabel: "Board 230–245 cm (Users up to 6'4\" / Wide 6'9\")",
    boardWeightLabel: "Width: 26 cm Standard / 30 cm Reinforced",
    material: "Resonant Light (Natural Warm Amber Alder) or Dark (Dark Walnut Pine) with dual steel couplers",
    construction: "3-Piece Demountable Panel (230–245 cm) • 26 cm or 30 cm Width",
    mobility: "International Courier Ready (~2 weeks US & Canada) • Optional 2-Bag Case & 4-Pc Stand",
    inclineRange: "8° to 90°",
    foldedDepth: "3 demountable sections (under 120 cm packed for international parcel transit)",
    includes: [
      "Width choice: Standard 26 cm (up to 100 kg / 220 lbs) or Reinforced Wide 30 cm (+$25, for >100 kg / up to 330 lbs)",
      "Finish choice: Light (Natural Warm Amber Alder) or Dark (Dark Walnut Pine)",
      "Patented Glisson Cervical Loop, wall mounting hardware, illustrated manual & official product passport",
      "Compatible with 4-Piece Ladder Stand (max 123 cm), Mounting Hooks, and 2-Bag Carry Case Set",
      "~2 weeks delivery via international carriers • 60-Day Home Trial & 1-Year Warranty",
    ],
    finishes: ["Natural Warm Amber Alder", "Dark Walnut Pine"],
    image: "/images/authentic/hero-full-device-traction.jpg",
    galleryImages: [
      { url: "/images/authentic/hero-full-device-traction.jpg", label: "3-Piece Evminov Board (230–245 cm)" },
      { url: "/images/products/board-perspective-view.jpg", label: "Light & Dark Wood Finishes" },
      { url: "/images/products/board-natural-pine-finish.jpg", label: "Optional 2-Bag Protective Case Set" },
      { url: "/images/products/board-wall-mount-hardware.jpg", label: "Optional Ladder/Wall Mounting Hooks" },
      { url: "/images/authentic/evminov-steel-carriage-pin.jpg", label: "Precision Alloy Locking Pin" },
      { url: "/images/products/glisson-loop-studio.jpg", label: "Free Glisson Cervical Loop" },
    ],
    popular: true,
    faqs: [
      {
        q: "Why does the full-length Evminov Board ship to the US & Canada in 3 pieces?",
        a: "International parcel couriers enforce a 120 cm maximum package length. Our 3-Piece Demountable Evminov Board delivers the full 230–245 cm (90.5\"–96.5\") clinical training length while packing safely under 120 cm for ~2-week courier delivery across the US and Canada.",
      },
      {
        q: "Should I choose Standard 26 cm or Reinforced Wide 30 cm?",
        a: "Choose Standard 26 cm if you weigh up to 100 kg (220 lbs). Choose Reinforced Wide 30 cm (+$25 USD) if you weigh over 100 kg (rated up to 150 kg / 330 lbs) or prefer extra shoulder width. Both widths are available in Light and Dark finishes and fit our 4-Piece Demountable Ladder Stand.",
      },
    ],
  },
  {
    id: "evminov-folding-2part",
    slug: "2-piece-folding-board",
    sku: "EV-FOLD-2P-ST",
    category: "board",
    boardType: "folding-2",
    name: "2-Piece Folding Evminov Board (\"Spine Toothbrush\" • 2 Sections Only)",
    localizedNames: {
      en: "2-Piece Folding Evminov Board (\"Spine Toothbrush\")",
      es: "Tabla Evminov Plegable de 2 Piezas (\"Cepillo Espinal\")",
      fr: "Planche Evminov Pliable 2 Pièces (\"Brosse Vertébrale\")",
      de: "2-teiliges Evminov Board (\"Wirbelsäulen-Zahnbürste\")",
      uk: "Профілактор «Зубна щітка для хребта» (з 2-х частин)",
      ru: "«Зубная щётка для позвоночника» (из 2-х частей)",
    },
    badge: "Compact 2-Piece Only • 26 cm Standard / 30 cm Reinforced",
    subtitle:
      "Compact 2-section Evminov model (available exclusively in 2 demountable sections) for daily home spine hygiene and fast closet storage. Choose Standard 26 cm (up to 100 kg / 220 lbs) or Reinforced Wide 30 cm (>100 kg / up to 330 lbs) in Light or Dark finish.",
    keyFeature:
      "Built exclusively in 2 precision demountable sections. Available in Standard 26 cm or Reinforced Wide 30 cm (>100 kg), Light or Dark finish. Optional Single Carry Bag & 4-Piece Ladder Stand.",
    directPriceUsd: toRegionalPrice(475),
    expressPriceUsd: toRegionalPrice(615),
    wideSurchargeUsd: toRegionalPrice(25),
    standIncluded: false,
    standOptional: true,
    standAddUsd: toRegionalPrice(275),
    weightLimitLbs: 220,
    wideWeightLimitLbs: 330,
    heightLimitLabel: "Compact 2-Piece (Users up to 6'4\" / Wide 6'9\")",
    boardWeightLabel: "Width: 26 cm Standard / 30 cm Reinforced",
    material: "Resonant Light (Natural Warm Amber Alder) or Dark (Dark Walnut Pine) with steel coupler",
    construction: "2-Piece Demountable Panel (2 Sections Only) • 26 cm or 30 cm Width",
    mobility: "Compact Home Storage • International Courier (~2 weeks US & Canada)",
    inclineRange: "8° to 90°",
    foldedDepth: "2 compact demountable halves (fits closets, under bed, or single carry bag)",
    includes: [
      "Width choice: Standard 26 cm (up to 100 kg / 220 lbs) or Reinforced Wide 30 cm (+$25, for >100 kg / up to 330 lbs)",
      "Finish choice: Light (Natural Warm Amber Alder) or Dark (Dark Walnut Pine)",
      "Patented Glisson Cervical Loop, wall mounting hardware, illustrated manual & official product passport",
      "Compatible with Single Carry Case Bag, 4-Piece Ladder Stand (max 123 cm), and Mounting Hooks",
      "~2 weeks delivery via international carriers • 60-Day Home Trial & 1-Year Warranty",
    ],
    finishes: ["Natural Warm Amber Alder", "Dark Walnut Pine"],
    image: "/images/authentic/evminov-board-profile.jpg",
    galleryImages: [
      { url: "/images/authentic/evminov-board-profile.jpg", label: "2-Piece Folding Evminov Board" },
      { url: "/images/products/board-perspective-view.jpg", label: "Light & Dark Wood Finishes" },
      { url: "/images/products/board-studio-incline.jpg", label: "Dark Walnut Pine Finish" },
      { url: "/images/authentic/hero-carriage-traction-detail.jpg", label: "Cushioned Multi-Position Grips" },
      { url: "/images/products/board-wall-mount-hardware.jpg", label: "Optional Stand/Wall Mounting Hooks" },
      { url: "/images/products/glisson-loop-studio.jpg", label: "Free Glisson Cervical Loop" },
    ],
    popular: false,
    faqs: [
      {
        q: "What is the 2-Piece \"Spine Toothbrush\" Evminov model?",
        a: "It is Evminov's compact daily spine-hygiene model built exclusively in 2 demountable sections. It offers the same choice of Standard 26 cm (up to 100 kg) or Reinforced Wide 30 cm (>100 kg) width in Light or Dark wood finish, with a dedicated optional Single Carry Bag.",
      },
      {
        q: "How long does shipping take to the US and Canada?",
        a: "All demountable 2-piece and 3-piece Evminov Boards ship via tracked international couriers and typically arrive in approximately 2 weeks across the United States and Canada.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
