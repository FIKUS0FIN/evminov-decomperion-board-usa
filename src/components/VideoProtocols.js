import { exerciseProtocols } from '../data/exercises.js';

export function renderVideoProtocols() {
  const cardsHtml = exerciseProtocols
    .map(
      (ex) => `
      <div class="card" style="display: flex; flex-direction: column; overflow: hidden; padding: 0;">
        <div style="position: relative; height: 180px; overflow: hidden; background: #000;">
          <img src="${ex.videoThumbnail}" alt="${ex.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.85;" />
          <button 
            type="button" 
            class="video-play-btn" 
            data-video-title="${ex.title}"
            style="position: absolute; inset: 0; margin: auto; width: 56px; height: 56px; background: rgba(5, 150, 105, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-size: 1.5rem; box-shadow: 0 0 20px rgba(5, 150, 105, 0.6); transition: transform 0.2s;"
            aria-label="Play ${ex.title} demonstration video"
          >
            ▶
          </button>
          <span class="badge badge-navy" style="position: absolute; bottom: 12px; left: 12px; font-size: 0.75rem;">
            ${ex.duration}
          </span>
          <span class="badge badge-pine" style="position: absolute; top: 12px; right: 12px; font-size: 0.75rem;">
            ${ex.angle}
          </span>
        </div>

        <div style="padding: 20px; display: flex; flex-direction: column; flex: 1; gap: 10px;">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-traction-cyan); text-transform: uppercase;">
            ${ex.target}
          </div>
          <h3 style="font-size: 1.125rem; font-weight: 800; color: var(--color-primary-navy); line-height: 1.3;">
            ${ex.title}
          </h3>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.5;">
            ${ex.description}
          </p>

          <ol style="margin-top: auto; padding-top: 10px; border-top: 1px solid var(--color-border-subtle); display: flex; flex-direction: column; gap: 6px; font-size: 0.8125rem; color: var(--color-text-main);">
            ${ex.steps.map((step, i) => `<li><strong>${i + 1}.</strong> ${step}</li>`).join('')}
          </ol>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="catalog-section" id="videos" style="background: var(--color-surface-white); border-top: 1px solid var(--color-border-subtle);">
      <div class="calc-container">
        
        <div class="section-header">
          <span class="badge badge-pine" style="margin-bottom: 12px;">The Evminov Method in Motion</span>
          <h2>See Clinical Spinal Decompression in Action</h2>
          <p>
            Watch real clinical execution of the patented inclined traction method — targeted disc rehydration, sciatic nerve release, and active paraspinal core strengthening without surgery.
          </p>
        </div>

        <!-- Featured Official YouTube Clinical Protocol (Half-Screen Showcase) -->
        <div class="cinematic-video-section" style="margin-bottom: 48px; padding: 40px; background: #0B132B; border-radius: var(--radius-xl); color: #FFFFFF; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 25px 50px -12px rgba(11, 19, 43, 0.4);">
          <div class="cinematic-video-grid">
            
            <!-- Video Column (55% Half-Screen Player) with Scroll-Driven Autoplay & Audio Fade -->
            <div class="video-frame-container" id="featured-video-container">
              <iframe 
                id="featured-video-player"
                src="https://www.youtube.com/embed/GDLVNWynWF0?enablejsapi=1&playsinline=1&rel=0&modestbranding=1" 
                title="Official Clinical Exercise Set on Evminov Spine Decompression Board" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                loading="lazy"
              ></iframe>
              <div class="video-glow-effect"></div>

              <!-- Interactive Floating Sound & Autoplay Indicator / Toggle -->
              <button 
                type="button" 
                class="video-audio-control-badge" 
                id="video-audio-toggle" 
                aria-label="Toggle video sound"
                title="Sound automatically fades as you scroll away. Tap to toggle mute."
              >
                <span class="audio-icon" id="video-audio-icon">🔊</span>
                <span class="audio-label" id="video-audio-label">Sound Active • Auto-fades on scroll</span>
                <span class="audio-volume-pill" id="video-volume-pill">100%</span>
              </button>
            </div>

            <!-- Narrative & Protocol Phases Column (45%) -->
            <div class="video-narrative">
              <div class="video-badge-strip">
                <span class="badge badge-pine">Official US Channel • @evminoviusa</span>
                <span style="font-size: 0.75rem; color: #34D399; font-family: var(--font-mono); font-weight: 700;">4:04 HD Clinical Set</span>
              </div>

              <h3 style="font-size: clamp(1.4rem, 2.5vw, 1.85rem); font-weight: 800; color: #FFFFFF; line-height: 1.25; margin-bottom: 12px;">
                Clinical Protocol: Herniated Disc &amp; Sciatica Remission Masterclass
              </h3>

              <p style="font-size: 0.9rem; color: #94A3B8; line-height: 1.6; margin-bottom: 20px;">
                Guided clinical demonstration from the Evminov Vertebral Center showing proper body alignment, zero-gravity pelvic decompression, and the micro-amplitude pumping motions that stimulate disc fluid reabsorption.
              </p>

              <div class="video-chapters-list">
                <div class="video-chapter-item" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">0:00</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Positioning &amp; Fractional Traction (8°–12°)</strong>
                    <span style="color: #94A3B8;">Supine grip on carriage, relaxing paraspinal musculature into gravitational decompression.</span>
                  </div>
                </div>

                <div class="video-chapter-item" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">1:10</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Osmotic Pumping &amp; Lumbar Unloading</strong>
                    <span style="color: #94A3B8;">Controlled breathing cadence paired with micro-amplitude leg flexion to relieve L4-L5/L5-S1 nerve roots.</span>
                  </div>
                </div>

                <div class="video-chapter-item" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">2:15</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Deep Paraspinal Muscle Activation</strong>
                    <span style="color: #94A3B8;">Isometric contractions of the rotatores and multifidus without compressive spinal loading.</span>
                  </div>
                </div>

                <div class="video-chapter-item" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1);">
                  <span class="video-time-tag">3:20</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Controlled Discontinuation &amp; Stand-Up Safety</strong>
                    <span style="color: #94A3B8;">Safe dismount technique preserving therapeutic intervertebral height post-traction.</span>
                  </div>
                </div>
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
                <a 
                  href="https://www.youtube.com/channel/UCwsC2K28uWYijzAKnZljzsw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-primary btn-sm"
                  style="display: inline-flex; align-items: center; gap: 8px;"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  Subscribe on YouTube
                </a>
                <a 
                  href="https://www.youtube.com/watch?v=GDLVNWynWF0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-secondary btn-sm"
                  style="background: rgba(255,255,255,0.08); color: #fff; border-color: rgba(255,255,255,0.25);"
                >
                  Watch on YouTube ↗
                </a>
                <a href="#exercise-gallery" class="btn btn-secondary btn-sm" style="background: rgba(255,255,255,0.08); color: #34D399; border-color: rgba(52, 211, 153, 0.3);">
                  Browse 21 Photo Protocols
                </a>
              </div>

            </div>

          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 24px;">
          ${cardsHtml}
        </div>

      </div>

      <!-- Video Modal -->
      <div class="modal-overlay" id="video-modal">
        <div class="modal-content">
          <button type="button" class="modal-close-btn" id="close-video-modal" aria-label="Close Video Modal">✕</button>
          <div style="padding: 20px; border-bottom: 1px solid var(--color-border-subtle);">
            <h3 id="video-modal-title" style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-navy);"></h3>
          </div>
          <div class="video-container">
            <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #0B132B; color: #FFFFFF; padding: 40px; text-align: center;">
              <div style="font-size: 3rem; margin-bottom: 16px;">🎬</div>
              <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">Interactive HD Video Demonstration</h4>
              <p style="font-size: 0.9375rem; color: #94A3B8; max-width: 480px; margin-bottom: 20px;">
                Full 4K instructional footage included with your Evminov board shipment and unlocked inside the digital customer portal.
              </p>
              <a href="#catalog" class="btn btn-primary btn-sm" id="modal-video-cta">
                Order Board & Unlock Video Library
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initVideoProtocols() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('close-video-modal');
  const modalTitle = document.getElementById('video-modal-title');
  const ctaBtn = document.getElementById('modal-video-cta');

  document.querySelectorAll('.video-play-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-video-title');
      if (modalTitle) modalTitle.textContent = title;
      if (modal) modal.classList.add('active');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (ctaBtn && modal) {
    ctaBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  // YouTube IFrame API: Scroll-Driven Autoplay & Smooth Audio Fade
  const videoContainer = document.getElementById('featured-video-container');
  const audioToggle = document.getElementById('video-audio-toggle');
  const audioIcon = document.getElementById('video-audio-icon');
  const audioLabel = document.getElementById('video-audio-label');
  const volumePill = document.getElementById('video-volume-pill');

  if (!videoContainer) return;

  let ytPlayer = null;
  let isPlayerReady = false;
  let isPlaying = false;
  let userManuallyMuted = false;
  let hasAutoUnmuted = false;

  function updateAudioBadge(volumePercent, isMuted) {
    if (!audioToggle) return;
    if (isMuted || volumePercent === 0) {
      audioToggle.classList.add('is-muted');
      if (audioIcon) audioIcon.textContent = '🔇';
      if (audioLabel) audioLabel.textContent = isMuted ? 'Muted • Tap for sound' : 'Faded out';
      if (volumePill) volumePill.textContent = '0%';
    } else {
      audioToggle.classList.remove('is-muted');
      if (audioIcon) audioIcon.textContent = '🔊';
      if (audioLabel) audioLabel.textContent = 'Sound Active • Auto-fades on scroll';
      if (volumePill) volumePill.textContent = `${volumePercent}%`;
    }
  }

  function handleVideoScroll() {
    if (!ytPlayer || !isPlayerReady) return;

    const rect = videoContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if video is in viewport (even partially)
    const inViewport = rect.bottom > 0 && rect.top < windowHeight;

    if (!inViewport) {
      if (isPlaying) {
        try {
          ytPlayer.pauseVideo();
          isPlaying = false;
        } catch (e) {}
      }
      return;
    }

    // Video is in viewport!
    if (!isPlaying) {
      try {
        ytPlayer.playVideo();
        isPlaying = true;
      } catch (e) {}
    }

    // Compute volume based on scroll:
    // When video is centered in view, volume is 100%.
    // As user scrolls down past the video (rect.top becomes negative),
    // volume gradually fades out proportionally to the remaining visible portion.
    let volume = 100;

    if (rect.top < 0) {
      // Top of video is moving off top of screen
      const remainingHeight = Math.max(0, rect.bottom);
      const ratio = remainingHeight / rect.height; // 1.0 down to 0.0
      volume = Math.round(Math.max(0, Math.min(100, ratio * 100)));
    } else if (rect.bottom > windowHeight) {
      // Bottom of video is coming in from bottom of screen
      const visibleFromBottom = Math.max(0, windowHeight - rect.top);
      const ratio = visibleFromBottom / rect.height; // 0.0 up to 1.0
      volume = Math.round(Math.max(0, Math.min(100, ratio * 100)));
    } else {
      volume = 100;
    }

    if (!userManuallyMuted) {
      try {
        if (typeof ytPlayer.setVolume === 'function') {
          ytPlayer.setVolume(volume);
        }
        if (typeof ytPlayer.isMuted === 'function' && ytPlayer.isMuted() && volume > 0 && hasAutoUnmuted) {
          ytPlayer.unMute();
        }
      } catch (e) {}
    }

    const isMutedNow = userManuallyMuted || (typeof ytPlayer.isMuted === 'function' && ytPlayer.isMuted());
    updateAudioBadge(volume, isMutedNow);
  }

  // Audio Toggle Button Click
  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      if (!ytPlayer || !isPlayerReady) return;

      hasAutoUnmuted = true;
      try {
        const currentlyMuted = typeof ytPlayer.isMuted === 'function' && ytPlayer.isMuted();
        if (currentlyMuted || userManuallyMuted) {
          ytPlayer.unMute();
          userManuallyMuted = false;
          handleVideoScroll();
        } else {
          ytPlayer.mute();
          userManuallyMuted = true;
          updateAudioBadge(0, true);
        }
      } catch (e) {}
    });
  }

  // Automatically enable sound on first user gesture anywhere if video is in view
  function onFirstUserGesture() {
    hasAutoUnmuted = true;
    if (ytPlayer && isPlayerReady && !userManuallyMuted) {
      try {
        const rect = videoContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.bottom > 0 && rect.top < windowHeight) {
          ytPlayer.unMute();
          handleVideoScroll();
        }
      } catch (e) {}
    }
    window.removeEventListener('pointerdown', onFirstUserGesture);
    window.removeEventListener('keydown', onFirstUserGesture);
  }

  window.addEventListener('pointerdown', onFirstUserGesture, { passive: true, once: true });
  window.addEventListener('keydown', onFirstUserGesture, { passive: true, once: true });

  // Throttled scroll listener
  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleVideoScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  // Initialize YouTube API
  function loadYouTubeIframeAPI(onReady) {
    if (window.YT && window.YT.Player) {
      onReady();
      return;
    }
    const existingCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof existingCallback === 'function') existingCallback();
      onReady();
    };
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    }
  }

  loadYouTubeIframeAPI(() => {
    try {
      ytPlayer = new window.YT.Player('featured-video-player', {
        events: {
          onReady: (event) => {
            isPlayerReady = true;
            // Start muted so browser autoplay policies never block playback on scroll
            try {
              event.target.mute();
            } catch (e) {}
            handleVideoScroll();
          },
          onStateChange: (event) => {
            if (event.data === 1) {
              isPlaying = true;
            } else if (event.data === 2 || event.data === 0) {
              isPlaying = false;
            }
          }
        }
      });
    } catch (err) {
      console.warn('YouTube Player initialization failed:', err);
    }
  });
}
