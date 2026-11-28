interface Env {
  AI?: {
    run: (model: string, options: Record<string, unknown>) => Promise<{ response?: string }>;
  };
}

const SYSTEM_PROMPT = `You are the Evminov Spine Systems Concierge for evminovusa.com (Patented since 1996, US Patent 6,869,387 B2).
Respond concisely and warmly in the user's language (English, Spanish, French, Ukrainian, or Russian).

Verified Facts (NEVER invent other numbers, NEVER claim FDA Class I medical device clearance or HIPAA, NEVER say "BackBrush"):
- Classification: General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030). Not a substitute for medical diagnosis or emergency surgical care.
- Models & Exact USD Prices:
  1. Standard Solid Pine (1-Piece): $450 direct / $595 CA Express (up to 6'4", 210 lbs)
  2. 2-Piece Folding (Home Storage): $475 direct / $615 CA Express (up to 6'4", 220 lbs)
  3. 3-Piece Travel (Trunk/Airline): $495 direct / $635 CA Express (up to 6'4", 220 lbs, padded bag + door strap)
  4. Wide Panel Heavy-Duty: $500 direct / $635 CA Express (up to 6'9", 330 lbs — best for athletes & broad shoulders)
  5. Select Alder Wood: $525 direct / $665 CA Express (up to 6'4", 220 lbs, ~15% lighter at 19-21 lbs)
  6. Demountable Free-Standing Ladder Stand: $275 direct / $345 CA Express (zero wall drilling for renters, 350 lb rating)
- Included free with every board: Glisson cervical traction loop, 16" US wood-stud wall mounting bracket, 60-Day Home Trial, 1-Year Frame Warranty.
- HSA/FSA: Many US buyers save ~30% pre-tax using a provider Letter of Medical Necessity (LMN) + our itemized wellness receipt.
- Wall photos: If a user shares a wall/room photo, explain how a standard 16" drywall wood stud mount works OR recommend the no-drill Free-Standing Stand for apartments/plaster/rental walls.
- US Operations Hub: 4525 San Fernando Rd, Unit H, Glendale, CA 91204 | Phone: +1 (747) 306-0140 | Email: support@evminovusa.com
- Ordering link: https://evminovusa.com/order/`;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = (await request.json()) as {
      message?: string;
      image?: string;
      history?: Array<{ role: string; content: string }>;
      lang?: string;
      pathname?: string;
    };

    const userMessage = String(body.message || "").slice(0, 1500);
    if (!userMessage && !body.image) {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (env.AI) {
      const messages: Array<Record<string, unknown>> = [
        {
          role: "system",
          content: `${SYSTEM_PROMPT}\nUser locale: ${body.lang || "en"} | Current page: ${body.pathname || "/"}`,
        },
        ...(Array.isArray(body.history) ? body.history.slice(-6) : []),
      ];

      if (body.image && body.image.startsWith("data:image/")) {
        messages.push({
          role: "user",
          content: [
            { type: "text", text: userMessage || "Please check this wall for Evminov board mounting." },
            { type: "image_url", image_url: { url: body.image } },
          ],
        });
      } else {
        messages.push({ role: "user", content: userMessage });
      }

      const aiRes = await env.AI.run("@cf/meta/llama-3.2-11b-vision-instruct", {
        messages,
        max_tokens: 450,
      });

      if (aiRes?.response) {
        return new Response(JSON.stringify({ reply: aiRes.response }), {
          status: 200,
          headers: { "Content-Type": "application/json; charset=utf-8" },
        });
      }
    }

    // Deterministic fallback when Workers AI binding is not configured locally
    return new Response(
      JSON.stringify({
        reply:
          "Thanks for reaching out to Evminov Spine Systems! For users up to 6'4\" / 210 lbs we recommend the Standard Solid Pine ($450 direct / $595 CA Express) or 2-Piece Folding ($475 / $615). Over 210 lbs or 6'4\", choose the Wide Heavy-Duty Board ($500 / $635, rated to 330 lbs). Renting? Add the Free-Standing Stand ($275) for zero wall drilling. Configure at https://evminovusa.com/order/ or call +1 (747) 306-0140.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  } catch {
    return new Response(JSON.stringify({ error: "Chat processing failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
