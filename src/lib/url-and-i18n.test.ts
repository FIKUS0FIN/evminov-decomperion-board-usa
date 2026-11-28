import { describe, it, expect } from "vitest";
import { LOCALES } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import {
  buildPrefilledOrderUrl,
  getCanonicalUrl,
  getHreflangAlternates,
  getLocalizedHref,
} from "@/lib/url";
import { PRODUCTS } from "@/data/products";
import { GUIDES } from "@/data/guides";
import { GLOBAL_FAQS } from "@/data/faq";
import { CENTERS } from "@/data/heritage";
import { US_STATES } from "@/data/us-states";

describe("5-Language URL Routing & Single-Source-of-Truth Integrity", () => {
  it("routes English to root `/` and non-default locales to `/<lang>/`", () => {
    expect(getLocalizedHref("/products/", "en")).toBe("/products/");
    expect(getLocalizedHref("/products/", "es")).toBe("/es/products/");
    expect(getLocalizedHref("/products/", "fr")).toBe("/fr/products/");
    expect(getLocalizedHref("/products/", "de")).toBe("/de/products/");
    expect(getLocalizedHref("/products/", "uk")).toBe("/uk/products/");
    expect(getLocalizedHref("/products/", "ru")).toBe("/ru/products/");
    expect(getLocalizedHref("/es/guides/", "en")).toBe("/guides/");
  });

  it("builds exact canonical URLs and full 5-language hreflang maps", () => {
    expect(getCanonicalUrl("/", "en")).toBe("https://evminovusa.com/");
    expect(getCanonicalUrl("/order/", "uk")).toBe("https://evminovusa.com/uk/order/");

    const alts = getHreflangAlternates("/products/standard-pine-board/");
    expect(alts["en-US"]).toBe("https://evminovusa.com/products/standard-pine-board/");
    expect(alts["es-US"]).toBe("https://evminovusa.com/es/products/standard-pine-board/");
    expect(alts["fr-CA"]).toBe("https://evminovusa.com/fr/products/standard-pine-board/");
    expect(alts["de-DE"]).toBe("https://evminovusa.com/de/products/standard-pine-board/");
    expect(alts["uk-UA"]).toBe("https://evminovusa.com/uk/products/standard-pine-board/");
    expect(alts["ru"]).toBe("https://evminovusa.com/ru/products/standard-pine-board/");
    expect(alts["x-default"]).toBe("https://evminovusa.com/products/standard-pine-board/");
  });

  it("builds deep-linked pre-filled order URLs", () => {
    const url = buildPrefilledOrderUrl({
      lang: "es",
      product: "wide-heavy-duty-board",
      shipping: "express",
      stand: true,
      step: 2,
    });
    expect(url).toContain("/es/order/?");
    expect(url).toContain("product=wide-heavy-duty-board");
    expect(url).toContain("stand=1");
    expect(url).toContain("#order-form");
  });

  it("provides populated dictionaries for all 5 languages", () => {
    for (const loc of LOCALES) {
      const d = getDictionary(loc);
      expect(d.hero.title.length).toBeGreaterThan(10);
      expect(d.nav.orderNow.length).toBeGreaterThan(2);
      expect(d.footer.privacy.length).toBeGreaterThan(3);
    }
  });

  it("has all 50 US states and 6 verified products without legacy bugs", () => {
    expect(US_STATES).toHaveLength(50);
    expect(PRODUCTS).toHaveLength(2);
    const serialized = JSON.stringify({ PRODUCTS, GUIDES, GLOBAL_FAQS, CENTERS });
    expect(serialized).not.toMatch(/backbrush/i);
    expect(serialized).not.toMatch(/dQw4w9WgXcQ/i);
    expect(serialized).not.toMatch(/555-7746|555-SPINE|555-38-89/);
    expect(serialized).not.toMatch(/apex-root\.com/i);
    expect(serialized).not.toMatch(/FDA Listed/i);
    expect(serialized).not.toMatch(/HIPAA-Compliant/i);
  });
});
