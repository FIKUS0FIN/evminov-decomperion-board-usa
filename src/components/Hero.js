export function renderHero() {
  return `
    <section class="hero-section" id="hero">
      <div class="calc-container">
        <div class="hero-grid">
          
          <!-- Hero Copy Column -->
          <div class="hero-content">
            <div class="hero-social-proof">
              <span class="star-rating">★★★★★</span>
              <span style="font-size: 0.9375rem; font-weight: 700; color: var(--color-text-main);">
                4.9/5 Rating
              </span>
              <span style="font-size: 0.875rem; color: var(--color-text-muted);">
                (2,400+ Verified US Patients & Athletes)
              </span>
            </div>

            <h1 class="hero-title">
              Hospital-Grade Spinal Decompression at Home — <span>Without the Risks of Hanging Upside Down.</span>
            </h1>

            <p class="hero-subtitle">
              The patented natural pine traction board that safely unloads herniated discs, relieves chronic sciatica, and restores athletic spinal alignment at controlled angles (8° to 35°). Recommended by physical therapists worldwide for 25+ years.
            </p>

            <div class="hero-cta-group">
              <a href="#catalog" class="btn btn-primary btn-lg">
                <span>Shop Decompression Boards</span>
                <span style="font-size: 0.875rem; opacity: 0.9; font-weight: 400;">(From $112/mo)</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>

              <a href="#calculator" class="btn btn-secondary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
                <span>Calculate Your Angle</span>
              </a>
            </div>

            <div class="hero-trust-bullets">
              <div class="trust-bullet-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Zero Inversion Stroke/Eye Risk</span>
              </div>
              <div class="trust-bullet-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Fast 2-4 Day Delivery (Burbank, CA)</span>
              </div>
              <div class="trust-bullet-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>HSA / FSA Pre-Tax Eligible</span>
              </div>
              <div class="trust-bullet-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>60-Day In-Home Money-Back Trial</span>
              </div>
            </div>
          </div>

          <!-- Hero Media Column -->
          <div class="hero-media-card">
            <img 
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1000&q=80" 
              alt="Evminov Spine Decompression Board at controlled 20 degree therapeutic incline" 
              class="hero-media-img"
              loading="eager"
            />
            
            <div class="hero-float-badge">
              <div style="background: var(--color-pine-surface); border-radius: 50%; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: var(--color-pine-emerald); font-size: 1.25rem;">
                ✓
              </div>
              <div>
                <div style="font-weight: 800; font-size: 0.9375rem; color: var(--color-primary-navy);">
                  In Stock in Burbank, CA
                </div>
                <div style="font-size: 0.8125rem; color: var(--color-text-muted);">
                  Ships same day via UPS Ground
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
