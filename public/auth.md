# Evminov Spine Systems Agent & API Access Guide

All discovery, sizing, and catalog endpoints on `https://evminovusa.com` are publicly readable without authentication:
- `GET /api/health` — Service health
- `GET /api/ask?q={query}&lang={en|es|fr|uk|ru}` — Natural-language board recommendation & pricing
- `POST /api/mcp` — JSON-RPC 2.0 Model Context Protocol server (`initialize`, `tools/list`, `tools/call`)
- `GET/POST /api/acp/checkout_sessions` — Agentic Commerce Protocol catalog and pre-filled reservation sessions
- `POST /api/submit-order` — Submit a board reservation or protocol request with buyer consent

No API key is required for public catalog and calculator tools. For commercial B2B/clinic wholesale inquiries, contact `support@evminovusa.com` or `+1 (747) 306-0140`.
