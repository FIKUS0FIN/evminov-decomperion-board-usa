export function renderMountingGuide() {
  return `
    <section class="catalog-section" id="mounting" style="background: var(--color-surface-white); border-top: 1px solid var(--color-border-subtle);">
      <div class="calc-container">
        
        <div class="section-header">
          <span class="badge badge-cyan" style="margin-bottom: 12px;">American Home Compatibility</span>
          <h2>Engineered for Standard US 16-Inch Wall Studs</h2>
          <p>
            Zero guesswork. Every Evminov board ships with hardware engineered specifically for American drywall and timber framing, plus a 100% drill-free option for apartment renters.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px; align-items: stretch;">
          
          <!-- Option 1: Wall Stud Mounting -->
          <div class="card" style="display: flex; flex-direction: column; gap: 16px; border-top: 4px solid var(--color-pine-emerald);">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span class="badge badge-pine">Standard In-Box Hardware</span>
              <span style="font-weight: 800; color: var(--color-pine-emerald);">400+ lbs Rated</span>
            </div>
            
            <h3 style="font-size: 1.375rem; font-weight: 800; color: var(--color-primary-navy);">
              1. Single-Stud Wall Mounting (Included)
            </h3>
            
            <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6;">
              American residential drywall is supported by vertical 2x4 wooden studs spaced 16" on center. The Evminov board requires only <strong>one central stud</strong> and two heavy-duty steel lag screws (included in box).
            </p>

            <ul style="display: flex; flex-direction: column; gap: 10px; font-size: 0.875rem; color: var(--color-text-main); margin-top: auto;">
              <li style="display: flex; gap: 8px;">
                <span style="color: var(--color-pine-emerald);">✓</span>
                <span><strong>Takes 10 Minutes:</strong> Locate any stud with a standard stud finder.</span>
              </li>
              <li style="display: flex; gap: 8px;">
                <span style="color: var(--color-pine-emerald);">✓</span>
                <span><strong>Folds 100% Flat:</strong> Rests just 2.4 inches against the wall when not in use.</span>
              </li>
              <li style="display: flex; gap: 8px;">
                <span style="color: var(--color-pine-emerald);">✓</span>
                <span><strong>Includes Masonry Anchors:</strong> For basement concrete or brick walls.</span>
              </li>
            </ul>

            <div style="background: var(--color-bg-light); border-radius: var(--radius-md); padding: 12px; font-size: 0.8125rem; color: var(--color-text-muted);">
              💡 <em>No handyman required: Illustrated step-by-step English guide and video QR included.</em>
            </div>
          </div>

          <!-- Option 2: Free-Standing Ladder Stand -->
          <div class="card" style="display: flex; flex-direction: column; gap: 16px; border-top: 4px solid var(--color-traction-cyan);">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span class="badge badge-cyan">For Renters & Apartments</span>
              <span style="font-weight: 800; color: var(--color-traction-cyan);">100% Drill-Free</span>
            </div>
            
            <h3 style="font-size: 1.375rem; font-weight: 800; color: var(--color-primary-navy);">
              2. Demountable Ladder Stand ($275)
            </h3>
            
            <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6;">
              Living in a rental home, high-rise apartment, or condo where wall drilling is restricted? Our free-standing timber ladder stand holds the board firmly at any incline angle from 8° to 35°.
            </p>

            <ul style="display: flex; flex-direction: column; gap: 10px; font-size: 0.875rem; color: var(--color-text-main); margin-top: auto;">
              <li style="display: flex; gap: 8px;">
                <span style="color: var(--color-traction-cyan);">✓</span>
                <span><strong>Zero Wall Holes:</strong> Protects your rental deposit completely.</span>
              </li>
              <li style="display: flex; gap: 8px;">
                <span style="color: var(--color-traction-cyan);">✓</span>
                <span><strong>Compact Footprint:</strong> Occupies less than 3.5 square feet of floor space.</span>
              </li>
              <li style="display: flex; gap: 8px;">
                <span style="color: var(--color-traction-cyan);">✓</span>
                <span><strong>Tool-Free Breakdown:</strong> Can be stowed away under a bed in 3 minutes.</span>
              </li>
            </ul>

            <div style="margin-top: 8px;">
              <a href="#product-evminov-stand" class="btn btn-secondary btn-block btn-sm">
                View Free-Standing Stand ($275)
              </a>
            </div>
          </div>

        </div>

        <!-- Step-by-Step Cinematic Unboxing & Assembly Video (Half-Screen Showcase) -->
        <div class="cinematic-video-section" style="margin-top: 48px; padding: 40px; background: #0B132B; border-radius: var(--radius-xl); color: #FFFFFF; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 25px 50px -12px rgba(11, 19, 43, 0.4);">
          <div class="cinematic-video-grid">
            
            <!-- Video Column (55% Half-Screen Player) -->
            <div class="video-frame-container">
              <iframe 
                src="https://www.youtube.com/embed/fP-biAHusGs?playsinline=1&rel=0" 
                title="Unboxing and Assembling the Patented Evminov Board" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                loading="lazy"
              ></iframe>
              <div class="video-glow-effect"></div>
            </div>

            <!-- Narrative & Chapters Column (45%) -->
            <div class="video-narrative">
              <div class="video-badge-strip">
                <span class="badge badge-cyan">Factory Installation Guide</span>
                <span style="font-size: 0.75rem; color: #94A3B8; font-family: var(--font-mono); font-weight: 700;">4:37 HD</span>
              </div>

              <h3 style="font-size: clamp(1.4rem, 2.5vw, 1.85rem); font-weight: 800; color: #FFFFFF; line-height: 1.25; margin-bottom: 12px;">
                Unboxing &amp; 10-Minute Wall Assembly Masterclass
              </h3>

              <p style="font-size: 0.9rem; color: #94A3B8; line-height: 1.6; margin-bottom: 20px;">
                Follow along with factory engineers assembling the authentic 3-piece folding Evminov board, calibrating the steel carriage locking mechanism, and securing the mounting bracket into standard 16-inch US wood wall studs.
              </p>

              <div class="video-chapters-list">
                <div class="video-chapter-item" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">0:00</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Box Contents &amp; Pre-Assembly Check</strong>
                    <span style="color: #94A3B8;">Unpacking the 3 resonant pine sections, adjustable carriage, and heavy-duty steel anchors.</span>
                  </div>
                </div>

                <div class="video-chapter-item" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">1:15</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Sectional Interlock &amp; Steel Bracing</strong>
                    <span style="color: #94A3B8;">Aligning the dovetail channels and tightening the vibration-dampening connecting plates.</span>
                  </div>
                </div>

                <div class="video-chapter-item" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">2:30</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Carriage Calibration &amp; Quick-Release Pin</strong>
                    <span style="color: #94A3B8;">Sliding and locking the ergonomic hand grips to your exact patient height.</span>
                  </div>
                </div>

                <div class="video-chapter-item" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">3:45</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Wall Stud Mount &amp; Incline Adjustment</strong>
                    <span style="color: #94A3B8;">Fastening the cable hook into a 16" wood stud for 400+ lbs of safe traction.</span>
                  </div>
                </div>
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
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
                  Shop Standard Folding Set ($349)
                </a>
              </div>

            </div>

          </div>
        </div>

        <!-- Authentic Craftsmanship & Materials Showcase -->
        <div style="margin-top: 48px; background: var(--color-bg-light); border-radius: var(--radius-xl); padding: 32px; border: 1px solid var(--color-border-subtle);">
          <div style="text-align: center; max-width: 680px; margin: 0 auto 28px;">
            <span class="badge badge-pine" style="margin-bottom: 8px;">Authentic Ukrainian Craftsmanship</span>
            <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--color-primary-navy);">Patented Carpathian Pine &amp; Aircraft-Alloy Mechanism</h3>
            <p style="font-size: 0.9375rem; color: var(--color-text-muted);">
              Unlike plastic inversion tables, each Evminov board is hand-crafted from resonant multi-layer Carpathian pine providing anatomical spring flex that absorbs shock and gently pumps spinal discs.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
            <div style="background: var(--color-surface-white); border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-sm);">
              <img src="/images/products/board-natural-pine-finish.jpg" alt="Natural Carpathian Pine Wood Grain" style="width: 100%; height: 200px; object-fit: cover;" />
              <div style="padding: 16px;">
                <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 4px;">Resonant Anatomical Pine</h4>
                <p style="font-size: 0.8125rem; color: var(--color-text-muted); margin: 0;">Multi-layered grain structure calibrated for natural flex during therapeutic exercises.</p>
              </div>
            </div>

            <div style="background: var(--color-surface-white); border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-sm);">
              <img src="/images/products/board-carriage-locking-pin.jpg" alt="Steel Carriage Locking Mechanism" style="width: 100%; height: 200px; object-fit: cover;" />
              <div style="padding: 16px;">
                <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 4px;">Quick-Lock Alloy Carriage</h4>
                <p style="font-size: 0.8125rem; color: var(--color-text-muted); margin: 0;">Precision machined handles with quick-release safety pin tested for over 400+ lbs tensile load.</p>
              </div>
            </div>

            <div style="background: var(--color-surface-white); border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-sm);">
              <img src="/images/products/board-mounting-bracket.jpg" alt="Wall Mounting Cable Anchor" style="width: 100%; height: 200px; object-fit: cover;" />
              <div style="padding: 16px;">
                <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 4px;">Heavy-Duty Wall Suspension</h4>
                <p style="font-size: 0.8125rem; color: var(--color-text-muted); margin: 0;">Braided high-tensile mountaineering-grade cable and reinforced eye bolt anchor system.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
