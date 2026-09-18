import { describe, it, expect } from 'vitest';
import { renderVideoProtocols } from '../../src/components/VideoProtocols.js';
import { renderMountingGuide } from '../../src/components/MountingGuide.js';
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
});
