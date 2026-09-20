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
});
