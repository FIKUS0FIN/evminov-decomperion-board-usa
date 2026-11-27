#!/usr/bin/env node
import fs from "fs";
import https from "https";
import path from "path";

const HOST = "evminovusa.com";
const DEFAULT_KEY = "e7f4b29c1a8345d0b6e9c2f1a8d7304b";
const API_KEY = process.env.INDEXNOW_API_KEY || DEFAULT_KEY;
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const LOCAL_SITEMAP_PATH = path.resolve(process.cwd(), "out/sitemap.xml");

export function isIndexablePageUrl(rawUrl) {
  try {
    const u = new URL(rawUrl);
    if (u.hostname !== HOST || u.protocol !== "https:") return false;
    if (!u.pathname.endsWith("/")) return false;
    if (u.hash) return false;
    if (/\.[a-z0-9]{2,5}\/?$/i.test(u.pathname)) return false;
    for (const blocked of ["/_next/", "/api/", "/.well-known/", "/well-known/", "/en/"]) {
      if (u.pathname.toLowerCase().includes(blocked)) return false;
    }
    return true;
  } catch {
    return false;
  }
}

async function getSitemapXml() {
  if (fs.existsSync(LOCAL_SITEMAP_PATH)) {
    return fs.readFileSync(LOCAL_SITEMAP_PATH, "utf8");
  }
  return new Promise((resolve, reject) => {
    https.get(SITEMAP_URL, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

async function submitToIndexNow(urls) {
  const payload = JSON.stringify({
    host: HOST,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.indexnow.org",
        port: 443,
        path: "/indexnow",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () =>
          resolve({ statusCode: res.statusCode, statusMessage: res.statusMessage, data })
        );
      }
    );
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

async function main() {
  const xml = await getSitemapXml();
  const urls = Array.from(
    new Set([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim()).filter(isIndexablePageUrl))
  );
  console.log(`Submitting ${urls.length} canonical URLs to IndexNow for ${HOST}...`);
  if (!urls.length) return;
  const res = await submitToIndexNow(urls);
  console.log(`IndexNow response: ${res.statusCode} ${res.statusMessage}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) {
  main();
}
