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
            <!-- Organic Clinical Trust & Heritage Banner Card -->
            <div class="hero-trust-banner-card">
              <a href="#centers" class="hero-trust-heritage-strip" title="Explore Kyiv Flagship Center &amp; 30 Years of Clinical Evidence">
                <div class="hero-trust-heritage-left">
                  <span class="clinical-live-pulse" aria-hidden="true"></span>
                  <span class="heritage-primary-text">Established 1996 in Kyiv • 30 Years of Clinical Vertebrology • Over 500,000 Patients Successfully Restored</span>
                </div>
                <span class="heritage-cta-link">
                  <span>Official Clinic</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </a>

              <div class="hero-trust-proof-row">
                <div class="hero-trust-rating-cluster">
                  <div class="hero-trust-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <div class="hero-trust-score">
                    <span class="score-val">4.9 / 5.0</span>
                    <span class="score-sub">Rating</span>
                  </div>
                </div>

                <div class="hero-trust-meta-cluster">
                  <span class="meta-tag-pill">2,400+ Verified US Cases</span>
                  <span class="meta-divider">•</span>
                  <span class="meta-proven-text">Continuous Medical Practice Since 1996 • 500k+ Healed Patients</span>
                </div>
              </div>
            </div>

            <h1 class="hero-title">
              Hospital-Grade Spine Decompression at Home — <span>Without the Risks of Hanging Upside Down.</span>
            </h1>

            <p class="hero-subtitle">
              Clinically proven since 1996 at the Flagship Evminov Vertebral-Health Center in Kyiv. For 30 continuous years, our patented resonant pine traction system has successfully guided over 500,000 patients out of debilitating pain — safely unloading herniated discs (L4–S1), relieving chronic sciatica, countering 8+ hours of desk and standing compression, and helping 93.4% of patients avoid surgery entirely. The premier non-medicinal, non-surgical home therapy saving patients 200+ hours and $3,500/year vs clinic visits.
            </p>

            <div class="hero-cta-group">
              <a href="#catalog" class="btn btn-primary btn-lg">
                <span>Shop Decompression Boards</span>
                <span style="font-size: 0.875rem; opacity: 0.9; font-weight: 400;">(From $112/mo)</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>

              <a href="#us-shipping" class="btn btn-secondary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                <span>50-State & Global Delivery</span>
              </a>
            </div>

            <div class="hero-trust-bullets">
              <div class="trust-bullet-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Continuous Practice Since 1996 (30 Years)</span>
              </div>
              <div class="trust-bullet-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>500,000+ Successfully Healed Patients</span>
              </div>
              <div class="trust-bullet-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Zero Inversion Stroke/Eye Risk</span>
              </div>
              <div class="trust-bullet-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Fast 2–4 Day US Delivery &amp; HSA/FSA Eligible</span>
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
                    </div>

                    <div class="hero-slide-caption-bar">
                      <div class="hero-slide-caption-content">
                        <div class="hero-slide-caption-title">${slide.title}</div>
                        <div class="hero-slide-caption-sub">${slide.caption}</div>
                      </div>
                      <span class="hero-slide-counter">${idx + 1} / ${HERO_GALLERY_SLIDES.length}</span>
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
  if (typeof document === 'undefined') return;
  const track = document.getElementById('hero-carousel-track');
  const viewport = document.getElementById('hero-carousel-viewport');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const dots = document.querySelectorAll('.hero-carousel-dot');
  const thumbs = document.querySelectorAll('.hero-thumb-btn');
  const slides = document.querySelectorAll('.hero-carousel-slide');
  const thumbsStrip = document.getElementById('hero-thumbnails-strip');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoplayTimer = null;
  let isHovered = false;
  let isHeroVisible = true;

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
      if (active && thumbsStrip) {
        // Scroll ONLY the internal horizontal container, NEVER window.scrollIntoView
        const scrollTarget = thumb.offsetLeft - (thumbsStrip.clientWidth / 2) + (thumb.clientWidth / 2);
        thumbsStrip.scrollTo({ left: Math.max(0, scrollTarget), behavior: 'smooth' });
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

  // Gentle Autoplay (every 6 seconds, paused when interacting or scrolled out of view)
  function startAutoplay() {
    stopAutoplay();
    if (!isHeroVisible) return;
    autoplayTimer = setInterval(() => {
      if (!isHovered && isHeroVisible) {
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

  // Only run autoplay when the hero section is actually in the viewport
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const heroEl = document.querySelector('.hero') || document.querySelector('.hero-section') || viewport;
    if (heroEl) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isHeroVisible = entry.isIntersecting;
            if (!isHeroVisible) {
              stopAutoplay();
            } else if (!isHovered) {
              startAutoplay();
            }
          });
        },
        { threshold: 0.1 }
      );
      heroObserver.observe(heroEl);
    }
  }

  startAutoplay();
}

