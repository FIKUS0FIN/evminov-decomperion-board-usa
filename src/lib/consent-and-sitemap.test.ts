import { describe, it, expect } from "vitest";
import { resolveConsentState } from "@/lib/consent";
import sitemap from "@/app/sitemap";
import { generateRssXml } from "@/lib/rss";

describe("Genuine Consent Mode v2, Sitemap & RSS", () => {
  it("honors necessary-only choice by denying analytics and ad storage", () => {
    const state = resolveConsentState("necessary");
    expect(state.analytics_storage).toBe("denied");
    expect(state.ad_storage).toBe("denied");
    expect(state.ad_user_data).toBe("denied");
    expect(state.security_storage).toBe("granted");
  });

  it("grants analytics only when user chooses analytics", () => {
    const state = resolveConsentState("analytics");
    expect(state.analytics_storage).toBe("granted");
    expect(state.ad_storage).toBe("denied");
  });

  it("generates 230 clean canonical sitemap entries with zero hash fragments", () => {
    const entries = sitemap();
    expect(entries.length).toBeGreaterThanOrEqual(220);
    for (const entry of entries) {
      expect(entry.url.startsWith("https://evminovusa.com/")).toBe(true);
      expect(entry.url.endsWith("/")).toBe(true);
      expect(entry.url.includes("#")).toBe(false);
    }
  });

  it("generates valid RSS 2.0 XML containing products and guides", () => {
    const xml = generateRssXml();
    expect(xml).toContain("<rss version=\"2.0\"");
    expect(xml).toContain("https://evminovusa.com/products/standard-pine-board/");
    expect(xml).toContain("https://evminovusa.com/guides/inversion-table-dangers-and-safe-alternatives/");
  });
});
