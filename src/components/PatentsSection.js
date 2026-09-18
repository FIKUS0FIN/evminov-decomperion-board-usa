import { patentsAndCertifications } from '../data/patents.js';

export function renderPatentsSection() {
  const patentsListHtml = patentsAndCertifications.patents
    .map(
      (pat) => `
      <div class="patent-card">
        <div class="patent-card-header">
          <div class="patent-seal-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>Verified Patent</span>
          </div>
          <span class="patent-status-tag">${pat.status}</span>
        </div>

        <div class="patent-num">${pat.number}</div>
        <h3 class="patent-title">${pat.title}</h3>
        
        <div class="patent-meta-grid">
          <div>
            <strong>Inventor:</strong> ${pat.inventor}
          </div>
          <div>
            <strong>Patent Office:</strong> ${pat.office}
          </div>
          <div>
            <strong>Classification:</strong> ${pat.classification}
          </div>
        </div>

        <p class="patent-significance">
          ${pat.significance}
        </p>
      </div>
    `
    )
    .join('');

  const trialsListHtml = patentsAndCertifications.clinicalTrials
    .map(
      (trial) => `
      <div class="clinical-trial-card">
        <div class="trial-institution">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          <span>${trial.institution}</span>
        </div>
        <div class="trial-lead">${trial.lead}</div>
        <div class="trial-sample-tag">${trial.sampleSize} • ${trial.duration}</div>
        <p class="trial-findings">
          "${trial.findings}"
        </p>
      </div>
    `
    )
    .join('');

  return `
    <section class="patents-section" id="patents">
      <div class="calc-container">
        
        <div class="section-header">
          <div class="clinical-pill-badge">
            <span class="pill-dot"></span>
            <span>Intellectual Property & Clinical Evidence</span>
          </div>
          <h2 class="clinical-heading">${patentsAndCertifications.headline}</h2>
          <p class="clinical-subheading">
            ${patentsAndCertifications.subtitle}
          </p>
        </div>

        <!-- Clinical Stats Counter Strip -->
        <div class="clinical-kpi-bar">
          <div class="kpi-block">
            <div class="kpi-num">${patentsAndCertifications.stats.clinicalYears}</div>
            <div class="kpi-label">Years of Hospital Trials</div>
          </div>
          <div class="kpi-block">
            <div class="kpi-num">${patentsAndCertifications.stats.patientsTreated}</div>
            <div class="kpi-label">Documented Patient Recoveries</div>
          </div>
          <div class="kpi-block">
            <div class="kpi-num">${patentsAndCertifications.stats.surgeryAvoidanceRate}</div>
            <div class="kpi-label">Avoided Disc Surgery</div>
          </div>
          <div class="kpi-block">
            <div class="kpi-num">${patentsAndCertifications.stats.countriesPatented}</div>
            <div class="kpi-label">PCT Patent Jurisdictions</div>
          </div>
        </div>

        <!-- Patents Grid -->
        <div class="patents-grid">
          ${patentsListHtml}
        </div>

        <!-- Clinical Trials & Hospital Validation Grid -->
        <div class="clinical-trials-wrapper">
          <h3 class="trials-section-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Multi-Center Clinical Cohort Studies
          </h3>
          <div class="trials-grid">
            ${trialsListHtml}
          </div>
        </div>

        <!-- US Medical Device Compliance Seal Banner -->
        <div class="us-compliance-banner">
          <div class="compliance-left">
            <div class="compliance-badge">US FDA CLASSIFICATION & INSURANCE CODES</div>
            <div class="compliance-title">Durable Medical Equipment (DME) — Mechanical Traction</div>
            <div class="compliance-details">
              <span><strong>FDA Category:</strong> ${patentsAndCertifications.usCompliance.fdaStatus}</span>
              <span>•</span>
              <span><strong>HCPCS:</strong> ${patentsAndCertifications.usCompliance.hcpcsCode}</span>
              <span>•</span>
              <span><strong>CPT:</strong> ${patentsAndCertifications.usCompliance.cptBillingCode}</span>
            </div>
          </div>
          <a href="#catalog" class="btn btn-primary btn-sm" id="btn-patent-order-cta">
            Order Board with 10-Yr Warranty →
          </a>
        </div>

      </div>
    </section>
  `;
}

export function initPatentsSection() {
  // Patents Section interactions
}
