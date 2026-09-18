import { describe, it, expect, beforeEach } from 'vitest';
import { authStore } from '../../src/utils/authStore.js';

if (typeof globalThis.localStorage === 'undefined') {
  let store = {};
  globalThis.localStorage = {
    getItem: (k) => store[k] || null,
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    clear: () => { store = {}; }
  };
}

describe('AuthStore & Patient Portal State', () => {
  beforeEach(() => {
    globalThis.localStorage.clear();
    authStore.logout();
  });

  it('should initialize logged out by default', () => {
    const state = authStore.getState();
    expect(state.isLoggedIn).toBe(false);
    expect(state.user).toBeNull();
    expect(state.isPortalOpen).toBe(false);
  });

  it('should login 1-click demo user as Kostya Evminov with clinical tracking data', () => {
    const user = authStore.loginAsDemo();
    const state = authStore.getState();

    expect(state.isLoggedIn).toBe(true);
    expect(user.name).toBe('Kostya Evminov');
    expect(user.savedAngle).toBe(18);
    expect(user.courseProgress.completedLessonIds).toContain('day-1');
    expect(user.orders.length).toBeGreaterThan(0);
    expect(user.orders[0].facility).toContain('Burbank');
    expect(state.isPortalOpen).toBe(true);
    expect(state.activeTab).toBe('orders');
  });

  it('should support email login and auto-open portal', () => {
    const user = authStore.login('test.spine.doc@clinic.org');
    const state = authStore.getState();

    expect(state.isLoggedIn).toBe(true);
    expect(user.email).toBe('test.spine.doc@clinic.org');
    expect(state.isPortalOpen).toBe(true);
  });

  it('should logout cleanly and clear portal modal', () => {
    authStore.loginAsDemo();
    expect(authStore.getState().isLoggedIn).toBe(true);

    authStore.logout();
    const state = authStore.getState();
    expect(state.isLoggedIn).toBe(false);
    expect(state.user).toBeNull();
    expect(state.isPortalOpen).toBe(false);
  });

  it('should control portal visibility and tab switching', () => {
    authStore.openPortal('biometrics');
    let state = authStore.getState();
    expect(state.isPortalOpen).toBe(true);
    expect(state.activeTab).toBe('biometrics');

    authStore.setActiveTab('course');
    state = authStore.getState();
    expect(state.activeTab).toBe('course');

    authStore.closePortal();
    state = authStore.getState();
    expect(state.isPortalOpen).toBe(false);
  });

  it('should append new orders placed via checkout drawer', () => {
    authStore.loginAsDemo();
    const initialOrderCount = authStore.getState().user.orders.length;

    authStore.addOrder({
      orderId: 'EV-TEST-999',
      customerName: 'Kostya Evminov',
      customerEmail: 'kostya@evminov.com',
      upsTracking: '1Z999TESTING0001',
      deliveryDate: 'Sept 22, 2026',
      total: 795,
      items: [{ name: 'Wall Mount Pro', price: 795, quantity: 1 }]
    });

    const state = authStore.getState();
    expect(state.user.orders.length).toBe(initialOrderCount + 1);
    expect(state.user.orders[0].orderId).toBe('EV-TEST-999');
    expect(state.user.orders[0].upsTracking).toBe('1Z999TESTING0001');
  });

  it('should toggle 30-day rehab lessons completion state', () => {
    authStore.loginAsDemo();
    const initialCompleted = [...authStore.getState().user.courseProgress.completedLessonIds];
    
    // Toggle Day 4 (was not completed)
    authStore.toggleLessonComplete('day-4');
    expect(authStore.getState().user.courseProgress.completedLessonIds).toContain('day-4');

    // Toggle Day 4 again to uncheck
    authStore.toggleLessonComplete('day-4');
    expect(authStore.getState().user.courseProgress.completedLessonIds).not.toContain('day-4');
  });

  it('should manage subscription statuses', () => {
    authStore.loginAsDemo();
    const sub = authStore.getState().user.subscriptions[0];
    expect(sub.status).toBe('Active');

    authStore.updateSubscriptionStatus(sub.id, 'Paused');
    expect(authStore.getState().user.subscriptions[0].status).toBe('Paused');

    authStore.updateSubscriptionStatus(sub.id, 'Active');
    expect(authStore.getState().user.subscriptions[0].status).toBe('Active');
  });

  it('should manage payment methods and default selection', () => {
    authStore.loginAsDemo();
    const initialCount = authStore.getState().user.paymentMethods.length;

    authStore.addPaymentMethod({
      brand: 'Amex',
      last4: '1009',
      expiry: '04/30',
      isDefault: true,
    });

    let state = authStore.getState();
    expect(state.user.paymentMethods.length).toBe(initialCount + 1);
    const addedPm = state.user.paymentMethods.find((p) => p.last4 === '1009');
    expect(addedPm.isDefault).toBe(true);

    // Switch default back to pm-01
    authStore.setDefaultPaymentMethod('pm-01');
    state = authStore.getState();
    expect(state.user.paymentMethods.find((p) => p.id === 'pm-01').isDefault).toBe(true);

    // Remove the added card
    authStore.removePaymentMethod(addedPm.id);
    state = authStore.getState();
    expect(state.user.paymentMethods.find((p) => p.last4 === '1009')).toBeUndefined();
  });

  it('should register new hardware in patient profile', () => {
    authStore.loginAsDemo();
    const initialCount = authStore.getState().user.products.length;

    authStore.registerProduct({
      name: 'Evminov Wide Heavy-Duty Board',
      serialNumber: 'EVM-WIDE-2026-99',
      finish: 'Gym Stealth Black',
      capacity: '330 lbs',
    });

    const state = authStore.getState();
    expect(state.user.products.length).toBe(initialCount + 1);
    expect(state.user.products.some((p) => p.serialNumber === 'EVM-WIDE-2026-99')).toBe(true);
  });

  it('should append patient messages to clinical chat thread', () => {
    authStore.loginAsDemo();
    const initialMsgCount = authStore.getState().user.messages.length;

    authStore.sendMessage('Dr. Olena, my sciatica symptoms have reduced significantly today!');
    const state = authStore.getState();
    expect(state.user.messages.length).toBe(initialMsgCount + 1);
    expect(state.user.messages[state.user.messages.length - 1].text).toContain('sciatica symptoms');
  });

  it('should update and save patient biometrics', () => {
    authStore.loginAsDemo();
    authStore.saveBiometrics(22, 190);
    const state = authStore.getState();
    expect(state.user.savedAngle).toBe(22);
    expect(state.user.savedWeight).toBe(190);
  });
});
