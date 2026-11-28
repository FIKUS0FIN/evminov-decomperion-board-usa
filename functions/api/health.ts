import { AuthEnv, getRegionalEmailConfig } from "../_lib/auth";

export const onRequestGet: PagesFunction<AuthEnv> = async ({ request, env }) => {
  const emailCfg = getRegionalEmailConfig(request, env);
  return new Response(
    JSON.stringify({
      status: "ok",
      service: "evminov-spine-systems-edge",
      origin: emailCfg.siteOrigin,
      region: emailCfg.isCanada ? "CA" : "US",
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
