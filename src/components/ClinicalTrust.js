export function renderClinicalTrust() {
  return `
    <section class="catalog-section" id="science" style="background: var(--color-bg-light); border-top: 1px solid var(--color-border-subtle);">
      <div class="calc-container">
        
        <div class="clinical-trust-grid">
          
          <div>
            <span class="badge badge-gold" style="margin-bottom: 14px;">The Inventor's Legacy</span>
            <h2 style="font-size: 2.25rem; font-weight: 800; color: var(--color-primary-navy); line-height: 1.25; margin-bottom: 18px;">
              Born from a Severe Spine Injury, Perfected Across 25+ Years of Clinical Medicine.
            </h2>
            
            <p style="font-size: 1rem; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 16px;">
              In the early 1990s, Ukrainian gymnastics coach <strong>Vyacheslav Evminov</strong> suffered a catastrophic lumbar spinal injury. Facing multiple fusion surgeries with a low probability of ever walking normally again, he refused invasive operations and dedicated his life to spinal biomechanics.
            </p>

            <p style="font-size: 1rem; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 20px;">
              By combining low-angle gravity traction with active kinetic muscle activation on an elastic wooden plane, he completely regenerated his damaged discs. Over the following three decades, the <em>Evminov Vertebral Health Center</em> in Kyiv has rehabilitated over <strong>120,000 documented patients</strong> and holds international medical patents across Europe and North America.
            </p>

            <div class="clinical-stats-grid">
              <div style="background: var(--color-surface-white); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); text-align: center;">
                <div style="font-family: var(--font-mono); font-size: 1.75rem; font-weight: 800; color: var(--color-pine-emerald);">
                  25+
                </div>
                <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600;">Years of Clinical Trials</div>
              </div>

              <div style="background: var(--color-surface-white); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); text-align: center;">
                <div style="font-family: var(--font-mono); font-size: 1.75rem; font-weight: 800; color: var(--color-traction-cyan);">
                  120k+
                </div>
                <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600;">Rehabilitated Patients</div>
              </div>

              <div style="background: var(--color-surface-white); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); text-align: center;">
                <div style="font-family: var(--font-mono); font-size: 1.75rem; font-weight: 800; color: var(--color-primary-navy);">
                  93%
                </div>
                <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600;">Avoided Surgery</div>
              </div>
            </div>

            <!-- Practitioner CTA -->
            <div style="background: var(--color-surface-white); border: 1.5px dashed var(--color-pine-border); border-radius: var(--radius-lg); padding: 18px; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
              <div>
                <div style="font-size: 0.9375rem; font-weight: 800; color: var(--color-primary-navy);">
                  Are you a US Chiropractor or Physical Therapist?
                </div>
                <div style="font-size: 0.8125rem; color: var(--color-text-muted);">
                  Inquire about clinic demo boards & wholesale volume discounts.
                </div>
              </div>
              <a href="mailto:partners@evminovusa.com?subject=Chiropractic%20Clinic%20Inquiry" class="btn btn-secondary btn-sm" style="white-space: nowrap;">
                Practitioner Portal
              </a>
            </div>

          </div>

          <div>
            <div style="position: relative; background: var(--color-surface-white); padding: 20px; border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); border: 1px solid var(--color-border-subtle);">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80" 
                alt="Medical physical therapy spine demonstration" 
                style="width: 100%; height: 420px; object-fit: cover; border-radius: var(--radius-lg);"
              />
              <div style="position: absolute; bottom: 34px; left: 34px; right: 34px; background: rgba(11, 19, 43, 0.92); backdrop-filter: blur(8px); padding: 16px 20px; border-radius: var(--radius-md); border: 1px solid rgba(255, 255, 255, 0.2); color: #FFFFFF;">
                <p style="font-style: italic; font-size: 0.9375rem; line-height: 1.5;">
                  "Spinal health is not achieved through passive hanging or violent cracking. It requires gentle traction to create space, followed by micro-movements to feed the discs."
                </p>
                <div style="font-weight: 700; font-size: 0.8125rem; color: var(--color-pine-light); margin-top: 8px;">
                  — Vyacheslav Evminov, Master of Sports & Method Creator
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
