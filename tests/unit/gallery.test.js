import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { exerciseGalleryData, biomechanicsPrinciples } from '../../src/data/galleryData.js';
import { renderExerciseGallery } from '../../src/components/ExerciseGallery.js';

describe('Clinical Exercise Gallery & Biomechanics', () => {
  it('should contain all 20 prescribed protocols', () => {
    expect(exerciseGalleryData.length).toBe(20);
  });

  it('should have valid fields and existing image files for every protocol', () => {
    exerciseGalleryData.forEach((item) => {
      expect(item.id).toBeTruthy();
      expect(item.title).toBeTruthy();
      expect(item.category).toBeTruthy();
      expect(['lumbar', 'cervical', 'family', 'core']).toContain(item.category);
      expect(item.zone).toBeTruthy();
      expect(item.angle).toBeTruthy();
      expect(item.mechanism).toBeTruthy();
      expect(item.steps.length).toBeGreaterThanOrEqual(3);
      expect(item.image.startsWith('/images/gallery/')).toBe(true);

      // Verify physical image file exists in public directory
      const localFilePath = path.join(process.cwd(), 'public', item.image);
      expect(fs.existsSync(localFilePath)).toBe(true);
    });
  });

  it('should have 3 core biomechanics principles extracted from clinical archives', () => {
    expect(biomechanicsPrinciples.length).toBe(3);
    biomechanicsPrinciples.forEach((p) => {
      expect(p.title).toBeTruthy();
      expect(p.subtitle).toBeTruthy();
      expect(p.text).toBeTruthy();
      expect(p.badge).toBeTruthy();
    });
  });

  it('should render complete gallery section with filter tabs, cards, and modal', () => {
    const html = renderExerciseGallery();
    expect(html).toContain('id="exercise-gallery"');
    expect(html).toContain('gallery-filter-all');
    expect(html).toContain('gallery-filter-lumbar');
    expect(html).toContain('gallery-filter-cervical');
    expect(html).toContain('gallery-filter-family');
    expect(html).toContain('gallery-filter-core');
    expect(html).toContain('gallery-mosaic-grid');
    expect(html).toContain('biomechanics-ribbon');
    expect(html).toContain('The Spinal Pumping Mechanism');
    expect(html).toContain('Toothbrush for the Spine');
    expect(html).toContain('gallery-lightbox-modal');
  });
});
