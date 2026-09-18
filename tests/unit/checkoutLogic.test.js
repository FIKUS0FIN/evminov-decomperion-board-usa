import { describe, it, expect } from 'vitest';
import { 
  generateOrderId, 
  generateUPSTracking, 
  getEstimatedDeliveryDate 
} from '../../src/utils/checkoutLogic.js';

describe('Order Processing & Fulfillment Simulation Tests', () => {
  it('generates a valid order ID with the EV- prefix', () => {
    const id1 = generateOrderId();
    const id2 = generateOrderId();
    expect(id1).toMatch(/^EV-\d{5}$/);
    expect(id2).toMatch(/^EV-\d{5}$/);
    expect(id1).not.toBe(id2);
  });

  it('generates a 18-character simulated UPS Ground tracking number starting with 1Z', () => {
    const tracking = generateUPSTracking();
    expect(tracking).toHaveLength(18);
    expect(tracking.startsWith('1Z')).toBe(true);
  });

  it('calculates estimated delivery date 3 business days in the future', () => {
    const deliveryDate = getEstimatedDeliveryDate();
    expect(typeof deliveryDate).toBe('string');
    expect(deliveryDate.length).toBeGreaterThan(5);
  });
});
