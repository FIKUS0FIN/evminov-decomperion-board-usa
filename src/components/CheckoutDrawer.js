import { cartStore } from '../utils/cartStore.js';
import { formatUSD, formatKlarna } from '../utils/formatters.js';
import { 
  validateCardNumber, 
  detectCardBrand, 
  formatCardNumber, 
  validateExpiry, 
  validateCVV, 
  validateUSZip,
  generateOrderId,
  generateUPSTracking,
  getEstimatedDeliveryDate
} from '../utils/checkoutLogic.js';
import { authStore } from '../utils/authStore.js';

export function renderCheckoutDrawer() {
  return `
    <div class="checkout-overlay" id="checkout-overlay" aria-hidden="true">
      <aside class="checkout-drawer" id="checkout-drawer" role="dialog" aria-modal="true" aria-label="Shopping Cart and Checkout">
        
        <!-- Drawer Header -->
        <div class="drawer-header">
          <div class="drawer-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>Your Order</span>
            <span class="badge badge-pine" id="drawer-item-count-badge" style="font-size: 0.75rem;">0 Items</span>
          </div>
          <button type="button" class="drawer-close-btn" id="drawer-close-btn" aria-label="Close Checkout Drawer">✕</button>
        </div>

        <!-- Drawer Scrollable Body -->
        <div class="drawer-body" id="drawer-body">
          
          <!-- Cart Items Container -->
          <div id="drawer-items-list" class="drawer-cart-list">
            <!-- Dynamic Items -->
          </div>

          <!-- Empty Cart Notice -->
          <div id="drawer-empty-notice" style="text-align: center; padding: 40px 20px; display: none;">
            <div style="font-size: 3rem; margin-bottom: 12px;">🛒</div>
            <h4 style="font-size: 1.125rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 6px;">Your cart is empty</h4>
            <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 20px;">
              Select an Evminov decompression system to start your 60-day home trial.
            </p>
            <a href="#catalog" class="btn btn-primary btn-sm" id="empty-cart-browse-btn">
              Browse Boards ($112/mo)
            </a>
          </div>

          <!-- Checkout Content (Hidden when empty) -->
          <div id="drawer-checkout-flow">
            
            <!-- Express Checkout (Apple Pay & Google Pay) -->
            <div class="express-checkout-box">
              <div class="express-label">Express Checkout (1-Click)</div>
              <button type="button" class="btn-apple-pay" id="btn-express-apple">
                <span>Pay</span>
              </button>
              <button type="button" class="btn-google-pay" id="btn-express-google">
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.01 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>
                <span>Google Pay</span>
              </button>
            </div>

            <div class="or-divider" style="margin: 16px 0;">
              <span>or pay with credit card</span>
            </div>

            <!-- Klarna Installment Banner -->
            <div class="klarna-pill" style="margin-bottom: 16px;">
              <div>
                <span class="klarna-tag">KLARNA</span>
                <span style="font-weight: 700; color: var(--color-primary-navy); margin-left: 6px;">
                  Pay 4x <span id="drawer-klarna-amount">$112.50</span>
                </span>
                <div style="font-size: 0.75rem; color: var(--color-text-muted);">
                  Interest-free payments every 2 weeks
                </div>
              </div>
              <span style="font-size: 1.25rem;">✨</span>
            </div>

            <!-- Payment & Shipping Form -->
            <form class="checkout-form" id="stripe-mock-form" novalidate>
              
              <!-- Customer Info -->
              <div class="form-group">
                <label for="checkout-email">Contact Email:</label>
                <input 
                  type="email" 
                  id="checkout-email" 
                  class="form-input" 
                  placeholder="john.doe@example.com" 
                  autocomplete="email" 
                  required 
                />
              </div>

              <!-- Shipping Address -->
              <div class="form-group">
                <label for="checkout-name">Full Name (Delivery & Card):</label>
                <input 
                  type="text" 
                  id="checkout-name" 
                  class="form-input" 
                  placeholder="John Doe" 
                  autocomplete="name" 
                  required 
                />
              </div>

              <div class="form-group">
                <label for="checkout-address">US Street Address:</label>
                <input 
                  type="text" 
                  id="checkout-address" 
                  class="form-input" 
                  placeholder="1234 Main St, Apt 4B" 
                  autocomplete="shipping address-line1" 
                  required 
                />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="checkout-city">City:</label>
                  <input 
                    type="text" 
                    id="checkout-city" 
                    class="form-input" 
                    placeholder="Burbank" 
                    autocomplete="shipping address-level2" 
                    required 
                  />
                </div>

                <div class="form-group">
                  <label for="checkout-state">State:</label>
                  <select id="checkout-state" class="form-input" autocomplete="shipping address-level1" required>
                    <option value="CA" selected>California (CA)</option>
                    <option value="TX">Texas (TX)</option>
                    <option value="FL">Florida (FL)</option>
                    <option value="NY">New York (NY)</option>
                    <option value="CO">Colorado (CO)</option>
                    <option value="IL">Illinois (IL)</option>
                    <option value="WA">Washington (WA)</option>
                    <option value="AZ">Arizona (AZ)</option>
                    <option value="OTHER">Other US State</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="checkout-zip">US ZIP Code:</label>
                <input 
                  type="text" 
                  id="checkout-zip" 
                  class="form-input" 
                  placeholder="91505" 
                  maxlength="10" 
                  inputmode="numeric" 
                  autocomplete="postal-code" 
                  required 
                />
                <span id="zip-validation-msg" style="font-size: 0.75rem; color: var(--color-danger); display: none;">
                  Please enter a valid 5-digit US ZIP code
                </span>
              </div>

              <!-- Card Details -->
              <div class="form-group" style="margin-top: 6px;">
                <label for="checkout-card-num">
                  <span>Card Information:</span>
                  <span style="font-weight: normal; color: var(--color-text-muted); font-size: 0.75rem;">
                    Test: 4242 4242 4242 4242
                  </span>
                </label>
                <div class="form-input-card-wrap">
                  <input 
                    type="text" 
                    id="checkout-card-num" 
                    class="form-input" 
                    placeholder="4242 4242 4242 4242" 
                    maxlength="19" 
                    inputmode="numeric" 
                    autocomplete="cc-number" 
                    required 
                  />
                  <span class="card-brand-badge" id="card-brand-icon">💳</span>
                </div>
                <span id="card-validation-msg" style="font-size: 0.75rem; color: var(--color-danger); display: none;">
                  Invalid card number. Please check digits.
                </span>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="checkout-card-exp">Expiry:</label>
                  <input 
                    type="text" 
                    id="checkout-card-exp" 
                    class="form-input" 
                    placeholder="MM/YY" 
                    maxlength="5" 
                    inputmode="numeric" 
                    autocomplete="cc-exp" 
                    required 
                  />
                </div>

                <div class="form-group">
                  <label for="checkout-card-cvv">CVC / CVV:</label>
                  <input 
                    type="text" 
                    id="checkout-card-cvv" 
                    class="form-input" 
                    placeholder="123" 
                    maxlength="4" 
                    inputmode="numeric" 
                    autocomplete="cc-csc" 
                    required 
                  />
                </div>
              </div>

              <div style="background: var(--color-pine-surface); border: 1px solid var(--color-pine-border); border-radius: var(--radius-md); padding: 12px; font-size: 0.8125rem; color: var(--color-pine-emerald); display: flex; gap: 8px;">
                <span>🛡️</span>
                <span><strong>60-Day Risk-Free Guarantee:</strong> Full 100% money-back guarantee with prepaid return shipping if not satisfied.</span>
              </div>

              <!-- Submit Order Button -->
              <button type="submit" class="btn btn-primary btn-block btn-lg" id="submit-payment-btn" style="margin-top: 8px;">
                <span id="submit-btn-text">Authorize & Place Order</span>
              </button>

            </form>

          </div>

        </div>

        <!-- Drawer Footer Summary -->
        <div class="drawer-footer" id="drawer-footer">
          <div class="summary-row">
            <span>Subtotal:</span>
            <span id="drawer-subtotal-val" style="font-family: var(--font-mono); font-weight: 700;">$0.00</span>
          </div>
          <div class="summary-row">
            <span>UPS Ground Insured Shipping:</span>
            <span style="color: var(--color-pine-emerald); font-weight: 700;">FREE ($0.00)</span>
          </div>
          <div class="summary-row">
            <span>Estimated State Tax:</span>
            <span id="drawer-tax-val" style="font-family: var(--font-mono);">$0.00</span>
          </div>
          <div class="summary-row summary-total">
            <span>Total:</span>
            <span id="drawer-total-val" style="color: var(--color-primary-navy);">$0.00</span>
          </div>

          <div class="security-trust-strip">
            <span>🔒 256-Bit SSL Encrypted</span>
            <span>•</span>
            <span>Stripe Verified</span>
            <span>•</span>
            <span>HSA/FSA Invoiced</span>
          </div>
        </div>

      </aside>
    </div>
  `;
}

export function initCheckoutDrawer() {
  const overlay = document.getElementById('checkout-overlay');
  const drawer = document.getElementById('checkout-drawer');
  const closeBtn = document.getElementById('drawer-close-btn');
  const emptyNotice = document.getElementById('drawer-empty-notice');
  const checkoutFlow = document.getElementById('drawer-checkout-flow');
  const drawerBody = document.getElementById('drawer-body') || drawer?.querySelector('.drawer-body');
  const footer = document.getElementById('drawer-footer');
  const itemsList = document.getElementById('drawer-items-list');
  const itemCountBadge = document.getElementById('drawer-item-count-badge');
  
  const subtotalVal = document.getElementById('drawer-subtotal-val');
  const totalVal = document.getElementById('drawer-total-val');
  const klarnaAmount = document.getElementById('drawer-klarna-amount');
  
  const cardInput = document.getElementById('checkout-card-num');
  const cardBrandIcon = document.getElementById('card-brand-icon');
  const cardExpInput = document.getElementById('checkout-card-exp');
  const zipInput = document.getElementById('checkout-zip');
  
  const cardValMsg = document.getElementById('card-validation-msg');
  const zipValMsg = document.getElementById('zip-validation-msg');
  const checkoutForm = document.getElementById('stripe-mock-form');
  const submitBtn = document.getElementById('submit-payment-btn');
  const submitBtnText = document.getElementById('submit-btn-text');

  // Close handlers
  if (closeBtn) closeBtn.addEventListener('click', () => cartStore.closeDrawer());
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) cartStore.closeDrawer();
    });
  }

  // Escape key closes drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      cartStore.closeDrawer();
    }
  });

  // Card formatting & Luhn live check
  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      const formatted = formatCardNumber(e.target.value);
      e.target.value = formatted;
      const brand = detectCardBrand(formatted);
      
      if (cardBrandIcon) {
        if (brand === 'visa') cardBrandIcon.textContent = '💳 VISA';
        else if (brand === 'mastercard') cardBrandIcon.textContent = '💳 MC';
        else if (brand === 'amex') cardBrandIcon.textContent = '💳 AMEX';
        else if (brand === 'discover') cardBrandIcon.textContent = '💳 DISC';
        else cardBrandIcon.textContent = '💳';
      }

      if (formatted.replace(/\s/g, '').length >= 15) {
        const isValid = validateCardNumber(formatted);
        cardValMsg.style.display = isValid ? 'none' : 'block';
      } else {
        cardValMsg.style.display = 'none';
      }
    });
  }

  // Expiry formatting (MM/YY)
  if (cardExpInput) {
    cardExpInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length >= 2) {
        v = v.substring(0, 2) + '/' + v.substring(2, 4);
      }
      e.target.value = v;
    });
  }

  // ZIP Code validation
  if (zipInput) {
    zipInput.addEventListener('blur', () => {
      const isValid = validateUSZip(zipInput.value);
      if (zipValMsg) zipValMsg.style.display = isValid || !zipInput.value ? 'none' : 'block';
    });
  }

  // Subscribe to Cart changes
  cartStore.subscribe((state) => {
    if (overlay) {
      if (state.isDrawerOpen) {
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('cart-drawer-open');
      } else {
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('cart-drawer-open');
      }
    }

    if (itemCountBadge) {
      itemCountBadge.textContent = `${state.count} Item${state.count === 1 ? '' : 's'}`;
    }

    if (state.count === 0) {
      if (emptyNotice) emptyNotice.style.display = 'block';
      if (checkoutFlow) checkoutFlow.style.display = 'none';
      if (footer) footer.style.display = 'none';
      if (itemsList) itemsList.innerHTML = '';
      return;
    }

    if (emptyNotice) emptyNotice.style.display = 'none';
    if (checkoutFlow) checkoutFlow.style.display = 'block';
    if (footer) footer.style.display = 'flex';

    if (subtotalVal) subtotalVal.textContent = formatUSD(state.subtotal);
    if (totalVal) totalVal.textContent = formatUSD(state.subtotal);
    if (klarnaAmount) klarnaAmount.textContent = `$${state.klarnaPayment}`;
    if (submitBtnText) submitBtnText.textContent = `Authorize & Pay ${formatUSD(state.subtotal)}`;

    // Render Items
    if (itemsList) {
      itemsList.innerHTML = state.items
        .map(
          (item) => `
          <div class="drawer-cart-item">
            <img src="${item.image}" alt="${item.name}" class="drawer-item-img" />
            <div class="drawer-item-details">
              <div>
                <div class="drawer-item-name">${item.name}</div>
                <div class="drawer-item-meta">${item.finish} • ${item.shippingLabel}</div>
              </div>
              <div class="drawer-item-price-row">
                <span class="drawer-item-price">${formatUSD(item.price * item.quantity)}</span>
                <div class="drawer-qty-controls">
                  <button type="button" class="drawer-qty-btn cart-qty-minus" data-id="${item.cartItemId}">−</button>
                  <span class="drawer-qty-num">${item.quantity}</span>
                  <button type="button" class="drawer-qty-btn cart-qty-plus" data-id="${item.cartItemId}">+</button>
                </div>
              </div>
            </div>
          </div>
        `
        )
        .join('');

      // Attach Qty Handlers
      itemsList.querySelectorAll('.cart-qty-minus').forEach((b) => {
        b.addEventListener('click', () => {
          cartStore.updateQuantity(b.getAttribute('data-id'), -1);
        });
      });
      itemsList.querySelectorAll('.cart-qty-plus').forEach((b) => {
        b.addEventListener('click', () => {
          cartStore.updateQuantity(b.getAttribute('data-id'), 1);
        });
      });
    }
  });

  // Handle Form Submission (Payment Simulation)
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const cardVal = cardInput ? cardInput.value.replace(/\s/g, '') : '';
      const zipVal = zipInput ? zipInput.value.trim() : '';

      if (!validateCardNumber(cardVal)) {
        if (cardValMsg) cardValMsg.style.display = 'block';
        cardInput.focus();
        return;
      }

      if (!validateUSZip(zipVal)) {
        if (zipValMsg) zipValMsg.style.display = 'block';
        zipInput.focus();
        return;
      }

      // Simulate Stripe Processing
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtnText.textContent = 'Processing with Stripe...';
      }

      setTimeout(() => {
        const currentState = cartStore.getState();
        const orderId = generateOrderId();
        const upsTracking = generateUPSTracking();
        const deliveryDate = getEstimatedDeliveryDate();
        const orderDetail = {
          orderId,
          upsTracking,
          deliveryDate,
          items: currentState.items,
          total: currentState.subtotal,
          customerEmail: document.getElementById('checkout-email').value,
          customerName: document.getElementById('checkout-name').value,
        };

        authStore.addOrder(orderDetail);

        // Trigger confirmation modal
        window.dispatchEvent(
          new CustomEvent('evminov_order_placed', {
            detail: orderDetail,
          })
        );

        cartStore.clearCart();
        cartStore.closeDrawer();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtnText.textContent = 'Authorize & Place Order';
        }
      }, 1200);
    });
  }

  // Express Buttons click simulation
  ['btn-express-apple', 'btn-express-google'].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        btn.innerHTML = '<span>Processing Touch ID / Wallet...</span>';
        setTimeout(() => {
          const currentState = cartStore.getState();
          const orderId = generateOrderId();
          const upsTracking = generateUPSTracking();
          const deliveryDate = getEstimatedDeliveryDate();
          const expressDetail = {
            orderId,
            upsTracking,
            deliveryDate,
            items: currentState.items,
            total: currentState.subtotal,
            customerEmail: 'apple.pay.user@icloud.com',
            customerName: 'Apple Wallet Customer',
          };

          authStore.addOrder(expressDetail);

          window.dispatchEvent(
            new CustomEvent('evminov_order_placed', {
              detail: expressDetail,
            })
          );

          cartStore.clearCart();
          cartStore.closeDrawer();
          btn.innerHTML = id === 'btn-express-apple' ? '<span>Pay</span>' : '<span>Google Pay</span>';
        }, 1000);
      });
    }
  });
}
