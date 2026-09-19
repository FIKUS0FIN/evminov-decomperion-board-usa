/**
 * Pediatric Posture, Scoliosis & Family Spinal Hygiene Component
 * Highlights: The "Spine Toothbrush" Metaphor (Зубна щітка для хребта),
 * 80% Childhood Scoliosis Prevention, "Lying-Down Dancing" (Танці лежачи) to music,
 * 13-Point Pediatric Training Plan, 15x Dental Savings Equation,
 * 5-7 cm Natural Growth Elongation, Hippocrates & Masso Clinical Quotes,
 * and Universal Workplace Ergonomics (for anyone with a spine).
 */

export function renderPediatricFamilySection() {
  return `
    <section class="pediatric-section" id="pediatric-family" aria-label="Pediatric Posture, Scoliosis & Family Spinal Hygiene">
      <div class="calc-container">
        
        <!-- Section Header -->
        <div class="section-header pediatric-header text-center">
          <div class="badge badge-trust" style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 14px;">
            <span>🧸</span>
            <span>PEDIATRIC SCOLIOSIS &amp; FAMILY SPINAL HYGIENE • CLINICALLY PROVEN SINCE 1996</span>
          </div>
          <h2 class="pediatric-main-title">
            The "Spine Toothbrush" Method: Pediatric Posture, Scoliosis &amp; Lifelong Family Care
          </h2>
          <div class="pediatric-ukr-subtitle">
            Методика «Зубна щітка для хребта»: Здоров'я дітей, профілактика сколіозу та щоденна гігієна хребта всієї родини
          </div>
          <p class="pediatric-header-desc">
            Over 80% of children develop posture disorders or scoliotic deformities from sedentary schooling and smartphone screens. The patented Evminov Method introduces the world's first <strong>"Toothbrush for the 32 Vertebrae"</strong> — turning clinical spinal decompression into an effortless, joyful 5-to-10 minute daily family ritual that prevents surgery and preserves youthful spinal mobility for life.
          </p>
        </div>

        <!-- 4 Core Navigation Tabs -->
        <div class="pediatric-tabs-bar" role="tablist" aria-label="Spine Hygiene & Pediatric Topics">
          <button type="button" class="pediatric-tab-btn active" data-tab="toothbrush" role="tab" aria-selected="true" id="tab-toothbrush">
            <span class="pediatric-tab-icon">🦷</span>
            <span class="pediatric-tab-title">"Spine Toothbrush" &amp; Economics</span>
            <span class="pediatric-tab-sub">32 Teeth vs. 32 Vertebrae</span>
          </button>

          <button type="button" class="pediatric-tab-btn" data-tab="dancing" role="tab" aria-selected="false" id="tab-dancing">
            <span class="pediatric-tab-icon">🎵</span>
            <span class="pediatric-tab-title">Lying-Down Dance (Танці Лежачи)</span>
            <span class="pediatric-tab-sub">Ages 3–15 • 13-Point Plan</span>
          </button>

          <button type="button" class="pediatric-tab-btn" data-tab="workplace" role="tab" aria-selected="false" id="tab-workplace">
            <span class="pediatric-tab-icon">💼</span>
            <span class="pediatric-tab-title">For Anyone With a Spine</span>
            <span class="pediatric-tab-sub">Family &amp; Workplace Use Cases</span>
          </button>

          <button type="button" class="pediatric-tab-btn" data-tab="wisdom" role="tab" aria-selected="false" id="tab-wisdom">
            <span class="pediatric-tab-icon">🏛️</span>
            <span class="pediatric-tab-title">Clinical Wisdom &amp; Biomechanics</span>
            <span class="pediatric-tab-sub">Hippocrates, Masso &amp; Disc Osmosis</span>
          </button>
        </div>

        <!-- TAB PANELS CONTAINER -->
        <div class="pediatric-panels-container">
          
          <!-- TAB 1: THE TOOTHBRUSH ANALOGY & ECONOMICS -->
          <div class="pediatric-panel active" id="panel-toothbrush" role="tabpanel" aria-labelledby="tab-toothbrush">
            <div class="pediatric-grid-2col">
              
              <div class="pediatric-card-glass">
                <div class="card-eyebrow-pill">Core Concept • Суть Концепції</div>
                <h3 class="card-heading-lg">Why Your Spine Needs a "Toothbrush" Every Single Day</h3>
                <p class="card-text-body">
                  Just as you brush your 32 teeth morning and night to prevent bacterial decay, your <strong>32–33 vertebrae</strong> require 5–10 minutes of daily axial decompression to reverse gravitational crushing and disc dehydration.
                </p>

                <div class="analogy-matrix-box">
                  <div class="analogy-row">
                    <div class="analogy-side">
                      <div class="analogy-label">🦷 32 TEETH HYGIENE</div>
                      <div class="analogy-desc">3–5 mechanical brush strokes per tooth surface prevent cavities and tooth loss.</div>
                    </div>
                    <div class="analogy-divider">VS</div>
                    <div class="analogy-side highlight">
                      <div class="analogy-label">🌲 32 VERTEBRAE DECOMPRESSION</div>
                      <div class="analogy-desc">3–5 micro-traction movements on the inclined pine plane rehydrate intervertebral discs and preserve nerve channels.</div>
                    </div>
                  </div>
                </div>

                <div class="quote-callout-warning">
                  <div class="callout-icon">⚠️</div>
                  <div class="callout-text">
                    <strong>«Зуби можна поміняти, а хребет — ні!»</strong><br/>
                    <em>You can replace broken teeth with dental implants, but medicine can NEVER replace a crushed vertebra, herniated disc, or compressed spinal cord. Your spine is the irreplaceable highway of life.</em>
                  </div>
                </div>
              </div>

              <!-- Economics Card -->
              <div class="pediatric-card-glass">
                <div class="card-eyebrow-pill">Family Economics • Формула Ціни</div>
                <h3 class="card-heading-lg">15x Cheaper Than Toothpaste &amp; Dental Care</h3>
                <p class="card-text-body">
                  Taking care of your family's spinal foundation is vastly more affordable than routine dental supplies — with zero recurring pharmacy co-pays.
                </p>

                <div class="cost-comparison-visual">
                  <div class="cost-bar-item">
                    <div class="cost-bar-header">
                      <span>🪥 Routine Family Dental Supplies (Yearly)</span>
                      <strong class="text-danger">~$150 – $200 / yr</strong>
                    </div>
                    <div class="cost-bar-track">
                      <div class="cost-bar-fill fill-danger" style="width: 85%;"></div>
                    </div>
                    <div class="cost-bar-caption">3–4 toothbrushes per person ($15), toothpaste 15 tubes ($90), dental floss &amp; cleanings (~$150/yr total for family of 3).</div>
                  </div>

                  <div class="cost-bar-item">
                    <div class="cost-bar-header">
                      <span>🌲 Evminov Spine Board (20-Year Lifetime Cost)</span>
                      <strong class="text-emerald">~$7.50 / person / yr</strong>
                    </div>
                    <div class="cost-bar-track">
                      <div class="cost-bar-fill fill-emerald" style="width: 12%;"></div>
                    </div>
                    <div class="cost-bar-caption">
                      <strong>Simple price formula:</strong> $450 board price ÷ 20 years ÷ 3 family members = <strong>~$7.50/year per person</strong> (In Ukraine/Europe: 180€ ÷ 20 ÷ 3 = <strong>3€/year!</strong>).
                    </div>
                  </div>
                </div>

                <div class="economics-takeaway-badge">
                  <span class="takeaway-emoji">🎯</span>
                  <span><strong>Economic Reality:</strong> Spinal longevity on the Evminov board costs <strong>8 to 15 times less</strong> than basic toothpaste — while shielding you from $50,000+ surgical spine operations!</span>
                </div>
              </div>

            </div>
          </div>

          <!-- TAB 2: LYING-DOWN DANCING & 13-POINT PEDIATRIC PROTOCOL -->
          <div class="pediatric-panel" id="panel-dancing" role="tabpanel" aria-labelledby="tab-dancing">
            <div class="pediatric-grid-2col">
              
              <!-- Dancing Method Card -->
              <div class="pediatric-card-glass">
                <div class="card-eyebrow-pill">Gamified Physical Therapy • Танці Лежачи</div>
                <h3 class="card-heading-lg">"Lying-Down Dancing" to Rhythmic Music (Ages 3–15)</h3>
                <p class="card-text-body">
                  Traditional medical gymnastics fail with children because they are boring, clinical, and feel like punishment. The Evminov Method replaces dread with <strong>joyful emotional excitement</strong>:
                </p>

                <div class="dance-features-list">
                  <div class="dance-feature-item">
                    <div class="feature-icon">🎧</div>
                    <div>
                      <strong>Music-Driven Movement:</strong> Children perform synchronized pelvic micro-tilts, alternating leg extensions, and lateral spinal waves to their favorite upbeat songs.
                    </div>
                  </div>
                  <div class="dance-feature-item">
                    <div class="feature-icon">🎮</div>
                    <div>
                      <strong>Gamified Habit Formation:</strong> Like brushing teeth or washing faces, 5–10 minutes of lying-down dancing turns spinal posture into an automatic lifelong morning/evening habit.
                    </div>
                  </div>
                  <div class="dance-feature-item">
                    <div class="feature-icon">📏</div>
                    <div>
                      <strong>Natural Growth Potential (+5 to +7 cm / +2–3 inches):</strong> Releasing intradiscal compression allows growing children to reach their full natural genetic height without stunted spinal curve blockages.
                    </div>
                  </div>
                  <div class="dance-feature-item">
                    <div class="feature-icon">⚖️</div>
                    <div>
                      <strong>Guaranteed Bilateral Symmetry:</strong> The guided inclined carriage forces 100% symmetrical load distribution, halting juvenile C-shaped and S-shaped scoliosis progression in its tracks.
                    </div>
                  </div>
                </div>

                <div class="image-showcase-container" style="margin-top: 20px;">
                  <img src="/images/gallery/youth-paired-traction.jpg" alt="Youth paired spinal decompression on Evminov board" class="pediatric-showcase-img" />
                  <div class="image-showcase-caption">Clinically supervised pediatric traction and posture restoration under low incline angles.</div>
                </div>
              </div>

              <!-- 13-Point Pedagogical Plan Card -->
              <div class="pediatric-card-glass">
                <div class="card-eyebrow-pill">Official Methodology • План Занять</div>
                <h3 class="card-heading-lg">13-Point Plan for Children &amp; Parents</h3>
                <p class="card-text-body">
                  Developed by the Evminov Spine Center for physical therapists, PE teachers, kindergarten educators, and proactive parents:
                </p>

                <div class="plan-steps-grid">
                  <div class="plan-step-box">
                    <span class="step-num">1</span>
                    <div><strong>Starting Age:</strong> Safe for young toddlers starting at 3–4 years old.</div>
                  </div>
                  <div class="plan-step-box">
                    <span class="step-num">2</span>
                    <div><strong>Educator Progression:</strong> Taught by PT specialist, then PE teachers, educators &amp; parents.</div>
                  </div>
                  <div class="plan-step-box">
                    <span class="step-num">3</span>
                    <div><strong>Playful Formats:</strong> Game, competition, and musical rhythm ("танці лежачи").</div>
                  </div>
                  <div class="plan-step-box">
                    <span class="step-num">4</span>
                    <div><strong>Frequency:</strong> 1–2 short sessions per day (5–10 minutes max).</div>
                  </div>
                  <div class="plan-step-box">
                    <span class="step-num">5</span>
                    <div><strong>Exercise Variety:</strong> Targeting cervical, thoracic, and lumbo-sacral spinal segments.</div>
                  </div>
                  <div class="plan-step-box">
                    <span class="step-num">6</span>
                    <div><strong>Age Calibration:</strong> Effortless micro-movements tailored to body growth stages.</div>
                  </div>
                  <div class="plan-step-box">
                    <span class="step-num">7</span>
                    <div><strong>Child Engagement:</strong> Duration capped to end BEFORE the child loses interest.</div>
                  </div>
                  <div class="plan-step-box">
                    <span class="step-num">8</span>
                    <div><strong>Safety Protocol:</strong> Always practiced under adult or educator supervision.</div>
                  </div>
                  <div class="plan-step-box">
                    <span class="step-num">9</span>
                    <div><strong>Strict Symmetry:</strong> Equal left-right repetitions to prevent scoliotic curves.</div>
                  </div>
                  <div class="plan-step-box">
                    <span class="step-num">10</span>
                    <div><strong>Parent Co-Training:</strong> Parents workout with kids, modeling lifelong wellness.</div>
                  </div>
                  <div class="plan-step-box">
                    <span class="step-num">11</span>
                    <div><strong>Smartphone Tracking:</strong> Documenting monthly height, posture, and alignment wins.</div>
                  </div>
                  <div class="plan-step-box">
                    <span class="step-num">12</span>
                    <div><strong>Exhibition &amp; Fun:</strong> Family show challenges across kids (3–15 yrs) and parents.</div>
                  </div>
                  <div class="plan-step-box" style="grid-column: 1 / -1;">
                    <span class="step-num">13</span>
                    <div><strong>Junior Team Competitions:</strong> Older students mentor teams of 5–6 younger kids for best posture and core agility results.</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- TAB 3: OCCUPATIONAL ERGONOMICS FOR ANYONE WITH A SPINE -->
          <div class="pediatric-panel" id="panel-workplace" role="tabpanel" aria-labelledby="tab-workplace">
            <div class="pediatric-card-glass" style="margin-bottom: 24px;">
              <div class="card-eyebrow-pill">Universal Architecture • Для Всіх, у Кого Є Хребет</div>
              <h3 class="card-heading-lg">One Single Trainer for the Whole Family (Ages 3 to 99)</h3>
              <p class="card-text-body">
                The Evminov board requires zero special gym space. It occupies just <strong>1.25 m² (2.5m x 0.5m)</strong> on any standard residential wall, weighs only <strong>8–9 kg</strong>, and adjusts its carriage in 10 seconds to fit anyone from a 3-year-old child to a 6'9" athlete (tested up to 330 lbs / 150 kg).
              </p>
            </div>

            <div class="professions-grid">
              
              <div class="profession-card">
                <div class="profession-icon">💻</div>
                <h4 class="profession-title">Desk, Remote &amp; Office Workers</h4>
                <div class="profession-problem"><strong>Problem:</strong> 8–12 hrs seated sitting posture spikes lumbar disc load by 190% and causes chronic "Tech Neck" strain (up to 60 lbs on C5–C7).</div>
                <div class="profession-solution"><strong>Solution:</strong> A 10-minute post-work decompression draws fluid back into compressed discs and releases tight hip flexors (psoas).</div>
              </div>

              <div class="profession-card">
                <div class="profession-icon">🚗</div>
                <h4 class="profession-title">Drivers, Truckers &amp; Commuters</h4>
                <div class="profession-problem"><strong>Problem:</strong> Constant road vibration combined with fixed seated hip angle grinds L4–S1 facet joints and pinches the sciatic nerve.</div>
                <div class="profession-solution"><strong>Solution:</strong> Low-angle (12°–18°) traction neutralizes vehicle vibration trauma, restores pelvic tilt, and stops sciatica flare-ups.</div>
              </div>

              <div class="profession-card">
                <div class="profession-icon">🏭</div>
                <h4 class="profession-title">Conveyor, Assembly &amp; Warehouse</h4>
                <div class="profession-problem"><strong>Problem:</strong> Repetitive asymmetrical bending, reaching, and heavy parcel handling causes micro-tears in the outer annulus fibrosus.</div>
                <div class="profession-solution"><strong>Solution:</strong> Bilateral traction balances torque, unloads strained paraspinal muscles, and prevents crippling workplace disability leaves.</div>
              </div>

              <div class="profession-card">
                <div class="profession-icon">💇</div>
                <h4 class="profession-title">Stylists, Beauty Masters &amp; Surgeons</h4>
                <div class="profession-problem"><strong>Problem:</strong> Static standing with forward-leaning neck and shoulder elevation creates burning thoracic spasms and numbness in fingers.</div>
                <div class="profession-solution"><strong>Solution:</strong> Glisson neck loop traction and prone spinal extension opens narrowed cervical foramina and relieves pinched brachial plexus nerves.</div>
              </div>

            </div>
          </div>

          <!-- TAB 4: CLINICAL WISDOM & DEEP BIOMECHANICS -->
          <div class="pediatric-panel" id="panel-wisdom" role="tabpanel" aria-labelledby="tab-wisdom">
            <div class="pediatric-grid-2col">
              
              <!-- Historical Medical Wisdom Card -->
              <div class="pediatric-card-glass">
                <div class="card-eyebrow-pill">Medical Heritage • Клінічна Мудрість</div>
                <h3 class="card-heading-lg">Timeless Principles of Spinal Medicine</h3>
                
                <div class="quote-card-luxury">
                  <div class="quote-mark">“</div>
                  <blockquote class="quote-text-content">
                    «Больной позвоночник — это вешалка для всех болезней.»<br/>
                    <strong>"A diseased spine is a coat hanger for all illnesses."</strong>
                  </blockquote>
                  <div class="quote-author-line">
                    <span class="author-name">— Hippocrates (460 – 370 BC)</span>
                    <span class="author-title">The Father of Modern Medicine</span>
                  </div>
                  <div class="quote-explanation">
                    <strong>The Anatomical Truth:</strong> The spine protects the spinal cord — the central electrical highway that innervates and regulates every internal organ: heart, lungs, kidneys, and digestive tract. When spinal nerves are compressed, internal organ function declines.
                  </div>
                </div>

                <div class="quote-card-luxury" style="margin-top: 20px;">
                  <div class="quote-mark">“</div>
                  <blockquote class="quote-text-content">
                    «Фізичні вправи можуть замінити безліч ліків, але жодні ліки не замінять фізичних вправ.»<br/>
                    <strong>"Physical exercises can replace many medicines, but no medicine can replace physical exercise."</strong>
                  </blockquote>
                  <div class="quote-author-line">
                    <span class="author-name">— Angelo Mosso (1846 – 1910)</span>
                    <span class="author-title">Pioneering Italian Physiologist &amp; Medical Scientist</span>
                  </div>
                  <div class="quote-explanation">
                    <strong>Drug-Free Rehabilitation:</strong> Over 2/3 of the global population suffers from spinal disorders and is prescribed toxic painkillers. Natural kinesitherapy on an inclined plane triggers true physiological regeneration without pharmaceuticals.
                  </div>
                </div>
              </div>

              <!-- Biomechanics & Osmotic Nutrition Card -->
              <div class="pediatric-card-glass">
                <div class="card-eyebrow-pill">Cellular Biomechanics • Дифузне Живлення Дисків</div>
                <h3 class="card-heading-lg">The Physiological Secret of the Evminov Method</h3>
                <p class="card-text-body">
                  Why does simple resting or general fitness fail to cure spinal pathology, while the Evminov inclined plane succeeds in over 90% of clinical cases?
                </p>

                <div class="biomech-flow-steps">
                  <div class="biomech-step-item">
                    <div class="biomech-icon">1</div>
                    <div>
                      <strong>Axial Unloading (Зниження тиску):</strong> On the inclined pine board, gravity generates fractional bodyweight traction. Intradiscal pressure drops from +150 mmHg down to negative vacuum (-100 to -150 mmHg).
                    </div>
                  </div>
                  <div class="biomech-step-item">
                    <div class="biomech-icon">2</div>
                    <div>
                      <strong>Deep Short Muscle Activation (Короткі м'язи спини):</strong> Gentle rhythmic contractions engage the intrinsic intervertebral muscles that are never reached during standard standing gym workouts.
                    </div>
                  </div>
                  <div class="biomech-step-item">
                    <div class="biomech-icon">3</div>
                    <div>
                      <strong>Intercellular Osmotic Diffusion (Дифузне живлення):</strong> Because adult discs lack direct blood vessels, this muscle pumping in an unloaded vacuum draws rich interstitial fluid, glucose, and oxygen directly into dehydrated cartilaginous structures.
                    </div>
                  </div>
                  <div class="biomech-step-item">
                    <div class="biomech-icon">4</div>
                    <div>
                      <strong>Long-Term Structural Regeneration:</strong> Bulging discs retract away from spinal nerves, disc height restores, and spinal ligaments regain resilient youthful elasticity.
                    </div>
                  </div>
                </div>

                <div class="image-showcase-container" style="margin-top: 20px;">
                  <img src="/images/gallery/family-home-lifestyle.jpg" alt="Family spinal health session at home" class="pediatric-showcase-img" />
                  <div class="image-showcase-caption">Daily home spinal hygiene practiced together across generations in modern living spaces.</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- Section Bottom Call-To-Action Ribbon -->
        <div class="pediatric-bottom-cta-banner">
          <div class="cta-banner-content">
            <div class="cta-banner-badge">🏠 INVEST IN YOUR FAMILY'S LIFELONG HEALTH</div>
            <h3 class="cta-banner-title">Bring the World's Best "Spine Toothbrush" Into Your Home</h3>
            <p class="cta-banner-text">
              Equip your children and household with hospital-grade Carpathian pine traction. 60-day risk-free in-home trial, direct US shipping from Burbank, CA, and 10-year factory warranty.
            </p>
          </div>
          <div class="cta-banner-buttons">
            <a href="#catalog" class="btn btn-primary btn-lg">
              <span>View Evminov Family Boards →</span>
            </a>
            <a href="#videos" class="btn btn-secondary btn-lg">
              <span>Watch Video Protocols ▶</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}

export function initPediatricFamilySection() {
  if (typeof document === 'undefined') return;
  const section = document.getElementById('pediatric-family');
  if (!section) return;

  const tabButtons = section.querySelectorAll('.pediatric-tab-btn');
  const panels = section.querySelectorAll('.pediatric-panel');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      if (!targetTab) return;

      // Update button active state
      tabButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update panel visibility
      panels.forEach((panel) => {
        if (panel.id === `panel-${targetTab}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}
