import { describe, it, expect } from "vitest";
import { resolveConsentState } from "@/lib/consent";
import sitemap from "@/app/sitemap";
import { generateRssXml } from "@/lib/rss";
import { GET as getMerchantFeed } from "@/app/merchant-feed.xml/route";
import { getProductPrice, OFFICIAL_ACCESSORIES, PRODUCTS } from "@/data/products";

describe("Unconditional Analytics Consent Mode v2, Sitemap, RSS & Merchant Feed", () => {
  it("grants analytics and ad storage unconditionally across all banner choices (Smista parity)", () => {
    for (const choice of ["necessary", "analytics", "marketing", "all"] as const) {
      const state = resolveConsentState(choice);
      expect(state.analytics_storage).toBe("granted");
      expect(state.ad_storage).toBe("granted");
      expect(state.ad_user_data).toBe("granted");
      expect(state.security_storage).toBe("granted");
    }
  });

  it("generates 280+ clean canonical sitemap entries with zero hash fragments", () => {
    const entries = sitemap();
    expect(entries.length).toBeGreaterThanOrEqual(280);
    for (const entry of entries) {
      expect(entry.url.startsWith("https://evminovusa.com/")).toBe(true);
      expect(entry.url.endsWith("/")).toBe(true);
      expect(entry.url.includes("#")).toBe(false);
    }
  });

  it("generates valid RSS 2.0 XML containing products and 2026 guides", () => {
    const xml = generateRssXml();
    expect(xml).toContain('<rss version="2.0"');
    expect(xml).toContain("https://evminovusa.com/products/2-piece-folding-board/");
    expect(xml).toContain("https://evminovusa.com/guides/best-home-spinal-decompression-devices-2026-guide/");
  });

  it("generates valid Google Merchant XML feed with 4 board variants + 6 official accessories", async () => {
    const res = await getMerchantFeed();
    expect(res.status).toBe(200);
    const xml = await res.text();
    const itemCount = (xml.match(/<item>/g) || []).length;
    expect(itemCount).toBe(PRODUCTS.length * 2 + OFFICIAL_ACCESSORIES.length);
    expect(xml).toContain("30CM");
    expect(xml).toContain("EV-STAND-4PC-123");
    expect(xml).toContain("1-Year");
  });

  it("computes accurate Standard 26 cm and Reinforced Wide 30 cm pricing", () => {
    const threePiece = PRODUCTS.find((p) => p.slug === "3-piece-travel-board")!;
    const twoPiece = PRODUCTS.find((p) => p.slug === "2-piece-folding-board")!;
    expect(getProductPrice(threePiece, "standard", "direct")).toBe(495);
    expect(getProductPrice(threePiece, "wide", "direct")).toBe(520);
    expect(getProductPrice(twoPiece, "standard", "direct")).toBe(475);
    expect(getProductPrice(twoPiece, "wide", "direct")).toBe(500);
    expect(OFFICIAL_ACCESSORIES).toHaveLength(6);
  });
});
