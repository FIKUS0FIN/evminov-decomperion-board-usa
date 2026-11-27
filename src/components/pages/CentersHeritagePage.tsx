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
import { SITE_CONFIG } from "@/lib/site-config";
import { getLocalizedHref } from "@/lib/url";
import { CENTERS, CONTRAINDICATIONS } from "@/data/heritage";
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

const FOUNDER_ROLES = [
  "Honored Coach of Ukraine in Academic Rowing",
  "Head Coach of the National Rowing Team",
  "First President of the Rowing Federation of Ukraine",
  "Founder & President of the Evminov Vertebral-Health Center (Est. 1996)",
];

const SEVEN_MILESTONES = [
  {
    year: "1970–1988",
    badge: "Elite Sports Leadership",
    title: "Olympic & World Championship Coaching",
    desc: "Graduated from the Kyiv State Institute of Physical Culture & Sports (1970), trained Master of Sports athletes, and led Ukraine's academic rowing team internationally.",
  },
  {
    year: "1989",
    badge: "The Turning Point",
    title: "Severe Lumbar Trauma & Refusing Passive Surrender",
    desc: "After decades of elite athletic coaching, Vyacheslav Evminov suffered severe lumbar disc trauma. Determined to restore mobility conservatively, he applied biomechanics from first principles.",
  },
  {
    year: "1990–1995",
    badge: "Biomechanical Breakthrough",
    title: "Resonant Pine Prototype & Full Athletic Recovery",
    desc: "Designed the multi-layer flexing Carpathian pine deck and adjustable carriage. Pairing low-angle fractional traction (12°–20°) with gentle micro-movements restored his active walking and coaching life.",
  },
  {
    year: "1996",
    badge: "Center Founding",
    title: "Opening of Flagship Kyiv Center (9 Kostolna Street)",
    desc: "Opened the historic flagship Evminov Vertebral-Health Center steps from Maidan Nezalezhnosti in central Kyiv, training certified method instructors.",
  },
  {
    year: "1999–2005",
    badge: "Global IP & Recognition",
    title: "US, European, WIPO Patents & Ukraine MOH 711/2002",
    desc: "Awarded US Patent 6,869,387 B2, European Patent EP 1 038 512 B1, WIPO PCT WO 1999/043288, Ukrainian Patents 27976/28849A, and historical Ukrainian Ministry of Health registration 711/2002.",
  },
  {
    year: "2006–2021",
    badge: "Three-Decade Methodology",
    title: "Regional Network & Multi-Generational Home Adoption",
    desc: "Expanded partner studios across Kyiv, Lviv, Odesa, Poland, and Europe while helping hundreds of thousands adopt daily 10-minute home spine hygiene.",
  },
  {
    year: "2022–Present",
    badge: "Service & US Expansion",
    title: "'Spine of the Defender' & Glendale, CA North American Hub",
    desc: "Launched dedicated unloading protocols for defenders, tactical personnel, and veterans alongside direct 50-state US fulfillment from Glendale, California.",
  },
];

const HOME_HOSPITAL_PILLARS = [
  {
    tag: "Daily Consistency",
    metric: "10–15 Min Micro-Sessions",
    title: "Gentle Daily Rhythmic Unloading",
    desc: "Adult intervertebral discs rely on gentle cyclical movement and fluid exchange rather than direct blood vessels. Short daily 10-minute sessions deliver far better consistency than sporadic clinic visits.",
    icon: Clock,
  },
  {
    tag: "Zero Friction Access",
    metric: "Immediate AM / PM Care",
    title: "Zero Commute or Waiting-Room Strain",
    desc: "Long drives and traffic jams often aggravate a stiff lower back right after a clinic appointment. At home, your board is ready immediately upon waking or right before sleep.",
    icon: Home,
  },
  {
    tag: "Household Ergonomics",
    metric: "5-Sec Shift (Ages 4–85+)",
    title: "Multi-Generational Family Station",
    desc: "The gliding alloy carriage adjusts in 5 seconds for school-age youth posture, desk professionals, heavy lifters, and active seniors on one 2.4\" wall-folding board.",
    icon: Users,
  },
  {
    tag: "Financial Freedom",
    metric: "Pays Back in ~4–6 Visits",
    title: "Decades of Value From One Board",
    desc: "With typical US massage, chiropractic, or PT co-pays averaging $75–$150 per visit ($3,500+/year), a one-time $450 Evminov board with a 10-year frame warranty saves thousands.",
    icon: ShieldCheck,
  },
];

const DEFENDER_CHALLENGES = [
  {
    title: "Tactical Armor & Heavy Ruck Axial Compression",
    desc: "Extended patrols and training under 33–55 lbs of ballistic plate carriers and 70–100 lbs of combat rucksacks create relentless axial loading on lumbar discs across service members, SWAT teams, and first responders.",
  },
  {
    title: "Shockwaves, Breaching & Armored Vehicle Jarring",
    desc: "Rough vehicle transit, parachute landings, and high-impact operational vibrations jar spinal facet joints and lock deep paraspinal stabilizing muscles in persistent defensive tightness.",
  },
  {
    title: "Long-Term Mobility & Veteran Quality of Life",
    desc: "Service-connected back stiffness is one of the most common long-term challenges facing veterans and tactical personnel. Daily gentle unloaded conditioning helps sustain mobility without extreme inversion.",
  },
];

const DEFENDER_STEPS = [
  {
    step: "01",
    title: "Calm Fractional Unloading (8°–18° Incline)",
    desc: "Lie supine on the flexing Carpathian pine deck so gentle gravity relieves the axial compression accumulated under heavy vests, duty belts, and rucksacks.",
  },
  {
    step: "02",
    title: "Deep Paraspinal Corset Conditioning",
    desc: "Perform slow, controlled low-amplitude micro-movements under unloading to awaken deep multifidus and core stabilizers that traditional crunches miss.",
  },
  {
    step: "03",
    title: "Load-Bearing Posture & Recovery Habit",
    desc: "Pair 10–15 minutes of evening unloading with ergonomic hip-hinge habits to support sustained resilience throughout active duty and civilian veteran life.",
  },
];

const AUDIENCE_USE_CASES = [
  {
    id: "athletes",
    tag: "Athletes & Heavy Lifters",
    badge: "Rated Up to 330 lbs (Wide)",
    title: "Powerlifters, CrossFitters, Runners & Rotational Athletes",
    lead: "Restore post-workout lumbar comfort and calm paraspinal guarding without grip fatigue.",
    mechanisms: [
      {
        profile: "Powerlifters, Olympic Lifters & CrossFitters",
        challenge:
          "Heavy deadlifts, squats, and overhead work compress lumbar segments and leave erectors tight for 48–72 hours.",
        protocol:
          "Supine inclined traction at 20°–32° lets erectors fully relax while unloading the spine for 12–15 minutes.",
      },
      {
        profile: "Distance Runners, Golfers & Combat Athletes",
        challenge:
          "Repetitive heel strikes, asymmetric swing torque, and grappling neck loads drive hip-flexor tightness and cervical tension.",
        protocol:
          "Symmetrical inclined unloading plus the included padded Glisson Loop at 8°–12° resets alignment safely.",
      },
    ],
    founderNote:
      "Vyacheslav Evminov was an Honored Rowing Coach who built the first flexing pine board from athletic biomechanics.",
  },
  {
    id: "desk-workers",
    tag: "Desk & Standing Workers",
    badge: "10-Min Evening Reset",
    title: "Remote Tech Professionals, Nurses & Standing Shifts",
    lead: "Counteract 8–12 hours of static seated overload or concrete-floor standing in 10 calm minutes.",
    mechanisms: [
      {
        profile: "Seated Compression & Tech-Neck (C5–C7)",
        challenge:
          "Sitting hunched over dual monitors places ~40% more pressure on lumbar discs than standing while pulling the head forward.",
        protocol:
          "10 minutes at 12°–16° opens tight chest fascia, releases shortened hip flexors, and eases cervical tension with the Glisson Loop.",
      },
      {
        profile: "12-Hour Concrete Floors (Nurses, Educators, Retail)",
        challenge:
          "Continuous vertical gravity leaves lower lumbar joints compressed and legs fatigued by the end of a shift.",
        protocol:
          "Zero-axial-load supine lying with gentle ankle flexes calms lower-back tightness without hanging upside down.",
      },
    ],
    founderNote:
      "Folds flat to 2.4 inches behind a home-office door — or pairs with the No-Drill Stand for rental apartments.",
  },
  {
    id: "tactical-military",
    tag: "Military, Veterans & First Responders",
    badge: "Defender Program",
    title: "Tactical Operators, Police, Firefighters & Veterans",
    lead: "Gentle daily spinal decompression designed to unload heavy duty belts, body armor, and ruck strain.",
    mechanisms: [
      {
        profile: "Plate Carrier, Duty Belt & Ruck Axial Load",
        challenge:
          "Carrying 33–100 lbs of tactical gear compresses lower-back structures day after day.",
        protocol:
          "10–15 minutes on the inclined flexing pine beam calmly unloads compressed vertebrae and relaxes tight back muscles.",
      },
      {
        profile: "High-Stress Guarding & Mobility Maintenance",
        challenge:
          "Long vehicle patrols and high-adrenaline shifts lock paraspinal muscles in protective stiffness.",
        protocol:
          "Low-amplitude gliding movements paired with slow diaphragmatic breathing restore relaxed range of motion.",
      },
    ],
    founderNote:
      "The Kyiv Evminov Center has dedicated specialized spine recovery programs to defenders and veterans since 2022.",
  },
  {
    id: "lumbar-family",
    tag: "Lumbar Comfort & Multi-Generational Family",
    badge: "Ages 4 to 85+ Supported",
    title: "L4–S1 Comfort, Youth Backpack Posture & Active Seniors",
    lead: "One adaptable pine station serving lower-back comfort, growing teens, and active longevity.",
    mechanisms: [
      {
        profile: "L4–L5 / L5–S1 Discomfort & Active Seniors",
        challenge:
          "Stiff mornings and lower-back tightness make aggressive 90° inversion tables uncomfortable or unsafe.",
        protocol:
          "Ultra-gentle 8°–15° angles keep the head upright with zero cranial blood rush and full pine deck support.",
      },
      {
        profile: "School-Age Youth & Teen Posture (Ages 4–15)",
        challenge:
          "Heavy backpacks and tablet screens accelerate rounded shoulders and postural asymmetry.",
        protocol:
          "Supervised 6°–12° 'Lying-Down Dancing' to upbeat music builds lifelong posture symmetry in 6 minutes a day.",
      },
    ],
    founderNote:
      "Spreading a $450 board across a family of 3 over 20 years equals ~$7.50 per person per year.",
  },
];

const THREE_STAGES = [
  {
    stage: "01",
    name: "Restorative & Unloading Phase",
    ukrName: "Релаксаційно-відновлювальний етап",
    incline: "8°–15° Low Angle",
    duration: "Weeks 1–3",
    goal: "Calm tight paraspinal muscles & establish gentle axial space",
    desc: "Start with relaxed fractional unloading and slow breathing on flexing Carpathian pine. Avoid jerky movements or straining while your spine adapts smoothly.",
  },
  {
    stage: "02",
    name: "Stabilizer & Deep Corset Phase",
    ukrName: "Зміцнювальний етап",
    incline: "15°–25° Moderate Angle",
    duration: "Weeks 4–10",
    goal: "Awaken deep lumbar & core stabilizers (Multifidus & Rotatores)",
    desc: "Introduce controlled, low-amplitude movements under gentle traction — training the deep stabilizing muscles that ordinary floor workouts rarely isolate safely.",
  },
  {
    stage: "03",
    name: "Preventative Maintenance Phase",
    ukrName: "Підтримуючий етап",
    incline: "15°–35° Custom Angle",
    duration: "Ongoing Daily Habit",
    goal: "Sustain posture resilience & lifelong mobility",
    desc: "A quick 5–10 minute routine 3–5× per week offsets daily sitting, commuting, and gym loads so your back stays supple and energized year-round.",
  },
];

const PSYCHOSOMATIC_MECHANISMS = [
  {
    num: "01",
    title: "Autonomic Nervous System Calm",
    desc: "Chronic upper- and lower-back tension keeps the nervous system locked in subtle fight-or-flight vigilance. Gentle supine unloading eases muscular guarding and invites parasympathetic rest.",
  },
  {
    num: "02",
    title: "Breaking the Tension-Stiffness Cycle",
    desc: "Mental stress unconsciously tightens small paraspinal rotatores and shoulder elevators. Slow inclined elongation releases stiff fibers gently without triggering protective stretch reflexes.",
  },
  {
    num: "03",
    title: "Diaphragmatic Breathing & Restorative Sleep",
    desc: "Opening a hunched thoracic ribcage restores deep, unhurried diaphragmatic breathing — making a 10-minute evening session an ideal wind-down ritual before bed.",
  },
];

const WOOD_SPECIES = [
  {
    name: "Resonant Carpathian Pine (Сосна)",
    badge: "Flagship Firm Flex • Up to 330 lbs",
    density: "Firm Anatomical Elasticity",
    maxLoad: "210–220 lbs (Standard/Fold) • 330 lbs (Wide)",
    weight: "23–25 lbs (30 lbs Wide)",
    tone: "Golden Honey Natural or Dark Walnut Stain",
    bestFor:
      "Everyday households, strength athletes, tall users (up to 6'9\"), and users wanting crisp, firm structural support.",
    notes:
      "Harvested from slow-growth Carpathian timber with tight annual rings and laminated in multi-layer construction for lasting spring resilience.",
    image: "/images/craftsmanship/workshop-wood-selection.jpg",
    imageAlt: "Hand-selecting resonant Carpathian pine beams in Evminov workshop",
  },
  {
    name: "Select Ukrainian Alder (Вільха)",
    badge: "~15% Lighter Edition • Silky Grain",
    density: "Enhanced Gentle Spring Deflection",
    maxLoad: "Up to 220 lbs & 6'4\"",
    weight: "19–21 lbs (~3–4 lbs lighter than pine)",
    tone: "Warm Amber / Royal Cognac Finish",
    bestFor:
      "Users under 220 lbs, seniors, delicate cervical/thoracic routines, frequent angle adjustments, and refined home interiors.",
    notes:
      "Fine uniform wood grain delivers slightly softer spring compliance and noticeably lighter everyday handling when folding against the wall.",
    image: "/images/products/board-studio-woodgrain.jpg",
    imageAlt: "Warm amber select Ukrainian alder woodgrain detail on Evminov board",
  },
];

export function CentersHeritagePage({ lang }: { lang: Locale }) {
  const hero = HERO_COPY[lang];

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

            {/* Quick Section Jump Navigation */}
            <nav
              aria-label="Heritage page sections"
              className="mt-7 flex flex-wrap gap-2"
            >
              {[
                { href: "#founder-story", label: "Founder Story (1996)" },
                { href: "#home-hospital", label: "Home Hospital" },
                { href: "#defender-program", label: "Defender & Veterans" },
                { href: "#audience-protocols", label: "Audience Protocols" },
                { href: "#wood-science", label: "Pine vs. Alder" },
                { href: "#patents", label: "Patents Archive" },
                { href: "#safety-screening", label: "Safety & Contraindications" },
                { href: "#directory", label: "Global Centers" },
              ].map((link) => (
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

          {/* 4 Heritage KPI Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { val: "1996", label: "Kyiv Flagship Founded", sub: "30 years continuous heritage" },
              { val: "6 Grants", label: "US, EU, WIPO & UA Patents", sub: "US 6,869,387 • EP 1 038 512" },
              { val: "40+ Nations", label: "Worldwide Home Adoption", sub: "US, Canada, EU & Ukraine" },
              { val: "Glendale, CA", label: "North American Hub", sub: "1–4 day 50-state UPS/FedEx" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur"
              >
                <p className="font-display text-2xl font-black text-emerald-400">
                  {stat.val}
                </p>
                <p className="mt-0.5 text-sm font-extrabold text-white">{stat.label}</p>
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
            Born From Personal Recovery • Vyacheslav Evminov (b. 1940)
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            From Severe Spinal Trauma to Walking Again: The Vyacheslav Evminov Story
          </h2>
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-12">
          {/* Visual Column: Founder Portrait + Disc Biomechanics Visual */}
          <div className="space-y-4 lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-md">
              <OptimizedImage
                src="/images/authentic/vyacheslav-evminov-founder.jpg"
                alt="Vyacheslav Evminov, Honored Rowing Coach and inventor of the patented Evminov Spine Board"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-slate-950/85 p-3 text-white backdrop-blur">
                <p className="text-sm font-extrabold">Vyacheslav Volodymyrovych Evminov</p>
                <p className="text-xs text-emerald-300">
                  Inventor of the Evminov Method • Honored Coach in Academic Rowing
                </p>
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-sm">
              <OptimizedImage
                src="/images/authentic/evminov-disc-injury-mri.jpg"
                alt="Lumbar spinal disc biomechanics reference illustrating gentle unloaded vertebral spacing"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-bold text-sky-300">
                Biomechanical Insight: Unloaded Osmotic Fluid Exchange
              </span>
            </div>
          </div>

          {/* Story & Credentials Column */}
          <div className="space-y-5 lg:col-span-7">
            <blockquote className="rounded-3xl border-l-4 border-emerald-600 bg-emerald-50/70 p-6 text-base italic leading-relaxed text-slate-900">
              <Quote className="mb-2 h-5 w-5 text-emerald-700" />
              &ldquo;Spinal health is not achieved through passive hanging or violent cracking. It requires gentle traction to create space, followed by mindful micro-movements to nourish and stabilize the spine.&rdquo;
            </blockquote>

            <div className="space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                In the late 1980s, after decades coaching elite academic rowing athletes in Ukraine, Vyacheslav Evminov suffered severe lumbar disc trauma that left him struggling to walk. Unwilling to accept passive immobility or aggressive invasive fusion without exploring conservative biomechanics first, he turned to physics and sports kinesiology.
              </p>
              <p>
                Recognizing that adult intervertebral discs lack direct blood vessels and depend on gentle alternating unloading and movement to stay nourished, he engineered the first multi-layer flexing Carpathian pine plank with a gliding height carriage. Practicing calm, low-amplitude movements at 12°–20° restored his mobility — and sparked the opening of the flagship Kyiv Center in 1996.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Leadership &amp; Sports Credentials
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-xs font-semibold text-slate-800">
                {FOUNDER_ROLES.map((role) => (
                  <li key={role} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 7-Milestone Heritage Timeline */}
        <div className="mt-14">
          <h3 className="font-display text-2xl font-black text-slate-950">
            Four Decades of Spine Biomechanics &amp; Craftsmanship (1970–2026)
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {SEVEN_MILESTONES.map((m) => (
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
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE "HOME HOSPITAL" CONCEPT («ДОМАШНІЙ ГОСПІТАЛЬ») */}
      <section
        id="home-hospital"
        className="border-y border-slate-200 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-extrabold text-teal-900">
              <Home className="h-3.5 w-3.5" />
              <span>Home Wellness Innovation • Домашній Госпіталь</span>
            </span>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              The &ldquo;Home Hospital&rdquo; Model: Studio-Grade Spine Care at Home
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Developed by Vyacheslav Evminov to eliminate commute friction, weather barriers, and endless recurring clinic expenses. During harsh winters and wartime power outages in Kyiv, the Home Hospital concept allowed tens of thousands of families to maintain daily 10-minute spine care safely in their own residences.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_HOSPITAL_PILLARS.map((p) => {
              const Icon = p.icon;
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

          {/* Real Kyiv Flagship Studio Photos */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                src: "/images/centers/kyiv-center-room.png",
                alt: "Evminov Spine Center training hall in Kyiv Ukraine with Carpathian pine boards",
                caption: "Kyiv Flagship Hall — 9 Kostolna St (Est. 1996)",
              },
              {
                src: "/images/centers/kyiv-center-instructor.png",
                alt: "Evminov certified method specialist demonstrating incline board calibration",
                caption: "Personalized Incline Angle Calibration",
              },
              {
                src: "/images/centers/kyiv-center-session.png",
                alt: "Guided spinal decompression session on inclined pine board in Kyiv center",
                caption: "Calm Low-Amplitude Guided Movement",
              },
            ].map((img) => (
              <figure
                key={img.src}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs"
              >
                <div className="relative aspect-[16/10] w-full">
                  <OptimizedImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-2.5 text-xs font-bold text-slate-700">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPINE OF THE DEFENDER PROGRAM («ЗНІМАЄМО БРОНЮ З ХРЕБТА») */}
      <section
        id="defender-program"
        className="bg-gradient-to-br from-[#0B1628] via-slate-950 to-[#0C2A2A] py-16 text-white"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/15 px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-300">
              <Shield className="h-3.5 w-3.5" />
              <span>Spine of the Defender • «Знімаємо броню з хребта»</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight md:text-4xl">
              Specialized Spine Unloading for Military Personnel, Veterans &amp; First Responders
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Purpose-built gentle inclined decompression to offset the relentless physical toll of 33–55 lb ballistic plate carriers, 70–100 lb combat rucksacks, duty belts, and armored vehicle jarring — supporting defenders, US veterans, police, and firefighters.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Challenges */}
            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                Operational Spinal Load Challenges
              </p>
              {DEFENDER_CHALLENGES.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <h3 className="font-display text-base font-extrabold text-white">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* 3-Step Protocol */}
            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                3-Stage Defender Unloading Routine (10–15 Min / Day)
              </p>
              {DEFENDER_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl border border-emerald-400/25 border-l-4 border-l-emerald-400 bg-emerald-500/[0.07] p-5"
                >
                  <span className="font-mono text-xs font-black text-emerald-300">
                    STAGE {s.step}
                  </span>
                  <h3 className="mt-1 font-display text-base font-extrabold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-200">{s.desc}</p>
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
              <span>Tailored Biomechanical Applications</span>
            </span>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight md:text-4xl">
              How Different Profiles Use the Evminov Method
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {AUDIENCE_USE_CASES.map((item) => (
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
                        <strong className="text-rose-300">Challenge: </strong>
                        {m.challenge}
                      </p>
                      <p className="mt-1 text-slate-300">
                        <strong className="text-emerald-300">Evminov Routine: </strong>
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
      <section className="mx-auto max-w-7xl px-4 py-16 space-y-16">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
            Progressive Spine Conditioning
          </span>
          <h2 className="mt-1 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            The Three Progressive Stages of the Evminov Method
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {THREE_STAGES.map((st) => (
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
                <p className="text-xs font-semibold text-teal-700">{st.ukrName}</p>
                <p className="mt-2 text-xs font-bold text-slate-900">Goal: {st.goal}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Psychosomatic Stress & Nervous System Calm */}
        <div className="rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-[#0B1F3A] to-indigo-950 p-6 text-white shadow-xl md:p-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-400/20 px-3.5 py-1 text-xs font-extrabold text-indigo-200">
              <Brain className="h-3.5 w-3.5" />
              <span>Autonomic Calm • Психосоматика і Стрес</span>
            </span>
            <h2 className="mt-3 font-display text-2xl font-black sm:text-3xl">
              Decompressing the Spine to Release Chronic Stress &amp; Muscular Guarding
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Physical back tension and mental overload reinforce each other in a daily loop. Ten quiet minutes of gentle unloading and deep diaphragmatic breathing helps shift the body out of stress-driven guarding into calm recovery.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {PSYCHOSOMATIC_MECHANISMS.map((m) => (
              <div
                key={m.num}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
              >
                <span className="font-mono text-xs font-black text-emerald-400">
                  MECHANISM {m.num}
                </span>
                <h3 className="mt-2 font-display text-base font-extrabold text-white">
                  {m.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NATURAL WOOD SCIENCE: CARPATHIAN PINE VS. UKRAINIAN ALDER */}
      <section
        id="wood-science"
        className="border-y border-slate-200 bg-amber-50/35 py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-extrabold text-amber-900">
              <Trees className="h-3.5 w-3.5" />
              <span>Natural Wood Science • Матеріалознавство</span>
            </span>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Carpathian Resonant Pine (Сосна) vs. Select Ukrainian Alder (Вільха)
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Why authentic Evminov boards are crafted from multi-layer resonant European timber instead of rigid steel or cold plastic.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {WOOD_SPECIES.map((w) => (
              <article
                key={w.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/9] w-full bg-slate-100">
                  <OptimizedImage
                    src={w.image}
                    alt={w.imageAlt}
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
                      <dt className="text-slate-500">Elasticity Profile</dt>
                      <dd className="font-bold text-slate-950">{w.density}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Rated Capacity</dt>
                      <dd className="font-bold text-slate-950">{w.maxLoad}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Board Weight</dt>
                      <dd className="font-bold text-slate-950">{w.weight}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Finish Tone</dt>
                      <dd className="font-bold text-slate-950">{w.tone}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-xs leading-relaxed text-slate-700">
                    <strong className="text-slate-950">Best For: </strong>
                    {w.bestFor}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{w.notes}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OFFICIAL VIDEOS & INTERACTIVE PATENT SCAN LIGHTBOX */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-black tracking-tight text-slate-950">
            Official Evminov Method &amp; 16-Inch US Stud Setup Demonstrations
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Watch the original inclined traction technique and North American wall installation walkthrough.
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <LiteYouTube
            videoId={SITE_CONFIG.videos.methodDemo.id}
            title={SITE_CONFIG.videos.methodDemo.title}
            thumbnail={SITE_CONFIG.videos.methodDemo.thumbnail}
          />
          <LiteYouTube
            videoId={SITE_CONFIG.videos.wallMounting.id}
            title={SITE_CONFIG.videos.wallMounting.title}
            thumbnail={SITE_CONFIG.videos.wallMounting.thumbnail}
          />
        </div>
      </section>

      <PatentsLightboxSection
        lang={lang}
        title="Official Patent Grants & Historical Registry Archive"
        subtitle="Click any original patent certificate below to inspect full resolution scans or open public records at USPTO, EPO, and WIPO."
      />

      {/* 9. 3-COLUMN SAFETY SCREENING & CONTRAINDICATIONS */}
      <section
        id="safety-screening"
        className="border-y border-slate-200 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-extrabold text-amber-900">
              <HeartPulse className="h-3.5 w-3.5" />
              <span>Safety Screening • Протипоказання</span>
            </span>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Contraindications &amp; Essential Biomechanical Safety Rules
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Evminov boards are classified in the US as {SITE_CONFIG.compliance.classification}. Review these safety guidelines carefully and consult a licensed physician if you have serious spinal pathology.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Red: Absolute Contraindications */}
            <div className="rounded-3xl border-2 border-rose-200 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2.5 text-rose-700">
                <ShieldAlert className="h-6 w-6 shrink-0" />
                <h3 className="font-display text-lg font-black">
                  Absolute Contraindications
                </h3>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Do not perform inclined traction during any of the following conditions:
              </p>
              <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-700">
                {CONTRAINDICATIONS.absolute.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amber: Temporary Precautions */}
            <div className="rounded-3xl border-2 border-amber-200 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2.5 text-amber-700">
                <AlertTriangle className="h-6 w-6 shrink-0" />
                <h3 className="font-display text-lg font-black">
                  Physician Clearance Needed
                </h3>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Require stabilization or individualized physician clearance before starting:
              </p>
              <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-700">
                {CONTRAINDICATIONS.precautions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emerald: Essential Safety Rules */}
            <div className="rounded-3xl border-2 border-emerald-200 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2.5 text-emerald-700">
                <ShieldCheck className="h-6 w-6 shrink-0" />
                <h3 className="font-display text-lg font-black">
                  Essential Daily Safety Rules
                </h3>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Follow these simple mechanical and recovery habits during every session:
              </p>
              <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-slate-700">
                {CONTRAINDICATIONS.safetyRules.map((item) => (
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
            Global Network &amp; US Hub
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            Official Evminov Centers &amp; Distribution Hubs
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Visit the historic flagship studio in Kyiv, connect with regional Ukrainian &amp; European partner centers, or order directly with insured fulfillment from our Glendale, California operations hub.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {CENTERS.map((center) => (
            <article
              key={center.id}
              className={`overflow-hidden rounded-3xl border bg-white shadow-sm ${
                center.featured ? "border-teal-500/50 ring-1 ring-teal-500/20" : "border-slate-200"
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
                    Primary Hub
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
              At-Home Evminov System • Direct US &amp; Global Support
            </span>
            <h3 className="mt-3 font-display text-2xl font-black text-slate-950 sm:text-3xl">
              Can&apos;t Visit Kyiv in Person? Bring Authentic Evminov Craftsmanship Home
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Every Evminov board shipped to the US, Canada, and Europe is crafted from genuine Carpathian pine or select Ukrainian alder under Vyacheslav Evminov&apos;s international patents — complete with free Glisson Loop, 16&quot; US stud mounting kit, 30-day Patient Portal workspace, 60-day trial, and 10-year structural frame warranty.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={getLocalizedHref("/order/", lang)}
                className="inline-flex items-center gap-2 rounded-2xl bg-teal-700 px-6 py-3.5 text-sm font-black text-white shadow transition hover:bg-teal-800"
              >
                <span>Order Authentic Board (From $450)</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={getLocalizedHref("/calculator/", lang)}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
              >
                <span>Calculate My Incline Angle</span>
              </Link>
              <Link
                href={getLocalizedHref("/portal/", lang)}
                className="inline-flex items-center gap-2 rounded-2xl border border-emerald-300 bg-emerald-50 px-5 py-3.5 text-sm font-bold text-emerald-900 transition hover:bg-emerald-100"
              >
                <span>Preview Patient Portal</span>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs lg:col-span-5">
            <p className="font-display text-base font-black text-[#0B1F3A]">
              Official Headquarters &amp; US Hub Contact
            </p>
            <div className="mt-4 space-y-3 text-xs leading-relaxed text-slate-700">
              <p>
                <strong className="text-slate-950">US Operations &amp; Dispatch:</strong>
                <br />
                {SITE_CONFIG.address.full}
                <br />
                <a href={SITE_CONFIG.phoneHref} className="font-bold text-teal-700 hover:underline">
                  {SITE_CONFIG.phoneDisplay}
                </a>{" "}
                •{" "}
                <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="font-bold text-teal-700 hover:underline">
                  {SITE_CONFIG.supportEmail}
                </a>
              </p>
              <p className="border-t border-slate-100 pt-3">
                <strong className="text-slate-950">Kyiv Historic Flagship (Est. 1996):</strong>
                <br />
                9 Kostolna St, Kyiv 01001, Ukraine
                <br />
                +380 (44) 270-70-11 • +380 (97) 270-77-11
              </p>
            </div>
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              Original Patented Design • 10-Year Frame Warranty
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
