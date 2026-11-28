"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { getProductPrice, PRODUCTS } from "@/data/products";
import { calculateHsaPrice, formatUSD } from "@/lib/physics";
import { getLocalizedHref } from "@/lib/url";
import { SITE_CONFIG } from "@/lib/site-config";
import { getAttributionSummary, sendGTMEvent } from "@/lib/gtm";

type QuizGoal = "lumbar" | "sciatica" | "neck" | "athlete" | "family";
type ComfortFlag = "sitting" | "extension" | "vascular" | "general";
type BodyProfile = "standard" | "wide";
type SpaceType = "stud" | "stand";

interface QuizCopy {
  badge: string;
  title: string;
  subtitle: string;
  q1Label: string;
  goals: Record<QuizGoal, { label: string; sub: string }>;
  q2Label: string;
  comforts: Record<ComfortFlag, string>;
  q3Label: string;
  bodies: Record<BodyProfile, string>;
  spaces: Record<SpaceType, string>;
  resultBadge: string;
  angleLabel: string;
  durationLabel: string;
  minUnit: string;
  boardLabel: string;
  standNote: string;
  hsaNote: string;
  ctaOrder: string;
  ctaGuide: string;
  ctaWa: string;
  emailHeading: string;
  emailPlaceholder: string;
  emailBtn: string;
  emailSending: string;
  emailDone: string;
  wellnessDisclaimer: string;
}

const QUIZ_COPY: Record<Locale, QuizCopy> = {
  en: {
    badge: "Interactive 60-Second Match",
    title: "Find Your Safe Inclined Angle & Best-Fit Evminov Board",
    subtitle:
      "Tap your main goal, comfort preference, and build below — get a personalized starting angle, board width, matched guide, and 1-click setup immediately.",
    q1Label: "1. What is your primary spine goal?",
    goals: {
      lumbar: { label: "L4–L5 / L5–S1 Lower Back", sub: "Disc pressure & sitting ache" },
      sciatica: { label: "Sciatica / Glute Tension", sub: "Leg tingling or piriformis" },
      neck: { label: "Neck, Tech-Neck & Hump", sub: "C5–C7 tension & shoulders" },
      athlete: { label: "Athlete / Heavy Lifting", sub: "Deadlifts, squats & running" },
      family: { label: "Youth & Family Posture", sub: "Ages 6+ daily alignment" },
    },
    q2Label: "2. Any special comfort or safety preference?",
    comforts: {
      sitting: "Stiffer after long sitting or mornings",
      extension: "Sensitive when arching back (Stenosis / Facet)",
      vascular: "High blood pressure, vertigo, or 55+ (Head-Up)",
      general: "General prevention & daily flexibility",
    },
    q3Label: "3. Body build & home mounting setup:",
    bodies: {
      standard: "Standard Build (≤ 220 lbs / 100 kg, ≤ 6'4\") → 26 cm",
      wide: "Heavy / Broad Build (> 220 lbs or > 6'4\") → Wide 30 cm",
    },
    spaces: {
      stud: "16\" Wall Stud / Solid Wall Mount",
      stand: "Apartment Renter (No-Drill Ladder Stand +$275)",
    },
    resultBadge: "Your Personalized Evminov Match",
    angleLabel: "Starting Angle",
    durationLabel: "Daily Session",
    minUnit: "min",
    boardLabel: "Best-Fit Board",
    standNote: "Includes 4-Piece Demountable Ladder Stand (zero wall holes)",
    hsaNote: "Est. ~30% HSA/FSA pre-tax net w/ LMN",
    ctaOrder: "Configure This Exact Setup",
    ctaGuide: "Read Matched Clinical Guide",
    ctaWa: "Confirm With Specialist on WhatsApp",
    emailHeading: "Send this custom 14-day plan + LMN template to my email:",
    emailPlaceholder: "Your email for custom plan + LMN kit",
    emailBtn: "Send Plan",
    emailSending: "Sending…",
    emailDone: "Sent! Check your inbox for your custom plan & LMN template.",
    wellnessDisclaimer:
      "Educational wellness tool (HTS 9506.91.0030) — not a medical diagnosis. Consult a physician for acute weakness or severe pain.",
  },
  es: {
    badge: "Selector Interactivo en 60 Segundos",
    title: "Encuentra Tu Ángulo Seguro y Tabla Evminov Ideal",
    subtitle:
      "Toca tu objetivo, preferencia de confort y complexión para ver al instante tu ángulo inicial, ancho recomendado y guía clínica.",
    q1Label: "1. ¿Cuál es tu objetivo principal de espalda?",
    goals: {
      lumbar: { label: "Zona Lumbar L4–L5 / L5–S1", sub: "Presión discal al sentarse" },
      sciatica: { label: "Ciática / Tensión Glútea", sub: "Pierna o síndrome piriforme" },
      neck: { label: "Cuello, Pantalla y Joroba", sub: "Tensión C5–C7 y hombros" },
      athlete: { label: "Atletas / Levantamiento", sub: "Peso muerto, sentadilla y carrera" },
      family: { label: "Postura Juvenil y Familiar", sub: "Higiene diaria desde 6 años" },
    },
    q2Label: "2. ¿Alguna preferencia de confort o seguridad?",
    comforts: {
      sitting: "Peor tras estar sentado o al despertar",
      extension: "Molestia al arquear atrás (Estenosis / Facetas)",
      vascular: "Presión alta, vértigo o 55+ (Siempre cabeza arriba)",
      general: "Prevención diaria y movilidad general",
    },
    q3Label: "3. Complexión física y tipo de instalación:",
    bodies: {
      standard: "Estándar (≤ 100 kg / 220 lbs, ≤ 193 cm) → 26 cm",
      wide: "Reforzada (> 100 kg o > 193 cm) → Ancha 30 cm",
    },
    spaces: {
      stud: "Montaje en Viga 16\" o Pared Sólida",
      stand: "Apartamento sin Perforar (Soporte-Escalera +$275)",
    },
    resultBadge: "Tu Configuración Personalizada Evminov",
    angleLabel: "Ángulo Inicial",
    durationLabel: "Sesión Diaria",
    minUnit: "min",
    boardLabel: "Tabla Recomendada",
    standNote: "Incluye Soporte-Escalera desmontable de 4 piezas (cero taladro)",
    hsaNote: "Neto est. ~30% ahorro HSA/FSA con carta LMN",
    ctaOrder: "Configurar Este Equipo Exacto",
    ctaGuide: "Leer Guía Clínica Recomendada",
    ctaWa: "Confirmar por WhatsApp",
    emailHeading: "Recibir este plan de 14 días + plantilla LMN en mi correo:",
    emailPlaceholder: "Tu email para el plan + kit LMN",
    emailBtn: "Enviar Plan",
    emailSending: "Enviando…",
    emailDone: "¡Enviado! Revisa tu correo para ver tu plan y plantilla LMN.",
    wellnessDisclaimer:
      "Herramienta educativa de bienestar (HTS 9506.91.0030) — no sustituye valoración médica profesional.",
  },
  fr: {
    badge: "Sélecteur Interactif 60 Secondes",
    title: "Trouvez Votre Angle Doux et Planche Evminov Idéale",
    subtitle:
      "Sélectionnez votre objectif, votre sensibilité et votre gabarit pour obtenir votre angle de départ, largeur (26 ou 30 cm) et guide clinique.",
    q1Label: "1. Quel est votre objectif principal ?",
    goals: {
      lumbar: { label: "Bas du Dos L4–L5 / L5–S1", sub: "Tension discale & posture assise" },
      sciatica: { label: "Sciatique / Muscle Piriforme", sub: "Gêne fessier ou jambe" },
      neck: { label: "Nuque, Écrans & Bosse C7", sub: "Cervicales C5–C7 & épaules" },
      athlete: { label: "Athlètes & Musculation", sub: "Soulevé de terre, squat & course" },
      family: { label: "Posture Jeunes & Famille", sub: "Dès 6 ans, hygiène quotidienne" },
    },
    q2Label: "2. Sensibilité ou précaution particulière ?",
    comforts: {
      sitting: "Raideur après position assise ou au réveil",
      extension: "Gêne en cambrure arrière (Sténose / Facettes)",
      vascular: "Hypertension, vertiges ou 55+ ans (Tête haute)",
      general: "Prévention quotidienne et souplesse",
    },
    q3Label: "3. Gabarit et fixation souhaitée :",
    bodies: {
      standard: "Standard (≤ 100 kg / 220 lbs, ≤ 193 cm) → 26 cm",
      wide: "Large Renforcée (> 100 kg ou > 193 cm) → 30 cm",
    },
    spaces: {
      stud: "Fixation Murale Montant 16\" ou Mur Plein",
      stand: "Locataire Sans Perçage (Support-Échelle +275 $)",
    },
    resultBadge: "Votre Recommandation Evminov",
    angleLabel: "Angle de Départ",
    durationLabel: "Séance / Jour",
    minUnit: "min",
    boardLabel: "Modèle Conseillé",
    standNote: "Inclut le Support-Échelle démontable 4 pièces (zéro trou)",
    hsaNote: "Net estimé -30% via HSA/FSA ou assurances",
    ctaOrder: "Configurer Ce Modèle Exact",
    ctaGuide: "Lire le Guide Correspondant",
    ctaWa: "Confirmer sur WhatsApp",
    emailHeading: "Recevoir ce plan 14 jours + modèle d'attestation par email :",
    emailPlaceholder: "Votre email pour le plan personnalisé",
    emailBtn: "Envoyer",
    emailSending: "Envoi…",
    emailDone: "Envoyé ! Vérifiez votre boîte de réception.",
    wellnessDisclaimer:
      "Outil éducatif de bien-être (HTS 9506.91.0030) — ne remplace pas un avis médical.",
  },
  de: {
    badge: "Interaktiver 60-Sekunden-Check",
    title: "Finden Sie Ihren sicheren Winkel & das passende Evminov Board",
    subtitle:
      "Wählen Sie Ihr Ziel, Ihr Komfortprofil und Ihre Statur — erhalten Sie sofort Startwinkel, Board-Breite (26 vs. 30 cm) und passenden Ratgeber.",
    q1Label: "1. Was ist Ihr wichtigstes Rücken-Ziel?",
    goals: {
      lumbar: { label: "Lendenwirbel L4–L5 / L5–S1", sub: "Bandscheibendruck & Sitzen" },
      sciatica: { label: "Ischias & Piriformis", sub: "Ausstrahlung in Gesäß/Bein" },
      neck: { label: "Nacken, Büro & Nackenbuckel", sub: "C5–C7 Spannung & Schultern" },
      athlete: { label: "Sportler & Krafttraining", sub: "Kreuzheben, Kniebeugen & Lauf" },
      family: { label: "Kinder- & Familienhaltung", sub: "Tägliche Hygiene ab 6 Jahren" },
    },
    q2Label: "2. Besondere Komfort- oder Sicherheitswünsche?",
    comforts: {
      sitting: "Steif nach langem Sitzen oder morgens",
      extension: "Empfindlich bei Hohlkreuz (Stenose / Facetten)",
      vascular: "Bluthochdruck, Schwindel oder 55+ (Kopf oben)",
      general: "Allgemeine Prävention & Beweglichkeit",
    },
    q3Label: "3. Körperbau & Montage zu Hause:",
    bodies: {
      standard: "Standard (≤ 100 kg / 220 lbs, ≤ 193 cm) → 26 cm",
      wide: "Verstärkt (> 100 kg oder > 193 cm) → Breit 30 cm",
    },
    spaces: {
      stud: "16\"-Wandständer oder Massivwand-Halterung",
      stand: "Mietwohnung ohne Bohren (Leiterständer +$275)",
    },
    resultBadge: "Ihre persönliche Evminov-Empfehlung",
    angleLabel: "Startwinkel",
    durationLabel: "Tägliche Dauer",
    minUnit: "Min.",
    boardLabel: "Passendes Modell",
    standNote: "Inkl. 4-teiligem zerlegbarem Leiterständer (ohne Bohren)",
    hsaNote: "Geschätzt ca. -30% mit US HSA/FSA (mit LMN)",
    ctaOrder: "Exakte Konfiguration wählen",
    ctaGuide: "Passenden Ratgeber lesen",
    ctaWa: "Mit Berater auf WhatsApp klären",
    emailHeading: "Meinen 14-Tage-Plan + LMN-Vorlage per E-Mail erhalten:",
    emailPlaceholder: "Ihre E-Mail für den persönlichen Plan",
    emailBtn: "Plan senden",
    emailSending: "Wird gesendet…",
    emailDone: "Gesendet! Prüfen Sie Ihr Postfach auf Ihren Plan.",
    wellnessDisclaimer:
      "Bildungs-Wellness-Tool (HTS 9506.91.0030) — keine medizinische Diagnose.",
  },
  uk: {
    badge: "Інтерактивний Підбір за 60 Секунд",
    title: "Дізнайтесь Свій Безпечний Кут і Модель Профілактора Євмінова",
    subtitle:
      "Оберіть свою задачу, особливості самопочуття та параметри — система миттєво покаже стартовий кут, ширину дошки (26 чи 30 см), потрібний гайд та посилання на замовлення.",
    q1Label: "1. Яка ваша головна задача для спини?",
    goals: {
      lumbar: { label: "Поперек L4–L5 / L5–S1", sub: "Тиск на диски і сидяча втома" },
      sciatica: { label: "Ішіас / Сідниця (Піріформіс)", sub: "Натяг у сідниці чи нозі" },
      neck: { label: "Шия, Офіс і «Холка» C7", sub: "Напруга C5–C7 і плечі" },
      athlete: { label: "Спорт і Важкі Вправи", sub: "Станова тяга, присідання, біг" },
      family: { label: "Постава Дітей і Родини", sub: "Профілактика від 6 років" },
    },
    q2Label: "2. Які особливості комфорту варто врахувати?",
    comforts: {
      sitting: "Найбільше ниє після довгого сидіння чи вранці",
      extension: "Неприємно прогинатися назад (стеноз / фасетки)",
      vascular: "Підвищений тиск, запаморочення або вік 55+",
      general: "Загальна профілактика і легкість руху",
    },
    q3Label: "3. Ваші параметри та спосіб кріплення вдома:",
    bodies: {
      standard: "Стандарт (до 100 кг і до 193 см) → Ширина 26 см",
      wide: "Посилена (понад 100 кг або вище 193 см) → 30 см",
    },
    spaces: {
      stud: "Кріплення на стіну (включено безкоштовно)",
      stand: "Оренда без свердління (Стійка-драбинка +$275)",
    },
    resultBadge: "Ваш Персональний Розрахунок Evminov",
    angleLabel: "Стартовий Кут",
    durationLabel: "Час на День",
    minUnit: "хв",
    boardLabel: "Оптимальна Модель",
    standNote: "Додано розбірну стійку-драбинку з 4 частин (нуль дірок у стіні)",
    hsaNote: "Орієнтовно -30% через HSA/FSA з довідкою LMN",
    ctaOrder: "Налаштувати Цю Комплектацію",
    ctaGuide: "Читати Відповідний Клінічний Гайд",
    ctaWa: "Підтвердити зі Спеціалістом у WhatsApp",
    emailHeading: "Надіслати цей 14-денний план + шаблон LMN на пошту:",
    emailPlaceholder: "Ваш email для персонального плану",
    emailBtn: "Отримати План",
    emailSending: "Надсилаємо…",
    emailDone: "Готово! Перевірте пошту — план і шаблон LMN уже надіслано.",
    wellnessDisclaimer:
      "Оздоровчий калькулятор (HTS 9506.91.0030) — не є медичним діагнозом. При різкому болю чи слабкості проконсультуйтеся з лікарем.",
  },
  ru: {
    badge: "Интерактивный Подбор за 60 Секунд",
    title: "Узнайте Свой Безопасный Угол и Модель Доски Евминова",
    subtitle:
      "Выберите задачу, особенности самочувствия и параметры — система сразу рассчитает стартовый угол, ширину (26 или 30 см), нужный гайд и ссылку на оформление.",
    q1Label: "1. Какая ваша главная цель для спины?",
    goals: {
      lumbar: { label: "Поясница L4–L5 / L5–S1", sub: "Давление на диски и сидение" },
      sciatica: { label: "Ишиас / Ягодица (Грушевидная)", sub: "Тянет ногу или ягодицу" },
      neck: { label: "Шея, Офис и «Холка» C7", sub: "Напряжение C5–C7 и плечи" },
      athlete: { label: "Спорт и Силовые Нагрузки", sub: "Становая тяга, присед, бег" },
      family: { label: "Осанка Детей и Семьи", sub: "Профилактика с 6 лет" },
    },
    q2Label: "2. Какие особенности комфорта важны?",
    comforts: {
      sitting: "Сильнее ноет после долгого сидения или утром",
      extension: "Некомфортно прогибаться назад (стеноз / фасетки)",
      vascular: "Повышенное давление, головокружение или 55+",
      general: "Общая профилактика и подвижность",
    },
    q3Label: "3. Ваши параметры и способ установки дома:",
    bodies: {
      standard: "Стандарт (до 100 кг и до 193 см) → Ширина 26 см",
      wide: "Усиленная (свыше 100 кг или выше 193 см) → 30 см",
    },
    spaces: {
      stud: "Крепление на стену (в комплекте бесплатно)",
      stand: "Аренда без сверления (Стойка-лесенка +$275)",
    },
    resultBadge: "Ваш Персональный Расчёт Evminov",
    angleLabel: "Стартовый Угол",
    durationLabel: "Время в День",
    minUnit: "мин",
    boardLabel: "Подходящая Модель",
    standNote: "Добавлена разборная стойка-лесенка из 4 частей (без сверления)",
    hsaNote: "Примерно -30% через HSA/FSA со справкой LMN",
    ctaOrder: "Настроить Эту Комплектацию",
    ctaGuide: "Читать Подходящий Клинический Гайд",
    ctaWa: "Уточнить со Специалистом в WhatsApp",
    emailHeading: "Отправить этот 14-дневный план + шаблон LMN на почту:",
    emailPlaceholder: "Ваш email для персонального плана",
    emailBtn: "Отправить План",
    emailSending: "Отправляем…",
    emailDone: "Готово! Проверьте почту — план и шаблон LMN отправлены.",
    wellnessDisclaimer:
      "Оздоровительный инструмент (HTS 9506.91.0030) — не является медицинским диагнозом.",
  },
};

export function InteractiveSpineQuizSection({
  lang,
  compact = false,
}: {
  lang: Locale;
  compact?: boolean;
}) {
  const c = QUIZ_COPY[lang];
  const [goal, setGoal] = useState<QuizGoal>("lumbar");
  const [comfort, setComfort] = useState<ComfortFlag>("sitting");
  const [body, setBody] = useState<BodyProfile>("standard");
  const [space, setSpace] = useState<SpaceType>("stud");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  const recommendation = useMemo(() => {
    const slug =
      goal === "neck" || goal === "family" || space === "stand"
        ? "2-piece-folding-board"
        : "3-piece-travel-board";
    const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
    const directPrice = getProductPrice(product, body, "direct");
    const addStandCost = space === "stand" ? 275 : 0;
    const totalDirect = directPrice + addStandCost;
    const hsaNet = calculateHsaPrice(totalDirect);

    let angle = "12° – 16°";
    let duration = `8 – 12 ${c.minUnit}`;
    if (comfort === "extension") {
      angle = "8° – 12°";
      duration = `8 – 10 ${c.minUnit}`;
    } else if (comfort === "vascular" || goal === "neck" || goal === "family") {
      angle = "8° – 12°";
      duration = `5 – 10 ${c.minUnit}`;
    } else if (goal === "athlete") {
      angle = "20° – 30°";
      duration = `10 – 15 ${c.minUnit}`;
    }

    let guidePath = "/guides/l4-l5-vs-l5-s1-herniated-disc-symptoms-and-decompression-guide/";
    if (comfort === "extension") {
      guidePath = "/guides/spondylolisthesis-and-facet-joint-safe-decompression-guide/";
    } else if (comfort === "vascular") {
      guidePath = "/guides/inversion-table-alternative-high-blood-pressure-seniors/";
    } else if (goal === "sciatica") {
      guidePath = "/guides/piriformis-syndrome-vs-sciatica-self-test-and-relief-guide/";
    } else if (goal === "neck") {
      guidePath = "/guides/neck-hump-dowagers-hump-and-forward-head-posture-guide/";
    } else if (goal === "athlete") {
      guidePath = "/guides/the-lifters-guide-to-spinal-decompression/";
    } else if (goal === "family") {
      guidePath = "/guides/pediatric-scoliosis-prevention-kids-posture-spine/";
    }

    const numericAngle = comfort === "extension" || comfort === "vascular" || goal === "neck" || goal === "family" ? 10 : goal === "athlete" ? 22 : 14;
    const orderParams = new URLSearchParams({
      product: product.slug,
      width: body,
      angle: String(numericAngle),
      step: "1",
    });
    if (space === "stand") {
      orderParams.set("accessories", "ladder-stand-4pc");
    }

    const localizedName = product.localizedNames[lang] || product.name;
    const waText = encodeURIComponent(
      `Hi Evminov! My 60s Quiz match: Goal=${c.goals[goal].label} | Preference=${c.comforts[comfort]} | Build=${body} | Mount=${space} → ${localizedName} (${angle}). Please confirm availability & HSA/LMN invoice!`
    );

    return {
      product,
      localizedName,
      angle,
      duration,
      directPrice,
      totalDirect,
      hsaNet,
      guideHref: getLocalizedHref(guidePath, lang),
      orderHref: `${getLocalizedHref("/order/", lang)}?${orderParams.toString()}#order-form`,
      waHref: `${SITE_CONFIG.whatsappHref}?text=${waText}`,
    };
  }, [goal, comfort, body, space, lang, c]);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || busy) return;
    setBusy(true);
    const attr = getAttributionSummary();
    try {
      await fetch("/api/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "protocol_lead",
          email: email.trim(),
          product: recommendation.product.slug,
          productName: `${recommendation.localizedName} (${body === "wide" ? "30 cm Wide" : "26 cm Std"})`,
          totalUsd: recommendation.totalDirect,
          notes: [
            `Quiz Goal: ${goal}`,
            `Comfort Profile: ${comfort}`,
            `Width: ${body}`,
            `Space: ${space}`,
            `Angle: ${recommendation.angle}`,
            attr ? `Attribution: ${attr}` : "",
          ]
            .filter(Boolean)
            .join(" | "),
          lang,
        }),
      });
      setSent(true);
      sendGTMEvent("quiz_plan_lead_submit", {
        goal,
        comfort,
        width: body,
        space,
        locale: lang,
      });
    } catch {
      setSent(true);
    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      id="fit-quiz"
      aria-labelledby="fit-quiz-heading"
      className={compact ? "py-10" : "bg-white py-14 sm:py-16"}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 p-5 shadow-xl sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-900">
              <Compass className="h-3.5 w-3.5" />
              <span>{c.badge}</span>
            </span>
            <h2
              id="fit-quiz-heading"
              className="mt-3 font-display text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl"
            >
              {c.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              {c.subtitle}
            </p>
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-12 lg:items-start">
            {/* Interactive 3-Step Selector Column */}
            <div className="space-y-5 lg:col-span-7">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  {c.q1Label}
                </p>
                <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                  {(Object.keys(c.goals) as QuizGoal[]).map((k) => {
                    const active = goal === k;
                    return (
                      <button
                        key={k}
                        type="button"
                        aria-pressed={active}
                        onClick={() => {
                          setGoal(k);
                          sendGTMEvent("quiz_step_select", { step: "goal", value: k });
                        }}
                        className={`flex min-h-[52px] flex-col items-start justify-center rounded-2xl border px-3.5 py-2.5 text-left transition ${
                          active
                            ? "border-emerald-600 bg-emerald-600 text-white shadow-md"
                            : "border-slate-200 bg-white text-slate-900 hover:border-teal-500"
                        }`}
                      >
                        <span className="text-xs font-black sm:text-sm">
                          {c.goals[k].label}
                        </span>
                        <span
                          className={`text-[11px] ${
                            active ? "text-emerald-100" : "text-slate-500"
                          }`}
                        >
                          {c.goals[k].sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  {c.q2Label}
                </p>
                <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                  {(Object.keys(c.comforts) as ComfortFlag[]).map((k) => {
                    const active = comfort === k;
                    return (
                      <button
                        key={k}
                        type="button"
                        aria-pressed={active}
                        onClick={() => {
                          setComfort(k);
                          sendGTMEvent("quiz_step_select", { step: "comfort", value: k });
                        }}
                        className={`flex min-h-[46px] items-center gap-2 rounded-2xl border px-3.5 py-2 text-left text-xs font-bold transition ${
                          active
                            ? "border-[#0B1F3A] bg-[#0B1F3A] text-white shadow-sm"
                            : "border-slate-200 bg-white text-slate-800 hover:border-teal-500"
                        }`}
                      >
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 ${
                            active ? "text-emerald-400" : "text-slate-300"
                          }`}
                        />
                        <span>{c.comforts[k]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  {c.q3Label}
                </p>
                <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                  {(Object.keys(c.bodies) as BodyProfile[]).map((b) => {
                    const active = body === b;
                    return (
                      <button
                        key={b}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setBody(b)}
                        className={`min-h-[46px] rounded-2xl border px-3.5 py-2 text-left text-xs font-bold transition ${
                          active
                            ? "border-teal-700 bg-teal-700 text-white"
                            : "border-slate-200 bg-white text-slate-800 hover:border-teal-500"
                        }`}
                      >
                        {c.bodies[b]}
                      </button>
                    );
                  })}
                  {(Object.keys(c.spaces) as SpaceType[]).map((s) => {
                    const active = space === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setSpace(s)}
                        className={`min-h-[46px] rounded-2xl border px-3.5 py-2 text-left text-xs font-bold transition ${
                          active
                            ? "border-teal-700 bg-teal-700 text-white"
                            : "border-slate-200 bg-white text-slate-800 hover:border-teal-500"
                        }`}
                      >
                        {c.spaces[s]}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Live Recommendation & Conversion Card */}
            <div className="rounded-3xl bg-[#0B1F3A] p-5 text-white shadow-2xl sm:p-6 lg:col-span-5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{c.resultBadge}</span>
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold text-slate-200">
                  {body === "wide" ? "30 cm Wide" : "26 cm Std"}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-[11px] font-semibold text-slate-300">
                    {c.angleLabel}
                  </p>
                  <p className="mt-0.5 font-display text-xl font-black text-emerald-400">
                    {recommendation.angle}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-[11px] font-semibold text-slate-300">
                    {c.durationLabel}
                  </p>
                  <p className="mt-0.5 font-display text-xl font-black text-white">
                    {recommendation.duration}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                  {c.boardLabel}
                </p>
                <p className="mt-1 font-display text-lg font-black text-white">
                  {recommendation.localizedName}
                </p>
                {space === "stand" && (
                  <p className="mt-1 text-xs font-semibold text-amber-300">
                    + {c.standNote}
                  </p>
                )}
                <p className="mt-2 text-2xl font-black text-emerald-400">
                  {formatUSD(recommendation.totalDirect)}
                </p>
                <p className="text-xs text-slate-300">
                  {c.hsaNote}:{" "}
                  <strong className="text-white">~{formatUSD(recommendation.hsaNet)}</strong>
                </p>
              </div>

              <div className="mt-4 space-y-2.5">
                <Link
                  href={recommendation.orderHref}
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-xs font-black text-slate-950 transition hover:bg-emerald-300 sm:text-sm"
                >
                  <span>{c.ctaOrder}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="grid gap-2 sm:grid-cols-2">
                  <Link
                    href={recommendation.guideHref}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-center text-xs font-bold text-white transition hover:bg-white/15"
                  >
                    {c.ctaGuide}
                  </Link>
                  <a
                    href={recommendation.waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#16A34A] px-3 py-2 text-center text-xs font-extrabold text-white transition hover:bg-emerald-500"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Micro Email Lead Capture */}
              <div className="mt-4 border-t border-white/15 pt-4">
                {sent ? (
                  <p className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <span>{c.emailDone}</span>
                  </p>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-2">
                    <label
                      htmlFor="quiz-lead-email"
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-200"
                    >
                      <Mail className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{c.emailHeading}</span>
                    </label>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <input
                        id="quiz-lead-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={c.emailPlaceholder}
                        className="min-h-[44px] flex-1 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-base text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none sm:text-xs"
                      />
                      <button
                        type="submit"
                        disabled={busy}
                        className="min-h-[44px] shrink-0 rounded-xl bg-white px-4 py-2 text-xs font-black text-slate-950 transition hover:bg-emerald-200 disabled:opacity-60"
                      >
                        {busy ? c.emailSending : c.emailBtn}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
                {c.wellnessDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
