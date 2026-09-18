import { founderStory, militaryProgram, centersNetwork } from '../data/centersData.js';

export function renderClinicalCentersPage() {
  const timelineHtml = founderStory.timeline
    .map(
      (item) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <span class="timeline-year">${item.year}</span>
        <div class="timeline-title">${item.title}</div>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `
    )
    .join('');

  const militaryChallengesHtml = militaryProgram.challenges
    .map(
      (c) => `
      <div class="military-card">
        <div class="military-card-title">${c.title}</div>
        <p class="military-card-desc">${c.desc}</p>
      </div>
    `
    )
    .join('');

  const militarySolutionsHtml = militaryProgram.solutionSteps
    .map(
      (s) => `
      <div class="military-card" style="border-left: 3px solid #34D399;">
        <div class="military-step-badge">${s.step}</div>
        <div class="military-card-title">${s.title}</div>
        <p class="military-card-desc">${s.desc}</p>
      </div>
    `
    )
    .join('');

  const centersCardsHtml = centersNetwork
    .map(
      (center) => `
      <div class="center-card ${center.featured ? 'featured-center' : ''}" id="center-${center.id}">
        <div class="center-card-media">
          <img src="${center.image}" alt="${center.name}" loading="lazy" class="center-card-img" />
          <span class="center-card-badge">${center.type}</span>
        </div>
        <div class="center-card-body">
          <div class="center-city">${center.city}</div>
          <h3 class="center-name">${center.name}</h3>
          <p class="center-address">
            📍 <strong>Address:</strong> ${center.address}<br>
            ${center.landmark ? `<em>${center.landmark}</em><br>` : ''}
            ${center.hours ? `🕒 ${center.hours}` : ''}
          </p>

          <ul class="center-features-list">
            ${center.features.map((f) => `<li>${f}</li>`).join('')}
          </ul>

          <div class="center-card-footer">
            <div style="font-size: 0.8125rem; font-weight: 700; color: var(--color-primary-navy);">
              📞 ${center.phones.join(' • ')}
            </div>
            <a href="tel:${center.phones[0].replace(/[^0-9+]/g, '')}" class="btn btn-secondary btn-sm" style="margin-left: auto;">
              Call Direct
            </a>
          </div>
        </div>
      </div>
    `
    )
    .join('');

  // Structured Data Schema for Search Engines
  const schemaJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Evminov Vertebral-Health Center',
    alternateName: 'Центр Євмінова',
    description:
      'Official headquarters of the patented Evminov Spine Decompression & Kinesitherapy Method. Over 120,000 documented patient recoveries and specialized veteran rehabilitation.',
    founder: {
      '@type': 'Person',
      name: 'Vyacheslav Evminov',
      jobTitle: 'Honored Coach of Ukraine & Method Inventor'
    },
    foundingDate: '1996',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9 Kostolna Street',
      addressLocality: 'Kyiv',
      postalCode: '01001',
      addressCountry: 'UA'
    },
    telephone: '+380442707011',
    medicalSpecialty: 'Physiotherapy',
    hasMap: 'https://maps.google.com/?q=9+Kostolna+Street+Kyiv+Ukraine'
  });

  return `
    <div class="centers-page" id="centers-page-root">
      
      <!-- SEO JSON-LD Schema -->
      <script type="application/ld+json">
        ${schemaJson}
      </script>

      <!-- Sticky Top Navigation Bar -->
      <nav class="centers-nav-bar" aria-label="Centers Navigation">
        <div class="calc-container">
          <div class="centers-nav-inner">
            <div class="centers-breadcrumbs">
              <a href="#">← Back to Storefront</a>
              <span>/</span>
              <span>Rehabilitation Centers &amp; Veteran Care</span>
            </div>
            <div style="display: flex; gap: 12px; align-items: center;">
              <a href="#catalog" class="btn btn-primary btn-sm">
                Shop Evminov Boards ($112/mo)
              </a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Centers Hero -->
      <header class="centers-hero">
        <div class="calc-container">
          <div class="centers-hero-content">
            <div class="clinical-pill-badge" style="background: rgba(16, 185, 129, 0.2); color: #34D399; border-color: rgba(52, 211, 153, 0.3);">
              <span class="pill-dot" style="background: #34D399;"></span>
              <span>Clinical Heritage Since 1996 • Kyiv, Ukraine &amp; USA</span>
            </div>
            <h1 class="centers-hero-title">
              Evminov Vertebral-Health Centers &amp; Military Spine Restoration
            </h1>
            <p class="centers-hero-desc">
              From the historic central clinic at 9 Kostolna Street in Kyiv to dedicated frontline combat veteran recovery programs — explore the clinical home of the patented inclined plane decompression method.
            </p>

            <div class="centers-quick-kpi">
              <div class="centers-quick-kpi-item">
                <span class="centers-quick-kpi-num">120k+</span>
                <span class="centers-quick-kpi-label">Documented Patients</span>
              </div>
              <div class="centers-quick-kpi-item">
                <span class="centers-quick-kpi-num">98.2%</span>
                <span class="centers-quick-kpi-label">Recovery Satisfaction</span>
              </div>
              <div class="centers-quick-kpi-item">
                <span class="centers-quick-kpi-num">7</span>
                <span class="centers-quick-kpi-label">Doctoral Dissertations</span>
              </div>
              <div class="centers-quick-kpi-item">
                <span class="centers-quick-kpi-num">18</span>
                <span class="centers-quick-kpi-label">Countries Patented</span>
              </div>
            </div>

          </div>
        </div>
      </header>

      <!-- Section 1: The Founder's Story & Biomechanical Drama -->
      <section class="founder-section" id="founder-story">
        <div class="calc-container">
          
          <div class="founder-split-grid">
            
            <div>
              <span class="badge badge-gold" style="margin-bottom: 12px;">The Founder's Journey</span>
              <h2 style="font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 800; color: var(--color-primary-navy); line-height: 1.25; margin-bottom: 18px;">
                From Severe Spinal Trauma to Walking Again: The Vyacheslav Evminov Story
              </h2>
              
              <p style="font-size: 1rem; color: var(--color-text-main); line-height: 1.7; margin-bottom: 16px;">
                Before becoming a pioneer of modern spinal biomechanics, <strong>Vyacheslav Evminov</strong> was an Honored Coach of Ukraine in academic rowing and the first President of the Rowing Federation of Ukraine, having trained dozens of world-class champion athletes.
              </p>

              <div class="founder-drama-box">
                <div class="founder-drama-title">The 50/50 Prognosis That Changed Everything</div>
                <p style="font-size: 0.9375rem; color: var(--color-text-main); line-height: 1.6; margin: 0;">
                  In the late 1980s, an old sports trauma suddenly intensified into an agonizing lumbar disc herniation that pinched his sciatic nerve plexus. Within weeks, Evminov lost the ability to walk. Leading neurosurgeons delivered a devastating verdict: <em>"Surgery has only a 50/50 chance of success; the alternative is permanent wheelchair paralysis."</em>
                </p>
              </div>

              <p style="font-size: 1rem; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 16px;">
                Refusing to accept a wheelchair, Evminov applied his deep athletic knowledge of human kinesiology. Recognizing that adult intervertebral discs have no direct blood supply and can only heal through an <strong>unloaded osmotic pumping mechanism</strong>, he hand-built the first inclined flex-board in his workshop from multi-layer resonant pine.
              </p>

              <p style="font-size: 1rem; color: var(--color-text-muted); line-height: 1.7;">
                By combining low-angle gravitational unloading (12° to 18°) with synchronous, micro-amplitude contractions of deep paraspinal muscles, he eliminated nerve root pressure, drew synovial nutrients back into the desiccated discs, and made a complete, pain-free athletic recovery without a single surgical incision.
              </p>
            </div>

            <div class="founder-card-visual">
              <img 
                src="/images/authentic/clinic-rehab-center-1.jpg" 
                alt="Vyacheslav Evminov Vertebral-Health Center in Central Kyiv" 
                class="founder-img" 
              />
              <div class="founder-quote-overlay">
                <div class="founder-quote-text">
                  "${founderStory.quote}"
                </div>
                <div class="founder-quote-author">
                  — Vyacheslav Evminov, Master of Sports &amp; Method Creator
                </div>
              </div>
            </div>

          </div>

          <!-- Chronological Milestone Timeline -->
          <div style="background: var(--color-bg-light); border-radius: var(--radius-xl); padding: 40px; border: 1px solid var(--color-border-subtle);">
            <div style="text-align: center; max-width: 600px; margin: 0 auto 36px;">
              <span class="badge badge-pine" style="margin-bottom: 8px;">Milestone Timeline</span>
              <h3 style="font-size: 1.625rem; font-weight: 800; color: var(--color-primary-navy);">
                Four Decades of Clinical Vertebrology
              </h3>
            </div>
            
            <div class="timeline-wrapper">
              ${timelineHtml}
            </div>
          </div>

        </div>
      </section>

      <!-- Cinematic Video Showcase: The Evminov Method in Action -->
      <section class="cinematic-video-section" id="cinematic-demos" style="background: var(--color-surface-white); padding: 70px 0;">
        <div class="calc-container">
          
          <div class="section-header" style="max-width: 720px; margin: 0 auto 50px; text-align: center;">
            <span class="badge badge-pine" style="margin-bottom: 12px;">The Method in Motion</span>
            <h2 style="font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 800; color: var(--color-primary-navy);">
              Clinical Execution &amp; Apparatus Engineering
            </h2>
            <p style="font-size: 1rem; color: var(--color-text-muted);">
              Watch authentic video footage directly from the official Evminov center channel — from Vyacheslav Evminov's clinical disc rehabilitation exercises to the 10-minute home installation process.
            </p>
          </div>

          <!-- Video 1: Clinical Exercise Masterclass (55% Video / 45% Narrative) -->
          <div class="cinematic-video-grid" style="margin-bottom: 48px; background: #0B132B; border-radius: var(--radius-xl); padding: 36px; color: #FFFFFF; box-shadow: var(--shadow-xl);">
            <div class="video-frame-container">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/GDLVNWynWF0?rel=0" 
                title="Clinical Exercise Routine on Evminov Spine Decompression Board" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                loading="lazy"
              ></iframe>
              <div class="video-glow-effect"></div>
            </div>

            <div class="video-narrative">
              <div class="video-badge-strip">
                <span class="badge badge-pine">Official Clinical Routine</span>
                <span style="font-size: 0.75rem; color: #34D399; font-family: var(--font-mono); font-weight: 700;">4:04 HD</span>
              </div>

              <h3 style="font-size: clamp(1.35rem, 2.4vw, 1.85rem); font-weight: 800; color: #FFFFFF; line-height: 1.25; margin-bottom: 12px;">
                Herniated Disc &amp; Sciatica Remission Masterclass
              </h3>

              <p style="font-size: 0.9rem; color: #94A3B8; line-height: 1.6; margin-bottom: 18px;">
                Demonstrated by Evminov Center rehabilitation specialists. Observe how gentle gravitational elongation creates negative pressure within damaged lumbar discs, encouraging rehydration and retraction of herniated material away from the sciatic nerve.
              </p>

              <div class="video-chapters-list">
                <div class="video-chapter-item" style="background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">0:00</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Low-Angle Supine Traction</strong>
                    <span style="color: #94A3B8;">Initial decompression at 8°–12° eliminating spinal axial load.</span>
                  </div>
                </div>
                <div class="video-chapter-item" style="background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">1:30</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Micro-Movement Kinesitherapy</strong>
                    <span style="color: #94A3B8;">Smooth rhythmic flexing stimulating disc nutrition without compression.</span>
                  </div>
                </div>
                <div class="video-chapter-item" style="background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">3:10</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Core Muscular Stabilization</strong>
                    <span style="color: #94A3B8;">Reinforcing deep paraspinal corset muscles to lock in disc space.</span>
                  </div>
                </div>
              </div>

              <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <a 
                  href="https://www.youtube.com/watch?v=GDLVNWynWF0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-primary btn-sm"
                  style="display: inline-flex; align-items: center; gap: 8px;"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  Watch on YouTube ↗
                </a>
                <a href="#catalog" class="btn btn-secondary btn-sm" style="background: rgba(255,255,255,0.08); color: #fff; border-color: rgba(255,255,255,0.25);">
                  Shop Clinical Sets
                </a>
              </div>
            </div>
          </div>

          <!-- Video 2: Unboxing & Assembly Masterclass (Reverse Order 45% Narrative / 55% Video) -->
          <div class="cinematic-video-grid reverse-order" style="background: #0B132B; border-radius: var(--radius-xl); padding: 36px; color: #FFFFFF; box-shadow: var(--shadow-xl);">
            <div class="video-narrative">
              <div class="video-badge-strip">
                <span class="badge badge-cyan">Factory Installation Guide</span>
                <span style="font-size: 0.75rem; color: #94A3B8; font-family: var(--font-mono); font-weight: 700;">4:37 HD</span>
              </div>

              <h3 style="font-size: clamp(1.35rem, 2.4vw, 1.85rem); font-weight: 800; color: #FFFFFF; line-height: 1.25; margin-bottom: 12px;">
                Unboxing &amp; 10-Minute Wall Mounting Masterclass
              </h3>

              <p style="font-size: 0.9rem; color: #94A3B8; line-height: 1.6; margin-bottom: 18px;">
                Step-by-step unboxing and assembly instructions showing the folding 3-piece sectional pinewood frame, adjustable carriage positioning, and 16" US stud anchoring with included high-tensile hardware.
              </p>

              <div class="video-chapters-list">
                <div class="video-chapter-item" style="background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">0:00</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Unboxing &amp; Hardware Layout</strong>
                    <span style="color: #94A3B8;">Inspecting Carpathian pine sections, carriage, and mounting kit.</span>
                  </div>
                </div>
                <div class="video-chapter-item" style="background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">1:45</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Pine Section Assembly &amp; Carriage Setup</strong>
                    <span style="color: #94A3B8;">Rigid steel plates join sections into an anatomical spring plank.</span>
                  </div>
                </div>
                <div class="video-chapter-item" style="background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">3:30</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">16" US Wall Stud Fastening</strong>
                    <span style="color: #94A3B8;">Lag screw anchoring rated for 400+ lbs of active patient traction.</span>
                  </div>
                </div>
              </div>

              <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <a 
                  href="https://www.youtube.com/watch?v=fP-biAHusGs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-primary btn-sm"
                  style="display: inline-flex; align-items: center; gap: 8px;"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  Watch on YouTube ↗
                </a>
                <a href="#product-evminov-standard" class="btn btn-secondary btn-sm" style="background: rgba(255,255,255,0.08); color: #fff; border-color: rgba(255,255,255,0.25);">
                  View Standard Set ($349)
                </a>
              </div>
            </div>

            <div class="video-frame-container">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/fP-biAHusGs?rel=0" 
                title="Unboxing and Assembling the Evminov Board" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                loading="lazy"
              ></iframe>
              <div class="video-glow-effect"></div>
            </div>
          </div>

        </div>
      </section>

      <!-- Section 2: Dedicated Military & Combat Veteran Spine Rehabilitation Program -->
      <section class="military-section" id="military-rehab">
        <div class="calc-container">
          
          <div class="military-header">
            <span class="badge badge-gold" style="margin-bottom: 14px; background: rgba(245, 158, 11, 0.2); color: #FBBF24;">
              ${militaryProgram.badge}
            </span>
            <h2 style="font-size: clamp(1.75rem, 3.2vw, 2.75rem); font-weight: 800; line-height: 1.2; margin-bottom: 16px;">
              ${militaryProgram.title}
            </h2>
            <p style="font-size: 1.0625rem; color: #94A3B8; line-height: 1.65;">
              ${militaryProgram.subtitle} In frontline warfare, continuous patrol under 30–45 kg of ballistic armor and blast concussions destroys spinal disc integrity. The Evminov Center provides specialized clinical decompression for defenders.
            </p>
          </div>

          <h3 style="font-size: 1.25rem; font-weight: 800; color: #FFFFFF; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
            <span style="color: #EF4444;">⚠️</span> The Tactical Burden on the Spine
          </h3>
          <div class="military-challenges-grid">
            ${militaryChallengesHtml}
          </div>

          <h3 style="font-size: 1.25rem; font-weight: 800; color: #FFFFFF; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
            <span style="color: #34D399;">🛡️</span> The Evminov Clinical Solution for Veterans
          </h3>
          <div class="military-challenges-grid">
            ${militarySolutionsHtml}
          </div>

          <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(52, 211, 153, 0.3); border-radius: var(--radius-xl); padding: 28px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;">
            <div>
              <div style="font-size: 1.125rem; font-weight: 800; color: #FFFFFF; margin-bottom: 4px;">
                Are you a Veteran, Active Service Member, or Military Medic?
              </div>
              <div style="font-size: 0.875rem; color: #94A3B8;">
                Inquire about our expedited rehabilitation consultations and specialized tactical recovery protocols.
              </div>
            </div>
            <a href="mailto:support@evminovusa.com?subject=Military%20Spine%20Rehabilitation%20Inquiry" class="btn btn-primary btn-sm" style="white-space: nowrap;">
              Contact Military Care Coordinator
            </a>
          </div>

        </div>
      </section>

      <!-- Section 3: Official Centers Directory (Kyiv, USA, Regional & Europe) -->
      <section class="centers-directory-section" id="directory">
        <div class="calc-container">
          
          <div class="section-header">
            <span class="badge badge-cyan" style="margin-bottom: 12px;">Global Network</span>
            <h2>Official Rehabilitation Centers &amp; Distribution Hubs</h2>
            <p>
              Receive personalized clinical supervision in person at our central clinic in Kyiv, visit a regional partner center, or connect with our North American operations team in California.
            </p>
          </div>

          <div class="centers-grid">
            ${centersCardsHtml}
          </div>

          <!-- Direct Incline Consultation Request Box -->
          <div style="margin-top: 50px; background: var(--color-surface-white); border: 1.5px solid var(--color-pine-border); border-radius: var(--radius-xl); padding: 36px; box-shadow: var(--shadow-md); display: grid; grid-template-columns: 1.2fr 1fr; gap: 36px; align-items: center;">
            <div>
              <span class="badge badge-pine" style="margin-bottom: 10px;">At-Home Clinical Care</span>
              <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--color-primary-navy); line-height: 1.3; margin-bottom: 12px;">
                Can't Visit Kyiv in Person? Order an Authentic Board with US Support
              </h3>
              <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 20px;">
                Every Evminov board purchased in the United States and Canada is manufactured from genuine multi-layer Carpathian pine according to Vyacheslav Evminov's original medical patents and shipped directly with full video onboarding.
              </p>
              <div style="display: flex; gap: 14px; flex-wrap: wrap;">
                <a href="#catalog" class="btn btn-primary">
                  Order Evminov Board ($349–$500)
                </a>
                <a href="#calculator" class="btn btn-secondary">
                  Calculate Incline Angle
                </a>
              </div>
            </div>

            <div style="background: var(--color-bg-light); border-radius: var(--radius-lg); padding: 24px; border: 1px solid var(--color-border-subtle);">
              <div style="font-weight: 800; font-size: 1rem; color: var(--color-primary-navy); margin-bottom: 8px;">
                Clinical Headquarters Contact
              </div>
              <div style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 14px;">
                🇺🇦 <strong>Kyiv Flagship:</strong> 9 Kostolna St, Kyiv, Ukraine<br>
                📞 +380 (44) 270-70-11 • +380 (97) 270-77-11<br>
                🇺🇸 <strong>US Operations:</strong> Glendale &amp; Burbank, CA<br>
                📞 +1 (747) 306-0140 (PST / Direct)<br>
                ✉️ support@evminovusa.com
              </div>
              <div style="font-size: 0.75rem; color: var(--color-pine-emerald); font-weight: 700;">
                ✓ Verified Medical Manufacturer • 10-Year Warranty
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  `;
}

export function initClinicalCentersPage() {
  window.scrollTo({ top: 0, behavior: 'instant' });
}
