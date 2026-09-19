import { products } from '../data/products.js';
import { formatUSD, formatKlarna } from '../utils/formatters.js';
import { cartStore } from '../utils/cartStore.js';

export function renderProductCatalog() {
  const cardsHtml = products
    .map((product) => {
      const isBoard = product.category === 'board';
      const hasFastOption = Boolean(product.fastPrice);

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
          
          <div class="product-card-img-wrap">
            <img src="${product.image}" alt="${product.name}" class="product-card-img" id="product-img-${product.id}" loading="lazy" />
            <span class="badge badge-pine product-card-badge">${product.badge}</span>
          </div>

          ${
            product.galleryImages && product.galleryImages.length > 1
              ? `
            <div class="product-thumb-bar" data-product-id="${product.id}">
              ${product.galleryImages
                .map(
                  (g, gIdx) => `
                <button 
                  type="button" 
                  class="product-thumb-pill ${gIdx === 0 ? 'active' : ''}" 
                  data-img-src="${g.url}"
                  title="${g.label}"
                  aria-label="View ${g.label}"
                >
                  <img src="${g.url}" alt="${g.label}" />
                </button>
              `
                )
                .join('')}
            </div>
          `
              : ''
          }

          <div class="product-card-body">
            
            <div>
              <div class="product-card-rating-row">
                <span class="star-rating">★★★★★</span>
                <span class="product-rating-text">
                  ${product.rating} (${product.reviewsCount} reviews)
                </span>
                ${isBoard ? '<span class="badge badge-cyan" style="font-size: 0.6875rem; padding: 2px 8px; margin-left: auto;">Patented Board</span>' : ''}
              </div>
              <h3 class="product-card-title">${product.name}</h3>
              ${product.ukrName ? `<div class="product-card-ukr-title">${product.ukrName}</div>` : ''}
              <p class="product-card-desc">${product.subtitle}</p>
            </div>

            <!-- Key Differentiator Callout Box -->
            ${
              product.keyFeature
                ? `
              <div class="product-distinction-box">
                <div class="distinction-tag-row">
                  <span class="distinction-icon">🎯</span>
                  <strong>Ключова особливість / Key Distinction:</strong>
                </div>
                <p class="distinction-text">${product.keyFeature}</p>
              </div>
            `
                : ''
            }

            <!-- Price & Delivery Selector -->
            <div class="product-price-box">
              <div class="price-main-row">
                <span class="price-amount" id="price-val-${product.id}">${formatUSD(product.basePrice)}</span>
                <span class="price-klarna">
                  or 4x <span id="klarna-val-${product.id}">${formatKlarna(product.basePrice)}</span> with Klarna
                </span>
              </div>

              ${
                hasFastOption
                  ? `
                <div style="margin-top: 8px;">
                  <span class="shipping-origin-label">
                    Fulfillment Origin:
                  </span>
                  <div class="shipping-speed-toggle" data-product-id="${product.id}">
                    <button type="button" class="speed-toggle-btn active" data-speed="direct-ua" data-price="${product.basePrice}">
                      Direct Factory (${formatUSD(product.basePrice)})
                    </button>
                    <button type="button" class="speed-toggle-btn" data-speed="fast-us" data-price="${product.fastPrice}">
                      🇺🇸 California Warehouse (${formatUSD(product.fastPrice)})
                    </button>
                  </div>
                </div>
              `
                  : ''
              }
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
            Operating continuously since 1996 with 30 years of medical practice and over 500,000 patients healed worldwide. Handcrafted from resonant multi-layer Carpathian pine and select Ukrainian alder wood with patented elasticity. Choose direct factory delivery or expedited shipping from our California facility.
          </p>
        </div>

        <!-- Interactive Board Selection & Model Comparison Guide -->
        <div class="board-comparison-guide-box">
          <div class="guide-header-row">
            <div>
              <div class="guide-pill-badge">Model Differentiation Guide • Гід вибору моделей</div>
              <h3 class="guide-title">How to Choose Your Evminov Board: Key Differences at a Glance</h3>
              <p class="guide-subtitle">Офіційна лінійка Профілакторів Євмінова — оберіть модель, що ідеально відповідає вашому простору та стилю життя:</p>
            </div>
            <a href="#calculator" class="btn btn-secondary btn-sm guide-calc-link">
              Calculate Your Angle &amp; Model →
            </a>
          </div>

          <div class="guide-cards-grid">
            
            <!-- 1. Стандартний цільний -->
            <div class="guide-card" data-guide-target="evminov-standard">
              <div class="guide-card-icon">🌲</div>
              <div class="guide-card-badge">1-Piece Solid</div>
              <h4 class="guide-card-name">Стандартний (цільний)</h4>
              <div class="guide-card-en">Standard Solid Board</div>
              <p class="guide-card-text">
                <strong>Базова нерозбірна модель:</strong> Суцільна балка з відбірної сосни зі світлою або темною панеллю. Максимальна монолітна пружність для стаціонарного домашнього чи клінічного куточка здоров'я.
              </p>
              <div class="guide-card-foot">
                <span>Best for: Permanent Home Setup</span>
                <span class="guide-foot-price">$450</span>
              </div>
            </div>

            <!-- 2. Складаний з 2-х частин -->
            <div class="guide-card" data-guide-target="evminov-folding-2part">
              <div class="guide-card-icon">📦</div>
              <div class="guide-card-badge">2-Piece Folding</div>
              <h4 class="guide-card-name">Складаний з 2-х частин</h4>
              <div class="guide-card-en">2-Piece Space Saver</div>
              <p class="guide-card-text">
                <strong>Оптимізований для зберігання:</strong> Розбирається навпіл за 30 секунд. Зручно ховається під ліжко, у шафу або за міжкімнатні двері. Без втрати пружності в робочому стані.
              </p>
              <div class="guide-card-foot">
                <span>Best for: Easy Closet / Under-Bed Storage</span>
                <span class="guide-foot-price">$475</span>
              </div>
            </div>

            <!-- 3. Складаний з 3-х частин -->
            <div class="guide-card" data-guide-target="evminov-folding-3part">
              <div class="guide-card-icon">🚗</div>
              <div class="guide-card-badge">3-Piece Travel</div>
              <h4 class="guide-card-name">Складаний з 3-х частин</h4>
              <div class="guide-card-en">3-Piece Travel &amp; Trunk</div>
              <p class="guide-card-text">
                <strong>Найбільш компактна модель:</strong> Складається у компактні сегменти (~31"). Легко поміщається в багажник будь-якого автомобіля або валізу для перевезення в літаку.
              </p>
              <div class="guide-card-foot">
                <span>Best for: Travel, Car Trunks &amp; Flights</span>
                <span class="guide-foot-price">$495</span>
              </div>
            </div>

            <!-- 4. Широка панель -->
            <div class="guide-card" data-guide-target="evminov-wide">
              <div class="guide-card-icon">🏋️</div>
              <div class="guide-card-badge">Heavy-Duty • 330 lbs</div>
              <h4 class="guide-card-name">Профілактор з широкою панеллю</h4>
              <div class="guide-card-en">Wide Panel Heavy-Duty</div>
              <p class="guide-card-text">
                <strong>Для більшої комплекції:</strong> Збільшена на 30% ширина панелі для людей міцної статури, широких плечей та атлетів (до 150 кг / 330 lbs). Також доступний у розбірній версії.
              </p>
              <div class="guide-card-foot">
                <span>Best for: Athletes, Lifters &amp; Broad Builds</span>
                <span class="guide-foot-price">$500</span>
              </div>
            </div>

            <!-- 5. Преміум Вільха -->
            <div class="guide-card" data-guide-target="evminov-alder">
              <div class="guide-card-icon">🪵</div>
              <div class="guide-card-badge">Limited Edition Alder</div>
              <h4 class="guide-card-name">Профілактор з вільхи</h4>
              <div class="guide-card-en">Select Alder Wood Edition</div>
              <p class="guide-card-text">
                <strong>Лімітована версія з вільхи:</strong> На ~15% легша за соснову (помітно легше піднімати й регулювати кут нахилу) і має шляхетний темніший бурштиновий відтінок деревини.
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
            <span>🌲 Evminov Decompression Boards</span>
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
      shippingSpeed: 'direct-ua',
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

  // Shipping Speed Toggles
  document.querySelectorAll('.shipping-speed-toggle').forEach((toggleContainer) => {
    const productId = toggleContainer.getAttribute('data-product-id');
    const buttons = toggleContainer.querySelectorAll('.speed-toggle-btn');
    const priceDisplay = document.getElementById(`price-val-${productId}`);
    const klarnaDisplay = document.getElementById(`klarna-val-${productId}`);

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const speed = btn.getAttribute('data-speed');
        const price = parseFloat(btn.getAttribute('data-price'));

        if (selectedOptions[productId]) {
          selectedOptions[productId].shippingSpeed = speed;
        }

        if (priceDisplay) priceDisplay.textContent = formatUSD(price);
        if (klarnaDisplay) klarnaDisplay.textContent = formatKlarna(price);
      });
    });
  });

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

  // Thumbnail Image Gallery Switcher
  document.querySelectorAll('.product-thumb-pill').forEach((thumbBtn) => {
    thumbBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const bar = thumbBtn.closest('.product-thumb-bar');
      if (!bar) return;
      const productId = bar.getAttribute('data-product-id');
      const mainImg = document.getElementById(`product-img-${productId}`);
      const newSrc = thumbBtn.getAttribute('data-img-src');

      if (mainImg && newSrc) {
        mainImg.src = newSrc;
        bar.querySelectorAll('.product-thumb-pill').forEach((b) => {
          b.classList.remove('active');
        });
        thumbBtn.classList.add('active');
      }
    });
  });

  // Add to Cart Buttons
  document.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = btn.getAttribute('data-product-id');
      const product = products.find((p) => p.id === productId);
      if (product) {
        const opts = selectedOptions[productId] || {};
        cartStore.addItem(product, opts);
      }
    });
  });
}
