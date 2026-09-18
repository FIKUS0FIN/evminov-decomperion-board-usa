/**
 * Evminov US Catalog Products
 * Augmented with authentic multi-angle studio and workshop photos from Telegram archives
 */

export const products = [
  {
    id: 'evminov-standard',
    name: 'Evminov Pro-Traction Board (Standard 3-Section)',
    badge: 'Best Seller • Hospital Grade',
    subtitle: 'Patented natural pine decompression board for herniated discs, sciatica, and chronic back pain.',
    basePrice: 450, // Direct delivery from Ukraine (2-3 weeks)
    fastPrice: 595, // Fast 2-4 day delivery from Burbank, CA warehouse
    rating: 4.9,
    reviewsCount: 1420,
    specs: {
      heightLimit: 'Up to 6\'4" (193 cm)',
      weightLimit: 'Up to 210 lbs (95 kg)',
      material: 'Selected resonant Carpathian Pine or Ukrainian Alder Wood with anatomical spring flex',
      weight: '23–26 lbs (10.5–12 kg)',
      inclineRange: '8° to 90° (and -25° reverse)',
      foldedDepth: '2.4 inches against wall',
    },
    includes: [
      'Patented Glisson Loop for cervical spine traction (Value $65)',
      'Adjustable aircraft-grade alloy carriage with quick-lock',
      'Heavy-duty 16" wood stud wall mounting kit with 400+ lbs anchors',
      '30-Day Digital Spine Rehabilitation Video Program & manual',
      '60-Day Risk-Free Home Trial & 10-Year Frame Warranty',
    ],
    finishes: ['Resonant Carpathian Pine (Natural)', 'Ukrainian Alder Wood (Warm Amber)', 'Dark Walnut Stain', 'Matte Carbon Black'],
    image: '/images/authentic/evminov-board-profile.jpg',
    galleryImages: [
      { url: '/images/authentic/evminov-board-profile.jpg', label: 'Full Board' },
      { url: '/images/authentic/hero-full-device-traction.jpg', label: 'In Action' },
      { url: '/images/accessories/standard-pine-board-assembly.png', label: 'Folded 3-Piece' },
      { url: '/images/authentic/evminov-board-head-mount.jpg', label: 'Carriage Head' },
      { url: '/images/products/board-mounting-bracket.jpg', label: 'Wall Mount' },
      { url: '/images/products/board-natural-pine-finish.jpg', label: 'Pine Finish' },
      { url: '/images/products/board-dark-walnut-finish.jpg', label: 'Walnut Finish' }
    ],
    popular: true,
  },
  {
    id: 'evminov-wide',
    name: 'Evminov Wide Heavy-Duty Traction Board',
    badge: 'Athletes & Tall Users (6\'5"+ / 210+ lbs)',
    subtitle: 'Reinforced 3-section board engineered for heavy lifters, tall individuals, and athletes.',
    basePrice: 500,
    fastPrice: 635,
    rating: 4.9,
    reviewsCount: 480,
    specs: {
      heightLimit: 'Up to 6\'9" (206 cm)',
      weightLimit: 'Up to 330 lbs (150 kg)',
      material: 'Reinforced selected pine core with high-tensile alloy frame',
      weight: '30 lbs (13.5 kg)',
      inclineRange: '8° to 90°',
      foldedDepth: '2.8 inches against wall',
    },
    includes: [
      'Reinforced Glisson loop with extra padding',
      'Extra-wide ergonomic carriage with double safety lock',
      'High-capacity 16" stud mounting bracket & masonry anchors',
      'Athletic Spine Restoration Protocol for Deadlifts & Squats',
      '60-Day Risk-Free Home Trial & 10-Year Warranty',
    ],
    finishes: ['Natural Nordic Pine', 'Dark Walnut Stain', 'Gym Stealth Black'],
    image: '/images/products/board-studio-incline.jpg',
    galleryImages: [
      { url: '/images/products/board-studio-incline.jpg', label: 'Wide Board' },
      { url: '/images/products/board-carriage-locking-pin.jpg', label: 'Safety Pin' },
      { url: '/images/products/board-wall-mount-hardware.jpg', label: 'Hardware Kit' },
      { url: '/images/products/board-studio-woodgrain.jpg', label: 'Wood Grain' },
      { url: '/images/accessories/wide-board-heavy-duty.png', label: 'Dimensions' }
    ],
    popular: false,
  },
  {
    id: 'evminov-stick',
    name: 'BackBrush by Evminov™ (Compact Family & Travel Trainer)',
    badge: 'New • Over-The-Door & Travel Setup',
    subtitle: 'Patented compact folding spinal trainer with universal door anchor and wall mount. Mounts over any standard interior door in seconds with zero wall drilling.',
    basePrice: 349, // Direct delivery from Ukraine ($349)
    fastPrice: 399, // Fast 2-4 day delivery from Burbank, California warehouse ($399)
    rating: 4.9,
    reviewsCount: 310,
    specs: {
      heightLimit: 'Universal for all family members (teens to 6\'6")',
      weightLimit: 'Standard: up to 220 lbs (100 kg) • Wide: 330 lbs (150 kg)',
      material: 'Lightweight resonant Carpathian pine with sliding carriage',
      weight: '17.6 lbs (8 kg) Standard / 19.4 lbs (8.8 kg) Wide',
      inclineRange: 'Hangs over any standard room door or wall mount (10° to 45°)',
      foldedDepth: 'Ultra-slim 2.4" • Travel carry case & door anchor included',
    },
    includes: [
      'Universal non-scratch over-the-door anchor strap (hangs on any room door without drilling or tools)',
      'High-tensile suspension cable & quick-release carabiner for 10°–45° angle adjustments',
      'Padded heavy-duty travel carry case with shoulder strap included',
      'Smooth sliding ergonomic carriage adjustable for all family members',
      '5-Minute Daily Back Care Video Guide (WHO-aligned daily spinal mobility)',
      '60-Day Risk-Free Home Trial & 5-Year Hardware Warranty',
    ],
    finishes: ['Resonant Carpathian Pine', 'Ukrainian Alder Wood Tone', 'Dark Walnut Finish', 'Travel Matte Black'],
    image: '/images/products/board-door-mount-setup.jpg',
    galleryImages: [
      { url: '/images/products/board-door-mount-setup.jpg', label: 'Door Mount Setup' },
      { url: '/images/accessories/folding-board-3-sections.png', label: 'Family Training' },
      { url: '/images/authentic/hero-reverse-decompression.jpg', label: 'Spine Relief' },
      { url: '/images/products/board-travel-bag-carrying.jpg', label: 'Travel Case' },
      { url: '/images/accessories/standard-pine-board-assembly.png', label: '3-Piece Fold' }
    ],
    popular: false,
  },
  {
    id: 'evminov-stand',
    name: 'Demountable Free-Standing Ladder Stand',
    badge: 'For Renters • No Wall Holes Needed',
    subtitle: 'Sturdy freestanding timber stand. Allows full incline adjustment without drilling your drywall.',
    basePrice: 275,
    fastPrice: 345,
    rating: 4.9,
    reviewsCount: 220,
    specs: {
      heightLimit: 'Compatible with all Evminov boards',
      weightLimit: 'Rated for up to 350 lbs user weight',
      material: 'Solid kiln-dried beech wood & powder-coated steel',
      weight: '24 lbs (11 kg)',
      footprint: 'Takes less than 3.5 sq ft of floor area',
      foldedDepth: 'Quickly disassembles in 3 minutes without tools',
    },
    includes: [
      'Tool-free locking hardware & safety pins',
      'Floor-protecting non-scratch rubberized footing pads',
      'Instructional assembly manual and video QR code',
    ],
    finishes: ['Matching Nordic Pine', 'Natural Beech'],
    image: '/images/accessories/renter-stand-setup.jpg',
    galleryImages: [
      { url: '/images/accessories/renter-stand-setup.jpg', label: 'Assembled Stand' },
      { url: '/images/authentic/evminov-board-profile.jpg', label: 'Angle Profile' }
    ],
    popular: false,
  },
  {
    id: 'evminov-glisson',
    name: 'Patented Glisson Loop Cervical Traction System',
    badge: 'Neck & Cervical Relief',
    subtitle: 'Anatomical padded cervical traction collar for neck stiffness, migraine relief, and C1-C7 disc decompression.',
    basePrice: 65,
    fastPrice: 85,
    rating: 4.9,
    reviewsCount: 590,
    specs: {
      heightLimit: 'Universal adjustable fit',
      weightLimit: 'Rated for 150 lbs tensile load',
      material: 'Breathable medical-grade cotton with memory foam lining',
      weight: '1.2 lbs (0.5 kg)',
      inclineRange: 'Attaches directly to Evminov carriage or door frame',
      foldedDepth: 'Pocket-sized',
    },
    includes: [
      'High-tensile suspension cord & stainless carabiner',
      'Cervical lordosis rehabilitation exercise chart',
      'Note: Already INCLUDED free inside Standard & Wide Board sets',
    ],
    finishes: ['Medical Blue', 'Classic Charcoal'],
    image: '/images/products/glisson-loop-studio.jpg',
    galleryImages: [
      { url: '/images/products/glisson-loop-studio.jpg', label: 'Glisson Harness' },
      { url: '/images/accessories/glisson-neck-loop-detailed.jpg', label: 'Padding Detail' }
    ],
    popular: false,
  },
  {
    id: 'evminov-foot-sleeves',
    name: 'Padded Foot Sleeves for Carriage Handles',
    badge: 'Inversion & Reverse Traction Cushion',
    subtitle: 'Ergonomic high-density foam sleeves that slide directly over carriage handles in seconds. Cushions feet, shins, and ankles for pain-free inverted hanging and reverse spine decompression.',
    basePrice: 39,
    fastPrice: 49,
    rating: 4.9,
    reviewsCount: 280,
    specs: {
      heightLimit: 'Universal fit for all Evminov carriage models',
      weightLimit: 'Rated for up to 330 lbs tensile load',
      material: 'Closed-cell high-density neoprene foam with tear-resistant grip',
      weight: '0.8 lbs (0.35 kg) per pair',
      inclineRange: 'Slide on / slide off in 5 seconds without tools',
      foldedDepth: 'Ergonomic contoured cylinder pair',
    },
    includes: [
      'Pair of 2 contoured high-density foam sleeves (easy slide-on installation)',
      'Protects feet, heels, and ankles from metal pressure during reverse hanging',
      'Universal slide-on fit for all standard and wide Evminov carriage handles',
      'Instructional guide for head-down inverted traction and lumbar decompression',
      'Lifetime non-slip, tear-resistant foam guarantee',
    ],
    finishes: ['Stealth Black', 'Carbon Gray'],
    image: '/images/products/carriage-foot-sleeves-installation.jpg',
    galleryImages: [
      { url: '/images/products/carriage-foot-sleeves-installation.jpg', label: 'Slide-On Install' },
      { url: '/images/products/carriage-foot-sleeves-inversion.jpg', label: 'Feet Hooked In' },
      { url: '/images/authentic/exercise-reverse-traction.jpg', label: 'Reverse Traction' },
      { url: '/images/products/carriage-foot-sleeves-studio.jpg', label: 'Sleeve Pair' }
    ],
    popular: false,
  },
];
