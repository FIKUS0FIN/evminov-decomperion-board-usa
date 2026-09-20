import { exerciseProtocols } from '../data/exercises.js';

export function renderVideoProtocols() {
  const cardsHtml = exerciseProtocols
    .map(
      (ex) => `
      <div class="card exercise-protocol-card" style="display: flex; flex-direction: column; overflow: hidden; padding: 0;">
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
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-traction-cyan); text-transform: uppercase; letter-spacing: 0.04em;">
            ${ex.target}
          </div>
          <h3 style="font-size: 1.125rem; font-weight: 800; color: var(--color-primary-navy); line-height: 1.3;">
            ${ex.title}
          </h3>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.55;">
            ${ex.description}
          </p>

          ${ex.clinicalFocus ? `
            <div style="padding: 8px 10px; background: #ECFDF5; border-left: 3px solid #059669; border-radius: 4px; font-size: 0.75rem; color: #064E3B; font-weight: 600; line-height: 1.4;">
              <span style="font-weight: 800; color: #047857; text-transform: uppercase; font-size: 0.6875rem; letter-spacing: 0.06em; display: block; margin-bottom: 2px;">Clinical Focus</span>
              ${ex.clinicalFocus}
            </div>
          ` : ''}

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
            
            <!-- Video Column (55% Half-Screen Player) with Trust Strip & Clinical Principles Emblems -->
            <div class="assembly-video-column">
              <!-- Top Trust Strip: Official Kyiv Clinical Methodology Header -->
              <div class="assembly-video-header-strip">
                <div class="assembly-brand-group">
                  <img 
                    src="/images/authentic/evminov-official-logo.png" 
                    alt="Official Evminov Spine Center Kyiv Seal" 
                    class="assembly-factory-logo"
                  />
                  <div class="assembly-factory-text">
                    <span class="assembly-factory-kicker">Official Clinical Methodology</span>
                    <strong class="assembly-factory-title">Kyiv Vertebral Center Clinical Guide</strong>
                  </div>
                </div>
                <div class="assembly-cert-badge">
                  <span class="assembly-cert-dot"></span>
                  <span>Methodology Certified</span>
                </div>
              </div>

              <!-- Main Video Frame with Floating Sound Toggle -->
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

              <!-- Bottom Clinical Execution Emblems / Method Principles -->
              <div class="assembly-spec-emblems">
                <div class="assembly-spec-card">
                  <div class="assembly-spec-icon-row">
                    <span class="assembly-spec-icon">📐</span>
                    <span class="assembly-spec-tag tag-cyan">Fractional Traction</span>
                  </div>
                  <strong class="assembly-spec-title">8°–20° Calibrated Incline</strong>
                  <p class="assembly-spec-desc">Unloads up to 70% axial bodyweight gravity, widening narrowed intervertebral foramina.</p>
                </div>

                <div class="assembly-spec-card">
                  <div class="assembly-spec-icon-row">
                    <span class="assembly-spec-icon">🌊</span>
                    <span class="assembly-spec-tag tag-emerald">Osmotic Diffusion</span>
                  </div>
                  <strong class="assembly-spec-title">Micro-Amplitude Motion</strong>
                  <p class="assembly-spec-desc">Rhythmic short-stroke kinematics pump nutrient-rich synovial fluid into dehydrated discs.</p>
                </div>

                <div class="assembly-spec-card">
                  <div class="assembly-spec-icon-row">
                    <span class="assembly-spec-icon">🛡️</span>
                    <span class="assembly-spec-tag tag-amber">Deep Core Corset</span>
                  </div>
                  <strong class="assembly-spec-title">Multifidus Paraspinal Tone</strong>
                  <p class="assembly-spec-desc">Strengthens deep intervertebral rotators and stabilizing ligaments without compressive load.</p>
                </div>
              </div>
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

        <!-- Interactive Exercise Protocols Carousel (Single Row with Smooth Left/Right Navigation) -->
        <div class="exercise-carousel-wrapper" id="exercise-carousel-section">
          <div class="exercise-carousel-header">
            <div class="exercise-carousel-heading-group">
              <div class="exercise-carousel-badge">
                <span class="pulse-dot"></span>
                <span>Clinical Regimens &amp; Prescriptions</span>
              </div>
              <h3 class="exercise-carousel-title">Targeted Spinal Protocols &amp; Exercises</h3>
              <p class="exercise-carousel-subtitle">
                Engineered angles and durations for disc regeneration, cervical relief, athletic decompression, and juvenile posture.
              </p>
            </div>
            <div class="exercise-carousel-controls" role="toolbar" aria-label="Exercise protocols carousel navigation">
              <div class="exercise-carousel-counter" id="exercise-carousel-counter" aria-live="polite">
                <span class="counter-curr">1–4</span> of <span class="counter-total">5</span>
              </div>
              <div class="exercise-nav-arrows">
                <button type="button" class="exercise-nav-btn exercise-prev-btn" id="exercise-prev-btn" aria-label="Previous exercise protocols" title="Previous protocols">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button type="button" class="exercise-nav-btn exercise-next-btn" id="exercise-next-btn" aria-label="Next exercise protocols" title="Next protocols">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div class="exercise-carousel-shell">
            <button type="button" class="exercise-float-arrow exercise-float-prev" id="exercise-float-prev" aria-label="Scroll to previous exercise protocols">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <div class="exercise-carousel-viewport" id="exercise-carousel-viewport" tabindex="0" role="region" aria-label="Clinical Exercise Protocols Carousel">
              <div class="exercise-carousel-track" id="exercise-carousel-track">
                ${cardsHtml}
              </div>
            </div>

            <button type="button" class="exercise-float-arrow exercise-float-next" id="exercise-float-next" aria-label="Scroll to next exercise protocols">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          <!-- Carousel Pagination Indicator Dots -->
          <div class="exercise-carousel-dots" id="exercise-carousel-dots" role="tablist" aria-label="Exercise protocols slide indicators"></div>
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
  // Initialize Interactive Exercise Protocols Carousel
  initExerciseCarousel();

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
  const iframe = document.getElementById('featured-video-player');

  if (!videoContainer) return;

  let ytPlayer = null;
  let isPlayerReady = false;
  let isPlaying = false;
  let isSoundEnabled = true; // Default 100% sound active

  function sendIframeCommand(func, args = []) {
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func, args }),
          '*'
        );
      } catch (e) {}
    }
  }

  function updateAudioBadge(volumePercent, isMuted, triggerAnim = false) {
    if (!audioToggle) return;
    if (isMuted || volumePercent === 0) {
      audioToggle.classList.add('is-muted');
      if (audioIcon) audioIcon.textContent = '🔇';
      if (audioLabel) audioLabel.textContent = 'Muted • Tap for sound';
      if (volumePill) volumePill.textContent = '0%';
    } else {
      audioToggle.classList.remove('is-muted');
      if (audioIcon) audioIcon.textContent = '🔊';
      if (audioLabel) audioLabel.textContent = `Sound Active • ${volumePercent}%`;
      if (volumePill) volumePill.textContent = `${volumePercent}%`;
    }

    if (triggerAnim) {
      audioToggle.classList.remove('sound-activated');
      void audioToggle.offsetWidth; // force DOM reflow
      audioToggle.classList.add('sound-activated');
      setTimeout(() => {
        audioToggle.classList.remove('sound-activated');
      }, 700);
    }
  }

  function handleVideoScroll() {
    const rect = videoContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if video is in viewport (even partially)
    const inViewport = rect.bottom > 0 && rect.top < windowHeight;

    if (!inViewport) {
      if (isPlaying) {
        try {
          if (ytPlayer && typeof ytPlayer.pauseVideo === 'function') {
            ytPlayer.pauseVideo();
          }
        } catch (e) {}
        sendIframeCommand('pauseVideo');
        isPlaying = false;
      }
      return;
    }

    // Video is in viewport!
    if (!isPlaying) {
      try {
        if (ytPlayer && typeof ytPlayer.playVideo === 'function') {
          ytPlayer.playVideo();
          if (isSoundEnabled) {
            if (typeof ytPlayer.unMute === 'function') ytPlayer.unMute();
            if (typeof ytPlayer.setVolume === 'function') ytPlayer.setVolume(100);
          }
        }
      } catch (e) {}
      sendIframeCommand('playVideo');
      if (isSoundEnabled) {
        sendIframeCommand('unMute');
        sendIframeCommand('setVolume', [100]);
      }
      isPlaying = true;
    }

    // If user has not enabled sound, stay muted
    if (!isSoundEnabled) {
      updateAudioBadge(0, true);
      return;
    }

    // If user has tapped sound on:
    // Keep volume at 100% while video is in main view.
    // If it's scrolling almost completely off-screen (> 80% out of view), fade smoothly.
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleRatio = Math.max(0, Math.min(1, visibleHeight / rect.height));

    let volume = 100;
    if (visibleRatio < 0.2) {
      volume = Math.round((visibleRatio / 0.2) * 100);
    }

    try {
      if (ytPlayer && typeof ytPlayer.setVolume === 'function') {
        ytPlayer.setVolume(volume);
      }
    } catch (e) {}
    sendIframeCommand('setVolume', [volume]);

    updateAudioBadge(volume, volume === 0);
  }

  // Audio Toggle Button Click
  if (audioToggle) {
    audioToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      isSoundEnabled = !isSoundEnabled;

      if (isSoundEnabled) {
        // UNMUTE TO 100%
        try {
          if (ytPlayer) {
            if (typeof ytPlayer.unMute === 'function') ytPlayer.unMute();
            if (typeof ytPlayer.setVolume === 'function') ytPlayer.setVolume(100);
            if (typeof ytPlayer.playVideo === 'function') ytPlayer.playVideo();
          }
        } catch (e) {}

        sendIframeCommand('unMute');
        sendIframeCommand('setVolume', [100]);
        sendIframeCommand('playVideo');

        // Immediately update UI to 100% with animation to display it was changed
        updateAudioBadge(100, false, true);
      } else {
        // MUTE TO 0%
        try {
          if (ytPlayer) {
            if (typeof ytPlayer.mute === 'function') ytPlayer.mute();
            if (typeof ytPlayer.setVolume === 'function') ytPlayer.setVolume(0);
          }
        } catch (e) {}

        sendIframeCommand('mute');
        sendIframeCommand('setVolume', [0]);

        // Immediately update UI to 0% with feedback animation
        updateAudioBadge(0, true, true);
      }
    });
  }

  // Automatically enable sound on first user gesture anywhere if video is in view
  function onFirstUserGesture() {
    if (isSoundEnabled) {
      try {
        if (ytPlayer) {
          if (typeof ytPlayer.unMute === 'function') ytPlayer.unMute();
          if (typeof ytPlayer.setVolume === 'function') ytPlayer.setVolume(100);
        }
      } catch (e) {}
      sendIframeCommand('unMute');
      sendIframeCommand('setVolume', [100]);
    }
    window.removeEventListener('pointerdown', onFirstUserGesture);
    window.removeEventListener('keydown', onFirstUserGesture);
    window.removeEventListener('scroll', onFirstUserGesture);
  }

  window.addEventListener('pointerdown', onFirstUserGesture, { passive: true, once: true });
  window.addEventListener('keydown', onFirstUserGesture, { passive: true, once: true });
  window.addEventListener('scroll', onFirstUserGesture, { passive: true, once: true });

  // Initial badge update to 100% sound active
  updateAudioBadge(100, false);

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
            if (isSoundEnabled) {
              try {
                event.target.unMute();
                event.target.setVolume(100);
              } catch (e) {}
            } else {
              try {
                event.target.mute();
                event.target.setVolume(0);
              } catch (e) {}
            }
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

export function initExerciseCarousel() {
  if (typeof document === 'undefined') return;
  const viewport = document.getElementById('exercise-carousel-viewport');
  const track = document.getElementById('exercise-carousel-track');
  if (!viewport || !track) return;

  const headerPrevBtn = document.getElementById('exercise-prev-btn');
  const headerNextBtn = document.getElementById('exercise-next-btn');
  const floatPrevBtn = document.getElementById('exercise-float-prev');
  const floatNextBtn = document.getElementById('exercise-float-next');
  const counterEl = document.getElementById('exercise-carousel-counter');
  const dotsContainer = document.getElementById('exercise-carousel-dots');

  const cards = track.querySelectorAll('.exercise-protocol-card');
  const totalCards = cards.length;
  if (!totalCards) return;

  function getCardStep() {
    if (cards.length > 1) {
      const firstRect = cards[0].getBoundingClientRect();
      const secondRect = cards[1].getBoundingClientRect();
      const diff = secondRect.left - firstRect.left;
      if (diff > 0) return diff;
    } else if (cards.length === 1) {
      const cardRect = cards[0].getBoundingClientRect();
      if (cardRect.width > 0) return cardRect.width + 24;
    }
    return 299;
  }

  function getVisibleCount() {
    const vWidth = viewport.clientWidth || 1100;
    const step = getCardStep();
    return Math.max(1, Math.min(totalCards, Math.round(vWidth / step)));
  }

  function updateCarouselUI() {
    const scrollLeft = viewport.scrollLeft;
    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const step = getCardStep();
    const visible = getVisibleCount();

    let firstVisibleIdx = Math.round(scrollLeft / step);
    if (scrollLeft >= maxScroll - 15) {
      firstVisibleIdx = Math.max(0, totalCards - visible);
    }
    firstVisibleIdx = Math.max(0, Math.min(firstVisibleIdx, totalCards - 1));
    const lastVisibleIdx = Math.min(totalCards, firstVisibleIdx + visible);

    if (counterEl) {
      const start = Math.min(firstVisibleIdx + 1, totalCards);
      const end = Math.min(lastVisibleIdx, totalCards);
      counterEl.innerHTML = `<span class="counter-curr">${start}–${end}</span> of <span class="counter-total">${totalCards}</span>`;
    }

    const atStart = scrollLeft <= 5;
    const atEnd = scrollLeft >= maxScroll - 5;

    [headerPrevBtn, floatPrevBtn].forEach((btn) => {
      if (btn) {
        btn.disabled = atStart;
        btn.setAttribute('aria-disabled', atStart ? 'true' : 'false');
      }
    });

    [headerNextBtn, floatNextBtn].forEach((btn) => {
      if (btn) {
        btn.disabled = atEnd;
        btn.setAttribute('aria-disabled', atEnd ? 'true' : 'false');
      }
    });

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.exercise-carousel-dot');
      const numPages = Math.max(1, Math.ceil(totalCards / visible));
      const activePage = Math.min(
        numPages - 1,
        Math.round(scrollLeft / (viewport.clientWidth || 1))
      );

      dots.forEach((dot, idx) => {
        const isActive = idx === activePage;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }
  }

  function scrollNext() {
    const scrollDist = viewport.clientWidth > 500 ? viewport.clientWidth * 0.85 : getCardStep();
    viewport.scrollBy({ left: scrollDist, behavior: 'smooth' });
  }

  function scrollPrev() {
    const scrollDist = viewport.clientWidth > 500 ? viewport.clientWidth * 0.85 : getCardStep();
    viewport.scrollBy({ left: -scrollDist, behavior: 'smooth' });
  }

  if (headerNextBtn) headerNextBtn.addEventListener('click', scrollNext);
  if (floatNextBtn) floatNextBtn.addEventListener('click', scrollNext);
  if (headerPrevBtn) headerPrevBtn.addEventListener('click', scrollPrev);
  if (floatPrevBtn) floatPrevBtn.addEventListener('click', scrollPrev);

  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollPrev();
    }
  });

  function renderDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const visible = getVisibleCount();
    const numPages = Math.max(1, Math.ceil(totalCards / visible));

    if (numPages <= 1) {
      dotsContainer.style.display = 'none';
      return;
    }
    dotsContainer.style.display = 'flex';

    for (let i = 0; i < numPages; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `exercise-carousel-dot ${i === 0 ? 'is-active' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      dot.setAttribute('aria-label', `Go to exercise protocols page ${i + 1}`);
      dot.addEventListener('click', () => {
        const targetScroll = i === numPages - 1 && numPages > 1
          ? viewport.scrollWidth - viewport.clientWidth
          : i * (viewport.clientWidth * 0.85);
        viewport.scrollTo({ left: targetScroll, behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
    }
  }

  renderDots();
  updateCarouselUI();

  viewport.addEventListener('scroll', updateCarouselUI, { passive: true });
  window.addEventListener('resize', () => {
    renderDots();
    updateCarouselUI();
  });
}

