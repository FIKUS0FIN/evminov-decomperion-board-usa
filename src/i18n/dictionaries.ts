import { Locale } from "@/i18n/types";

export interface SiteDictionary {
  meta: {
    siteTitle: string;
    siteDescription: string;
    keywords: string[];
  };
  nav: {
    products: string;
    calculator: string;
    compare: string;
    conditions: string;
    guides: string;
    shipping: string;
    centers: string;
    orderNow: string;
    callUs: string;
    skipToContent: string;
    hsaToggleLabel: string;
    hsaToggleActive: string;
    hsaToggleHint: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustItems: string[];
    startingFrom: string;
    klarnaNote: string;
    hsaSavedNote: string;
  };
  sections: {
    calculatorTitle: string;
    calculatorSubtitle: string;
    catalogTitle: string;
    catalogSubtitle: string;
    compareTitle: string;
    compareSubtitle: string;
    conditionsTitle: string;
    conditionsSubtitle: string;
    videosTitle: string;
    videosSubtitle: string;
    galleryTitle: string;
    gallerySubtitle: string;
    patentsTitle: string;
    patentsSubtitle: string;
    shippingTitle: string;
    shippingSubtitle: string;
    guidesTitle: string;
    guidesSubtitle: string;
    faqTitle: string;
    faqSubtitle: string;
    finalCtaTitle: string;
    finalCtaSubtitle: string;
    finalCtaButton: string;
  };
  productUi: {
    directPriceLabel: string;
    usExpressLabel: string;
    hsaEstimatedLabel: string;
    klarnaLabel: string;
    viewDetails: string;
    orderModel: string;
    addStand: string;
    weightLimit: string;
    heightLimit: string;
    material: string;
    inclineRange: string;
    storageProfile: string;
    whatsIncluded: string;
    finishes: string;
    specsTitle: string;
    trialBadge: string;
  };
  calculatorUi: {
    goalLabel: string;
    weightLabel: string;
    heightLabel: string;
    angleLabel: string;
    portableLabel: string;
    netTraction: string;
    bodyweightPull: string;
    discUnloading: string;
    recommendedRange: string;
    recommendedBoard: string;
    dailyDuration: string;
    ctaOrderPrefilled: string;
    emailProtocolTitle: string;
    emailProtocolPlaceholder: string;
    emailProtocolButton: string;
    emailProtocolSuccess: string;
  };
  orderUi: {
    pageTitle: string;
    pageSubtitle: string;
    step1: string;
    step2: string;
    step3: string;
    selectModel: string;
    selectFinish: string;
    selectShipping: string;
    shippingDirect: string;
    shippingDirectDesc: string;
    shippingExpress: string;
    shippingExpressDesc: string;
    addFreeStand: string;
    addFreeStandDesc: string;
    hsaCheckbox: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    stateLabel: string;
    addressLabel: string;
    notesLabel: string;
    voiceDictate: string;
    voiceRecording: string;
    submitReservation: string;
    submitting: string;
    stripeNotice: string;
    successTitle: string;
    successBody: string;
    orderRef: string;
    summaryTitle: string;
    totalLabel: string;
    estimatedHsaLabel: string;
    nextStep: string;
    prevStep: string;
  };
  chatUi: {
    buttonLabel: string;
    title: string;
    subtitle: string;
    placeholder: string;
    welcome: string;
    photoHint: string;
    send: string;
    disclaimer: string;
  };
  consentUi: {
    title: string;
    body: string;
    acceptAll: string;
    necessaryOnly: string;
    customize: string;
    save: string;
    analyticsLabel: string;
    marketingLabel: string;
  };
  footer: {
    tagline: string;
    shopHeading: string;
    resourcesHeading: string;
    legalHeading: string;
    contactHeading: string;
    privacy: string;
    terms: string;
    shippingReturns: string;
    wellnessDisclaimer: string;
    welcomeQr: string;
    cookieSettings: string;
    wellnessNotice: string;
    rights: string;
  };
  mobileDock: {
    chat: string;
    calc: string;
    order: string;
    call: string;
  };
}

const en: SiteDictionary = {
  meta: {
    siteTitle: "Evminov Spine Systems USA | Inclined Spine Decompression Board",
    siteDescription:
      "Authentic handcrafted Carpathian pine Evminov spine decompression boards. Safer low-angle alternative to inversion tables (8°–35°). Direct US delivery, 60-day home trial, HSA/FSA receipt.",
    keywords: [
      "evminov board usa",
      "spinal decompression at home",
      "inversion table alternative",
      "inclined spine traction board",
      "back stretcher device for home",
      "hsa fsa spine equipment",
    ],
  },
  nav: {
    products: "Boards",
    calculator: "Angle Calculator",
    compare: "Compare",
    conditions: "Spine Goals",
    guides: "Guides",
    shipping: "US Shipping",
    centers: "Heritage 1996",
    orderNow: "Order Board",
    callUs: "Call US Hub",
    skipToContent: "Skip to main content",
    hsaToggleLabel: "HSA/FSA ~30% Tax Savings",
    hsaToggleActive: "Showing Est. HSA/FSA Net Price (-30%)",
    hsaToggleHint: "Pre-tax estimate with provider LMN",
  },
  hero: {
    badge: "Patented Since 1996 • Ships to All 50 US States, Canada & EU",
    title: "Controlled Inclined Spine Decompression",
    titleHighlight: "Without Hanging Upside Down",
    subtitle:
      "Handcrafted resonant Carpathian pine boards engineered for gentle 8°–35° spinal unloading and deep paraspinal muscle conditioning in 10 minutes a day. Zero blood rush, zero ankle strain.",
    ctaPrimary: "Configure & Order Board",
    ctaSecondary: "Calculate Your Angle",
    trustItems: [
      "US Patent 6,869,387 B2 & EU Patent EP 1 038 512 B1",
      "Glisson Cervical Loop Included Free",
      "60-Day Home Trial & 10-Year Frame Warranty",
      "Itemized Receipt for HSA / FSA Pre-Tax Claims",
    ],
    startingFrom: "Starting from",
    klarnaNote: "4 interest-free bi-weekly payments from",
    hsaSavedNote: "Est. net after ~30% HSA/FSA tax savings",
  },
  sections: {
    calculatorTitle: "Interactive Biomechanical Angle & Board Sizing Calculator",
    calculatorSubtitle:
      "Enter your weight, height, and goal to calculate exact traction force (F = W × sin θ − friction), safe starting incline, and ideal Evminov board size.",
    catalogTitle: "Official Evminov Spine Decompression Lineup",
    catalogSubtitle:
      "Every board is handcrafted from kiln-dried Carpathian pine or Ukrainian alder and includes the Glisson neck loop, 16\" US wood-stud wall mounting kit, and digital onboarding guide.",
    compareTitle: "Evminov Board vs. Inversion Tables, Back Stretchers & Clinics",
    compareSubtitle:
      "See why spine specialists and strength athletes choose supported low-angle traction (8°–35°) over hanging upside down at 90°.",
    conditionsTitle: "Targeted Spine Wellness Programs by Goal",
    conditionsSubtitle:
      "Explore tailored low-angle decompression routines for lower back stiffness, sciatica comfort, athletic recovery, desk posture, and youth alignment.",
    videosTitle: "Authentic Evminov Method & 16\" Wall Mounting Videos",
    videosSubtitle:
      "Watch real demonstrations from the Evminov USA channel (@evminoviusa). Videos load on click for instant page speed.",
    galleryTitle: "20 Authentic Evminov Exercise Protocols",
    gallerySubtitle:
      "Low-amplitude kinetic movements performed while the spine is supported and unloaded along the flexing wooden deck.",
    patentsTitle: "30 Years of Heritage & International Patents (Since 1996)",
    patentsSubtitle:
      "Protected across the United States, European Union, WIPO/PCT, and Ukraine — engineered by Vyacheslav Evminov for lifelong daily spine hygiene.",
    shippingTitle: "Direct Insured Shipping to All 50 US States & Worldwide",
    shippingSubtitle:
      "Dispatched from our Glendale, California operations hub (1–4 business days US express) or direct from our European workshop to the US, Canada, EU, and Ukraine.",
    guidesTitle: "Evidence-Informed Spine Education & Guides",
    guidesSubtitle:
      "Deep biomechanical breakdowns covering inversion table safety, disc hydration mechanics, lifter recovery, desk posture, and home installation.",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle:
      "Clear answers on 16\" drywall wood-stud installation, renter stands, HSA/FSA itemized receipts, shipping timelines, and contraindications.",
    finalCtaTitle: "Ready for 10 Minutes of Daily Spine Relief at Home?",
    finalCtaSubtitle:
      "Configure your Evminov board with instant sizing, choose direct or California express dispatch, and receive an itemized HSA/FSA-ready receipt.",
    finalCtaButton: "Reserve Your Evminov Board",
  },
  productUi: {
    directPriceLabel: "Direct Workshop Delivery",
    usExpressLabel: "California Warehouse Express (1–4 Days)",
    hsaEstimatedLabel: "Est. HSA/FSA Net (-30%)",
    klarnaLabel: "4 bi-weekly payments of",
    viewDetails: "Full Specs & Gallery",
    orderModel: "Configure & Order",
    addStand: "Add No-Drill Renter Stand",
    weightLimit: "Weight Capacity",
    heightLimit: "User Height",
    material: "Timber",
    inclineRange: "Incline Range",
    storageProfile: "Storage Footprint",
    whatsIncluded: "Included in the Box",
    finishes: "Available Finishes",
    specsTitle: "Technical Specifications",
    trialBadge: "60-Day Home Trial • 10-Yr Frame Warranty",
  },
  calculatorUi: {
    goalLabel: "Primary Spine Goal",
    weightLabel: "Body Weight",
    heightLabel: "User Height",
    angleLabel: "Incline Angle",
    portableLabel: "Need compact folding / travel storage?",
    netTraction: "Net Axial Traction",
    bodyweightPull: "Bodyweight Ratio",
    discUnloading: "Axial Load Reduction",
    recommendedRange: "Recommended Angle Window",
    recommendedBoard: "Best-Fit Evminov Model",
    dailyDuration: "Suggested Daily Session",
    ctaOrderPrefilled: "Order This Exact Setup",
    emailProtocolTitle: "Email My Custom Angle Plan + 16\" Stud Mounting Checklist",
    emailProtocolPlaceholder: "you@example.com",
    emailProtocolButton: "Send Free Plan",
    emailProtocolSuccess: "Sent! Check your inbox for your personalized Evminov protocol.",
  },
  orderUi: {
    pageTitle: "Configure & Reserve Your Evminov Board",
    pageSubtitle:
      "Zero upfront risk. Reserve your board directly with our Glendale, California team — we confirm stock, exact UPS/FedEx shipping, and send your secure payment invoice or HSA/FSA documentation.",
    step1: "1. Choose Board",
    step2: "2. Shipping & Extras",
    step3: "3. Delivery Details",
    selectModel: "Select Board Model",
    selectFinish: "Select Wood Finish",
    selectShipping: "Fulfillment Speed",
    shippingDirect: "Direct Workshop Shipping (10–16 business days)",
    shippingDirectDesc: "Best value — shipped direct from our master woodworking workshop.",
    shippingExpress: "Glendale, CA US Warehouse Express (1–4 business days)",
    shippingExpressDesc: "Fast insured UPS/FedEx dispatch from California to all 50 US states.",
    addFreeStand: "Add Demountable Free-Standing Ladder Stand (+$275)",
    addFreeStandDesc: "Zero wall drilling required — ideal for apartments and rentals.",
    hsaCheckbox: "Include itemized wellness equipment invoice & LMN guide for HSA/FSA claim",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number (US / International)",
    stateLabel: "US State / Country",
    addressLabel: "City & ZIP / Delivery Address",
    notesLabel: "Height, Weight, or Questions (Optional)",
    voiceDictate: "Dictate by Voice",
    voiceRecording: "Recording… Click to Stop",
    submitReservation: "Submit Order & Request Payment Link",
    submitting: "Sending order…",
    stripeNotice:
      "Direct online card checkout (Stripe, Apple Pay, Google Pay, Klarna) is being finalized for our US LLC entity. Submitting this form reserves your selected unit immediately and emails you a confirmation + payment link from orders@evminovusa.com.",
    successTitle: "Your Evminov Reservation Is Confirmed!",
    successBody:
      "We sent a confirmation summary to your email and alerted our Glendale, CA fulfillment team. Expect shipping verification and your payment link within 1 business day.",
    orderRef: "Reference ID",
    summaryTitle: "Order Summary",
    totalLabel: "Estimated Total",
    estimatedHsaLabel: "Est. Net After ~30% HSA/FSA",
    nextStep: "Continue",
    prevStep: "Back",
  },
  chatUi: {
    buttonLabel: "Ask Spine Concierge",
    title: "Evminov AI Spine Concierge",
    subtitle: "Board sizing, 16\" stud mounting (upload wall photo!), HSA/FSA & angles",
    placeholder: "Ask about board sizing, wall mounting, or inversion alternatives…",
    welcome:
      "Hi! I am the Evminov Spine Concierge. Ask me about choosing Standard vs. Wide vs. Folding boards, mounting on 16\" US drywall studs (you can even upload a photo of your wall!), or HSA/FSA savings.",
    photoHint: "Attach wall or room photo",
    send: "Send",
    disclaimer: "General wellness guidance only — not medical diagnosis.",
  },
  consentUi: {
    title: "Privacy & Cookie Preferences",
    body: "We use essential cookies to keep your order configuration working, plus optional analytics to improve site speed and user experience. You can change your choice anytime.",
    acceptAll: "Accept All",
    necessaryOnly: "Necessary Only",
    customize: "Customize",
    save: "Save Preferences",
    analyticsLabel: "Analytics (GA4 & Microsoft Clarity)",
    marketingLabel: "Marketing & Ad Measurement",
  },
  footer: {
    tagline:
      "Authentic patented Evminov inclined spine decompression boards. Engineered since 1996 for safe daily spine wellness across the US, Canada, Europe, and Ukraine.",
    shopHeading: "Boards & Tools",
    resourcesHeading: "Guides & Comparisons",
    legalHeading: "Policies & Safety",
    contactHeading: "US Operations Hub",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    shippingReturns: "Shipping & 60-Day Returns",
    wellnessDisclaimer: "Wellness & Safety Disclaimer",
    welcomeQr: "Owner Setup & Review Hub",
    cookieSettings: "Cookie Settings",
    wellnessNotice:
      "General Wellness Equipment Notice: Evminov Spine Systems boards are classified as General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030). Information on this website is for educational purposes and is not intended to diagnose, treat, cure, or prevent any disease. Consult a licensed physician before starting any new exercise or traction routine, especially if you have acute spinal trauma or severe medical conditions.",
    rights: "All rights reserved.",
  },
  mobileDock: {
    chat: "AI Help",
    calc: "Angle",
    order: "Order",
    call: "Call",
  },
};

const es: SiteDictionary = {
  ...en,
  meta: {
    siteTitle: "Evminov Spine Systems EE. UU. | Tabla de Descompresión Espinal",
    siteDescription:
      "Tablas Evminov originales de pino de los Cárpatos para descompresión espinal en casa (8°–35°). Alternativa segura a las mesas de inversión. Envío a los 50 estados de EE. UU. y garantía de 60 días.",
    keywords: [
      "tabla evminov estados unidos",
      "descompresion espinal en casa",
      "alternativa a mesa de inversion",
      "dolor de espalda baja ciatica",
      "equipo columna vertebral hsa fsa",
    ],
  },
  nav: {
    products: "Tablas",
    calculator: "Calculadora",
    compare: "Comparar",
    conditions: "Objetivos",
    guides: "Guías",
    shipping: "Envíos EE. UU.",
    centers: "Historia 1996",
    orderNow: "Pedir Tabla",
    callUs: "Llamar",
    skipToContent: "Saltar al contenido principal",
    hsaToggleLabel: "Ahorro HSA/FSA ~30%",
    hsaToggleActive: "Mostrando precio neto est. HSA/FSA (-30%)",
    hsaToggleHint: "Estimación antes de impuestos con carta LMN",
  },
  hero: {
    badge: "Patentada desde 1996 • Envío a los 50 Estados de EE. UU., Canadá y UE",
    title: "Descompresión Espinal Inclinada Segura",
    titleHighlight: "Sin Colgar Boca Abajo",
    subtitle:
      "Tablas artesanales de pino resonante de los Cárpatos diseñadas para descarga espinal suave de 8°–35° y fortalecimiento profundo en solo 10 minutos al día. Sin presión en la cabeza ni en los tobillos.",
    ctaPrimary: "Configurar y Pedir",
    ctaSecondary: "Calcular Tu Ángulo",
    trustItems: [
      "Patente EE. UU. 6,869,387 B2 y Patente UE EP 1 038 512 B1",
      "Arnés Cervical Glisson Incluido Gratis",
      "Prueba en Casa de 60 Días y Garantía de 10 Años",
      "Factura Detallada para Reembolso HSA / FSA",
    ],
    startingFrom: "Desde",
    klarnaNote: "4 pagos quincenales sin intereses desde",
    hsaSavedNote: "Neto estimado tras ~30% ahorro fiscal HSA/FSA",
  },
  sections: {
    calculatorTitle: "Calculadora Biomecánica de Ángulo y Tamaño de Tabla",
    calculatorSubtitle:
      "Ingresa tu peso, estatura y objetivo para calcular la fuerza de tracción exacta, el ángulo inicial seguro y el modelo Evminov ideal.",
    catalogTitle: "Catálogo Oficial de Tablas Evminov",
    catalogSubtitle:
      "Cada tabla se fabrica en pino de los Cárpatos o aliso seleccionado e incluye arnés cervical Glisson, kit para vigas de madera de 16\" en EE. UU. y guía digital.",
    compareTitle: "Tabla Evminov vs. Mesas de Inversión, Estiradores y Clínicas",
    compareSubtitle:
      "Descubre por qué especialistas y atletas prefieren la tracción inclinada con soporte completo (8°–35°) en lugar de colgar boca abajo a 90°.",
    conditionsTitle: "Programas de Bienestar Espinal Según Tu Objetivo",
    conditionsSubtitle:
      "Rutinas de descompresión controlada para molestias lumbares, ciática, recuperación deportiva, postura de oficina y postura juvenil.",
    videosTitle: "Videos Oficiales del Método Evminov e Instalación en Pared",
    videosSubtitle:
      "Demostraciones reales del canal oficial Evminov USA (@evminoviusa).",
    galleryTitle: "20 Protocolos Auténticos de Ejercicios Evminov",
    gallerySubtitle:
      "Movimientos cinéticos suaves realizados con la columna totalmente apoyada y descargada.",
    patentsTitle: "30 Años de Trayectoria y Patentes Internacionales (Desde 1996)",
    patentsSubtitle:
      "Protegida en EE. UU., Unión Europea, WIPO y Ucrania — creada por Vyacheslav Evminov.",
    shippingTitle: "Envío Asegurado a los 50 Estados de EE. UU. y Todo el Mundo",
    shippingSubtitle:
      "Despacho rápido desde nuestro centro en Glendale, California (1–4 días hábiles) o envío directo desde taller a EE. UU., Canadá, Europa y Ucrania.",
    guidesTitle: "Guías Educativas Sobre Salud Espinal",
    guidesSubtitle:
      "Artículos profundos sobre seguridad de mesas de inversión, hidratación discal, recuperación de atletas e instalación doméstica.",
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle:
      "Respuestas claras sobre instalación en paredes drywall de 16\", soporte sin taladrar, facturas HSA/FSA y tiempos de envío.",
    finalCtaTitle: "¿Listo para 10 Minutos Diarios de Alivio Espinal en Casa?",
    finalCtaSubtitle:
      "Configura tu tabla Evminov con talla exacta y recibe confirmación directa desde nuestro centro en California.",
    finalCtaButton: "Reservar Mi Tabla Evminov",
  },
  productUi: {
    ...en.productUi,
    directPriceLabel: "Envío Directo de Taller",
    usExpressLabel: "Almacén California Express (1–4 Días)",
    hsaEstimatedLabel: "Neto Est. HSA/FSA (-30%)",
    klarnaLabel: "4 pagos quincenales de",
    viewDetails: "Ver Especificaciones",
    orderModel: "Configurar y Pedir",
    addStand: "Añadir Soporte Sin Taladrar",
    weightLimit: "Peso Máximo",
    heightLimit: "Estatura",
    material: "Madera",
    inclineRange: "Rango de Inclinación",
    storageProfile: "Espacio de Guardado",
    whatsIncluded: "Incluido en la Caja",
    finishes: "Acabados Disponibles",
    specsTitle: "Especificaciones Técnicas",
    trialBadge: "Prueba de 60 Días • Garantía de 10 Años",
  },
  calculatorUi: {
    ...en.calculatorUi,
    goalLabel: "Objetivo Principal",
    weightLabel: "Peso Corporal",
    heightLabel: "Estatura",
    angleLabel: "Ángulo de Inclinación",
    portableLabel: "¿Necesitas modelo plegable / de viaje?",
    netTraction: "Tracción Axial Neta",
    bodyweightPull: "% del Peso Corporal",
    discUnloading: "Reducción de Carga Axial",
    recommendedRange: "Rango de Ángulo Sugerido",
    recommendedBoard: "Modelo Evminov Recomendado",
    dailyDuration: "Duración Diaria Sugerida",
    ctaOrderPrefilled: "Pedir Esta Configuración",
    emailProtocolTitle: "Enviar Mi Plan de Ángulos + Guía de Montaje 16\" por Email",
    emailProtocolButton: "Enviar Plan Gratis",
    emailProtocolSuccess: "¡Enviado! Revisa tu correo para ver tu plan personalizado.",
  },
  orderUi: {
    ...en.orderUi,
    pageTitle: "Configura y Reserva Tu Tabla Evminov",
    pageSubtitle:
      "Sin riesgo inicial. Reserva tu tabla con nuestro equipo en Glendale, California — confirmamos stock, envío UPS/FedEx y enviamos tu enlace de pago o factura HSA/FSA.",
    step1: "1. Elegir Tabla",
    step2: "2. Envío y Extras",
    step3: "3. Datos de Entrega",
    selectModel: "Selecciona el Modelo",
    selectFinish: "Selecciona el Acabado",
    selectShipping: "Velocidad de Envío",
    nameLabel: "Nombre Completo",
    emailLabel: "Correo Electrónico",
    phoneLabel: "Teléfono",
    stateLabel: "Estado de EE. UU. / País",
    addressLabel: "Ciudad, Código Postal / Dirección",
    notesLabel: "Estatura, peso o preguntas (Opcional)",
    voiceDictate: "Dictar por Voz",
    voiceRecording: "Grabando… Pulsa para Detener",
    submitReservation: "Enviar Pedido y Solicitar Enlace de Pago",
    submitting: "Enviando pedido…",
    successTitle: "¡Tu Reserva Evminov Está Confirmada!",
    summaryTitle: "Resumen del Pedido",
    totalLabel: "Total Estimado",
    nextStep: "Continuar",
    prevStep: "Atrás",
  },
  chatUi: {
    ...en.chatUi,
    buttonLabel: "Asistente AI",
    title: "Asistente Espinal Evminov AI",
    subtitle: "Tallas, montaje 16\" (¡sube foto de tu pared!), HSA/FSA y ángulos",
    placeholder: "Pregunta sobre modelos, montaje o mesas de inversión…",
    welcome:
      "¡Hola! Soy el asistente de Evminov. Pregúntame sobre el tamaño ideal, cómo instalarla en paredes de EE. UU. (puedes subir una foto) o el ahorro con HSA/FSA.",
    send: "Enviar",
  },
  consentUi: {
    title: "Privacidad y Cookies",
    body: "Usamos cookies esenciales para tu configuración y analíticas opcionales para mejorar la experiencia.",
    acceptAll: "Aceptar Todo",
    necessaryOnly: "Solo Esenciales",
    customize: "Personalizar",
    save: "Guardar",
    analyticsLabel: "Analítica (GA4 y Microsoft Clarity)",
    marketingLabel: "Marketing y Medición",
  },
  footer: {
    ...en.footer,
    tagline:
      "Tablas patentadas Evminov de descompresión espinal inclinada. Diseñadas desde 1996 para el cuidado diario de la espalda en EE. UU., Canadá, Europa y Ucrania.",
    shopHeading: "Tablas y Herramientas",
    resourcesHeading: "Guías y Comparativas",
    legalHeading: "Políticas y Seguridad",
    contactHeading: "Centro de Operaciones EE. UU.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
    shippingReturns: "Envíos y Devoluciones (60 Días)",
    wellnessDisclaimer: "Aviso de Bienestar y Seguridad",
    welcomeQr: "Guía de Instalación y Reseñas",
    cookieSettings: "Preferencias de Cookies",
    rights: "Todos los derechos reservados.",
  },
  mobileDock: {
    chat: "Ayuda AI",
    calc: "Ángulo",
    order: "Pedir",
    call: "Llamar",
  },
};

const fr: SiteDictionary = {
  ...en,
  meta: {
    siteTitle: "Evminov Spine Systems | Planche de Décompression Vertébrale Inclinée",
    siteDescription:
      "Planches Evminov authentiques en pin des Carpates pour décompression vertébrale à domicile (8°–35°). Alternative sûre aux tables d'inversion. Livraison États-Unis, Canada et Europe.",
    keywords: [
      "planche evminov canada",
      "decompression vertebrale maison",
      "alternative table inversion",
      "soulagement dos sciatique",
      "equipement colonne vertebrale",
    ],
  },
  nav: {
    products: "Planches",
    calculator: "Calculateur",
    compare: "Comparer",
    conditions: "Objectifs",
    guides: "Guides",
    shipping: "Livraison",
    centers: "Histoire 1996",
    orderNow: "Commander",
    callUs: "Appeler",
    skipToContent: "Aller au contenu principal",
    hsaToggleLabel: "Économie HSA/FSA ~30%",
    hsaToggleActive: "Prix net estimé HSA/FSA (-30%)",
    hsaToggleHint: "Estimation avant impôts (USA)",
  },
  hero: {
    badge: "Breveté depuis 1996 • Livraison États-Unis, Canada, Europe et Ukraine",
    title: "Décompression Vertébrale Inclinée Contrôlée",
    titleHighlight: "Sans Pendre la Tête en Bas",
    subtitle:
      "Planches artisanales en pin des Carpates conçues pour une décharge vertébrale douce (8°–35°) et le renforcement profond du dos en 10 minutes par jour. Zéro afflux sanguin vers la tête.",
    ctaPrimary: "Configurer & Commander",
    ctaSecondary: "Calculer Mon Angle",
    trustItems: [
      "Brevet US 6,869,387 B2 & Brevet Européen EP 1 038 512 B1",
      "Boucle Cervicale Glisson Incluse Gratuitement",
      "Essai à Domicile 60 Jours & Garantie 10 Ans",
      "Facture Détaillée pour Remboursement Santé",
    ],
    startingFrom: "À partir de",
    klarnaNote: "4 paiements bi-mensuels sans frais dès",
    hsaSavedNote: "Net estimé après ~30% d'économie HSA/FSA",
  },
  sections: {
    calculatorTitle: "Calculateur Biomécanique d'Angle et de Taille",
    calculatorSubtitle:
      "Saisissez votre poids, taille et objectif pour obtenir la force de traction exacte, l'angle de départ et le modèle Evminov adapté.",
    catalogTitle: "Gamme Officielle des Planches Evminov",
    catalogSubtitle:
      "Chaque planche est fabriquée en pin des Carpates ou aulne sélectionné avec boucle Glisson, kit de fixation murale 16\" et guide vidéo.",
    compareTitle: "Planche Evminov vs. Tables d'Inversion, Étireurs et Cliniques",
    compareSubtitle:
      "Pourquoi les spécialistes et athlètes choisissent la traction inclinée soutenue (8°–35°) plutôt que l'inversion à 90°.",
    conditionsTitle: "Programmes de Bien-Être Vertébral par Objectif",
    conditionsSubtitle:
      "Routines adaptées pour confort lombaire, sciatique, récupération sportive, posture de bureau et alignement des jeunes.",
    videosTitle: "Vidéos Officielles de la Méthode Evminov et du Montage",
    videosSubtitle:
      "Démonstrations authentiques de la chaîne officielle Evminov USA (@evminoviusa).",
    galleryTitle: "20 Protocoles d'Exercices Evminov Authentiques",
    gallerySubtitle:
      "Mouvements cinétiques doux effectués en décharge complète sur le bois souple.",
    patentsTitle: "30 Ans d'Expertise et Brevets Internationaux (Depuis 1996)",
    patentsSubtitle:
      "Protégé aux États-Unis, en Europe (OEB), WIPO et Ukraine — conçu par Vyacheslav Evminov.",
    shippingTitle: "Livraison Assurée dans les 50 États US, au Canada et en Europe",
    shippingSubtitle:
      "Expédition rapide depuis Glendale, Californie ou livraison directe depuis notre atelier européen.",
    guidesTitle: "Guides Éducatifs sur la Biomécanique du Dos",
    guidesSubtitle:
      "Analyses détaillées sur les tables d'inversion, l'hydratation discale, la récupération sportive et l'installation.",
    faqTitle: "Questions Fréquentes",
    faqSubtitle:
      "Tout savoir sur le montage mural sur montants 16\", le support autoportant pour locataires, les délais et contre-indications.",
    finalCtaTitle: "Prêt pour 10 Minutes de Soulagement Dorsal par Jour ?",
    finalCtaSubtitle:
      "Configurez votre planche Evminov et recevez une confirmation directe de notre équipe.",
    finalCtaButton: "Réserver Ma Planche Evminov",
  },
  productUi: {
    ...en.productUi,
    directPriceLabel: "Livraison Directe Atelier",
    usExpressLabel: "Entrepôt Californie Express (1–4 Jours)",
    hsaEstimatedLabel: "Net Est. HSA/FSA (-30%)",
    klarnaLabel: "4 paiements de",
    viewDetails: "Fiche Complète",
    orderModel: "Configurer & Commander",
    addStand: "Ajouter le Support Sans Perçage",
    weightLimit: "Charge Maximale",
    heightLimit: "Taille Utilisateur",
    material: "Bois",
    inclineRange: "Plage d'Inclinaison",
    storageProfile: "Encombrement",
    whatsIncluded: "Inclus dans le Coffret",
    finishes: "Finitions Disponibles",
    specsTitle: "Spécifications Techniques",
    trialBadge: "Essai 60 Jours • Garantie 10 Ans",
  },
  calculatorUi: {
    ...en.calculatorUi,
    goalLabel: "Objectif Principal",
    weightLabel: "Poids Corporel",
    heightLabel: "Taille",
    angleLabel: "Angle d'Inclinaison",
    portableLabel: "Besoin d'un modèle pliable / voyage ?",
    netTraction: "Traction Axiale Nette",
    bodyweightPull: "% du Poids",
    discUnloading: "Réduction de Charge",
    recommendedRange: "Plage d'Angle Recommandée",
    recommendedBoard: "Modèle Evminov Conseillé",
    dailyDuration: "Durée Quotidienne",
    ctaOrderPrefilled: "Commander Cette Configuration",
    emailProtocolTitle: "Recevoir Mon Plan d'Angles + Guide de Montage par Email",
    emailProtocolButton: "Envoyer le Plan",
    emailProtocolSuccess: "Envoyé ! Vérifiez votre boîte de réception.",
  },
  orderUi: {
    ...en.orderUi,
    pageTitle: "Configurer et Réserver Votre Planche Evminov",
    step1: "1. Modèle",
    step2: "2. Livraison & Options",
    step3: "3. Coordonnées",
    selectModel: "Choisir le Modèle",
    selectFinish: "Choisir la Finition",
    selectShipping: "Mode d'Expédition",
    nameLabel: "Nom Complet",
    emailLabel: "Adresse Email",
    phoneLabel: "Téléphone",
    stateLabel: "État US / Province / Pays",
    addressLabel: "Ville, Code Postal / Adresse",
    notesLabel: "Taille, poids ou questions (Optionnel)",
    voiceDictate: "Dicter à la Voix",
    voiceRecording: "Enregistrement… Cliquez pour Arrêter",
    submitReservation: "Envoyer la Réservation",
    submitting: "Envoi en cours…",
    successTitle: "Votre Réservation Evminov Est Confirmée !",
    summaryTitle: "Récapitulatif",
    totalLabel: "Total Estimé",
    nextStep: "Continuer",
    prevStep: "Retour",
  },
  chatUi: {
    ...en.chatUi,
    buttonLabel: "Concierge IA",
    title: "Concierge IA Evminov",
    subtitle: "Choix du modèle, montage mural (photo), angles et livraison",
    placeholder: "Posez une question sur la taille, le montage ou la livraison…",
    welcome:
      "Bonjour ! Je suis le Concierge Evminov. Demandez-moi quel modèle choisir, comment fixer la planche sans percer ou les délais de livraison au Canada, aux USA et en Europe.",
    send: "Envoyer",
  },
  consentUi: {
    title: "Confidentialité et Cookies",
    body: "Nous utilisons des cookies essentiels et des statistiques optionnelles pour améliorer le site.",
    acceptAll: "Tout Accepter",
    necessaryOnly: "Essentiels Uniquement",
    customize: "Personnaliser",
    save: "Enregistrer",
    analyticsLabel: "Statistiques (GA4 & Clarity)",
    marketingLabel: "Marketing",
  },
  footer: {
    ...en.footer,
    tagline:
      "Planches brevetées Evminov de décompression vertébrale inclinée depuis 1996. États-Unis, Canada, Europe et Ukraine.",
    shopHeading: "Planches & Outils",
    resourcesHeading: "Guides & Comparatifs",
    legalHeading: "Mentions & Sécurité",
    contactHeading: "Centre Nord-Américain",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d'Utilisation",
    shippingReturns: "Livraison & Retours 60 Jours",
    wellnessDisclaimer: "Avis Bien-Être & Sécurité",
    welcomeQr: "Installation & Avis Clients",
    cookieSettings: "Paramètres Cookies",
    rights: "Tous droits réservés.",
  },
  mobileDock: {
    chat: "Aide IA",
    calc: "Angle",
    order: "Offre",
    call: "Appeler",
  },
};

const uk: SiteDictionary = {
  ...en,
  meta: {
    siteTitle: "Evminov Spine Systems | Оригінальний Профілактор Євмінова у США, Канаді та ЄС",
    siteDescription:
      "Оригінальні запатентовані дошки (Профілактори) Євмінова з карпатської сосни та вільхи. Безпечна похила декомпресія хребта 8°–35° замість інверсійних столів. Доставка по всіх 50 штатах США, Канаді, ЄС та Україні.",
    keywords: [
      "профілактор євмінова сша",
      "дошка євмінова купити",
      "декомпресія хребта вдома",
      "альтернатива інверсійному столу",
      "методика євмінова 1996",
    ],
  },
  nav: {
    products: "Дошки",
    calculator: "Калькулятор кута",
    compare: "Порівняння",
    conditions: "Для кого",
    guides: "Гайди",
    shipping: "Доставка",
    centers: "Історія 1996",
    orderNow: "Замовити",
    callUs: "Подзвонити",
    skipToContent: "Перейти до основного вмісту",
    hsaToggleLabel: "Економія HSA/FSA ~30%",
    hsaToggleActive: "Показано орієнтовну ціну з HSA/FSA (-30%)",
    hsaToggleHint: "Оцінка для США з листом LMN",
  },
  hero: {
    badge: "Запатентовано з 1996 року • Доставка у 50 штатів США, Канаду, ЄС та Україну",
    title: "Контрольована Похила Декомпресія Хребта",
    titleHighlight: "Без Висіння Догори Ногами",
    subtitle:
      "Оригінальні дошки з резонансної карпатської сосни для м'якого розвантаження хребта під кутом 8°–35° та зміцнення глибоких м'язів спини за 10 хвилин на день. Без стрибків тиску та болю в щиколотках.",
    ctaPrimary: "Підібрати та Замовити",
    ctaSecondary: "Розрахувати Кут Нахилу",
    trustItems: [
      "Патент США US 6,869,387 B2, ЄС EP 1 038 512 B1 та України № 27976",
      "Петля Гліссона для шиї у подарунок",
      "60 днів тест-драйву вдома та 10 років гарантії на раму",
      "Деталізований інвойс для HSA / FSA у США",
    ],
    startingFrom: "Від",
    klarnaNote: "4 безвідсоткові платежі кожні 2 тижні від",
    hsaSavedNote: "Орієнтовно після ~30% економії HSA/FSA",
  },
  sections: {
    calculatorTitle: "Інтерактивний Біомеханічний Калькулятор Кута та Розміру",
    calculatorSubtitle:
      "Введіть вагу, зріст і мету занять, щоб розрахувати силу витяжіння, безпечний стартовий кут та ідеальну модель Профілактора Євмінова.",
    catalogTitle: "Офіційна Лінійка Профілакторів Євмінова",
    catalogSubtitle:
      "Кожна дошка виготовлена з карпатської сосни або відбірної вільхи, комплектується петлею Гліссона, кріпленням під американські дерев'яні стійки 16\" та цифровим гідом.",
    compareTitle: "Дошка Євмінова vs. Інверсійні Столи, Тренажери та Клініки",
    compareSubtitle:
      "Чому фахівці та спортсмени обирають керовану похилу тракцію з повною опорою спини (8°–35°) замість небезпечного висіння під 90°.",
    conditionsTitle: "Програми Занять Під Конкретні Цілі та Симптоми",
    conditionsSubtitle:
      "Адаптовані протоколи нахилу для комфорту попереку, сідничного нерва, відновлення спортсменів, офісної постави та профілактики у дітей.",
    videosTitle: "Офіційні Відео Методики Євмінова та Монтажу на Стіну 16\"",
    videosSubtitle:
      "Реальні демонстрації з офіційного YouTube-каналу Evminov USA (@evminoviusa). Відео завантажується лише по кліку для максимальної швидкості.",
    galleryTitle: "20 Оригінальних Протоколів Вправ Євмінова",
    gallerySubtitle:
      "Малоамплітудні вправи на тлі м'якого розвантаження хребта на еластичній дерев'яній площині.",
    patentsTitle: "30 Років Досвіду та Міжнародні Патенти (з 1996 року)",
    patentsSubtitle:
      "Запатентовано у США, Європі, WIPO та Україні — винахід В'ячеслава Євмінова для щоденної гігієни хребта.",
    shippingTitle: "Застрахована Доставка у 50 Штатів США, Канаду, ЄС та Україну",
    shippingSubtitle:
      "Швидка відправка зі складу в Глендейлі, Каліфорнія (1–4 робочі дні по США) або пряма доставка з виробництва.",
    guidesTitle: "Експертні Статті та Гайди про Хребет",
    guidesSubtitle:
      "Біомеханіка дисків, ризики інверсійних столів, відновлення після станової тяги, профілактика сколіозу та домашній монтаж.",
    faqTitle: "Часті Запитання",
    faqSubtitle:
      "Усе про монтаж на американський гіпсокартон (16\" studs), стійку без свердління для орендарів, HSA/FSA та протипоказання.",
    finalCtaTitle: "Готові Приділити Хребту 10 Хвилин на День Вдома?",
    finalCtaSubtitle:
      "Оберіть модель Профілактора Євмінова, дізнайтесь точний термін доставки та отримайте інвойс від нашого американського хабу.",
    finalCtaButton: "Забронювати Дошку Євмінова",
  },
  productUi: {
    ...en.productUi,
    directPriceLabel: "Пряма Доставка з Виробництва",
    usExpressLabel: "Склад у Каліфорнії Express (1–4 Дні)",
    hsaEstimatedLabel: "Орієнт. з HSA/FSA (-30%)",
    klarnaLabel: "4 платежі по",
    viewDetails: "Деталі та Фото",
    orderModel: "Налаштувати й Замовити",
    addStand: "Додати Стійку Без Свердління",
    weightLimit: "Макс. Вага",
    heightLimit: "Зріст Користувача",
    material: "Деревина",
    inclineRange: "Діапазон Кутів",
    storageProfile: "Зберігання",
    whatsIncluded: "Комплектація",
    finishes: "Кольори Покриття",
    specsTitle: "Технічні Характеристики",
    trialBadge: "60 Днів Тест-Драйву • 10 Років Гарантії",
  },
  calculatorUi: {
    ...en.calculatorUi,
    goalLabel: "Основна Мета Занять",
    weightLabel: "Вага Тіла",
    heightLabel: "Зріст",
    angleLabel: "Кут Нахилу Дошки",
    portableLabel: "Потрібна складна модель для шафи / авто?",
    netTraction: "Чиста Сила Витяжіння",
    bodyweightPull: "% від Ваги Тіла",
    discUnloading: "Розвантаження Дисків",
    recommendedRange: "Рекомендований Діапазон Кутів",
    recommendedBoard: "Ідеальна Модель Дошки",
    dailyDuration: "Рекомендована Тривалість",
    ctaOrderPrefilled: "Замовити Цю Конфігурацію",
    emailProtocolTitle: "Надіслати Мій План Кутів + Чеклист Монтажу на Email",
    emailProtocolButton: "Отримати План Безкоштовно",
    emailProtocolSuccess: "Надіслано! Перевірте вашу пошту.",
  },
  orderUi: {
    ...en.orderUi,
    pageTitle: "Оформлення та Бронювання Профілактора Євмінова",
    pageSubtitle:
      "Без передоплати на сайті. Забронюйте потрібну модель напряму в нашому центрі в Каліфорнії — ми підтвердимо наявність, тариф UPS/FedEx та надішлемо офіційний інвойс.",
    step1: "1. Вибір Дошки",
    step2: "2. Доставка та Опції",
    step3: "3. Контакти Доставки",
    selectModel: "Оберіть Модель Дошки",
    selectFinish: "Оберіть Покриття",
    selectShipping: "Спосіб Доставки",
    shippingDirect: "Пряма доставка з виробництва (10–16 робочих днів)",
    shippingDirectDesc: "Найвигідніша ціна напряму з майстерні.",
    shippingExpress: "Експрес зі складу в Glendale, CA (1–4 робочі дні)",
    shippingExpressDesc: "Швидка застрахована доставка UPS/FedEx по всіх 50 штатах США.",
    addFreeStand: "Додати розбірну підлогову стійку (+$275)",
    addFreeStandDesc: "Без жодного отвору у стіні — ідеально для орендованого житла.",
    hsaCheckbox: "Додати деталізований інвойс та шаблон LMN для HSA/FSA у США",
    nameLabel: "Ім'я та Прізвище",
    emailLabel: "Електронна Пошта",
    phoneLabel: "Телефон (США / Міжнародний)",
    stateLabel: "Штат США / Країна",
    addressLabel: "Місто, Індекс / Адреса Доставки",
    notesLabel: "Зріст, вага або запитання (Необов'язково)",
    voiceDictate: "Надиктувати Голосом",
    voiceRecording: "Йде запис… Натисніть, щоб зупинити",
    submitReservation: "Надіслати Замовлення та Запросити Інвойс",
    submitting: "Надсилаємо замовлення…",
    stripeNotice:
      "Пряма онлайн-оплата карткою (Stripe, Apple Pay, Google Pay, Klarna) завершує підключення під американську LLC. Після відправки цієї форми ми миттєво бронюємо дошку й надсилаємо підтвердження та посилання на оплату з orders@evminovusa.com.",
    successTitle: "Ваше Бронювання Підтверджено!",
    successBody:
      "Ми надіслали деталі на ваш email і сповістили склад у Каліфорнії. Очікуйте підтвердження доставки протягом 1 робочого дня.",
    orderRef: "Номер Заявки",
    summaryTitle: "Ваше Замовлення",
    totalLabel: "Орієнтовна Сума",
    estimatedHsaLabel: "Орієнт. після ~30% HSA/FSA",
    nextStep: "Далі",
    prevStep: "Назад",
  },
  chatUi: {
    ...en.chatUi,
    buttonLabel: "AI-Консультант",
    title: "AI-Консультант Evminov",
    subtitle: "Підбір дошки, монтаж 16\" (завантажте фото стіни!), кути та доставка",
    placeholder: "Запитайте про розмір дошки, монтаж чи доставку…",
    welcome:
      "Вітаю! Я AI-консультант Evminov. Допоможу підібрати модель (Стандартна, Широка, Складна), перевірити вашу стіну по фото або розрахувати доставку по США, Канаді та Європі.",
    photoHint: "Додати фото стіни",
    send: "Надіслати",
    disclaimer: "Інформація має ознайомчий характер і не замінює консультацію лікаря.",
  },
  consentUi: {
    title: "Конфіденційність та Cookies",
    body: "Ми використовуємо необхідні cookies для роботи замовлення та опційну аналітику для покращення сайту.",
    acceptAll: "Прийняти Всі",
    necessaryOnly: "Лише Необхідні",
    customize: "Налаштувати",
    save: "Зберегти",
    analyticsLabel: "Аналітика (GA4 та Microsoft Clarity)",
    marketingLabel: "Маркетинг та Вимірювання Реклами",
  },
  footer: {
    ...en.footer,
    tagline:
      "Оригінальні запатентовані Профілактори Євмінова з 1996 року для щоденного здоров'я спини у США, Канаді, Європі та Україні.",
    shopHeading: "Дошки та Інструменти",
    resourcesHeading: "Гайди та Порівняння",
    legalHeading: "Політики та Безпека",
    contactHeading: "Представництво у США",
    privacy: "Політика Конфіденційності",
    terms: "Умови Використання",
    shippingReturns: "Доставка та Повернення (60 Днів)",
    wellnessDisclaimer: "Застереження щодо Безпеки",
    welcomeQr: "Налаштування та Відгуки Власників",
    cookieSettings: "Налаштування Cookies",
    rights: "Усі права захищено.",
  },
  mobileDock: {
    chat: "AI-Чат",
    calc: "Кут",
    order: "Замовити",
    call: "Дзвінок",
  },
};

const ru: SiteDictionary = {
  ...en,
  meta: {
    siteTitle: "Evminov Spine Systems | Оригинальная Доска (Профилактор) Евминова в США и мире",
    siteDescription:
      "Оригинальные запатентованные доски Евминова из карпатской сосны и ольхи. Безопасная наклонная декомпрессия позвоночника 8°–35° вместо инверсионных столов. Доставка в 50 штатов США, Канаду и Европу.",
    keywords: [
      "доска евминова сша",
      "профилактор евминова купить",
      "декомпрессия позвоночника дома",
      "альтернатива инверсионному столу",
      "методика евминова 1996",
    ],
  },
  nav: {
    products: "Доски",
    calculator: "Калькулятор угла",
    compare: "Сравнение",
    conditions: "Цели",
    guides: "Статьи",
    shipping: "Доставка",
    centers: "История 1996",
    orderNow: "Заказать",
    callUs: "Позвонить",
    skipToContent: "Перейти к основному содержанию",
    hsaToggleLabel: "Экономия HSA/FSA ~30%",
    hsaToggleActive: "Показана примерная цена с HSA/FSA (-30%)",
    hsaToggleHint: "Оценка для США с письмом LMN",
  },
  hero: {
    badge: "Запатентовано с 1996 года • Доставка в 50 штатов США, Канаду и Европу",
    title: "Контролируемая Наклонная Декомпрессия Позвоночника",
    titleHighlight: "Без Виса Вниз Головой",
    subtitle:
      "Оригинальные доски из резонансной карпатской сосны для мягкой разгрузки позвоночника под углом 8°–35° и укрепления глубоких мышц спины за 10 минут в день. Без прилива крови к голове и нагрузки на голеностоп.",
    ctaPrimary: "Подобрать и Заказать",
    ctaSecondary: "Рассчитать Угол Наклона",
    trustItems: [
      "Патент США US 6,869,387 B2, ЕС EP 1 038 512 B1 и Украины № 27976",
      "Петля Глиссона для шеи в комплекте бесплатно",
      "60 дней домашнего теста и 10 лет гарантии на конструкцию",
      "Детализированный инвойс для HSA / FSA в США",
    ],
    startingFrom: "От",
    klarnaNote: "4 беспроцентных платежа раз в 2 недели от",
    hsaSavedNote: "Ориентировочно после ~30% экономии HSA/FSA",
  },
  sections: {
    calculatorTitle: "Интерактивный Биомеханический Калькулятор Угла и Размера",
    calculatorSubtitle:
      "Укажите вес, рост и цель занятий, чтобы рассчитать силу вытяжения, безопасный стартовый угол и подходящую модель Профилактора Евминова.",
    catalogTitle: "Официальная Линейка Досок Евминова",
    catalogSubtitle:
      "Каждая доска изготовлена из карпатской сосны или отборной ольхи и включает петлю Глиссона, крепление под американские стойки 16\" и цифровое руководство.",
    compareTitle: "Доска Евминова vs. Инверсионные Столы, Тренажёры и Клиники",
    compareSubtitle:
      "Почему специалисты и спортсмены выбирают управляемую наклонную тракцию с полной опорой спины (8°–35°) вместо виса под 90°.",
    conditionsTitle: "Программы Занятий Под Конкретные Цели",
    conditionsSubtitle:
      "Протоколы мягкой разгрузки для комфорта поясницы, седалищного нерва, восстановления спортсменов, офисной осанки и детей.",
    videosTitle: "Официальные Видео Методики Евминова и Монтажа на Стену",
    videosSubtitle:
      "Реальные демонстрации с официального YouTube-канала Evminov USA (@evminoviusa).",
    galleryTitle: "20 Оригинальных Протоколов Упражнений Евминова",
    gallerySubtitle:
      "Малоамплитудные упражнения на фоне мягкой разгрузки позвоночника на упругой деревянной панели.",
    patentsTitle: "30 Лет Опыта и Международные Патенты (с 1996 года)",
    patentsSubtitle:
      "Запатентовано в США, Европе, WIPO и Украине — изобретение Вячеслава Евминова для ежедневной гигиены позвоночника.",
    shippingTitle: "Застрахованная Доставка в 50 Штатов США, Канаду и Европу",
    shippingSubtitle:
      "Быстрая отправка со склада в Глендейле, Калифорния (1–4 рабочих дня по США) или прямая доставка из мастерской.",
    guidesTitle: "Экспертные Статьи и Руководства о Позвоночнике",
    guidesSubtitle:
      "Биомеханика дисков, риски инверсионных столов, восстановление после становой тяги, осанка детей и монтаж дома.",
    faqTitle: "Частые Вопросы",
    faqSubtitle:
      "Монтаж на американские стены (16\" studs), стойка без сверления для арендаторов, инвойсы HSA/FSA и противопоказания.",
    finalCtaTitle: "Готовы Уделять Спине 10 Минут в День Дома?",
    finalCtaSubtitle:
      "Выберите модель доски Евминова, узнайте точный срок доставки и получите подтверждение из нашего центра в Калифорнии.",
    finalCtaButton: "Забронировать Доску Евминова",
  },
  productUi: {
    ...en.productUi,
    directPriceLabel: "Прямая Доставка с Производства",
    usExpressLabel: "Склад в Калифорнии Express (1–4 Дня)",
    hsaEstimatedLabel: "Ориент. с HSA/FSA (-30%)",
    klarnaLabel: "4 платежа по",
    viewDetails: "Характеристики и Фото",
    orderModel: "Настроить и Заказать",
    addStand: "Добавить Стойку Без Сверления",
    weightLimit: "Макс. Вес",
    heightLimit: "Рост Пользователя",
    material: "Древесина",
    inclineRange: "Диапазон Углов",
    storageProfile: "Хранение",
    whatsIncluded: "Комплектация",
    finishes: "Варианты Покрытия",
    specsTitle: "Технические Характеристики",
    trialBadge: "60 Дней Тест-Драйва • 10 Лет Гарантии",
  },
  calculatorUi: {
    ...en.calculatorUi,
    goalLabel: "Основная Цель Занятий",
    weightLabel: "Вес Тела",
    heightLabel: "Рост",
    angleLabel: "Угол Наклона Доски",
    portableLabel: "Нужна складная модель для шкафа / авто?",
    netTraction: "Чистая Сила Вытяжения",
    bodyweightPull: "% от Веса Тела",
    discUnloading: "Разгрузка Дисков",
    recommendedRange: "Рекомендуемый Диапазон Углов",
    recommendedBoard: "Подходящая Модель Доски",
    dailyDuration: "Рекомендуемая Длительность",
    ctaOrderPrefilled: "Заказать Эту Конфигурацию",
    emailProtocolTitle: "Отправить Мой План Углов + Чеклист Монтажа на Email",
    emailProtocolButton: "Получить План Бесплатно",
    emailProtocolSuccess: "Отправлено! Проверьте вашу почту.",
  },
  orderUi: {
    ...en.orderUi,
    pageTitle: "Оформление и Бронирование Доски Евминова",
    pageSubtitle:
      "Без риска и предоплаты на сайте. Забронируйте модель напрямую через наш центр в Калифорнии — мы подтвердим наличие, доставку UPS/FedEx и вышлем официальный счёт.",
    step1: "1. Выбор Доски",
    step2: "2. Доставка и Опции",
    step3: "3. Контакты Доставки",
    selectModel: "Выберите Модель Доски",
    selectFinish: "Выберите Покрытие",
    selectShipping: "Способ Доставки",
    shippingDirect: "Прямая доставка с производства (10–16 рабочих дней)",
    shippingDirectDesc: "Лучшая цена напрямую от производителя.",
    shippingExpress: "Экспресс со склада в Glendale, CA (1–4 рабочих дня)",
    shippingExpressDesc: "Быстрая застрахованная доставка UPS/FedEx по всем 50 штатам США.",
    addFreeStand: "Добавить разборную напольную стойку (+$275)",
    addFreeStandDesc: "Без сверления стен — идеально для съёмных квартир.",
    hsaCheckbox: "Включить детализированный инвойс и шаблон LMN для HSA/FSA в США",
    nameLabel: "Имя и Фамилия",
    emailLabel: "Электронная Почта",
    phoneLabel: "Телефон (США / Международный)",
    stateLabel: "Штат США / Страна",
    addressLabel: "Город, Индекс / Адрес Доставки",
    notesLabel: "Рост, вес или вопросы (Необязательно)",
    voiceDictate: "Надиктовать Голосом",
    voiceRecording: "Идёт запись… Нажмите, чтобы остановить",
    submitReservation: "Отправить Заказ и Запросить Ссылку на Оплату",
    submitting: "Отправляем заказ…",
    stripeNotice:
      "Прямая онлайн-оплата картой (Stripe, Apple Pay, Google Pay, Klarna) завершает подключение под американскую LLC. Отправка этой формы мгновенно бронирует доску и отправляет подтверждение с orders@evminovusa.com.",
    successTitle: "Ваше Бронирование Подтверждено!",
    successBody:
      "Мы отправили детали на ваш email и уведомили склад в Калифорнии. Ожидайте подтверждение доставки в течение 1 рабочего дня.",
    orderRef: "Номер Заявки",
    summaryTitle: "Ваш Заказ",
    totalLabel: "Ориентировочная Сумма",
    estimatedHsaLabel: "Ориент. после ~30% HSA/FSA",
    nextStep: "Далее",
    prevStep: "Назад",
  },
  chatUi: {
    ...en.chatUi,
    buttonLabel: "AI-Консультант",
    title: "AI-Консультант Evminov",
    subtitle: "Подбор доски, монтаж 16\" (загрузите фото стены!), углы и доставка",
    placeholder: "Спросите про размер доски, монтаж или доставку…",
    welcome:
      "Здравствуйте! Я AI-консультант Evminov. Помогу выбрать модель (Стандартная, Широкая, Складная), оценить вашу стену по фото и рассчитать доставку по США, Канаде и Европе.",
    photoHint: "Прикрепить фото стены",
    send: "Отправить",
    disclaimer: "Информация носит ознакомительный характер и не заменяет консультацию врача.",
  },
  consentUi: {
    title: "Конфиденциальность и Cookies",
    body: "Мы используем обязательные cookies для работы заказа и опциональную аналитику для улучшения сайта.",
    acceptAll: "Принять Все",
    necessaryOnly: "Только Обязательные",
    customize: "Настроить",
    save: "Сохранить",
    analyticsLabel: "Аналитика (GA4 и Microsoft Clarity)",
    marketingLabel: "Маркетинг и Измерение Рекламы",
  },
  footer: {
    ...en.footer,
    tagline:
      "Оригинальные запатентованные доски Евминова с 1996 года для ежедневного здоровья позвоночника в США, Канаде, Европе и Украине.",
    shopHeading: "Доски и Инструменты",
    resourcesHeading: "Статьи и Сравнения",
    legalHeading: "Политики и Безопасность",
    contactHeading: "Офис в США",
    privacy: "Политика Конфиденциальности",
    terms: "Условия Использования",
    shippingReturns: "Доставка и Возврат (60 Дней)",
    wellnessDisclaimer: "Дисклеймер Безопасности",
    welcomeQr: "Настройка и Отзывы Владельцев",
    cookieSettings: "Настройки Cookies",
    rights: "Все права защищены.",
  },
  mobileDock: {
    chat: "AI-Чат",
    calc: "Угол",
    order: "Заказать",
    call: "Звонок",
  },
};

const de: SiteDictionary = {
  meta: {
    siteTitle: "Evminov Spine Systems | Geneigtes Wirbelsäulen-Dekompressionsboard",
    siteDescription:
      "Authentische handgefertigte Evminov Wirbelsäulen-Dekompressionsboards aus Karpaten-Kiefer. Sichere Niedrigwinkel-Alternative zu Inversionsbänken (8°–35°). Lieferung in die USA, Kanada & EU, 60 Tage Heimtest.",
    keywords: [
      "evminov board kaufen",
      "wirbelsäulen dekompression zuhause",
      "alternative zur inversionsbank",
      "geneigtes rückentrainer brett",
      "rückendehner zuhause",
      "evminov methode 1996",
    ],
  },
  nav: {
    products: "Boards",
    calculator: "Winkelrechner",
    compare: "Vergleich",
    conditions: "Rückenziele",
    guides: "Ratgeber",
    shipping: "US-Versand",
    centers: "Tradition 1996",
    orderNow: "Board bestellen",
    callUs: "US-Hub anrufen",
    skipToContent: "Zum Hauptinhalt springen",
    hsaToggleLabel: "HSA/FSA ~30% Steuerersparnis",
    hsaToggleActive: "Geschätzter HSA/FSA-Nettopreis (-30%)",
    hsaToggleHint: "Steuerfreie Schätzung mit ärztlichem LMN (USA)",
  },
  hero: {
    badge: "Patentiert seit 1996 • Versand in alle 50 US-Bundesstaaten, Kanada & EU",
    title: "Kontrollierte geneigte Wirbelsäulen-Dekompression",
    titleHighlight: "Ohne kopfüber zu hängen",
    subtitle:
      "Handgefertigte Boards aus resonanter Karpaten-Kiefer für sanfte Wirbelsäulen-Entlastung bei 8°–35° und tiefes Rückenmuskel-Training in 10 Minuten täglich. Kein Blutstau im Kopf, keine Knöchelbelastung.",
    ctaPrimary: "Konfigurieren & Bestellen",
    ctaSecondary: "Winkel berechnen",
    trustItems: [
      "US-Patent 6,869,387 B2 & EU-Patent EP 1 038 512 B1",
      "Glisson-Halswirbelschlaufe kostenlos enthalten",
      "60 Tage Heimtest & 10 Jahre Rahmengarantie",
      "Aufgeschlüsselte Rechnung für HSA-/FSA-Erstattung (USA)",
    ],
    startingFrom: "Ab",
    klarnaNote: "4 zinsfreie Raten alle 2 Wochen ab",
    hsaSavedNote: "Geschätzter Nettobetrag nach ~30% HSA/FSA-Ersparnis",
  },
  sections: {
    calculatorTitle: "Interaktiver biomechanischer Winkel- & Board-Größenrechner",
    calculatorSubtitle:
      "Geben Sie Gewicht, Körpergröße und Ziel ein, um die exakte Zugkraft (F = W × sin θ − Reibung), den sicheren Startwinkel und die ideale Evminov-Board-Größe zu berechnen.",
    catalogTitle: "Offizielle Evminov Wirbelsäulen-Dekompressionsboards",
    catalogSubtitle:
      "Jedes Board wird aus kammergetrockneter Karpaten-Kiefer oder ukrainischer Erle handgefertigt und enthält die Glisson-Halsschlaufe, das 16\"-US-Holzständer-Montageset sowie den digitalen Startleitfaden.",
    compareTitle: "Evminov Board vs. Inversionsbänke, Rückendehner & Kliniken",
    compareSubtitle:
      "Warum Rückenspezialisten und Kraftsportler unterstützte Niedrigwinkel-Traktion (8°–35°) dem Kopfüberhängen bei 90° vorziehen.",
    conditionsTitle: "Gezielte Wirbelsäulen-Wellnessprogramme nach Ziel",
    conditionsSubtitle:
      "Entdecken Sie abgestimmte Niedrigwinkel-Routinen für Lendenwirbel-Komfort, Ischias-Entlastung, sportliche Regeneration, Bürohaltung und Jugend-Ausrichtung.",
    videosTitle: "Offizielle Evminov-Methode & 16\"-Wandmontage-Videos",
    videosSubtitle:
      "Echte Demonstrationen vom offiziellen Evminov-USA-Kanal (@evminoviusa). Videos laden erst beim Klick für maximale Seitengeschwindigkeit.",
    galleryTitle: "20 Authentische Evminov-Übungsprotokolle",
    gallerySubtitle:
      "Sanfte Bewegungen mit geringer Amplitude bei vollständig gestützter und entlasteter Wirbelsäule auf der federnden Holzfläche.",
    patentsTitle: "30 Jahre Tradition & Internationale Patente (Seit 1996)",
    patentsSubtitle:
      "Geschützt in den USA, der Europäischen Union, bei der WIPO/PCT und in der Ukraine — entwickelt von Wjatscheslaw Ewminow für tägliche Wirbelsäulenhygiene.",
    shippingTitle: "Direkter versicherter Versand in alle 50 US-Bundesstaaten & weltweit",
    shippingSubtitle:
      "Versand aus unserem Logistikzentrum in Glendale, Kalifornien (1–4 Werktage US-Express) oder direkt aus unserer europäischen Werkstatt in die USA, Kanada, EU und Ukraine.",
    guidesTitle: "Evidenzbasierte Wirbelsäulen-Ratgeber & Wissen",
    guidesSubtitle:
      "Fundierte biomechanische Analysen zu Inversionsbank-Sicherheit, Bandscheiben-Hydratation, Regeneration nach schwerem Heben, Bürohaltung und Montage.",
    faqTitle: "Häufig gestellte Fragen",
    faqSubtitle:
      "Klare Antworten zu 16\"-Trockenbau-Holzständermontage, freistehendem Ständer für Mieter, HSA/FSA-Rechnungen, Lieferzeiten und Kontraindikationen.",
    finalCtaTitle: "Bereit für 10 Minuten tägliche Rückenentlastung zuhause?",
    finalCtaSubtitle:
      "Konfigurieren Sie Ihr Evminov Board mit passender Größe, wählen Sie Werkstatt-Direktversand oder Kalifornien-Express und erhalten Sie eine aufgeschlüsselte HSA/FSA-fähige Rechnung.",
    finalCtaButton: "Evminov Board reservieren",
  },
  productUi: {
    directPriceLabel: "Werkstatt-Direktlieferung",
    usExpressLabel: "Kalifornien-Lager Express (1–4 Tage)",
    hsaEstimatedLabel: "Gesch. HSA/FSA Netto (-30%)",
    klarnaLabel: "4 zweiwöchentliche Raten à",
    viewDetails: "Alle Daten & Galerie",
    orderModel: "Konfigurieren & Bestellen",
    addStand: "Bohrfreien Ständer hinzufügen",
    weightLimit: "Max. Traglast",
    heightLimit: "Körpergröße",
    material: "Holzart",
    inclineRange: "Neigungsbereich",
    storageProfile: "Platzbedarf",
    whatsIncluded: "Lieferumfang",
    finishes: "Verfügbare Oberflächen",
    specsTitle: "Technische Daten",
    trialBadge: "60 Tage Heimtest • 10 Jahre Rahmengarantie",
  },
  calculatorUi: {
    goalLabel: "Primäres Rückenziel",
    weightLabel: "Körpergewicht",
    heightLabel: "Körpergröße",
    angleLabel: "Neigungswinkel",
    portableLabel: "Kompaktes Klapp- / Reisemodell benötigt?",
    netTraction: "Netto-Axialzugkraft",
    bodyweightPull: "Anteil am Körpergewicht",
    discUnloading: "Axiale Entlastung",
    recommendedRange: "Empfohlener Winkelbereich",
    recommendedBoard: "Passendes Evminov-Modell",
    dailyDuration: "Empfohlene Tagesdauer",
    ctaOrderPrefilled: "Exakt diese Konfiguration bestellen",
    emailProtocolTitle: "Meinen Winkelplan + 16\"-Montage-Checkliste per E-Mail senden",
    emailProtocolPlaceholder: "sie@beispiel.de",
    emailProtocolButton: "Plan kostenlos senden",
    emailProtocolSuccess: "Gesendet! Prüfen Sie Ihr Postfach für Ihr persönliches Evminov-Protokoll.",
  },
  orderUi: {
    pageTitle: "Evminov Board konfigurieren & reservieren",
    pageSubtitle:
      "Kein Vorauszahlungsrisiko. Reservieren Sie Ihr Board direkt bei unserem Team in Glendale, Kalifornien — wir bestätigen Bestand, exakten UPS/FedEx-Versand und senden Ihnen Ihren sicheren Zahlungslink oder HSA/FSA-Unterlagen.",
    step1: "1. Board wählen",
    step2: "2. Versand & Extras",
    step3: "3. Lieferdaten",
    selectModel: "Board-Modell wählen",
    selectFinish: "Holzoberfläche wählen",
    selectShipping: "Versandart",
    shippingDirect: "Werkstatt-Direktversand (10–16 Werktage)",
    shippingDirectDesc: "Bestes Preis-Leistungs-Verhältnis — direkt aus unserer Meisterwerkstatt.",
    shippingExpress: "Glendale, CA US-Lager Express (1–4 Werktage)",
    shippingExpressDesc: "Schneller versicherter UPS/FedEx-Versand aus Kalifornien in alle 50 US-Bundesstaaten.",
    addFreeStand: "Zerlegbaren freistehenden Leiterständer hinzufügen (+$275)",
    addFreeStandDesc: "Kein Bohren in Wände erforderlich — ideal für Mietwohnungen.",
    hsaCheckbox: "Aufgeschlüsselte Wellness-Geräte-Rechnung & LMN-Leitfaden für HSA/FSA beilegen",
    nameLabel: "Vollständiger Name",
    emailLabel: "E-Mail-Adresse",
    phoneLabel: "Telefonnummer (USA / International)",
    stateLabel: "US-Bundesstaat / Land",
    addressLabel: "Stadt, PLZ / Lieferadresse",
    notesLabel: "Körpergröße, Gewicht oder Fragen (Optional)",
    voiceDictate: "Per Sprache diktieren",
    voiceRecording: "Aufnahme läuft… Zum Stoppen klicken",
    submitReservation: "Bestellung absenden & Zahlungslink anfordern",
    submitting: "Bestellung wird gesendet…",
    stripeNotice:
      "Die direkte Online-Kartenzahlung (Stripe, Apple Pay, Google Pay, Klarna) wird derzeit für unsere US-LLC finalisiert. Mit dem Absenden dieses Formulars reservieren Sie Ihr gewähltes Modell sofort und erhalten eine Bestätigung samt Zahlungslink von orders@evminovusa.com.",
    successTitle: "Ihre Evminov-Reservierung ist bestätigt!",
    successBody:
      "Wir haben eine Bestätigung an Ihre E-Mail gesendet und unser Versandteam in Glendale, CA benachrichtigt. Sie erhalten Versandbestätigung und Zahlungslink innerhalb von 1 Werktag.",
    orderRef: "Referenznummer",
    summaryTitle: "Bestellübersicht",
    totalLabel: "Geschätzte Gesamtsumme",
    estimatedHsaLabel: "Gesch. Netto nach ~30% HSA/FSA",
    nextStep: "Weiter",
    prevStep: "Zurück",
  },
  chatUi: {
    buttonLabel: "KI-Rückenberater",
    title: "Evminov KI-Wirbelsäulenberater",
    subtitle: "Board-Größe, 16\"-Wandmontage (Wandfoto hochladen!), HSA/FSA & Winkel",
    placeholder: "Fragen Sie zu Board-Größe, Wandmontage oder Inversions-Alternativen…",
    welcome:
      "Hallo! Ich bin der Evminov Wirbelsäulenberater. Fragen Sie mich zur Wahl zwischen Standard-, Wide- oder Klapp-Board, zur Montage an 16\"-US-Holzständern (Sie können sogar ein Wandfoto hochladen!) oder zu HSA/FSA-Ersparnissen.",
    photoHint: "Wand- oder Raumfoto anhängen",
    send: "Senden",
    disclaimer: "Nur allgemeine Wellness-Hinweise — keine medizinische Diagnose.",
  },
  consentUi: {
    title: "Datenschutz & Cookie-Einstellungen",
    body: "Wir verwenden notwendige Cookies für Ihre Bestellkonfiguration sowie optionale Analysen zur Verbesserung von Geschwindigkeit und Nutzererlebnis. Sie können Ihre Wahl jederzeit ändern.",
    acceptAll: "Alle akzeptieren",
    necessaryOnly: "Nur notwendige",
    customize: "Anpassen",
    save: "Einstellungen speichern",
    analyticsLabel: "Analyse (GA4 & Microsoft Clarity)",
    marketingLabel: "Marketing & Werbemessung",
  },
  footer: {
    tagline:
      "Authentische patentierte Evminov geneigte Wirbelsäulen-Dekompressionsboards. Seit 1996 für sichere tägliche Rückenpflege in den USA, Kanada, Europa und der Ukraine.",
    shopHeading: "Boards & Tools",
    resourcesHeading: "Ratgeber & Vergleiche",
    legalHeading: "Richtlinien & Sicherheit",
    contactHeading: "US-Logistikzentrum",
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen",
    shippingReturns: "Versand & 60-Tage-Rückgabe",
    wellnessDisclaimer: "Wellness- & Sicherheitshinweis",
    welcomeQr: "Montage- & Bewertungs-Hub",
    cookieSettings: "Cookie-Einstellungen",
    wellnessNotice:
      "Hinweis zu allgemeinem Wellness-Equipment: Evminov Spine Systems Boards sind als allgemeines Wellness- und Wirbelsäulen-Trainingsgerät (HTS 9506.91.0030) klassifiziert. Die Informationen auf dieser Website dienen ausschließlich Bildungszwecken und sind nicht dazu bestimmt, Krankheiten zu diagnostizieren, zu behandeln, zu heilen oder zu verhindern. Konsultieren Sie vor Beginn eines neuen Trainings- oder Traktionsprogramms einen zugelassenen Arzt, insbesondere bei akuten Wirbelsäulenverletzungen oder schweren Vorerkrankungen.",
    rights: "Alle Rechte vorbehalten.",
  },
  mobileDock: {
    chat: "KI-Hilfe",
    calc: "Winkel",
    order: "Bestellen",
    call: "Anrufen",
  },
};

export const DICTIONARIES: Record<Locale, SiteDictionary> = {
  en,
  es,
  fr,
  uk,
  ru,
  de,
};

export function getDictionary(lang: Locale): SiteDictionary {
  return DICTIONARIES[lang] || DICTIONARIES.en;
}
