interface Env {
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>;
  };
  WEB_BOT_AUTH_PRIVATE_KEY_D?: string;
  WEB_BOT_AUTH_PUBLIC_KEY_X?: string;
  WEB_BOT_AUTH_KEY_ID?: string;
}

const CANONICAL_HOST = "evminovusa.com";
const SUPPORTED_HOSTS = new Set(["evminovusa.com", "evminovcanada.com"]);
const TRUSTED_ORIGINS = new Set([
  "https://evminovusa.com",
  "https://www.evminovusa.com",
  "https://evminovcanada.com",
  "https://www.evminovcanada.com",
]);
const INDEXNOW_KEY = "e7f4b29c1a8345d0b6e9c2f1a8d7304b";

function isTrustedOrigin(origin: string | null): origin is string {
  if (!origin) return false;
  if (TRUSTED_ORIGINS.has(origin)) return true;
  return /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin);
}

const LINK_HEADERS = [
  '</.well-known/api-catalog>; rel="api-catalog"',
  '</auth.md>; rel="service-doc"',
  '</.well-known/mcp/server-card.json>; rel="mcp-server-card"',
  '</.well-known/agent-card.json>; rel="agent-card"',
  '</.well-known/agent.json>; rel="agent"',
  '</.well-known/agent-skills/index.json>; rel="agent-skills"',
  '</.well-known/ai-catalog.json>; rel="ai-catalog"',
  '</.well-known/acp.json>; rel="acp-discovery"',
  '</.well-known/ucp>; rel="ucp-discovery"',
  '</llms.txt>; rel="llms-txt"',
].join(", ");

const EXACT_REDIRECTS: Record<string, string> = {
  "/index.html": "/",
  "/en": "/",
  "/blog": "/guides/",
  "/inversion-table-alternative": "/compare/evminov-vs-inversion-table/",
  "/herniated-disc-relief": "/conditions/herniated-disc-l4-l5/",
  "/athlete-spine-recovery": "/conditions/athlete-spine-recovery/",
  "/sciatica-relief": "/conditions/sciatica-relief/",
  "/daily-spine-stick": "/conditions/desk-worker-posture/",
  "/backbrush": "/products/2-piece-folding-board/",
  "/products/standard-pine-board": "/products/2-piece-folding-board/",
  "/products/wide-heavy-duty-board": "/products/2-piece-folding-board/",
  "/products/select-alder-board": "/products/2-piece-folding-board/",
  "/products/free-standing-stand": "/products/2-piece-folding-board/",
  "/shop": "/products/",
  "/store": "/products/",
  "/checkout": "/order/",
  "/contact": "/order/",
  "/wholesale": "/clinics/",
  "/b2b": "/clinics/",
  "/partners": "/clinics/",
  "/faq": "/#faq",
  "/guides/remote-worker-spine-hygiene-posture-stick":
    "/guides/remote-worker-spine-hygiene-posture-reset/",
};

export function canonicalizePathname(rawPathname: string): string {
  let path = rawPathname;

  if (path.toLowerCase().endsWith("/index.html")) {
    path = path.slice(0, -"/index.html".length) || "/";
  }

  const lowerCheck = path.toLowerCase();
  const isExempt =
    path.startsWith("/_next/static/") ||
    lowerCheck.startsWith("/api/") ||
    lowerCheck.startsWith("/.well-known/") ||
    lowerCheck.startsWith("/well-known/") ||
    (/\.[a-zA-Z0-9]{2,5}$/.test(path) && !/\.html?$/i.test(path));
  if (isExempt) return path;

  try {
    path = decodeURIComponent(path);
  } catch {
    // keep raw path
  }

  if (/\.html?$/i.test(path)) {
    path = path.replace(/\.html?$/i, "") || "/";
  }

  path = path
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/\/+/g, "/");

  // English is root `/` — strip redundant /en/ prefix in 1 hop
  if (path === "/en" || path === "/en/") return "/";
  if (path.startsWith("/en/")) {
    path = path.slice(3);
  }

  const withoutSlash =
    path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;

  if (EXACT_REDIRECTS[withoutSlash]) {
    return EXACT_REDIRECTS[withoutSlash];
  }

  // Legacy /blog/* -> /guides/* (single hop)
  if (withoutSlash.startsWith("/blog/")) {
    const slug = withoutSlash.slice("/blog/".length);
    const mapped =
      slug === "remote-worker-spine-hygiene-posture-stick"
        ? "remote-worker-spine-hygiene-posture-reset"
        : slug;
    return `/guides/${mapped}/`;
  }

  if (!path.endsWith("/")) {
    path = `${path}/`;
  }
  return path;
}

export function prefersMarkdown(acceptHeader: string): boolean {
  const lower = acceptHeader.toLowerCase();
  if (!lower.includes("text/markdown")) return false;
  if (!lower.includes("text/html")) return true;

  let mdQ = 1.0;
  let htmlQ = 1.0;
  for (const part of lower.split(",").map((p) => p.trim())) {
    if (part.startsWith("text/markdown")) {
      const m = part.match(/;q=([0-9.]+)/);
      if (m) mdQ = parseFloat(m[1]);
    } else if (part.startsWith("text/html")) {
      const m = part.match(/;q=([0-9.]+)/);
      if (m) htmlQ = parseFloat(m[1]);
    }
  }
  return mdQ >= htmlQ;
}

export function localizeDiscoveryText(text: string, activeHost: string): string {
  if (activeHost !== "evminovcanada.com") return text;
  return text
    .replaceAll("https://evminovusa.com", "https://evminovcanada.com")
    .replaceAll("did:web:evminovusa.com", "did:web:evminovcanada.com")
    .replaceAll("support@evminovusa.com", "support@evminovcanada.com")
    .replaceAll("orders@evminovusa.com", "orders@evminovcanada.com")
    .replaceAll("Evminov Spine Systems USA", "Evminov Spine Systems Canada")
    .replaceAll("evminovusa.com", "evminovcanada.com");
}

export function convertHtmlToMarkdown(
  html: string,
  origin = "https://evminovusa.com"
): string {
  const isCanada = origin.toLowerCase().includes("evminovcanada.com");
  const normalizedOrigin = isCanada ? "https://evminovcanada.com" : "https://evminovusa.com";

  let content = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, "");

  const mainMatch = content.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    content = mainMatch[1];
  } else {
    const bodyMatch = content.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) content = bodyMatch[1];
  }

  content = content
    .replace(/<header\b[^>]*>([\s\S]*?)<\/header>/gi, "")
    .replace(/<footer\b[^>]*>([\s\S]*?)<\/footer>/gi, "")
    .replace(/<nav\b[^>]*>([\s\S]*?)<\/nav>/gi, "")
    .replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, "\n# $1\n")
    .replace(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, "\n## $1\n")
    .replace(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi, "\n### $1\n")
    .replace(/<h4\b[^>]*>([\s\S]*?)<\/h4>/gi, "\n#### $1\n")
    .replace(/<strong\b[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
    .replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, "\n$1\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, " [$2]($1) ")
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, "\n- $1")
    .replace(/<\/(div|section|article|tr|td|th|dt|dd|blockquote)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replaceAll("&nbsp;", " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&#x27;", "'")
    .replaceAll("&#x2F;", "/")
    .replaceAll("&mdash;", "—")
    .replaceAll("&ndash;", "–")
    .replaceAll("&rsquo;", "'")
    .replaceAll("&ldquo;", '"')
    .replaceAll("&rdquo;", '"')
    .replace(/[ \t]{2,}/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const pricingLine = isCanada
    ? "- **2026 Folding Models (CAD)**: 3-Piece Folding 230–245 cm ($445 Direct / $545 Express Std 26 cm; $500 / $585 Wide 30 cm) | 2-Piece Spine Toothbrush ($435 / $540 Std; $495 / $580 Wide) | 6 Official Accessories: 4-Pc Ladder Stand ($275), Hooks ($35), Carry Bags ($105), Wall Panels ($155/$175)."
    : "- **2026 Folding Models (USD)**: 3-Piece Folding 230–245 cm ($495 Direct / $635 Express Std 26 cm; $520 / $660 Wide 30 cm) | 2-Piece Spine Toothbrush ($475 / $615 Std; $500 / $640 Wide) | 6 Official Accessories: 4-Pc Ladder Stand ($275), Hooks ($35), Carry Bags ($105), Wall Panels ($155/$175).";

  const agentBlock = [
    "",
    "---",
    `## AI Agent Summary & 1-Click Ordering (${isCanada ? "Evminov Spine Systems Canada" : "Evminov Spine Systems USA"})`,
    "- **Brand**: Evminov Spine Systems (Patented Since 1996 • US Patent 6,869,387 B2 • EU Patent EP 1 038 512 B1)",
    `- **Support (WhatsApp Primary)**: \`+1 (747) 306-0140\` (https://wa.me/17473060140) | **Email**: \`${isCanada ? "support@evminovcanada.com" : "support@evminovusa.com"}\``,
    `- **Classification**: General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030) — ~2 weeks tracked international courier delivery, 60-Day Home Trial, 1-Year Manufacturer Warranty, Itemized ${isCanada ? "Extended Health / CRA" : "HSA/FSA (with LMN)"} Receipt.`,
    pricingLine,
    `- **1-Click Pre-Filled Order URL**: \`${normalizedOrigin}/order/?product={3-piece-travel-board|2-piece-folding-board}&width={standard|wide}&step=1#order-form\``,
    "- **Agent APIs (6 Languages: EN/ES/FR/DE/UK/RU)**: `GET /api/ask?q=...&lang={en|es|fr|de|uk|ru}` | `POST /api/chat` | `POST /api/mcp` | `GET/POST /api/acp/checkout_sessions` | `POST /api/submit-order`",
  ].join("\n");

  return `${content}\n${agentBlock}`;
}

function getWellKnownContentType(subpath: string): string {
  if (subpath === "api-catalog") return "application/linkset+json; charset=utf-8";
  if (subpath.endsWith(".md")) return "text/markdown; charset=utf-8";
  if (subpath.endsWith(".txt")) return "text/plain; charset=utf-8";
  return "application/json; charset=utf-8";
}

function getRobotsTag(lowerPath: string, rawPath: string): string | null {
  if (lowerPath.includes("/nextimageexportoptimizer/") || rawPath.endsWith(".WEBP")) {
    return "noindex, noimageindex";
  }
  if (
    lowerPath.startsWith("/_next/static/") ||
    lowerPath.endsWith(".woff") ||
    lowerPath.endsWith(".woff2")
  ) {
    return "noindex, noarchive";
  }
  if (
    lowerPath === "/next-image-export-optimizer-hashes.json" ||
    lowerPath === `/${INDEXNOW_KEY}.txt` ||
    lowerPath === "/admin" ||
    lowerPath.startsWith("/admin/")
  ) {
    return "noindex, nofollow, noarchive";
  }
  return null;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname.toLowerCase();
  const activeHost = SUPPORTED_HOSTS.has(url.hostname)
    ? url.hostname
    : CANONICAL_HOST;
  const activeOrigin = `https://${activeHost}`;

  if (pathname.endsWith(".pdf")) {
    return next();
  }

  if (pathname.startsWith("/api/")) {
    const reqOrigin = request.headers.get("Origin");
    const trusted = isTrustedOrigin(reqOrigin);

    if (request.method === "OPTIONS" && trusted) {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": reqOrigin,
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Max-Age": "86400",
          Vary: "Origin",
        },
      });
    }

    const apiRes = await next();
    const apiHeaders = new Headers(apiRes.headers);
    apiHeaders.set("X-Content-Type-Options", "nosniff");
    apiHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
    if (!apiHeaders.has("Cache-Control")) {
      apiHeaders.set("Cache-Control", "no-store");
    }
    if (trusted && !apiHeaders.has("Access-Control-Allow-Origin")) {
      apiHeaders.set("Access-Control-Allow-Origin", reqOrigin);
      apiHeaders.set("Access-Control-Allow-Credentials", "true");
      const existingVary = apiHeaders.get("Vary");
      if (!existingVary) {
        apiHeaders.set("Vary", "Origin");
      } else if (!existingVary.toLowerCase().includes("origin")) {
        apiHeaders.set("Vary", `${existingVary}, Origin`);
      }
    }
    return new Response(apiRes.body, {
      status: apiRes.status,
      statusText: apiRes.statusText,
      headers: apiHeaders,
    });
  }

  // Single-hop 301 canonicalization for both evminovusa.com and evminovcanada.com
  let needsRedirect = false;
  for (const host of SUPPORTED_HOSTS) {
    if (url.hostname === `www.${host}`) {
      url.hostname = host;
      needsRedirect = true;
      break;
    }
  }
  if (SUPPORTED_HOSTS.has(url.hostname) && url.protocol === "http:") {
    url.protocol = "https:";
    needsRedirect = true;
  }

  const canonicalPath = canonicalizePathname(url.pathname);
  if (canonicalPath !== url.pathname) {
    if (canonicalPath.includes("#")) {
      const [p, hash] = canonicalPath.split("#");
      url.pathname = p;
      url.hash = `#${hash}`;
    } else {
      url.pathname = canonicalPath;
    }
    needsRedirect = true;
  }

  if (needsRedirect) {
    return new Response(null, {
      status: 301,
      headers: {
        Location: url.toString(),
        "Cache-Control": "public, max-age=31536000",
      },
    });
  }

  // Serve /.well-known/* reliably from /well-known/* with dynamic US/Canada domain localization
  if (
    url.pathname.startsWith("/.well-known/") ||
    url.pathname.startsWith("/well-known/")
  ) {
    const subpath = url.pathname
      .replace(/^\/\.?well-known\//, "")
      .replace(/\/$/, "");
    const assetUrl = new URL(`/well-known/${subpath}`, request.url);
    const assetRes = await context.env.ASSETS.fetch(assetUrl);
    if (assetRes.ok) {
      const rawText = await assetRes.text();
      const localized = localizeDiscoveryText(rawText, activeHost);
      const headers = new Headers(assetRes.headers);
      headers.set("Content-Type", getWellKnownContentType(subpath));
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Cache-Control", "public, max-age=3600");
      headers.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
      headers.set("Link", LINK_HEADERS);
      headers.delete("Content-Length");
      return new Response(localized, { status: 200, headers });
    }
  }

  // Serve /openapi.json and /auth.md with dynamic US/Canada domain localization
  if (pathname === "/openapi.json" || pathname === "/auth.md") {
    const res = await next();
    if (res.ok) {
      const rawText = await res.text();
      const localized = localizeDiscoveryText(rawText, activeHost);
      const headers = new Headers(res.headers);
      headers.set(
        "Content-Type",
        pathname.endsWith(".json")
          ? "application/json; charset=utf-8"
          : "text/markdown; charset=utf-8"
      );
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Cache-Control", "public, max-age=3600");
      headers.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
      headers.set("Link", LINK_HEADERS);
      headers.delete("Content-Length");
      return new Response(localized, { status: 200, headers });
    }
  }

  // Serve /llms.txt and /llms-full.txt with clean AI discovery headers
  if (pathname === "/llms.txt" || pathname === "/llms-full.txt") {
    const res = await next();
    if (res.ok) {
      const headers = new Headers(res.headers);
      headers.set("Content-Type", "text/markdown; charset=utf-8");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Cache-Control", "public, max-age=3600");
      headers.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
      headers.set("Link", LINK_HEADERS);
      return new Response(res.body, { status: 200, headers });
    }
  }

  // Ensure /robots.txt always carries region-correct Sitemap, Agentmap, and Content-Signal
  if (pathname === "/robots.txt") {
    const res = await next();
    let text = res.ok ? await res.text() : "";
    text = localizeDiscoveryText(text, activeHost);
    if (!text.includes("Content-Signal:")) {
      text = `${text.trim()}\nContent-Signal: ai-train=yes, search=yes, ai-input=yes\n`;
    }
    if (!text.includes("Agentmap:")) {
      text = `${text.trim()}\nAgentmap: ${activeOrigin}/.well-known/ai-catalog.json\n`;
    }
    if (!text.includes("Sitemap:")) {
      text = `${text.trim()}\nSitemap: ${activeOrigin}/sitemap.xml\n`;
    }
    return new Response(text, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
        "Content-Signal": "ai-train=yes, search=yes, ai-input=yes",
        Link: LINK_HEADERS,
      },
    });
  }

  const accept = request.headers.get("accept") || "";
  const method = request.method;
  const robotsTag = getRobotsTag(pathname, url.pathname);

  const response = await next();
  const contentType = response.headers.get("content-type") || "";

  // Markdown-for-Agents negotiation
  if (
    (method === "GET" || method === "HEAD") &&
    prefersMarkdown(accept) &&
    contentType.toLowerCase().includes("text/html")
  ) {
    const html = await response.text();
    const markdown = convertHtmlToMarkdown(html, activeOrigin);
    const words = markdown.split(/\s+/).filter(Boolean).length;
    const tokens = Math.ceil(words * 1.3);

    const headers = new Headers(response.headers);
    headers.set("Content-Type", "text/markdown; charset=utf-8");
    headers.set("x-markdown-tokens", String(tokens));
    headers.set("Vary", "Accept");
    headers.set("Link", LINK_HEADERS);
    headers.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
    headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    if (robotsTag) headers.set("X-Robots-Tag", robotsTag);

    return new Response(method === "HEAD" ? null : markdown, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  const newHeaders = new Headers(response.headers);
  newHeaders.set("Link", LINK_HEADERS);
  if (contentType.toLowerCase().includes("text/html")) {
    newHeaders.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
  }
  newHeaders.set("X-Content-Type-Options", "nosniff");
  newHeaders.set("X-Frame-Options", "SAMEORIGIN");
  newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
  newHeaders.set(
    "Permissions-Policy",
    "camera=(), microphone=(self), geolocation=(), payment=(), usb=()"
  );
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/images/")
  ) {
    newHeaders.set("Cache-Control", "public, max-age=31536000, immutable");
  }
  if (robotsTag) newHeaders.set("X-Robots-Tag", robotsTag);

  const vary = response.headers.get("vary");
  if (vary) {
    if (!vary.toLowerCase().includes("accept")) {
      newHeaders.set("Vary", `${vary}, Accept`);
    }
  } else {
    newHeaders.set("Vary", "Accept");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
};
