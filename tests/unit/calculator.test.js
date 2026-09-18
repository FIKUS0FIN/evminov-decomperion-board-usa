import { describe, it, expect } from 'vitest';
import { 
  calculateTractionPhysics, 
  recommendIncline, 
  recommendBoardModel, 
  formatUSD, 
  formatKlarna,
  lbsToKg,
  inchesToFeet
} from '../../src/utils/formatters.js';

describe('Calculator & Traction Physics Logic', () => {
  it('calculates physiological traction force accurately', () => {
    // 180 lbs at 20 degrees:
    // sin(20°) ≈ 0.3420 -> gross ≈ 61.56 lbs
    // friction: 180 * cos(20°) * 0.08 ≈ 13.53 lbs
    // net ≈ 61.56 - 13.53 ≈ 48 lbs
    const result = calculateTractionPhysics(180, 20);
    expect(result.grossForceLbs).toBeGreaterThan(50);
    expect(result.netTractionLbs).toBeGreaterThanOrEqual(45);
    expect(result.netTractionLbs).toBeLessThanOrEqual(52);
    expect(result.percentBodyWeight).toBeGreaterThanOrEqual(24);
    expect(result.percentBodyWeight).toBeLessThanOrEqual(30);
  });

  it('handles minimum incline of 8 degrees without negative force', () => {
    const result = calculateTractionPhysics(120, 8);
    expect(result.netTractionLbs).toBeGreaterThanOrEqual(0);
    expect(result.percentBodyWeight).toBeGreaterThanOrEqual(0);
  });

  it('recommends conservative starting angles for disc herniation and sciatica', () => {
    const hernia = recommendIncline('hernia');
    expect(hernia.startAngle).toBe(12);
    expect(hernia.maxAngle).toBe(22);

    const sciatica = recommendIncline('sciatica');
    expect(sciatica.startAngle).toBe(15);
    expect(sciatica.maxAngle).toBe(25);

    const athlete = recommendIncline('athlete');
    expect(athlete.startAngle).toBe(22);
    expect(athlete.maxAngle).toBe(35);
  });

  it('recommends the Wide Heavy-Duty board for users over 210 lbs or 6\'5"', () => {
    // Standard user
    const standardRec = recommendBoardModel(180, 71); // 5'11", 180 lbs
    expect(standardRec.modelId).toBe('evminov-standard');

    // Heavy user (>210 lbs)
    const heavyRec = recommendBoardModel(225, 70);
    expect(heavyRec.modelId).toBe('evminov-wide');

    // Tall user (>77 inches = 6'5"+)
    const tallRec = recommendBoardModel(190, 78);
    expect(tallRec.modelId).toBe('evminov-wide');
  });

  it('formats USD and Klarna installments correctly', () => {
    expect(formatUSD(450)).toBe('$450');
    expect(formatKlarna(450)).toBe('$112.50');
    expect(formatKlarna(500)).toBe('$125.00');
  });

  it('converts imperial and metric units accurately', () => {
    expect(lbsToKg(220)).toBe(100);
    expect(inchesToFeet(71)).toBe('5\'11"');
    expect(inchesToFeet(72)).toBe('6\'0"');
  });
});
