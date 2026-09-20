import { reviews } from '../data/reviews.js';

export function renderReviewsSection() {
  const reviewsHtml = reviews
    .map(
      (rev) => `
      <div class="review-card" data-condition="${rev.conditionTag} ${rev.category || ''}" data-id="${rev.id}">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="star-rating">★★★★★</span>
              <span class="badge badge-pine" style="font-size: 0.6875rem; padding: 2px 8px;">
                ${rev.badge || 'Verified Purchase'}
              </span>
            </div>
            <h4 style="font-size: 1.0625rem; font-weight: 800; color: var(--color-primary-navy); margin-top: 8px; line-height: 1.3;">
              "${rev.title}"
            </h4>
          </div>
        </div>

        <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6; flex: 1;">
          ${rev.content}
        </p>

        <div style="display: flex; justify-content: space-between; align-items: flex-end; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); margin-top: auto;">
          <div>
            <div style="font-weight: 800; font-size: 0.875rem; color: var(--color-text-main);">
              ${rev.author}
            </div>
            <div style="font-size: 0.75rem; color: var(--color-text-muted);">
              ${rev.role} • ${rev.location}
            </div>
          </div>
          <span class="badge badge-cyan" style="font-size: 0.6875rem;">
            ${rev.conditionTag}
          </span>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="catalog-section" id="reviews" style="background: var(--color-surface-white);">
      <div class="calc-container">
        
        <div class="section-header">
          <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 8px;">
            <span class="star-rating" style="font-size: 1.5rem;">★★★★★</span>
            <span style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy);">4.9 / 5.0 Rating</span>
          </div>
          <h2>Verified Patient &amp; Athlete Experiences</h2>
          <p>
            Read genuine feedback from verified buyers, spine specialists, and collegiate athletes across the United States.
          </p>
        </div>

        <!-- 2-Row Interactive Carousel Component -->
        <div class="reviews-carousel-wrapper" id="reviews-carousel-section">
          
          <!-- Controls Toolbar: Filters & Dropdown on Left, Counter & Prev/Next on Right -->
          <div class="reviews-controls-bar">
            <div class="reviews-filter-group" id="reviews-filter-bar">
              <button type="button" class="btn btn-secondary btn-sm active" data-filter="all" style="border-radius: var(--radius-full);">
                All Reviews (2,400+)
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-filter="Herniated Disc" style="border-radius: var(--radius-full);">
                Herniated Discs
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-filter="Athletic Recovery" style="border-radius: var(--radius-full);">
                Athletes &amp; Lifters
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-filter="Sciatica Relief" style="border-radius: var(--radius-full);">
                Sciatica Relief
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-filter="Clinical Practitioner" style="border-radius: var(--radius-full);">
                Doctors &amp; PTs
              </button>

              <!-- Category Dropdown for Direct Selection -->
              <div class="reviews-dropdown-wrap">
                <select id="reviews-category-dropdown" class="reviews-dropdown-select" aria-label="Filter reviews by category">
                  <option value="all">🔍 Filter Category (All 18)</option>
                  <option value="Herniated Disc">🩺 Herniated Discs (L4-S1)</option>
                  <option value="Athletic Recovery">🏋️ Athletes &amp; Lifters</option>
                  <option value="Sciatica Relief">⚡ Sciatica Relief</option>
                  <option value="Clinical Practitioner">👨‍⚕️ Doctors &amp; PTs</option>
                  <option value="Inversion Alternative">🔄 Inversion Alternative</option>
                  <option value="Renters Stand">🏢 Renters Stand</option>
                </select>
              </div>
            </div>

            <!-- Navigation Controls: Counter and Left/Right Arrows -->
            <div class="reviews-nav-controls" role="toolbar" aria-label="Reviews carousel navigation">
              <div class="reviews-counter" id="reviews-carousel-counter" aria-live="polite">
                Showing <span class="counter-curr" id="reviews-counter-curr">1–6</span> of <span class="counter-total" id="reviews-counter-total">18</span>
              </div>
              <div class="reviews-nav-arrows">
                <button type="button" class="reviews-nav-btn reviews-prev-btn" id="reviews-prev-btn" aria-label="Previous reviews" title="Previous reviews">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button type="button" class="reviews-nav-btn reviews-next-btn" id="reviews-next-btn" aria-label="Next reviews" title="Next reviews">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Carousel Shell with Side Floating Buttons & Viewport -->
          <div class="reviews-carousel-shell">
            <button type="button" class="reviews-float-arrow reviews-float-prev" id="reviews-float-prev" aria-label="Scroll to previous reviews">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <div class="reviews-carousel-viewport" id="reviews-carousel-viewport" tabindex="0" role="region" aria-label="Patient and Athlete Reviews Carousel">
              <div class="reviews-carousel-track" id="reviews-carousel-track">
                ${reviewsHtml}
              </div>
            </div>

            <button type="button" class="reviews-float-arrow reviews-float-next" id="reviews-float-next" aria-label="Scroll to next reviews">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          <!-- Pagination Indicator Dots -->
          <div class="reviews-carousel-dots" id="reviews-carousel-dots" role="tablist" aria-label="Review page indicators"></div>

        </div>

      </div>
    </section>
  `;
}

export function initReviewsSection() {
  if (typeof document === 'undefined') return;

  const viewport = document.getElementById('reviews-carousel-viewport');
  const track = document.getElementById('reviews-carousel-track');
  const prevBtn = document.getElementById('reviews-prev-btn');
  const nextBtn = document.getElementById('reviews-next-btn');
  const floatPrev = document.getElementById('reviews-float-prev');
  const floatNext = document.getElementById('reviews-float-next');
  const counterCurr = document.getElementById('reviews-counter-curr');
  const counterTotal = document.getElementById('reviews-counter-total');
  const dotsContainer = document.getElementById('reviews-carousel-dots');
  const filterButtons = document.querySelectorAll('#reviews-filter-bar button');
  const categoryDropdown = document.getElementById('reviews-category-dropdown');
  const reviewCards = document.querySelectorAll('#reviews-carousel-track .review-card');

  if (!viewport || !track) return;

  function getCardsPerView() {
    const width = viewport.clientWidth || (typeof window !== 'undefined' && window.innerWidth) || 1200;
    if (width >= 1024) return 6; // 3 columns * 2 rows
    if (width >= 640) return 4;  // 2 columns * 2 rows
    return 2;                    // 1 column * 2 rows
  }

  function getVisibleCards() {
    return Array.from(reviewCards).filter((card) => card.style.display !== 'none');
  }

  function updateCarouselUI() {
    const visibleCards = getVisibleCards();
    const cardsPerView = getCardsPerView();
    const totalPages = Math.max(1, Math.ceil(visibleCards.length / cardsPerView));
    const scrollLeft = viewport.scrollLeft || 0;
    const clientWidth = viewport.clientWidth || 1;
    const currentPage = Math.min(totalPages - 1, Math.max(0, Math.round(scrollLeft / clientWidth)));

    // Update counter
    if (counterCurr && counterTotal) {
      if (visibleCards.length === 0) {
        counterCurr.textContent = '0';
        counterTotal.textContent = '0';
      } else {
        const start = currentPage * cardsPerView + 1;
        const end = Math.min(visibleCards.length, (currentPage + 1) * cardsPerView);
        counterCurr.textContent = `${start}–${end}`;
        counterTotal.textContent = `${visibleCards.length}`;
      }
    }

    // Update navigation button disabled states
    const maxScroll = track.scrollWidth - viewport.clientWidth - 6;
    const canScrollPrev = scrollLeft > 10;
    const canScrollNext = scrollLeft < maxScroll && totalPages > 1;

    if (prevBtn) prevBtn.disabled = !canScrollPrev;
    if (nextBtn) nextBtn.disabled = !canScrollNext;
    if (floatPrev) floatPrev.disabled = !canScrollPrev;
    if (floatNext) floatNext.disabled = !canScrollNext;

    // Render / update dots
    if (dotsContainer) {
      if (totalPages <= 1) {
        dotsContainer.innerHTML = '';
      } else {
        dotsContainer.innerHTML = Array.from({ length: totalPages }, (_, i) => `
          <button 
            type="button" 
            class="reviews-carousel-dot ${i === currentPage ? 'is-active' : ''}" 
            data-page="${i}" 
            aria-label="Go to reviews page ${i + 1}"
          ></button>
        `).join('');

        dotsContainer.querySelectorAll('.reviews-carousel-dot').forEach((dot) => {
          dot.addEventListener('click', () => {
            const page = parseInt(dot.getAttribute('data-page'), 10) || 0;
            viewport.scrollTo({ left: page * viewport.clientWidth, behavior: 'smooth' });
          });
        });
      }
    }
  }

  function applyFilter(filter) {
    // Sync button active states
    filterButtons.forEach((btn) => {
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Sync dropdown value
    if (categoryDropdown) {
      categoryDropdown.value = filter;
    }

    // Toggle card visibility
    reviewCards.forEach((card) => {
      const condition = card.getAttribute('data-condition') || '';
      if (filter === 'all' || condition.toLowerCase().includes(filter.toLowerCase())) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    // Reset scroll to beginning
    viewport.scrollLeft = 0;

    // Update UI after layout recalculation
    setTimeout(updateCarouselUI, 40);
  }

  // Filter button clicks
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      applyFilter(filter);
    });
  });

  // Category dropdown change
  if (categoryDropdown) {
    categoryDropdown.addEventListener('change', (e) => {
      applyFilter(e.target.value);
    });
  }

  // Next / Prev button clicks
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      viewport.scrollBy({ left: viewport.clientWidth * 0.95, behavior: 'smooth' });
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      viewport.scrollBy({ left: -viewport.clientWidth * 0.95, behavior: 'smooth' });
    });
  }
  if (floatNext) {
    floatNext.addEventListener('click', () => {
      viewport.scrollBy({ left: viewport.clientWidth * 0.95, behavior: 'smooth' });
    });
  }
  if (floatPrev) {
    floatPrev.addEventListener('click', () => {
      viewport.scrollBy({ left: -viewport.clientWidth * 0.95, behavior: 'smooth' });
    });
  }

  // Scroll listener with RAF throttle
  let scrollTicking = false;
  viewport.addEventListener(
    'scroll',
    () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          updateCarouselUI();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    },
    { passive: true }
  );

  window.addEventListener('resize', updateCarouselUI, { passive: true });

  // Initial calculation
  setTimeout(updateCarouselUI, 100);
}
