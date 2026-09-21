import { describe, it, expect } from 'vitest';
import { renderHeader } from '../../src/components/Header.js';
import fs from 'fs';
import path from 'path';

describe('Header UX & Smart Headroom Architecture', () => {
  it('renders the interactive reading progress indicator in the header', () => {
    const html = renderHeader();
    expect(html).toContain('class="header-scroll-progress-track"');
    expect(html).toContain('id="header-progress-bar"');
  });

  it('includes scroll-padding-top and scroll-margin-top in reset.css to prevent content clipping', () => {
    const resetCssPath = path.resolve(process.cwd(), 'src/styles/reset.css');
    const resetCss = fs.readFileSync(resetCssPath, 'utf8');

    expect(resetCss).toContain('scroll-padding-top');
    expect(resetCss).toContain('scroll-margin-top');
  });

  it('includes smart headroom, auto-hide, glass elevation, and progress bar styles in main.css', () => {
    const mainCssPath = path.resolve(process.cwd(), 'src/styles/main.css');
    const mainCss = fs.readFileSync(mainCssPath, 'utf8');

    expect(mainCss).toContain('.site-header.header-scrolled');
    expect(mainCss).toContain('.site-header.header-hidden');
    expect(mainCss).toContain('.header-scroll-progress-bar');
    expect(mainCss).toContain('transform: translateY(-100%)');
  });

  it('renders scalable navigation bar with left and right chevron scroll buttons and scroller', () => {
    const html = renderHeader();
    expect(html).toContain('class="header-nav-container"');
    expect(html).toContain('id="header-nav-prev"');
    expect(html).toContain('id="header-nav-next"');
    expect(html).toContain('id="site-nav-scroller"');

    const mainCssPath = path.resolve(process.cwd(), 'src/styles/main.css');
    const mainCss = fs.readFileSync(mainCssPath, 'utf8');
    expect(mainCss).toContain('.header-nav-container');
    expect(mainCss).toContain('.header-nav-scroll-btn');
    expect(mainCss).toContain('.header-nav-scroll-btn.is-visible');
  });

  it('renders Patient Portal pill button with user icon and label across all viewports', () => {
    const html = renderHeader();
    expect(html).toContain('class="portal-trigger-btn"');
    expect(html).toContain('id="portal-trigger-btn"');
    expect(html).toContain('id="header-user-status"');
    expect(html).toContain('Patient Portal');

    const mainCssPath = path.resolve(process.cwd(), 'src/styles/main.css');
    const mainCss = fs.readFileSync(mainCssPath, 'utf8');
    expect(mainCss).toContain('.portal-trigger-btn');
    expect(mainCss).toContain('.portal-btn-label');
    // Ensure portal-trigger-btn is not reduced to a circular icon button hiding text
    expect(mainCss).not.toContain('.portal-trigger-btn #header-user-status {\n    display: none;');
  });

  it('keeps navigation and announcement paragraphs visible on tablet and mobile viewports', () => {
    const html = renderHeader();
    expect(html).toContain('announcement-bar');
    expect(html).toContain('30 Years of Clinical Vertebrology');
    expect(html).toContain('Continuous Clinical Practice Since 1996');

    const mainCssPath = path.resolve(process.cwd(), 'src/styles/main.css');
    const mainCss = fs.readFileSync(mainCssPath, 'utf8');
    // Ensure header-nav-container is visible on max-width 1060px
    expect(mainCss).toContain('.header-nav-container {\n    order: 3;\n    width: 100%;\n    flex: 1 1 100%;\n    display: flex !important;');
    // Ensure desktop-only announcement item is displayed on mobile
    expect(mainCss).toContain('.announcement-bar .desktop-only {\n    display: flex;');
  });
});
