import { comparisonData } from '../data/comparison.js';

export function renderComparisonTable() {
  // Desktop Table Rows
  const tableRowsHtml = comparisonData.rows
    .map(
      (row) => `
      <tr>
        <td class="col-metric">
          <div class="comparison-metric-title">${row.metric}</div>
        </td>
        <td class="col-evminov">
          <div class="comp-val-line winner-val">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${row.evminov.value}</span>
          </div>
          <span class="comparison-subnote">${row.evminov.note}</span>
        </td>
        <td class="col-inversion">
          <div class="comp-val-line danger-val">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            <span>${row.inversion.value}</span>
          </div>
          <span class="comparison-subnote">${row.inversion.note}</span>
        </td>
        <td class="col-surgery">
          <div class="comp-val-line warning-val">
            <span class="comp-icon-warn">⚠️</span>
            <span>${row.surgery.value}</span>
          </div>
          <span class="comparison-subnote">${row.surgery.note}</span>
        </td>
      </tr>
    `
    )
    .join('');

  // Mobile Cards Stack
  const mobileCardsHtml = comparisonData.rows
    .map(
      (row, idx) => `
      <div class="comp-mobile-card" data-metric-idx="${idx}">
        <div class="comp-card-top-bar">
          <span class="comp-card-step-badge">Metric ${idx + 1} of ${comparisonData.rows.length}</span>
          <h3 class="comp-card-metric-title">${row.metric}</h3>
        </div>

        <!-- Evminov Winner Section (Always shown) -->
        <div class="comp-side-box comp-winner-box">
          <div class="comp-side-header">
            <span class="comp-side-brand-tag winner-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              🌲 Evminov Spine Board
            </span>
            <span class="comp-status-pill pill-winner">Clinical Choice</span>
          </div>
          <div class="comp-card-val winner-text">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <strong>${row.evminov.value}</strong>
          </div>
          <p class="comp-card-note">${row.evminov.note}</p>
        </div>

        <!-- Competitor: Inversion Table -->
        <div class="comp-side-box comp-opponent-box opponent-inversion" data-opponent="inversion">
          <div class="comp-side-header">
            <span class="comp-side-brand-tag opponent-tag-danger">
              ❌ Teeter Inversion Table
            </span>
            <span class="comp-status-pill pill-danger">High Risk</span>
          </div>
          <div class="comp-card-val danger-text">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            <strong>${row.inversion.value}</strong>
          </div>
          <p class="comp-card-note">${row.inversion.note}</p>
        </div>

        <!-- Competitor: Spinal Surgery -->
        <div class="comp-side-box comp-opponent-box opponent-surgery" data-opponent="surgery" style="display: none;">
          <div class="comp-side-header">
            <span class="comp-side-brand-tag opponent-tag-warning">
              ⚠️ Spinal Surgery ($60k+)
            </span>
            <span class="comp-status-pill pill-warning">Invasive</span>
          </div>
          <div class="comp-card-val warning-text">
            <span>⚠️</span>
            <strong>${row.surgery.value}</strong>
          </div>
          <p class="comp-card-note">${row.surgery.note}</p>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="catalog-section" id="comparison" style="background: var(--color-surface-white);">
      <div class="calc-container">
        
        <div class="section-header">
          <span class="badge badge-gold" style="margin-bottom: 12px;">Clinical Safety Matrix</span>
          <h2>${comparisonData.title}</h2>
          <p>${comparisonData.subtitle}</p>
        </div>

        <!-- Mobile Head-to-Head Segmented Controls (<860px) -->
        <div class="comp-mobile-controls" id="comp-mobile-controls">
          <div class="comp-segmented-control" role="tablist" aria-label="Comparison Competitor Switcher">
            <button type="button" class="comp-seg-btn active" role="tab" aria-selected="true" data-comp-target="inversion">
              <span>vs Inversion Table</span>
            </button>
            <button type="button" class="comp-seg-btn" role="tab" aria-selected="false" data-comp-target="surgery">
              <span>vs Spinal Surgery</span>
            </button>
            <button type="button" class="comp-seg-btn" role="tab" aria-selected="false" data-comp-target="both">
              <span>Full 4-Way Table</span>
            </button>
          </div>
          <p class="comp-mobile-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Comparing direct clinical outcomes and patient risks
          </p>
        </div>

        <!-- Mobile Card Stack -->
        <div class="comp-card-stack" id="comp-card-stack">
          ${mobileCardsHtml}
        </div>

        <!-- Desktop Comparison Table (and Full View on Mobile when 'Full Table' tab active) -->
        <div class="comparison-wrapper" id="comparison-desktop-wrap">
          <div class="comp-swipe-notice">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16l-4-4m0 0l4-4m-4 4h18m-4 4l4-4m0 0l-4-4"/></svg>
            <span>Scroll horizontally to view all clinical alternatives</span>
          </div>
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="col-metric-th" style="width: 25%;">Feature & Safety Factor</th>
                <th class="col-evminov" style="width: 28%;">🌲 Evminov Spine Board</th>
                <th class="col-inversion-th" style="width: 24%;">❌ Teeter Inversion Table</th>
                <th class="col-surgery-th" style="width: 23%;">⚠️ Spinal Surgery ($60k+)</th>
              </tr>
            </thead>
            <tbody>
              ${tableRowsHtml}
            </tbody>
          </table>
        </div>

        <div style="text-align: center; margin-top: 40px;">
          <a href="#catalog" class="btn btn-primary btn-lg">
            <span>Experience Controlled Decompression — 60-Day Trial</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

      </div>
    </section>
  `;
}

export function initComparisonTable() {
  const controls = document.getElementById('comp-mobile-controls');
  if (!controls) return;

  const buttons = controls.querySelectorAll('.comp-seg-btn');
  const cardStack = document.getElementById('comp-card-stack');
  const desktopWrap = document.getElementById('comparison-desktop-wrap');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-comp-target');
      if (!target) return;

      // Update button states
      buttons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update visibility of opponents
      if (target === 'inversion') {
        if (cardStack) cardStack.style.display = 'flex';
        if (desktopWrap) desktopWrap.classList.remove('force-mobile-show');
        document.querySelectorAll('.comp-opponent-box[data-opponent="inversion"]').forEach((el) => {
          el.style.display = 'block';
        });
        document.querySelectorAll('.comp-opponent-box[data-opponent="surgery"]').forEach((el) => {
          el.style.display = 'none';
        });
      } else if (target === 'surgery') {
        if (cardStack) cardStack.style.display = 'flex';
        if (desktopWrap) desktopWrap.classList.remove('force-mobile-show');
        document.querySelectorAll('.comp-opponent-box[data-opponent="inversion"]').forEach((el) => {
          el.style.display = 'none';
        });
        document.querySelectorAll('.comp-opponent-box[data-opponent="surgery"]').forEach((el) => {
          el.style.display = 'block';
        });
      } else if (target === 'both') {
        // Show both opponents in the cards or reveal the complete table
        if (cardStack) cardStack.style.display = 'none';
        if (desktopWrap) {
          desktopWrap.classList.add('force-mobile-show');
          desktopWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  });
}
