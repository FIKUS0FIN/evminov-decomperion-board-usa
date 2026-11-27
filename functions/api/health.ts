export const onRequestGet: PagesFunction = async () => {
  return new Response(
    JSON.stringify({
      status: "ok",
      service: "evminov-spine-systems-edge",
      origin: "https://evminovusa.com",
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
