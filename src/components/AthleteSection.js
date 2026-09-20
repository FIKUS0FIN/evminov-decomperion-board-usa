/**
 * AthleteSection.js
 * Comprehensive Sports Biomechanics, Athletic Longevity & Sedentary Desk Spine Recovery
 */

export const athleteDisciplines = [
  {
    id: 'lifters',
    name: 'Heavy Lifting & CrossFit',
    shortName: 'Lifters & CrossFit',
    icon: '🏋️',
    badge: 'Axial Compression: 18–22%',
    problemTitle: 'The Heavy Load Axial Compression Paradox',
    problemDesc: 'A 400-lb deadlift or heavy back squat generates massive axial compressive forces on L4-L5 and L5-S1 discs. While hanging from a pullup bar seems intuitive, your shoulder girdle, lats, and forearms fire isometrically to maintain grip. This defensive reflex locks the paraspinal rotatores and multifidus in tight spasm, preventing deep intervertebral decompression.',
    solutionTitle: 'Unloaded Pine Flex Traction (22°–32° Incline)',
    solutionDesc: 'Lying supine or prone with hands relaxed on the handles disengages defensive muscle guarding. Gravity generates 40–60 lbs of smooth, fractional bodyweight traction along the spine. The resonant Carpathian pine flexes with your body, creating negative intradiscal vacuum (-100 to -150 mmHg) that rehydrates dried discs.',
    stats: [
      { label: 'Disc Height Restored', val: '+2.4 mm' },
      { label: 'Decompression Load', val: '40–60 lbs' },
      { label: 'Post-Workout Protocol', val: '10–12 Mins' },
      { label: 'Recommended Model', val: 'Evminov Wide (330 lbs)' }
    ],
    recommendedLink: '#product-evminov-wide',
    recommendedText: 'View Wide Heavy-Duty Board',
    image: '/images/authentic/exercise-reverse-traction.jpg',
    imageAlt: 'Athletic reverse traction on Evminov board',
    imagePosition: 'center 45%',
    badgePosition: 'left',
    quote: 'Olympic lifters and powerlifters lose up to 15–20 mm of standing height over a heavy training session due to cumulative disc compression.'
  },
  {
    id: 'runners',
    name: 'Marathon & Distance Runners',
    shortName: 'Runners & Endurance',
    icon: '🏃',
    badge: 'Impact Force: 3–4x Bodyweight',
    problemTitle: '10,000+ Heel-Strike Shockwaves Per Hour',
    problemDesc: 'Every stride transmits 3 to 4 times your body weight up through the tibia and pelvis into the lumbar facet joints. Over a 10K, half, or full marathon, this repetitive jarring severely dehydrates the gelatinous nucleus pulposus, shortens the iliopsoas, and leads to chronic sciatic nerve impingement.',
    solutionTitle: 'Low-Angle Lumbo-Pelvic Elongation (12°–18°)',
    solutionDesc: 'Low-incline traction reverses kinetic impact shock without muscle strain. Smooth pelvic tilting and ankle pumping movements on the flexible pine plane release hypertonic hip flexors, re-establish osmotic fluid circulation to flattened discs, and prevent sciatica flare-ups before they start.',
    stats: [
      { label: 'Impact Jarring Neutralized', val: '-85%' },
      { label: 'Psoas Muscle Lengthening', val: 'Immediate' },
      { label: 'Target Session Time', val: '8–10 Mins' },
      { label: 'Recommended Model', val: 'Standard Carpathian Pine' }
    ],
    recommendedLink: '#product-evminov-standard',
    recommendedText: 'View Standard Pine Board',
    image: '/images/authentic/exercise-seated-decompression.jpg',
    imageAlt: 'Low-angle lumbo-pelvic decompression for runners',
    imagePosition: 'center 45%',
    badgePosition: 'right',
    quote: 'Marathoners recover baseline spinal height and running cadence 40% faster when decompressing within 30 minutes of long training runs.'
  },
  {
    id: 'golf-tennis',
    name: 'Golf, Tennis & Rotational Sports',
    shortName: 'Golf & Rotational',
    icon: '⛳',
    badge: 'Rotational Shear: 8x Body Mass',
    problemTitle: 'Asymmetric Rotational Shear & Annular Tears',
    problemDesc: 'A golf swing or high-velocity tennis serve generates explosive rotational torque and lateral shearing across the lower lumbar spine. Because the swing is unilateral, dominant-side facet joints grind together while the outer annular fibers of L4-L5 endure micro-tearing that precedes disc herniation.',
    solutionTitle: 'Bilateral Decompression & Thoracic Mobility Reset',
    solutionDesc: 'Under controlled axial traction, the Evminov inclined plane equalizes intra-articular pressure across both left and right facet joints. Symmetrical micro-rotations safely recalibrate spinal biomechanics, restore pelvic symmetry, and unlock full rotational swing power without pinching nerves.',
    stats: [
      { label: 'Facet Joint Space', val: '+35% Relief' },
      { label: 'Rotational Symmetry', val: '100% Reset' },
      { label: 'Pre/Post Round Reset', val: '6–8 Mins' },
      { label: 'Recommended Model', val: 'Select Alder Spring Flex' }
    ],
    recommendedLink: '#product-evminov-standard',
    recommendedText: 'Explore Resonant Boards',
    image: '/images/authentic/exercise-incline-stretch.jpg',
    imageAlt: 'Rotational decompression and thoracic mobility on Evminov board',
    imagePosition: 'center 40%',
    badgePosition: 'right',
    quote: 'PGA touring pros and tennis athletes use inclined traction to untwist the spine and prevent unilateral facet syndrome.'
  },
  {
    id: 'combat-bjj',
    name: 'BJJ, Combat Sports & Wrestling',
    shortName: 'Combat Sports & BJJ',
    icon: '🥋',
    badge: 'Cervical & Lumbar Crushing Force',
    problemTitle: 'Guard Stacking, Neck Bridging & Impact Slams',
    problemDesc: 'Brazilian Jiu-Jitsu, judo, and wrestling subject the cervical and thoracic spine to severe compressive loads during stack passes, guillotine defense, and takedowns. Combat athletes frequently suffer from pinched brachial plexus nerves, chronic neck craning, and upper-back burning.',
    solutionTitle: 'Glisson Neck Loop Cervical Decompression (8°–12°)',
    solutionDesc: 'The anatomical Glisson cervical loop attachment cradles the chin and occiput, applying gentle, non-inverting traction directly to C1–C7. Unloading the cervical vertebrae opens the neural foramina, relieving numbness in fingers and eliminating protective neck spasms safely.',
    stats: [
      { label: 'Cervical Traction', val: '8–14 lbs' },
      { label: 'Calibrated Incline', val: '8°–12° Angle' },
      { label: 'Brachial Nerve Relief', val: 'Documented' },
      { label: 'Included Attachment', val: 'Glisson Neck Loop' }
    ],
    recommendedLink: '#product-glisson-loop',
    recommendedText: 'View Glisson Neck Loop System',
    image: '/images/authentic/evminov-glisson-loop-cervical.jpg',
    imageAlt: 'Glisson cervical loop traction on Evminov board',
    imagePosition: 'center 28%',
    badgePosition: 'left',
    quote: 'Combat athletes require cervical unloading without the stroke/eye-pressure danger of hanging upside down from gravity boots.'
  },
  {
    id: 'desk-workers',
    name: 'Desk Workers & "The Sedentary Spine"',
    shortName: 'Desk & Office Workers',
    icon: '💻',
    badge: 'Sitting Pressure: +190% Over Standing',
    problemTitle: '8–12 Hours Seated: The Chronic Spinal Crushing Trap',
    problemDesc: 'Sitting hunched over a laptop or monitors spikes lumbar disc pressure to 140%–190% compared to standing upright. Adult discs have zero direct blood vessels and depend entirely on movement to draw in nutrients. 8+ hours of static sitting starves discs, while "Tech Neck" adds up to 60 lbs of unnatural strain on C5-C7.',
    solutionTitle: 'The 10-Minute Post-Work Decompression Reset',
    solutionDesc: 'A single 10-minute session on the resonant pine board at 15° after work immediately unloads the compressed lower back, elongates the shortened psoas, and draws nutrient-rich fluid back into starved discs. Zero commute, zero scheduling, right in your home office or bedroom.',
    stats: [
      { label: 'Sitting Pressure Relieved', val: '100% Unloaded' },
      { label: 'Tech Neck Head Strain', val: '0 lbs Supine' },
      { label: 'Daily Session Needed', val: '10 Mins' },
      { label: 'Long-term Benefit', val: 'Zero Clinic Co-pays' }
    ],
    recommendedLink: '#calculator',
    recommendedText: 'Calculate Desk Worker Angle',
    image: '/images/authentic/exercise-reverse-traction.jpg',
    imageAlt: 'Desk worker spinal decompression on Evminov board',
    imagePosition: 'center 45%',
    badgePosition: 'left',
    quote: 'More Americans suffer debilitating back pain from sitting at a computer than from heavy manual labor. 10 minutes of daily pine board decompression is the modern antidote.'
  }
];

export function renderAthleteSection() {
  const activeDiscipline = athleteDisciplines[0];

  const tabButtonsHtml = athleteDisciplines
    .map(
      (d, idx) => `
      <button 
        type="button" 
        class="athlete-tab-pill ${idx === 0 ? 'active' : ''}" 
        data-athlete-id="${d.id}"
        id="athlete-pill-${d.id}"
      >
        <span class="athlete-pill-icon">${d.icon}</span>
        <span class="athlete-pill-text">${d.shortName}</span>
      </button>
    `
    )
    .join('');

  const disciplinePanelsHtml = athleteDisciplines
    .map(
      (d, idx) => `
      <div 
        class="athlete-discipline-panel ${idx === 0 ? 'active' : ''}" 
        id="athlete-panel-${d.id}"
        data-panel-id="${d.id}"
      >
        <div class="athlete-grid">
          
          <div class="athlete-copy-col">
            <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 14px; flex-wrap: wrap;">
              <span class="badge badge-cyan">${d.badge}</span>
              <span style="font-size: 0.8125rem; font-weight: 700; color: var(--color-primary-navy);">
                ${d.icon} ${d.name}
              </span>
            </div>

            <h3 style="font-size: clamp(1.4rem, 2.5vw, 1.875rem); font-weight: 800; line-height: 1.25; margin-bottom: 14px; color: var(--color-primary-navy);">
              ${d.problemTitle}
            </h3>
            
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.65; margin-bottom: 16px;">
              ${d.problemDesc}
            </p>

            <!-- Biomechanical Solution Card -->
            <div style="background: var(--color-bg-light); border-radius: var(--radius-lg); padding: 20px; border: 1px solid var(--color-border-subtle); border-left: 4px solid var(--color-pine-emerald); margin-bottom: 20px; box-shadow: var(--shadow-sm);">
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
                <span style="color: var(--color-pine-emerald);">✓</span> ${d.solutionTitle}
              </h4>
              <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
                ${d.solutionDesc}
              </p>
            </div>

            <!-- Discipline Stats Grid -->
            <div class="athlete-stats-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 22px;">
              ${d.stats
                .map(
                  (s) => `
                <div style="background: #FFFFFF; border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); padding: 12px 14px;">
                  <div style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 800; color: var(--color-pine-emerald); line-height: 1.2;">
                    ${s.val}
                  </div>
                  <div style="font-size: 0.75rem; font-weight: 600; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.04em; margin-top: 4px;">
                    ${s.label}
                  </div>
                </div>
              `
                )
                .join('')}
            </div>

            <!-- Action CTAs -->
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <a href="${d.recommendedLink}" class="btn btn-primary btn-sm">
                <span>${d.recommendedText}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#calculator" class="btn btn-secondary btn-sm">
                Calculate Angle
              </a>
            </div>
          </div>

          <!-- Media Visual Column -->
          <div class="athlete-media-col" style="position: relative;">
            <div class="athlete-media-card" style="position: relative; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-xl); border: 1px solid var(--color-border-subtle); background: #F8FAFC;">
              <img 
                src="${d.image}" 
                alt="${d.imageAlt}" 
                loading="lazy"
                class="athlete-media-img"
                style="width: 100%; aspect-ratio: 4 / 3; max-height: 440px; object-fit: cover; object-position: ${d.imagePosition || 'center 45%'}; display: block;"
              />
              <div class="athlete-quote-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.45) 60%, rgba(15, 23, 42, 0) 100%); padding: 24px 20px 16px; z-index: 1;">
                <div style="font-size: 0.8125rem; font-style: italic; color: #E2E8F0; line-height: 1.5;">
                  "${d.quote}"
                </div>
              </div>
            </div>

            <!-- Floating Proof Pill (positioned according to discipline to preserve full face visibility) -->
            <div class="athlete-proof-badge" style="position: absolute; top: 16px; ${d.badgePosition === 'right' ? 'right: 16px;' : 'left: 16px;'} background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); padding: 10px 16px; border-radius: var(--radius-md); border: 1.5px solid var(--color-pine-border); box-shadow: var(--shadow-md); z-index: 2;">
              <div style="font-family: var(--font-mono); font-size: 1.15rem; font-weight: 800; color: var(--color-pine-emerald);">
                +2.4 mm Disc Height
              </div>
              <div style="font-size: 0.75rem; font-weight: 600; color: var(--color-primary-navy);">
                Restored within 12 mins
              </div>
            </div>
          </div>

        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="catalog-section athlete-section" id="athletes" style="background: var(--color-surface-white); border-top: 1px solid var(--color-border-subtle); padding: 70px 0 80px;">
      <div class="calc-container">
        
        <!-- Header -->
        <div class="section-header" style="max-width: 820px; margin: 0 auto 36px; text-align: center;">
          <div class="clinical-pill-badge" style="margin-bottom: 12px;">
            <span class="pill-dot"></span>
            <span>Sports Biomechanics &amp; Daily Spine Regeneration</span>
          </div>
          <h2 class="clinical-heading" style="font-size: clamp(1.8rem, 3.2vw, 2.6rem); margin-bottom: 14px;">
            Spine Restoration for Athletes, Desk Workers &amp; Tactical Operators
          </h2>
          <p class="clinical-subheading" style="font-size: 1.0625rem; color: var(--color-text-muted); line-height: 1.65; margin: 0 auto;">
            From 400-lb deadlifts and 10,000 running heel-strikes to 10 hours seated at a computer: spinal discs compress every single day. Reclaim your intervertebral disc height in 10 minutes post-workout or post-workday.
          </p>
        </div>

        <!-- Discipline Selector Pills -->
        <div class="athlete-tabs-bar" style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px;">
          ${tabButtonsHtml}
        </div>

        <!-- Dynamic Discipline Panels Container -->
        <div class="athlete-panels-container" style="margin-bottom: 48px;">
          ${disciplinePanelsHtml}
        </div>

        <!-- Biomechanical Education: The Pullup Bar Paradox vs Inversion vs Evminov -->
        <div class="pullup-paradox-box" style="background: #F8FAFC; border: 1.5px solid var(--color-border-subtle); border-radius: var(--radius-xl); padding: 32px; box-shadow: var(--shadow-md); margin-bottom: 40px;">
          <div style="max-width: 700px; margin: 0 auto 24px; text-align: center;">
            <span class="badge badge-gold" style="margin-bottom: 8px;">The Biomechanical Truth</span>
            <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 8px;">
              Why Traditional Decompression Methods Fail Athletes &amp; Desk Workers
            </h3>
            <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
              Most people attempt to decompress using pullup bar dead-hangs or inversion tables. Here is what clinical fluoroscopy reveals:
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); gap: 20px;">
            
            <!-- Column 1: Evminov Board -->
            <div style="background: #FFFFFF; border: 2px solid var(--color-pine-emerald); border-radius: var(--radius-lg); padding: 22px; position: relative; box-shadow: var(--shadow-sm);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                <span style="font-weight: 800; color: var(--color-pine-emerald); font-size: 1.0625rem;">Evminov Inclined Flex Board</span>
                <span style="color: var(--color-pine-emerald); font-size: 1.25rem;">✓</span>
              </div>
              <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.875rem; color: var(--color-text-main); line-height: 1.6;">
                <li style="margin-bottom: 8px;">• <strong>Zero Grip Fatigue:</strong> Body is supported at 8° to 35°, allowing total paraspinal release.</li>
                <li style="margin-bottom: 8px;">• <strong>Fractional Traction:</strong> Pure 40–60 lbs axial pull without head pressure or ankle trauma.</li>
                <li>• <strong>Dynamic Pine Spring:</strong> Carpathian timber deflects to match natural spinal curvature.</li>
              </ul>
            </div>

            <!-- Column 2: Inversion Table -->
            <div style="background: #FFFFFF; border: 1px solid #FED7AA; border-radius: var(--radius-lg); padding: 22px; position: relative;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                <span style="font-weight: 800; color: #D97706; font-size: 1.0625rem;">Inversion Table (Hanging Upside Down)</span>
                <span style="color: #D97706; font-size: 1.25rem;">⚠</span>
              </div>
              <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6;">
                <li style="margin-bottom: 8px;">• <strong>Vascular Strain:</strong> Head-down rush spikes cranial blood pressure and retinal eye pressure.</li>
                <li style="margin-bottom: 8px;">• <strong>Ankle &amp; Knee Shear:</strong> Full body weight hangs violently from delicate ankle tendons.</li>
                <li>• <strong>Defensive Reflex:</strong> Inversion fear triggers subconscious spinal muscle bracing.</li>
              </ul>
            </div>

            <!-- Column 3: Pullup Bar -->
            <div style="background: #FFFFFF; border: 1px solid #FECACA; border-radius: var(--radius-lg); padding: 22px; position: relative;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                <span style="font-weight: 800; color: #DC2626; font-size: 1.0625rem;">Hanging from Pullup Bar</span>
                <span style="color: #DC2626; font-size: 1.25rem;">✕</span>
              </div>
              <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6;">
                <li style="margin-bottom: 8px;">• <strong>Isometric Guarding:</strong> Grip effort forces lats, shoulders, and abs to fire contractually.</li>
                <li style="margin-bottom: 8px;">• <strong>Paraspinal Lock:</strong> Deep multifidus muscles clench shut, preventing lower lumbar release.</li>
                <li>• <strong>Fatigue Limit:</strong> Grip fails after 60 seconds before discs can create osmotic vacuum.</li>
              </ul>
            </div>

          </div>
        </div>

        <!-- Founder Coach Heritage Callout -->
        <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); border-radius: var(--radius-xl); padding: 28px 32px; color: #FFFFFF; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;">
          <div style="max-width: 720px;">
            <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 6px;">
              <span class="badge" style="background: rgba(52, 211, 153, 0.2); color: #34D399; border: 1px solid rgba(52, 211, 153, 0.3);">
                Founder Sports Heritage
              </span>
              <span style="font-size: 0.8125rem; color: #94A3B8;">
                Vyacheslav Evminov • Master of Sports
              </span>
            </div>
            <h4 style="font-size: 1.2rem; font-weight: 800; color: #FFFFFF; margin-bottom: 6px;">
              Invented by an Elite Rowing Coach to Cure His Own Paralyzing Sports Injury
            </h4>
            <p style="font-size: 0.875rem; color: #CBD5E1; line-height: 1.6; margin: 0;">
              As Honored Coach of Academic Rowing and President of the Rowing Federation, Vyacheslav Evminov faced a 50/50 chance of permanent wheelchair paralysis after catastrophic disc extrusions in 1989. Refusing invasive spinal fusion, he built the first inclined resonant pine board to heal his own spine — subsequently restoring over 120,000 patients and elite athletes worldwide.
            </p>
          </div>

          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="#centers" class="btn btn-primary btn-sm" style="white-space: nowrap;">
              Explore Kyiv Centers &amp; History
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}

/**
 * Interactive tabs initializer for AthleteSection
 */
export function initAthleteSection() {
  const container = document.getElementById('athletes');
  if (!container) return;

  const pillButtons = container.querySelectorAll('.athlete-tab-pill');
  const panels = container.querySelectorAll('.athlete-discipline-panel');

  pillButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-athlete-id');
      if (!targetId) return;

      // Update pill active states
      pillButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Update panel visibility
      panels.forEach((panel) => {
        if (panel.getAttribute('data-panel-id') === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}
