import { describe, it, expect } from "vitest";
import {
  canonicalizePathname,
  convertHtmlToMarkdown,
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

  it("strips layout chrome and appends AI Agent summary when converting HTML to Markdown", () => {
    const md = convertHtmlToMarkdown(
      `<html><body><header>NAV</header><main><h1>Evminov Board</h1><p>Safe <strong>low-angle</strong> traction.</p></main><footer>FOOT</footer></body></html>`
    );
    expect(md).toContain("# Evminov Board");
    expect(md).toContain("**low-angle**");
    expect(md).not.toContain("NAV");
    expect(md).toContain("https://evminovusa.com/order/");
  });

  it("routes NLWeb queries to the best-fit board & accessory", () => {
    const lifter = queryEvminovKnowledge("245 lb powerlifter deadlift recovery", "en");
    expect(lifter.recommendedSlug).toBe("wide-heavy-duty-board");

    const renter = queryEvminovKnowledge("small apartment renter no drill stand", "es");
    expect(renter.recommendedSlug).toBe("2-piece-folding-board");
    expect(renter.recommendedAccessory).toContain("Ladder Stand");
    expect(renter.orderUrl).toContain("/es/order/");
  });

  it("escapes XSS payloads in order confirmation email HTML", () => {
    expect(escapeHtml(`<script>alert("xss")</script>`)).toBe(
      "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"
    );
  });
});
