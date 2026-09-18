import { describe, it, expect } from 'vitest';
import {
  athleteDisciplines,
  renderAthleteSection
} from '../../src/components/AthleteSection.js';

describe('AthleteSection & Desk Worker Spine Restoration Component', () => {
  it('should export all 5 core athletic and sedentary disciplines', () => {
    expect(athleteDisciplines).toBeDefined();
    expect(athleteDisciplines.length).toBe(5);

    const ids = athleteDisciplines.map((d) => d.id);
    expect(ids).toContain('lifters');
    expect(ids).toContain('runners');
    expect(ids).toContain('golf-tennis');
    expect(ids).toContain('combat-bjj');
    expect(ids).toContain('desk-workers');
  });

  it('should contain accurate biomechanical data and metrics for each discipline', () => {
    athleteDisciplines.forEach((d) => {
      expect(d.name).toBeTruthy();
      expect(d.icon).toBeTruthy();
      expect(d.badge).toBeTruthy();
      expect(d.problemTitle).toBeTruthy();
      expect(d.problemDesc.length).toBeGreaterThan(50);
      expect(d.solutionTitle).toBeTruthy();
      expect(d.solutionDesc.length).toBeGreaterThan(50);
      expect(d.stats.length).toBe(4);
      expect(d.image).toBeTruthy();
      expect(d.quote).toBeTruthy();
    });

    const lifters = athleteDisciplines.find((d) => d.id === 'lifters');
    expect(lifters.badge).toContain('18–22%');
    expect(lifters.stats.some((s) => s.val === '+2.4 mm')).toBe(true);

    const desk = athleteDisciplines.find((d) => d.id === 'desk-workers');
    expect(desk.badge).toContain('190%');
    expect(desk.problemDesc).toContain('Tech Neck');

    const bjj = athleteDisciplines.find((d) => d.id === 'combat-bjj');
    expect(bjj.solutionDesc).toContain('Glisson');
  });

  it('should render the full athlete section HTML with tabs, panels, pullup paradox, and coach story', () => {
    const html = renderAthleteSection();

    expect(html).toContain('id="athletes"');
    expect(html).toContain('Spine Restoration for Athletes, Desk Workers &amp; Tactical Operators');
    
    // Tab pill buttons
    expect(html).toContain('id="athlete-pill-lifters"');
    expect(html).toContain('id="athlete-pill-runners"');
    expect(html).toContain('id="athlete-pill-golf-tennis"');
    expect(html).toContain('id="athlete-pill-combat-bjj"');
    expect(html).toContain('id="athlete-pill-desk-workers"');

    // Panels
    expect(html).toContain('id="athlete-panel-lifters"');
    expect(html).toContain('id="athlete-panel-runners"');
    expect(html).toContain('id="athlete-panel-golf-tennis"');
    expect(html).toContain('id="athlete-panel-combat-bjj"');
    expect(html).toContain('id="athlete-panel-desk-workers"');

    // Pullup Bar Paradox comparison
    expect(html).toContain('Hanging from Pullup Bar');
    expect(html).toContain('Inversion Table');
    expect(html).toContain('Evminov Inclined Flex Board');
    expect(html).toContain('Isometric Guarding');

    // Founder athletic heritage
    expect(html).toContain('Vyacheslav Evminov • Master of Sports');
    expect(html).toContain('Honored Coach of Academic Rowing');
  });
});
