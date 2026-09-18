import { reviews } from '../data/reviews.js';

export function renderReviewsSection() {
  const reviewsHtml = reviews
    .map(
      (rev) => `
      <div class="review-card" data-condition="${rev.conditionTag}">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="star-rating">★★★★★</span>
              <span class="badge badge-pine" style="font-size: 0.6875rem; padding: 2px 8px;">
                Verified Purchase
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
          <h2>Verified Patient & Athlete Experiences</h2>
          <p>
            Read genuine feedback from verified buyers, spine specialists, and collegiate athletes across the United States.
          </p>

          <!-- Filter Pills -->
          <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin-top: 24px;" id="reviews-filter-bar">
            <button type="button" class="btn btn-secondary btn-sm active" data-filter="all" style="border-radius: var(--radius-full);">
              All Reviews (2,400+)
            </button>
            <button type="button" class="btn btn-secondary btn-sm" data-filter="Herniated Disc" style="border-radius: var(--radius-full);">
              Herniated Discs
            </button>
            <button type="button" class="btn btn-secondary btn-sm" data-filter="Athletic Recovery" style="border-radius: var(--radius-full);">
              Athletes & Lifters
            </button>
            <button type="button" class="btn btn-secondary btn-sm" data-filter="Sciatica Relief" style="border-radius: var(--radius-full);">
              Sciatica Relief
            </button>
            <button type="button" class="btn btn-secondary btn-sm" data-filter="Clinical Practitioner" style="border-radius: var(--radius-full);">
              Doctors & PTs
            </button>
          </div>
        </div>

        <div class="reviews-grid" id="reviews-grid">
          ${reviewsHtml}
        </div>

      </div>
    </section>
  `;
}

export function initReviewsSection() {
  const filterButtons = document.querySelectorAll('#reviews-filter-bar button');
  const reviewCards = document.querySelectorAll('#reviews-grid .review-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      reviewCards.forEach((card) => {
        const condition = card.getAttribute('data-condition') || '';
        if (filter === 'all' || condition.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
