import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { cartStore } from '../../src/utils/cartStore.js';

class MockNode {
  constructor(tagName = 'div', attrs = {}) {
    this.tagName = tagName.toUpperCase();
    this.attrs = { ...attrs };
    this._classList = new Set();
    this.classList = {
      add: (c) => this._classList.add(c),
      remove: (c) => this._classList.delete(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (this._classList.has(c)) this._classList.delete(c);
          else this._classList.add(c);
        } else if (force) {
          this._classList.add(c);
        } else {
          this._classList.delete(c);
        }
      },
      contains: (c) => this._classList.has(c),
    };
    this.listeners = {};
    this.innerHTML = '';
    this.style = {};
    this.scrollTop = 0;
  }
  getAttribute(k) {
    return this.attrs[k] || null;
  }
  setAttribute(k, v) {
    this.attrs[k] = String(v);
  }
  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }
  dispatchEvent(event) {
    if (this.listeners[event.type]) {
      this.listeners[event.type].forEach((fn) => fn(event));
    }
  }
}

let mockElements = new Map();
if (typeof globalThis.document === 'undefined') {
  globalThis.document = {
    body: new MockNode('body'),
    getElementById: (id) => mockElements.get(id) || null,
    querySelector: (sel) => null,
    querySelectorAll: (sel) => [],
    addEventListener: () => {},
  };
}

describe('Checkout Drawer Stability & No-Shake Architecture', () => {
  beforeEach(() => {
    cartStore.clearCart();
    cartStore.closeDrawer();
    globalThis.document.body._classList.clear();
    mockElements.clear();

    const overlay = new MockNode('div', { id: 'checkout-overlay' });
    const drawer = new MockNode('aside', { id: 'checkout-drawer' });
    const drawerBody = new MockNode('div', { id: 'drawer-body' });
    const footer = new MockNode('div', { id: 'drawer-footer' });
    const closeBtn = new MockNode('button', { id: 'drawer-close-btn' });
    const emptyNotice = new MockNode('div', { id: 'drawer-empty-notice' });
    const checkoutFlow = new MockNode('div', { id: 'drawer-checkout-flow' });
    const itemsList = new MockNode('div', { id: 'drawer-items-list' });
    const itemCountBadge = new MockNode('span', { id: 'drawer-item-count-badge' });

    mockElements.set('checkout-overlay', overlay);
    mockElements.set('checkout-drawer', drawer);
    mockElements.set('drawer-body', drawerBody);
    mockElements.set('drawer-footer', footer);
    mockElements.set('drawer-close-btn', closeBtn);
    mockElements.set('drawer-empty-notice', emptyNotice);
    mockElements.set('drawer-checkout-flow', checkoutFlow);
    mockElements.set('drawer-items-list', itemsList);
    mockElements.set('drawer-item-count-badge', itemCountBadge);
  });

  it('verifies checkout.css contains overscroll containment and zero dynamic max-height footer collapse', () => {
    const cssPath = path.resolve(process.cwd(), 'src/styles/checkout.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');

    // Containment to prevent background page rubberbanding and shake
    expect(cssContent).toContain('.checkout-drawer {');
    expect(cssContent).toContain('overscroll-behavior: contain;');
    
    // Stable pinned footer
    expect(cssContent).toContain('.drawer-footer {');
    expect(cssContent).toContain('flex-shrink: 0;');

    // Jitter-causing is-hidden class must not exist for drawer-footer
    expect(cssContent).not.toContain('.drawer-footer.is-hidden');
    expect(cssContent).not.toContain('max-height: 0 !important');
  });

  it('verifies main.css locks background body scrolling when cart is open', () => {
    const mainCssPath = path.resolve(process.cwd(), 'src/styles/main.css');
    const mainCss = fs.readFileSync(mainCssPath, 'utf8');

    expect(mainCss).toContain('body.cart-drawer-open');
    expect(mainCss).toContain('overflow: hidden !important;');
  });

  it('locks body scroll when cart drawer opens and unlocks when closed', async () => {
    const { initCheckoutDrawer } = await import('../../src/components/CheckoutDrawer.js');
    initCheckoutDrawer();

    expect(globalThis.document.body.classList.contains('cart-drawer-open')).toBe(false);

    // Open drawer
    cartStore.openDrawer();
    expect(globalThis.document.body.classList.contains('cart-drawer-open')).toBe(true);

    // Close drawer
    cartStore.closeDrawer();
    expect(globalThis.document.body.classList.contains('cart-drawer-open')).toBe(false);
  });

  it('ensures drawer-footer remains visible and stable during scroll without oscillating is-hidden', async () => {
    const { initCheckoutDrawer } = await import('../../src/components/CheckoutDrawer.js');
    initCheckoutDrawer();
    const footer = globalThis.document.getElementById('drawer-footer');
    const drawerBody = globalThis.document.getElementById('drawer-body');

    expect(footer).toBeTruthy();
    expect(drawerBody).toBeTruthy();

    cartStore.openDrawer();

    // Simulate scrolling down
    drawerBody.scrollTop = 120;
    drawerBody.dispatchEvent({ type: 'scroll' });

    // Footer must not have is-hidden class
    expect(footer.classList.contains('is-hidden')).toBe(false);

    // Simulate scrolling up
    drawerBody.scrollTop = 40;
    drawerBody.dispatchEvent({ type: 'scroll' });

    expect(footer.classList.contains('is-hidden')).toBe(false);
  });
});
