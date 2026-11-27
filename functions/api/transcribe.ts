interface Env {
  AI?: {
    run: (model: string, options: Record<string, unknown>) => Promise<{ text?: string }>;
  };
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const formData = await request.formData();
    const audioEntry = formData.get("audio") as unknown;
    if (
      !audioEntry ||
      typeof audioEntry === "string" ||
      typeof (audioEntry as Blob).arrayBuffer !== "function"
    ) {
      return new Response(JSON.stringify({ error: "Missing audio file" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    const audio = audioEntry as Blob;

    if (audio.size < 200 || audio.size > 1_500_000) {
      return new Response(JSON.stringify({ error: "Audio size out of allowed bounds" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!env.AI) {
      return new Response(
        JSON.stringify({
          text: "",
          notice: "Voice transcription activates once Cloudflare Workers AI binding is deployed.",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const bytes = new Uint8Array(await audio.arrayBuffer());
    const result = await env.AI.run("@cf/openai/whisper-large-v3-turbo", {
      audio: Array.from(bytes),
    });

    return new Response(JSON.stringify({ text: (result?.text || "").trim() }), {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Transcription failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
