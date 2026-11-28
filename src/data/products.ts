import { Locale } from "@/i18n/types";

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

export const PRODUCTS: ProductItem[] = [
  {
    id: "evminov-folding-2part",
    slug: "2-piece-folding-board",
    sku: "EV-FOLD-2P",
    category: "board",
    boardType: "folding-2",
    name: "2-Piece Folding Evminov Board (Home Storage • With Support Stand)",
    localizedNames: {
      en: "2-Piece Folding Evminov Board (Home Storage)",
      es: "Tabla Evminov Plegable de 2 Piezas (Con Soporte)",
      fr: "Planche Evminov Pliable 2 Pièces (Avec Support)",
      de: "2-teiliges Faltbares Evminov Board (Mit Ständer)",
      uk: "Складаний Профілактор Євмінова з 2-х частин (Зі стійкою)",
      ru: "Складная Доска Евминова из 2 частей (Со стойкой)",
    },
    badge: "Flagship Home • Stand Included • Standard & Wide",
    subtitle:
      "Separates into two ~45\" halves in 30 seconds and arrives complete with a sturdy support stand. Available in Standard (220 lbs) or Wide Heavy-Duty (330 lbs) in Natural Warm Amber Alder or Dark Walnut Pine.",
    keyFeature:
      "Includes dedicated support stand + free Glisson Cervical Loop, zero-play steel interlocking joint, and choice of Standard or Wide Heavy-Duty deck.",
    directPriceUsd: 475,
    expressPriceUsd: 615,
    wideSurchargeUsd: 25,
    standIncluded: true,
    standOptional: false,
    standAddUsd: 0,
    weightLimitLbs: 220,
    wideWeightLimitLbs: 330,
    heightLimitLabel: "Up to 6'4\" (Wide: 6'9\")",
    boardWeightLabel: "25 lbs (Wide: 30 lbs)",
    material: "Resonant Natural Warm Amber Alder or Dark Walnut Pine with steel reinforcement",
    construction: "2-Piece Precision Demountable Beam + Support Stand",
    mobility: "Home Storage (~45\" halves) — Support Stand Included",
    inclineRange: "8° to 90°",
    foldedDepth: "Stores flat under bed or in closet (~45\" half length)",
    includes: [
      "Sturdy Support Stand included in the box for reliable home setup",
      "Patented Glisson Cervical Loop for gentle neck traction (Included Free)",
      "Available in Standard (220 lbs) or Wide Heavy-Duty (330 lbs) deck",
      "2 Authentic Finishes: Natural Warm Amber Alder or Dark Walnut Pine",
      "60-Day Home Trial & 10-Year Structural Frame Warranty",
    ],
    finishes: ["Natural Warm Amber Alder", "Dark Walnut Pine"],
    image: "/images/accessories/standard-pine-board-assembly.png",
    galleryImages: [
      { url: "/images/accessories/standard-pine-board-assembly.png", label: "2-Piece Folding Assembly" },
      { url: "/images/authentic/evminov-board-profile.jpg", label: "Full Inclined Profile with Stand" },
      { url: "/images/products/board-perspective-view.jpg", label: "Profile Perspective" },
      { url: "/images/products/board-carriage-locking-pin.jpg", label: "Steel Locking Pin" },
      { url: "/images/products/board-alder-warm-grain.jpg", label: "Natural Warm Amber Alder" },
      { url: "/images/products/board-dark-walnut-finish.jpg", label: "Dark Walnut Pine" },
    ],
    popular: true,
    faqs: [
      {
        q: "Does the 2-Piece Folding board include the support stand?",
        a: "Yes! Every 2-Piece Folding Evminov Board ships complete with its dedicated support stand, sliding carriage, and patented Glisson Cervical Loop so you can begin sessions immediately.",
      },
      {
        q: "When should I choose the Wide Heavy-Duty version?",
        a: "Choose Wide Heavy-Duty (+$25) if you weigh over 210 lbs (rated up to 330 lbs), are taller than 6'4\" (up to 6'9\"), or prefer extra shoulder width for athletic recovery.",
      },
    ],
  },
  {
    id: "evminov-folding-3part",
    slug: "3-piece-travel-board",
    sku: "EV-FOLD-3P-TRV",
    category: "board",
    boardType: "folding-3",
    name: "3-Piece Folding Evminov Board (Travel & Trunk)",
    localizedNames: {
      en: "3-Piece Folding Evminov Board (Travel & Trunk)",
      es: "Tabla Evminov Plegable de 3 Piezas (Viaje)",
      fr: "Planche Evminov Pliable 3 Pièces (Voyage)",
      de: "3-teiliges Faltbares Evminov Board (Reise & Kofferraum)",
      uk: "Складаний Профілактор з 3-х частин (Для авто та подорожей)",
      ru: "Складная Доска Евминова из 3 частей (Для авто и путешествий)",
    },
    badge: "Travel & Trunk • With or Without Stand • Standard & Wide",
    subtitle:
      "Ultra-compact 3-section design (~31\" segments) with travel bag. Order WITH the support stand or WITHOUT stand (note: without a stand, you must secure the board to a sturdy support before sessions). Standard or Wide Heavy-Duty.",
    keyFeature:
      "Packs into any car trunk or checked bag in under 60 seconds. Available with or without support stand, in Standard (220 lbs) or Wide Heavy-Duty (330 lbs), in Alder or Dark Walnut Pine.",
    directPriceUsd: 495,
    expressPriceUsd: 635,
    wideSurchargeUsd: 25,
    standIncluded: false,
    standOptional: true,
    standAddUsd: 50,
    weightLimitLbs: 220,
    wideWeightLimitLbs: 330,
    heightLimitLabel: "Up to 6'4\" (Wide: 6'9\")",
    boardWeightLabel: "26 lbs (Wide: 31 lbs)",
    material: "Resonant Natural Warm Amber Alder or Dark Walnut Pine with dual steel couplers",
    construction: "3-Piece Ultra-Compact Demountable Beam",
    mobility: "Fits Car Trunks & Travel Bags (~31\" segments) — Stand Optional",
    inclineRange: "8° to 90°",
    foldedDepth: "Ultra-compact ~31\" segment length",
    includes: [
      "Choose With Support Stand (+$50) or Without Stand (requires a sturdy support before sessions)",
      "Patented Glisson Cervical Loop for neck traction (Included Free)",
      "Available in Standard (220 lbs) or Wide Heavy-Duty (330 lbs) deck",
      "2 Authentic Finishes: Natural Warm Amber Alder or Dark Walnut Pine",
      "Padded zippered travel carry bag, 60-Day Trial & 10-Year Frame Warranty",
    ],
    finishes: ["Natural Warm Amber Alder", "Dark Walnut Pine"],
    image: "/images/accessories/folding-board-3-sections.png",
    galleryImages: [
      { url: "/images/accessories/folding-board-3-sections.png", label: "3-Piece Compact Fold" },
      { url: "/images/products/board-travel-bag-carrying.jpg", label: "Padded Travel Carry Case" },
      { url: "/images/products/board-carriage-locking-pin.jpg", label: "Precision Coupler Pins" },
      { url: "/images/products/board-alder-warm-grain.jpg", label: "Natural Warm Amber Alder" },
      { url: "/images/products/board-dark-walnut-finish.jpg", label: "Dark Walnut Pine" },
    ],
    popular: true,
    faqs: [
      {
        q: "What is the difference between 3-Piece With Stand vs. Without Stand?",
        a: "With the support stand (+$50), the board sets up independently anywhere. If you choose Without Stand for maximum travel portability, you must anchor or rest the board against a sturdy, reliable support before beginning exercises.",
      },
      {
        q: "Can I order the 3-Piece Travel board in Wide Heavy-Duty?",
        a: "Yes! Both the 2-Piece and 3-Piece models are available in Standard (up to 220 lbs) and Wide Heavy-Duty (up to 330 lbs) in Natural Warm Amber Alder or Dark Walnut Pine.",
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
