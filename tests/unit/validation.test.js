import { describe, it, expect } from 'vitest';
import { 
  detectCardBrand, 
  validateCardNumber, 
  validateExpiry, 
  validateCVV, 
  validateUSZip 
} from '../../src/utils/checkoutLogic.js';

describe('Stripe Checkout & Card Validation Tests', () => {
  it('detects card brand properly', () => {
    expect(detectCardBrand('4242 4242 4242 4242')).toBe('visa');
    expect(detectCardBrand('5555 5555 5555 4444')).toBe('mastercard');
    expect(detectCardBrand('3782 822463 10005')).toBe('amex');
    expect(detectCardBrand('6011 0009 9013 9424')).toBe('discover');
    expect(detectCardBrand('1234 5678')).toBe('unknown');
  });

  it('validates test card numbers via Luhn algorithm', () => {
    // Standard Stripe test card
    expect(validateCardNumber('4242424242424242')).toBe(true);
    expect(validateCardNumber('4242 4242 4242 4242')).toBe(true);
    
    // Invalid card numbers
    expect(validateCardNumber('4242424242424241')).toBe(false);
    expect(validateCardNumber('1234567890123456')).toBe(false);
    expect(validateCardNumber('9999')).toBe(false);
  });

  it('validates card expiry dates accurately', () => {
    expect(validateExpiry('12/28')).toBe(true);
    expect(validateExpiry('06/30')).toBe(true);
    expect(validateExpiry('01/20')).toBe(false); // Past year
    expect(validateExpiry('15/28')).toBe(false); // Invalid month > 12
    expect(validateExpiry('00/28')).toBe(false); // Invalid month < 1
    expect(validateExpiry('invalid')).toBe(false);
  });

  it('validates CVV lengths according to brand', () => {
    expect(validateCVV('123', 'visa')).toBe(true);
    expect(validateCVV('1234', 'amex')).toBe(true);
    expect(validateCVV('12', 'visa')).toBe(false);
    expect(validateCVV('12345', 'visa')).toBe(false);
  });

  it('validates US ZIP codes (5-digit and ZIP+4 format)', () => {
    expect(validateUSZip('91505')).toBe(true); // Burbank, CA
    expect(validateUSZip('90210')).toBe(true);
    expect(validateUSZip('91505-1234')).toBe(true);
    expect(validateUSZip('10001')).toBe(true);
    
    expect(validateUSZip('9150')).toBe(false); // 4 digits
    expect(validateUSZip('915055')).toBe(false); // 6 digits
    expect(validateUSZip('ABCDE')).toBe(false);
  });
});
