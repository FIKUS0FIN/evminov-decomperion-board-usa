import { describe, it, expect, beforeEach } from 'vitest';
import { cartStore } from '../../src/utils/cartStore.js';
import { products } from '../../src/data/products.js';

describe('Shopping Cart Store Tests', () => {
  beforeEach(() => {
    cartStore.clearCart();
  });

  it('starts with an empty cart', () => {
    const state = cartStore.getState();
    expect(state.items).toHaveLength(0);
    expect(state.subtotal).toBe(0);
    expect(state.count).toBe(0);
  });

  it('adds items with selected finish and delivery origin', () => {
    const standardProduct = products.find((p) => p.id === 'evminov-standard');
    
    // Add 1 standard board with factory shipping ($450)
    cartStore.addItem(standardProduct, {
      finish: 'Natural Nordic Pine',
      shippingSpeed: 'direct-ua',
    });

    let state = cartStore.getState();
    expect(state.items).toHaveLength(1);
    expect(state.items[0].price).toBe(450);
    expect(state.subtotal).toBe(450);
    expect(state.count).toBe(1);
    expect(state.klarnaPayment).toBe('112.50');

    // Add 1 standard board with California warehouse shipping ($595)
    cartStore.addItem(standardProduct, {
      finish: 'Natural Nordic Pine',
      shippingSpeed: 'fast-us',
    });

    state = cartStore.getState();
    expect(state.items).toHaveLength(2);
    expect(state.count).toBe(2);
    expect(state.subtotal).toBe(450 + 595); // 1045
    expect(state.klarnaPayment).toBe((1045 / 4).toFixed(2));
  });

  it('increments quantity when identical item is added twice', () => {
    const standardProduct = products.find((p) => p.id === 'evminov-standard');
    
    cartStore.addItem(standardProduct, {
      finish: 'Natural Nordic Pine',
      shippingSpeed: 'fast-us',
    });

    cartStore.addItem(standardProduct, {
      finish: 'Natural Nordic Pine',
      shippingSpeed: 'fast-us',
    });

    const state = cartStore.getState();
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(2);
    expect(state.count).toBe(2);
    expect(state.subtotal).toBe(595 * 2);
  });

  it('updates quantity and removes item when quantity reaches zero', () => {
    const standProduct = products.find((p) => p.id === 'evminov-stand');
    cartStore.addItem(standProduct);

    let state = cartStore.getState();
    const itemId = state.items[0].cartItemId;

    // Increment
    cartStore.updateQuantity(itemId, 1);
    state = cartStore.getState();
    expect(state.items[0].quantity).toBe(2);

    // Decrement twice to remove
    cartStore.updateQuantity(itemId, -1);
    cartStore.updateQuantity(itemId, -1);
    state = cartStore.getState();
    expect(state.items).toHaveLength(0);
    expect(state.subtotal).toBe(0);
  });
});
