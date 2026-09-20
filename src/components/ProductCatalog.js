import { products } from '../data/products.js';
import { formatUSD, formatKlarna } from '../utils/formatters.js';
import { cartStore } from '../utils/cartStore.js';

export function renderProductCatalog() {
  const cardsHtml = products
    .map((product) => {
      const isBoard = product.category === 'board';

      const includesHtml = product.includes
        .map(
          (inc) => `
          <div class="product-includes-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${inc}</span>
          </div>
        `
        )
        .join('');

      const finishesHtml = product.finishes
        .map(
          (finish, idx) => `
          <option value="${finish}" ${idx === 0 ? 'selected' : ''}>${finish}</option>
        `
        )
        .join('');

      return `
        <article class="product-card ${isBoard ? 'product-card-board' : 'product-card-accessory'}" id="product-${product.id}" data-product-id="${product.id}" data-category="${product.category || 'board'}">
          
          <!-- Interactive Product Image Carousel & Gallery Widget -->
          <div class="product-gallery-widget" id="gallery-${product.id}" data-product-id="${product.id}">
            <div class="product-carousel-viewport">
              <img 
                src="${product.image}" 
                alt="${product.name}" 
                class="product-card-img" 
                id="product-img-${product.id}" 
                loading="lazy" 
              />
              <span class="badge badge-pine product-card-badge">${product.badge}</span>

              ${
                product.galleryImages && product.galleryImages.length > 1
                  ? `
                <!-- Carousel Navigation Arrows -->
                <button type="button" class="carousel-nav-btn carousel-prev" aria-label="Previous image of ${product.name}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button type="button" class="carousel-nav-btn carousel-next" aria-label="Next image of ${product.name}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <!-- Floating Counter Badge -->
                <span class="carousel-counter-pill" id="counter-${product.id}">
                  <span class="curr-idx">1</span> / ${product.galleryImages.length}
                </span>

                <!-- Floating Caption Bar -->
                <div class="carousel-caption-bar" id="caption-${product.id}">
                  ${product.galleryImages[0].label}
                </div>

                <!-- Slide Dots Indicator -->
                <div class="carousel-dots-row">
                  ${product.galleryImages
                    .map(
                      (_, idx) => `
                    <button type="button" class="carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Slide ${idx + 1}"></button>
                  `
                    )
                    .join('')}
                </div>
              `
                  : ''
              }
            </div>

            ${
              product.galleryImages && product.galleryImages.length > 1
                ? `
              <!-- Mini Thumbnails Carousel Strip -->
              <div class="product-thumb-carousel">
                <div class="product-thumb-track" id="thumb-track-${product.id}">
                  ${product.galleryImages
                    .map(
                      (g, gIdx) => `
                    <button 
                      type="button" 
                      class="product-thumb-btn ${gIdx === 0 ? 'active' : ''}" 
                      data-index="${gIdx}"
                      data-img-src="${g.url}"
                      data-label="${g.label}"
                      title="${g.label}"
                      aria-label="View ${g.label}"
                    >
                      <img src="${g.url}" alt="${g.label}" loading="lazy" />
                    </button>
                  `
                    )
                    .join('')}
                </div>
              </div>
            `
                : ''
            }
          </div>

          <div class="product-card-body">
            
            <div>
              <div class="product-card-rating-row">
                <span class="star-rating">★★★★★</span>
                <span class="product-rating-text">
                  ${product.rating} (${product.reviewsCount} reviews)
                </span>
                ${isBoard ? '<span class="badge badge-cyan" style="font-size: 0.6875rem; padding: 2px 8px; margin-left: auto;">Patented Board</span>' : (product.id === 'evminov-stand' ? '<span class="badge badge-pine" style="font-size: 0.6875rem; padding: 2px 8px; margin-left: auto;">Freestanding Stand</span>' : '')}
              </div>
              <h3 class="product-card-title">${product.name}</h3>
              <p class="product-card-desc">${product.subtitle}</p>
            </div>

            <!-- Key Differentiator Callout Box -->
            ${
              product.keyFeature
                ? `
              <div class="product-distinction-box">
                <div class="distinction-tag-row">
                  <span class="distinction-icon">🎯</span>
                  <strong>Key Distinction:</strong>
                </div>
                <p class="distinction-text">${product.keyFeature}</p>
              </div>
            `
                : ''
            }

            <!-- Price & Delivery Location -->
            <div class="product-price-box">
              <div class="price-main-row">
                <span class="price-amount" id="price-val-${product.id}">${formatUSD(product.basePrice)}</span>
                <span class="price-klarna">
                  or 4x <span id="klarna-val-${product.id}">${formatKlarna(product.basePrice)}</span> with Klarna
                </span>
              </div>

              <div class="product-shipping-promise">
                <span class="dispatch-dot-pulse"></span>
                <span>In Stock • California Warehouse Hub (2–4 Day US Delivery)</span>
              </div>
            </div>

            <!-- Wood / Finish Selector -->
            <div class="form-group" style="margin-top: -4px;">
              <label for="finish-${product.id}" class="form-label-sm">
                Select Finish / Wood:
              </label>
              <select class="form-input" id="finish-${product.id}">
                ${finishesHtml}
              </select>
            </div>

            <!-- Specs Grid -->
            <div class="product-specs-grid">
              ${product.specs.construction ? `<div class="spec-full-col"><strong>Construction:</strong> ${product.specs.construction}</div>` : ''}
              ${product.specs.mobility ? `<div class="spec-full-col"><strong>Mobility & Storage:</strong> ${product.specs.mobility}</div>` : ''}
              <div><strong>Capacity:</strong> ${product.specs.weightLimit}</div>
              <div><strong>User Height:</strong> ${product.specs.heightLimit}</div>
              <div><strong>Angle Range:</strong> ${product.specs.inclineRange}</div>
              <div><strong>Wall Profile:</strong> ${product.specs.foldedDepth}</div>
            </div>

            <!-- Includes Checklist -->
            <div style="margin-top: 4px;">
              <div class="package-includes-title">
                Package Includes:
              </div>
              <div class="product-includes-list">
                ${includesHtml}
              </div>
            </div>

            <!-- Buy Button -->
            <div style="margin-top: auto; padding-top: 14px;">
              <button 
                type="button" 
                class="btn btn-primary btn-block add-to-cart-btn"
                data-product-id="${product.id}"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span>Add to Cart &amp; Begin 60-Day Trial</span>
              </button>
            </div>

          </div>

        </article>
      `;
    })
    .join('');

  return `
    <section class="catalog-section" id="catalog">
      <div class="calc-container">
        
        <div class="section-header">
          <span class="badge badge-pine" style="margin-bottom: 12px;">Official North American Storefront • Clinically Proven Since 1996</span>
          <h2>Select Your Evminov Spine Decompression System</h2>
          <p>
            Operating continuously since 1996 with 30 years of medical practice and over 500,000 patients healed worldwide. Handcrafted from resonant multi-layer Carpathian pine and select Ukrainian alder wood with patented elasticity. Dispatched directly from our California warehouse facility with protective export crating to all 50 US states and worldwide.
          </p>
        </div>

        <!-- Interactive Board Selection & Model Comparison Guide -->
        <div class="board-comparison-guide-box">
          <div class="guide-header-row">
            <div>
              <div class="guide-pill-badge">Model Differentiation Guide • Quick Selection</div>
              <h3 class="guide-title">How to Choose Your Evminov Board: Key Differences at a Glance</h3>
              <p class="guide-subtitle">Official Evminov Spine Prophilactor lineup — choose the model perfectly matched to your living space and lifestyle:</p>
            </div>
            <a href="#calculator" class="btn btn-secondary btn-sm guide-calc-link">
              Calculate Your Angle &amp; Model →
            </a>
          </div>

          <div class="guide-cards-grid">
            
            <!-- 1. Standard Solid Board -->
            <div class="guide-card" data-guide-target="evminov-standard">
              <div class="guide-card-icon guide-icon-emerald" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="7" y="2" width="10" height="20" rx="2"></rect>
                  <line x1="12" y1="6" x2="12" y2="18"></line>
                  <line x1="9.5" y1="10" x2="14.5" y2="10"></line>
                  <line x1="9.5" y1="14" x2="14.5" y2="14"></line>
                </svg>
              </div>
              <div class="guide-card-badge guide-badge-emerald">1-Piece Solid</div>
              <h4 class="guide-card-name">Standard Solid Board</h4>
              <div class="guide-card-en">1-Piece Monolithic Beam</div>
              <p class="guide-card-text">
                <strong>Base Monolithic Model:</strong> Continuous resonant Carpathian pine beam in natural light or dark stain. Maximum structural resonance and elasticity for a dedicated home or clinical wellness station.
              </p>
              <div class="guide-card-foot">
                <span>Best for: Permanent Home Setup</span>
                <span class="guide-foot-price">$450</span>
              </div>
            </div>

            <!-- 2. 2-Piece Folding Board -->
            <div class="guide-card" data-guide-target="evminov-folding-2part">
              <div class="guide-card-icon guide-icon-cyan" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="6" y="2" width="12" height="8" rx="1.5"></rect>
                  <rect x="6" y="14" width="12" height="8" rx="1.5"></rect>
                  <polyline points="9 10 12 12 15 10"></polyline>
                  <polyline points="9 14 12 12 15 14"></polyline>
                </svg>
              </div>
              <div class="guide-card-badge guide-badge-cyan">2-Piece Folding</div>
              <h4 class="guide-card-name">2-Piece Folding Board</h4>
              <div class="guide-card-en">Quick-Fold Space Saver</div>
              <p class="guide-card-text">
                <strong>Optimized for Storage:</strong> Disassembles in half in under 30 seconds. Slips easily under a bed, inside a closet, or behind interior doors without compromising structural spring flex when locked.
              </p>
              <div class="guide-card-foot">
                <span>Best for: Easy Closet / Under-Bed Storage</span>
                <span class="guide-foot-price">$475</span>
              </div>
            </div>

            <!-- 3. 3-Piece Travel Board -->
            <div class="guide-card" data-guide-target="evminov-folding-3part">
              <div class="guide-card-icon guide-icon-indigo" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="6" width="18" height="15" rx="2"></rect>
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="12" y1="12" x2="12" y2="16"></line>
                </svg>
              </div>
              <div class="guide-card-badge guide-badge-indigo">3-Piece Travel</div>
              <h4 class="guide-card-name">3-Piece Travel Board</h4>
              <div class="guide-card-en">Ultra-Portable &amp; Trunk-Ready</div>
              <p class="guide-card-text">
                <strong>Most Compact Travel Model:</strong> Folds down into ~31" segments. Easily packs into any vehicle trunk, back seat, or airline luggage bag for travelers and mobile physical therapists.
              </p>
              <div class="guide-card-foot">
                <span>Best for: Travel, Car Trunks &amp; Flights</span>
                <span class="guide-foot-price">$495</span>
              </div>
            </div>

            <!-- 4. Wide Panel Heavy-Duty Board -->
            <div class="guide-card" data-guide-target="evminov-wide">
              <div class="guide-card-icon guide-icon-amber" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 11 12 8 15 11"></polyline>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                </svg>
              </div>
              <div class="guide-card-badge guide-badge-amber">Heavy-Duty • 330 lbs</div>
              <h4 class="guide-card-name">Wide Panel Heavy-Duty</h4>
              <div class="guide-card-en">Athletic &amp; Broad Frame Edition</div>
              <p class="guide-card-text">
                <strong>Engineered for Broader Builds:</strong> +30% wider timber panel designed for broad shoulders, larger frames, and athletes (rated up to 330 lbs). Also available in a folding configuration.
              </p>
              <div class="guide-card-foot">
                <span>Best for: Athletes, Lifters &amp; Broad Builds</span>
                <span class="guide-foot-price">$500</span>
              </div>
            </div>

            <!-- 5. Select Alder Wood Edition -->
            <div class="guide-card" data-guide-target="evminov-alder">
              <div class="guide-card-icon guide-icon-cognac" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
              </div>
              <div class="guide-card-badge guide-badge-cognac">Limited Edition Alder</div>
              <h4 class="guide-card-name">Select Alder Wood Edition</h4>
              <div class="guide-card-en">Artisan Lightweight Luxury</div>
              <p class="guide-card-text">
                <strong>Limited Artisan Alder Edition:</strong> ~15% lighter than resonant pine (noticeably easier to lift and adjust tilt angles) featuring a refined, darker warm amber-cognac wood grain.
              </p>
              <div class="guide-card-foot">
                <span>Best for: Lightweight Luxury Aesthetics</span>
                <span class="guide-foot-price">$525</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Catalog Category Filter Bar -->
        <div class="catalog-filter-bar">
          <button type="button" class="catalog-filter-btn active" data-filter="all">
            <span>🌟 All Products</span>
            <span class="filter-count">8</span>
          </button>
          <button type="button" class="catalog-filter-btn" data-filter="board">
            <span><img src="/images/authentic/evminov-official-logo.png" alt="" class="inline-brand-crest" width="16" height="16" /> Evminov Decompression Boards</span>
            <span class="filter-count">5</span>
          </button>
          <button type="button" class="catalog-filter-btn" data-filter="accessory">
            <span>🔩 Stands &amp; Accessories</span>
            <span class="filter-count">3</span>
          </button>
        </div>

        <div class="products-grid" id="products-grid">
          ${cardsHtml}
        </div>

      </div>
    </section>
  `;
}

export function initProductCatalog() {
  const selectedOptions = {};

  // Initialize selected state for each product
  products.forEach((p) => {
    selectedOptions[p.id] = {
      finish: p.finishes[0],
    };
  });

  // Catalog Category Filtering
  const filterBtns = document.querySelectorAll('.catalog-filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Guide card click to scroll to product
  document.querySelectorAll('.guide-card').forEach((guideCard) => {
    guideCard.addEventListener('click', () => {
      const targetId = guideCard.getAttribute('data-guide-target');
      const targetCard = document.getElementById(`product-${targetId}`);
      if (targetCard) {
        // Switch filter to all or board if filtered out
        const activeFilterBtn = document.querySelector('.catalog-filter-btn.active');
        if (activeFilterBtn && activeFilterBtn.getAttribute('data-filter') === 'accessory') {
          const boardFilterBtn = document.querySelector('.catalog-filter-btn[data-filter="board"]');
          if (boardFilterBtn) boardFilterBtn.click();
        }

        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.add('highlight-pulse');
        setTimeout(() => {
          targetCard.classList.remove('highlight-pulse');
        }, 1500);
      }
    });
  });

  // Single standard pricing model fulfilled directly from California warehouse hub

  // Finish Selectors
  products.forEach((p) => {
    const selectElem = document.getElementById(`finish-${p.id}`);
    if (selectElem) {
      selectElem.addEventListener('change', (e) => {
        if (selectedOptions[p.id]) {
          selectedOptions[p.id].finish = e.target.value;
        }
      });
    }
  });

  // Initialize Interactive Product Image Carousels & Galleries
  document.querySelectorAll('.product-gallery-widget').forEach((widget) => {
    const productId = widget.getAttribute('data-product-id');
    const product = products.find((p) => p.id === productId);
    if (!product || !product.galleryImages || product.galleryImages.length <= 1) return;

    const mainImg = widget.querySelector(`#product-img-${productId}`);
    const counterSpan = widget.querySelector(`#counter-${productId} .curr-idx`);
    const captionBar = widget.querySelector(`#caption-${productId}`);
    const thumbButtons = widget.querySelectorAll('.product-thumb-btn');
    const dotButtons = widget.querySelectorAll('.carousel-dot');
    const prevBtn = widget.querySelector('.carousel-prev');
    const nextBtn = widget.querySelector('.carousel-next');
    const viewport = widget.querySelector('.product-carousel-viewport');

    let currentIndex = 0;
    const total = product.galleryImages.length;

    function goToIndex(newIndex) {
      if (newIndex < 0) newIndex = total - 1;
      if (newIndex >= total) newIndex = 0;
      currentIndex = newIndex;

      const imgData = product.galleryImages[currentIndex];
      if (!imgData) return;

      // Smooth image switch with subtle fade
      if (mainImg) {
        mainImg.style.opacity = '0.35';
        mainImg.style.transform = 'scale(0.97)';
        setTimeout(() => {
          mainImg.src = imgData.url;
          mainImg.alt = `${product.name} - ${imgData.label}`;
          mainImg.style.opacity = '1';
          mainImg.style.transform = 'scale(1)';
        }, 100);
      }

      // Update counter
      if (counterSpan) {
        counterSpan.textContent = currentIndex + 1;
      }

      // Update caption
      if (captionBar) {
        captionBar.textContent = imgData.label;
      }

      // Update active thumbnail
      thumbButtons.forEach((btn, idx) => {
        if (idx === currentIndex) {
          btn.classList.add('active');
          btn.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
        } else {
          btn.classList.remove('active');
        }
      });

      // Update active dot
      dotButtons.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    // Thumbnail clicks
    thumbButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        if (!isNaN(idx)) goToIndex(idx);
      });
    });

    // Dot clicks
    dotButtons.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(idx)) goToIndex(idx);
      });
    });

    // Arrow navigation
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToIndex(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToIndex(currentIndex + 1);
      });
    }

    // Touch swipe support on viewport
    if (viewport) {
      let touchStartX = 0;
      let touchStartY = 0;

      viewport.addEventListener(
        'touchstart',
        (e) => {
          if (e.touches && e.touches[0]) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
          }
        },
        { passive: true }
      );

      viewport.addEventListener(
        'touchend',
        (e) => {
          if (e.changedTouches && e.changedTouches[0]) {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const diffX = touchStartX - touchEndX;
            const diffY = touchStartY - touchEndY;

            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
              if (diffX > 0) {
                goToIndex(currentIndex + 1);
              } else {
                goToIndex(currentIndex - 1);
              }
            }
          }
        },
        { passive: true }
      );
    }
  });

  // Add to Cart Buttons
  document.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = btn.getAttribute('data-product-id');
      const product = products.find((p) => p.id === productId);
      if (product) {
        const opts = selectedOptions[productId] || {};
        cartStore.addItem(product, {
          finish: opts.finish || product.finishes[0],
          price: product.basePrice,
          shippingLabel: 'California Warehouse (2–4 Day US Delivery)',
        });
      }
    });
  });
}
