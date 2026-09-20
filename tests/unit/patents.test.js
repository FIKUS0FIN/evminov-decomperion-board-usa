import { describe, it, expect } from 'vitest';
import { patentsAndCertifications } from '../../src/data/patents.js';
import { formatKpiValue, renderPatentsSection } from '../../src/components/PatentsSection.js';

describe('Evminov Patents & Clinical Trials Data Integrity', () => {
  it('should contain verified patent registrations', () => {
    expect(patentsAndCertifications.patents.length).toBeGreaterThanOrEqual(4);
    
    const uaPatent = patentsAndCertifications.patents.find((p) => p.id === 'ua-patent-28849');
    expect(uaPatent).toBeDefined();
    expect(uaPatent.number).toContain('28849');
    expect(uaPatent.inventor).toContain('Evminov');

    const eaPatent = patentsAndCertifications.patents.find((p) => p.id === 'ea-patent-003889');
    expect(eaPatent).toBeDefined();
    expect(eaPatent.number).toContain('003889');
  });

  it('should include documented clinical trials with high surgery avoidance', () => {
    expect(patentsAndCertifications.clinicalTrials.length).toBe(6);
    expect(patentsAndCertifications.clinicalTrials.some(t => t.institution.includes('Sports Medicine'))).toBe(true);
    expect(patentsAndCertifications.clinicalTrials.some(t => t.institution.includes('Pediatric Vertebrology'))).toBe(true);
    expect(patentsAndCertifications.stats.surgeryAvoidanceRate).toMatch(/93/);
    expect(patentsAndCertifications.stats.patientsTreated).toContain('120,000');
  });

  it('should include valid US regulatory and insurance reimbursement codes', () => {
    const us = patentsAndCertifications.usCompliance;
    expect(us.fdaStatus).toContain('Class I');
    expect(us.hcpcsCode).toContain('E0941');
    expect(us.cptBillingCode).toContain('97012');
    expect(us.usWarehouse).toContain('Burbank, CA');
  });

  it('should provide clickable registry URLs and high-res images for all patents and scanned documents', () => {
    expect(patentsAndCertifications.scannedDocuments.length).toBeGreaterThanOrEqual(4);

    patentsAndCertifications.patents.forEach((pat) => {
      expect(pat.registryUrl).toBeDefined();
      expect(pat.image).toBeDefined();
      expect(pat.image).toMatch(/^\/images\/patents\//);
    });

    patentsAndCertifications.scannedDocuments.forEach((doc) => {
      expect(doc.id).toBeDefined();
      expect(doc.title).toBeDefined();
      expect(doc.docNumber).toBeDefined();
      expect(doc.image).toMatch(/^\/images\/patents\//);
      expect(doc.registryUrl).toBeDefined();
    });
  });

  it('should format KPI metrics with parentheses into two distinct rows for clean display', () => {
    const formattedYears = formatKpiValue('30 Years (Since 1996)');
    expect(formattedYears).toContain('<span class="kpi-val-main">30 Years</span>');
    expect(formattedYears).toContain('<span class="kpi-val-sub">(Since 1996)</span>');

    const formattedTreated = formatKpiValue('120,000+ (500k+ Global)');
    expect(formattedTreated).toContain('<span class="kpi-val-main">120,000+</span>');
    expect(formattedTreated).toContain('<span class="kpi-val-sub">(500k+ Global)</span>');

    const formattedSurgery = formatKpiValue('93.4%');
    expect(formattedSurgery).toBe('<span class="kpi-val-main">93.4%</span>');
  });

  it('should render PatentsSection with dual-row KPI structure for clinical years and global reach', () => {
    const sectionHtml = renderPatentsSection();
    expect(sectionHtml).toContain('<span class="kpi-val-main">30 Years</span><span class="kpi-val-sub">(Since 1996)</span>');
    expect(sectionHtml).toContain('<span class="kpi-val-main">120,000+</span><span class="kpi-val-sub">(500k+ Global)</span>');
  });

  it('should render interactive scanned documents carousel with controls, floating arrows, dots, and ordered items', () => {
    const html = renderPatentsSection();

    // Verify Carousel Structural Elements
    expect(html).toContain('id="scanned-docs-section"');
    expect(html).toContain('scanned-docs-controls');
    expect(html).toContain('id="scanned-docs-counter"');
    expect(html).toContain('id="scanned-prev-btn"');
    expect(html).toContain('id="scanned-next-btn"');
    expect(html).toContain('id="scanned-float-prev"');
    expect(html).toContain('id="scanned-float-next"');
    expect(html).toContain('id="scanned-docs-viewport"');
    expect(html).toContain('id="scanned-docs-track"');
    expect(html).toContain('id="scanned-carousel-dots"');

    // Verify all 6 documents are present and correctly ordered
    const docs = patentsAndCertifications.scannedDocuments;
    expect(docs.length).toBe(6);
    expect(docs[0].id).toBe('uspto-cert');
    expect(docs[1].id).toBe('epo-cert');
    expect(docs[2].id).toBe('ukr-cert');
    expect(docs[3].id).toBe('moh-cert');
    expect(docs[4].id).toBe('epo-claim-cert'); // European Patent Claims on the left of slide 2
    expect(docs[5].id).toBe('china-cert'); // China ZL 99 8 on the right of slide 2 (last element)

    expect(html).toContain('ZL 99 8 04071.3 / CN 1292706A');
    expect(html).toContain('EP 1 038 512 Claims');
  });
});


