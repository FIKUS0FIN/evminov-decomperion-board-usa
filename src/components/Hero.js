export const HERO_GALLERY_SLIDES = [
  {
    id: 'full-device',
    image: '/images/authentic/evminov-board-profile.jpg',
    thumb: '/images/authentic/evminov-board-profile.jpg',
    title: 'Complete Patented Evminov Spine Decompression Board & Stand',
    caption: 'Full Patented Evminov System: 8-layer resonant pine board, multi-tier carriage, and adjustable incline stand.',
    tag: 'Full Device Setup',
  },
  {
    id: 'clinical-traction',
    image: '/images/authentic/hero-full-device-traction.jpg',
    thumb: '/images/authentic/hero-full-device-traction.jpg',
    title: 'Low-Angle Physiological Spine Decompression in Action',
    caption: 'Controlled therapeutic incline (8°–35°) safely unloads herniated discs without inversion head-pressure.',
    tag: 'Clinical Decompression',
  },
  {
    id: 'carriage-detail',
    image: '/images/authentic/hero-carriage-traction-detail.jpg',
    thumb: '/images/authentic/hero-carriage-traction-detail.jpg',
    title: 'Ergonomic Multi-Tier Carriage & Quick-Lock Mechanism',
    caption: 'Movable carriage with rubberized ergonomic grips, quick-height adjustment, and steel safety locking pin.',
    tag: 'Carriage System',
  },
  {
    id: 'upper-spine',
    image: '/images/authentic/hero-reverse-decompression.jpg',
    thumb: '/images/authentic/hero-reverse-decompression.jpg',
    title: 'Thoracic Extension & Spinal Elongation Protocol',
    caption: 'Micro-amplitude kinesitherapy exercises stimulate disc nutrient rehydration and relieve deep paraspinal spasms.',
    tag: 'Thoracic Relief',
  },
  {
    id: 'glisson-loop',
    image: '/images/products/glisson-loop-studio.jpg',
    thumb: '/images/products/glisson-loop-studio.jpg',
    title: 'Glisson Loop Cervical Traction Harness',
    caption: 'Included clinical cervical harness for safe C1–C7 neck disc decompression, tech-neck relief, and headache elimination.',
    tag: 'Glisson Neck Loop',
  },
  {
    id: 'wood-craft',
    image: '/images/products/board-natural-pine-finish.jpg',
    thumb: '/images/products/board-natural-pine-finish.jpg',
    title: 'Resonant Carpathian Pine Craftsmanship',
    caption: 'Hand-selected resonant pine layered for high tensile elasticity, dynamic arching, and 450 lb tested strength.',
    tag: 'Resonant Pine Finish',
  },
];

export function renderHero() {
  return `
    <section class="hero-section" id="hero">
      <div class="calc-container">
        <div class="hero-grid">
          
          <!-- Hero Copy Column -->
          <div class="hero-content">
            <a href="#centers" class="hero-center-plaque" title="Explore Official Kyiv Vertebral Center, Athlete Biomechanics & Tactical Heritage">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--color-pine-emerald);"></span>
              <span class="hero-center-plaque-text">Clinical Heritage Since 1996 • Athletes, Tactical Care &amp; Clinical Centers</span>
              <span class="hero-center-plaque-arrow">→</span>
            </a>

            <div class="hero-social-proof">
              <span class="star-rating">★★★★★</span>
              <span style="font-size: 0.9375rem; font-weight: 700; color: var(--color-text-main);">
                4.9/5 Rating
              </span>
              <span style="font-size: 0.875rem; color: var(--color-text-muted);">
                (2,400+ Verified US Patients, Athletes &amp; Veterans)
              </span>
            </div>

            <h1 class="hero-title">
              Hospital-Grade Spinal Decompression at Home — <span>Without the Risks of Hanging Upside Down.</span>
            </h1>

            <p class="hero-subtitle">
              The patented natural pine traction board that safely unloads herniated discs, relieves chronic sciatica, counters 8+ hours of desk compression, and accelerates athletic and tactical recovery at controlled angles (8° to 35°). Recommended by physical therapists worldwide for 25+ years.
            </p>

            <div class="hero-cta-group">
              <a href="#catalog" class="btn btn-primary btn-lg">
                <span>Shop Decompression Boards</span>
                <span style="font-size: 0.875rem; opacity: 0.9; font-weight: 400;">(From $112/mo)</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>

              <a href="#calculator" class="btn btn-secondary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
                <span>Calculate Your Angle</span>
              </a>
            </div>

            <div class="hero-trust-bullets">
              <div class="trust-bullet-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Zero Inversion Stroke/Eye Risk</span>
              </div>
              <div class="trust-bullet-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Fast 2-4 Day Delivery (Burbank, CA)</span>
              </div>
              <div class="trust-bullet-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>HSA / FSA Pre-Tax Eligible</span>
              </div>
              <div class="trust-bullet-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>60-Day In-Home Money-Back Trial</span>
              </div>
            </div>
          </div>

          <!-- Hero Media Column: Interactive Multi-Photo Carousel Gallery -->
          <div class="hero-media-card" id="hero-media-card">
            
            <div class="hero-carousel-viewport" id="hero-carousel-viewport" role="region" aria-roledescription="carousel" aria-label="Evminov Board Photos">
              <div class="hero-carousel-track" id="hero-carousel-track">
                ${HERO_GALLERY_SLIDES.map((slide, idx) => `
                  <div class="hero-carousel-slide ${idx === 0 ? 'is-active' : ''}" data-index="${idx}" role="group" aria-roledescription="slide" aria-label="${slide.title}">
                    <img 
                      src="${slide.image}" 
                      alt="${slide.title}" 
                      class="hero-carousel-img"
                      loading="${idx === 0 ? 'eager' : 'lazy'}"
                    />
                    
                    <div class="hero-slide-badge">
                      <span class="hero-slide-tag">${slide.tag}</span>
                      <span class="hero-slide-counter">${idx + 1} / ${HERO_GALLERY_SLIDES.length}</span>
                    </div>

                    <div class="hero-slide-caption-bar">
                      <div class="hero-slide-caption-title">${slide.title}</div>
                      <div class="hero-slide-caption-sub">${slide.caption}</div>
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Navigation Arrow Controls -->
              <button type="button" class="hero-carousel-btn hero-carousel-prev" id="hero-prev-btn" aria-label="Previous photo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button type="button" class="hero-carousel-btn hero-carousel-next" id="hero-next-btn" aria-label="Next photo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>

              <!-- Floating Stock Badge -->
              <div class="hero-float-badge">
                <div class="stock-check-icon">✓</div>
                <div>
                  <div class="stock-badge-title">In Stock in Burbank, CA</div>
                  <div class="stock-badge-sub">Ships same day via UPS Ground</div>
                </div>
              </div>
            </div>

            <!-- Slide Indicators (Dots) -->
            <div class="hero-carousel-dots" id="hero-carousel-dots" role="tablist" aria-label="Select a slide">
              ${HERO_GALLERY_SLIDES.map((slide, idx) => `
                <button 
                  type="button" 
                  class="hero-carousel-dot ${idx === 0 ? 'is-active' : ''}" 
                  data-index="${idx}" 
                  role="tab" 
                  aria-selected="${idx === 0 ? 'true' : 'false'}"
                  aria-label="Slide ${idx + 1}: ${slide.tag}"
                ></button>
              `).join('')}
            </div>

            <!-- Interactive Thumbnails Strip -->
            <div class="hero-thumbnails-strip" id="hero-thumbnails-strip" aria-label="Product thumbnails">
              ${HERO_GALLERY_SLIDES.map((slide, idx) => `
                <button 
                  type="button" 
                  class="hero-thumb-btn ${idx === 0 ? 'is-active' : ''}" 
                  data-index="${idx}" 
                  aria-label="View photo of ${slide.tag}"
                >
                  <img src="${slide.thumb}" alt="${slide.tag} preview" class="hero-thumb-img" />
                  <span class="hero-thumb-label">${slide.tag}</span>
                </button>
              `).join('')}
            </div>

          </div>

        </div>
      </div>
    </section>
  `;
}

export function initHero() {
  const track = document.getElementById('hero-carousel-track');
  const viewport = document.getElementById('hero-carousel-viewport');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const dots = document.querySelectorAll('.hero-carousel-dot');
  const thumbs = document.querySelectorAll('.hero-thumb-btn');
  const slides = document.querySelectorAll('.hero-carousel-slide');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoplayTimer = null;
  let isHovered = false;

  function goToSlide(index, announce = true) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    // Move track
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active classes
    slides.forEach((slide, idx) => {
      const active = idx === currentIndex;
      slide.classList.toggle('is-active', active);
    });

    dots.forEach((dot, idx) => {
      const active = idx === currentIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    thumbs.forEach((thumb, idx) => {
      const active = idx === currentIndex;
      thumb.classList.toggle('is-active', active);
      if (active) {
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  // Next / Prev clicks
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
      resetAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
      resetAutoplay();
    });
  }

  // Dot clicks
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      goToSlide(idx);
      resetAutoplay();
    });
  });

  // Thumbnail clicks
  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      goToSlide(idx);
      resetAutoplay();
    });
  });

  // Touch Swipe Gestures (Mobile/Tablet)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;
  let isSwiping = false;

  if (viewport) {
    viewport.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchEndX = touchStartX;
        touchEndY = touchStartY;
        isSwiping = true;
        stopAutoplay();
      },
      { passive: true }
    );

    viewport.addEventListener(
      'touchmove',
      (e) => {
        if (!isSwiping) return;
        touchEndX = e.touches[0].clientX;
        touchEndY = e.touches[0].clientY;
      },
      { passive: true }
    );

    viewport.addEventListener(
      'touchend',
      () => {
        if (!isSwiping) return;
        isSwiping = false;
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;

        // Ensure horizontal swipe is dominant and above 35px threshold
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
          if (diffX > 0) {
            // Swiped Left -> Next slide
            goToSlide(currentIndex + 1);
          } else {
            // Swiped Right -> Previous slide
            goToSlide(currentIndex - 1);
          }
        }
        startAutoplay();
      },
      { passive: true }
    );

    // Keyboard navigation
    viewport.setAttribute('tabindex', '0');
    viewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        goToSlide(currentIndex + 1);
        resetAutoplay();
      } else if (e.key === 'ArrowLeft') {
        goToSlide(currentIndex - 1);
        resetAutoplay();
      }
    });

    // Pause on hover
    viewport.addEventListener('mouseenter', () => {
      isHovered = true;
      stopAutoplay();
    });

    viewport.addEventListener('mouseleave', () => {
      isHovered = false;
      startAutoplay();
    });
  }

  // Gentle Autoplay (every 6 seconds, paused when interacting)
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (!isHovered) {
        goToSlide(currentIndex + 1);
      }
    }, 6000);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  startAutoplay();
}

