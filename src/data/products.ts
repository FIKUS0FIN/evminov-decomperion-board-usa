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
  weightLimitLbs: number;
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
    id: "evminov-standard",
    slug: "standard-pine-board",
    sku: "EV-STD-PINE-1P",
    category: "board",
    boardType: "solid",
    name: "Standard Solid Evminov Board (1-Piece)",
    localizedNames: {
      en: "Standard Solid Evminov Board (1-Piece)",
      es: "Tabla Evminov Estándar Sólida (1 Pieza)",
      fr: "Planche Evminov Standard Monobloc (1 Pièce)",
      uk: "Стандартний цільний Профілактор Євмінова",
      ru: "Стандартная цельная Доска Евминова (1 секция)",
    },
    badge: "Flagship Original • 1-Piece Solid",
    subtitle:
      "Classic one-piece non-folding resonant Carpathian pine beam delivering continuous spring flexion for daily home and studio spine decompression.",
    keyFeature:
      "Monolithic multi-layer Carpathian pine core with adjustable alloy carriage, free Glisson neck loop, and 16\" US wood-stud wall bracket.",
    directPriceUsd: 450,
    expressPriceUsd: 595,
    weightLimitLbs: 210,
    heightLimitLabel: "Up to 6'4\" (193 cm)",
    boardWeightLabel: "23–25 lbs (10.5–11.3 kg)",
    material: "Multi-layer resonant Carpathian Pine (Light or Dark)",
    construction: "1-Piece Solid Monolithic Beam",
    mobility: "Permanent Home & Studio Wall Mount (folds to 2.4\" flat)",
    inclineRange: "8° to 90° (plus gentle -25° reverse traction)",
    foldedDepth: "2.4\" slim profile against the wall",
    includes: [
      "Patented Glisson Loop for gentle cervical spine traction (Included Free)",
      "Adjustable aircraft-grade alloy carriage with quick-lock safety pin",
      "Heavy-duty 16\" US wood stud wall mounting bracket & 400+ lb rated anchors",
      "Digital 30-Day Spine Conditioning Video Program & illustrated manual",
      "60-Day Home Trial & 10-Year Structural Frame Warranty",
    ],
    finishes: ["Light Natural Pine", "Dark Walnut Pine"],
    image: "/images/authentic/evminov-board-profile.jpg",
    galleryImages: [
      { url: "/images/authentic/evminov-board-profile.jpg", label: "Full Solid Pine Board" },
      { url: "/images/authentic/hero-full-device-traction.jpg", label: "Inclined Decompression Session" },
      { url: "/images/accessories/standard-pine-board-assembly.png", label: "Board Components Overview" },
      { url: "/images/authentic/evminov-board-head-mount.jpg", label: "Carriage & Wall Anchor Detail" },
      { url: "/images/products/board-mounting-bracket.jpg", label: "16\" Stud Wall Mounting Bracket" },
      { url: "/images/products/board-natural-pine-finish.jpg", label: "Light Natural Pine Finish" },
      { url: "/images/products/board-dark-walnut-finish.jpg", label: "Dark Walnut Finish" },
    ],
    popular: true,
    faqs: [
      {
        q: "How much wall space does the Standard Solid board require?",
        a: "The board is approximately 8 ft tall and 10.5 in wide. When folded upright against the wall between sessions, it protrudes only 2.4 inches — fitting easily behind a bedroom or home-office door.",
      },
      {
        q: "Does the Standard Solid board mount to US drywall walls?",
        a: "Yes. Every US shipment includes a bracket engineered for standard 16-inch wood studs behind drywall, plus masonry anchors for concrete or brick walls. Renters can pair it with the Demountable Free-Standing Stand for zero wall drilling.",
      },
    ],
  },
  {
    id: "evminov-folding-2part",
    slug: "2-piece-folding-board",
    sku: "EV-FOLD-2P",
    category: "board",
    boardType: "folding-2",
    name: "2-Piece Folding Evminov Board (Home Storage)",
    localizedNames: {
      en: "2-Piece Folding Evminov Board (Home Storage)",
      es: "Tabla Evminov Plegable de 2 Piezas",
      fr: "Planche Evminov Pliable 2 Pièces",
      uk: "Складаний Профілактор Євмінова з 2-х частин",
      ru: "Складная Доска Евминова из 2 частей",
    },
    badge: "Space Saver • 2-Piece Folding",
    subtitle:
      "Separates into two ~45\" halves in 30 seconds via precision steel couplers so you can store it flat under a bed or inside any closet.",
    keyFeature:
      "Zero structural play interlocking steel joint preserves authentic Carpathian pine resonance while maximizing apartment convenience.",
    directPriceUsd: 475,
    expressPriceUsd: 615,
    weightLimitLbs: 220,
    heightLimitLabel: "Up to 6'4\" (193 cm)",
    boardWeightLabel: "25 lbs (11.3 kg)",
    material: "Resonant Carpathian Pine with steel interlocking reinforcement",
    construction: "2-Piece Precision Demountable Beam",
    mobility: "Under-Bed, Closet & SUV Storage (~45\" segments)",
    inclineRange: "8° to 90°",
    foldedDepth: "Stores flat under bed or in closet (~45\" half length)",
    includes: [
      "Patented Glisson Loop for cervical traction (Included Free)",
      "Precision central steel interlocking coupler with zero play",
      "Adjustable aircraft-grade alloy mobile carriage",
      "16\" US wood-stud wall bracket & quick-release anchor cable",
      "60-Day Home Trial & 10-Year Structural Frame Warranty",
    ],
    finishes: ["Light Natural Pine", "Dark Walnut Pine"],
    image: "/images/accessories/standard-pine-board-assembly.png",
    galleryImages: [
      { url: "/images/accessories/standard-pine-board-assembly.png", label: "2-Piece Demountable Assembly" },
      { url: "/images/products/board-perspective-view.jpg", label: "Profile Perspective" },
      { url: "/images/products/board-carriage-locking-pin.jpg", label: "Steel Locking Pin" },
      { url: "/images/products/board-natural-pine-finish.jpg", label: "Light Pine Finish" },
      { url: "/images/products/board-dark-walnut-finish.jpg", label: "Dark Walnut Finish" },
    ],
    popular: false,
    faqs: [
      {
        q: "Does the 2-Piece Folding board feel as rigid as the 1-Piece model?",
        a: "Yes. The central steel sleeve locks both halves tightly with zero wobble, supporting up to 220 lbs while maintaining smooth natural pine flex.",
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
      uk: "Складаний Профілактор з 3-х частин (Для авто та подорожей)",
      ru: "Складная Доска Евминова из 3 частей (Для авто и путешествий)",
    },
    badge: "Car Trunk & Airline Ready • 3-Piece Travel",
    subtitle:
      "Ultra-compact 3-section design (~31\" segments) with padded travel bag and over-the-door anchor strap for frequent travelers, vacation homes, and mobile PTs.",
    keyFeature:
      "Packs into any sedan trunk, SUV cargo bay, or checked travel case in under 60 seconds without tools.",
    directPriceUsd: 495,
    expressPriceUsd: 635,
    weightLimitLbs: 220,
    heightLimitLabel: "Up to 6'4\" (193 cm)",
    boardWeightLabel: "26 lbs (11.8 kg)",
    material: "Resonant Carpathian Pine with dual aircraft alloy couplers",
    construction: "3-Piece Ultra-Compact Demountable Beam",
    mobility: "Fits Car Trunks, Closets & Checked Travel Bags (~31\" segments)",
    inclineRange: "8° to 90°",
    foldedDepth: "Ultra-compact ~31\" segment length",
    includes: [
      "Patented Glisson Loop for cervical traction (Included Free)",
      "Dual precision steel interlocking joints with tool-free assembly",
      "Over-the-door travel strap plus standard 16\" US wall mount kit",
      "Padded zippered travel carry bag",
      "60-Day Home Trial & 10-Year Structural Frame Warranty",
    ],
    finishes: ["Light Natural Pine", "Dark Walnut Pine"],
    image: "/images/accessories/folding-board-3-sections.png",
    galleryImages: [
      { url: "/images/accessories/folding-board-3-sections.png", label: "3-Piece Compact Fold" },
      { url: "/images/products/board-travel-bag-carrying.jpg", label: "Padded Travel Carry Case" },
      { url: "/images/products/board-door-mount-setup.jpg", label: "Over-the-Door Travel Anchor" },
      { url: "/images/products/board-carriage-locking-pin.jpg", label: "Precision Coupler Pins" },
      { url: "/images/products/board-natural-pine-finish.jpg", label: "Light Pine" },
    ],
    popular: true,
    faqs: [
      {
        q: "Can I use the 3-Piece board in hotel rooms or rentals without drilling?",
        a: "Yes! The 3-Piece Travel kit includes an over-the-door anchor strap for quick portable setup, and it is also 100% compatible with our Free-Standing Ladder Stand.",
      },
    ],
  },
  {
    id: "evminov-wide",
    slug: "wide-heavy-duty-board",
    sku: "EV-WIDE-330",
    category: "board",
    boardType: "wide",
    name: "Wide Panel Evminov Board (Heavy-Duty 330 lbs)",
    localizedNames: {
      en: "Wide Panel Evminov Board (Heavy-Duty 330 lbs)",
      es: "Tabla Evminov Ancha Reforzada (Hasta 330 lbs)",
      fr: "Planche Evminov Large Renforcée (Jusqu'à 150 kg)",
      uk: "Широкий Профілактор Євмінова (Посилений до 150 кг)",
      ru: "Широкая Доска Евминова (Усиленная до 150 кг)",
    },
    badge: "Heavy-Duty • Athletes & Broad Build (Up to 330 lbs)",
    subtitle:
      "30% wider multi-layer pine platform and reinforced dual-pin carriage rated up to 330 lbs and 6'9\" — built for strength athletes, broad shoulders, and tall users.",
    keyFeature:
      "Maximum shoulder comfort and axial rigidity for powerlifters, CrossFit athletes, and individuals over 210 lbs or 6'4\".",
    directPriceUsd: 500,
    expressPriceUsd: 635,
    weightLimitLbs: 330,
    heightLimitLabel: "Up to 6'9\" (206 cm)",
    boardWeightLabel: "30 lbs (13.6 kg)",
    material: "Reinforced high-tensile multi-layer Carpathian Pine core",
    construction: "Extra-Wide Heavy-Duty Panel",
    mobility: "Heavy-Duty 16\" Stud Wall Mount or Free-Standing Stand",
    inclineRange: "8° to 90°",
    foldedDepth: "2.8\" heavy-duty flat wall profile",
    includes: [
      "Reinforced Glisson Loop with wide ergonomic padding (Included Free)",
      "Extra-wide heavy-duty alloy carriage with dual lock pins",
      "High-load 16\" stud mounting kit & masonry anchors",
      "Athletic Post-Deadlift & Squat Spine Recovery Guide",
      "60-Day Home Trial & 10-Year Structural Frame Warranty",
    ],
    finishes: ["Light Natural Pine", "Dark Walnut Pine", "Gym Stealth Black"],
    image: "/images/products/board-studio-incline.jpg",
    galleryImages: [
      { url: "/images/products/board-studio-incline.jpg", label: "Wide Heavy-Duty Board" },
      { url: "/images/accessories/wide-board-heavy-duty.png", label: "Wide Deck Specification" },
      { url: "/images/products/board-carriage-locking-pin.jpg", label: "Dual Safety Lock Pin" },
      { url: "/images/products/board-studio-woodgrain.jpg", label: "Reinforced Core Grain" },
      { url: "/images/products/board-wall-mount-hardware.jpg", label: "Heavy-Duty Mounting Kit" },
    ],
    popular: false,
    faqs: [
      {
        q: "When should I choose the Wide Heavy-Duty model over the Standard board?",
        a: "Choose the Wide model if you weigh over 210 lbs (up to 330 lbs), are taller than 6'4\" (up to 6'9\"), have broad athletic shoulders, or train heavily with barbells.",
      },
    ],
  },
  {
    id: "evminov-alder",
    slug: "select-alder-board",
    sku: "EV-ALDER-LTD",
    category: "board",
    boardType: "alder",
    name: "Select Alder Wood Evminov Board (Lightweight Edition)",
    localizedNames: {
      en: "Select Alder Wood Evminov Board (Lightweight Edition)",
      es: "Tabla Evminov en Madera de Aliso Selecto (Ligera)",
      fr: "Planche Evminov en Aulne Sélectionné (Légère)",
      uk: "Профілактор Євмінова з відбірної Вільхи (Полегшений)",
      ru: "Доска Евминова из отборной Ольхи (Облегчённая)",
    },
    badge: "Limited Edition • ~15% Lighter Alder Timber",
    subtitle:
      "Handcrafted from cured Ukrainian Alder — roughly 15% lighter than pine for effortless angle changes, with a silky warm-amber wood grain.",
    keyFeature:
      "Enhanced gentle spring compliance and easy 19–21 lb handling — favored by seniors, delicate cervical routines, and refined home interiors.",
    directPriceUsd: 525,
    expressPriceUsd: 665,
    weightLimitLbs: 220,
    heightLimitLabel: "Up to 6'4\" (193 cm)",
    boardWeightLabel: "19–21 lbs (~15% lighter than pine)",
    material: "Cured Select Ukrainian Alder (Warm Amber / Cognac)",
    construction: "Artisan Solid Cured Alder Beam",
    mobility: "Effortless Lightweight Angle Adjustment",
    inclineRange: "8° to 90° (plus gentle -25° reverse traction)",
    foldedDepth: "2.4\" slim wall profile",
    includes: [
      "Patented Glisson Loop with warm-amber trim (Included Free)",
      "Polished smooth-glide alloy carriage mechanism",
      "16\" stud mounting kit with decorative hardware caps",
      "Digital 30-Day Conditioning Video Program & onboarding checklist",
      "60-Day Home Trial & 10-Year Craftsmanship Warranty",
    ],
    finishes: ["Natural Warm Amber Alder", "Royal Cognac Alder"],
    image: "/images/products/board-studio-woodgrain.jpg",
    galleryImages: [
      { url: "/images/products/board-studio-woodgrain.jpg", label: "Silky Alder Grain" },
      { url: "/images/products/board-dark-walnut-finish.jpg", label: "Warm Cognac Finish" },
      { url: "/images/authentic/evminov-board-profile.jpg", label: "Artisan Profile" },
      { url: "/images/authentic/hero-reverse-decompression.jpg", label: "Smooth Lightweight Handling" },
      { url: "/images/authentic/evminov-pine-wood-detail.jpg", label: "Timber Craftsmanship" },
    ],
    popular: false,
    faqs: [
      {
        q: "How does Alder wood differ from Carpathian Pine?",
        a: "Alder is approximately 15% lighter (19–21 lbs vs. 23–25 lbs), has a fine uniform warm-amber grain, and delivers slightly softer spring compliance — ideal for users under 220 lbs who move or adjust the board frequently.",
      },
    ],
  },
  {
    id: "evminov-stand",
    slug: "free-standing-stand",
    sku: "EV-STAND-RENT",
    category: "accessory",
    boardType: "stand",
    name: "Demountable Free-Standing Ladder Stand (No Drilling)",
    localizedNames: {
      en: "Demountable Free-Standing Ladder Stand (No Drilling)",
      es: "Soporte Independiente Sin Taladrar (Para Apartamentos)",
      fr: "Support Autoportant Démontable (Sans Perçage)",
      uk: "Розбірна Підлогова Стійка-Драбина (Без Свердління)",
      ru: "Разборная Напольная Стойка-Лестница (Без Сверления)",
    },
    badge: "For Renters & Apartments • Zero Wall Holes",
    subtitle:
      "Sturdy freestanding beechwood and powder-coated steel ladder stand enabling full 8°–90° angle adjustments without drilling a single hole in drywall.",
    keyFeature:
      "Tool-free 3-minute disassembly, non-scratch rubberized feet, rated for up to 350 lbs — compatible with every Evminov board.",
    directPriceUsd: 275,
    expressPriceUsd: 345,
    weightLimitLbs: 350,
    heightLimitLabel: "Compatible with all Evminov boards",
    boardWeightLabel: "24 lbs (10.9 kg)",
    material: "Kiln-dried Beech wood & powder-coated steel frame",
    construction: "Freestanding Demountable Ladder Stand",
    mobility: "Tool-Free 3-Minute Setup & Disassembly",
    inclineRange: "Full 8° to 90° angle rungs",
    foldedDepth: "Under 3.5 sq ft floor footprint",
    includes: [
      "Tool-free locking pins & safety hardware",
      "Non-scratch rubberized floor protection pads",
      "Illustrated assembly guide & QR video instructions",
    ],
    finishes: ["Natural Beech", "Matching Pine Tone"],
    image: "/images/accessories/renter-stand-setup.jpg",
    galleryImages: [
      { url: "/images/accessories/renter-stand-setup.jpg", label: "Freestanding Apartment Setup" },
      { url: "/images/authentic/evminov-board-profile.jpg", label: "Compatible with All Boards" },
    ],
    popular: false,
    faqs: [
      {
        q: "Will the Free-Standing Stand scratch hardwood floors?",
        a: "No. It includes wide non-marking rubberized footing pads that protect hardwood, tile, vinyl, and carpet while keeping the stand rock-steady.",
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
