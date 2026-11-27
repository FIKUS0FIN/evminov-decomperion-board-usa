interface Env {
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>;
  };
  WEB_BOT_AUTH_PRIVATE_KEY_D?: string;
  WEB_BOT_AUTH_PUBLIC_KEY_X?: string;
  WEB_BOT_AUTH_KEY_ID?: string;
}

const CANONICAL_HOST = "evminovusa.com";
const INDEXNOW_KEY = "e7f4b29c1a8345d0b6e9c2f1a8d7304b";

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
  "/backbrush": "/products/standard-pine-board/",
  "/shop": "/products/",
  "/store": "/products/",
  "/checkout": "/order/",
  "/contact": "/order/",
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

export function convertHtmlToMarkdown(html: string): string {
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
    .replace(/<strong\b[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
    .replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, "\n$1\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)")
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, "\n- $1")
    .replace(/<[^>]+>/g, "")
    .replaceAll("&nbsp;", " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replace(/\n\s*\n\s*\n/g, "\n\n")
    .trim();

  const agentBlock = [
    "",
    "---",
    "## AI Agent Summary & 1-Click Ordering (Evminov Spine Systems USA)",
    "- **Brand**: Evminov Spine Systems (Patented Since 1996 • US Patent 6,869,387 B2 • EU Patent EP 1 038 512 B1)",
    "- **US Hub**: 4525 San Fernando Rd, Unit H, Glendale, CA 91204 | **Phone**: `+1 (747) 306-0140` | **Email**: `support@evminovusa.com`",
    "- **Classification**: General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030) — 60-Day Home Trial, 10-Year Frame Warranty, Itemized HSA/FSA Receipt.",
    "- **Models**: Standard Solid ($450 direct / $595 CA Express) | 2-Piece Folding ($475 / $615) | 3-Piece Travel ($495 / $635) | Wide 330 lb ($500 / $635) | Select Alder ($525 / $665) | No-Drill Renter Stand ($275 / $345).",
    "- **1-Click Pre-Filled Order URL**: `https://evminovusa.com/order/?product={slug}&shipping={express|direct}&stand={0|1}&step=2#order-form`",
    "- **Agent APIs (EN/ES/FR/UK/RU)**: `GET /api/ask?q=...&lang={en|es|fr|uk|ru}` | `POST /api/mcp` | `POST /api/acp/checkout_sessions` | `POST /api/submit-order`",
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
    lowerPath === `/${INDEXNOW_KEY}.txt`
  ) {
    return "noindex, nofollow, noarchive";
  }
  return null;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname.toLowerCase();

  if (pathname.endsWith(".pdf")) {
    return next();
  }

  // Single-hop 301 canonicalization (only redirect host on production www host)
  let needsRedirect = false;
  if (url.hostname === `www.${CANONICAL_HOST}`) {
    url.hostname = CANONICAL_HOST;
    needsRedirect = true;
  }
  if (url.hostname === CANONICAL_HOST && url.protocol === "http:") {
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

  // Serve /.well-known/* reliably from /well-known/*
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
      const headers = new Headers(assetRes.headers);
      headers.set("Content-Type", getWellKnownContentType(subpath));
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Cache-Control", "public, max-age=3600");
      headers.set("Link", LINK_HEADERS);
      return new Response(assetRes.body, { status: 200, headers });
    }
  }

  // Ensure /robots.txt always carries Content-Signal and Agentmap
  if (pathname === "/robots.txt") {
    const res = await next();
    let text = res.ok ? await res.text() : "";
    if (!text.includes("Content-Signal:")) {
      text = `${text.trim()}\nContent-Signal: ai-train=yes, search=yes, ai-input=yes\n`;
    }
    if (!text.includes("Agentmap:")) {
      text = `${text.trim()}\nAgentmap: https://${CANONICAL_HOST}/.well-known/ai-catalog.json\n`;
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
    const markdown = convertHtmlToMarkdown(html);
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
