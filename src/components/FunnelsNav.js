export const CLINICAL_PATHWAYS = [
  {
    id: 'inversion',
    target: '#comparison',
    btnId: 'funnel-btn-comparison',
    title: 'Why Not Inversion?',
    subtitle: 'Zero stroke & ocular risk',
    tag: 'Safety Compare',
    accent: 'blue',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>`,
  },
  {
    id: 'hernia',
    target: '#calculator',
    btnId: 'funnel-btn-hernia',
    title: 'Herniated Disc Protocol',
    subtitle: 'L4–S1 angle calibrator',
    tag: 'Diagnostic Tool',
    accent: 'emerald',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="7" y="3" width="10" height="4" rx="2"/>
      <rect x="6" y="10" width="12" height="4" rx="2"/>
      <rect x="5" y="17" width="14" height="4" rx="2"/>
      <line x1="12" y1="7" x2="12" y2="10"/>
      <line x1="12" y1="14" x2="12" y2="17"/>
    </svg>`,
  },
  {
    id: 'athletes',
    target: '#athletes',
    btnId: 'funnel-btn-athletes',
    title: 'Athletic Recovery',
    subtitle: 'Axial compression relief',
    tag: 'Heavy Lifters',
    accent: 'teal',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 12h20"/>
      <rect x="4" y="6" width="3" height="12" rx="1"/>
      <rect x="17" y="6" width="3" height="12" rx="1"/>
      <line x1="1" y1="9" x2="1" y2="15"/>
      <line x1="23" y1="9" x2="23" y2="15"/>
    </svg>`,
  },
  {
    id: 'mounting',
    target: '#mounting',
    btnId: 'funnel-btn-mounting',
    title: 'Wall & Renter Setup',
    subtitle: '16" studs, masonry & stand',
    tag: 'Installation',
    accent: 'amber',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <line x1="9" y1="3" x2="9" y2="21"/>
      <line x1="15" y1="3" x2="15" y2="21"/>
      <circle cx="9" cy="8" r="1" fill="currentColor"/>
      <circle cx="9" cy="16" r="1" fill="currentColor"/>
      <circle cx="15" cy="8" r="1" fill="currentColor"/>
      <circle cx="15" cy="16" r="1" fill="currentColor"/>
    </svg>`,
  },
  {
    id: 'recovery',
    target: '#onboarding',
    btnId: 'funnel-btn-recovery',
    title: '30-Day Video Program',
    subtitle: 'Daily kinesitherapy routines',
    tag: 'Guided Rehab',
    accent: 'indigo',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="15" rx="3"/>
      <polygon points="10 8 16 11.5 10 15 10 8" fill="currentColor" fill-opacity="0.2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="19" x2="12" y2="21"/>
    </svg>`,
  },
  {
    id: 'studies',
    target: '#blog',
    btnId: 'funnel-btn-studies',
    title: 'Clinical Trials & Data',
    subtitle: '25+ years published evidence',
    tag: 'Medical Evidence',
    accent: 'emerald',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      <line x1="9" y1="7" x2="15" y2="7"/>
      <line x1="9" y1="11" x2="13" y2="11"/>
    </svg>`,
  },
];

export function renderFunnelsNav() {
  return `
    <nav class="funnels-nav-section" id="clinical-solutions-nav" aria-label="Clinical Solutions & Protocols">
      <div class="calc-container">
        <div class="funnels-nav-inner">
          
          <div class="funnels-header-row">
            <div class="funnels-header-title-group">
              <span class="funnels-eyebrow-pill">
                <span class="funnels-pulsing-dot" aria-hidden="true"></span>
                CLINICAL PATHWAYS
              </span>
              <h2 class="funnels-section-heading">Explore by Condition &amp; Need</h2>
            </div>
            <div class="funnels-header-meta">
              <span class="funnels-meta-badge">6 Evidence-Based Pathways</span>
            </div>
          </div>

          <div class="funnels-cards-grid" role="tablist" aria-label="Clinical pathways directory">
            ${CLINICAL_PATHWAYS.map((item, idx) => `
              <a 
                href="${item.target}" 
                class="funnel-pathway-card ${idx === 0 ? 'active' : ''}" 
                id="${item.btnId}"
                role="tab"
                aria-selected="${idx === 0 ? 'true' : 'false'}"
                data-target="${item.target}"
                title="${item.title}: ${item.subtitle}"
              >
                <div class="pathway-icon-box accent-${item.accent}">
                  ${item.icon}
                </div>
                <div class="pathway-content">
                  <div class="pathway-tag-row">
                    <span class="pathway-micro-tag">${item.tag}</span>
                  </div>
                  <div class="pathway-title">${item.title}</div>
                  <div class="pathway-subtitle">${item.subtitle}</div>
                </div>
                <div class="pathway-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </a>
            `).join('')}
          </div>

        </div>
      </div>
    </nav>
  `;
}

export function initFunnelsNav() {
  const container = document.querySelector('.funnels-nav-section');
  if (!container) return;

  const cards = container.querySelectorAll('.funnel-pathway-card');
  if (!cards.length) return;

  function setActiveCard(targetHref) {
    cards.forEach(card => {
      const isMatch = card.getAttribute('href') === targetHref;
      card.classList.toggle('active', isMatch);
      card.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });
  }

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      const href = card.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          setActiveCard(href);

          const headerOffset = 90;
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

  // Scrollspy via IntersectionObserver: highlight active pathway card as sections enter viewport
  if ('IntersectionObserver' in window) {
    const targets = CLINICAL_PATHWAYS.map(p => document.querySelector(p.target)).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          setActiveCard(id);
        }
      });
    }, {
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0.1
    });

    targets.forEach(target => observer.observe(target));
  }
}
