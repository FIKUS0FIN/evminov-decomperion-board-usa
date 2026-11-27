import { describe, it, expect } from "vitest";
import {
  calculateHsaPrice,
  calculateTractionPhysics,
  formatKlarnaBiWeekly,
  formatUSD,
  recommendBoardModel,
  recommendIncline,
} from "@/lib/physics";

describe("Biomechanical Traction Physics & Pricing Utilities", () => {
  it("calculates positive net axial traction for standard adult at 18 deg", () => {
    const res = calculateTractionPhysics(180, 18);
    expect(res.angleDegrees).toBe(18);
    expect(res.netTractionLbs).toBeGreaterThan(35);
    expect(res.netTractionLbs).toBeLessThan(55);
    expect(res.percentBodyWeight).toBeGreaterThan(20);
  });

  it("recommends Wide Heavy-Duty board for users over 210 lbs or 6'4\"", () => {
    const heavy = recommendBoardModel(235, 72);
    expect(heavy.slug).toBe("wide-heavy-duty-board");

    const tall = recommendBoardModel(190, 78);
    expect(tall.slug).toBe("wide-heavy-duty-board");
  });

  it("recommends 3-Piece Travel board when portability is requested", () => {
    const travel = recommendBoardModel(170, 69, true);
    expect(travel.slug).toBe("3-piece-travel-board");
  });

  it("recommends Standard board for standard adults", () => {
    const std = recommendBoardModel(175, 70, false);
    expect(std.slug).toBe("standard-pine-board");
  });

  it("recommends gentle low-angle windows for hernia & pediatric goals", () => {
    expect(recommendIncline("hernia").startAngle).toBe(12);
    expect(recommendIncline("pediatric").startAngle).toBe(8);
    expect(recommendIncline("athlete").startAngle).toBe(22);
  });

  it("computes HSA/FSA 30% net price and bi-weekly Klarna splits accurately", () => {
    expect(calculateHsaPrice(450)).toBe(315);
    expect(formatUSD(450)).toBe("$450");
    expect(formatKlarnaBiWeekly(450)).toBe("$112.50");
  });
});
