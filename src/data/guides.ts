export interface GuideSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideItem {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    credentials: string;
  };
  heroImage: string;
  excerpt: string;
  recommendedProductSlug: string;
  sections: GuideSection[];
  references: Array<{ citation: string; source: string }>;
  faqs: Array<{ q: string; a: string }>;
}

export const GUIDES: GuideItem[] = [
  {
    id: "inversion-table-dangers",
    slug: "inversion-table-dangers-and-safe-alternatives",
    title: "Inversion Tables vs. Inclined Spine Decompression: Why Low-Angle Traction Is Safer",
    metaTitle: "Inversion Table Dangers & Safe Alternatives | Evminov Spine Systems",
    metaDescription:
      "Are 90° inversion tables safe? Understand intraocular eye pressure spikes, blood pressure surges, and ankle clamping — and why 8°–35° inclined traction on natural pine is preferred.",
    category: "Inversion Alternative",
    datePublished: "2026-09-12",
    dateModified: "2026-11-20",
    readTime: "8 min read",
    author: {
      name: "Evminov Spine Biomechanics Editorial Team",
      role: "Vertebral Wellness & Equipment Research",
      credentials: "30 Years of Evminov Method Documentation (Since 1996)",
    },
    heroImage: "/images/authentic/hero-full-device-traction.jpg",
    excerpt:
      "Hanging upside down at 60°–90° spikes intraocular eye pressure and cranial blood flow while clamping ankles. Here is the physics of controlled 8°–35° inclined unloading on resonant pine.",
    recommendedProductSlug: "2-piece-folding-board",
    sections: [
      {
        id: "gravity-paradox",
        heading: "1. The Gravity Paradox of Hanging Upside Down",
        paragraphs: [
          "For decades, steel inversion tables have been marketed as the default home back-stretching tool. The logic sounds simple: gravity compresses your spine all day, so hanging completely upside down should reverse it. Yet human cardiovascular and ocular physiology did not evolve for sustained head-down suspension.",
          "Clinical ophthalmology studies consistently observe sharp rises in intraocular pressure (IOP) during full inversion, sometimes doubling baseline resting pressure within a minute. At the same time, venous return pools toward the head and systolic pressure climbs — making steep inversion unsuitable for adults with hypertension, glaucoma concerns, retinal issues, vertigo, or sinus pressure.",
        ],
      },
      {
        id: "ankle-and-support",
        heading: "2. Ankle Clamping and Zero Spinal Support",
        paragraphs: [
          "Traditional inversion tables lock your ankles and suspend 100% of your torso weight through the talocrural joints, Achilles tendons, knees, and sacroiliac joints. Many back-pain sufferers abandon inversion tables simply because ankle discomfort forces them upright before their lower back ever relaxes.",
          "Even worse, dangling freely without continuous back contact allows the lumbar spine to sag into hyperextension, causing posterior facet joints to press together and triggering defensive muscle guarding.",
        ],
      },
      {
        id: "low-angle-physics",
        heading: "3. Controlled Low-Angle Physics (8° to 35°)",
        paragraphs: [
          "On the patented Evminov inclined board (US Patent 6,869,387 B2), your head stays elevated above your torso while your spine rests continuously along a multi-layer resonant Carpathian pine beam. Using standard inclined-plane mechanics (Net Force = Weight × sin θ − friction), a 180 lb adult at a gentle 18° angle experiences roughly 42 lbs of smooth axial unloading.",
          "Because there is no ankle clamping and no blood rush to the head, your nervous system releases defensive back spasms within seconds, letting you perform gentle low-amplitude stabilizing movements that passive hanging cannot offer.",
        ],
        bullets: [
          "Head stays above heart level — zero facial flushing or sinus surge.",
          "Zero ankle or knee clamping — hands rest comfortably on padded alloy carriage grips.",
          "Full-length pine flex cushions lumbar curves while preventing hyperextension.",
          "Folds flat to 2.4 inches against any wall instead of occupying 15+ sq ft of floor space.",
        ],
      },
      {
        id: "who-should-switch",
        heading: "4. Choosing the Right Alternative for Your Home",
        paragraphs: [
          "If you want consistent daily spinal decompression without dizzy spells, ankle pain, or a massive steel A-frame dominating your living room, an inclined wooden decompression board delivers finer force control, built-in cervical traction via the Glisson Loop, and a 20+ year heirloom timber lifespan.",
        ],
      },
    ],
    references: [
      { citation: "Friberg TR, Weinreb RN. Ocular manifestations of gravity inversion. JAMA. 1985;253(12):1755-1757.", source: "JAMA Ophthalmology / PubMed" },
      { citation: "Klatz RM et al. The effects of gravity inversion procedures on systemic blood pressure, intraocular pressure, and central retinal arterial pressure. J Am Osteopath Assoc. 1983.", source: "JAOA Clinical Study" },
    ],
    faqs: [
      {
        q: "Is an inclined spine board safer than a Teeter inversion table for adults over 50?",
        a: "Yes for most adults, because lying head-up at 8°–25° avoids upside-down cranial and eye pressure surges while eliminating ankle-clamp strain. Always consult your physician if you have cardiovascular or bone-density conditions.",
      },
      {
        q: "How much traction force does a 15° to 20° incline create?",
        a: "For a 170–200 lb adult, a 15°–20° incline generates approximately 30 to 55 lbs of smooth longitudinal unloading along the pine plane.",
      },
    ],
  },
  {
    id: "herniated-disc-home-protocol",
    slug: "how-to-decompress-herniated-disc-l4-l5-at-home",
    title: "Home Lumbar Unloading Guide: L4–L5 & L5–S1 Disc Biomechanics and Progressive Angles",
    metaTitle: "Home Lumbar Spine Unloading Guide (L4–L5 & L5–S1) | Evminov",
    metaDescription:
      "Understand why L4–L5 and L5–S1 discs compress, how adult disc fluid imbibition works, and how a progressive 3-stage low-angle Evminov routine supports daily comfort.",
    category: "Lumbar Biomechanics",
    datePublished: "2026-09-14",
    dateModified: "2026-11-20",
    readTime: "9 min read",
    author: {
      name: "Evminov Spine Biomechanics Editorial Team",
      role: "Vertebral Wellness & Equipment Research",
      credentials: "30 Years of Evminov Method Documentation (Since 1996)",
    },
    heroImage: "/images/gallery/supine-spinal-elongation.jpg",
    excerpt:
      "Learn why adult intervertebral discs have no direct blood supply, how gentle unloaded motion drives fluid diffusion, and how to progress safely from 8° to 25°.",
    recommendedProductSlug: "2-piece-folding-board",
    sections: [
      {
        id: "avascular-biology",
        heading: "1. Why Adult Lumbar Discs Rely on Unloaded Fluid Exchange",
        paragraphs: [
          "The L4–L5 and L5–S1 motion segments carry over 60% of upper-body weight during sitting and lifting. Crucially, adult intervertebral discs are avascular — they lack direct capillary blood vessels and rely on osmotic pressure diffusion (imbibition) across their cartilaginous endplates.",
          "During prolonged sitting or heavy lifting, compressive load squeezes water out of the gelatinous disc core. When spinal load is gently removed on an inclined plane and paired with rhythmic low-amplitude motion, osmotic exchange draws fluid and nutrients back into compressed disc tissue.",
        ],
      },
      {
        id: "three-stage-progression",
        heading: "2. The 3-Stage Evminov Progressive Routine",
        paragraphs: [
          "Rushing into steep angles or aggressive stretches backfires by triggering protective lumbar spasms. The classic Evminov progression builds tolerance methodically over weeks:",
        ],
        bullets: [
          "Stage 1 — Gentle Unloading (Weeks 1–2, 8°–12°): 8 minutes of relaxed supine lying with calm diaphragmatic breaths and slow ankle pumps. Zero straining.",
          "Stage 2 — Deep Core Activation (Weeks 3–6, 14°–22°): Add pain-free pelvic flattening, alternating leg glides, and tiny prone extensions to awaken the deep multifidus.",
          "Stage 3 — Daily Maintenance (Ongoing, 15°–30°): 10 minutes once or twice daily to counteract sitting, driving, and athletic axial loads.",
        ],
      },
      {
        id: "safety-screening",
        heading: "3. Medical Red Flags & Contraindications",
        paragraphs: [
          "Home conditioning boards are general wellness equipment and are never a substitute for emergency neurological evaluation. Seek immediate medical care if you experience progressive foot drop, bowel or bladder changes, severe trauma, fever, or worsening radiating leg pain.",
        ],
      },
    ],
    references: [
      { citation: "Nachemson A. The load on lumbar disks in different positions of the body. Clin Orthop Relat Res. 1966;45:107-122.", source: "Clinical Orthopaedics / PubMed" },
      { citation: "Urban JPG, Roberts S. Degeneration of the intervertebral disc. Arthritis Res Ther. 2003;5(3):120-130.", source: "NIH / PMC" },
    ],
    faqs: [
      {
        q: "How long should beginners stay on the Evminov board at first?",
        a: "Start with 6 to 8 minutes at a low 8°–12° incline once or twice per day, then gradually work up to 10–15 minutes as comfort improves.",
      },
    ],
  },
  {
    id: "athletic-spine-recovery",
    slug: "the-lifters-guide-to-spinal-decompression",
    title: "The Lifter's Guide: Reversing Barbell Spine Compression After Heavy Deadlifts & Squats",
    metaTitle: "Post-Deadlift Spinal Decompression for Athletes | Evminov Wide Board",
    metaDescription:
      "Heavy squats and deadlifts temporarily shrink spinal height by up to 15 mm. Discover why supported 20°–30° board unloading outperforms pullup bar dead hangs.",
    category: "Athletic Recovery",
    datePublished: "2026-08-22",
    dateModified: "2026-11-20",
    readTime: "7 min read",
    author: {
      name: "Evminov Athletic Conditioning Desk",
      role: "Strength & Mobility Engineering",
      credentials: "Sports Biomechanics & Home Gym Recovery",
    },
    heroImage: "/images/gallery/incline-glute-bridge.jpg",
    excerpt:
      "Pullup bar dead hangs fire your lats and brace your lower back. Here is how powerlifters, CrossFitters, and runners truly relax spinal erectors post-training.",
    recommendedProductSlug: "2-piece-folding-board",
    sections: [
      {
        id: "barbell-compression",
        heading: "1. What Heavy Axial Loading Does to Your Spine",
        paragraphs: [
          "Heavy barbell deadlifts, back squats, clean-and-jerks, and high-mileage running place repetitive compressive forces across the lumbar motion segments. Stadiometry studies show athletes temporarily lose 8 to 15 mm of standing height over heavy axial training sessions as fluid shifts out of intervertebral discs.",
        ],
      },
      {
        id: "why-pullup-hangs-fail",
        heading: "2. Why Dead-Hanging From a Pullup Bar Leaves Your Back Tight",
        paragraphs: [
          "Hanging from a pullup bar requires intense forearm grip and latissimus dorsi activation. Because the latissimus dorsi inserts directly into the thoracolumbar fascia across your lower back, firing your lats keeps lumbar segments braced instead of relaxed.",
          "Lying supported on the Wide Heavy-Duty Evminov Board (rated to 330 lbs) lets your shoulders and spinal erectors switch off completely while steady 20°–30° inclined traction unloads your lumbar spine.",
        ],
      },
      {
        id: "post-workout-sequence",
        heading: "3. The 10-Minute Post-Workout Recovery Sequence",
        paragraphs: [
          "Mount the Wide board in your home gym corner and run this simple cooldown immediately after lower-body training:",
        ],
        bullets: [
          "Minutes 1–4 (20° Incline): Passive supine unloading with long nasal exhales to drop parasympathetic tone.",
          "Minutes 5–7 (22°–25°): Supine alternating leg glides and hamstring stretches without lumbar rounding.",
          "Minutes 8–10 (25°): Zero-compression inclined core curls and hip bridges to stabilize fresh disc space.",
        ],
      },
    ],
    references: [
      { citation: "Reilly T, Tyrrell A, Troup JD. Circadian variation in human stature. Chronobiol Int. 1984;1(2):121-126.", source: "PubMed Stadiometry Research" },
      { citation: "McGill SM. Low Back Disorders: Evidence-Based Prevention and Rehabilitation. Human Kinetics.", source: "Spine Biomechanics Textbook" },
    ],
    faqs: [
      {
        q: "Can a 260 lb powerlifter safely use the Evminov board?",
        a: "Yes — select the Wide Panel Heavy-Duty Evminov Board, engineered with a 30% wider timber core and reinforced carriage rated up to 330 lbs and 6'9\".",
      },
    ],
  },
  {
    id: "sciatica-relief-exercises",
    slug: "sciatica-relief-exercises-home-equipment",
    title: "Sciatic Nerve Comfort at Home: Gentle Inclined Unloading and Nerve-Friendly Mobility",
    metaTitle: "Sciatica Comfort & Home Traction Guide | Evminov Spine Systems",
    metaDescription:
      "Learn how low-angle 10°–18° inclined unloading with knees gently supported eases lower back and sciatic tension without harsh ankle clamps.",
    category: "Sciatica Comfort",
    datePublished: "2026-08-29",
    dateModified: "2026-11-20",
    readTime: "7 min read",
    author: {
      name: "Evminov Spine Biomechanics Editorial Team",
      role: "Vertebral Wellness & Equipment Research",
      credentials: "30 Years of Evminov Method Documentation (Since 1996)",
    },
    heroImage: "/images/gallery/lumbar-single-leg-lift.jpg",
    excerpt:
      "Why gentle bent-knee unloading at 10°–15° helps release lower-back and glute tension far more comfortably than aggressive stretching.",
    recommendedProductSlug: "2-piece-folding-board",
    sections: [
      {
        id: "mechanical-compression",
        heading: "1. Understanding Mechanical Sciatic Tension",
        paragraphs: [
          "The sciatic nerve originates from lower lumbar and sacral nerve roots (L4–S3) passing through narrow bony openings before traveling down the glute and leg. Prolonged slouched sitting, tight piriformis muscles, and compressed discs all aggravate mechanical tension along this path.",
        ],
      },
      {
        id: "gentle-bent-knee-sequence",
        heading: "2. The 3-Step Gentle Inclined Sequence",
        paragraphs: [
          "During sensitive flare-ups, aggressive straight-leg hamstring stretches often pull directly on an irritated nerve. Instead, start low and gentle:",
        ],
        bullets: [
          "Step 1 (10° Incline, 4 min): Lie supine holding the upper carriage with knees softly bent to keep hamstring pull minimal.",
          "Step 2 (12°–15° Incline, 4 min): Perform slow alternating ankle pumps and pain-free single-leg slides.",
          "Step 3 (Exit Safely): Rest flat for 2 minutes, then roll gently onto your side rather than sitting straight up.",
        ],
      },
    ],
    references: [
      { citation: "Ropper AH, Zafonte RD. Sciatica. New England Journal of Medicine. 2015;372(13):1240-1248.", source: "NEJM Review" },
    ],
    faqs: [
      {
        q: "Should I push through shooting leg pain during exercises?",
        a: "Never. Every movement on the Evminov board should feel relieving and pain-free. If pain radiates further down the leg, lower the angle or pause and consult a healthcare clinician.",
      },
    ],
  },
  {
    id: "remote-worker-spine-hygiene",
    slug: "remote-worker-spine-hygiene-posture-reset",
    title: "The Remote Worker's 7-Minute Spine Reset: Reversing Tech-Neck and 9 Hours of Sitting",
    metaTitle: "Remote Worker Posture & Tech-Neck Reset | Evminov Home Office",
    metaDescription:
      "Sitting 9 hours a day puts up to 190% more load on lumbar discs than standing. Discover the compact 7-minute home-office Evminov routine — wall-fold or drill-free stand.",
    category: "Desk Ergonomics",
    datePublished: "2026-07-28",
    dateModified: "2026-11-20",
    readTime: "7 min read",
    author: {
      name: "Evminov Ergonomics Research Group",
      role: "Workplace Posture & Mobility",
      credentials: "Home Office Spine Hygiene Specialists",
    },
    heroImage: "/images/gallery/thoracic-opening-stretch.jpg",
    excerpt:
      "Even a $1,500 ergonomic chair cannot eliminate gravitational disc compression. Here is how software engineers and remote workers reset their spine in 7 minutes.",
    recommendedProductSlug: "2-piece-folding-board",
    sections: [
      {
        id: "seated-pressure",
        heading: "1. The Biomechanical Cost of 9 Hours in a Chair",
        paragraphs: [
          "Classic intradiscal pressure measurements show that slouched sitting increases lumbar disc load dramatically compared to standing upright. Meanwhile, tilting your head forward 45° toward a laptop increases effective cervical neck load from ~12 lbs to nearly 49 lbs.",
        ],
      },
      {
        id: "seven-minute-protocol",
        heading: "2. The Daily 7-Minute Home-Office Reset",
        paragraphs: [
          "Keep a 2-Piece Folding Evminov Board in your closet or mounted flat (2.4\" profile) behind your office door, or pair any model with the zero-drill Free-Standing Ladder Stand:",
        ],
        bullets: [
          "Minutes 1–3 (15° Incline): Overhead supine thoracic reach with 10 deep rib-expanding breaths to open keyboard-rounded shoulders.",
          "Minutes 4–5 (10° Incline): Gentle cervical traction using the included padded Glisson Loop to ease suboccipital neck tightness.",
          "Minutes 6–7 (16° Incline): Slow single-leg slides to lengthen tight seated hip flexors (psoas).",
        ],
      },
    ],
    references: [
      { citation: "Hansraj KK. Assessment of stresses in the cervical spine caused by posture and position of the head. Surg Technol Int. 2014;25:277-279.", source: "PubMed Cervical Biomechanics" },
    ],
    faqs: [
      {
        q: "Can renters use the Evminov board without drilling apartment walls?",
        a: "Yes! Pair any board with our Demountable Free-Standing Ladder Stand ($275), which requires zero wall holes and occupies less than 3.5 sq ft.",
      },
    ],
  },
  {
    id: "toothbrush-for-the-spine",
    slug: "toothbrush-for-the-spine-daily-disc-hygiene",
    title: "The \"Toothbrush for the Spine\": Why Daily 10-Minute Unloaded Movement Beats Reactive Care",
    metaTitle: "Daily Spine Hygiene: The \"Toothbrush for the Spine\" Philosophy | Evminov",
    metaDescription:
      "Why systematic reviews (JAMA Internal Medicine, WHO 2023) show structured active exercise outperforms passive fixes — and how 10 minutes daily protects your 32 vertebrae.",
    category: "Preventive Spine Hygiene",
    datePublished: "2026-09-18",
    dateModified: "2026-11-20",
    readTime: "8 min read",
    author: {
      name: "Evminov Spine Biomechanics Editorial Team",
      role: "Vertebral Wellness Heritage",
      credentials: "Vyacheslav Evminov Methodology Archive (Since 1996)",
    },
    heroImage: "/images/gallery/family-home-lifestyle.jpg",
    excerpt:
      "We brush 32 teeth every day to avoid dental crises, yet ignore 32 vertebrae until pain strikes. Learn the prevention philosophy behind the Evminov board.",
    recommendedProductSlug: "2-piece-folding-board",
    sections: [
      {
        id: "jama-evidence",
        heading: "1. What Major Systematic Reviews Reveal About Long-Term Back Care",
        paragraphs: [
          "A widely cited systematic review and meta-analysis in JAMA Internal Medicine (Steffens et al., analyzing over 6,000 screened records and 23 randomized trials across 30,850 participants) concluded that structured exercise — particularly combined with education — is the most reliable intervention for reducing recurring low back pain episodes.",
          "Similarly, the World Health Organization's 2023 global guidelines for chronic primary low back pain prioritize structured, non-pharmacological movement over passive quick fixes.",
        ],
      },
      {
        id: "thirty-two-vertebrae",
        heading: "2. Daily 10-Minute Prevention Economics",
        paragraphs: [
          "Vyacheslav Evminov coined the phrase \"Daily Hygiene for the Spine\" after restoring his own mobility in the 1990s. One handcrafted $450 Evminov board lasts 20+ years and adjusts in seconds for an entire household of three — working out to roughly $7.50 per person per year, compared to thousands in recurring clinic visits.",
        ],
      },
    ],
    references: [
      { citation: "Steffens D, Maher CG, Pereira LS, et al. Prevention of Low Back Pain: A Systematic Review and Meta-analysis. JAMA Intern Med. 2016;176(2):199-208.", source: "JAMA Internal Medicine" },
      { citation: "World Health Organization. WHO Guideline for Non-Surgical Management of Chronic Primary Low Back Pain in Adults. Geneva: WHO; 2023.", source: "WHO Guidelines" },
    ],
    faqs: [
      {
        q: "How many minutes per day are enough for preventative spine hygiene?",
        a: "Consistent short sessions of 8 to 12 minutes once or twice daily outperform infrequent long workouts.",
      },
    ],
  },
  {
    id: "spine-decompression-complete-guide",
    slug: "spine-decompression-at-home-complete-clinical-guide",
    title: "Home Spine Decompression Complete Buyer's & Setup Guide (US 16\" Studs, HSA/FSA & Models)",
    metaTitle: "Home Spine Decompression Guide: Setup, Models & HSA/FSA | Evminov USA",
    metaDescription:
      "Everything US buyers need to know before ordering an Evminov spine board: choosing Pine vs. Alder vs. Wide, 16-inch stud wall mounting, renter stands, and HSA/FSA receipts.",
    category: "Buyer's Guide",
    datePublished: "2026-09-19",
    dateModified: "2026-11-20",
    readTime: "10 min read",
    author: {
      name: "Evminov USA Operations & Sizing Team",
      role: "Glendale, California Fulfillment & Support",
      credentials: "US Home Installation & HSA/FSA Specialists",
    },
    heroImage: "/images/products/board-mounting-bracket.jpg",
    excerpt:
      "A practical buyer's guide covering US 16\" wood-stud mounting, Pine vs. Alder vs. Wide sizing, delivery timelines to all 50 states, and HSA/FSA itemized invoices.",
    recommendedProductSlug: "2-piece-folding-board",
    sections: [
      {
        id: "choosing-your-model",
        heading: "1. Choosing Between the 5 Evminov Board Models",
        paragraphs: [
          "Selecting the right Evminov board depends on three simple variables: your height/weight, your living space, and how often you plan to move or travel with the board.",
        ],
        bullets: [
          "Standard Solid Pine ($450 direct / $595 CA Express): Best all-around permanent wall board for users up to 6'4\" and 210 lbs.",
          "2-Piece Folding ($475 / $615): Separates into two 45\" halves in 30 seconds for closet or under-bed storage (up to 220 lbs).",
          "3-Piece Travel ($495 / $635): Packs into 31\" trunk/airline bag with over-the-door strap (up to 220 lbs).",
          "Wide Heavy-Duty ($500 / $635): 30% wider reinforced deck rated to 330 lbs and 6'9\" — built for athletes and broad shoulders.",
          "Select Alder Wood ($525 / $665): ~15% lighter warm-amber timber (19–21 lbs) for effortless handling (up to 220 lbs).",
        ],
      },
      {
        id: "us-wall-mounting",
        heading: "2. Installing on Standard US 16\" Drywall Wood Studs (Or No-Drill Stand)",
        paragraphs: [
          "American homes frame drywall over vertical wooden studs spaced 16 inches on center. Mounting takes ~15 minutes: locate a single solid stud using a stud finder, drill two pilot holes at your height mark, and fasten the included heavy-duty bracket with two lag bolts. The board hangs securely by its braided cable and folds flat to 2.4\" when unused.",
          "Renting an apartment? Add the Demountable Free-Standing Ladder Stand ($275) — zero wall holes, zero deposit risk, 3-minute tool-free setup.",
        ],
      },
      {
        id: "hsa-fsa-step-by-step",
        heading: "3. Using Pre-Tax HSA / FSA Funds (~30% Savings)",
        paragraphs: [
          "Many US buyers save roughly 25%–35% using pre-tax Health Savings Account (HSA) or Flexible Spending Account (FSA) dollars. Ask your physician, chiropractor, or physical therapist for a brief Letter of Medical Necessity (LMN) recommending home spine traction equipment, then submit the itemized receipt we email you upon purchase to your plan administrator.",
        ],
      },
    ],
    references: [
      { citation: "Internal Revenue Service (IRS) Publication 502: Medical and Dental Expenses (Section 213(d) Eligibility).", source: "IRS.gov" },
    ],
    faqs: [
      {
        q: "How fast does Evminov USA ship from California?",
        a: "California Warehouse Express orders ship via insured UPS/FedEx from Glendale, CA in 1–2 business days to the West Coast, 2–3 days to the Midwest/South, and 3–4 days to the East Coast.",
      },
    ],
  },
  {
    id: "pediatric-posture-youth",
    slug: "pediatric-scoliosis-prevention-kids-posture-spine",
    title: "Youth & Family Posture Guide: Countering Backpacks and Screen Slouch in 5 Minutes Daily",
    metaTitle: "Youth & Family Posture Alignment Board Guide | Evminov",
    metaDescription:
      "Heavy school backpacks and screen posture drive early slouching in kids and teens. Learn how supervised 5–8 minute symmetrical routines on the Evminov board promote balanced posture.",
    category: "Family & Youth Posture",
    datePublished: "2026-09-20",
    dateModified: "2026-11-20",
    readTime: "7 min read",
    author: {
      name: "Evminov Family Posture & Wellness Team",
      role: "Youth Ergonomics & Symmetrical Movement",
      credentials: "Evminov Heritage Archive (Since 1996)",
    },
    heroImage: "/images/gallery/family-prone-extension.jpg",
    excerpt:
      "How a flat, symmetrical wooden reference plane and 5-minute music-guided routines help kids and teens build healthy upright habits alongside parents.",
    recommendedProductSlug: "2-piece-folding-board",
    sections: [
      {
        id: "modern-school-posture",
        heading: "1. Backpacks, Desks, and Smartphone Slouch",
        paragraphs: [
          "School-age children spend 6–8 hours seated at desks followed by hours hunched over phones and tablets while carrying heavy single-shoulder backpacks. Over months, asymmetrical muscle tightness and slumped shoulders quickly become habitual.",
        ],
      },
      {
        id: "playful-symmetry-routine",
        heading: "2. Making Daily Posture Fun (5–8 Minutes With Music)",
        paragraphs: [
          "Rigid exercises bore kids fast. The Evminov youth approach keeps routines short, rhythmic, and parent-supervised at gentle 6°–12° angles:",
        ],
        bullets: [
          "Always supervise children directly and keep inclines ultra-gentle (6°–12°).",
          "Keep every movement strictly bilateral (matching left and right sides evenly).",
          "Use upbeat music for 5 minutes after homework so posture care feels like a game, not a chore.",
          "Consult a pediatric orthopedist for formal evaluation of any suspected structural scoliosis.",
        ],
      },
    ],
    references: [
      { citation: "Stokes IAF. Mechanical modulation of spinal growth and progression of adolescent scoliosis. Stud Health Technol Inform. 2008;135:75-83.", source: "PubMed Pediatric Biomechanics" },
    ],
    faqs: [
      {
        q: "Can one Evminov board fit both a 9-year-old child and a 6'2\" parent?",
        a: "Yes. The sliding carriage pin adjusts in 5 seconds across the entire board length so children, teens, parents, and grandparents share one lifetime station.",
      },
    ],
  },
];

export function getGuideWordCount(guide: GuideItem): number {
  const text = [
    guide.title,
    guide.excerpt,
    ...guide.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets || [])]),
    ...guide.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function getGuideBySlug(slug: string): GuideItem | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}
