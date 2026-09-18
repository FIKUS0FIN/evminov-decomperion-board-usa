import { describe, it, expect } from 'vitest';
import { founderStory, militaryProgram, centersNetwork } from '../../src/data/centersData.js';
import { renderClinicalCentersPage } from '../../src/components/RehabilitationCentersPage.js';

describe('Evminov Rehabilitation Centers & Founder Heritage Data Integrity', () => {
  it('should contain comprehensive founder biography and timeline milestones', () => {
    expect(founderStory.name).toContain('Evminov');
    expect(founderStory.timeline.length).toBeGreaterThanOrEqual(6);
    expect(founderStory.injuryDrama.prognosis).toContain('50/50');
    expect(founderStory.injuryDrama.legacy).toContain('Kyiv');
  });

  it('should document the military and veteran spine rehabilitation program', () => {
    expect(militaryProgram.badge).toBeTruthy();
    expect(militaryProgram.challenges.length).toBeGreaterThanOrEqual(3);
    expect(militaryProgram.solutionSteps.length).toBeGreaterThanOrEqual(3);
    expect(militaryProgram.stats.gearWeight).toContain('30–45 kg');
  });

  it('should feature the flagship Kyiv center on Kostolna Street and US operations hub', () => {
    expect(centersNetwork.length).toBeGreaterThanOrEqual(4);
    
    const kyiv = centersNetwork.find((c) => c.id === 'kyiv-central');
    expect(kyiv).toBeDefined();
    expect(kyiv.address).toContain('Kostolna');
    expect(kyiv.phones.length).toBeGreaterThanOrEqual(2);
    expect(kyiv.features.length).toBeGreaterThanOrEqual(4);

    const us = centersNetwork.find((c) => c.id === 'us-hub');
    expect(us).toBeDefined();
    expect(us.address).toContain('Glendale, CA');
    expect(us.phones[0]).toContain('+1 (747) 306-0140');
  });

  it('should render the clinical centers page with schemas, founder story, military program and videos', () => {
    const html = renderClinicalCentersPage();
    expect(html).toContain('centers-page');
    expect(html).toContain('Vyacheslav Evminov');
    expect(html).toContain('9 Kostolna Street');
    expect(html).toContain('Spine of the Defender Program');
    expect(html).toContain('MedicalBusiness');
    // Both official YouTube videos are embedded
    expect(html).toContain('GDLVNWynWF0');
    expect(html).toContain('fP-biAHusGs');
  });
});
