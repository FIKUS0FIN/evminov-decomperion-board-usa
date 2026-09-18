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
