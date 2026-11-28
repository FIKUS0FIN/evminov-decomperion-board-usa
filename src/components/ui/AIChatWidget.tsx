"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageSquare, X, Send, Camera, Loader2 } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/site-config";
import { sendGTMEvent } from "@/lib/gtm";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  imagePreview?: string;
}

async function compressImageToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 800;
        const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas unavailable"));
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.78));
      };
      img.onerror = reject;
      img.src = String(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function AIChatWidget({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).chatUi;
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [attachedImage, setAttachedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: t.welcome },
  ]);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onToggle = () => setOpen((v) => !v);
    window.addEventListener("evminov:toggle-ai-chat", onToggle);
    return () => window.removeEventListener("evminov:toggle-ai-chat", onToggle);
  }, []);

  const handlePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await compressImageToDataUrl(file);
      setAttachedImage(dataUrl);
    } catch {
      // ignore
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!input.trim() && !attachedImage) || loading) return;

    const userText = input.trim() || "Can you advise on wall mounting from this photo?";
    const userMsg: ChatMessage = {
      role: "user",
      content: userText,
      imagePreview: attachedImage || undefined,
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInput("");
    const imageToSend = attachedImage;
    setAttachedImage(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          image: imageToSend || undefined,
          history: messages.slice(-6).map((m) => ({ role: m.role, content: m.content })),
          lang,
          pathname,
        }),
      });
      const data = (await res.json()) as { reply?: string };
      setMessages([
        ...nextHistory,
        {
          role: "assistant",
          content:
            data.reply ||
            `Message our Evminov specialist directly on WhatsApp at ${SITE_CONFIG.phoneDisplay} (https://wa.me/17473060140) or email ${SITE_CONFIG.supportEmail} for personalized sizing.`,
        },
      ]);
    } catch {
      setMessages([
        ...nextHistory,
        {
          role: "assistant",
          content: `I could not reach the concierge server right now. You can use our Angle Calculator or message us on WhatsApp at ${SITE_CONFIG.phoneDisplay} (${SITE_CONFIG.supportEmail}).`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            sendGTMEvent("ai_chat_open", { source: "fab" });
          }}
          aria-label={t.buttonLabel}
          className="fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-2xl ring-2 ring-teal-500/40 transition hover:bg-teal-800"
        >
          <MessageSquare className="h-4 w-4 text-emerald-400" />
          <span>{t.buttonLabel}</span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label={t.title}
          className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 flex h-[500px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="flex items-center justify-between bg-slate-950 px-4 py-3 text-white">
            <div>
              <p className="text-sm font-bold">{t.title}</p>
              <p className="text-[11px] text-emerald-300">{t.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close AI chat"
              className="rounded-lg p-1 text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.role === "user"
                      ? "bg-teal-700 text-white"
                      : "bg-slate-100 text-slate-900"
                  }`}
                >
                  {m.imagePreview && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.imagePreview}
                      alt="Uploaded wall preview"
                      className="mb-2 max-h-32 rounded-lg object-cover"
                    />
                  )}
                  <p className="whitespace-pre-line">{m.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-600">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Thinking…</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="border-t border-slate-200 p-3">
            {attachedImage && (
              <div className="mb-2 flex items-center justify-between rounded-lg bg-emerald-50 px-2.5 py-1 text-xs text-emerald-800">
                <span>Wall photo ready</span>
                <button
                  type="button"
                  onClick={() => setAttachedImage(null)}
                  className="font-bold underline"
                >
                  Remove
                </button>
              </div>
            )}
            <div className="flex items-center gap-2">
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handlePhoto}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                aria-label={t.photoHint}
                title={t.photoHint}
                className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-100"
              >
                <Camera className="h-4 w-4" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-teal-600"
              />
              <button
                type="submit"
                disabled={loading}
                aria-label={t.send}
                className="rounded-xl bg-teal-700 p-2 text-white hover:bg-teal-800 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-1.5 text-[10px] text-slate-500">{t.disclaimer}</p>
          </form>
        </div>
      )}
    </>
  );
}
