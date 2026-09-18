import { describe, it, expect } from 'vitest';
import { blogPosts } from '../../src/data/blogPosts.js';

describe('Pillar SEO Articles & Clinical Guides Data Integrity', () => {
  it('should contain exactly 5 pillar clinical articles', () => {
    expect(blogPosts).toHaveLength(5);
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
});
