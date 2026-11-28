"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  FileText,
  Lock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Locale } from "@/i18n/types";
import { PRODUCTS } from "@/data/products";
import { formatUSD } from "@/lib/physics";
import { SITE_CONFIG } from "@/lib/site-config";
import { getAttributionSummary, sendGTMEvent } from "@/lib/gtm";

interface LeadMagnetCopy {
  badge: string;
  heading: string;
  headingHighlight: string;
  subtitle: string;
  perks: [string, string, string];
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  optLmn: string;
  optNewYear: string;
  ctaSubmit: string;
  ctaSending: string;
  ctaWhatsApp: string;
  successTitle: string;
  successBody: string;
  privacyNote: string;
}

const LEAD_MAGNET_COPY: Record<Locale, LeadMagnetCopy> = {
  en: {
    badge: "Free Instant Kit • Year-End FSA/HSA & New Year Express Priority",
    heading: "Not Ready to Order Today? Lock Your Price & Get the",
    headingHighlight: "Free Doctor LMN + Spine Sizing Kit",
    subtitle:
      "Online card checkout & faster 2–5 day local US/CA express shipping launch in the New Year. Enter your email below to receive our ready-to-sign Doctor LMN template (save ~30% pre-tax before Dec 31 FSA deadlines), exact width sizing (26 vs 30 cm), and VIP first-in-line Express notification.",
    perks: [
      "Ready-to-send Doctor Letter of Medical Necessity (LMN) wording for US HSA/FSA & Canadian Extended Health",
      "2026 Price Lock & VIP Early-Access alert the day Local Express (2–5 days) + Stripe/Klarna checkout go live",
      "Personalized 14-Day Head-Up Decompression Starter Guide & 16\" wall-stud checklist sent to your inbox",
    ],
    namePlaceholder: "Your First Name",
    emailPlaceholder: "Email for Free LMN Kit & Price Lock *",
    phonePlaceholder: "WhatsApp / Phone (optional — for faster sizing help)",
    optLmn: "Include Doctor LMN Template (HSA / FSA ~30% savings)",
    optNewYear: "VIP Alert: Notify me first when New Year Local Express & Card Checkout open",
    ctaSubmit: "Send Me the Free Kit & Lock Price →",
    ctaSending: "Sending Your Kit…",
    ctaWhatsApp: "Or Ask Live on WhatsApp",
    successTitle: "Your Evminov VIP Kit & Price Lock Are on the Way!",
    successBody:
      "Check your inbox for your personalized protocol guide, LMN checklist, and priority sizing link. Want immediate confirmation today? Message our operator directly on WhatsApp.",
    privacyNote: "Zero spam. Instant email delivery + direct specialist support when you need it.",
  },
  es: {
    badge: "Kit Gratuito al Instante • FSA/HSA y Prioridad Exprés Año Nuevo",
    heading: "¿Aún Decidiendo? Asegura Tu Precio y Recibe el",
    headingHighlight: "Kit LMN Médico + Guía de Talla Gratis",
    subtitle:
      "El pago directo con tarjeta y el envío exprés local (2–5 días) se activan en Año Nuevo. Recibe gratis nuestra plantilla LMN para reembolso HSA/FSA (~30% antes del 31 dic.), talla exacta (26 vs 30 cm) y aviso VIP prioritario.",
    perks: [
      "Plantilla lista de Carta de Necesidad Médica (LMN) para HSA/FSA en EE. UU. y seguros en Canadá",
      "Precio 2026 asegurado + alerta VIP prioritaria cuando abra el envío exprés local y pago con tarjeta",
      "Plan personalizado de 14 días de descompresión cabeza arriba + lista de instalación en pared",
    ],
    namePlaceholder: "Tu Nombre",
    emailPlaceholder: "Correo para recibir el Kit LMN gratis *",
    phonePlaceholder: "WhatsApp / Teléfono (opcional)",
    optLmn: "Incluir plantilla LMN (ahorro HSA/FSA ~30%)",
    optNewYear: "Alerta VIP: avisarme primero al abrir envío exprés y pago con tarjeta",
    ctaSubmit: "Enviar Kit Gratis y Asegurar Precio →",
    ctaSending: "Enviando Kit…",
    ctaWhatsApp: "O Consultar en WhatsApp",
    successTitle: "¡Tu Kit Evminov y Bloqueo de Precio Fueron Enviados!",
    successBody:
      "Revisa tu correo electrónico para ver tu protocolo y guía LMN. ¿Prefieres confirmar hoy mismo? Escríbenos directo por WhatsApp.",
    privacyNote: "Cero spam. Entrega inmediata por correo.",
  },
  fr: {
    badge: "Kit Gratuit Immédiat • Reçu Remboursement & Priorité Nouvel An",
    heading: "Pas Encore Prêt ? Bloquez Votre Tarif et Recevez le",
    headingHighlight: "Kit LMN / Assurance + Guide de Taille Gratuit",
    subtitle:
      "Le paiement carte en ligne et la livraison express locale (2–5 jours) reprennent au Nouvel An. Recevez immédiatement notre modèle d'ordonnance/LMN (Canada Extended Health / US HSA-FSA), le guide 26 vs 30 cm et l'alerte VIP.",
    perks: [
      "Modèle prêt à remettre au médecin pour remboursement Assurance Maladie Complémentaire / HSA-FSA",
      "Tarif 2026 bloqué + alerte prioritaire dès l'ouverture du stock Express local et paiement carte",
      "Programme de démarrage 14 jours tête en haut + guide de fixation murale envoyé par e-mail",
    ],
    namePlaceholder: "Votre Prénom",
    emailPlaceholder: "E-mail pour recevoir le Kit Gratuit *",
    phonePlaceholder: "WhatsApp / Téléphone (optionnel)",
    optLmn: "Inclure le modèle LMN / Assurance Santé",
    optNewYear: "Alerte VIP : me prévenir dès la reprise Express & Paiement Carte",
    ctaSubmit: "Recevoir le Kit & Bloquer le Tarif →",
    ctaSending: "Envoi en cours…",
    ctaWhatsApp: "Ou Écrire sur WhatsApp",
    successTitle: "Votre Kit Evminov & Tarif Bloqué Sont Envoyés !",
    successBody:
      "Consultez votre boîte mail pour le guide personnalisé et le kit LMN. Besoin d'un conseil immédiat ? Contactez-nous sur WhatsApp.",
    privacyNote: "Zéro spam. Envoi immédiat par e-mail.",
  },
  de: {
    badge: "Gratis Sofort-Kit • Preisgarantie & Neujahrs-Express-Priorität",
    heading: "Noch am Vergleichen? Preis sichern &",
    headingHighlight: "Gratis Größen- & 14-Tage-Startpaket erhalten",
    subtitle:
      "Direkte Online-Kartenzahlung und schneller 2–5-Tage-Express starten im Neuen Jahr. Sichern Sie sich jetzt kostenlos unseren LMN-/Steuer-Leitfaden, die exakte Breitenempfehlung (26 vs 30 cm) und VIP-Priorität.",
    perks: [
      "Vorlage für ärztliche Empfehlung (LMN) für HSA/FSA & private Kostenerstattung",
      "2026-Preisgarantie & VIP-Vorabinfo sobald lokaler Expressversand & Kartenzahlung starten",
      "14-Tage-Kopf-oben-Startplan + Wandmontage-Checkliste direkt per E-Mail",
    ],
    namePlaceholder: "Ihr Vorname",
    emailPlaceholder: "E-Mail für Gratis-Kit & Preisgarantie *",
    phonePlaceholder: "WhatsApp / Telefon (optional)",
    optLmn: "Ärztliche LMN-Vorlage (HSA/FSA) beifügen",
    optNewYear: "VIP-Info: Zuerst benachrichtigen bei Express- & Kartenstart",
    ctaSubmit: "Gratis-Kit senden & Preis sichern →",
    ctaSending: "Wird gesendet…",
    ctaWhatsApp: "Oder per WhatsApp fragen",
    successTitle: "Ihr Evminov VIP-Kit ist unterwegs!",
    successBody:
      "Prüfen Sie Ihr Postfach für den Startplan und die LMN-Checkliste. Für schnelle Direktberatung schreiben Sie uns auf WhatsApp.",
    privacyNote: "Kein Spam. Sofortiger E-Mail-Versand.",
  },
  uk: {
    badge: "Безкоштовний VIP-Кіт • Фіксація Ціни + FSA/HSA Шаблон",
    heading: "Ще обираєте? Зафіксуйте ціну 2026 та отримайте",
    headingHighlight: "Гайд Підбору + Шаблон LMN для Лікаря Безкоштовно",
    subtitle:
      "Онлайн-оплата карткою та швидка локальна доставка по США/Канаді (2–5 днів) запускаються з Нового року. Залиште пошту — за 30 секунд отримаєте персональний 14-денний протокол, готовий шаблон LMN (економія ~30% через HSA/FSA до 31 грудня) та VIP-сповіщення першими!",
    perks: [
      "Готовий текст Letter of Medical Necessity (LMN) для повернення ~30% через US HSA/FSA або канадську страховку",
      "Фіксація поточної ціни та VIP-сповіщення в день запуску локальної експрес-доставки й оплати карткою",
      "14-денний план м’якого старту головою вгору + інструкція монтажу на 16\" балки (studs) на вашу пошту",
    ],
    namePlaceholder: "Ваше ім’я",
    emailPlaceholder: "Email для безкоштовного VIP-кіту *",
    phonePlaceholder: "WhatsApp / Телефон (необов’язково — для швидкої підказки)",
    optLmn: "Додати шаблон LMN для лікаря (HSA / FSA ~30%)",
    optNewYear: "VIP-список: повідомити першим про запуск локальної експрес-доставки й оплати карткою",
    ctaSubmit: "Отримати Кіт і Зафіксувати Ціну →",
    ctaSending: "Надсилаємо Кіт…",
    ctaWhatsApp: "Або Запитати у WhatsApp",
    successTitle: "Ваш VIP-Кіт та Фіксація Ціни вже на пошті!",
    successBody:
      "Перевірте пошту — туди надіслано персональний протокол і чекліст LMN. Якщо хочете оформити відправку вже зараз (~2 тижні), напишіть нам у WhatsApp.",
    privacyNote: "Жодного спаму. Миттєва доставка на пошту + жива підтримка у WhatsApp.",
  },
  ru: {
    badge: "Бесплатный VIP-Кит • Фиксация Цены + Шаблон LMN",
    heading: "Ещё выбираете? Зафиксируйте цену 2026 и получите",
    headingHighlight: "Гид Подбора + Шаблон LMN для Врача Бесплатно",
    subtitle:
      "Онлайн-оплата картой и быстрая локальная доставка по США/Канаде (2–5 дней) запускаются с Нового года. Оставьте почту — через 30 секунд получите 14-дневный стартовый протокол, шаблон LMN (экономия ~30% по HSA/FSA до 31 декабря) и VIP-уведомление первыми!",
    perks: [
      "Готовый шаблон Letter of Medical Necessity (LMN) для возврата ~30% через US HSA/FSA или страховку в Канаде",
      "Фиксация текущей цены и VIP-уведомление в день запуска локальной экспресс-доставки и оплаты картой",
      "14-дневный план мягкого старта головой вверх + чек-лист крепления на стену на вашу почту",
    ],
    namePlaceholder: "Ваше имя",
    emailPlaceholder: "Email для бесплатного VIP-кита *",
    phonePlaceholder: "WhatsApp / Телефон (необязательно)",
    optLmn: "Включить шаблон LMN для врача (HSA / FSA ~30%)",
    optNewYear: "VIP-список: сообщить первым о запуске экспресс-доставки и оплаты картой",
    ctaSubmit: "Получить Кит и Зафиксировать Цену →",
    ctaSending: "Отправляем Кит…",
    ctaWhatsApp: "Или Спросить в WhatsApp",
    successTitle: "Ваш VIP-Кит и Фиксация Цены уже на почте!",
    successBody:
      "Проверьте почту — мы отправили персональный протокол и чек-лист LMN. Хотите заказать доставку уже сейчас (~2 недели)? Напишите нам в WhatsApp.",
    privacyNote: "Без спама. Мгновенная отправка на почту + живая поддержка в WhatsApp.",
  },
};

export function YearEndLeadMagnetSection({ lang }: { lang: Locale }) {
  const c = LEAD_MAGNET_COPY[lang];
  const minDirect = Math.min(...PRODUCTS.map((p) => p.directPriceUsd));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [wantLmn, setWantLmn] = useState(true);
  const [wantNewYearVip, setWantNewYearVip] = useState(true);
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          product: "3-piece-travel-board",
          productName: "VIP Price Lock + LMN & 14-Day Sizing Kit",
          totalUsd: minDirect,
          notes: [
            "Lead Source: Homepage Pre-Stripe VIP Lead Magnet",
            wantLmn ? "Requested: Doctor LMN / HSA-FSA Kit" : "",
            wantNewYearVip ? "Requested: New Year Local Express & Card Checkout VIP Alert" : "",
            phone.trim() ? `WhatsApp/Phone: ${phone.trim()}` : "",
            attr ? `Attribution: ${attr}` : "",
          ]
            .filter(Boolean)
            .join(" | "),
          lang,
        }),
      });
      setSent(true);
      sendGTMEvent("vip_lead_magnet_submit", {
        want_lmn: wantLmn,
        want_new_year_vip: wantNewYearVip,
        has_phone: Boolean(phone.trim()),
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
      id="vip-kit"
      aria-labelledby="vip-kit-heading"
      className="border-y border-emerald-200/80 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[28px] border border-emerald-500/30 bg-gradient-to-br from-[#071529] via-[#0B1F3A] to-[#0D3840] p-5 text-white shadow-2xl sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-emerald-500/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                <span>{c.badge}</span>
              </span>

              <h2
                id="vip-kit-heading"
                className="mt-3 font-display text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                {c.heading}{" "}
                <span className="text-emerald-400">{c.headingHighlight}</span>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {c.subtitle}
              </p>

              <ul className="mt-5 space-y-2.5 text-xs text-slate-200 sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{c.perks[0]}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                  <span>
                    {c.perks[1]} ({formatUSD(minDirect)}+)
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                  <span>{c.perks[2]}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white p-5 text-slate-900 shadow-2xl sm:p-6 lg:col-span-5">
              {sent ? (
                <div className="py-4 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                  <h3 className="mt-3 font-display text-lg font-black text-slate-950">
                    {c.successTitle}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {c.successBody}
                  </p>
                  <a
                    href={SITE_CONFIG.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendGTMEvent("click_whatsapp", { location: "vip_kit_success" })}
                    className="mt-4 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-4 py-3 text-xs font-extrabold text-white shadow transition hover:bg-emerald-600"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    <span>WhatsApp • {SITE_CONFIG.phoneDisplay}</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={c.namePlaceholder}
                      aria-label={c.namePlaceholder}
                      className="min-h-[44px] w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={c.emailPlaceholder}
                      aria-label={c.emailPlaceholder}
                      className="min-h-[44px] w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 focus:border-teal-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={c.phonePlaceholder}
                      aria-label={c.phonePlaceholder}
                      className="min-h-[44px] w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 focus:border-teal-600 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-700">
                    <label className="flex cursor-pointer items-start gap-2">
                      <input
                        type="checkbox"
                        checked={wantLmn}
                        onChange={(e) => setWantLmn(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-teal-700"
                      />
                      <span className="font-semibold">{c.optLmn}</span>
                    </label>
                    <label className="flex cursor-pointer items-start gap-2">
                      <input
                        type="checkbox"
                        checked={wantNewYearVip}
                        onChange={(e) => setWantNewYearVip(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-teal-700"
                      />
                      <span className="font-semibold">{c.optNewYear}</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={busy}
                    className="min-h-[48px] w-full cursor-pointer rounded-xl bg-teal-700 px-4 py-3 text-sm font-black text-white shadow-lg transition hover:bg-teal-800 disabled:opacity-60"
                  >
                    {busy ? c.ctaSending : c.ctaSubmit}
                  </button>

                  <a
                    href={SITE_CONFIG.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendGTMEvent("click_whatsapp", { location: "vip_kit_card" })}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-xs font-extrabold text-emerald-900 transition hover:bg-[#16A34A] hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    <span>{c.ctaWhatsApp}</span>
                  </a>

                  <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-500">
                    <Lock className="h-3 w-3 shrink-0 text-emerald-600" />
                    <span>{c.privacyNote}</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
