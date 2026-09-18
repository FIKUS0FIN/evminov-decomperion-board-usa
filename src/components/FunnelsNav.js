export function renderFunnelsNav() {
  return `
    <nav class="funnels-nav-section" aria-label="Target Condition Funnels">
      <div class="calc-container">
        <div class="funnels-nav-container">
          
          <div class="funnels-label-group">
            <span class="funnels-label-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="12 8 8 12 12 16 12 8"/>
                <line x1="16" y1="12" x2="12" y2="12"/>
              </svg>
              <span>Explore by Need:</span>
            </span>
          </div>

          <div class="funnels-two-rows">
            <!-- Row 1: Clinical Conditions & Inversion Comparison -->
            <div class="funnels-row">
              <a href="#comparison" class="funnel-tab-btn active" id="funnel-btn-comparison">
                <span class="btn-emoji">🔄</span>
                <span class="btn-label">Why Not Inversion Table?</span>
              </a>
              <a href="#calculator" class="funnel-tab-btn" id="funnel-btn-hernia">
                <span class="btn-emoji">⚡</span>
                <span class="btn-label">Herniated Disc (L4-S1 Relief)</span>
              </a>
              <a href="#athletes" class="funnel-tab-btn" id="funnel-btn-athletes">
                <span class="btn-emoji">🏋️</span>
                <span class="btn-label">For Athletes & Heavy Lifters</span>
              </a>
            </div>

            <!-- Row 2: Setup, Recovery Program & Proof -->
            <div class="funnels-row">
              <a href="#mounting" class="funnel-tab-btn" id="funnel-btn-mounting">
                <span class="btn-emoji">🔨</span>
                <span class="btn-label">16" Wall Studs & Renter Mounting</span>
              </a>
              <a href="#onboarding" class="funnel-tab-btn" id="funnel-btn-recovery">
                <span class="btn-emoji">📱</span>
                <span class="btn-label">30-Day Guided Video Program</span>
              </a>
              <a href="#blog" class="funnel-tab-btn" id="funnel-btn-studies">
                <span class="btn-emoji">📚</span>
                <span class="btn-label">Scientific Studies & Clinical Trials</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  `;
}

export function initFunnelsNav() {
  const container = document.querySelector('.funnels-nav-section');
  if (!container) return;

  const buttons = container.querySelectorAll('.funnel-tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const headerOffset = 85;
          const targetY = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });

          if (window.history && window.history.pushState) {
            window.history.pushState(null, null, href);
          }
        }
      }
    });
  });
}
