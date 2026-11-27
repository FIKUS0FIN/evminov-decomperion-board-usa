"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Mic, MicOff, ShieldCheck, Truck } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import {
  formatWeightLimit,
  getLocalizedFinish,
  getLocalizedProduct,
  ORDER_WIZARD_COPY,
} from "@/i18n/locales/catalog";
import { localizeTransitDays } from "@/i18n/locales/chrome";
import { PRODUCTS } from "@/data/products";
import { US_STATES } from "@/data/us-states";
import {
  calculateHsaPrice,
  formatKlarnaBiWeekly,
  formatUSD,
} from "@/lib/physics";
import { SITE_CONFIG } from "@/lib/site-config";
import { getAttributionSummary, sendGTMEvent } from "@/lib/gtm";

export function OrderWizard({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).orderUi;
  const ow = ORDER_WIZARD_COPY[lang];
  const searchParams = useSearchParams();

  const initialSlug = (() => {
    const p = searchParams.get("product");
    return p && PRODUCTS.some((item) => item.slug === p)
      ? p
      : "standard-pine-board";
  })();
  const initialProduct =
    PRODUCTS.find((item) => item.slug === initialSlug) || PRODUCTS[0];

  const [step, setStep] = useState<1 | 2 | 3>(() => {
    const qsStep = Number(searchParams.get("step"));
    return qsStep === 2 || qsStep === 3 ? qsStep : 1;
  });
  const [productSlug, setProductSlug] = useState(initialSlug);
  const [finish, setFinish] = useState(
    () => searchParams.get("finish") || initialProduct.finishes[0]
  );
  const [shipping, setShipping] = useState<"express" | "direct">(() =>
    searchParams.get("shipping") === "direct" ? "direct" : "express"
  );
  const [includeStand, setIncludeStand] = useState(
    () => searchParams.get("stand") === "1"
  );
  const [includeHsaDoc, setIncludeHsaDoc] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stateOrCountry, setStateOrCountry] = useState(
    () => searchParams.get("state") || "California (CA)"
  );
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState(() => {
    const angle = searchParams.get("angle");
    const goal = searchParams.get("goal");
    if (!angle && !goal) return "";
    return `${ow.calcPrefillPrefix}: ${goal ? `${ow.calcGoalWord}=${goal}` : ""}${
      angle ? ` ${ow.calcAngleWord}=${angle}°` : ""
    }`.trim();
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [orderRef, setOrderRef] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const selectedProduct =
    PRODUCTS.find((p) => p.slug === productSlug) || PRODUCTS[0];
  const localizedSelected = getLocalizedProduct(selectedProduct, lang);
  const standItem = PRODUCTS.find((p) => p.slug === "free-standing-stand");

  const boardPrice =
    shipping === "express"
      ? selectedProduct.expressPriceUsd
      : selectedProduct.directPriceUsd;
  const standPrice =
    includeStand && selectedProduct.slug !== "free-standing-stand" && standItem
      ? shipping === "express"
        ? standItem.expressPriceUsd
        : standItem.directPriceUsd
      : 0;
  const totalUsd = boardPrice + standPrice;
  const estimatedHsaNet = calculateHsaPrice(totalUsd);

  const toggleVoice = async () => {
    if (recording && mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const chunks: BlobPart[] = [];
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      recorder.ondataavailable = (ev) => {
        if (ev.data.size > 0) chunks.push(ev.data);
      };
      recorder.onstop = async () => {
        stream.getTracks().forEach((tr) => tr.stop());
        const blob = new Blob(chunks, { type: "audio/webm" });
        const form = new FormData();
        form.append("audio", blob, "voice.webm");
        form.append("lang", lang);
        try {
          const res = await fetch("/api/transcribe", {
            method: "POST",
            body: form,
          });
          const data = (await res.json()) as { text?: string };
          if (data.text) {
            setNotes((prev) => (prev ? `${prev}\n${data.text}` : data.text!));
            sendGTMEvent("voice_input_complete", { locale: lang });
          }
        } catch {
          // ignore offline fallback
        }
      };
      recorder.start();
      setRecording(true);
    } catch {
      setErrorMsg(ow.micError);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!name.trim() || !email.trim()) {
      setErrorMsg(ow.validationNameEmail);
      return;
    }
    setSubmitting(true);
    const attr = getAttributionSummary();
    const combinedNotes = [notes.trim(), attr ? `Attribution: ${attr}` : ""]
      .filter(Boolean)
      .join(" | ");
    try {
      const res = await fetch("/api/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "order_reservation",
          product: selectedProduct.slug,
          productName: selectedProduct.name,
          finish,
          shipping,
          includeStand,
          includeHsaDoc,
          totalUsd,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          stateOrCountry,
          address: address.trim(),
          notes: combinedNotes,
          lang,
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        orderRef?: string;
        checkoutUrl?: string;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || ow.submitErrorFallback);
      }
      sendGTMEvent("order_reservation_submit", {
        product_slug: selectedProduct.slug,
        value: totalUsd,
        shipping_mode: shipping,
        locale: lang,
      });
      if (data.checkoutUrl) {
        window.location.assign(data.checkoutUrl);
        return;
      }
      setOrderRef(data.orderRef || "EV-CONFIRMED");
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : ow.submitErrorCatch;
      setErrorMsg(msg);
      sendGTMEvent("order_reservation_error", { error_message: msg });
    } finally {
      setSubmitting(false);
    }
  };

  if (orderRef) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-200 bg-emerald-50/70 p-8 text-center shadow-lg">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
        <h2 className="mt-4 font-display text-2xl font-black text-slate-950">
          {t.successTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          {ow.successBody}
        </p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sm">
          <span>{ow.orderRef}:</span>
          <span className="font-mono text-teal-700">{orderRef}</span>
        </div>
        <p className="mt-4 text-xs text-slate-600">
          {ow.needFasterHelp}{" "}
          <a href={SITE_CONFIG.phoneHref} className="font-bold underline">
            {SITE_CONFIG.phoneDisplay}
          </a>{" "}
          {ow.orEmail}{" "}
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="font-bold underline"
          >
            {SITE_CONFIG.supportEmail}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div id="order-form" className="grid gap-8 lg:grid-cols-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:col-span-8">
        {/* Stepper */}
        <div className="mb-6 grid grid-cols-3 gap-2">
          {([1, 2, 3] as const).map((s) => {
            const label = s === 1 ? t.step1 : s === 2 ? t.step2 : t.step3;
            const active = step === s;
            const done = step > s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setStep(s)}
                className={`rounded-xl px-3 py-2.5 text-xs font-bold transition ${
                  active
                    ? "bg-slate-950 text-white"
                    : done
                    ? "border border-emerald-200 bg-emerald-50 text-emerald-900"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <p className="text-sm font-bold text-slate-900">{t.selectModel}</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {PRODUCTS.map((p) => {
                    const active = p.slug === productSlug;
                    const lp = getLocalizedProduct(p, lang);
                    return (
                      <button
                        key={p.slug}
                        type="button"
                        onClick={() => {
                          setProductSlug(p.slug);
                          setFinish(p.finishes[0]);
                        }}
                        className={`rounded-2xl border p-4 text-left transition ${
                          active
                            ? "border-teal-700 bg-teal-50/70 ring-2 ring-teal-700/20"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <p className="text-sm font-bold text-slate-950">
                          {lp.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-600">
                          {lp.heightLimitLabel} •{" "}
                          {formatWeightLimit(p.weightLimitLbs, lang)}
                        </p>
                        <p className="mt-2 text-sm font-extrabold text-teal-800">
                          {formatUSD(p.directPriceUsd)} {ow.directShort} •{" "}
                          {formatUSD(p.expressPriceUsd)} {ow.caExpressShort}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">{t.selectFinish}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProduct.finishes.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFinish(f)}
                      className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                        finish === f
                          ? "bg-slate-950 text-white"
                          : "border border-slate-200 bg-slate-50 text-slate-700"
                      }`}
                    >
                      {getLocalizedFinish(f, lang)}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full rounded-xl bg-teal-700 py-3.5 text-sm font-extrabold text-white hover:bg-teal-800"
              >
                {t.nextStep} →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {t.selectShipping}
                </p>
                <div className="mt-3 grid gap-3">
                  <label
                    className={`flex cursor-pointer items-start justify-between gap-4 rounded-2xl border p-4 ${
                      shipping === "express"
                        ? "border-teal-700 bg-teal-50/70"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shipping === "express"}
                        onChange={() => setShipping("express")}
                        className="mt-1 accent-teal-700"
                      />
                      <div>
                        <p className="text-sm font-bold text-slate-950">
                          {ow.shippingExpress}
                        </p>
                        <p className="text-xs text-slate-600">
                          {ow.shippingExpressDesc}
                        </p>
                      </div>
                    </div>
                    <span className="font-extrabold text-slate-950">
                      {formatUSD(selectedProduct.expressPriceUsd)}
                    </span>
                  </label>

                  <label
                    className={`flex cursor-pointer items-start justify-between gap-4 rounded-2xl border p-4 ${
                      shipping === "direct"
                        ? "border-teal-700 bg-teal-50/70"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shipping === "direct"}
                        onChange={() => setShipping("direct")}
                        className="mt-1 accent-teal-700"
                      />
                      <div>
                        <p className="text-sm font-bold text-slate-950">
                          {ow.shippingDirect}
                        </p>
                        <p className="text-xs text-slate-600">
                          {ow.shippingDirectDesc}
                        </p>
                      </div>
                    </div>
                    <span className="font-extrabold text-slate-950">
                      {formatUSD(selectedProduct.directPriceUsd)}
                    </span>
                  </label>
                </div>
              </div>

              {selectedProduct.slug !== "free-standing-stand" && (
                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <input
                    type="checkbox"
                    checked={includeStand}
                    onChange={(e) => setIncludeStand(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-teal-700"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {ow.addFreeStand}
                    </p>
                    <p className="text-xs text-slate-600">
                      {ow.addFreeStandDesc}
                    </p>
                  </div>
                </label>
              )}

              <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
                <input
                  type="checkbox"
                  checked={includeHsaDoc}
                  onChange={(e) => setIncludeHsaDoc(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-emerald-700"
                />
                <span className="text-xs font-semibold text-emerald-950">
                  {ow.hsaCheckbox}
                </span>
              </label>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  ← {t.prevStep}
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 rounded-xl bg-teal-700 py-3 text-sm font-extrabold text-white hover:bg-teal-800"
                >
                  {t.nextStep} →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3.5 text-xs leading-relaxed text-amber-950">
                {ow.stripeNotice}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    {t.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    {t.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={ow.phonePlaceholder}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    {t.stateLabel}
                  </label>
                  <select
                    value={stateOrCountry}
                    onChange={(e) => setStateOrCountry(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
                  >
                    <optgroup label={ow.usStatesOptgroup}>
                      {US_STATES.map((st) => (
                        <option key={st.code} value={`${st.name} (${st.code})`}>
                          {st.name} ({st.code}) —{" "}
                          {localizeTransitDays(st.expressDays, lang)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label={ow.intlOptgroup}>
                      <option value="Canada">{ow.intlCanada}</option>
                      <option value="European Union">{ow.intlEu}</option>
                      <option value="United Kingdom">{ow.intlUk}</option>
                      <option value="Ukraine">{ow.intlUkraine}</option>
                      <option value="Other International">{ow.intlOther}</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700">
                  {t.addressLabel}
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700">
                    {t.notesLabel}
                  </label>
                  <button
                    type="button"
                    onClick={toggleVoice}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold ${
                      recording
                        ? "bg-red-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {recording ? (
                      <MicOff className="h-3.5 w-3.5" />
                    ) : (
                      <Mic className="h-3.5 w-3.5" />
                    )}
                    <span>{recording ? t.voiceRecording : t.voiceDictate}</span>
                  </button>
                </div>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
                />
              </div>

              {errorMsg && (
                <p className="rounded-xl bg-red-50 px-3.5 py-2 text-xs font-semibold text-red-700">
                  {errorMsg}
                </p>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  ← {t.prevStep}
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 rounded-xl bg-teal-700 py-3.5 text-sm font-extrabold text-white shadow hover:bg-teal-800 disabled:opacity-50"
                >
                  {submitting ? t.submitting : t.submitReservation}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Live Summary Sidebar */}
      <aside className="rounded-3xl bg-slate-950 p-6 text-white lg:col-span-4 lg:self-start">
        <h2 className="font-display text-lg font-extrabold">{t.summaryTitle}</h2>
        <div className="mt-4 space-y-3 border-b border-white/10 pb-4 text-sm">
          <div className="flex justify-between gap-2">
            <span className="text-slate-300">{localizedSelected.name}</span>
            <span className="font-bold">{formatUSD(boardPrice)}</span>
          </div>
          <p className="text-xs text-slate-400">
            {ow.finishLabel}: {getLocalizedFinish(finish, lang)}
          </p>
          {standPrice > 0 && (
            <div className="flex justify-between gap-2">
              <span className="text-slate-300">{ow.standItemLabel}</span>
              <span className="font-bold">{formatUSD(standPrice)}</span>
            </div>
          )}
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-slate-300">{t.totalLabel}</span>
            <span className="text-2xl font-black text-white">
              {formatUSD(totalUsd)}
            </span>
          </div>
          <div className="flex items-baseline justify-between text-xs text-emerald-400">
            <span>{ow.estimatedHsaLabel}</span>
            <span className="font-bold">~{formatUSD(estimatedHsaNet)}</span>
          </div>
          <p className="text-[11px] text-slate-400">
            {ow.klarnaInstallments}: {formatKlarnaBiWeekly(totalUsd)}
          </p>
        </div>

        <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-xs text-slate-300">
          <li className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>{ow.trialWarrantyLine}</span>
          </li>
          <li className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-emerald-400" />
            <span>{ow.trackingLine}</span>
          </li>
        </ul>
      </aside>
    </div>
  );
}
