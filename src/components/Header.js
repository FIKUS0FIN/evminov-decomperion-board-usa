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
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 21h10" />
            <path d="M12 15.5v5.5" />
            <path d="M5 9.5C5 13.5 8 16 12 16C16 13.5 19 9.5 19 9.5" />
            <path d="M4 9.5h16" />
            <path d="M8 19.5C8 19.5 15 19 15 17.5C15 16 9 15.5 9 13.5C9 11.5 13 10.8 16 8.5C18 7 18 4.2 15.2 3.5C12.5 2.8 10.2 4.2 10.8 6.2C11.2 7.5 13 7.6 13 7.6" />
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
