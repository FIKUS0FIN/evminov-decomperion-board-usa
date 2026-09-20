import { describe, it, expect } from 'vitest';
import { renderPediatricFamilySection, initPediatricFamilySection } from '../../src/components/PediatricFamilySection.js';

describe('Pediatric Scoliosis, Family Spinal Hygiene & "Spine Toothbrush" Component', () => {
  it('should render the pediatric section container with correct IDs and ARIA labels', () => {
    const html = renderPediatricFamilySection();
    expect(html).toContain('id="pediatric-family"');
    expect(html).toContain('aria-label="Pediatric Posture, Scoliosis & Family Spinal Hygiene"');
    expect(html).toContain('The "Spine Toothbrush" Method');
    expect(html).toContain('The "Spine Toothbrush" Methodology');
    expect(html).toContain('Over 80% of children develop posture disorders');
  });

  it('should render all 4 core interactive tabs and their associated panels', () => {
    const html = renderPediatricFamilySection();

    // 4 tab buttons
    expect(html).toContain('id="tab-toothbrush"');
    expect(html).toContain('id="tab-dancing"');
    expect(html).toContain('id="tab-workplace"');
    expect(html).toContain('id="tab-wisdom"');

    // 4 tab panels
    expect(html).toContain('id="panel-toothbrush"');
    expect(html).toContain('id="panel-dancing"');
    expect(html).toContain('id="panel-workplace"');
    expect(html).toContain('id="panel-wisdom"');
  });

  it('should detail the 32 teeth vs 32 vertebrae analogy and 15x economic cost formula', () => {
    const html = renderPediatricFamilySection();

    // 32 Teeth vs 32 Vertebrae
    expect(html).toContain('32 TEETH HYGIENE');
    expect(html).toContain('32 VERTEBRAE DECOMPRESSION');
    expect(html).toContain('You Can Replace Broken Teeth, but You Can Never Replace Your Spine');

    // Economics
    expect(html).toContain('15x Cheaper Than Toothpaste');
    expect(html).toContain('$7.50 / person / yr');
    expect(html).toContain('3€/year');
    expect(html).toContain('~$150 – $200 / yr');
  });

  it('should feature Lying-Down Dancing, 13-point pedagogical plan, and 2-3 inches growth potential', () => {
    const html = renderPediatricFamilySection();

    expect(html).toContain('Lying-Down Dancing');
    expect(html).toContain('Lying-Down Dance Method');
    expect(html).toContain('Ages 3–15');
    expect(html).toContain('+2 to +3 Inches');
    expect(html).toContain('13-Point Plan for Children &amp; Parents');
    expect(html).toContain('/images/gallery/youth-paired-traction.jpg');
    expect(html).toContain('/videos/pediatric-lying-down-dance.mp4');
  });

  it('should include workplace ergonomics and historical medical quotes (Hippocrates & Masso)', () => {
    const html = renderPediatricFamilySection();

    // Workplace use cases
    expect(html).toContain('Desk, Remote &amp; Office Workers');
    expect(html).toContain('Drivers, Truckers &amp; Commuters');
    expect(html).toContain('Conveyor, Assembly &amp; Warehouse');
    expect(html).toContain('Stylists, Beauty Masters &amp; Surgeons');

    // Quotes
    expect(html).toContain('Hippocrates');
    expect(html).toContain('A diseased spine is a coat hanger for all illnesses');
    expect(html).toContain('Angelo Mosso');
    expect(html).toContain('Physical exercises can replace many medicines');
  });

  it('should be safe to call initPediatricFamilySection in Node / headless environments without throwing', () => {
    expect(() => initPediatricFamilySection()).not.toThrow();
  });
});
