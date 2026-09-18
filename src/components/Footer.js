export function renderFooter() {
  return `
    <footer class="site-footer" id="site-footer">
      <div class="calc-container">
        
        <div class="footer-grid">
          
          <!-- Column 1: Brand & Origin -->
          <div class="footer-brand">
            <div class="site-logo" style="color: #FFFFFF;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M7 21h10" />
                <path d="M12 15.5v5.5" />
                <path d="M5 9.5C5 13.5 8 16 12 16C16 13.5 19 9.5 19 9.5" />
                <path d="M4 9.5h16" />
                <path d="M8 19.5C8 19.5 15 19 15 17.5C15 16 9 15.5 9 13.5C9 11.5 13 10.8 16 8.5C18 7 18 4.2 15.2 3.5C12.5 2.8 10.2 4.2 10.8 6.2C11.2 7.5 13 7.6 13 7.6" />
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
