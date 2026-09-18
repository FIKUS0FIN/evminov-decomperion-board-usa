import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { HERO_GALLERY_SLIDES, renderHero } from '../../src/components/Hero.js';

describe('Hero Interactive Multi-Photo Gallery', () => {
  it('should have 6 curated authentic gallery slides', () => {
    expect(HERO_GALLERY_SLIDES.length).toBe(6);
  });

  it('should verify all slide image and thumbnail files physically exist in public directory', () => {
    HERO_GALLERY_SLIDES.forEach((slide) => {
      expect(slide.id).toBeTruthy();
      expect(slide.title).toBeTruthy();
      expect(slide.caption).toBeTruthy();
      expect(slide.tag).toBeTruthy();
      expect(slide.image).toBeTruthy();
      expect(slide.thumb).toBeTruthy();

      const imagePath = path.join(process.cwd(), 'public', slide.image);
      const thumbPath = path.join(process.cwd(), 'public', slide.thumb);

      expect(fs.existsSync(imagePath), `Image missing: ${slide.image}`).toBe(true);
      expect(fs.existsSync(thumbPath), `Thumbnail missing: ${slide.thumb}`).toBe(true);
    });
  });

  it('should render the carousel viewport, track, arrows, dots, and thumbnail strip', () => {
    const html = renderHero();
    expect(html).toContain('hero-carousel-viewport');
    expect(html).toContain('hero-carousel-track');
    expect(html).toContain('hero-prev-btn');
    expect(html).toContain('hero-next-btn');
    expect(html).toContain('hero-carousel-dots');
    expect(html).toContain('hero-thumbnails-strip');
    expect(html).toContain('hero-float-badge');
    expect(html).toContain('In Stock in Burbank, CA');
  });

  it('should NOT hijack vertical page scroll via scrollIntoView on thumbnail buttons', () => {
    const heroJsPath = path.resolve(process.cwd(), 'src/components/Hero.js');
    const heroJs = fs.readFileSync(heroJsPath, 'utf8');

    // Ensure thumb.scrollIntoView is not present (prevents vertical window scroll hijacking)
    expect(heroJs).not.toContain('thumb.scrollIntoView');
    // Ensure horizontal container thumbsStrip.scrollTo is used instead
    expect(heroJs).toContain('thumbsStrip.scrollTo');
    // Ensure IntersectionObserver is used to pause autoplay when hero is offscreen
    expect(heroJs).toContain('isHeroVisible');
  });

  it('should guarantee main.js starts at top on open and configures manual scrollRestoration', () => {
    const mainJsPath = path.resolve(process.cwd(), 'src/main.js');
    const mainJs = fs.readFileSync(mainJsPath, 'utf8');

    expect(mainJs).toContain("scrollRestoration = 'manual'");
    expect(mainJs).toContain("window.scrollTo({ top: 0, behavior: 'instant' })");
    expect(mainJs).not.toContain("targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })");
  });
});
