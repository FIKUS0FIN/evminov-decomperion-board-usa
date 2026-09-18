import { cartStore } from '../utils/cartStore.js';
import { authStore } from '../utils/authStore.js';

export function renderHeader() {
  const headerHtml = `
    <!-- Top Announcement Bar -->
    <aside class="announcement-bar" aria-label="Announcement">
      <div class="announcement-item">
        <span role="img" aria-label="US Flag">🇺🇸</span>
        <span>Fast Free Shipping from Burbank, CA Warehouse via <strong>UPS Ground</strong></span>
      </div>
      <div class="announcement-item desktop-only">
        <span>★ 60-Day In-Home Trial</span>
        <span>•</span>
        <span>HSA/FSA Pre-Tax Eligible</span>
        <span>•</span>
        <span>10-Year Frame Warranty</span>
      </div>
    </aside>

    <!-- Main Navigation Header -->
    <header class="site-header" id="site-header">
      <div class="header-inner">
        <a href="#" class="site-logo" aria-label="Evminov Spine Med Home">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle cx="50" cy="10" r="6" fill="currentColor"/>
            <rect x="46.5" y="16" width="7" height="3" rx="1.5" fill="currentColor"/>
            <line x1="50" y1="19" x2="50" y2="95" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M47 20 C38 12, 26 4, 8 4 C5 8, 8 12, 14 13 C7 16, 9 21, 17 21 C10 25, 14 30, 23 29 C17 33, 22 37, 32 35 C28 38, 36 40, 46 36 C47 30, 47 24, 47 20 Z" 
                  fill="#ECFDF5" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
            <path d="M14 13 C24 16, 36 18, 47 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M17 21 C26 23, 36 24, 47 23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M23 29 C30 30, 38 30, 47 29" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M53 20 C58 12, 72 4, 92 4 C95 8, 92 12, 86 13 C93 16, 91 21, 83 21 C90 25, 86 30, 77 29 C83 33, 78 37, 68 35 C72 38, 64 40, 54 36 C53 30, 53 24, 53 20 Z" 
                  fill="#ECFDF5" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
            <path d="M86 13 C76 16, 64 18, 53 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M83 21 C74 23, 64 24, 53 23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M77 29 C70 30, 62 30, 53 29" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M47 23 C44 19, 38 20, 36 24 C36 28, 42 31, 47 27 Z" fill="currentColor"/>
            <circle cx="41" cy="22.5" r="1.4" fill="#FFFFFF"/>
            <path d="M41 28 C28 34, 20 44, 24 55 C28 66, 72 62, 72 73 C72 82, 40 80, 42 88 C43 92, 50 94, 50 94" 
                  fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M53 23 C56 19, 62 20, 64 24 C64 28, 58 31, 53 27 Z" fill="currentColor"/>
            <circle cx="59" cy="22.5" r="1.4" fill="#FFFFFF"/>
            <path d="M59 28 C72 34, 80 44, 76 55 C72 66, 28 62, 28 73 C28 82, 60 80, 58 88 C57 92, 50 94, 50 94" 
                  fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="logo-text-stack">
            <span class="logo-title">Evminov</span>
            <span class="logo-subtitle">Spine <span class="logo-med-tag">Med</span></span>
          </div>
        </a>

        <nav class="site-nav" aria-label="Primary Navigation">
          <a href="#comparison" class="nav-link">Why Not Inversion?</a>
          <a href="#catalog" class="nav-link">Boards & Pricing</a>
          <a href="#exercise-gallery" class="nav-link">Protocols</a>
          <a href="#centers" class="nav-link" style="color: var(--color-pine-emerald); font-weight: 700;">Centers &amp; Heritage</a>
          <a href="#patents" class="nav-link">Patents & Trials</a>
          <a href="#athletes" class="nav-link">For Athletes</a>
          <a href="#reviews" class="nav-link">Reviews</a>
          <a href="#faq" class="nav-link">FAQ</a>
        </nav>

        <div class="header-actions">
          <!-- Patient Account / Customer Portal Trigger -->
          <button 
            type="button" 
            class="portal-trigger-btn" 
            id="portal-trigger-btn" 
            aria-label="Open Patient Account / Portal"
            title="Access Your Evminov Patient Portal"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span class="desktop-only" id="header-user-status" style="font-size: 0.8125rem; font-weight: 700;">
              Sign In
            </span>
          </button>

          <a href="#calculator" class="btn btn-secondary btn-sm header-quiz-cta">
            Find My Angle
          </a>

          <button class="cart-trigger-btn" id="cart-trigger-btn" aria-label="View Shopping Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>Cart</span>
            <span class="cart-count-badge" id="header-cart-count">0</span>
          </button>
          <!-- Mobile Hamburger Menu Button (3 Lines) -->
          <button 
            type="button" 
            class="mobile-menu-btn" 
            id="mobile-menu-btn" 
            aria-label="Toggle Navigation Menu" 
            aria-expanded="false"
            aria-controls="mobile-nav-drawer"
          >
            <span class="hamburger-line line-1"></span>
            <span class="hamburger-line line-2"></span>
            <span class="hamburger-line line-3"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer Overlay -->
    <div class="mobile-nav-overlay" id="mobile-nav-overlay" aria-hidden="true">
      <div class="mobile-nav-backdrop" id="mobile-nav-backdrop"></div>
      <aside class="mobile-nav-drawer" id="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        
        <div class="mobile-nav-header">
          <div class="mobile-nav-title">
            <span class="mobile-nav-icon">🧭</span>
            <span>Menu &amp; Sections</span>
          </div>
          <button type="button" class="mobile-nav-close-btn" id="mobile-nav-close-btn" aria-label="Close Navigation">✕</button>
        </div>

        <!-- Quick Incline & Catalog Action Cards -->
        <div class="mobile-nav-quick-actions">
          <a href="#calculator" class="mobile-nav-quick-btn quick-calibrator">
            <span class="quick-icon">📐</span>
            <div>
              <div class="quick-title">Find My Angle</div>
              <div class="quick-desc">Incline Calibrator</div>
            </div>
          </a>
          <a href="#catalog" class="mobile-nav-quick-btn quick-catalog">
            <span class="quick-icon">🛒</span>
            <div>
              <div class="quick-title">Shop Boards</div>
              <div class="quick-desc">From $450 • Free UPS</div>
            </div>
          </a>
        </div>

        <!-- Categorized Navigation Menu List -->
        <div class="mobile-nav-body">
          <div class="mobile-nav-group-label">Navigate Site Blocks</div>
          <nav class="mobile-nav-links">
            <a href="#catalog" class="mobile-nav-item">
              <span class="nav-item-icon">🪵</span>
              <div class="nav-item-content">
                <div class="nav-item-title">Decompression Boards &amp; Pricing</div>
                <div class="nav-item-sub">Standard, Wide &amp; Accessories</div>
              </div>
              <span class="nav-item-tag tag-pine">Store</span>
            </a>

            <a href="#calculator" class="mobile-nav-item">
              <span class="nav-item-icon">📐</span>
              <div class="nav-item-content">
                <div class="nav-item-title">Incline Angle Calibrator</div>
                <div class="nav-item-sub">Personalized setup for L4-S1, thoracic, neck</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#comparison" class="mobile-nav-item">
              <span class="nav-item-icon">⚖️</span>
              <div class="nav-item-content">
                <div class="nav-item-title">Why Not Inversion Tables?</div>
                <div class="nav-item-sub">Zero stroke, retinal pressure or ankle strain</div>
              </div>
              <span class="nav-item-tag tag-amber">Compare</span>
            </a>

            <a href="#videos" class="mobile-nav-item">
              <span class="nav-item-icon">🎥</span>
              <div class="nav-item-content">
                <div class="nav-item-title">Guided 4K Video Protocols</div>
                <div class="nav-item-sub">Kyiv Vertebral Center demonstrations</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#exercise-gallery" class="mobile-nav-item nav-item-highlight">
              <span class="nav-item-icon">📋</span>
              <div class="nav-item-content">
                <div class="nav-item-title">21 Clinical Exercise Protocols</div>
                <div class="nav-item-sub">Original photo archive from evminov.shop</div>
              </div>
              <span class="nav-item-tag tag-blue">Archives</span>
            </a>

            <a href="#centers" class="mobile-nav-item">
              <span class="nav-item-icon">🏛️</span>
              <div class="nav-item-content">
                <div class="nav-item-title">Centers Network &amp; Heritage</div>
                <div class="nav-item-sub">Founder Vyacheslav Evminov &amp; Military Rehab</div>
              </div>
              <span class="nav-item-tag tag-pine">Heritage</span>
            </a>

            <a href="#patents" class="mobile-nav-item">
              <span class="nav-item-icon">📜</span>
              <div class="nav-item-content">
                <div class="nav-item-title">Medical Patents &amp; Clinical Evidence</div>
                <div class="nav-item-sub">European &amp; US medical certifications</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#mounting" class="mobile-nav-item">
              <span class="nav-item-icon">🔨</span>
              <div class="nav-item-content">
                <div class="nav-item-title">16" Wall Stud &amp; Door Mounting</div>
                <div class="nav-item-sub">Renter-safe &amp; zero-damage options</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#athletes" class="mobile-nav-item">
              <span class="nav-item-icon">🏋️</span>
              <div class="nav-item-content">
                <div class="nav-item-title">For Athletes &amp; Heavy Lifters</div>
                <div class="nav-item-sub">Axial deadlift &amp; squat decompression</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#onboarding" class="mobile-nav-item">
              <span class="nav-item-icon">📅</span>
              <div class="nav-item-content">
                <div class="nav-item-title">30-Day Guided Spine Program</div>
                <div class="nav-item-sub">Graduated daily home protocol</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#science" class="mobile-nav-item">
              <span class="nav-item-icon">🩺</span>
              <div class="nav-item-content">
                <div class="nav-item-title">Clinical Trust &amp; "Home Hospital"</div>
                <div class="nav-item-sub">120,000+ documented patient outcomes</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#reviews" class="mobile-nav-item">
              <span class="nav-item-icon">⭐</span>
              <div class="nav-item-content">
                <div class="nav-item-title">Verified Patient Reviews</div>
                <div class="nav-item-sub">4.9/5 stars from 2,400+ patients</div>
              </div>
              <span class="nav-item-tag tag-amber">4.9 ★</span>
            </a>

            <a href="#blog" class="mobile-nav-item">
              <span class="nav-item-icon">📰</span>
              <div class="nav-item-content">
                <div class="nav-item-title">Spine Health Knowledge Base</div>
                <div class="nav-item-sub">Articles &amp; clinical insights</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#faq" class="mobile-nav-item">
              <span class="nav-item-icon">❓</span>
              <div class="nav-item-content">
                <div class="nav-item-title">Medical FAQ &amp; Insurance Coverage</div>
                <div class="nav-item-sub">HSA/FSA DME receipt (E0941) details</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>
          </nav>
        </div>

        <!-- Drawer Footer -->
        <div class="mobile-nav-footer">
          <a href="#portal" class="mobile-nav-portal-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Patient Account &amp; Digital Rx</span>
          </a>
          <div class="mobile-nav-support-note">
            <span>🇺🇸 Direct US Support: <strong>+1 (818) 555-7746</strong></span>
            <span>• Burbank, CA Hub</span>
          </div>
        </div>

      </aside>
    </div>
  `;

  return headerHtml;
}

export function initHeader() {
  const triggerBtn = document.getElementById('cart-trigger-btn');
  const countBadge = document.getElementById('header-cart-count');
  const portalBtn = document.getElementById('portal-trigger-btn');
  const userStatusSpan = document.getElementById('header-user-status');

  const menuBtn = document.getElementById('mobile-menu-btn');
  const navOverlay = document.getElementById('mobile-nav-overlay');
  const navCloseBtn = document.getElementById('mobile-nav-close-btn');
  const navBackdrop = document.getElementById('mobile-nav-backdrop');
  const navLinks = document.querySelectorAll(
    '.mobile-nav-item, .mobile-nav-quick-btn, .mobile-nav-portal-btn'
  );

  function openMobileNav() {
    if (navOverlay) {
      navOverlay.classList.add('active');
      navOverlay.setAttribute('aria-hidden', 'false');
    }
    if (menuBtn) {
      menuBtn.classList.add('is-active');
      menuBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('nav-drawer-open');
  }

  function closeMobileNav() {
    if (navOverlay) {
      navOverlay.classList.remove('active');
      navOverlay.setAttribute('aria-hidden', 'true');
    }
    if (menuBtn) {
      menuBtn.classList.remove('is-active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('nav-drawer-open');
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navOverlay && navOverlay.classList.contains('active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (navCloseBtn) {
    navCloseBtn.addEventListener('click', closeMobileNav);
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileNav);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navOverlay && navOverlay.classList.contains('active')) {
      closeMobileNav();
    }
  });

  // Link click behavior: close drawer and smoothly navigate
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      closeMobileNav();

      if (href && href.startsWith('#')) {
        const hash = href;
        if (hash === '#centers' || hash === '#portal') {
          window.location.hash = hash;
          return;
        }

        // If on storefront, smooth scroll to block
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', hash);
          }, 150);
        } else {
          // If on a different page (e.g. centers or portal), change route
          window.location.hash = hash;
        }
      }
    });
  });

  if (portalBtn) {
    portalBtn.addEventListener('click', () => {
      window.location.hash = '#portal';
    });
  }

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      cartStore.openDrawer();
    });
  }

  // Subscribe to Cart state
  cartStore.subscribe((state) => {
    if (countBadge) {
      countBadge.textContent = state.count;
      countBadge.style.display = state.count > 0 ? 'inline-flex' : 'none';
    }
  });

  // Subscribe to Auth state
  authStore.subscribe((state) => {
    if (userStatusSpan) {
      if (state.isLoggedIn && state.user) {
        userStatusSpan.textContent = `${state.user.name.split(' ')[0]}'s Portal`;
        if (portalBtn) portalBtn.classList.add('logged-in');
      } else {
        userStatusSpan.textContent = 'Sign In';
        if (portalBtn) portalBtn.classList.remove('logged-in');
      }
    }
  });
}
