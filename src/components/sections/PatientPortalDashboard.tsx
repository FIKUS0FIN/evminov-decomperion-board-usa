"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  Activity,
  Award,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FileText,
  LogOut,
  Mail,
  Package,
  Pause,
  Phone,
  Play,
  Printer,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  UserCheck,
  Wrench,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { AUTH_UI_COPY } from "@/i18n/locales/auth";
import { AuthCard } from "@/components/auth/AuthCard";
import { OrderEvent, OrderRecord, useAuth } from "@/components/auth/useAuth";
import { MarketplaceOrderHub } from "@/components/portal/MarketplaceOrderHub";
import {
  LOCALIZED_CONTRAINDICATIONS,
  PORTAL_UI_COPY,
} from "@/i18n/locales/portal";
import {
  CALCULATOR_COPY,
  getLocalizedBoardRecReason,
  getLocalizedProduct,
} from "@/i18n/locales/catalog";
import { getLocalizedExercises } from "@/i18n/locales/faq-and-exercises";
import { SITE_CONFIG } from "@/lib/site-config";
import { getLocalizedHref } from "@/lib/url";
import {
  calculateTractionPhysics,
  ConditionGoal,
  inchesToFeet,
  lbsToKg,
  recommendBoardModel,
  recommendIncline,
} from "@/lib/physics";
import { PRODUCTS } from "@/data/products";
import { EvminovBrandLockup } from "@/components/brand/EvminovLogo";
import { LiteYouTube } from "@/components/ui/LiteYouTube";
import { sendGTMEvent } from "@/lib/gtm";

type PortalTab = "overview" | "routine" | "biometrics" | "documents" | "warranty";

interface ComfortEntry {
  id: string;
  dateLabel: string;
  angle: number;
  minutes: number;
  beforeScore: number;
  afterScore: number;
  note: string;
}

interface PortalSavedState {
  ownerName: string;
  ownerEmail: string;
  orderRef: string;
  completedDays: number[];
  mountChecklist: string[];
  comfortLog: ComfortEntry[];
}

const STORAGE_KEY = "evminov_portal_state_v1";
const STORAGE_EVENT = "evminov-portal-storage-update";

const DEFAULT_PORTAL_STATE: PortalSavedState = {
  ownerName: "",
  ownerEmail: "",
  orderRef: "",
  completedDays: [1, 2, 3],
  mountChecklist: ["stud-finder"],
  comfortLog: [
    {
      id: "starter-1",
      dateLabel: "12° • 10 min",
      angle: 12,
      minutes: 10,
      beforeScore: 6,
      afterScore: 3,
      note: "12° • 10 min",
    },
  ],
};

function subscribePortalStore(callback: () => void) {
  if (typeof window === "undefined") return () => { };
  const onStorage = (e: StorageEvent) => {
    if (!e.key || e.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(STORAGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(STORAGE_EVENT, callback);
  };
}

function getPortalSnapshot(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerPortalSnapshot(): string | null {
  return null;
}

function writePortalState(next: PortalSavedState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(STORAGE_EVENT));
  } catch {
    // ignore storage quota / private mode failures
  }
}

interface PortalCopy {
  badge: string;
  h1: string;
  subtitle: string;
  ownerCardTitle: string;
  ownerCardDesc: string;
  signedInAs: string;
  signOut: string;
  activateBtn: string;
  tabs: Record<PortalTab, string>;
}

const PORTAL_COPY: Record<Locale, PortalCopy> = {
  en: {
    badge: "ESTABLISHED 1996 • PATIENT & OWNER PORTAL",
    h1: "Evminov Patient & Owner Portal",
    subtitle:
      "Your guided 30-day spinal decompression workspace: interactive session timer, traction biometrics, 16-inch US wood stud mounting guide, printable HSA/FSA LMN kit, and 10-year structural warranty registration.",
    ownerCardTitle: "Personalize Your Owner Workspace",
    ownerCardDesc:
      "Enter your order reference & email to pre-fill your HSA/FSA documentation and 10-year warranty, or explore immediately in interactive preview mode.",
    signedInAs: "Verified Owner Workspace Active",
    signOut: "Switch Owner",
    activateBtn: "Activate Owner Profile",
    tabs: {
      overview: "Overview & 30-Day Plan",
      routine: "Session Timer & Videos",
      biometrics: "Biometrics & Comfort Log",
      documents: "HSA/FSA & Mounting Kit",
      warranty: "Warranty & Support",
    },
  },
  es: {
    badge: "DESDE 1996 • PORTAL DE PACIENTES Y PROPIETARIOS",
    h1: "Portal de Pacientes y Propietarios Evminov",
    subtitle:
      "Tu espacio guiado de 30 días para descompresión espinal: temporizador de sesiones, biomecánica de tracción, guía de montaje en vigas de 16 pulgadas, kit imprimible HSA/FSA y registro de garantía de 10 años.",
    ownerCardTitle: "Personaliza Tu Espacio de Propietario",
    ownerCardDesc:
      "Ingresa tu referencia de pedido y correo para prellenar tu documentación HSA/FSA y garantía, o explora ahora mismo en modo interactivo.",
    signedInAs: "Perfil de Propietario Activo",
    signOut: "Cambiar Perfil",
    activateBtn: "Activar Perfil",
    tabs: {
      overview: "Resumen y Plan 30 Días",
      routine: "Temporizador y Videos",
      biometrics: "Biometría y Registro",
      documents: "Kit HSA/FSA y Montaje",
      warranty: "Garantía y Soporte",
    },
  },
  fr: {
    badge: "FONDÉ EN 1996 • PORTAIL PATIENT & PROPRIÉTAIRE",
    h1: "Portail Patient & Propriétaire Evminov",
    subtitle:
      "Votre espace guidé sur 30 jours : minuteur de séance de décompression, biomécanique d'inclinaison, guide de fixation murale 16 pouces, dossier HSA/FSA imprimable et enregistrement de garantie 10 ans.",
    ownerCardTitle: "Personnalisez Votre Espace Propriétaire",
    ownerCardDesc:
      "Saisissez votre référence de commande et e-mail pour pré-remplir votre dossier HSA/FSA et votre garantie, ou explorez immédiatement l'espace interactif.",
    signedInAs: "Espace Propriétaire Actif",
    signOut: "Changer de Profil",
    activateBtn: "Activer le Profil",
    tabs: {
      overview: "Aperçu & Plan 30 Jours",
      routine: "Minuteur & Vidéos",
      biometrics: "Biométrie & Suivi",
      documents: "Kit HSA/FSA & Montage",
      warranty: "Garantie & Support",
    },
  },
  uk: {
    badge: "ЗАСНОВАНО 1996 • КАБІНЕТ ПАЦІЄНТА ТА ВЛАСНИКА",
    h1: "Кабінет Пацієнта та Власника Євмінова",
    subtitle:
      "Ваш інтерактивний простір на 30 днів: таймер занять, біомеханічний калькулятор тяги, інструкція монтажу на стійки 16 дюймів (США), комплект HSA/FSA для друку та реєстрація 10-річної гарантії.",
    ownerCardTitle: "Персоналізуйте Кабінет Власника",
    ownerCardDesc:
      "Введіть номер замовлення та email для автозаповнення документів HSA/FSA і гарантії — або користуйтеся інтерактивним режимом одразу.",
    signedInAs: "Профіль Власника Активовано",
    signOut: "Змінити Профіль",
    activateBtn: "Активувати Профіль",
    tabs: {
      overview: "Огляд і План 30 Днів",
      routine: "Таймер і Відео",
      biometrics: "Біометрія і Щоденник",
      documents: "HSA/FSA та Монтаж",
      warranty: "Гарантія та Підтримка",
    },
  },
  ru: {
    badge: "ОСНОВАНО В 1996 • КАБИНЕТ ПАЦИЕНТА И ВЛАДЕЛЬЦА",
    h1: "Кабинет Пациента и Владельца Евминова",
    subtitle:
      "Ваше интерактивное пространство на 30 дней: таймер тренировок, биомеханика вытяжения, гид монтажа на стойки 16 дюймов (США), пакет HSA/FSA для печати и регистрация 10-летней гарантии.",
    ownerCardTitle: "Персонализируйте Кабинет Владельца",
    ownerCardDesc:
      "Введите номер заказа и email для автозаполнения документов HSA/FSA и гарантии — или пользуйтесь интерактивным режимом прямо сейчас.",
    signedInAs: "Профиль Владельца Активен",
    signOut: "Сменить Профиль",
    activateBtn: "Активировать Профиль",
    tabs: {
      overview: "Обзор и План 30 Дней",
      routine: "Таймер и Видео",
      biometrics: "Биометрия и Дневник",
      documents: "HSA/FSA и Монтаж",
      warranty: "Гарантия и Поддержка",
    },
  },
  de: {
    badge: "GEGRÜNDET 1996 • PATIENTEN- & BESITZERPORTAL",
    h1: "Evminov Patienten- & Besitzerportal",
    subtitle:
      "Ihr geführter 30-Tage-Arbeitsbereich für die Wirbelsäulen-Dekompression: interaktiver Sitzungstimer, Traktions-Biometrie, 16-Zoll-Holzständer-Montageanleitung (USA), druckbares HSA/FSA-LMN-Kit und 10-Jahres-Rahmengarantie-Registrierung.",
    ownerCardTitle: "Besitzerbereich personalisieren",
    ownerCardDesc:
      "Geben Sie Ihre Bestellreferenz und E-Mail-Adresse ein, um Ihre HSA/FSA-Unterlagen und die 10-Jahres-Garantie vorab auszufüllen – oder erkunden Sie sofort den interaktiven Vorschaumodus.",
    signedInAs: "Verifizierter Besitzerbereich aktiv",
    signOut: "Profil wechseln",
    activateBtn: "Besitzerprofil aktivieren",
    tabs: {
      overview: "Übersicht & 30-Tage-Plan",
      routine: "Sitzungstimer & Videos",
      biometrics: "Biometrie & Komfortlog",
      documents: "HSA/FSA & Montage-Kit",
      warranty: "Garantie & Support",
    },
  },
};

const GOAL_KEYS: ConditionGoal[] = [
  "hernia",
  "sciatica",
  "posture",
  "athlete",
  "pediatric",
];

export function PatientPortalDashboard({ lang }: { lang: Locale }) {
  const copy = PORTAL_COPY[lang];
  const ui = PORTAL_UI_COPY[lang];
  const authCopy = AUTH_UI_COPY[lang];
  const calcCopy = CALCULATOR_COPY[lang];
  const contra = LOCALIZED_CONTRAINDICATIONS[lang];

  const { user, setUser, loading: authLoading, googleOAuthEnabled, logout } = useAuth();
  const [myOrders, setMyOrders] = useState<OrderRecord[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      setMyOrders([]);
      return;
    }
    let cancelled = false;
    setOrdersLoading(true);
    fetch("/api/orders/my", { credentials: "include" })
      .then((res) =>
        res.ok
          ? (res.json() as Promise<{ orders?: OrderRecord[] }>)
          : Promise.resolve({ orders: [] as OrderRecord[] })
      )
      .then((data) => {
        if (!cancelled) setMyOrders(data.orders || []);
      })
      .catch(() => {
        if (!cancelled) setMyOrders([]);
      })
      .finally(() => {
        if (!cancelled) setOrdersLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  const rawStored = useSyncExternalStore(
    subscribePortalStore,
    getPortalSnapshot,
    getServerPortalSnapshot
  );

  const savedState: PortalSavedState = useMemo(() => {
    if (!rawStored) return DEFAULT_PORTAL_STATE;
    try {
      const parsed = JSON.parse(rawStored) as Partial<PortalSavedState>;
      return {
        ownerName: typeof parsed.ownerName === "string" ? parsed.ownerName : "",
        ownerEmail: typeof parsed.ownerEmail === "string" ? parsed.ownerEmail : "",
        orderRef: typeof parsed.orderRef === "string" ? parsed.orderRef : "",
        completedDays: Array.isArray(parsed.completedDays)
          ? parsed.completedDays
          : DEFAULT_PORTAL_STATE.completedDays,
        mountChecklist: Array.isArray(parsed.mountChecklist)
          ? parsed.mountChecklist
          : DEFAULT_PORTAL_STATE.mountChecklist,
        comfortLog:
          Array.isArray(parsed.comfortLog) && parsed.comfortLog.length > 0
            ? parsed.comfortLog
            : DEFAULT_PORTAL_STATE.comfortLog,
      };
    } catch {
      return DEFAULT_PORTAL_STATE;
    }
  }, [rawStored]);

  const [activeTab, setActiveTab] = useState<PortalTab>("overview");

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [orderInput, setOrderInput] = useState("");
  const [profileNotice, setProfileNotice] = useState<string | null>(null);

  const [presetMinutes, setPresetMinutes] = useState(10);
  const [secondsLeft, setSecondsLeft] = useState(600);
  const [timerRunning, setTimerRunning] = useState(false);
  const [sessionCompletedBanner, setSessionCompletedBanner] = useState(false);

  const [goal, setGoal] = useState<ConditionGoal>("hernia");
  const [weightLbs, setWeightLbs] = useState(175);
  const [heightIn, setHeightIn] = useState(70);
  const [angle, setAngle] = useState(15);
  const [beforeScore, setBeforeScore] = useState(6);
  const [afterScore, setAfterScore] = useState(3);
  const [comfortNote, setComfortNote] = useState("");

  const [warrantyModel, setWarrantyModel] = useState(PRODUCTS[0].slug);
  const [warrantyFinish, setWarrantyFinish] = useState("Light Natural Pine");
  const [warrantyName, setWarrantyName] = useState("");
  const [warrantyEmail, setWarrantyEmail] = useState("");
  const [warrantyOrderRef, setWarrantyOrderRef] = useState("");
  const [warrantyState, setWarrantyState] = useState("California");
  const [warrantyBusy, setWarrantyBusy] = useState(false);
  const [warrantyRefResult, setWarrantyRefResult] = useState<string | null>(null);
  const [warrantyError, setWarrantyError] = useState<string | null>(null);

  const physics = calculateTractionPhysics(weightLbs, angle);
  const inclineRec = recommendIncline(goal);
  const boardRec = recommendBoardModel(weightLbs, heightIn, false);
  const matchedProd =
    PRODUCTS.find((p) => p.slug === boardRec.slug) || PRODUCTS[0];
  const matchedProdLocalized = getLocalizedProduct(matchedProd, lang);

  const isOwnerLinked = Boolean(savedState.ownerEmail || savedState.orderRef);
  const completedCount = savedState.completedDays.length;
  const progressPct = Math.min(100, Math.round((completedCount / 30) * 100));

  useEffect(() => {
    if (!timerRunning) return;
    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setTimerRunning(false);
          setSessionCompletedBanner(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [timerRunning]);

  const selectTimerPreset = (minutes: number) => {
    setTimerRunning(false);
    setSessionCompletedBanner(false);
    setPresetMinutes(minutes);
    setSecondsLeft(minutes * 60);
  };

  const handleSaveOwnerProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = emailInput.trim();
    const trimmedOrder = orderInput.trim().toUpperCase();
    const trimmedName = nameInput.trim();
    if (!trimmedEmail && !trimmedOrder) {
      setProfileNotice(ui.profileMissingMsg);
      return;
    }
    const nextState: PortalSavedState = {
      ...savedState,
      ownerName: trimmedName || savedState.ownerName || ui.defaultOwnerName,
      ownerEmail: trimmedEmail || savedState.ownerEmail,
      orderRef: trimmedOrder || savedState.orderRef || "OWNER-VERIFIED",
    };
    writePortalState(nextState);
    setWarrantyName(nextState.ownerName);
    setWarrantyEmail(nextState.ownerEmail);
    setWarrantyOrderRef(nextState.orderRef);
    setProfileNotice(ui.profileSavedMsg);
    sendGTMEvent("portal_profile_activated", { has_order_ref: Boolean(trimmedOrder) });
  };

  const handleClearOwnerProfile = () => {
    writePortalState({
      ...savedState,
      ownerName: "",
      ownerEmail: "",
      orderRef: "",
    });
    setNameInput("");
    setEmailInput("");
    setOrderInput("");
    setProfileNotice(null);
  };

  const toggleDay = (day: number) => {
    const exists = savedState.completedDays.includes(day);
    const nextDays = exists
      ? savedState.completedDays.filter((d) => d !== day)
      : [...savedState.completedDays, day].sort((a, b) => a - b);
    writePortalState({ ...savedState, completedDays: nextDays });
  };

  const markNextDayComplete = () => {
    for (let d = 1; d <= 30; d++) {
      if (!savedState.completedDays.includes(d)) {
        writePortalState({
          ...savedState,
          completedDays: [...savedState.completedDays, d].sort((a, b) => a - b),
        });
        setSessionCompletedBanner(false);
        return;
      }
    }
  };

  const toggleMountStep = (id: string) => {
    const exists = savedState.mountChecklist.includes(id);
    const next = exists
      ? savedState.mountChecklist.filter((item) => item !== id)
      : [...savedState.mountChecklist, id];
    writePortalState({ ...savedState, mountChecklist: next });
  };

  const handleAddComfortLog = (e: React.FormEvent) => {
    e.preventDefault();
    const dateLabel = new Date().toLocaleDateString(lang, {
      month: "short",
      day: "numeric",
    });
    const entry: ComfortEntry = {
      id: `log-${savedState.comfortLog.length + 1}-${angle}`,
      dateLabel,
      angle,
      minutes: presetMinutes,
      beforeScore,
      afterScore,
      note: comfortNote.trim() || ui.defaultLogNote(presetMinutes, angle),
    };
    writePortalState({
      ...savedState,
      comfortLog: [entry, ...savedState.comfortLog].slice(0, 12),
    });
    setComfortNote("");
    sendGTMEvent("portal_comfort_logged", { angle, delta: beforeScore - afterScore });
  };

  const handleRegisterWarranty = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalEmail = (warrantyEmail || savedState.ownerEmail).trim();
    const finalName = (warrantyName || savedState.ownerName).trim();
    const finalOrder = (warrantyOrderRef || savedState.orderRef).trim();

    if (!finalEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(finalEmail)) {
      setWarrantyError(ui.warrantyInvalidEmail);
      return;
    }

    setWarrantyBusy(true);
    setWarrantyError(null);
    const selectedProduct =
      PRODUCTS.find((p) => p.slug === warrantyModel) || PRODUCTS[0];

    try {
      const res = await fetch("/api/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "warranty_registration",
          name: finalName || ui.defaultOwnerName,
          email: finalEmail,
          product: selectedProduct.slug,
          productName: selectedProduct.name,
          finish: warrantyFinish,
          stateOrCountry: warrantyState,
          notes: `10-Year Structural Frame Warranty Registration | Order/Serial Ref: ${finalOrder || "Pending Verification"
            }`,
          lang,
        }),
      });
      const json = (await res.json()) as {
        ok?: boolean;
        orderRef?: string;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || ui.warrantyErrorFallback);
      }
      setWarrantyRefResult(json.orderRef || "EV-WARRANTY-OK");
      sendGTMEvent("warranty_registered", { product_slug: selectedProduct.slug });
    } catch (err) {
      setWarrantyError(
        err instanceof Error ? err.message : ui.warrantyNetError
      );
    } finally {
      setWarrantyBusy(false);
    }
  };

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  const tabItems: Array<{ id: PortalTab; label: string; icon: typeof Activity }> = [
    { id: "overview", label: copy.tabs.overview, icon: CalendarCheck },
    { id: "routine", label: copy.tabs.routine, icon: Clock },
    { id: "biometrics", label: copy.tabs.biometrics, icon: Sliders },
    { id: "documents", label: copy.tabs.documents, icon: FileText },
    { id: "warranty", label: copy.tabs.warranty, icon: ShieldCheck },
  ];

  const featuredExercises = getLocalizedExercises(lang).slice(0, 6);

  if (authLoading || !user) {
    return (
      <div className="bg-slate-50/70 pb-20">
        <section className="no-print border-b border-slate-200 bg-gradient-to-br from-[#0B1628] via-[#0B1F3A] to-[#0E2949] text-white">
          <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{copy.badge}</span>
                </div>
                <h1 className="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                  {copy.h1}
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  {copy.subtitle}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-slate-200">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    {ui.heroPills[0]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                    {ui.heroPills[1]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-300" />
                    {ui.heroPills[2]}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5">
                {authLoading ? (
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-10 text-center text-sm font-semibold text-slate-200 backdrop-blur-md">
                    {authCopy.loadingSession}
                  </div>
                ) : (
                  <AuthCard
                    lang={lang}
                    context="portal"
                    returnTo={getLocalizedHref("/portal/", lang)}
                    googleOAuthEnabled={googleOAuthEnabled}
                    onAuthenticated={(authedUser) => setUser(authedUser)}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

              return (
              <div className="bg-slate-50/70 pb-20">
                {/* Authenticated Account Bar */}
                <div className="no-print border-b border-slate-200 bg-white">
                  <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      <span>{authCopy.signedInAs}:</span>
                      <strong className="text-slate-950">{user.name || user.email}</strong>
                      <span className="hidden text-slate-500 sm:inline">({user.email})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {user.role === "admin" && (
                        <Link
                          href="/admin/"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-amber-100 px-3 py-1.5 font-extrabold text-amber-950 transition hover:bg-amber-200"
                        >
                          <ShieldCheck className="h-3.5 w-3.5" />
                          <span>{authCopy.adminPanelBtn}</span>
                        </Link>
                      )}
                      <button
                        type="button"
                        onClick={() => void logout()}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 font-bold text-slate-700 transition hover:bg-slate-100"
                      >
                        <LogOut className="h-3.5 w-3.5" />
                        <span>{authCopy.signOut}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketplace Order Timeline & Account Profile Hub */}
                <MarketplaceOrderHub
                  lang={lang}
                  user={user}
                  onUserUpdated={(nextUser) => setUser(nextUser)}
                  orders={myOrders}
                  ordersLoading={ordersLoading}
                  onOrderEventAdded={(orderId: string, ev: OrderEvent) => {
                    setMyOrders((prev) =>
                      prev.map((ord) =>
                        ord.id === orderId
                          ? { ...ord, events: [...(ord.events || []), ev] }
                          : ord
                      )
                    );
                  }}
                />

                {/* Clinical Navy Hero + Inline Owner Access Card */}
                <section className="no-print border-b border-slate-200 bg-gradient-to-br from-[#0B1628] via-[#0B1F3A] to-[#0E2949] text-white">
                  <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
                    <div className="grid items-center gap-8 lg:grid-cols-12">
                      {/* Left Identity & Value Proposition */}
                      <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>{copy.badge}</span>
                        </div>

                        <h1 className="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                          {copy.h1}
                        </h1>

                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                          {copy.subtitle}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-slate-200">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                            {ui.heroPills[0]}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                            {ui.heroPills[1]}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-amber-300" />
                            {ui.heroPills[2]}
                          </span>
                        </div>
                      </div>

                      {/* Right Owner Personalization Card */}
                      <div className="lg:col-span-5">
                        <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md">
                          {isOwnerLinked ? (
                            <div className="space-y-4">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-3">
                                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
                                    <UserCheck className="h-5 w-5" />
                                  </span>
                                  <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                                      {copy.signedInAs}
                                    </p>
                                    <p className="text-base font-extrabold text-white">
                                      {savedState.ownerName || ui.defaultOwnerName}
                                    </p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={handleClearOwnerProfile}
                                  className="rounded-lg border border-white/15 px-2.5 py-1 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                                >
                                  {copy.signOut}
                                </button>
                              </div>

                              <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-black/20 p-3.5 text-xs">
                                <div>
                                  <p className="text-slate-400">{ui.orderRefLabel}</p>
                                  <p className="mt-0.5 font-mono font-bold text-white">
                                    {savedState.orderRef || "EV-OWNER"}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-slate-400">{ui.registeredEmailLabel}</p>
                                  <p className="mt-0.5 truncate font-semibold text-white">
                                    {savedState.ownerEmail || ui.previewModeValue}
                                  </p>
                                </div>
                              </div>

                              <p className="text-xs text-slate-300">{ui.localSyncNote}</p>
                            </div>
                          ) : (
                            <form onSubmit={handleSaveOwnerProfile} className="space-y-3">
                              <div className="flex items-center justify-between">
                                <h2 className="font-display text-base font-extrabold text-white">
                                  {copy.ownerCardTitle}
                                </h2>
                                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                                  {ui.previewBadge}
                                </span>
                              </div>
                              <p className="text-xs leading-relaxed text-slate-300">
                                {copy.ownerCardDesc}
                              </p>

                              <div className="grid gap-2.5 sm:grid-cols-2">
                                <input
                                  type="text"
                                  value={nameInput}
                                  onChange={(e) => setNameInput(e.target.value)}
                                  placeholder={ui.namePlaceholder}
                                  aria-label={ui.namePlaceholder}
                                  className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 text-xs text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
                                />
                                <input
                                  type="text"
                                  value={orderInput}
                                  onChange={(e) => setOrderInput(e.target.value)}
                                  placeholder={ui.orderPlaceholder}
                                  aria-label={ui.orderRefLabel}
                                  className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 text-xs text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
                                />
                              </div>
                              <input
                                type="email"
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                placeholder={ui.emailPlaceholder}
                                aria-label={ui.registeredEmailLabel}
                                className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 text-xs text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
                              />

                              {profileNotice && (
                                <p className="text-xs font-medium text-emerald-300">
                                  {profileNotice}
                                </p>
                              )}

                              <button
                                type="submit"
                                className="w-full rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-extrabold text-slate-950 transition hover:bg-emerald-400"
                              >
                                {copy.activateBtn}
                              </button>
                            </form>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Sticky Sub-Navigation Tab Bar */}
                <div className="no-print sticky top-[62px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md">
                  <div className="mx-auto max-w-7xl px-4">
                    <div
                      role="tablist"
                      aria-label={ui.tablistAria}
                      className="no-scrollbar flex items-center gap-1.5 overflow-x-auto py-3"
                    >
                      {tabItems.map((tab) => {
                        const Icon = tab.icon;
                        const active = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            aria-selected={active}
                            onClick={() => setActiveTab(tab.id)}
                            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition sm:text-sm ${active
                              ? "bg-[#0B1F3A] text-white shadow-sm"
                              : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-slate-950"
                              }`}
                          >
                            <Icon
                              className={`h-4 w-4 ${active ? "text-emerald-400" : "text-slate-500"}`}
                            />
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Main Workspace Panels */}
                <div className="mx-auto max-w-7xl px-4 pt-8">
                  {/* TAB 1: OVERVIEW & 30-DAY PLAN */}
                  {activeTab === "overview" && (
                    <div className="space-y-8">
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            {ui.kpiAngleLabel}
                          </p>
                          <p className="mt-2 font-display text-3xl font-black text-[#0B1F3A]">
                            {angle}°
                          </p>
                          <p className="mt-1 text-xs font-semibold text-emerald-700">
                            ~{physics.netTractionLbs} {ui.kpiAngleSubSuffix}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            {ui.kpiConsistencyLabel}
                          </p>
                          <p className="mt-2 font-display text-3xl font-black text-emerald-700">
                            {completedCount} / 30
                          </p>
                          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full bg-emerald-500 transition-all"
                              style={{ width: `${progressPct}%` }}
                            />
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            {ui.kpiMountLabel}
                          </p>
                          <p className="mt-2 font-display text-3xl font-black text-[#0B1F3A]">
                            {savedState.mountChecklist.length} / {ui.mountSteps.length}
                          </p>
                          <button
                            type="button"
                            onClick={() => setActiveTab("documents")}
                            className="mt-1 text-xs font-bold text-teal-700 hover:underline"
                          >
                            {ui.kpiMountLink}
                          </button>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            {ui.kpiWarrantyLabel}
                          </p>
                          <p className="mt-2 font-display text-3xl font-black text-[#0B1F3A]">
                            {ui.kpiWarrantyVal}
                          </p>
                          <button
                            type="button"
                            onClick={() => setActiveTab("warranty")}
                            className="mt-1 text-xs font-bold text-teal-700 hover:underline"
                          >
                            {ui.kpiWarrantyLink}
                          </button>
                        </div>
                      </div>

                      {/* Interactive 30-Day Habit Tracker */}
                      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                              {ui.trackerEyebrow}
                            </span>
                            <h2 className="mt-1 font-display text-2xl font-black text-slate-950">
                              {ui.trackerHeading}
                            </h2>
                            <p className="mt-1 text-sm text-slate-600">{ui.trackerSub}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveTab("routine")}
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
                          >
                            <Play className="h-4 w-4 fill-current" />
                            {ui.startTimerBtn}
                          </button>
                        </div>

                        <div className="mt-6 grid gap-3 md:grid-cols-3">
                          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
                            <p className="text-xs font-extrabold uppercase text-emerald-800">
                              {ui.phases[0].badge}
                            </p>
                            <p className="mt-1 text-xs text-slate-700">{ui.phases[0].text}</p>
                          </div>
                          <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4">
                            <p className="text-xs font-extrabold uppercase text-sky-900">
                              {ui.phases[1].badge}
                            </p>
                            <p className="mt-1 text-xs text-slate-700">{ui.phases[1].text}</p>
                          </div>
                          <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4">
                            <p className="text-xs font-extrabold uppercase text-indigo-900">
                              {ui.phases[2].badge}
                            </p>
                            <p className="mt-1 text-xs text-slate-700">{ui.phases[2].text}</p>
                          </div>
                        </div>

                        <div className="mt-6 grid grid-cols-5 gap-2.5 sm:grid-cols-6 md:grid-cols-10">
                          {Array.from({ length: 30 }, (_, idx) => idx + 1).map((day) => {
                            const done = savedState.completedDays.includes(day);
                            return (
                              <button
                                key={day}
                                type="button"
                                onClick={() => toggleDay(day)}
                                aria-pressed={done}
                                className={`flex flex-col items-center justify-center rounded-2xl border py-3 text-xs font-bold transition ${done
                                  ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                                  : "border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-500 hover:bg-white"
                                  }`}
                              >
                                <span className="text-[10px] opacity-80">{ui.dayWord}</span>
                                <span className="text-base font-black">{day}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Quick Links Grid */}
                      <div className="grid gap-4 md:grid-cols-3">
                        <Link
                          href={getLocalizedHref("/calculator/", lang)}
                          className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-teal-600 hover:shadow-md"
                        >
                          <Sliders className="h-6 w-6 text-teal-700" />
                          <h3 className="mt-3 font-display text-base font-extrabold text-slate-950">
                            {ui.quickLinks[0].title}
                          </h3>
                          <p className="mt-1 text-xs text-slate-600">
                            {ui.quickLinks[0].desc}
                          </p>
                        </Link>
                        <Link
                          href={getLocalizedHref("/welcome/", lang)}
                          className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-teal-600 hover:shadow-md"
                        >
                          <BookOpen className="h-6 w-6 text-emerald-700" />
                          <h3 className="mt-3 font-display text-base font-extrabold text-slate-950">
                            {ui.quickLinks[1].title}
                          </h3>
                          <p className="mt-1 text-xs text-slate-600">
                            {ui.quickLinks[1].desc}
                          </p>
                        </Link>
                        <Link
                          href={getLocalizedHref(
                            "/order/?product=2-piece-folding-board&step=1#order-form",
                            lang
                          )}
                          className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-teal-600 hover:shadow-md"
                        >
                          <Wrench className="h-6 w-6 text-amber-600" />
                          <h3 className="mt-3 font-display text-base font-extrabold text-slate-950">
                            {ui.quickLinks[2].title}
                          </h3>
                          <p className="mt-1 text-xs text-slate-600">
                            {ui.quickLinks[2].desc}
                          </p>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: SESSION TIMER & GUIDED ROUTINE */}
                  {activeTab === "routine" && (
                    <div className="space-y-8">
                      <div className="grid gap-6 lg:grid-cols-12">
                        <div className="rounded-3xl border border-slate-200 bg-[#0B1F3A] p-6 text-white shadow-lg lg:col-span-5 md:p-8">
                          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                            {ui.timerEyebrow}
                          </p>
                          <h2 className="mt-1 font-display text-2xl font-black">
                            {ui.timerHeading}
                          </h2>
                          <p className="mt-1 text-xs text-slate-300">
                            {ui.timerSubPre} {angle}°, {ui.timerSubPost}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {[8, 10, 12, 15].map((min) => (
                              <button
                                key={min}
                                type="button"
                                onClick={() => selectTimerPreset(min)}
                                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${presetMinutes === min
                                  ? "bg-emerald-500 text-slate-950"
                                  : "bg-white/10 text-slate-200 hover:bg-white/20"
                                  }`}
                              >
                                {min} {ui.minUnit}
                              </button>
                            ))}
                          </div>

                          <div className="my-7 flex items-center justify-center rounded-3xl border border-white/10 bg-black/30 py-8">
                            <span className="font-mono text-6xl font-black tracking-tight text-white">
                              {mm}:{ss}
                            </span>
                          </div>

                          {sessionCompletedBanner && (
                            <div className="mb-4 rounded-2xl border border-emerald-400/40 bg-emerald-500/20 p-3.5 text-xs text-emerald-100">
                              <p className="font-bold">{ui.sessionCompleteMsg}</p>
                              <button
                                type="button"
                                onClick={markNextDayComplete}
                                className="mt-2 rounded-lg bg-emerald-400 px-3 py-1.5 text-xs font-extrabold text-slate-950 hover:bg-emerald-300"
                              >
                                {ui.logNextDayBtn}
                              </button>
                            </div>
                          )}

                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setTimerRunning((prev) => !prev)}
                              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-emerald-400"
                            >
                              {timerRunning ? (
                                <>
                                  <Pause className="h-4 w-4" /> {ui.pauseBtn}
                                </>
                              ) : (
                                <>
                                  <Play className="h-4 w-4 fill-current" />{" "}
                                  {secondsLeft === presetMinutes * 60
                                    ? ui.startSessionBtn
                                    : ui.resumeBtn}
                                </>
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => selectTimerPreset(presetMinutes)}
                              aria-label={ui.resetAria}
                              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
                            >
                              <RotateCcw className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-7 md:p-8">
                          <p className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                            {ui.flowEyebrow}
                          </p>
                          <h2 className="mt-1 font-display text-2xl font-black text-slate-950">
                            {ui.flowHeading}
                          </h2>

                          <div className="mt-6 space-y-4">
                            {ui.flowSteps.map((st, idx) => (
                              <div
                                key={st.title}
                                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                              >
                                <span
                                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white ${idx === 0
                                    ? "bg-teal-700"
                                    : idx === 1
                                      ? "bg-emerald-600"
                                      : "bg-[#0B1F3A]"
                                    }`}
                                >
                                  {idx + 1}
                                </span>
                                <div>
                                  <h3 className="text-sm font-extrabold text-slate-950">
                                    {st.title}
                                  </h3>
                                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                                    {st.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                          <h3 className="mb-3 font-display text-lg font-extrabold text-slate-950">
                            {ui.video1Heading}
                          </h3>
                          <LiteYouTube
                            videoId={SITE_CONFIG.videos.methodDemo.id}
                            title={ui.video1Heading}
                            thumbnail={SITE_CONFIG.videos.methodDemo.thumbnail}
                          />
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                          <h3 className="mb-3 font-display text-lg font-extrabold text-slate-950">
                            {ui.video2Heading}
                          </h3>
                          <LiteYouTube
                            videoId={SITE_CONFIG.videos.wallMounting.id}
                            title={ui.video2Heading}
                            thumbnail={SITE_CONFIG.videos.wallMounting.thumbnail}
                          />
                        </div>
                      </div>

                      <div>
                        <h2 className="font-display text-2xl font-black text-slate-950">
                          {ui.libraryHeading}
                        </h2>
                        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {featuredExercises.map((ex) => (
                            <article
                              key={ex.id}
                              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-xs"
                            >
                              <div className="flex items-center justify-between gap-2 text-[11px] font-bold uppercase text-teal-700">
                                <span>{ex.categoryLabel}</span>
                                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-emerald-800">
                                  {ex.angle} • {ex.duration}
                                </span>
                              </div>
                              <h3 className="mt-2 font-display text-base font-extrabold text-slate-950">
                                {ex.title}
                              </h3>
                              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                                {ex.description}
                              </p>
                              <ol className="mt-3 space-y-1 border-t border-slate-100 pt-3 text-xs text-slate-700">
                                {ex.steps.map((step, i) => (
                                  <li key={step} className="flex gap-2">
                                    <span className="font-bold text-teal-700">{i + 1}.</span>
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </article>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: BIOMETRICS & COMFORT LOG */}
                  {activeTab === "biometrics" && (
                    <div className="grid gap-6 lg:grid-cols-12">
                      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-6 md:p-8">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                          {ui.bioEyebrow}
                        </p>
                        <h2 className="mt-1 font-display text-2xl font-black text-slate-950">
                          {ui.bioHeading}
                        </h2>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {GOAL_KEYS.map((goalKey) => (
                            <button
                              key={goalKey}
                              type="button"
                              onClick={() => {
                                setGoal(goalKey);
                                setAngle(recommendIncline(goalKey).startAngle);
                              }}
                              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${goal === goalKey
                                ? "bg-[#0B1F3A] text-white"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`}
                            >
                              {calcCopy.goals[goalKey]}
                            </button>
                          ))}
                        </div>

                        <div className="mt-6 space-y-5">
                          <div>
                            <div className="flex justify-between text-xs font-bold text-slate-700">
                              <span>{ui.weightLabel}</span>
                              <span>
                                {weightLbs} {calcCopy.lbsUnit} ({lbsToKg(weightLbs)}{" "}
                                {calcCopy.kgUnit})
                              </span>
                            </div>
                            <input
                              type="range"
                              min={90}
                              max={330}
                              value={weightLbs}
                              onChange={(e) => setWeightLbs(Number(e.target.value))}
                              aria-label={ui.weightLabel}
                              className="mt-2 w-full accent-teal-700"
                            />
                          </div>

                          <div>
                            <div className="flex justify-between text-xs font-bold text-slate-700">
                              <span>{ui.heightLabel}</span>
                              <span>{inchesToFeet(heightIn)}</span>
                            </div>
                            <input
                              type="range"
                              min={58}
                              max={81}
                              value={heightIn}
                              onChange={(e) => setHeightIn(Number(e.target.value))}
                              aria-label={ui.heightLabel}
                              className="mt-2 w-full accent-teal-700"
                            />
                          </div>

                          <div>
                            <div className="flex justify-between text-xs font-bold text-slate-700">
                              <span>{ui.angleLabel}</span>
                              <span className="text-emerald-700">
                                {angle}° ({ui.recommendedWord}: {inclineRec.startAngle}°–
                                {inclineRec.maxAngle}°)
                              </span>
                            </div>
                            <input
                              type="range"
                              min={8}
                              max={35}
                              value={angle}
                              onChange={(e) => setAngle(Number(e.target.value))}
                              aria-label={ui.angleLabel}
                              className="mt-2 w-full accent-emerald-600"
                            />
                          </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-slate-950 p-4 text-center text-white">
                          <div>
                            <p className="text-[11px] text-slate-400">{ui.netPullLabel}</p>
                            <p className="mt-1 text-xl font-black text-emerald-400">
                              {physics.netTractionLbs} {calcCopy.pullUnit}
                            </p>
                          </div>
                          <div>
                            <p className="text-[11px] text-slate-400">{ui.pctBwLabel}</p>
                            <p className="mt-1 text-xl font-black text-sky-400">
                              {physics.percentBodyWeight}%
                            </p>
                          </div>
                          <div>
                            <p className="text-[11px] text-slate-400">{ui.estUnloadLabel}</p>
                            <p className="mt-1 text-xl font-black text-white">
                              ~{physics.estimatedDiscUnloadingPct}%
                            </p>
                          </div>
                        </div>

                        <p className="mt-4 text-xs text-slate-600">
                          <strong className="text-slate-900">{ui.matchedBoardLabel}</strong>{" "}
                          {matchedProdLocalized.name} —{" "}
                          {getLocalizedBoardRecReason(boardRec.slug, lang)}
                        </p>
                      </div>

                      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-6 md:p-8">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                          {ui.logEyebrow}
                        </p>
                        <h2 className="mt-1 font-display text-2xl font-black text-slate-950">
                          {ui.logHeading}
                        </h2>

                        <form onSubmit={handleAddComfortLog} className="mt-5 space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-slate-200 p-3.5">
                              <div className="flex justify-between text-xs font-bold text-slate-700">
                                <span>{ui.beforeLabel}</span>
                                <span className="text-amber-600">{beforeScore} / 10</span>
                              </div>
                              <input
                                type="range"
                                min={1}
                                max={10}
                                value={beforeScore}
                                onChange={(e) => setBeforeScore(Number(e.target.value))}
                                aria-label={ui.beforeLabel}
                                className="mt-2 w-full accent-amber-500"
                              />
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-3.5">
                              <div className="flex justify-between text-xs font-bold text-slate-700">
                                <span>{ui.afterLabel}</span>
                                <span className="text-emerald-600">{afterScore} / 10</span>
                              </div>
                              <input
                                type="range"
                                min={1}
                                max={10}
                                value={afterScore}
                                onChange={(e) => setAfterScore(Number(e.target.value))}
                                aria-label={ui.afterLabel}
                                className="mt-2 w-full accent-emerald-600"
                              />
                            </div>
                          </div>

                          <input
                            type="text"
                            value={comfortNote}
                            onChange={(e) => setComfortNote(e.target.value)}
                            placeholder={ui.notePlaceholder}
                            aria-label={ui.notePlaceholder}
                            className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                          />

                          <button
                            type="submit"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-teal-800"
                          >
                            <Activity className="h-4 w-4 text-emerald-400" />
                            {ui.saveEntryBtn}
                          </button>
                        </form>

                        <div className="mt-6 space-y-2.5">
                          {savedState.comfortLog.map((entry) => (
                            <div
                              key={entry.id}
                              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 text-xs"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2 font-bold text-slate-900">
                                <span>
                                  {entry.dateLabel} • {entry.angle}° • {entry.minutes}{" "}
                                  {ui.minUnit}
                                </span>
                                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-800">
                                  {ui.tensionWord}: {entry.beforeScore} → {entry.afterScore}
                                </span>
                              </div>
                              <p className="mt-1 text-slate-600">{entry.note}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: HSA/FSA PRINTABLE KIT, 16" STUD MOUNTING & SAFETY */}
                  {activeTab === "documents" && (
                    <div className="space-y-8">
                      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-6">
                          <div>
                            <EvminovBrandLockup size={34} />
                            <p className="mt-2 text-xs font-semibold text-slate-500">
                              {SITE_CONFIG.address.full} • {SITE_CONFIG.phoneDisplay} •{" "}
                              {SITE_CONFIG.supportEmail}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => window.print()}
                            className="no-print inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-teal-800"
                          >
                            <Printer className="h-4 w-4 text-emerald-400" />
                            {ui.printBtn}
                          </button>
                        </div>

                        <div className="mt-6">
                          <h2 className="font-display text-xl font-black text-slate-950">
                            {ui.hsaHeading}
                          </h2>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            {ui.hsaNote}
                          </p>

                          <div className="mt-5 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs sm:grid-cols-2">
                            <div>
                              <p className="font-bold uppercase text-slate-500">
                                {ui.ownerFieldLabel}
                              </p>
                              <p className="mt-0.5 text-sm font-extrabold text-slate-950">
                                {savedState.ownerName || "____________________________"}
                              </p>
                            </div>
                            <div>
                              <p className="font-bold uppercase text-slate-500">
                                {ui.orderFieldLabel}
                              </p>
                              <p className="mt-0.5 font-mono text-sm font-extrabold text-slate-950">
                                {savedState.orderRef || "____________________________"}
                              </p>
                            </div>
                            <div>
                              <p className="font-bold uppercase text-slate-500">
                                {ui.classFieldLabel}
                              </p>
                              <p className="mt-0.5 font-semibold text-slate-900">
                                {SITE_CONFIG.compliance.classification}
                              </p>
                            </div>
                            <div>
                              <p className="font-bold uppercase text-slate-500">
                                {ui.patentFieldLabel}
                              </p>
                              <p className="mt-0.5 font-semibold text-slate-900">
                                {SITE_CONFIG.compliance.patentsSummary}
                              </p>
                            </div>
                          </div>

                          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-4 text-xs leading-relaxed text-slate-700">
                            <p className="font-extrabold text-sky-950">
                              {ui.hsaStepsTitle}
                            </p>
                            <ol className="mt-2 list-decimal space-y-1 pl-4">
                              {ui.hsaSteps.map((step) => (
                                <li key={step}>{step}</li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>

                      <div className="no-print rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-teal-700">
                          <ClipboardCheck className="h-4 w-4" />
                          <span>{ui.mountEyebrow}</span>
                        </div>
                        <h2 className="mt-1 font-display text-2xl font-black text-slate-950">
                          {ui.mountHeading}
                        </h2>

                        <div className="mt-5 space-y-3">
                          {ui.mountSteps.map((step) => {
                            const checked = savedState.mountChecklist.includes(step.id);
                            return (
                              <label
                                key={step.id}
                                className={`flex cursor-pointer items-start gap-3.5 rounded-2xl border p-4 transition ${checked
                                  ? "border-emerald-300 bg-emerald-50/60"
                                  : "border-slate-200 bg-white hover:border-slate-300"
                                  }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleMountStep(step.id)}
                                  className="mt-1 h-4 w-4 rounded accent-emerald-600"
                                />
                                <div>
                                  <p className="text-sm font-extrabold text-slate-950">
                                    {step.title}
                                  </p>
                                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                                    {step.detail}
                                  </p>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      <div className="rounded-3xl border border-amber-200 bg-amber-50/60 p-6 md:p-8">
                        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-800">
                          <ShieldAlert className="h-4 w-4" />
                          <span>{ui.safetyEyebrow}</span>
                        </div>
                        <h2 className="mt-1 font-display text-xl font-black text-slate-950">
                          {ui.safetyHeading}
                        </h2>

                        <div className="mt-4 grid gap-6 text-xs text-slate-700 md:grid-cols-2">
                          <div>
                            <p className="font-extrabold text-slate-950">
                              {ui.doNotUseLabel}
                            </p>
                            <ul className="mt-2 list-disc space-y-1.5 pl-4">
                              {contra.absolute.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-extrabold text-slate-950">
                              {ui.clearanceLabel}
                            </p>
                            <ul className="mt-2 list-disc space-y-1.5 pl-4">
                              {contra.precautions.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                            <p className="mt-4 font-extrabold text-slate-950">
                              {ui.dailyChecksLabel}
                            </p>
                            <ul className="mt-2 list-disc space-y-1.5 pl-4">
                              {contra.safetyRules.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 5: 10-YEAR WARRANTY REGISTRATION & GLENDALE SUPPORT */}
                  {activeTab === "warranty" && (
                    <div className="grid gap-6 lg:grid-cols-12">
                      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-7 md:p-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-800">
                          <Award className="h-3.5 w-3.5" />
                          <span>{ui.warrantyBadge}</span>
                        </div>
                        <h2 className="mt-3 font-display text-2xl font-black text-slate-950">
                          {ui.warrantyHeading}
                        </h2>
                        <p className="mt-1 text-sm text-slate-600">{ui.warrantySub}</p>

                        {warrantyRefResult ? (
                          <div className="mt-6 rounded-2xl border border-emerald-300 bg-emerald-50 p-6">
                            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                            <h3 className="mt-3 font-display text-lg font-black text-emerald-950">
                              {ui.warrantySuccessTitle}
                            </h3>
                            <p className="mt-1 text-sm text-emerald-900">
                              {ui.warrantySuccessRef}{" "}
                              <strong className="font-mono">{warrantyRefResult}</strong>
                            </p>
                            <p className="mt-2 text-xs text-emerald-800">
                              {ui.warrantySuccessNote}
                            </p>
                          </div>
                        ) : (
                          <form onSubmit={handleRegisterWarranty} className="mt-6 space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="block text-xs font-bold text-slate-700">
                                  {ui.modelLabel}
                                </label>
                                <select
                                  value={warrantyModel}
                                  onChange={(e) => setWarrantyModel(e.target.value)}
                                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                                >
                                  {PRODUCTS.map((p) => (
                                    <option key={p.slug} value={p.slug}>
                                      {getLocalizedProduct(p, lang).name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-slate-700">
                                  {ui.finishLabel}
                                </label>
                                <select
                                  value={warrantyFinish}
                                  onChange={(e) => setWarrantyFinish(e.target.value)}
                                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                                >
                                  {ui.finishOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                      {opt.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="block text-xs font-bold text-slate-700">
                                  {ui.fullNameLabel}
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={warrantyName || savedState.ownerName}
                                  onChange={(e) => setWarrantyName(e.target.value)}
                                  placeholder={ui.namePlaceholder}
                                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-slate-700">
                                  {ui.emailFieldLabel}
                                </label>
                                <input
                                  type="email"
                                  required
                                  value={warrantyEmail || savedState.ownerEmail}
                                  onChange={(e) => setWarrantyEmail(e.target.value)}
                                  placeholder={ui.emailPlaceholder}
                                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                                />
                              </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="block text-xs font-bold text-slate-700">
                                  {ui.orderSerialLabel}
                                </label>
                                <input
                                  type="text"
                                  value={warrantyOrderRef || savedState.orderRef}
                                  onChange={(e) => setWarrantyOrderRef(e.target.value)}
                                  placeholder={ui.orderPlaceholder}
                                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-slate-700">
                                  {ui.stateCountryLabel}
                                </label>
                                <input
                                  type="text"
                                  value={warrantyState}
                                  onChange={(e) => setWarrantyState(e.target.value)}
                                  placeholder="California, USA"
                                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                                />
                              </div>
                            </div>

                            {warrantyError && (
                              <p className="rounded-xl bg-red-50 px-3.5 py-2 text-xs font-semibold text-red-700">
                                {warrantyError}
                              </p>
                            )}

                            <button
                              type="submit"
                              disabled={warrantyBusy}
                              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-emerald-700 disabled:opacity-60"
                            >
                              <ShieldCheck className="h-4 w-4" />
                              {warrantyBusy ? ui.registeringBtn : ui.activateWarrantyBtn}
                            </button>
                          </form>
                        )}
                      </div>

                      <div className="space-y-4 lg:col-span-5">
                        <div className="rounded-3xl border border-slate-200 bg-[#0B1F3A] p-6 text-white shadow-sm md:p-8">
                          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                            {ui.supportEyebrow}
                          </p>
                          <h3 className="mt-2 font-display text-xl font-black">
                            {ui.supportHeading}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-slate-300">
                            {ui.supportSub}
                          </p>

                          <div className="mt-5 space-y-3 text-sm">
                            <a
                              href={SITE_CONFIG.whatsappHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() =>
                                sendGTMEvent("click_whatsapp", { location: "patient_portal" })
                              }
                              className="flex items-center gap-3 rounded-2xl border border-emerald-400/40 bg-[#16A34A] px-4 py-3 font-extrabold text-white shadow-sm transition hover:bg-emerald-500"
                            >
                              <Phone className="h-4 w-4 text-white" />
                              <span>WhatsApp • {SITE_CONFIG.phoneDisplay}</span>
                            </a>
                            <a
                              href={`mailto:${SITE_CONFIG.supportEmail}`}
                              className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/15"
                            >
                              <Mail className="h-4 w-4 text-sky-400" />
                              <span>{SITE_CONFIG.supportEmail}</span>
                            </a>
                          </div>

                          <div className="mt-5 space-y-1 border-t border-white/10 pt-4 text-xs text-slate-300">
                            <p>
                              <strong className="text-white">{ui.addressWord}</strong>{" "}
                              {SITE_CONFIG.address.full}
                            </p>
                            <p>
                              <strong className="text-white">{ui.hoursWord}</strong>{" "}
                              {SITE_CONFIG.hours}
                            </p>
                            <p>
                              <strong className="text-white">{ui.languagesWord}</strong>{" "}
                              English, Español, Français, Українська, Русский
                            </p>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs leading-relaxed text-slate-600">
                          <strong className="text-slate-900">
                            {ui.wellnessNoticeBold}
                          </strong>{" "}
                          {SITE_CONFIG.compliance.classification}. {ui.wellnessNoticeText}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              );
}
