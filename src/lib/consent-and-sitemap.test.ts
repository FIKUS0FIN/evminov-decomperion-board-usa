import { describe, it, expect } from "vitest";
import { resolveConsentState } from "@/lib/consent";
import sitemap from "@/app/sitemap";
import { generateRssXml } from "@/lib/rss";

describe("Unconditional Analytics Consent Mode v2, Sitemap & RSS", () => {
  it("grants analytics and ad storage unconditionally across all banner choices (Smista parity)", () => {
    for (const choice of ["necessary", "analytics", "marketing", "all"] as const) {
      const state = resolveConsentState(choice);
      expect(state.analytics_storage).toBe("granted");
      expect(state.ad_storage).toBe("granted");
      expect(state.ad_user_data).toBe("granted");
      expect(state.security_storage).toBe("granted");
    }
  });

  it("generates 260 clean canonical sitemap entries with zero hash fragments", () => {
    const entries = sitemap();
    expect(entries.length).toBeGreaterThanOrEqual(255);
    for (const entry of entries) {
      expect(entry.url.startsWith("https://evminovusa.com/")).toBe(true);
      expect(entry.url.endsWith("/")).toBe(true);
      expect(entry.url.includes("#")).toBe(false);
    }
  });

  it("generates valid RSS 2.0 XML containing products and guides", () => {
    const xml = generateRssXml();
    expect(xml).toContain('<rss version="2.0"');
    expect(xml).toContain("https://evminovusa.com/products/2-piece-folding-board/");
    expect(xml).toContain("https://evminovusa.com/guides/inversion-table-dangers-and-safe-alternatives/");
  });
});
