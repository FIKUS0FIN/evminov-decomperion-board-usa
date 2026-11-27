"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Dumbbell, Monitor, Shield, Stethoscope } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getLocalizedHref } from "@/lib/url";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

interface AudienceTab {
  id: string;
  label: string;
  icon: typeof Dumbbell;
  angle: string;
  duration: string;
  image: string;
  imageAlt: string;
  problemTitle: string;
  problemDesc: string;
  whyOthersFail: string;
  evminovSolution: string[];
  ctaLabel: string;
  ctaPath: string;
}

const AUDIENCE_TABS: AudienceTab[] = [
  {
    id: "athletes",
    label: "Strength Athletes & Lifters",
    icon: Dumbbell,
    angle: "20°–35° Athletic",
    duration: "12–15 min post-workout",
    image: "/images/authentic/exercise-reverse-traction.jpg",
    imageAlt: "Athlete performing inclined spinal decompression after heavy deadlifts and squats on Evminov board",
    problemTitle: "Barbell Compression After Heavy Deadlifts, Squats & CrossFit",
    problemDesc:
      "Heavy axial loading compresses lumbar discs and leaves paraspinal erectors locked tight for 48–72 hours. Hanging from a pull-up bar forces your lats and grip to tense — preventing deep spinal muscles from actually letting go.",
    whyOthersFail:
      "Pull-up bar hanging strains shoulders before the lower back relaxes; foam rollers only massage surface fascia without creating true longitudinal space.",
    evminovSolution: [
      "Lie supported along resilient Carpathian pine so erectors turn off while gravity gently elongates lumbar segments.",
      "Pair decompression with unloaded core activation (Wide Heavy-Duty model rated up to 330 lbs & 6'9\").",
      "Integrates directly into home gym walls — folds flat to 2.4\" between lifting sessions.",
    ],
    ctaLabel: "Explore Athlete Spine Recovery",
    ctaPath: "/conditions/athlete-spine-recovery/",
  },
  {
    id: "desk",
    label: "Desk & Remote Workers",
    icon: Monitor,
    angle: "12°–18° Daily Reset",
    duration: "10 min after work",
    image: "/images/authentic/exercise-seated-decompression.jpg",
    imageAlt: "Remote worker resetting lumbar and thoracic posture on Evminov inclined spine board",
    problemTitle: "8+ Hours of Seated Compression, Tight Hip Flexors & Tech-Neck",
    problemDesc:
      "Prolonged sitting places up to 40% more pressure on lower lumbar discs than standing, shortening hip flexors (psoas) while pulling shoulders and cervical vertebrae forward.",
    whyOthersFail:
      "Ergonomic chairs slow slouching but never reverse gravity's downward axial compression accumulated across an 8-hour workday.",
    evminovSolution: [
      "10 calm evening minutes open tight chest fascia, lengthen shortened psoas muscles, and unload L4–S1 discs.",
      "Includes the padded Glisson Cervical Loop FREE for gentle 8°–12° neck and upper-back tension release.",
      "Mounts neatly behind a home-office door or pairs with the No-Drill Apartment Stand.",
    ],
    ctaLabel: "Explore Desk Worker Posture",
    ctaPath: "/conditions/desk-worker-posture/",
  },
  {
    id: "standing",
    label: "Nurses & Standing Shifts",
    icon: Stethoscope,
    angle: "10°–16° Evening Unload",
    duration: "8–12 min post-shift",
    image: "/images/authentic/exercise-incline-stretch.jpg",
    imageAlt: "Evening supine spinal elongation routine for nurses and standing professionals on Evminov board",
    problemTitle: "12-Hour Concrete Floors, Lumbar Fatigue & Leg Heaviness",
    problemDesc:
      "Nurses, surgeons, chefs, educators, and retail staff endure relentless vertical gravity all shift, leaving lower-back facet joints compressed and legs aching by evening.",
    whyOthersFail:
      "Lying flat on a soft couch offers no gentle longitudinal traction to restore natural lumbar spacing after 12 hours upright.",
    evminovSolution: [
      "Immediate zero-axial-load supine position eases compressed lower-back tightness within minutes.",
      "Gentle rhythmic ankle flexes and low-incline glides encourage circulation and calm nervous-system recovery.",
      "Lightweight Select Ukrainian Alder option (~19–21 lbs) makes angle changes effortless for anyone.",
    ],
    ctaLabel: "Explore Lower Back & Sciatic Mobility",
    ctaPath: "/conditions/sciatica-relief/",
  },
  {
    id: "cervical",
    label: "Neck, Shoulders & Tactical",
    icon: Shield,
    angle: "8°–12° Cervical / 18° Core",
    duration: "8–10 min daily",
    image: "/images/authentic/evminov-glisson-loop-cervical.jpg",
    imageAlt: "Evminov Glisson Loop gentle cervical traction harness mounted on Carpathian pine board",
    problemTitle: "Upper-Back Stiffness, Gear Load & Cervical Tension",
    problemDesc:
      "Whether from heavy vests, long commutes, or laptop screens, chronic upper-thoracic and neck tension restricts mobility and radiates fatigue across the shoulder blades.",
    whyOthersFail:
      "Inflatable neck collars can compress the jaw unevenly and ignore thoracic posture alignment underneath.",
    evminovSolution: [
      "Padded cotton Glisson Loop aligns smoothly with the inclined board plane at ultra-gentle 8°–12° angles.",
      "Builds symmetrical upper-back stabilizer endurance without impact or violent cracking.",
      "One compact station covers cervical, thoracic, and lumbar conditioning for the whole household.",
    ],
    ctaLabel: "Explore Cervical Neck Care",
    ctaPath: "/conditions/cervical-neck-traction/",
  },
];

const EXTRA_MOVEMENT_STRIP = [
  {
    src: "/images/authentic/exercise-bridge-pelvic.jpg",
    alt: "Inclined pelvic bridge core activation on Evminov board",
    label: "Pelvic Bridge",
  },
  {
    src: "/images/authentic/exercise-lateral-flexion.jpg",
    alt: "Gentle lateral spinal flexion stretch on Evminov pine deck",
    label: "Lateral Symmetry",
  },
  {
    src: "/images/authentic/exercise-lumbar-rotation.jpg",
    alt: "Controlled unloaded lumbar mobility rotation on Evminov board",
    label: "Lumbar Mobility",
  },
  {
    src: "/images/authentic/exercise-passive-traction.jpg",
    alt: "Relaxed passive supine traction on low incline Evminov board",
    label: "Passive Unload",
  },
  {
    src: "/images/authentic/exercise-prone-extension.jpg",
    alt: "Prone lumbar stabilizer activation on Evminov inclined board",
    label: "Prone Stabilizers",
  },
  {
    src: "/images/authentic/exercise-prone-leg-lift.jpg",
    alt: "Prone alternating leg extension for posterior chain endurance",
    label: "Posterior Chain",
  },
  {
    src: "/images/authentic/exercise-quadriceps-stretch.jpg",
    alt: "Hip flexor and quadriceps release using Evminov board incline",
    label: "Hip Flexor Release",
  },
  {
    src: "/images/gallery/incline-rotation-mobility.jpg",
    alt: "Thoracic and lumbar rotation mobility drill on inclined wood deck",
    label: "Thoracic Flow",
  },
];

export function AthleteAndDeskSection({ lang }: { lang: Locale }) {
  const [activeId, setActiveId] = useState(AUDIENCE_TABS[0].id);
  const current = AUDIENCE_TABS.find((t) => t.id === activeId) || AUDIENCE_TABS[0];

  return (
    <section id="athletes" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-300">
            <Dumbbell className="h-3.5 w-3.5" />
            <span>Performance &amp; Everyday Ergonomics</span>
          </span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight md:text-4xl">
            Spine Restoration for Athletes, Desk Workers, Nurses &amp; Active Lifestyles
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Why traditional pull-up bars, foam rollers, and extreme inversion tables fall short — and how calibrated inclined unloading restores spinal comfort in 10 minutes.
          </p>
        </div>

        {/* 4 Interactive Audience Tabs */}
        <div
          role="tablist"
          aria-label="Audience spine recovery profiles"
          className="mt-8 flex flex-wrap gap-2"
        >
          {AUDIENCE_TABS.map((tab) => {
            const Icon = tab.icon;
            const active = tab.id === current.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveId(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-extrabold transition sm:text-sm ${
                  active
                    ? "bg-emerald-500 text-slate-950 shadow-lg"
                    : "border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Audience Split Showcase */}
        <div className="mt-6 grid items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl">
              <OptimizedImage
                src={current.image}
                alt={current.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-bold text-emerald-300 backdrop-blur">
                  {current.angle}
                </span>
                <span className="rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-bold text-amber-300 backdrop-blur">
                  {current.duration}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl font-black text-white">
              {current.problemTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {current.problemDesc}
            </p>

            <div className="mt-4 rounded-2xl border border-amber-400/25 bg-amber-500/10 p-4 text-xs leading-relaxed text-amber-100">
              <strong className="text-amber-300">Why Common Shortcuts Fall Short: </strong>
              {current.whyOthersFail}
            </div>

            <ul className="mt-5 space-y-2.5 text-sm text-slate-200">
              {current.evminovSolution.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={getLocalizedHref(current.ctaPath, lang)}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs font-black text-slate-950 transition hover:bg-emerald-400"
              >
                <span>{current.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={getLocalizedHref("/products/wide-heavy-duty-board/", lang)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/15"
              >
                <span>See 330 lb Heavy-Duty Model</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Authentic Studio Exercise Micro-Strip (Activating 8 Real Movement Photos) */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {EXTRA_MOVEMENT_STRIP.map((ex) => (
            <div
              key={ex.src}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-square w-full">
                <OptimizedImage
                  src={ex.src}
                  alt={ex.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 140px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="truncate px-2 py-1.5 text-center text-[11px] font-bold text-slate-300">
                {ex.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
