import { describe, it, expect } from 'vitest';
import { renderHeader } from '../../src/components/Header.js';
import { renderHero } from '../../src/components/Hero.js';
import { renderClinicalTrust } from '../../src/components/ClinicalTrust.js';
import { renderGlobalBrandTrust } from '../../src/components/GlobalBrandTrust.js';
import { renderProductCatalog } from '../../src/components/ProductCatalog.js';
import { renderFooter } from '../../src/components/Footer.js';
import { renderUsDistributionSection } from '../../src/components/UsDistributionSection.js';
import { renderComparisonTable } from '../../src/components/ComparisonTable.js';
import { patentsAndCertifications } from '../../src/data/patents.js';

describe('1996 Clinical Foundation & 30-Year Continuous Success Verification', () => {
  it('should verify Header announcement and navigation prominently state 1996 and 30-year legacy', () => {
    const headerHtml = renderHeader();
    expect(headerHtml).toContain('ESTABLISHED 1996');
    expect(headerHtml).toContain('30 Years of Clinical Vertebrology');
    expect(headerHtml).toContain('500,000+ Patients Healed');
    expect(headerHtml).toContain('Continuous Clinical Practice Since 1996');
    expect(headerHtml).toContain('Since 1996 Clinic &amp; Heritage');
  });

  it('should verify Hero copy emphasizes 1996 founding in Kyiv, 30 years practice, and 500k+ recoveries', () => {
    const heroHtml = renderHero();
    expect(heroHtml).toContain('Established 1996 in Kyiv • 30 Years of Clinical Vertebrology • Over 500,000 Patients Successfully Restored');
    expect(heroHtml).toContain('Continuous Medical Practice Since 1996 • 500k+ Healed Patients');
    expect(heroHtml).toContain('Clinically proven since 1996 at the Flagship Evminov Vertebral-Health Center in Kyiv');
    expect(heroHtml).toContain('For 30 continuous years, our patented resonant pine traction system has successfully guided over 500,000 patients');
    expect(heroHtml).toContain('Continuous Practice Since 1996 (30 Years)');
    expect(heroHtml).toContain('500,000+ Successfully Healed Patients');
  });

  it('should verify ClinicalTrust component highlights 1996 foundation and continuous healing history', () => {
    const clinicalHtml = renderClinicalTrust();
    expect(clinicalHtml).toContain('Clinical Heritage • Established 1996');
    expect(clinicalHtml).toContain('Operating Continuously Since 1996: 30 Years of Documented Clinical Success');
    expect(clinicalHtml).toContain('Founded in 1996');
    expect(clinicalHtml).toContain('30 unbroken years');
    expect(clinicalHtml).toContain('500,000+ home users worldwide');
    expect(clinicalHtml).toContain('30 Yrs');
    expect(clinicalHtml).toContain('Since 1996 Practice');
    expect(clinicalHtml).toContain('/images/authentic/vyacheslav-evminov-founder.jpg');
    expect(clinicalHtml).toContain('/images/authentic/clinic-rehab-center-1.jpg');
    expect(clinicalHtml).toContain('Founder &amp; Method Creator');
    expect(clinicalHtml).toContain('Spinal health is not achieved through passive hanging');
  });

  it('should verify GlobalBrandTrust highlights 30 years continuous practice since 1996', () => {
    const globalHtml = renderGlobalBrandTrust();
    expect(globalHtml).toContain('CONTINUOUS CLINICAL SPINAL PRACTICE SINCE 1996 • 30 YEARS HELPING PATIENTS RECOVER');
    expect(globalHtml).toContain('Founded in 1996 in Kyiv, Ukraine, the Evminov clinic and decompression system have delivered 30 continuous years');
    expect(globalHtml).toContain('Continuously operating and helping patients heal since 1996');
    expect(globalHtml).toContain('/images/authentic/evminov-official-logo.png');
    expect(globalHtml).toContain('global-trust-official-badge');
  });

  it('should verify ProductCatalog and Footer emphasize 1996 medical heritage', () => {
    const catalogHtml = renderProductCatalog();
    expect(catalogHtml).toContain('Official North American Storefront • Clinically Proven Since 1996');
    expect(catalogHtml).toContain('Operating continuously since 1996 with 30 years of medical practice and over 500,000 patients healed worldwide');

    const footerHtml = renderFooter();
    expect(footerHtml).toContain('Operating continuously since 1996 with 30 years of medical practice and over 500,000 patients successfully healed');
  });

  it('should verify US Distribution and Comparison Table emphasize 1996 track record', () => {
    const usHtml = renderUsDistributionSection();
    expect(usHtml).toContain('CLINICAL HERITAGE SINCE 1996');
    expect(usHtml).toContain('Backed by 30 continuous years of clinical spine rehabilitation since 1996');

    const compHtml = renderComparisonTable();
    expect(compHtml).toContain('Continuous clinical practice since 1996 (30 Years)');
    expect(compHtml).toContain('Over 500,000 patients healed across 30 years');
  });

  it('should verify Patents metadata reflects 30 years since 1996', () => {
    expect(patentsAndCertifications.stats.clinicalYears).toBe('30 Years (Since 1996)');
    expect(patentsAndCertifications.subtitle).toContain('30 continuous years of verified clinical validation since 1996');
  });

  it('should verify Hero renders unified organic hero-trust-banner-card with rating and live pulse', () => {
    const heroHtml = renderHero();
    expect(heroHtml).toContain('hero-trust-banner-card');
    expect(heroHtml).toContain('clinical-live-pulse');
    expect(heroHtml).toContain('heritage-primary-text');
    expect(heroHtml).toContain('heritage-cta-link');
    expect(heroHtml).toContain('hero-trust-stars');
    expect(heroHtml).toContain('4.9 / 5.0');
    expect(heroHtml).toContain('2,400+ Verified US Cases');
  });

  it('should verify US Use Cases subtitle is rendered inside stylized quotation card', () => {
    const usHtml = renderUsDistributionSection();
    expect(usHtml).toContain('usecases-quote-wrapper');
    expect(usHtml).toContain('usecases-quote-badge');
    expect(usHtml).toContain('usecases-quote-glyph');
    expect(usHtml).toContain('usecases-quote-text');
    expect(usHtml).toContain('“Whether you are trapped in an office chair');
  });
});
