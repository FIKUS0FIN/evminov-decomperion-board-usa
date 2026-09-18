import { authStore } from '../utils/authStore.js';
import { formatUSD } from '../utils/formatters.js';

export function renderPatientPortalPage() {
  const state = authStore.getState();
  const user = state.user;

  if (!state.isLoggedIn || !user) {
    return renderPortalLoginPage();
  }

  const activeTab = state.activeTab || 'overview';

  return `
    <div class="portal-page-container" id="portal-page-root">
      
      <!-- Top Clinical Navigation Bar -->
      <header class="portal-top-bar">
        <div class="portal-bar-left">
          <a href="#" class="portal-brand-logo" id="portal-logo-back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <div class="logo-text-stack">
              <span class="logo-title" style="font-size: 1.0625rem;">Evminov</span>
              <span class="logo-subtitle">Spine <span class="logo-med-tag">Med</span></span>
            </div>
          </a>
          <span class="portal-badge-patient">Official Patient Portal</span>
        </div>

        <div class="portal-bar-right">
          <div class="portal-user-chip">
            <div class="portal-avatar">${user.name.split(' ').map(n => n[0]).join('')}</div>
            <div class="portal-user-meta desktop-only">
              <span class="portal-user-name">${user.name}</span>
              <span class="portal-user-role">Verified Patient</span>
            </div>
          </div>

          <a href="#" class="btn btn-secondary btn-sm portal-return-store-btn" id="portal-return-store">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m15 18-6-6 6-6"/></svg>
            <span>Back to Storefront</span>
          </a>

          <button type="button" class="portal-logout-btn" id="portal-logout-btn" title="Sign Out">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            <span class="desktop-only">Sign Out</span>
          </button>
        </div>
      </header>

      <!-- Main Portal Layout -->
      <div class="portal-main-layout">
        
        <!-- Sidebar Navigation -->
        <aside class="portal-sidebar" aria-label="Portal Navigation">
          <nav class="portal-nav-menu">
            <button type="button" class="portal-nav-item ${activeTab === 'overview' ? 'active' : ''}" data-portal-tab="overview">
              <span class="portal-tab-icon">📊</span>
              <span class="portal-tab-text">Dashboard Overview</span>
            </button>
            <button type="button" class="portal-nav-item ${activeTab === 'products' ? 'active' : ''}" data-portal-tab="products">
              <span class="portal-tab-icon">📦</span>
              <span class="portal-tab-text">My Equipment & Warranty</span>
              <span class="portal-tab-badge">${user.products ? user.products.length : 1}</span>
            </button>
            <button type="button" class="portal-nav-item ${activeTab === 'orders' ? 'active' : ''}" data-portal-tab="orders">
              <span class="portal-tab-icon">🚚</span>
              <span class="portal-tab-text">Orders & UPS Tracking</span>
              <span class="portal-tab-badge active-live">Live</span>
            </button>
            <button type="button" class="portal-nav-item ${activeTab === 'subscriptions' ? 'active' : ''}" data-portal-tab="subscriptions">
              <span class="portal-tab-icon">🔁</span>
              <span class="portal-tab-text">Subscriptions & Auto-Ship</span>
            </button>
            <button type="button" class="portal-nav-item ${activeTab === 'payments' ? 'active' : ''}" data-portal-tab="payments">
              <span class="portal-tab-icon">💳</span>
              <span class="portal-tab-text">Payments & DME Receipts</span>
            </button>
            <button type="button" class="portal-nav-item ${activeTab === 'course' ? 'active' : ''}" data-portal-tab="course">
              <span class="portal-tab-icon">🎓</span>
              <span class="portal-tab-text">30-Day Video Rehab</span>
              <span class="portal-tab-badge">${user.courseProgress ? user.courseProgress.completedLessonIds.length : 3}/30</span>
            </button>
            <button type="button" class="portal-nav-item ${activeTab === 'biometrics' ? 'active' : ''}" data-portal-tab="biometrics">
              <span class="portal-tab-icon">📐</span>
              <span class="portal-tab-text">Spine Biometrics (${user.savedAngle || 18}°)</span>
            </button>
            <button type="button" class="portal-nav-item ${activeTab === 'messages' ? 'active' : ''}" data-portal-tab="messages">
              <span class="portal-tab-icon">💬</span>
              <span class="portal-tab-text">Clinic & PT Chat</span>
              <span class="portal-tab-badge" style="background: #10B981; color: #fff;">Online</span>
            </button>
          </nav>

          <!-- Support Card in Sidebar -->
          <div class="portal-sidebar-support">
            <div class="support-title">California Clinical Hub</div>
            <p>Direct patient support from Burbank, CA warehouse & medical team.</p>
            <div class="support-tel">📞 +1 (818) 555-7746</div>
            <div class="support-hours">Mon–Fri: 8am–6pm PST</div>
          </div>
        </aside>

        <!-- Main Dynamic Tab Workspace -->
        <main class="portal-workspace" id="portal-workspace-content">
          ${renderTabContent(activeTab, user)}
        </main>

      </div>

    </div>
  `;
}

function renderPortalLoginPage() {
  return `
    <div class="portal-login-screen">
      <div class="portal-login-card">
        
        <div class="login-header">
          <div class="site-logo" style="justify-content: center; margin-bottom: 12px;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <div class="logo-text-stack" style="text-align: left;">
              <span class="logo-title" style="font-size: 1.25rem;">Evminov</span>
              <span class="logo-subtitle">Spine <span class="logo-med-tag">Med</span></span>
            </div>
          </div>
          <h2>Evminov Patient Portal</h2>
          <p>Access your equipment warranties, live UPS tracking, subscriptions, and clinical rehab protocols.</p>
        </div>

        <!-- 1-Click Demo Login Button for Kostya Evminov -->
        <div class="demo-access-box">
          <span class="demo-tag">Stakeholder / Demonstration Access</span>
          <button type="button" class="btn btn-primary btn-block btn-demo-login" id="btn-login-demo-page">
            <span>⚡ 1-Click Demo Login (Kostya Evminov)</span>
          </button>
          <p style="font-size: 0.75rem; color: #047857; margin-top: 6px; text-align: center;">
            Loads verified serial number, live UPS tracking from Burbank, and 10-year warranty.
          </p>
        </div>

        <div class="or-divider" style="margin: 20px 0;">
          <span>or sign in with email</span>
        </div>

        <!-- Email Login Form -->
        <form class="portal-login-form" id="portal-page-login-form">
          <div class="form-group">
            <label for="portal-email-input">Patient / Account Email:</label>
            <input 
              type="email" 
              id="portal-email-input" 
              class="form-input" 
              placeholder="e.g. kostya@evminov.com" 
              required 
            />
          </div>
          <button type="submit" class="btn btn-secondary btn-block" style="margin-top: 10px;">
            Continue to Patient Portal
          </button>
        </form>

        <div style="margin-top: 24px; text-align: center;">
          <a href="#" class="return-store-link" id="login-return-store">
            ← Return to Evminov Storefront
          </a>
        </div>

        <div class="login-trust-footer">
          <span>🔒 256-Bit TLS Encryption</span>
          <span>•</span>
          <span>HIPAA Pre-Tax DME Compliant</span>
          <span>•</span>
          <span>US Patent № 28849A</span>
        </div>

      </div>
    </div>
  `;
}

function renderTabContent(activeTab, user) {
  switch (activeTab) {
    case 'overview':
      return renderOverviewTab(user);
    case 'products':
      return renderProductsTab(user);
    case 'orders':
      return renderOrdersTab(user);
    case 'subscriptions':
      return renderSubscriptionsTab(user);
    case 'payments':
      return renderPaymentsTab(user);
    case 'course':
      return renderCourseTab(user);
    case 'biometrics':
      return renderBiometricsTab(user);
    case 'messages':
      return renderMessagesTab(user);
    default:
      return renderOverviewTab(user);
  }
}

function renderOverviewTab(user) {
  const activeOrder = user.orders && user.orders[0];
  const completedLessons = (user.courseProgress && user.courseProgress.completedLessonIds.length) || 0;
  const progressPct = Math.round((completedLessons / 30) * 100);

  return `
    <div class="tab-pane-container">
      
      <!-- Patient Welcome Banner -->
      <div class="patient-welcome-banner">
        <div class="welcome-left">
          <div class="welcome-badge">Active Spine Health Member</div>
          <h1>Welcome back, ${user.name}</h1>
          <p>Serial Number: <strong>${user.serialNumber}</strong> • Registered at Burbank, CA Facility • 10-Year Warranty Active</p>
        </div>
        <div class="welcome-right">
          <button type="button" class="btn btn-sm btn-primary" id="btn-quick-continue-rehab">
            <span>Continue Day ${user.courseProgress ? user.courseProgress.currentDay : 4} Video Routine</span>
          </button>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="portal-metrics-grid">
        <div class="portal-metric-card">
          <div class="metric-top">
            <span class="metric-label">Prescribed Incline</span>
            <span class="metric-badge-tag">Clinical</span>
          </div>
          <div class="metric-main-value">${user.savedAngle || 18}° Incline</div>
          <div class="metric-sub-note">${user.condition}</div>
        </div>

        <div class="portal-metric-card">
          <div class="metric-top">
            <span class="metric-label">30-Day Rehab Progress</span>
            <span class="metric-badge-tag" style="background: #ECFDF5; color: #059669;">${progressPct}% Done</span>
          </div>
          <div class="metric-main-value">${completedLessons} / 30 Lessons</div>
          <div class="metric-sub-note">Streak: ${user.courseProgress ? user.courseProgress.streakDays : 4} days in a row</div>
        </div>

        <div class="portal-metric-card">
          <div class="metric-top">
            <span class="metric-label">Equipment Warranty</span>
            <span class="metric-badge-tag" style="background: #FEF3C7; color: #B45309;">10-Year Active</span>
          </div>
          <div class="metric-main-value">EVM-2026-US-8921</div>
          <div class="metric-sub-note">Expires September 2036</div>
        </div>

        <div class="portal-metric-card">
          <div class="metric-top">
            <span class="metric-label">Next Auto-Ship / Delivery</span>
            <span class="metric-badge-tag">Scheduled</span>
          </div>
          <div class="metric-main-value">March 14, 2027</div>
          <div class="metric-sub-note">Glisson replacement liners ($24)</div>
        </div>
      </div>

      <!-- Two-Column Overview Content -->
      <div class="portal-two-column-grid">
        
        <!-- Left Column: Active Order & UPS Tracking -->
        <div class="portal-card">
          <div class="portal-card-header">
            <div class="card-title-group">
              <span class="card-icon">🚚</span>
              <h3>Active Delivery Tracking</h3>
            </div>
            <button type="button" class="text-link-btn" data-portal-tab="orders">View All Orders →</button>
          </div>

          ${activeOrder ? `
            <div class="order-overview-body">
              <div class="order-meta-line">
                <span>Order <strong>#${activeOrder.orderId}</strong></span>
                <span>Dispatched: ${activeOrder.date}</span>
              </div>

              <!-- 4-step progress bar -->
              <div class="ups-progress-track">
                <div class="progress-step ${activeOrder.currentStep >= 0 ? 'completed' : ''}">
                  <div class="step-dot">✓</div>
                  <span class="step-label">Placed</span>
                </div>
                <div class="progress-line ${activeOrder.currentStep >= 1 ? 'completed' : ''}"></div>
                <div class="progress-step ${activeOrder.currentStep >= 1 ? 'completed' : ''}">
                  <div class="step-dot">✓</div>
                  <span class="step-label">Burbank Sorted</span>
                </div>
                <div class="progress-line ${activeOrder.currentStep >= 2 ? 'completed' : ''}"></div>
                <div class="progress-step ${activeOrder.currentStep >= 2 ? 'completed' : ''}">
                  <div class="step-dot">🚚</div>
                  <span class="step-label">In Transit</span>
                </div>
                <div class="progress-line ${activeOrder.currentStep >= 3 ? 'completed' : ''}"></div>
                <div class="progress-step ${activeOrder.currentStep >= 3 ? 'completed' : ''}">
                  <div class="step-dot">4</div>
                  <span class="step-label">Delivery</span>
                </div>
              </div>

              <div class="tracking-summary-box">
                <div>
                  <span style="font-size: 0.75rem; color: var(--color-text-muted);">UPS Tracking Number:</span>
                  <div style="font-family: var(--font-mono); font-weight: 700; color: var(--color-pine-emerald);">${activeOrder.upsTracking}</div>
                </div>
                <div style="text-align: right;">
                  <span style="font-size: 0.75rem; color: var(--color-text-muted);">Estimated Delivery:</span>
                  <div style="font-weight: 700; color: var(--color-primary-navy);">${activeOrder.estimatedDelivery}</div>
                </div>
              </div>
            </div>
          ` : `<p>No recent orders found.</p>`}
        </div>

        <!-- Right Column: Direct Clinic Chat Snippet -->
        <div class="portal-card">
          <div class="portal-card-header">
            <div class="card-title-group">
              <span class="card-icon">💬</span>
              <h3>Clinical Support & PT Chat</h3>
            </div>
            <button type="button" class="text-link-btn" data-portal-tab="messages">Open Full Chat →</button>
          </div>

          <div class="chat-snippet-box">
            <div class="chat-bubble clinic-bubble">
              <div class="bubble-header">
                <strong>Dr. Olena Kravchenko, PT</strong>
                <span>Sept 15 • 4:45 PM</span>
              </div>
              <p>At 18°, you achieve approximately 48-52 lbs of net physiological axial traction with -110 mmHg disc vacuum. Keep up the consistent 12-minute daily sessions!</p>
            </div>
          </div>

          <div style="margin-top: 16px;">
            <button type="button" class="btn btn-secondary btn-block btn-sm" data-portal-tab="messages">
              Message Physical Therapy Team
            </button>
          </div>
        </div>

      </div>

    </div>
  `;
}

function renderProductsTab(user) {
  const productsList = user.products || [];

  return `
    <div class="tab-pane-container">
      <div class="pane-header">
        <div>
          <h2>My Equipment & Warranties</h2>
          <p>Manage your registered Evminov orthopedic devices, view structural warranties, and download official manuals.</p>
        </div>
        <button type="button" class="btn btn-secondary btn-sm" id="btn-register-new-device">
          <span>+ Register Additional Equipment</span>
        </button>
      </div>

      <div class="products-portal-grid">
        ${productsList.map(prod => `
          <div class="portal-product-card">
            <div class="product-card-top">
              <span class="registered-badge">Official Registry</span>
              <span class="product-status-tag active">${prod.status}</span>
            </div>

            <h3 class="prod-title">${prod.name}</h3>
            
            <div class="prod-serial-bar">
              <span>Serial Number:</span>
              <strong>${prod.serialNumber}</strong>
            </div>

            <div class="prod-details-grid">
              <div><span>Finish:</span> ${prod.finish}</div>
              <div><span>Capacity:</span> ${prod.capacity}</div>
              <div><span>Registered:</span> ${prod.purchaseDate}</div>
              <div><span>Warranty:</span> <strong>${prod.warranty}</strong></div>
            </div>

            <div class="prod-downloads-row">
              <a href="#" class="prod-download-btn" onclick="alert('Downloading Official Evminov Method Clinical Manual (PDF)...'); return false;">
                <span>📄 User Manual (PDF)</span>
              </a>
              <a href="#" class="prod-download-btn" onclick="alert('Downloading 16-inch Wood Stud Wall Mount Safety Template (PDF)...'); return false;">
                <span>📐 Wall Mount Blueprint</span>
              </a>
              <a href="#" class="prod-download-btn" onclick="alert('Downloading 10-Year Frame Structural Warranty Certificate...'); return false;">
                <span>🛡️ Warranty Certificate</span>
              </a>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Maintenance & Care Note -->
      <div class="hospital-notice-card" style="margin-top: 24px;">
        <div style="font-weight: 700; color: var(--color-primary-navy); margin-bottom: 4px;">
          Carpathian Pine Wood Longevity & Care:
        </div>
        <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.5;">
          Your board is crafted with multi-layer anatomical resonant pine designed to gently flex with user micro-movements. Wipe down with a damp cloth after athletic sessions. Frame joints are rated for 400+ lbs loads and guaranteed for 10 years.
        </p>
      </div>
    </div>
  `;
}

function renderOrdersTab(user) {
  const orders = user.orders || [];

  return `
    <div class="tab-pane-container">
      <div class="pane-header">
        <div>
          <h2>Orders & Live UPS Ground Tracking</h2>
          <p>Real-time telemetry and dispatch status from our Burbank, California logistics center.</p>
        </div>
      </div>

      <div class="orders-list-col">
        ${orders.map(order => `
          <div class="portal-order-full-card">
            <div class="order-top-row">
              <div>
                <span class="order-num-label">Order Reference:</span>
                <span class="order-num-value">#${order.orderId}</span>
              </div>
              <div class="order-date-tag">Placed on ${order.date}</div>
            </div>

            <!-- 4-Step UPS Tracker -->
            <div class="ups-interactive-tracker">
              <div class="tracker-header">
                <span style="font-weight: 700; color: var(--color-primary-navy);">🚚 ${order.status}</span>
                <span class="ups-badge">UPS GROUND EXPRESS</span>
              </div>

              <div class="ups-progress-track">
                <div class="progress-step ${order.currentStep >= 0 ? 'completed' : ''}">
                  <div class="step-dot">✓</div>
                  <span class="step-label">Order Placed</span>
                </div>
                <div class="progress-line ${order.currentStep >= 1 ? 'completed' : ''}"></div>
                <div class="progress-step ${order.currentStep >= 1 ? 'completed' : ''}">
                  <div class="step-dot">✓</div>
                  <span class="step-label">Burbank CA Hub</span>
                </div>
                <div class="progress-line ${order.currentStep >= 2 ? 'completed' : ''}"></div>
                <div class="progress-step ${order.currentStep >= 2 ? 'completed' : ''}">
                  <div class="step-dot">🚚</div>
                  <span class="step-label">In Transit</span>
                </div>
                <div class="progress-line ${order.currentStep >= 3 ? 'completed' : ''}"></div>
                <div class="progress-step ${order.currentStep >= 3 ? 'completed' : ''}">
                  <div class="step-dot">4</div>
                  <span class="step-label">Out for Delivery</span>
                </div>
              </div>

              <div class="tracking-details-strip">
                <div>
                  <span style="font-size: 0.75rem; color: var(--color-text-muted);">Tracking Number:</span>
                  <div style="font-family: var(--font-mono); font-weight: 700; color: var(--color-pine-emerald);">${order.upsTracking}</div>
                </div>
                <div>
                  <span style="font-size: 0.75rem; color: var(--color-text-muted);">Dispatch Origin:</span>
                  <div style="font-weight: 600;">${order.facility}</div>
                </div>
                <div>
                  <span style="font-size: 0.75rem; color: var(--color-text-muted);">Estimated Delivery:</span>
                  <div style="font-weight: 700; color: var(--color-primary-navy);">${order.estimatedDelivery}</div>
                </div>
              </div>
            </div>

            <!-- Purchased Items -->
            <div class="order-items-breakdown">
              <span class="items-heading">Shipped Medical Devices:</span>
              <div class="items-list">
                ${order.items.map(item => `
                  <div class="order-item-row">
                    <div>
                      <strong>${item.name}</strong>
                      <div style="font-size: 0.8125rem; color: var(--color-text-muted);">${item.finish || 'Standard Finish'} • Qty: ${item.quantity || 1}</div>
                    </div>
                    <div style="font-family: var(--font-mono); font-weight: 700;">$${item.price}</div>
                  </div>
                `).join('')}
              </div>
              <div class="order-total-row">
                <span>Order Total:</span>
                <strong>${formatUSD(order.total)}</strong>
              </div>
            </div>

            <div class="order-actions-row">
              <button type="button" class="btn btn-secondary btn-sm" onclick="alert('Downloading Itemized DME Receipt for Order ${order.orderId} (HCPCS E0941)...')">
                <span>📄 Download DME Receipt</span>
              </button>
              <button type="button" class="btn btn-secondary btn-sm" onclick="alert('Opening official UPS Tracking window for ${order.upsTracking}...')">
                <span>🔗 Track on UPS.com</span>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSubscriptionsTab(user) {
  const subs = user.subscriptions || [];

  return `
    <div class="tab-pane-container">
      <div class="pane-header">
        <div>
          <h2>Subscriptions & Auto-Ship Replenishment</h2>
          <p>Control recurring deliveries, hygiene strap auto-replenishment, and video masterclass access.</p>
        </div>
      </div>

      <div class="subs-grid">
        ${subs.map(sub => `
          <div class="portal-card subscription-card">
            <div class="sub-top-row">
              <span class="badge ${sub.status === 'Active' ? 'badge-pine' : 'badge-navy'}">${sub.status}</span>
              <span class="sub-price">${sub.price}</span>
            </div>

            <h3 class="sub-title">${sub.name}</h3>
            <p class="sub-desc">${sub.description}</p>

            <div class="sub-meta-box">
              <div><strong>Cadence:</strong> ${sub.cadence}</div>
              <div><strong>Next Billing Date:</strong> ${sub.nextBilling}</div>
              <div><strong>Payment Method:</strong> ${sub.paymentMethod}</div>
            </div>

            <div class="sub-actions-row">
              ${sub.status === 'Active' ? `
                <button type="button" class="btn btn-secondary btn-sm btn-pause-sub" data-sub-id="${sub.id}">
                  Pause Delivery
                </button>
              ` : `
                <button type="button" class="btn btn-primary btn-sm btn-resume-sub" data-sub-id="${sub.id}">
                  Resume Delivery
                </button>
              `}
              <button type="button" class="btn btn-secondary btn-sm" onclick="alert('Frequency adjusted: now every 3 months.');">
                Change Frequency
              </button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Add New Subscription Box -->
      <div class="portal-card" style="margin-top: 24px; background: #F8FAFC;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          <div>
            <h4 style="font-size: 1.0625rem; font-weight: 800; color: var(--color-primary-navy);">Looking for additional replacement straps or cushions?</h4>
            <p style="font-size: 0.875rem; color: var(--color-text-muted);">Add automatic 6-month Glisson padding replacement kits to keep clinical hygiene at 100%.</p>
          </div>
          <a href="#catalog" class="btn btn-secondary btn-sm">Explore Accessories</a>
        </div>
      </div>
    </div>
  `;
}

function renderPaymentsTab(user) {
  const pms = user.paymentMethods || [];
  const billingHistory = user.billingHistory || [];

  return `
    <div class="tab-pane-container">
      <div class="pane-header">
        <div>
          <h2>Payments, Billing & HSA/FSA Receipts</h2>
          <p>Manage payment methods, download itemized insurance receipts, and process pre-tax healthcare reimbursements.</p>
        </div>
        <button type="button" class="btn btn-secondary btn-sm" id="btn-add-payment-method">
          <span>+ Add Payment Method</span>
        </button>
      </div>

      <!-- Saved Cards Grid -->
      <div class="payments-grid">
        ${pms.map(pm => `
          <div class="portal-card payment-method-card ${pm.isDefault ? 'default-card' : ''}">
            <div class="pm-top-row">
              <span class="pm-brand">${pm.brand} •••• ${pm.last4}</span>
              ${pm.isDefault ? '<span class="default-pill">Default</span>' : ''}
            </div>
            
            <div class="pm-body">
              <div><strong>Type:</strong> ${pm.type}</div>
              <div><strong>Expires:</strong> ${pm.expiry}</div>
              <div style="font-size: 0.8125rem; color: var(--color-text-muted); margin-top: 4px;">${pm.billingAddress}</div>
            </div>

            <div class="pm-actions">
              ${!pm.isDefault ? `
                <button type="button" class="text-link-btn btn-set-default-pm" data-pm-id="${pm.id}">Set as Default</button>
                <button type="button" class="text-link-btn text-danger btn-remove-pm" data-pm-id="${pm.id}">Remove</button>
              ` : `
                <span style="font-size: 0.75rem; color: var(--color-pine-emerald); font-weight: 700;">Active Primary Card</span>
              `}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- HSA / FSA Pre-Tax Reimbursement Center -->
      <div class="portal-card hsa-fsa-banner" style="margin-top: 24px;">
        <div class="hsa-fsa-content">
          <span class="badge badge-pine" style="margin-bottom: 8px;">IRS Section 213(d) Eligible</span>
          <h3>HSA / FSA Pre-Tax Reimbursement Package</h3>
          <p>
            The Evminov Spine Decompression Board qualifies as Durable Medical Equipment (DME). Download your official itemized receipt containing FDA Class I classification, HCPCS code <strong>E0941</strong>, and CPT traction code <strong>97012</strong>.
          </p>
          <div class="hsa-actions-row">
            <button type="button" class="btn btn-primary btn-sm" onclick="alert('Downloading Itemized DME Receipt (PDF)...')">
              <span>📄 Download Itemized DME Receipt</span>
            </button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="alert('Downloading Physician Letter of Medical Necessity Template (PDF)...')">
              <span>📋 Doctor Letter of Medical Necessity Form</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Billing History Table -->
      <div class="portal-card" style="margin-top: 24px;">
        <div class="portal-card-header">
          <h3>Billing History & Invoices</h3>
        </div>
        <div class="comparison-wrapper" style="box-shadow: none; border-radius: var(--radius-md);">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${billingHistory.map(b => `
                <tr>
                  <td style="font-family: var(--font-mono); font-weight: 700;">${b.id}</td>
                  <td>${b.date}</td>
                  <td>${b.description}</td>
                  <td style="font-family: var(--font-mono); font-weight: 700;">${formatUSD(b.amount)}</td>
                  <td><span class="badge badge-pine">${b.status}</span></td>
                  <td>
                    <button type="button" class="text-link-btn" onclick="alert('Downloading invoice PDF for ${b.id}...')">
                      Download PDF
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

function renderCourseTab(user) {
  const completedIds = (user.courseProgress && user.courseProgress.completedLessonIds) || [];

  const phases = [
    {
      title: 'Phase 1: Gentle Axial Unloading & Decompression (Days 1–7)',
      description: 'Zero axial strain. Calibrated incline at 8°–18°. Gentle oscillatory stretching to rehydrate discs without reflex spasm.',
      lessons: [
        { id: 'day-1', title: 'Day 1: Safe Board Mounting & Supine Respiration Reset', time: '10 min', angle: '12°' },
        { id: 'day-2', title: 'Day 2: Pelvic Clock Unloading & Intervertebral Hydration', time: '12 min', angle: '15°' },
        { id: 'day-3', title: 'Day 3: Glisson Cervical Sling Alignment & Neck Lordosis', time: '14 min', angle: '15°' },
        { id: 'day-4', title: 'Day 4: Deep Psoas Release & Lumbar Spine Neutralization', time: '15 min', angle: '18°' },
        { id: 'day-5', title: 'Day 5: Gentle Bilateral Hip Oscillations', time: '12 min', angle: '18°' },
        { id: 'day-6', title: 'Day 6: Hamstring Nerve Flossing on Inclined Plane', time: '14 min', angle: '18°' },
        { id: 'day-7', title: 'Day 7: Phase 1 Clinical Check-in & Remission Assessment', time: '15 min', angle: '18°' },
      ]
    },
    {
      title: 'Phase 2: Deep Multifidus Re-education (Days 8–15)',
      description: 'Strengthening the deep segmental spinal stabilisers under continuous gentle traction.',
      lessons: [
        { id: 'day-8', title: 'Day 8: Deep Multifidus Activation without Shearing Force', time: '15 min', angle: '20°' },
        { id: 'day-9', title: 'Day 9: Transverse Abdominis Bracing in Decompression', time: '15 min', angle: '20°' },
        { id: 'day-10', title: 'Day 10: Thoracic Extension & Scapular Retraction', time: '16 min', angle: '22°' },
        { id: 'day-11', title: 'Day 11: Sciatic Nerve Path Release Routine', time: '15 min', angle: '22°' },
        { id: 'day-12', title: 'Day 12: Prone Incline Lumbar Spine Decompression', time: '18 min', angle: '20°' },
      ]
    },
    {
      title: 'Phase 3: Rotational & Anti-Spasm Resilience (Days 16–23)',
      description: 'Gradual small-amplitude rotations to restore disc flexibility and collagen fibers.',
      lessons: [
        { id: 'day-16', title: 'Day 16: Micro-Rotations of L4-S1 in Controlled Traction', time: '18 min', angle: '24°' },
        { id: 'day-18', title: 'Day 18: Quadruped Incline Arm-Leg Extension', time: '20 min', angle: '24°' },
        { id: 'day-20', title: 'Day 20: Piriformis Decompression & Sacroiliac Reset', time: '18 min', angle: '24°' },
      ]
    },
    {
      title: 'Phase 4: Full Athletic Spine Shield & Maintenance (Days 24–30)',
      description: 'Long-term maintenance protocol for heavy lifters, desk workers, and active runners.',
      lessons: [
        { id: 'day-25', title: 'Day 25: Post-Workout Compressive Reversal Protocol', time: '12 min', angle: '28°' },
        { id: 'day-28', title: 'Day 28: Inverted Glisson Neck Resistance Program', time: '14 min', angle: '20°' },
        { id: 'day-30', title: 'Day 30: Lifetime 7-Minute Daily Maintenance Ritual', time: '10 min', angle: '18°' },
      ]
    }
  ];

  return `
    <div class="tab-pane-container">
      <div class="pane-header">
        <div>
          <h2>30-Day Guided Video Rehabilitation Course</h2>
          <p>Follow the certified Evminov clinical protocol to eliminate herniation symptoms, decompress nerves, and build muscular spine resilience.</p>
        </div>
      </div>

      <div class="course-phases-col">
        ${phases.map((phase, pIdx) => `
          <div class="portal-card phase-card">
            <div class="phase-header">
              <h3>${phase.title}</h3>
              <p>${phase.description}</p>
            </div>

            <div class="lessons-table">
              ${phase.lessons.map(lesson => {
                const isCompleted = completedIds.includes(lesson.id);
                return `
                  <div class="lesson-row ${isCompleted ? 'lesson-done' : ''}">
                    <label class="lesson-check-wrap">
                      <input 
                        type="checkbox" 
                        class="portal-lesson-chk" 
                        data-lesson-id="${lesson.id}" 
                        ${isCompleted ? 'checked' : ''}
                      />
                      <span class="custom-chk-mark"></span>
                    </label>

                    <div class="lesson-info">
                      <span class="lesson-title">${lesson.title}</span>
                      <div class="lesson-meta-chips">
                        <span>⏱️ ${lesson.time}</span>
                        <span>📐 ${lesson.angle}</span>
                        <span>HD Video Included</span>
                      </div>
                    </div>

                    <button type="button" class="btn btn-secondary btn-sm btn-play-lesson" onclick="alert('Opening clinical video stream for ${lesson.title}...')">
                      ▶ Watch Routine
                    </button>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderBiometricsTab(user) {
  const angle = user.savedAngle || 18;
  const weight = user.savedWeight || 185;

  return `
    <div class="tab-pane-container">
      <div class="pane-header">
        <div>
          <h2>Spine Biometrics & Prescribed Telemetry</h2>
          <p>Review real-time biomechanical vectors calibrated to your body weight and disc hydration targets.</p>
        </div>
      </div>

      <div class="biometrics-portal-grid">
        
        <!-- Live Calibration Box -->
        <div class="portal-card">
          <div class="portal-card-header">
            <h3>Traction Angle Prescription</h3>
          </div>

          <form id="portal-biometrics-form" style="display: flex; flex-direction: column; gap: 18px; margin-top: 10px;">
            <div class="form-group">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <label for="portal-angle-input" style="font-weight: 700;">Prescribed Incline Angle:</label>
                <span class="calc-value-badge" id="portal-angle-val">${angle}° Incline</span>
              </div>
              <input 
                type="range" 
                id="portal-angle-input" 
                class="calc-slider" 
                min="8" 
                max="40" 
                value="${angle}" 
                step="1"
              />
              <div class="calc-sub-range">
                <span>8° Acute Relief</span>
                <span>18° Clinical Ideal</span>
                <span>40° Deep Incline</span>
              </div>
            </div>

            <div class="form-group">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <label for="portal-weight-input" style="font-weight: 700;">Patient Body Weight:</label>
                <span class="calc-value-badge" id="portal-weight-val">${weight} lbs</span>
              </div>
              <input 
                type="range" 
                id="portal-weight-input" 
                class="calc-slider" 
                min="100" 
                max="320" 
                value="${weight}" 
                step="5"
              />
              <div class="calc-sub-range">
                <span>100 lbs</span>
                <span>320 lbs</span>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-sm" style="margin-top: 8px;">
              💾 Save Updated Biometrics
            </button>
          </form>
        </div>

        <!-- Biomechanical Vector Readouts -->
        <div class="portal-card">
          <div class="portal-card-header">
            <h3>Calculated Physiological Forces</h3>
          </div>

          <div class="forces-stats-col" style="display: flex; flex-direction: column; gap: 14px; margin-top: 10px;">
            <div class="force-stat-item">
              <div>
                <strong style="color: var(--color-primary-navy);">Axial Traction Pull ($F_t$)</strong>
                <p style="font-size: 0.8125rem; color: var(--color-text-muted);">Elongates spinal vertebrae without reflex muscle contracture</p>
              </div>
              <div style="font-family: var(--font-mono); font-size: 1.5rem; font-weight: 800; color: var(--color-traction-cyan);">
                ${Math.round(weight * Math.sin((angle * Math.PI) / 180))} lbs
              </div>
            </div>

            <div class="force-stat-item">
              <div>
                <strong style="color: var(--color-primary-navy);">Intradiscal Vacuum Suction</strong>
                <p style="font-size: 0.8125rem; color: var(--color-text-muted);">Creates negative pressure to retract herniated nucleus pulposus</p>
              </div>
              <div style="font-family: var(--font-mono); font-size: 1.5rem; font-weight: 800; color: var(--color-pine-emerald);">
                ${Math.round(-30 - (angle / 45) * 115)} mmHg
              </div>
            </div>

            <div class="force-stat-item">
              <div>
                <strong style="color: var(--color-primary-navy);">Target Intervertebral Elongation</strong>
                <p style="font-size: 0.8125rem; color: var(--color-text-muted);">Measured height increase across L1–S1 disc spaces</p>
              </div>
              <div style="font-family: var(--font-mono); font-size: 1.5rem; font-weight: 800; color: #047857;">
                +${(1.0 + (angle / 45) * 2.2).toFixed(1)} mm
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;
}

function renderMessagesTab(user) {
  const msgs = user.messages || [];

  return `
    <div class="tab-pane-container">
      <div class="pane-header">
        <div>
          <h2>Direct Physical Therapist & Store Communication</h2>
          <p>Encrypted clinical consultation with certified Evminov method physical therapists and our Burbank, CA staff.</p>
        </div>
      </div>

      <div class="portal-card chat-full-workspace">
        
        <div class="chat-thread-messages" id="portal-chat-thread">
          ${msgs.map(m => `
            <div class="chat-message-row ${m.sender === 'patient' ? 'msg-patient' : 'msg-clinic'}">
              <div class="msg-avatar">${m.sender === 'patient' ? 'KE' : '🩺'}</div>
              <div class="msg-bubble-content">
                <div class="msg-header-line">
                  <span class="msg-author-name">${m.author}</span>
                  <span class="msg-time">${m.time}</span>
                </div>
                <p class="msg-text-body">${m.text}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <form class="chat-input-bar" id="portal-chat-form">
          <input 
            type="text" 
            id="portal-chat-input" 
            class="form-input" 
            placeholder="Type your message or question for Dr. Olena Kravchenko..." 
            autocomplete="off" 
            required 
          />
          <button type="submit" class="btn btn-primary" id="portal-send-msg-btn">
            <span>Send Message</span>
          </button>
        </form>

      </div>
    </div>
  `;
}

export function initPatientPortalPage() {
  // Navigation Tabs
  document.querySelectorAll('[data-portal-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.getAttribute('data-portal-tab');
      authStore.setActiveTab(tab);
      const workspace = document.getElementById('portal-workspace-content');
      if (workspace) {
        workspace.innerHTML = renderTabContent(tab, authStore.getState().user);
        initWorkspaceListeners();
      }
      // Update sidebar active buttons
      document.querySelectorAll('.portal-nav-item').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-portal-tab') === tab);
      });
    });
  });

  // Logout button
  const logoutBtn = document.getElementById('portal-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      authStore.logout();
      window.location.hash = '';
    });
  }

  // Back to store buttons
  ['portal-return-store', 'portal-logo-back', 'login-return-store'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '#catalog';
      });
    }
  });

  // Demo login button on login screen
  const demoLoginBtn = document.getElementById('btn-login-demo-page');
  if (demoLoginBtn) {
    demoLoginBtn.addEventListener('click', () => {
      authStore.loginAsDemo();
      // Re-render portal page
      const app = document.getElementById('app');
      if (app) {
        app.innerHTML = renderPatientPortalPage();
        initPatientPortalPage();
      }
    });
  }

  // Email form login
  const loginForm = document.getElementById('portal-page-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('portal-email-input');
      if (input && input.value) {
        authStore.login(input.value);
        const app = document.getElementById('app');
        if (app) {
          app.innerHTML = renderPatientPortalPage();
          initPatientPortalPage();
        }
      }
    });
  }

  initWorkspaceListeners();
}

function initWorkspaceListeners() {
  // 30-Day Rehab Lesson checkboxes
  document.querySelectorAll('.portal-lesson-chk').forEach(chk => {
    chk.addEventListener('change', () => {
      const lessonId = chk.getAttribute('data-lesson-id');
      authStore.toggleLessonComplete(lessonId);
      chk.closest('.lesson-row')?.classList.toggle('lesson-done', chk.checked);
    });
  });

  // Pause / Resume Subscriptions
  document.querySelectorAll('.btn-pause-sub').forEach(btn => {
    btn.addEventListener('click', () => {
      const subId = btn.getAttribute('data-sub-id');
      authStore.updateSubscriptionStatus(subId, 'Paused');
      authStore.setActiveTab('subscriptions');
      refreshWorkspace('subscriptions');
    });
  });

  document.querySelectorAll('.btn-resume-sub').forEach(btn => {
    btn.addEventListener('click', () => {
      const subId = btn.getAttribute('data-sub-id');
      authStore.updateSubscriptionStatus(subId, 'Active');
      authStore.setActiveTab('subscriptions');
      refreshWorkspace('subscriptions');
    });
  });

  // Remove Payment Method
  document.querySelectorAll('.btn-remove-pm').forEach(btn => {
    btn.addEventListener('click', () => {
      const pmId = btn.getAttribute('data-pm-id');
      authStore.removePaymentMethod(pmId);
      refreshWorkspace('payments');
    });
  });

  // Set Default Payment Method
  document.querySelectorAll('.btn-set-default-pm').forEach(btn => {
    btn.addEventListener('click', () => {
      const pmId = btn.getAttribute('data-pm-id');
      authStore.setDefaultPaymentMethod(pmId);
      refreshWorkspace('payments');
    });
  });

  // Add Payment Method Button
  const addPmBtn = document.getElementById('btn-add-payment-method');
  if (addPmBtn) {
    addPmBtn.addEventListener('click', () => {
      const last4 = prompt('Enter 4-digit card number for demo card:', '5521');
      if (last4) {
        authStore.addPaymentMethod({
          brand: 'Visa',
          last4: last4,
          expiry: '10/29',
          isDefault: true,
        });
        refreshWorkspace('payments');
      }
    });
  }

  // Register New Device Button
  const registerBtn = document.getElementById('btn-register-new-device');
  if (registerBtn) {
    registerBtn.addEventListener('click', () => {
      const sn = prompt('Enter your Evminov Board Serial Number:', 'EVM-2026-US-5542');
      if (sn) {
        authStore.registerProduct({
          name: 'Evminov Wide Heavy-Duty Board™',
          serialNumber: sn,
          finish: 'Dark Walnut Stain',
          capacity: 'Up to 330 lbs (150 kg)',
        });
        refreshWorkspace('products');
      }
    });
  }

  // Biometrics Form
  const biometricsForm = document.getElementById('portal-biometrics-form');
  const angleInput = document.getElementById('portal-angle-input');
  const weightInput = document.getElementById('portal-weight-input');
  const angleVal = document.getElementById('portal-angle-val');
  const weightVal = document.getElementById('portal-weight-val');

  if (angleInput) {
    angleInput.addEventListener('input', () => {
      if (angleVal) angleVal.textContent = `${angleInput.value}° Incline`;
    });
  }
  if (weightInput) {
    weightInput.addEventListener('input', () => {
      if (weightVal) weightVal.textContent = `${weightInput.value} lbs`;
    });
  }
  if (biometricsForm) {
    biometricsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (angleInput && weightInput) {
        authStore.saveBiometrics(angleInput.value, weightInput.value);
        alert('Spine biometrics successfully calibrated and saved to your patient record!');
        refreshWorkspace('biometrics');
      }
    });
  }

  // Chat / Messages Form
  const chatForm = document.getElementById('portal-chat-form');
  const chatInput = document.getElementById('portal-chat-input');
  if (chatForm && chatInput) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value;
      if (text.trim()) {
        authStore.sendMessage(text);
        chatInput.value = '';
        refreshWorkspace('messages');
        // Auto scroll
        setTimeout(() => {
          const thread = document.getElementById('portal-chat-thread');
          if (thread) thread.scrollTop = thread.scrollHeight;
        }, 100);
        // Refresh again after automated reply
        setTimeout(() => {
          refreshWorkspace('messages');
        }, 1300);
      }
    });
  }

  // Quick continue rehab button on overview
  const continueBtn = document.getElementById('btn-quick-continue-rehab');
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      authStore.setActiveTab('course');
      refreshWorkspace('course');
      document.querySelectorAll('.portal-nav-item').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-portal-tab') === 'course');
      });
    });
  }
}

function refreshWorkspace(tab) {
  const workspace = document.getElementById('portal-workspace-content');
  if (workspace) {
    workspace.innerHTML = renderTabContent(tab, authStore.getState().user);
    initWorkspaceListeners();
  }
}
