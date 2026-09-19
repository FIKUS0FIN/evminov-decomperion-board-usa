import { patentsAndCertifications } from '../data/patents.js';

export function formatKpiValue(val) {
  if (typeof val === 'string' && val.includes('(')) {
    const match = val.match(/^([^(]+)\s*(\(.+\))$/);
    if (match) {
      return `<span class="kpi-val-main">${match[1].trim()}</span><span class="kpi-val-sub">${match[2].trim()}</span>`;
    }
  }
  return `<span class="kpi-val-main">${val}</span>`;
}

export function renderPatentsSection() {
  const patentsListHtml = patentsAndCertifications.patents
    .map(
      (pat) => `
      <div class="patent-card" data-patent-target="${pat.id}" role="button" tabindex="0" aria-label="View ${pat.number} details and official patent scan">
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

        <div class="patent-card-actions">
          <button type="button" class="btn-patent-card-doc" data-patent-open="${pat.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            <span>View Patent Scan</span>
          </button>
          <a href="${pat.registryUrl}" target="_blank" rel="noopener noreferrer" class="btn-patent-card-registry" onclick="event.stopPropagation()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <span>${pat.registryName || 'Official Registry'} ↗</span>
          </a>
        </div>
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

  const scannedDocsHtml = (patentsAndCertifications.scannedDocuments || [])
    .map(
      (doc) => `
      <div class="patent-doc-card" data-patent-target="${doc.id}" role="button" tabindex="0" aria-label="Open ${doc.title} (${doc.docNumber}) document archive scan">
        <div class="patent-doc-preview">
          <img src="${doc.image}" alt="${doc.title} - ${doc.docNumber}" loading="lazy" class="patent-doc-img" />
          <div class="patent-doc-overlay">
            <button type="button" class="patent-zoom-btn" data-patent-open="${doc.id}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              <span>View Document Scan</span>
            </button>
          </div>
        </div>
        <div class="patent-doc-body">
          <div class="patent-doc-topline">
            <span class="patent-doc-badge">${doc.badge}</span>
            <span class="patent-verified-chip">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Verified
            </span>
          </div>
          <div class="patent-doc-num">${doc.docNumber}</div>
          <div class="patent-doc-title">${doc.title}</div>
          <p class="patent-doc-caption">${doc.caption}</p>
          <div class="patent-doc-actions">
            <button type="button" class="btn-patent-view-doc" data-patent-open="${doc.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Inspect Scan
            </button>
            <a href="${doc.registryUrl}" target="_blank" rel="noopener noreferrer" class="btn-patent-registry-link" onclick="event.stopPropagation()">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Registry Record ↗
            </a>
          </div>
        </div>
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

        <!-- Clinical Stats Counter Strip (2 Full Symmetrical Rows of 5 KPIs) -->
        <div class="clinical-kpi-bar">
          <div class="kpi-block">
            <div class="kpi-num">${formatKpiValue(patentsAndCertifications.stats.clinicalYears)}</div>
            <div class="kpi-label">Years of Hospital Trials</div>
          </div>
          <div class="kpi-block">
            <div class="kpi-num">${formatKpiValue(patentsAndCertifications.stats.patientsTreated)}</div>
            <div class="kpi-label">Documented Patient Recoveries</div>
          </div>
          <div class="kpi-block">
            <div class="kpi-num">${formatKpiValue(patentsAndCertifications.stats.surgeryAvoidanceRate)}</div>
            <div class="kpi-label">Avoided Disc Surgery</div>
          </div>
          <div class="kpi-block">
            <div class="kpi-num">${formatKpiValue(patentsAndCertifications.stats.satisfactionRate)}</div>
            <div class="kpi-label">Patient Recovery Satisfaction</div>
          </div>
          <div class="kpi-block">
            <div class="kpi-num">${formatKpiValue(patentsAndCertifications.stats.doctoralDissertations)}</div>
            <div class="kpi-label">Doctoral Dissertations Defended</div>
          </div>
          <div class="kpi-block">
            <div class="kpi-num">${formatKpiValue(patentsAndCertifications.stats.countriesPatented)}</div>
            <div class="kpi-label">PCT Patent Jurisdictions</div>
          </div>
          <div class="kpi-block">
            <div class="kpi-num">${formatKpiValue(patentsAndCertifications.stats.discHeightGain)}</div>
            <div class="kpi-label">Disc Height Rehydration</div>
          </div>
          <div class="kpi-block">
            <div class="kpi-num">${formatKpiValue(patentsAndCertifications.stats.trainedSpecialists)}</div>
            <div class="kpi-label">Certified Vertebrologists &amp; PTs</div>
          </div>
          <div class="kpi-block">
            <div class="kpi-num">${formatKpiValue(patentsAndCertifications.stats.clinicalCenters)}</div>
            <div class="kpi-label">Global Rehabilitation Centers</div>
          </div>
          <div class="kpi-block">
            <div class="kpi-num">${formatKpiValue(patentsAndCertifications.stats.hsaFsaEligibility)}</div>
            <div class="kpi-label">HSA / FSA Eligible (Code E0941)</div>
          </div>
        </div>


        <!-- Official Scanned Document Archives Showcase & Carousel -->
        <div class="scanned-docs-wrapper" id="scanned-docs-section">
          <div class="scanned-docs-header">
            <div class="scanned-docs-heading-group">
              <div class="scanned-docs-pill">Primary Legal Documents</div>
              <h3 class="scanned-docs-title">Official Patent Grants &amp; Ministry of Health Licenses</h3>
              <div class="scanned-docs-note">Click on any document to inspect full archival scans and official international registries</div>
            </div>
            <div class="scanned-docs-controls" role="toolbar" aria-label="Patent document carousel navigation">
              <div class="scanned-docs-counter" id="scanned-docs-counter" aria-live="polite">
                <span class="counter-curr">1–4</span> of <span class="counter-total">6</span>
              </div>
              <div class="scanned-nav-arrows">
                <button type="button" class="scanned-nav-btn scanned-prev-btn" id="scanned-prev-btn" aria-label="Previous patent documents" title="Previous documents">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button type="button" class="scanned-nav-btn scanned-next-btn" id="scanned-next-btn" aria-label="Next patent documents" title="Next documents">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div class="scanned-carousel-shell">
            <button type="button" class="scanned-float-arrow scanned-float-prev" id="scanned-float-prev" aria-label="Previous patents">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <div class="scanned-docs-viewport" id="scanned-docs-viewport" tabindex="0" role="region" aria-label="Official Scanned Patents Documents Carousel">
              <div class="scanned-docs-track scanned-docs-grid" id="scanned-docs-track">
                ${scannedDocsHtml}
              </div>
            </div>

            <button type="button" class="scanned-float-arrow scanned-float-next" id="scanned-float-next" aria-label="Next patents">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          <!-- Carousel Pagination Indicator Dots -->
          <div class="scanned-carousel-dots" id="scanned-carousel-dots" role="tablist" aria-label="Patent document slide pages"></div>
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

      <!-- Patent Document Lightbox / Modal Viewer -->
      <div 
        id="patent-document-modal" 
        class="patent-modal-backdrop" 
        role="dialog" 
        aria-modal="true" 
        aria-hidden="true"
      >
        <div class="patent-modal-dialog">
          <button type="button" class="patent-modal-close-btn" id="patent-modal-close" aria-label="Close patent document viewer">✕</button>

          <div class="patent-modal-header">
            <div class="patent-modal-badges">
              <span class="badge badge-pine" id="patent-modal-badge">United States (USPTO)</span>
              <span class="badge badge-navy" id="patent-modal-num">US 6,869,387 B2</span>
              <span class="patent-modal-verified-pill">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Official Certified Archive
              </span>
            </div>
          </div>

          <div class="patent-modal-body-grid">
            <!-- Media Pane -->
            <div class="patent-modal-media-pane">
              <div class="patent-modal-img-container" id="patent-modal-img-container" role="button" tabindex="0" title="Click to toggle image zoom">
                <img id="patent-modal-img" src="" alt="Patent Document Archive Scan" class="patent-modal-img" />
                <div class="patent-modal-zoom-hint">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  <span id="patent-modal-zoom-text">Click to Zoom</span>
                </div>
              </div>

              <div class="patent-modal-nav-bar">
                <button type="button" class="patent-modal-nav-btn" id="patent-modal-prev" aria-label="Previous patent document">
                  ‹ Previous
                </button>
                <span class="patent-modal-nav-counter" id="patent-modal-counter">1 of 6</span>
                <button type="button" class="patent-modal-nav-btn" id="patent-modal-next" aria-label="Next patent document">
                  Next ›
                </button>
              </div>
            </div>

            <!-- Info Pane -->
            <div class="patent-modal-info-pane">
              <h3 class="patent-modal-title" id="patent-modal-title">Patent Document Title</h3>
              <p class="patent-modal-caption" id="patent-modal-caption">Official Patent Document Caption</p>

              <div class="patent-modal-meta-table">
                <div class="patent-modal-meta-row">
                  <span class="meta-label">Inventor:</span>
                  <span class="meta-val" id="patent-modal-inventor">Vyacheslav V. Evminov</span>
                </div>
                <div class="patent-modal-meta-row">
                  <span class="meta-label">Patent Authority:</span>
                  <span class="meta-val" id="patent-modal-office">State Patent Office</span>
                </div>
                <div class="patent-modal-meta-row" id="patent-modal-class-row">
                  <span class="meta-label">Classification:</span>
                  <span class="meta-val" id="patent-modal-classification">IPC A61H 1/02</span>
                </div>
              </div>

              <div class="patent-modal-desc-box">
                <strong class="desc-box-title">⚖️ Legal Significance &amp; Clinical Validation:</strong>
                <p id="patent-modal-details" class="desc-box-text"></p>
              </div>

              <div class="patent-modal-cta-row">
                <a href="#" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-patent-registry-cta" id="patent-modal-registry-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  <span id="patent-modal-registry-name">Open Registry (Google Patents) ↗</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm btn-patent-scan-link" id="patent-modal-scan-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                  <span>Open Full Scan ↗</span>
                </a>
              </div>

              <div class="patent-modal-trust-footnote">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>Authenticated original from the Evminov Vertebral Center legal archive. Protected worldwide under PCT international intellectual property treaties.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  `;
}

export function initPatentsSection() {
  const scannedDocs = patentsAndCertifications.scannedDocuments || [];
  if (!scannedDocs.length) return;

  const modal = document.getElementById('patent-document-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('patent-modal-close');
  const prevBtn = document.getElementById('patent-modal-prev');
  const nextBtn = document.getElementById('patent-modal-next');
  const imgContainer = document.getElementById('patent-modal-img-container');
  const modalImg = document.getElementById('patent-modal-img');
  const modalBadge = document.getElementById('patent-modal-badge');
  const modalNum = document.getElementById('patent-modal-num');
  const modalTitle = document.getElementById('patent-modal-title');
  const modalCaption = document.getElementById('patent-modal-caption');
  const modalInventor = document.getElementById('patent-modal-inventor');
  const modalOffice = document.getElementById('patent-modal-office');
  const modalClassification = document.getElementById('patent-modal-classification');
  const modalDetails = document.getElementById('patent-modal-details');
  const modalRegistryBtn = document.getElementById('patent-modal-registry-btn');
  const modalRegistryName = document.getElementById('patent-modal-registry-name');
  const modalScanLink = document.getElementById('patent-modal-scan-link');
  const modalCounter = document.getElementById('patent-modal-counter');
  const zoomText = document.getElementById('patent-modal-zoom-text');

  // Mapping from patent/doc IDs to scannedDocs index
  const docIndexMap = {
    'uspto-cert': 0,
    'epo-cert': 1,
    'ukr-cert': 2,
    'moh-cert': 3,
    'china-cert': 4,
    'epo-claim-cert': 5,
    'ua-patent-28849': 2,
    'ea-patent-003889': 1,
    'pct-wipo-9943288': 5,
    'moh-cert-711': 3
  };

  let currentDocIndex = 0;
  let isZoomed = false;

  function updateModalDocument(index) {
    if (index < 0 || index >= scannedDocs.length) return;
    currentDocIndex = index;
    const doc = scannedDocs[index];

    // Reset zoom state on slide change
    isZoomed = false;
    if (imgContainer) imgContainer.classList.remove('is-zoomed');
    if (zoomText) zoomText.textContent = 'Click to Zoom';

    if (modalImg) {
      modalImg.src = doc.image;
      modalImg.alt = `${doc.title} - ${doc.docNumber}`;
    }
    if (modalBadge) modalBadge.textContent = doc.badge;
    if (modalNum) modalNum.textContent = doc.docNumber;
    if (modalTitle) modalTitle.textContent = doc.title;
    if (modalCaption) modalCaption.textContent = doc.caption;
    if (modalInventor) modalInventor.textContent = doc.inventor || 'Vyacheslav V. Evminov';
    if (modalOffice) modalOffice.textContent = doc.office || doc.title;
    if (modalClassification) {
      modalClassification.textContent = doc.classification || 'IPC A61H 1/02, A61F 5/04';
    }
    if (modalDetails) {
      modalDetails.textContent = doc.details || doc.caption;
    }
    if (modalRegistryBtn) {
      modalRegistryBtn.href = doc.registryUrl || '#';
      if (modalRegistryName) {
        modalRegistryName.textContent = doc.registryName
          ? `Open ${doc.registryName} ↗`
          : 'Open Official Registry ↗';
      }
    }
    if (modalScanLink) {
      modalScanLink.href = doc.image;
    }
    if (modalCounter) {
      modalCounter.textContent = `${index + 1} of ${scannedDocs.length}`;
    }
  }

  function openPatentModal(id) {
    const targetIdx = typeof docIndexMap[id] === 'number' ? docIndexMap[id] : 0;
    updateModalDocument(targetIdx);

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    setTimeout(() => {
      if (closeBtn) closeBtn.focus();
    }, 50);
  }

  function closePatentModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    isZoomed = false;
    if (imgContainer) imgContainer.classList.remove('is-zoomed');
  }

  // Toggle Zoom on modal image
  function toggleZoom() {
    isZoomed = !isZoomed;
    if (imgContainer) {
      imgContainer.classList.toggle('is-zoomed', isZoomed);
    }
    if (zoomText) {
      zoomText.textContent = isZoomed ? 'Click to Reset' : 'Click to Zoom';
    }
  }

  if (imgContainer) {
    imgContainer.addEventListener('click', toggleZoom);
    imgContainer.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleZoom();
      }
    });
  }

  // Previous and Next document navigation
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prevIdx = (currentDocIndex - 1 + scannedDocs.length) % scannedDocs.length;
      updateModalDocument(prevIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const nextIdx = (currentDocIndex + 1) % scannedDocs.length;
      updateModalDocument(nextIdx);
    });
  }

  // Close handlers
  if (closeBtn) {
    closeBtn.addEventListener('click', closePatentModal);
  }

  modal.addEventListener('click', (e) => {
    // If clicked on backdrop outside of the dialog container
    if (e.target === modal) {
      closePatentModal();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closePatentModal();
    } else if (e.key === 'ArrowLeft') {
      const prevIdx = (currentDocIndex - 1 + scannedDocs.length) % scannedDocs.length;
      updateModalDocument(prevIdx);
    } else if (e.key === 'ArrowRight') {
      const nextIdx = (currentDocIndex + 1) % scannedDocs.length;
      updateModalDocument(nextIdx);
    }
  });

  // Attach click & enter listeners to all clickable patent doc cards
  const docCards = document.querySelectorAll('.patent-doc-card');
  docCards.forEach((card) => {
    const docId = card.getAttribute('data-patent-target');
    const handleCardClick = (e) => {
      // Ignore if user clicked directly on an external registry link
      if (e.target.closest('a')) return;
      openPatentModal(docId);
    };

    card.addEventListener('click', handleCardClick);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (!e.target.closest('a')) {
          e.preventDefault();
          openPatentModal(docId);
        }
      }
    });
  });

  // Attach click & enter listeners to all clickable patent cards in patents-grid
  const patentCards = document.querySelectorAll('.patent-card');
  patentCards.forEach((card) => {
    const patentId = card.getAttribute('data-patent-target');
    const handleCardClick = (e) => {
      if (e.target.closest('a')) return;
      openPatentModal(patentId);
    };

    card.addEventListener('click', handleCardClick);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (!e.target.closest('a')) {
          e.preventDefault();
          openPatentModal(patentId);
        }
      }
    });
  });

  // Explicit action buttons with data-patent-open
  const openButtons = document.querySelectorAll('[data-patent-open]');
  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-patent-open');
      openPatentModal(targetId);
    });
  });

  // Initialize Scanned Documents Carousel
  initScannedDocsCarousel();
}

function initScannedDocsCarousel() {
  const viewport = document.getElementById('scanned-docs-viewport');
  const track = document.getElementById('scanned-docs-track');
  if (!viewport || !track) return;

  const headerPrevBtn = document.getElementById('scanned-prev-btn');
  const headerNextBtn = document.getElementById('scanned-next-btn');
  const floatPrevBtn = document.getElementById('scanned-float-prev');
  const floatNextBtn = document.getElementById('scanned-float-next');
  const counterEl = document.getElementById('scanned-docs-counter');
  const dotsContainer = document.getElementById('scanned-carousel-dots');

  const cards = track.querySelectorAll('.patent-doc-card');
  const totalCards = cards.length;
  if (!totalCards) return;

  function getCardWidth() {
    if (cards.length > 0) {
      const cardRect = cards[0].getBoundingClientRect();
      if (cardRect.width > 0) return cardRect.width + 20;
    }
    return 280;
  }

  function getVisibleCount() {
    const vWidth = viewport.clientWidth || 1100;
    const cWidth = getCardWidth();
    return Math.max(1, Math.min(totalCards, Math.round(vWidth / cWidth)));
  }

  function updateCarouselUI() {
    const scrollLeft = viewport.scrollLeft;
    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const cWidth = getCardWidth();
    const visible = getVisibleCount();

    let firstVisibleIdx = Math.round(scrollLeft / cWidth);
    if (scrollLeft >= maxScroll - 15) {
      firstVisibleIdx = Math.max(0, totalCards - visible);
    }
    firstVisibleIdx = Math.max(0, Math.min(firstVisibleIdx, totalCards - 1));
    const lastVisibleIdx = Math.min(totalCards, firstVisibleIdx + visible);

    if (counterEl) {
      const start = Math.min(firstVisibleIdx + 1, totalCards);
      const end = Math.min(lastVisibleIdx, totalCards);
      counterEl.innerHTML = `<span class="counter-curr">${start}–${end}</span> of <span class="counter-total">${totalCards}</span>`;
    }

    const atStart = scrollLeft <= 5;
    const atEnd = scrollLeft >= maxScroll - 5;

    [headerPrevBtn, floatPrevBtn].forEach((btn) => {
      if (btn) {
        btn.disabled = atStart;
        btn.setAttribute('aria-disabled', atStart ? 'true' : 'false');
      }
    });

    [headerNextBtn, floatNextBtn].forEach((btn) => {
      if (btn) {
        btn.disabled = atEnd;
        btn.setAttribute('aria-disabled', atEnd ? 'true' : 'false');
      }
    });

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.scanned-carousel-dot');
      const numPages = Math.max(1, Math.ceil(totalCards / visible));
      const activePage = Math.min(numPages - 1, Math.round(scrollLeft / (viewport.clientWidth || 1)));

      dots.forEach((dot, idx) => {
        const isActive = idx === activePage;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }
  }

  function scrollNext() {
    const scrollDist = viewport.clientWidth > 500 ? viewport.clientWidth * 0.85 : getCardWidth();
    viewport.scrollBy({ left: scrollDist, behavior: 'smooth' });
  }

  function scrollPrev() {
    const scrollDist = viewport.clientWidth > 500 ? viewport.clientWidth * 0.85 : getCardWidth();
    viewport.scrollBy({ left: -scrollDist, behavior: 'smooth' });
  }

  if (headerNextBtn) headerNextBtn.addEventListener('click', scrollNext);
  if (floatNextBtn) floatNextBtn.addEventListener('click', scrollNext);
  if (headerPrevBtn) headerPrevBtn.addEventListener('click', scrollPrev);
  if (floatPrevBtn) floatPrevBtn.addEventListener('click', scrollPrev);

  function renderDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const visible = getVisibleCount();
    const numPages = Math.max(1, Math.ceil(totalCards / visible));

    if (numPages <= 1) {
      dotsContainer.style.display = 'none';
      return;
    }
    dotsContainer.style.display = 'flex';

    for (let i = 0; i < numPages; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `scanned-carousel-dot ${i === 0 ? 'is-active' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      dot.setAttribute('aria-label', `Go to patent document page ${i + 1}`);
      dot.addEventListener('click', () => {
        const targetScroll = i * (viewport.clientWidth || getCardWidth() * visible);
        viewport.scrollTo({ left: targetScroll, behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
    }
  }

  renderDots();
  updateCarouselUI();

  viewport.addEventListener('scroll', updateCarouselUI, { passive: true });
  window.addEventListener('resize', () => {
    renderDots();
    updateCarouselUI();
  });
}
