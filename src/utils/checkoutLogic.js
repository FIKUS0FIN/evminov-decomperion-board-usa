/**
 * Checkout & Payment Validation Utilities (Luhn Algorithm, ZIP, UPS Generator)
 */

export function detectCardBrand(number) {
  const clean = number.replace(/\D/g, '');
  if (/^4/.test(clean)) return 'visa';
  if (/^(5[1-5]|2[2-7])/.test(clean)) return 'mastercard';
  if (/^3[47]/.test(clean)) return 'amex';
  if (/^(6011|65|64[4-9])/.test(clean)) return 'discover';
  return 'unknown';
}

/**
 * Standard Luhn algorithm for payment card validation
 */
export function validateCardNumber(number) {
  const digits = number.replace(/\D/g, '');
  if (digits.length < 13 || digits.length > 19) return false;

  let sum = 0;
  let isEven = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits.charAt(i), 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

export function formatCardNumber(value) {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || '';
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(' ');
  } else {
    return value;
  }
}

export function validateExpiry(expStr) {
  if (!expStr || !expStr.includes('/')) return false;
  const [monthStr, yearStr] = expStr.split('/');
  const month = parseInt(monthStr.trim(), 10);
  const year = parseInt(yearStr.trim(), 10);

  if (isNaN(month) || isNaN(year)) return false;
  if (month < 1 || month > 12) return false;

  const now = new Date();
  const currentYear = parseInt(now.getFullYear().toString().slice(-2), 10);
  const currentMonth = now.getMonth() + 1;

  if (year < currentYear) return false;
  if (year === currentYear && month < currentMonth) return false;
  if (year > currentYear + 20) return false;

  return true;
}

export function validateCVV(cvv, cardBrand = 'unknown') {
  const clean = cvv.replace(/\D/g, '');
  if (cardBrand === 'amex') {
    return clean.length === 4;
  }
  return clean.length === 3 || clean.length === 4;
}

export function validateUSZip(zip) {
  // 5 digits or 5+4 (e.g. 91505 or 91505-1234)
  return /^\d{5}(-\d{4})?$/.test(zip.trim());
}

export function generateOrderId() {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `EV-${randomNum}`;
}

export function generateUPSTracking() {
  const chars = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let tracking = '1Z';
  for (let i = 0; i < 16; i++) {
    tracking += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return tracking;
}

export function getEstimatedDeliveryDate() {
  const now = new Date();
  // Add 3 business days
  let count = 0;
  while (count < 3) {
    now.setDate(now.getDate() + 1);
    const day = now.getDay();
    if (day !== 0 && day !== 6) {
      count++;
    }
  }
  return now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}
