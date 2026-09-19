/**
 * US Distribution & 50-State Logistics Component
 * Highlights: Burbank, CA Fulfillment Hub, 50 States Shipping, Hundreds Sold in the US,
 * HSA/FSA Eligibility, Desk/Standing Worker Ergonomics.
 */

export const usStatesData = [
  { code: 'AL', name: 'Alabama', days: '2-3 days', carrier: 'FedEx Freight' },
  { code: 'AK', name: 'Alaska', days: '4-5 days', carrier: 'Air Cargo Express' },
  { code: 'AZ', name: 'Arizona', days: '1-2 days', carrier: 'UPS Ground' },
  { code: 'AR', name: 'Arkansas', days: '2-3 days', carrier: 'FedEx Freight' },
  { code: 'CA', name: 'California', days: '1-2 days', carrier: 'Local Express / UPS' },
  { code: 'CO', name: 'Colorado', days: '2-3 days', carrier: 'UPS Ground' },
  { code: 'CT', name: 'Connecticut', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'DE', name: 'Delaware', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'FL', name: 'Florida', days: '3-4 days', carrier: 'FedEx Home Delivery' },
  { code: 'GA', name: 'Georgia', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'HI', name: 'Hawaii', days: '4-5 days', carrier: 'Aloha Air Cargo' },
  { code: 'ID', name: 'Idaho', days: '2-3 days', carrier: 'UPS Ground' },
  { code: 'IL', name: 'Illinois', days: '2-3 days', carrier: 'FedEx Freight' },
  { code: 'IN', name: 'Indiana', days: '2-3 days', carrier: 'FedEx Freight' },
  { code: 'IA', name: 'Iowa', days: '2-3 days', carrier: 'UPS Ground' },
  { code: 'KS', name: 'Kansas', days: '2-3 days', carrier: 'UPS Ground' },
  { code: 'KY', name: 'Kentucky', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'LA', name: 'Louisiana', days: '2-3 days', carrier: 'FedEx Freight' },
  { code: 'ME', name: 'Maine', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'MD', name: 'Maryland', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'MA', name: 'Massachusetts', days: '3-4 days', carrier: 'UPS Ground' },
  { code: 'MI', name: 'Michigan', days: '2-3 days', carrier: 'FedEx Freight' },
  { code: 'MN', name: 'Minnesota', days: '2-3 days', carrier: 'UPS Ground' },
  { code: 'MS', name: 'Mississippi', days: '2-3 days', carrier: 'FedEx Freight' },
  { code: 'MO', name: 'Missouri', days: '2-3 days', carrier: 'FedEx Freight' },
  { code: 'MT', name: 'Montana', days: '2-3 days', carrier: 'UPS Ground' },
  { code: 'NE', name: 'Nebraska', days: '2-3 days', carrier: 'UPS Ground' },
  { code: 'NV', name: 'Nevada', days: '1-2 days', carrier: 'UPS Ground' },
  { code: 'NH', name: 'New Hampshire', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'NJ', name: 'New Jersey', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'NM', name: 'New Mexico', days: '2-3 days', carrier: 'UPS Ground' },
  { code: 'NY', name: 'New York', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'NC', name: 'North Carolina', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'ND', name: 'North Dakota', days: '2-3 days', carrier: 'UPS Ground' },
  { code: 'OH', name: 'Ohio', days: '2-3 days', carrier: 'FedEx Freight' },
  { code: 'OK', name: 'Oklahoma', days: '2-3 days', carrier: 'FedEx Freight' },
  { code: 'OR', name: 'Oregon', days: '1-2 days', carrier: 'UPS Ground' },
  { code: 'PA', name: 'Pennsylvania', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'RI', name: 'Rhode Island', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'SC', name: 'South Carolina', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'SD', name: 'South Dakota', days: '2-3 days', carrier: 'UPS Ground' },
  { code: 'TN', name: 'Tennessee', days: '2-3 days', carrier: 'FedEx Freight' },
  { code: 'TX', name: 'Texas', days: '2-3 days', carrier: 'FedEx Home Delivery' },
  { code: 'UT', name: 'Utah', days: '1-2 days', carrier: 'UPS Ground' },
  { code: 'VT', name: 'Vermont', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'VA', name: 'Virginia', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'WA', name: 'Washington', days: '2-3 days', carrier: 'UPS Ground' },
  { code: 'WV', name: 'West Virginia', days: '3-4 days', carrier: 'FedEx Freight' },
  { code: 'WI', name: 'Wisconsin', days: '2-3 days', carrier: 'FedEx Freight' },
  { code: 'WY', name: 'Wyoming', days: '2-3 days', carrier: 'UPS Ground' },
];

export function renderUsDistributionSection() {
  return `
    <section id="us-shipping" class="us-dist-section" aria-label="US Distribution and 50 States Shipping">
      <div class="calc-container container">
        
        <!-- Header & US Authority Badge with Balanced Logistics Stats -->
        <div class="us-dist-header">
          <div class="us-dist-header-row">
            <div class="us-dist-header-main">
              <div class="badge badge-trust" style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 14px;">
                <span>🇺🇸</span>
                <span>PROVEN US TRACK RECORD: HUNDREDS OF AMERICAN HOMES EQUIPPED • CLINICAL HERITAGE SINCE 1996</span>
              </div>
              <h2 class="section-title us-dist-title">
                Direct Shipping to All 50 US States From Our Burbank, CA Hub
              </h2>
              <p class="section-subtitle us-dist-desc">
                Backed by 30 continuous years of clinical spine rehabilitation since 1996. Engineered for American homes, shipped directly from our California distribution warehouse with full insurance, real-time tracking, and certified HSA/FSA medical coverage.
              </p>
            </div>

            <!-- US Logistics Quick-Trust Strip (Fills previous empty space with verified metrics) -->
            <div class="us-dist-header-stats" aria-label="US Shipping Quick Metrics">
              <div class="us-header-stat-card">
                <span class="us-header-stat-icon">🚚</span>
                <div>
                  <div class="us-header-stat-val">All 50 States</div>
                  <div class="us-header-stat-lbl">FedEx &amp; UPS Freight Coverage</div>
                </div>
              </div>

              <div class="us-header-stat-card">
                <span class="us-header-stat-icon">⚡</span>
                <div>
                  <div class="us-header-stat-val">2–4 Days Transit</div>
                  <div class="us-header-stat-lbl">Dispatched from Burbank, CA</div>
                </div>
              </div>

              <div class="us-header-stat-card">
                <span class="us-header-stat-icon">🏥</span>
                <div>
                  <div class="us-header-stat-val">HSA / FSA 100%</div>
                  <div class="us-header-stat-lbl">DME Code E0941 Itemized Receipt</div>
                </div>
              </div>

              <div class="us-header-stat-card">
                <span class="us-header-stat-icon">🛡️</span>
                <div>
                  <div class="us-header-stat-val">100% Insured</div>
                  <div class="us-header-stat-lbl">Custom Reinforced Wood Crates</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Core US Pillar Cards -->
        <div class="us-pillars-grid">
          
          <div class="us-pillar-card">
            <div class="us-pillar-icon" style="background: rgba(16, 185, 129, 0.12); color: var(--color-pine-light);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <div class="us-pillar-badge">All 50 States</div>
            <h3 class="us-pillar-title">Fast 2–4 Day Express Freight</h3>
            <p class="us-pillar-desc">
              Every unit is packaged in custom reinforced crates and shipped via FedEx Home Delivery or UPS Freight. West Coast addresses arrive in 1–2 days; Midwest in 2–3 days; East Coast in 3–4 days.
            </p>
            <div class="us-pillar-footer">
              <span class="text-pine font-bold text-sm">✓ 100% Insured Delivery</span>
            </div>
          </div>

          <div class="us-pillar-card">
            <div class="us-pillar-icon" style="background: rgba(14, 165, 233, 0.12); color: var(--color-traction-cyan);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div class="us-pillar-badge">Pre-Tax Savings</div>
            <h3 class="us-pillar-title">HSA / FSA 100% Eligible</h3>
            <p class="us-pillar-desc">
              Classified as Durable Medical Equipment (DME) under HCPCS Code <strong>E0941</strong>. We provide an instant itemized medical receipt for complete pre-tax reimbursement from your US health plan.
            </p>
            <div class="us-pillar-footer">
              <span class="text-cyan font-bold text-sm">✓ Itemized Medical Invoice</span>
            </div>
          </div>

          <div class="us-pillar-card">
            <div class="us-pillar-icon" style="background: rgba(245, 158, 11, 0.12); color: var(--color-gold-star);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <div class="us-pillar-badge">US Construction</div>
            <h3 class="us-pillar-title">Standard 16" Stud Mounting</h3>
            <p class="us-pillar-desc">
              Designed specifically for American drywall framing. Mounts into any standard 16-inch center wood stud with two included 400+ lb lag bolts. Takes just 2.4 inches depth folded flat.
            </p>
            <div class="us-pillar-footer">
              <span class="text-gold font-bold text-sm">✓ Heavy-Duty Lag Bolts Included</span>
            </div>
          </div>

          <div class="us-pillar-card">
            <div class="us-pillar-icon" style="background: rgba(139, 92, 246, 0.12); color: #A78BFA;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div class="us-pillar-badge">Risk-Free</div>
            <h3 class="us-pillar-title">60-Day In-Home Trial</h3>
            <p class="us-pillar-desc">
              Experience the decompression relief in your own home for two full months. If your herniated disc, sciatica, or back fatigue does not dramatically improve, return it for a 100% product refund.
            </p>
            <div class="us-pillar-footer">
              <span class="font-bold text-sm" style="color: #A78BFA;">✓ 10-Year Frame Warranty</span>
            </div>
          </div>

        </div>

        <!-- Interactive 50-State Delivery Lookup Tool -->
        <div class="us-state-lookup-card">
          <div class="us-lookup-intro">
            <span class="lookup-eyebrow">Interactive US Transit Calculator</span>
            <h3 class="lookup-heading">Check Delivery Time to Your State</h3>
            <p class="lookup-sub">Select your state below to view verified transit time and freight carrier dispatched from Burbank, CA:</p>
          </div>

          <div class="us-lookup-controls">
            <label for="us-state-select" class="sr-only">Select your US State</label>
            <select id="us-state-select" class="us-state-select" aria-label="Select US State for shipping calculation">
              <option value="">-- Choose your State (e.g. California, New York, Texas) --</option>
              ${usStatesData.map(s => `<option value="${s.code}" ${s.code === 'CA' ? 'selected' : ''}>${s.name} (${s.code})</option>`).join('')}
            </select>
            
            <div id="us-transit-result" class="us-transit-result" role="region" aria-live="polite">
              <div class="transit-badge-group">
                <span class="transit-tag transit-tag-speed">⚡ Estimated Delivery: <strong id="transit-days">1-2 Business Days</strong></span>
                <span class="transit-tag transit-tag-carrier">🚚 Carrier: <strong id="transit-carrier">Local Express / UPS Ground</strong></span>
                <span class="transit-tag transit-tag-status">✓ 100% In-Stock in Burbank, CA</span>
              </div>
              <p class="transit-note" id="transit-note">
                Orders placed before 2:00 PM PST dispatch the same business day with full tracking.
              </p>
            </div>
          </div>
        </div>

        <!-- Tailored American Use Cases Section -->
        <div class="us-usecases-section">
          <div class="text-center mb-6">
            <span class="badge badge-cyan" style="margin-bottom: 8px;">CLINICAL USE CASES</span>
            <h3 class="usecases-title">Engineered For How Americans Work & Live</h3>
            <p class="section-subtitle max-w-700">
              Whether you are trapped in an office chair, standing for 10-hour shifts, or squatting heavy in the gym, the Evminov decompression system targets the exact biomechanical source of your pain.
            </p>
          </div>

          <div class="usecases-grid">
            
            <!-- Desk & Office Workers -->
            <div class="usecase-card">
              <div class="usecase-header">
                <span class="usecase-icon">💻</span>
                <div>
                  <h4 class="usecase-name">Desk & Remote Workers</h4>
                  <span class="usecase-sub">8+ Hours Seated Daily</span>
                </div>
              </div>
              <div class="usecase-body">
                <div class="usecase-problem">
                  <strong>The Issue:</strong> Sitting loads lumbar discs with 40% more pressure than standing. Shortened hip flexors trigger anterior pelvic tilt, tech-neck forward head posture, and early L4-S1 disc bulging.
                </div>
                <div class="usecase-solution">
                  <strong>The Evminov Relief:</strong> 10 minutes at a 12°–15° incline gently stretches the psoas, opens neural foramina, restores up to 15 mm of lost disc height, and activates paraspinal stabilizers.
                </div>
              </div>
              <div class="usecase-badge-pill">✓ Relieves Sitting Stiffness & Neck Aches</div>
            </div>

            <!-- Standing Workers -->
            <div class="usecase-card">
              <div class="usecase-header">
                <span class="usecase-icon">🩺</span>
                <div>
                  <h4 class="usecase-name">Standing Professionals</h4>
                  <span class="usecase-sub">Nurses, Retail, Chefs, Trades</span>
                </div>
              </div>
              <div class="usecase-body">
                <div class="usecase-problem">
                  <strong>The Issue:</strong> 8–12 hours standing on unforgiving concrete floors causes static axial compression. Lumbar facet joints jam together, leading to intense lower back fatigue and muscle spasms.
                </div>
                <div class="usecase-solution">
                  <strong>The Evminov Relief:</strong> A 12-minute evening session in zero-load supine unweighting drains venous blood pooling in legs, expands facet joint spacing, and releases deep postural muscle tightness.
                </div>
              </div>
              <div class="usecase-badge-pill">✓ Ends End-of-Shift Lower Back Throbbing</div>
            </div>

            <!-- Athletes & Strength Lifters -->
            <div class="usecase-card">
              <div class="usecase-header">
                <span class="usecase-icon">🏋️</span>
                <div>
                  <h4 class="usecase-name">Lifters & Strength Athletes</h4>
                  <span class="usecase-sub">Deadlifts, Squats & CrossFit</span>
                </div>
              </div>
              <div class="usecase-body">
                <div class="usecase-problem">
                  <strong>The Issue:</strong> Heavy axial loading compresses discs by thousands of pounds. Hanging from a pullup bar fails because grip tension fires the lats, locking lumbar erectors in defensive tension.
                </div>
                <div class="usecase-solution">
                  <strong>The Evminov Relief:</strong> Tested to 330+ lbs, the Wide Board supports the body at 20°–30°, allowing complete parasympathetic spinal release, rapid disc rehydration, and faster workout recovery.
                </div>
              </div>
              <div class="usecase-badge-pill">✓ Eliminates Post-Deadlift Lower Back Pumps</div>
            </div>

            <!-- Chronic Disc & Sciatica Sufferers -->
            <div class="usecase-card">
              <div class="usecase-header">
                <span class="usecase-icon">🛡️</span>
                <div>
                  <h4 class="usecase-name">Chronic Disc & Sciatica</h4>
                  <span class="usecase-sub">L4-L5, L5-S1 Pinched Nerves</span>
                </div>
              </div>
              <div class="usecase-body">
                <div class="usecase-problem">
                  <strong>The Issue:</strong> Herniated or protruding disc cartilage mechanically pinches the sciatic nerve root, causing burning, numbness down the leg, and failed relief from NSAIDs and steroid injections.
                </div>
                <div class="usecase-solution">
                  <strong>The Evminov Relief:</strong> Low-angle traction creates a -150 mmHg negative intradiscal vacuum, suctioning the protrusion back away from the nerve and stimulating cartilage regeneration.
                </div>
              </div>
              <div class="usecase-badge-pill">✓ 93.4% Proven Surgery Avoidance Rate</div>
            </div>

            <!-- Youth Scoliosis & Developing Children -->
            <div class="usecase-card">
              <div class="usecase-header">
                <span class="usecase-icon">🎒</span>
                <div>
                  <h4 class="usecase-name">Kids, Students & Youth Scoliosis</h4>
                  <span class="usecase-sub">Ages 4–18 • Heavy Backpacks & Tech-Slouch</span>
                </div>
              </div>
              <div class="usecase-body">
                <div class="usecase-problem">
                  <strong>The Issue:</strong> 85%–90% of schoolchildren exhibit postural asymmetries; 15%–20% develop early scoliosis from 8-hour classroom sitting and heavy backpacks stunting vertebral growth plates.
                </div>
                <div class="usecase-solution">
                  <strong>The Evminov Relief:</strong> 5–8 minutes of daily playful incline kinesitherapy uncompresses growing vertebrae, corrects lateral curvature, and unlocks 5–7 cm of natural genetic height potential.
                </div>
              </div>
              <div class="usecase-badge-pill">✓ Halts Scoliosis & Unlocks Natural Growth Potential</div>
            </div>

          </div>
        </div>

        <!-- US Distribution Center Callout Banner -->
        <div class="us-distribution-callout">
          <div class="callout-grid">
            <div class="callout-info">
              <div class="callout-badge">CALIFORNIA FULFILLMENT FACILITY</div>
              <h4 class="callout-title">Evminov Spine Systems LLC (North American HQ)</h4>
              <p class="callout-text">
                📍 7539 Claybeck Ave, Burbank, CA 91505 • 📞 Customer Care & Spine Support: (818) 555-7746<br>
                Open Mon–Fri 8:00 AM – 6:00 PM PST. Every board is hand-inspected by our California orthopedic team before dispatch.
              </p>
            </div>
            <div class="callout-action">
              <a href="#catalog" class="btn btn-primary" style="white-space: nowrap;">
                Order With Free US Shipping →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

export function initUsDistributionSection() {
  const select = document.getElementById('us-state-select');
  const daysEl = document.getElementById('transit-days');
  const carrierEl = document.getElementById('transit-carrier');
  const noteEl = document.getElementById('transit-note');

  if (!select || !daysEl || !carrierEl) return;

  function updateTransit() {
    const selectedCode = select.value;
    const match = usStatesData.find(s => s.code === selectedCode);
    if (match) {
      daysEl.textContent = match.days;
      carrierEl.textContent = match.carrier;
      if (match.code === 'AK' || match.code === 'HI') {
        noteEl.textContent = `Air freight delivery to ${match.name}. Fully insured with tracking number provided via email.`;
      } else if (match.code === 'CA' || match.code === 'NV' || match.code === 'AZ') {
        noteEl.textContent = `Express West Coast transit from Burbank, CA hub. Usually delivers within 24–48 hours.`;
      } else {
        noteEl.textContent = `Direct ground freight from Burbank, CA to ${match.name}. Arrives with full tracking and liftgate delivery.`;
      }
    }
  }

  select.addEventListener('change', updateTransit);
}
