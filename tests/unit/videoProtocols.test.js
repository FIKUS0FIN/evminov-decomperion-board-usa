import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { renderVideoProtocols, initExerciseCarousel } from '../../src/components/VideoProtocols.js';
import { renderMountingGuide, initMountingGuide } from '../../src/components/MountingGuide.js';
import { renderClinicalCentersPage } from '../../src/components/RehabilitationCentersPage.js';

describe('Video Protocols & Embed Verification (YouTube Error 153 Fix & Autoplay Fade)', () => {
  it('should render featured video player with strict-origin-when-cross-origin referrerpolicy', () => {
    const html = renderVideoProtocols();

    expect(html).toContain('id="featured-video-player"');
    expect(html).toContain('src="https://www.youtube.com/embed/GDLVNWynWF0?enablejsapi=1&playsinline=1&rel=0&modestbranding=1"');
    expect(html).toContain('referrerpolicy="strict-origin-when-cross-origin"');
    expect(html).toContain('web-share');
    expect(html).not.toContain('youtube-nocookie.com');
  });

  it('should render interactive floating sound toggle badge and volume pill', () => {
    const html = renderVideoProtocols();

    expect(html).toContain('id="video-audio-toggle"');
    expect(html).toContain('id="video-audio-icon"');
    expect(html).toContain('id="video-audio-label"');
    expect(html).toContain('id="video-volume-pill"');
    expect(html).toContain('Sound Active • Auto-fades on scroll');
  });

  it('should ensure all other video embeds across MountingGuide and RehabilitationCentersPage have fixed referrerpolicy and embed domain', () => {
    const mountingHtml = renderMountingGuide();
    expect(mountingHtml).toContain('https://www.youtube.com/embed/fP-biAHusGs');
    expect(mountingHtml).toContain('referrerpolicy="strict-origin-when-cross-origin"');
    expect(mountingHtml).not.toContain('youtube-nocookie.com');

    const centersHtml = renderClinicalCentersPage();
    expect(centersHtml).toContain('https://www.youtube.com/embed/GDLVNWynWF0');
    expect(centersHtml).toContain('https://www.youtube.com/embed/fP-biAHusGs');
    expect(centersHtml).toContain('referrerpolicy="strict-origin-when-cross-origin"');
    expect(centersHtml).not.toContain('youtube-nocookie.com');
  });

  it('should render assembly masterclass video player with official logo, trust strip, audio toggle, and technical emblems', () => {
    const html = renderMountingGuide();

    // Factory authorization header strip with official logo
    expect(html).toContain('/images/authentic/evminov-official-logo.png');
    expect(html).toContain('Official Factory Installation');
    expect(html).toContain('Kyiv Engineering Center Assembly Guide');
    expect(html).toContain('Kyiv Factory Certified');

    // Video container and player iframe
    expect(html).toContain('id="assembly-video-container"');
    expect(html).toContain('id="assembly-video-player"');
    expect(html).toContain('src="https://www.youtube.com/embed/fP-biAHusGs?enablejsapi=1&playsinline=1&rel=0&modestbranding=1"');

    // Audio toggle badge
    expect(html).toContain('id="assembly-audio-toggle"');
    expect(html).toContain('id="assembly-audio-icon"');
    expect(html).toContain('id="assembly-audio-label"');
    expect(html).toContain('id="assembly-volume-pill"');

    // Technical specification emblems
    expect(html).toContain('Dovetail Interlock');
    expect(html).toContain('3-Piece Precision Joint');
    expect(html).toContain('US Stud Ready');
    expect(html).toContain('Standard 16" Framing');
    expect(html).toContain('Safety Tested');
    expect(html).toContain('400+ lbs Load Rating');
  });

  it('should include assembly video column, header strip, and spec emblems styling in centers.css', () => {
    const centersCssPath = path.resolve(process.cwd(), 'src/styles/centers.css');
    const centersCss = fs.readFileSync(centersCssPath, 'utf8');

    expect(centersCss).toContain('.assembly-video-column');
    expect(centersCss).toContain('.assembly-video-header-strip');
    expect(centersCss).toContain('.assembly-factory-logo');
    expect(centersCss).toContain('.assembly-spec-emblems');
    expect(centersCss).toContain('.assembly-spec-card');
  });

  it('should gracefully handle initMountingGuide when DOM elements are absent in non-browser env', () => {
    expect(() => {
      initMountingGuide();
    }).not.toThrow();
  });

  it('should render exercise protocols carousel in a single horizontal row with navigation controls', () => {
    const html = renderVideoProtocols();

    expect(html).toContain('id="exercise-carousel-section"');
    expect(html).toContain('id="exercise-carousel-viewport"');
    expect(html).toContain('id="exercise-carousel-track"');
    expect(html).toContain('id="exercise-prev-btn"');
    expect(html).toContain('id="exercise-next-btn"');
    expect(html).toContain('id="exercise-float-prev"');
    expect(html).toContain('id="exercise-float-next"');
    expect(html).toContain('id="exercise-carousel-counter"');
    expect(html).toContain('id="exercise-carousel-dots"');

    // Verify all 5 exercises are included in the carousel
    expect(html).toContain('Lumbar L4-S1 Hernia Decompression');
    expect(html).toContain('Glisson Loop Cervical Traction');
    expect(html).toContain('Post-Workout Spinal Restoration (After Deadlifts & Squats)');
    expect(html).toContain('Thoracic Extension & Kyphosis Correction');
    expect(html).toContain('Pediatric Scoliosis & "Lying-Down Dancing" (Танці Лежачи)');
  });

  it('should include single-row carousel styling and scroll-snap in main.css', () => {
    const mainCssPath = path.resolve(process.cwd(), 'src/styles/main.css');
    const mainCss = fs.readFileSync(mainCssPath, 'utf8');

    expect(mainCss).toContain('.exercise-carousel-viewport');
    expect(mainCss).toContain('scroll-snap-type: x mandatory');
    expect(mainCss).toContain('.exercise-carousel-track');
    expect(mainCss).toContain('.exercise-carousel-track .exercise-protocol-card');
    expect(mainCss).toContain('container-name: exerciseViewport');
  });

  it('should gracefully handle initExerciseCarousel when DOM elements are absent in non-browser env', () => {
    expect(() => {
      initExerciseCarousel();
    }).not.toThrow();
  });
});


