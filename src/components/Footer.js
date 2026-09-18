export function renderFooter() {
  return `
    <footer class="site-footer" id="site-footer">
      <div class="calc-container">
        
        <div class="footer-grid">
          
          <!-- Column 1: Brand & Origin -->
          <div class="footer-brand">
            <div class="site-logo" style="color: #FFFFFF;">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <circle cx="50" cy="13" r="7" fill="currentColor"/>
                <rect x="46" y="20" width="8" height="3" rx="1.5" fill="currentColor"/>
                <line x1="50" y1="23" x2="50" y2="95" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
                <path d="M47 24 C38 18, 26 12, 10 16 C8 24, 12 28, 14 31 C11 34, 14 39, 18 41 C16 44, 20 48, 26 49 C26 52, 32 54, 38 52 C38 55, 43 55, 47 48 Z" 
                      fill="rgba(255,255,255,0.08)" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
                <path d="M14 31 C22 30, 32 30, 44 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M18 41 C26 39, 34 38, 45 36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M26 49 C32 46, 38 45, 46 44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M53 24 C62 18, 74 12, 90 16 C92 24, 88 28, 86 31 C89 34, 86 39, 82 41 C84 44, 80 48, 74 49 C74 52, 68 54, 62 52 C62 55, 57 55, 53 48 Z" 
                      fill="rgba(255,255,255,0.08)" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
                <path d="M86 31 C78 30, 68 30, 56 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M82 41 C74 39, 66 38, 55 36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M74 49 C68 46, 62 45, 54 44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M44 33 C46 32, 48 34, 46 36 C42 41, 31 46, 35 55 C39 63, 62 62, 64 71 C66 79, 40 80, 42 88 C44 92, 50 94, 50 94" 
                      fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M56 33 C54 32, 52 34, 54 36 C58 41, 69 46, 65 55 C61 63, 38 62, 36 71 C34 79, 60 80, 58 88 C56 92, 50 94, 50 94" 
                      fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
                <ellipse cx="44.5" cy="33" rx="3.5" ry="2.2" fill="currentColor" transform="rotate(-15 44.5 33)"/>
                <circle cx="43.5" cy="32.5" r="0.9" fill="#0B132B"/>
                <ellipse cx="55.5" cy="33" rx="3.5" ry="2.2" fill="currentColor" transform="rotate(15 55.5 33)"/>
                <circle cx="56.5" cy="32.5" r="0.9" fill="#0B132B"/>
              </svg>
              <div class="logo-text-stack">
                <span class="logo-title" style="color: #FFFFFF;">Evminov</span>
                <span class="logo-subtitle" style="color: #94A3B8;">Spine <span style="color: var(--color-pine-light); font-weight: 800;">Med</span></span>
              </div>
            </div>
            <p>
              The official North American distributor of the patented Evminov Spine Decompression & Rehabilitation System. Manufactured from resonant natural pine with clinical heritage since 1996.
            </p>
            <div style="margin-top: 14px; font-size: 0.8125rem; color: #94A3B8;">
              🇺🇸 US Fulfillment Facility: Burbank & Sun Valley, CA<br>
              🇺🇦 European Production: Kyiv & Odesa, Ukraine
            </div>
          </div>

          <!-- Column 2: Systems -->
          <div>
            <div class="footer-title">Decompression Systems</div>
            <div class="footer-links">
              <a href="#product-evminov-standard">Standard 3-Section Board</a>
              <a href="#product-evminov-wide">Wide Heavy-Duty Board</a>
              <a href="#product-evminov-stick">Daily Alignment Stick</a>
              <a href="#product-evminov-stand">Demountable Renter Stand</a>
              <a href="#product-evminov-glisson">Glisson Neck Harness</a>
            </div>
          </div>

          <!-- Column 3: Clinical Protocols -->
          <div>
            <div class="footer-title">Clinical Protocols</div>
            <div class="footer-links">
              <a href="#comparison">Evminov vs Inversion Tables</a>
              <a href="#calculator">Incline Angle Calculator</a>
              <a href="#athletes">Athletic Recovery (Deadlifts)</a>
              <a href="#videos">Video Exercise Library</a>
              <a href="#onboarding">30-Day Guided Rehab Course</a>
            </div>
          </div>

          <!-- Column 4: US Support & Policies -->
          <div>
            <div class="footer-title">Support & Trust</div>
            <div class="footer-links">
              <a href="mailto:support@evminovusa.com">support@evminovusa.com</a>
              <a href="tel:+18185557746">+1 (818) 555-SPINE (PST)</a>
              <a href="#faq">60-Day In-Home Trial Policy</a>
              <a href="#faq">10-Year Frame Warranty</a>
              <a href="#faq">HSA / FSA Claim Guides</a>
              <a href="mailto:partners@evminovusa.com">Chiropractic Wholesale Portal</a>
            </div>
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
