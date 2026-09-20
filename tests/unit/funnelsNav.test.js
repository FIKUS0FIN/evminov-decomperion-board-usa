import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { CLINICAL_PATHWAYS, renderFunnelsNav, initFunnelsNav } from '../../src/components/FunnelsNav.js';

describe('Clinical Pathways Navigation Component', () => {
  it('should have 12 structured clinical pathways with valid attributes', () => {
    expect(CLINICAL_PATHWAYS.length).toBe(12);

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

  it('should render all 12 pathway cards with correct target links and IDs', () => {
    const html = renderFunnelsNav();

    expect(html).toContain('id="clinical-solutions-nav"');
    expect(html).toContain('CLINICAL PATHWAYS');
    expect(html).toContain('Explore by Condition &amp; Need');
    expect(html).toContain('12 Evidence-Based Pathways');
    expect(html).toContain('funnel-btn-comparison');
    expect(html).toContain('funnel-btn-hernia');
    expect(html).toContain('funnel-btn-sciatica');
    expect(html).toContain('funnel-btn-pediatric');
    expect(html).toContain('funnel-btn-cervical');
    expect(html).toContain('funnel-btn-athletes');
    expect(html).toContain('funnel-btn-posture');
    expect(html).toContain('funnel-btn-mounting');
    expect(html).toContain('funnel-btn-recovery');
    expect(html).toContain('funnel-btn-centers');
    expect(html).toContain('funnel-btn-patents');
    expect(html).toContain('funnel-btn-studies');
    expect(html).toContain('href="#comparison"');
    expect(html).toContain('href="#calculator"');
    expect(html).toContain('href="#pediatric-family"');
    expect(html).toContain('href="#videos"');
    expect(html).toContain('href="#athletes"');
    expect(html).toContain('href="#gallery"');
    expect(html).toContain('href="#mounting"');
    expect(html).toContain('href="#onboarding"');
    expect(html).toContain('href="#centers"');
    expect(html).toContain('href="#patents"');
    expect(html).toContain('href="#blog"');
  });

  it('should be safe to call initFunnelsNav in SSR / Node environments without throwing', () => {
    expect(() => initFunnelsNav()).not.toThrow();
  });

  it('should define responsive grid and hover/active states in main.css', () => {
    const cssPath = path.resolve(process.cwd(), 'src/styles/main.css');
    const css = fs.readFileSync(cssPath, 'utf8');

    // Desktop 3-column layout
    expect(css).toContain('grid-template-columns: repeat(3, 1fr)');

    // Responsive 2-column layout on tablets and mobile
    expect(css).toContain('grid-template-columns: repeat(2, 1fr)');

    // Hover, active and focus-visible states
    expect(css).toContain('.funnel-pathway-card:hover');
    expect(css).toContain('.funnel-pathway-card.active');
    expect(css).toContain('.funnel-pathway-card:focus-visible');
  });
});
