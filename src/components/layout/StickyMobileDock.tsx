"use client";

import Link from "next/link";
import { MessageCircle, MessageSquare, Calculator, ShoppingBag } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocalizedHref } from "@/lib/url";
import { SITE_CONFIG } from "@/lib/site-config";
import { sendGTMEvent } from "@/lib/gtm";
import { MOBILE_DOCK_EXTRA } from "@/i18n/locales/chrome";

export function StickyMobileDock({ lang }: { lang: Locale }) {
  const m = getDictionary(lang).mobileDock;
  const mx = MOBILE_DOCK_EXTRA[lang];

  return (
    <nav
      aria-label={mx.navAria}
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/96 shadow-[0_-6px_24px_rgba(11,31,58,0.10)] backdrop-blur-xl md:hidden"
    >
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-3 py-1 text-[11px]">
        <span className="font-extrabold text-[#0B1F3A]">
          {mx.fromPrice} <span className="font-semibold text-emerald-700">{mx.installments}</span>
        </span>
        <span className="font-semibold text-slate-500">{mx.trialExpress}</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5 px-2 py-1.5">
        <button
          type="button"
          onClick={() => {
            window.dispatchEvent(new CustomEvent("evminov:toggle-ai-chat"));
            sendGTMEvent("ai_chat_open", { source: "mobile_dock" });
          }}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-1.5 text-[11px] font-semibold text-slate-700 hover:bg-slate-100"
        >
          <MessageSquare className="h-4 w-4 text-teal-700" />
          <span>{m.chat}</span>
        </button>

        <Link
          href={getLocalizedHref("/calculator/", lang)}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-1.5 text-[11px] font-semibold text-slate-700 hover:bg-slate-100"
        >
          <Calculator className="h-4 w-4 text-teal-700" />
          <span>{m.calc}</span>
        </Link>

        <Link
          href={getLocalizedHref("/order/", lang)}
          onClick={() => sendGTMEvent("click_order_cta", { location: "mobile_dock" })}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-teal-700 py-1.5 text-[11px] font-bold text-white shadow"
        >
          <ShoppingBag className="h-4 w-4" />
          <span>{m.order}</span>
        </Link>

        <a
          href={SITE_CONFIG.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendGTMEvent("click_whatsapp", { location: "mobile_dock" })}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-[#16A34A] py-1.5 text-[11px] font-bold text-white shadow"
        >
          <MessageCircle className="h-4 w-4 text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
