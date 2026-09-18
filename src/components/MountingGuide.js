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

      </div>
    </section>
  `;
}
