export function renderMountingGuide() {
  return `
    <section class="catalog-section" id="mounting" style="background: var(--color-surface-white); border-top: 1px solid var(--color-border-subtle);">
      <div class="calc-container">
        
        <div class="section-header">
          <span class="badge badge-cyan" style="margin-bottom: 12px;">American Home Compatibility</span>
          <h2>Engineered for Standard US 16-Inch Wall Studs</h2>
          <p>
            Zero guesswork. Every Evminov board ships with hardware engineered specifically for American drywall and timber framing, plus a 100% drill-free option for apartment renters.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 32px; align-items: stretch;">
          
          <!-- Option 1: Wall Stud Mounting -->
          <div class="card" style="display: flex; flex-direction: column; gap: 16px; border-top: 4px solid var(--color-pine-emerald);">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span class="badge badge-pine">Standard In-Box Hardware</span>
              <span style="font-weight: 800; color: var(--color-pine-emerald);">400+ lbs Rated</span>
            </div>
            
            <h3 style="font-size: 1.375rem; font-weight: 800; color: var(--color-primary-navy);">
              1. Single-Stud Wall Mounting (Included)
            </h3>
            
            <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6;">
              American residential drywall is supported by vertical 2x4 wooden studs spaced 16" on center. The Evminov board requires only <strong>one central stud</strong> and two heavy-duty steel lag screws (included in box).
            </p>

            <ul style="display: flex; flex-direction: column; gap: 10px; font-size: 0.875rem; color: var(--color-text-main); margin-top: auto;">
              <li style="display: flex; gap: 8px;">
                <span style="color: var(--color-pine-emerald);">✓</span>
                <span><strong>Takes 10 Minutes:</strong> Locate any stud with a standard stud finder.</span>
              </li>
              <li style="display: flex; gap: 8px;">
                <span style="color: var(--color-pine-emerald);">✓</span>
                <span><strong>Folds 100% Flat:</strong> Rests just 2.4 inches against the wall when not in use.</span>
              </li>
              <li style="display: flex; gap: 8px;">
                <span style="color: var(--color-pine-emerald);">✓</span>
                <span><strong>Includes Masonry Anchors:</strong> For basement concrete or brick walls.</span>
              </li>
            </ul>

            <div style="background: var(--color-bg-light); border-radius: var(--radius-md); padding: 12px; font-size: 0.8125rem; color: var(--color-text-muted);">
              💡 <em>No handyman required: Illustrated step-by-step English guide and video QR included.</em>
            </div>
          </div>

          <!-- Option 2: Free-Standing Ladder Stand -->
          <div class="card" style="display: flex; flex-direction: column; gap: 16px; border-top: 4px solid var(--color-traction-cyan);">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span class="badge badge-cyan">For Renters & Apartments</span>
              <span style="font-weight: 800; color: var(--color-traction-cyan);">100% Drill-Free</span>
            </div>
            
            <h3 style="font-size: 1.375rem; font-weight: 800; color: var(--color-primary-navy);">
              2. Demountable Ladder Stand ($275)
            </h3>
            
            <p style="font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.6;">
              Living in a rental home, high-rise apartment, or condo where wall drilling is restricted? Our free-standing timber ladder stand holds the board firmly at any incline angle from 8° to 35°.
            </p>

            <ul style="display: flex; flex-direction: column; gap: 10px; font-size: 0.875rem; color: var(--color-text-main); margin-top: auto;">
              <li style="display: flex; gap: 8px;">
                <span style="color: var(--color-traction-cyan);">✓</span>
                <span><strong>Zero Wall Holes:</strong> Protects your rental deposit completely.</span>
              </li>
              <li style="display: flex; gap: 8px;">
                <span style="color: var(--color-traction-cyan);">✓</span>
                <span><strong>Compact Footprint:</strong> Occupies less than 3.5 square feet of floor space.</span>
              </li>
              <li style="display: flex; gap: 8px;">
                <span style="color: var(--color-traction-cyan);">✓</span>
                <span><strong>Tool-Free Breakdown:</strong> Can be stowed away under a bed in 3 minutes.</span>
              </li>
            </ul>

            <div style="margin-top: 8px;">
              <a href="#product-evminov-stand" class="btn btn-secondary btn-block btn-sm">
                View Free-Standing Stand ($275)
              </a>
            </div>
          </div>

        </div>

        <!-- Step-by-Step Cinematic Unboxing & Assembly Video (Half-Screen Showcase) -->
        <div class="cinematic-video-section" style="margin-top: 48px; padding: 40px; background: #0B132B; border-radius: var(--radius-xl); color: #FFFFFF; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 25px 50px -12px rgba(11, 19, 43, 0.4);">
          <div class="cinematic-video-grid">
            
            <!-- Video Column (55% Half-Screen Player) with Factory Seal Strip & Technical Emblems -->
            <div class="assembly-video-column">
              <!-- Top Trust Strip: Official Kyiv Factory Installation Header -->
              <div class="assembly-video-header-strip">
                <div class="assembly-brand-group">
                  <img 
                    src="/images/authentic/evminov-official-logo.png" 
                    alt="Official Evminov Center Kyiv Seal" 
                    class="assembly-factory-logo"
                  />
                  <div class="assembly-factory-text">
                    <span class="assembly-factory-kicker">Official Factory Installation</span>
                    <strong class="assembly-factory-title">Kyiv Engineering Center Assembly Guide</strong>
                  </div>
                </div>
                <div class="assembly-cert-badge">
                  <span class="assembly-cert-dot"></span>
                  <span>Kyiv Factory Certified</span>
                </div>
              </div>

              <!-- Main Video Frame with Floating Sound Toggle -->
              <div class="video-frame-container" id="assembly-video-container">
                <iframe 
                  id="assembly-video-player"
                  src="https://www.youtube.com/embed/fP-biAHusGs?enablejsapi=1&playsinline=1&rel=0&modestbranding=1" 
                  title="Unboxing and Assembling the Patented Evminov Board" 
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
                  id="assembly-audio-toggle" 
                  aria-label="Toggle assembly video sound"
                  title="Sound automatically fades as you scroll away. Tap to toggle mute."
                >
                  <span class="audio-icon" id="assembly-audio-icon">🔇</span>
                  <span class="audio-label" id="assembly-audio-label">Muted • Tap for sound</span>
                  <span class="audio-volume-pill" id="assembly-volume-pill">0%</span>
                </button>
              </div>

              <!-- Bottom Technical Emblems / Specs Grid (Fills Dark Space) -->
              <div class="assembly-spec-emblems">
                <div class="assembly-spec-card">
                  <div class="assembly-spec-icon-row">
                    <span class="assembly-spec-icon">🧩</span>
                    <span class="assembly-spec-tag tag-cyan">Dovetail Interlock</span>
                  </div>
                  <strong class="assembly-spec-title">3-Piece Precision Joint</strong>
                  <p class="assembly-spec-desc">Vibration-dampening steel plates eliminate joint flex under full traction load.</p>
                </div>

                <div class="assembly-spec-card">
                  <div class="assembly-spec-icon-row">
                    <span class="assembly-spec-icon">🧱</span>
                    <span class="assembly-spec-tag tag-emerald">US Stud Ready</span>
                  </div>
                  <strong class="assembly-spec-title">Standard 16" Framing</strong>
                  <p class="assembly-spec-desc">Engineered for direct single-stud mounting in American drywall with included lag bolts.</p>
                </div>

                <div class="assembly-spec-card">
                  <div class="assembly-spec-icon-row">
                    <span class="assembly-spec-icon">⚓</span>
                    <span class="assembly-spec-tag tag-amber">Safety Tested</span>
                  </div>
                  <strong class="assembly-spec-title">400+ lbs Load Rating</strong>
                  <p class="assembly-spec-desc">Triple-braided mountaineering cable & calibrated quick-release carriage lock.</p>
                </div>
              </div>
            </div>

            <!-- Narrative & Chapters Column (45%) -->
            <div class="video-narrative">
              <div class="video-badge-strip">
                <span class="badge badge-cyan">Factory Installation Guide</span>
                <span style="font-size: 0.75rem; color: #94A3B8; font-family: var(--font-mono); font-weight: 700;">4:37 HD</span>
              </div>

              <h3 style="font-size: clamp(1.4rem, 2.5vw, 1.85rem); font-weight: 800; color: #FFFFFF; line-height: 1.25; margin-bottom: 12px;">
                Unboxing &amp; 10-Minute Wall Assembly Masterclass
              </h3>

              <p style="font-size: 0.9rem; color: #94A3B8; line-height: 1.6; margin-bottom: 20px;">
                Follow along with factory engineers assembling the authentic 3-piece folding Evminov board, calibrating the steel carriage locking mechanism, and securing the mounting bracket into standard 16-inch US wood wall studs.
              </p>

              <div class="video-chapters-list" id="assembly-chapters-list">
                <div class="video-chapter-item assembly-chapter-item" data-time="0" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1); cursor: pointer;" title="Click to jump to 0:00">
                  <span class="video-time-tag">0:00</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Box Contents &amp; Pre-Assembly Check</strong>
                    <span style="color: #94A3B8;">Unpacking the 3 resonant pine sections, adjustable carriage, and heavy-duty steel anchors.</span>
                  </div>
                </div>

                <div class="video-chapter-item assembly-chapter-item" data-time="75" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1); cursor: pointer;" title="Click to jump to 1:15">
                  <span class="video-time-tag">1:15</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Sectional Interlock &amp; Steel Bracing</strong>
                    <span style="color: #94A3B8;">Aligning the dovetail channels and tightening the vibration-dampening connecting plates.</span>
                  </div>
                </div>

                <div class="video-chapter-item assembly-chapter-item" data-time="150" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1); cursor: pointer;" title="Click to jump to 2:30">
                  <span class="video-time-tag">2:30</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Carriage Calibration &amp; Quick-Release Pin</strong>
                    <span style="color: #94A3B8;">Sliding and locking the ergonomic hand grips to your exact patient height.</span>
                  </div>
                </div>

                <div class="video-chapter-item assembly-chapter-item" data-time="225" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1); cursor: pointer;" title="Click to jump to 3:45">
                  <span class="video-time-tag">3:45</span>
                  <div class="video-chapter-text">
                    <strong style="color: #FFFFFF;">Wall Stud Mount &amp; Incline Adjustment</strong>
                    <span style="color: #94A3B8;">Fastening the cable hook into a 16" wood stud for 400+ lbs of safe traction.</span>
                  </div>
                </div>
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
                <a 
                  href="https://www.youtube.com/watch?v=fP-biAHusGs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-primary btn-sm"
                  style="display: inline-flex; align-items: center; gap: 8px;"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  Watch on YouTube ↗
                </a>
                <a href="#product-evminov-standard" class="btn btn-secondary btn-sm" style="background: rgba(255,255,255,0.08); color: #fff; border-color: rgba(255,255,255,0.25);">
                  Shop Standard Folding Set ($349)
                </a>
              </div>

            </div>

          </div>
        </div>

        <!-- Authentic Craftsmanship & Materials Showcase -->
        <div style="margin-top: 48px; background: var(--color-bg-light); border-radius: var(--radius-xl); padding: 32px; border: 1px solid var(--color-border-subtle);">
          <div style="text-align: center; max-width: 680px; margin: 0 auto 28px;">
            <span class="badge badge-pine" style="margin-bottom: 8px;">Authentic Ukrainian Craftsmanship</span>
            <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--color-primary-navy);">Patented Carpathian Pine &amp; Aircraft-Alloy Mechanism</h3>
            <p style="font-size: 0.9375rem; color: var(--color-text-muted);">
              Unlike plastic inversion tables, each Evminov board is hand-crafted from resonant multi-layer Carpathian pine providing anatomical spring flex that absorbs shock and gently pumps spinal discs.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); gap: 20px;">
            <div style="background: var(--color-surface-white); border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-sm);">
              <img src="/images/products/board-natural-pine-finish.jpg" alt="Natural Carpathian Pine Wood Grain" style="width: 100%; height: 200px; object-fit: cover;" />
              <div style="padding: 16px;">
                <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 4px;">Resonant Anatomical Pine</h4>
                <p style="font-size: 0.8125rem; color: var(--color-text-muted); margin: 0;">Multi-layered grain structure calibrated for natural flex during therapeutic exercises.</p>
              </div>
            </div>

            <div style="background: var(--color-surface-white); border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-sm);">
              <img src="/images/products/board-carriage-locking-pin.jpg" alt="Steel Carriage Locking Mechanism" style="width: 100%; height: 200px; object-fit: cover;" />
              <div style="padding: 16px;">
                <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 4px;">Quick-Lock Alloy Carriage</h4>
                <p style="font-size: 0.8125rem; color: var(--color-text-muted); margin: 0;">Precision machined handles with quick-release safety pin tested for over 400+ lbs tensile load.</p>
              </div>
            </div>

            <div style="background: var(--color-surface-white); border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-sm);">
              <img src="/images/products/board-mounting-bracket.jpg" alt="Wall Mounting Cable Anchor" style="width: 100%; height: 200px; object-fit: cover;" />
              <div style="padding: 16px;">
                <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 4px;">Heavy-Duty Wall Suspension</h4>
                <p style="font-size: 0.8125rem; color: var(--color-text-muted); margin: 0;">Braided high-tensile mountaineering-grade cable and reinforced eye bolt anchor system.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

export function initMountingGuide() {
  if (typeof document === 'undefined') return;

  const videoContainer = document.getElementById('assembly-video-container');
  const audioToggle = document.getElementById('assembly-audio-toggle');
  const audioIcon = document.getElementById('assembly-audio-icon');
  const audioLabel = document.getElementById('assembly-audio-label');
  const volumePill = document.getElementById('assembly-volume-pill');
  const iframe = document.getElementById('assembly-video-player');

  if (!videoContainer) return;

  let ytPlayer = null;
  let isPlayerReady = false;
  let isPlaying = false;
  let isSoundEnabled = false; // Starts muted so browser allows autoplay

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
    const windowHeight = window.innerHeight || (document.documentElement && document.documentElement.clientHeight) || 800;

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
        }
      } catch (e) {}
      sendIframeCommand('playVideo');
      isPlaying = true;
    }

    // If user has not enabled sound, stay muted
    if (!isSoundEnabled) {
      updateAudioBadge(0, true);
      return;
    }

    // If user enabled sound:
    // Fade volume smoothly if scrolled almost completely off-screen (> 80% out of view)
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleRatio = Math.max(0, Math.min(1, visibleHeight / (rect.height || 1)));

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

        updateAudioBadge(100, false, true);
      } else {
        // MUTE TO 0%
        try {
          if (ytPlayer && typeof ytPlayer.mute === 'function') {
            ytPlayer.mute();
          }
        } catch (e) {}

        sendIframeCommand('mute');
        sendIframeCommand('setVolume', [0]);

        updateAudioBadge(0, true, true);
      }
    });
  }

  // Interactive Chapter Clicks
  const chapterItems = document.querySelectorAll('.assembly-chapter-item');
  chapterItems.forEach((item) => {
    item.addEventListener('click', () => {
      const timeSec = parseInt(item.getAttribute('data-time'), 10) || 0;
      try {
        if (ytPlayer && typeof ytPlayer.seekTo === 'function') {
          ytPlayer.seekTo(timeSec, true);
          ytPlayer.playVideo();
        }
      } catch (e) {}
      sendIframeCommand('seekTo', [timeSec, true]);
      sendIframeCommand('playVideo');
      isPlaying = true;
    });
  });

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
  window.addEventListener('resize', handleVideoScroll, { passive: true });

  // YouTube Iframe API initialization
  function loadYouTubeIframeAPI(onReady) {
    if (typeof window === 'undefined') return;
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
      ytPlayer = new window.YT.Player('assembly-video-player', {
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
        },
      });
    } catch (e) {}
  });

  // Initial check after delay
  setTimeout(handleVideoScroll, 1200);
}
