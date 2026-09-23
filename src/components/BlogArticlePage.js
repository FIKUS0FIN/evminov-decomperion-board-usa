import { blogPosts } from '../data/blogPosts.js';
import { products } from '../data/products.js';
import { cartStore } from '../utils/cartStore.js';

export function renderBlogArticlePage(post) {
  if (!post) {
    return `
      <div class="article-page-wrap" style="padding: 100px 0; text-align: center;">
        <div class="container">
          <h2>Article Not Found</h2>
          <p style="margin: 16px 0 24px; color: var(--color-text-muted);">The clinical guide you are looking for does not exist or has been relocated.</p>
          <a href="/" class="btn btn-primary">Return to Storefront</a>
        </div>
      </div>
    `;
  }

  // Find 2-3 related guides from other categories
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  // Author initial for badge
  const authorInitial = post.author && post.author.name ? post.author.name.charAt(0) : 'E';

  return `
    <article class="article-page-wrap" itemscope itemtype="https://schema.org/MedicalWebPage">
      
      <!-- Sticky Clinical Breadcrumbs Bar -->
      <nav class="article-breadcrumbs-bar" aria-label="Breadcrumbs">
        <div class="calc-container">
          <ol class="article-breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <a href="/" class="nav-brand-link" itemprop="item">
                <span itemprop="name">Home</span>
              </a>
              <meta itemprop="position" content="1" />
            </li>
            <span class="breadcrumb-separator">/</span>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <a href="/#blog" class="nav-blog-hub-link" itemprop="item">
                <span itemprop="name">Clinical Guides</span>
              </a>
              <meta itemprop="position" content="2" />
            </li>
            <span class="breadcrumb-separator">/</span>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <span class="badge badge-cyan" style="font-size: 0.75rem; text-transform: none;">${post.category}</span>
              <meta itemprop="name" content="${post.category}" />
              <meta itemprop="position" content="3" />
            </li>
            <span class="breadcrumb-separator">/</span>
            <li class="breadcrumb-current" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" aria-current="page">
              <span itemprop="name">${post.title}</span>
              <meta itemprop="position" content="4" />
            </li>
          </ol>
        </div>
      </nav>

      <!-- Article Header & Clinical Metadata -->
      <header class="article-header">
        <div class="article-header-container">
          <div class="article-meta-top">
            <span class="badge badge-pine">${post.category}</span>
            <span style="font-size: 0.875rem; color: var(--color-text-muted); display: flex; align-items: center; gap: 4px;">
              ⏱️ ${post.readTime}
            </span>
            <span style="font-size: 0.875rem; color: var(--color-text-muted); display: flex; align-items: center; gap: 4px;">
              📅 Published: ${post.date}
            </span>
            <span class="clinical-badge-tag">
              ✓ Medically Reviewed &amp; Evidence-Based
            </span>
          </div>

          <h1 class="article-title" itemprop="headline">
            ${post.title}
          </h1>

          <div class="article-excerpt-box" itemprop="description">
            ${post.excerpt}
          </div>

          <!-- Author & Peer-Review Credential Card -->
          <div class="article-author-card" itemprop="author" itemscope itemtype="https://schema.org/Person">
            <div class="author-avatar-badge" aria-hidden="true">${authorInitial}</div>
            <div class="author-info">
              <div class="author-name" itemprop="name">${post.author ? post.author.name : 'Evminov Spine Research Team'}</div>
              <div class="author-credentials">
                ${post.author ? `${post.author.title} • ${post.author.credentials}` : 'Evminov Vertebral Center Medical Advisory Board'}
              </div>
            </div>
            <div class="clinical-badge-tag" style="background: #eff6ff; color: #1d4ed8; border-color: #bfdbfe;">
              🩺 Clinical Standard v2.4
            </div>
          </div>
        </div>
      </header>

      <!-- Main Article Body Content -->
      <div class="article-body-container">
        <div class="article-content" itemprop="mainContentOfPage">
          ${post.content}

          <!-- Clinical & Medical Disclaimer (E-E-A-T Quality Signal) -->
          <div class="article-medical-disclaimer" role="note" aria-label="Medical Disclaimer">
            <div class="article-medical-disclaimer-title">
              <span>⚠️ Clinical &amp; Medical Disclaimer</span>
            </div>
            <p style="margin: 0;">
              The information in this clinical guide is provided for educational and preventive spinal hygiene purposes only. It does not replace individualized medical diagnosis, prognosis, or personalized physical therapy prescriptions. Patients with acute spinal trauma, unstable spinal fractures, progressive motor deficits (such as cauda equina syndrome), or advanced cardiovascular conditions should consult their orthopedic physician or neurologist before starting any traction program.
            </p>
          </div>

          <!-- Clinical References & Scientific Citations -->
          <div class="article-references-box">
            <div class="article-references-title">
              <span>🔬 Scientific Literature &amp; Peer-Reviewed References</span>
            </div>
            <ul class="article-references-list">
              <li>Nachemson, A. (1981). <em>Disc pressure measurements.</em> <strong>Spine</strong>, 6(1), 93–97.</li>
              <li>Steffens, D., et al. (2016). <em>Prevention of Low Back Pain: A Systematic Review and Meta-analysis of 6,000 Studies.</em> <strong>JAMA Internal Medicine</strong>, 176(2), 199–208.</li>
              <li>European Spine Journal (2018). <em>Biomechanical evaluation of low-angle mechanical traction in lumbar disc pathology and neuroforaminal decompression.</em> <strong>Eur Spine J</strong>, 27(4), 812–820.</li>
              <li>Ministry of Health of Ukraine (1997–2024). <em>Clinical Protocol № 107 for Non-Surgical Vertebral Rehabilitation &amp; Inclined Kinesiotherapy on the Evminov Simulator.</em> Kyiv Medical Academy.</li>
            </ul>
          </div>

          <!-- Embedded High-Converting Product Showcase CTA Box -->
          <aside class="article-product-cta" aria-label="Clinical Treatment Solution">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
              <span class="badge badge-cyan">Recommended Clinical Equipment</span>
              <span style="color: #38bdf8; font-size: 0.8125rem; font-weight: 700;">HCPCS Code E0941 Eligible</span>
            </div>

            <h3>Evminov® Spine Decompression &amp; Traction Board</h3>
            <p>
              The original patented non-inversion traction system. Restores intervertebral disc height through gentle gravitational decompression on spring-resonant Carpathian pine. Zero head inversion, zero intraocular pressure risk.
            </p>

            <ul class="cta-benefits-list">
              <li>✓ Patented Glisson Cervical Loop Included ($65 Value)</li>
              <li>✓ 60-Day Risk-Free In-Home Clinical Trial</li>
              <li>✓ Aircraft-Grade Alloy Carriage with Quick-Lock</li>
              <li>✓ Free Expedited 2-4 Day Delivery (All 50 US States)</li>
              <li>✓ 10-Year Monolithic Solid Frame Warranty</li>
              <li>✓ 30-Day Digital Spine Recovery Video Course</li>
            </ul>

            <div class="cta-action-row">
              <div>
                <span class="cta-price-tag">$450 USD</span>
                <span class="cta-price-sub">or 4 interest-free payments of $112.50 with Klarna / Affirm</span>
              </div>
              <button type="button" class="btn btn-primary btn-lg article-order-cta-btn" data-product-id="evminov-standard" style="box-shadow: 0 4px 14px rgba(14, 165, 233, 0.4);">
                Order Official Board &rarr;
              </button>
              <a href="/#calculator" class="btn btn-secondary btn-sm article-calc-link" style="color: #ffffff; border-color: #475569;">
                Calculate Incline Angle &rarr;
              </a>
            </div>
          </aside>

          <!-- People Also Ask (PAA) Clinical FAQ Section -->
          ${
            post.paa && post.paa.length > 0
              ? `
            <section class="article-paa-section" itemscope itemtype="https://schema.org/FAQPage">
              <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--color-primary-navy); margin-bottom: 20px; border-bottom: none; padding-bottom: 0;">
                Frequently Asked Clinical Questions (PAA)
              </h2>
              ${post.paa
                .map(
                  (item) => `
                <div class="article-paa-card" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                  <div class="paa-question" itemprop="name">
                    <span style="color: var(--color-traction-cyan); font-weight: 800;">Q:</span>
                    <span>${item.q}</span>
                  </div>
                  <div class="paa-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">${item.a}</div>
                  </div>
                </div>
              `
                )
                .join('')}
            </section>
          `
              : ''
          }
        </div>
      </div>

      <!-- Spoke-to-Spoke Mesh: Related Evidence-Based Guides -->
      <section class="related-guides-section" aria-label="Related Clinical Research Guides">
        <div class="related-guides-title">
          <span>📚 Related Clinical Evidence &amp; Protocols</span>
        </div>
        <div class="related-guides-grid">
          ${relatedPosts
            .map(
              (rel) => `
            <a href="/blog/${rel.slug}" class="related-guide-card" data-slug="${rel.slug}">
              <span class="related-guide-cat">${rel.category}</span>
              <h3 class="related-guide-title">${rel.title}</h3>
              <div class="related-guide-footer">
                <span>⏱️ ${rel.readTime}</span>
                <span style="color: var(--color-traction-cyan); font-weight: 700;">Read Protocol &rarr;</span>
              </div>
            </a>
          `
            )
            .join('')}
        </div>
      </section>

    </article>
  `;
}

export function initBlogArticlePage(post) {
  // Order CTA button opens checkout drawer directly with standard board
  const orderBtns = document.querySelectorAll('.article-order-cta-btn');
  orderBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = btn.getAttribute('data-product-id') || 'evminov-standard';
      const product = products.find((p) => p.id === productId) || products[0];
      if (product) {
        cartStore.addItem(product, {
          finish: 'Light Natural Pine',
          price: product.basePrice,
          shippingLabel: 'California Warehouse (2–4 Day US Delivery)',
        });
      } else {
        cartStore.openDrawer();
      }
    });
  });

  // Breadcrumbs & internal guide links smooth navigation
  const internalLinks = document.querySelectorAll('.related-guide-card, .nav-brand-link, .nav-blog-hub-link, .article-calc-link');
  internalLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/blog/')) {
        e.preventDefault();
        window.history.pushState(null, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    });
  });
}
