/**
 * Global Brand Authority & Worldwide Trust Component
 * Highlights: 500,000+ Patients Globally, Worldwide Shipping (40+ Countries),
 * Universal Payment Acceptance (All Currencies & Cards),
 * 100% Non-Medicinal Home Therapy, Saving 200+ Hours & $3,500+/year vs Clinics.
 */

export const globalDestinations = [
  { region: 'North America', countries: 'United States (All 50 States), Canada, Mexico', transit: '2–4 business days' },
  { region: 'United Kingdom & Ireland', countries: 'England, Scotland, Wales, Northern Ireland, Republic of Ireland', transit: '4–6 business days' },
  { region: 'European Union', countries: 'Germany, France, Poland, Italy, Spain, Netherlands, Switzerland, Austria, Sweden, etc.', transit: '3–6 business days' },
  { region: 'Australia & Oceania', countries: 'Australia (Sydney, Melbourne, Brisbane, Perth), New Zealand', transit: '5–7 business days' },
  { region: 'Middle East & Asia', countries: 'UAE, Israel, Japan, South Korea, Singapore, Taiwan', transit: '5–8 business days' },
  { region: 'Latin America & Caribbean', countries: 'Brazil, Chile, Colombia, Costa Rica, Panama', transit: '6–9 business days' },
];

export function renderGlobalBrandTrust() {
  return `
    <section id="global-trust" class="global-trust-section" aria-label="Worldwide Brand Trust and International Logistics">
      <div class="calc-container container">
        
        <!-- Header -->
        <div class="global-trust-header text-center">
          <div class="badge badge-trust" style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <span>🌍</span>
            <span>CONTINUOUS CLINICAL SPINAL PRACTICE SINCE 1996 • 30 YEARS HELPING PATIENTS RECOVER</span>
          </div>
          <h2 class="section-title">
            Over 500,000 Patients Rehabilitated Across 40+ Countries Worldwide
          </h2>
          <p class="section-subtitle max-w-750">
            Founded in 1996 in Kyiv, Ukraine, the Evminov clinic and decompression system have delivered 30 continuous years of medical success — helping over 500,000 people eliminate chronic back pain, restore disc height, and end the vicious cycle of painkillers, injections, and surgery.
          </p>
        </div>

        <!-- 4 Global Proof Stat Counters -->
        <div class="global-stats-grid">
          
          <div class="global-stat-card">
            <div class="stat-number">500k+</div>
            <div class="stat-label">Patients Healed Globally</div>
            <p class="stat-desc">
              Continuously operating and helping patients heal since 1996 across specialized orthopedic clinics, hospitals, sports federations, and home users worldwide.
            </p>
          </div>

          <div class="global-stat-card">
            <div class="stat-number">40+</div>
            <div class="stat-label">Countries Shipped</div>
            <p class="stat-desc">
              Reliable worldwide air freight delivery with door-to-door tracking and pre-cleared customs documentation.
            </p>
          </div>

          <div class="global-stat-card">
            <div class="stat-number">200+</div>
            <div class="stat-label">Hours Saved Every Year</div>
            <p class="stat-desc">
              Replaces grueling commutes to physical therapy, chiropractic appointments, and massage clinics with 12 minutes at home.
            </p>
          </div>

          <div class="global-stat-card">
            <div class="stat-number">$3.5k+</div>
            <div class="stat-label">Annual Savings vs Clinics</div>
            <p class="stat-desc">
              One-time lifetime investment of $450 eliminates recurring $80–$150 co-pays for physical therapy and massage.
            </p>
          </div>

        </div>

        <!-- Time & Financial Freedom Matrix: Clinic vs Evminov -->
        <div class="economics-matrix-card">
          <div class="matrix-header text-center">
            <span class="badge badge-pine" style="margin-bottom: 8px;">LIFESTYLE & ECONOMIC FREEDOM</span>
            <h3 class="matrix-title">Why Patients Around the World Choose Daily Home Decompression</h3>
            <p class="section-subtitle max-w-700">
              Chronic back pain patients are exhausted by the traditional medical carousel: endless doctor visits, prescription pills, and temporary massage relief that fades within 48 hours.
            </p>
          </div>

          <div class="matrix-comparison-grid">
            
            <!-- Traditional Clinical Carousel -->
            <div class="matrix-column matrix-column-clinic">
              <div class="matrix-col-header">
                <span class="col-icon">❌</span>
                <h4>The Recurring Clinic & Pharmacy Carousel</h4>
                <span class="col-price">$3,500 – $6,000+ / year</span>
              </div>
              <ul class="matrix-list">
                <li>
                  <strong>200+ Hours Trapped in Transit:</strong> Driving 2–3 times a week, battling traffic, searching for clinic parking, and sitting in crowded waiting rooms.
                </li>
                <li>
                  <strong>Symptom-Blunting Medications:</strong> NSAIDs, muscle relaxers, and opioids that cause gastrointestinal erosion without resolving disc compression.
                </li>
                <li>
                  <strong>Temporary 48-Hour Relief:</strong> Deep tissue massages feel great on Tuesday, but your discs re-compress by Thursday because postural stabilizers weren't re-educated.
                </li>
                <li>
                  <strong>Invasive Surgical Recommendations:</strong> Escalating talk of $60,000+ discectomy or lumbar fusion surgeries with 20%–40% recurrence rates.
                </li>
                <li>
                  <strong>Perpetual Co-Pays:</strong> Endless $50–$120 clinic copayments that drain household savings year after year.
                </li>
              </ul>
            </div>

            <!-- The Evminov Home Decompression Solution -->
            <div class="matrix-column matrix-column-evminov">
              <div class="matrix-col-header">
                <span class="col-icon">🌲</span>
                <h4>The Evminov Home Decompression System</h4>
                <span class="col-price">$450 one-time lifetime investment</span>
              </div>
              <ul class="matrix-list">
                <li>
                  <strong>Just 12 Minutes/Day in Your Living Room:</strong> Instant relief at 7:00 AM before work or 9:00 PM before bed with zero commute time.
                </li>
                <li>
                  <strong>100% Drug-Free Natural Healing:</strong> Uses gravitational traction to drop intradiscal pressure to -150 mmHg, prompting disc rehydration via imbibition.
                </li>
                <li>
                  <strong>Permanent Deep Core Corset:</strong> Micro-kinesiotherapy exercises while unloaded actively strengthen the deep multifidus muscles, locking in lasting spinal durability.
                </li>
                <li>
                  <strong>93.4% Proven Surgery Avoidance:</strong> Clinically validated protocol allows over 9 out of 10 disc herniation patients to avoid surgery entirely.
                </li>
                <li>
                  <strong>Zero Ongoing Fees for Life:</strong> A single handcrafted resonant Carpathian pine board serves your entire family for 20+ years.
                </li>
              </ul>
            </div>

          </div>
        </div>

        <!-- Worldwide Delivery & Universal Payments Bar -->
        <div class="global-logistics-bar">
          <div class="logistics-grid">
            
            <div class="logistics-text-block">
              <span class="badge badge-cyan" style="margin-bottom: 8px;">UNIVERSAL WORLDWIDE LOGISTICS</span>
              <h4 class="logistics-heading">We Deliver to Any Country on Earth</h4>
              <p class="logistics-desc">
                From Tokyo to Toronto, London to Sydney, we dispatch international orders with verified customs clearance, protective export crating, and direct door-to-door delivery.
              </p>
              
              <div class="global-regions-tags">
                ${globalDestinations.map(d => `
                  <div class="region-tag">
                    <strong>${d.region}:</strong> ${d.transit}
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="payments-trust-block">
              <h5 class="payments-title">Universal International Payment Acceptance</h5>
              <p class="payments-desc">
                We accept all major currencies (USD, EUR, GBP, CAD, AUD, UAH, and more) with 256-bit encrypted checkout:
              </p>
              
              <div class="payment-badges-row">
                <span class="pay-chip">💳 Visa</span>
                <span class="pay-chip">💳 MasterCard</span>
                <span class="pay-chip">💳 American Express</span>
                <span class="pay-chip">💳 Discover</span>
                <span class="pay-chip"> Apple Pay</span>
                <span class="pay-chip">G Google Pay</span>
                <span class="pay-chip">🅿️ PayPal</span>
                <span class="pay-chip">⚡ Klarna / Affirm</span>
                <span class="pay-chip">🏥 HSA / FSA</span>
                <span class="pay-chip">🏦 Wire Transfer</span>
              </div>

              <div class="international-guarantee">
                <span>🛡️ 60-Day International Money-Back Guarantee • 10-Year Warranty</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}

export function initGlobalBrandTrust() {
  // Interactive animations or tabs if needed
}
