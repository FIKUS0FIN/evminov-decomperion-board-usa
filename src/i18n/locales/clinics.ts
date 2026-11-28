import { Locale } from "@/i18n/types";

export interface ClinicsVerticalCard {
  badge: string;
  title: string;
  desc: string;
  spec: string;
  linkLabel: string;
  linkPath: string;
}

export interface ClinicsComparisonRow {
  feature: string;
  evminov: string;
  motorized: string;
  basicTraction: string;
}

export interface ClinicsVolumeTier {
  stationsLabel: string;
  presetStations: number;
  discountBadge: string;
  discountPercent: number;
  title: string;
  desc: string;
}

export interface ClinicsB2bLocaleCopy {
  metaTitle: string;
  metaDescription: string;
  breadcrumbCurrent: string;
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
    primaryCta: string;
    whatsappCta: string;
    whatsappPrefill: string;
    photoMainAlt: string;
    photoRoomAlt: string;
    photoCaption: string;
    kpis: [
      { val: string; label: string; sub: string },
      { val: string; label: string; sub: string },
      { val: string; label: string; sub: string },
      { val: string; label: string; sub: string },
    ];
  };
  geoSummary: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  verticalsHeading: string;
  verticalsSub: string;
  verticals: [
    ClinicsVerticalCard,
    ClinicsVerticalCard,
    ClinicsVerticalCard,
    ClinicsVerticalCard,
  ];
  comparisonHeading: string;
  comparisonSub: string;
  comparisonHeaders: [string, string, string, string];
  comparisonRows: ClinicsComparisonRow[];
  tiersHeading: string;
  tiersSub: string;
  applyTierLabel: string;
  volumeTiers: [
    ClinicsVolumeTier,
    ClinicsVolumeTier,
    ClinicsVolumeTier,
    ClinicsVolumeTier,
  ];
  calculator: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    stationsLabel: string;
    stationsUnitSingular: string;
    stationsUnitPlural: string;
    finishLabel: string;
    finishLight: string;
    finishDark: string;
    addonsLabel: string;
    addonWallPanelLabel: string;
    addonWallPanelSub: string;
    addonStandLabel: string;
    addonStandSub: string;
    paybackHeading: string;
    weeklySessionsLabel: string;
    sessionFeeLabel: string;
    summaryTitle: string;
    baseEquipmentLabel: string;
    volumeDiscountLabel: string;
    addonsTotalLabel: string;
    netBundleLabel: string;
    perStationLabel: string;
    estWeeklyRevenueLabel: string;
    estPaybackLabel: string;
    weeksSuffix: string;
    paybackDisclaimer: string;
    formHeading: string;
    formSub: string;
    clinicNameLabel: string;
    clinicNamePlaceholder: string;
    contactNameLabel: string;
    contactNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    stateLabel: string;
    statePlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    whatsappDeskBtn: string;
    successTitle: string;
    successBody: string;
    orderRefLabel: string;
    errorInvalidEmail: string;
    errorSubmitFailed: string;
  };
  faqsHeading: string;
  faqsSub: string;
  faqs: Array<{ q: string; a: string }>;
  bottomCta: {
    heading: string;
    body: string;
    catalogBtn: string;
    centersBtn: string;
    complianceNotice: string;
  };
}

export const CLINICS_B2B_COPY: Record<Locale, ClinicsB2bLocaleCopy> = {
  en: {
    metaTitle: "For Clinics, PT & Pilates Studios — B2B Spine Decompression",
    metaDescription:
      "Equip physical therapy clinics, chiropractic suites & Pilates studios with Reinforced Wide 30 cm Evminov stations. Zero electricity, 330 lb rating, 5%–15% B2B volume tiers.",
    breadcrumbCurrent: "Clinics & Studios",
    hero: {
      badge: "B2B PARTNER PROGRAM • SINCE 1996 • HTS 9506.91.0030",
      h1: "Multi-Station Spine Decompression for PT Clinics, Chiropractors & Pilates Studios",
      subtitle:
        "Replace $15,000–$35,000 single-user motorized tables with wall-mounted or freestanding Reinforced Wide 30 cm Evminov stations — zero electricity, 330 lbs (150 kg) load capacity, simultaneous multi-client throughput, and 5%–15% commercial volume pricing.",
      primaryCta: "Configure Multi-Station Bundle & ROI",
      whatsappCta: "WhatsApp B2B Desk",
      whatsappPrefill:
        "Hello Evminov B2B Desk! I would like commercial invoice pricing and W-9 details for equipping our clinic/studio.",
      photoMainAlt:
        "Supervised clinical Evminov Board spinal decompression and stabilization wall stations",
      photoRoomAlt:
        "Multi-station Evminov Center room with mounted Carpathian timber panels",
      photoCaption:
        "3–6 wall-mounted Evminov stations fit along one studio wall, freeing 100% of open floor space when parked vertically.",
      kpis: [
        { val: "330 lbs", label: "Wide 30 cm Commercial Rating", sub: "Up to 150 kg & 6'9\" user height" },
        { val: "0 kWh", label: "Zero Motors or Electricity", sub: "1-Year structural frame warranty" },
        { val: "5%–15%", label: "Multi-Station Partner Tiers", sub: "Commercial invoice & W-9 ready" },
        { val: "~2 Wks", label: "US & Canada Courier Dispatch", sub: "Tracked <=120 cm parcel boxes" },
      ],
    },
    geoSummary: {
      eyebrow: "Direct Clinical Economics Summary",
      heading: "Why Clinics & Studios Add 3–6 Evminov Stations Instead of a $25,000 Traction Table",
      body: "A 3-station Reinforced Wide 30 cm Evminov wall costs roughly one-tenth of a single motorized decompression table, uses zero electricity, occupies near-zero floor space when parked upright, and allows one clinician or Pilates instructor to guide multiple clients simultaneously at head-up 8°–35° angles. Patients can also continue the exact protocol at home.",
    },
    verticalsHeading: "Engineered for 4 Commercial Practice & Studio Environments",
    verticalsSub:
      "Each unit arrives complete with precision steel couplers, 16-inch stud wall mounting brackets, patented cotton-padded Glisson Cervical Loops, product passport, and a 1-Year structural warranty.",
    verticals: [
      {
        badge: "Physical Therapy & Orthopedic Rehab",
        title: "Post-Acute Axial Unloading + Active Core Stabilization",
        desc: "Coach gentle head-up 8°–18° traction followed immediately by controlled deep paraspinal and multifidus micro-exercises — without supine-to-standing clinic table delays.",
        spec: "Ideal Setup: 3–6 Reinforced Wide 30 cm Stations + Wall Protection Panels",
        linkLabel: "Explore Disc Unloading Protocols",
        linkPath: "/conditions/herniated-disc-l4-l5/",
      },
      {
        badge: "Chiropractic & Osteopathic Practices",
        title: "Calm Pre-Adjustment Prep & Head-Up Cervical Relief",
        desc: "Give hypertensive, dizzy, or ankle-sensitive clients calm head-up decompression plus 8°–12° Glisson Cervical Loop traction — eliminating the red-face blood rush of inversion tables.",
        spec: "Ideal Setup: 2–4 Stations + Glisson Cervical Loop Hygiene Protocol",
        linkLabel: "View Cervical Traction Guide",
        linkPath: "/guides/glisson-loop-cervical-traction-neck-relief-guide/",
      },
      {
        badge: "Pilates, Yoga Therapy & Mobility Studios",
        title: "Warm Natural Wood Aesthetic Matching Your Reformers",
        desc: "Handcrafted Natural Warm Amber Alder and Dark Walnut Pine blend seamlessly into boutique studio interiors. Teach small-group 20-minute spine elongation & posture reset classes.",
        spec: "Ideal Setup: 4–8 Stations or 4-Piece Freestanding Ladder Stands (No Drilling)",
        linkLabel: "Compare Studio Table Costs",
        linkPath: "/guides/drx9000-spinal-decompression-therapy-cost-vs-home-board-guide/",
      },
      {
        badge: "Athletic Performance & Corporate Wellness",
        title: "330 lb Heavy-Duty Post-Deadlift & Desk Reset Stations",
        desc: "Rated up to 330 lbs (150 kg) and 6'9\" athlete frames for weightlifting gyms, tactical first-responder rooms, and tech-company recovery lounges.",
        spec: "Ideal Setup: Reinforced Wide 30 cm Dark Walnut + Carrying Bags",
        linkLabel: "View Athlete Recovery Protocol",
        linkPath: "/conditions/athlete-spine-recovery/",
      },
    ],
    comparisonHeading: "Capital Efficiency & Studio Throughput Comparison",
    comparisonSub:
      "Evaluate 3 Reinforced Wide 30 cm Evminov stations side-by-side against motorized clinic decompression tables and basic static traction benches.",
    comparisonHeaders: [
      "Practice / Studio Metric",
      "3-Station Evminov Wide 30 cm Wall",
      "Motorized Decompression Table ($15k–$35k)",
      "Basic Clinical Traction Bench ($3.5k–$6.5k)",
    ],
    comparisonRows: [
      {
        feature: "Upfront Equipment Capital",
        evminov: "Low — ~$1,425–$1,482 net for 3 stations (incl. 5% partner discount)",
        motorized: "$15,000 – $35,000+ for a single bed",
        basicTraction: "$3,500 – $6,500 for 1 mechanical bench",
      },
      {
        feature: "Simultaneous Client Throughput",
        evminov: "3+ clients simultaneously supervised along one wall",
        motorized: "1 client per machine at a time",
        basicTraction: "1 client per bench at a time",
      },
      {
        feature: "Studio Floor Space Footprint",
        evminov: "~0 sq ft open floor loss when parked upright on wall bracket",
        motorized: "35 – 50 sq ft permanent dedicated room",
        basicTraction: "25 – 35 sq ft permanent footprint",
      },
      {
        feature: "Biomechanical Modality",
        evminov: "Head-up 8°–35° resonant flexing wood + active stabilizer training + Glisson neck loop",
        motorized: "Passive motorized harness pull only",
        basicTraction: "Static belt pull; no dynamic cervical/thoracic mobility",
      },
      {
        feature: "Electricity, Calibration & Maintenance",
        evminov: "0 kWh electricity, zero actuators, wipe-clean timber & 1-Yr frame warranty",
        motorized: "Dedicated outlet, annual actuator calibration & belt replacement",
        basicTraction: "Hydraulic/spring servicing & upholstery wear",
      },
      {
        feature: "Home Continuum Referral Fit",
        evminov: "Clients continue the same protocol at home ($475–$520 USD / $435–$500 CAD; US HSA/FSA w/ LMN)",
        motorized: "Not feasible for home ownership",
        basicTraction: "Clinically bulky; rarely adopted at home",
      },
    ],
    tiersHeading: "Partner Multi-Station Volume Tiers",
    tiersSub:
      "Select a tier below to pre-load the bundle configurator and preview net partner pricing automatically.",
    applyTierLabel: "Select in Calculator",
    volumeTiers: [
      {
        stationsLabel: "1 Station",
        presetStations: 1,
        discountBadge: "Standard Direct",
        discountPercent: 0,
        title: "Single Treatment Room Evaluation",
        desc: "Test a Reinforced Wide 30 cm station in one room with formal commercial invoice & W-9 documentation.",
      },
      {
        stationsLabel: "2–3 Stations",
        presetStations: 3,
        discountBadge: "Save 5%",
        discountPercent: 5,
        title: "Boutique Studio & Chiro Suite",
        desc: "Equip a dedicated spinal decompression wall for 2–3 simultaneous supervised sessions.",
      },
      {
        stationsLabel: "4–6 Stations",
        presetStations: 4,
        discountBadge: "Save 10%",
        discountPercent: 10,
        title: "Multi-Bay Rehab & Group Spine Wall",
        desc: "Ideal for small-group Pilates/mobility spine classes and high-volume PT recovery bays.",
      },
      {
        stationsLabel: "7+ Stations",
        presetStations: 7,
        discountBadge: "Save 15%",
        discountPercent: 15,
        title: "Regional Clinic Network & Corporate Rollout",
        desc: "Priority workshop production batching, unified commercial invoicing, and dedicated logistics coordinator.",
      },
    ],
    calculator: {
      eyebrow: "Interactive B2B Bundle & Illustrative Cash-Pay Payback Estimator",
      heading: "Calculate Your Multi-Station Investment & Request an Official Invoice",
      subtitle:
        "Configure Reinforced Wide 30 cm (230–245 cm) stations below, preview optional no-drill stands or wall protection panels, and request a formal commercial invoice / W-9 quote in one click.",
      stationsLabel: "Number of Reinforced Wide 30 cm Stations",
      stationsUnitSingular: "station",
      stationsUnitPlural: "stations",
      finishLabel: "Timber Finish Selection",
      finishLight: "Light — Natural Warm Amber Alder",
      finishDark: "Dark — Dark Walnut Pine",
      addonsLabel: "Optional Commercial Studio Add-Ons (Per Station)",
      addonWallPanelLabel: "2-Piece Wide 30 cm Wall Protection Panel (+$175 / station)",
      addonWallPanelSub: "Shields drywall paint and baseboards in high-turnover treatment rooms.",
      addonStandLabel: "4-Piece Freestanding Ladder Stand + Hooks (+$310 / station)",
      addonStandSub: "Zero wall drilling — ideal for glass partitions, metal-stud gyms, or leased spaces.",
      paybackHeading: "Illustrative Guided Wellness Session Payback",
      weeklySessionsLabel: "Guided 20-min Studio Sessions / Week",
      sessionFeeLabel: "Illustrative Studio Session Fee",
      summaryTitle: "Commercial Bundle Estimate",
      baseEquipmentLabel: "Wide 30 cm Boards (Direct Base)",
      volumeDiscountLabel: "B2B Partner Volume Discount",
      addonsTotalLabel: "Selected Studio Add-Ons",
      netBundleLabel: "Estimated Net B2B Total",
      perStationLabel: "Effective Net Cost / Station",
      estWeeklyRevenueLabel: "Illustrative Weekly Gross",
      estPaybackLabel: "Est. Weeks to Equipment Payback",
      weeksSuffix: "weeks",
      paybackDisclaimer:
        "Illustrative cash-pay wellness business math only — not medical insurance/CPT billing advice or guaranteed revenue. Evminov Spine Systems boards are classified as General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030).",
      formHeading: "Request Official Commercial Invoice & W-9 Quote",
      formSub:
        "No payment or card number is collected here. Our B2B specialist replies within 1 business day with a formal PDF quote, W-9 / commercial customs invoice, and ~2-week courier schedule.",
      clinicNameLabel: "Clinic, Studio, or Practice Name",
      clinicNamePlaceholder: "e.g., Pacific Spine & Pilates Studio",
      contactNameLabel: "Primary Contact & Role",
      contactNamePlaceholder: "e.g., Dr. Elena Morales, PT / Studio Director",
      emailLabel: "Work Email (Required)",
      emailPlaceholder: "director@yourclinic.com",
      phoneLabel: "Phone or WhatsApp",
      phonePlaceholder: "+1 (310) 555-0199",
      stateLabel: "US State / Canadian Province",
      statePlaceholder: "e.g., California / Ontario",
      notesLabel: "Wall Type or Delivery Questions (Optional)",
      notesPlaceholder: "e.g., Concrete lobby wall, need W-9 for practice bookkeeping, or staggered delivery...",
      submitBtn: "Request Formal B2B Quote & W-9",
      submittingBtn: "Sending Quote Request...",
      whatsappDeskBtn: "Send This Bundle to WhatsApp B2B Desk",
      successTitle: "B2B Commercial Quote Request Logged!",
      successBody:
        "Your multi-station estimate has been routed to our North American Operations Desk. We will email your formal commercial invoice quote and W-9 packet shortly — or tap WhatsApp below for immediate priority scheduling.",
      orderRefLabel: "Quote Reference",
      errorInvalidEmail: "Please enter a valid work email address.",
      errorSubmitFailed: "Could not submit automatically. Please tap WhatsApp B2B Desk or email support directly.",
    },
    faqsHeading: "Commercial Clinic & Studio FAQ",
    faqsSub: "Key engineering, mounting, sanitation, and purchasing answers for practice owners.",
    faqs: [
      {
        q: "What is the commercial load rating and frame warranty for multi-client clinic use?",
        a: "Every Reinforced Wide 30 cm (230–245 cm) Evminov station is built with dual precision steel couplers and rated up to 330 lbs (150 kg) and 6'9\" user height, backed by a 1-Year Manufacturer Structural Frame Warranty.",
      },
      {
        q: "Can we install stations on commercial metal-stud walls or leased glass-front studios without drilling?",
        a: "Yes. Standard mounting kits anchor directly into 16-inch wood studs or solid concrete/brick (with masonry anchors). If your leased suite uses light-gauge metal studs, glass walls, or prohibits drilling, add our 4-Piece Freestanding Ladder Stand ($275) + Mounting Hooks ($35) per station.",
      },
      {
        q: "How do clinics sanitize boards and Glisson loops between clients?",
        a: "Both Light Alder and Dark Walnut Pine frames feature a smooth sealed finish that wipes clean quickly with non-bleach fitness equipment wipes. Because the included cotton-padded Glisson Cervical Loops touch the chin/occiput, studios either place disposable non-woven headrest covers or assign dedicated per-client loops.",
      },
      {
        q: "Do you provide W-9 forms, formal commercial invoices, and non-card payment methods?",
        a: "Yes. While online card checkout launches in the New Year, B2B clinic and studio buyers already purchase seamlessly via formal itemized commercial invoices (with W-9 in the US and HTS 9506.91.0030 customs paperwork for Canada) payable via ACH/wire or invoice link.",
      },
      {
        q: "How long does shipping take for 3–10 station clinic orders across the US and Canada?",
        a: "Because each station packs into compact <=120 cm demountable courier cartons, multi-station shipments avoid slow LTL freight loading docks and arrive via tracked courier across all 50 US states and Canadian provinces in approximately 2 weeks.",
      },
      {
        q: "How do patient home referrals and HSA/FSA reimbursements work?",
        a: "Many clinics let patients learn proper head-up 8°–15° technique in-studio and then order a matching 2-piece or 3-piece home board. Evminov boards are General Wellness Equipment (HTS 9506.91.0030); US patients may qualify for ~25%–35% pre-tax HSA/FSA savings when you or their healthcare provider issue a Letter of Medical Necessity (LMN) and their plan approves it.",
      },
    ],
    bottomCta: {
      heading: "Ready to Review Full Product Specs or Our 1996 Heritage Archive?",
      body: "Inspect complete technical tolerances on our 3-Piece Wide 30 cm model or explore Vyacheslav Evminov's international patents and clinic methodology since 1996.",
      catalogBtn: "Inspect 3-Piece Wide 30 cm Specs",
      centersBtn: "Since 1996 Heritage & Patents",
      complianceNotice:
        "Regulatory Notice: Evminov Spine Systems equipment is classified as General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030) and is not intended to diagnose, treat, cure, or prevent any disease. Healthcare practitioners supervise contraindications and exercise progression according to their scope of practice.",
    },
  },
  es: {
    metaTitle: "Para Clínicas, Fisioterapia y Estudios Pilates — Mayorista Evminov",
    metaDescription:
      "Equipa clínicas de fisioterapia, consultorios quiroprácticos y estudios de Pilates con estaciones Evminov Ancha 30 cm (330 lbs). Descuentos B2B de 5% a 15%.",
    breadcrumbCurrent: "Clínicas y Estudios",
    hero: {
      badge: "PROGRAMA B2B • DESDE 1996 • HTS 9506.91.0030",
      h1: "Estaciones Multi-Puesto de Descompresión Espinal para Clínicas, Quiroprácticos y Estudios Pilates",
      subtitle:
        "Sustituye camillas motorizadas de $15,000–$35,000 por estaciones Evminov Reforzadas de 30 cm de pared o soporte independiente: cero electricidad, capacidad de 330 lbs (150 kg), atención simultánea a múltiples clientes y descuentos B2B del 5% al 15%.",
      primaryCta: "Configurar Paquete y Retorno B2B",
      whatsappCta: "WhatsApp Mesa B2B",
      whatsappPrefill:
        "Hola Mesa B2B Evminov! Deseo solicitar factura proforma comercial y formulario W-9 para equipar nuestra clínica o estudio.",
      photoMainAlt:
        "Estaciones clínicas supervisadas con Tablas Evminov para descompresión espinal",
      photoRoomAlt:
        "Sala multi-estación en Centro Evminov con paneles de madera de los Cárpatos",
      photoCaption:
        "De 3 a 6 estaciones de pared caben en un solo muro del estudio, dejando libre el 100% del suelo al plegarse verticalmente.",
      kpis: [
        { val: "330 lbs", label: "Capacidad Comercial 30 cm", sub: "Hasta 150 kg y 2,06 m" },
        { val: "0 kWh", label: "Cero Motores ni Electricidad", sub: "Garantía estructural de 1 año" },
        { val: "5%–15%", label: "Niveles de Descuento B2B", sub: "Factura comercial y W-9 listos" },
        { val: "~2 Sem.", label: "Envío EE. UU. y Canadá", sub: "Cajas rastreadas <=120 cm" },
      ],
    },
    geoSummary: {
      eyebrow: "Resumen Económico Directo",
      heading: "Por Qué las Clínicas Instalan 3–6 Estaciones Evminov en Lugar de Una Camilla de $25,000",
      body: "Una pared de 3 estaciones Evminov Reforzadas de 30 cm cuesta cerca de una décima parte de una camilla motorizada, no consume electricidad, apenas ocupa suelo cuando se guarda vertical y permite a un fisioterapeuta o instructor guiar a varios clientes a la vez entre 8° y 35° con la cabeza arriba.",
    },
    verticalsHeading: "Diseñado para 4 Entornos Clínicos y de Estudio",
    verticalsSub:
      "Cada estación incluye conectores de acero, herrajes para vigas de 16 pulgadas, Lazo Cervical de Glisson con acolchado de algodón, pasaporte oficial y garantía estructural de 1 año.",
    verticals: [
      {
        badge: "Fisioterapia y Rehabilitación",
        title: "Descarga Axial Suave + Estabilización Activa Profunda",
        desc: "Combina tracción inclinada de 8°–18° con la cabeza elevada y micro-ejercicios activos de multífidos sin mover al paciente entre equipos.",
        spec: "Configuración ideal: 3–6 Estaciones 30 cm + Paneles Protectores de Pared",
        linkLabel: "Ver Protocolos de Disco",
        linkPath: "/conditions/herniated-disc-l4-l5/",
      },
      {
        badge: "Quiropráctica y Osteopatía",
        title: "Relajación Pre-Ajuste y Tracción Cervical Segura",
        desc: "Brinda a pacientes hipertensos o sensibles descompresión con la cabeza arriba y Lazo de Glisson a 8°–12°, evitando el vértigo de las mesas de inversión.",
        spec: "Configuración ideal: 2–4 Estaciones + Rotación Higiénica de Lazos",
        linkLabel: "Ver Guía de Tracción Cervical",
        linkPath: "/guides/glisson-loop-cervical-traction-neck-relief-guide/",
      },
      {
        badge: "Estudios de Pilates, Yoga y Movilidad",
        title: "Estética de Madera Natural a Juego con tus Reformers",
        desc: "Aliso Ámbar Natural y Pino Nogal Oscuro armonizan con estudios boutique para impartir sesiones grupales de higiene espinal de 20 minutos.",
        spec: "Configuración ideal: 4–8 Estaciones o Soportes-Escalera Sin Perforar",
        linkLabel: "Comparar Costos vs. Camillas",
        linkPath: "/guides/drx9000-spinal-decompression-therapy-cost-vs-home-board-guide/",
      },
      {
        badge: "Rendimiento Deportivo y Bienestar Corporativo",
        title: "Estaciones de 330 lbs para Halterofilia y Postura",
        desc: "Soporta hasta 150 kg y atletas altos en gimnasios de fuerza, salas tácticas y áreas de recuperación ejecutiva.",
        spec: "Configuración ideal: Ancha 30 cm Nogal Oscuro + Bolsas de Transporte",
        linkLabel: "Ver Protocolo Atlético",
        linkPath: "/conditions/athlete-spine-recovery/",
      },
    ],
    comparisonHeading: "Comparativa de Inversión y Capacidad por Hora",
    comparisonSub:
      "Compara 3 estaciones Evminov Ancha 30 cm frente a camillas motorizadas y bancos de tracción convencionales.",
    comparisonHeaders: [
      "Criterio de Clínica o Estudio",
      "Pared de 3 Estaciones Evminov 30 cm",
      "Camilla Motorizada ($15k–$35k)",
      "Banco de Tracción Básico ($3.5k–$6.5k)",
    ],
    comparisonRows: [
      {
        feature: "Inversión Inicial",
        evminov: "Baja — ~$1,425–$1,482 neto por 3 estaciones (con -5% B2B)",
        motorized: "$15,000 – $35,000+ por una sola camilla",
        basicTraction: "$3,500 – $6,500 por un solo banco",
      },
      {
        feature: "Clientes Simultáneos",
        evminov: "3 o más clientes guiados a la vez en una sola pared",
        motorized: "1 cliente por sesión",
        basicTraction: "1 cliente por sesión",
      },
      {
        feature: "Espacio en Planta",
        evminov: "Casi 0 pies² perdidos al guardarse en posición vertical",
        motorized: "35 – 50 pies² ocupados de forma permanente",
        basicTraction: "25 – 35 pies² permanentes",
      },
      {
        feature: "Biomecánica de Sesión",
        evminov: "Madera resonante 8°–35° cabeza arriba + activación muscular + Glisson",
        motorized: "Solo tracción pasiva con arnés",
        basicTraction: "Tirón estático sin movilidad cervical guiada",
      },
      {
        feature: "Electricidad y Mantenimiento",
        evminov: "0 kWh, sin motores, limpieza rápida, garantía 1 año",
        motorized: "Calibración anual, actuadores y desgaste de correas",
        basicTraction: "Revisión hidráulica y tapicería",
      },
      {
        feature: "Continuidad en Casa para Pacientes",
        evminov: "El paciente puede adquirir tabla para casa ($475–$520 USD; apto HSA/FSA con LMN)",
        motorized: "Imposible para uso doméstico",
        basicTraction: "Voluminoso y poco práctico en el hogar",
      },
    ],
    tiersHeading: "Niveles de Descuento por Volumen para Socios",
    tiersSub: "Pulsa un nivel para cargar la cantidad de estaciones en el calculador.",
    applyTierLabel: "Aplicar en Calculadora",
    volumeTiers: [
      {
        stationsLabel: "1 Estación",
        presetStations: 1,
        discountBadge: "Precio Directo",
        discountPercent: 0,
        title: "Evaluación en Sala Individual",
        desc: "Prueba una estación Reforzada de 30 cm con factura comercial y W-9.",
      },
      {
        stationsLabel: "2–3 Estaciones",
        presetStations: 3,
        discountBadge: "Ahorra 5%",
        discountPercent: 5,
        title: "Estudio Boutique o Quiropráctico",
        desc: "Equipa una pared completa de descompresión para atención simultánea.",
      },
      {
        stationsLabel: "4–6 Estaciones",
        presetStations: 4,
        discountBadge: "Ahorra 10%",
        discountPercent: 10,
        title: "Clínica Multi-Cabina y Clases",
        desc: "Ideal para clases grupales de postura en Pilates o múltiples camillas PT.",
      },
      {
        stationsLabel: "7+ Estaciones",
        presetStations: 7,
        discountBadge: "Ahorra 15%",
        discountPercent: 15,
        title: "Red de Centros y Despliegue Regional",
        desc: "Prioridad de taller, facturación corporativa consolidada y soporte logístico.",
      },
    ],
    calculator: {
      eyebrow: "Configurador B2B y Estimador Ilustrativo de Retorno",
      heading: "Calcula tu Paquete Multi-Estación y Solicita Factura Comercial",
      subtitle:
        "Elige el número de estaciones Reforzadas de 30 cm (230–245 cm), añade soportes sin perforación o paneles protectores y solicita cotización formal sin compromiso.",
      stationsLabel: "Cantidad de Estaciones Reforzadas 30 cm",
      stationsUnitSingular: "estación",
      stationsUnitPlural: "estaciones",
      finishLabel: "Acabado de Madera",
      finishLight: "Claro — Aliso Ámbar Natural",
      finishDark: "Oscuro — Pino Nogal Oscuro",
      addonsLabel: "Accesorios Comerciales Opcionales (Por Estación)",
      addonWallPanelLabel: "Panel Protector de Pared 30 cm en 2 Piezas (+$175 / estación)",
      addonWallPanelSub: "Protege la pintura y drywall ante uso diario intensivo.",
      addonStandLabel: "Soporte-Escalera Independiente 4 Piezas + Ganchos (+$310 / estación)",
      addonStandSub: "Sin perforar paredes: ideal para locales alquilados o mamparas de vidrio.",
      paybackHeading: "Estimador Ilustrativo de Sesiones Guiadas",
      weeklySessionsLabel: "Sesiones Guiadas de 20 min / Semana",
      sessionFeeLabel: "Tarifa Ilustrativa por Sesión",
      summaryTitle: "Resumen del Paquete Comercial",
      baseEquipmentLabel: "Tablas Anchas 30 cm (Base Directa)",
      volumeDiscountLabel: "Descuento por Volumen B2B",
      addonsTotalLabel: "Accesorios Seleccionados",
      netBundleLabel: "Total Neto Estimado B2B",
      perStationLabel: "Costo Neto Efectivo / Estación",
      estWeeklyRevenueLabel: "Ingreso Bruto Semanal Ilustrativo",
      estPaybackLabel: "Semanas Estimadas de Retorno",
      weeksSuffix: "semanas",
      paybackDisclaimer:
        "Cálculo meramente ilustrativo para sesiones privadas de bienestar; no constituye asesoría de facturación médica ni garantía de ingresos. Equipo clasificado como Bienestar General (HTS 9506.91.0030).",
      formHeading: "Solicitar Factura Proforma Comercial y W-9",
      formSub:
        "No se solicitan tarjetas aquí. Nuestro especialista B2B responde en 1 día hábil con cotización PDF, W-9 y cronograma de envío de ~2 semanas.",
      clinicNameLabel: "Nombre de la Clínica o Estudio",
      clinicNamePlaceholder: "Ej.: Centro Spine & Pilates",
      contactNameLabel: "Persona de Contacto y Cargo",
      contactNamePlaceholder: "Ej.: Dra. Elena Morales, Fisioterapeuta",
      emailLabel: "Correo Corporativo (Obligatorio)",
      emailPlaceholder: "direccion@tuclinica.com",
      phoneLabel: "Teléfono o WhatsApp",
      phonePlaceholder: "+1 (305) 555-0199",
      stateLabel: "Estado (EE. UU.) o Provincia (Canadá)",
      statePlaceholder: "Ej.: Florida / Ontario",
      notesLabel: "Tipo de Pared o Preguntas (Opcional)",
      notesPlaceholder: "Ej.: Pared de concreto, necesitamos W-9 contable...",
      submitBtn: "Solicitar Cotización B2B y W-9",
      submittingBtn: "Enviando Solicitud...",
      whatsappDeskBtn: "Enviar Paquete por WhatsApp B2B",
      successTitle: "¡Solicitud de Cotización B2B Registrada!",
      successBody:
        "Tu configuración multi-estación ya está en nuestro escritorio de operaciones. Te enviaremos la factura proforma y el paquete W-9 por correo, o escríbenos por WhatsApp abajo.",
      orderRefLabel: "Referencia de Cotización",
      errorInvalidEmail: "Ingresa un correo electrónico válido.",
      errorSubmitFailed: "No se pudo enviar automáticamente. Usa el botón de WhatsApp B2B o correo directo.",
    },
    faqsHeading: "Preguntas Frecuentes para Clínicas y Estudios",
    faqsSub: "Capacidad comercial, fijación en locales alquilados, higiene y facturación.",
    faqs: [
      {
        q: "¿Cuál es la capacidad de carga comercial y la garantía de fábrica?",
        a: "Cada estación Evminov Reforzada de 30 cm (230–245 cm) soporta hasta 330 lbs (150 kg) y usuarios de hasta 2,06 m (6'9\"), con garantía estructural de 1 año.",
      },
      {
        q: "¿Podemos instalarlas en paredes comerciales de tablaroca con montantes metálicos o locales alquilados?",
        a: "Sí. El kit estándar se fija a vigas de madera de 16 pulgadas o concreto/ladrillo. Si tu local prohíbe perforar o tiene muros metálicos ligeros/vidrio, añade el Soporte-Escalera de 4 Piezas ($275) y Ganchos ($35) por estación.",
      },
      {
        q: "¿Cómo se desinfectan las tablas y los lazos cervicales entre clientes?",
        a: "Las superficies selladas de aliso y pino se limpian fácilmente con toallitas desinfectantes sin cloro. Para los Lazos de Glisson de algodón, recomendamos fundas desechables o lazos individuales por cliente.",
      },
      {
        q: "¿Emiten W-9, facturas comerciales formales y permiten transferencia?",
        a: "Sí. Mientras llega el pago directo con tarjeta en Año Nuevo, las clínicas ya pagan mediante factura proforma oficial, transferencia ACH/wire o enlace de factura, con formulario W-9 en EE. UU. y declaración HTS 9506.91.0030.",
      },
      {
        q: "¿Cuánto tarda la entrega de 3 a 10 estaciones en EE. UU. y Canadá?",
        a: "Al empacarse en cajas desmontables de <=120 cm, evitamos demoras de carga paletizada LTL y entregamos por mensajería rastreada en aproximadamente 2 semanas.",
      },
      {
        q: "¿Cómo funcionan las recomendaciones para casa y HSA/FSA?",
        a: "Muchos centros entrenan al paciente en clínica y luego este ordena su propia tabla plegable. En EE. UU., los compradores pueden ahorrar ~25%–35% vía HSA/FSA si su médico emite una Carta de Necesidad Médica (LMN) aprobada por su plan.",
      },
    ],
    bottomCta: {
      heading: "¿Deseas Revisar Ficha Técnica Completa o Patentes Desde 1996?",
      body: "Consulta todas las especificaciones del modelo Plegable de 3 Piezas (30 cm) o la historia oficial de Vyacheslav Evminov.",
      catalogBtn: "Ver Ficha Técnica 3 Piezas 30 cm",
      centersBtn: "Centros y Patentes Desde 1996",
      complianceNotice:
        "Aviso Regulatorio: Los equipos Evminov Spine Systems están clasificados como Equipos de Bienestar General y Acondicionamiento Espinal (HTS 9506.91.0030). No están destinados a diagnosticar, tratar, curar ni prevenir enfermedades.",
    },
  },
  fr: {
    metaTitle: "Pour Cliniques, Kinés & Studios Pilates — Programme B2B Evminov",
    metaDescription:
      "Équipez cabinets de physiothérapie, cliniques chiropratiques et studios Pilates avec les stations Evminov Large 30 cm (150 kg). Zéro électricité, remises B2B de 5% à 15%.",
    breadcrumbCurrent: "Cliniques & Studios",
    hero: {
      badge: "PROGRAMME PARTENAIRE B2B • DEPUIS 1996 • HTS 9506.91.0030",
      h1: "Stations Multi-Postes de Décompression Vertébrale pour Kinés, Chiropraticiens & Studios Pilates",
      subtitle:
        "Remplacez les tables motorisées à 15 000 $–35 000 $ par des stations Evminov Renforcées 30 cm murales ou autoportantes : zéro électricité, charge nominale 150 kg (330 lbs), encadrement simultané multi-clients et tarifs volume B2B de 5% à 15%.",
      primaryCta: "Configurer le Lot & Estimer le ROI",
      whatsappCta: "Bureau WhatsApp B2B",
      whatsappPrefill:
        "Bonjour le Bureau B2B Evminov ! Je souhaite un devis officiel et une facture proforma pour équiper notre clinique ou studio.",
      photoMainAlt:
        "Stations cliniques Evminov supervisées pour décompression et stabilisation vertébrale",
      photoRoomAlt:
        "Salle multi-stations au Centre Evminov avec planches en pin des Carpates",
      photoCaption:
        "3 à 6 stations murales tiennent sur un seul pan de mur et libèrent 100% de l'espace au sol une fois relevées.",
      kpis: [
        { val: "150 kg", label: "Gamme Pro Large 30 cm", sub: "Jusqu'à 330 lbs & 2,06 m" },
        { val: "0 kWh", label: "Sans Moteur ni Électricité", sub: "Garantie structurelle 1 an" },
        { val: "5%–15%", label: "Remises Volume Partenaire", sub: "Facture pro & douane HTS" },
        { val: "~2 Sem.", label: "Livraison USA & Canada", sub: "Colis suivis <=120 cm" },
      ],
    },
    geoSummary: {
      eyebrow: "Synthèse Économique & Clinique",
      heading: "Pourquoi Choisir 3 à 6 Stations Evminov Plutôt qu'une Table à 25 000 $",
      body: "Un mur de 3 stations Evminov Renforcées 30 cm coûte environ dix fois moins qu'une table motorisée unique, fonctionne sans électricité, libère le sol entre deux séances et permet à un thérapeute ou coach Pilates d'accompagner plusieurs clients simultanément tête haute (8°–35°).",
    },
    verticalsHeading: "Conçu pour 4 Environnements Professionnels",
    verticalsSub:
      "Chaque station inclut coupleurs en acier, kit de fixation murale 16 pouces, Boucle Cervicale de Glisson matelassée, passeport produit et garantie 1 an.",
    verticals: [
      {
        badge: "Physiothérapie & Réadaptation",
        title: "Décharge Axiale Douce + Gainage Profond Actif",
        desc: "Enchaînez une traction douce tête haute (8°–18°) avec des micro-exercices actifs des multifides sans changement de table.",
        spec: "Configuration type : 3–6 Stations 30 cm + Panneaux Muraux Protecteurs",
        linkLabel: "Voir Protocoles Lombaires",
        linkPath: "/conditions/herniated-disc-l4-l5/",
      },
      {
        badge: "Chiropratique & Ostéopathie",
        title: "Préparation Musculaire & Traction Cervicale Sans Vertige",
        desc: "Offrez aux clients hypertendus ou sensibles une décompression apaisante tête en haut avec Boucle de Glisson (8°–12°), sans congestion des tables d'inversion.",
        spec: "Configuration type : 2–4 Stations + Protocole Hygiène Glisson",
        linkLabel: "Guide Traction Cervicale",
        linkPath: "/guides/glisson-loop-cervical-traction-neck-relief-guide/",
      },
      {
        badge: "Studios Pilates, Yoga & Mobilité",
        title: "Esthétique Bois Naturel Assortie aux Reformers",
        desc: "L'aulne ambré naturel et le pin noyer foncé s'intègrent aux studios haut de gamme pour proposer des ateliers d'hygiène vertébrale en petit groupe.",
        spec: "Configuration type : 4–8 Stations ou Supports-Échelle Autoportants",
        linkLabel: "Comparer les Coûts Studio",
        linkPath: "/guides/drx9000-spinal-decompression-therapy-cost-vs-home-board-guide/",
      },
      {
        badge: "Sport de Force & Bien-Être Entreprise",
        title: "Capacité 150 kg pour Athlètes & Espaces Récupération",
        desc: "Conçu pour salles de préparation physique, casernes, programmes vétérans et salles de mobilité en entreprise.",
        spec: "Configuration type : Large 30 cm Noyer Foncé + Housses de Transport",
        linkLabel: "Protocole Athlètes",
        linkPath: "/conditions/athlete-spine-recovery/",
      },
    ],
    comparisonHeading: "Comparatif Capital & Capacité de Prise en Charge",
    comparisonSub:
      "Comparez 3 stations Evminov Large 30 cm face aux tables de décompression motorisées et bancs de traction classiques.",
    comparisonHeaders: [
      "Indicateur Clinique / Studio",
      "Mur 3 Stations Evminov 30 cm",
      "Table Motorisée (15k–35k $)",
      "Banc Traction Standard (3,5k–6,5k $)",
    ],
    comparisonRows: [
      {
        feature: "Investissement Initial",
        evminov: "Réduit — ~1 425–1 482 $ net pour 3 stations (-5% B2B inclus)",
        motorized: "15 000 $ – 35 000 $+ par appareil",
        basicTraction: "3 500 $ – 6 500 $ par banc",
      },
      {
        feature: "Clients Simultanés",
        evminov: "3+ clients supervisés côte à côte",
        motorized: "1 seul client par séance",
        basicTraction: "1 seul client par séance",
      },
      {
        feature: "Emprise au Sol",
        evminov: "~0 pi² perdu une fois rangé à la verticale",
        motorized: "35 – 50 pi² monopolisés en continu",
        basicTraction: "25 – 35 pi² permanents",
      },
      {
        feature: "Approche Biomécanique",
        evminov: "Bois résonant 8°–35° tête haute + renforcement actif + Glisson",
        motorized: "Traction passive motorisée uniquement",
        basicTraction: "Tirage statique sans travail actif cervical",
      },
      {
        feature: "Énergie & Maintenance",
        evminov: "0 kWh, sans moteur, nettoyage simple, garantie 1 an",
        motorized: "Calibration annuelle, vérins & sangles",
        basicTraction: "Entretien mécanique & sellerie",
      },
      {
        feature: "Relais au Domicile",
        evminov: "Le client peut poursuivre chez lui (435–520 $) avec reçu détaillé",
        motorized: "Impossible à domicile",
        basicTraction: "Encombrant pour un appartement",
      },
    ],
    tiersHeading: "Paliers Partenaires Multi-Stations",
    tiersSub: "Cliquez sur un palier pour mettre à jour le calculateur ci-dessous.",
    applyTierLabel: "Sélectionner",
    volumeTiers: [
      {
        stationsLabel: "1 Station",
        presetStations: 1,
        discountBadge: "Tarif Direct",
        discountPercent: 0,
        title: "Test en Salle de Soin",
        desc: "Évaluez une station Renforcée 30 cm avec facture commerciale.",
      },
      {
        stationsLabel: "2–3 Stations",
        presetStations: 3,
        discountBadge: "-5% Partenaire",
        discountPercent: 5,
        title: "Studio Boutique & Cabinet",
        desc: "Créez un mur complet pour 2 à 3 séances simultanées.",
      },
      {
        stationsLabel: "4–6 Stations",
        presetStations: 4,
        discountBadge: "-10% Partenaire",
        discountPercent: 10,
        title: "Pôle Réadaptation & Cours",
        desc: "Idéal pour cours collectifs Pilates dos ou cliniques à fort flux.",
      },
      {
        stationsLabel: "7+ Stations",
        presetStations: 7,
        discountBadge: "-15% Partenaire",
        discountPercent: 15,
        title: "Réseau de Cliniques & Groupes",
        desc: "Production prioritaire, facturation centralisée et suivi dédié.",
      },
    ],
    calculator: {
      eyebrow: "Configurateur B2B & Estimateur Illustratif d'Amortissement",
      heading: "Configurez Votre Lot & Demandez un Devis Officiel",
      subtitle:
        "Ajustez le nombre de stations Renforcées 30 cm (230–245 cm), ajoutez supports sans perçage ou panneaux muraux et recevez votre facture proforma.",
      stationsLabel: "Nombre de Stations Renforcées 30 cm",
      stationsUnitSingular: "station",
      stationsUnitPlural: "stations",
      finishLabel: "Finition du Bois",
      finishLight: "Clair — Aulne Ambré Naturel",
      finishDark: "Foncé — Pin Noyer Foncé",
      addonsLabel: "Options Professionnelles (Par Station)",
      addonWallPanelLabel: "Panneau Mural Protecteur 30 cm 2 Pièces (+175 $ / station)",
      addonWallPanelSub: "Protège peinture et cloisons en usage clinique intensif.",
      addonStandLabel: "Support-Échelle Autoportant 4 Pièces + Crochets (+310 $ / station)",
      addonStandSub: "Zéro perçage — idéal pour vitrines, murs métalliques ou baux commerciaux.",
      paybackHeading: "Simulation Illustrative de Séances Encadrées",
      weeklySessionsLabel: "Séances Encadrées de 20 min / Semaine",
      sessionFeeLabel: "Tarif Illustratif par Séance",
      summaryTitle: "Estimation du Lot B2B",
      baseEquipmentLabel: "Planches Larges 30 cm (Tarif Direct)",
      volumeDiscountLabel: "Remise Volume Partenaire",
      addonsTotalLabel: "Options Sélectionnées",
      netBundleLabel: "Total Net B2B Estimé",
      perStationLabel: "Coût Net par Station",
      estWeeklyRevenueLabel: "Revenu Hebdo Illustratif",
      estPaybackLabel: "Semaines Estimées d'Amortissement",
      weeksSuffix: "semaines",
      paybackDisclaimer:
        "Simulation commerciale illustrative uniquement — ne constitue pas un avis de facturation santé ou assurance. Équipement de bien-être général (HTS 9506.91.0030).",
      formHeading: "Demander une Facture Proforma / Devis B2B",
      formSub:
        "Aucune carte bancaire requise ici. Réponse sous 1 jour ouvré avec devis PDF, justificatifs douaniers/W-9 et calendrier d'expédition (~2 semaines).",
      clinicNameLabel: "Nom de la Clinique ou du Studio",
      clinicNamePlaceholder: "Ex. : Studio Équilibre Montréal",
      contactNameLabel: "Contact & Fonction",
      contactNamePlaceholder: "Ex. : Marc Tremblay, pht / Directeur",
      emailLabel: "Courriel Professionnel (Obligatoire)",
      emailPlaceholder: "direction@votreclinique.ca",
      phoneLabel: "Téléphone ou WhatsApp",
      phonePlaceholder: "+1 (514) 555-0199",
      stateLabel: "Province (Canada) ou État (USA)",
      statePlaceholder: "Ex. : Québec / Ontario / Californie",
      notesLabel: "Type de Mur ou Questions (Optionnel)",
      notesPlaceholder: "Ex. : Cloison métallique, besoin de facture proforma pour comptabilité...",
      submitBtn: "Recevoir le Devis B2B Officiel",
      submittingBtn: "Envoi en cours...",
      whatsappDeskBtn: "Envoyer ce Lot sur WhatsApp B2B",
      successTitle: "Demande de Devis B2B Enregistrée !",
      successBody:
        "Votre configuration a été transmise à notre équipe nord-américaine. Vous recevrez votre devis formel par courriel sous peu ou via WhatsApp ci-dessous.",
      orderRefLabel: "Référence Devis",
      errorInvalidEmail: "Veuillez saisir une adresse courriel valide.",
      errorSubmitFailed: "Échec d'envoi automatique. Utilisez le bouton WhatsApp B2B ou notre courriel.",
    },
    faqsHeading: "Questions Fréquentes Cliniques & Studios",
    faqsSub: "Capacité, pose sans perçage, hygiène entre clients et facturation.",
    faqs: [
      {
        q: "Quelle est la capacité de charge et la garantie pour un usage en studio ?",
        a: "Chaque station Evminov Renforcée 30 cm (230–245 cm) est équipée de coupleurs en acier haute résistance homologués jusqu'à 150 kg (330 lbs) et 2,06 m, avec garantie structurelle de 1 an.",
      },
      {
        q: "Comment fixer les planches dans un local loué ou sur cloison métallique ?",
        a: "Le kit inclus se fixe sur montants bois 16 pouces ou béton/brique. Pour vitrines, cloisons métalliques légères ou baux sans perçage, ajoutez le Support-Échelle 4 Pièces (275 $) et les Crochets (35 $) par station.",
      },
      {
        q: "Comment nettoyer les planches et boucles cervicales entre deux clients ?",
        a: "Le bois verni se nettoie facilement avec des lingettes douces sans javel. Pour les Boucles de Glisson en coton, prévoyez des protections jetables ou une boucle dédiée par patient.",
      },
      {
        q: "Fournissez-vous factures proforma, W-9 et paiements par virement ?",
        a: "Oui. En attendant l'activation du paiement carte en ligne au Nouvel An, les professionnels règlent via facture commerciale détaillée par virement ACH/bancaire ou lien sécurisé.",
      },
      {
        q: "Quel est le délai de livraison vers le Canada et les États-Unis ?",
        a: "Les sections démontables de <=120 cm voyagent par messagerie internationale suivie sans délai de fret sur palette et arrivent en environ 2 semaines.",
      },
      {
        q: "Les clients peuvent-ils commander le même modèle pour la maison ?",
        a: "Oui : ils poursuivent les exercices appris chez vous sur un modèle 2 ou 3 pièces avec reçu détaillé (éligible aux assurances collectives au Canada selon contrat ou HSA/FSA avec LMN aux USA).",
      },
    ],
    bottomCta: {
      heading: "Consulter la Fiche Technique ou Notre Héritage Depuis 1996 ?",
      body: "Découvrez les détails complets du modèle 3 pièces 30 cm ou l'histoire des brevets Evminov.",
      catalogBtn: "Voir Fiche Technique 3 Pièces",
      centersBtn: "Centres & Brevets Depuis 1996",
      complianceNotice:
        "Mention Réglementaire : Les équipements Evminov Spine Systems sont classés comme équipements de bien-être général et de conditionnement dorsal (HTS 9506.91.0030) et ne visent pas à diagnostiquer, traiter, guérir ou prévenir une maladie.",
    },
  },
  de: {
    metaTitle: "Für Physiotherapie, Chiropraktik & Pilates-Studios — B2B Evminov",
    metaDescription:
      "Statten Sie Physiotherapie-Praxen, Chiropraktiker & Pilates-Studios mit verstärkten 30 cm Evminov-Stationen (150 kg) aus. Ohne Strom, 5%–15% B2B-Mengenrabatt.",
    breadcrumbCurrent: "Praxen & Studios",
    hero: {
      badge: "B2B-PARTNERPROGRAMM • SEIT 1996 • HTS 9506.91.0030",
      h1: "Mehrstationen-Wirbelsäulenentlastung für Physiotherapie, Chiropraktik & Pilates-Studios",
      subtitle:
        "Ersetzen Sie 15.000–35.000 $ teure Motor-Traktionsliegen durch wandmontierte oder freistehende verstärkte 30 cm Evminov-Stationen: null Stromverbrauch, 150 kg (330 lbs) Traglast, parallele Betreuung mehrerer Klienten und 5%–15% B2B-Rabatt.",
      primaryCta: "Studio-Paket & ROI Berechnen",
      whatsappCta: "WhatsApp B2B-Team",
      whatsappPrefill:
        "Hallo Evminov B2B-Team! Wir interessieren uns für ein Mehrstationen-Angebot und eine Handelsrechnung für unsere Praxis / unser Studio.",
      photoMainAlt:
        "Supervidierte klinische Evminov-Stationen zur sanften Wirbelsäulenentlastung",
      photoRoomAlt:
        "Mehrstationen-Trainingsraum im Evminov-Zentrum mit Karpaten-Holzpaneelen",
      photoCaption:
        "3–6 wandmontierte Stationen passen an eine einzige Studiowand und geben hochgeklappt 100% Bodenfläche frei.",
      kpis: [
        { val: "150 kg", label: "Verstärktes 30 cm Profi-Profil", sub: "Bis 330 lbs & 2,06 m Körpergröße" },
        { val: "0 kWh", label: "Ohne Motoren oder Strom", sub: "1 Jahr strukturelle Rahmengarantie" },
        { val: "5%–15%", label: "B2B-Staffelrabatte", sub: "Handelsrechnung & W-9 bereit" },
        { val: "~2 Wo.", label: "Kurierversand USA & Kanada", sub: "Paketmaß <=120 cm mit Tracking" },
      ],
    },
    geoSummary: {
      eyebrow: "Klinische Wirtschaftlichkeit im Überblick",
      heading: "Warum Praxen 3–6 Evminov-Stationen Statt Einer 25.000 $-Traktionsliege Wählen",
      body: "Eine 3-Stationen-Evminov-Wand (30 cm verstärkt) kostet nur etwa ein Zehntel einer einzigen motorisierten Dekompressionsliege, benötigt keinen Strom, beansprucht kaum Bodenfläche und ermöglicht es einem Therapeuten oder Trainer, mehrere Klienten gleichzeitig in sicherer Kopf-oben-Position (8°–35°) anzuleiten.",
    },
    verticalsHeading: "Entwickelt für 4 Professionelle Praxis- & Studio-Bereiche",
    verticalsSub:
      "Jede Station enthält Präzisions-Stahlverbinder, Wandhalterungen, gepolsterte Glisson-Nackenschlaufen, Produktpass und 1 Jahr Garantie.",
    verticals: [
      {
        badge: "Physiotherapie & Orthopädische Reha",
        title: "Sanfte Axiale Entlastung + Aktive Tiefenstabilisation",
        desc: "Kombinieren Sie ruhige Kopf-oben-Traktion bei 8°–18° direkt mit gezielten Multifidus-Mikroübungen ohne Gerätewechsel.",
        spec: "Empfohlen: 3–6 Stationen (30 cm) + Wandschutzpaneele",
        linkLabel: "Bandscheiben-Protokolle Ansehen",
        linkPath: "/conditions/herniated-disc-l4-l5/",
      },
      {
        badge: "Chiropraktik & Osteopathie",
        title: "Muskuläre Vorbereitung & Kopf-oben-HWS-Entlastung",
        desc: "Bieten Sie Bluthochdruck- oder Schwindel-sensiblen Klienten entspannte Entlastung inklusive 8°–12° Glisson-Schlaufe ohne Kopfdruck von Inversionsbänken.",
        spec: "Empfohlen: 2–4 Stationen + Hygienisches Glisson-Konzept",
        linkLabel: "HWS-Traktions-Ratgeber",
        linkPath: "/guides/glisson-loop-cervical-traction-neck-relief-guide/",
      },
      {
        badge: "Pilates-, Yoga- & Mobilitätsstudios",
        title: "Edle Naturholz-Optik Passend zu Reformern",
        desc: "Helle Erle oder dunkle Nussbaum-Kiefer fügen sich harmonisch in Boutique-Studios ein — ideal für geführte 20-Minuten-Kleingruppenkurse.",
        spec: "Empfohlen: 4–8 Stationen oder Freistehende Leiterständer (Ohne Bohren)",
        linkLabel: "Studiokosten Vergleichen",
        linkPath: "/guides/drx9000-spinal-decompression-therapy-cost-vs-home-board-guide/",
      },
      {
        badge: "Athletik- & Corporate-Wellness-Räume",
        title: "150 kg Belastbarkeit nach Kreuzheben & Büroalltag",
        desc: "Ausgelegt bis 150 kg und 2,06 m für Kraftsportstudios, Einsatzkräfte und betriebliche Erholungszonen.",
        spec: "Empfohlen: Verstärktes 30 cm Dunkel + Tragetaschen-Set",
        linkLabel: "Athleten-Protokoll Öffnen",
        linkPath: "/conditions/athlete-spine-recovery/",
      },
    ],
    comparisonHeading: "Investitions- & Kapazitätsvergleich für Praxen",
    comparisonSub:
      "Vergleichen Sie 3 verstärkte 30 cm Evminov-Stationen direkt mit motorisierten Liegen und Standard-Traktionsbänken.",
    comparisonHeaders: [
      "Praxis- / Studio-Kriterium",
      "3-Stationen Evminov 30 cm Wand",
      "Motorisierte Liege ($15k–$35k)",
      "Standard-Traktionsbank ($3,5k–$6,5k)",
    ],
    comparisonRows: [
      {
        feature: "Anschaffungskosten",
        evminov: "Gering — ~1.425–1.482 $ netto für 3 Stationen (inkl. -5% B2B)",
        motorized: "15.000 $ – 35.000 $+ für ein Gerät",
        basicTraction: "3.500 $ – 6.500 $ für eine Bank",
      },
      {
        feature: "Gleichzeitige Klienten",
        evminov: "3+ Klienten parallel entlang einer Wand betreubar",
        motorized: "Nur 1 Klient pro Zeitslot",
        basicTraction: "Nur 1 Klient pro Zeitslot",
      },
      {
        feature: "Platzbedarf",
        evminov: "~0 m² Bodenverlust bei senkrechter Parkposition",
        motorized: "3,5 – 5 m² fester Raumbedarf",
        basicTraction: "2,5 – 3,5 m² fester Platz",
      },
      {
        feature: "Biomechanisches Prinzip",
        evminov: "Kopf-oben 8°–35° Federholz + aktives Muskeltraining + Glisson",
        motorized: "Rein passiver Gurtzug",
        basicTraction: "Statischer Zug ohne HWS-Beweglichkeit",
      },
      {
        feature: "Strom & Wartung",
        evminov: "0 kWh Strom, keine Antriebe, leicht abwischbar, 1 Jahr Garantie",
        motorized: "Jährliche Wartung, Motoren & Gurtverschleiß",
        basicTraction: "Hydraulik- & Polsterwartung",
      },
      {
        feature: "Anschlussnutzung zu Hause",
        evminov: "Klienten trainieren zu Hause exakt weiter ($435–$520; US-HSA/FSA mit LMN)",
        motorized: "Für Privathaushalte unrealistisch",
        basicTraction: "Zu sperrig für Wohnungen",
      },
    ],
    tiersHeading: "B2B-Mengenstaffeln für Praxen & Studios",
    tiersSub: "Wählen Sie eine Staffel, um den Paketkonfigurator direkt vorzubefüllen.",
    applyTierLabel: "Im Rechner Wählen",
    volumeTiers: [
      {
        stationsLabel: "1 Station",
        presetStations: 1,
        discountBadge: "Direktpreis",
        discountPercent: 0,
        title: "Test in Einem Behandlungsraum",
        desc: "Testen Sie eine verstärkte 30 cm Station inklusive Handelsrechnung.",
      },
      {
        stationsLabel: "2–3 Stationen",
        presetStations: 3,
        discountBadge: "5% Rabatt",
        discountPercent: 5,
        title: "Boutique-Studio & Praxisraum",
        desc: "Kompakte Entlastungswand für 2–3 parallele Sessions.",
      },
      {
        stationsLabel: "4–6 Stationen",
        presetStations: 4,
        discountBadge: "10% Rabatt",
        discountPercent: 10,
        title: "Gruppenkurse & Reha-Fläche",
        desc: "Ideal für Rücken-Pilates in Kleingruppen und Reha-Bereiche.",
      },
      {
        stationsLabel: "7+ Stationen",
        presetStations: 7,
        discountBadge: "15% Rabatt",
        discountPercent: 15,
        title: "Praxisketten & Firmenfitness",
        desc: "Priorisierte Werkstattfertigung, Sammelrechnung & feste Logistikbetreuung.",
      },
    ],
    calculator: {
      eyebrow: "Interaktiver B2B-Paket- & Amortisationsrechner",
      heading: "Multi-Stations-Bundle Berechnen & Handelsangebot Anfordern",
      subtitle:
        "Stellen Sie Ihre verstärkten 30 cm Stationen (230–245 cm) zusammen, prüfen Sie Ständer ohne Bohren und fordern Sie ein formelles PDF-Angebot an.",
      stationsLabel: "Anzahl Verstärkter 30 cm Stationen",
      stationsUnitSingular: "Station",
      stationsUnitPlural: "Stationen",
      finishLabel: "Holzausführung",
      finishLight: "Hell — Natürliche Erle",
      finishDark: "Dunkel — Dunkle Nussbaum-Kiefer",
      addonsLabel: "Optionale Studio-Erweiterungen (Pro Station)",
      addonWallPanelLabel: "2-teilige Wandschutzplatte 30 cm (+$175 / Station)",
      addonWallPanelSub: "Schützt Wandfarbe & Trockenbau bei hoher Tagesfrequenz.",
      addonStandLabel: "4-teiliger Freistehender Leiterständer + Haken (+$310 / Station)",
      addonStandSub: "Kein Bohren — ideal für Glaswände, Metallständer & Mietflächen.",
      paybackHeading: "Illustrative Einheiten-Amortisation",
      weeklySessionsLabel: "Geführte 20-Min.-Einheiten / Woche",
      sessionFeeLabel: "Illustrativer Satz pro Einheit",
      summaryTitle: "B2B-Angebotsübersicht",
      baseEquipmentLabel: "30 cm Boards (Direkt-Basis)",
      volumeDiscountLabel: "B2B-Mengenrabatt",
      addonsTotalLabel: "Gewählte Optionen",
      netBundleLabel: "Geschätzter B2B-Nettopreis",
      perStationLabel: "Effektivpreis / Station",
      estWeeklyRevenueLabel: "Illustrativer Wochenumsatz",
      estPaybackLabel: "Geschätzte Amortisationszeit",
      weeksSuffix: "Wochen",
      paybackDisclaimer:
        "Rein illustrative Wirtschaftlichkeitsrechnung für Selbstzahler-Wellness-Einheiten — keine Abrechnungsberatung oder Umsatzgarantie. Klassifizierung: Allgemeines Wellness- & Trainingsgerät (HTS 9506.91.0030).",
      formHeading: "Offizielles B2B-Angebot & Handelsrechnung Anfordern",
      formSub:
        "Hier werden keine Kartendaten erfasst. Unser B2B-Team sendet innerhalb eines Werktags ein formelles PDF-Angebot inklusive W-9 (USA) bzw. Zolldaten.",
      clinicNameLabel: "Name der Praxis oder des Studios",
      clinicNamePlaceholder: "z. B. AktivSpine Physiotherapie",
      contactNameLabel: "Ansprechpartner & Position",
      contactNamePlaceholder: "z. B. Anna Weber, Studioleitung",
      emailLabel: "Geschäftliche E-Mail (Pflichtfeld)",
      emailPlaceholder: "leitung@ihrestudio.com",
      phoneLabel: "Telefon oder WhatsApp",
      phonePlaceholder: "+1 (310) 555-0199",
      stateLabel: "US-Bundesstaat / Kanadische Provinz",
      statePlaceholder: "z. B. Kalifornien / Ontario",
      notesLabel: "Wandtyp oder Lieferhinweise (Optional)",
      notesPlaceholder: "z. B. Mietobjekt ohne Bohren, W-9 benötigt...",
      submitBtn: "Formelles B2B-Angebot Anfordern",
      submittingBtn: "Anfrage wird gesendet...",
      whatsappDeskBtn: "Konfiguration per WhatsApp Senden",
      successTitle: "B2B-Angebotsanfrage Übermittelt!",
      successBody:
        "Ihre Konfiguration liegt unserem B2B-Team vor. Wir senden Ihnen zeitnah die formelle Handelsrechnung per E-Mail — oder schreiben Sie uns direkt per WhatsApp.",
      orderRefLabel: "Angebots-Referenz",
      errorInvalidEmail: "Bitte geben Sie eine gültige geschäftliche E-Mail ein.",
      errorSubmitFailed: "Automatischer Versand fehlgeschlagen. Nutzen Sie bitte WhatsApp B2B oder E-Mail.",
    },
    faqsHeading: "Häufige Fragen für Praxen & Studios",
    faqsSub: "Traglast, Mietobjekte ohne Bohren, Hygiene & Rechnungsstellung.",
    faqs: [
      {
        q: "Wie hoch sind Belastbarkeit und Garantie im gewerblichen Einsatz?",
        a: "Jede verstärkte 30 cm Station (230–245 cm) besitzt präzise Stahlverbinder für bis zu 150 kg (330 lbs) und 2,06 m Körpergröße sowie 1 Jahr strukturelle Rahmengarantie.",
      },
      {
        q: "Was tun bei Mieträumen mit Metallständern oder Glasfronten?",
        a: "Nutzen Sie entweder 16-Zoll-Holzständer/Betonanker oder unser freistehendes 4-teiliges Leiterständer-Set ($275) + Einhängehaken ($35) ganz ohne Wandbohrungen.",
      },
      {
        q: "Wie werden Board und Glisson-Schlaufe zwischen Klienten gereinigt?",
        a: "Die versiegelten Holzflächen lassen sich schnell mit chlorfreien Pflegetüchern abwischen. Für die Baumwoll-Glisson-Schlaufen empfehlen sich Einweg-Schutzbezüge oder persönliche Klienten-Schlaufen.",
      },
      {
        q: "Stellen Sie Handelsrechnungen, W-9 und Überweisungsoptionen bereit?",
        a: "Ja. Während Online-Kartenzahlung ab Neujahr folgt, beliefern wir Praxen bereits per offizieller Handelsrechnung, W-9 (USA) und Überweisung/ACH.",
      },
      {
        q: "Wie schnell treffen 3–10 Stationen in den USA oder Kanada ein?",
        a: "Dank zerlegbarer <=120 cm Versandkartons erfolgt der Kurierversand ohne langsame Speditionsrampe in ca. 2 Wochen.",
      },
      {
        q: "Können Klienten dasselbe System für das Heimtraining bestellen?",
        a: "Ja: Klienten erlernen den Winkel bei Ihnen und bestellen anschließend ihr eigenes 2- oder 3-teiliges Board mit detaillierter Quittung (in den USA oft ~25%–35% HSA/FSA-Ersparnis mit ärztlichem LMN).",
      },
    ],
    bottomCta: {
      heading: "Technische Details oder Patente Seit 1996 Prüfen?",
      body: "Sehen Sie sich alle Maße des 3-teiligen 30 cm Modells oder unsere offizielle Methodik-Historie an.",
      catalogBtn: "3-teiliges 30 cm Modell Prüfen",
      centersBtn: "Zentren & Patente Seit 1996",
      complianceNotice:
        "Rechtlicher Hinweis: Evminov Spine Systems Boards sind als allgemeines Wellness- und Wirbelsäulentrainingsgerät (HTS 9506.91.0030) eingestuft und nicht zur Diagnose, Behandlung oder Heilung von Krankheiten bestimmt.",
    },
  },
  uk: {
    metaTitle: "Для Клінік, Реабілітологів та Студій — Оптова Програма Євмінова",
    metaDescription:
      "Оснащуйте клініки фізичної терапії, кабінети вертебрології та студії пілатесу посиленими станціями Євмінова 30 см (до 150 кг). Без електрики, знижки від 5% до 15%.",
    breadcrumbCurrent: "Клінікам і Студіям",
    hero: {
      badge: "ПАРТНЕРСЬКА ПРОГРАМА • З 1996 РОКУ • КЛАСИФІКАЦІЯ 9506.91.0030",
      h1: "Мультистанційні Системи Декомпресії Хребта для Клінік, Реабілітологів і Студій Пілатесу",
      subtitle:
        "Замініть дорогі моторизовані столи за 15 000–35 000 доларів на настінні або підлогові посилені станції Євмінова шириною 30 см: нуль електрики, навантаження до 150 кг, одночасна робота з кількома клієнтами та партнерські знижки від 5% до 15%.",
      primaryCta: "Розрахувати Комплект і Окупність",
      whatsappCta: "Написати у Партнерський Відділ",
      whatsappPrefill:
        "Вітаю! Цікавить оптова пропозиція та інвойс для оснащення клініки або студії станціями Євмінова.",
      photoMainAlt:
        "Клінічні заняття з осьового розвантаження хребта на Профілакторі Євмінова",
      photoRoomAlt:
        "Зал групових та індивідуальних занять у Центрі Євмінова з дерев'яними панелями",
      photoCaption:
        "Від 3 до 6 настінних станцій зручно розміщуються вздовж однієї стіни й звільняють до 100% площі залу після заняття.",
      kpis: [
        { val: "150 кг", label: "Посилений Профіль 30 см", sub: "До 330 фунтів і зросту 206 см" },
        { val: "0 кВт", label: "Без Моторів і Електрики", sub: "Гарантія на конструкцію 1 рік" },
        { val: "5%–15%", label: "Партнерські Знижки", sub: "Офіційний інвойс і документи" },
        { val: "~2 тижні", label: "Доставка по США та Канаді", sub: "Компактні коробки до 120 см" },
      ],
    },
    geoSummary: {
      eyebrow: "Коротке Обґрунтування для Власників",
      heading: "Чому Клініки Ставлять 3–6 Станцій Євмінова Замість Одного Столу за 25 000 Доларів",
      body: "Три посилені станції Євмінова шириною 30 см коштують приблизно в десять разів дешевше за один моторизований декомпресійний стіл, не потребують розеток і сервісу приводів, майже не займають площі біля стіни та дозволяють одному реабілітологу або інструктору пілатесу одночасно вести трьох клієнтів під кутом 8°–35° головою вгору.",
    },
    verticalsHeading: "Рішення для 4 Професійних Напрямів",
    verticalsSub:
      "Кожна станція комплектується сталевими з'єднувачами, настінним кріпленням, м'якою Петлею Гліссона для шиї, паспортом виробу та річною гарантією.",
    verticals: [
      {
        badge: "Фізична Терапія та Ортопедична Реабілітація",
        title: "М'яке Осьове Розвантаження та Активна Стабілізація",
        desc: "Поєднуйте плавну тракцію під кутом 8°–18° головою вгору та мікрорухи для глибоких м'язів спини без перекладання пацієнта на інший тренажер.",
        spec: "Оптимально: 3–6 посилених станцій 30 см + захисні панелі на стіну",
        linkLabel: "Протоколи при Протрузіях",
        linkPath: "/conditions/herniated-disc-l4-l5/",
      },
      {
        badge: "Мануальна Терапія та Остеопатія",
        title: "Підготовка М'язів і Шийна Декомпресія Без Запаморочень",
        desc: "Клієнти з чутливим тиском чи болем у щиколотках комфортно займаються головою вгору разом із Петлею Гліссона під кутом 8°–12° — без приливу крові до голови.",
        spec: "Оптимально: 2–4 станції + індивідуальні чохли на петлю",
        linkLabel: "Гайд по Петлі Гліссона",
        linkPath: "/guides/glisson-loop-cervical-traction-neck-relief-guide/",
      },
      {
        badge: "Студії Пілатесу, Йога-Терапії та Мобільності",
        title: "Натуральне Дерево в Естетиці Преміального Обладнання",
        desc: "Світла карпатська вільха або темна сосна під горіх гармонійно поєднуються з реформерами для проведення міні-групових занять зі здорової постави.",
        spec: "Оптимально: 4–8 станцій або підлогові стійки без свердління",
        linkLabel: "Порівняти з Клінічними Столами",
        linkPath: "/guides/drx9000-spinal-decompression-therapy-cost-vs-home-board-guide/",
      },
      {
        badge: "Спортивна Медицина та Корпоративні Кімнати",
        title: "Запас Міцності до 150 кг для Важких Навантажень",
        desc: "Підходить для залів пауерліфтингу, реабілітації захисників і військових, пожежних частин та офісних зон розвантаження спини.",
        spec: "Оптимально: посилена панель 30 см Темний горіх + захисні сумки",
        linkLabel: "Відновлення Спортсменів",
        linkPath: "/conditions/athlete-spine-recovery/",
      },
    ],
    comparisonHeading: "Порівняння Капіталовкладень і Пропускної Здатності",
    comparisonSub:
      "Оцініть 3 посилені станції Євмінова шириною 30 см поруч із моторизованими столами та механічними лавами.",
    comparisonHeaders: [
      "Показник Роботи Клініки чи Студії",
      "Стінка з 3 Станцій Євмінова 30 см",
      "Моторизований Стіл (15–35 тис.)",
      "Базова Тракційна Лава (3,5–6,5 тис.)",
    ],
    comparisonRows: [
      {
        feature: "Початкові Інвестиції",
        evminov: "Доступно — близько 1425–1482 дол. за 3 станції зі знижкою 5%",
        motorized: "15 000 – 35 000 доларів за один апарат",
        basicTraction: "3 500 – 6 500 доларів за одне місце",
      },
      {
        feature: "Кількість Клієнтів Одночасно",
        evminov: "3 і більше клієнтів під контролем одного фахівця",
        motorized: "Лише 1 клієнт на один сеанс",
        basicTraction: "Лише 1 клієнт на один сеанс",
      },
      {
        feature: "Займана Площа Підлоги",
        evminov: "Майже 0 кв. м у вертикальному положенні біля стіни",
        motorized: "3,5 – 5 кв. м постійного кабінету",
        basicTraction: "2,5 – 3,5 кв. м постійно зайнято",
      },
      {
        feature: "Біомеханіка Впливу",
        evminov: "Пружне дерево під кутом 8°–35° головою вгору + активні м'язи + шия",
        motorized: "Лише пасивне витягування ременями",
        basicTraction: "Статичний натяг без динамічної роботи м'язів",
      },
      {
        feature: "Живлення та Обслуговування",
        evminov: "Нуль електрики, без моторів, просте очищення, гарантія 1 рік",
        motorized: "Щорічне калібрування, ремені та електроніка",
        basicTraction: "Гідравліка та зношення оббивки",
      },
      {
        feature: "Домашнє Продовження для Клієнта",
        evminov: "Клієнт може замовити ідентичну дошку додому за тією ж методикою",
        motorized: "Неможливо придбати додому",
        basicTraction: "Громіздка конструкція для квартири",
      },
    ],
    tiersHeading: "Партнерські Знижки за Кількість Станцій",
    tiersSub: "Натисніть на потрібний пакет, щоб одразу підставити кількість у калькулятор нижче.",
    applyTierLabel: "Обрати в Калькуляторі",
    volumeTiers: [
      {
        stationsLabel: "1 Станція",
        presetStations: 1,
        discountBadge: "Базова Ціна",
        discountPercent: 0,
        title: "Тест в Одному Кабінеті",
        desc: "Замовте одну посилену станцію 30 см з повним пакетом комерційних документів.",
      },
      {
        stationsLabel: "2–3 Станції",
        presetStations: 3,
        discountBadge: "Знижка 5%",
        discountPercent: 5,
        title: "Бутік-Студія або Приватний Кабінет",
        desc: "Повноцінна стіна розвантаження хребта для паралельної роботи з 2–3 клієнтами.",
      },
      {
        stationsLabel: "4–6 Станцій",
        presetStations: 4,
        discountBadge: "Знижка 10%",
        discountPercent: 10,
        title: "Групові Заняття та Реабілітаційний Зал",
        desc: "Оптимально для міні-груп пілатесу, шкіл постави та активних відділень відновлення.",
      },
      {
        stationsLabel: "7+ Станцій",
        presetStations: 7,
        discountBadge: "Знижка 15%",
        discountPercent: 15,
        title: "Мережа Клінік і Корпоративні Проєкти",
        desc: "Пріоритетне виготовлення партії на виробництві та персональний супровід логістики.",
      },
    ],
    calculator: {
      eyebrow: "Інтерактивний Партнерський Калькулятор і Розрахунок Окупності",
      heading: "Розрахуйте Комплект для Клініки та Отримайте Офіційний Інвойс",
      subtitle:
        "Оберіть кількість посилених станцій шириною 30 см (230–245 см), додайте підлогові стійки без свердління чи захисні панелі та надішліть заявку на проформу.",
      stationsLabel: "Кількість Посилених Станцій 30 см",
      stationsUnitSingular: "станція",
      stationsUnitPlural: "станцій",
      finishLabel: "Колір Натуральної Деревини",
      finishLight: "Світла — Тепла Бурштинова Вільха",
      finishDark: "Темна — Сосна Темний Горіх",
      addonsLabel: "Комерційні Аксесуари (на Кожну Станцію)",
      addonWallPanelLabel: "Захисна Панель на Стіну 30 см з 2 Частин (+175 / станція)",
      addonWallPanelSub: "Береже фарбу та стіни кабінету при інтенсивному щоденному потоці клієнтів.",
      addonStandLabel: "Розбірна Підлогова Стійка з 4 Частин + Гачки (+310 / станція)",
      addonStandSub: "Монтаж без свердління стін — для орендованих приміщень, скла чи гіпсокартону на металопрофілі.",
      paybackHeading: "Ілюстративний Розрахунок Окупності Студійних Занять",
      weeklySessionsLabel: "Занять по 20 Хвилин на Тиждень",
      sessionFeeLabel: "Ілюстративна Вартість Одного Заняття",
      summaryTitle: "Кошторис Партнерського Замовлення",
      baseEquipmentLabel: "Посилені Дошки 30 см (Базова Ціна)",
      volumeDiscountLabel: "Партнерська Знижка за Обсяг",
      addonsTotalLabel: "Додаткові Аксесуари",
      netBundleLabel: "Орієнтовна Сума Замовлення",
      perStationLabel: "Чиста Вартість Однієї Станції",
      estWeeklyRevenueLabel: "Орієнтовна Виручка за Тиждень",
      estPaybackLabel: "Орієнтовний Термін Окупності",
      weeksSuffix: "тижнів",
      paybackDisclaimer:
        "Наведено виключно ілюстративний бізнес-розрахунок для приватних оздоровчих занять без гарантії доходу чи страхового відшкодування. Обладнання сертифіковане як товари загального оздоровлення (код 9506.91.0030).",
      formHeading: "Замовити Офіційний Комерційний Інвойс і Документи",
      formSub:
        "Карткові дані тут не збираються. Наш менеджер партнерського відділу відповість протягом 1 робочого дня з офіційною проформою та графіком доставки.",
      clinicNameLabel: "Назва Клініки, Студії або Практики",
      clinicNamePlaceholder: "Наприклад: Студія Здорової Спини Київ-Торонто",
      contactNameLabel: "Контактна Особа та Посада",
      contactNamePlaceholder: "Наприклад: Олена Мороз, керівник студії",
      emailLabel: "Робоча Електронна Пошта (Обов'язково)",
      emailPlaceholder: "director@yourclinic.com",
      phoneLabel: "Телефон або Месенджер",
      phonePlaceholder: "+1 (310) 555-0199",
      stateLabel: "Штат у США або Провінція в Канаді",
      statePlaceholder: "Наприклад: Каліфорнія / Онтаріо",
      notesLabel: "Особливості Стін або Питання (Необов'язково)",
      notesPlaceholder: "Наприклад: бетонна стіна, потрібні документи для бухгалтерії...",
      submitBtn: "Надіслати Запит на Партнерський Інвойс",
      submittingBtn: "Надсилаємо запит...",
      whatsappDeskBtn: "Надіслати Розрахунок у Месенджер",
      successTitle: "Запит на Партнерський Інвойс Прийнято!",
      successBody:
        "Ваш розрахунок передано до відділу партнерської логістики в Північній Америці. Офіційна проформа прийде на пошту найближчим часом.",
      orderRefLabel: "Номер Запиту",
      errorInvalidEmail: "Будь ласка, вкажіть коректну електронну пошту.",
      errorSubmitFailed: "Не вдалося надіслати автоматично. Натисніть кнопку зв'язку у месенджері або напишіть на пошту.",
    },
    faqsHeading: "Часті Питання Власників Клінік і Студій",
    faqsSub: "Надійність конструкції, орендовані приміщення без свердління, гігієна та оплата.",
    faqs: [
      {
        q: "Яке максимальне навантаження та гарантія при комерційному використанні?",
        a: "Кожна посилена станція 30 см (230–245 см) оснащена подвійними сталевими з'єднувачами й розрахована на клієнтів вагою до 150 кг (330 фунтів) і зростом до 206 см із річною гарантією виробника на раму.",
      },
      {
        q: "Як встановити станції в орендованій студії, де заборонено свердлити стіни?",
        a: "Базовий комплект кріпиться у дерев'яні стійки або бетон/цеглу. Для орендованих залів, скляних перегородок або гіпсокартону на металевому профілі додайте розбірну підлогову стійку з 4 частин (275 доларів) і сталеві гачки (35 доларів).",
      },
      {
        q: "Як дезінфікувати поверхню та Петлю Гліссона між клієнтами?",
        a: "Захисне покриття вільхи та сосни легко протирається безхлорними дезінфікуючими серветками після кожного сеансу. Для бавовняних петель Гліссона клініки використовують одноразові підкладні серветки або закріплюють індивідуальну петлю за постійним клієнтом.",
      },
      {
        q: "Чи надаєте ви комерційний рахунок, форму для податкової в США та безготівкову оплату?",
        a: "Так. Поки онлайн-еквайринг готується до запуску з Нового року, клініки безперешкодно оплачують замовлення за офіційним інвойсом банківським переказом із повним пакетом документів.",
      },
      {
        q: "Скільки часу займає доставка 3–10 станцій по США та Канаді?",
        a: "Завдяки пакуванню в розбірні коробки довжиною до 120 см ми відправляємо замовлення швидкими кур'єрськими службами без затримок на палетних складах — доставка займає близько 2 тижнів.",
      },
      {
        q: "Чи можуть пацієнти після курсу в клініці замовити таку ж дошку додому?",
        a: "Так, це одна з головних переваг методики Євмінова: навчившись правильній техніці під наглядом інструктора, клієнт продовжує профілактику вдома на 2- або 3-секційній моделі з офіційним чеком.",
      },
    ],
    bottomCta: {
      heading: "Хочете Перевірити Характеристики Або Історію Патентів із 1996 Року?",
      body: "Ознайомтеся з детальним описом 3-секційної посиленої моделі 30 см або архівом Центрів Євмінова.",
      catalogBtn: "Деталі 3-Секційної Дошки 30 см",
      centersBtn: "Центри та Патенти з 1996",
      complianceNotice:
        "Примітка щодо відповідності: Обладнання Євмінова класифікується як тренажер загального оздоровлення та зміцнення спини (код 9506.91.0030) і не призначене для діагностики чи лікування захворювань. Фахівці визначають індивідуальні навантаження в межах своєї практики.",
    },
  },
  ru: {
    metaTitle: "Для Клиник, Реабилитологов и Студий — Оптовая Программа Евминова",
    metaDescription:
      "Оснащайте клиники физической терапии, кабинеты мануальной терапии и студии пилатеса усиленными станциями Евминова 30 см (до 150 кг). Скидки от 5% до 15%.",
    breadcrumbCurrent: "Клиникам и Студиям",
    hero: {
      badge: "ПАРТНЁРСКАЯ ПРОГРАММА • С 1996 ГОДА • КЛАССИФИКАЦИЯ 9506.91.0030",
      h1: "Мультистанционные Системы Декомпрессии Позвоночника для Клиник, Мануальных Терапевтов и Студий Пилатеса",
      subtitle:
        "Замените дорогостоящие моторизованные столы за 15 000–35 000 долларов на настенные или напольные усиленные станции Евминова шириной 30 см: без электричества, нагрузка до 150 кг, одновременная работа с несколькими клиентами и партнёрские скидки от 5% до 15%.",
      primaryCta: "Рассчитать Комплект и Окупаемость",
      whatsappCta: "Написать в Партнёрский Отдел",
      whatsappPrefill:
        "Здравствуйте! Интересует оптовое предложение и коммерческий инвойс для оснащения клиники или студии станциями Евминова.",
      photoMainAlt:
        "Клинические занятия по осевой разгрузке позвоночника на Профилакторе Евминова",
      photoRoomAlt:
        "Зал групповых и индивидуальных занятий в Центре Евминова с деревянными панелями",
      photoCaption:
        "От 3 до 6 настенных станций легко размещаются вдоль одной стены и освобождают до 100% площади зала после занятия.",
      kpis: [
        { val: "150 кг", label: "Усиленный Профиль 30 см", sub: "До 330 фунтов и роста 206 см" },
        { val: "0 кВт", label: "Без Моторов и Электричества", sub: "Гарантия на конструкцию 1 год" },
        { val: "5%–15%", label: "Партнёрские Скидки", sub: "Официальный инвойс и документы" },
        { val: "~2 недели", label: "Доставка по США и Канаде", sub: "Компактные коробки до 120 см" },
      ],
    },
    geoSummary: {
      eyebrow: "Краткое Экономическое Обоснование",
      heading: "Почему Клиники Выбирают 3–6 Станций Евминова Вместо Одного Стола за 25 000 Долларов",
      body: "Три усиленные станции Евминова шириной 30 см обходятся примерно в десять раз дешевле одного моторизованного декомпрессионного стола, не требуют розеток и сервиса приводов, практически не занимают места у стены и позволяют одному специалисту или тренеру пилатеса вести сразу трёх клиентов под мягким углом 8°–35° головой вверх.",
    },
    verticalsHeading: "Решения для 4 Профессиональных Направлений",
    verticalsSub:
      "Каждая станция укомплектована стальными соединителями, настенным креплением, мягкой Петлёй Глиссона для шеи, паспортом изделия и годовой гарантией.",
    verticals: [
      {
        badge: "Физическая Терапия и Ортопедия",
        title: "Мягкая Осевая Разгрузка и Активная Стабилизация",
        desc: "Сочетайте плавную тракцию под углом 8°–18° головой вверх с микродвижениями для глубоких мышц спины без перекладывания клиента.",
        spec: "Оптимально: 3–6 усиленных станций 30 см + защитные панели на стену",
        linkLabel: "Протоколы при Протрузиях",
        linkPath: "/conditions/herniated-disc-l4-l5/",
      },
      {
        badge: "Мануальная Терапия и Остеопатия",
        title: "Подготовка Мышц и Шейная Разгрузка Без Головокружений",
        desc: "Клиенты с чувствительным давлением или болями в голеностопе комфортно занимаются головой вверх с Петлёй Глиссона (8°–12°) без прилива крови к голове.",
        spec: "Оптимально: 2–4 станции + сменные чехлы на петлю",
        linkLabel: "Гайд по Петле Глиссона",
        linkPath: "/guides/glisson-loop-cervical-traction-neck-relief-guide/",
      },
      {
        badge: "Студии Пилатеса, Йога-Терапии и Мобильности",
        title: "Натуральное Дерево в Эстетике Премиального Зала",
        desc: "Светлая карпатская ольха и тёмная сосна гармонично сочетаются с реформерами для проведения мини-групповых занятий по осанке.",
        spec: "Оптимально: 4–8 станций или напольные стойки без сверления",
        linkLabel: "Сравнить со Столами",
        linkPath: "/guides/drx9000-spinal-decompression-therapy-cost-vs-home-board-guide/",
      },
      {
        badge: "Спортивное Восстановление и Корпоративные Залы",
        title: "Запас Прочности до 150 кг для Тяжёлых Нагрузок",
        desc: "Подходит для силовых залов, реабилитации атлетов и офисных комнат снятия напряжения после рабочего дня.",
        spec: "Оптимально: усиленная панель 30 см Тёмный орех + защитные сумки",
        linkLabel: "Протокол для Спортсменов",
        linkPath: "/conditions/athlete-spine-recovery/",
      },
    ],
    comparisonHeading: "Сравнение Инвестиций и Пропускной Способности",
    comparisonSub:
      "Сравните 3 усиленные станции Евминова 30 см с моторизованными столами и механическими скамьями.",
    comparisonHeaders: [
      "Показатель Работы Клиники или Студии",
      "Стенка из 3 Станций Евминова 30 см",
      "Моторизованный Стол (15–35 тыс.)",
      "Базовая Тракционная Скамья (3,5–6,5 тыс.)",
    ],
    comparisonRows: [
      {
        feature: "Стартовые Вложения",
        evminov: "Доступно — около 1425–1482 долл. за 3 станции со скидкой 5%",
        motorized: "15 000 – 35 000 долларов за один аппарат",
        basicTraction: "3 500 – 6 500 долларов за одно место",
      },
      {
        feature: "Одновременных Клиентов",
        evminov: "3 и более клиентов под присмотром одного специалиста",
        motorized: "Только 1 клиент на сеанс",
        basicTraction: "Только 1 клиент на сеанс",
      },
      {
        feature: "Площадь в Зале",
        evminov: "Около 0 кв. м в вертикальном положении у стены",
        motorized: "3,5 – 5 кв. м постоянного кабинета",
        basicTraction: "2,5 – 3,5 кв. м постоянно занято",
      },
      {
        feature: "Биомеханика Воздействия",
        evminov: "Гибкое дерево 8°–35° головой вверх + активные мышцы + шея",
        motorized: "Только пассивное вытяжение ремнями",
        basicTraction: "Статичное натяжение без динамики",
      },
      {
        feature: "Электричество и Обслуживание",
        evminov: "Ноль электричества, без моторов, лёгкая уборка, гарантия 1 год",
        motorized: "Ежегодная калибровка, ремни и приводы",
        basicTraction: "Гидравлика и износ обивки",
      },
      {
        feature: "Продолжение Занятий Дома",
        evminov: "Клиент может заказать аналогичную доску домой с полным чеком",
        motorized: "Невозможно для домашнего формата",
        basicTraction: "Слишком громоздка для квартиры",
      },
    ],
    tiersHeading: "Партнёрские Скидки за Объём Заказа",
    tiersSub: "Нажмите на нужный уровень, чтобы сразу подставить количество станций в калькулятор.",
    applyTierLabel: "Выбрать в Калькуляторе",
    volumeTiers: [
      {
        stationsLabel: "1 Станция",
        presetStations: 1,
        discountBadge: "Базовая Цена",
        discountPercent: 0,
        title: "Тест в Одном Кабинете",
        desc: "Закажите одну усиленную станцию 30 см с полным пакетом коммерческих документов.",
      },
      {
        stationsLabel: "2–3 Станции",
        presetStations: 3,
        discountBadge: "Скидка 5%",
        discountPercent: 5,
        title: "Бутик-Студия или Частный Кабинет",
        desc: "Полноценная стена разгрузки спины для параллельной работы с 2–3 клиентами.",
      },
      {
        stationsLabel: "4–6 Станций",
        presetStations: 4,
        discountBadge: "Скидка 10%",
        discountPercent: 10,
        title: "Групповые Занятия и Зал Реабилитации",
        desc: "Оптимально для мини-групп пилатеса, коррекции осанки и восстановительных центров.",
      },
      {
        stationsLabel: "7+ Станций",
        presetStations: 7,
        discountBadge: "Скидка 15%",
        discountPercent: 15,
        title: "Сеть Клиник и Корпоративные Заказы",
        desc: "Приоритетное изготовление на производстве и персональный логистический менеджер.",
      },
    ],
    calculator: {
      eyebrow: "Интерактивный Партнёрский Калькулятор и Оценка Окупаемости",
      heading: "Рассчитайте Комплект для Клиники и Запросите Официальный Инвойс",
      subtitle:
        "Выберите количество усиленных станций 30 см (230–245 см), при необходимости добавьте стойки без сверления или настенные панели и отправьте заявку.",
      stationsLabel: "Количество Усиленных Станций 30 см",
      stationsUnitSingular: "станция",
      stationsUnitPlural: "станций",
      finishLabel: "Оттенок Натурального Дерева",
      finishLight: "Светлая — Тёплая Янтарная Ольха",
      finishDark: "Тёмная — Сосна Тёмный Орех",
      addonsLabel: "Дополнительные Опции (На Каждую Станцию)",
      addonWallPanelLabel: "Защитная Панель на Стену 30 см из 2 Частей (+175 / станция)",
      addonWallPanelSub: "Защищает краску и стены кабинета при ежедневной поточной работе.",
      addonStandLabel: "Разборная Напольная Стойка из 4 Частей + Крючки (+310 / станция)",
      addonStandSub: "Установка без сверления стен — для арендованных студий, стекла и металлопрофиля.",
      paybackHeading: "Иллюстративный Расчёт Окупаемости Студийных Занятий",
      weeklySessionsLabel: "Занятий по 20 Минут в Неделю",
      sessionFeeLabel: "Иллюстративная Стоимость Занятия",
      summaryTitle: "Смета Партнёрского Комплекта",
      baseEquipmentLabel: "Усиленные Доски 30 см (Базовая Цена)",
      volumeDiscountLabel: "Партнёрская Скидка за Объём",
      addonsTotalLabel: "Выбранные Опции",
      netBundleLabel: "Ориентировочная Итоговая Сумма",
      perStationLabel: "Чистая Стоимость Одной Станции",
      estWeeklyRevenueLabel: "Иллюстративная Выручка в Неделю",
      estPaybackLabel: "Ориентировочный Срок Окупаемости",
      weeksSuffix: "недель",
      paybackDisclaimer:
        "Приведён исключительно иллюстративный бизнес-расчёт для частных оздоровительных занятий без гарантии выручки или страховых выплат. Оборудование относится к товарам общего оздоровления (код 9506.91.0030).",
      formHeading: "Запросить Официальный Коммерческий Инвойс и Документы",
      formSub:
        "Данные банковских карт здесь не собираются. Менеджер партнёрского отдела ответит в течение 1 рабочего дня с официальным расчётом и графиком доставки.",
      clinicNameLabel: "Название Клиники, Студии или Практики",
      clinicNamePlaceholder: "Например: Студия Спины и Пилатеса",
      contactNameLabel: "Контактное Лицо и Должность",
      contactNamePlaceholder: "Например: Елена Мороз, руководитель",
      emailLabel: "Рабочая Электронная Почта (Обязательно)",
      emailPlaceholder: "director@yourclinic.com",
      phoneLabel: "Телефон или Мессенджер",
      phonePlaceholder: "+1 (310) 555-0199",
      stateLabel: "Штат в США или Провинция в Канаде",
      statePlaceholder: "Например: Калифорния / Онтарио",
      notesLabel: "Тип Стен или Вопросы (Необязательно)",
      notesPlaceholder: "Например: бетонная стена, нужны документы для бухгалтерии...",
      submitBtn: "Отправить Запрос на Инвойс",
      submittingBtn: "Отправляем запрос...",
      whatsappDeskBtn: "Отправить Расчёт в Мессенджер",
      successTitle: "Запрос на Партнёрский Инвойс Зарегистрирован!",
      successBody:
        "Ваш расчёт передан в отдел оптовых отгрузок в Северной Америке. Официальный счёт придёт на почту в ближайшее время.",
      orderRefLabel: "Номер Запроса",
      errorInvalidEmail: "Пожалуйста, введите корректную электронную почту.",
      errorSubmitFailed: "Не удалось отправить автоматически. Воспользуйтесь кнопкой мессенджера или напишите на почту.",
    },
    faqsHeading: "Частые Вопросы Владельцев Клиник и Студий",
    faqsSub: "Допустимая нагрузка, установка без сверления, гигиена и оплата.",
    faqs: [
      {
        q: "Какая максимальная нагрузка и гарантия действуют для студий?",
        a: "Каждая усиленная станция 30 см (230–245 см) оснащена двойными стальными соединителями и рассчитана на нагрузку до 150 кг (330 фунтов) и рост до 206 см с годовой гарантией на конструкцию.",
      },
      {
        q: "Как установить доски в арендованном зале без сверления стен?",
        a: "Стандартный крепёж монтируется на деревянные стойки или бетон/кирпич. Если стены арендованного зала нельзя сверлить, добавьте разборную напольную стойку из 4 частей (275 долларов) и стальные крючки (35 долларов).",
      },
      {
        q: "Как обрабатывать доску и Петлю Глиссона между клиентами?",
        a: "Защитное покрытие ольхи и сосны быстро очищается бесспиртовыми или бесхлорными салфетками для фитнес-оборудования. Для хлопковых петель Глиссона удобно использовать одноразовые салфетки или личную петлю на клиента.",
      },
      {
        q: "Предоставляете ли вы официальный инвойс, налоговые формы и безналичную оплату?",
        a: "Да. Пока онлайн-оплата картой готовится к запуску с Нового года, клиники свободно оплачивают заказы по официальному счёту банковским переводом со всеми документами.",
      },
      {
        q: "Сколько времени занимает доставка 3–10 станций по США и Канаде?",
        a: "Упаковка в разборные коробки длиной до 120 см позволяет отправлять партии быстрыми курьерскими службами примерно за 2 недели без задержек паллетного фрахта.",
      },
      {
        q: "Могут ли клиенты после курса занятий приобрести такую же доску домой?",
        a: "Да: освоив правильную технику в зале, клиент может заказать 2- или 3-секционную модель домой с официальным чеком для компенсации по доступным программам.",
      },
    ],
    bottomCta: {
      heading: "Хотите Изучить Характеристики или Архив Патентов с 1996 Года?",
      body: "Посмотрите подробное описание 3-секционной усиленной модели 30 см или историю методики Евминова.",
      catalogBtn: "Детали 3-Секционной Доски 30 см",
      centersBtn: "Центры и Патенты с 1996",
      complianceNotice:
        "Уведомление о соответствии: Оборудование Евминова классифицируется как тренажёр общего оздоровления и укрепления спины (код 9506.91.0030) и не предназначено для диагностики или лечения заболеваний.",
    },
  },
};
