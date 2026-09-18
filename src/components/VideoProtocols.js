import { exerciseProtocols } from '../data/exercises.js';

export function renderVideoProtocols() {
  const cardsHtml = exerciseProtocols
    .map(
      (ex) => `
      <div class="card" style="display: flex; flex-direction: column; overflow: hidden; padding: 0;">
        <div style="position: relative; height: 180px; overflow: hidden; background: #000;">
          <img src="${ex.videoThumbnail}" alt="${ex.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.85;" />
          <button 
            type="button" 
            class="video-play-btn" 
            data-video-title="${ex.title}"
            style="position: absolute; inset: 0; margin: auto; width: 56px; height: 56px; background: rgba(5, 150, 105, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-size: 1.5rem; box-shadow: 0 0 20px rgba(5, 150, 105, 0.6); transition: transform 0.2s;"
            aria-label="Play ${ex.title} demonstration video"
          >
            ▶
          </button>
          <span class="badge badge-navy" style="position: absolute; bottom: 12px; left: 12px; font-size: 0.75rem;">
            ${ex.duration}
          </span>
          <span class="badge badge-pine" style="position: absolute; top: 12px; right: 12px; font-size: 0.75rem;">
            ${ex.angle}
          </span>
        </div>

        <div style="padding: 20px; display: flex; flex-direction: column; flex: 1; gap: 10px;">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-traction-cyan); text-transform: uppercase;">
            ${ex.target}
          </div>
          <h3 style="font-size: 1.125rem; font-weight: 800; color: var(--color-primary-navy); line-height: 1.3;">
            ${ex.title}
          </h3>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.5;">
            ${ex.description}
          </p>

          <ol style="margin-top: auto; padding-top: 10px; border-top: 1px solid var(--color-border-subtle); display: flex; flex-direction: column; gap: 6px; font-size: 0.8125rem; color: var(--color-text-main);">
            ${ex.steps.map((step, i) => `<li><strong>${i + 1}.</strong> ${step}</li>`).join('')}
          </ol>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="catalog-section" id="videos" style="background: var(--color-surface-white); border-top: 1px solid var(--color-border-subtle);">
      <div class="calc-container">
        
        <div class="section-header">
          <span class="badge badge-pine" style="margin-bottom: 12px;">Clinically Guided Techniques</span>
          <h2>Doctor-Designed Spinal Decompression Protocols</h2>
          <p>
            Explore the core biomechanical movements that allow targeted disc elongation without straining connective ligaments.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
          ${cardsHtml}
        </div>

      </div>

      <!-- Video Modal -->
      <div class="modal-overlay" id="video-modal">
        <div class="modal-content">
          <button type="button" class="modal-close-btn" id="close-video-modal" aria-label="Close Video Modal">✕</button>
          <div style="padding: 20px; border-bottom: 1px solid var(--color-border-subtle);">
            <h3 id="video-modal-title" style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy);"></h3>
          </div>
          <div class="video-container">
            <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #0B132B; color: #FFFFFF; padding: 40px; text-align: center;">
              <div style="font-size: 3rem; margin-bottom: 16px;">🎬</div>
              <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">Interactive HD Video Demonstration</h4>
              <p style="font-size: 0.9375rem; color: #94A3B8; max-width: 480px; margin-bottom: 20px;">
                Full 4K instructional footage included with your Evminov board shipment and unlocked inside the digital customer portal.
              </p>
              <a href="#catalog" class="btn btn-primary btn-sm" id="modal-video-cta">
                Order Board & Unlock Video Library
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initVideoProtocols() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('close-video-modal');
  const modalTitle = document.getElementById('video-modal-title');
  const ctaBtn = document.getElementById('modal-video-cta');

  document.querySelectorAll('.video-play-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-video-title');
      if (modalTitle) modalTitle.textContent = title;
      if (modal) modal.classList.add('active');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (ctaBtn && modal) {
    ctaBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
}
