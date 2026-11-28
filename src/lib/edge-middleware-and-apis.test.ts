import { describe, it, expect } from "vitest";
import {
  canonicalizePathname,
  convertHtmlToMarkdown,
  localizeDiscoveryText,
  prefersMarkdown,
} from "../../functions/_middleware";
import { queryEvminovKnowledge } from "../../functions/api/ask";
import { escapeHtml } from "../../functions/api/submit-order";

describe("Cloudflare Edge Middleware, NLWeb & Security Helpers", () => {
  it("canonicalizes legacy /en/, /blog/, /backbrush and missing slashes in 1 hop", () => {
    expect(canonicalizePathname("/en/")).toBe("/");
    expect(canonicalizePathname("/en/products/standard-pine-board")).toBe(
      "/products/2-piece-folding-board/"
    );
    expect(canonicalizePathname("/blog/inversion-table-dangers-and-safe-alternatives")).toBe(
      "/guides/inversion-table-dangers-and-safe-alternatives/"
    );
    expect(canonicalizePathname("/backbrush")).toBe("/products/2-piece-folding-board/");
    expect(canonicalizePathname("/portal")).toBe("/portal/");
    expect(canonicalizePathname("/shipping/california")).toBe("/shipping/california/");
  });

  it("detects Markdown-for-Agents Accept preference accurately", () => {
    expect(prefersMarkdown("text/markdown")).toBe(true);
    expect(prefersMarkdown("text/markdown, text/html;q=0.8")).toBe(true);
    expect(prefersMarkdown("text/html, text/markdown;q=0.5")).toBe(false);
    expect(prefersMarkdown("text/html, application/xhtml+xml")).toBe(false);
  });

  it("strips layout chrome, decodes HTML entities, and appends region-aware AI Agent summary", () => {
    const mdUs = convertHtmlToMarkdown(
      `<html><body><header>NAV</header><main><h1>Evminov Board</h1><p>Safe <strong>low-angle</strong> traction &mdash; it&#x27;s head-up.</p><a href="/order/">Order</a><a href="#calc">Calc</a></main><footer>FOOT</footer></body></html>`,
      "https://evminovusa.com"
    );
    expect(mdUs).toContain("# Evminov Board");
    expect(mdUs).toContain("**low-angle**");
    expect(mdUs).toContain("it's head-up");
    expect(mdUs).toContain("[Order](/order/) [Calc](#calc)");
    expect(mdUs).not.toContain("NAV");
    expect(mdUs).toContain("https://evminovusa.com/order/");
    expect(mdUs).toContain("2026 Folding Models (USD)");

    const mdCa = convertHtmlToMarkdown(
      `<main><h1>Evminov Canada</h1></main>`,
      "https://evminovcanada.com"
    );
    expect(mdCa).toContain("https://evminovcanada.com/order/");
    expect(mdCa).toContain("support@evminovcanada.com");
    expect(mdCa).toContain("2026 Folding Models (CAD)");
  });

  it("localizes static discovery files (robots.txt, .well-known/*) dynamically for evminovcanada.com", () => {
    const robotsUs =
      "Agentmap: https://evminovusa.com/.well-known/ai-catalog.json\nSitemap: https://evminovusa.com/sitemap.xml";
    const robotsCa = localizeDiscoveryText(robotsUs, "evminovcanada.com");
    expect(robotsCa).toContain("https://evminovcanada.com/.well-known/ai-catalog.json");
    expect(robotsCa).toContain("https://evminovcanada.com/sitemap.xml");
    expect(robotsCa).not.toContain("evminovusa.com");
  });

  it("routes NLWeb queries to 2026 folding models, widths, 6 languages, and regional currencies", () => {
    const lifter = queryEvminovKnowledge("245 lb powerlifter deadlift recovery", "en");
    expect(lifter.recommendedSlug).toBe("3-piece-travel-board");
    expect(lifter.recommendedWidth).toBe("wide");
    expect(lifter.currency).toBe("USD");
    expect(lifter.directPrice).toBe(520);

    const renter = queryEvminovKnowledge("small apartment renter no drill stand", "es");
    expect(renter.recommendedSlug).toBe("2-piece-folding-board");
    expect(renter.recommendedAccessory).toContain("Ladder Stand");
    expect(renter.orderUrl).toContain("/es/order/");

    const piriformisDe = queryEvminovKnowledge(
      "piriformis syndrome vs sciatica self test",
      "de",
      "https://evminovcanada.com"
    );
    expect(piriformisDe.currency).toBe("CAD");
    expect(piriformisDe.guideUrl).toBe(
      "https://evminovcanada.com/de/guides/piriformis-syndrome-vs-sciatica-self-test-and-relief-guide/"
    );
    expect(piriformisDe.orderUrl).toContain("https://evminovcanada.com/de/order/");
  });

  it("escapes XSS payloads in order confirmation email HTML", () => {
    expect(escapeHtml(`<script>alert("xss")</script>`)).toBe(
      "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"
    );
  });
});
