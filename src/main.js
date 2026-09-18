import './styles/reset.css';
import './styles/variables.css';
import './styles/components.css';
import './styles/calculator.css';
import './styles/checkout.css';
import './styles/portal.css';
import './styles/portalPage.css';
import './styles/main.css';

import { renderHeader, initHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderFunnelsNav, initFunnelsNav } from './components/FunnelsNav.js';
import { renderCalculator, initCalculator } from './components/Calculator.js';
import { renderComparisonTable, initComparisonTable } from './components/ComparisonTable.js';
import { renderProductCatalog, initProductCatalog } from './components/ProductCatalog.js';
import { renderPatentsSection, initPatentsSection } from './components/PatentsSection.js';
import { renderMountingGuide } from './components/MountingGuide.js';
import { renderAthleteSection } from './components/AthleteSection.js';
import { renderOnboardingProgram } from './components/OnboardingProgram.js';
import { renderVideoProtocols, initVideoProtocols } from './components/VideoProtocols.js';
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

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const hash = window.location.hash || '';
  const pathname = window.location.pathname || '';
  const isPortalRoute = hash === '#portal' || hash.startsWith('#portal?') || pathname === '/portal';

  if (isPortalRoute) {
    // Render Dedicated Full Patient Portal Page
    app.innerHTML = renderPatientPortalPage();
    initPatientPortalPage();
    window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }

  // Render Main Clinical E-Commerce Storefront
  app.innerHTML = `
    ${renderHeader()}
    <main id="main-content">
      ${renderHero()}
      ${renderFunnelsNav()}
      ${renderCalculator()}
      ${renderComparisonTable()}
      ${renderProductCatalog()}
      ${renderPatentsSection()}
      ${renderMountingGuide()}
      ${renderAthleteSection()}
      ${renderOnboardingProgram()}
      ${renderVideoProtocols()}
      ${renderClinicalTrust()}
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
  initFunnelsNav();
  initCalculator();
  initComparisonTable();
  initProductCatalog();
  initPatentsSection();
  initVideoProtocols();
  initReviewsSection();
  initBlogSection();
  initFaqSection();
  initCheckoutDrawer();
  initOrderConfirmationModal();
  initCustomerPortal();
}

// Router Event Listeners
window.addEventListener('hashchange', renderApp);
window.addEventListener('popstate', renderApp);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
