/**
 * Formatting & Physical Decompression Calculation Utilities
 */

export function formatUSD(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatKlarna(amount) {
  const installment = amount / 4;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(installment);
}

export function lbsToKg(lbs) {
  return Math.round(lbs * 0.45359237);
}

export function kgToLbs(kg) {
  return Math.round(kg / 0.45359237);
}

export function inchesToFeet(inches) {
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  return `${feet}'${remainingInches}"`;
}

export function inchesToCm(inches) {
  return Math.round(inches * 2.54);
}

/**
 * Calculates spinal decompression physics on the Evminov inclined plane
 * @param {number} weightLbs - User weight in lbs
 * @param {number} angleDegrees - Angle of incline in degrees (8 to 45)
 */
export function calculateTractionPhysics(weightLbs, angleDegrees) {
  const rad = (angleDegrees * Math.PI) / 180;
  // Sin component pulls along the incline
  const sinForce = weightLbs * Math.sin(rad);
  // Pine wood low-friction coefficient
  const frictionCoef = 0.08;
  const friction = weightLbs * Math.cos(rad) * frictionCoef;
  
  const netTractionLbs = Math.max(0, Math.round(sinForce - friction));
  const percentBodyWeight = Math.round((netTractionLbs / weightLbs) * 100);
  
  return {
    angleDegrees,
    grossForceLbs: Math.round(sinForce),
    netTractionLbs,
    percentBodyWeight,
  };
}

/**
 * Recommends optimal initial traction angle based on symptoms & goal
 */
export function recommendIncline(condition) {
  switch (condition) {
    case 'hernia':
      return {
        startAngle: 12,
        maxAngle: 22,
        label: 'Acute Herniated / Bulging Disc (L4-S1)',
        description: 'Gentle traction to widen intervertebral space without triggering protective muscle spasms.',
        durationMin: 10,
      };
    case 'sciatica':
      return {
        startAngle: 15,
        maxAngle: 25,
        label: 'Sciatica & Pinched Nerve Relief',
        description: 'Unloads lumbar nerve root exits, restoring blood circulation and reducing radiating pain.',
        durationMin: 12,
      };
    case 'athlete':
      return {
        startAngle: 22,
        maxAngle: 35,
        label: 'Athletic Recovery (Post-Deadlifts/Squats)',
        description: 'Reverses compressive disc shrinkage from heavy axial loads and releases tight lats/erectors.',
        durationMin: 15,
      };
    case 'pediatric':
    case 'scoliosis':
      return {
        startAngle: 8,
        maxAngle: 15,
        label: 'Pediatric Posture, Scoliosis & Growth (Ages 3–15)',
        description: 'Gentle unweighting of epiphyseal growth plates with 100% bilateral symmetry and rhythmic music ("lying-down dancing").',
        durationMin: 8,
      };
    case 'posture':
    default:
      return {
        startAngle: 18,
        maxAngle: 28,
        label: 'Desk Worker Posture & Thoracic Mobility',
        description: 'Re-aligns spinal curves, stretches tight pecs, and decompresses thoracic and lumbar spine.',
        durationMin: 10,
      };
  }
}

/**
 * Determines which board model fits the user's physique
 */
export function recommendBoardModel(weightLbs, heightInches) {
  if (weightLbs > 210 || heightInches > 77) {
    return {
      modelId: 'evminov-wide',
      modelName: 'Evminov Wide Heavy-Duty Board',
      reason: 'Recommended for users over 6\'5" or weighing 210+ lbs for maximum stability and shoulder width.',
    };
  }
  return {
    modelId: 'evminov-standard',
    modelName: 'Evminov Pro-Traction Board (Standard)',
    reason: 'Ideal for users up to 6\'4" and 210 lbs. Includes patented Glisson neck traction loop.',
  };
}
