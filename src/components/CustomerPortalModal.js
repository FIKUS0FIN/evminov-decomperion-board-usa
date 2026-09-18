import { authStore } from '../utils/authStore.js';
import { formatUSD } from '../utils/formatters.js';

export function renderCustomerPortalModal() {
  return `
    <div class="portal-overlay" id="patient-portal-overlay" aria-hidden="true" role="dialog" aria-modal="true">
      <div class="portal-modal-container" id="patient-portal-modal">
        
        <!-- Portal Header -->
        <div class="portal-header">
          <div class="portal-brand">
            <div class="portal-crest">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 21h10"/><path d="M12 15.5v5.5"/><path d="M5 9.5C5 13.5 8 16 12 16C16 13.5 19 9.5 19 9.5"/><path d="M4 9.5h16"/><path d="M8 19.5C8 19.5 15 19 15 17.5C15 16 9 15.5 9 13.5C9 11.5 13 10.8 16 8.5C18 7 18 4.2 15.2 3.5C12.5 2.8 10.2 4.2 10.8 6.2C11.2 7.5 13 7.6 13 7.6"/></svg>
            </div>
            <div>
              <div class="portal-title">Evminov Patient Portal</div>
              <div class="portal-subtitle">Official Spine Health & Account Management</div>
            </div>
          </div>
          <button type="button" class="portal-close-btn" id="btn-close-portal" aria-label="Close Portal">✕</button>
        </div>

        <!-- Portal Dynamic Content -->
        <div class="portal-body" id="portal-body-content">
          <!-- Rendered dynamically by initCustomerPortal -->
        </div>

      </div>
    </div>
  `;
}

export function initCustomerPortal() {
  const overlay = document.getElementById('patient-portal-overlay');
  const closeBtn = document.getElementById('btn-close-portal');
  const bodyContent = document.getElementById('portal-body-content');

  const closeModal = () => {
    authStore.closePortal();
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  // Subscribe to Auth state changes
  authStore.subscribe((state) => {
    if (!overlay) return;

    if (state.isPortalOpen) {
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
    } else {
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
    }

    if (!bodyContent) return;

    if (!state.isLoggedIn) {
      bodyContent.innerHTML = renderGuestLoginView();
      bindGuestEvents();
    } else {
      bodyContent.innerHTML = renderLoggedInPortalView(state.user, state.activeTab);
      bindLoggedInEvents(state.user, state.activeTab);
    }
  });
}

function renderGuestLoginView() {
  return `
    <div class="portal-guest-box">
      
      <div class="demo-login-callout">
        <div class="demo-badge">⚡ VIP DEMO LOGIN (FOR KOSTYA EVMINOV)</div>
        <h3 style="font-size: 1.125rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 6px;">
          Explore the Full Patient Account & Rehab Course
        </h3>
        <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 16px;">
          Log in with 1-click as a verified patient to preview live UPS tracking, 30-day guided video recovery lessons, and official HSA/FSA medical receipts.
        </p>
        <button type="button" class="btn btn-primary btn-block" id="btn-demo-login">
          <span>Log in as Kostya Evminov (Verified Patient) →</span>
        </button>
      </div>

      <div class="or-divider" style="margin: 24px 0;">
        <span>or sign in with your order email</span>
      </div>

      <form id="portal-email-login-form" class="portal-form">
        <div class="form-group">
          <label for="portal-input-email" style="font-size: 0.8125rem; font-weight: 700; color: var(--color-primary-navy);">
            Email Address Used for Purchase:
          </label>
          <input 
            type="email" 
            id="portal-input-email" 
            class="form-input" 
            placeholder="patient@example.com" 
            required 
          />
        </div>
        <button type="submit" class="btn btn-secondary btn-block">
          Access Portal via Email
        </button>
      </form>

      <div class="portal-guest-perks">
        <div class="perk-item">
          <span style="color: var(--color-pine-emerald);">✓</span>
          <span>Live UPS Ground tracking from Burbank, CA</span>
        </div>
        <div class="perk-item">
          <span style="color: var(--color-pine-emerald);">✓</span>
          <span>30-Day Guided Spine Rehab Video Course</span>
        </div>
        <div class="perk-item">
          <span style="color: var(--color-pine-emerald);">✓</span>
          <span>HSA / FSA Itemized Insurance Receipts (E0941)</span>
        </div>
        <div class="perk-item">
          <span style="color: var(--color-pine-emerald);">✓</span>
          <span>10-Year Carpathian Pine Frame Warranty Registration</span>
        </div>
      </div>

    </div>
  `;
}

function renderLoggedInPortalView(user, activeTab) {
  return `
    <div class="portal-user-view">
      
      <!-- Patient Profile Strip -->
      <div class="patient-profile-card">
        <div class="patient-avatar-col">
          <div class="patient-avatar">${user.name.split(' ').map((n) => n[0]).join('')}</div>
          <div>
            <div class="patient-name-row">
              <span class="patient-name">${user.name}</span>
              <span class="badge badge-pine" style="font-size: 0.6875rem;">Verified Owner</span>
            </div>
            <div class="patient-meta-row">
              <span>${user.email}</span>
              <span>•</span>
              <span>SN: ${user.serialNumber}</span>
            </div>
          </div>
        </div>

        <button type="button" class="btn btn-secondary btn-sm" id="btn-portal-logout" style="border-radius: var(--radius-full);">
          Sign Out
        </button>
      </div>

      <!-- Navigation Tabs -->
      <div class="portal-tabs-nav" role="tablist">
        <button type="button" class="portal-tab-btn ${activeTab === 'orders' ? 'active' : ''}" data-tab="orders">
          📦 My Orders & UPS Tracking
        </button>
        <button type="button" class="portal-tab-btn ${activeTab === 'course' ? 'active' : ''}" data-tab="course">
          🎓 30-Day Video Rehab
        </button>
        <button type="button" class="portal-tab-btn ${activeTab === 'biometrics' ? 'active' : ''}" data-tab="biometrics">
          📈 Spine Biometrics
        </button>
        <button type="button" class="portal-tab-btn ${activeTab === 'documents' ? 'active' : ''}" data-tab="documents">
          📄 Insurance & Warranty
        </button>
      </div>

      <!-- Tab Content Area -->
      <div class="portal-tab-content">
        ${renderActiveTabContent(user, activeTab)}
      </div>

    </div>
  `;
}

function renderActiveTabContent(user, activeTab) {
  if (activeTab === 'orders') {
    const latestOrder = user.orders && user.orders.length > 0 ? user.orders[0] : null;
    if (!latestOrder) {
      return `
        <div style="text-align: center; padding: 40px;">
          <p style="color: var(--color-text-muted);">No orders found for this account.</p>
          <a href="#catalog" class="btn btn-primary btn-sm" style="margin-top: 12px;">Shop Decompression Boards</a>
        </div>
      `;
    }

    return `
      <div class="portal-order-pane">
        
        <div class="order-summary-header">
          <div>
            <div style="font-size: 0.8125rem; color: var(--color-text-muted);">Order Number:</div>
            <div style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy);">
              ${latestOrder.orderId}
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.8125rem; color: var(--color-text-muted);">Placed on:</div>
            <div style="font-size: 0.9375rem; font-weight: 700; color: var(--color-text-main);">
              ${latestOrder.date}
            </div>
          </div>
        </div>

        <!-- Live UPS Shipment Tracker -->
        <div class="tracking-live-box">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 1.125rem;">🚚</span>
              <strong style="color: var(--color-primary-navy);">${latestOrder.status}</strong>
            </div>
            <span class="badge badge-cyan" style="font-size: 0.75rem;">UPS Ground</span>
          </div>

          <!-- 4-Step Progress Bar -->
          <div class="tracking-progress-steps">
            <div class="step-node active">
              <div class="step-circle">✓</div>
              <div class="step-label">Order Placed</div>
            </div>
            <div class="step-node active">
              <div class="step-circle">✓</div>
              <div class="step-label">Burbank, CA Sorted</div>
            </div>
            <div class="step-node ${latestOrder.currentStep >= 2 ? 'active' : ''}">
              <div class="step-circle">${latestOrder.currentStep >= 2 ? '✓' : '3'}</div>
              <div class="step-label">In Transit</div>
            </div>
            <div class="step-node ${latestOrder.currentStep >= 3 ? 'active' : ''}">
              <div class="step-circle">${latestOrder.currentStep >= 3 ? '✓' : '4'}</div>
              <div class="step-label">Out for Delivery</div>
            </div>
          </div>

          <div class="tracking-details-row">
            <div>
              <span style="font-size: 0.75rem; color: var(--color-text-muted);">Tracking Number:</span>
              <div style="font-family: var(--font-mono); font-weight: 700; color: var(--color-pine-emerald);">
                ${latestOrder.upsTracking}
              </div>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--color-text-muted);">Estimated Delivery:</span>
              <div style="font-weight: 700; color: var(--color-primary-navy);">
                ${latestOrder.estimatedDelivery}
              </div>
            </div>
          </div>
        </div>

        <!-- Ordered Items -->
        <div class="portal-items-list">
          <div style="font-size: 0.8125rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 10px;">
            Items in Shipment:
          </div>
          ${(latestOrder.items || [])
            .map(
              (it) => `
            <div class="portal-item-row">
              <div>
                <strong>${it.name}</strong>
                <div style="font-size: 0.75rem; color: var(--color-text-muted);">${it.finish || 'Natural Carpathian Pine'} • Qty: ${it.quantity || 1}</div>
              </div>
              <div style="font-weight: 700; color: var(--color-primary-navy);">
                ${formatUSD(it.price * (it.quantity || 1))}
              </div>
            </div>
          `
            )
            .join('')}
        </div>

        <div style="margin-top: 16px; display: flex; gap: 12px; flex-wrap: wrap;">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-portal-download-invoice" style="flex: 1;">
            📥 Download Itemized HSA/FSA Receipt
          </button>
        </div>

      </div>
    `;
  }

  if (activeTab === 'course') {
    const prog = user.courseProgress || { currentDay: 4, totalDays: 30, completedLessonIds: ['day-1', 'day-2', 'day-3'] };
    const pct = Math.round((prog.completedLessonIds.length / 30) * 100);

    const lessons = [
      { id: 'day-1', day: 1, title: 'Acclimation & Gentle Pelvic Unloading (10° Incline)', duration: '8 min', phase: 'Phase 1' },
      { id: 'day-2', day: 2, title: 'Cervical Traction Protocol with Glisson Loop', duration: '10 min', phase: 'Phase 1' },
      { id: 'day-3', day: 3, title: 'Prone Spinal Elongation & Micro-Pelvic Rocking', duration: '10 min', phase: 'Phase 1' },
      { id: 'day-4', day: 4, title: 'Multifidus Isometric Activation under Traction', duration: '12 min', phase: 'Phase 2' },
      { id: 'day-5', day: 5, title: 'Sciatic Nerve Flossing on 15° Incline', duration: '12 min', phase: 'Phase 2' },
      { id: 'day-6', day: 6, title: 'Thoracic Expansion & Rib Cage Mobilization', duration: '15 min', phase: 'Phase 2' },
    ];

    return `
      <div class="portal-course-pane">
        
        <!-- Progress Bar Card -->
        <div class="course-progress-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-weight: 800; color: var(--color-primary-navy);">30-Day Spine Rehabilitation Progress</span>
            <span class="badge badge-pine">${pct}% Completed (Day ${prog.currentDay} of 30)</span>
          </div>
          <div class="course-progress-track">
            <div class="course-progress-fill" style="width: ${pct}%;"></div>
          </div>
          <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 8px;">
            🔥 Daily Streak: <strong>${prog.streakDays || 4} Days Consistent</strong> • Next session: Today at 6:00 PM
          </div>
        </div>

        <!-- Lessons List -->
        <div class="lessons-list">
          ${lessons
            .map((les) => {
              const isDone = prog.completedLessonIds.includes(les.id);
              return `
              <div class="lesson-card ${isDone ? 'completed' : ''}">
                <div class="lesson-check-col">
                  <button type="button" class="lesson-checkbox ${isDone ? 'checked' : ''}" data-lesson-id="${les.id}">
                    ${isDone ? '✓' : ''}
                  </button>
                </div>
                <div class="lesson-info-col">
                  <div style="font-size: 0.6875rem; font-weight: 700; color: var(--color-traction-cyan); text-transform: uppercase;">
                    ${les.phase} • Day ${les.day} (${les.duration})
                  </div>
                  <div class="lesson-title">${les.title}</div>
                </div>
                <button type="button" class="btn btn-secondary btn-sm lesson-play-btn" data-lesson-title="${les.title}">
                  ${isDone ? 'Review' : 'Play Lesson ▶'}
                </button>
              </div>
            `;
            })
            .join('')}
        </div>

      </div>
    `;
  }

  if (activeTab === 'biometrics') {
    return `
      <div class="portal-biometrics-pane">
        
        <div class="biometrics-grid">
          <div class="bio-stat-card">
            <div class="bio-label">Prescribed Traction Angle</div>
            <div class="bio-val" style="color: var(--color-traction-cyan);">${user.savedAngle || 18}° Incline</div>
            <div class="bio-sub">Calibrated for L4-S1 decompression</div>
          </div>

          <div class="bio-stat-card">
            <div class="bio-label">Target Axial Pull Force</div>
            <div class="bio-val" style="color: var(--color-pine-emerald);">${user.targetPullForce || 48} lbs</div>
            <div class="bio-sub">27% of 185 lb body weight</div>
          </div>

          <div class="bio-stat-card">
            <div class="bio-label">Disc Height Restored</div>
            <div class="bio-val" style="color: var(--color-primary-navy);">+2.4 mm</div>
            <div class="bio-sub">MRI-correlated recovery metric</div>
          </div>
        </div>

        <!-- Interactive Session Timer -->
        <div class="timer-card">
          <div style="font-size: 0.8125rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">
            Today's Decompression Session
          </div>
          <div style="font-family: var(--font-mono); font-size: 2.75rem; font-weight: 800; color: var(--color-primary-navy); margin: 8px 0;" id="portal-timer-display">
            10:00
          </div>
          <div style="display: flex; gap: 12px; justify-content: center;">
            <button type="button" class="btn btn-primary btn-sm" id="btn-start-session-timer">
              ▶ Start 10-Min Protocol
            </button>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-reset-session-timer">
              Reset
            </button>
          </div>
        </div>

      </div>
    `;
  }

  if (activeTab === 'documents') {
    return `
      <div class="portal-documents-pane">
        
        <div class="doc-card">
          <div class="doc-icon">📄</div>
          <div class="doc-details">
            <div class="doc-title">Official Itemized Medical Receipt & DME Claim</div>
            <div class="doc-meta">HCPCS Code E0941 • CPT Code 97012 • IRS 213(d) Eligible</div>
          </div>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-doc-receipt">
            Download TXT
          </button>
        </div>

        <div class="doc-card">
          <div class="doc-icon">🏥</div>
          <div class="doc-details">
            <div class="doc-title">Letter of Medical Necessity (LOMN) Template</div>
            <div class="doc-meta">Pre-filled doctor referral form for your Chiropractor / DPT</div>
          </div>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-doc-lomn">
            Download Form
          </button>
        </div>

        <div class="doc-card">
          <div class="doc-icon">🛡️</div>
          <div class="doc-details">
            <div class="doc-title">10-Year Structural Frame Warranty Certificate</div>
            <div class="doc-meta">Serial: ${user.serialNumber} • Carpathian Resonant Pine</div>
          </div>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-doc-warranty">
            View Certificate
          </button>
        </div>

      </div>
    `;
  }

  return '';
}

function bindGuestEvents() {
  const demoBtn = document.getElementById('btn-demo-login');
  const loginForm = document.getElementById('portal-email-login-form');
  const emailInput = document.getElementById('portal-input-email');

  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      authStore.loginAsDemo();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (emailInput && emailInput.value) {
        authStore.login(emailInput.value);
      }
    });
  }
}

function bindLoggedInEvents(user, activeTab) {
  // Logout
  const logoutBtn = document.getElementById('btn-portal-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      authStore.logout();
    });
  }

  // Tabs
  document.querySelectorAll('.portal-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      authStore.setActiveTab(tab);
    });
  });

  // Lesson Checkboxes
  document.querySelectorAll('.lesson-checkbox').forEach((cb) => {
    cb.addEventListener('click', () => {
      const id = cb.getAttribute('data-lesson-id');
      authStore.toggleLessonComplete(id);
    });
  });

  // Download receipt button inside portal
  const invoiceBtn = document.getElementById('btn-portal-download-invoice') || document.getElementById('btn-doc-receipt');
  if (invoiceBtn) {
    invoiceBtn.addEventListener('click', () => {
      downloadDmeReceipt(user);
    });
  }

  // LOMN template download
  const lomnBtn = document.getElementById('btn-doc-lomn');
  if (lomnBtn) {
    lomnBtn.addEventListener('click', () => {
      downloadLomnTemplate(user);
    });
  }

  // Timer simulation
  const startTimerBtn = document.getElementById('btn-start-session-timer');
  const timerDisplay = document.getElementById('portal-timer-display');
  let interval = null;
  let secondsLeft = 600;

  if (startTimerBtn && timerDisplay) {
    startTimerBtn.addEventListener('click', () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
        startTimerBtn.textContent = '▶ Resume Session';
        return;
      }

      startTimerBtn.textContent = '⏸ Pause Session';
      interval = setInterval(() => {
        secondsLeft--;
        if (secondsLeft <= 0) {
          clearInterval(interval);
          interval = null;
          timerDisplay.textContent = 'Session Complete! 🎉';
          startTimerBtn.textContent = '✓ Done';
          return;
        }
        const m = Math.floor(secondsLeft / 60);
        const s = secondsLeft % 60;
        timerDisplay.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
      }, 1000);
    });

    const resetTimerBtn = document.getElementById('btn-reset-session-timer');
    if (resetTimerBtn) {
      resetTimerBtn.addEventListener('click', () => {
        if (interval) clearInterval(interval);
        interval = null;
        secondsLeft = 600;
        timerDisplay.textContent = '10:00';
        startTimerBtn.textContent = '▶ Start 10-Min Protocol';
      });
    }
  }
}

function downloadDmeReceipt(user) {
  const latest = (user.orders && user.orders[0]) || {
    orderId: 'EV-88412',
    total: 660,
    upsTracking: '1Z9999999999999999',
    estimatedDelivery: 'September 19, 2026',
    items: [{ name: 'Evminov Spine Decompression Board (Standard)', price: 595, quantity: 1, finish: 'Natural Carpathian Pine' }]
  };

  const text = `================================================================================
EVMINOV SPINE SYSTEMS LLC — ITEMIZED MEDICAL RECEIPT & CLAIM ATTACHMENT
Durable Medical Equipment (DME) — Mechanical Spinal Traction Apparatus
================================================================================

PATIENT NAME:          ${user.name}
PATIENT EMAIL:         ${user.email}
ORDER ID:              ${latest.orderId}
DATE OF PURCHASE:      ${latest.date || 'September 14, 2026'}
MERCHANT / PROVIDER:   Evminov Spine Systems LLC (Burbank, CA Hub)
TAX ID / STATUS:       DME Medical Device Provider

INSURANCE CODING REIMBURSEMENT:
HCPCS Billing Code:    E0941 (Mechanical Traction Device for Home Use)
CPT Modality Code:     97012 (Mechanical Spinal Traction Therapy)
IRS Classification:    Section 213(d) Qualified Medical Expense (HSA/FSA Eligible)
Warranty:              10-Year Frame Warranty (Serial: ${user.serialNumber})

PURCHASED LINE ITEMS:
${(latest.items || []).map((it) => `  - ${it.name} (${it.finish || 'Pine'}) x${it.quantity || 1} @ ${formatUSD(it.price)} = ${formatUSD(it.price * (it.quantity || 1))}`).join('\n')}

TOTAL CHARGED:         ${formatUSD(latest.total)}
PAYMENT STATUS:        PAID IN FULL via Stripe Encrypted Processing
UPS TRACKING NUMBER:   ${latest.upsTracking}
================================================================================
`;

  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Evminov-DME-Receipt-${latest.orderId}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadLomnTemplate(user) {
  const text = `================================================================================
LETTER OF MEDICAL NECESSITY (LOMN) — MECHANICAL SPINAL TRACTION
For Health Savings Account (HSA) / Flexible Spending Account (FSA) Submissions
================================================================================

PATIENT NAME:          ${user.name}
DIAGNOSIS CODES:       M51.2 (Lumbar Disc Herniation) / M54.3 (Sciatica Radiculopathy)
RECOMMENDED EQUIPMENT: Evminov Spine Decompression & Mechanical Traction System
HCPCS BILLING CODE:    E0941 (Mechanical Traction Device)

TO BENEFIT PLAN ADMINISTRATOR:
I am prescribing the home use of the Evminov Spine Decompression Board for the above-
named patient. This mechanical traction apparatus is medically necessary to provide
non-surgical axial spinal unloading, expand the intervertebral foramina, and relieve
radicular nerve compression.

TREATMENT PROTOCOL:
- Incline Angle: 10° to 20°
- Frequency: Daily sessions of 10–15 minutes
- Duration: 12 weeks minimum

PRESCRIBING PRACTITIONER SIGNATURE:

________________________________________    Date: ________________________
Doctor of Chiropractic (D.C.) / Physical Therapist (D.P.T.) / M.D.
NPI Number: ____________________________
================================================================================
`;

  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Evminov-LOMN-Template.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
