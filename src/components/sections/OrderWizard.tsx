"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, LogOut, MessageCircle, Mic, MicOff, ShieldCheck, Truck } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { AUTH_UI_COPY } from "@/i18n/locales/auth";
import { AuthCard } from "@/components/auth/AuthCard";
import { useAuth } from "@/components/auth/useAuth";
import { getLocalizedHref } from "@/lib/url";
import {
  ACCESSORIES_SECTION_COPY,
  formatWeightLimit,
  getLocalizedFinish,
  getLocalizedProduct,
  ORDER_WIZARD_COPY,
} from "@/i18n/locales/catalog";
import { localizeTransitDays } from "@/i18n/locales/chrome";
import {
  getProductPrice,
  OFFICIAL_ACCESSORIES,
  OfficialAccessoryId,
  PRODUCTS,
} from "@/data/products";
import { US_STATES } from "@/data/us-states";
import { CA_PROVINCES } from "@/data/ca-provinces";
import { IS_CANADA } from "@/lib/region-config";
import {
  calculateHsaPrice,
  formatKlarnaBiWeekly,
  formatUSD,
} from "@/lib/physics";
import { SITE_CONFIG } from "@/lib/site-config";
import { getAttributionSummary, sendGTMEvent } from "@/lib/gtm";

const CONTINUE_ORDER_CTA: Record<Locale, string> = {
  en: "Continue Making Order →",
  es: "Continuar con el pedido →",
  fr: "Continuer la commande →",
  de: "Bestellung fortsetzen →",
  uk: "Продовжити оформлення →",
  ru: "Продолжить оформление →",
};

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
    widthHeading: "Select Board Width (26 cm / 30 cm)",
    standardWidth: "Standard Width — 26 cm",
    standardWidthSub: "Up to 100 kg (220 lbs) • Up to 6'4\"",
    wideWidth: "Reinforced Wide — 30 cm",
    wideWidthSub: "For users over 100 kg (up to 330 lbs / 150 kg) • 6'9\"",
    standHeading: "Official Accessories & Add-Ons",
    standIncludedTitle: "4-Piece Demountable Ladder Stand",
    standIncludedDesc: "Optional 4-piece ladder stand (max height 123 cm) fits both 26 cm and 30 cm boards.",
    standWith: "With 4-Piece Ladder Stand",
    standWithDesc: "Max height 123 cm — fits 26 cm & 30 cm boards.",
    standWithout: "Board Only (Wall Mount Kit Included)",
    standWithoutDesc: "Includes wall mounting hardware & Glisson Loop.",
    standWithoutWarning: "Note: Wall mounting hardware is included. Add the 4-Piece Ladder Stand (max 123 cm) or Mounting Hooks below if you prefer freestanding or Swedish Wall setup.",
    step4Label: "4. Order Summary",
    continueToSummary: "Continue to Order Summary",
    summaryStepTitle: "Review Your Order & Confirm",
    deliveryReviewTitle: "Delivery Details",
    editDetails: "Edit",
    shippingTwoWeekNote: "International Courier Delivery: All US & Canada demountable board orders deliver via tracked international carriers in approximately 2 weeks. Every board includes a 1-Year Warranty.",
    signInToConfirmNote: "Sign in or create your free Evminov account below to confirm your reservation and unlock live order tracking in your Patient Portal.",
  },
  es: {
    widthHeading: "Selecciona el Ancho de la Tabla (26 cm / 30 cm)",
    standardWidth: "Ancho Estándar — 26 cm",
    standardWidthSub: "Hasta 100 kg (220 lbs) • Hasta 193 cm",
    wideWidth: "Reforzada Ancha — 30 cm",
    wideWidthSub: "Para peso superior a 100 kg (hasta 150 kg / 330 lbs)",
    standHeading: "Accesorios Oficiales",
    standIncludedTitle: "Soporte-Escalera Desmontable de 4 Piezas",
    standIncludedDesc: "Soporte desmontable en 4 partes (altura máx. 123 cm) para modelos de 26 cm y 30 cm.",
    standWith: "Con Soporte-Escalera 4 Piezas",
    standWithDesc: "Altura máx. 123 cm — compatible con 26 cm y 30 cm.",
    standWithout: "Solo Tabla (Incluye Kit de Pared)",
    standWithoutDesc: "Incluye herrajes de pared y Lazo de Glisson.",
    standWithoutWarning: "Nota: Incluye herrajes de pared. Añade el Soporte-Escalera de 4 piezas o Ganchos abajo si lo deseas.",
    step4Label: "4. Resumen y Confirmar",
    continueToSummary: "Continuar al Resumen del Pedido",
    summaryStepTitle: "Revisa Tu Pedido y Confirma",
    deliveryReviewTitle: "Datos de Entrega",
    editDetails: "Editar",
    shippingTwoWeekNote: "Envío Internacional: Todos los pedidos para EE. UU. y Canadá se entregan por mensajería internacional en aproximadamente 2 semanas. Garantía de 1 Año.",
    signInToConfirmNote: "Inicia sesión o crea tu cuenta Evminov abajo para confirmar tu reserva y seguir tu envío en tiempo real.",
  },
  fr: {
    widthHeading: "Choisissez la Largeur (26 cm / 30 cm)",
    standardWidth: "Largeur Standard — 26 cm",
    standardWidthSub: "Jusqu'à 100 kg (220 lbs) • 193 cm",
    wideWidth: "Large Renforcée — 30 cm",
    wideWidthSub: "Pour plus de 100 kg (jusqu'à 150 kg / 330 lbs)",
    standHeading: "Accessoires Officiels",
    standIncludedTitle: "Support-Échelle Démontable 4 Pièces",
    standIncludedDesc: "Support démontable en 4 pièces (hauteur max 123 cm) pour modèles 26 cm et 30 cm.",
    standWith: "Avec Support-Échelle 4 Pièces",
    standWithDesc: "Hauteur max 123 cm — compatible 26 cm et 30 cm.",
    standWithout: "Planche Seule (Kit Mural Inclus)",
    standWithoutDesc: "Inclut kit de fixation murale et Boucle de Glisson.",
    standWithoutWarning: "Remarque : Kit mural inclus. Ajoutez le Support-Échelle 4 pièces ou les Crochets ci-dessous si besoin.",
    step4Label: "4. Récapitulatif",
    continueToSummary: "Continuer vers le Récapitulatif",
    summaryStepTitle: "Vérifiez et Confirmez Votre Commande",
    deliveryReviewTitle: "Coordonnées de Livraison",
    editDetails: "Modifier",
    shippingTwoWeekNote: "Livraison Internationale : Les commandes USA et Canada sont livrées par transporteurs internationaux en environ 2 semaines. Garantie 1 An incluse.",
    signInToConfirmNote: "Connectez-vous ou créez votre compte Evminov ci-dessous pour confirmer votre commande et accéder au suivi en direct.",
  },
  de: {
    widthHeading: "Board-Breite wählen (26 cm / 30 cm)",
    standardWidth: "Standardbreite — 26 cm",
    standardWidthSub: "Bis 100 kg (220 lbs) • Bis 193 cm",
    wideWidth: "Verstärkt Breit — 30 cm",
    wideWidthSub: "Für über 100 kg Körpergewicht (bis 150 kg / 330 lbs)",
    standHeading: "Offizielles Zubehör",
    standIncludedTitle: "4-teiliger Zerlegbarer Leiterständer",
    standIncludedDesc: "Zerlegbarer Leiterständer (max. 123 cm) passend für 26 cm und 30 cm Boards.",
    standWith: "Mit 4-teiligem Leiterständer",
    standWithDesc: "Max. Höhe 123 cm — für 26 cm & 30 cm Boards.",
    standWithout: "Nur Board (Wandmontageset inkl.)",
    standWithoutDesc: "Inkl. Wandhalterung und Glisson-Schlaufe.",
    standWithoutWarning: "Hinweis: Wandhalterung ist enthalten. Optionalen 4-teiligen Leiterständer oder Haken unten auswählen.",
    step4Label: "4. Bestellübersicht",
    continueToSummary: "Weiter zur Bestellübersicht",
    summaryStepTitle: "Bestellung prüfen & bestätigen",
    deliveryReviewTitle: "Lieferdaten",
    editDetails: "Bearbeiten",
    shippingTwoWeekNote: "Internationaler Kurierversand: Bestellungen in die USA & nach Kanada dauern ca. 2 Wochen. Jedes Board beinhaltet 1 Jahr Garantie.",
    signInToConfirmNote: "Melden Sie sich unten an oder erstellen Sie ein kostenloses Evminov-Konto, um Ihre Bestellung zu bestätigen und im Portal zu verfolgen.",
  },
  uk: {
    widthHeading: "Оберіть ширину панелі (26 см / 30 см)",
    standardWidth: "Стандартна ширина — 26 см",
    standardWidthSub: "Для ваги до 100 кг (220 lbs) • Зріст до 193 см",
    wideWidth: "Посилена широка — 30 см",
    wideWidthSub: "Для ваги понад 100 кг (до 150 кг / 330 lbs)",
    standHeading: "Офіційні аксесуари",
    standIncludedTitle: "Стійка-драбинка розбірна (4 частини)",
    standIncludedDesc: "Макс. висота 123 см — підходить для стандартної (26 см) та посиленої (30 см) моделей.",
    standWith: "Зі стійкою-драбинкою (4 частини)",
    standWithDesc: "Макс. 123 см — без свердління стін.",
    standWithout: "Лише дошка (кріплення у стіну в комплекті)",
    standWithoutDesc: "У комплекті петля Гліссона, кріплення у стіну та паспорт.",
    standWithoutWarning: "Примітка: кріплення у стіну вже в комплекті. Нижче можна додати стійку-драбинку, гачки або чохол.",
    step4Label: "4. Підсумок і підтвердження",
    continueToSummary: "Перейти до підсумку замовлення",
    summaryStepTitle: "Перевірте замовлення та підтвердіть",
    deliveryReviewTitle: "Дані доставки",
    editDetails: "Змінити",
    shippingTwoWeekNote: "Доставка міжнародними перевізниками по США та Канаді займає приблизно 2 тижні. Офіційна гарантія — 1 рік.",
    signInToConfirmNote: "Увійдіть або зареєструйтесь нижче, щоб підтвердити замовлення та відстежувати його статус у Клієнтському Порталі.",
  },
  ru: {
    widthHeading: "Выберите ширину панели (26 см / 30 см)",
    standardWidth: "Стандартная ширина — 26 см",
    standardWidthSub: "Для веса до 100 кг (220 lbs) • Рост до 193 см",
    wideWidth: "Усиленная широкая — 30 см",
    wideWidthSub: "Для веса более 100 кг (до 150 кг / 330 lbs)",
    standHeading: "Официальные аксессуары",
    standIncludedTitle: "Стойка-лесенка разборная (4 части)",
    standIncludedDesc: "Макс. высота 123 см — для стандартной (26 см) и усиленной (30 см) моделей.",
    standWith: "Со стойкой-лесенкой (4 части)",
    standWithDesc: "Макс. 123 см — без сверления стен.",
    standWithout: "Только доска (крепление в стену в комплекте)",
    standWithoutDesc: "В комплекте петля Глиссона, крепление в стену и паспорт.",
    standWithoutWarning: "Примечание: крепление в стену уже в комплекте. Ниже можно добавить стойку-лесенку, крючки или чехол.",
    step4Label: "4. Итог и Подтверждение",
    continueToSummary: "Перейти к Итогу Заказа",
    summaryStepTitle: "Проверьте Заказ и Подтвердите",
    deliveryReviewTitle: "Данные Доставки",
    editDetails: "Изменить",
    shippingTwoWeekNote: "Доставка международными перевозчиками по США и Канаде занимает примерно 2 недели. Официальная гарантия — 1 год.",
    signInToConfirmNote: "Войдите или зарегистрируйтесь ниже, чтобы подтвердить заказ и отслеживать его статус в Личном Кабинете.",
  },
};

const ORDER_DRAFT_STORAGE_KEY = "evminov_order_draft_v1";

export function OrderWizard({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).orderUi;
  const ow = ORDER_WIZARD_COPY[lang];
  const accCopy = ACCESSORIES_SECTION_COPY[lang];
  const cfg = CONFIG_COPY[lang];
  const authCopy = AUTH_UI_COPY[lang];
  const searchParams = useSearchParams();
  const { user, setUser, loading: authLoading, googleOAuthEnabled, logout } = useAuth();

  const initialSlug = (() => {
    const p = searchParams.get("product");
    return p && PRODUCTS.some((item) => item.slug === p)
      ? p
      : "3-piece-travel-board";
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
  const [selectedAddons, setSelectedAddons] = useState<OfficialAccessoryId[]>(() => {
    const initial: OfficialAccessoryId[] = [];
    if (searchParams.get("stand") === "1") {
      initial.push("ladder-stand-4pc");
    }
    const qsAddon = searchParams.get("addon") as OfficialAccessoryId | null;
    if (
      qsAddon &&
      OFFICIAL_ACCESSORIES.some((a) => a.id === qsAddon) &&
      !initial.includes(qsAddon)
    ) {
      initial.push(qsAddon);
    }
    return initial;
  });
  const includeStand = selectedAddons.includes("ladder-stand-4pc");
  const toggleAddon = (id: OfficialAccessoryId) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };
  const [includeHsaDoc, setIncludeHsaDoc] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stateOrCountry, setStateOrCountry] = useState(
    () => searchParams.get("state") || (IS_CANADA ? "Ontario (ON)" : "California (CA)")
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
        selectedAddons?: OfficialAccessoryId[];
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
      if (Array.isArray(draft.selectedAddons) && draft.selectedAddons.length > 0) {
        setSelectedAddons((prev) => (prev.length > 0 ? prev : draft.selectedAddons!));
      }
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
          selectedAddons,
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

  // Show only add-ons that match the selected board (3-piece vs 2-piece) and width (26 cm vs 30 cm)
  const compatibleAccessories = OFFICIAL_ACCESSORIES.filter((acc) => {
    if (
      acc.compatibleWith !== "all" &&
      acc.compatibleWith !== selectedProduct.slug
    ) {
      return false;
    }
    if (acc.id === "wall-panel-standard-2pc" && boardWidth !== "standard") {
      return false;
    }
    if (acc.id === "wall-panel-wide-2pc" && boardWidth !== "wide") {
      return false;
    }
    return true;
  });

  // Auto-swap carry case / wall panel if the customer switches board model or width
  useEffect(() => {
    setSelectedAddons((prev) => {
      if (prev.length === 0) return prev;
      let changed = false;
      const next = prev.map((id) => {
        if (
          id === "carry-case-2bag-3pc" &&
          selectedProduct.slug === "2-piece-folding-board"
        ) {
          changed = true;
          return "carry-case-1bag-2pc";
        }
        if (
          id === "carry-case-1bag-2pc" &&
          selectedProduct.slug === "3-piece-travel-board"
        ) {
          changed = true;
          return "carry-case-2bag-3pc";
        }
        if (id === "wall-panel-standard-2pc" && boardWidth === "wide") {
          changed = true;
          return "wall-panel-wide-2pc";
        }
        if (id === "wall-panel-wide-2pc" && boardWidth === "standard") {
          changed = true;
          return "wall-panel-standard-2pc";
        }
        return id;
      });
      return changed ? Array.from(new Set(next)) : prev;
    });
  }, [selectedProduct.slug, boardWidth]);

  const selectedAccessoryItems = compatibleAccessories.filter((a) =>
    selectedAddons.includes(a.id)
  );
  const standardCurrentPrice = getProductPrice(selectedProduct, "standard", shipping);
  const wideCurrentPrice = getProductPrice(selectedProduct, "wide", shipping);
  const activeWideDelta = Math.max(0, wideCurrentPrice - standardCurrentPrice);
  const boardPrice = getProductPrice(selectedProduct, boardWidth, shipping);
  const accessoriesTotal = selectedAccessoryItems.reduce(
    (sum, item) => sum + item.priceUsd,
    0
  );
  const totalUsd = boardPrice + accessoriesTotal;
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
    const addonsSummary =
      selectedAccessoryItems.length > 0
        ? `Add-ons: ${selectedAccessoryItems.map((a) => a.name.en).join(", ")}`
        : "";
    const combinedNotes = [
      addonsSummary,
      notes.trim(),
      attr ? `Attribution: ${attr}` : "",
    ]
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
            boardWidth === "wide"
              ? "Reinforced Wide 30 cm / >100 kg"
              : "Standard 26 cm / up to 100 kg"
          }${
            selectedAccessoryItems.length > 0
              ? ` + ${selectedAccessoryItems.map((a) => a.name.en).join(", ")}`
              : ""
          })`,
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
          <a
            href={SITE_CONFIG.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-emerald-700 underline"
          >
            WhatsApp {SITE_CONFIG.phoneDisplay}
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
    <div id="order-form" className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:p-8 lg:col-span-8">
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
                className={`min-h-[44px] cursor-pointer rounded-xl px-2.5 py-2.5 text-[11px] font-bold transition sm:text-xs ${
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
                      {cfg.wideWidth} (+{formatUSD(activeWideDelta)})
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-600">
                      {cfg.wideWidthSub}
                    </p>
                  </button>
                </div>
              </div>

              {/* Official US & Canada Accessories Multi-Select */}
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {accCopy.wizardHeading}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {accCopy.wizardHint}
                </p>
                <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
                  {compatibleAccessories.map((accItem) => {
                    const checked = selectedAddons.includes(accItem.id);
                    return (
                      <label
                        key={accItem.id}
                        className={`flex cursor-pointer items-start gap-2.5 rounded-2xl border p-3 text-left transition ${
                          checked
                            ? "border-teal-700 bg-teal-50/70 ring-2 ring-teal-700/20"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleAddon(accItem.id)}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-teal-700"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-xs font-extrabold text-slate-950">
                              {accItem.name[lang]}
                            </span>
                            <span className="shrink-0 text-xs font-black text-teal-800">
                              +{formatUSD(accItem.priceUsd)}
                            </span>
                          </div>
                          <p className="mt-0.5 text-[11px] text-slate-600">
                            {accItem.spec[lang]}
                          </p>
                        </div>
                      </label>
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
                      className={`min-h-[42px] rounded-xl px-4 py-2 text-xs font-bold transition ${
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
                className="min-h-[48px] w-full rounded-xl bg-teal-700 py-3.5 text-sm font-extrabold text-white hover:bg-teal-800"
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
                    <span className="shrink-0 font-extrabold text-slate-950">
                      {formatUSD(getProductPrice(selectedProduct, boardWidth, "express"))}
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
                    <span className="shrink-0 font-extrabold text-slate-950">
                      {formatUSD(getProductPrice(selectedProduct, boardWidth, "direct"))}
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
                    {IS_CANADA && (
                      <optgroup label="Canadian Provinces & Territories">
                        {CA_PROVINCES.map((pr) => (
                          <option key={pr.code} value={`${pr.name} (${pr.code})`}>
                            {pr.name} ({pr.code}) — {pr.expressDays}
                          </option>
                        ))}
                      </optgroup>
                    )}
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
                    {selectedAccessoryItems.length > 0 && (
                      <dd className="mt-1 text-[11px] font-semibold text-teal-800">
                        + {selectedAccessoryItems.map((a) => a.name[lang]).join(" • ")}
                      </dd>
                    )}
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
            {boardWidth === "wide" ? cfg.wideWidth : cfg.standardWidth} •{" "}
            {ow.finishLabel}: {getLocalizedFinish(finish, lang)}
          </p>
          {selectedAccessoryItems.map((accItem) => (
            <div key={accItem.id} className="flex justify-between gap-2 text-xs">
              <span className="text-slate-300">{accItem.name[lang]}</span>
              <span className="shrink-0 font-bold">
                +{formatUSD(accItem.priceUsd)}
              </span>
            </div>
          ))}
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
            {ow.klarnaInstallments.replace(/:+$/, "")}: {formatKlarnaBiWeekly(totalUsd)}
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

        <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-xs text-slate-300">
          <a
            href={SITE_CONFIG.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendGTMEvent("click_whatsapp", { location: "order_summary" })}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-3.5 py-2.5 text-xs font-extrabold text-white shadow-sm transition hover:bg-emerald-500"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            <span>WhatsApp • {SITE_CONFIG.phoneDisplay}</span>
          </a>
          <button
            type="button"
            onClick={() => {
              if (step === 1) {
                setStep(2);
              } else if (step === 2) {
                setStep(3);
              } else if (step === 3) {
                saveDraftAndGoToSummary();
              } else if (step === 4 && user && !submitting) {
                const formEl = document.querySelector<HTMLFormElement>("#order-form form");
                formEl?.requestSubmit();
                return;
              }
              document
                .getElementById("order-form")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-xs font-black text-slate-950 shadow-sm transition hover:bg-emerald-300"
          >
            <span>
              {step === 4 && user
                ? submitting
                  ? t.submitting
                  : t.submitReservation
                : CONTINUE_ORDER_CTA[lang]}
            </span>
          </button>
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
