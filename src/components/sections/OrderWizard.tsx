"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, LogOut, Mic, MicOff, ShieldCheck, Truck } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { AUTH_UI_COPY } from "@/i18n/locales/auth";
import { AuthCard } from "@/components/auth/AuthCard";
import { useAuth } from "@/components/auth/useAuth";
import { getLocalizedHref } from "@/lib/url";
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

const CONFIG_COPY: Record<
  Locale,
  {
    widthHeading: string;
    standardWidth: string;
    standardWidthSub: string;
    wideWidth: string;
    wideWidthSub: string;
    standHeading: string;
    standIncludedTitle: string;
    standIncludedDesc: string;
    standWith: string;
    standWithDesc: string;
    standWithout: string;
    standWithoutDesc: string;
    standWithoutWarning: string;
    step4Label: string;
    continueToSummary: string;
    summaryStepTitle: string;
    deliveryReviewTitle: string;
    editDetails: string;
    shippingTwoWeekNote: string;
    signInToConfirmNote: string;
  }
> = {
  en: {
    widthHeading: "Select Board Width",
    standardWidth: "Standard Width",
    standardWidthSub: "Up to 220 lbs • Up to 6'4\"",
    wideWidth: "Wide Heavy-Duty (+$25)",
    wideWidthSub: "For higher weight & broad build • Up to 330 lbs • 6'9\"",
    standHeading: "Support Stand Configuration",
    standIncludedTitle: "Support Stand Included",
    standIncludedDesc: "The 2-Piece Folding Evminov Board ships complete with a sturdy support stand.",
    standWith: "With Support Stand (+$50)",
    standWithDesc: "Ready to use anywhere without needing an external support.",
    standWithout: "Without Support Stand",
    standWithoutDesc: "Compact travel kit — lowest weight & price.",
    standWithoutWarning: "Note: Without a support stand, you will need a sturdy, reliable support structure before starting your sessions.",
    step4Label: "4. Order Summary",
    continueToSummary: "Continue to Order Summary",
    summaryStepTitle: "Review Your Order & Confirm",
    deliveryReviewTitle: "Delivery Details",
    editDetails: "Edit",
    shippingTwoWeekNote: "Current Shipping Schedule: All US & Canada orders currently deliver in ~2 weeks via direct dispatch. Faster local express shipping (2–5 days) resumes in the New Year.",
    signInToConfirmNote: "Sign in or create your free Evminov account below to confirm your reservation and unlock live order tracking in your Patient Portal.",
  },
  es: {
    widthHeading: "Selecciona el Ancho de la Tabla",
    standardWidth: "Ancho Estándar",
    standardWidthSub: "Hasta 220 lbs • Hasta 193 cm",
    wideWidth: "Ancho Reforzado Wide (+$25)",
    wideWidthSub: "Para mayor peso • Hasta 330 lbs (150 kg) • 206 cm",
    standHeading: "Configuración de Soporte",
    standIncludedTitle: "Soporte Incluido",
    standIncludedDesc: "La tabla plegable de 2 piezas se entrega con su soporte resistente incluido.",
    standWith: "Con Soporte (+$50)",
    standWithDesc: "Lista para usar en cualquier lugar con estabilidad total.",
    standWithout: "Sin Soporte",
    standWithoutDesc: "Opción compacta de viaje.",
    standWithoutWarning: "Nota: Sin soporte, deberá asegurar un apoyo firme y fiable antes de iniciar los ejercicios.",
    step4Label: "4. Resumen y Confirmar",
    continueToSummary: "Continuar al Resumen del Pedido",
    summaryStepTitle: "Revisa Tu Pedido y Confirma",
    deliveryReviewTitle: "Datos de Entrega",
    editDetails: "Editar",
    shippingTwoWeekNote: "Aviso de Envío: Actualmente los envíos a EE. UU. y Canadá tardan ~2 semanas por envío directo. El envío exprés local (2–5 días) vuelve en Año Nuevo.",
    signInToConfirmNote: "Inicia sesión o crea tu cuenta Evminov abajo para confirmar tu reserva y seguir tu envío en tiempo real.",
  },
  fr: {
    widthHeading: "Choisissez la Largeur de la Planche",
    standardWidth: "Largeur Standard",
    standardWidthSub: "Jusqu'à 100 kg (220 lbs) • 193 cm",
    wideWidth: "Large Renforcée Wide (+$25)",
    wideWidthSub: "Pour poids plus élevé • Jusqu'à 150 kg (330 lbs) • 206 cm",
    standHeading: "Configuration du Support",
    standIncludedTitle: "Support Inclus",
    standIncludedDesc: "La planche pliable 2 pièces est livrée avec son support stable inclus.",
    standWith: "Avec Support (+$50)",
    standWithDesc: "Prête à l'emploi partout en toute autonomie.",
    standWithout: "Sans Support",
    standWithoutDesc: "Format voyage ultra-compact.",
    standWithoutWarning: "Remarque : Sans support, vous devrez prévoir un appui solide et fiable avant chaque séance.",
    step4Label: "4. Récapitulatif",
    continueToSummary: "Continuer vers le Récapitulatif",
    summaryStepTitle: "Vérifiez et Confirmez Votre Commande",
    deliveryReviewTitle: "Coordonnées de Livraison",
    editDetails: "Modifier",
    shippingTwoWeekNote: "Calendrier de Livraison : Les commandes vers les États-Unis et le Canada sont livrées en ~2 semaines par envoi direct. La livraison express locale (2–5 jours) reprend au Nouvel An.",
    signInToConfirmNote: "Connectez-vous ou créez votre compte Evminov ci-dessous pour confirmer votre commande et accéder au suivi en direct.",
  },
  de: {
    widthHeading: "Board-Breite wählen",
    standardWidth: "Standard-Breite",
    standardWidthSub: "Bis 100 kg (220 lbs) • Bis 193 cm",
    wideWidth: "Breit Heavy-Duty Wide (+$25)",
    wideWidthSub: "Für höheres Gewicht • Bis 150 kg (330 lbs) • 206 cm",
    standHeading: "Ständer-Konfiguration",
    standIncludedTitle: "Stützständer im Lieferumfang",
    standIncludedDesc: "Das 2-teilige Evminov Board wird komplett mit stabilem Stützständer geliefert.",
    standWith: "Mit Stützständer (+$50)",
    standWithDesc: "Sofort einsatzbereit ohne externe Halterung.",
    standWithout: "Ohne Stützständer",
    standWithoutDesc: "Kompakte Reisevariante.",
    standWithoutWarning: "Hinweis: Ohne Stützständer benötigen Sie vor dem Training eine stabile, zuverlässige Auflage bzw. Abstützung.",
    step4Label: "4. Bestellübersicht",
    continueToSummary: "Weiter zur Bestellübersicht",
    summaryStepTitle: "Bestellung prüfen & bestätigen",
    deliveryReviewTitle: "Lieferdaten",
    editDetails: "Bearbeiten",
    shippingTwoWeekNote: "Aktueller Versandhinweis: Lieferungen in die USA & nach Kanada dauern derzeit ca. 2 Wochen per Direktversand. Der schnellere Express-Versand (2–5 Tage) startet ab Neujahr wieder.",
    signInToConfirmNote: "Melden Sie sich unten an oder erstellen Sie ein kostenloses Evminov-Konto, um Ihre Bestellung zu bestätigen und im Portal zu verfolgen.",
  },
  uk: {
    widthHeading: "Оберіть ширину дошки",
    standardWidth: "Стандартна ширина",
    standardWidthSub: "До 100 кг (220 lbs) • Зріст до 193 см",
    wideWidth: "Широка Heavy-Duty (+$25)",
    wideWidthSub: "Для більшої ваги та широких плечей • До 150 кг (330 lbs)",
    standHeading: "Комплектація стійкою-підставкою",
    standIncludedTitle: "Стійка-підставка в комплекті",
    standIncludedDesc: "2-секційна дошка Євмінова поставляється разом із надійною стійкою-підставкою.",
    standWith: "З підставкою (+$50)",
    standWithDesc: "Готово до занять одразу вдома чи в поїздці.",
    standWithout: "Без підставки",
    standWithoutDesc: "Максимально компактний дорожній варіант.",
    standWithoutWarning: "Зверніть увагу: у варіанті без підставки перед початком занять потрібно знайти надійну опору.",
    step4Label: "4. Підсумок і Підтвердження",
    continueToSummary: "Перейти до Підсумку Замовлення",
    summaryStepTitle: "Перевірте Замовлення та Підтвердіть",
    deliveryReviewTitle: "Дані Доставки",
    editDetails: "Змінити",
    shippingTwoWeekNote: "Актуальний графік доставки: наразі доставка до США та Канади займає ~2 тижні (пряма відправка). З Нового року повернеться швидка локальна експрес-доставка (2–5 днів).",
    signInToConfirmNote: "Увійдіть або зареєструйтесь нижче, щоб підтвердити замовлення та відстежувати його статус у Клієнтському Порталі.",
  },
  ru: {
    widthHeading: "Выберите ширину доски",
    standardWidth: "Стандартная ширина",
    standardWidthSub: "До 100 кг (220 lbs) • Рост до 193 см",
    wideWidth: "Широкая Heavy-Duty (+$25)",
    wideWidthSub: "Для большего веса и широких плеч • До 150 кг (330 lbs)",
    standHeading: "Комплектация стойкой-подставкой",
    standIncludedTitle: "Стойка-подставка в комплекте",
    standIncludedDesc: "2-секционная доска Евминова поставляется в комплекте с надёжной стойкой-подставкой.",
    standWith: "С подставкой (+$50)",
    standWithDesc: "Готово к занятиям сразу дома или в поездке.",
    standWithout: "Без подставки",
    standWithoutDesc: "Максимально компактный дорожный вариант.",
    standWithoutWarning: "Обратите внимание: в варианте без подставки перед занятиями необходимо найти надёжную опору.",
    step4Label: "4. Итог и Подтверждение",
    continueToSummary: "Перейти к Итогу Заказа",
    summaryStepTitle: "Проверьте Заказ и Подтвердите",
    deliveryReviewTitle: "Данные Доставки",
    editDetails: "Изменить",
    shippingTwoWeekNote: "Актуальный график доставки: сейчас доставка в США и Канаду занимает ~2 недели (прямая отправка). С Нового года вернётся быстрая локальная экспресс-доставка (2–5 дней).",
    signInToConfirmNote: "Войдите или зарегистрируйтесь ниже, чтобы подтвердить заказ и отслеживать его статус в Личном Кабинете.",
  },
};

const ORDER_DRAFT_STORAGE_KEY = "evminov_order_draft_v1";

export function OrderWizard({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).orderUi;
  const ow = ORDER_WIZARD_COPY[lang];
  const cfg = CONFIG_COPY[lang];
  const authCopy = AUTH_UI_COPY[lang];
  const searchParams = useSearchParams();
  const { user, setUser, loading: authLoading, googleOAuthEnabled, logout } = useAuth();

  const initialSlug = (() => {
    const p = searchParams.get("product");
    return p && PRODUCTS.some((item) => item.slug === p)
      ? p
      : "2-piece-folding-board";
  })();
  const initialProduct =
    PRODUCTS.find((item) => item.slug === initialSlug) || PRODUCTS[0];

  const [step, setStep] = useState<1 | 2 | 3 | 4>(() => {
    const qsStep = Number(searchParams.get("step"));
    return qsStep === 2 || qsStep === 3 || qsStep === 4 ? qsStep : 1;
  });
  const [productSlug, setProductSlug] = useState(initialSlug);
  const [boardWidth, setBoardWidth] = useState<"standard" | "wide">(() =>
    searchParams.get("width") === "wide" ||
    searchParams.get("product") === "wide-heavy-duty-board"
      ? "wide"
      : "standard"
  );
  const [finish, setFinish] = useState(
    () =>
      (searchParams.get("finish") &&
        initialProduct.finishes.includes(searchParams.get("finish")!))
        ? searchParams.get("finish")!
        : initialProduct.finishes[0]
  );
  const [shipping, setShipping] = useState<"express" | "direct">(() =>
    searchParams.get("shipping") === "direct" ? "direct" : "express"
  );
  const [includeStand, setIncludeStand] = useState<boolean>(() => {
    if (initialProduct.standIncluded) return true;
    return searchParams.get("stand") === "1";
  });
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

  // Restore saved delivery details after OAuth redirect (e.g., returning to Step 4)
  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(ORDER_DRAFT_STORAGE_KEY);
      if (!raw) return;
      const draft = JSON.parse(raw) as {
        name?: string;
        email?: string;
        phone?: string;
        stateOrCountry?: string;
        address?: string;
        notes?: string;
        boardWidth?: "standard" | "wide";
        finish?: string;
      };
      if (draft.name) setName((prev) => prev || draft.name!);
      if (draft.email) setEmail((prev) => prev || draft.email!);
      if (draft.phone) setPhone((prev) => prev || draft.phone!);
      if (draft.stateOrCountry) setStateOrCountry(draft.stateOrCountry);
      if (draft.address) setAddress((prev) => prev || draft.address!);
      if (draft.notes) setNotes((prev) => prev || draft.notes!);
      if (draft.boardWidth === "wide" || draft.boardWidth === "standard") {
        setBoardWidth(draft.boardWidth);
      }
      if (draft.finish) setFinish(draft.finish);
    } catch {
      // ignore storage errors
    }
  }, []);

  const saveDraftAndGoToSummary = () => {
    setErrorMsg("");
    if (!name.trim() || !email.trim()) {
      setErrorMsg(ow.validationNameEmail);
      return;
    }
    try {
      window.sessionStorage.setItem(
        ORDER_DRAFT_STORAGE_KEY,
        JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          stateOrCountry,
          address: address.trim(),
          notes: notes.trim(),
          boardWidth,
          finish,
        })
      );
    } catch {
      // ignore storage errors
    }
    setStep(4);
  };

  useEffect(() => {
    if (!user) return;
    setName((prev) => prev || user.name || "");
    setEmail((prev) => prev || user.email || "");
    setPhone((prev) => prev || user.phone || "");
    if (user.shippingState) {
      setStateOrCountry((prev) =>
        prev === "California (CA)" ? user.shippingState || prev : prev
      );
    }
    const savedFullAddress = [
      user.shippingAddress,
      user.shippingCity,
      user.shippingZip,
    ]
      .filter(Boolean)
      .join(", ");
    if (savedFullAddress) {
      setAddress((prev) => prev || savedFullAddress);
    }
  }, [user]);

  const selectedProduct =
    PRODUCTS.find((p) => p.slug === productSlug) || PRODUCTS[0];
  const localizedSelected = getLocalizedProduct(selectedProduct, lang);

  const effectiveStandIncluded = selectedProduct.standIncluded || includeStand;
  const widthSurcharge =
    boardWidth === "wide" ? selectedProduct.wideSurchargeUsd : 0;
  const boardPrice =
    (shipping === "express"
      ? selectedProduct.expressPriceUsd
      : selectedProduct.directPriceUsd) + widthSurcharge;
  const standPrice =
    !selectedProduct.standIncluded && includeStand
      ? selectedProduct.standAddUsd
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
          productName: `${selectedProduct.name} (${
            boardWidth === "wide" ? "Wide Heavy-Duty 330 lbs" : "Standard Width 220 lbs"
          } • ${effectiveStandIncluded ? "With Support Stand" : "Without Support Stand"})`,
          finish,
          shipping,
          includeStand: effectiveStandIncluded,
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
        try {
          window.sessionStorage.removeItem(ORDER_DRAFT_STORAGE_KEY);
        } catch {
          // ignore
        }
        window.location.assign(data.checkoutUrl);
        return;
      }
      try {
        window.sessionStorage.removeItem(ORDER_DRAFT_STORAGE_KEY);
      } catch {
        // ignore
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
        {/* 4-Step Stepper */}
        <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {([1, 2, 3, 4] as const).map((s) => {
            const label =
              s === 1
                ? t.step1
                : s === 2
                ? t.step2
                : s === 3
                ? t.step3
                : cfg.step4Label;
            const active = step === s;
            const done = step > s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => {
                  if (s === 4) {
                    saveDraftAndGoToSummary();
                  } else {
                    setStep(s);
                  }
                }}
                className={`cursor-pointer rounded-xl px-2.5 py-2.5 text-[11px] font-bold transition sm:text-xs ${
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
                          if (p.standIncluded) setIncludeStand(true);
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

              {/* Board Width Selector: Standard vs Wide Heavy-Duty */}
              <div>
                <p className="text-sm font-bold text-slate-900">{cfg.widthHeading}</p>
                <div className="mt-2 grid gap-2.5 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setBoardWidth("standard")}
                    className={`rounded-2xl border p-3.5 text-left transition ${
                      boardWidth === "standard"
                        ? "border-teal-700 bg-teal-50/70 ring-2 ring-teal-700/20"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <p className="text-xs font-extrabold text-slate-950">
                      {cfg.standardWidth}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-600">
                      {cfg.standardWidthSub}
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBoardWidth("wide")}
                    className={`rounded-2xl border p-3.5 text-left transition ${
                      boardWidth === "wide"
                        ? "border-teal-700 bg-teal-50/70 ring-2 ring-teal-700/20"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <p className="text-xs font-extrabold text-slate-950">
                      {cfg.wideWidth}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-600">
                      {cfg.wideWidthSub}
                    </p>
                  </button>
                </div>
              </div>

              {/* Support Stand Configuration */}
              <div>
                <p className="text-sm font-bold text-slate-900">{cfg.standHeading}</p>
                {selectedProduct.standIncluded ? (
                  <div className="mt-2 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-3.5 text-xs text-emerald-950">
                    <p className="font-extrabold">{cfg.standIncludedTitle}</p>
                    <p className="mt-0.5 text-emerald-900/90">{cfg.standIncludedDesc}</p>
                  </div>
                ) : (
                  <div className="mt-2 space-y-2.5">
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      <button
                        type="button"
                        onClick={() => setIncludeStand(true)}
                        className={`rounded-2xl border p-3.5 text-left transition ${
                          includeStand
                            ? "border-teal-700 bg-teal-50/70 ring-2 ring-teal-700/20"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <p className="text-xs font-extrabold text-slate-950">
                          {cfg.standWith}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-600">
                          {cfg.standWithDesc}
                        </p>
                      </button>
                      <button
                        type="button"
                        onClick={() => setIncludeStand(false)}
                        className={`rounded-2xl border p-3.5 text-left transition ${
                          !includeStand
                            ? "border-teal-700 bg-teal-50/70 ring-2 ring-teal-700/20"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <p className="text-xs font-extrabold text-slate-950">
                          {cfg.standWithout}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-600">
                          {cfg.standWithoutDesc}
                        </p>
                      </button>
                    </div>
                    {!includeStand && (
                      <div className="rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-2.5 text-xs font-medium text-amber-950">
                        {cfg.standWithoutWarning}
                      </div>
                    )}
                  </div>
                )}
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
              {/* Current US & Canada 2-Week Shipping Notice */}
              <div className="flex items-start gap-2.5 rounded-2xl border border-amber-300/80 bg-amber-50 p-4 text-xs leading-relaxed text-amber-950">
                <Truck className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                <p className="font-semibold">{cfg.shippingTwoWeekNote}</p>
              </div>

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
                  className="cursor-pointer rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  ← {t.prevStep}
                </button>
                <button
                  type="button"
                  onClick={saveDraftAndGoToSummary}
                  className="flex-1 cursor-pointer rounded-xl bg-teal-700 py-3.5 text-sm font-extrabold text-white shadow hover:bg-teal-800"
                >
                  {cfg.continueToSummary} →
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-5">
              {/* Full Order Summary Review Card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <h3 className="font-display text-base font-black text-slate-950">
                    {cfg.summaryStepTitle}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="cursor-pointer text-xs font-bold text-teal-700 hover:underline"
                  >
                    {cfg.editDetails}
                  </button>
                </div>

                <dl className="mt-3.5 grid gap-3 text-xs sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-slate-500">{t.selectModel}</dt>
                    <dd className="mt-0.5 font-extrabold text-slate-950">
                      {localizedSelected.name}
                    </dd>
                    <dd className="text-slate-600">
                      {boardWidth === "wide" ? cfg.wideWidth : cfg.standardWidth} •{" "}
                      {getLocalizedFinish(finish, lang)}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">
                      {cfg.deliveryReviewTitle}
                    </dt>
                    <dd className="mt-0.5 font-extrabold text-slate-950">
                      {name || user?.name}
                    </dd>
                    <dd className="text-slate-600">
                      {email || user?.email}
                      {phone ? ` • ${phone}` : ""}
                    </dd>
                    <dd className="text-slate-600">
                      {[address, stateOrCountry].filter(Boolean).join(", ")}
                    </dd>
                  </div>
                </dl>

                <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 text-sm">
                  <span className="font-bold text-slate-700">{t.totalLabel}</span>
                  <span className="text-xl font-black text-teal-800">
                    {formatUSD(totalUsd)}
                  </span>
                </div>
              </div>

              {/* Auth Step on Order Summary Screen */}
              {authLoading && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-sm font-semibold text-slate-600">
                  {authCopy.loadingSession}
                </div>
              )}

              {!authLoading && !user && (
                <div className="space-y-3">
                  <p className="rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 text-xs font-semibold text-emerald-950">
                    {cfg.signInToConfirmNote}
                  </p>
                  <AuthCard
                    lang={lang}
                    context="order"
                    returnTo={`${getLocalizedHref("/order/", lang)}?product=${encodeURIComponent(productSlug)}&width=${boardWidth}&shipping=${shipping}&stand=${includeStand ? "1" : "0"}&step=4`}
                    googleOAuthEnabled={googleOAuthEnabled}
                    onAuthenticated={(authedUser) => {
                      setUser(authedUser);
                    }}
                  />
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="cursor-pointer rounded-xl border border-slate-300 px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
                    >
                      ← {t.prevStep}
                    </button>
                  </div>
                </div>
              )}

              {!authLoading && user && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 text-xs text-emerald-950">
                    <div>
                      <span className="font-semibold text-emerald-800">
                        {authCopy.signedInAs}:{" "}
                      </span>
                      <span className="font-extrabold">{user.email}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => void logout()}
                      className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-emerald-300 bg-white px-2.5 py-1 text-[11px] font-bold text-emerald-900 hover:bg-emerald-100"
                    >
                      <LogOut className="h-3 w-3" />
                      <span>{authCopy.signOut}</span>
                    </button>
                  </div>

                  {errorMsg && (
                    <p className="rounded-xl bg-red-50 px-3.5 py-2 text-xs font-semibold text-red-700">
                      {errorMsg}
                    </p>
                  )}

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="cursor-pointer rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                    >
                      ← {t.prevStep}
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 cursor-pointer rounded-xl bg-emerald-600 py-3.5 text-sm font-black text-white shadow-lg transition hover:bg-emerald-700 disabled:opacity-50"
                    >
                      {submitting ? t.submitting : t.submitReservation}
                    </button>
                  </div>
                </div>
              )}
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

        <div className="mt-5 space-y-1.5 border-t border-white/10 pt-4 text-xs text-slate-300">
          <a
            href={`mailto:${SITE_CONFIG.ordersEmail}`}
            className="block font-semibold text-emerald-300 hover:text-emerald-200"
          >
            {SITE_CONFIG.ordersEmail}
          </a>
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="block text-slate-300 hover:text-white"
          >
            {SITE_CONFIG.supportEmail}
          </a>
        </div>
      </aside>
    </div>
  );
}
