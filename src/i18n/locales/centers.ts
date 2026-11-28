import { Locale } from "@/i18n/types";

export interface CentersPageCopy {
  jumpAria: string;
  jumpLinks: Array<{ href: string; label: string }>;
  kpis: Array<{ val: string; label: string; sub: string }>;
  founderEyebrow: string;
  founderHeading: string;
  founderName: string;
  founderSubtitle: string;
  mriBadge: string;
  founderQuote: string;
  founderP1: string;
  founderP2: string;
  credentialsHeading: string;
  founderRoles: string[];
  timelineHeading: string;
  milestones: Array<{ year: string; badge: string; title: string; desc: string }>;
  homeHospitalBadge: string;
  homeHospitalHeading: string;
  homeHospitalIntro: string;
  homeHospitalPillars: Array<{ tag: string; metric: string; title: string; desc: string }>;
  kyivCaptions: [string, string, string];
  defenderBadge: string;
  defenderHeading: string;
  defenderIntro: string;
  defenderChallengesHeading: string;
  defenderChallenges: Array<{ title: string; desc: string }>;
  defenderStepsHeading: string;
  stageWord: string;
  defenderSteps: Array<{ step: string; title: string; desc: string }>;
  audienceBadge: string;
  audienceHeading: string;
  challengeWord: string;
  routineWord: string;
  audiences: Array<{
    id: string;
    tag: string;
    badge: string;
    title: string;
    lead: string;
    mechanisms: Array<{ profile: string; challenge: string; protocol: string }>;
    founderNote: string;
  }>;
  stagesEyebrow: string;
  stagesHeading: string;
  goalWord: string;
  threeStages: Array<{
    stage: string;
    name: string;
    subName: string;
    incline: string;
    duration: string;
    goal: string;
    desc: string;
  }>;
  psychoBadge: string;
  psychoHeading: string;
  psychoIntro: string;
  mechanismWord: string;
  psychoItems: Array<{ num: string; title: string; desc: string }>;
  woodBadge: string;
  woodHeading: string;
  woodIntro: string;
  woodLabels: { elasticity: string; capacity: string; weight: string; tone: string; bestFor: string };
  woodSpecies: Array<{
    name: string;
    badge: string;
    density: string;
    maxLoad: string;
    weight: string;
    tone: string;
    bestFor: string;
    notes: string;
  }>;
  videosHeading: string;
  videosSub: string;
  patentsTitle: string;
  patentsSubtitle: string;
  safetyBadge: string;
  safetyHeading: string;
  safetyIntroPrefix: string;
  safetyIntroSuffix: string;
  absTitle: string;
  absSub: string;
  precTitle: string;
  precSub: string;
  rulesTitle: string;
  rulesSub: string;
  dirEyebrow: string;
  dirHeading: string;
  dirIntro: string;
  primaryHubBadge: string;
  centersMeta: Record<string, { name: string; city: string; type: string; hours: string; features: string[] }>;
  consultBadge: string;
  consultHeading: string;
  consultBody: string;
  ctaOrder: string;
  ctaCalc: string;
  ctaPortal: string;
  hqHeading: string;
  usOpsLabel: string;
  kyivFlagshipLabel: string;
  kyivAddress: string;
  hqFooterBadge: string;
}

export const CENTERS_PAGE_COPY: Record<Locale, CentersPageCopy> = {
  en: {
    jumpAria: "Heritage page sections",
    jumpLinks: [
      { href: "#founder-story", label: "Founder Story (1996)" },
      { href: "#home-hospital", label: "Home Hospital" },
      { href: "#defender-program", label: "Defender & Veterans" },
      { href: "#audience-protocols", label: "Audience Protocols" },
      { href: "#wood-science", label: "Pine vs. Alder" },
      { href: "#patents", label: "Patents Archive" },
      { href: "#safety-screening", label: "Safety & Contraindications" },
      { href: "#directory", label: "Global Centers" },
    ],
    kpis: [
      { val: "1996", label: "Kyiv Flagship Founded", sub: "30 years continuous heritage" },
      { val: "6 Grants", label: "US, EU, WIPO & UA Patents", sub: "US 6,869,387 • EP 1 038 512" },
      { val: "40+ Nations", label: "Worldwide Home Adoption", sub: "US, Canada, EU & Ukraine" },
      { val: "Glendale, CA", label: "North American Hub", sub: "1–4 day 50-state UPS/FedEx" },
    ],
    founderEyebrow: "Born From Personal Recovery • Vyacheslav Evminov (b. 1940)",
    founderHeading: "From Severe Spinal Trauma to Walking Again: The Vyacheslav Evminov Story",
    founderName: "Vyacheslav Volodymyrovych Evminov",
    founderSubtitle: "Inventor of the Evminov Method • Honored Coach in Academic Rowing",
    mriBadge: "Biomechanical Insight: Unloaded Osmotic Fluid Exchange",
    founderQuote: "Spinal health is not achieved through passive hanging or violent cracking. It requires gentle traction to create space, followed by mindful micro-movements to nourish and stabilize the spine.",
    founderP1: "In the late 1980s, after decades coaching elite academic rowing athletes in Ukraine, Vyacheslav Evminov suffered severe lumbar disc trauma that left him struggling to walk. Unwilling to accept passive immobility or aggressive invasive fusion without exploring conservative biomechanics first, he turned to physics and sports kinesiology.",
    founderP2: "Recognizing that adult intervertebral discs lack direct blood vessels and depend on gentle alternating unloading and movement to stay nourished, he engineered the first multi-layer flexing Carpathian pine plank with a gliding height carriage. Practicing calm, low-amplitude movements at 12°–20° restored his mobility — and sparked the opening of the flagship Kyiv Center in 1996.",
    credentialsHeading: "Leadership & Sports Credentials",
    founderRoles: [
      "Honored Coach of Ukraine in Academic Rowing",
      "Head Coach of the National Rowing Team",
      "First President of the Rowing Federation of Ukraine",
      "Founder & President of the Evminov Vertebral-Health Center (Est. 1996)",
    ],
    timelineHeading: "Four Decades of Spine Biomechanics & Craftsmanship (1970–2026)",
    milestones: [
      { year: "1970–1988", badge: "Elite Sports Leadership", title: "Olympic & World Championship Coaching", desc: "Graduated from the Kyiv State Institute of Physical Culture & Sports (1970), trained Master of Sports athletes, and led Ukraine's academic rowing team internationally." },
      { year: "1989", badge: "The Turning Point", title: "Severe Lumbar Trauma & Refusing Passive Surrender", desc: "After decades of elite athletic coaching, Vyacheslav Evminov suffered severe lumbar disc trauma and applied biomechanics from first principles." },
      { year: "1990–1995", badge: "Biomechanical Breakthrough", title: "Resonant Pine Prototype & Full Athletic Recovery", desc: "Designed the multi-layer flexing Carpathian pine deck and adjustable carriage. Pairing low-angle fractional traction (12°–20°) with micro-movements restored his mobility." },
      { year: "1996", badge: "Center Founding", title: "Opening of Flagship Kyiv Center (9 Kostolna Street)", desc: "Opened the historic flagship Evminov Vertebral-Health Center steps from Maidan Nezalezhnosti in central Kyiv, training certified method instructors." },
      { year: "1999–2005", badge: "Global IP & Recognition", title: "US, European, WIPO Patents & Ukraine MOH 711/2002", desc: "Awarded US Patent 6,869,387 B2, European Patent EP 1 038 512 B1, WIPO PCT WO 1999/043288, Ukrainian Patents 27976/28849A, and MOH registration 711/2002." },
      { year: "2006–2021", badge: "Three-Decade Methodology", title: "Regional Network & Multi-Generational Home Adoption", desc: "Expanded partner studios across Kyiv, Lviv, Odesa, Poland, and Europe while helping hundreds of thousands adopt daily 10-minute home spine hygiene." },
      { year: "2022–Present", badge: "Service & US Expansion", title: "'Spine of the Defender' & Glendale, CA North American Hub", desc: "Launched dedicated unloading protocols for defenders, tactical personnel, and veterans alongside direct 50-state US fulfillment from Glendale, California." },
    ],
    homeHospitalBadge: "Home Wellness Innovation • Домашній Госпіталь",
    homeHospitalHeading: "The “Home Hospital” Model: Studio-Grade Spine Care at Home",
    homeHospitalIntro: "Developed by Vyacheslav Evminov to eliminate commute friction, weather barriers, and endless recurring clinic expenses. During harsh winters and wartime power outages in Kyiv, the Home Hospital concept allowed tens of thousands of families to maintain daily 10-minute spine care safely in their own residences.",
    homeHospitalPillars: [
      { tag: "Daily Consistency", metric: "10–15 Min Micro-Sessions", title: "Gentle Daily Rhythmic Unloading", desc: "Adult intervertebral discs rely on gentle cyclical movement and fluid exchange rather than direct blood vessels. Short daily 10-minute sessions deliver far better consistency than sporadic clinic visits." },
      { tag: "Zero Friction Access", metric: "Immediate AM / PM Care", title: "Zero Commute or Waiting-Room Strain", desc: "Long drives and traffic jams often aggravate a stiff lower back right after a clinic appointment. At home, your board is ready immediately upon waking or right before sleep." },
      { tag: "Household Ergonomics", metric: "5-Sec Shift (Ages 4–85+)", title: "Multi-Generational Family Station", desc: "The gliding alloy carriage adjusts in 5 seconds for school-age youth posture, desk professionals, heavy lifters, and active seniors on one 2.4\" wall-folding board." },
      { tag: "Financial Freedom", metric: "Pays Back in ~4–6 Visits", title: "Decades of Value From One Board", desc: "With typical US massage, chiropractic, or PT co-pays averaging $75–$150 per visit ($3,500+/year), a one-time $450 Evminov board with a 1-year frame warranty saves thousands." },
    ],
    kyivCaptions: [
      "Kyiv Flagship Hall — 9 Kostolna St (Est. 1996)",
      "Personalized Incline Angle Calibration",
      "Calm Low-Amplitude Guided Movement",
    ],
    defenderBadge: "Spine of the Defender • «Знімаємо броню з хребта»",
    defenderHeading: "Specialized Spine Unloading for Military Personnel, Veterans & First Responders",
    defenderIntro: "Purpose-built gentle inclined decompression to offset the relentless physical toll of 33–55 lb ballistic plate carriers, 70–100 lb combat rucksacks, duty belts, and armored vehicle jarring — supporting defenders, US veterans, police, and firefighters.",
    defenderChallengesHeading: "Operational Spinal Load Challenges",
    defenderChallenges: [
      { title: "Tactical Armor & Heavy Ruck Axial Compression", desc: "Extended patrols and training under 33–55 lbs of ballistic plate carriers and 70–100 lbs of combat rucksacks create relentless axial loading on lumbar discs." },
      { title: "Shockwaves, Breaching & Armored Vehicle Jarring", desc: "Rough vehicle transit, parachute landings, and high-impact operational vibrations jar spinal facet joints and lock deep paraspinal stabilizing muscles." },
      { title: "Long-Term Mobility & Veteran Quality of Life", desc: "Service-connected back stiffness is one of the most common long-term challenges facing veterans. Daily gentle unloaded conditioning helps sustain mobility without extreme inversion." },
    ],
    defenderStepsHeading: "3-Stage Defender Unloading Routine (10–15 Min / Day)",
    stageWord: "STAGE",
    defenderSteps: [
      { step: "01", title: "Calm Fractional Unloading (8°–18° Incline)", desc: "Lie supine on the flexing Carpathian pine deck so gentle gravity relieves axial compression accumulated under heavy vests, duty belts, and rucksacks." },
      { step: "02", title: "Deep Paraspinal Corset Conditioning", desc: "Perform slow, controlled low-amplitude micro-movements under unloading to awaken deep multifidus and core stabilizers." },
      { step: "03", title: "Load-Bearing Posture & Recovery Habit", desc: "Pair 10–15 minutes of evening unloading with ergonomic hip-hinge habits to support sustained resilience throughout active duty and civilian life." },
    ],
    audienceBadge: "Tailored Biomechanical Applications",
    audienceHeading: "How Different Profiles Use the Evminov Method",
    challengeWord: "Challenge:",
    routineWord: "Evminov Routine:",
    audiences: [
      {
        id: "athletes", tag: "Athletes & Heavy Lifters", badge: "Rated Up to 330 lbs (Wide)", title: "Powerlifters, CrossFitters, Runners & Rotational Athletes", lead: "Restore post-workout lumbar comfort and calm paraspinal guarding without grip fatigue.",
        mechanisms: [
          { profile: "Powerlifters, Olympic Lifters & CrossFitters", challenge: "Heavy deadlifts, squats, and overhead work compress lumbar segments and leave erectors tight for 48–72 hours.", protocol: "Supine inclined traction at 20°–32° lets erectors fully relax while unloading the spine for 12–15 minutes." },
          { profile: "Distance Runners, Golfers & Combat Athletes", challenge: "Repetitive heel strikes, asymmetric swing torque, and grappling neck loads drive hip-flexor tightness.", protocol: "Symmetrical inclined unloading plus the included padded Glisson Loop at 8°–12° resets alignment safely." },
        ],
        founderNote: "Vyacheslav Evminov was an Honored Rowing Coach who built the first flexing pine board from athletic biomechanics.",
      },
      {
        id: "desk-workers", tag: "Desk & Standing Workers", badge: "10-Min Evening Reset", title: "Remote Tech Professionals, Nurses & Standing Shifts", lead: "Counteract 8–12 hours of static seated overload or concrete-floor standing in 10 calm minutes.",
        mechanisms: [
          { profile: "Seated Compression & Tech-Neck (C5–C7)", challenge: "Sitting hunched over dual monitors places ~40% more pressure on lumbar discs than standing while pulling the head forward.", protocol: "10 minutes at 12°–16° opens tight chest fascia, releases hip flexors, and eases neck tension with the Glisson Loop." },
          { profile: "12-Hour Concrete Floors (Nurses, Educators, Retail)", challenge: "Continuous vertical gravity leaves lower lumbar joints compressed and legs fatigued by evening.", protocol: "Zero-axial-load supine lying with gentle ankle flexes calms lower-back tightness without hanging upside down." },
        ],
        founderNote: "Folds flat to 2.4 inches behind a home-office door — or pairs with the No-Drill Stand for rental apartments.",
      },
      {
        id: "tactical-military", tag: "Military, Veterans & First Responders", badge: "Defender Program", title: "Tactical Operators, Police, Firefighters & Veterans", lead: "Gentle daily spinal decompression designed to unload heavy duty belts, body armor, and ruck strain.",
        mechanisms: [
          { profile: "Plate Carrier, Duty Belt & Ruck Axial Load", challenge: "Carrying 33–100 lbs of tactical gear compresses lower-back structures day after day.", protocol: "10–15 minutes on the inclined flexing pine beam calmly unloads compressed vertebrae and relaxes tight muscles." },
          { profile: "High-Stress Guarding & Mobility Maintenance", challenge: "Long vehicle patrols and high-adrenaline shifts lock paraspinal muscles in protective stiffness.", protocol: "Low-amplitude gliding movements paired with slow diaphragmatic breathing restore relaxed range of motion." },
        ],
        founderNote: "The Kyiv Evminov Center has dedicated specialized spine recovery programs to defenders and veterans since 2022.",
      },
      {
        id: "lumbar-family", tag: "Lumbar Comfort & Multi-Generational Family", badge: "Ages 4 to 85+ Supported", title: "L4–S1 Comfort, Youth Backpack Posture & Active Seniors", lead: "One adaptable pine station serving lower-back comfort, growing teens, and active longevity.",
        mechanisms: [
          { profile: "L4–L5 / L5–S1 Discomfort & Active Seniors", challenge: "Stiff mornings and lower-back tightness make aggressive 90° inversion tables uncomfortable or unsafe.", protocol: "Ultra-gentle 8°–15° angles keep the head upright with zero cranial blood rush and full pine deck support." },
          { profile: "School-Age Youth & Teen Posture (Ages 4–15)", challenge: "Heavy backpacks and tablet screens accelerate rounded shoulders and postural asymmetry.", protocol: "Supervised 6°–12° 'Lying-Down Dancing' to upbeat music builds lifelong posture symmetry in 6 minutes a day." },
        ],
        founderNote: "Spreading a $450 board across a family of 3 over 20 years equals ~$7.50 per person per year.",
      },
    ],
    stagesEyebrow: "Progressive Spine Conditioning",
    stagesHeading: "The Three Progressive Stages of the Evminov Method",
    goalWord: "Goal:",
    threeStages: [
      { stage: "01", name: "Restorative & Unloading Phase", subName: "Gentle Decompression", incline: "8°–15° Low Angle", duration: "Weeks 1–3", goal: "Calm tight paraspinal muscles & establish gentle axial space", desc: "Start with relaxed fractional unloading and slow breathing on flexing Carpathian pine. Avoid jerky movements while your spine adapts smoothly." },
      { stage: "02", name: "Stabilizer & Deep Corset Phase", subName: "Core Strengthening", incline: "15°–25° Moderate Angle", duration: "Weeks 4–10", goal: "Awaken deep lumbar & core stabilizers (Multifidus & Rotatores)", desc: "Introduce controlled, low-amplitude movements under gentle traction — training the deep stabilizing muscles ordinary floor workouts rarely isolate." },
      { stage: "03", name: "Preventative Maintenance Phase", subName: "Lifelong Hygiene", incline: "15°–35° Custom Angle", duration: "Ongoing Daily Habit", goal: "Sustain posture resilience & lifelong mobility", desc: "A quick 5–10 minute routine 3–5× per week offsets daily sitting, commuting, and gym loads year-round." },
    ],
    psychoBadge: "Autonomic Calm • Mind-Body Spine Stress",
    psychoHeading: "Decompressing the Spine to Release Chronic Stress & Muscular Guarding",
    psychoIntro: "Physical back tension and mental overload reinforce each other in a daily loop. Ten quiet minutes of gentle unloading and deep diaphragmatic breathing helps shift the body out of stress-driven guarding into calm recovery.",
    mechanismWord: "MECHANISM",
    psychoItems: [
      { num: "01", title: "Autonomic Nervous System Calm", desc: "Chronic back tension keeps the nervous system locked in subtle fight-or-flight vigilance. Gentle supine unloading invites parasympathetic rest." },
      { num: "02", title: "Breaking the Tension-Stiffness Cycle", desc: "Mental stress unconsciously tightens paraspinal rotatores and shoulder elevators. Slow inclined elongation releases stiff fibers gently." },
      { num: "03", title: "Diaphragmatic Breathing & Restorative Sleep", desc: "Opening a hunched thoracic ribcage restores deep breathing — making a 10-minute evening session an ideal wind-down ritual before bed." },
    ],
    woodBadge: "Natural Wood Science • Carpathian Timber",
    woodHeading: "Carpathian Resonant Pine vs. Select Ukrainian Alder",
    woodIntro: "Why authentic Evminov boards are crafted from multi-layer resonant European timber instead of rigid steel or cold plastic.",
    woodLabels: { elasticity: "Elasticity Profile", capacity: "Rated Capacity", weight: "Board Weight", tone: "Finish Tone", bestFor: "Best For:" },
    woodSpecies: [
      { name: "Resonant Carpathian Pine", badge: "Flagship Firm Flex • Up to 330 lbs", density: "Firm Anatomical Elasticity", maxLoad: "210–220 lbs (Standard/Fold) • 330 lbs (Wide)", weight: "23–25 lbs (30 lbs Wide)", tone: "Golden Honey Natural or Dark Walnut Stain", bestFor: "Everyday households, strength athletes, tall users (up to 6'9\"), and users wanting crisp, firm structural support.", notes: "Harvested from slow-growth Carpathian timber with tight annual rings and laminated in multi-layer construction for lasting spring resilience." },
      { name: "Select Ukrainian Alder", badge: "~15% Lighter Edition • Silky Grain", density: "Enhanced Gentle Spring Deflection", maxLoad: "Up to 220 lbs & 6'4\"", weight: "19–21 lbs (~3–4 lbs lighter than pine)", tone: "Warm Amber / Royal Cognac Finish", bestFor: "Users under 220 lbs, seniors, delicate cervical/thoracic routines, frequent angle adjustments, and refined home interiors.", notes: "Fine uniform wood grain delivers slightly softer spring compliance and noticeably lighter everyday handling when folding against the wall." },
    ],
    videosHeading: "Official Evminov Method & 16-Inch US Stud Setup Demonstrations",
    videosSub: "Watch the original inclined traction technique and North American wall installation walkthrough.",
    patentsTitle: "Official Patent Grants & Historical Registry Archive",
    patentsSubtitle: "Click any original patent certificate below to inspect full resolution scans or open public records at USPTO, EPO, and WIPO.",
    safetyBadge: "Safety Screening & Contraindications",
    safetyHeading: "Contraindications & Essential Biomechanical Safety Rules",
    safetyIntroPrefix: "Evminov boards are classified in the US as",
    safetyIntroSuffix: "Review these safety guidelines carefully and consult a licensed physician if you have serious spinal pathology.",
    absTitle: "Absolute Contraindications",
    absSub: "Do not perform inclined traction during any of the following conditions:",
    precTitle: "Physician Clearance Needed",
    precSub: "Require stabilization or individualized physician clearance before starting:",
    rulesTitle: "Essential Daily Safety Rules",
    rulesSub: "Follow these simple mechanical and recovery habits during every session:",
    dirEyebrow: "Global Network & US Hub",
    dirHeading: "Official Evminov Centers & Distribution Hubs",
    dirIntro: "Visit the historic flagship studio in Kyiv, connect with regional Ukrainian & European partner centers, or order directly with insured fulfillment from our Glendale, California operations hub.",
    primaryHubBadge: "Primary Hub",
    centersMeta: {},
    consultBadge: "At-Home Evminov System • Direct US & Global Support",
    consultHeading: "Can't Visit Kyiv in Person? Bring Authentic Evminov Craftsmanship Home",
    consultBody: "Every Evminov board shipped to the US, Canada, and Europe is crafted from genuine Carpathian pine or select Ukrainian alder under Vyacheslav Evminov's international patents — complete with free Glisson Loop, 16\" US stud mounting kit, 30-day Patient Portal workspace, 60-day trial, and 1-year structural frame warranty.",
    ctaOrder: "Order Authentic Board (From $450)",
    ctaCalc: "Calculate My Incline Angle",
    ctaPortal: "Preview Patient Portal",
    hqHeading: "Official Headquarters & US Hub Contact",
    usOpsLabel: "US Operations & Dispatch:",
    kyivFlagshipLabel: "Kyiv Historic Flagship (Est. 1996):",
    kyivAddress: "9 Kostolna St, Kyiv 01001, Ukraine",
    hqFooterBadge: "Original Patented Design • 1-Year Frame Warranty",
  },
  es: {
    jumpAria: "Secciones de Historia y Centros",
    jumpLinks: [
      { href: "#founder-story", label: "Historia Fundador (1996)" },
      { href: "#home-hospital", label: "Hospital en Casa" },
      { href: "#defender-program", label: "Defensor y Veteranos" },
      { href: "#audience-protocols", label: "Protocolos por Perfil" },
      { href: "#wood-science", label: "Pino vs. Aliso" },
      { href: "#patents", label: "Archivo de Patentes" },
      { href: "#safety-screening", label: "Seguridad y Contraindicaciones" },
      { href: "#directory", label: "Centros Globales" },
    ],
    kpis: [
      { val: "1996", label: "Centro Insignia en Kyiv", sub: "30 años de trayectoria continua" },
      { val: "6 Patentes", label: "EE. UU., UE, OMPI y UA", sub: "US 6,869,387 • EP 1 038 512" },
      { val: "40+ Países", label: "Adopción Global en Casa", sub: "EE. UU., Canadá, UE y Ucrania" },
      { val: "Glendale, CA", label: "Hub Norteamericano", sub: "UPS/FedEx 1–4 días 50 estados" },
    ],
    founderEyebrow: "Nacido de una Recuperación Personal • Vyacheslav Evminov (n. 1940)",
    founderHeading: "De un Grave Trauma Espinal a Volver a Caminar: La Historia de Vyacheslav Evminov",
    founderName: "Vyacheslav Volodymyrovych Evminov",
    founderSubtitle: "Inventor del Método Evminov • Entrenador Emérito de Remo",
    mriBadge: "Biomecánica: Intercambio Osmótico de Fluidos sin Carga",
    founderQuote: "La salud espinal no se logra colgando pasivamente ni crujiendo la espalda. Requiere tracción suave para crear espacio, seguida de micromovimientos conscientes para nutrir y estabilizar la columna.",
    founderP1: "A fines de los años 80, tras décadas entrenando remeros olímpicos, Vyacheslav Evminov sufrió un grave trauma discal lumbar. Negándose a aceptar la inmovilidad pasiva, aplicó física y kinesiología deportiva desde cero.",
    founderP2: "Sabiendo que los discos adultos dependen de ciclos suaves de descarga y movimiento, diseñó la primera tabla elástica multicapa de pino de los Cárpatos. Practicar a 12°–20° restauró su movilidad y dio origen al Centro Evminov en Kyiv en 1996.",
    credentialsHeading: "Trayectoria Deportiva y Liderazgo",
    founderRoles: [
      "Entrenador Emérito de Ucrania en Remo Académico",
      "Entrenador Principal de la Selección Nacional de Remo",
      "Primer Presidente de la Federación de Remo de Ucrania",
      "Fundador y Presidente del Centro Evminov (Desde 1996)",
    ],
    timelineHeading: "Cuatro Décadas de Biomecánica Espinal (1970–2026)",
    milestones: [
      { year: "1970–1988", badge: "Deporte de Élite", title: "Entrenamiento Olímpico y Mundial", desc: "Graduado en Educación Física (1970), entrenó atletas internacionales y dirigió el remo académico de Ucrania." },
      { year: "1989", badge: "Punto de Inflexión", title: "Grave Lesión Lumbar y Enfoque Biomecánico", desc: "Tras sufrir trauma lumbar grave, aplicó principios físicos para diseñar una recuperación conservadora." },
      { year: "1990–1995", badge: "Avance Técnico", title: "Prototipo de Pino Resonante y Recuperación Total", desc: "Creó la tabla multicapa flexible con carro ajustable y recuperó su vida activa mediante tracción suave." },
      { year: "1996", badge: "Fundación", title: "Apertura del Centro Insignia de Kyiv (Calle Kostolna 9)", desc: "Inauguró el Centro Evminov junto a Maidan en Kyiv, formando instructores certificados." },
      { year: "1999–2005", badge: "Patentes Globales", title: "Patentes EE. UU., Europa, OMPI y Registro MOH UA", desc: "Obtuvo US 6,869,387 B2, EP 1 038 512 B1, WO 1999/043288 y registro histórico MOH 711/2002." },
      { year: "2006–2021", badge: "Red Internacional", title: "Expansión Regional y Hogares en 40+ Países", desc: "Estudios asociados en Kyiv, Lviv, Odesa, Polonia y Europa llevando la higiene espinal diaria a miles de familias." },
      { year: "2022–Hoy", badge: "Servicio y EE. UU.", title: "«Espalda del Defensor» y Hub de Glendale, CA", desc: "Programas dedicados para defensores y veteranos junto con envíos directos a los 50 estados de EE. UU." },
    ],
    homeHospitalBadge: "Innovación en Casa • Hospital en Casa",
    homeHospitalHeading: "El Modelo «Hospital en Casa»: Cuidado Espinal de Estudio en Su Hogar",
    homeHospitalIntro: "Creado por Vyacheslav Evminov para eliminar traslados, tráfico y gastos recurrentes en clínicas, permitiendo mantener 10 minutos diarios de cuidado espinal en casa todo el año.",
    homeHospitalPillars: [
      { tag: "Constancia Diaria", metric: "10–15 Min Diarios", title: "Descarga Rítmica Suave Cada Día", desc: "Sesiones cortas diarias ofrecen mucha mayor constancia que visitas esporádicas a clínicas." },
      { tag: "Cero Fricción", metric: "Mañana o Noche", title: "Sin Traslados ni Salas de Espera", desc: "Evite agravar su espalda en el tráfico: su tabla está lista al despertar o antes de dormir." },
      { tag: "Ergonomía Familiar", metric: "Ajuste en 5 Seg", title: "Estación Multigeneracional (4–85+)", desc: "Un solo equipo plegable a 6 cm para niños, oficina, atletas y mayores." },
      { tag: "Ahorro Real", metric: "Se Paga en 4–6 Visitas", title: "Décadas de Valor con Una Tabla", desc: "Un pago único de $450 con garantía de 1 año ahorra miles frente a terapias continuas." },
    ],
    kyivCaptions: [
      "Sala Insignia de Kyiv — Calle Kostolna 9 (1996)",
      "Calibración Personalizada del Ángulo",
      "Movimiento Guiado de Baja Amplitud",
    ],
    defenderBadge: "Espalda del Defensor • Veteranos y Fuerzas Tácticas",
    defenderHeading: "Descarga Espinal Especializada para Militares, Veteranos y Rescatistas",
    defenderIntro: "Descompresión inclinada suave diseñada para compensar chalecos balísticos (15–25 kg), mochilas tácticas (30–45 kg) y vibraciones de vehículos.",
    defenderChallengesHeading: "Desafíos de Carga Espinal Operativa",
    defenderChallenges: [
      { title: "Compresión Axial por Chaleco y Mochila", desc: "Patrullas prolongadas con 15–45 kg de equipo comprimen continuamente los discos lumbares." },
      { title: "Impactos y Vibraciones de Vehículos", desc: "Terrenos difíciles y saltos tensan las articulaciones facetarias y bloquean la musculatura profunda." },
      { title: "Movilidad a Largo Plazo para Veteranos", desc: "El acondicionamiento diario suave ayuda a sostener la movilidad sin inversión extrema." },
    ],
    defenderStepsHeading: "Rutina Defensor en 3 Etapas (10–15 Min / Día)",
    stageWord: "ETAPA",
    defenderSteps: [
      { step: "01", title: "Descarga Fraccionada Tranquila (8°–18°)", desc: "Recuéstese sobre el pino flexible para aliviar la compresión acumulada bajo el equipo." },
      { step: "02", title: "Fortalecimiento del Corsé Profundo", desc: "Micromovimientos controlados bajo descarga que despiertan los estabilizadores profundos." },
      { step: "03", title: "Hábito Diario de Recuperación", desc: "10–15 minutos nocturnos para sostener la resistencia en servicio activo y vida civil." },
    ],
    audienceBadge: "Aplicaciones Biomecánicas a Medida",
    audienceHeading: "Cómo Usan el Método Evminov los Distintos Perfiles",
    challengeWord: "Desafío:",
    routineWord: "Rutina Evminov:",
    audiences: [
      {
        id: "athletes", tag: "Atletas y Levantadores", badge: "Hasta 150 kg (Wide)", title: "Powerlifters, CrossFit, Corredores y Deportes de Rotación", lead: "Recupere confort lumbar post-entreno sin fatiga de agarre.",
        mechanisms: [
          { profile: "Pesas y CrossFit", challenge: "Sentadillas y peso muerto dejan erectores rígidos 48–72 horas.", protocol: "Tracción supina a 20°–32° durante 12–15 minutos para relajación total." },
          { profile: "Corredores, Golf y Combate", challenge: "Impacto repetitivo y torsión asimétrica tensan caderas y cuello.", protocol: "Descarga simétrica + Petla Glissona incluida a 8°–12°." },
        ],
        founderNote: "Vyacheslav Evminov creó la tabla aplicando biomecánica de alto rendimiento.",
      },
      {
        id: "desk-workers", tag: "Oficina y Turnos de Pie", badge: "Reinicio de 10 Min", title: "Trabajo Remoto, Enfermería y Jornadas de Pie", lead: "Contrarreste 8–12 horas sentado o sobre pisos duros en 10 minutos.",
        mechanisms: [
          { profile: "Compresión Sentado y Cuello Tecnológico", challenge: "Sentarse ejerce ~40% más presión lumbar que estar de pie.", protocol: "10 min a 12°–16° + Petla Glissona para pecho, psoas y cuello." },
          { profile: "12 Horas de Pie (Salud, Docencia)", challenge: "La gravedad continua comprime las facetas lumbares.", protocol: "Descarga supina suave con bombeo de tobillos sin ponerse boca abajo." },
        ],
        founderNote: "Se pliega a 6 cm tras la puerta o usa el Soporte Sin Taladro.",
      },
      {
        id: "tactical-military", tag: "Militares, Veteranos y Emergencias", badge: "Programa Defensor", title: "Operadores Tácticos, Policía, Bomberos y Veteranos", lead: "Descarga diaria para cinturones tácticos, chalecos y mochilas.",
        mechanisms: [
          { profile: "Carga Axial de Equipo Táctico", challenge: "15–45 kg de equipo comprimen la columna día tras día.", protocol: "10–15 minutos sobre pino flexible alivian vértebras comprimidas." },
          { profile: "Tensión por Estrés Operativo", challenge: "Turnos largos bloquean los músculos paravertebrales.", protocol: "Deslizamientos suaves y respiración diafragmática devuelven movilidad." },
        ],
        founderNote: "El Centro de Kyiv dedica programas especiales a defensores desde 2022.",
      },
      {
        id: "lumbar-family", tag: "Confort Lumbar y Familia", badge: "Edades 4 a 85+", title: "Confort L4–S1, Postura Juvenil y Mayores Activos", lead: "Una estación adaptable para espalda baja, adolescentes y longevidad.",
        mechanisms: [
          { profile: "Molestia L4–S1 y Mayores Activos", challenge: "Las mesas de inversión de 90° resultan incómodas o inseguras.", protocol: "Ángulos suaves de 8°–15° cabeza arriba con soporte total." },
          { profile: "Escolares y Adolescentes (4–15 Años)", challenge: "Mochilas y pantallas aceleran la espalda encorvada.", protocol: "6 minutos supervisados a 6°–12° con música alegre." },
        ],
        founderNote: "$450 entre 3 personas durante 20 años equivalen a ~$7.50/persona/año.",
      },
    ],
    stagesEyebrow: "Acondicionamiento Progresivo",
    stagesHeading: "Las Tres Etapas Progresivas del Método Evminov",
    goalWord: "Objetivo:",
    threeStages: [
      { stage: "01", name: "Fase Restauradora y Descarga", subName: "Descompresión Suave", incline: "8°–15° Bajo", duration: "Semanas 1–3", goal: "Calmar músculos tensos y crear espacio axial suave", desc: "Comience con descarga relajada y respiración lenta sobre pino flexible." },
      { stage: "02", name: "Fase Estabilizadora Profunda", subName: "Corsé Muscular", incline: "15°–25° Moderado", duration: "Semanas 4–10", goal: "Despertar estabilizadores lumbares profundos (Multífido)", desc: "Incorpore micromovimientos controlados bajo tracción suave." },
      { stage: "03", name: "Fase de Mantenimiento Preventivo", subName: "Higiene de por Vida", incline: "15°–35° A Medida", duration: "Hábito Diario", goal: "Mantener resiliencia postural y movilidad todo el año", desc: "5–10 minutos 3–5× por semana compensan trabajo, viajes y deporte." },
    ],
    psychoBadge: "Calma Autonómica • Estrés y Espalda",
    psychoHeading: "Descomprimir la Columna para Liberar el Estrés Crónico",
    psychoIntro: "La tensión física dorsal y la sobrecarga mental se retroalimentan. Diez minutos de descarga suave y respiración profunda ayudan a salir de la alerta crónica hacia la recuperación.",
    mechanismWord: "MECANISMO",
    psychoItems: [
      { num: "01", title: "Calma del Sistema Nervioso", desc: "La descarga supina alivia la guardia muscular e invita al descanso parasimpático." },
      { num: "02", title: "Romper el Ciclo Tensión-Rigidez", desc: "La elongación lenta suelta fibras rígidas sin activar reflejos defensivos." },
      { num: "03", title: "Respiración Profunda y Mejor Sueño", desc: "Abrir el tórax restaura la respiración diafragmática como ritual nocturno." },
    ],
    woodBadge: "Ciencia de la Madera • Carpintería Europea",
    woodHeading: "Pino Resonante de los Cárpatos vs. Aliso Ucraniano Selecto",
    woodIntro: "Por qué las tablas auténticas Evminov se fabrican en madera resonante multicapa en lugar de acero rígido o plástico.",
    woodLabels: { elasticity: "Elasticidad", capacity: "Capacidad", weight: "Peso Tabla", tone: "Acabado", bestFor: "Ideal Para:" },
    woodSpecies: [
      { name: "Pino de los Cárpatos", badge: "Flexión Firme • Hasta 150 kg", density: "Elasticidad Anatómica Firme", maxLoad: "95–100 kg (Estándar) • 150 kg (Wide)", weight: "10,5–11,5 kg (13,5 kg Wide)", tone: "Miel Natural o Nogal Oscuro", bestFor: "Hogares, atletas, usuarios altos (hasta 2,06 m) que buscan soporte firme.", notes: "Madera de crecimiento lento laminada en varias capas para elasticidad duradera." },
      { name: "Aliso Ucraniano Selecto", badge: "~15% Más Ligera • Veta Sedosa", density: "Flexión Suave Refinada", maxLoad: "Hasta 100 kg y 1,93 m", weight: "8,6–9,5 kg (~1,5–2 kg menos)", tone: "Ámbar Cálido / Coñac Real", bestFor: "Menores de 100 kg, mayores, rutinas cervicales y ajustes frecuentes.", notes: "Veta fina uniforme con respuesta ligeramente más suave y manejo ultraligero." },
    ],
    videosHeading: "Demostraciones Oficiales del Método y Montaje en Viga 16\"",
    videosSub: "Vea la técnica original de tracción inclinada y la instalación en pared norteamericana.",
    patentsTitle: "Patentes Oficiales y Archivo de Registros",
    patentsSubtitle: "Haga clic en cualquier certificado para ampliar el escaneo o abrir el registro público USPTO, EPO y WIPO.",
    safetyBadge: "Seguridad y Contraindicaciones",
    safetyHeading: "Contraindicaciones y Reglas Esenciales de Seguridad",
    safetyIntroPrefix: "Las tablas Evminov están clasificadas en EE. UU. como",
    safetyIntroSuffix: "Revise estas pautas y consulte a su médico si presenta patología espinal grave.",
    absTitle: "Contraindicaciones Absolutas",
    absSub: "No realice tracción inclinada en los siguientes casos:",
    precTitle: "Requiere Autorización Médica",
    precSub: "Consulte a su médico antes de comenzar si presenta:",
    rulesTitle: "Reglas Diarias de Seguridad",
    rulesSub: "Siga estos hábitos mecánicos simples en cada sesión:",
    dirEyebrow: "Red Global y Hub EE. UU.",
    dirHeading: "Centros Oficiales Evminov y Centros de Distribución",
    dirIntro: "Visite el estudio histórico en Kyiv, conecte con centros asociados europeos o pida directamente desde Glendale, California.",
    primaryHubBadge: "Hub Principal",
    centersMeta: {},
    consultBadge: "Sistema Evminov en Casa • Soporte EE. UU. y Global",
    consultHeading: "¿No Puede Visitar Kyiv? Lleve la Artesanía Auténtica Evminov a Su Hogar",
    consultBody: "Cada tabla enviada a EE. UU., Canadá y Europa se fabrica bajo las patentes internacionales de Vyacheslav Evminov — con Petla Glissona gratis, kit 16\", Portal 30 días, prueba 60 días y garantía de 1 año.",
    ctaOrder: "Pedir Tabla Auténtica (Desde $450)",
    ctaCalc: "Calcular Mi Ángulo",
    ctaPortal: "Ver Portal del Paciente",
    hqHeading: "Sede Oficial y Contacto EE. UU.",
    usOpsLabel: "Operaciones y Envíos EE. UU.:",
    kyivFlagshipLabel: "Sede Histórica de Kyiv (1996):",
    kyivAddress: "9 Kostolna St, Kyiv 01001, Ucrania",
    hqFooterBadge: "Diseño Original Patentado • Garantía 1 Año",
  },
  fr: {
    jumpAria: "Sections Histoire et Centres",
    jumpLinks: [
      { href: "#founder-story", label: "Histoire Fondateur (1996)" },
      { href: "#home-hospital", label: "Hôpital à Domicile" },
      { href: "#defender-program", label: "Défenseur & Vétérans" },
      { href: "#audience-protocols", label: "Protocoles par Profil" },
      { href: "#wood-science", label: "Pin vs. Aulne" },
      { href: "#patents", label: "Archives Brevets" },
      { href: "#safety-screening", label: "Sécurité & Contre-indications" },
      { href: "#directory", label: "Centres Mondiaux" },
    ],
    kpis: [
      { val: "1996", label: "Centre Historique Kyiv", sub: "30 ans d'héritage continu" },
      { val: "6 Brevets", label: "US, UE, OMPI & UA", sub: "US 6,869,387 • EP 1 038 512" },
      { val: "40+ Pays", label: "Adoption Mondiale", sub: "USA, Canada, UE & Ukraine" },
      { val: "Glendale, CA", label: "Hub Nord-Américain", sub: "UPS/FedEx 1–4 j (50 États)" },
    ],
    founderEyebrow: "Né d'une Guérison Personnelle • Vyacheslav Evminov (né en 1940)",
    founderHeading: "D'un Grave Traumatisme Lombaire au Retour à la Marche : L'Histoire de Vyacheslav Evminov",
    founderName: "Vyacheslav Volodymyrovych Evminov",
    founderSubtitle: "Inventeur de la Méthode Evminov • Entraîneur Émérite d'Aviron",
    mriBadge: "Biomécanique : Échanges Hydriques Osmotiques en Décharge",
    founderQuote: "La santé vertébrale ne s'obtient ni par suspension passive ni par craquements brusques. Elle exige une traction douce créant de l'espace suivie de micro-mouvements stabilisateurs.",
    founderP1: "À la fin des années 80, après des décennies à entraîner l'équipe nationale d'aviron, Vyacheslav Evminov a subi une grave blessure lombaire. Refusant l'immobilisme, il s'est appuyé sur la physique et la kinésiologie.",
    founderP2: "Sachant que les disques adultes se nourrissent par cycles de décharge et de mouvement doux, il a conçu la première planche élastique en pin des Carpates et fondé le Centre Evminov à Kyiv en 1996.",
    credentialsHeading: "Parcours Sportif & Distinctions",
    founderRoles: [
      "Entraîneur Émérite d'Ukraine en Aviron",
      "Entraîneur Principal de l'Équipe Nationale d'Aviron",
      "Premier Président de la Fédération d'Aviron d'Ukraine",
      "Fondateur & Président du Centre Evminov (Depuis 1996)",
    ],
    timelineHeading: "Quatre Décennies de Biomécanique Vertébrale (1970–2026)",
    milestones: [
      { year: "1970–1988", badge: "Sport d'Élite", title: "Entraînement Olympique & Mondial", desc: "Diplômé en 1970, a formé des champions internationaux d'aviron en Ukraine." },
      { year: "1989", badge: "Tournant Décisif", title: "Grave Traumatisme Lombaire", desc: "Confronté à une lésion sévère, il conçoit une approche biomécanique conservatrice." },
      { year: "1990–1995", badge: "Innovation", title: "Prototype en Pin Résonant & Guérison", desc: "Met au point la planche lamellée souple avec chariot et retrouve toute sa mobilité." },
      { year: "1996", badge: "Fondation", title: "Ouverture du Centre de Kyiv (9 rue Kostolna)", desc: "Inauguration du centre historique près de Maïdan et formation d'instructeurs certifiés." },
      { year: "1999–2005", badge: "Brevets Mondiaux", title: "Brevets US, Europe, OMPI & Agrément MOH UA", desc: "US 6,869,387 B2, EP 1 038 512 B1, WO 1999/043288 et agrément MOH 711/2002." },
      { year: "2006–2021", badge: "Réseau International", title: "Centres Partenaires & Foyers dans 40+ Pays", desc: "Expansion à Kyiv, Lviv, Odesa, Pologne et en Europe." },
      { year: "2022–Aujourd'hui", badge: "Service & USA", title: "« Dos du Défenseur » & Hub Glendale, CA", desc: "Protocoles dédiés aux vétérans et expédition directe aux 50 États américains." },
    ],
    homeHospitalBadge: "Innovation Domicile • Hôpital à Domicile",
    homeHospitalHeading: "Le Modèle « Hôpital à Domicile » : Soin de Studio chez Vous",
    homeHospitalIntro: "Conçu par Vyacheslav Evminov pour supprimer trajets, attentes et frais répétés, permettant 10 minutes de soin vertébral quotidien en toute autonomie.",
    homeHospitalPillars: [
      { tag: "Régularité", metric: "10–15 Min/Jour", title: "Décharge Rythmique Quotidienne", desc: "De courtes séances quotidiennes sont bien plus efficaces que des visites sporadiques." },
      { tag: "Zéro Trajet", metric: "Matin & Soir", title: "Aucun Embouteillage ni Attente", desc: "Votre planche est prête dès le réveil ou juste avant le coucher." },
      { tag: "Ergonomie Famille", metric: "Réglage 5 Sec", title: "Station Multi-Générations (4–85+)", desc: "Un seul appareil pliable à 6 cm pour enfants, adultes, sportifs et seniors." },
      { tag: "Économie", metric: "Rentabilisée en 4–6 Séances", title: "Des Décennies de Valeur", desc: "450 $ une seule fois (garantie 1 an) face à des milliers de dollars en cabinet." },
    ],
    kyivCaptions: [
      "Salle Historique de Kyiv — 9 rue Kostolna (1996)",
      "Calibration Personnalisée de l'Angle",
      "Mouvements Doux à Faible Amplitude",
    ],
    defenderBadge: "Dos du Défenseur • Vétérans & Forces Tactiques",
    defenderHeading: "Décharge Vertébrale Spécialisée pour Militaires, Vétérans & Secouristes",
    defenderIntro: "Décompression douce conçue pour compenser gilets pare-balles (15–25 kg), sacs tactiques (30–45 kg) et vibrations de véhicules blindés.",
    defenderChallengesHeading: "Défis de Charge Opérationnelle",
    defenderChallenges: [
      { title: "Compression par Gilet & Sac Lourd", desc: "Les patrouilles sous 15–45 kg compriment continuellement les disques lombaires." },
      { title: "Chocs & Vibrations de Véhicules", desc: "Les impacts répétés verrouillent les stabilisateurs profonds en contracture." },
      { title: "Mobilité Durable des Vétérans", desc: "Un entretien quotidien doux préserve la mobilité sans inversion extrême." },
    ],
    defenderStepsHeading: "Routine Défenseur en 3 Étapes (10–15 Min/Jour)",
    stageWord: "ÉTAPE",
    defenderSteps: [
      { step: "01", title: "Décharge Fractionnée Calme (8°–18°)", desc: "Allongé sur le pin souple pour soulager la compression liée à l'équipement." },
      { step: "02", title: "Renforcement du Corset Profond", desc: "Micro-mouvements contrôlés réveillant les muscles stabilisateurs profonds." },
      { step: "03", title: "Habitude Quotidienne de Récupération", desc: "10–15 minutes le soir pour soutenir l'endurance en service et dans la vie civile." },
    ],
    audienceBadge: "Applications Biomécaniques Ciblées",
    audienceHeading: "Comment Chaque Profil Utilise la Méthode Evminov",
    challengeWord: "Défi :",
    routineWord: "Routine Evminov :",
    audiences: [
      {
        id: "athletes", tag: "Athlètes & Force", badge: "Jusqu'à 150 kg (Wide)", title: "Force Athlétique, CrossFit, Course & Sports de Rotation", lead: "Soulagez les lombaires après l'effort sans fatigue de poigne.",
        mechanisms: [
          { profile: "Force & CrossFit", challenge: "Squats et soulevés de terre gardent les érecteurs tendus 48–72 h.", protocol: "Traction dorsale à 20°–32° pendant 12–15 minutes." },
          { profile: "Coureurs, Golf & Combat", challenge: "Impacts répétés et torsion tendent hanches et nuque.", protocol: "Décharge symétrique + Boucle de Glisson à 8°–12°." },
        ],
        founderNote: "Vyacheslav Evminov a conçu la planche à partir de la biomécanique sportive.",
      },
      {
        id: "desk-workers", tag: "Bureau & Postes Debout", badge: "Reset 10 Min", title: "Télétravailleurs, Soignants & Métiers Debout", lead: "Inversez 8 à 12 heures assis ou debout en 10 minutes.",
        mechanisms: [
          { profile: "Position Assise & Tech-Neck", challenge: "Rester assis augmente la pression discale d'environ 40 %.", protocol: "10 min à 12°–16° + Boucle de Glisson pour poitrine, psoas et cou." },
          { profile: "12 Heures Debout (Soignants, Enseignants)", challenge: "La gravité comprime les lombaires toute la garde.", protocol: "Décharge dorsale douce sans jamais se mettre tête en bas." },
        ],
        founderNote: "Pliage plat 6 cm derrière une porte ou support sans perçage.",
      },
      {
        id: "tactical-military", tag: "Militaires, Vétérans & Secours", badge: "Programme Défenseur", title: "Opérateurs Tactiques, Police, Pompiers & Vétérans", lead: "Décharge quotidienne contre gilets, ceinturons et sacs lourds.",
        mechanisms: [
          { profile: "Charge d'Équipement Tactique", challenge: "15 à 45 kg compriment la colonne jour après jour.", protocol: "10–15 minutes sur le pin souple relâchent vertèbres et muscles." },
          { profile: "Contractures Liées au Stress", challenge: "Les patrouilles verrouillent la musculature paravertébrale.", protocol: "Glissés doux et respiration diaphragmatique." },
        ],
        founderNote: "Le Centre de Kyiv accompagne les défenseurs et vétérans depuis 2022.",
      },
      {
        id: "lumbar-family", tag: "Confort Lombaire & Famille", badge: "De 4 à 85+ Ans", title: "Confort L4–S1, Posture Jeunes & Seniors Actifs", lead: "Une seule station bois pour toute la maison.",
        mechanisms: [
          { profile: "Inconfort L4–S1 & Seniors", challenge: "Les tables d'inversion 90° sont inconfortables ou risquées.", protocol: "Angles doux 8°–15° tête haute avec soutien complet." },
          { profile: "Enfants & Ados (4–15 Ans)", challenge: "Cartables lourds et écrans voûtent les épaules.", protocol: "6 minutes en musique à 6°–12° sous surveillance." },
        ],
        founderNote: "450 $ sur 20 ans pour 3 personnes = ~7,50 $/personne/an.",
      },
    ],
    stagesEyebrow: "Conditionnement Progressif",
    stagesHeading: "Les Trois Étapes Progressives de la Méthode Evminov",
    goalWord: "Objectif :",
    threeStages: [
      { stage: "01", name: "Phase de Décharge & Détente", subName: "Décompression Douce", incline: "8°–15° Faible", duration: "Semaines 1–3", goal: "Apaiser les tensions et créer de l'espace axial", desc: "Débutez par une décharge calme et une respiration lente sur pin souple." },
      { stage: "02", name: "Phase Stabilisatrice Profonde", subName: "Corset Musculaire", incline: "15°–25° Modéré", duration: "Semaines 4–10", goal: "Réveiller les stabilisateurs profonds (Multifide)", desc: "Ajoutez des micro-mouvements contrôlés sous traction douce." },
      { stage: "03", name: "Phase d'Entretien Préventif", subName: "Hygiène à Vie", incline: "15°–35° Sur Mesure", duration: "Habitude Quotidienne", goal: "Préserver posture et mobilité toute l'année", desc: "5–10 minutes 3 à 5×/semaine compensent bureau, trajets et sport." },
    ],
    psychoBadge: "Calme Autonome • Stress & Dos",
    psychoHeading: "Décompresser la Colonne pour Relâcher le Stress Chronique",
    psychoIntro: "Tension dorsale et charge mentale s'alimentent mutuellement. Dix minutes de décharge douce et de respiration profonde ramènent le corps vers un calme réparateur.",
    mechanismWord: "MÉCANISME",
    psychoItems: [
      { num: "01", title: "Apaisement du Système Nerveux", desc: "La décharge dorsale favorise le passage en mode parasympathique." },
      { num: "02", title: "Rompre le Cycle Tension-Raideur", desc: "L'élongation lente relâche les fibres sans réflexe défensif." },
      { num: "03", title: "Respiration Profonde & Sommeil", desc: "Ouvrir la cage thoracique prépare un sommeil réparateur." },
    ],
    woodBadge: "Science du Bois • Essences Européennes",
    woodHeading: "Pin Résonant des Carpates vs. Aulne Sélectionné",
    woodIntro: "Pourquoi les planches Evminov authentiques sont façonnées en bois multicouche résonant plutôt qu'en acier rigide.",
    woodLabels: { elasticity: "Élasticité", capacity: "Charge Max", weight: "Poids Planche", tone: "Finition", bestFor: "Idéal Pour :" },
    woodSpecies: [
      { name: "Pin des Carpates", badge: "Flexion Ferme • Jusqu'à 150 kg", density: "Élasticité Anatomique Ferme", maxLoad: "95–100 kg (Standard) • 150 kg (Wide)", weight: "10,5–11,5 kg (13,5 kg Wide)", tone: "Miel Naturel ou Noyer Foncé", bestFor: "Foyers, sportifs, grandes tailles (jusqu'à 2,06 m) cherchant un maintien ferme.", notes: "Bois à croissance lente lamellé multicouche pour une souplesse durable." },
      { name: "Aulne Sélectionné d'Ukraine", badge: "~15 % Plus Légère • Grain Soyeux", density: "Flexion Douce Raffinée", maxLoad: "Jusqu'à 100 kg & 1,93 m", weight: "8,6–9,5 kg (~1,5–2 kg plus légère)", tone: "Ambre Chaud / Cognac Royal", bestFor: "Moins de 100 kg, seniors, nuque sensible et manipulations fréquentes.", notes: "Grain fin uniforme offrant un confort plus souple et un poids réduit." },
    ],
    videosHeading: "Démonstrations Officielles de la Méthode & Montage 16\"",
    videosSub: "Découvrez la technique originale de traction inclinée et la fixation murale.",
    patentsTitle: "Brevets Officiels & Archives des Registres",
    patentsSubtitle: "Cliquez sur un certificat pour agrandir le scan ou ouvrir les registres publics USPTO, OEB et OMPI.",
    safetyBadge: "Sécurité & Contre-indications",
    safetyHeading: "Contre-indications & Règles de Sécurité Essentielles",
    safetyIntroPrefix: "Aux États-Unis, les planches Evminov sont classées comme",
    safetyIntroSuffix: "Consultez ces consignes et demandez l'avis d'un médecin en cas de pathologie grave.",
    absTitle: "Contre-indications Absolues",
    absSub: "Ne pratiquez pas la traction inclinée dans les cas suivants :",
    precTitle: "Avis Médical Requis",
    precSub: "Obtenez l'accord d'un médecin avant de débuter en cas de :",
    rulesTitle: "Règles Quotidiennes de Sécurité",
    rulesSub: "Respectez ces gestes simples à chaque séance :",
    dirEyebrow: "Réseau Mondial & Hub US",
    dirHeading: "Centres Officiels Evminov & Hubs de Distribution",
    dirIntro: "Visitez le centre historique de Kyiv, contactez nos partenaires européens ou commandez depuis notre hub de Glendale, Californie.",
    primaryHubBadge: "Hub Principal",
    centersMeta: {},
    consultBadge: "Système Evminov à Domicile • Support US & Mondial",
    consultHeading: "Vous Ne Pouvez Pas Venir à Kyiv ? Invitez l'Artisanat Evminov Chez Vous",
    consultBody: "Chaque planche expédiée aux USA, Canada et Europe est fabriquée sous les brevets internationaux de Vyacheslav Evminov — avec boucle de Glisson offerte, kit 16\", Portail 30 jours, essai 60 jours et garantie 1 an.",
    ctaOrder: "Commander la Planche (Dès 450 $)",
    ctaCalc: "Calculer Mon Angle",
    ctaPortal: "Voir le Portail Patient",
    hqHeading: "Siège Historique & Contact US",
    usOpsLabel: "Opérations & Expédition US :",
    kyivFlagshipLabel: "Centre Historique de Kyiv (1996) :",
    kyivAddress: "9 rue Kostolna, Kyiv 01001, Ukraine",
    hqFooterBadge: "Design Original Breveté • Garantie 1 An",
  },
  uk: {
    jumpAria: "Розділи сторінки Спадщина та Центри",
    jumpLinks: [
      { href: "#founder-story", label: "Історія Засновника (1996)" },
      { href: "#home-hospital", label: "Домашній Госпіталь" },
      { href: "#defender-program", label: "Спина Захисника" },
      { href: "#audience-protocols", label: "Протоколи за Профілем" },
      { href: "#wood-science", label: "Сосна проти Вільхи" },
      { href: "#patents", label: "Архів Патентів" },
      { href: "#safety-screening", label: "Протипоказання та Безпека" },
      { href: "#directory", label: "Мережа Центрів" },
    ],
    kpis: [
      { val: "1996", label: "Флагманський Центр у Києві", sub: "30 років безперервної спадщини" },
      { val: "6 Патентів", label: "США, ЄС, WIPO та Україна", sub: "US 6,869,387 • EP 1 038 512" },
      { val: "40+ Країн", label: "Світове Визнання Вдома", sub: "США, Канада, ЄС та Україна" },
      { val: "Glendale, CA", label: "Північноамериканський Хаб", sub: "UPS/FedEx 1–4 дні (50 штатів)" },
    ],
    founderEyebrow: "Народжено з Особистого Одужання • В'ячеслав Євмінов (нар. 1940)",
    founderHeading: "Від Тяжкої Травми Хребта до Повернення до Життя: Історія В'ячеслава Євмінова",
    founderName: "В'ячеслав Володимирович Євмінов",
    founderSubtitle: "Винахідник Методики Євмінова • Заслужений Тренер з Академічного Веслування",
    mriBadge: "Біомеханіка: Осмотичний Обмін Рідини під час Розвантаження",
    founderQuote: "Здоров'я хребта не досягається пасивним висом або грубим хрустом. Потрібне м'яке витягування для створення простору, а потім усвідомлені мікрорухи для живлення та стабілізації хребта.",
    founderP1: "Наприкінці 1980-х років, після десятиліть підготовки елітних веслувальників України, В'ячеслав Євмінов зазнав тяжкої травми поперекових дисків. Не бажаючи погоджуватися на пасивну нерухомість чи ризиковану операцію, він звернувся до фізики та спортивної кінезіології.",
    founderP2: "Усвідомивши, що міжхребцеві диски дорослих не мають прямих судин і живляться завдяки чергуванню розвантаження та м'яких рухів, він створив першу багатошарову пружну дошку з карпатської сосни. Заняття під кутом 12°–20° повернули йому активне життя — і вже у 1996 році в Києві відкрився флагманський Центр Євмінова.",
    credentialsHeading: "Спортивні Звання та Лідерство",
    founderRoles: [
      "Заслужений тренер України з академічного веслування",
      "Головний тренер національної збірної з веслування",
      "Перший Президент Федерації академічного веслування України",
      "Засновник і Президент Вертебрально-оздоровчого Центру Євмінова (з 1996 р.)",
    ],
    timelineHeading: "Чотири Десятиліття Біомеханіки та Майстерності (1970–2026)",
    milestones: [
      { year: "1970–1988", badge: "Елітний Спорт", title: "Тренерська Робота на Рівні Чемпіонатів Світу", desc: "Закінчив Київський інститут фізкультури (1970), підготував майстрів спорту та очолював збірну України." },
      { year: "1989", badge: "Переломний Момент", title: "Тяжка Травма Попереку та Пошук Біомеханічного Рішення", desc: "Відмовившись від пасивної здачі, застосував закони фізики для консервативного відновлення хребта." },
      { year: "1990–1995", badge: "Прорив", title: "Прототип із Резонансної Сосни та Повне Відновлення", desc: "Створив багатошарову пружну дошку з рухомою кареткою; м'яка тяга 12°–20° повернула йому здоров'я." },
      { year: "1996", badge: "Заснування Центру", title: "Відкриття Флагманського Центру в Києві (вул. Костьольна, 9)", desc: "Відкрито історичний Центр Євмінова біля Майдану Незалежності, розпочато підготовку методистів." },
      { year: "1999–2005", badge: "Світові Патенти", title: "Патенти США, Європи, WIPO та Реєстрація МОЗ України 711/2002", desc: "Отримано US 6,869,387 B2, EP 1 038 512 B1, WO 1999/043288, UA 27976/28849A та реєстрацію МОЗ." },
      { year: "2006–2021", badge: "Міжнародна Мережа", title: "Регіональні Центри та Домашнє Використання в 40+ Країнах", desc: "Партнерські студії в Києві, Львові, Одесі, Польщі та Європі — сотні тисяч родин обрали щоденну гігієну спини." },
      { year: "2022–Сьогодні", badge: "Служіння та США", title: "«Спина Захисника» та Операційний Хаб у Глендейлі, CA", desc: "Спеціальна програма розвантаження для військових і ветеранів плюс експрес-доставка у 50 штатів США." },
    ],
    homeHospitalBadge: "Домашня Інновація • «Домашній Госпіталь»",
    homeHospitalHeading: "Концепція «Домашній Госпіталь»: Студійний Догляд за Хребтом Вдома",
    homeHospitalIntro: "Розроблена В'ячеславом Євміновим, щоб усунути затори, погодні бар'єри та постійні витрати на клініки. Під час суворих зим і відключень світла в Києві «Домашній Госпіталь» дозволив десяткам тисяч родин підтримувати здоров'я спини за 10 хвилин щодня прямо вдома.",
    homeHospitalPillars: [
      { tag: "Щоденна Регулярність", metric: "10–15 Хв Щодня", title: "М'яке Ритмічне Розвантаження", desc: "Короткі щоденні 10-хвилинні сеанси дають значно стабільніший результат, ніж епізодичні візити до клініки." },
      { tag: "Нуль Бар'єрів", metric: "Зранку та Ввечері", title: "Без Дороги та Черг", desc: "Поїздки в авто часто зводять нанівець ефект після прийому. Вдома дошка готова одразу після сну або ввечері." },
      { tag: "Сімейна Ергономіка", metric: "Зміна за 5 Сек (4–85+)", title: "Станція для Всієї Родини", desc: "Каретка переставляється за 5 секунд для школярів, офісних працівників, атлетів та бабусь на одній дошці." },
      { tag: "Фінансова Свобода", metric: "Окупність за 4–6 Візитів", title: "Десятиліття Користі з Одної Дошки", desc: "Разова інвестиція $450 із 1-річною гарантією економить тисячі доларів на регулярних процедурах." },
    ],
    kyivCaptions: [
      "Київський Флагманський Зал — вул. Костьольна, 9 (з 1996 р.)",
      "Індивідуальне Налаштування Кута Нахилу",
      "Спокійні Малоамплітудні Вправи з Методистом",
    ],
    defenderBadge: "Спина Захисника • «Знімаємо броню з хребта»",
    defenderHeading: "Спеціалізоване Розвантаження Хребта для Військових, Ветеранів та Рятувальників",
    defenderIntro: "Делікатна похила декомпресія для компенсації колосального навантаження від бронежилетів (15–25 кг), бойових рюкзаків (30–45 кг), тактичних поясів та вібрацій бронетехніки.",
    defenderChallengesHeading: "Оперативні Навантаження на Хребет",
    defenderChallenges: [
      { title: "Осьова Компресія від Бронежилета та Рюкзака", desc: "Тривалі виходи під 15–45 кг спорядження створюють безперервний тиск на поперекові диски." },
      { title: "Ударні Хвилі та Вібрація Бронетехніки", desc: "Їзда бездоріжжям, десантування та ударні навантаження блокують глибокі м'язи-стабілізатори у спазмі." },
      { title: "Довгострокова Мобільність Ветеранів", desc: "Щоденне м'яке розвантаження підтримує рухливість і якість життя без небезпечної інверсії." },
    ],
    defenderStepsHeading: "3-Етапна Програма «Спина Захисника» (10–15 Хв / День)",
    stageWord: "ЕТАП",
    defenderSteps: [
      { step: "01", title: "Спокійне Фракційне Розвантаження (8°–18°)", desc: "Лежання на пружній карпатській сосні плавно знімає стиснення, накопичене під бронею та спорядженням." },
      { step: "02", title: "Зміцнення Глибокого М'язового Корсета", desc: "Контрольовані мікрорухи під час витяжки пробуджують глибокі багатороздільні м'язи хребта." },
      { step: "03", title: "Щоденна Звичка Відновлення", desc: "10–15 хвилин увечері підтримують витривалість під час служби та у цивільному житті." },
    ],
    audienceBadge: "Прицільна Біомеханіка",
    audienceHeading: "Як Різні Групи Використовують Методику Євмінова",
    challengeWord: "Виклик:",
    routineWord: "Програма Євмінова:",
    audiences: [
      {
        id: "athletes", tag: "Атлети та Силовий Спорт", badge: "До 150 кг (Wide)", title: "Пауерліфтери, CrossFit, Бігуни та Ротаційний Спорт", lead: "Повертайте комфорт попереку після тренувань без втоми хвату.",
        mechanisms: [
          { profile: "Силовий Тренінг та CrossFit", challenge: "Важка тяга й присідання тримають спину затиснутою 48–72 години.", protocol: "Похила витяжка 20°–32° по 12–15 хвилин повністю розслабляє розгиначі." },
          { profile: "Бігуни, Гольф та Єдиноборства", challenge: "Ударне навантаження й скручування затискають стегна та шию.", protocol: "Симетричне розвантаження + Петля Гліссона під 8°–12°." },
        ],
        founderNote: "В'ячеслав Євмінов створив першу дошку, спираючись на спортивну біомеханіку.",
      },
      {
        id: "desk-workers", tag: "Офіс та Робота на Ногах", badge: "Вечірній Ресет 10 Хв", title: "ІТ-Спеціалісти, Медики, Вчителі та Стоячі Зміни", lead: "Компенсуйте 8–12 годин сидіння або стояння за 10 спокійних хвилин.",
        mechanisms: [
          { profile: "Сидяча Компресія та «Офісна Шия»", challenge: "Сидіння створює на ~40% вищий тиск у дисках, ніж стояння.", protocol: "10 хв під 12°–16° + Петля Гліссона розкривають груди, псоас і шию." },
          { profile: "12 Годин на Ногах (Медики, Торгівля)", challenge: "Безперервна гравітація стискає суглоби попереку до вечора.", protocol: "Лежання без осьового навантаження з рухами стопами без перевертання." },
        ],
        founderNote: "Складається до 6 см за дверима або ставиться на Стійку без свердління.",
      },
      {
        id: "tactical-military", tag: "Військові, Ветерани та Рятувальники", badge: "Програма Захисника", title: "Військовослужбовці, Поліція, ДСНС та Ветерани", lead: "М'яка щоденна декомпресія після бронежилетів, поясів і рюкзаків.",
        mechanisms: [
          { profile: "Навантаження Спорядженням", challenge: "15–45 кг спорядження щодня стискають нижні відділи спини.", protocol: "10–15 хв на пружній сосні знімають тиск із хребців." },
          { profile: "Стресовий Спазм М'язів", challenge: "Довгі чергування блокують паравертебральні м'язи.", protocol: "Малоамплітудні ковзання та діафрагмальне дихання повертають легкість." },
        ],
        founderNote: "Київський Центр Євмінова розвиває спеціалізовані програми для захисників із 2022 року.",
      },
      {
        id: "lumbar-family", tag: "Поперек та Сімейна Станція", badge: "Вік від 4 до 85+", title: "Комфорт L4–S1, Дитяча Постава та Активне Довголіття", lead: "Одна адаптивна дошка для попереку, школярів і старшого покоління.",
        mechanisms: [
          { profile: "Дискомфорт L4–S1 та Вік 55+", challenge: "Інверсійні столи на 90° некомфортні або небезпечні.", protocol: "Ультрам'які кути 8°–15° головою вгору з повною опорою спини." },
          { profile: "Діти та Підлітки (4–15 Років)", challenge: "Рюкзаки та гаджети швидко формують сутулість.", protocol: "6 хвилин під музику на 6°–12° під наглядом батьків." },
        ],
        founderNote: "$450 на родину з 3 осіб на 20 років — це ~$7.50 на людину на рік.",
      },
    ],
    stagesEyebrow: "Поетапне Відновлення Хребта",
    stagesHeading: "Три Послідовні Етапи Методики Євмінова",
    goalWord: "Ціль:",
    threeStages: [
      { stage: "01", name: "Релаксаційно-Відновлювальний Етап", subName: "М'яка Декомпресія", incline: "8°–15° Малий Кут", duration: "Тижні 1–3", goal: "Заспокоїти спазмовані м'язи та створити простір", desc: "Починайте з розслабленого витягування та спокійного дихання на карпатській сосні без різких рухів." },
      { stage: "02", name: "Зміцнювальний Етап", subName: "Глибокий Корсет", incline: "15°–25° Середній Кут", duration: "Тижні 4–10", goal: "Пробудити глибокі стабілізатори хребта (Multifidus)", desc: "Додавайте контрольовані малоамплітудні вправи під час витяжки — те, чого не дає звичайний фітнес." },
      { stage: "03", name: "Підтримуючий Етап", subName: "Щоденна Гігієна", incline: "15°–35° Індивідуально", duration: "Постійна Звичка", goal: "Зберегти рівну поставу та легкість на все життя", desc: "Короткі 5–10 хвилин 3–5 разів на тиждень компенсують офіс, авто та спортзал." },
    ],
    psychoBadge: "Спокій Нервової Системи • Психосоматика і Стрес",
    psychoHeading: "Розвантаження Хребта для Зняття Хронічного Стресу та М'язового Панцира",
    psychoIntro: "Фізична напруга спини та емоційне перевантаження підсилюють одне одного. Десять тихих хвилин м'якої витяжки та глибокого дихання переводять організм із режиму стресу в режим відновлення.",
    mechanismWord: "МЕХАНІЗМ",
    psychoItems: [
      { num: "01", title: "Заспокоєння Вегетативної Системи", desc: "М'яке розвантаження на спині знімає захисний тонус і вмикає парасимпатичне відновлення." },
      { num: "02", title: "Розрив Циклу «Стрес — Спазм»", desc: "Повільне похиле подовження відпускає затиснуті глибокі м'язи без захисного рефлексу." },
      { num: "03", title: "Діафрагмальне Дихання та Глибокий Сон", desc: "Розкриття грудної клітки робить вечірні 10 хвилин ідеальним ритуалом перед сном." },
    ],
    woodBadge: "Природне Матеріалознавство • Карпатська Деревина",
    woodHeading: "Резонансна Карпатська Сосна проти Добірної Української Вільхи",
    woodIntro: "Чому оригінальні дошки Євмінова виготовляються з багатошарової резонансної деревини замість жорсткої сталі чи пластику.",
    woodLabels: { elasticity: "Профіль Пружності", capacity: "Максимальне Навантаження", weight: "Вага Дошки", tone: "Відтінок", bestFor: "Найкраще Підходить:" },
    woodSpecies: [
      { name: "Резонансна Карпатська Сосна", badge: "Флагманська Пружність • До 150 кг", density: "Чітка Анатомічна Пружність", maxLoad: "95–100 кг (Стандарт) • 150 кг (Wide)", weight: "10,5–11,5 кг (13,5 кг Wide)", tone: "Натуральний Мед або Темний Горіх", bestFor: "Родин, атлетів, високих користувачів (до 206 см) і поціновувачів щільної опори.", notes: "Карпатська деревина повільного росту в багатошаровій склейці для десятиліть пружності." },
      { name: "Добірна Українська Вільха", badge: "На ~15% Легша • Шовковиста Текстура", density: "М'якший Делікатний Прогин", maxLoad: "До 100 кг і 193 см", weight: "8,6–9,5 кг (на 1,5–2 кг легша)", tone: "Теплий Бурштин / Королівський Коньяк", bestFor: "Користувачів до 100 кг, людей 55+, шийних програм та частого складання.", notes: "Рівномірна дрібна текстура забезпечує м'якшу амортизацію та легке перенесення." },
    ],
    videosHeading: "Офіційні Відео Методики Євмінова та Монтажу у Стійку 16\"",
    videosSub: "Перегляньте оригінальну техніку занять і покрокове кріплення на американські стіни.",
    patentsTitle: "Офіційні Патенти та Історичний Архів Реєстрів",
    patentsSubtitle: "Натисніть на будь-який сертифікат для перегляду скану високої якості або переходу до реєстрів USPTO, EPO та WIPO.",
    safetyBadge: "Скринінг Безпеки • Протипоказання",
    safetyHeading: "Протипоказання та Обов'язкові Правила Безпеки",
    safetyIntroPrefix: "У США дошки Євмінова класифікуються як",
    safetyIntroSuffix: "Уважно ознайомтеся з правилами та проконсультуйтеся з лікарем при серйозних патологіях хребта.",
    absTitle: "Абсолютні Протипоказання",
    absSub: "Не виконуйте похилу витяжку за наявності таких станів:",
    precTitle: "Потрібен Дозвіл Лікаря",
    precSub: "Отримайте індивідуальний дозвіл лікаря перед початком при:",
    rulesTitle: "Щоденні Правила Безпеки",
    rulesSub: "Дотримуйтесь цих простих правил під час кожного заняття:",
    dirEyebrow: "Глобальна Мережа та Хаб США",
    dirHeading: "Офіційні Центри Євмінова та Дистрибуційні Хаби",
    dirIntro: "Відвідайте історичний флагман у Києві, зверніться до партнерських центрів в Україні та ЄС або замовляйте напряму зі складу в Глендейлі, Каліфорнія.",
    primaryHubBadge: "Головний Хаб",
    centersMeta: {},
    consultBadge: "Домашня Система Євмінова • Підтримка в США та Світі",
    consultHeading: "Не Можете Відвідати Київ Особисто? Замовте Оригінальну Дошку Євмінова Додому",
    consultBody: "Кожна дошка, що доставляється у США, Канаду та Європу, виготовлена з карпатської сосни або вільхи за міжнародними патентами В'ячеслава Євмінова — з Петлею Гліссона, кріпленням 16\", Кабінетом на 30 днів, 60-денним тестом і 1-річною гарантією.",
    ctaOrder: "Замовити Оригінальну Дошку (Від $450)",
    ctaCalc: "Розрахувати Мій Кут",
    ctaPortal: "Відкрити Кабінет Пацієнта",
    hqHeading: "Офіційна Штаб-Квартира та Хаб США",
    usOpsLabel: "Операції та Доставка в США:",
    kyivFlagshipLabel: "Історичний Флагман у Києві (1996):",
    kyivAddress: "вул. Костьольна, 9, Київ 01001, Україна",
    hqFooterBadge: "Оригінальний Патентований Дизайн • 1 Рік Гарантії",
  },
  ru: {
    jumpAria: "Разделы страницы Наследие и Центры",
    jumpLinks: [
      { href: "#founder-story", label: "История Основателя (1996)" },
      { href: "#home-hospital", label: "Домашний Госпиталь" },
      { href: "#defender-program", label: "Спина Защитника" },
      { href: "#audience-protocols", label: "Протоколы по Профилю" },
      { href: "#wood-science", label: "Сосна против Ольхи" },
      { href: "#patents", label: "Архив Патентов" },
      { href: "#safety-screening", label: "Противопоказания" },
      { href: "#directory", label: "Сеть Центров" },
    ],
    kpis: [
      { val: "1996", label: "Флагманский Центр в Киеве", sub: "30 лет непрерывного наследия" },
      { val: "6 Патентов", label: "США, ЕС, WIPO и Украина", sub: "US 6,869,387 • EP 1 038 512" },
      { val: "40+ Стран", label: "Мировое Признание Дома", sub: "США, Канада, ЕС и Украина" },
      { val: "Glendale, CA", label: "Североамериканский Хаб", sub: "UPS/FedEx 1–4 дня (50 штатов)" },
    ],
    founderEyebrow: "Рождено из Личного Выздоровления • Вячеслав Евминов (род. 1940)",
    founderHeading: "От Тяжёлой Травмы Позвоночника к Возвращению в Жизнь: История Вячеслава Евминова",
    founderName: "Вячеслав Владимирович Евминов",
    founderSubtitle: "Изобретатель Методики Евминова • Заслуженный Тренер по Академической Гребле",
    mriBadge: "Биомеханика: Осмотический Обмен Жидкости при Разгрузке",
    founderQuote: "Здоровье позвоночника не достигается пассивным висом или грубым хрустом. Нужна мягкая вытяжка для создания пространства и осознанные микродвижения для питания и стабилизации.",
    founderP1: "В конце 1980-х, после десятилетий подготовки элитных гребцов, Вячеслав Евминов получил тяжёлую травму поясничных дисков. Отказавшись от пассивной неподвижности и рискованной операции, он обратился к физике и спортивной кинезиологии.",
    founderP2: "Понимая, что диски взрослых питаются за счёт циклов разгрузки и мягких движений, он создал первую многослойную упругую доску из карпатской сосны. Занятия под углом 12°–20° вернули ему активность — и в 1996 году в Киеве открылся Центр Евминова.",
    credentialsHeading: "Спортивные Звания и Лидерство",
    founderRoles: [
      "Заслуженный тренер Украины по академической гребле",
      "Главный тренер национальной сборной по гребле",
      "Первый Президент Федерации академической гребли Украины",
      "Основатель и Президент Вертебрально-оздоровительного Центра Евминова (с 1996 г.)",
    ],
    timelineHeading: "Четыре Десятилетия Биомеханики и Мастерства (1970–2026)",
    milestones: [
      { year: "1970–1988", badge: "Элитный Спорт", title: "Тренерская Работа на Уровне Чемпионатов Мира", desc: "Окончил Киевский институт физкультуры (1970), подготовил мастеров спорта и возглавлял сборную." },
      { year: "1989", badge: "Переломный Момент", title: "Тяжёлая Травма Поясницы и Биомеханический Поиск", desc: "Отказавшись сдаваться, применил законы физики для консервативного восстановления." },
      { year: "1990–1995", badge: "Прорыв", title: "Прототип из Резонансной Сосны и Полное Восстановление", desc: "Создал многослойную упругую доску с кареткой; мягкая тяга 12°–20° вернула ему здоровье." },
      { year: "1996", badge: "Основание Центра", title: "Открытие Флагманского Центра в Киеве (ул. Костёльная, 9)", desc: "Открыт исторический Центр Евминова у Майдана, начата подготовка методистов." },
      { year: "1999–2005", badge: "Мировые Патенты", title: "Патенты США, Европы, WIPO и Регистрация Минздрава 711/2002", desc: "Получены US 6,869,387 B2, EP 1 038 512 B1, WO 1999/043288, UA 27976/28849A." },
      { year: "2006–2021", badge: "Международная Сеть", title: "Региональные Центры и Домашние Занятия в 40+ Странах", desc: "Партнёрские студии в Киеве, Львове, Одессе, Польше и Европе." },
      { year: "2022–Сегодня", badge: "Служение и США", title: "«Спина Защитника» и Хаб в Глендейле, CA", desc: "Специальная программа разгрузки для военных и ветеранов плюс экспресс-доставка по 50 штатам США." },
    ],
    homeHospitalBadge: "Домашняя Инновация • «Домашний Госпиталь»",
    homeHospitalHeading: "Концепция «Домашний Госпиталь»: Студийный Уход за Спиной Дома",
    homeHospitalIntro: "Создана Вячеславом Евминовым, чтобы убрать пробки, очереди и постоянные траты на клиники, позволяя поддерживать спину за 10 минут ежедневно прямо дома.",
    homeHospitalPillars: [
      { tag: "Регулярность", metric: "10–15 Мин Ежедневно", title: "Мягкая Ритмичная Разгрузка", desc: "Короткие ежедневные сеансы дают гораздо более стойкий результат, чем редкие визиты в клинику." },
      { tag: "Без Барьеров", metric: "Утром и Вечером", title: "Без Дороги и Очередей", desc: "Долгая дорога часто сводит эффект на нет. Дома доска готова сразу после сна или вечером." },
      { tag: "Семейная Эргономика", metric: "Смена за 5 Сек (4–85+)", title: "Станция для Всей Семьи", desc: "Каретка переставляется за 5 секунд для детей, офиса, атлетов и старшего поколения." },
      { tag: "Финансовая Свобода", metric: "Окупаемость за 4–6 Визитов", title: "Десятилетия Пользы от Одной Доски", desc: "Разовая покупка за $450 с 1-летней гарантией экономит тысячи долларов." },
    ],
    kyivCaptions: [
      "Киевский Флагманский Зал — ул. Костёльная, 9 (с 1996 г.)",
      "Индивидуальная Настройка Угла Наклона",
      "Спокойные Малоамплитудные Упражнения",
    ],
    defenderBadge: "Спина Защитника • Военные и Ветераны",
    defenderHeading: "Специализированная Разгрузка Позвоночника для Военных, Ветеранов и Спасателей",
    defenderIntro: "Деликатная наклонная декомпрессия для компенсации нагрузки от бронежилетов (15–25 кг), рюкзаков (30–45 кг), тактических поясов и вибраций техники.",
    defenderChallengesHeading: "Оперативные Нагрузки на Позвоночник",
    defenderChallenges: [
      { title: "Осевая Компрессия от Бронежилета и Рюкзака", desc: "Длительные выходы под 15–45 кг снаряжения непрерывно сжимают поясничные диски." },
      { title: "Ударные Волны и Вибрация Техники", desc: "Езда по бездорожью и ударные нагрузки блокируют глубокие стабилизаторы в спазме." },
      { title: "Долгосрочная Подвижность Ветеранов", desc: "Ежедневная мягкая разгрузка поддерживает качество жизни без опасной инверсии." },
    ],
    defenderStepsHeading: "3-Этапная Программа «Спина Защитника» (10–15 Мин / День)",
    stageWord: "ЭТАП",
    defenderSteps: [
      { step: "01", title: "Спокойная Фракционная Разгрузка (8°–18°)", desc: "Лежание на упругой сосне плавно снимает сжатие, накопленное под снаряжением." },
      { step: "02", title: "Укрепление Глубокого Мышечного Корсета", desc: "Контролируемые микродвижения в вытяжке пробуждают глубокие стабилизаторы." },
      { step: "03", title: "Ежедневная Привычка Восстановления", desc: "10–15 минут вечером поддерживают выносливость на службе и в гражданской жизни." },
    ],
    audienceBadge: "Прицельная Биомеханика",
    audienceHeading: "Как Разные Группы Используют Методику Евминова",
    challengeWord: "Вызов:",
    routineWord: "Программа Евминова:",
    audiences: [
      {
        id: "athletes", tag: "Атлеты и Силовой Спорт", badge: "До 150 кг (Wide)", title: "Пауэрлифтеры, CrossFit, Бегуны и Ротационный Спорт", lead: "Возвращайте комфорт пояснице после тренировок без усталости хвата.",
        mechanisms: [
          { profile: "Силовой Тренинг и CrossFit", challenge: "Тяжёлая тяга и приседания держат спину зажатой 48–72 часа.", protocol: "Наклонная вытяжка 20°–32° по 12–15 минут полностью расслабляет спину." },
          { profile: "Бегуны, Гольф и Единоборства", challenge: "Ударная нагрузка и скручивания зажимают бёдра и шею.", protocol: "Симметричная разгрузка + Петля Глиссона под 8°–12°." },
        ],
        founderNote: "Вячеслав Евминов создал первую доску на основе спортивной биомеханики.",
      },
      {
        id: "desk-workers", tag: "Офис и Работа на Ногах", badge: "Вечерний Ресет 10 Мин", title: "IT-Специалисты, Медики, Учителя и Стоячие Смены", lead: "Компенсируйте 8–12 часов сидения или стояния за 10 спокойных минут.",
        mechanisms: [
          { profile: "Сидячая Компрессия и «Офисная Шея»", challenge: "Сидение создаёт на ~40% большее давление в дисках, чем стояние.", protocol: "10 мин под 12°–16° + Петля Глиссона раскрывают грудь, псоас и шею." },
          { profile: "12 Часов на Ногах (Медики, Торговля)", challenge: "Непрерывная гравитация сжимает суставы поясницы к вечеру.", protocol: "Лежание без осевой нагрузки с движениями стопами без переворачивания." },
        ],
        founderNote: "Складывается до 6 см за дверью или ставится на Стойку без сверления.",
      },
      {
        id: "tactical-military", tag: "Военные, Ветераны и Спасатели", badge: "Программа Защитника", title: "Военнослужащие, Полиция, Спасатели и Ветераны", lead: "Мягкая ежедневная декомпрессия после бронежилетов, поясов и рюкзаков.",
        mechanisms: [
          { profile: "Нагрузка Снаряжением", challenge: "15–45 кг снаряжения ежедневно сжимают нижние отделы спины.", protocol: "10–15 мин на упругой сосне снимают давление с позвонков." },
          { profile: "Стрессовый Спазм Мышц", challenge: "Долгие дежурства блокируют паравертебральные мышцы.", protocol: "Малоамплитудные скольжения и диафрагмальное дыхание возвращают лёгкость." },
        ],
        founderNote: "Киевский Центр Евминова развивает программы для защитников с 2022 года.",
      },
      {
        id: "lumbar-family", tag: "Поясница и Семейная Станция", badge: "Возраст от 4 до 85+", title: "Комфорт L4–S1, Детская Осанка и Активное Долголетие", lead: "Одна адаптивная доска для поясницы, школьников и старшего поколения.",
        mechanisms: [
          { profile: "Дискомфорт L4–S1 и Возраст 55+", challenge: "Инверсионные столы на 90° некомфортны или опасны.", protocol: "Ультрамягкие углы 8°–15° головой вверх с полной опорой спины." },
          { profile: "Дети и Подростки (4–15 Лет)", challenge: "Рюкзаки и гаджеты быстро формируют сутулость.", protocol: "6 минут под музыку на 6°–12° под присмотром родителей." },
        ],
        founderNote: "$450 на семью из 3 человек на 20 лет — это ~$7.50 на человека в год.",
      },
    ],
    stagesEyebrow: "Поэтапное Восстановление",
    stagesHeading: "Три Последовательных Этапа Методики Евминова",
    goalWord: "Цель:",
    threeStages: [
      { stage: "01", name: "Релаксационно-Восстановительный Этап", subName: "Мягкая Декомпрессия", incline: "8°–15° Малый Угол", duration: "Недели 1–3", goal: "Успокоить спазмированные мышцы и создать пространство", desc: "Начинайте с расслабленной вытяжки и спокойного дыхания на сосне без резких движений." },
      { stage: "02", name: "Укрепляющий Этап", subName: "Глубокий Корсет", incline: "15°–25° Средний Угол", duration: "Недели 4–10", goal: "Пробудить глубокие стабилизаторы (Multifidus)", desc: "Добавляйте контролируемые малоамплитудные упражнения в вытяжке." },
      { stage: "03", name: "Поддерживающий Этап", subName: "Ежедневная Гигиена", incline: "15°–35° Индивидуально", duration: "Постоянная Привычка", goal: "Сохранить ровную осанку и лёгкость на всю жизнь", desc: "Короткие 5–10 минут 3–5 раз в неделю компенсируют офис, авто и зал." },
    ],
    psychoBadge: "Спокойствие Нервной Системы • Психосоматика и Стресс",
    psychoHeading: "Разгрузка Позвоночника для Снятия Хронического Стресса и Зажимов",
    psychoIntro: "Физическое напряжение спины и эмоциональная перегрузка усиливают друг друга. Десять тихих минут мягкой вытяжки и глубокого дыхания переводят организм в режим восстановления.",
    mechanismWord: "МЕХАНИЗМ",
    psychoItems: [
      { num: "01", title: "Успокоение Вегетативной Системы", desc: "Мягкая разгрузка на спине снимает защитный тонус и включает парасимпатическое восстановление." },
      { num: "02", title: "Разрыв Цикла «Стресс — Спазм»", desc: "Медленное наклонное удлинение отпускает зажатые глубокие мышцы без защитного рефлекса." },
      { num: "03", title: "Диафрагмальное Дыхание и Глубокий Сон", desc: "Раскрытие грудной клетки делает вечерние 10 минут идеальным ритуалом перед сном." },
    ],
    woodBadge: "Природное Материаловедение • Карпатская Древесина",
    woodHeading: "Резонансная Карпатская Сосна против Отборной Украинской Ольхи",
    woodIntro: "Почему оригинальные доски Евминова изготавливаются из многослойной резонансной древесины вместо жёсткой стали или пластика.",
    woodLabels: { elasticity: "Профиль Упругости", capacity: "Максимальная Нагрузка", weight: "Вес Доски", tone: "Оттенок", bestFor: "Лучше Подходит:" },
    woodSpecies: [
      { name: "Резонансная Карпатская Сосна", badge: "Флагманская Упругость • До 150 кг", density: "Чёткая Анатомическая Упругость", maxLoad: "95–100 кг (Стандарт) • 150 кг (Wide)", weight: "10,5–11,5 кг (13,5 кг Wide)", tone: "Натуральный Мёд или Тёмный Орех", bestFor: "Семей, атлетов, высоких пользователей (до 206 см) и ценителей плотной опоры.", notes: "Карпатская древесина медленного роста в многослойной склейке для десятилетий упругости." },
      { name: "Отборная Украинская Ольха", badge: "На ~15% Легче • Шелковистая Текстура", density: "Более Мягкий Деликатный Прогиб", maxLoad: "До 100 кг и 193 см", weight: "8,6–9,5 кг (на 1,5–2 кг легче)", tone: "Тёплый Янтарь / Королевский Коньяк", bestFor: "Пользователей до 100 кг, людей 55+, шейных программ и частого складывания.", notes: "Равномерная мелкая текстура обеспечивает мягкую амортизацию и лёгкий вес." },
    ],
    videosHeading: "Официальные Видео Методики Евминова и Монтажа в Стойку 16\"",
    videosSub: "Посмотрите оригинальную технику занятий и пошаговое крепление на американские стены.",
    patentsTitle: "Официальные Патенты и Исторический Архив Реестров",
    patentsSubtitle: "Нажмите на любой сертификат для просмотра скана или перехода в реестры USPTO, EPO и WIPO.",
    safetyBadge: "Скрининг Безопасности • Противопоказания",
    safetyHeading: "Противопоказания и Обязательные Правила Безопасности",
    safetyIntroPrefix: "В США доски Евминова классифицируются как",
    safetyIntroSuffix: "Внимательно ознакомьтесь с правилами и проконсультируйтесь с врачом при серьёзных патологиях.",
    absTitle: "Абсолютные Противопоказания",
    absSub: "Не выполняйте наклонную вытяжку при наличии следующих состояний:",
    precTitle: "Требуется Разрешение Врача",
    precSub: "Получите индивидуальное разрешение врача перед началом при:",
    rulesTitle: "Ежедневные Правила Безопасности",
    rulesSub: "Соблюдайте эти простые правила на каждом занятии:",
    dirEyebrow: "Глобальная Сеть и Хаб США",
    dirHeading: "Официальные Центры Евминова и Дистрибуционные Хабы",
    dirIntro: "Посетите исторический флагман в Киеве, свяжитесь с партнёрскими центрами в Украине и ЕС или заказывайте напрямую со склада в Глендейле, Калифорния.",
    primaryHubBadge: "Главный Хаб",
    centersMeta: {},
    consultBadge: "Домашняя Система Евминова • Поддержка в США и Мире",
    consultHeading: "Не Можете Посетить Киев Лично? Закажите Оригинальную Доску Евминова Домой",
    consultBody: "Каждая доска, доставляемая в США, Канаду и Европу, изготовлена из карпатской сосны или ольхи по международным патентам Вячеслава Евминова — с Петлёй Глиссона, креплением 16\", Кабинетом на 30 дней, 60-дневным тестом и 1-летней гарантией.",
    ctaOrder: "Заказать Оригинальную Доску (От $450)",
    ctaCalc: "Рассчитать Мой Угол",
    ctaPortal: "Открыть Кабинет Пациента",
    hqHeading: "Официальная Штаб-Квартира и Хаб США",
    usOpsLabel: "Операции и Доставка в США:",
    kyivFlagshipLabel: "Исторический Флагман в Киеве (1996):",
    kyivAddress: "ул. Костёльная, 9, Киев 01001, Украина",
    hqFooterBadge: "Оригинальный Патентованный Дизайн • 1 Год Гарантии",
  },
  de: {
    jumpAria: "Abschnitte zur Geschichte & den Zentren",
    jumpLinks: [
      { href: "#founder-story", label: "Gründergeschichte (1996)" },
      { href: "#home-hospital", label: "Heim-Klinik-Modell" },
      { href: "#defender-program", label: "Verteidiger & Veteranen" },
      { href: "#audience-protocols", label: "Zielgruppen-Protokolle" },
      { href: "#wood-science", label: "Kiefer vs. Erle" },
      { href: "#patents", label: "Patentarchiv" },
      { href: "#safety-screening", label: "Sicherheit & Kontraindikationen" },
      { href: "#directory", label: "Globale Zentren" },
    ],
    kpis: [
      { val: "1996", label: "Kyjiw-Stammhaus gegründet", sub: "30 Jahre kontinuierliche Tradition" },
      { val: "6 Patente", label: "US-, EU-, WIPO- & UA-Patente", sub: "US 6,869,387 • EP 1 038 512" },
      { val: "40+ Länder", label: "Weltweite Heimnutzung", sub: "USA, Kanada, EU & Ukraine" },
      { val: "Glendale, CA", label: "Nordamerika-Hub", sub: "1–4 Tage UPS/FedEx (50 US-Staaten)" },
    ],
    founderEyebrow: "Aus persönlicher Genesung entstanden • Wjatscheslaw Jewminow (geb. 1940)",
    founderHeading: "Von schwerem Wirbelsäulentrauma zurück zum Gehen: Die Geschichte von Wjatscheslaw Jewminow",
    founderName: "Wjatscheslaw Wolodymyrowytsch Jewminow",
    founderSubtitle: "Erfinder der Evminov-Methode • Verdienter Trainer im akademischen Rudern",
    mriBadge: "Biomechanisches Prinzip: Entlasteter osmotischer Flüssigkeitsaustausch",
    founderQuote: "Rückengesundheit entsteht weder durch passives Hängen noch durch ruckartiges Einrenken. Sie erfordert sanfte Traktion, um Raum zu schaffen, gefolgt von achtsamen Mikrobewegungen zur Versorgung und Stabilisierung der Wirbelsäule.",
    founderP1: "Ende der 1980er-Jahre erlitt Wjatscheslaw Jewminow nach Jahrzehnten als Spitzentrainer im akademischen Rudern in der Ukraine ein schweres Lendenbandscheibentrauma, das ihm das Gehen kaum noch ermöglichte. Da er passive Immobilität oder eine vorschnelle Versteifung ohne konservative Biomechanik nicht akzeptierte, wandte er sich der Physik und Sportkinesiologie zu.",
    founderP2: "In der Erkenntnis, dass Bandscheiben Erwachsener keine direkte Blutversorgung besitzen und auf sanfte wechselnde Entlastung und Bewegung angewiesen sind, entwickelte er das erste mehrschichtige, federnde Board aus Karpatenkiefer mit gleitendem Höhenschlitten. Ruhige Mikrobewegungen bei 12°–20° stellten seine Mobilität wieder her – und führten 1996 zur Eröffnung des Stammhauses in Kyjiw.",
    credentialsHeading: "Führungs- & Sportauszeichnungen",
    founderRoles: [
      "Verdienter Trainer der Ukraine im akademischen Rudern",
      "Cheftrainer der ukrainischen Rudernationalmannschaft",
      "Erster Präsident des Ukrainischen Ruderverbands",
      "Gründer & Präsident des Evminov Wirbelsäulen-Gesundheitszentrums (gegr. 1996)",
    ],
    timelineHeading: "Vier Jahrzehnte Wirbelsäulen-Biomechanik & Handwerkskunst (1970–2026)",
    milestones: [
      { year: "1970–1988", badge: "Spitzensport-Führung", title: "Olympia- & Weltmeisterschafts-Trainer", desc: "Abschluss am Staatlichen Institut für Körperkultur & Sport in Kyjiw (1970), Ausbildung von Meistern des Sports und internationale Leitung des ukrainischen Ruderteams." },
      { year: "1989", badge: "Der Wendepunkt", title: "Schweres Lendentrauma & Ablehnung passiver Resignation", desc: "Nach Jahrzehnten im Spitzensport erlitt Wjatscheslaw Jewminow ein schweres Bandscheibentrauma und entwickelte konservative Lösungen aus physikalischen Grundprinzipien." },
      { year: "1990–1995", badge: "Biomechanischer Durchbruch", title: "Resonanzkiefer-Prototyp & vollständige Genesung", desc: "Konstruierte das mehrschichtige federnde Karpatenkiefer-Deck samt verstellbarem Schlitten. Sanfte fraktionierte Traktion (12°–20°) mit Mikrobewegungen gab ihm seine Beweglichkeit zurück." },
      { year: "1996", badge: "Zentrumsgründung", title: "Eröffnung des Stammhauses in Kyjiw (Kostolna-Str. 9)", desc: "Eröffnung des historischen Evminov Wirbelsäulen-Zentrums nahe dem Maidan in Kyjiw und Ausbildung zertifizierter Methodentrainer." },
      { year: "1999–2005", badge: "Globales Patentrecht", title: "US-, Europa-, WIPO-Patente & Ukraine MOH 711/2002", desc: "Erteilung von US-Patent 6,869,387 B2, Europäischem Patent EP 1 038 512 B1, WIPO PCT WO 1999/043288, ukrainischen Patenten 27976/28849A sowie MOH-Registrierung 711/2002." },
      { year: "2006–2021", badge: "Drei Jahrzehnte Methodik", title: "Regionales Netzwerk & Heimnutzung über Generationen", desc: "Ausbau von Partnerstudios in Kyjiw, Lwiw, Odesa, Polen und Europa, während Hunderttausende die tägliche 10-Minuten-Rückenhygiene zu Hause übernahmen." },
      { year: "2022–Heute", badge: "Einsatz & US-Expansion", title: "„Rücken des Verteidigers“ & Nordamerika-Hub Glendale, CA", desc: "Start spezieller Entlastungsprotokolle für Verteidiger, Einsatzkräfte und Veteranen sowie direkter Versand in alle 50 US-Staaten ab Glendale, Kalifornien." },
    ],
    homeHospitalBadge: "Heim-Wellness-Innovation • Домашній Госпіталь",
    homeHospitalHeading: "Das „Heim-Klinik“-Modell: Wirbelsäulenpflege auf Studioniveau zu Hause",
    homeHospitalIntro: "Von Wjatscheslaw Jewminow entwickelt, um Anfahrtswege, Wetterbarrieren und endlose laufende Praxisgebühren zu vermeiden. Selbst in strengen Wintern ermöglichte das Modell Zehntausenden Familien eine sichere tägliche 10-Minuten-Rückenpflege in den eigenen vier Wänden.",
    homeHospitalPillars: [
      { tag: "Tägliche Konstanz", metric: "10–15 Min. Mikro-Sitzungen", title: "Sanfte tägliche rhythmische Entlastung", desc: "Bandscheiben Erwachsener nutzen zyklische Bewegung und Flüssigkeitsaustausch statt direkter Blutgefäße. Kurze tägliche 10-Minuten-Einheiten liefern deutlich mehr Beständigkeit als vereinzelte Praxisbesuche." },
      { tag: "Null Reibungsverlust", metric: "Sofort morgens & abends", title: "Kein Pendeln, kein Wartezimmer", desc: "Lange Autofahrten im Stau belasten einen verspannten unteren Rücken nach dem Termin oft erneut. Zu Hause ist Ihr Board direkt nach dem Aufwachen oder vor dem Schlafen bereit." },
      { tag: "Familien-Ergonomie", metric: "5-Sek.-Verstellung (4–85+)", title: "Mehrgenerationen-Station für die Familie", desc: "Der gleitende Aluminiumschlitten lässt sich in 5 Sekunden für Kinderhaltung, Büroprofis, Kraftsportler und aktive Senioren an einem 6 cm flach klappbaren Wandboard verstellen." },
      { tag: "Finanzielle Freiheit", metric: "Amortisiert nach ~4–6 Terminen", title: "Jahrzehntelanger Nutzen mit einem Board", desc: "Bei typischen US-Praxiskosten von $75–$150 pro Sitzung ($3,500+/Jahr) spart ein einmaliges $450 Evminov Board mit 1 Jahr Rahmengarantie Tausende Dollar." },
    ],
    kyivCaptions: [
      "Kyjiw Stammhaus-Halle – Kostolna-Str. 9 (gegr. 1996)",
      "Individuelle Neigungswinkel-Kalibrierung",
      "Ruhige geführte Bewegungen mit geringer Amplitude",
    ],
    defenderBadge: "Rücken des Verteidigers • «Знімаємо броню з хребта»",
    defenderHeading: "Spezialisierte Wirbelsäulen-Entlastung für Militär, Veteranen & Ersthelfer",
    defenderIntro: "Gezielte sanfte Schräg-Dekompression als Ausgleich für die permanente Belastung durch 15–25 kg (33–55 lbs) Plattenträger, 32–45 kg (70–100 lbs) Marschgepäck, Einsatzgürtel und Fahrzeugerschütterungen – für Verteidiger, US-Veteranen, Polizei und Feuerwehr.",
    defenderChallengesHeading: "Operative Belastungen der Wirbelsäule",
    defenderChallenges: [
      { title: "Axiale Kompression durch Schutzweste & schweres Gepäck", desc: "Lange Patrouillen und Übungen mit 15–25 kg ballistischen Westen und 32–45 kg Rucksäcken erzeugen anhaltenden axialen Druck auf die Lendenbandscheiben." },
      { title: "Stoßwellen, Landungen & Fahrzeugerschütterungen", desc: "Geländefahrten, Fallschirmlandungen und starke Vibrationen belasten Facettengelenke und verspannen die tiefe stabilisierende Rückenmuskulatur." },
      { title: "Langfristige Mobilität & Lebensqualität für Veteranen", desc: "Dienstbedingte Rückensteifheit zählt zu den häufigsten Langzeitfolgen bei Veteranen. Tägliches sanftes, entlastetes Training erhält die Beweglichkeit ohne extreme Inversion." },
    ],
    defenderStepsHeading: "3-Stufen-Entlastungsroutine für Verteidiger (10–15 Min. / Tag)",
    stageWord: "STUFE",
    defenderSteps: [
      { step: "01", title: "Ruhige fraktionierte Entlastung (8°–18° Neigung)", desc: "Legen Sie sich rücklings auf das federnde Karpatenkiefer-Deck, damit sanfte Schwerkraft den angesammelten axialen Druck von Westen, Gürteln und Rucksäcken löst." },
      { step: "02", title: "Training des tiefen paraspinalen Muskelkorsetts", desc: "Führen Sie langsame, kontrollierte Mikrobewegungen unter Entlastung aus, um tiefe Multifidus- und Rumpfstabilisatoren zu aktivieren." },
      { step: "03", title: "Belastbare Haltung & tägliche Erholungsroutine", desc: "Verbinden Sie 10–15 Minuten abendliche Entlastung mit ergonomischen Bewegungsgewohnheiten für nachhaltige Belastbarkeit im Dienst und Alltag." },
    ],
    audienceBadge: "Maßgeschneiderte biomechanische Anwendungen",
    audienceHeading: "Wie verschiedene Zielgruppen die Evminov-Methode nutzen",
    challengeWord: "Herausforderung:",
    routineWord: "Evminov-Routine:",
    audiences: [
      {
        id: "athletes", tag: "Athleten & Kraftsportler", badge: "Bis 150 kg / 330 lbs (Wide)", title: "Powerlifter, CrossFitter, Läufer & Rotationssportler", lead: "Stellen Sie den Lendenkomfort nach dem Training wieder her und lösen Sie Schutzspannungen ohne Griffkraft-Ermüdung.",
        mechanisms: [
          { profile: "Powerlifter, Gewichtheber & CrossFitter", challenge: "Schweres Kreuzheben, Kniebeugen und Überkopfübungen komprimieren Lendenwirbel und halten Rückenstrecker 48–72 Stunden steif.", protocol: "Geneigte Rückentraktion bei 20°–32° für 12–15 Minuten entspannt die Rückenstrecker vollständig und entlastet die Wirbelsäule." },
          { profile: "Langstreckenläufer, Golfer & Kampfsportler", challenge: "Wiederholte Stoßbelastungen, asymmetrische Schwungrotation und Nackenlasten verkürzen die Hüftbeuger.", protocol: "Symmetrische Schrägentlastung plus die enthaltene gepolsterte Glisson-Schlaufe bei 8°–12° stellen die Ausrichtung sicher wieder her." },
        ],
        founderNote: "Wjatscheslaw Jewminow war Verdienter Rudertrainer und entwickelte das erste federnde Kiefernholzboard aus der Sportbiomechanik.",
      },
      {
        id: "desk-workers", tag: "Büro- & Stehberufe", badge: "10-Min.-Abend-Reset", title: "Remote-Profis, Pflegekräfte & Stehschichten", lead: "Gleichen Sie 8–12 Stunden statisches Sitzen oder Stehen auf hartem Boden in 10 ruhigen Minuten aus.",
        mechanisms: [
          { profile: "Sitzkompression & Handy-Nacken (C5–C7)", challenge: "Vorgebeugtes Sitzen vor Bildschirmen erzeugt ca. 40 % mehr Druck auf Lendenbandscheiben als Stehen und zieht den Kopf nach vorn.", protocol: "10 Minuten bei 12°–16° öffnen die Brustfaszie, lockern Hüftbeuger und lösen Nackenverspannungen mit der Glisson-Schlaufe." },
          { profile: "12-Stunden-Stehschichten (Pflege, Lehre, Handel)", challenge: "Ständige vertikale Schwerkraft staucht untere Lendengelenke und ermüdet die Beine bis zum Abend.", protocol: "Axiale Null-Last in Rückenlage mit sanftem Fußgelenksbeugen löst Verspannungen im unteren Rücken – ganz ohne Kopfüber-Hängen." },
        ],
        founderNote: "Klappt auf 6 cm (2,4\") hinter der Homeoffice-Tür zusammen – oder passt auf den Freistehenden Ständer ohne Bohren für Mietwohnungen.",
      },
      {
        id: "tactical-military", tag: "Militär, Veteranen & Ersthelfer", badge: "Verteidiger-Programm", title: "Einsatzkräfte, Polizei, Feuerwehr & Veteranen", lead: "Sanfte tägliche Wirbelsäulen-Dekompression zum Ausgleich von Einsatzgürteln, Schutzwesten und Rucksacklasten.",
        mechanisms: [
          { profile: "Plattenträger, Einsatzgürtel & Marschgepäck", challenge: "15–45 kg (33–100 lbs) taktische Ausrüstung komprimieren den unteren Rücken Tag für Tag.", protocol: "10–15 Minuten auf dem federnden Karpatenkiefer-Deck entlasten gestauchte Wirbel ruhig und lockern feste Muskeln." },
          { profile: "Stressbedingte Verspannung & Mobilitätserhalt", challenge: "Lange Fahrzeugpatrouillen und Adrenalin-Schichten fixieren die Rückenmuskulatur in schützender Steifheit.", protocol: "Gleitende Mikrobewegungen kombiniert mit tiefer Bauchatmung stellen lockere Beweglichkeit wieder her." },
        ],
        founderNote: "Das Evminov-Zentrum in Kyjiw widmet Verteidigern und Veteranen seit 2022 spezialisierte Rückenprogramme.",
      },
      {
        id: "lumbar-family", tag: "Lendenkomfort & Mehrgenerationen-Familie", badge: "Für Alter 4 bis 85+", title: "L4–S1-Komfort, Kinderhaltung & aktives Älterwerden", lead: "Eine anpassbare Holzstation für unteren Rücken, wachsende Jugendliche und aktive Langlebigkeit.",
        mechanisms: [
          { profile: "L4–L5 / L5–S1-Beschwerden & aktive Senioren", challenge: "Morgendliche Steifheit macht aggressive 90°-Inversionsbänke unbequem oder unsicher.", protocol: "Ultrasanfte Winkel von 8°–15° halten den Kopf oben – ohne Kopfdruck und mit voller Auflage auf Kiefernholz." },
          { profile: "Schulkinder & Jugendliche (4–15 Jahre)", challenge: "Schwere Schulranzen und Bildschirme fördern runde Schultern und Haltungsasymmetrien.", protocol: "Betreutes 6°–12° „Tanzen im Liegen“ zu fröhlicher Musik stärkt die Haltungssymmetrie in 6 Minuten täglich." },
        ],
        founderNote: "Verteilt man ein $450-Board auf eine 3-köpfige Familie über 20 Jahre, entspricht das ca. $7,50 pro Person und Jahr.",
      },
    ],
    stagesEyebrow: "Progressives Wirbelsäulentraining",
    stagesHeading: "Die drei aufbauenden Phasen der Evminov-Methode",
    goalWord: "Ziel:",
    threeStages: [
      { stage: "01", name: "Erholungs- & Entlastungsphase", subName: "Sanfte Dekompression", incline: "8°–15° Flacher Winkel", duration: "Wochen 1–3", goal: "Verspannte Rückenmuskeln beruhigen & sanften axialen Raum schaffen", desc: "Starten Sie mit entspannter fraktionierter Entlastung und ruhiger Atmung auf federnder Karpatenkiefer. Vermeiden Sie ruckartige Bewegungen." },
      { stage: "02", name: "Stabilisator- & Tiefenkorsett-Phase", subName: "Rumpfstärkung", incline: "15°–25° Moderater Winkel", duration: "Wochen 4–10", goal: "Tiefe Lenden- & Rumpfstabilisatoren (Multifidus & Rotatores) wecken", desc: "Führen Sie kontrollierte Mikrobewegungen unter sanfter Traktion ein – für tiefe Stützmuskeln, die gewöhnliches Bodentraining kaum erreicht." },
      { stage: "03", name: "Präventive Erhaltungsphase", subName: "Lebenslange Hygiene", incline: "15°–35° Individuell", duration: "Dauerhafte Gewohnheit", goal: "Haltungsresilienz & lebenslange Beweglichkeit erhalten", desc: "Eine kurze 5–10-Minuten-Routine 3–5× pro Woche gleicht Sitzen, Pendeln und Sport das ganze Jahr über aus." },
    ],
    psychoBadge: "Vegetative Ruhe • Körper-Geist-Rückenstress",
    psychoHeading: "Wirbelsäulen-Dekompression zum Lösen von chronischem Stress & Muskelspannung",
    psychoIntro: "Körperliche Rückenverspannung und mentale Überlastung verstärken sich gegenseitig. Zehn ruhige Minuten sanfter Entlastung mit tiefer Bauchatmung helfen dem Körper, aus der Schutzspannung in ruhige Regeneration umzuschalten.",
    mechanismWord: "MECHANISMUS",
    psychoItems: [
      { num: "01", title: "Beruhigung des vegetativen Nervensystems", desc: "Chronische Rückenanspannung hält das Nervensystem in ständiger Alarmbereitschaft. Sanfte Entlastung in Rückenlage aktiviert den Parasympathikus." },
      { num: "02", title: "Durchbrechen des Spannungs-Steifheits-Zyklus", desc: "Mentaler Stress verkrampft unbewusst tiefe Rücken- und Schultermuskeln. Langsame geneigte Dehnung löst feste Fasern schonend." },
      { num: "03", title: "Bauchatmung & erholsamer Schlaf", desc: "Das Öffnen eines gerundeten Brustkorbs vertieft die Atmung – ideal als 10-minütiges Abendritual vor dem Schlafengehen." },
    ],
    woodBadge: "Natürliche Holzwissenschaft • Karpatenholz",
    woodHeading: "Resonante Karpatenkiefer vs. Erlesene Ukrainische Erle",
    woodIntro: "Warum authentische Evminov Boards aus mehrschichtigem Resonanzholz statt aus starrem Stahl oder kaltem Kunststoff gefertigt werden.",
    woodLabels: { elasticity: "Elastizitätsprofil", capacity: "Traglast", weight: "Board-Gewicht", tone: "Farbton", bestFor: "Ideal für:" },
    woodSpecies: [
      { name: "Resonante Karpatenkiefer", badge: "Straffe Federung • Bis 150 kg (330 lbs)", density: "Straffe anatomische Elastizität", maxLoad: "95–100 kg (Standard/Falt) • 150 kg (Wide)", weight: "10,5–11,3 kg (13,6 kg Wide)", tone: "Natürlicher Honigton oder Dunkler Walnuss-Ton", bestFor: "Haushalte, Kraftsportler, große Nutzer (bis 206 cm / 6'9\") und alle, die klaren, straffen Halt bevorzugen.", notes: "Aus langsam gewachsenem Karpatenholz mit engen Jahresringen in Mehrschichtverleimung für dauerhafte Federkraft." },
      { name: "Erlesene Ukrainische Erle", badge: "~15 % Leichtere Edition • Seidige Maserung", density: "Sanftere, geschmeidige Federung", maxLoad: "Bis 100 kg (220 lbs) & 193 cm (6'4\")", weight: "8,6–9,5 kg (~1,5–2 kg leichter als Kiefer)", tone: "Warmer Bernstein / Royal Cognac", bestFor: "Nutzer unter 100 kg, Senioren, sanfte Nacken-/Brustwirbel-Routinen, häufige Winkelwechsel und edle Wohnräume.", notes: "Feine, gleichmäßige Maserung für etwas weichere Federung und spürbar leichteres tägliches Handling beim Hochklappen." },
    ],
    videosHeading: "Offizielle Evminov-Methode & 16-Zoll-US-Ständer-Montagedemos",
    videosSub: "Sehen Sie die originale Schrägtraktionstechnik und die nordamerikanische Wandmontage Schritt für Schritt.",
    patentsTitle: "Offizielle Patenterteilungen & Historisches Registerarchiv",
    patentsSubtitle: "Klicken Sie auf ein Original-Patentzertifikat, um hochauflösende Scans zu prüfen oder öffentliche Einträge bei USPTO, EPA und WIPO zu öffnen.",
    safetyBadge: "Sicherheitscheck & Kontraindikationen",
    safetyHeading: "Kontraindikationen & wesentliche biomechanische Sicherheitsregeln",
    safetyIntroPrefix: "Evminov Boards sind in den USA klassifiziert als",
    safetyIntroSuffix: "Lesen Sie diese Sicherheitshinweise sorgfältig und konsultieren Sie bei schweren Wirbelsäulenerkrankungen einen approbierten Arzt.",
    absTitle: "Absolute Kontraindikationen",
    absSub: "Führen Sie bei folgenden Zuständen keine geneigte Traktion durch:",
    precTitle: "Ärztliche Freigabe erforderlich",
    precSub: "Vor Beginn ärztliche Abklärung oder Stabilisierung einholen bei:",
    rulesTitle: "Wesentliche tägliche Sicherheitsregeln",
    rulesSub: "Befolgen Sie diese einfachen mechanischen Gewohnheiten bei jeder Sitzung:",
    dirEyebrow: "Globales Netzwerk & US-Hub",
    dirHeading: "Offizielle Evminov Zentren & Vertriebsstandorte",
    dirIntro: "Besuchen Sie das historische Stammhaus in Kyjiw, verbinden Sie sich mit Partnerzentren in der Ukraine und Europa oder bestellen Sie direkt mit versichertem Versand ab unserem Hub in Glendale, Kalifornien.",
    primaryHubBadge: "Haupt-Hub",
    centersMeta: {},
    consultBadge: "Evminov Heimsystem • Direkter US- & weltweiter Support",
    consultHeading: "Kein Besuch in Kyjiw möglich? Holen Sie sich echte Evminov Handwerkskunst nach Hause",
    consultBody: "Jedes in die USA, nach Kanada und Europa gelieferte Evminov Board wird aus echter Karpatenkiefer oder erlesener ukrainischer Erle nach den internationalen Patenten von Wjatscheslaw Jewminow gefertigt – inklusive kostenloser Glisson-Schlaufe, 16\"-US-Ständer-Montageset, 30-Tage-Patientenportal, 60-Tage-Heimtest und 1 Jahr struktureller Rahmengarantie.",
    ctaOrder: "Original-Board bestellen (Ab $450)",
    ctaCalc: "Meinen Neigungswinkel berechnen",
    ctaPortal: "Patientenportal ansehen",
    hqHeading: "Offizieller Hauptsitz & US-Hub-Kontakt",
    usOpsLabel: "US-Betrieb & Versand:",
    kyivFlagshipLabel: "Historisches Stammhaus Kyjiw (gegr. 1996):",
    kyivAddress: "Kostolna-Str. 9, Kyjiw 01001, Ukraine",
    hqFooterBadge: "Originales patentiertes Design • 1 Jahr Rahmengarantie",
  },
};
