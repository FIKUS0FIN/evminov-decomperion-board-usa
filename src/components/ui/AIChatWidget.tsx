"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Camera,
  Loader2,
  MessageCircle,
  MessageSquare,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/site-config";
import { sendGTMEvent } from "@/lib/gtm";

interface QuickLink {
  label: string;
  href: string;
  external?: boolean;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  imagePreview?: string;
  quickLinks?: QuickLink[];
}

interface ChatExtras {
  starters: [string, string, string, string];
  thinking: string;
  photoReady: string;
  removePhoto: string;
  photoPromptFallback: string;
  whatsappHandoff: string;
  closeAria: string;
  liveBadge: string;
}

const CHAT_EXTRAS: Record<Locale, ChatExtras> = {
  en: {
    starters: [
      "Which board & width (26 vs 30 cm) fits me?",
      "Safe for L4–L5 disc or high blood pressure?",
      "Wall mounting (16\" studs) vs No-Drill Stand",
      "HSA/FSA ~30% savings & shipping timeline",
    ],
    thinking: "Analyzing your setup…",
    photoReady: "Wall photo attached",
    removePhoto: "Remove",
    photoPromptFallback: "Can you advise on wall mounting from this photo?",
    whatsappHandoff: "Continue with Live Specialist on WhatsApp",
    closeAria: "Close AI chat",
    liveBadge: "AI Concierge",
  },
  es: {
    starters: [
      "¿Qué modelo y ancho (26 vs 30 cm) me conviene?",
      "¿Es seguro con hernia L4–L5 o hipertensión?",
      "Montaje en pared vs Soporte sin taladrar",
      "Ahorro HSA/FSA (~30%) y envío",
    ],
    thinking: "Analizando tu consulta…",
    photoReady: "Foto de pared lista",
    removePhoto: "Quitar",
    photoPromptFallback: "¿Puedes aconsejar sobre montaje con esta foto?",
    whatsappHandoff: "Hablar con especialista en WhatsApp",
    closeAria: "Cerrar chat IA",
    liveBadge: "Asistente IA",
  },
  fr: {
    starters: [
      "Quel modèle et largeur (26 vs 30 cm) choisir ?",
      "Sûr pour hernie L4–L5 ou hypertension ?",
      "Fixation murale vs Support sans perçage",
      "Remboursement HSA/FSA et livraison",
    ],
    thinking: "Analyse en cours…",
    photoReady: "Photo murale prête",
    removePhoto: "Retirer",
    photoPromptFallback: "Pouvez-vous conseiller le montage sur ce mur ?",
    whatsappHandoff: "Continuer avec un spécialiste sur WhatsApp",
    closeAria: "Fermer le chat IA",
    liveBadge: "Concierge IA",
  },
  de: {
    starters: [
      "Welches Board & Breite (26 vs 30 cm) passt?",
      "Sicher bei L4–L5 Bandscheibe / Bluthochdruck?",
      "Wandmontage vs Leiterständer ohne Bohren",
      "Preise, 1 Jahr Garantie & Versanddauer",
    ],
    thinking: "Analysiere Anfrage…",
    photoReady: "Wandfoto angehängt",
    removePhoto: "Entfernen",
    photoPromptFallback: "Können Sie eine Wandmontage anhand dieses Fotos empfehlen?",
    whatsappHandoff: "Direkt mit Berater auf WhatsApp chatten",
    closeAria: "KI-Chat schließen",
    liveBadge: "KI-Berater",
  },
  uk: {
    starters: [
      "Яку модель і ширину (26 чи 30 см) обрати?",
      "Чи безпечно при грижі L4–L5 або тиску?",
      "Кріплення у стіну чи стійка без свердління?",
      "Ціни, доставка ~2 тижні та HSA/FSA",
    ],
    thinking: "Підбираю рекомендацію…",
    photoReady: "Фото стіни прикріплено",
    removePhoto: "Прибрати",
    photoPromptFallback: "Підкажіть, як краще закріпити дошку на цій стіні?",
    whatsappHandoff: "Продовжити зі спеціалістом у WhatsApp",
    closeAria: "Закрити AI-чат",
    liveBadge: "AI-Консьєрж",
  },
  ru: {
    starters: [
      "Какую модель и ширину (26 или 30 см) выбрать?",
      "Безопасно ли при грыже L4–L5 или давлении?",
      "Крепление в стену или стойка без сверления?",
      "Цены, доставка ~2 недели и HSA/FSA",
    ],
    thinking: "Подбираю рекомендацию…",
    photoReady: "Фото стены прикреплено",
    removePhoto: "Убрать",
    photoPromptFallback: "Подскажите, как лучше закрепить доску на этой стене?",
    whatsappHandoff: "Продолжить со специалистом в WhatsApp",
    closeAria: "Закрыть AI-чат",
    liveBadge: "AI-Консьерж",
  },
};

function renderRichText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s)]+)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={idx} className="font-extrabold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (/^https?:\/\//.test(part)) {
      const cleanUrl = part.replace(/[.,;!?]+$/, "");
      const trailing = part.slice(cleanUrl.length);
      const label = cleanUrl.includes("wa.me")
        ? "WhatsApp (+1 747 306-0140)"
        : cleanUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
      return (
        <span key={idx}>
          <a
            href={cleanUrl}
            target={cleanUrl.includes("wa.me") ? "_blank" : undefined}
            rel={cleanUrl.includes("wa.me") ? "noopener noreferrer" : undefined}
            className="font-bold underline decoration-current/60 underline-offset-2 hover:opacity-80"
          >
            {label}
          </a>
          {trailing}
        </span>
      );
    }
    return <span key={idx}>{part}</span>;
  });
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
  const ex = CHAT_EXTRAS[lang];
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [attachedImage, setAttachedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: t.welcome },
  ]);
  const fileRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onToggle = () => setOpen((v) => !v);
    window.addEventListener("evminov:toggle-ai-chat", onToggle);
    return () => window.removeEventListener("evminov:toggle-ai-chat", onToggle);
  }, []);

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages, loading, open]);

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

  const submitPrompt = async (rawText: string, imageData?: string | null) => {
    const trimmed = rawText.trim();
    if ((!trimmed && !imageData) || loading) return;

    const userText = trimmed || ex.photoPromptFallback;
    const userMsg: ChatMessage = {
      role: "user",
      content: userText,
      imagePreview: imageData || undefined,
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInput("");
    setAttachedImage(null);
    setLoading(true);
    sendGTMEvent("ai_chat_message", { lang, has_image: Boolean(imageData) });

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          image: imageData || undefined,
          history: messages.slice(-6).map((m) => ({ role: m.role, content: m.content })),
          lang,
          pathname,
        }),
      });
      const data = (await res.json()) as {
        reply?: string;
        quickLinks?: QuickLink[];
      };
      setMessages([
        ...nextHistory,
        {
          role: "assistant",
          content:
            data.reply ||
            `Message our Evminov specialist directly on WhatsApp at ${SITE_CONFIG.phoneDisplay} (https://wa.me/17473060140) or email ${SITE_CONFIG.supportEmail} for personalized sizing.`,
          quickLinks: Array.isArray(data.quickLinks) ? data.quickLinks : undefined,
        },
      ]);
    } catch {
      setMessages([
        ...nextHistory,
        {
          role: "assistant",
          content: `Our live specialist is ready on WhatsApp at https://wa.me/17473060140 (${SITE_CONFIG.phoneDisplay}) or ${SITE_CONFIG.supportEmail}.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitPrompt(input, attachedImage);
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
          className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-3.5 text-sm font-bold text-white shadow-2xl ring-2 ring-teal-500/40 transition hover:bg-teal-800 md:inline-flex"
        >
          <MessageSquare className="h-4 w-4 text-emerald-400" />
          <span>{t.buttonLabel}</span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label={t.title}
          className="fixed inset-x-3 bottom-[104px] z-50 flex h-[min(540px,calc(100dvh-8.5rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:inset-x-auto md:bottom-6 md:right-6 md:h-[560px] md:w-[400px]"
        >
          <div className="flex items-center justify-between gap-2 bg-slate-950 px-4 py-3 text-white">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <p className="truncate text-sm font-bold">{t.title}</p>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {ex.liveBadge}
                </span>
              </div>
              <p className="truncate text-[11px] text-slate-300">{t.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={ex.closeAria}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto overscroll-contain p-4 text-sm">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
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
                  <p className="whitespace-pre-line break-words text-[13px] leading-relaxed">
                    {renderRichText(m.content)}
                  </p>
                </div>

                {m.role === "assistant" && m.quickLinks && m.quickLinks.length > 0 && (
                  <div className="mt-2 flex max-w-[92%] flex-wrap gap-1.5">
                    {m.quickLinks.map((ql) => (
                      <a
                        key={ql.label}
                        href={ql.href}
                        target={ql.external ? "_blank" : undefined}
                        rel={ql.external ? "noopener noreferrer" : undefined}
                        onClick={() => {
                          if (ql.external) {
                            sendGTMEvent("click_whatsapp", { location: "ai_chat_chip" });
                          }
                        }}
                        className={`inline-flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-[11px] font-bold transition ${
                          ql.external
                            ? "bg-[#16A34A] text-white hover:bg-emerald-600"
                            : "border border-teal-200 bg-teal-50 text-teal-900 hover:bg-teal-100"
                        }`}
                      >
                        <span>{ql.label}</span>
                        {!ql.external && <ArrowRight className="h-3 w-3 shrink-0" />}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* 4 Quick-Ask Starter Chips on initial welcome */}
            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {ex.starters.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => void submitPrompt(prompt)}
                    className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-[11.5px] font-semibold text-slate-800 shadow-2xs transition hover:border-teal-500 hover:bg-teal-50/50 hover:text-teal-900"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
                <Loader2 className="h-3.5 w-3.5 animate-spin text-teal-700" />
                <span>{ex.thinking}</span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleSend} className="border-t border-slate-200 bg-slate-50/60 p-3">
            {attachedImage && (
              <div className="mb-2 flex items-center justify-between rounded-lg bg-emerald-50 px-2.5 py-1 text-xs text-emerald-800">
                <span>{ex.photoReady}</span>
                <button
                  type="button"
                  onClick={() => setAttachedImage(null)}
                  className="font-bold underline"
                >
                  {ex.removePhoto}
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
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
              >
                <Camera className="h-4 w-4" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                className="min-h-[44px] min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-teal-600"
              />
              <button
                type="submit"
                disabled={loading}
                aria-label={t.send}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white hover:bg-teal-800 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between gap-2">
              <p className="truncate text-[10px] text-slate-500">{t.disclaimer}</p>
              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendGTMEvent("click_whatsapp", { location: "ai_chat_footer" })}
                className="inline-flex shrink-0 items-center gap-1 text-[10.5px] font-extrabold text-emerald-700 hover:underline"
              >
                <MessageCircle className="h-3 w-3" />
                <span>WhatsApp</span>
              </a>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
