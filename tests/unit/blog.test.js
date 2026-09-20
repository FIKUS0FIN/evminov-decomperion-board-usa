import { describe, it, expect } from 'vitest';
import { blogPosts } from '../../src/data/blogPosts.js';

describe('Pillar SEO Articles & Clinical Guides Data Integrity', () => {
  it('should contain comprehensive pillar clinical articles', () => {
    expect(blogPosts.length).toBeGreaterThanOrEqual(7);
  });

  it('each article should have valid metadata, slugs, and SEO fields', () => {
    blogPosts.forEach((post) => {
      expect(post.id).toBeTruthy();
      expect(post.slug).toMatch(/^[a-z0-9-]+$/);
      expect(post.title).toBeTruthy();
      expect(post.metaTitle.length).toBeGreaterThan(20);
      expect(post.metaDesc.length).toBeGreaterThan(50);
      expect(post.readTime).toMatch(/min read/);
      expect(post.category).toBeTruthy();
    });
  });

  it('each article should contain long-form hospital-grade clinical content', () => {
    blogPosts.forEach((post) => {
      expect(post.content.length).toBeGreaterThan(1000);
      expect(post.wordCount).toBeGreaterThan(1200);
      expect(post.content).toContain('<h2>');
      expect(post.content).toContain('<h3>');
      expect(post.author.name).toBeTruthy();
      expect(post.author.credentials).toBeTruthy();
    });
  });

  it('each article should have at least one People Also Ask (PAA) query', () => {
    blogPosts.forEach((post) => {
      expect(post.paa).toBeInstanceOf(Array);
      expect(post.paa.length).toBeGreaterThanOrEqual(1);
      post.paa.forEach((item) => {
        expect(item.q).toMatch(/\?/);
        expect(item.a.length).toBeGreaterThan(30);
      });
    });
  });

  it('should include pediatric scoliosis article with growth potential and Hueter-Volkmann law', () => {
    const pediatricPost = blogPosts.find((p) => p.id === 'pediatric-scoliosis-prevention-youth-posture');
    expect(pediatricPost).toBeDefined();
    expect(pediatricPost.category).toBe('Pediatric Spine Health');
    expect(pediatricPost.content).toContain('Hueter-Volkmann Law');
    expect(pediatricPost.content).toContain('2 to 2.8 inches');
    expect(pediatricPost.content).toContain('Hippocrates');
    expect(pediatricPost.content).toContain('Angelo Mosso');
    expect(pediatricPost.content).toContain('32 Teeth vs. 32 Vertebrae');
    expect(pediatricPost.paa.length).toBe(4);
  });

  it('should include Hippocrates and Angelo Mosso quotes in toothbrush article', () => {
    const toothbrushPost = blogPosts.find((p) => p.id === 'toothbrush-for-the-spine-jama-meta-analysis');
    expect(toothbrushPost).toBeDefined();
    expect(toothbrushPost.content).toContain('Hippocrates');
    expect(toothbrushPost.content).toContain('Angelo Mosso');
    expect(toothbrushPost.content).toContain('32 Teeth vs. 32 Vertebrae');
    expect(toothbrushPost.content).toContain('13.5 sq ft');
  });
});

describe('Clinical Guides & Research Articles 2-Row Carousel Gallery & Controls', () => {
  it('should render all articles inside the 2-row carousel track with controls and floating side arrows', async () => {
    const { renderBlogSection } = await import('../../src/components/BlogSection.js');
    const html = renderBlogSection();

    expect(html).toContain('id="blog-carousel-section"');
    expect(html).toContain('id="blog-carousel-viewport"');
    expect(html).toContain('id="blog-carousel-track"');

    // Verify all articles are rendered in carousel track
    blogPosts.forEach((post) => {
      expect(html).toContain(post.title);
      expect(html).toContain(`data-article-id="${post.id}"`);
    });

    // Verify controls bar elements
    expect(html).toContain('id="blog-filter-bar"');
    expect(html).toContain('id="blog-category-dropdown"');
    expect(html).toContain('id="blog-carousel-counter"');
    expect(html).toContain('id="blog-counter-curr"');
    expect(html).toContain('id="blog-counter-total"');
    expect(html).toContain('id="blog-prev-btn"');
    expect(html).toContain('id="blog-next-btn"');
    expect(html).toContain('id="blog-float-prev"');
    expect(html).toContain('id="blog-float-next"');
    expect(html).toContain('id="blog-carousel-dots"');
  });

  it('should include 2-row grid styles and horizontal scroll-snap in main.css', async () => {
    const fs = await import('fs');
    const path = await import('path');
    const mainCssPath = path.resolve(process.cwd(), 'src/styles/main.css');
    const mainCss = fs.readFileSync(mainCssPath, 'utf8');

    expect(mainCss).toContain('.blog-carousel-track');
    expect(mainCss).toContain('.blog-carousel-page');
    expect(mainCss).toContain('grid-template-columns: repeat(3, minmax(0, 1fr))');
    expect(mainCss).toContain('grid-template-rows: repeat(2, minmax(340px, 1fr))');
    expect(mainCss).toContain('.blog-carousel-viewport');
    expect(mainCss).toContain('scroll-snap-type: x mandatory');
    expect(mainCss).toContain('.blog-float-arrow');
    expect(mainCss).toContain('.blog-carousel-dots');
  });

  it('should gracefully handle initBlogSection when DOM elements are absent in non-browser env', async () => {
    const { initBlogSection } = await import('../../src/components/BlogSection.js');
    expect(() => {
      initBlogSection();
    }).not.toThrow();
  });
});

