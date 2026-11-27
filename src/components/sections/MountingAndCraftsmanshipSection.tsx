import Link from "next/link";
import { ArrowRight, CheckCircle2, Hammer, Home, Wrench } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getLocalizedHref } from "@/lib/url";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

const CRAFTSMANSHIP_GALLERY = [
  {
    src: "/images/craftsmanship/workshop-wood-selection.jpg",
    alt: "Artisan hand-selecting slow-growth resonant Carpathian pine beams in Evminov workshop",
    badge: "Timber Selection",
    title: "Kiln-Dried Carpathian Pine & Alder",
    desc: "Sustainably harvested, multi-layer laminated timber engineered to flex smoothly without warping.",
  },
  {
    src: "/images/authentic/evminov-steel-carriage-pin.jpg",
    alt: "Close-up of solid steel locking pin securing Evminov mobile carriage to wood beam",
    badge: "Dual Safety Lock",
    title: "Aircraft-Alloy Carriage & Steel Pin",
    desc: "Zero-slip steel pin lock adjusts height in 5 seconds and holds firmly up to 330 lbs on Wide models.",
  },
  {
    src: "/images/products/board-studio-front.jpg",
    alt: "Front studio view of handcrafted Evminov decompression board showing smooth satin finish",
    badge: "2.4\" Slim Fold",
    title: "Water-Based Satin Interior Finish",
    desc: "Odor-free hypoallergenic wood finish blends cleanly into bedrooms, offices, and rehab studios.",
  },
  {
    src: "/images/authentic/evminov-carriage-accessory.jpg",
    alt: "Ergonomic padded grip handles and carriage frame of the Evminov board",
    badge: "Ergonomic Grip",
    title: "Cushioned Multi-Position Grips",
    desc: "Two grip height levels let users relax shoulders completely during gentle supine elongation.",
  },
  {
    src: "/images/products/carriage-foot-sleeves-installation.jpg",
    alt: "Attaching soft foot sleeves onto Evminov carriage for athletic reverse routines",
    badge: "Quick Attachment",
    title: "Tool-Free Foot Sleeve Mounting",
    desc: "Slide soft cushioned foot sleeves onto the lower carriage bars in seconds without wrenches.",
  },
  {
    src: "/images/products/carriage-foot-sleeves-inversion.jpg",
    alt: "Gentle athletic reverse traction setup using padded foot sleeves on Evminov board",
    badge: "Athletic Option",
    title: "Controlled -25° Reverse Unloading",
    desc: "Supports mild controlled reverse stretches for conditioned athletes without extreme 90° hanging.",
  },
  {
    src: "/images/accessories/soft-foot-attachments-carriage.jpg",
    alt: "Close-up of padded soft foot sleeves mounted on Evminov gliding carriage",
    badge: "Zero Pinch",
    title: "Zero-Pinch High-Density Padding",
    desc: "Soft foam-wrapped contact points protect ankles and insteps during core and mobility drills.",
  },
  {
    src: "/images/products/board-mounting-bracket.jpg",
    alt: "Heavy-duty steel 16 inch US wood stud wall mounting bracket rated over 400 pounds",
    badge: "400+ lb Rated",
    title: "US 16\" Wood Stud Wall Bracket",
    desc: "Included lag-bolt kit anchors securely into a single standard US drywall wood stud in ~15 minutes.",
  },
];

export function MountingAndCraftsmanshipSection({ lang }: { lang: Locale }) {
  return (
    <section id="mounting" className="border-y border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-800">
            <Wrench className="h-3.5 w-3.5" />
            <span>Engineered for US &amp; Canadian Homes</span>
          </span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            15-Minute Mounting on 16&quot; US Wall Studs — Or Zero-Drill Apartment Stand
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Whether you own a house with drywall studs or rent an apartment where drilling isn&apos;t allowed, setting up your Evminov station takes minutes and folds flat to just 2.4 inches.
          </p>
        </div>

        {/* Side-by-Side Mounting Options */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Option 1: Single Stud Wall Mount */}
          <div className="rounded-3xl border-2 border-teal-600/30 bg-teal-50/30 p-6 md:p-8">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-700 px-3 py-1 text-xs font-extrabold text-white">
                <Hammer className="h-3.5 w-3.5" />
                Option 1 • Included Free
              </span>
              <span className="text-xs font-bold text-teal-800">Folds to 2.4&quot; Flat</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-black text-slate-950">
              Single 16-Inch Wood Stud Wall Mount
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Every US order includes our heavy-duty steel wall anchor kit engineered specifically for standard North American 16&quot; on-center drywall wood studs (plus masonry anchors for brick/concrete).
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-700 sm:text-sm">
              {[
                "Only one solid 2×4 wood stud required (78\"–86\" anchor height)",
                "Installs in ~15 minutes with a stud finder and basic power drill",
                "Rated 400+ lbs pull strength — folds upright behind a bedroom or office door",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Option 2: Demountable Free-Standing Ladder Stand */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B1F3A] px-3 py-1 text-xs font-extrabold text-emerald-300">
                <Home className="h-3.5 w-3.5" />
                Option 2 • Renters &amp; Apartments ($275)
              </span>
              <span className="text-xs font-bold text-slate-600">Zero Wall Holes</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-black text-slate-950">
              Demountable Free-Standing Ladder Stand
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Protect your security deposit with our freestanding kiln-dried beech &amp; steel ladder frame. Supports full 8°–90° board angles with zero screws in your wall.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-700 sm:text-sm">
              {[
                "Assembles & disassembles in 3 minutes with tool-free safety pins",
                "Non-marking rubberized pads protect hardwood, tile, and carpet",
                "Compact <3.5 sq ft floor footprint rated up to 350 lbs",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <Link
              href={getLocalizedHref("/products/free-standing-stand/", lang)}
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-extrabold text-teal-700 hover:underline"
            >
              <span>Inspect No-Drill Stand Specs</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Patented Multi-Layer Pine & Hardware Close-Up Gallery */}
        <div className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                Inside the Hardware
              </span>
              <h3 className="mt-1 font-display text-2xl font-black text-slate-950">
                Patented Multi-Layer Carpathian Pine &amp; Aircraft-Alloy Construction
              </h3>
            </div>
            <Link
              href={getLocalizedHref("/portal/", lang)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:underline"
            >
              <span>Open Interactive 16&quot; Mounting Checklist in Patient Portal</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CRAFTSMANSHIP_GALLERY.map((item) => (
              <article
                key={item.src}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <OptimizedImage
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-slate-950/85 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                    {item.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-display text-sm font-extrabold text-slate-950">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
