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
    expect(pediatricPost.content).toContain('5 to 7 cm');
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
    expect(toothbrushPost.content).toContain('1.25 m²');
  });
});
