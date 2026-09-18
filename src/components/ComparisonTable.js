import { comparisonData } from '../data/comparison.js';

export function renderComparisonTable() {
  const rowsHtml = comparisonData.rows
    .map(
      (row) => `
      <tr>
        <td>
          <div class="comparison-metric-title">${row.metric}</div>
        </td>
        <td class="col-evminov">
          <div style="display: flex; align-items: center; gap: 6px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${row.evminov.value}</span>
          </div>
          <span class="comparison-subnote">${row.evminov.note}</span>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 6px; color: var(--color-danger); font-weight: 600;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            <span>${row.inversion.value}</span>
          </div>
          <span class="comparison-subnote">${row.inversion.note}</span>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 6px; color: var(--color-text-muted); font-weight: 600;">
            <span>⚠️</span>
            <span>${row.surgery.value}</span>
          </div>
          <span class="comparison-subnote">${row.surgery.note}</span>
        </td>
      </tr>
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

        <div class="comparison-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th style="width: 25%;">Feature & Safety Factor</th>
                <th class="col-evminov" style="width: 28%;">🌲 Evminov Spine Board</th>
                <th style="width: 24%;">❌ Teeter Inversion Table</th>
                <th style="width: 23%;">⚠️ Spinal Surgery ($60k+)</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
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
