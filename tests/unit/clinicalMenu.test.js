import { describe, it, expect } from 'vitest';
import { renderHeader } from '../../src/components/Header.js';

describe('Clinical Navigation Drawer (Zero Consumer Emojis & Hospital-Grade Architecture)', () => {
  it('should render the clinical directory drawer without consumer emojis', () => {
    const html = renderHeader();

    // Emoji regex matching consumer emojis
    const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

    // Isolate mobile drawer markup
    const drawerStart = html.indexOf('<aside class="mobile-nav-drawer"');
    const drawerEnd = html.indexOf('</aside>', drawerStart);
    expect(drawerStart).toBeGreaterThan(-1);
    expect(drawerEnd).toBeGreaterThan(drawerStart);

    const drawerHtml = html.substring(drawerStart, drawerEnd + 8);

    // Verify zero consumer emojis in the mobile navigation drawer
    expect(emojiRegex.test(drawerHtml)).toBe(false);
    expect(drawerHtml).not.toContain('🧭');
    expect(drawerHtml).not.toContain('📐');
    expect(drawerHtml).not.toContain('🛒');
    expect(drawerHtml).not.toContain('🪵');
    expect(drawerHtml).not.toContain('⚖️');
    expect(drawerHtml).not.toContain('🎥');
    expect(drawerHtml).not.toContain('📋');
    expect(drawerHtml).not.toContain('🏛️');
    expect(drawerHtml).not.toContain('📜');
    expect(drawerHtml).not.toContain('🔨');
    expect(drawerHtml).not.toContain('🏋️');
    expect(drawerHtml).not.toContain('📅');
    expect(drawerHtml).not.toContain('🩺');
    expect(drawerHtml).not.toContain('⭐');
    expect(drawerHtml).not.toContain('📰');
    expect(drawerHtml).not.toContain('❓');
    expect(drawerHtml).not.toContain('🇺🇸');
  });

  it('should highlight Clinical Heritage & Systems rather than a dominant Find My Angle box', () => {
    const html = renderHeader();
    const drawerStart = html.indexOf('<aside class="mobile-nav-drawer"');
    const drawerEnd = html.indexOf('</aside>', drawerStart);
    const drawerHtml = html.substring(drawerStart, drawerEnd + 8);

    // Header title
    expect(drawerHtml).toContain('Clinical Directory');
    expect(drawerHtml).toContain('Evminov Spine Systems™');

    // Quick Action cards spotlight Kyiv Clinic & Heritage and Decompression Systems
    expect(drawerHtml).toContain('quick-heritage');
    expect(drawerHtml).toContain('Kyiv Clinic &amp; Heritage');
    expect(drawerHtml).toContain('Since 1996 • Founder History');
    expect(drawerHtml).toContain('quick-catalog');
    expect(drawerHtml).toContain('Decompression Systems');
    expect(drawerHtml).toContain('From $450 • Hospital-Grade');
  });

  it('should have clearly categorized clinical groups and key medical navigation paths', () => {
    const html = renderHeader();
    const drawerStart = html.indexOf('<aside class="mobile-nav-drawer"');
    const drawerEnd = html.indexOf('</aside>', drawerStart);
    const drawerHtml = html.substring(drawerStart, drawerEnd + 8);

    // 4 Professional Categories
    expect(drawerHtml).toContain('Clinical Foundations &amp; Research');
    expect(drawerHtml).toContain('Treatment Protocols &amp; Kinesiotherapy');
    expect(drawerHtml).toContain('Hardware, Logistics &amp; Work Ergonomics');
    expect(drawerHtml).toContain('Evidence, Reviews &amp; Medical Billing');

    // Key routes
    expect(drawerHtml).toContain('href="#centers"');
    expect(drawerHtml).toContain('href="#patents"');
    expect(drawerHtml).toContain('href="#comparison"');
    expect(drawerHtml).toContain('href="#exercise-gallery"');
    expect(drawerHtml).toContain('href="#videos"');
    expect(drawerHtml).toContain('href="#onboarding"');
    expect(drawerHtml).toContain('href="#calculator"');
    expect(drawerHtml).toContain('href="#catalog"');
    expect(drawerHtml).toContain('href="#us-shipping"');
    expect(drawerHtml).toContain('href="#global-trust"');
    expect(drawerHtml).toContain('href="#mounting"');
    expect(drawerHtml).toContain('href="#athletes"');
    expect(drawerHtml).toContain('href="#blog"');
    expect(drawerHtml).toContain('href="#reviews"');
    expect(drawerHtml).toContain('4.9 / 5.0');
    expect(drawerHtml).toContain('href="#faq"');
    expect(drawerHtml).toContain('href="#portal"');
  });
});
