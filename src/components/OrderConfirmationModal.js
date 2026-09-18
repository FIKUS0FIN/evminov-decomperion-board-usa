import { formatUSD } from '../utils/formatters.js';

export function renderOrderConfirmationModal() {
  return `
    <div class="modal-overlay" id="order-confirmation-modal" aria-hidden="true" role="dialog" aria-modal="true">
      <div class="modal-content order-modal-card">
        
        <div class="success-check-icon">
          ✓
        </div>

        <h3 style="font-size: 1.75rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 6px;">
          Thank You! Your Order is Confirmed
        </h3>
        
        <p style="font-size: 0.9375rem; color: var(--color-text-muted);">
          A confirmation receipt and tracking notification have been dispatched to your email.
        </p>

        <div class="order-number-tag" id="confirm-order-id">
          Order #EV-78412
        </div>

        <div class="order-tracking-box">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.8125rem; font-weight: 700; color: var(--color-primary-navy); text-transform: uppercase;">
              UPS Ground Tracking
            </span>
            <span class="badge badge-pine" style="font-size: 0.6875rem;">Label Created</span>
          </div>
          <div style="font-family: var(--font-mono); font-size: 1rem; font-weight: 700; color: var(--color-text-main); margin-bottom: 6px;" id="confirm-tracking-num">
            1Z9999999999999999
          </div>
          <div style="font-size: 0.8125rem; color: var(--color-text-muted);">
            Estimated Delivery: <strong id="confirm-delivery-date" style="color: var(--color-primary-navy);"></strong> from Burbank, CA
          </div>
        </div>

        <!-- HSA/FSA Itemized Receipt Box -->
        <div style="background: var(--color-bg-light); border: 1px dashed var(--color-pine-border); border-radius: var(--radius-md); padding: 14px; text-align: left; margin-bottom: 20px;">
          <div style="font-size: 0.8125rem; font-weight: 700; color: var(--color-pine-emerald); margin-bottom: 4px;">
            📄 HSA / FSA Itemized Medical Receipt Generated
          </div>
          <div style="font-size: 0.8125rem; color: var(--color-text-muted); line-height: 1.4;">
            Product Classified as: <em>Durable Medical Equipment (DME) — Mechanical Spinal Traction System</em>.
          </div>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-download-receipt" style="margin-top: 10px; width: 100%;">
            📥 Download Itemized Insurance Receipt (PDF)
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <a href="#onboarding" class="btn btn-primary btn-block" id="btn-start-recovery-onboarding">
            Start Your 30-Day Recovery Video Course →
          </a>
          <button type="button" class="btn btn-secondary btn-block btn-sm" id="btn-close-order-modal">
            Close & Return to Store
          </button>
        </div>

      </div>
    </div>
  `;
}

export function initOrderConfirmationModal() {
  const modal = document.getElementById('order-confirmation-modal');
  const orderIdElem = document.getElementById('confirm-order-id');
  const trackingElem = document.getElementById('confirm-tracking-num');
  const deliveryDateElem = document.getElementById('confirm-delivery-date');
  const closeBtn = document.getElementById('btn-close-order-modal');
  const onboardingBtn = document.getElementById('btn-start-recovery-onboarding');
  const receiptBtn = document.getElementById('btn-download-receipt');

  let currentOrder = null;

  window.addEventListener('evminov_order_placed', (e) => {
    currentOrder = e.detail;
    if (orderIdElem) orderIdElem.textContent = `Order ${currentOrder.orderId}`;
    if (trackingElem) trackingElem.textContent = currentOrder.upsTracking;
    if (deliveryDateElem) deliveryDateElem.textContent = currentOrder.deliveryDate;

    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    }
  });

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (onboardingBtn) onboardingBtn.addEventListener('click', closeModal);
  
  if (receiptBtn) {
    receiptBtn.addEventListener('click', () => {
      if (!currentOrder) return;

      const itemsListText = (currentOrder.items || [])
        .map((it) => `  - ${it.name} (${it.finish}, ${it.shippingLabel}) x${it.quantity} @ ${formatUSD(it.price)} = ${formatUSD(it.price * it.quantity)}`)
        .join('\n');

      const receiptText = `================================================================================
EVMINOV SPINE SYSTEMS LLC — ITEMIZED MEDICAL RECEIPT & CLAIM ATTACHMENT
Durable Medical Equipment (DME) — Mechanical Spinal Traction Apparatus
================================================================================

ORDER INFORMATION:
Order ID:               ${currentOrder.orderId}
Date of Order:          ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
Provider / Merchant:    Evminov Spine Systems LLC
US Logistics Hub:       7539 Claybeck Ave, Burbank, CA 91505, USA
Tax ID / Classification: DME Medical Traction Equipment Provider
Contact Support:        support@evminovusa.com | +1 (818) 555-SPINE

PATIENT / BENEFICIARY INFORMATION:
Customer Name:          ${currentOrder.customerName || 'Patient'}
Contact Email:          ${currentOrder.customerEmail || 'N/A'}

INSURANCE / HSA / FSA CODING & REIMBURSEMENT:
Primary Classification: Durable Medical Equipment (DME)
HCPCS Billing Code:     E0941 (Mechanical Traction Apparatus / Device)
CPT Modality Code:      97012 (Mechanical Spinal Traction Therapy)
Prescription Status:    Over-the-Counter / Letter of Medical Necessity (LOMN) Eligible
Warranty:               10-Year Structural Carpathian Pine Frame Warranty
Trial Period:           60-Day In-Home Clinical Satisfaction Guarantee

PURCHASED LINE ITEMS:
${itemsListText}

FINANCIAL SUMMARY:
Subtotal:               ${formatUSD(currentOrder.total)}
Sales Tax:              $0.00 (DME Medical Device Exemption)
Shipping (UPS Ground):  FREE ($0.00)
Total Amount Paid:      ${formatUSD(currentOrder.total)}
Payment Status:         PAID IN FULL via Stripe Encrypted Processing
UPS Tracking Number:    ${currentOrder.upsTracking}
Estimated Delivery:     ${currentOrder.deliveryDate}

NOTE FOR BENEFIT ADMINISTRATOR:
This receipt serves as itemized proof of purchase for Health Savings Account (HSA),
Flexible Spending Account (FSA), or Health Reimbursement Arrangement (HRA) claims
pursuant to IRS Section 213(d) for durable medical traction equipment.
================================================================================
`;

      const blob = new Blob([receiptText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Evminov-Medical-Receipt-${currentOrder.orderId}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      receiptBtn.textContent = '✓ Medical Receipt Downloaded';
      setTimeout(() => {
        receiptBtn.textContent = '📥 Download Itemized Insurance Receipt (PDF/TXT)';
      }, 3500);
    });
  }
}
