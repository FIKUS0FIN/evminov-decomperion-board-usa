import { describe, it, expect } from 'vitest';
import { CLINICAL_PATHWAYS, renderFunnelsNav } from '../../src/components/FunnelsNav.js';

describe('Clinical Pathways Navigation Component', () => {
  it('should have 6 structured clinical pathways with valid attributes', () => {
    expect(CLINICAL_PATHWAYS.length).toBe(6);

    CLINICAL_PATHWAYS.forEach((item) => {
      expect(item.id).toBeTruthy();
      expect(item.target).toMatch(/^#[a-z0-9_-]+$/);
      expect(item.btnId).toBeTruthy();
      expect(item.title).toBeTruthy();
      expect(item.subtitle).toBeTruthy();
      expect(item.tag).toBeTruthy();
      expect(item.icon).toContain('<svg');
      expect(item.icon).toContain('</svg>');
    });
  });

  it('should NOT contain any consumer emojis (zero AI-generated emoji artifacts)', () => {
    // Regex matching standard emojis
    const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

    CLINICAL_PATHWAYS.forEach((item) => {
      expect(emojiRegex.test(item.title)).toBe(false);
      expect(emojiRegex.test(item.subtitle)).toBe(false);
      expect(emojiRegex.test(item.tag)).toBe(false);
      expect(emojiRegex.test(item.icon)).toBe(false);
    });

    const rendered = renderFunnelsNav();
    expect(emojiRegex.test(rendered)).toBe(false);
    expect(rendered).not.toContain('🔄');
    expect(rendered).not.toContain('⚡');
    expect(rendered).not.toContain('🏋️');
    expect(rendered).not.toContain('🔨');
    expect(rendered).not.toContain('📱');
    expect(rendered).not.toContain('📚');
  });

  it('should render all 6 pathway cards with correct target links and IDs', () => {
    const html = renderFunnelsNav();

    expect(html).toContain('id="clinical-solutions-nav"');
    expect(html).toContain('CLINICAL PATHWAYS');
    expect(html).toContain('Explore by Condition &amp; Need');
    expect(html).toContain('funnel-btn-comparison');
    expect(html).toContain('funnel-btn-hernia');
    expect(html).toContain('funnel-btn-athletes');
    expect(html).toContain('funnel-btn-mounting');
    expect(html).toContain('funnel-btn-recovery');
    expect(html).toContain('funnel-btn-studies');
    expect(html).toContain('href="#comparison"');
    expect(html).toContain('href="#calculator"');
    expect(html).toContain('href="#athletes"');
    expect(html).toContain('href="#mounting"');
    expect(html).toContain('href="#onboarding"');
    expect(html).toContain('href="#blog"');
  });
});
