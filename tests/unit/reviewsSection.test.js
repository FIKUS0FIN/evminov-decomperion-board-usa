import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { renderReviewsSection, initReviewsSection } from '../../src/components/ReviewsSection.js';
import { reviews } from '../../src/data/reviews.js';

describe('Reviews 2-Row Carousel & Controls Verification', () => {
  it('should render all 18 reviews inside the 2-row carousel track', () => {
    const html = renderReviewsSection();

    expect(html).toContain('id="reviews-carousel-section"');
    expect(html).toContain('id="reviews-carousel-viewport"');
    expect(html).toContain('id="reviews-carousel-track"');

    // Verify all 18 reviews are rendered
    expect(reviews.length).toBe(18);
    reviews.forEach((rev) => {
      expect(html).toContain(rev.author);
      expect(html).toContain(rev.title);
    });
  });

  it('should render interactive navigation controls: counter, dropdown filter, prev/next arrows, and dots container', () => {
    const html = renderReviewsSection();

    // Dropdown filter
    expect(html).toContain('id="reviews-category-dropdown"');
    expect(html).toContain('Filter Category (All 18)');
    expect(html).toContain('Herniated Discs (L4-S1)');
    expect(html).toContain('Athletes &amp; Lifters');

    // Navigation buttons and counter
    expect(html).toContain('id="reviews-carousel-counter"');
    expect(html).toContain('id="reviews-counter-curr"');
    expect(html).toContain('id="reviews-counter-total"');
    expect(html).toContain('id="reviews-prev-btn"');
    expect(html).toContain('id="reviews-next-btn"');
    expect(html).toContain('id="reviews-float-prev"');
    expect(html).toContain('id="reviews-float-next"');

    // Dots indicator
    expect(html).toContain('id="reviews-carousel-dots"');
  });

  it('should include 2-row grid styles and horizontal scroll-snap in main.css', () => {
    const mainCssPath = path.resolve(process.cwd(), 'src/styles/main.css');
    const mainCss = fs.readFileSync(mainCssPath, 'utf8');

    expect(mainCss).toContain('.reviews-carousel-track');
    expect(mainCss).toContain('grid-template-rows: repeat(2, minmax(280px, 1fr))');
    expect(mainCss).toContain('grid-auto-flow: column');
    expect(mainCss).toContain('.reviews-carousel-viewport');
    expect(mainCss).toContain('scroll-snap-type: x mandatory');
    expect(mainCss).toContain('.reviews-float-arrow');
    expect(mainCss).toContain('.reviews-carousel-dots');
  });

  it('should gracefully handle initReviewsSection when DOM elements are absent in non-browser env', () => {
    expect(() => {
      initReviewsSection();
    }).not.toThrow();
  });
});
