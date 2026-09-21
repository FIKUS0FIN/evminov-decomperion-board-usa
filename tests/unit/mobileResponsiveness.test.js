import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

import { renderHeader } from '../../src/components/Header.js';
import { renderHero } from '../../src/components/Hero.js';
import { renderVideoProtocols } from '../../src/components/VideoProtocols.js';
import { renderComparisonTable } from '../../src/components/ComparisonTable.js';
import { renderGlobalBrandTrust } from '../../src/components/GlobalBrandTrust.js';
import { renderProductCatalog } from '../../src/components/ProductCatalog.js';
import { renderCalculator } from '../../src/components/Calculator.js';
import { renderMobileStickyBar } from '../../src/components/MobileStickyBar.js';

describe('Mobile Portrait & Landscape Responsive Scaling & Anti-Collision Suite', () => {
  const mainCss = fs.readFileSync(path.resolve(process.cwd(), 'src/styles/main.css'), 'utf8');
  const componentsCss = fs.readFileSync(path.resolve(process.cwd(), 'src/styles/components.css'), 'utf8');
  const centersCss = fs.readFileSync(path.resolve(process.cwd(), 'src/styles/centers.css'), 'utf8');
  const globalTrustCss = fs.readFileSync(path.resolve(process.cwd(), 'src/styles/globalTrust.css'), 'utf8');
  const calcCss = fs.readFileSync(path.resolve(process.cwd(), 'src/styles/calculator.css'), 'utf8');

  describe('1. Mobile Portrait Orientation Hardening', () => {
    it('sets safe-area bottom padding and body offset when sticky buy bar is active', () => {
      expect(mainCss).toContain('.mobile-sticky-bar {\n    display: flex;');
      expect(mainCss).toContain('padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px));');
      expect(mainCss).toContain('body {\n    padding-bottom: calc(68px + env(safe-area-inset-bottom, 0px));');
    });

    it('stacks hero CTA buttons to 100% full-width on mobile phones (< 640px)', () => {
      expect(mainCss).toContain('.hero-cta-group {\n    flex-direction: column;\n    width: 100%;');
      expect(mainCss).toContain('.hero-cta-group .btn {\n    width: 100%;\n    justify-content: center;');
    });

    it('stacks hero trust bullets into a single column on narrow mobile screens (<= 540px)', () => {
      expect(mainCss).toContain('@media (max-width: 540px) {\n  .hero-trust-bullets {\n    grid-template-columns: 1fr;');
    });

    it('scales buttons and cards responsively in components.css on mobile portrait', () => {
      expect(componentsCss).toContain('@media (max-width: 640px)');
      expect(componentsCss).toContain('.btn-lg {\n    padding: 14px 22px;');
      expect(componentsCss).toContain('.card {\n    padding: 18px 16px;');
      expect(componentsCss).toContain('@media (max-width: 380px)');
    });

    it('ensures cinematic video showcase has responsive mobile padding in centers.css', () => {
      expect(centersCss).toContain('.cinematic-video-section');
      expect(centersCss).toContain('@media (max-width: 768px) {\n  .cinematic-video-section {\n    padding: 18px 14px;');
      expect(centersCss).toContain('@media (max-width: 480px) {\n  .cinematic-video-section {\n    padding: 12px 10px;');
    });

    it('stacks worldwide destination cards to 1 column in mobile portrait', () => {
      expect(globalTrustCss).toContain('@media (max-width: 768px), (max-width: 900px) and (orientation: portrait)');
      expect(globalTrustCss).toContain('grid-template-columns: 1fr;');
    });

    it('stacks condition pills to 1 column in mobile portrait for full legibility', () => {
      expect(calcCss).toContain('@media (max-width: 640px), (max-width: 768px) and (orientation: portrait)');
      expect(calcCss).toContain('grid-template-columns: 1fr;');
    });
  });

  describe('2. Mobile Landscape & Short Viewport Height Optimization', () => {
    it('defines a dedicated landscape & short viewport media query in main.css', () => {
      expect(mainCss).toContain('@media (orientation: landscape) and (max-height: 520px)');
    });

    it('hides mobile sticky buy bar and resets body padding in landscape to prevent screen blockage', () => {
      expect(mainCss).toMatch(
        /@media \(orientation: landscape\) and \(max-height: 520px\)[\s\S]*?\.mobile-sticky-bar\s*\{\s*display: none !important;/
      );
      expect(mainCss).toMatch(
        /@media \(orientation: landscape\) and \(max-height: 520px\)[\s\S]*?body\s*\{\s*padding-bottom: 0 !important;/
      );
    });

    it('provides compact header, logo, and announcement bar in landscape', () => {
      expect(mainCss).toMatch(
        /@media \(orientation: landscape\) and \(max-height: 520px\)[\s\S]*?\.header-inner\s*\{\s*padding: 4px 12px;/
      );
      expect(mainCss).toMatch(
        /@media \(orientation: landscape\) and \(max-height: 520px\)[\s\S]*?\.site-logo svg\s*\{\s*width: 24px;/
      );
      expect(mainCss).toMatch(
        /@media \(orientation: landscape\) and \(max-height: 520px\)[\s\S]*?\.portal-trigger-btn\s*\{\s*height: 28px;/
      );
    });

    it('constrains hero carousel height and enables side-by-side grid in landscape', () => {
      expect(mainCss).toMatch(
        /@media \(orientation: landscape\) and \(max-height: 520px\)[\s\S]*?\.hero-carousel-viewport\s*\{\s*height: 220px;/
      );
      expect(mainCss).toMatch(
        /@media \(orientation: landscape\) and \(max-height: 520px\)[\s\S]*?\.hero-grid\s*\{\s*grid-template-columns: 1\.05fr 0\.95fr;/
      );
    });

    it('scales section padding down to 32px in landscape to reduce empty vertical space', () => {
      expect(mainCss).toMatch(
        /@media \(orientation: landscape\) and \(max-height: 520px\)[\s\S]*?\.catalog-section,\s*\.patents-section,\s*\.pediatric-section\s*\{\s*padding: 32px 0;/
      );
    });

    it('enables modal scrollability and max-height in landscape mode in components.css', () => {
      expect(componentsCss).toContain('@media (max-height: 520px)');
      expect(componentsCss).toContain('.modal-content {\n    max-height: 92vh;\n    overflow-y: auto;');
    });
  });

  describe('3. Component DOM Rendering Safety', () => {
    it('renders Header with responsive structure and scroller chevrons', () => {
      const html = renderHeader();
      expect(html).toContain('class="header-nav-container"');
      expect(html).toContain('class="portal-trigger-btn"');
      expect(html).toContain('Patient Portal');
    });

    it('renders Hero with interactive carousel and trust card', () => {
      const html = renderHero();
      expect(html).toContain('class="hero-carousel-viewport"');
      expect(html).toContain('class="hero-cta-group"');
      expect(html).toContain('class="hero-trust-bullets"');
    });

    it('renders Video Protocols with clean cinematic showcase and no hardcoded 40px inline padding', () => {
      const html = renderVideoProtocols();
      expect(html).toContain('class="cinematic-video-section"');
      expect(html).not.toContain('class="cinematic-video-section" style="margin-bottom: 48px; padding: 40px;');
    });

    it('renders Comparison Table with mobile card stack', () => {
      const html = renderComparisonTable();
      expect(html).toContain('class="comp-mobile-card"');
      expect(html).toContain('class="comp-card-stack"');
    });

    it('renders Worldwide Trust with destination grid and payment column', () => {
      const html = renderGlobalBrandTrust();
      expect(html).toContain('class="global-destinations-grid"');
      expect(html).toContain('class="logistics-grid"');
    });

    it('renders Product Catalog with product cards', () => {
      const html = renderProductCatalog();
      expect(html).toContain('class="products-grid"');
      expect(html).toContain('class="product-card ');
    });

    it('renders Traction Calibrator with radiogroup accessibility and diagnostic suite', () => {
      const html = renderCalculator();
      expect(html).toContain('class="calc-grid"');
      expect(html).toContain('class="condition-pills"');
      expect(html).toContain('role="radiogroup"');
    });

    it('renders Mobile Sticky Bar with quick purchase triggers', () => {
      const html = renderMobileStickyBar();
      expect(html).toContain('class="mobile-sticky-bar"');
      expect(html).toContain('From $450');
      expect(html).toContain('Select Board →');
    });
  });
});
