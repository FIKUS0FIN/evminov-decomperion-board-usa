import { describe, it, expect, beforeEach } from 'vitest';
import { renderPatientPortalPage, initPatientPortalPage } from '../../src/components/PortalPage.js';
import { authStore } from '../../src/utils/authStore.js';
import fs from 'fs';
import path from 'path';

// Mock localStorage for Node vitest environment
if (typeof globalThis.localStorage === 'undefined') {
  let store = {};
  globalThis.localStorage = {
    getItem: (k) => store[k] || null,
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    clear: () => { store = {}; }
  };
}

// Lightweight DOM mock for testing initPatientPortalPage in Node
class MockNode {
  constructor(tagName = 'div', attrs = {}) {
    this.tagName = tagName.toUpperCase();
    this.attrs = { ...attrs };
    this._classList = new Set();
    this.classList = {
      add: (c) => this._classList.add(c),
      remove: (c) => this._classList.remove(c),
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
      contains: (c) => this._classList.has(c)
    };
    this.listeners = {};
    this.innerHTML = '';
    this.style = {};
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
      this.listeners[event.type].forEach(fn => fn(event));
    }
  }
  click() {
    this.dispatchEvent({ type: 'click', preventDefault: () => {} });
  }
  scrollIntoView() {}
}

let mockElements = new Map();
if (typeof globalThis.document === 'undefined') {
  globalThis.document = {
    body: new MockNode('body'),
    getElementById: (id) => mockElements.get(id) || null,
    querySelectorAll: (selector) => {
      const results = [];
      mockElements.forEach((el) => {
        if (selector === '[data-portal-tab]' && el.getAttribute('data-portal-tab')) {
          results.push(el);
        } else if (selector === '.portal-nav-item' && el.attrs.class && el.attrs.class.includes('portal-nav-item')) {
          results.push(el);
        }
      });
      return results;
    },
    querySelector: (selector) => {
      for (const el of mockElements.values()) {
        if (selector.includes('data-portal-tab')) {
          const match = selector.match(/data-portal-tab="([^"]+)"/);
          if (match && el.getAttribute('data-portal-tab') === match[1]) {
            return el;
          }
        }
      }
      return null;
    }
  };
}

describe('Patient Portal Mobile App UX & Scaling', () => {
  beforeEach(() => {
    globalThis.localStorage.clear();
    authStore.logout();
    mockElements.clear();
  });

  it('renders login screen when patient is not authenticated', () => {
    const html = renderPatientPortalPage();
    expect(html).toContain('portal-login-screen');
    expect(html).toContain('portal-login-card');
    expect(html).toContain('btn-login-demo-page');
    expect(html).toContain('portal-login-form');
  });

  it('renders mobile-ready portal shell with all 8 navigation tabs when authenticated', () => {
    authStore.loginAsDemo();
    const html = renderPatientPortalPage();

    expect(html).toContain('portal-page-container');
    expect(html).toContain('portal-top-bar');
    expect(html).toContain('portal-sidebar');
    expect(html).toContain('portal-nav-menu');
    expect(html).toContain('portal-workspace');

    // Verify all 8 clinical navigation tabs
    const expectedTabs = [
      'overview',
      'products',
      'orders',
      'subscriptions',
      'payments',
      'course',
      'biometrics',
      'messages'
    ];

    expectedTabs.forEach(tab => {
      expect(html).toContain(`data-portal-tab="${tab}"`);
    });
  });

  it('renders Orders tab with UPS live tracking, progress track, and itemized cards', () => {
    authStore.loginAsDemo();
    authStore.setActiveTab('orders');
    const html = renderPatientPortalPage();

    expect(html).toContain('Orders & Live UPS Ground Tracking');
    expect(html).toContain('portal-order-full-card');
    expect(html).toContain('ups-interactive-tracker');
    expect(html).toContain('ups-progress-track');
    expect(html).toContain('Order Placed');
    expect(html).toContain('Burbank CA Hub');
    expect(html).toContain('In Transit');
    expect(html).toContain('Out for Delivery');
    expect(html).toContain('tracking-details-strip');
    expect(html).toContain('1Z9999999999999999');
    expect(html).toContain('order-items-breakdown');
    expect(html).toContain('order-actions-row');
  });

  it('renders Overview tab with welcome banner, 4 quick metrics, and 2-column cards', () => {
    authStore.loginAsDemo();
    authStore.setActiveTab('overview');
    const html = renderPatientPortalPage();

    expect(html).toContain('patient-welcome-banner');
    expect(html).toContain('Welcome back, Kostya Evminov');
    expect(html).toContain('portal-metrics-grid');
    expect(html).toContain('Prescribed Incline');
    expect(html).toContain('30-Day Rehab Progress');
    expect(html).toContain('Equipment Warranty');
    expect(html).toContain('portal-two-column-grid');
    expect(html).toContain('Active Delivery Tracking');
    expect(html).toContain('Clinical Support & PT Chat');
  });

  it('renders Products & Equipment tab with warranty details and manual blueprints', () => {
    authStore.loginAsDemo();
    authStore.setActiveTab('products');
    const html = renderPatientPortalPage();

    expect(html).toContain('My Equipment & Warranties');
    expect(html).toContain('products-portal-grid');
    expect(html).toContain('portal-product-card');
    expect(html).toContain('Official Registry');
    expect(html).toContain('prod-details-grid');
    expect(html).toContain('prod-downloads-row');
  });

  it('renders Subscriptions tab with status badges, auto-ship cadence, and pause buttons', () => {
    authStore.loginAsDemo();
    authStore.setActiveTab('subscriptions');
    const html = renderPatientPortalPage();

    expect(html).toContain('Subscriptions & Auto-Ship Replenishment');
    expect(html).toContain('subs-grid');
    expect(html).toContain('subscription-card');
    expect(html).toContain('sub-meta-box');
    expect(html).toContain('btn-pause-sub');
  });

  it('renders Payments tab with cards on file, HSA/FSA reimbursement, and billing history', () => {
    authStore.loginAsDemo();
    authStore.setActiveTab('payments');
    const html = renderPatientPortalPage();

    expect(html).toContain('Payments, Billing & HSA/FSA Receipts');
    expect(html).toContain('payments-grid');
    expect(html).toContain('payment-method-card');
    expect(html).toContain('hsa-fsa-banner');
    expect(html).toContain('E0941');
    expect(html).toContain('comparison-wrapper');
  });

  it('renders 30-Day Rehab Course with 4 progressive clinical phases and daily routines', () => {
    authStore.loginAsDemo();
    authStore.setActiveTab('course');
    const html = renderPatientPortalPage();

    expect(html).toContain('30-Day Guided Video Rehabilitation Course');
    expect(html).toContain('course-phases-col');
    expect(html).toContain('Phase 1: Gentle Axial Unloading');
    expect(html).toContain('Phase 2: Deep Multifidus Re-education');
    expect(html).toContain('Phase 3: Rotational & Anti-Spasm Resilience');
    expect(html).toContain('Phase 4: Full Athletic Spine Shield');
    expect(html).toContain('portal-lesson-chk');
    expect(html).toContain('btn-play-lesson');
  });

  it('renders Spine Biometrics tab with real-time traction and intradiscal force readouts', () => {
    authStore.loginAsDemo();
    authStore.setActiveTab('biometrics');
    const html = renderPatientPortalPage();

    expect(html).toContain('Spine Biometrics & Prescribed Telemetry');
    expect(html).toContain('portal-biometrics-form');
    expect(html).toContain('portal-angle-input');
    expect(html).toContain('portal-weight-input');
    expect(html).toContain('Calculated Physiological Forces');
    expect(html).toContain('Axial Traction Pull');
    expect(html).toContain('Intradiscal Vacuum Suction');
    expect(html).toContain('Target Intervertebral Elongation');
  });

  it('renders Clinic & PT Chat tab with encrypted messaging history and input bar', () => {
    authStore.loginAsDemo();
    authStore.setActiveTab('messages');
    const html = renderPatientPortalPage();

    expect(html).toContain('Direct Physical Therapist & Store Communication');
    expect(html).toContain('chat-full-workspace');
    expect(html).toContain('portal-chat-thread');
    expect(html).toContain('chat-input-bar');
    expect(html).toContain('portal-send-msg-btn');
  });

  it('switches tabs interactively and updates DOM content and active tab pill', () => {
    authStore.loginAsDemo();
    authStore.setActiveTab('overview');

    const workspaceNode = new MockNode('div', { id: 'portal-workspace-content' });
    mockElements.set('portal-workspace-content', workspaceNode);

    const ordersBtn = new MockNode('button', {
      'data-portal-tab': 'orders',
      class: 'portal-nav-item'
    });
    mockElements.set('tab-orders', ordersBtn);

    const biometricsBtn = new MockNode('button', {
      'data-portal-tab': 'biometrics',
      class: 'portal-nav-item'
    });
    mockElements.set('tab-biometrics', biometricsBtn);

    initPatientPortalPage();

    ordersBtn.click();

    expect(authStore.getState().activeTab).toBe('orders');
    expect(workspaceNode.innerHTML).toContain('Orders & Live UPS Ground Tracking');
    expect(ordersBtn.classList.contains('active')).toBe(true);

    biometricsBtn.click();
    expect(authStore.getState().activeTab).toBe('biometrics');
    expect(workspaceNode.innerHTML).toContain('Spine Biometrics & Prescribed Telemetry');
    expect(biometricsBtn.classList.contains('active')).toBe(true);
  });

  it('validates mobile CSS responsive app rules in portalPage.css', () => {
    const cssPath = path.resolve(__dirname, '../../src/styles/portalPage.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');

    // 1. Mobile main layout flex-direction column (no 280px grid pushout)
    expect(cssContent).toContain('.portal-main-layout');
    expect(cssContent).toMatch(/@media\s*\(max-width:\s*960px\)\s*\{[^}]*\.portal-main-layout\s*\{[^}]*display:\s*flex;\s*flex-direction:\s*column;/);

    // 2. Mobile sticky horizontal pill tabs with containment
    expect(cssContent).toMatch(/@media\s*\(max-width:\s*960px\)\s*\{[^}]*\.portal-sidebar\s*\{[^}]*position:\s*sticky;/);
    expect(cssContent).toMatch(/@media\s*\(max-width:\s*960px\)\s*\{[^}]*\.portal-nav-menu\s*\{[^}]*flex-direction:\s*row;\s*overflow-x:\s*auto;/);
    expect(cssContent).toContain('overscroll-behavior-x: contain');

    // 3. Mobile workspace 100% fluid scaling
    expect(cssContent).toMatch(/@media\s*\(max-width:\s*960px\)\s*\{[^}]*\.portal-workspace\s*\{[^}]*width:\s*100%;/);
    expect(cssContent).toMatch(/@media\s*\(max-width:\s*960px\)\s*\{[^}]*\.tab-pane-container\s*\{[^}]*width:\s*100%;/);

    // 4. Mobile app card and tracker optimizations
    expect(cssContent).toContain('Mobile Native App Experience');
    expect(cssContent).toContain('.ups-interactive-tracker');
    expect(cssContent).toContain('.portal-order-full-card');
    expect(cssContent).toContain('.portal-metrics-grid');
  });
});
