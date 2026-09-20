import { 
  calculateTractionPhysics, 
  recommendIncline, 
  recommendBoardModel, 
  formatUSD, 
  inchesToFeet
} from '../utils/formatters.js';
import { products } from '../data/products.js';
import { cartStore } from '../utils/cartStore.js';

export function renderCalculator() {
  return `
    <section class="calc-section" id="calculator">
      <div class="calc-container">
        
        <!-- Compact Clinical Header -->
        <div class="calc-header">
          <div class="clinical-pill-badge" style="margin-bottom: 8px; padding: 4px 12px; font-size: 0.75rem;">
            <span class="pill-dot"></span>
            <span>Personal Diagnostic Step • Configure Your Setup</span>
          </div>
          <h2>Personalized Traction &amp; Incline Calibrator</h2>
          <p>
            Find your exact starting incline angle, calculate negative disc vacuum (mmHg), and identify the recommended board dimensions for your height and weight.
          </p>
        </div>

        <div class="calc-grid">
          
          <!-- Controls Column: Streamlined & Compact -->
          <div class="calc-controls">
            
            <!-- 1. Spinal Pathology / Goal (Compact 2x2 Grid) -->
            <!-- 1. Spinal Pathology & Clinical Protocol Target -->
            <div class="calc-group spinal-focus-box">
              <div class="calc-label-row">
                <span class="calc-label">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 14.14 14.14"/></svg>
                  1. Spinal Focus Area:
                </span>
                <span class="calc-focus-tag" id="calc-focus-tag">L4-S1 Target</span>
              </div>
              <div class="condition-pills" id="calc-condition-pills">
                <button type="button" class="condition-btn active" data-condition="hernia">
                  <span class="condition-icon-badge">⚡</span>
                  <div class="condition-text">
                    <span class="condition-title">Herniated Disc</span>
                    <span class="condition-sub">L4-S1 • Disc Bulge</span>
                  </div>
                </button>
                <button type="button" class="condition-btn" data-condition="sciatica">
                  <span class="condition-icon-badge">🦵</span>
                  <div class="condition-text">
                    <span class="condition-title">Sciatica Relief</span>
                    <span class="condition-sub">Pinched Nerve Root</span>
                  </div>
                </button>
                <button type="button" class="condition-btn" data-condition="athlete">
                  <span class="condition-icon-badge">🏋️</span>
                  <div class="condition-text">
                    <span class="condition-title">Athletic Reset</span>
                    <span class="condition-sub">Axial Load Recovery</span>
                  </div>
                </button>
                <button type="button" class="condition-btn" data-condition="posture">
                  <span class="condition-icon-badge">💻</span>
                  <div class="condition-text">
                    <span class="condition-title">Posture / WFH</span>
                    <span class="condition-sub">Thoracic & Neck Reset</span>
                  </div>
                </button>
                <button type="button" class="condition-btn" data-condition="pediatric">
                  <span class="condition-icon-badge">🧸</span>
                  <div class="condition-text">
                    <span class="condition-title">Kids &amp; Scoliosis</span>
                    <span class="condition-sub">Ages 3–15 • Growth &amp; Dance</span>
                  </div>
                </button>
              </div>

              <!-- Live Clinical Target Insight Telemetry Panel -->
              <div class="focus-clinical-insight" id="focus-clinical-insight">
                <div class="insight-header-line">
                  <div class="insight-target-badge">
                    <span class="insight-pulsing-dot"></span>
                    <span class="insight-label" id="focus-insight-label">Acute Herniated / Bulging Disc (L4-S1)</span>
                  </div>
                  <span class="insight-angle-range" id="focus-insight-angle">Protocol: 12°–22°</span>
                </div>
                <p class="insight-desc" id="focus-insight-desc">
                  Gentle traction to widen intervertebral space without triggering protective muscle spasms.
                </p>
              </div>
            </div>

            <!-- 2. Biometrics Dual-Column Row (Weight + Height side-by-side) -->
            <div class="biometrics-dual-row">
              <!-- Weight -->
              <div class="calc-group">
                <div class="calc-label-row">
                  <label for="weight-slider" class="calc-label">Weight:</label>
                  <span class="calc-value-badge" id="weight-display">180 lbs</span>
                </div>
                <input 
                  type="range" 
                  id="weight-slider" 
                  class="calc-slider" 
                  min="100" 
                  max="320" 
                  value="180" 
                  step="5"
                  aria-label="Select Body Weight in pounds"
                />
                <div class="calc-sub-range">
                  <span>100 lbs</span>
                  <span>320 lbs</span>
                </div>
              </div>

              <!-- Height -->
              <div class="calc-group">
                <div class="calc-label-row">
                  <label for="height-slider" class="calc-label">Height:</label>
                  <span class="calc-value-badge" id="height-display">5'11"</span>
                </div>
                <input 
                  type="range" 
                  id="height-slider" 
                  class="calc-slider" 
                  min="58" 
                  max="82" 
                  value="71" 
                  step="1"
                  aria-label="Select User Height in inches"
                />
                <div class="calc-sub-range">
                  <span>4'10"</span>
                  <span>6'10"</span>
                </div>
              </div>
            </div>

            <!-- 3. Traction Incline Angle & Presets -->
            <div class="calc-group">
              <div class="calc-label-row">
                <label for="angle-slider" class="calc-label">3. Traction Incline Angle:</label>
                <span class="calc-value-badge" id="angle-display">18° Incline</span>
              </div>
              
              <!-- Quick Angle Presets -->
              <div class="angle-presets-bar" id="angle-presets-bar">
                <button type="button" class="angle-preset-chip" data-angle="8">8° Gentle</button>
                <button type="button" class="angle-preset-chip active" data-angle="18">18° Rehydrate</button>
                <button type="button" class="angle-preset-chip" data-angle="24">24° Nerve</button>
                <button type="button" class="angle-preset-chip" data-angle="30">30° Athletic</button>
                <button type="button" class="angle-preset-chip" data-angle="40">40° Deep</button>
              </div>

              <input 
                type="range" 
                id="angle-slider" 
                class="calc-slider" 
                min="8" 
                max="45" 
                value="18" 
                step="1"
                aria-label="Select Traction Incline Angle in degrees"
              />
              <div class="calc-sub-range">
                <span>8° Gentle</span>
                <span>20° Clinical Optimal</span>
                <span>45° Max Deep</span>
              </div>
            </div>

          </div>

          <!-- Dynamic Output Visualizer Column: Compact Telemetry Cockpit -->
          <div class="calc-visualizer">
            
            <!-- Biomechanical Lumbar Spine Simulator Stage -->
            <div class="visualizer-stage-card">
              <div class="stage-top-meta">
                <span class="stage-angle-badge" id="stage-angle-tag">Angle: 18° Incline</span>
                <span class="stage-vacuum-badge" id="stage-vacuum-tag">Disc Vacuum: -110 mmHg</span>
              </div>

              <div class="spine-biomechanics-view">
                
                <!-- Animated Lumbar Spine Column with Stretching Discs -->
                <div class="spine-column" id="spine-column-view">
                  <div class="vertebra-node">L1</div>
                  <div class="intervertebral-disc"></div>
                  <div class="vertebra-node">L2</div>
                  <div class="intervertebral-disc"></div>
                  <div class="vertebra-node">L3</div>
                  <div class="intervertebral-disc"></div>
                  <div class="vertebra-node">L4</div>
                  <div class="intervertebral-disc" id="disc-l4-l5"></div>
                  <div class="vertebra-node active-lumbar">L5</div>
                  <div class="intervertebral-disc active-disc" id="disc-l5-s1"></div>
                  <div class="vertebra-node active-lumbar">S1</div>
                </div>

                <!-- Board Tilt Display -->
                <div class="board-tilt-container">
                  <div class="board-wall-mount-line"></div>
                  <div class="board-tilt-surface" id="visualizer-board"></div>
                </div>

              </div>

              <div class="stage-bottom-readout">
                <span>🟢 L4-S1 Space: <strong id="disc-mm-readout">+2.3 mm</strong></span>
                <span>⚖️ Bed Support: <strong id="normal-force-readout">171 lbs</strong></span>
              </div>
            </div>

            <!-- Real-Time Computed Metrics (Clean Typography) -->
            <div class="calc-results-row">
              <div class="result-card">
                <div class="result-title">Traction Pull (Ft)</div>
                <div class="result-metric highlight-cyan" id="metric-force">55 lbs</div>
              </div>
              <div class="result-card">
                <div class="result-title">Decompression</div>
                <div class="result-metric highlight-emerald" id="metric-pct">29%</div>
              </div>
              <div class="result-card">
                <div class="result-title">Daily Session</div>
                <div class="result-metric" id="metric-time">12 min</div>
              </div>
            </div>

            <!-- Compact Recommendation & Prescription Strip -->
            <div class="calc-recommendation-box" id="rec-box">
              <div class="rec-info-col">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span class="rec-badge" id="rec-badge">Prescribed Model</span>
                  <span class="rec-model-name" id="rec-name">Evminov Pro-Traction Board (Standard)</span>
                </div>
                <div class="rec-desc" id="rec-desc">
                  Ideal for users up to 6'4" and 210 lbs. Includes Glisson neck loop & stud mounting kit.
                </div>
              </div>
              <button type="button" class="btn btn-primary btn-sm calc-cta-btn" id="calc-add-to-cart-btn">
                <span>Add Prescribed Model</span>
                <span id="rec-price">($450)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function initCalculator() {
  const weightSlider = document.getElementById('weight-slider');
  const heightSlider = document.getElementById('height-slider');
  const angleSlider = document.getElementById('angle-slider');
  
  const weightDisplay = document.getElementById('weight-display');
  const heightDisplay = document.getElementById('height-display');
  const angleDisplay = document.getElementById('angle-display');
  
  const stageAngleTag = document.getElementById('stage-angle-tag');
  const stageVacuumTag = document.getElementById('stage-vacuum-tag');
  const visualizerBoard = document.getElementById('visualizer-board');
  const discMmReadout = document.getElementById('disc-mm-readout');
  const normalForceReadout = document.getElementById('normal-force-readout');
  
  const metricForce = document.getElementById('metric-force');
  const metricPct = document.getElementById('metric-pct');
  const metricTime = document.getElementById('metric-time');
  
  const recName = document.getElementById('rec-name');
  const recDesc = document.getElementById('rec-desc');
  const recPrice = document.getElementById('rec-price');
  const addToCartBtn = document.getElementById('calc-add-to-cart-btn');

  const focusTag = document.getElementById('calc-focus-tag');
  const focusInsightLabel = document.getElementById('focus-insight-label');
  const focusInsightAngle = document.getElementById('focus-insight-angle');
  const focusInsightDesc = document.getElementById('focus-insight-desc');
  
  let currentCondition = 'hernia';
  let recommendedModelId = 'evminov-standard';

  function update() {
    if (!weightSlider || !heightSlider || !angleSlider) return;

    const weightLbs = parseInt(weightSlider.value, 10);
    const heightInches = parseInt(heightSlider.value, 10);
    const angle = parseInt(angleSlider.value, 10);

    // Update displays
    weightDisplay.textContent = `${weightLbs} lbs`;
    heightDisplay.textContent = `${inchesToFeet(heightInches)}`;
    angleDisplay.textContent = `${angle}° Incline`;
    stageAngleTag.textContent = `Angle: ${angle}° Incline`;

    // Rotate simulated board
    if (visualizerBoard) {
      visualizerBoard.style.transform = `rotate(-${angle}deg)`;
    }

    // Compute traction physics
    const physics = calculateTractionPhysics(weightLbs, angle);
    metricForce.textContent = `${physics.netTractionLbs} lbs`;
    metricPct.textContent = `${physics.percentBodyWeight}%`;

    // Normal force supported by board: Fn = W * cos(theta)
    const normalForceLbs = Math.round(weightLbs * Math.cos((angle * Math.PI) / 180));
    if (normalForceReadout) {
      normalForceReadout.textContent = `${normalForceLbs} lbs`;
    }

    // Disc elongation simulation: 1.2 mm at 8° up to 3.2 mm at 40°
    const discElongationMm = (1.0 + (angle / 45) * 2.2).toFixed(1);
    if (discMmReadout) {
      discMmReadout.textContent = `+${discElongationMm} mm`;
    }

    // Intradiscal vacuum pressure simulation: -30 mmHg at 8° to -145 mmHg at 40°
    const vacuumMmHg = Math.round(-30 - (angle / 45) * 115);
    if (stageVacuumTag) {
      stageVacuumTag.textContent = `Disc Vacuum: ${vacuumMmHg} mmHg`;
    }

    // Dynamic Intervertebral Disc Height animation (expands from 4px to 9px)
    const dynamicDiscHeightPx = Math.round(4 + (angle / 45) * 5);
    document.querySelectorAll('.intervertebral-disc').forEach((disc) => {
      disc.style.height = `${dynamicDiscHeightPx}px`;
    });

    const conditionData = recommendIncline(currentCondition);
    metricTime.textContent = `${conditionData.durationMin} min`;
    if (focusInsightLabel) focusInsightLabel.textContent = conditionData.label;
    if (focusInsightAngle) focusInsightAngle.textContent = `Protocol: ${conditionData.startAngle}°–${conditionData.maxAngle}°`;
    if (focusInsightDesc) focusInsightDesc.textContent = conditionData.description;
    if (focusTag) {
      const tagMap = {
        hernia: 'L4-S1 Target',
        sciatica: 'Sciatic Nerve',
        athlete: 'Axial Decompression',
        posture: 'Thoracic Alignment',
      };
      focusTag.textContent = tagMap[currentCondition] || 'Clinical Target';
    }

    // Compute board model recommendation
    const modelRec = recommendBoardModel(weightLbs, heightInches);
    recommendedModelId = modelRec.modelId;
    const targetProduct = products.find((p) => p.id === recommendedModelId) || products[0];

    recName.textContent = targetProduct.name;
    recDesc.textContent = modelRec.reason;
    recPrice.textContent = `(${formatUSD(targetProduct.basePrice)})`;

    // Update preset chips active state
    document.querySelectorAll('.angle-preset-chip').forEach((chip) => {
      const chipAngle = parseInt(chip.getAttribute('data-angle'), 10);
      if (chipAngle === angle) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }

  // Event Listeners for Sliders
  if (weightSlider) weightSlider.addEventListener('input', update);
  if (heightSlider) heightSlider.addEventListener('input', update);
  if (angleSlider) angleSlider.addEventListener('input', update);

  // Quick Angle Preset Chips
  document.querySelectorAll('.angle-preset-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const targetAngle = parseInt(chip.getAttribute('data-angle'), 10);
      if (angleSlider) {
        angleSlider.value = targetAngle;
      }
      update();
    });
  });

  // Condition Pills click
  const conditionPills = document.querySelectorAll('#calc-condition-pills .condition-btn');
  conditionPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      conditionPills.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCondition = btn.getAttribute('data-condition') || 'hernia';

      // Set angle slider to recommended start angle for that condition
      const rec = recommendIncline(currentCondition);
      if (angleSlider) {
        angleSlider.value = rec.startAngle;
      }
      update();
    });
  });

  // Add to Cart button
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const product = products.find((p) => p.id === recommendedModelId) || products[0];
      cartStore.addItem(product, {
        finish: 'Natural Nordic Pine',
        price: product.basePrice,
        shippingSpeed: 'fast-us',
        shippingLabel: 'California Warehouse (2–4 Day US Delivery)',
      });
    });
  }

  // Initial calculation
  update();
}
