/**
 * Clinical Exercise Mosaic Gallery & Biomechanics Component
 * Authentic exercise photos directly from Evminov clinical archives (evminov.shop)
 */

import { exerciseGalleryData, biomechanicsPrinciples } from '../data/galleryData.js';

let currentGalleryIndex = 0;
let activeFilter = 'all';

export function renderExerciseGallery() {
  const categories = [
    { key: 'all', label: 'All Protocols', count: exerciseGalleryData.length },
    { key: 'lumbar', label: 'Lumbar & Disc Relief', count: exerciseGalleryData.filter(e => e.category === 'lumbar').length },
    { key: 'cervical', label: 'Cervical & Upper Spine', count: exerciseGalleryData.filter(e => e.category === 'cervical').length },
    { key: 'family', label: 'Family & Youth Scoliosis', count: exerciseGalleryData.filter(e => e.category === 'family').length },
    { key: 'core', label: 'Athletic Core & Stability', count: exerciseGalleryData.filter(e => e.category === 'core').length },
  ];

  const filterButtonsHtml = categories
    .map(
      (cat) => `
      <button 
        type="button" 
        class="gallery-filter-btn ${cat.key === 'all' ? 'active' : ''}" 
        data-filter="${cat.key}"
        id="gallery-filter-${cat.key}"
      >
        <span>${cat.label}</span>
        <span class="gallery-filter-count">${cat.count}</span>
      </button>
    `
    )
    .join('');

  const cardsHtml = exerciseGalleryData
    .map(
      (item, idx) => `
      <div 
        class="gallery-item-card" 
        data-category="${item.category}" 
        data-index="${idx}"
        id="gallery-card-${item.id}"
        tabindex="0"
        role="button"
        aria-label="View ${item.title} protocol"
      >
        <div class="gallery-thumb-wrap">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="gallery-thumb-img" 
            loading="lazy"
          />
          <div class="gallery-thumb-overlay"></div>
          <div class="gallery-expand-indicator" title="View Protocol Details">
            🔍
          </div>
          <div class="gallery-thumb-badges">
            <span class="gallery-badge-angle">${item.angle.split(' ')[0]}</span>
            <span class="gallery-badge-zone" title="${item.zone}">${item.zone}</span>
          </div>
        </div>
        <div class="gallery-card-content">
          <h4 class="gallery-card-title">${item.title}</h4>
          <span class="gallery-card-benefit">${item.benefit}</span>
        </div>
      </div>
    `
    )
    .join('');

  const biomechanicsCardsHtml = biomechanicsPrinciples
    .map(
      (p) => `
      <div class="biomechanics-card">
        <span class="biomechanics-card-badge">${p.badge}</span>
        <h4 class="biomechanics-card-title">${p.title}</h4>
        <div class="biomechanics-card-subtitle">${p.subtitle}</div>
        <p class="biomechanics-card-text">${p.text}</p>
      </div>
    `
    )
    .join('');

  return `
    <section class="gallery-section" id="exercise-gallery" aria-label="Clinical Exercise Photo Gallery">
      <div class="gallery-container">
        
        <div class="section-header" style="text-align: center; max-width: 820px; margin: 0 auto;">
          <span class="badge badge-pine" style="margin-bottom: 12px;">Authentic Clinical Exercise Library</span>
          <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: var(--color-primary-navy); line-height: 1.25;">
            The Evminov Method in Action: 20 Prescribed Protocols
          </h2>
          <p style="font-size: 1.05rem; color: var(--color-text-muted); margin-top: 12px; line-height: 1.6;">
            Direct from official clinical archives: photographic demonstrations of low-incline decompression, deep short-muscle activation, and family posture restoration on the genuine resonant pine board.
          </p>
        </div>

        <div class="gallery-filter-bar" role="tablist" aria-label="Exercise Categories">
          ${filterButtonsHtml}
        </div>

        <div class="gallery-mosaic-grid" id="gallery-mosaic-grid">
          ${cardsHtml}
        </div>

        <!-- Educational Biomechanics Banner directly from Tilda Archives -->
        <div class="biomechanics-ribbon">
          <div class="biomechanics-header">
            <span class="badge badge-navy" style="margin-bottom: 8px;">Core Physiology & Methodology</span>
            <h3>Why 15 Minutes on Low Incline Heals What Surgery & Gyms Can't</h3>
            <p>
              The scientific foundation established across 25+ years of orthopedic clinical trials at the Romodanov Neurosurgical Institute.
            </p>
          </div>
          <div class="biomechanics-grid">
            ${biomechanicsCardsHtml}
          </div>
        </div>

      </div>

      <!-- Lightbox Modal -->
      <div 
        id="gallery-lightbox-modal" 
        class="gallery-modal-backdrop" 
        role="dialog" 
        aria-modal="true" 
        aria-hidden="true"
      >
        <div class="gallery-modal-dialog">
          <button type="button" class="gallery-modal-close-btn" id="gallery-modal-close" aria-label="Close protocol details">
            ✕
          </button>

          <div class="gallery-modal-media">
            <img id="gallery-modal-img" src="" alt="" />
            <button type="button" class="gallery-modal-nav-prev" id="gallery-modal-prev" aria-label="Previous protocol">
              ‹
            </button>
            <button type="button" class="gallery-modal-nav-next" id="gallery-modal-next" aria-label="Next protocol">
              ›
            </button>
          </div>

          <div class="gallery-modal-body">
            <div class="gallery-modal-tagline">
              <span class="badge badge-pine" id="gallery-modal-badge-angle">15° Incline</span>
              <span class="badge badge-navy" id="gallery-modal-badge-cat">Lumbar Relief</span>
              <span class="badge" style="background: #f1f5f9; color: #475569;" id="gallery-modal-badge-zone">L4-S1 Segment</span>
            </div>

            <h3 class="gallery-modal-title" id="gallery-modal-title">Protocol Name</h3>
            <p class="gallery-modal-desc" id="gallery-modal-desc">Description</p>

            <div class="gallery-modal-mechanism-box">
              <strong>🔬 Physiological Mechanism (Spinal Pumping):</strong>
              <span id="gallery-modal-mechanism">Mechanism explanation</span>
            </div>

            <div class="gallery-modal-steps-heading">Step-by-Step Execution:</div>
            <ol class="gallery-modal-steps" id="gallery-modal-steps">
              <!-- Steps populated dynamically -->
            </ol>

            <div class="gallery-modal-footer">
              <span class="gallery-modal-footer-duration" id="gallery-modal-duration">⏱ 8 – 12 Minutes</span>
              <span class="gallery-modal-footer-benefit" id="gallery-modal-benefit">✓ Benefit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function updateModalContent(idx) {
  if (idx < 0 || idx >= exerciseGalleryData.length) return;
  currentGalleryIndex = idx;
  const item = exerciseGalleryData[idx];

  const modalImg = document.getElementById('gallery-modal-img');
  const modalTitle = document.getElementById('gallery-modal-title');
  const modalDesc = document.getElementById('gallery-modal-desc');
  const modalMechanism = document.getElementById('gallery-modal-mechanism');
  const modalSteps = document.getElementById('gallery-modal-steps');
  const modalAngle = document.getElementById('gallery-modal-badge-angle');
  const modalCat = document.getElementById('gallery-modal-badge-cat');
  const modalZone = document.getElementById('gallery-modal-badge-zone');
  const modalDuration = document.getElementById('gallery-modal-duration');
  const modalBenefit = document.getElementById('gallery-modal-benefit');

  if (modalImg) {
    modalImg.src = item.image;
    modalImg.alt = item.title;
  }
  if (modalTitle) modalTitle.textContent = item.title;
  if (modalDesc) modalDesc.textContent = item.description;
  if (modalMechanism) modalMechanism.textContent = item.mechanism;
  if (modalAngle) modalAngle.textContent = item.angle;
  if (modalCat) modalCat.textContent = item.categoryLabel;
  if (modalZone) modalZone.textContent = item.zone;
  if (modalDuration) modalDuration.textContent = `⏱ ${item.duration}`;
  if (modalBenefit) modalBenefit.textContent = `✓ ${item.benefit}`;

  if (modalSteps) {
    modalSteps.innerHTML = item.steps
      .map((step) => `<li>${step}</li>`)
      .join('');
  }
}

export function initExerciseGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const cards = document.querySelectorAll('.gallery-item-card');
  const modal = document.getElementById('gallery-lightbox-modal');
  const closeBtn = document.getElementById('gallery-modal-close');
  const prevBtn = document.getElementById('gallery-modal-prev');
  const nextBtn = document.getElementById('gallery-modal-next');

  // Filtering
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      activeFilter = filter;

      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach((card) => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Card click to open lightbox
  cards.forEach((card) => {
    const handleOpen = () => {
      const idx = parseInt(card.dataset.index, 10);
      updateModalContent(idx);
      if (modal) {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    };

    card.addEventListener('click', handleOpen);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpen();
      }
    });
  });

  // Modal controls
  const closeModal = () => {
    if (modal) {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Next / Prev navigation within active filter or all items
  const navigate = (direction) => {
    const visibleCards = Array.from(cards).filter(
      (c) => c.style.display !== 'none'
    );
    if (!visibleCards.length) return;

    const visibleIndices = visibleCards.map((c) => parseInt(c.dataset.index, 10));
    let currentPos = visibleIndices.indexOf(currentGalleryIndex);

    if (currentPos === -1) {
      currentPos = 0;
    } else {
      currentPos = (currentPos + direction + visibleIndices.length) % visibleIndices.length;
    }

    updateModalContent(visibleIndices[currentPos]);
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigate(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigate(1);
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}
