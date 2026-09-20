import { blogPosts } from '../data/blogPosts.js';

export function renderBlogCard(post) {
  return `
    <article class="blog-article-card card" data-category="${post.category}" data-id="${post.id}">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="badge badge-cyan" style="font-size: 0.75rem;">${post.category}</span>
        <span style="font-size: 0.8125rem; color: var(--color-text-muted);">${post.readTime}</span>
      </div>

      <h3 style="font-size: 1.125rem; font-weight: 800; color: var(--color-primary-navy); line-height: 1.35; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
        ${post.title}
      </h3>

      <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.5; flex: 1; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
        ${post.excerpt}
      </p>

      ${
        post.paa && post.paa.length > 0
          ? `
        <div style="background: var(--color-bg-light); border-radius: var(--radius-md); padding: 10px; font-size: 0.8125rem; border-left: 3px solid var(--color-traction-cyan); margin: 4px 0;">
          <div style="font-weight: 700; color: var(--color-primary-navy); margin-bottom: 2px;">
            ❓ Common Question: ${post.paa[0].q}
          </div>
          <div style="color: var(--color-text-muted); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            ${post.paa[0].a}
          </div>
        </div>
      `
          : ''
      }

      <div style="margin-top: auto; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.8125rem; color: var(--color-text-muted);">${post.date}</span>
        <button type="button" class="btn btn-secondary btn-sm read-article-btn" data-article-id="${post.id}">
          Read Clinical Guide →
        </button>
      </div>
    </article>
  `;
}

export function renderBlogPages(list, pageSize = 6) {
  const pagesCount = Math.max(1, Math.ceil(list.length / pageSize));
  let html = '';
  for (let p = 0; p < pagesCount; p++) {
    const chunk = list.slice(p * pageSize, (p + 1) * pageSize);
    html += `
      <div class="blog-carousel-page" data-page="${p}">
        ${chunk.map((post) => renderBlogCard(post)).join('')}
      </div>
    `;
  }
  return html;
}

export function renderBlogSection() {
  const initialPagesHtml = renderBlogPages(blogPosts, 6);

  return `
    <section class="catalog-section" id="blog" style="background: var(--color-bg-light); border-top: 1px solid var(--color-border-subtle);">
      <div class="calc-container">
        
        <div class="section-header">
          <span class="badge badge-cyan" style="margin-bottom: 12px;">Evidence-Based Spine Education</span>
          <h2>Clinical Guides &amp; Research Articles</h2>
          <p>
            Explore our comprehensive guides on disc decompression mechanics, safe alternatives to inversion tables, and lifter recovery.
          </p>
        </div>

        <!-- 2-Row Interactive Carousel Component (6 Articles Per View: 3 per row × 2 rows) -->
        <div class="blog-carousel-wrapper" id="blog-carousel-section">
          
          <!-- Controls Toolbar: Filters & Dropdown on Left, Counter & Prev/Next on Right -->
          <div class="blog-controls-bar">
            <div class="blog-filter-group" id="blog-filter-bar">
              <button type="button" class="btn btn-secondary btn-sm active" data-filter="all" style="border-radius: var(--radius-full);">
                All Guides (${blogPosts.length})
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-filter="Herniated Disc" style="border-radius: var(--radius-full);">
                Herniated Discs
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-filter="Inversion" style="border-radius: var(--radius-full);">
                Inversion Tables
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-filter="Athletic" style="border-radius: var(--radius-full);">
                Athletic Recovery
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-filter="Sciatica" style="border-radius: var(--radius-full);">
                Sciatica Relief
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-filter="Hygiene" style="border-radius: var(--radius-full);">
                Spine Hygiene
              </button>

              <!-- Category Dropdown for Direct Selection -->
              <div class="blog-dropdown-wrap">
                <select id="blog-category-dropdown" class="blog-dropdown-select" aria-label="Filter clinical articles by topic">
                  <option value="all">🔍 Filter Topic (All ${blogPosts.length})</option>
                  <option value="Herniated Disc">🩺 Herniated Discs (L4-S1 Recovery)</option>
                  <option value="Inversion">🔄 Inversion Alternative &amp; Hazards</option>
                  <option value="Athletic">🏋️ Athletes &amp; Heavy Lifters</option>
                  <option value="Sciatica">⚡ Sciatica Nerve Decompression</option>
                  <option value="WFH Posture">💻 WFH Posture &amp; Lumbar Health</option>
                  <option value="Preventive Spine Hygiene">🦷 "Toothbrush for the Spine"</option>
                  <option value="Spine Decompression">📐 At-Home Clinical Traction Guide</option>
                  <option value="Pediatric">🧒 Youth Scoliosis &amp; Growth Plates</option>
                </select>
              </div>
            </div>

            <!-- Navigation Controls: Counter and Left/Right Arrows -->
            <div class="blog-nav-controls" role="toolbar" aria-label="Clinical guides carousel navigation">
              <div class="blog-counter" id="blog-carousel-counter" aria-live="polite">
                Showing <span class="counter-curr" id="blog-counter-curr">1–6</span> of <span class="counter-total" id="blog-counter-total">${blogPosts.length}</span>
              </div>
              <div class="blog-nav-arrows">
                <button type="button" class="blog-nav-btn blog-prev-btn" id="blog-prev-btn" aria-label="Previous clinical guides" title="Previous guides">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button type="button" class="blog-nav-btn blog-next-btn" id="blog-next-btn" aria-label="Next clinical guides" title="Next guides">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Carousel Shell with Side Floating Buttons & Viewport -->
          <div class="blog-carousel-shell">
            <button type="button" class="blog-float-arrow blog-float-prev" id="blog-float-prev" aria-label="Scroll to previous clinical guides">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <div class="blog-carousel-viewport" id="blog-carousel-viewport" tabindex="0" role="region" aria-label="Clinical Guides and Research Articles Carousel">
              <div class="blog-carousel-track" id="blog-carousel-track">
                ${initialPagesHtml}
              </div>
            </div>

            <button type="button" class="blog-float-arrow blog-float-next" id="blog-float-next" aria-label="Scroll to next clinical guides">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          <!-- Pagination Indicator Dots -->
          <div class="blog-carousel-dots" id="blog-carousel-dots" role="tablist" aria-label="Clinical guides page indicators"></div>

        </div>

      </div>

      <!-- Article Reader Modal -->
      <div class="modal-overlay" id="article-modal">
        <div class="modal-content" style="max-width: 750px; max-height: 85vh; display: flex; flex-direction: column;">
          <div style="padding: 24px; border-bottom: 1px solid var(--color-border-subtle); display: flex; justify-content: space-between; align-items: center;">
            <div id="article-modal-category" class="badge badge-pine"></div>
            <button type="button" class="modal-close-btn" id="close-article-modal" style="position: static;" aria-label="Close Article">✕</button>
          </div>
          <div id="article-modal-body" style="padding: 30px; overflow-y: auto; line-height: 1.7; color: var(--color-text-main);">
            <!-- Dynamic Content -->
          </div>
          <div style="padding: 20px 24px; border-top: 1px solid var(--color-border-subtle); background: var(--color-bg-light); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.875rem; color: var(--color-text-muted);">Ready to test at home risk-free?</span>
            <a href="#catalog" class="btn btn-primary btn-sm" id="article-modal-cta">
              Shop Evminov Boards ($112/mo)
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initBlogSection() {
  if (typeof document === 'undefined') return;

  // Article Reader Modal logic
  const modal = document.getElementById('article-modal');
  const closeBtn = document.getElementById('close-article-modal');
  const modalCategory = document.getElementById('article-modal-category');
  const modalBody = document.getElementById('article-modal-body');
  const ctaBtn = document.getElementById('article-modal-cta');

  function openArticleModal(id) {
    const post = blogPosts.find((p) => p.id === id);
    if (post && modal && modalBody) {
      if (modalCategory) modalCategory.textContent = post.category;
      modalBody.innerHTML = `
        <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 12px; line-height: 1.25;">
          ${post.title}
        </h2>
        <div style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 24px;">
          Published: ${post.date} • ${post.readTime}
        </div>
        <div class="article-inner-html">
          ${post.content}
        </div>
        ${
          post.paa && post.paa.length > 0
            ? `
          <div style="margin-top: 30px; padding: 20px; background: var(--color-bg-light); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
            <h4 style="font-size: 1.125rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 12px;">
              Frequently Asked Questions (PAA)
            </h4>
            ${post.paa
              .map(
                (item) => `
              <div style="margin-bottom: 12px;">
                <div style="font-weight: 700; font-size: 0.9375rem; color: var(--color-primary-navy); margin-bottom: 4px;">
                  Q: ${item.q}
                </div>
                <div style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.5;">
                  ${item.a}
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        `
            : ''
        }
      `;
      modal.classList.add('active');
    }
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (ctaBtn && modal) {
    ctaBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  // 2-Row Carousel Gallery & Controls logic
  const viewport = document.getElementById('blog-carousel-viewport');
  const track = document.getElementById('blog-carousel-track');
  const prevBtn = document.getElementById('blog-prev-btn');
  const nextBtn = document.getElementById('blog-next-btn');
  const floatPrev = document.getElementById('blog-float-prev');
  const floatNext = document.getElementById('blog-float-next');
  const counterCurr = document.getElementById('blog-counter-curr');
  const counterTotal = document.getElementById('blog-counter-total');
  const dotsContainer = document.getElementById('blog-carousel-dots');
  const filterButtons = document.querySelectorAll('#blog-filter-bar button');
  const categoryDropdown = document.getElementById('blog-category-dropdown');

  if (!viewport || !track) return;

  // Event delegation on track for reading articles
  track.addEventListener('click', (e) => {
    const readBtn = e.target.closest('.read-article-btn');
    if (readBtn) {
      const articleId = readBtn.getAttribute('data-article-id');
      openArticleModal(articleId);
    }
  });

  const PAGE_SIZE = 6;
  let currentFilter = 'all';
  let filteredPosts = [...blogPosts];
  let currentPage = 0;
  let totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));

  function updateUI() {
    // Update counter
    if (counterCurr && counterTotal) {
      if (filteredPosts.length === 0) {
        counterCurr.textContent = '0';
        counterTotal.textContent = '0';
      } else {
        const start = currentPage * PAGE_SIZE + 1;
        const end = Math.min(filteredPosts.length, (currentPage + 1) * PAGE_SIZE);
        counterCurr.textContent = `${start}–${end}`;
        counterTotal.textContent = `${filteredPosts.length}`;
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
            class="blog-carousel-dot ${i === currentPage ? 'is-active' : ''}" 
            data-page="${i}" 
            aria-label="Go to clinical guides page ${i + 1}"
          ></button>
        `).join('');

        dotsContainer.querySelectorAll('.blog-carousel-dot').forEach((dot) => {
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
      filteredPosts = [...blogPosts];
    } else {
      filteredPosts = blogPosts.filter((post) => {
        const match = `${post.category} ${post.title} ${post.slug}`.toLowerCase();
        return match.includes(filter.toLowerCase());
      });
    }

    totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
    currentPage = 0;

    if (filteredPosts.length === 0) {
      track.innerHTML = `
        <div class="blog-carousel-page" data-page="0" style="display: flex; align-items: center; justify-content: center; min-height: 280px; width: 100%;">
          <div style="text-align: center; color: var(--color-text-muted); padding: 40px;">
            <p style="font-weight: 700; font-size: 1.125rem; margin-bottom: 8px;">No guides found for this topic.</p>
            <p style="font-size: 0.875rem;">Try selecting "All Guides" to explore all clinical research.</p>
          </div>
        </div>
      `;
    } else {
      track.innerHTML = renderBlogPages(filteredPosts, PAGE_SIZE);
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
