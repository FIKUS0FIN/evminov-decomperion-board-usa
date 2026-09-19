import { describe, it, expect } from 'vitest';
import { patentsAndCertifications } from '../../src/data/patents.js';

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
    expect(patentsAndCertifications.clinicalTrials.length).toBeGreaterThanOrEqual(3);
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
});

