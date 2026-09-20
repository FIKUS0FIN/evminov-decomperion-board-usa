import { reviews } from '../data/reviews.js';

export function renderReviewCard(rev) {
  return `
    <div class="review-card" data-condition="${rev.conditionTag} ${rev.category || ''}" data-id="${rev.id}">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="star-rating">★★★★★</span>
            <span class="badge badge-pine" style="font-size: 0.6875rem; padding: 2px 8px;">
              ${rev.badge || 'Verified Purchase'}
            </span>
          </div>
          <h4 style="font-size: 1.0625rem; font-weight: 800; color: var(--color-primary-navy); margin-top: 8px; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            "${rev.title}"
          </h4>
        </div>
      </div>

      <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6; flex: 1; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
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
  `;
}

export function renderReviewPages(list, pageSize = 6) {
  const pagesCount = Math.max(1, Math.ceil(list.length / pageSize));
  let html = '';
  for (let p = 0; p < pagesCount; p++) {
    const chunk = list.slice(p * pageSize, (p + 1) * pageSize);
    html += `
      <div class="reviews-carousel-page" data-page="${p}">
        ${chunk.map((rev) => renderReviewCard(rev)).join('')}
      </div>
    `;
  }
  return html;
}

export function renderReviewsSection() {
  const reviewsPagesHtml = renderReviewPages(reviews, 6);

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

        <!-- 2-Row Interactive Carousel Component (6 Cards Per View: 3 per row × 2 rows) -->
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
                ${reviewsPagesHtml}
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

  if (!viewport || !track) return;

  const PAGE_SIZE = 6;
  let currentFilter = 'all';
  let filteredReviews = [...reviews];
  let currentPage = 0;
  let totalPages = Math.max(1, Math.ceil(filteredReviews.length / PAGE_SIZE));

  function updateUI() {
    // Update counter
    if (counterCurr && counterTotal) {
      if (filteredReviews.length === 0) {
        counterCurr.textContent = '0';
        counterTotal.textContent = '0';
      } else {
        const start = currentPage * PAGE_SIZE + 1;
        const end = Math.min(filteredReviews.length, (currentPage + 1) * PAGE_SIZE);
        counterCurr.textContent = `${start}–${end}`;
        counterTotal.textContent = `${filteredReviews.length}`;
      }
    }

    // Button states
    const canPrev = currentPage > 0;
    const canNext = currentPage < totalPages - 1;

    if (prevBtn) prevBtn.disabled = !canPrev;
    if (nextBtn) nextBtn.disabled = !canNext;
    if (floatPrev) floatPrev.disabled = !canPrev;
    if (floatNext) floatNext.disabled = !canNext;

    // Dots
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
            goToPage(page);
          });
        });
      }
    }
  }

  function goToPage(pageIdx) {
    if (pageIdx < 0 || pageIdx >= totalPages) return;
    currentPage = pageIdx;
    viewport.scrollTo({
      left: currentPage * viewport.clientWidth,
      behavior: 'smooth',
    });
    updateUI();
  }

  function applyFilter(filter) {
    currentFilter = filter;

    filterButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    });

    if (categoryDropdown) {
      categoryDropdown.value = filter;
    }

    if (filter === 'all') {
      filteredReviews = [...reviews];
    } else {
      filteredReviews = reviews.filter((rev) => {
        const match = `${rev.conditionTag} ${rev.category || ''}`.toLowerCase();
        return match.includes(filter.toLowerCase());
      });
    }

    totalPages = Math.max(1, Math.ceil(filteredReviews.length / PAGE_SIZE));
    currentPage = 0;

    if (filteredReviews.length === 0) {
      track.innerHTML = `
        <div class="reviews-carousel-page" data-page="0" style="display: flex; align-items: center; justify-content: center; min-height: 280px; width: 100%;">
          <div style="text-align: center; color: var(--color-text-muted); padding: 40px;">
            <p style="font-weight: 700; font-size: 1.125rem; margin-bottom: 8px;">No reviews found for this category.</p>
            <p style="font-size: 0.875rem;">Try selecting "All Reviews" to explore all patient experiences.</p>
          </div>
        </div>
      `;
    } else {
      track.innerHTML = renderReviewPages(filteredReviews, PAGE_SIZE);
    }

    viewport.scrollLeft = 0;
    updateUI();
  }

  // Filter events
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => applyFilter(btn.getAttribute('data-filter')));
  });

  if (categoryDropdown) {
    categoryDropdown.addEventListener('change', (e) => applyFilter(e.target.value));
  }

  // Navigation events
  if (nextBtn) nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
  if (prevBtn) prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
  if (floatNext) floatNext.addEventListener('click', () => goToPage(currentPage + 1));
  if (floatPrev) floatPrev.addEventListener('click', () => goToPage(currentPage - 1));

  // Scroll listener with RAF
  let scrollTicking = false;
  viewport.addEventListener(
    'scroll',
    () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          const clientWidth = viewport.clientWidth || 1;
          const pageIdx = Math.round(viewport.scrollLeft / clientWidth);
          if (pageIdx !== currentPage && pageIdx >= 0 && pageIdx < totalPages) {
            currentPage = pageIdx;
            updateUI();
          }
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    },
    { passive: true }
  );

  window.addEventListener(
    'resize',
    () => {
      viewport.scrollTo({
        left: currentPage * viewport.clientWidth,
        behavior: 'auto',
      });
      updateUI();
    },
    { passive: true }
  );

  updateUI();
}
