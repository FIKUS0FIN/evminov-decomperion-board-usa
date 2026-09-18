import { describe, it, expect } from 'vitest';
import {
  founderStory,
  militaryProgram,
  centersNetwork,
  homeHospitalConcept,
  psychosomaticStressData,
  woodCraftsmanshipData,
  contraindicationsData,
  audienceUseCases
} from '../../src/data/centersData.js';
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
    expect(militaryProgram.motto).toContain('Знімаємо броню з хребта');
    expect(militaryProgram.challenges.length).toBeGreaterThanOrEqual(3);
    expect(militaryProgram.solutionSteps.length).toBeGreaterThanOrEqual(3);
    expect(militaryProgram.stats.gearWeight).toContain('30–45 kg');
  });

  it('should document the Home Hospital concept and pillars', () => {
    expect(homeHospitalConcept.badge).toContain('Домашній Госпіталь');
    expect(homeHospitalConcept.pillars.length).toBe(4);
    expect(homeHospitalConcept.kyivHeritage).toContain('Kyiv');
  });

  it('should document psychosomatic stress and autonomic neural pathways', () => {
    expect(psychosomaticStressData.title).toContain('Psychosomatic Stress');
    expect(psychosomaticStressData.mechanisms.length).toBe(3);
    expect(psychosomaticStressData.quote).toContain('parasympathetic');
  });

  it('should document Carpathian Resonant Pine and Alder wood specifications', () => {
    expect(woodCraftsmanshipData.species.length).toBe(2);
    const pine = woodCraftsmanshipData.species.find((s) => s.name.includes('Pine'));
    const alder = woodCraftsmanshipData.species.find((s) => s.name.includes('Alder'));
    expect(pine).toBeDefined();
    expect(alder).toBeDefined();
    expect(alder.name).toContain('Вільха');
  });

  it('should document clinical contraindications and safety rules', () => {
    expect(contraindicationsData.absolute.length).toBeGreaterThanOrEqual(5);
    expect(contraindicationsData.temporary.length).toBeGreaterThanOrEqual(3);
    expect(contraindicationsData.safetyRules.length).toBeGreaterThanOrEqual(3);
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

  it('should export structured audience use cases covering athletes, desk workers, tactical, herniations, and family', () => {
    expect(audienceUseCases).toBeDefined();
    expect(audienceUseCases.length).toBe(5);
    const athletes = audienceUseCases.find((u) => u.id === 'athletes');
    const desk = audienceUseCases.find((u) => u.id === 'desk-workers');
    const tactical = audienceUseCases.find((u) => u.id === 'tactical-military');
    const herniations = audienceUseCases.find((u) => u.id === 'severe-herniations');
    const family = audienceUseCases.find((u) => u.id === 'family-posture');

    expect(athletes).toBeDefined();
    expect(athletes.mechanisms.length).toBeGreaterThanOrEqual(4);
    expect(desk).toBeDefined();
    expect(desk.badge).toContain('190%');
    expect(tactical).toBeDefined();
    expect(tactical.title).toContain('Military');
    expect(herniations).toBeDefined();
    expect(family).toBeDefined();
  });

  it('should render the clinical centers page with schemas, founder story, military/tactical program, audience use cases, home hospital, wood science and videos', () => {
    const html = renderClinicalCentersPage();
    expect(html).toContain('centers-page');
    expect(html).toContain('Vyacheslav Evminov');
    expect(html).toContain('9 Kostolna Street');
    expect(html).toContain('Spine of the Defender Program');
    expect(html).toContain('Знімаємо броню з хребта');
    expect(html).toContain('home-hospital');
    expect(html).toContain('audience-cases');
    expect(html).toContain('audience-card-athletes');
    expect(html).toContain('audience-card-desk-workers');
    expect(html).toContain('audience-card-tactical-military');
    expect(html).toContain('psychosomatic');
    expect(html).toContain('wood-science');
    expect(html).toContain('safety-screening');
    expect(html).toContain('MedicalBusiness');
    // Both official YouTube videos are embedded
    expect(html).toContain('GDLVNWynWF0');
    expect(html).toContain('fP-biAHusGs');
  });
});
