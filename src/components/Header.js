import { cartStore } from '../utils/cartStore.js';
import { authStore } from '../utils/authStore.js';

export function renderHeader() {
  const headerHtml = `
    <!-- Top Announcement Bar -->
    <aside class="announcement-bar" aria-label="Announcement">
      <div class="announcement-item">
        <span role="img" aria-label="US Flag">🇺🇸</span>
        <span>Fast Shipping to All 50 US States from Burbank, CA Hub • 🌍 Global Delivery to 40+ Countries</span>
      </div>
      <div class="announcement-item desktop-only">
        <span>★ 60-Day In-Home Trial</span>
        <span>•</span>
        <span>HSA/FSA Pre-Tax Eligible</span>
        <span>•</span>
        <span>10-Year Frame Warranty</span>
      </div>
    </aside>

    <!-- Main Navigation Header -->
    <header class="site-header" id="site-header">
      <div class="header-inner">
        <a href="#" class="site-logo" aria-label="Evminov Spine Med Home">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle cx="50" cy="10" r="6" fill="currentColor"/>
            <rect x="46.5" y="16" width="7" height="3" rx="1.5" fill="currentColor"/>
            <line x1="50" y1="19" x2="50" y2="95" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M47 20 C38 12, 26 4, 8 4 C5 8, 8 12, 14 13 C7 16, 9 21, 17 21 C10 25, 14 30, 23 29 C17 33, 22 37, 32 35 C28 38, 36 40, 46 36 C47 30, 47 24, 47 20 Z" 
                  fill="#ECFDF5" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
            <path d="M14 13 C24 16, 36 18, 47 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M17 21 C26 23, 36 24, 47 23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M23 29 C30 30, 38 30, 47 29" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M53 20 C58 12, 72 4, 92 4 C95 8, 92 12, 86 13 C93 16, 91 21, 83 21 C90 25, 86 30, 77 29 C83 33, 78 37, 68 35 C72 38, 64 40, 54 36 C53 30, 53 24, 53 20 Z" 
                  fill="#ECFDF5" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
            <path d="M86 13 C76 16, 64 18, 53 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M83 21 C74 23, 64 24, 53 23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M77 29 C70 30, 62 30, 53 29" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M47 23 C44 19, 38 20, 36 24 C36 28, 42 31, 47 27 Z" fill="currentColor"/>
            <circle cx="41" cy="22.5" r="1.4" fill="#FFFFFF"/>
            <path d="M41 28 C28 34, 20 44, 24 55 C28 66, 72 62, 72 73 C72 82, 40 80, 42 88 C43 92, 50 94, 50 94" 
                  fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M53 23 C56 19, 62 20, 64 24 C64 28, 58 31, 53 27 Z" fill="currentColor"/>
            <circle cx="59" cy="22.5" r="1.4" fill="#FFFFFF"/>
            <path d="M59 28 C72 34, 80 44, 76 55 C72 66, 28 62, 28 73 C28 82, 60 80, 58 88 C57 92, 50 94, 50 94" 
                  fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="logo-text-stack">
            <span class="logo-title">Evminov</span>
            <span class="logo-subtitle">Spine <span class="logo-med-tag">Med</span></span>
          </div>
        </a>

        <nav class="site-nav" aria-label="Primary Navigation">
          <a href="#comparison" class="nav-link">Why Not Inversion?</a>
          <a href="#us-shipping" class="nav-link">50 US States</a>
          <a href="#global-trust" class="nav-link">Worldwide Brand</a>
          <a href="#catalog" class="nav-link">Boards & Pricing</a>
          <a href="#exercise-gallery" class="nav-link">Protocols</a>
          <a href="#centers" class="nav-link" style="color: var(--color-pine-emerald); font-weight: 700;">Centers &amp; Heritage</a>
          <a href="#patents" class="nav-link">Patents & Trials</a>
          <a href="#athletes" class="nav-link">For Athletes</a>
          <a href="#reviews" class="nav-link">Reviews</a>
          <a href="#faq" class="nav-link">FAQ</a>
        </nav>

        <div class="header-actions">
          <!-- Patient Account / Customer Portal Trigger -->
          <button 
            type="button" 
            class="portal-trigger-btn" 
            id="portal-trigger-btn" 
            aria-label="Open Patient Account / Portal"
            title="Access Your Evminov Patient Portal"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span class="desktop-only" id="header-user-status" style="font-size: 0.8125rem; font-weight: 700;">
              Sign In
            </span>
          </button>

          <a href="#calculator" class="btn btn-secondary btn-sm header-quiz-cta">
            Find My Angle
          </a>

          <button class="cart-trigger-btn" id="cart-trigger-btn" aria-label="View Shopping Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>Cart</span>
            <span class="cart-count-badge" id="header-cart-count">0</span>
          </button>
          <!-- Mobile Hamburger Menu Button (3 Lines) -->
          <button 
            type="button" 
            class="mobile-menu-btn" 
            id="mobile-menu-btn" 
            aria-label="Toggle Navigation Menu" 
            aria-expanded="false"
            aria-controls="mobile-nav-drawer"
          >
            <span class="hamburger-line line-1"></span>
            <span class="hamburger-line line-2"></span>
            <span class="hamburger-line line-3"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer Overlay -->
    <div class="mobile-nav-overlay" id="mobile-nav-overlay" aria-hidden="true">
      <div class="mobile-nav-backdrop" id="mobile-nav-backdrop"></div>
      <aside class="mobile-nav-drawer" id="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Clinical Directory Navigation">
        
        <div class="mobile-nav-header">
          <div class="mobile-nav-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-pine-emerald)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <div class="mobile-title-group">
              <span class="mobile-brand-name">Clinical Directory</span>
              <span class="mobile-brand-sub">Evminov Spine Systems™</span>
            </div>
          </div>
          <button type="button" class="mobile-nav-close-btn" id="mobile-nav-close-btn" aria-label="Close Navigation">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <!-- Featured Clinical Heritage & Decompression Systems Highlights -->
        <div class="mobile-nav-quick-actions">
          <a href="#centers" class="mobile-nav-quick-btn quick-heritage">
            <span class="quick-icon-svg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 21h18M5 21V7l8-4 6 4v14M9 9h2M9 13h2M9 17h2M13 9h2M13 13h2M13 17h2"/>
              </svg>
            </span>
            <div>
              <div class="quick-title">Kyiv Clinic &amp; Heritage</div>
              <div class="quick-desc">Since 1996 • Founder History</div>
            </div>
          </a>
          <a href="#catalog" class="mobile-nav-quick-btn quick-catalog">
            <span class="quick-icon-svg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M7 8h10M7 12h10M7 16h6"></path>
              </svg>
            </span>
            <div>
              <div class="quick-title">Decompression Systems</div>
              <div class="quick-desc">From $450 • Hospital-Grade</div>
            </div>
          </a>
        </div>

        <!-- Clinically Structured Navigation Directory -->
        <div class="mobile-nav-body">
          
          <!-- Category 1: Clinical Foundations & Trials -->
          <div class="mobile-nav-group-label">Clinical Foundations &amp; Research</div>
          <nav class="mobile-nav-links">
            <a href="#centers" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 21h18M5 21V7l8-4 6 4v14M9 9h2M9 13h2M9 17h2M13 9h2M13 13h2M13 17h2"/>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">Vertebral Center &amp; Founder Heritage</div>
                <div class="nav-item-sub">Kyiv Research Center, Vyacheslav Evminov &amp; Military Care</div>
              </div>
              <span class="nav-item-tag tag-pine">Heritage</span>
            </a>

            <a href="#patents" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">Medical Patents &amp; Clinical Trials</div>
                <div class="nav-item-sub">Eurasian &amp; UA Patents • 93.4% non-surgical recovery</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#comparison" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">Biomechanical Safety vs. Inversion</div>
                <div class="nav-item-sub">Zero stroke, retinal eye pressure or ankle trauma risks</div>
              </div>
              <span class="nav-item-tag tag-amber">Compare</span>
            </a>
          </nav>

          <!-- Category 2: Treatment Protocols & Programs -->
          <div class="mobile-nav-group-label">Treatment Protocols &amp; Kinesiotherapy</div>
          <nav class="mobile-nav-links">
            <a href="#exercise-gallery" class="mobile-nav-item nav-item-highlight">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">21 Clinical Kinesiotherapy Protocols</div>
                <div class="nav-item-sub">Authentic photographic archive from official institute</div>
              </div>
              <span class="nav-item-tag tag-pine">Archives</span>
            </a>

            <a href="#videos" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">Guided 4K Rehabilitation Video Library</div>
                <div class="nav-item-sub">Step-by-step masterclasses by orthopedic methodologists</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#onboarding" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">30-Day Progressive Spine Program</div>
                <div class="nav-item-sub">Graduated home phases for acute disc unweighting</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#calculator" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">Prescription Incline Angle Calibrator</div>
                <div class="nav-item-sub">Custom angle formula for L4-S1, thoracic, and neck traction</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>
          </nav>

          <!-- Category 3: Hardware, Logistics & Occupational Care -->
          <div class="mobile-nav-group-label">Hardware, Logistics &amp; Work Ergonomics</div>
          <nav class="mobile-nav-links">
            <a href="#catalog" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">Decompression Boards &amp; Accessories</div>
                <div class="nav-item-sub">Standard, Wide Heavy-Duty &amp; Glisson Loop kit</div>
              </div>
              <span class="nav-item-tag tag-pine">Store</span>
            </a>

            <a href="#us-shipping" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">US 50-State Distribution Hub</div>
                <div class="nav-item-sub">2–4 day freight from Burbank, CA • HSA/FSA pre-tax eligible</div>
              </div>
              <span class="nav-item-tag tag-blue">50 States</span>
            </a>

            <a href="#global-trust" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">Worldwide Brand &amp; Global Shipping</div>
                <div class="nav-item-sub">500,000+ patients in 40+ countries • Universal payments</div>
              </div>
              <span class="nav-item-tag tag-pine">Global</span>
            </a>

            <a href="#mounting" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">16" Wood Stud Mounting &amp; Stand Setup</div>
                <div class="nav-item-sub">American drywall framing &amp; renter zero-drill options</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#athletes" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">Occupational &amp; Athletic Care</div>
                <div class="nav-item-sub">Postural relief for desk workers, standing staff &amp; lifters</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>
          </nav>

          <!-- Category 4: Evidence, Reviews & Medical Billing -->
          <div class="mobile-nav-group-label">Evidence, Reviews &amp; Medical Billing</div>
          <nav class="mobile-nav-links">
            <a href="#blog" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">Spine Health Clinical Knowledge Base</div>
                <div class="nav-item-sub">Peer-reviewed guides on disc imbibition &amp; sciatica</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>

            <a href="#reviews" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">Documented Patient Outcomes</div>
                <div class="nav-item-sub">4.9/5 stars from 2,400+ verified clinical cases</div>
              </div>
              <span class="nav-item-tag tag-amber">4.9 / 5.0</span>
            </a>

            <a href="#faq" class="mobile-nav-item">
              <span class="nav-item-icon-svg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </span>
              <div class="nav-item-content">
                <div class="nav-item-title">Medical FAQ &amp; Insurance Coverage</div>
                <div class="nav-item-sub">Pre-tax HSA/FSA DME code E0941 billing guide</div>
              </div>
              <span class="nav-item-arrow">→</span>
            </a>
          </nav>

        </div>

        <!-- Drawer Footer with Patient Portal & Verified Support -->
        <div class="mobile-nav-footer">
          <a href="#portal" class="mobile-nav-portal-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Patient Account &amp; Digital Rx</span>
          </a>
          <div class="mobile-nav-support-note">
            <span>Direct US Spine Support: <strong>+1 (818) 555-7746</strong></span>
            <span>• Burbank, CA Facility</span>
          </div>
        </div>

      </aside>
    </div>
  `;

  return headerHtml;
}

export function initHeader() {
  const triggerBtn = document.getElementById('cart-trigger-btn');
  const countBadge = document.getElementById('header-cart-count');
  const portalBtn = document.getElementById('portal-trigger-btn');
  const userStatusSpan = document.getElementById('header-user-status');

  const menuBtn = document.getElementById('mobile-menu-btn');
  const navOverlay = document.getElementById('mobile-nav-overlay');
  const navCloseBtn = document.getElementById('mobile-nav-close-btn');
  const navBackdrop = document.getElementById('mobile-nav-backdrop');
  const navLinks = document.querySelectorAll(
    '.mobile-nav-item, .mobile-nav-quick-btn, .mobile-nav-portal-btn'
  );

  function openMobileNav() {
    if (navOverlay) {
      navOverlay.classList.add('active');
      navOverlay.setAttribute('aria-hidden', 'false');
    }
    if (menuBtn) {
      menuBtn.classList.add('is-active');
      menuBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('nav-drawer-open');
  }

  function closeMobileNav() {
    if (navOverlay) {
      navOverlay.classList.remove('active');
      navOverlay.setAttribute('aria-hidden', 'true');
    }
    if (menuBtn) {
      menuBtn.classList.remove('is-active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('nav-drawer-open');
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navOverlay && navOverlay.classList.contains('active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (navCloseBtn) {
    navCloseBtn.addEventListener('click', closeMobileNav);
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileNav);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navOverlay && navOverlay.classList.contains('active')) {
      closeMobileNav();
    }
  });

  // Link click behavior: close drawer and smoothly navigate
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      closeMobileNav();

      if (href && href.startsWith('#')) {
        const hash = href;
        if (hash === '#centers' || hash === '#portal') {
          window.location.hash = hash;
          return;
        }

        // If on storefront, smooth scroll to block
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', hash);
          }, 150);
        } else {
          // If on a different page (e.g. centers or portal), change route
          window.location.hash = hash;
        }
      }
    });
  });

  if (portalBtn) {
    portalBtn.addEventListener('click', () => {
      window.location.hash = '#portal';
    });
  }

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      cartStore.openDrawer();
    });
  }

  // Subscribe to Cart state
  cartStore.subscribe((state) => {
    if (countBadge) {
      countBadge.textContent = state.count;
      countBadge.style.display = state.count > 0 ? 'inline-flex' : 'none';
    }
  });

  // Subscribe to Auth state
  authStore.subscribe((state) => {
    if (userStatusSpan) {
      if (state.isLoggedIn && state.user) {
        userStatusSpan.textContent = `${state.user.name.split(' ')[0]}'s Portal`;
        if (portalBtn) portalBtn.classList.add('logged-in');
      } else {
        userStatusSpan.textContent = 'Sign In';
        if (portalBtn) portalBtn.classList.remove('logged-in');
      }
    }
  });
}
