"use client";

import Link from "next/link";
import { MessageSquare, Calculator, ShoppingBag, Phone } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocalizedHref } from "@/lib/url";
import { SITE_CONFIG } from "@/lib/site-config";
import { sendGTMEvent } from "@/lib/gtm";

export function StickyMobileDock({ lang }: { lang: Locale }) {
  const m = getDictionary(lang).mobileDock;

  return (
    <nav
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-2 py-2 shadow-2xl backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-4 gap-1.5">
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
          href={SITE_CONFIG.phoneHref}
          onClick={() => sendGTMEvent("click_phone", { location: "mobile_dock" })}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-slate-900 py-1.5 text-[11px] font-bold text-white"
        >
          <Phone className="h-4 w-4 text-emerald-400" />
          <span>{m.call}</span>
        </a>
      </div>
    </nav>
  );
}
