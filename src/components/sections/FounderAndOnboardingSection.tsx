import Link from "next/link";
import { ArrowRight, Award, CalendarCheck, CheckCircle2, Quote } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getLocalizedHref } from "@/lib/url";
import { FOUNDER_STORY } from "@/data/heritage";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

const ONBOARDING_PHASES = [
  {
    phase: "Phase 1 • Days 1–7",
    duration: "8–10 Min / Day",
    angle: "10°–15°",
    accent: "border-t-sky-500",
    badge: "bg-sky-50 text-sky-800",
    title: "Gentle Decompression & Acclimation",
    desc: "Low-angle inclined unloading calms tight paraspinal muscles and introduces smooth spinal elongation with zero muscle guarding.",
    bullets: [
      "Passive supine elongation (4–5 min)",
      "Gentle 8°–10° cervical release with Glisson Loop",
      "Slow diaphragmatic breathing & micro-pelvic glides",
    ],
  },
  {
    phase: "Phase 2 • Days 8–14",
    duration: "10–12 Min / Day",
    angle: "15°–20°",
    accent: "border-t-emerald-500",
    badge: "bg-emerald-50 text-emerald-800",
    title: "Deep Stabilizer & Multifidus Activation",
    desc: "Gradual angle progression pairs gentle unloading with tiny isometric movements that awaken the deep muscles stabilizing each vertebra.",
    bullets: [
      "Unilateral heel slides & hamstring alignment",
      "Thoracic rib-cage opening for desk posture",
      "Controlled low-amplitude core engagement",
    ],
  },
  {
    phase: "Phase 3 • Days 15–30+",
    duration: "12–15 Min / Day",
    angle: "18°–28°",
    accent: "border-t-amber-500",
    badge: "bg-amber-50 text-amber-800",
    title: "Functional Posture & Lifelong Maintenance",
    desc: "Build durable core armor around your spine so everyday work, travel, and athletic training stay resilient without recurring tightness.",
    bullets: [
      "Full spinal articulation & unloaded core circuits",
      "Post-workout athletic axial unloading routines",
      "Simple 3–5× weekly lifetime maintenance habit",
    ],
  },
];

const CLINIC_HERITAGE_PHOTOS = [
  {
    src: "/images/centers/kyiv-center-room.png",
    alt: "Historic flagship Evminov Spine Center exercise hall in Kyiv established in 1996",
    label: "Kyiv Flagship Hall (Est. 1996)",
  },
  {
    src: "/images/centers/kyiv-center-instructor.png",
    alt: "Certified Evminov method specialist calibrating inclined board angle",
    label: "Certified Angle Calibration",
  },
  {
    src: "/images/centers/kyiv-center-session.png",
    alt: "Guided spine conditioning session on inclined Carpathian pine board",
    label: "Guided Spine Conditioning",
  },
  {
    src: "/images/authentic/evminov-disc-injury-mri.jpg",
    alt: "Spinal disc biomechanics reference visual illustrating vertebral spacing",
    label: "Disc Spacing Biomechanics",
  },
  {
    src: "/images/authentic/care-modern-spine-1.jpg",
    alt: "Modern home spine decompression routine on Evminov board",
    label: "Daily Home Spine Care",
  },
  {
    src: "/images/authentic/care-modern-spine-2.jpg",
    alt: "Balanced posture maintenance training on inclined wood board",
    label: "Balanced Posture Training",
  },
  {
    src: "/images/authentic/care-modern-spine-3.jpg",
    alt: "Relaxed full-body elongation on Carpathian pine Evminov board",
    label: "Calm Full-Body Elongation",
  },
  {
    src: "/images/authentic/clinic-rehab-center-1.jpg",
    alt: "Multi-station Evminov spine conditioning studio with natural wood boards",
    label: "30-Year Studio Proven",
  },
];

export function FounderAndOnboardingSection({ lang }: { lang: Locale }) {
  return (
    <section id="heritage" className="mx-auto max-w-7xl px-4 py-16 space-y-16">
      {/* Part 1: Founder Story & 30-Year Continuity (Restored ClinicalTrust.js) */}
      <div className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
            <OptimizedImage
              src="/images/authentic/vyacheslav-evminov-founder.jpg"
              alt="Vyacheslav Evminov, inventor of the patented Evminov inclined decompression board"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-slate-950/85 p-3 text-white backdrop-blur">
              <p className="text-xs font-extrabold">{FOUNDER_STORY.name}</p>
              <p className="text-[11px] text-emerald-300">{FOUNDER_STORY.title}</p>
            </div>
          </div>

          <blockquote className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs italic leading-relaxed text-slate-800">
            <Quote className="mb-1.5 h-4 w-4 text-emerald-700" />
            &ldquo;{FOUNDER_STORY.quote}&rdquo;
          </blockquote>
        </div>

        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B1F3A] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
            <Award className="h-3.5 w-3.5" />
            <span>Operating Continuously Since 1996</span>
          </span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            30 Years of Proven Spine Craftsmanship — Born From Personal Recovery
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {FOUNDER_STORY.summary}
          </p>

          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {FOUNDER_STORY.timeline.slice(0, 4).map((step) => (
              <li
                key={step.year}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5"
              >
                <span className="text-xs font-black text-teal-700">{step.year}</span>
                <p className="mt-0.5 text-sm font-extrabold text-slate-950">{step.title}</p>
                <p className="mt-1 text-xs text-slate-600">{step.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={getLocalizedHref("/centers/", lang)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B1F3A] px-5 py-3 text-xs font-bold text-white transition hover:bg-teal-800"
            >
              <span>Visit Our Centers &amp; Full Story</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={getLocalizedHref("/portal/", lang)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-xs font-bold text-slate-900 transition hover:border-emerald-600 hover:bg-emerald-50"
            >
              <span>Open Patient Portal Workspace</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Real Studio & Kyiv Heritage Photo Mosaic (Activating 8 Authentic Photos) */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {CLINIC_HERITAGE_PHOTOS.map((photo) => (
          <figure
            key={photo.src}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs"
          >
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <OptimizedImage
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-3 py-2 text-center text-[11px] font-bold text-slate-700">
              {photo.label}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Part 2: 30-Day Guided Progression Program (Restored OnboardingProgram.js) */}
      <div id="onboarding" className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-900">
              <CalendarCheck className="h-3.5 w-3.5" />
              <span>Included Free With Every Board</span>
            </span>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-950">
              The 30-Day Guided Spine Conditioning Protocol
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              You are never left guessing. Follow our progressive 3-stage routine inside your free Patient Portal with countdown timers, angle targets, and starter video walkthroughs.
            </p>
          </div>
          <Link
            href={getLocalizedHref("/portal/", lang)}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-xs font-extrabold text-white shadow-sm transition hover:bg-emerald-700"
          >
            <span>Preview Interactive 30-Day Tracker</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {ONBOARDING_PHASES.map((item) => (
            <article
              key={item.phase}
              className={`flex flex-col rounded-2xl border border-slate-200 border-t-4 bg-white p-6 shadow-xs ${item.accent}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className={`rounded-full px-3 py-1 text-[11px] font-extrabold ${item.badge}`}>
                  {item.phase}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {item.angle} • {item.duration}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-black text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
