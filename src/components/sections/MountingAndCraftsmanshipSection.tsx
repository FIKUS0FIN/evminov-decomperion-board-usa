import Link from "next/link";
import { ArrowRight, CheckCircle2, Hammer, Home, Wrench } from "lucide-react";
import { Locale } from "@/i18n/types";
import { MOUNTING_CRAFTSMANSHIP_COPY } from "@/i18n/locales/home-part2";
import { getLocalizedHref } from "@/lib/url";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

const CRAFT_ITEMS = [
  { idx: 0, src: "/images/products/board-perspective-view.jpg" },
  { idx: 1, src: "/images/authentic/evminov-steel-carriage-pin.jpg" },
  { idx: 2, src: "/images/products/board-studio-incline.jpg" },
  { idx: 3, src: "/images/authentic/hero-carriage-traction-detail.jpg" },
] as const;

export function MountingAndCraftsmanshipSection({ lang }: { lang: Locale }) {
  const c = MOUNTING_CRAFTSMANSHIP_COPY[lang];

  return (
    <section id="mounting" className="border-y border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-800">
            <Wrench className="h-3.5 w-3.5" />
            <span>{c.badge}</span>
          </span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {c.heading}
          </h2>
          <p className="mt-3 text-base text-slate-600">{c.subtitle}</p>
        </div>

        {/* Side-by-Side Mounting Options */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Option 1 */}
          <div className="rounded-3xl border-2 border-teal-600/30 bg-teal-50/30 p-6 md:p-8">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-700 px-3 py-1 text-xs font-extrabold text-white">
                <Hammer className="h-3.5 w-3.5" />
                {c.opt1Badge}
              </span>
              <span className="text-xs font-bold text-teal-800">{c.opt1Tag}</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-black text-slate-950">
              {c.opt1Title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {c.opt1Desc}
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-700 sm:text-sm">
              {c.opt1Bullets.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Option 2 */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B1F3A] px-3 py-1 text-xs font-extrabold text-emerald-300">
                <Home className="h-3.5 w-3.5" />
                {c.opt2Badge}
              </span>
              <span className="text-xs font-bold text-slate-600">{c.opt2Tag}</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-black text-slate-950">
              {c.opt2Title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {c.opt2Desc}
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-700 sm:text-sm">
              {c.opt2Bullets.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <Link
              href={getLocalizedHref("/products/2-piece-folding-board/", lang)}
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-extrabold text-teal-700 hover:underline"
            >
              <span>{c.opt2Cta}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Patented Multi-Layer Pine & Hardware Close-Up Gallery */}
        <div className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                {c.hwEyebrow}
              </span>
              <h3 className="mt-1 font-display text-2xl font-black text-slate-950">
                {c.hwHeading}
              </h3>
            </div>
            <Link
              href={getLocalizedHref("/portal/", lang)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:underline"
            >
              <span>{c.hwPortalLink}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CRAFT_ITEMS.map(({ idx, src }) => {
              const item = c.gallery[idx];
              if (!item) return null;
              return (
                <article
                  key={src}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] w-full bg-[#F4F7F9]">
                    <OptimizedImage
                      src={src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-1.5"
                    />
                    <span className="absolute left-2.5 top-2.5 rounded-full bg-slate-950/85 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-display text-sm font-extrabold text-slate-950">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
