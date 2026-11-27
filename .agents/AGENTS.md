# Agent Rules & Guardrails — Evminov Spine Systems (`evminovusa.com`)

## 1. Brand, Legal & Regulatory Guardrails (STRICT)
- **Canonical Domain:** Always use `https://evminovusa.com` with trailing slashes on page routes. NEVER output `apex-root.com` or staging URLs.
- **Forbidden Product Name:** NEVER write `"BackBrush"` or `"BACKBRUSH"`. Always refer to **Evminov Spine Decompression Board** / **Evminov Board**.
- **US Product Classification (FDA/FTC/CBP Compliance):** Evminov boards are classified as **General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030)**.
  - NEVER claim `"FDA Listed Class I Medical Device"`, `"FDA approved"`, `"HIPAA-Compliant"`, or `"ISO 13485"` unless formal US FDA Establishment Registration and legal clearance are verified.
  - Always clarify that HSA/FSA pre-tax reimbursement (~25–35% savings) requires a Letter of Medical Necessity (LMN) from the buyer's healthcare provider and plan approval.
- **Single Source of Truth Contact Info (NAP):**
  - Phone: `+1 (747) 306-0140` (`tel:+17473060140`) — NEVER write fake `555` phone numbers.
  - Email: `support@evminovusa.com` / `orders@evminovusa.com` — NEVER write `@gmail.com`.
  - US Hub Address: `4525 San Fernando Rd, Unit H, Glendale, CA 91204, USA`.
- **Single Source of Truth Pricing (USD):**
  - Standard Solid Pine: `$450` Direct / `$595` CA Express (up to `210 lbs`, `6'4"`).
  - 2-Piece Folding: `$475` Direct / `$615` CA Express (up to `220 lbs`, `6'4"`).
  - 3-Piece Travel: `$495` Direct / `$635` CA Express (up to `220 lbs`, `6'4"`).
  - Wide Heavy-Duty: `$500` Direct / `$635` CA Express (up to `330 lbs`, `6'9"`).
  - Select Alder Wood: `$525` Direct / `$665` CA Express (up to `220 lbs`, `6'4"`).
  - Free-Standing Stand: `$275` Direct / `$345` CA Express (up to `350 lbs`).
  - NEVER show European `180€` prices or stale `$349` prices on US pages.
- **No Placeholder Media or Fake Checkout:**
  - NEVER use Rickroll (`dQw4w9WgXcQ`) or broken video IDs. Only use verified `@evminoviusa` IDs (`GDLVNWynWF0`, `fP-biAHusGs`) via `LiteYouTube`.
  - NEVER collect raw card numbers in DOM inputs or expose `Test: 4242` mock forms in production.

## 2. Multilingual Parity (5 Languages)
- Default root `/`: **English (`en-US`, `x-default`)** — no `/en/` prefix.
- Prefixed locales: `/es/` (`es-US`), `/fr/` (`fr-CA`), `/uk/` (`uk-UA`), `/ru/` (`ru`).
- Whenever updating navigation, CTAs, or dictionary strings in `src/i18n/dictionaries.ts`, update ALL 5 locales together.

## 3. Quality Gates Before Deploy
- `npm run typecheck` (`tsc --noEmit`)
- `npm test` (Vitest suite)
- `npm run build` (`next build --webpack && next-image-export-optimizer`)
- `npm run verify:seo` (`node scripts/verify-seo-indexers.mjs`)
