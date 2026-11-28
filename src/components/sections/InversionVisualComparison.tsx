"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Calculator,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { getLocalizedHref } from "@/lib/url";
import { INVERSION_VISUAL_COPY } from "@/i18n/locales/home-part1";

function useCardTilt() {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rx: Number((-y * 7).toFixed(2)),
      ry: Number((x * 9).toFixed(2)),
    });
  };

  const handleLeave = () => setTilt({ rx: 0, ry: 0 });

  return { tilt, handleMove, handleLeave };
}

export function InversionVisualComparison({ lang = "en" }: { lang?: Locale }) {
  const c = INVERSION_VISUAL_COPY[lang];
  const [selectedIdx, setSelectedIdx] = useState(1); // Default: 18° Daily
  const activeMode = c.evminovModes[selectedIdx] ?? c.evminovModes[0];

  const evTilt = useCardTilt();
  const invTilt = useCardTilt();

  // Calculate dynamic support stand contact height based on angle (pivot at x=54, y=136, length=248)
  const rad = (activeMode.angle * Math.PI) / 180;
  const boardTipX = 54 + Math.cos(rad) * 246;
  const boardTipY = 136 - Math.sin(rad) * 246;

  return (
    <div className="mt-8 space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* LEFT CARD: EVMINOV 3D CONTROLLED LOW-ANGLE DECOMPRESSION */}
        <article
          aria-label={c.evminovBadge}
          className="relative flex flex-col overflow-hidden rounded-3xl border-2 border-emerald-500/70 bg-gradient-to-b from-emerald-50/70 via-white to-white p-5 shadow-[0_20px_50px_-20px_rgba(16,185,129,0.28)] sm:p-6"
        >
          {/* Top Accent Glow Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600"
          />

          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-extrabold tracking-wide text-white shadow-sm">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{c.evminovRecommended}</span>
            </div>
            <span className="rounded-full bg-emerald-100/90 px-2.5 py-1 text-[11px] font-bold text-emerald-900">
              {c.evminovSub}
            </span>
          </div>

          <h3 className="mt-3 font-display text-lg font-black tracking-tight text-slate-950 sm:text-xl">
            {c.evminovBadge}
          </h3>

          {/* Interactive 3D Biomechanical Stage */}
          <div
            className="perspective-stage mt-4"
            onMouseMove={evTilt.handleMove}
            onMouseLeave={evTilt.handleLeave}
          >
            <div
              className="preserve-3d relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-[#071529] via-[#0B1F3A] to-[#0E2E3A] p-4 shadow-inner transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${evTilt.tilt.rx}deg) rotateY(${evTilt.tilt.ry}deg)`,
              }}
            >
              {/* Volumetric Ambient Lighting */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-emerald-500/20 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 left-10 h-32 w-48 rounded-full bg-teal-400/10 blur-2xl"
              />

              {/* Clean HUD Top Bar (Never overlaps SVG) */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  {c.evminovHeadUp}
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] font-bold text-slate-100 backdrop-blur-sm">
                  {activeMode.angle}° • {activeMode.tractionPct}
                </span>
              </div>

              {/* 3D Layered Biomechanical SVG Canvas */}
              <div className="relative z-10 mt-2">
                <svg
                  viewBox="0 0 360 165"
                  className="h-44 w-full sm:h-48"
                  role="img"
                  aria-label={c.evminovAria}
                >
                  <defs>
                    {/* 3D Wood Plank Top & Bevel Gradients */}
                    <linearGradient id="evWoodTop" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#B47638" />
                      <stop offset="45%" stopColor="#E0A965" />
                      <stop offset="100%" stopColor="#C88B49" />
                    </linearGradient>
                    <linearGradient id="evWoodSide" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6D411A" />
                      <stop offset="100%" stopColor="#8C5826" />
                    </linearGradient>
                    <linearGradient id="evFloorGrid" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#34D399" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#0F766E" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="evStandMetal" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#334155" />
                      <stop offset="50%" stopColor="#64748B" />
                      <stop offset="100%" stopColor="#1E293B" />
                    </linearGradient>
                    <radialGradient id="discGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#34D399" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* 3D Perspective Floor Plane */}
                  <polygon
                    points="22,146 338,146 354,160 6,160"
                    fill="url(#evFloorGrid)"
                  />
                  <line x1="22" y1="146" x2="338" y2="146" stroke="#334155" strokeWidth="1.5" />
                  {/* Subtle Isometric Depth Lines */}
                  <line x1="90" y1="146" x2="74" y2="160" stroke="#1E3A5F" strokeWidth="1" />
                  <line x1="180" y1="146" x2="180" y2="160" stroke="#1E3A5F" strokeWidth="1" />
                  <line x1="270" y1="146" x2="286" y2="160" stroke="#1E3A5F" strokeWidth="1" />

                  {/* Dynamic Support Stand Pillar (Adjusts cleanly to board tip) */}
                  <g>
                    {/* Stand Base Foot */}
                    <rect
                      x={boardTipX - 18}
                      y="141"
                      width="38"
                      height="5"
                      rx="2.5"
                      fill="#475569"
                    />
                    {/* Vertical Support Column */}
                    <rect
                      x={boardTipX - 4}
                      y={Math.max(18, boardTipY - 4)}
                      width="10"
                      height={Math.max(12, 143 - Math.max(18, boardTipY - 4))}
                      rx="3"
                      fill="url(#evStandMetal)"
                      className="transition-all duration-700 ease-out"
                    />
                    {/* Locking Pin */}
                    <circle
                      cx={boardTipX + 1}
                      cy={boardTipY + 2}
                      r="4"
                      fill="#34D399"
                      className="transition-all duration-700 ease-out"
                    />
                  </g>

                  {/* Floor Contact Shadow */}
                  <ellipse cx="180" cy="147" rx="120" ry="4" fill="#020617" opacity="0.55" />

                  {/* Angle Arc Readout at Base Pivot */}
                  <path
                    d="M 96 138 A 42 42 0 0 0 92 121"
                    fill="none"
                    stroke="#34D399"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                    opacity="0.7"
                  />
                  <text
                    x="104"
                    y="138"
                    fill="#6EE7B7"
                    fontSize="10"
                    fontWeight="800"
                    fontFamily="system-ui, sans-serif"
                  >
                    {activeMode.angle}°
                  </text>

                  {/* 3D Animated Tilting Evminov Board + User Silhouette */}
                  <g
                    style={{
                      transform: `rotate(${-activeMode.angle}deg)`,
                      transformOrigin: "54px 136px",
                      transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {/* 3D Extruded Bottom Wood Thickness */}
                    <rect
                      x="54"
                      y="135"
                      width="250"
                      height="6"
                      rx="3"
                      fill="url(#evWoodSide)"
                    />
                    {/* Main Multi-Layer Carpathian Wood Plank */}
                    <rect
                      x="54"
                      y="128"
                      width="250"
                      height="8"
                      rx="3.5"
                      fill="url(#evWoodTop)"
                    />
                    {/* Wood Grain Specular Highlight */}
                    <line
                      x1="60"
                      y1="130"
                      x2="296"
                      y2="130"
                      stroke="#FDE68A"
                      strokeOpacity="0.45"
                      strokeWidth="1.2"
                    />

                    {/* Lower Rubber Floor Bumper */}
                    <rect x="49" y="131" width="8" height="10" rx="3" fill="#1E293B" />

                    {/* Aircraft-Alloy Sliding Carriage & Dual Grips */}
                    <rect x="242" y="121" width="26" height="7" rx="2.5" fill="#94A3B8" />
                    <rect x="251" y="110" width="5" height="12" rx="2" fill="#CBD5E1" />
                    <rect x="246" y="107" width="16" height="4.5" rx="2.2" fill="#10B981" />

                    {/* Anatomical Supine Silhouette (Head Up & Supported) */}
                    {/* Legs & Torso Resting Calmly */}
                    <path
                      d="M 88 122 L 154 122 L 216 120"
                      stroke="#E2E8F0"
                      strokeWidth="7.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.92"
                    />
                    {/* Relaxed Arms Reaching to Upper Carriage Grips */}
                    <path
                      d="M 212 120 L 246 112"
                      stroke="#94A3B8"
                      strokeWidth="4.2"
                      strokeLinecap="round"
                    />
                    {/* Head Elevated Calmly Above Heart */}
                    <circle cx="232" cy="115" r="8.5" fill="#F8FAFC" />
                    <circle
                      cx="232"
                      cy="115"
                      r="12"
                      fill="none"
                      stroke="#34D399"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                      opacity="0.65"
                    />

                    {/* Animated Pulsing Lumbar/Thoracic Disc Decompression Nodes */}
                    {[152, 166, 180, 194].map((cx, i) => (
                      <g key={cx}>
                        <circle
                          cx={cx}
                          cy="121"
                          r="7"
                          fill="url(#discGlow)"
                          className="animate-spine-pulse"
                          style={{ animationDelay: `${i * 0.25}s` }}
                        />
                        <circle cx={cx} cy="121" r="2.6" fill="#6EE7B7" />
                      </g>
                    ))}

                    {/* Gentle Elongation Vector Arrows along Spine */}
                    <path
                      d="M 136 108 L 122 108 M 126 104.5 L 122 108 L 126 111.5"
                      stroke="#34D399"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M 198 108 L 212 108 M 208 104.5 L 212 108 L 208 111.5"
                      stroke="#34D399"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </g>
                </svg>
              </div>

              {/* Interactive Angle Preset Controls */}
              <div
                role="group"
                aria-label={c.evminovSvgTitle}
                className="relative z-10 mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3"
              >
                <div className="flex flex-wrap gap-1.5">
                  {c.evminovModes.map((mode, idx) => {
                    const isActive = idx === selectedIdx;
                    return (
                      <button
                        key={mode.angle}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setSelectedIdx(idx)}
                        className={`cursor-pointer rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition ${
                          isActive
                            ? "bg-emerald-500 text-slate-950 shadow-[0_0_16px_rgba(16,185,129,0.5)]"
                            : "bg-white/10 text-slate-200 hover:bg-white/20"
                        }`}
                      >
                        {mode.label}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[11px] font-medium text-emerald-200">
                  {activeMode.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Semantic Telemetry Strip (<dl> for SEO & Scannability) */}
          <dl className="mt-4 grid grid-cols-3 gap-2">
            {c.evminovMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-emerald-200/80 bg-emerald-50/60 px-2.5 py-2 text-center"
              >
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800/80">
                  {m.label}
                </dt>
                <dd className="mt-0.5 text-xs font-extrabold text-emerald-950">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Key Advantages List */}
          <ul className="mt-4 space-y-2.5 text-xs text-slate-700 sm:text-sm">
            {c.evminovPoints.map((pt) => (
              <li key={pt.bold} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong className="text-slate-950">{pt.bold}</strong> {pt.text}
                </span>
              </li>
            ))}
          </ul>
        </article>

        {/* RIGHT CARD: TRADITIONAL 60°–90° INVERSION TABLE */}
        <article
          aria-label={c.invBadge}
          className="flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-50/90 p-5 sm:p-6"
        >
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold text-amber-900">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
              {c.invWarningTag}
            </span>
            <span className="rounded-full bg-slate-200/80 px-2.5 py-1 text-[11px] font-bold text-slate-600">
              {c.invSub}
            </span>
          </div>

          <h3 className="mt-3 font-display text-lg font-black tracking-tight text-slate-900 sm:text-xl">
            {c.invBadge}
          </h3>

          {/* 3D Warning Stage */}
          <div
            className="perspective-stage mt-4"
            onMouseMove={invTilt.handleMove}
            onMouseLeave={invTilt.handleLeave}
          >
            <div
              className="preserve-3d relative overflow-hidden rounded-2xl border border-rose-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-[#24131A] p-4 shadow-inner transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${invTilt.tilt.rx}deg) rotateY(${invTilt.tilt.ry}deg)`,
              }}
            >
              {/* Crimson Warning Ambient Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-4 right-14 h-36 w-36 rounded-full bg-rose-500/20 blur-3xl"
              />

              {/* Clean HUD Top Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/40 bg-rose-500/15 px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-rose-300">
                  <span className="h-2 w-2 rounded-full bg-rose-400 shadow-[0_0_8px_#fb7185]" />
                  {c.invSvgTitle}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-bold text-slate-300">
                  60°–90°
                </span>
              </div>

              {/* 3D Inversion Warning SVG Canvas */}
              <div className="relative z-10 mt-2">
                <svg
                  viewBox="0 0 360 165"
                  className="h-44 w-full sm:h-48"
                  role="img"
                  aria-label={c.invAria}
                >
                  <defs>
                    <linearGradient id="invFloorGrid" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.16" />
                      <stop offset="100%" stopColor="#0F172A" stopOpacity="0.02" />
                    </linearGradient>
                    <radialGradient id="cranialGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FB7185" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* 3D Perspective Floor Plane */}
                  <polygon
                    points="22,146 338,146 354,160 6,160"
                    fill="url(#invFloorGrid)"
                  />
                  <line x1="22" y1="146" x2="338" y2="146" stroke="#334155" strokeWidth="1.5" />

                  {/* Bulky 16 sq ft Steel A-Frame Footprint Shadow */}
                  <ellipse cx="185" cy="147" rx="88" ry="5" fill="#020617" opacity="0.65" />

                  {/* Bulky Steel A-Frame Legs */}
                  <line x1="126" y1="146" x2="180" y2="62" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
                  <line x1="234" y1="146" x2="180" y2="62" stroke="#64748B" strokeWidth="5" strokeLinecap="round" />
                  <line x1="145" y1="118" x2="215" y2="118" stroke="#334155" strokeWidth="3.5" />
                  {/* Pivot Joint */}
                  <circle cx="180" cy="62" r="6" fill="#94A3B8" />

                  {/* Swaying Inverted Table + Upside-Down Figure (Outer translate + Inner pivot rotation) */}
                  <g transform="translate(180, 62)">
                    <g className="animate-inversion-sway">
                      {/* Steel Backrest Slab */}
                      <rect x="-46" y="-5" width="106" height="9" rx="3" fill="#475569" />
                      <rect x="-46" y="-5" width="106" height="3.5" rx="2" fill="#94A3B8" />

                      {/* Ankle Clamp Lock at Upper End */}
                      <rect x="-50" y="-14" width="12" height="16" rx="3" fill="#F59E0B" />
                      <circle
                        cx="-44"
                        cy="-9"
                        r="10"
                        fill="none"
                        stroke="#FBBF24"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                        className="animate-cranial-pulse"
                      />

                      {/* Upside-Down Body Silhouette */}
                      <line
                        x1="-40"
                        y1="-12"
                        x2="38"
                        y2="-12"
                        stroke="#CBD5E1"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />

                      {/* Downward-Hanging Head with Cranial Pressure Pulse */}
                      <circle
                        cx="54"
                        cy="-12"
                        r="17"
                        fill="url(#cranialGlow)"
                        className="animate-cranial-pulse"
                      />
                      <circle cx="54" cy="-12" r="8.5" fill="#F87171" />
                      <circle
                        cx="54"
                        cy="-12"
                        r="13"
                        fill="none"
                        stroke="#FB7185"
                        strokeWidth="1.4"
                        strokeDasharray="3 2"
                      />
                    </g>
                  </g>

                  {/* Downward Blood-Rush Gravity Arrows */}
                  <g stroke="#FB7185" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.85">
                    <path d="M 248 48 L 248 76 M 244 71 L 248 76 L 252 71" />
                    <path d="M 262 60 L 262 88 M 258 83 L 262 88 L 266 83" />
                  </g>
                </svg>
              </div>

              {/* Clean Subtitle Bar (Matching Height of Left Stage Footer) */}
              <div className="relative z-10 mt-2 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
                <p className="text-[11px] font-medium text-rose-200/90">
                  {c.invSvgSub}
                </p>
              </div>
            </div>
          </div>

          {/* Semantic Telemetry Strip */}
          <dl className="mt-4 grid grid-cols-3 gap-2">
            {c.invMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-center"
              >
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  {m.label}
                </dt>
                <dd className="mt-0.5 text-xs font-extrabold text-rose-700">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Warning Points List */}
          <ul className="mt-4 space-y-2.5 text-xs text-slate-600 sm:text-sm">
            {c.invPoints.map((pt) => (
              <li key={pt.bold} className="flex items-start gap-2.5">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                <span>
                  <strong className="text-slate-900">{pt.bold}</strong> {pt.text}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* HIGH-CONVERSION ACTION STRIP */}
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-[#08172B] via-[#0B1F3A] to-[#0D3138] p-6 text-white shadow-xl sm:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl"
        />
        <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" />
              {c.ctaEyebrow}
            </p>
            <h3 className="mt-1.5 font-display text-xl font-black tracking-tight text-white sm:text-2xl">
              {c.ctaTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {c.ctaSubtitle}
            </p>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {c.ctaTrustPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-200"
                >
                  <ShieldCheck className="h-3 w-3 text-emerald-400" />
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col lg:items-stretch">
            <Link
              href={getLocalizedHref("/order/", lang)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-sm font-black text-slate-950 shadow-[0_12px_30px_-8px_rgba(16,185,129,0.65)] transition hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <span>{c.ctaPrimary}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={getLocalizedHref("/calculator/", lang)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold text-white transition hover:border-emerald-400/60 hover:bg-white/10"
            >
              <Calculator className="h-3.5 w-3.5 text-emerald-300" />
              <span>{c.ctaSecondary}</span>
            </Link>
            <Link
              href={getLocalizedHref("/compare/evminov-vs-inversion-table/", lang)}
              className="mt-0.5 inline-flex items-center justify-center gap-1 text-center text-[11px] font-semibold text-emerald-300/90 underline-offset-4 transition hover:text-emerald-200 hover:underline"
            >
              <span>{c.ctaCompareLink}</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
