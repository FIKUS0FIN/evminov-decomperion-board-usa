import { blogPosts } from '../data/blogPosts.js';

export function renderBlogSection() {
  const articlesHtml = blogPosts
    .map(
      (post) => `
      <article class="card" style="display: flex; flex-direction: column; gap: 14px; background: var(--color-surface-white);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="badge badge-cyan" style="font-size: 0.75rem;">${post.category}</span>
          <span style="font-size: 0.8125rem; color: var(--color-text-muted);">${post.readTime}</span>
        </div>

        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy); line-height: 1.35;">
          ${post.title}
        </h3>

        <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6; flex: 1;">
          ${post.excerpt}
        </p>

        <!-- PAA Preview Box -->
        ${
          post.paa && post.paa.length > 0
            ? `
          <div style="background: var(--color-bg-light); border-radius: var(--radius-md); padding: 12px; font-size: 0.8125rem; border-left: 3px solid var(--color-traction-cyan);">
            <div style="font-weight: 700; color: var(--color-primary-navy); margin-bottom: 4px;">
              ❓ Common Question: ${post.paa[0].q}
            </div>
            <div style="color: var(--color-text-muted); line-height: 1.4;">
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
    `
    )
    .join('');

  return `
    <section class="catalog-section" id="blog" style="background: var(--color-bg-light); border-top: 1px solid var(--color-border-subtle);">
      <div class="calc-container">
        
        <div class="section-header">
          <span class="badge badge-cyan" style="margin-bottom: 12px;">Evidence-Based Spine Education</span>
          <h2>Clinical Guides & Research Articles</h2>
          <p>
            Explore our comprehensive guides on disc decompression mechanics, safe alternatives to inversion tables, and lifter recovery.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 28px;">
          ${articlesHtml}
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
  const modal = document.getElementById('article-modal');
  const closeBtn = document.getElementById('close-article-modal');
  const modalCategory = document.getElementById('article-modal-category');
  const modalBody = document.getElementById('article-modal-body');
  const ctaBtn = document.getElementById('article-modal-cta');

  document.querySelectorAll('.read-article-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-article-id');
      const post = blogPosts.find((p) => p.id === id);
      if (post && modal && modalBody) {
        modalCategory.textContent = post.category;
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
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (ctaBtn && modal) {
    ctaBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
}
