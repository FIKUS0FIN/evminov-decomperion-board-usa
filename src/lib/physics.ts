import { SITE_CONFIG } from "@/lib/site-config";

export type ConditionGoal =
  | "hernia"
  | "sciatica"
  | "athlete"
  | "pediatric"
  | "posture";

export interface TractionPhysicsResult {
  angleDegrees: number;
  grossForceLbs: number;
  netTractionLbs: number;
  percentBodyWeight: number;
  estimatedDiscUnloadingPct: number;
}

export interface InclineRecommendation {
  goal: ConditionGoal;
  startAngle: number;
  maxAngle: number;
  label: string;
  description: string;
  durationMin: number;
}

export interface BoardSizeRecommendation {
  slug: string;
  width: "standard" | "wide";
  modelName: string;
  reason: string;
}

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

export function formatKlarnaBiWeekly(amount: number): string {
  const installment = amount / 4;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(installment);
}

export function calculateHsaPrice(amount: number): number {
  return Math.round(amount * (1 - SITE_CONFIG.compliance.hsaEstimatedSavingsRate));
}

export function lbsToKg(lbs: number): number {
  return Math.round(lbs * 0.45359237);
}

export function inchesToFeet(inches: number): string {
  const feet = Math.floor(inches / 12);
  const remaining = inches % 12;
  return `${feet}'${remaining}"`;
}

export function inchesToCm(inches: number): number {
  return Math.round(inches * 2.54);
}

/**
 * Calculates spinal traction physics along the Evminov inclined pine plane.
 * F_net = max(0, W * sin(theta) - W * cos(theta) * mu), where mu = 0.08 (lacquered Carpathian pine).
 */
export function calculateTractionPhysics(
  weightLbs: number,
  angleDegrees: number
): TractionPhysicsResult {
  const clampedWeight = Math.max(40, Math.min(400, weightLbs));
  const clampedAngle = Math.max(6, Math.min(45, angleDegrees));
  const rad = (clampedAngle * Math.PI) / 180;
  const sinForce = clampedWeight * Math.sin(rad);
  const frictionCoef = 0.08;
  const friction = clampedWeight * Math.cos(rad) * frictionCoef;
  const netTractionLbs = Math.max(0, Math.round(sinForce - friction));
  const percentBodyWeight = Math.round((netTractionLbs / clampedWeight) * 100);
  const estimatedDiscUnloadingPct = Math.min(
    85,
    Math.max(45, Math.round(50 + clampedAngle * 1.15))
  );

  return {
    angleDegrees: clampedAngle,
    grossForceLbs: Math.round(sinForce),
    netTractionLbs,
    percentBodyWeight,
    estimatedDiscUnloadingPct,
  };
}

export function recommendIncline(goal: ConditionGoal): InclineRecommendation {
  switch (goal) {
    case "hernia":
      return {
        goal,
        startAngle: 12,
        maxAngle: 22,
        label: "Lumbar Disc Comfort & L4–S1 Unloading",
        description:
          "Gentle low-angle traction to ease axial disc pressure smoothly without triggering protective muscle guarding.",
        durationMin: 10,
      };
    case "sciatica":
      return {
        goal,
        startAngle: 15,
        maxAngle: 25,
        label: "Sciatic Nerve & Lower Back Mobility",
        description:
          "Gradual lower-back elongation paired with slow breathing and light pelvic mobility exercises.",
        durationMin: 12,
      };
    case "athlete":
      return {
        goal,
        startAngle: 22,
        maxAngle: 35,
        label: "Athletic Post-Workout Spine Recovery",
        description:
          "Unloads axial spine fatigue after heavy deadlifts, squats, running, or combat sports training.",
        durationMin: 15,
      };
    case "pediatric":
      return {
        goal,
        startAngle: 8,
        maxAngle: 15,
        label: "Youth Posture & Symmetrical Alignment (Ages 6+)",
        description:
          "Ultra-gentle symmetrical routines under adult supervision to counter backpack slump and screen posture.",
        durationMin: 8,
      };
    case "posture":
    default:
      return {
        goal: "posture",
        startAngle: 16,
        maxAngle: 28,
        label: "Desk Worker Posture & Tech-Neck Relief",
        description:
          "Reverses hours of seated compression, opens rounded shoulders, and supports cervical traction with the Glisson Loop.",
        durationMin: 10,
      };
  }
}

export function recommendBoardModel(
  weightLbs: number,
  heightInches: number,
  needsPortability = false
): BoardSizeRecommendation {
  if (weightLbs > 210 || heightInches > 76) {
    return {
      slug: needsPortability ? "3-piece-travel-board" : "2-piece-folding-board",
      width: "wide",
      modelName: needsPortability
        ? "3-Piece Folding Evminov Board — Wide Heavy-Duty (330 lbs)"
        : "2-Piece Folding Evminov Board — Wide Heavy-Duty (With Stand • 330 lbs)",
      reason:
        "Rated up to 330 lbs and 6'9\" with a wider reinforced deck and carriage. Available in Natural Warm Amber Alder or Dark Walnut Pine.",
    };
  }
  if (needsPortability) {
    return {
      slug: "3-piece-travel-board",
      width: "standard",
      modelName: "3-Piece Folding Evminov Board (Travel & Trunk)",
      reason:
        "Breaks down into ~31\" segments for closets or car trunks (up to 220 lbs, 6'4\"). Available with or without support stand in Alder or Dark Walnut Pine.",
    };
  }
  return {
    slug: "2-piece-folding-board",
    width: "standard",
    modelName: "2-Piece Folding Evminov Board (Home Storage • With Stand)",
    reason:
      "Ships complete with support stand and free Glisson Cervical Loop (up to 220 lbs, 6'4\"). Available in Natural Warm Amber Alder or Dark Walnut Pine.",
  };
}
