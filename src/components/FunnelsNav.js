export function renderFunnelsNav() {
  return `
    <nav class="funnels-nav-section" aria-label="Target Condition Funnels">
      <div class="calc-container">
        <div class="funnels-scroll-row">
          <span style="font-size: 0.8125rem; font-weight: 800; color: var(--color-primary-navy); text-transform: uppercase; letter-spacing: 0.05em;">
            Explore by Need:
          </span>
          <a href="#comparison" class="funnel-tab-btn active">
            🔄 Why Not Inversion Table?
          </a>
          <a href="#athletes" class="funnel-tab-btn">
            🏋️ For Athletes & Lifters
          </a>
          <a href="#calculator" class="funnel-tab-btn">
            ⚡ Herniated Disc (L4-S1)
          </a>
          <a href="#mounting" class="funnel-tab-btn">
            🔨 16" Stud Wall Mounting & Renters
          </a>
          <a href="#onboarding" class="funnel-tab-btn">
            📱 30-Day Recovery Program
          </a>
          <a href="#blog" class="funnel-tab-btn">
            📚 Scientific Studies & Blog
          </a>
        </div>
      </div>
    </nav>
  `;
}
