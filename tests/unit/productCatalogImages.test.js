import { describe, it, expect } from 'vitest';
import { products } from '../../src/data/products.js';
import fs from 'fs';
import path from 'path';

describe('Product Catalog Visual Assets & Explanations', () => {
  const publicDir = path.resolve(process.cwd(), 'public');

  it('standard board uses full authentic studio profile image', () => {
    const standard = products.find((p) => p.id === 'evminov-standard');
    expect(standard).toBeDefined();
    expect(standard.image).toBe('/images/authentic/evminov-board-profile.jpg');

    // Confirm image file exists on disk
    const imgPath = path.join(publicDir, standard.image);
    expect(fs.existsSync(imgPath)).toBe(true);

    // Check gallery contains in-action and folded images
    const galleryUrls = standard.galleryImages.map((g) => g.url);
    expect(galleryUrls).toContain('/images/authentic/hero-full-device-traction.jpg');
    expect(galleryUrls).toContain('/images/accessories/standard-pine-board-assembly.png');
  });

  it('compact trainer clearly demonstrates over-the-door installation', () => {
    const stick = products.find((p) => p.id === 'evminov-stick');
    expect(stick).toBeDefined();
    expect(stick.image).toBe('/images/products/board-door-mount-setup.jpg');

    // Confirm image file exists on disk
    const imgPath = path.join(publicDir, stick.image);
    expect(fs.existsSync(imgPath)).toBe(true);

    // Verify copy clarifies door mount / no drilling setup
    expect(stick.subtitle).toContain('door');
    expect(stick.badge).toContain('Door');
    expect(stick.includes.some((inc) => inc.includes('door anchor') || inc.includes('over-the-door'))).toBe(true);
  });

  it('padded foot sleeves clearly demonstrate slide-on installation and usage', () => {
    const sleeves = products.find((p) => p.id === 'evminov-foot-sleeves');
    expect(sleeves).toBeDefined();
    expect(sleeves.image).toBe('/images/products/carriage-foot-sleeves-installation.jpg');

    // Confirm image file exists on disk
    const imgPath = path.join(publicDir, sleeves.image);
    expect(fs.existsSync(imgPath)).toBe(true);

    // Check gallery includes in-use feet hooked in and reverse traction
    const galleryUrls = sleeves.galleryImages.map((g) => g.url);
    expect(galleryUrls).toContain('/images/products/carriage-foot-sleeves-inversion.jpg');
    expect(galleryUrls).toContain('/images/authentic/exercise-reverse-traction.jpg');

    // Verify copy clarifies slide-on fit and ankle/foot cushioning
    expect(sleeves.subtitle).toContain('slide');
    expect(sleeves.subtitle).toContain('ankles');
  });

  it('verifies all product images and gallery images exist on disk', () => {
    products.forEach((p) => {
      const mainPath = path.join(publicDir, p.image);
      expect(fs.existsSync(mainPath), `Main image ${p.image} missing for ${p.id}`).toBe(true);

      if (p.galleryImages) {
        p.galleryImages.forEach((g) => {
          const gPath = path.join(publicDir, g.url);
          expect(fs.existsSync(gPath), `Gallery image ${g.url} missing for ${p.id}`).toBe(true);
        });
      }
    });
  });
});
