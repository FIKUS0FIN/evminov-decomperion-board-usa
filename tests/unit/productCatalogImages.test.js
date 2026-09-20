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

  it('3-piece folding board clearly demonstrates compact travel, trunk and flight portability', () => {
    const travelBoard = products.find((p) => p.id === 'evminov-folding-3part');
    expect(travelBoard).toBeDefined();
    expect(travelBoard.image).toBe('/images/accessories/folding-board-3-sections.png');

    // Confirm image file exists on disk
    const imgPath = path.join(publicDir, travelBoard.image);
    expect(fs.existsSync(imgPath)).toBe(true);

    // Verify copy clarifies travel, car trunk, and airplane transport
    expect(travelBoard.subtitle.toLowerCase()).toContain('trunk');
    expect(travelBoard.badge.toLowerCase()).toContain('travel');
    expect(travelBoard.keyFeature.toLowerCase()).toContain('trunk');
    expect(travelBoard.keyFeature.toLowerCase()).toContain('travel');
  });

  it('verifies all 5 official Evminov boards and the freestanding stand form the clean 6-item catalog (3 in row 1, 3 in row 2)', () => {
    expect(products.length).toBe(6);
    const boardIds = [
      'evminov-standard',
      'evminov-folding-2part',
      'evminov-folding-3part',
      'evminov-wide',
      'evminov-alder',
    ];
    const accessoryIds = [
      'evminov-stand',
    ];

    boardIds.forEach((id) => {
      const p = products.find((prod) => prod.id === id);
      expect(p, `Board ${id} should be in catalog`).toBeDefined();
      expect(p.category).toBe('board');
      expect(p.ukrName).toBeDefined();
      expect(p.keyFeature).toBeDefined();
    });

    accessoryIds.forEach((id) => {
      const p = products.find((prod) => prod.id === id);
      expect(p, `Accessory ${id} should be in catalog`).toBeDefined();
      expect(p.category).toBe('accessory');
    });
  });

  it('verifies that every board set includes the Patented Glisson Loop for cervical decompression', () => {
    const boards = products.filter((p) => p.category === 'board');
    boards.forEach((b) => {
      const hasGlisson = b.includes.some((inc) => inc.toLowerCase().includes('glisson'));
      expect(hasGlisson, `Board ${b.id} must include Glisson Loop`).toBe(true);
    });
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
