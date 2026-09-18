export function renderOnboardingProgram() {
  return `
    <section class="catalog-section" id="onboarding" style="background: var(--color-bg-light);">
      <div class="calc-container">
        
        <div class="section-header">
          <span class="badge badge-pine" style="margin-bottom: 12px;">Included Free With Every Board ($199 Value)</span>
          <h2>The 30-Day Guided Spine Rehabilitation Protocol</h2>
          <p>
            You are never left alone. Follow our clinically structured, progressive daily video routine developed by the Evminov Vertebral Health Center.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 24px;">
          
          <!-- Phase 1 -->
          <div class="card" style="border-top: 4px solid var(--color-traction-cyan);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span class="badge badge-cyan">Phase 1: Days 1 – 7</span>
              <span style="font-size: 0.8125rem; font-weight: 700; color: var(--color-text-muted);">8–10 Min/Day</span>
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 8px;">
              Gentle Decompression & Acclimation
            </h3>
            <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 14px;">
              Low-angle traction (10° to 15°) designed to safely relax inflamed paraspinal muscles, relieve acute spasm, and create initial negative pressure inside compressed discs.
            </p>
            <ul style="display: flex; flex-direction: column; gap: 6px; font-size: 0.8125rem; color: var(--color-text-main);">
              <li>• Passive supine decompression (5 min)</li>
              <li>• Gentle cervical elongation with Glisson loop</li>
              <li>• Micro-pelvic tilts to promote disc fluid influx</li>
            </ul>
          </div>

          <!-- Phase 2 -->
          <div class="card" style="border-top: 4px solid var(--color-pine-emerald);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span class="badge badge-pine">Phase 2: Days 8 – 14</span>
              <span style="font-size: 0.8125rem; font-weight: 700; color: var(--color-text-muted);">12–15 Min/Day</span>
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 8px;">
              Deep Core & Multifidus Activation
            </h3>
            <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 14px;">
              Gradual progression to 18°–22° incline. We introduce isometric contractions of the tiny deep stabilizer muscles that wrap individual vertebrae, locking disc correction in place.
            </p>
            <ul style="display: flex; flex-direction: column; gap: 6px; font-size: 0.8125rem; color: var(--color-text-main);">
              <li>• Prone spinal extension glides</li>
              <li>• Thoracic cage breathing & rib cage mobilization</li>
              <li>• Sciatic nerve floss exercises under gentle traction</li>
            </ul>
          </div>

          <!-- Phase 3 -->
          <div class="card" style="border-top: 4px solid var(--color-gold-star);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span class="badge badge-gold">Phase 3: Days 15 – 30</span>
              <span style="font-size: 0.8125rem; font-weight: 700; color: var(--color-text-muted);">15 Min/Day</span>
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 8px;">
              Functional Posture & Disc Hydration
            </h3>
            <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 14px;">
              Deep therapeutic angles (25° to 35°). Builds permanent muscular armor around previously injured discs, preventing future relapse during heavy work, lifting, or long sitting.
            </p>
            <ul style="display: flex; flex-direction: column; gap: 6px; font-size: 0.8125rem; color: var(--color-text-main);">
              <li>• Full range spinal articulation & wave motions</li>
              <li>• Posture reinforcement routine for desk workers</li>
              <li>• Lifetime maintenance protocols (3x / week)</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  `;
}
