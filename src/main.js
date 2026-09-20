import './styles/reset.css';
import './styles/variables.css';
import './styles/components.css';
import './styles/calculator.css';
import './styles/checkout.css';
import './styles/portal.css';
import './styles/portalPage.css';
import './styles/gallery.css';
import './styles/centers.css';
import './styles/globalTrust.css';
import './styles/pediatricSection.css';
import './styles/main.css';

import { renderHeader, initHeader } from './components/Header.js';
import { renderHero, initHero } from './components/Hero.js';
import { renderFunnelsNav, initFunnelsNav } from './components/FunnelsNav.js';
import { renderCalculator, initCalculator } from './components/Calculator.js';
import { renderComparisonTable, initComparisonTable } from './components/ComparisonTable.js';
import { renderUsDistributionSection, initUsDistributionSection } from './components/UsDistributionSection.js';
import { renderGlobalBrandTrust, initGlobalBrandTrust } from './components/GlobalBrandTrust.js';
import { renderProductCatalog, initProductCatalog } from './components/ProductCatalog.js';
import { renderPatentsSection, initPatentsSection } from './components/PatentsSection.js';
import { renderMountingGuide, initMountingGuide } from './components/MountingGuide.js';
import { renderAthleteSection, initAthleteSection } from './components/AthleteSection.js';
import { renderPediatricFamilySection, initPediatricFamilySection } from './components/PediatricFamilySection.js';
import { renderOnboardingProgram } from './components/OnboardingProgram.js';
import { renderVideoProtocols, initVideoProtocols } from './components/VideoProtocols.js';
import { renderExerciseGallery, initExerciseGallery } from './components/ExerciseGallery.js';
import { renderClinicalTrust } from './components/ClinicalTrust.js';
import { renderReviewsSection, initReviewsSection } from './components/ReviewsSection.js';
import { renderBlogSection, initBlogSection } from './components/BlogSection.js';
import { renderFaqSection, initFaqSection } from './components/FaqSection.js';
import { renderFooter } from './components/Footer.js';
import { renderCheckoutDrawer, initCheckoutDrawer } from './components/CheckoutDrawer.js';
import { renderOrderConfirmationModal, initOrderConfirmationModal } from './components/OrderConfirmationModal.js';
import { renderCustomerPortalModal, initCustomerPortal } from './components/CustomerPortalModal.js';
import { renderMobileStickyBar } from './components/MobileStickyBar.js';
import { renderPatientPortalPage, initPatientPortalPage } from './components/PortalPage.js';
import { renderClinicalCentersPage, initClinicalCentersPage } from './components/RehabilitationCentersPage.js';

// Prevent browser automatic scroll restoration so the page always starts from the top
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

let currentRenderedRoute = null;

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const hash = window.location.hash || '';
  const pathname = window.location.pathname || '';
  const isPortalRoute = hash === '#portal' || hash.startsWith('#portal?') || pathname === '/portal';
  const isCentersRoute = hash === '#centers' || hash === '#clinic' || hash.startsWith('#centers?') || pathname === '/centers';
  const targetRoute = isPortalRoute ? 'portal' : isCentersRoute ? 'centers' : 'storefront';

  if (currentRenderedRoute === targetRoute && targetRoute === 'storefront') {
    if (hash && hash !== '#' && hash !== '') {
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        const headerEl = document.getElementById('site-header');
        const headerHeight = headerEl ? headerEl.offsetHeight : 70;
        const currentY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const topPos = targetEl.getBoundingClientRect().top + currentY - headerHeight - 16;
        window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }
  currentRenderedRoute = targetRoute;

  if (isPortalRoute) {
    // Render Dedicated Full Patient Portal Page
    app.innerHTML = renderPatientPortalPage();
    initPatientPortalPage();
    window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }

  if (isCentersRoute) {
    // Render Dedicated Rehabilitation Centers, Founder Heritage & Military Care Page
    app.innerHTML = `
      ${renderHeader()}
      <main id="main-content">
        ${renderClinicalCentersPage()}
      </main>
      ${renderFooter()}
      ${renderCheckoutDrawer()}
      ${renderOrderConfirmationModal()}
      ${renderCustomerPortalModal()}
      ${renderMobileStickyBar()}
    `;
    initHeader();
    initClinicalCentersPage();
    initCheckoutDrawer();
    initOrderConfirmationModal();
    initCustomerPortal();
    return;
  }

  // Render Main Clinical E-Commerce Storefront
  app.innerHTML = `
    ${renderHeader()}
    <main id="main-content">
      ${renderHero()}
      ${renderFunnelsNav()}
      ${renderVideoProtocols()}
      ${renderComparisonTable()}
      ${renderGlobalBrandTrust()}
      ${renderProductCatalog()}
      ${renderPatentsSection()}
      ${renderMountingGuide()}
      ${renderAthleteSection()}
      ${renderPediatricFamilySection()}
      ${renderExerciseGallery()}
      ${renderOnboardingProgram()}
      ${renderClinicalTrust()}
      ${renderCalculator()}
      ${renderUsDistributionSection()}
      ${renderReviewsSection()}
      ${renderBlogSection()}
      ${renderFaqSection()}
    </main>
    ${renderFooter()}
    ${renderCheckoutDrawer()}
    ${renderOrderConfirmationModal()}
    ${renderCustomerPortalModal()}
    ${renderMobileStickyBar()}
  `;

  // Initialize storefront features
  initHeader();
  initHero();
  initFunnelsNav();
  initVideoProtocols();
  initComparisonTable();
  initUsDistributionSection();
  initGlobalBrandTrust();
  initProductCatalog();
  initPatentsSection();
  initMountingGuide();
  initAthleteSection();
  initPediatricFamilySection();
  initExerciseGallery();
  initCalculator();
  initReviewsSection();
  initBlogSection();
  initFaqSection();
  initCheckoutDrawer();
  initOrderConfirmationModal();
  initCustomerPortal();

  // On page open / refresh of the storefront, always start cleanly at the top of the page
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Clean any stale in-page section hash (e.g. #catalog) from URL on initial load so reload always starts at the beginning
  if (hash && !isPortalRoute && !isCentersRoute) {
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }
}

// Router Event Listeners
window.addEventListener('hashchange', renderApp);
window.addEventListener('popstate', renderApp);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
