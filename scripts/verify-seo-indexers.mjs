#!/usr/bin/env node
/**
 * Full-Site 5-Language SEO, Compliance, Schema & AI Indexer Verification Gate
 * Ported & upgraded from smistaelinstallatio for evminovusa.com.
 */

import fs from "fs";
import path from "path";

const CANONICAL_ORIGIN = "https://evminovusa.com";
const OUT_DIR = path.resolve(process.cwd(), "out");
const INDEXNOW_KEY = "e7f4b29c1a8345d0b6e9c2f1a8d7304b";

const args = process.argv.slice(2);
const liveFlagIndex = args.indexOf("--live");
const isLiveMode = liveFlagIndex !== -1;
const liveBaseUrl = (
  isLiveMode && args[liveFlagIndex + 1] && !args[liveFlagIndex + 1].startsWith("--")
    ? args[liveFlagIndex + 1]
    : process.env.LIVE_SITE_URL || CANONICAL_ORIGIN
).replace(/\/$/, "");

const errors = [];
const warnings = [];

const FORBIDDEN_PATTERNS = [
  { regex: /\bbackbrush\b/i, label: "Forbidden legacy name 'BackBrush'" },
  { regex: /dQw4w9WgXcQ/i, label: "Rickroll placeholder YouTube ID" },
  { regex: /555-7746|555-SPINE|555-38-89/i, label: "Fake 555 phone number" },
  { regex: /4242\s*4242\s*4242\s*4242/i, label: "Fake Stripe test card prompt" },
  { regex: /FDA\s+Listed\s*[—-]\s*Class\s+I/i, label: "Unverified FDA Class I Medical Device claim" },
  { regex: /HIPAA-Compliant/i, label: "Unverified HIPAA compliance claim" },
  { regex: /apex-root\.com/i, label: "Staging subdomain apex-root.com leak" },
];

function recordError(context, message) {
  errors.push(`[ERROR] [${context}] ${message}`);
}

function recordWarning(context, message) {
  warnings.push(`[WARN]  [${context}] ${message}`);
}

function extractLocsFromSitemapXml(xml) {
  const urls = [];
  const regex = /<loc>\s*(https?:\/\/[^<\s]+)\s*<\/loc>/gi;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1].trim());
  }
  return Array.from(new Set(urls));
}

function pathnameToOutHtmlPath(pathname) {
  const clean = pathname.replace(/^\/+|\/+$/g, "");
  if (!clean) return path.join(OUT_DIR, "index.html");
  return path.join(OUT_DIR, clean, "index.html");
}

function expectedLangForPath(pathname) {
  if (pathname === "/es/" || pathname.startsWith("/es/")) return "es";
  if (pathname === "/fr/" || pathname.startsWith("/fr/")) return "fr";
  if (pathname === "/uk/" || pathname.startsWith("/uk/")) return "uk";
  if (pathname === "/ru/" || pathname.startsWith("/ru/")) return "ru";
  return "en";
}

function auditHtml(html, expectedCanonical, relContext) {
  const parsed = new URL(expectedCanonical);
  const expectedLang = expectedLangForPath(parsed.pathname);

  // 1. Non-empty pre-rendered body
  if (html.includes('<div id="app"></div>')) {
    recordError(relContext, "Unrendered SPA shell <div id=\"app\"></div> detected");
  }

  // 2. <html lang="...">
  const langMatch = html.match(/<html[^>]*\blang=["']([^"']+)["']/i);
  if (!langMatch || !langMatch[1].toLowerCase().startsWith(expectedLang)) {
    recordError(relContext, `Expected <html lang="${expectedLang}">, found "${langMatch?.[1] || "missing"}"`);
  }

  // 3. <title> and <meta description>
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    recordError(relContext, "Missing or empty <title>");
  }
  const descMatch =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ||
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    recordError(relContext, "Missing or empty <meta name=\"description\">");
  }

  // 4. Exact canonical
  const canonicalMatch =
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
    html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  if (!canonicalMatch || canonicalMatch[1].trim() !== expectedCanonical) {
    recordError(relContext, `Canonical mismatch: expected "${expectedCanonical}", found "${canonicalMatch?.[1] || "missing"}"`);
  }

  // 5. Hreflang checks
  const isStatePage = /^\/shipping\/[^/]+\/$/.test(parsed.pathname);
  const requiredHreflangs = isStatePage
    ? ["en-US", "x-default"]
    : ["en-US", "es-US", "fr-CA", "uk-UA", "ru", "x-default"];

  for (const hl of requiredHreflangs) {
    const regex = new RegExp(
      `<link[^>]+hreflang=["']${hl}["'][^>]+href=["']([^"']+)["']|<link[^>]+href=["']([^"']+)["'][^>]+hreflang=["']${hl}["']`,
      "i"
    );
    const m = html.match(regex);
    if (!m) {
      recordError(relContext, `Missing hreflang="${hl}"`);
    } else {
      const href = (m[1] || m[2]).trim();
      if (!href.startsWith(CANONICAL_ORIGIN) || !href.endsWith("/")) {
        recordError(relContext, `Invalid hreflang="${hl}" URL: "${href}"`);
      }
    }
  }

  // 6. Single H1 presence
  const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1Matches.length === 0) {
    recordError(relContext, "Missing <h1> heading");
  }

  // 7. JSON-LD validity & no duplicate FAQPage schema
  const jsonLdRegex = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  let jsonLdCount = 0;
  let faqSchemaCount = 0;
  while ((m = jsonLdRegex.exec(html)) !== null) {
    jsonLdCount++;
    try {
      const parsedJson = JSON.parse(m[1].trim());
      if (parsedJson["@type"] === "FAQPage") faqSchemaCount++;
    } catch (err) {
      recordError(relContext, `Invalid JSON-LD: ${err.message}`);
    }
  }
  if (jsonLdCount === 0) recordWarning(relContext, "No JSON-LD found");
  if (faqSchemaCount > 1) {
    recordError(relContext, `Duplicate FAQPage JSON-LD detected (${faqSchemaCount} blocks)`);
  }
  if (/itemType=["']https?:\/\/schema\.org\/FAQPage["']/i.test(html) && faqSchemaCount >= 1) {
    recordError(relContext, "Conflicting Microdata + JSON-LD FAQPage on same page");
  }

  // 8. Declarative WebMCP form presence
  if (!html.includes('toolname="reserve_evminov_board"')) {
    recordError(relContext, 'Missing declarative WebMCP form toolname="reserve_evminov_board"');
  }

  // 9. WCAG alt tag check
  const imgRegex = /<img\b[^>]*>/gi;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(html)) !== null) {
    if (!/\balt\s*=/i.test(imgMatch[0])) {
      recordError(relContext, `<img> missing alt attribute: ${imgMatch[0].slice(0, 100)}`);
    }
  }

  // 10. Forbidden regressions / legal risks / placeholder leaks
  for (const rule of FORBIDDEN_PATTERNS) {
    if (rule.regex.test(html)) {
      recordError(relContext, `Forbidden pattern found: ${rule.label}`);
    }
  }
}

async function runStaticAudit() {
  console.log(`\n🔍 [Static SEO & Compliance Gate] Auditing ${OUT_DIR}...`);
  if (!fs.existsSync(OUT_DIR)) {
    recordError("StaticBuild", `Directory ${OUT_DIR} does not exist. Run "npm run build" first.`);
    return;
  }

  const requiredFiles = [
    "robots.txt",
    "sitemap.xml",
    "rss.xml",
    `${INDEXNOW_KEY}.txt`,
    "llms.txt",
    "llms-full.txt",
    "openapi.json",
    "auth.md",
    "manifest.json",
    "_headers",
    "_redirects",
    "404.html",
    "well-known/ai-catalog.json",
    "well-known/agent-card.json",
    "well-known/mcp/server-card.json",
    "well-known/acp.json",
    "well-known/ucp",
    "well-known/api-catalog",
  ];

  for (const rel of requiredFiles) {
    if (!fs.existsSync(path.join(OUT_DIR, rel))) {
      recordError("DiscoveryFiles", `Missing required file in out/: ${rel}`);
    }
  }

  const sitemapPath = path.join(OUT_DIR, "sitemap.xml");
  if (!fs.existsSync(sitemapPath)) return;

  const xml = fs.readFileSync(sitemapPath, "utf8");
  const urls = extractLocsFromSitemapXml(xml);

  if (urls.length < 180) {
    recordError("Sitemap", `Expected at least 180 canonical URLs in out/sitemap.xml, found ${urls.length}`);
  }

  for (const url of urls) {
    if (url.includes("#")) {
      recordError("Sitemap", `Invalid hash fragment URL in sitemap.xml: ${url}`);
      continue;
    }
    if (!url.startsWith(CANONICAL_ORIGIN)) {
      recordError("Sitemap", `Non-canonical origin in sitemap.xml: ${url}`);
      continue;
    }
    const parsed = new URL(url);
    const htmlPath = pathnameToOutHtmlPath(parsed.pathname);
    if (!fs.existsSync(htmlPath)) {
      recordError("SitemapToHtml", `Missing static HTML for ${url} (${htmlPath})`);
      continue;
    }
    const html = fs.readFileSync(htmlPath, "utf8");
    auditHtml(html, url, parsed.pathname);
  }

  console.log(`✅ Audited ${urls.length} generated static HTML pages across 5 locales + 50 US states.`);
}

async function runLiveAudit(baseUrl) {
  console.log(`\n🌐 [Live Crawler, MCP & Redirect Gate] Auditing ${baseUrl}...`);
  const robotsRes = await fetch(`${baseUrl}/robots.txt`);
  if (robotsRes.status !== 200) {
    recordError("LiveRobots", `GET /robots.txt returned ${robotsRes.status}`);
  }

  const sitemapRes = await fetch(`${baseUrl}/sitemap.xml`);
  if (sitemapRes.status !== 200) {
    recordError("LiveSitemap", `GET /sitemap.xml returned ${sitemapRes.status}`);
    return;
  }
  const urls = extractLocsFromSitemapXml(await sitemapRes.text());
  console.log(`📋 Verifying ${urls.length} live URLs...`);

  const CONCURRENCY = 12;
  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    const batch = urls.slice(i, i + CONCURRENCY);
    await Promise.all(
      batch.map(async (canonical) => {
        const parsed = new URL(canonical);
        const res = await fetch(`${baseUrl}${parsed.pathname}`, { redirect: "manual" });
        if (res.status !== 200) {
          recordError(`LivePage:${parsed.pathname}`, `Expected HTTP 200, got ${res.status}`);
        }
      })
    );
  }

  // Test Markdown-for-Agents
  const mdRes = await fetch(`${baseUrl}/`, {
    headers: { Accept: "text/markdown, text/html;q=0.8" },
  });
  if (mdRes.status !== 200 || !(mdRes.headers.get("content-type") || "").includes("text/markdown")) {
    recordError("LiveMarkdownForAgents", `Expected text/markdown, got ${mdRes.status}`);
  }

  // Test MCP initialize
  const mcpRes = await fetch(`${baseUrl}/api/mcp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "initialize", params: {} }),
  });
  if (mcpRes.status !== 200) {
    recordError("LiveMCP", `POST /api/mcp returned ${mcpRes.status}`);
  }

  // Test NLWeb /api/ask
  const askRes = await fetch(`${baseUrl}/api/ask?q=inversion+table+alternative&lang=en`);
  if (askRes.status !== 200) {
    recordError("LiveNLWeb", `GET /api/ask returned ${askRes.status}`);
  }

  // Test ACP
  const acpRes = await fetch(`${baseUrl}/api/acp/checkout_sessions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: [{ id: "standard-pine-board", quantity: 1 }] }),
  });
  if (acpRes.status !== 201) {
    recordError("LiveACP", `POST /api/acp/checkout_sessions returned ${acpRes.status}`);
  }
}

async function main() {
  if (isLiveMode) {
    await runLiveAudit(liveBaseUrl);
  } else {
    await runStaticAudit();
  }

  if (warnings.length > 0) {
    console.warn(`\n⚠️ ${warnings.length} warning(s):`);
    warnings.slice(0, 20).forEach((w) => console.warn(`  ${w}`));
  }

  if (errors.length > 0) {
    console.error(`\n❌ SEO Gate failed with ${errors.length} error(s):`);
    errors.slice(0, 50).forEach((e) => console.error(`  ${e}`));
    process.exit(1);
  }

  console.log("\n🎉 All Evminov 5-language SEO, Compliance, Schema & AI Discovery checks passed with 0 errors!");
}

main().catch((err) => {
  console.error("Unhandled error:", err);
  process.exit(1);
});
