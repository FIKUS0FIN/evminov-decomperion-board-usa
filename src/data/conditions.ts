import { ConditionGoal } from "@/lib/physics";

export interface ConditionPageData {
  slug: string;
  goalKey: ConditionGoal;
  shortTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  recommendedAngle: string;
  dailyDuration: string;
  targetZone: string;
  recommendedProductSlug: string;
  heroImage: string;
  mechanisms: Array<{ title: string; detail: string }>;
  routineSteps: Array<{ phase: string; angle: string; action: string }>;
  safetyNote: string;
  faqs: Array<{ q: string; a: string }>;
}

export const CONDITIONS: ConditionPageData[] = [
  {
    slug: "herniated-disc-l4-l5",
    goalKey: "hernia",
    shortTitle: "L4–L5 & L5–S1 Disc Comfort",
    title: "Home Spine Unloading for L4–L5 & L5–S1 Disc Comfort",
    metaTitle: "L4–L5 & L5–S1 Home Spine Decompression Routine | Evminov Board",
    metaDescription:
      "Learn how low-angle 10°–20° inclined traction on the Evminov Carpathian pine board eases lumbar compression and supports deep core stability at home.",
    eyebrow: "Lumbar Wellness Funnel • L4–S1 Focus",
    summary:
      "The lower lumbar discs (L4–L5 and L5–S1) absorb over 60% of upper-body axial load. Controlled low-angle traction removes gravitational compression while gentle micro-movements activate deep stabilizing muscles.",
    recommendedAngle: "10° – 18° Low Incline",
    dailyDuration: "10–12 min, 1–2× daily",
    targetZone: "Lumbar L4–L5 & L5–S1",
    recommendedProductSlug: "standard-pine-board",
    heroImage: "/images/gallery/supine-spinal-elongation.jpg",
    mechanisms: [
      {
        title: "Fractional Bodyweight Unloading",
        detail: "Resting supine at 10°–18° lowers axial lumbar compression smoothly without jerky motorized pulls or upside-down blood rush.",
      },
      {
        title: "Flexing Carpathian Pine Cushioning",
        detail: "Unlike rigid steel benches, laminated pine yields microscopically with each breath, encouraging guarded paraspinal muscles to relax.",
      },
      {
        title: "Deep Multifidus Conditioning",
        detail: "Once acute tightness subsides, tiny pelvic tilts under traction train the deep stabilizers that support disc alignment upright.",
      },
    ],
    routineSteps: [
      { phase: "Week 1–2 (Gentle Unloading)", angle: "8° – 12°", action: "Supine relaxed traction + slow diaphragmatic breathing and ankle pumps (8 min)." },
      { phase: "Week 3–4 (Mobility)", angle: "12° – 18°", action: "Add gentle pelvic flattening and alternating knee-slide glides with zero pain." },
      { phase: "Month 2+ (Stabilization)", angle: "18° – 25°", action: "Progressive micro-amplitude core holds to maintain daily disc comfort." },
    ],
    safetyNote:
      "Always consult your physician before starting traction if you have an acute disc extrusion, progressive leg weakness, or numbness.",
    faqs: [
      {
        q: "What starting angle is best for sensitive L4–L5 discs?",
        a: "Start gently at 8° to 12° for 6–8 minutes so your lower back muscles relax completely without guarding. Only increase angle once low-angle sessions feel effortless.",
      },
      {
        q: "Should I mount the board or use the Free-Standing Stand?",
        a: "Both provide identical biomechanics. Choose the 16\" stud wall mount if you own your home, or add the Demountable Stand if you rent.",
      },
    ],
  },
  {
    slug: "sciatica-relief",
    goalKey: "sciatica",
    shortTitle: "Sciatica & Pinched Nerve",
    title: "Controlled Inclined Traction for Sciatic Nerve & Lower Back Relief",
    metaTitle: "Sciatica Relief Equipment at Home | Evminov Inclined Spine Board",
    metaDescription:
      "Ease tight lower-back nerve tension safely at home. Controlled 10°–18° inclined traction on natural pine without ankle clamps or upside-down inversion.",
    eyebrow: "Lower Back & Leg Tension • Sciatica Comfort",
    summary:
      "Radiating glute and leg discomfort is often worsened by prolonged sitting and compressed lumbar segments. Gentle low-angle unloading paired with bent-knee relaxation lets tight piriformis and lumbar tissues release smoothly.",
    recommendedAngle: "10° – 18° Incline",
    dailyDuration: "10–12 min daily",
    targetZone: "L4–S1 & Sciatic Pathway",
    recommendedProductSlug: "standard-pine-board",
    heroImage: "/images/gallery/lumbar-single-leg-lift.jpg",
    mechanisms: [
      {
        title: "Zero Ankle Torque",
        detail: "Inversion table ankle locks often twist the pelvis and irritate the sciatic nerve. Overhead carriage grips leave your legs and hips relaxed.",
      },
      {
        title: "Gentle Unilateral Leg Slides",
        detail: "Bending one knee gently along the smooth pine board eases hamstring pull while supporting lumbar decompression.",
      },
    ],
    routineSteps: [
      { phase: "Step 1 (Settle)", angle: "10° – 12°", action: "Lie supine with knees slightly bent; relax shoulders and breathe deeply for 4 minutes." },
      { phase: "Step 2 (Gentle Glide)", angle: "12° – 16°", action: "Perform slow alternating ankle flexions and pain-free single-leg slides." },
      { phase: "Step 3 (Rest & Exit)", angle: "10°", action: "Rest 2 minutes passively, then roll gently onto your side before standing." },
    ],
    safetyNote:
      "Stop immediately if any movement increases sharp radiating pain below the knee, and seek prompt medical evaluation for severe numbness or weakness.",
    faqs: [
      {
        q: "Why is an inclined board better than floor stretching for sciatic discomfort?",
        a: "Floor stretches can compress lumbar discs when bending forward. The Evminov board unloads axial gravity first, letting muscles lengthen while spinal pressure stays low.",
      },
    ],
  },
  {
    slug: "degenerative-disc-disease",
    goalKey: "hernia",
    shortTitle: "Disc Hydration & Stiffness",
    title: "Daily Spine Hydration & Mobility for Age-Related Disc Stiffness",
    metaTitle: "Home Spine Mobility for Stiff & Compressed Discs | Evminov",
    metaDescription:
      "Support daily intervertebral disc mobility and morning back comfort with gentle 8°–15° inclined unloading on lightweight Alder or Carpathian pine.",
    eyebrow: "Active Longevity • Morning Stiffness Relief",
    summary:
      "Adult intervertebral discs lack direct blood vessels and depend on regular cycles of unloading and gentle motion to stay supple. Five to ten minutes of low-angle decompression restores effortless daily movement.",
    recommendedAngle: "8° – 15° Gentle Incline",
    dailyDuration: "8–10 min daily",
    targetZone: "Full Lumbar & Thoracic Spine",
    recommendedProductSlug: "select-alder-board",
    heroImage: "/images/gallery/lordosis-passive-traction.jpg",
    mechanisms: [
      {
        title: "Ultra-Gentle Low-Angle Option",
        detail: "Safe 8°–12° inclines offer soothing axial unloading without cardiovascular strain, making the lightweight Select Alder board popular with adults 55+.",
      },
      {
        title: "Rhythmic Pumping Micro-Movements",
        detail: "Slow breathing and tiny foot flexions stimulate gentle spinal mobility without joint impact.",
      },
    ],
    routineSteps: [
      { phase: "Morning Reset", angle: "8° – 12°", action: "5 minutes of relaxed supine elongation to ease overnight stiffness." },
      { phase: "Evening Unwind", angle: "10° – 15°", action: "5 minutes of gentle pelvic tilts and calm rest before bed." },
    ],
    safetyNote:
      "Adults with advanced osteoporosis or spinal fractures should obtain physician clearance before using any traction apparatus.",
    faqs: [
      {
        q: "Which Evminov model is lightest and easiest for seniors to adjust?",
        a: "The Select Alder Wood board weighs just 19–21 lbs (~15% lighter than pine), making angle adjustments effortless.",
      },
    ],
  },
  {
    slug: "lower-back-pain",
    goalKey: "posture",
    shortTitle: "Everyday Lower Back Relief",
    title: "10-Minute Daily Home Routine for Chronic Lower Back Tightness",
    metaTitle: "Lower Back Relief Equipment for Home | Evminov Decompression Board",
    metaDescription:
      "Relieve daily lower back tightness from sitting, driving, or standing on hard floors with 10 minutes of controlled inclined spine decompression at home.",
    eyebrow: "Daily Spine Hygiene • Universal Home Solution",
    summary:
      "Whether you sit at a desk for 9 hours or stand on concrete floors all shift (nurses, retail, trades), gravity steadily compresses your lower back. Ten minutes on the Evminov board resets lumbar comfort every evening.",
    recommendedAngle: "12° – 20° Incline",
    dailyDuration: "10 min daily",
    targetZone: "Lower Back & Hips",
    recommendedProductSlug: "standard-pine-board",
    heroImage: "/images/authentic/hero-evminov-decompression.jpg",
    mechanisms: [
      {
        title: "Immediate End-of-Day Decompression",
        detail: "Lying supine reverses hours of upright or seated compression in minutes without leaving home.",
      },
      {
        title: "Psoas & Hip Flexor Release",
        detail: "Gentle prone and supine leg slides lengthen tight hip flexors that pull on the lower lumbar curve.",
      },
    ],
    routineSteps: [
      { phase: "Release", angle: "12° – 15°", action: "4 minutes supine traction gripping the carriage smoothly." },
      { phase: "Activate", angle: "15° – 20°", action: "4 minutes gentle glute bridges and alternating leg pedals on the board." },
      { phase: "Settle", angle: "12°", action: "2 minutes calm breathing before rising." },
    ],
    safetyNote: "Keep movements smooth and pain-free; never bounce or jump off the board after unloading.",
    faqs: [
      {
        q: "How quickly do people typically feel relief from daily lower back stiffness?",
        a: "Most users notice a lighter, looser lower back after their very first 10-minute session, with deeper postural stability building over 3–4 weeks of consistent daily use.",
      },
    ],
  },
  {
    slug: "scoliosis-posture",
    goalKey: "pediatric",
    shortTitle: "Youth & Family Posture",
    title: "Symmetrical Posture & Youth Alignment Station (Ages 6 to Adults)",
    metaTitle: "Family & Youth Posture Alignment Board | Evminov Spine Systems",
    metaDescription:
      "Counter heavy school backpacks and screen slouch with fun 5–8 minute symmetrical routines on the Evminov inclined board. One adjustable station for the entire family.",
    eyebrow: "Family & Youth Alignment • Ages 6–85+",
    summary:
      "Heavy school backpacks and hours of smartphone posture drive early slouching and uneven shoulders. On a flat, symmetrical pine reference plane at 8°–14°, children and teens retrain balanced posture in 5–8 playful minutes a day.",
    recommendedAngle: "8° – 14° Low Incline",
    dailyDuration: "5–8 min daily (supervised)",
    targetZone: "Full Spinal Symmetry",
    recommendedProductSlug: "standard-pine-board",
    heroImage: "/images/gallery/family-prone-extension.jpg",
    mechanisms: [
      {
        title: "Tactile Symmetry Feedback",
        detail: "Lying centered along the flat pine deck gives immediate proprioceptive feedback so uneven shoulders and hips realign.",
      },
      {
        title: "Grows With the Whole Family",
        detail: "The quick-lock carriage shifts in 5 seconds from 4'0\" to 6'4\" (6'9\" on Wide), serving children, parents, and grandparents.",
      },
    ],
    routineSteps: [
      { phase: "Fun Warm-Up", angle: "8° – 10°", action: "Play upbeat music; perform rhythmic symmetrical arm reaches and knee slides." },
      { phase: "Prone Posture Extension", angle: "10° – 14°", action: "Gentle face-down Superman holds (3–5 seconds) with zero spinal compression." },
    ],
    safetyNote:
      "Youth routines should always be supervised by a parent or guardian, and structural scoliosis should be monitored by a pediatric orthopedist.",
    faqs: [
      {
        q: "What age can children start supervised posture exercises on the Evminov board?",
        a: "Gentle playful acclimation under direct adult supervision starts around ages 5–6 at ultra-low 6°–10° angles, keeping every exercise symmetrical and fun.",
      },
    ],
  },
  {
    slug: "cervical-neck-traction",
    goalKey: "posture",
    shortTitle: "Neck & Glisson Loop Traction",
    title: "Gentle Cervical Neck Traction & Tech-Neck Relief With the Glisson Loop",
    metaTitle: "Cervical Neck Traction & Glisson Loop Guide | Evminov Board",
    metaDescription:
      "Relieve tech-neck, upper shoulder tension, and forward head posture using the included padded Glisson Loop at ultra-gentle 8°–12° angles.",
    eyebrow: "Cervical Spine & Tech-Neck • Glisson Loop Included",
    summary:
      "Tilting your head 45° over a laptop or phone multiplies effective head load on your neck vertebrae up to 49 lbs. Every Evminov board includes our padded Glisson Loop for gentle, calibrated cervical unloading.",
    recommendedAngle: "8° – 12° Ultra-Gentle Incline",
    dailyDuration: "5–8 min daily",
    targetZone: "Cervical C1–C7 & Upper Trapezius",
    recommendedProductSlug: "select-alder-board",
    heroImage: "/images/gallery/glisson-cervical-neutral.jpg",
    mechanisms: [
      {
        title: "Padded Occiput & Chin Cradle",
        detail: "Cotton-lined ergonomic harness distributes light 6–12 lb gravitational pull evenly without jaw discomfort.",
      },
      {
        title: "Thoracic Counter-Opening",
        detail: "Pair neck unloading with overhead lat stretches to open rounded shoulders permanently.",
      },
    ],
    routineSteps: [
      { phase: "Fit Harness", angle: "8° – 10°", action: "Clip the padded Glisson Loop to the top anchor and settle chin/occiput comfortably." },
      { phase: "Gentle Elongation", angle: "8° – 12°", action: "Relax shoulder blades completely for 5 minutes with slow nasal breathing; avoid sudden neck turns." },
    ],
    safetyNote:
      "Never exceed low gentle angles (8°–12°) with the Glisson Loop, and avoid cervical traction if you have cervical instability, recent neck trauma, or vascular dizziness.",
    faqs: [
      {
        q: "Is the Glisson Loop included with every Evminov board or sold separately?",
        a: "It is included FREE with every Evminov board model (Standard, 2-Piece Folding, 3-Piece Travel, Wide Heavy-Duty, and Select Alder).",
      },
    ],
  },
  {
    slug: "athlete-spine-recovery",
    goalKey: "athlete",
    shortTitle: "Athletes & Heavy Lifters",
    title: "Post-Deadlift & Squat Spine Decompression for Athletes and Home Gyms",
    metaTitle: "Spine Decompression for Athletes & Lifters | Evminov Wide Board",
    metaDescription:
      "Reverse barbell spinal compression after heavy deadlifts, squats, CrossFit, running, or BJJ. Rated up to 330 lbs — zero grip fatigue unlike pullup bar hangs.",
    eyebrow: "Strength & Performance • Up to 330 lbs Rated",
    summary:
      "Heavy squats, deadlifts, running miles, and BJJ grappling place thousands of pounds of axial compression on lumbar discs. Unlike hanging from a pullup bar — which fires your lats and keeps your back braced — the Evminov Wide Board lets your erectors relax completely.",
    recommendedAngle: "20° – 32° Athletic Incline",
    dailyDuration: "10–15 min post-workout",
    targetZone: "Full Posterior Chain & L4–S1",
    recommendedProductSlug: "wide-heavy-duty-board",
    heroImage: "/images/gallery/incline-glute-bridge.jpg",
    mechanisms: [
      {
        title: "Zero Grip & Lat Tension",
        detail: "Because your torso rests on the 30%-wider heavy-duty pine deck, your central nervous system drops protective lower-back guarding immediately.",
      },
      {
        title: "Zero-Compression Core Training",
        detail: "Perform inclined reverse crunches, leg pedals, and glute bridges to build bulletproof core stability without lumbar shear.",
      },
    ],
    routineSteps: [
      { phase: "Post-Lift Unload", angle: "20° – 25°", action: "4 minutes passive supine unloading immediately after squats or deadlifts." },
      { phase: "Hamstring & Hip Release", angle: "22° – 28°", action: "5 minutes prone hip extensions and supine hamstring traction." },
      { phase: "Core Lock-In", angle: "20° – 30°", action: "3 minutes controlled zero-compression core curls." },
    ],
    safetyNote:
      "Athletes over 210 lbs or 6'4\" should select the Wide Heavy-Duty Board (rated up to 330 lbs and 6'9\").",
    faqs: [
      {
        q: "Why is the Evminov board better than dead-hanging from a pullup bar?",
        a: "Dead-hanging forces your forearms and latissimus dorsi to contract strongly — and your lats attach directly into your lower-back thoracolumbar fascia, preventing full lumbar release.",
      },
    ],
  },
  {
    slug: "desk-worker-posture",
    goalKey: "posture",
    shortTitle: "Desk & Remote Workers",
    title: "7-Minute Desk Worker Spine Reset: Reverse 9 Hours of Sitting & Tech-Neck",
    metaTitle: "Desk Worker Back Pain & Posture Board | Evminov Home Office",
    metaDescription:
      "Counter 8–10 hours of sitting at a laptop with a 7-minute daily Evminov decompression break. Fits behind any home-office door or stands drill-free.",
    eyebrow: "Home Office Ergonomics • 7-Minute Daily Reset",
    summary:
      "Sitting hunched over screens spikes lumbar disc pressure up to 190% compared to standing and locks hip flexors tight. Keep an Evminov board behind your office door for a 7-minute lunch or post-work decompression reset.",
    recommendedAngle: "14° – 22° Incline",
    dailyDuration: "7–10 min daily",
    targetZone: "Neck, Upper Back & Lower Lumbar",
    recommendedProductSlug: "2-piece-folding-board",
    heroImage: "/images/gallery/thoracic-opening-stretch.jpg",
    mechanisms: [
      {
        title: "Thoracic Chest & Shoulder Opening",
        detail: "Overhead carriage reach undoes hours of rounded keyboard shoulders and restores full deep breathing.",
      },
      {
        title: "Apartment & Home-Office Friendly",
        detail: "Folds flat to 2.4\" on the wall, disassembles into 2 pieces for closets, or stands anywhere with the no-drill ladder stand.",
      },
    ],
    routineSteps: [
      { phase: "Min 1–3", angle: "15°", action: "Supine overhead thoracic opening stretch with 10 slow breaths." },
      { phase: "Min 4–5", angle: "10°", action: "Gentle Glisson Loop cervical decompression for screen-induced neck stiffness." },
      { phase: "Min 6–7", angle: "16°", action: "Single-leg slides to release tight seated hip flexors." },
    ],
    safetyNote:
      "Pairs naturally with standing desks and walking breaks — consistency (5–10 min daily) beats occasional long workouts.",
    faqs: [
      {
        q: "Can I store the Evminov board in a small home office or apartment?",
        a: "Yes. The 2-Piece Folding model separates into two 45\" halves that fit under a bed or in a closet, and the Free-Standing Stand requires under 3.5 sq ft with zero wall holes.",
      },
    ],
  },
];

export function getConditionBySlug(slug: string): ConditionPageData | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}

export function getAllConditionSlugs(): string[] {
  return CONDITIONS.map((c) => c.slug);
}
