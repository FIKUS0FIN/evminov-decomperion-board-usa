interface Env {
  AI?: {
    run: (model: string, options: Record<string, unknown>) => Promise<{ response?: string }>;
  };
}

const SYSTEM_PROMPT = `You are the Evminov Spine Systems Concierge for evminovusa.com and evminovcanada.com (Patented since 1996, US Patent 6,869,387 B2).
Respond concisely and warmly in the user's language (English, Spanish, French, German, Ukrainian, or Russian).

Verified Facts (NEVER invent other numbers, NEVER claim FDA Class I medical device clearance or HIPAA, NEVER say "BackBrush"):
- Classification: General Wellness & Spine Conditioning Equipment (HTS 9506.91.0030). Not a substitute for medical diagnosis or emergency surgical care.
- Official US & Canada Lineup (demountable folding panels only — shipped by international couriers in ~2 weeks):
  1. 3-Piece Folding Evminov Board (230–245 cm full length): $495 direct / $635 Express (CAD $695 / $885). Width: Standard 26 cm (up to 100 kg / 220 lbs) or Reinforced Wide 30 cm (+$25 USD / +$35 CAD, for >100 kg / up to 330 lbs). Finish: Light (Natural Warm Amber Alder) or Dark (Dark Walnut Pine).
  2. 2-Piece Folding Evminov Board ("Spine Toothbrush" — 2 sections only): $475 direct / $615 Express (CAD $665 / $860). Width: Standard 26 cm (≤100 kg) or Reinforced Wide 30 cm (+$25 USD / +$35 CAD, >100 kg). Finish: Light or Dark.
  3. 4-Piece Demountable Ladder Stand (max height 123 cm): $275 USD ($385 CAD) — fits both 26 cm Standard and 30 cm Reinforced Wide boards, zero wall drilling.
  4. Evminov Board Mounting Hooks: $45 USD ($65 CAD) — for mounting onto the 4-Piece Ladder Stand or Swedish Wall.
  5. 2-Bag Protective Carry Case Set: $75 USD ($105 CAD) — for the 3-Piece Evminov Board.
  6. Single Carry Case Bag: $55 USD ($75 CAD) — for the 2-Piece "Spine Toothbrush" Evminov Board.
- Included free with every board: Glisson cervical traction loop, wall mounting hardware, illustrated exercise manual, official product passport, 60-Day Home Trial, and 1-Year Warranty.
- Delivery: Approximately 2 weeks via tracked international couriers across the US & Canada.
- HSA/FSA: Many US buyers save ~30% pre-tax using a provider Letter of Medical Necessity (LMN) + our itemized wellness receipt.
- Primary Fast Contact: WhatsApp https://wa.me/17473060140 (+1 747 306-0140) | Email: support@evminovusa.com
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
          "Thanks for reaching out to Evminov Spine Systems! For the US & Canada we ship two demountable folding boards (~2 weeks international courier delivery, 1-Year Warranty): the 3-Piece Evminov Board (230–245 cm, from $495) and the compact 2-Piece \"Spine Toothbrush\" Board (from $475) — both available in Standard 26 cm (≤100 kg) or Reinforced Wide 30 cm (+$25, >100 kg) in Light or Dark finish. Optional accessories include our 4-Piece Ladder Stand (max 123 cm, $275), Mounting Hooks ($45), and Carry Cases ($55–$75). Configure at https://evminovusa.com/order/ or message us directly on WhatsApp: https://wa.me/17473060140 (+1 747 306-0140).",
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
