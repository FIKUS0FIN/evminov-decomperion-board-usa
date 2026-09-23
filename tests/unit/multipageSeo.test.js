import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { blogPosts } from '../../src/data/blogPosts.js';
import { renderBlogArticlePage } from '../../src/components/BlogArticlePage.js';

describe('Multipage Hub & Spoke SEO Architecture & SSG Suite', () => {
  const rootDir = path.resolve(__dirname, '../../');
  const distDir = path.join(rootDir, 'dist');

  beforeAll(() => {
    const centersFile = path.join(distDir, 'centers/index.html');
    if (!fs.existsSync(centersFile)) {
      execSync('npm run build', { cwd: rootDir, stdio: 'pipe' });
    }
  });

  describe('1. Data Integrity & SEO Content Specifications', () => {
    it('should have exactly 8 evidence-based clinical articles with complete metadata', () => {
      expect(blogPosts.length).toBe(8);

      blogPosts.forEach((post) => {
        expect(post.id).toBeDefined();
        expect(post.slug).toBeDefined();
        expect(post.slug.length).toBeGreaterThan(5);
        expect(post.title).toBeDefined();
        expect(post.title.length).toBeGreaterThan(15);
        expect(post.metaTitle).toBeDefined();
        expect(post.metaDesc).toBeDefined();
        expect(post.metaDesc.length).toBeGreaterThan(30);
        expect(post.excerpt).toBeDefined();
        expect(post.content).toBeDefined();
        expect(post.content.length).toBeGreaterThan(500);
        expect(post.author).toBeDefined();
        expect(post.author.name).toBeDefined();
        expect(post.paa).toBeDefined();
        expect(Array.isArray(post.paa)).toBe(true);
        expect(post.paa.length).toBeGreaterThanOrEqual(2);
        expect(post.keywords).toBeDefined();
        expect(post.keywords.length).toBeGreaterThanOrEqual(14);
      });
    });

    it('should ensure each article covers high-intent US search keywords', () => {
      const allSlugs = blogPosts.map((p) => p.slug);
      expect(allSlugs).toContain('inversion-table-dangers-and-safe-alternatives');
      expect(allSlugs).toContain('how-to-decompress-herniated-disc-l4-l5-at-home');
      expect(allSlugs).toContain('sciatica-relief-exercises-home-equipment');
      expect(allSlugs).toContain('the-lifters-guide-to-spinal-decompression');
      expect(allSlugs).toContain('remote-worker-spine-hygiene-posture-stick');
      expect(allSlugs).toContain('toothbrush-for-the-spine-daily-disc-hygiene');
      expect(allSlugs).toContain('spine-decompression-at-home-complete-clinical-guide');
      expect(allSlugs).toContain('pediatric-scoliosis-prevention-kids-posture-spine');
    });
  });

  describe('2. Component Rendering & Semantic HTML Validation', () => {
    it('should render rich semantic HTML with breadcrumbs and product CTA', () => {
      const samplePost = blogPosts[0];
      const html = renderBlogArticlePage(samplePost);

      // Breadcrumb elements
      expect(html).toContain('itemtype="https://schema.org/BreadcrumbList"');
      expect(html).toContain('Clinical Guides');
      expect(html).toContain(samplePost.category);

      // MedicalWebPage schema & Article Headings
      expect(html).toContain('itemtype="https://schema.org/MedicalWebPage"');
      expect(html).toContain(samplePost.title);
      expect(html).toContain('itemprop="headline"');

      // Author credentials
      expect(html).toContain('itemprop="author"');
      expect(html).toContain(samplePost.author.name);

      // E-E-A-T Medical Disclaimer & Scientific References
      expect(html).toContain('Clinical &amp; Medical Disclaimer');
      expect(html).toContain('Scientific Literature &amp; Peer-Reviewed References');
      expect(html).toContain('Nachemson');
      expect(html).toContain('JAMA Internal Medicine');

      // High-converting Product CTA
      expect(html).toContain('article-product-cta');
      expect(html).toContain('article-order-cta-btn');
      expect(html).toContain('$450 USD');
      expect(html).toContain('Klarna / Affirm');

      // PAA FAQs
      expect(html).toContain('itemtype="https://schema.org/FAQPage"');
      expect(html).toContain(samplePost.paa[0].q);

      // Spoke-to-spoke related guides
      expect(html).toContain('related-guides-section');
      expect(html).toContain('related-guide-card');
    });

    it('should safely handle missing post', () => {
      const html = renderBlogArticlePage(null);
      expect(html).toContain('Article Not Found');
      expect(html).toContain('Return to Storefront');
    });
  });

  describe('3. SSG Pre-rendered Static Pages Verification (dist/)', () => {
    it('should confirm dist/contains pre-rendered HTML for /centers and /portal', () => {
      const centersFile = path.join(distDir, 'centers/index.html');
      expect(fs.existsSync(centersFile)).toBe(true);

      const centersHtml = fs.readFileSync(centersFile, 'utf-8');
      expect(centersHtml).toContain('<title>Evminov Clinical Centers &amp; Heritage');
      expect(centersHtml).toContain('https://evminov-decompression-board-usa.apex-root.com/centers');
      expect(centersHtml).toContain('"@type": "MedicalOrganization"');

      const portalFile = path.join(distDir, 'portal/index.html');
      expect(fs.existsSync(portalFile)).toBe(true);

      const portalHtml = fs.readFileSync(portalFile, 'utf-8');
      expect(portalHtml).toContain('<title>Patient Rehabilitation Portal');
      expect(portalHtml).toContain('https://evminov-decompression-board-usa.apex-root.com/portal');
    });

    it('should confirm all 8 blog article static pages exist with complete tags & schema', () => {
      blogPosts.forEach((post) => {
        const postFile = path.join(distDir, 'blog', post.slug, 'index.html');
        expect(fs.existsSync(postFile)).toBe(true);

        const html = fs.readFileSync(postFile, 'utf-8');

        // Title and Canonical URL
        expect(html).toContain(post.title);
        expect(html).toContain(`https://evminov-decompression-board-usa.apex-root.com/blog/${post.slug}`);
        expect(html).toContain('rel="canonical"');

        // OpenGraph & Article Tags
        expect(html).toContain('property="og:type" content="article"');
        expect(html).toContain(`property="og:url" content="https://evminov-decompression-board-usa.apex-root.com/blog/${post.slug}"`);
        expect(html).toContain('property="article:tag"');

        // JSON-LD Schema
        expect(html).toContain('"@type": [\n        "MedicalWebPage",\n        "BlogPosting"\n      ]');
        expect(html).toContain('"@type": "BreadcrumbList"');
        if (post.paa && post.paa.length > 0) {
          expect(html).toContain('"@type": "FAQPage"');
        }

        // Server-rendered content inside #app
        expect(html).toContain('class="article-page-wrap"');
        expect(html).toContain('class="article-product-cta"');
        expect(html).toContain('Clinical &amp; Medical Disclaimer');
      });
    });
  });

  describe('4. Canonical XML Sitemap & LLMs Discovery Verification', () => {
    it('should verify sitemap.xml contains all 10 canonical Hub & Spoke routes', () => {
      const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
      const content = fs.readFileSync(sitemapPath, 'utf-8');

      expect(content).toContain('https://evminov-decompression-board-usa.apex-root.com/centers');
      expect(content).toContain('https://evminov-decompression-board-usa.apex-root.com/portal');

      blogPosts.forEach((post) => {
        expect(content).toContain(`https://evminov-decompression-board-usa.apex-root.com/blog/${post.slug}`);
      });
    });

    it('should verify public/robots.txt allows all modern search engines and AI bots', () => {
      const robotsPath = path.join(rootDir, 'public/robots.txt');
      const content = fs.readFileSync(robotsPath, 'utf-8');

      expect(content).toContain('User-agent: Googlebot');
      expect(content).toContain('User-agent: Bingbot');
      expect(content).toContain('User-agent: GPTBot');
      expect(content).toContain('User-agent: OAI-SearchBot');
      expect(content).toContain('User-agent: PerplexityBot');
      expect(content).toContain('User-agent: ClaudeBot');
      expect(content).toContain('User-agent: Applebot');
      expect(content).toContain('User-agent: meta-externalagent');
    });

    it('should verify public/llms.txt declares the Hub & Spoke architecture', () => {
      const llmsPath = path.join(rootDir, 'public/llms.txt');
      const content = fs.readFileSync(llmsPath, 'utf-8');

      expect(content).toContain('## Evidence-Based Clinical Guides (Hub & Spoke Architecture)');
      blogPosts.forEach((post) => {
        expect(content).toContain(post.slug);
      });
    });
  });
});
