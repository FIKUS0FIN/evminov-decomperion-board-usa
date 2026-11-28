# Evminov Spine Systems (`evminovusa.com` & `evminovcanada.com`) — Growth & Self-Improvement Log

> **Strict Guardrails Reference:** `.agents/AGENTS.md` (General Wellness Equipment HTS `9506.91.0030`, verified USD/CAD catalog pricing, Glendale CA NAP, LMN disclaimer for HSA/FSA, zero banned product names/claims, parity across all 6 active locales: `en`, `es`, `fr`, `de`, `uk`, `ru`).

---

## Baseline Prior Iterations (Already Shipped to `main`)
- **`d920a21` (Tech-UX / Mobile CRO):** Comprehensive mobile UX/UI scaling, bottom safe-area dock (`MobileQuickDock`), WCAG 44×44 px touch targets, and 16 px anti-zoom form fields.
- **`d6b53a8` + `8ffcfdc` (AI Concierge / GEO / B2C Funnel):** Activated Cloudflare Workers AI (`llama-3.3-70b-instruct-fp8-fast` + `llama-4-scout-17b-16e-instruct`), fixed 7 condition CTA links, launched `YearEndLeadMagnetSection` on homepage, added 4 clinical guides/comparisons (`piriformis`, `nerve-flossing-sleep`, `spondylolisthesis-facet`, `dead-hang-mckenzie`), and upgraded AI discovery (`ask.ts`, `mcp.ts`, `acp`, `_middleware.ts`, `llms.txt`).
- **`6da54c9` (Programmatic Trends SEO / Interactive CRO / Schema):** Launched 4 high-demand Google-Trends hubs (`neck-hump`, `l4-l5-vs-l5-s1`, `drx9000-cost`, `over-the-door-neck-traction`), embedded `InteractiveSpineQuizSection` (`/` & `/guides/`), added `GuidesExplorerClient` topic filters, breadcrumbs + `BreadcrumbJsonLd`, and `OFFICIAL_ACCESSORIES` schema enrichment (`337` CA pages, `374` US pages).

---

## Iteration #1 — 2026-11-28
- **Direction:** B2B Commercial SEO + High-AOV CRO + E-E-A-T + GEO (`/clinics/` Multi-Station Partner Hub)
- **Why This Pillar Won (ICE Audit Matrix):**

| # | Growth Hypothesis | Impact | Confidence | Effort | ICE Score (`I×C÷E`) | Decision |
|---|---|---:|---:|---:|---:|---|
| 1 | **Dedicated 6-Locale B2B Clinics, PT, Chiro & Pilates Studio Wholesale Hub (`/clinics/`)** with interactive multi-station ROI calculator & commercial invoice/W-9 quote form | 9.5 | 9.5 | 4.0 | **22.56** | **SHIPPED (Iteration #1)** |
| 2 | Standalone Interactive Printable **HSA/FSA & Canadian Extended Health LMN Builder** on `/guides/hsa-fsa-spinal-decompression-lmn-guide/` + PDP net-price drawer | 8.5 | 9.0 | 4.0 | 19.13 | Backlog #1 |
| 3 | Programmatic Local SEO & Accuracy Overhaul across **50 US States + 13 CA Provinces (`StateShippingView.tsx`)** (fix legacy support-stand & 1–2 day copy, add `BreadcrumbJsonLd` + GEO tables) | 8.0 | 9.5 | 4.0 | 19.00 | Backlog #2 |
| 4 | Answer-First **45-Word Clinical GEO Summary Callouts** + `SpeakableSpecification` upgrades across all 20 Guides & 8 Conditions | 8.0 | 8.5 | 4.5 | 15.11 | Backlog #3 |
| 5 | Cultural/Regional Localization Pass for Quebec French (`/fr/`) & US Hispanic (`/es/`) search terminology | 7.5 | 8.5 | 4.5 | 14.17 | Backlog #4 |

### What Was Built & Modified
- **6-Locale B2B Copy & Pricing Module:** [src/i18n/locales/clinics.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/i18n/locales/clinics.ts) — complete localization across `en`, `es`, `fr`, `de`, `uk`, `ru` (covering 4 commercial buyer verticals, side-by-side capital/throughput comparison table vs. `$15k–$35k` motorized tables, 4 partner volume tiers `0% / 5% / 10% / 15%`, interactive calculator strings, and 6 B2B FAQs).
- **Interactive UI & Invoice Quote Funnel:** [src/components/pages/ClinicsB2bPage.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/components/pages/ClinicsB2bPage.tsx) — station selector (`1–10` Reinforced Wide `30 cm` `3-piece-travel-board`), Light/Dark wood finish toggle, optional 30 cm wall panels (`+$175/station`) & 4-Piece no-drill ladder stands + hooks (`+$310/station`), illustrative guided-session payback estimator, and commercial invoice / W-9 lead form submitting to `POST /api/submit-order` (`mode: "protocol_lead"`) plus pre-filled WhatsApp B2B Desk action.
- **Schema & Static Routes:**
  - `ClinicsB2bJsonLd` (`WebPage` + `SpeakableSpecification` + `Service` `OfferCatalog`) in [src/components/seo/JsonLd.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/components/seo/JsonLd.tsx)
  - [src/app/(default)/clinics/page.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/app/(default)/clinics/page.tsx) & [src/app/[lang]/clinics/page.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/app/[lang]/clinics/page.tsx)
- **Navigation, Internal Links, Sitemap, RSS & Redirects:**
  - Header & mobile drawer link (`clinicsPartners`) in [src/components/layout/Header.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/components/layout/Header.tsx)
  - Footer link (`clinicsLink`) in [src/i18n/locales/chrome.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/i18n/locales/chrome.ts) & [src/components/layout/Footer.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/components/layout/Footer.tsx)
  - Partner CTA banner on [src/components/pages/CentersHeritagePage.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/components/pages/CentersHeritagePage.tsx)
  - Added `/clinics/` across 6 locales to [src/app/sitemap.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/app/sitemap.ts) (`343` CA URLs / `380` US URLs) & [src/lib/rss.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/lib/rss.ts)
  - Added `/wholesale`, `/b2b`, `/partners` -> `/clinics/` 301 canonicalization in [functions/_middleware.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/functions/_middleware.ts)
- **AI Search / MCP / Discovery Sync:**
  - Updated [functions/api/ask.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/functions/api/ask.ts), [functions/api/chat.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/functions/api/chat.ts), [functions/api/mcp.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/functions/api/mcp.ts), [public/llms.txt](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/public/llms.txt), [public/llms-full.txt](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/public/llms-full.txt), [public/auth.md](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/public/auth.md), and unit tests in [src/lib/edge-middleware-and-apis.test.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/lib/edge-middleware-and-apis.test.ts).

### URLs Added
- USA (`https://evminovusa.com`): `/clinics/`, `/es/clinics/`, `/fr/clinics/`, `/de/clinics/`, `/uk/clinics/`, `/ru/clinics/`
- Canada (`https://evminovcanada.com`): `/clinics/`, `/es/clinics/`, `/fr/clinics/`, `/de/clinics/`, `/uk/clinics/`, `/ru/clinics/`

### Expected Impact & Metrics to Monitor
- **Google Search Console:** Impressions & non-branded clicks on B2B queries (`"spinal decompression equipment for clinic"`, `"pilates studio spine decompression wall"`, `"wholesale evminov board"`), and indexation of all 12 `/clinics/` regional/locale URLs.
- **GA4 / GTM:** `generate_lead` (`lead_type: "b2b_clinic_quote"`), `calculator_complete` (`b2b_tier_select`), and `click_whatsapp` (`clinics_hero`, `clinics_calculator_form`, `clinics_quote_success`).
- **Microsoft Clarity:** Scroll depth to `#b2b-calculator`, mobile interaction smoothness (`>= 44px` controls, `0` rage-clicks on station chips/sliders).
- **Pipeline / AOV:** Multi-station quote inquiries (`2–7+` units, `$1,000–$3,500+` estimated bundle value per lead) requiring no upfront card entry prior to New Year checkout launch.

### Top-3 Backlog Candidates for Next Iterations
1. **Iteration #2 Candidate (`ICE = 19.13`, CRO / Year-End Pre-Tax Savings):** Standalone Interactive Printable **HSA/FSA & Canadian Extended Health Letter of Medical Necessity (LMN) Builder** embedded on `/guides/hsa-fsa-spinal-decompression-lmn-guide/` + pre-checkout HSA net-savings breakdown drawer on `ProductDetailView.tsx`.
2. **Iteration #3 Candidate (`ICE = 19.00`, Programmatic Local SEO & Trust Accuracy):** Full overhaul of `StateShippingView.tsx` (50 US states + 13 Canadian provinces) — remove legacy support-stand inclusion text and US-only `1–2 business days` copy on Canadian provinces; add `BreadcrumbJsonLd` and localized Quick-Answer transit tables.
3. **Iteration #4 Candidate (`ICE = 15.11`, GEO / AI Overviews):** Add concise **45-Word Answer-First Clinical Summary Boxes** + targeted `SpeakableSpecification` CSS selectors across all 20 Guides & 8 Conditions to win ChatGPT Search, Perplexity, and Google AI Overviews citations.


---

## Iteration #2 — 2026-11-28
- **Direction:** i18n Native Typography (`Onest` Cyrillic), 6-Locale Copy Polish & Cloudflare `evminov.shop` → `https://evminovusa.com` 301 Redirect
- **Why This Pillar Matters:** Native Ukrainian/Cyrillic typography (`Onest`) improves legibility and local trust for `/uk/` and `/ru/` visitors, eliminating awkward Title Case, transliteration leaks (`Petla Glissona`, `VIP-Кіт`, `Квартурі`, `Піріформіс`, `Ресет`), and untranslated `...en` dictionary fallbacks, while `evminov.shop` edge 301 forwarding consolidates commercial `.shop` traffic cleanly to canonical `https://evminovusa.com` without duplicate indexing.

### What Was Built & Modified
- **Native Ukrainian / Cyrillic Typography (`Onest` + Full `cyrillic`/`cyrillic-ext`):**
  - [src/lib/fonts.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/lib/fonts.ts) — added `Onest` via `next/font/google` (`cyrillic`, `cyrillic-ext`, `latin`, `latin-ext`, CSS variable `--font-onest`) and extended `Inter` with `cyrillic` & `cyrillic-ext`.
  - [src/components/layout/WebsiteLayout.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/components/layout/WebsiteLayout.tsx) & [src/app/globals.css](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/app/globals.css) — wired `--font-onest` on `<body>` and applied `html[lang="uk"]` / `html[lang="ru"]` native font rules.
- **6-Locale Copy Polish & Leak Elimination:**
  - [src/i18n/dictionaries.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/i18n/dictionaries.ts) — replaced all remaining `es`/`fr`/`uk`/`ru` fallback strings (`orderUi`, `chatUi`, `footer.wellnessNotice`) and refined Ukrainian & Russian hero/section headings to natural sentence case.
  - [src/i18n/locales/home-part1.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/i18n/locales/home-part1.ts), [src/i18n/locales/home-part2.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/i18n/locales/home-part2.ts), [src/i18n/locales/centers.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/i18n/locales/centers.ts), [src/i18n/locales/faq-and-exercises.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/i18n/locales/faq-and-exercises.ts), [src/i18n/locales/conditions-i18n.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/i18n/locales/conditions-i18n.ts), [src/i18n/locales/portal.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/i18n/locales/portal.ts), [src/i18n/locales/guides-i18n.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/i18n/locales/guides-i18n.ts) — fixed all 17 Spanish `"Petla Glissona"` leaks -> `"Lazo de Glisson"`, fixed `"Місце в Квартурі"` -> `"Місце у квартирі"`, replaced `"Ресет"` anglicisms with `"відновлення"`/`"розвантаження"`.
  - [src/components/sections/YearEndLeadMagnetSection.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/components/sections/YearEndLeadMagnetSection.tsx), [src/components/sections/InteractiveSpineQuizSection.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/components/sections/InteractiveSpineQuizSection.tsx), [src/components/layout/Header.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/components/layout/Header.tsx), [src/components/sections/OrderWizard.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/components/sections/OrderWizard.tsx), [src/components/sections/ProductCatalogSection.tsx](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/components/sections/ProductCatalogSection.tsx) — replaced `"VIP-Кіт"`/`"Отримати Кіт"`/`"Надсилаємо Кіт"`, replaced `"Піріформіс"` -> `"грушоподібний м’яз"`, localized carousel `aria-label` attributes (`Previous photo` / `Next photo`) into all 6 languages, and normalized sentence case.
- **Cloudflare `evminov.shop` → `https://evminovusa.com` 301 Redirect:**
  - Cloudflare Zone `c6a4e5cad8b2797c95d32b50383f40c1` (`evminov.shop`, status `active`): proxied apex `evminov.shop` & `www.evminov.shop` DNS (`192.0.2.1` / `100::`) + `http_request_dynamic_redirect` ruleset (`744c358a7e684550b7a4694b6dae4dcf`, rule `1af05e6407944bd487eda7e4219a8d12`) issuing HTTP `301` preserving path & query string.
  - [functions/_middleware.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/functions/_middleware.ts) & [src/lib/edge-middleware-and-apis.test.ts](file:///Users/dimasymonenko/Desktop/Apex_Root_LLC_Consultant/Apex_Root_Projects/Evminov-Board/src/lib/edge-middleware-and-apis.test.ts) — added `resolveRedirectHost()` Edge Middleware defense-in-depth fallback + unit tests.
