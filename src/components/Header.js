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
            <circle cx="50" cy="13" r="7" fill="currentColor"/>
            <rect x="46" y="20" width="8" height="3" rx="1.5" fill="currentColor"/>
            <line x1="50" y1="23" x2="50" y2="95" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M47 24 C38 18, 26 12, 10 16 C8 24, 12 28, 14 31 C11 34, 14 39, 18 41 C16 44, 20 48, 26 49 C26 52, 32 54, 38 52 C38 55, 43 55, 47 48 Z" 
                  fill="#ECFDF5" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
            <path d="M14 31 C22 30, 32 30, 44 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M18 41 C26 39, 34 38, 45 36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M26 49 C32 46, 38 45, 46 44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M53 24 C62 18, 74 12, 90 16 C92 24, 88 28, 86 31 C89 34, 86 39, 82 41 C84 44, 80 48, 74 49 C74 52, 68 54, 62 52 C62 55, 57 55, 53 48 Z" 
                  fill="#ECFDF5" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
            <path d="M86 31 C78 30, 68 30, 56 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M82 41 C74 39, 66 38, 55 36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M74 49 C68 46, 62 45, 54 44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M44 33 C46 32, 48 34, 46 36 C42 41, 31 46, 35 55 C39 63, 62 62, 64 71 C66 79, 40 80, 42 88 C44 92, 50 94, 50 94" 
                  fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M56 33 C54 32, 52 34, 54 36 C58 41, 69 46, 65 55 C61 63, 38 62, 36 71 C34 79, 60 80, 58 88 C56 92, 50 94, 50 94" 
                  fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
            <ellipse cx="44.5" cy="33" rx="3.5" ry="2.2" fill="currentColor" transform="rotate(-15 44.5 33)"/>
            <circle cx="43.5" cy="32.5" r="0.9" fill="#FFFFFF"/>
            <ellipse cx="55.5" cy="33" rx="3.5" ry="2.2" fill="currentColor" transform="rotate(15 55.5 33)"/>
            <circle cx="56.5" cy="32.5" r="0.9" fill="#FFFFFF"/>
          </svg>
          <div class="logo-text-stack">
            <span class="logo-title">Evminov</span>
            <span class="logo-subtitle">Spine <span class="logo-med-tag">Med</span></span>
          </div>
        </a>

        <nav class="site-nav" aria-label="Primary Navigation">
          <a href="#comparison" class="nav-link">Why Not Inversion?</a>
          <a href="#catalog" class="nav-link">Boards & Pricing</a>
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
        </div>
      </div>
    </header>
  `;

  return headerHtml;
}

export function initHeader() {
  const triggerBtn = document.getElementById('cart-trigger-btn');
  const countBadge = document.getElementById('header-cart-count');
  const portalBtn = document.getElementById('portal-trigger-btn');
  const userStatusSpan = document.getElementById('header-user-status');

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
