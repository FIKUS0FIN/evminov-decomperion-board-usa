"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Share2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import {
  buildCalculatorShareText,
  buildCalculatorSvgAria,
  CALCULATOR_COPY,
  getLocalizedBoardRecReason,
  getLocalizedProduct,
} from "@/i18n/locales/catalog";
import {
  calculateHsaPrice,
  calculateTractionPhysics,
  ConditionGoal,
  formatUSD,
  inchesToCm,
  inchesToFeet,
  lbsToKg,
  recommendBoardModel,
  recommendIncline,
} from "@/lib/physics";
import { buildPrefilledOrderUrl, getCanonicalUrl } from "@/lib/url";
import { getProductPrice, PRODUCTS } from "@/data/products";
import { useHsaSavings } from "@/context/HsaSavingsContext";
import { getAttributionSummary, sendGTMEvent } from "@/lib/gtm";

const GOAL_KEYS: ConditionGoal[] = [
  "hernia",
  "sciatica",
  "posture",
  "athlete",
  "pediatric",
];

const QUICK_ANGLES = [12, 16, 22, 28] as const;

export function BiomechanicalCalculator({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const c = dict.calculatorUi;
  const cx = CALCULATOR_COPY[lang];
  const { applyHsaSavings } = useHsaSavings();

  const [goal, setGoal] = useState<ConditionGoal>("hernia");
  const [weightLbs, setWeightLbs] = useState(175);
  const [heightIn, setHeightIn] = useState(70);
  const [angle, setAngle] = useState(15);
  const [portable, setPortable] = useState(false);

  const [leadEmail, setLeadEmail] = useState("");
  const [leadSent, setLeadSent] = useState(false);
  const [leadBusy, setLeadBusy] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  // Hydrate shared calculator deep links (?goal=sciatica&weight=210&angle=18)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const rafId = window.requestAnimationFrame(() => {
      const qs = new URLSearchParams(window.location.search);
      const qGoal = qs.get("goal");
      if (
        qGoal === "hernia" ||
        qGoal === "sciatica" ||
        qGoal === "posture" ||
        qGoal === "athlete" ||
        qGoal === "pediatric"
      ) {
        setGoal(qGoal);
      }
      const qWeight = Number(qs.get("weight"));
      if (Number.isFinite(qWeight) && qWeight >= 65 && qWeight <= 330) {
        setWeightLbs(qWeight);
      }
      const qAngle = Number(qs.get("angle"));
      if (Number.isFinite(qAngle) && qAngle >= 8 && qAngle <= 35) {
        setAngle(qAngle);
      }
    });
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  const inclineRec = recommendIncline(goal);
  const localizedInclineRec = cx.inclineRecs[goal];
  const physics = calculateTractionPhysics(weightLbs, angle);
  const boardRec = recommendBoardModel(weightLbs, heightIn, portable);
  const matchedProduct =
    PRODUCTS.find((p) => p.slug === boardRec.slug) || PRODUCTS[0];
  const localizedProduct = getLocalizedProduct(matchedProduct, lang);

  const baseDirect = getProductPrice(matchedProduct, boardRec.width, "direct");
  const shownDirect = applyHsaSavings ? calculateHsaPrice(baseDirect) : baseDirect;

  const isInSafeWindow =
    angle >= inclineRec.startAngle && angle <= inclineRec.maxAngle;

  // Dynamic support stand geometry for the live 3D board stage
  const rad = (angle * Math.PI) / 180;
  const tipX = 48 + Math.cos(rad) * 238;
  const tipY = 132 - Math.sin(rad) * 238;

  const handleStageMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rx: Number((-y * 6).toFixed(2)),
      ry: Number((x * 8).toFixed(2)),
    });
  };

  const handleShareProtocol = async () => {
    const shareUrl = `${getCanonicalUrl("/calculator/", lang)}?goal=${goal}&weight=${weightLbs}&angle=${angle}`;
    const shareText = buildCalculatorShareText(
      lang,
      angle,
      physics.netTractionLbs,
      physics.estimatedDiscUnloadingPct,
      localizedProduct.name
    );
    sendGTMEvent("calculator_share", {
      goal,
      angle,
      product_slug: matchedProduct.slug,
    });
    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share({
          title: cx.shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      }
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        setShareCopied(true);
        window.setTimeout(() => setShareCopied(false), 3000);
      }
    } catch {
      // user cancelled native share sheet
    }
  };

  const handleGoalChange = (nextGoal: ConditionGoal) => {
    setGoal(nextGoal);
    const rec = recommendIncline(nextGoal);
    setAngle(rec.startAngle);
    sendGTMEvent("calculator_complete", {
      goal: nextGoal,
      weight_lbs: weightLbs,
      recommended_model: boardRec.slug,
    });
  };

  const handleEmailPlan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail.trim() || leadBusy) return;
    setLeadBusy(true);
    const attr = getAttributionSummary();
    try {
      await fetch("/api/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "protocol_lead",
          email: leadEmail.trim(),
          name: "",
          product: matchedProduct.slug,
          productName: localizedProduct.name,
          totalUsd: baseDirect,
          notes: `Goal: ${goal} | Weight: ${weightLbs} lbs | Height: ${inchesToFeet(heightIn)} | Angle: ${angle}° | Net Pull: ${physics.netTractionLbs} lbs | Model: ${localizedProduct.name}${attr ? ` | Attribution: ${attr}` : ""}`,
          calculatorData: {
            goal,
            goalLabel: localizedInclineRec.label,
            goalDescription: localizedInclineRec.description,
            weightLbs,
            weightKg: lbsToKg(weightLbs),
            heightLabel: inchesToFeet(heightIn),
            heightCm: inchesToCm(heightIn),
            angle,
            safeWindow: `${inclineRec.startAngle}°–${inclineRec.maxAngle}°`,
            netTractionLbs: physics.netTractionLbs,
            percentBodyWeight: physics.percentBodyWeight,
            discUnloadingPct: physics.estimatedDiscUnloadingPct,
            durationMin: inclineRec.durationMin,
            recommendedModel: localizedProduct.name,
            recommendedSlug: matchedProduct.slug,
            boardWidth: boardRec.width,
            priceUsd: baseDirect,
            prefilledOrderPath: prefilledHref,
          },
          lang,
        }),
      });
      setLeadSent(true);
      sendGTMEvent("email_protocol_lead", {
        goal,
        product_slug: matchedProduct.slug,
      });
    } catch {
      setLeadSent(true);
    } finally {
      setLeadBusy(false);
    }
  };

  const baseOrderHref = buildPrefilledOrderUrl({
    lang,
    product: matchedProduct.slug,
    angle,
    goal,
    step: 1,
  });
  const prefilledHref =
    boardRec.width === "wide"
      ? baseOrderHref.replace("#order-form", "&width=wide#order-form")
      : baseOrderHref;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4 shadow-[0_24px_60px_-24px_rgba(11,31,58,0.18)] sm:p-7 md:p-8">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-7">
        {/* LEFT COLUMN: TACTILE CONTROLS */}
        <div className="min-w-0 space-y-5 lg:col-span-7">
          {/* Goal Selector */}
          <div>
            <p className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-teal-700">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{c.goalLabel}</span>
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {GOAL_KEYS.map((goalKey) => {
                const active = goal === goalKey;
                return (
                  <button
                    key={goalKey}
                    type="button"
                    aria-pressed={active}
                    onClick={() => handleGoalChange(goalKey)}
                    className={`inline-flex cursor-pointer items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-xs font-bold transition ${
                      active
                        ? "bg-[#0B1F3A] text-white shadow-md ring-2 ring-emerald-500/40"
                        : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-300 hover:bg-teal-50/40"
                    }`}
                  >
                    {active && (
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    )}
                    <span>{cx.goals[goalKey]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Weight & Height Tactile Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 sm:text-sm">
                <label htmlFor="calc-weight">{c.weightLabel}</label>
                <span className="rounded-lg bg-white px-2 py-0.5 font-mono text-xs font-extrabold text-teal-800 shadow-2xs">
                  {weightLbs} {cx.lbsUnit} ({lbsToKg(weightLbs)} {cx.kgUnit})
                </span>
              </div>
              <input
                id="calc-weight"
                type="range"
                min={65}
                max={330}
                step={5}
                value={weightLbs}
                onChange={(e) => setWeightLbs(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer accent-teal-700"
              />
              <div className="mt-1 flex justify-between text-[10px] font-semibold text-slate-400">
                <span>65 lbs</span>
                <span>220 lbs (Std)</span>
                <span>330 lbs (Wide)</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 sm:text-sm">
                <label htmlFor="calc-height">{c.heightLabel}</label>
                <span className="rounded-lg bg-white px-2 py-0.5 font-mono text-xs font-extrabold text-teal-800 shadow-2xs">
                  {inchesToFeet(heightIn)} ({inchesToCm(heightIn)} {cx.cmUnit})
                </span>
              </div>
              <input
                id="calc-height"
                type="range"
                min={48}
                max={81}
                step={1}
                value={heightIn}
                onChange={(e) => setHeightIn(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer accent-teal-700"
              />
              <div className="mt-1 flex justify-between text-[10px] font-semibold text-slate-400">
                <span>4&apos;0&quot;</span>
                <span>6&apos;4&quot; (Std)</span>
                <span>6&apos;9&quot; (Wide)</span>
              </div>
            </div>
          </div>

          {/* Incline Angle Tactile Card with Quick Presets */}
          <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/50 via-white to-emerald-50/30 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-800 sm:text-sm">
              <label htmlFor="calc-angle">{c.angleLabel}</label>
              <span
                className={`rounded-full px-2.5 py-0.5 font-mono text-xs font-extrabold ${
                  isInSafeWindow
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {angle}° ({cx.safeWindowLabel}: {inclineRec.startAngle}°–
                {inclineRec.maxAngle}°)
              </span>
            </div>
            <input
              id="calc-angle"
              type="range"
              min={8}
              max={35}
              step={1}
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="mt-3 h-2 w-full cursor-pointer accent-amber-600"
            />
            <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {QUICK_ANGLES.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAngle(preset)}
                    className={`min-h-[40px] min-w-[44px] cursor-pointer rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                      angle === preset
                        ? "bg-amber-600 text-white shadow-xs"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-amber-400"
                    }`}
                  >
                    {preset}°
                  </button>
                ))}
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                8°–35° Head-Up Range
              </span>
            </div>
          </div>

          {/* Portable / Travel Toggle */}
          <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm text-slate-800 transition hover:border-teal-300">
            <span className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={portable}
                onChange={(e) => setPortable(e.target.checked)}
                className="h-4 w-4 cursor-pointer accent-teal-700"
              />
              <span className="font-semibold">{c.portableLabel}</span>
            </span>
            <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold text-slate-500">
              {portable ? "3-Piece" : "2-Piece"}
            </span>
          </label>

          {/* Lead Magnet: Email Custom Protocol */}
          <div className="rounded-2xl border border-teal-200/80 bg-teal-50/60 p-4">
            <p className="flex items-center gap-2 text-xs font-extrabold text-teal-950">
              <Mail className="h-4 w-4 text-teal-700" />
              <span>{c.emailProtocolTitle}</span>
            </p>
            {leadSent ? (
              <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="h-4 w-4" />
                <span>{c.emailProtocolSuccess}</span>
              </p>
            ) : (
              <form
                onSubmit={handleEmailPlan}
                className="mt-2.5 flex flex-col gap-2 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  placeholder={cx.emailPlaceholder}
                  className="flex-1 rounded-xl border border-teal-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-teal-600 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={leadBusy}
                  className="min-h-[44px] cursor-pointer rounded-xl bg-teal-700 px-5 py-2.5 text-xs font-extrabold text-white shadow-sm transition hover:bg-teal-800 disabled:opacity-50"
                >
                  {c.emailProtocolButton}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: 3D LIVE BIOMECHANICAL OUTPUT & CONVERSION CARD */}
        <div className="relative flex min-w-0 flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#071529] via-[#0B1F3A] to-[#081A2A] p-4 text-white shadow-2xl sm:p-6 lg:col-span-5">
          {/* Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl"
          />

          <div className="relative z-10">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
              {localizedInclineRec.label}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
              {localizedInclineRec.description}
            </p>

            {/* 3D Interactive Live-Tilting Evminov Board Stage */}
            <div
              className="perspective-stage mt-4"
              onMouseMove={handleStageMove}
              onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
            >
              <div
                className="preserve-3d overflow-hidden rounded-2xl border border-emerald-400/25 bg-[#061121] p-3.5 shadow-inner transition-transform duration-300 ease-out"
                style={{
                  transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                }}
              >
                {/* Clean Separated HUD Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-extrabold uppercase tracking-wider">
                  <span className="text-slate-400">{cx.svgTitle}</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {angle}° • {cx.svgHeadUpright}
                  </span>
                </div>

                <svg
                  viewBox="0 0 340 156"
                  className="mt-1.5 h-36 w-full sm:h-40"
                  role="img"
                  aria-label={buildCalculatorSvgAria(
                    lang,
                    angle,
                    physics.netTractionLbs
                  )}
                >
                  <defs>
                    <linearGradient id="calcWoodTop" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#B47638" />
                      <stop offset="50%" stopColor="#E0A965" />
                      <stop offset="100%" stopColor="#C88B49" />
                    </linearGradient>
                    <linearGradient id="calcWoodSide" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6D411A" />
                      <stop offset="100%" stopColor="#8C5826" />
                    </linearGradient>
                    <linearGradient id="calcFloor" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#34D399" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#0F766E" stopOpacity="0.02" />
                    </linearGradient>
                    <radialGradient id="calcDiscGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#34D399" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* 3D Isometric Floor */}
                  <polygon points="18,140 322,140 336,154 4,154" fill="url(#calcFloor)" />
                  <line x1="18" y1="140" x2="322" y2="140" stroke="#334155" strokeWidth="1.5" />

                  {/* Dynamic Support Stand Column */}
                  <rect
                    x={tipX - 16}
                    y="135"
                    width="34"
                    height="5"
                    rx="2.5"
                    fill="#475569"
                  />
                  <rect
                    x={tipX - 3}
                    y={Math.max(12, tipY - 3)}
                    width="8"
                    height={Math.max(12, 137 - Math.max(12, tipY - 3))}
                    rx="3"
                    fill="#64748B"
                  />
                  <circle cx={tipX + 1} cy={tipY + 2} r="3.5" fill="#34D399" />

                  {/* Shadow */}
                  <ellipse cx="170" cy="141" rx="112" ry="3.5" fill="#020617" opacity="0.55" />

                  {/* Angle Arc */}
                  <path
                    d="M 88 134 A 40 40 0 0 0 84 118"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />
                  <text x="95" y="133" fill="#FBBF24" fontSize="11" fontWeight="800">
                    {angle}°
                  </text>

                  {/* Live-Tilting 3D Board + Spine Nodes */}
                  <g
                    style={{
                      transform: `rotate(${-angle}deg)`,
                      transformOrigin: "48px 132px",
                      transition: "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <rect x="48" y="131" width="238" height="5.5" rx="2.5" fill="url(#calcWoodSide)" />
                    <rect x="48" y="124" width="238" height="7.5" rx="3" fill="url(#calcWoodTop)" />
                    <line x1="54" y1="126" x2="280" y2="126" stroke="#FDE68A" strokeOpacity="0.45" strokeWidth="1" />

                    {/* Alloy Carriage & Cushioned Grips */}
                    <rect x="226" y="117" width="24" height="7" rx="2" fill="#94A3B8" />
                    <rect x="235" y="107" width="4.5" height="11" rx="2" fill="#CBD5E1" />
                    <rect x="230" y="104" width="15" height="4" rx="2" fill="#10B981" />

                    {/* Supine User Silhouette */}
                    <path
                      d="M 80 118 L 146 118 L 204 116"
                      stroke="#E2E8F0"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 200 116 L 232 108"
                      stroke="#94A3B8"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                    />
                    <circle cx="218" cy="111" r="8" fill="#F8FAFC" />

                    {/* Pulsing Lumbar Disc Decompression Nodes */}
                    {[142, 156, 170, 184].map((cxPos, i) => (
                      <g key={cxPos}>
                        <circle
                          cx={cxPos}
                          cy="117"
                          r="6.5"
                          fill="url(#calcDiscGlow)"
                          className="animate-spine-pulse"
                          style={{ animationDelay: `${i * 0.22}s` }}
                        />
                        <circle cx={cxPos} cy="117" r="2.3" fill="#6EE7B7" />
                      </g>
                    ))}

                    {/* Axial Pull Vector */}
                    <path
                      d="M 126 105 L 104 105 M 109 101.5 L 104 105 L 109 108.5"
                      stroke="#34D399"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </g>
                </svg>

                <div className="mt-1 flex items-center justify-between border-t border-white/10 pt-2 text-[11px] font-semibold text-slate-300">
                  <span>
                    {cx.svgSmoothPull}:{" "}
                    <strong className="text-emerald-300">
                      {physics.netTractionLbs} {cx.pullUnit}
                    </strong>
                  </span>
                  <span className="text-sky-300">
                    -{physics.estimatedDiscUnloadingPct}% Disc Load
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Telemetry KPI Cards */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center sm:p-3">
                <p className="whitespace-nowrap text-base font-black text-emerald-400 sm:text-xl">
                  {physics.netTractionLbs} {cx.pullUnit}
                </p>
                <p className="mt-0.5 text-[10px] font-semibold leading-tight text-slate-300">
                  {c.netTraction}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center sm:p-3">
                <p className="whitespace-nowrap text-base font-black text-amber-400 sm:text-xl">
                  {physics.percentBodyWeight}%
                </p>
                <p className="mt-0.5 text-[10px] font-semibold leading-tight text-slate-300">
                  {c.bodyweightPull}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center sm:p-3">
                <p className="whitespace-nowrap text-base font-black text-sky-400 sm:text-xl">
                  {physics.estimatedDiscUnloadingPct}%
                </p>
                <p className="mt-0.5 text-[10px] font-semibold leading-tight text-slate-300">
                  {c.discUnloading}
                </p>
              </div>
            </div>

            {/* Recommended Model Box */}
            <div className="mt-4 rounded-2xl border border-emerald-400/25 bg-emerald-500/5 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300">
                  {c.recommendedBoard}
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-300">
                  <ShieldCheck className="h-3 w-3 text-emerald-400" />
                  60-Day Trial
                </span>
              </div>
              <p className="mt-1 text-base font-black text-white">
                {localizedProduct.name}
                {boardRec.width === "wide" ? " — Wide Heavy-Duty (330 lbs)" : ""}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                {boardRec.width === "wide"
                  ? getLocalizedBoardRecReason("wide-heavy-duty-board", lang)
                  : getLocalizedBoardRecReason(boardRec.slug, lang)}
              </p>
              <div className="mt-3 flex items-baseline justify-between border-t border-white/10 pt-3">
                <span className="text-xs text-slate-300">
                  {c.dailyDuration}:{" "}
                  <strong className="text-white">
                    {inclineRec.durationMin} {cx.minUnit}
                  </strong>
                </span>
                <span className="text-xl font-black text-emerald-400">
                  {formatUSD(shownDirect)}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="relative z-10 mt-5 flex flex-col gap-2.5">
            <Link
              href={prefilledHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3.5 text-sm font-black text-slate-950 shadow-[0_12px_30px_-8px_rgba(16,185,129,0.65)] transition hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <span>{c.ctaOrderPrefilled}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={handleShareProtocol}
              className="inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              <Share2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>{shareCopied ? cx.shareCopiedBtn : cx.shareBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
