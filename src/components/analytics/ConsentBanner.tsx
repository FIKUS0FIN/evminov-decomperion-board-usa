"use client";

import { useEffect, useState } from "react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import {
  ConsentChoice,
  getStoredConsent,
  OPEN_COOKIE_SETTINGS_EVENT,
  updateConsent,
} from "@/lib/consent";

export function ConsentBanner({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).consentUi;
  const [visible, setVisible] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      const timer = window.setTimeout(() => setVisible(true), 1200);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, []);

  useEffect(() => {
    const onOpen = () => {
      setShowCustom(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
  }, []);

  const choose = (choice: ConsentChoice) => {
    updateConsent(choice);
    setVisible(false);
    setShowCustom(false);
  };

  const saveCustom = () => {
    if (analyticsEnabled && marketingEnabled) choose("all");
    else if (analyticsEnabled) choose("analytics");
    else if (marketingEnabled) choose("marketing");
    else choose("necessary");
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t.title}
      className="fixed bottom-20 md:bottom-5 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 rounded-2xl border border-slate-200 bg-white/98 p-5 shadow-2xl backdrop-blur"
    >
      <p className="text-sm font-bold text-slate-900">{t.title}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{t.body}</p>

      {showCustom && (
        <div className="mt-3 space-y-2 rounded-xl bg-slate-50 p-3 text-xs">
          <label className="flex items-center justify-between gap-2 text-slate-800">
            <span>{t.analyticsLabel}</span>
            <input
              type="checkbox"
              checked={analyticsEnabled}
              onChange={(e) => setAnalyticsEnabled(e.target.checked)}
              className="h-4 w-4 accent-teal-700"
            />
          </label>
          <label className="flex items-center justify-between gap-2 text-slate-800">
            <span>{t.marketingLabel}</span>
            <input
              type="checkbox"
              checked={marketingEnabled}
              onChange={(e) => setMarketingEnabled(e.target.checked)}
              className="h-4 w-4 accent-teal-700"
            />
          </label>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => choose("all")}
          className="rounded-lg bg-teal-700 px-3.5 py-2 text-xs font-semibold text-white hover:bg-teal-800 transition-colors"
        >
          {t.acceptAll}
        </button>
        <button
          type="button"
          onClick={() => choose("necessary")}
          className="rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
        >
          {t.necessaryOnly}
        </button>
        {showCustom ? (
          <button
            type="button"
            onClick={saveCustom}
            className="rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            {t.save}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowCustom(true)}
            className="px-2 py-2 text-xs font-medium text-slate-600 underline hover:text-slate-900"
          >
            {t.customize}
          </button>
        )}
      </div>
    </div>
  );
}
