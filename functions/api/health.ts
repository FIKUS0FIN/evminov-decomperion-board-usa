import { AuthEnv, getRegionalEmailConfig } from "../_lib/auth";

interface HealthEnv extends AuthEnv {
  AI?: unknown;
  GEMINI_API_KEY?: string;
}

export const onRequestGet: PagesFunction<HealthEnv> = async ({ request, env }) => {
  const emailCfg = getRegionalEmailConfig(request, env);
  return new Response(
    JSON.stringify({
      status: "ok",
      service: "evminov-spine-systems-edge",
      origin: emailCfg.siteOrigin,
      region: emailCfg.isCanada ? "CA" : "US",
      aiConfigured: Boolean(env.AI || env.GEMINI_API_KEY?.trim()),
      aiProvider: env.AI
        ? "cloudflare-workers-ai"
        : env.GEMINI_API_KEY?.trim()
        ? "gemini"
        : "biomechanical-engine",
      telegramConfigured: Boolean(
        env.TELEGRAM_BOT_TOKEN?.trim() && env.TELEGRAM_CHAT_ID?.trim()
      ),
      emailConfigured: Boolean(emailCfg.apiKey),
      endpoints: [
        "/api/health",
        "/api/ask",
        "/api/mcp",
        "/api/acp/checkout_sessions",
        "/api/chat",
        "/api/transcribe",
        "/api/submit-order",
      ],
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store",
      },
    }
  );
};
