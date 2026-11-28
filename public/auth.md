# Evminov Spine Systems Agent & API Access Guide

All discovery, sizing, AI concierge, and catalog endpoints on `https://evminovusa.com` are publicly readable without authentication:
- `GET /api/health` — Service, email, Telegram, and AI status
- `GET /api/ask?q={query}&lang={en|es|fr|de|uk|ru}` — Natural-language 2026 board, width & clinical guide recommendation
- `POST /api/chat` — Multilingual (EN/ES/FR/DE/UK/RU) AI Spine Concierge with biomechanical sizing and wall-photo check
- `POST /api/mcp` — JSON-RPC 2.0 Model Context Protocol server (`initialize`, `tools/list`, `tools/call`)
- `GET/POST /api/acp/checkout_sessions` — Agentic Commerce Protocol catalog (boards + 6 accessories) and pre-filled reservation sessions
- `POST /api/submit-order` — Submit a board reservation, New Year VIP price lock, or HSA/FSA LMN protocol request with buyer consent

No API key is required for public catalog, chat, and calculator tools. For B2B multi-station clinic and Pilates studio pricing (5%–15% volume tiers & commercial W-9 invoices), visit `https://evminovusa.com/clinics/` or message WhatsApp `+1 (747) 306-0140` (`https://wa.me/17473060140`) / email `support@evminovusa.com`.
