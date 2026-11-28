import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Brain,
  CheckCircle2,
  Clock,
  HeartPulse,
  Home,
  Mail,
  MapPin,
  Phone,
  Quote,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Trees,
  Users,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { CENTERS_PAGE_COPY } from "@/i18n/locales/centers";
import { LOCALIZED_CONTRAINDICATIONS } from "@/i18n/locales/portal";
import { HOMEPAGE_EXTRA_COPY } from "@/i18n/locales/home-part2";
import { SITE_CONFIG } from "@/lib/site-config";
import { getLocalizedHref } from "@/lib/url";
import { CENTERS } from "@/data/heritage";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { LiteYouTube } from "@/components/ui/LiteYouTube";
import { PatentsLightboxSection } from "@/components/sections/PatentsLightboxSection";

const HERO_COPY: Record<Locale, { badge: string; h1: string; subtitle: string }> = {
  en: {
    badge: "ESTABLISHED 1996 • 30 YEARS OF EVMINOV VERTEBRAL HERITAGE",
    h1: "Evminov Spine Centers, Founder Heritage & Defender Recovery",
    subtitle:
      "Discover Vyacheslav Evminov's personal recovery story, the 'Home Hospital' methodology, our 'Spine of the Defender' tactical & veteran program, natural Carpathian wood science, safety protocols, and global centers from Kyiv to Glendale, California.",
  },
  es: {
    badge: "FUNDADO EN 1996 • 30 AÑOS DE LEGADO EVMINOV",
    h1: "Centros Evminov, Historia del Fundador y Programa Defensor",
    subtitle:
      "Conoce la historia personal de recuperación de Vyacheslav Evminov, el modelo 'Hospital en Casa', el programa para veteranos y operadores tácticos, ciencia de la madera de los Cárpatos y nuestra red global desde Kyiv hasta California.",
  },
  fr: {
    badge: "FONDÉ EN 1996 • 30 ANS D'HÉRITAGE EVMINOV",
    h1: "Centres Evminov, Histoire du Fondateur & Programme Défenseur",
    subtitle:
      "Découvrez l'histoire personnelle de Vyacheslav Evminov, le modèle 'Hôpital à Domicile', le programme vétérans & tactique, la science du pin des Carpates et nos centres officiels de Kyiv à la Californie.",
  },
  de: {
    badge: "GEGRÜNDET 1996 • 30 JAHRE EVMINOV WIRBELSÄULEN-TRADITION",
    h1: "Evminov Zentren, Gründer-Geschichte & Defender-Programm",
    subtitle:
      "Entdecken Sie Vyacheslav Evminovs persönliche Genesungsgeschichte, das ‚Home Hospital‘-Konzept, unser Programm für Veteranen & Einsatzkräfte, die Wissenschaft des Karpaten-Kiefernholzes, Sicherheitsprotokolle und unsere Zentren von Kyjiw bis Glendale, Kalifornien.",
  },
  uk: {
    badge: "ЗАСНОВАНО 1996 • 30 РОКІВ СПАДЩИНИ МЕТОДИКИ ЄВМІНОВА",
    h1: "Центри Євмінова, Історія Засновника та Програма «Спина Захисника»",
    subtitle:
      "Історія особистого відновлення В'ячеслава Євмінова, концепція «Домашній Госпіталь», програма реабілітації для військових і ветеранів «Знімаємо броню з хребта», наука карпатської деревини, правила безпеки та мережа центрів від Києва до Каліфорнії.",
  },
  ru: {
    badge: "ОСНОВАНО В 1996 • 30 ЛЕТ НАСЛЕДИЯ МЕТОДИКИ ЕВМИНОВА",
    h1: "Центры Евминова, История Основателя и Программа «Спина Защитника»",
    subtitle:
      "История личного восстановления Вячеслава Евминова, концепция «Домашний Госпиталь», программа разгрузки спины для военных и ветеранов, наука карпатской древесины, правила безопасности и сеть центров от Киева до Калифорнии.",
  },
};

const PILLAR_ICONS = [Clock, Home, Users, ShieldCheck] as const;

const KYIV_IMAGES = [
  "/images/centers/kyiv-center-room.png",
  "/images/centers/kyiv-center-instructor.png",
  "/images/centers/kyiv-center-session.png",
] as const;

const WOOD_IMAGES = [
  "/images/craftsmanship/workshop-wood-selection.jpg",
  "/images/products/board-studio-woodgrain.jpg",
] as const;

export function CentersHeritagePage({ lang }: { lang: Locale }) {
  const hero = HERO_COPY[lang];
  const c = CENTERS_PAGE_COPY[lang];
  const contra = LOCALIZED_CONTRAINDICATIONS[lang];
  const vids = HOMEPAGE_EXTRA_COPY[lang];

  return (
    <div className="bg-white">
      {/* 1. EPIC CLINICAL NAVY HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1628] via-[#0B1F3A] to-[#0D3B46] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-300">
              <Award className="h-4 w-4" />
              <span>{hero.badge}</span>
            </span>

            <h1 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              {hero.h1}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {hero.subtitle}
            </p>

            <nav aria-label={c.jumpAria} className="mt-7 flex flex-wrap gap-2">
              {c.jumpLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-slate-100 backdrop-blur transition hover:border-emerald-400 hover:bg-emerald-500/20"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.kpis.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur"
              >
                <p className="font-display text-2xl font-black text-emerald-400">
                  {stat.val}
                </p>
                <p className="mt-0.5 text-sm font-extrabold text-white">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-slate-300">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FOUNDER STORY + MRI REFERENCE + 7-MILESTONE TIMELINE */}
      <section id="founder-story" className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
            {c.founderEyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {c.founderHeading}
          </h2>
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-md">
              <OptimizedImage
                src="/images/authentic/vyacheslav-evminov-founder.jpg"
                alt={c.founderName}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-slate-950/85 p-3 text-white backdrop-blur">
                <p className="text-sm font-extrabold">{c.founderName}</p>
                <p className="text-xs text-emerald-300">{c.founderSubtitle}</p>
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-sm">
              <OptimizedImage
                src="/images/authentic/evminov-disc-injury-mri.jpg"
                alt={c.mriBadge}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-bold text-sky-300">
                {c.mriBadge}
              </span>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-7">
            <blockquote className="rounded-3xl border-l-4 border-emerald-600 bg-emerald-50/70 p-6 text-base italic leading-relaxed text-slate-900">
              <Quote className="mb-2 h-5 w-5 text-emerald-700" />
              &ldquo;{c.founderQuote}&rdquo;
            </blockquote>

            <div className="space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>{c.founderP1}</p>
              <p>{c.founderP2}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                {c.credentialsHeading}
              </p>
              <ul className="mt-3 grid gap-2 text-xs font-semibold text-slate-800 sm:grid-cols-2">
                {c.founderRoles.map((role) => (
                  <li key={role} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl font-black text-slate-950">
            {c.timelineHeading}
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {c.milestones.map((m) => (
              <article
                key={m.year}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-teal-600"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-base font-black text-teal-700">
                    {m.year}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-700">
                    {m.badge}
                  </span>
                </div>
                <h4 className="mt-2 font-display text-sm font-extrabold text-slate-950">
                  {m.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {m.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOME HOSPITAL CONCEPT */}
      <section
        id="home-hospital"
        className="border-y border-slate-200 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-extrabold text-teal-900">
              <Home className="h-3.5 w-3.5" />
              <span>{c.homeHospitalBadge}</span>
            </span>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              {c.homeHospitalHeading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {c.homeHospitalIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.homeHospitalPillars.map((p, idx) => {
              const Icon = PILLAR_ICONS[idx];
              return (
                <div
                  key={p.title}
                  className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-xs"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-black text-slate-950">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
                    {p.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-extrabold text-emerald-800">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {p.metric}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {KYIV_IMAGES.map((src, idx) => (
              <figure
                key={src}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs"
              >
                <div className="relative aspect-[16/10] w-full">
                  <OptimizedImage
                    src={src}
                    alt={c.kyivCaptions[idx]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-2.5 text-xs font-bold text-slate-700">
                  {c.kyivCaptions[idx]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPINE OF THE DEFENDER PROGRAM */}
      <section
        id="defender-program"
        className="bg-gradient-to-br from-[#0B1628] via-slate-950 to-[#0C2A2A] py-16 text-white"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/15 px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-300">
              <Shield className="h-3.5 w-3.5" />
              <span>{c.defenderBadge}</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight md:text-4xl">
              {c.defenderHeading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              {c.defenderIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                {c.defenderChallengesHeading}
              </p>
              {c.defenderChallenges.map((ch) => (
                <div
                  key={ch.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <h3 className="font-display text-base font-extrabold text-white">
                    {ch.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                    {ch.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                {c.defenderStepsHeading}
              </p>
              {c.defenderSteps.map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl border border-emerald-400/25 border-l-4 border-l-emerald-400 bg-emerald-500/[0.07] p-5"
                >
                  <span className="font-mono text-xs font-black text-emerald-300">
                    {c.stageWord} {s.step}
                  </span>
                  <h3 className="mt-1 font-display text-base font-extrabold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-200">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEEP-DIVE AUDIENCE BIOMECHANICS MATRIX */}
      <section id="audience-protocols" className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-sky-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{c.audienceBadge}</span>
            </span>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight md:text-4xl">
              {c.audienceHeading}
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {c.audiences.map((item) => (
              <article
                key={item.id}
                className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-sky-400/30 bg-sky-500/15 px-3 py-1 text-[11px] font-bold text-sky-300">
                    {item.tag}
                  </span>
                  <span className="text-xs font-extrabold text-emerald-400">
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  {item.lead}
                </p>

                <div className="mt-4 flex-1 space-y-3">
                  {item.mechanisms.map((m) => (
                    <div
                      key={m.profile}
                      className="rounded-2xl border border-white/10 bg-black/25 p-4 text-xs leading-relaxed"
                    >
                      <p className="font-extrabold text-sky-300">{m.profile}</p>
                      <p className="mt-1.5 text-slate-200">
                        <strong className="text-rose-300">
                          {c.challengeWord}{" "}
                        </strong>
                        {m.challenge}
                      </p>
                      <p className="mt-1 text-slate-300">
                        <strong className="text-emerald-300">
                          {c.routineWord}{" "}
                        </strong>
                        {m.protocol}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 border-t border-white/10 pt-3 text-xs italic text-slate-400">
                  {item.founderNote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THREE PROGRESSIVE STAGES + PSYCHOSOMATIC STRESS RELIEF */}
      <section className="mx-auto max-w-7xl space-y-16 px-4 py-16">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
            {c.stagesEyebrow}
          </span>
          <h2 className="mt-1 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {c.stagesHeading}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {c.threeStages.map((st) => (
              <div
                key={st.stage}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-emerald-600">
                    {st.stage}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    {st.incline} • {st.duration}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-black text-slate-950">
                  {st.name}
                </h3>
                <p className="text-xs font-semibold text-teal-700">
                  {st.subName}
                </p>
                <p className="mt-2 text-xs font-bold text-slate-900">
                  {c.goalWord} {st.goal}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-[#0B1F3A] to-indigo-950 p-6 text-white shadow-xl md:p-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-400/20 px-3.5 py-1 text-xs font-extrabold text-indigo-200">
              <Brain className="h-3.5 w-3.5" />
              <span>{c.psychoBadge}</span>
            </span>
            <h2 className="mt-3 font-display text-2xl font-black sm:text-3xl">
              {c.psychoHeading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {c.psychoIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {c.psychoItems.map((m) => (
              <div
                key={m.num}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
              >
                <span className="font-mono text-xs font-black text-emerald-400">
                  {c.mechanismWord} {m.num}
                </span>
                <h3 className="mt-2 font-display text-base font-extrabold text-white">
                  {m.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NATURAL WOOD SCIENCE */}
      <section
        id="wood-science"
        className="border-y border-slate-200 bg-amber-50/35 py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-extrabold text-amber-900">
              <Trees className="h-3.5 w-3.5" />
              <span>{c.woodBadge}</span>
            </span>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              {c.woodHeading}
            </h2>
            <p className="mt-3 text-base text-slate-600">{c.woodIntro}</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {c.woodSpecies.map((w, idx) => (
              <article
                key={w.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/9] w-full bg-slate-100">
                  <OptimizedImage
                    src={WOOD_IMAGES[idx]}
                    alt={w.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-slate-950/85 px-3 py-1 text-xs font-bold text-amber-300">
                    {w.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-black text-slate-950">
                    {w.name}
                  </h3>
                  <dl className="mt-4 grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-4 text-xs">
                    <div>
                      <dt className="text-slate-500">{c.woodLabels.elasticity}</dt>
                      <dd className="font-bold text-slate-950">{w.density}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">{c.woodLabels.capacity}</dt>
                      <dd className="font-bold text-slate-950">{w.maxLoad}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">{c.woodLabels.weight}</dt>
                      <dd className="font-bold text-slate-950">{w.weight}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">{c.woodLabels.tone}</dt>
                      <dd className="font-bold text-slate-950">{w.tone}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-xs leading-relaxed text-slate-700">
                    <strong className="text-slate-950">
                      {c.woodLabels.bestFor}{" "}
                    </strong>
                    {w.bestFor}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {w.notes}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OFFICIAL VIDEOS & PATENT SCAN LIGHTBOX */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-black tracking-tight text-slate-950">
            {c.videosHeading}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{c.videosSub}</p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <LiteYouTube
            videoId={SITE_CONFIG.videos.methodDemo.id}
            title={vids.methodDemoVideoTitle}
            thumbnail={SITE_CONFIG.videos.methodDemo.thumbnail}
          />
          <LiteYouTube
            videoId={SITE_CONFIG.videos.wallMounting.id}
            title={vids.wallMountingVideoTitle}
            thumbnail={SITE_CONFIG.videos.wallMounting.thumbnail}
          />
        </div>
      </section>

      <PatentsLightboxSection
        lang={lang}
        title={c.patentsTitle}
        subtitle={c.patentsSubtitle}
      />

      {/* 9. 3-COLUMN SAFETY SCREENING */}
      <section
        id="safety-screening"
        className="border-y border-slate-200 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-extrabold text-amber-900">
              <HeartPulse className="h-3.5 w-3.5" />
              <span>{c.safetyBadge}</span>
            </span>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              {c.safetyHeading}
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              {c.safetyIntroPrefix} {SITE_CONFIG.compliance.classification}.{" "}
              {c.safetyIntroSuffix}
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border-2 border-rose-200 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2.5 text-rose-700">
                <ShieldAlert className="h-6 w-6 shrink-0" />
                <h3 className="font-display text-lg font-black">{c.absTitle}</h3>
              </div>
              <p className="mt-2 text-xs text-slate-500">{c.absSub}</p>
              <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-700">
                {contra.absolute.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border-2 border-amber-200 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2.5 text-amber-700">
                <AlertTriangle className="h-6 w-6 shrink-0" />
                <h3 className="font-display text-lg font-black">{c.precTitle}</h3>
              </div>
              <p className="mt-2 text-xs text-slate-500">{c.precSub}</p>
              <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-700">
                {contra.precautions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border-2 border-emerald-200 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2.5 text-emerald-700">
                <ShieldCheck className="h-6 w-6 shrink-0" />
                <h3 className="font-display text-lg font-black">{c.rulesTitle}</h3>
              </div>
              <p className="mt-2 text-xs text-slate-500">{c.rulesSub}</p>
              <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-slate-700">
                {contra.safetyRules.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GLOBAL CENTERS & US HUB DIRECTORY */}
      <section id="directory" className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
            {c.dirEyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {c.dirHeading}
          </h2>
          <p className="mt-3 text-base text-slate-600">{c.dirIntro}</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {CENTERS.map((center) => (
            <article
              key={center.id}
              className={`overflow-hidden rounded-3xl border bg-white shadow-sm ${
                center.featured
                  ? "border-teal-500/50 ring-1 ring-teal-500/20"
                  : "border-slate-200"
              }`}
            >
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <OptimizedImage
                  src={center.image}
                  alt={center.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                {center.featured && (
                  <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-black text-slate-950 shadow">
                    {c.primaryHubBadge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                  {center.city} • {center.type}
                </span>
                <h3 className="mt-1 font-display text-xl font-black text-slate-950">
                  {center.name}
                </h3>
                <p className="mt-2.5 flex items-start gap-2 text-xs text-slate-600">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                  <span>{center.address}</span>
                </p>
                <p className="mt-1.5 flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                  <span>{center.hours}</span>
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-800">
                  {center.phones.map((ph) => (
                    <span key={ph} className="inline-flex items-center gap-1 font-bold">
                      <Phone className="h-3.5 w-3.5 text-emerald-600" />
                      {ph}
                    </span>
                  ))}
                  <span className="inline-flex items-center gap-1 text-slate-700">
                    <Mail className="h-3.5 w-3.5 text-teal-700" />
                    {center.email}
                  </span>
                </div>
                <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4 text-xs text-slate-700">
                  {center.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* 11. DIRECT CONSULTATION & AUTHENTIC US ORDER CALLOUT */}
        <div className="mt-12 grid items-center gap-8 rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-br from-slate-50 to-emerald-50/40 p-6 shadow-md md:p-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-900">
              {c.consultBadge}
            </span>
            <h3 className="mt-3 font-display text-2xl font-black text-slate-950 sm:text-3xl">
              {c.consultHeading}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {c.consultBody}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={getLocalizedHref("/order/", lang)}
                className="inline-flex items-center gap-2 rounded-2xl bg-teal-700 px-6 py-3.5 text-sm font-black text-white shadow transition hover:bg-teal-800"
              >
                <span>{c.ctaOrder}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={getLocalizedHref("/calculator/", lang)}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
              >
                <span>{c.ctaCalc}</span>
              </Link>
              <Link
                href={getLocalizedHref("/portal/", lang)}
                className="inline-flex items-center gap-2 rounded-2xl border border-emerald-300 bg-emerald-50 px-5 py-3.5 text-sm font-bold text-emerald-900 transition hover:bg-emerald-100"
              >
                <span>{c.ctaPortal}</span>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs lg:col-span-5">
            <p className="font-display text-base font-black text-[#0B1F3A]">
              {c.hqHeading}
            </p>
            <div className="mt-4 space-y-3 text-xs leading-relaxed text-slate-700">
              <p>
                <strong className="text-slate-950">{c.usOpsLabel}</strong>
                <br />
                {SITE_CONFIG.address.full}
                <br />
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="font-bold text-teal-700 hover:underline"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>{" "}
                •{" "}
                <a
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="font-bold text-teal-700 hover:underline"
                >
                  {SITE_CONFIG.supportEmail}
                </a>
              </p>
              <p className="border-t border-slate-100 pt-3">
                <strong className="text-slate-950">{c.kyivFlagshipLabel}</strong>
                <br />
                {c.kyivAddress}
                <br />
                +380 (44) 270-70-11 • +380 (97) 270-77-11
              </p>
            </div>
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              {c.hqFooterBadge}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
