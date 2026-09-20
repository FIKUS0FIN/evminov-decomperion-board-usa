import { renderEvminovLogo } from './EvminovLogo.js';

export function renderFooter() {
  return `
    <footer class="site-footer" id="site-footer">
      <div class="calc-container">
        
        <div class="footer-grid">
          
          <!-- Column 1: Brand & Origin -->
          <div class="footer-brand">
            <div class="site-logo" style="color: #FFFFFF;">
              ${renderEvminovLogo({ size: 36, variant: 'light' })}
              <div class="logo-text-stack">
                <span class="logo-title" style="color: #FFFFFF;">Evminov</span>
                <span class="logo-subtitle" style="color: #94A3B8;">Spine <span style="color: var(--color-pine-light); font-weight: 800;">Med</span></span>
              </div>
            </div>
            <p>
              The official North American distributor of the patented Evminov Spine Decompression &amp; Rehabilitation System. Operating continuously since 1996 with 30 years of medical practice and over 500,000 patients successfully healed across Europe and North America.
            </p>
            <div style="margin-top: 14px; font-size: 0.8125rem; color: #94A3B8; line-height: 1.6;">
              🇺🇸 <strong>US Operations &amp; Fulfillment:</strong> 4525 San Fernando Rd, Unit H, Glendale, CA 91204 (Hub: Burbank &amp; Sun Valley)<br>
              🇺🇦 <strong>European Production:</strong> Kyiv &amp; Odesa, Ukraine
            </div>
          </div>

          <!-- Column 2: Systems -->
          <div>
            <div class="footer-title">Decompression Systems</div>
            <div class="footer-links">
              <a href="#product-evminov-standard">Standard Solid 1-Piece Board</a>
              <a href="#product-evminov-folding-2part">2-Piece Folding Board</a>
              <a href="#product-evminov-folding-3part">3-Piece Folding Travel Board</a>
              <a href="#product-evminov-wide">Wide Heavy-Duty Board</a>
              <a href="#product-evminov-alder">Select Alder Wood Edition</a>
              <a href="#product-evminov-stand">Demountable Renter Stand</a>
              <a href="#us-shipping" style="color: #38BDF8; font-weight: 600;">🇺🇸 50 US States Delivery</a>
              <a href="#global-trust" style="color: #34D399; font-weight: 600;">🌍 Worldwide Brand &amp; Shipping</a>
            </div>
          </div>

          <!-- Column 3: Clinical Protocols & Heritage -->
          <div>
            <div class="footer-title">Clinical Protocols &amp; Heritage</div>
            <div class="footer-links">
              <a href="#pediatric-family" style="color: #6EE7B7; font-weight: 700;">Kids &amp; Family "Spine Toothbrush"</a>
              <a href="#comparison">Evminov vs Inversion Tables</a>
              <a href="#calculator">Incline Angle Calculator</a>
              <a href="#centers" style="color: #34D399; font-weight: 700;">Rehabilitation Centers &amp; Heritage</a>
              <a href="#centers#military-rehab" style="color: #FBBF24;">Defender Spine Program</a>
              <a href="#athletes">Athletic Recovery (Deadlifts)</a>
              <a href="#exercise-gallery">21 Photo Protocols Gallery</a>
              <a href="#videos">Video Exercise Library</a>
              <a href="#onboarding">30-Day Guided Rehab Course</a>
            </div>
          </div>

          <!-- Column 4: US Support & Policies -->
          <div>
            <div class="footer-title">Support &amp; Trust</div>
            <div class="footer-links">
              <a href="mailto:support@evminovusa.com">support@evminovusa.com</a>
              <a href="tel:+17473060140">+1 (747) 306-0140 (PST / Direct)</a>
              <a href="https://www.youtube.com/channel/UCwsC2K28uWYijzAKnZljzsw" target="_blank" rel="noopener noreferrer" style="color: #FF0000; font-weight: 600;">▶ YouTube: @evminoviusa</a>
              <a href="#faq">60-Day In-Home Trial Policy</a>
              <a href="#faq">10-Year Frame Warranty</a>
              <a href="#faq">HSA / FSA Claim Guides</a>
              <a href="mailto:partners@evminovusa.com">Chiropractic Wholesale Portal</a>
            </div>
          </div>

        </div>

        <!-- Medical & Fitness Authority Certifications (Spread Organically Across Full Width) -->
        <div class="footer-trust-section">
          <div class="footer-trust-header">
            <div style="display: flex; align-items: center; gap: 8px;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span>Medical &amp; Fitness Authority Certifications</span>
            </div>
            <span style="font-size: 0.6875rem; color: #64748B; font-weight: 600;">Verified Clinical Standards</span>
          </div>

          <div class="footer-trust-grid">
            <!-- FDA Listed -->
            <a href="#patents" class="footer-trust-card" title="View FDA Class I Medical Device Status">
              <div class="trust-card-top-row">
                <div class="trust-icon-box" style="background: rgba(16, 185, 129, 0.15); color: #10B981;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2L19 5v6c0 5-7 9-7 9s-7-4-7-9V5l7-3z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div class="trust-card-title">FDA Listed</div>
              </div>
              <div class="trust-text-stack">
                <span class="trust-card-sub">Class I Medical Device</span>
                <span class="trust-card-tag" style="color: #10B981;">21 CFR 890.5900</span>
              </div>
            </a>

            <!-- HSA / FSA -->
            <a href="#faq" class="footer-trust-card" title="Learn about HSA / FSA Reimbursement">
              <div class="trust-card-top-row">
                <div class="trust-icon-box" style="background: rgba(56, 189, 248, 0.15); color: #38BDF8;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><circle cx="7" cy="15" r="1.5"/></svg>
                </div>
                <div class="trust-card-title">HSA / FSA Eligible</div>
              </div>
              <div class="trust-text-stack">
                <span class="trust-card-sub">Pre-Tax Health Savings</span>
                <span class="trust-card-tag" style="color: #38BDF8;">IRS Code Sec. 213(d)</span>
              </div>
            </a>

            <!-- ISO 13485 & CE -->
            <a href="#patents" class="footer-trust-card" title="View European CE & ISO 13485 Standards">
              <div class="trust-card-top-row">
                <div class="trust-icon-box" style="background: rgba(129, 140, 248, 0.15); color: #818CF8;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                </div>
                <div class="trust-card-title">ISO 13485 &amp; CE</div>
              </div>
              <div class="trust-text-stack">
                <span class="trust-card-sub">Medical Quality System</span>
                <span class="trust-card-tag" style="color: #818CF8;">MOH Cert. № 711/2002</span>
              </div>
            </a>

            <!-- Sports & PT Approved -->
            <a href="#athletes" class="footer-trust-card" title="Sports Medicine & Athletic Traction Protocols">
              <div class="trust-card-top-row">
                <div class="trust-icon-box" style="background: rgba(251, 191, 36, 0.15); color: #FBBF24;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12"/></svg>
                </div>
                <div class="trust-card-title">Sports &amp; PT</div>
              </div>
              <div class="trust-text-stack">
                <span class="trust-card-sub">Spine Axial Traction</span>
                <span class="trust-card-tag" style="color: #FBBF24;">Athletic Decompression</span>
              </div>
            </a>

            <!-- 10-Year Warranty -->
            <a href="#faq" class="footer-trust-card" title="10-Year Frame Warranty Coverage">
              <div class="trust-card-top-row">
                <div class="trust-icon-box" style="background: rgba(52, 211, 153, 0.15); color: #34D399;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l7 4v6c0 5.5-3.5 9-7 10-3.5-1-7-4.5-7-10V6l7-4z"/><path d="M12 8v8M9 12h6"/></svg>
                </div>
                <div class="trust-card-title">10-Year Warranty</div>
              </div>
              <div class="trust-text-stack">
                <span class="trust-card-sub">Solid Carpathian Pine</span>
                <span class="trust-card-tag" style="color: #34D399;">Clinical Heritage Frame</span>
              </div>
            </a>

            <!-- 60-Day Trial -->
            <a href="#faq" class="footer-trust-card" title="60-Day In-Home Risk-Free Trial Policy">
              <div class="trust-card-top-row">
                <div class="trust-icon-box" style="background: rgba(244, 114, 182, 0.15); color: #F472B6;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div class="trust-card-title">60-Day Trial</div>
              </div>
              <div class="trust-text-stack">
                <span class="trust-card-sub">Risk-Free Spine Relief</span>
                <span class="trust-card-tag" style="color: #F472B6;">100% Refund Guarantee</span>
              </div>
            </a>
          </div>

          <!-- Clinical Validation Banner -->
          <a href="#patents" class="footer-trials-banner" title="Explore Romodanov & NAMS Clinical Trials">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B" style="flex-shrink: 0;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <div>
              <strong style="color: #FFFFFF;">Hospital Clinical Trial Validated:</strong>
              Romodanov Neurosurgical &amp; NAMS Orthopedic Institutes (over 120,000+ patients treated over 25+ years).
            </div>
          </a>
        </div>

        <!-- Security, Compliance & Payment Trust Bar -->
        <div class="footer-security-bar">
          <div class="security-badges-list">
            <div class="security-badge-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>256-Bit SSL Encrypted Checkout</span>
            </div>
            <div class="security-badge-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>HIPAA-Compliant Patient Data</span>
            </div>
            <div class="security-badge-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" stroke-width="2.2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <span>Insured UPS Ground from California</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; color: #94A3B8; font-size: 0.75rem; flex-wrap: wrap;">
            <span>Accepted:</span>
            <span style="background: rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 4px; color: #FFF; font-weight: 600;">HSA / FSA</span>
            <span style="background: rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 4px; color: #FFF; font-weight: 600;">Visa</span>
            <span style="background: rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 4px; color: #FFF; font-weight: 600;">Mastercard</span>
            <span style="background: rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 4px; color: #FFF; font-weight: 600;">AMEX</span>
            <span style="background: rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 4px; color: #FFF; font-weight: 600;">Apple Pay</span>
          </div>
        </div>

        <div style="padding: 20px; background: rgba(0, 0, 0, 0.25); border-radius: var(--radius-md); font-size: 0.75rem; color: #94A3B8; line-height: 1.6; margin-bottom: 30px;">
          <strong>FDA & Medical Disclaimer:</strong> The statements made regarding these products have not been evaluated by the Food and Drug Administration. Evminov Spine Systems equipment is designed to support healthy spinal biomechanics, muscular decompression, and physical therapy rehabilitation. Consult your primary care physician, physical therapist, or chiropractic doctor prior to beginning any new mechanical traction or exercise protocol, particularly if you have acute spinal trauma, high-grade spondylolisthesis, or severe cardiovascular disease.
        </div>

        <div class="footer-bottom">
          <div>
            © ${new Date().getFullYear()} Evminov Spine Systems LLC (USA). All rights reserved. Technology & Growth Architecture by Apex Root LLC.
          </div>
          <div style="display: flex; gap: 16px;">
            <a href="#faq">Privacy Policy</a>
            <a href="#faq">Terms of Service</a>
            <a href="#faq">Shipping & Returns</a>
            <a href="#faq">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}
