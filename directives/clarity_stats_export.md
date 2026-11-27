# Microsoft Clarity Telemetry & AI Crawler Export SOP (`evminovusa.com`)

## Objective
Automatically export 72-hour UX friction metrics (Dead Clicks, Quickbacks, Core Web Vitals, Conversion Smart Events) and AI Crawler Scrape-to-Referral Ratios (ChatGPT/OpenAI, Perplexity, Claude, Google) for `evminovusa.com` — ported directly from `smistaelinstallatio`.

## Setup
1. Create a Microsoft Clarity project for `https://evminovusa.com` and set `NEXT_PUBLIC_CLARITY_ID` in Cloudflare Pages environment variables.
2. Generate a Clarity Data Export API token and store it in `.env` as `CLARITY_API_TOKEN` (never commit tokens to git).
3. Run `node execution/fetch_clarity.mjs` to save normalized snapshots to `site-stats/clarity/`.
