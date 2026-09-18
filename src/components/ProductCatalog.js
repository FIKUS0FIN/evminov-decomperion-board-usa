import { products } from '../data/products.js';
import { formatUSD, formatKlarna } from '../utils/formatters.js';
import { cartStore } from '../utils/cartStore.js';

export function renderProductCatalog() {
  const cardsHtml = products
    .map((product) => {
      const isBoard = product.id.startsWith('evminov-');
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
        <article class="product-card" id="product-${product.id}" data-product-id="${product.id}">
          
          <div class="product-card-img-wrap">
            <img src="${product.image}" alt="${product.name}" class="product-card-img" id="product-img-${product.id}" loading="lazy" />
            <span class="badge badge-pine product-card-badge">${product.badge}</span>
          </div>

          ${
            product.galleryImages && product.galleryImages.length > 1
              ? `
            <div class="product-thumb-bar" data-product-id="${product.id}" style="display: flex; gap: 6px; padding: 10px 16px 0; overflow-x: auto; scrollbar-width: none;">
              ${product.galleryImages
                .map(
                  (g, gIdx) => `
                <button 
                  type="button" 
                  class="product-thumb-pill ${gIdx === 0 ? 'active' : ''}" 
                  data-img-src="${g.url}"
                  title="${g.label}"
                  style="flex-shrink: 0; width: 42px; height: 42px; border-radius: 6px; overflow: hidden; border: 2px solid ${gIdx === 0 ? 'var(--color-pine-emerald)' : 'rgba(0,0,0,0.1)'}; padding: 0; background: #0F172A; cursor: pointer; transition: all 0.2s ease;"
                  aria-label="View ${g.label}"
                >
                  <img src="${g.url}" alt="${g.label}" style="width: 100%; height: 100%; object-fit: cover;" />
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
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
                <span class="star-rating">★★★★★</span>
                <span style="font-size: 0.8125rem; font-weight: 700; color: var(--color-text-main);">
                  ${product.rating} (${product.reviewsCount} reviews)
                </span>
              </div>
              <h3 class="product-card-title">${product.name}</h3>
              <p class="product-card-desc" style="margin-top: 6px;">${product.subtitle}</p>
            </div>

            <!-- Price & Delivery Selector -->
            <div class="product-price-box">
              <div class="price-main-row">
                <span class="price-amount" id="price-val-${product.id}">${formatUSD(product.basePrice)}</span>
                <span style="font-size: 0.8125rem; color: var(--color-pine-emerald); font-weight: 700;">
                  or 4x <span id="klarna-val-${product.id}">${formatKlarna(product.basePrice)}</span> with Klarna
                </span>
              </div>

              ${
                hasFastOption
                  ? `
                <div style="margin-top: 8px;">
                  <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.04em;">
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
              <label for="finish-${product.id}" style="font-size: 0.8125rem; font-weight: 700; color: var(--color-text-main);">
                Select Finish:
              </label>
              <select class="form-input" id="finish-${product.id}" style="padding: 8px 12px; font-size: 0.875rem;">
                ${finishesHtml}
              </select>
            </div>

            <!-- Specs Grid -->
            <div style="background: var(--color-bg-light); border-radius: var(--radius-md); padding: 12px; font-size: 0.8125rem; display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <div><strong>Capacity:</strong> ${product.specs.weightLimit}</div>
              <div><strong>User Height:</strong> ${product.specs.heightLimit}</div>
              <div><strong>Angle Range:</strong> ${product.specs.inclineRange}</div>
              <div><strong>Stored Depth:</strong> ${product.specs.foldedDepth}</div>
            </div>

            <!-- Includes Checklist -->
            <div style="margin-top: 4px;">
              <div style="font-size: 0.8125rem; font-weight: 700; margin-bottom: 8px; color: var(--color-text-main);">
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
                <span>Add to Cart & Begin 60-Day Trial</span>
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
          <span class="badge badge-pine" style="margin-bottom: 12px;">Official North American Storefront</span>
          <h2>Select Your Evminov Spine Decompression System</h2>
          <p>
            Manufactured from resonant multi-layer Carpathian pine with patented elasticity. Choose direct factory delivery or expedited shipping from our California facility.
          </p>
        </div>

        <div class="products-grid">
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

        selectedOptions[productId].shippingSpeed = speed;

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
        selectedOptions[p.id].finish = e.target.value;
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
          b.style.borderColor = 'rgba(0, 0, 0, 0.1)';
        });
        thumbBtn.classList.add('active');
        thumbBtn.style.borderColor = 'var(--color-pine-emerald)';
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

