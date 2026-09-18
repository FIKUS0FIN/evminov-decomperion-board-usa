export function renderAthleteSection() {
  return `
    <section class="catalog-section" id="athletes" style="background: var(--color-surface-white); border-top: 1px solid var(--color-border-subtle);">
      <div class="calc-container">
        
        <div class="section-header">
          <div class="clinical-pill-badge">
            <span class="pill-dot"></span>
            <span>Sports Medicine & Athletic Longevity</span>
          </div>
          <h2 class="clinical-heading">Spinal Restoration for Lifters, Runners & CrossFit Athletes</h2>
          <p class="clinical-subheading">
            A 400-lb deadlift or heavy squat session compresses your lumbar discs by up to 18%. Reclaim your intervertebral space in 10 minutes post-workout.
          </p>
        </div>

        <div class="athlete-grid">
          
          <div>
            <span class="badge badge-cyan" style="margin-bottom: 14px;">The Lifting Paradox</span>
            <h3 style="font-size: 1.875rem; font-weight: 800; line-height: 1.3; margin-bottom: 16px; color: var(--color-primary-navy);">
              Why Hanging from a Pullup Bar <span style="color: var(--color-danger);">Fails to Decompress</span> Your Lower Back
            </h3>
            
            <p style="font-size: 1rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 16px;">
              When you hang by your hands from a bar, your shoulder girdle, lats, and abdominal stabilizers are forced to fire isometrically to maintain grip. This defensive muscle contraction prevents the deep lumbar multifidus and spinal erectors from truly releasing.
            </p>

            <div style="background: var(--color-bg-light); border-radius: var(--radius-lg); padding: 22px; border: 1px solid var(--color-border-subtle); border-left: 4px solid var(--color-pine-emerald); margin-bottom: 24px; box-shadow: var(--shadow-sm);">
              <h4 style="font-size: 1.0625rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 8px;">
                The Evminov Athletic Solution:
              </h4>
              <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6;">
                By lying supine or prone on the angled pine surface (22° to 30°), your body weight is supported against gravity. Your nervous system disengages protective muscle guarding, enabling a pure <strong>40 to 60 lb axial traction force</strong> directly through L4-L5 and L5-S1.
              </p>
            </div>

            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
              <a href="#product-evminov-wide" class="btn btn-primary">
                <span>View Wide Heavy-Duty Board (330 lbs)</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#calculator" class="btn btn-secondary">
                Calculate My Decompression Load
              </a>
            </div>
          </div>

          <div style="position: relative;">
            <img 
              src="/images/authentic/exercise-reverse-traction.jpg" 
              alt="Athletic decompression on authentic Evminov traction board" 
              style="border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); border: 1px solid var(--color-border-subtle); width: 100%; height: 440px; object-fit: cover;"
            />
            <div style="position: absolute; bottom: 20px; right: 20px; background: rgba(255, 255, 255, 0.94); backdrop-filter: blur(12px); padding: 16px 20px; border-radius: var(--radius-md); border: 1.5px solid var(--color-pine-border); box-shadow: var(--shadow-lg);">
              <div style="font-family: var(--font-mono); font-size: 1.35rem; font-weight: 800; color: var(--color-pine-emerald);">
                +2.4 mm Disc Height
              </div>
              <div style="font-size: 0.8125rem; font-weight: 600; color: var(--color-primary-navy);">
                Restored within 12 mins post-workout
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
