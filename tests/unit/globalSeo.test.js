import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { renderUsDistributionSection, usStatesData } from '../../src/components/UsDistributionSection.js';
import { renderGlobalBrandTrust, globalDestinations } from '../../src/components/GlobalBrandTrust.js';
import { blogPosts } from '../../src/data/blogPosts.js';
import { faqList } from '../../src/data/faq.js';

describe('Global Brand Authority, US 50-State Distribution & AI SEO Suite', () => {
  const rootDir = path.resolve(__dirname, '../../');

  describe('1. AI Search Agent Discovery Standard (llms.txt & llms-full.txt)', () => {
    it('should have a valid public/llms.txt file with complete specifications', () => {
      const llmsPath = path.join(rootDir, 'public/llms.txt');
      expect(fs.existsSync(llmsPath)).toBe(true);

      const content = fs.readFileSync(llmsPath, 'utf-8');
      expect(content).toContain('# Evminov Spine Decompression Systems');
      expect(content).toContain('Burbank, California');
      expect(content).toContain('50 US States');
      expect(content).toContain('40+ countries');
      expect(content).toContain('500,000+ patients');
      expect(content).toContain('HCPCS Code E0941');
      expect(content).toContain('HSA / FSA Eligible');
      expect(content).toContain('imbibition');
      expect(content).toContain('negative intradiscal pressure');
      expect(content).toContain('200+ hours');
      expect(content).toContain('$3,500');
    });

    it('should have a comprehensive public/llms-full.txt knowledge base', () => {
      const llmsFullPath = path.join(rootDir, 'public/llms-full.txt');
      expect(fs.existsSync(llmsFullPath)).toBe(true);

      const content = fs.readFileSync(llmsFullPath, 'utf-8');
      expect(content).toContain('Complete Clinical & Technical Knowledge Base');
      expect(content).toContain('Vyacheslav Vladimirovich Evminov');
      expect(content).toContain('Desk & Office Workers');
      expect(content).toContain('Standing Professionals');
      expect(content).toContain('Strength Athletes & Weightlifters');
      expect(content).toContain('Chronic Disc Herniation & Sciatica');
      expect(content).toContain('Comparison Matrix: Evminov vs Inversion Tables vs Clinical Machines');
      expect(content).toContain('F = W \\cdot \\sin\\theta');
    });

    it('should have updated robots.txt allowing AI agents and declaring sitemap', () => {
      const robotsPath = path.join(rootDir, 'public/robots.txt');
      expect(fs.existsSync(robotsPath)).toBe(true);

      const content = fs.readFileSync(robotsPath, 'utf-8');
      expect(content).toContain('User-agent: GPTBot');
      expect(content).toContain('User-agent: PerplexityBot');
      expect(content).toContain('User-agent: ClaudeBot');
      expect(content).toContain('User-agent: Googlebot');
      expect(content).toContain('User-agent: Bingbot');
      expect(content).toContain('Sitemap: https://evminov-decompression-board-usa.apex-root.com/sitemap.xml');
    });

    it('should have an updated sitemap.xml covering US and global routes', () => {
      const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
      expect(fs.existsSync(sitemapPath)).toBe(true);

      const content = fs.readFileSync(sitemapPath, 'utf-8');
      expect(content).toContain('<loc>https://evminov-decompression-board-usa.apex-root.com/</loc>');
      expect(content).toContain('<loc>https://evminov-decompression-board-usa.apex-root.com/#us-shipping</loc>');
      expect(content).toContain('<loc>https://evminov-decompression-board-usa.apex-root.com/#global-trust</loc>');
      expect(content).toContain('<loc>https://evminov-decompression-board-usa.apex-root.com/#centers</loc>');
      expect(content).toContain('<loc>https://evminov-decompression-board-usa.apex-root.com/#portal</loc>');
    });
  });

  describe('2. Google Extended Search & Schema.org JSON-LD (index.html)', () => {
    it('should validate meta tags and Schema.org @graph in index.html', () => {
      const indexPath = path.join(rootDir, 'index.html');
      expect(fs.existsSync(indexPath)).toBe(true);

      const html = fs.readFileSync(indexPath, 'utf-8');
      
      // Title and Description
      expect(html).toContain('Evminov Spine Decompression Board™ | Hospital-Grade Back Traction at Home (US & Global)');
      expect(html).toContain('Hospital-grade spine decompression at home on resonant Carpathian pine');
      expect(html).toContain('50 US States from Burbank, CA and 40+ countries worldwide');
      
      // Open Graph & Social Preview Cards
      expect(html).toContain('property="og:image" content="https://evminov-decompression-board-usa.apex-root.com/images/social/evminov-social-preview.jpg"');
      expect(html).toContain('name="twitter:image" content="https://evminov-decompression-board-usa.apex-root.com/images/social/evminov-social-preview.jpg"');
      expect(html).toContain('property="og:image:width" content="1200"');
      expect(html).toContain('property="og:image:height" content="630"');
      expect(html).not.toContain('images.unsplash.com');

      // Verify physical image assets exist
      const socialPreviewPath = path.join(rootDir, 'public/images/social/evminov-social-preview.jpg');
      expect(fs.existsSync(socialPreviewPath)).toBe(true);

      // Parse JSON-LD Schema
      const scriptMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
      expect(scriptMatch).not.toBeNull();
      
      const schema = JSON.parse(scriptMatch[1]);
      expect(schema['@context']).toBe('https://schema.org');
      expect(Array.isArray(schema['@graph'])).toBe(true);

      const graph = schema['@graph'];
      
      // Organization schema
      const org = graph.find(item => item['@type'] === 'Organization');
      expect(org).toBeDefined();
      expect(org.name).toBe('Evminov Spine Systems LLC');
      expect(org.logo).toContain('/images/authentic/evminov-official-logo.png');
      expect(org.areaServed).toContain('US');
      expect(org.areaServed).toContain('Worldwide');
      expect(org.currenciesAccepted).toContain('USD');
      expect(org.currenciesAccepted).toContain('EUR');
      expect(org.currenciesAccepted).toContain('GBP');

      // MedicalProcedure schema
      const proc = graph.find(item => item['@type'] === 'MedicalProcedure');
      expect(proc).toBeDefined();
      expect(proc.name).toBe('Non-Surgical Mechanical Spinal Decompression Therapy');
      expect(proc.bodyLocation).toContain('Spine');

      // MedicalWebPage schema
      const medPage = graph.find(item => item['@type'] === 'MedicalWebPage');
      expect(medPage).toBeDefined();
      expect(medPage.about.some(cond => cond.name.includes('Lumbar Disc Herniation'))).toBe(true);
      expect(medPage.about.some(cond => cond.name.includes('Sciatica'))).toBe(true);

      // Product schema
      const product = graph.find(item => item['@type'] === 'Product');
      expect(product).toBeDefined();
      expect(product.image).toContain('/images/social/evminov-social-preview.jpg');
      expect(product.offers.price).toBe('450.00');
      expect(product.offers.shippingDetails.length).toBeGreaterThanOrEqual(2);
      expect(product.aggregateRating.ratingValue).toBe('4.9');
    });
  });

  describe('3. US Distribution & 50-State Logistics Component', () => {
    it('should have complete 50 US States coverage', () => {
      expect(usStatesData.length).toBe(50);
      const california = usStatesData.find(s => s.code === 'CA');
      expect(california).toBeDefined();
      expect(california.days).toBe('1-2 days');

      const newYork = usStatesData.find(s => s.code === 'NY');
      expect(newYork).toBeDefined();
      expect(newYork.days).toBe('3-4 days');

      const alaska = usStatesData.find(s => s.code === 'AK');
      expect(alaska).toBeDefined();
    });

    it('should render US Distribution section with key trust signals and use cases', () => {
      const html = renderUsDistributionSection();
      expect(html).toContain('id="us-shipping"');
      expect(html).toContain('HUNDREDS OF AMERICAN HOMES EQUIPPED');
      expect(html).toContain('Direct Shipping to All 50 US States From Our Burbank, CA Hub');
      expect(html).toContain('HSA / FSA 100% Eligible');
      expect(html).toContain('HCPCS Code <strong>E0941</strong>');
      expect(html).toContain('Standard 16" Stud Mounting');
      expect(html).toContain('60-Day In-Home Trial');
      expect(html).toContain('Check Delivery Time to Your State');
      
      // Use cases
      expect(html).toContain('Desk & Remote Workers');
      expect(html).toContain('Standing Professionals');
      expect(html).toContain('Lifters & Strength Athletes');
      expect(html).toContain('Chronic Disc & Sciatica');
      expect(html).toContain('Kids, Students & Youth Scoliosis');
    });
  });

  describe('4. Global Brand Authority & Savings Component', () => {
    it('should render Global Brand Trust section with 500k+ proof and economics', () => {
      const html = renderGlobalBrandTrust();
      expect(html).toContain('id="global-trust"');
      expect(html).toContain('500k+');
      expect(html).toContain('40+');
      expect(html).toContain('200+');
      expect(html).toContain('$3.5k+');
      expect(html).toContain('Over 500,000 Patients Rehabilitated Across 40+ Countries Worldwide');
      expect(html).toContain('The Recurring Clinic & Pharmacy Carousel');
      expect(html).toContain('The Evminov Home Decompression System');
      expect(html).toContain('Universal International Payment Acceptance');
      expect(html).toContain('Apple Pay');
      expect(html).toContain('Google Pay');
    });

    it('should contain verified global destination regions', () => {
      expect(globalDestinations.length).toBeGreaterThanOrEqual(5);
      expect(globalDestinations.some(d => d.region.includes('North America'))).toBe(true);
      expect(globalDestinations.some(d => d.region.includes('European Union'))).toBe(true);
      expect(globalDestinations.some(d => d.region.includes('United Kingdom'))).toBe(true);
      expect(globalDestinations.some(d => d.region.includes('Australia'))).toBe(true);
    });
  });

  describe('5. High-Ranking SEO Content: Blog & FAQ Clusters', () => {
    it('should include the 6th Master Pillar Article focused on Spine Decompression at Home', () => {
      expect(blogPosts.length).toBeGreaterThanOrEqual(7);
      
      const pillarArticle = blogPosts.find(p => p.id === 'spine-decompression-at-home-guide');
      expect(pillarArticle).toBeDefined();
      expect(pillarArticle.title).toContain('Spine Decompression at Home');
      expect(pillarArticle.category).toBe('Spine Decompression');
      expect(pillarArticle.wordCount).toBeGreaterThan(2000);
      expect(pillarArticle.content).toContain('Desk & Office Worker Protocol');
      expect(pillarArticle.content).toContain('Standing Worker Protocol');
      expect(pillarArticle.content).toContain('Strength Athlete & Heavy Lifter Protocol');
      expect(pillarArticle.content).toContain('Lifestyle Economics: Home Decompression vs. Clinic Visits');
      expect(pillarArticle.content).toContain('200+ hours in traffic');
      expect(pillarArticle.paa.length).toBeGreaterThanOrEqual(4);
    });

    it('should contain FAQs for 50 US States, global orders, desk/standing workers, and clinic savings', () => {
      expect(faqList.length).toBeGreaterThanOrEqual(17);

      const hasUsShippingFaq = faqList.some(f => f.question.includes('50 US States'));
      expect(hasUsShippingFaq).toBe(true);

      const hasGlobalFaq = faqList.some(f => f.question.includes('internationally worldwide'));
      expect(hasGlobalFaq).toBe(true);

      const hasSavingsFaq = faqList.some(f => f.question.includes('save compared to physical therapy'));
      expect(hasSavingsFaq).toBe(true);

      const hasDeskFaq = faqList.some(f => f.question.includes('desk and office workers'));
      expect(hasDeskFaq).toBe(true);

      const hasStandingFaq = faqList.some(f => f.question.includes('standing workers'));
      expect(hasStandingFaq).toBe(true);

      const hasSurgeryAvoidFaq = faqList.some(f => f.question.includes('500,000') || f.answer.includes('500,000'));
      expect(hasSurgeryAvoidFaq).toBe(true);

      const hasKidsFaq = faqList.some(f => f.question.includes('children and teenagers') && f.question.includes('scoliosis'));
      expect(hasKidsFaq).toBe(true);

      const hasDentalEconFaq = faqList.some(f => f.question.includes('dental hygiene') && f.question.includes('family economics'));
      expect(hasDentalEconFaq).toBe(true);
    });
  });
});
