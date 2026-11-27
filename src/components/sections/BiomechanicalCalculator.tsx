"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Share2 } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
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
import { PRODUCTS } from "@/data/products";
import { useHsaSavings } from "@/context/HsaSavingsContext";
import { getAttributionSummary, sendGTMEvent } from "@/lib/gtm";

const GOALS: Array<{ key: ConditionGoal; label: string }> = [
  { key: "hernia", label: "L4–S1 Disc Comfort" },
  { key: "sciatica", label: "Sciatica & Leg Relief" },
  { key: "posture", label: "Desk & Tech-Neck" },
  { key: "athlete", label: "Athlete / Lifter Recovery" },
  { key: "pediatric", label: "Youth & Family Posture" },
];

export function BiomechanicalCalculator({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const c = dict.calculatorUi;
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

  const inclineRec = recommendIncline(goal);
  const physics = calculateTractionPhysics(weightLbs, angle);
  const boardRec = recommendBoardModel(weightLbs, heightIn, portable);
  const matchedProduct =
    PRODUCTS.find((p) => p.slug === boardRec.slug) || PRODUCTS[0];

  const shownDirect = applyHsaSavings
    ? calculateHsaPrice(matchedProduct.directPriceUsd)
    : matchedProduct.directPriceUsd;

  const handleShareProtocol = async () => {
    const shareUrl = `${getCanonicalUrl("/calculator/", lang)}?goal=${goal}&weight=${weightLbs}&angle=${angle}`;
    const shareText = `My Evminov spine angle plan: ${angle}° incline (${physics.netTractionLbs} lb smooth axial pull, ~${physics.estimatedDiscUnloadingPct}% unloading) — recommended board: ${matchedProduct.name}.`;
    sendGTMEvent("calculator_share", { goal, angle, product_slug: matchedProduct.slug });
    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share({
          title: "My Evminov Spine Angle & Board Plan",
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
          name: "Calculator Protocol Request",
          product: matchedProduct.slug,
          notes: `Goal: ${goal} | Weight: ${weightLbs} lbs | Height: ${inchesToFeet(heightIn)} | Angle: ${angle}° | Net Pull: ${physics.netTractionLbs} lbs | Model: ${matchedProduct.name}${attr ? ` | Attribution: ${attr}` : ""}`,
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

  const prefilledHref = buildPrefilledOrderUrl({
    lang,
    product: matchedProduct.slug,
    angle,
    goal,
    step: 2,
  });

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Controls */}
        <div className="space-y-6 lg:col-span-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              {c.goalLabel}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {GOALS.map((g) => {
                const active = goal === g.key;
                return (
                  <button
                    key={g.key}
                    type="button"
                    onClick={() => handleGoalChange(g.key)}
                    className={`rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                      active
                        ? "bg-slate-950 text-white shadow"
                        : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {g.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-between text-sm font-semibold text-slate-800">
                <label htmlFor="calc-weight">{c.weightLabel}</label>
                <span className="font-mono text-teal-700">
                  {weightLbs} lbs ({lbsToKg(weightLbs)} kg)
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
                className="mt-2 w-full accent-teal-700"
              />
            </div>

            <div>
              <div className="flex items-center justify-between text-sm font-semibold text-slate-800">
                <label htmlFor="calc-height">{c.heightLabel}</label>
                <span className="font-mono text-teal-700">
                  {inchesToFeet(heightIn)} ({inchesToCm(heightIn)} cm)
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
                className="mt-2 w-full accent-teal-700"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-sm font-semibold text-slate-800">
              <label htmlFor="calc-angle">{c.angleLabel}</label>
              <span className="font-mono text-amber-600 font-bold">
                {angle}° (Safe Window: {inclineRec.startAngle}°–{inclineRec.maxAngle}°)
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
              className="mt-2 w-full accent-amber-600"
            />
          </div>

          <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
            <input
              type="checkbox"
              checked={portable}
              onChange={(e) => setPortable(e.target.checked)}
              className="h-4 w-4 accent-teal-700"
            />
            <span className="font-medium">{c.portableLabel}</span>
          </label>

          {/* Lead Magnet: Email Custom Protocol */}
          <div className="rounded-2xl border border-teal-200/80 bg-teal-50/70 p-4">
            <p className="flex items-center gap-2 text-xs font-bold text-teal-900">
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
                  placeholder={c.emailProtocolPlaceholder}
                  className="flex-1 rounded-xl border border-teal-200 bg-white px-3 py-2 text-sm text-slate-900"
                />
                <button
                  type="submit"
                  disabled={leadBusy}
                  className="rounded-xl bg-teal-700 px-4 py-2 text-xs font-bold text-white hover:bg-teal-800 disabled:opacity-50"
                >
                  {c.emailProtocolButton}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Live Physics Output + Interactive Rotating Board SVG */}
        <div className="flex flex-col justify-between rounded-2xl bg-slate-950 p-6 text-white lg:col-span-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {inclineRec.label}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
              {inclineRec.description}
            </p>

            {/* Dynamic Live-Tilting Evminov Board SVG Diagram */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#071426] p-3">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <span>Live Incline Geometry</span>
                <span className="text-emerald-400">
                  {angle}° • Head Upright (Zero Blood Rush)
                </span>
              </div>
              <svg
                viewBox="0 0 320 130"
                className="mt-1.5 h-28 w-full"
                role="img"
                aria-label={`Evminov board tilted at ${angle} degrees producing ${physics.netTractionLbs} pounds of smooth axial traction`}
              >
                {/* Wall Stud & Floor Grid */}
                <rect x="274" y="10" width="14" height="106" rx="3" fill="#1E3A5F" />
                <line x1="20" y1="116" x2="296" y2="116" stroke="#334155" strokeWidth="2" />
                {/* Wall Anchor Hook */}
                <circle cx="274" cy="30" r="4" fill="#34D399" />

                {/* Rotating Carpathian Pine Plank anchored near floor left-pivot */}
                <g
                  transform={`translate(46, 112) rotate(${-angle})`}
                  style={{ transition: "transform 220ms ease-out" }}
                >
                  {/* Braided Steel Cable */}
                  <line
                    x1="210"
                    y1="-4"
                    x2="232"
                    y2="-24"
                    stroke="#38BDF8"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />
                  {/* Carpathian Pine Flex Deck */}
                  <rect
                    x="0"
                    y="-8"
                    width="225"
                    height="9"
                    rx="4"
                    fill="#D9A362"
                    stroke="#FDE68A"
                    strokeWidth="1"
                  />
                  {/* Sliding Alloy Carriage */}
                  <rect x="172" y="-14" width="24" height="7" rx="2" fill="#34D399" />
                  {/* Upright Head / Body Silhouette Indicator */}
                  <circle cx="164" cy="-19" r="6" fill="#E2E8F0" />
                  <line
                    x1="156"
                    y1="-15"
                    x2="70"
                    y2="-15"
                    stroke="#E2E8F0"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* Smooth Axial Unloading Force Arrow */}
                  <line
                    x1="138"
                    y1="-25"
                    x2="78"
                    y2="-25"
                    stroke="#34D399"
                    strokeWidth="2"
                  />
                  <polygon points="72,-25 81,-29 81,-21" fill="#34D399" />
                </g>

                {/* Angle Arc Label */}
                <path
                  d="M 88 116 A 42 42 0 0 0 82 96"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                />
                <text x="94" y="109" fill="#FBBF24" fontSize="11" fontWeight="700">
                  {angle}°
                </text>
                <text x="16" y="24" fill="#94A3B8" fontSize="10" fontWeight="600">
                  Smooth Pull: {physics.netTractionLbs} lb
                </text>
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2.5">
              <div className="rounded-xl bg-white/10 p-3 text-center">
                <p className="text-xl font-extrabold text-emerald-400">
                  {physics.netTractionLbs} lb
                </p>
                <p className="mt-0.5 text-[11px] text-slate-300">{c.netTraction}</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3 text-center">
                <p className="text-xl font-extrabold text-amber-400">
                  {physics.percentBodyWeight}%
                </p>
                <p className="mt-0.5 text-[11px] text-slate-300">{c.bodyweightPull}</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3 text-center">
                <p className="text-xl font-extrabold text-sky-400">
                  {physics.estimatedDiscUnloadingPct}%
                </p>
                <p className="mt-0.5 text-[11px] text-slate-300">{c.discUnloading}</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {c.recommendedBoard}
              </p>
              <p className="mt-1 text-base font-bold text-white">
                {matchedProduct.localizedNames[lang] || matchedProduct.name}
              </p>
              <p className="mt-1 text-xs text-slate-300">{boardRec.reason}</p>
              <div className="mt-3 flex items-baseline justify-between border-t border-white/10 pt-3">
                <span className="text-xs text-slate-300">
                  {c.dailyDuration}: <strong>{inclineRec.durationMin} min</strong>
                </span>
                <span className="text-lg font-extrabold text-emerald-400">
                  {formatUSD(shownDirect)}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2.5">
            <Link
              href={prefilledHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-emerald-400"
            >
              <span>{c.ctaOrderPrefilled}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={handleShareProtocol}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              <Share2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>
                {shareCopied
                  ? "Protocol Link Copied — Share With Your PT or Family!"
                  : "Share / Copy My Custom Angle Plan"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
