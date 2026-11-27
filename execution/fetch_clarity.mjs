#!/usr/bin/env node
/**
 * Microsoft Clarity Live Insights Exporter for evminovusa.com
 * Respects Clarity's 10 API calls/day quota and saves normalized JSON to site-stats/clarity/.
 */
import fs from "fs";
import path from "path";

const TOKEN = process.env.CLARITY_API_TOKEN;
const OUT_DIR = path.resolve(process.cwd(), "site-stats/clarity");

if (!TOKEN) {
  console.error("Missing CLARITY_API_TOKEN environment variable.");
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const ENDPOINTS = [
  { name: "overview_3days.json", query: "numOfDays=3" },
  { name: "pages_3days.json", query: "numOfDays=3&dimension1=URL" },
  { name: "sources_3days.json", query: "numOfDays=3&dimension1=Source" },
  { name: "devices_3days.json", query: "numOfDays=3&dimension1=Device" },
];

for (const ep of ENDPOINTS) {
  const res = await fetch(
    `https://www.clarity.ms/export-data/api/v1/project-live-insights?${ep.query}`,
    { headers: { Authorization: `Bearer ${TOKEN}` } }
  );
  if (!res.ok) {
    console.error(`Clarity API error on ${ep.name}: ${res.status}`);
    continue;
  }
  const data = await res.json();
  fs.writeFileSync(path.join(OUT_DIR, ep.name), JSON.stringify(data, null, 2));
  console.log(`Saved ${ep.name}`);
}
