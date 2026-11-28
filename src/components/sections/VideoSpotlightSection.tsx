import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { SITE_CONFIG } from "@/lib/site-config";
import { LiteYouTube } from "@/components/ui/LiteYouTube";

interface VideoChapter {
  time: string;
  label: string;
  detail: string;
}

interface VideoSpotlightCopy {
  eyebrow: string;
  heading: string;
  headingHighlight: string;
  subtitle: string;
  channelCta: string;
  video1Badge: string;
  video1Title: string;
  video1Subtitle: string;
  video2Badge: string;
  video2Title: string;
  video2Subtitle: string;
  chaptersHeading: string;
  chapters: [VideoChapter, VideoChapter, VideoChapter];
  cardTitle: string;
  cardPoints: [string, string, string];
  ctaConfigure: string;
  ctaWhatsApp: string;
}

const VIDEO_SPOTLIGHT_COPY: Record<Locale, VideoSpotlightCopy> = {
  en: {
    eyebrow: "Official Video Demonstrations • @evminoviusa",
    heading: "See the Evminov Board in Action",
    headingHighlight: "in 4 Minutes",
    subtitle:
      "Watch real head-up spinal decompression, micro-amplitude exercises, and home wall/stand setup directly from our official YouTube channel. Videos load on click for instant speed.",
    channelCta: "YouTube @evminoviusa",
    video1Badge: "01 • Official Method Demo",
    video1Title: "Evminov Method: Real Decompression & Exercise Demo",
    video1Subtitle:
      "Head-up gentle unloading, lumbar & thoracic movements, and Glisson neck loop.",
    video2Badge: "02 • Home Setup & Mounting",
    video2Title: "Home Mounting, Studs & Folding Setup Guide",
    video2Subtitle:
      "16\" wall studs, door/stand options, and space-saving vertical storage.",
    chaptersHeading: "What You'll See in the Official Demo",
    chapters: [
      {
        time: "0:00",
        label: "Gentle Head-Up Unloading",
        detail: "Controlled 8°–20° incline with zero upside-down blood rush.",
      },
      {
        time: "1:45",
        label: "Deep Stabilizer Movements",
        detail: "Low-amplitude micro-exercises that hydrate compressed discs.",
      },
      {
        time: "3:10",
        label: "Glisson Loop & Easy Storage",
        detail: "Cervical traction attachment + compact home folding setup.",
      },
    ],
    cardTitle: "Ready to Pick Your Exact Board?",
    cardPoints: [
      "100% head-up & calm — safe for home use 15 min/day",
      "Compact 3-piece (230–245 cm) & 2-piece folding models",
      "1-Year Manufacturer Warranty • ~2-week courier delivery",
    ],
    ctaConfigure: "Compare Models & Prices",
    ctaWhatsApp: "Ask on WhatsApp",
  },
  es: {
    eyebrow: "Demostraciones Oficiales en Video • @evminoviusa",
    heading: "Vea la Tabla Evminov en Acción",
    headingHighlight: "en 4 Minutos",
    subtitle:
      "Observe la descompresión espinal con cabeza arriba, ejercicios de micro-amplitud e instalación en casa directamente desde nuestro canal oficial de YouTube.",
    channelCta: "YouTube @evminoviusa",
    video1Badge: "01 • Demostración Oficial",
    video1Title: "Método Evminov: Descompresión Real y Ejercicios",
    video1Subtitle:
      "Descarga suave cabeza arriba, movimientos lumbares y lazo cervical Glisson.",
    video2Badge: "02 • Instalación en Casa",
    video2Title: "Guía de Montaje en Pared (16\") y Soporte",
    video2Subtitle:
      "Montaje en vigas estándar, soporte portátil y plegado compacto.",
    chaptersHeading: "Lo Que Verá en la Demostración Oficial",
    chapters: [
      {
        time: "0:00",
        label: "Descarga Suave Cabeza Arriba",
        detail: "Inclinación controlada de 8°–20° sin colgar boca abajo.",
      },
      {
        time: "1:45",
        label: "Estabilizadores Profundos",
        detail: "Micro-ejercicios de baja amplitud para hidratar discos.",
      },
      {
        time: "3:10",
        label: "Lazo Glisson y Almacenaje",
        detail: "Tracción cervical + modelos plegables de 2 y 3 piezas.",
      },
    ],
    cardTitle: "¿Listo para Elegir Su Modelo?",
    cardPoints: [
      "100% cabeza arriba — seguro para uso diario de 15 min",
      "Modelos plegables de 3 piezas (230–245 cm) y 2 piezas",
      "Garantía de 1 Año • Envío internacional ~2 semanas",
    ],
    ctaConfigure: "Ver Modelos y Precios",
    ctaWhatsApp: "Consultar por WhatsApp",
  },
  fr: {
    eyebrow: "Démonstrations Vidéo Officielles • @evminoviusa",
    heading: "Découvrez la Planche Evminov en Action",
    headingHighlight: "en 4 Minutes",
    subtitle:
      "Regardez la décompression vertébrale tête en haut, les micro-exercices et l'installation à domicile directement depuis notre chaîne YouTube officielle.",
    channelCta: "YouTube @evminoviusa",
    video1Badge: "01 • Démo Officielle",
    video1Title: "Méthode Evminov : Décompression & Exercices Réels",
    video1Subtitle:
      "Décharge douce tête en haut, mouvements lombaires et sangle cervicale Glisson.",
    video2Badge: "02 • Installation & Montage",
    video2Title: "Guide de Fixation Murale (16\") et Support",
    video2Subtitle:
      "Montage mural, support autonome 4 pièces et rangement compact.",
    chaptersHeading: "Ce Que Vous Verrez dans la Démo",
    chapters: [
      {
        time: "0:00",
        label: "Décharge Douce Tête en Haut",
        detail: "Inclinaison contrôlée 8°–20° sans suspension inversée.",
      },
      {
        time: "1:45",
        label: "Stabilisateurs Profonds",
        detail: "Micro-mouvements doux pour hydrater les disques.",
      },
      {
        time: "3:10",
        label: "Sangle Glisson & Rangement",
        detail: "Traction cervicale + panneaux démontables 2 ou 3 pièces.",
      },
    ],
    cardTitle: "Prêt à Choisir Votre Modèle ?",
    cardPoints: [
      "100 % tête en haut — 15 min/jour en toute sécurité",
      "Modèles démontables 3 pièces (230–245 cm) et 2 pièces",
      "Garantie Fabricant 1 An • Livraison courrier ~2 semaines",
    ],
    ctaConfigure: "Comparer Modèles & Prix",
    ctaWhatsApp: "Écrire sur WhatsApp",
  },
  de: {
    eyebrow: "Offizielle Videodemonstrationen • @evminoviusa",
    heading: "Erleben Sie das Evminov-Brett in Aktion",
    headingHighlight: "in 4 Minuten",
    subtitle:
      "Sehen Sie echte Kopf-oben-Wirbelsäulendekompression, Mikro-Übungen und die Wand- oder Ständermontage direkt von unserem offiziellen YouTube-Kanal.",
    channelCta: "YouTube @evminoviusa",
    video1Badge: "01 • Offizielle Methoden-Demo",
    video1Title: "Evminov-Methode: Echte Dekompression & Übungen",
    video1Subtitle:
      "Sanfte Kopf-oben-Entlastung, Lendenübungen und Glisson-Nackenschlinge.",
    video2Badge: "02 • Montage & Aufbau",
    video2Title: "Wandmontage- & Aufbauanleitung für Zuhause",
    video2Subtitle:
      "Wandbefestigung, 4-teiliger Ständer und platzsparende Lagerung.",
    chaptersHeading: "Das sehen Sie im offiziellen Demo-Video",
    chapters: [
      {
        time: "0:00",
        label: "Sanfte Kopf-oben-Entlastung",
        detail: "Kontrollierte 8°–20° Neigung ganz ohne Überkopf-Hängen.",
      },
      {
        time: "1:45",
        label: "Tiefe Stabilisatoren",
        detail: "Kleine Mikrobewegungen zur gezielten Bandscheiben-Pflege.",
      },
      {
        time: "3:10",
        label: "Glisson-Schlinge & Klappdesign",
        detail: "HWS-Traktion + kompakte 2- und 3-teilige Modelle.",
      },
    ],
    cardTitle: "Bereit für Ihr passendes Modell?",
    cardPoints: [
      "100 % Kopf-oben — sicher für 15 Min. täglich zuhause",
      "Kompakte 3-teilige (230–245 cm) & 2-teilige Modelle",
      "1 Jahr Herstellergarantie • ~2 Wochen Kurierversand",
    ],
    ctaConfigure: "Modelle & Preise ansehen",
    ctaWhatsApp: "Per WhatsApp fragen",
  },
  uk: {
    eyebrow: "Офіційні відеодемонстрації • @evminoviusa",
    heading: "Подивіться Профілактор Євмінова в дії",
    headingHighlight: "за 4 хвилини",
    subtitle:
      "Реальна демонстрація м’якої декомпресії хребта головою вгору, вправ на дошці та монтажу вдома з нашого офіційного YouTube-каналу. Відео завантажується лише по кліку.",
    channelCta: "YouTube @evminoviusa",
    video1Badge: "01 • Офіційне демо методики",
    video1Title: "Методика Євмінова: реальна декомпресія та вправи",
    video1Subtitle:
      "Плавне витягування головою вгору, рухи для попереку та петля Гліссона.",
    video2Badge: "02 • Монтаж та встановлення",
    video2Title: "Гайд по кріпленню на стіну, стійку та складанню",
    video2Subtitle:
      "Кріплення на стіну, розбірна стійка-драбинка та компактне зберігання.",
    chaptersHeading: "Що ви побачите за 4 хвилини відео",
    chapters: [
      {
        time: "0:00",
        label: "М’яке витягування головою вгору",
        detail: "Контрольований кут 8°–20° — жодного зависання вниз головою.",
      },
      {
        time: "1:45",
        label: "Глибокі м’язи-стабілізатори",
        detail: "Малоамплітудні вправи для живлення міжхребцевих дисків.",
      },
      {
        time: "3:10",
        label: "Петля Гліссона та компактність",
        detail: "Розвантаження шиї + розбірні моделі на 2 та 3 секції.",
      },
    ],
    cardTitle: "Готові обрати вашу модель?",
    cardPoints: [
      "100% головою вгору — комфортні заняття по 15 хв/день вдома",
      "Розбірні панелі з 3 частин (230–245 см) та 2 частин («Зубна щітка»)",
      "Гарантія виробника 1 рік • Міжнародна доставка ~2 тижні",
    ],
    ctaConfigure: "Обрати модель і ціну",
    ctaWhatsApp: "Написати у WhatsApp",
  },
  ru: {
    eyebrow: "Официальные видеодемонстрации • @evminoviusa",
    heading: "Посмотрите Профилактор Евминова в действии",
    headingHighlight: "за 4 минуты",
    subtitle:
      "Реальная демонстрация мягкой декомпрессии позвоночника головой вверх, упражнений на доске и установки дома с нашего официального YouTube-канала. Видео загружается по клику.",
    channelCta: "YouTube @evminoviusa",
    video1Badge: "01 • Официальное демо методики",
    video1Title: "Методика Евминова: реальная декомпрессия и упражнения",
    video1Subtitle:
      "Плавное вытяжение головой вверх, упражнения для поясницы и петля Глиссона.",
    video2Badge: "02 • Монтаж и установка",
    video2Title: "Гайд по креплению на стену, стойку и сборке",
    video2Subtitle:
      "Крепление на стену, разборная стойка-лесенка и компактное хранение.",
    chaptersHeading: "Что вы увидите за 4 минуты видео",
    chapters: [
      {
        time: "0:00",
        label: "Мягкое вытяжение головой вверх",
        detail: "Контролируемый угол 8°–20° — без виса вниз головой.",
      },
      {
        time: "1:45",
        label: "Глубокие мышцы-стабилизаторы",
        detail: "Малоамплитудные упражнения для питания межпозвонковых дисков.",
      },
      {
        time: "3:10",
        label: "Петля Глиссона и компактность",
        detail: "Разгрузка шеи + разборные модели из 2 и 3 частей.",
      },
    ],
    cardTitle: "Готовы выбрать вашу модель?",
    cardPoints: [
      "100% головой вверх — комфортные занятия по 15 мин/день дома",
      "Разборные панели из 3 частей (230–245 см) и 2 частей («Зубная щётка»)",
      "Гарантия производителя 1 год • Международная доставка ~2 недели",
    ],
    ctaConfigure: "Выбрать модель и цену",
    ctaWhatsApp: "Написать в WhatsApp",
  },
};

export function VideoSpotlightSection({ lang }: { lang: Locale }) {
  const c = VIDEO_SPOTLIGHT_COPY[lang];

  return (
    <section
      id="videos"
      aria-labelledby="video-spotlight-heading"
      className="border-b border-slate-200 bg-gradient-to-b from-slate-100/80 via-white to-slate-50 py-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-800/80 bg-gradient-to-br from-[#0B1628] via-[#0F213B] to-[#0B323C] p-5 text-white shadow-[0_24px_64px_rgba(11,22,40,0.22)] sm:p-8 lg:p-10">
          {/* Ambient glow accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl"
          />

          {/* Section Header */}
          <div className="relative flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                <PlayCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{c.eyebrow}</span>
              </span>
              <h2
                id="video-spotlight-heading"
                className="mt-3 font-display text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                {c.heading}{" "}
                <span className="text-emerald-400">{c.headingHighlight}</span>
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
                {c.subtitle}
              </p>
            </div>

            <a
              href={SITE_CONFIG.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-extrabold text-white backdrop-blur transition hover:border-emerald-400/60 hover:bg-white/15 md:self-end"
            >
              <span>{c.channelCta}</span>
              <ExternalLink className="h-3.5 w-3.5 text-emerald-300" />
            </a>
          </div>

          {/* 12-Col Asymmetric Cinema Grid */}
          <div className="relative mt-7 grid gap-6 lg:grid-cols-12 lg:items-start">
            {/* Primary Featured Video + Timestamp Highlights */}
            <div className="space-y-4 lg:col-span-7">
              <LiteYouTube
                featured
                videoId={SITE_CONFIG.videos.methodDemo.id}
                title={c.video1Title}
                subtitle={c.video1Subtitle}
                thumbnail={SITE_CONFIG.videos.methodDemo.thumbnail}
                badge={c.video1Badge}
                durationLabel="4:15"
              />

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <p className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                  <span>{c.chaptersHeading}</span>
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {c.chapters.map((chapter) => (
                    <div
                      key={chapter.time}
                      className="rounded-xl border border-white/10 bg-slate-950/45 p-3"
                    >
                      <span className="inline-block rounded-md bg-emerald-500/20 px-2 py-0.5 font-mono text-[11px] font-extrabold text-emerald-300">
                        {chapter.time}
                      </span>
                      <p className="mt-1.5 font-display text-xs font-extrabold text-white">
                        {chapter.label}
                      </p>
                      <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
                        {chapter.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Secondary Setup Video + Direct Conversion Card */}
            <div className="flex flex-col gap-4 lg:col-span-5">
              <LiteYouTube
                videoId={SITE_CONFIG.videos.wallMounting.id}
                title={c.video2Title}
                subtitle={c.video2Subtitle}
                thumbnail={SITE_CONFIG.videos.wallMounting.thumbnail}
                badge={c.video2Badge}
                durationLabel="3:40"
              />

              <div className="flex flex-1 flex-col justify-between rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/15 via-slate-900/70 to-slate-950/90 p-5 backdrop-blur-sm">
                <div>
                  <h3 className="font-display text-base font-black text-white sm:text-lg">
                    {c.cardTitle}
                  </h3>
                  <ul className="mt-3 space-y-2 text-xs text-slate-200 sm:text-sm">
                    {c.cardPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  <a
                    href="#catalog"
                    className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-black text-slate-950 shadow-lg transition hover:bg-emerald-400 sm:text-sm"
                  >
                    <span>{c.ctaConfigure}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>
                  <a
                    href={SITE_CONFIG.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-4 py-2.5 text-xs font-extrabold text-white shadow-lg transition hover:bg-emerald-500 sm:text-sm"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    <span>{c.ctaWhatsApp}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
