import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartHandshake, Music, Sparkles, Users } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getLocalizedHref } from "@/lib/url";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

const FAMILY_CHECKLIST_13 = [
  "Start kids (ages 4–15) on an ultra-gentle 6°–12° incline under adult supervision.",
  "Keep sessions playful and short: 5–8 minutes daily to rhythmic music ('Lying-Down Dancing').",
  "Move the alloy carriage pin in 5 seconds so kids, parents, and grandparents share one board.",
  "Always align shoulders, pelvis, and heels symmetrically along the center line of the pine beam.",
  "Use calm nasal breathing during overhead reaches to open backpack-rounded shoulders.",
  "Avoid sudden bouncing, jerky swings, or steep angles for growing youth spines.",
  "Pair screen-time breaks with 5 minutes of gentle posture reset after homework.",
  "Use a light soft ball for parent-child symmetrical overhead coordination games.",
  "Adjust adults to 15°–22° for lumbar decompression after work or heavy lifting.",
  "Adjust seniors to mild 8°–14° angles with relaxed breathing and calm side-roll exits.",
  "Rest calmly for 1–2 minutes after unloading before standing upright.",
  "Fold the board flat to 2.4\" against the wall after use so living spaces stay open.",
  "Make daily spine hygiene as automatic as brushing teeth every morning and evening.",
];

export function PediatricFamilySection({ lang }: { lang: Locale }) {
  return (
    <section
      id="pediatric-family"
      className="border-y border-emerald-200/70 bg-gradient-to-b from-emerald-50/50 via-white to-sky-50/40 py-16"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-100/80 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-900">
            <Users className="h-3.5 w-3.5" />
            <span>Multi-Generational Family Station • Ages 4 to 85+</span>
          </span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            The &ldquo;Spine Toothbrush&rdquo; Method: Kids Posture, Symmetry &amp; Lifelong Family Care
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Everyone learns to brush 32 teeth for two minutes a day — yet almost nobody teaches children how to care for their 32–34 vertebrae after heavy backpacks and hours on tablets. One Evminov board turns daily posture hygiene into an easy, joyful family habit.
          </p>
        </div>

        {/* 3 Signature Cards: Spine Toothbrush Analogy + Family Economics + Lying-Down Dancing */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Card 1: Spine Toothbrush */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-black text-slate-950">
              Why Your Spine Needs a &ldquo;Toothbrush&rdquo; Every Single Day
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Damaged teeth can be fixed with crowns or implants — your spine and nervous system are irreplaceable. Just 5–10 minutes of gentle unloaded elongation reverses daily seated gravity before poor posture becomes permanent stiffness.
            </p>
            <div className="mt-4 rounded-2xl bg-slate-50 p-3.5 text-xs font-semibold text-slate-800">
              32 teeth → 2 min daily brushing
              <br />
              <span className="text-emerald-700 font-extrabold">
                32–34 vertebrae → 5–10 min daily Evminov hygiene
              </span>
            </div>
          </div>

          {/* Card 2: Family Economics */}
          <div className="rounded-3xl border border-emerald-300 bg-[#0B1F3A] p-6 text-white shadow-lg">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
              <HeartHandshake className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-black">
              Under 3 Cents a Day for the Whole Family
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              A family of three spends $120–$180 every year on toothpaste and brushes alone. A handcrafted Carpathian pine Evminov board ($450) built to last 20+ years costs roughly{" "}
              <strong className="text-emerald-300">$7.50 per person per year</strong> — and fits children, parents, and grandparents in 5 seconds.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5 text-center">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-display text-2xl font-black text-emerald-400">$7.50</p>
                <p className="text-[11px] text-slate-300">Per Person / Year</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-display text-2xl font-black text-sky-400">5 sec</p>
                <p className="text-[11px] text-slate-300">Height Adjustment</p>
              </div>
            </div>
          </div>

          {/* Card 3: Lying-Down Dancing */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
              <Music className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-black text-slate-950">
              &ldquo;Lying-Down Dancing&rdquo; to Rhythmic Music (Ages 4–15)
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Boring lectures never fix teen posture. Turning on favorite upbeat music for 6 minutes of supervised symmetrical reaches and soft-ball passes on a low 8°–12° incline builds balanced posture habits kids genuinely look forward to.
            </p>
            <Link
              href={getLocalizedHref("/conditions/scoliosis-posture/", lang)}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-teal-700 hover:underline"
            >
              <span>Read Youth &amp; Family Posture Guide</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Authentic Family & Youth Photography + 13-Point Family Plan */}
        <div className="mt-8 grid items-start gap-6 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <OptimizedImage
                src="/images/gallery/youth-paired-traction.jpg"
                alt="Supervised teen and youth symmetrical posture training on low incline Evminov board"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/85 px-3 py-1 text-[11px] font-bold text-emerald-300">
                Youth Backpack &amp; Screen Posture Reset (8°–12°)
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <OptimizedImage
                src="/images/gallery/family-home-lifestyle.jpg"
                alt="Multi-generational family practicing home spine wellness on Evminov Carpathian pine board"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/85 px-3 py-1 text-[11px] font-bold text-white">
                One Adjustable Board for Every Generation
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-7 md:p-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
              Practical Household Blueprint
            </span>
            <h3 className="mt-1 font-display text-2xl font-black text-slate-950">
              13-Point Daily Spine Plan for Children &amp; Parents
            </h3>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {FAMILY_CHECKLIST_13.map((point, idx) => (
                <div
                  key={point}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-xs leading-relaxed text-slate-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-black text-white">
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Always consult a pediatrician for diagnosed structural scoliosis curves.
              </span>
              <Link
                href={getLocalizedHref("/order/?product=standard-pine-board&step=2#order-form", lang)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-teal-700 px-4 py-2.5 text-xs font-bold text-white hover:bg-teal-800"
              >
                <span>Equip Your Home ($450)</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
