import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquareHeart, Youtube } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getLocalizedHref } from "@/lib/url";
import { SITE_CONFIG } from "@/lib/site-config";

const REAL_OWNER_SCENARIOS = [
  {
    profile: "Remote Engineers & Desk Professionals",
    angle: "12°–16° Evening Reset",
    model: "Standard Solid Pine or 2-Piece Folding",
    summary:
      "After 8–10 hours seated at dual monitors, owners report spending 10 minutes on the flexing pine board plus 5 minutes with the free Glisson Loop to unwind tight hip flexors, open rounded shoulders, and ease end-of-day lower-back stiffness.",
    linkPath: "/conditions/desk-worker-posture/",
  },
  {
    profile: "Strength Athletes, CrossFit & Runners",
    angle: "20°–32° Post-Training",
    model: "Wide Heavy-Duty Panel (Up to 330 lbs)",
    summary:
      "Lifters use 12–15 minutes of relaxed inclined elongation after heavy deadlifts and squats so paraspinal muscles can actually turn off — something hanging from a pull-up bar never lets grip and lats do.",
    linkPath: "/conditions/athlete-spine-recovery/",
  },
  {
    profile: "Nurses, Teachers & Standing Shifts",
    angle: "10°–15° Supine Unload",
    model: "Select Ukrainian Alder (~19–21 lbs)",
    summary:
      "Professionals standing 10–12 hours on hard floors use calm low-angle supine lying and gentle ankle glides to offload vertical compression and restore evening comfort without flipping upside down.",
    linkPath: "/conditions/sciatica-relief/",
  },
  {
    profile: "Multi-Generational Families & Youth",
    angle: "8°–12° Kids / 15°–22° Adults",
    model: "Standard Pine + Optional No-Drill Stand",
    summary:
      "With 5-second carriage height adjustments, one board serves school-age kids resetting backpack posture to upbeat music, working parents unwinding after commutes, and seniors maintaining gentle daily mobility.",
    linkPath: "/conditions/scoliosis-posture/",
  },
];

export function OwnerScenariosAndReviewsSection({ lang }: { lang: Locale }) {
  return (
    <section id="community" className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-800">
            <MessageSquareHeart className="h-3.5 w-3.5" />
            <span>Transparent Owner Experiences — Zero Paid Fake Reviews</span>
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            How Real Households &amp; Athletes Use the Evminov Board Every Day
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We publish honest, compliance-verified biomechanical use cases and collect real feedback directly from board owners via our unboxing QR portal — never fabricated testimonials.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <a
            href={SITE_CONFIG.youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs font-bold text-red-700 transition hover:bg-red-100"
          >
            <Youtube className="h-4 w-4" />
            <span>Watch Real Demos ({SITE_CONFIG.youtubeHandle})</span>
          </a>
          <Link
            href={getLocalizedHref("/welcome/", lang)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#0B1F3A] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-teal-800"
          >
            <span>Share Verified Owner Feedback</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {REAL_OWNER_SCENARIOS.map((item) => (
          <article
            key={item.profile}
            className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-teal-600 hover:shadow-md"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-[11px] font-extrabold text-teal-800">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {item.angle}
              </span>
              <span className="text-[11px] font-bold text-slate-500">{item.model}</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-black text-slate-950">
              {item.profile}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              {item.summary}
            </p>
            <Link
              href={getLocalizedHref(item.linkPath, lang)}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-teal-700 hover:underline"
            >
              <span>View Matching Routine &amp; Sizing</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
