import { cartStore } from '../utils/cartStore.js';

export function renderMobileStickyBar() {
  return `
    <div class="mobile-sticky-bar" id="mobile-sticky-bar" aria-label="Mobile Quick Purchase Bar">
      <div>
        <div style="font-family: var(--font-heading); font-size: 1rem; font-weight: 800; color: var(--color-primary-navy);">
          From $450 <span style="font-size: 0.75rem; color: var(--color-pine-emerald); font-weight: 600;">(or 4x $112.50)</span>
        </div>
        <div style="font-size: 0.75rem; color: var(--color-text-muted);">
          ★ 4.9 (2.4k) • Free US Shipping
        </div>
      </div>
      <a href="#catalog" class="btn btn-primary btn-sm">
        Select Board →
      </a>
    </div>
  `;
}
