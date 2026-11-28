"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Menu,
  MessageCircle,
  ShieldCheck,
  ShoppingCart,
  Truck,
  User,
  X,
} from "lucide-react";
import { LOCALES, LOCALE_META, Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocalizedHref } from "@/lib/url";
import { SITE_CONFIG } from "@/lib/site-config";
import { useHsaSavings } from "@/context/HsaSavingsContext";
import { sendGTMEvent } from "@/lib/gtm";
import { EvminovBrandLockup } from "@/components/brand/EvminovLogo";
import { HEADER_EXTRA } from "@/i18n/locales/chrome";

interface HeaderLabels {
  estBadge: string;
  barTagline: string;
  whyNotInversion: string;
  boardsPricing: string;
  protocols: string;
  since1996: string;
  spineGoals: string;
  guides: string;
  shipping50: string;
  shippingNoticeBanner: string;
  patientPortal: string;
  findMyAngle: string;
  cartOrder: string;
}

const HEADER_LABELS: Record<Locale, HeaderLabels> = {
  en: {
    estBadge: "ESTABLISHED 1996",
    barTagline: "30 Years of Spine Biomechanics • Fast 50-State US & Global Shipping • 60-Day Trial",
    whyNotInversion: "Why Not Inversion?",
    boardsPricing: "Boards & Pricing",
    protocols: "Protocols",
    since1996: "Since 1996 Heritage",
    spineGoals: "Spine Goals",
    guides: "Guides",
    shipping50: "US & Canada Shipping",
    shippingNoticeBanner: "Shipping Update: All US & Canada orders currently deliver in ~2 weeks via direct dispatch. Faster local express delivery (2–5 days) resumes in the New Year.",
    patientPortal: "Patient Portal",
    findMyAngle: "Find My Angle",
    cartOrder: "Cart",
  },
  es: {
    estBadge: "DESDE 1996",
    barTagline: "30 Años de Biomecánica • Envío Rápido EE. UU. y Global • Prueba 60 Días",
    whyNotInversion: "¿Por Qué No Inversión?",
    boardsPricing: "Tablas y Precios",
    protocols: "Protocolos",
    since1996: "Historia desde 1996",
    spineGoals: "Objetivos",
    guides: "Guías",
    shipping50: "Envíos EE. UU. y Canadá",
    shippingNoticeBanner: "Aviso de Envío: Todos los pedidos a EE. UU. y Canadá tardan actualmente ~2 semanas por envío directo. El envío exprés local (2–5 días) vuelve en Año Nuevo.",
    patientPortal: "Portal Paciente",
    findMyAngle: "Mi Ángulo",
    cartOrder: "Pedido",
  },
  fr: {
    estBadge: "FONDÉ EN 1996",
    barTagline: "30 Ans de Biomécanique • Livraison USA, Canada & UE • Essai 60 Jours",
    whyNotInversion: "Pourquoi Pas l'Inversion ?",
    boardsPricing: "Planches & Tarifs",
    protocols: "Protocoles",
    since1996: "Héritage 1996",
    spineGoals: "Objectifs",
    guides: "Guides",
    shipping50: "Livraison US & Canada",
    shippingNoticeBanner: "Info Livraison : Toutes les commandes vers les États-Unis et le Canada sont livrées en ~2 semaines par envoi direct. La livraison express locale (2–5 jours) reprend au Nouvel An.",
    patientPortal: "Portail Patient",
    findMyAngle: "Mon Angle",
    cartOrder: "Panier",
  },
  uk: {
    estBadge: "ЗАСНОВАНО 1996",
    barTagline: "30 Років Методики Євмінова • Доставка США, Канада, ЄС • 60 Днів Тесту",
    whyNotInversion: "Чому не інверсія?",
    boardsPricing: "Дошки та Ціни",
    protocols: "Протоколи",
    since1996: "Спадщина з 1996",
    spineGoals: "Програми",
    guides: "Гайди",
    shipping50: "Доставка США та Канада",
    shippingNoticeBanner: "Оновлення доставки: наразі доставка до США та Канади займає ~2 тижні (пряма відправка). З Нового року повернеться швидка локальна експрес-доставка (2–5 днів).",
    patientPortal: "Кабінет Пацієнта",
    findMyAngle: "Мій Кут",
    cartOrder: "Кошик",
  },
  ru: {
    estBadge: "ОСНОВАНО В 1996",
    barTagline: "30 Лет Методики Евминова • Доставка США, Канада, ЕС • 60 Дней Теста",
    whyNotInversion: "Почему не инверсия?",
    boardsPricing: "Доски и Цены",
    protocols: "Протоколы",
    since1996: "Наследие с 1996",
    spineGoals: "Программы",
    guides: "Статьи",
    shipping50: "Доставка США и Канада",
    shippingNoticeBanner: "Обновление доставки: сейчас доставка в США и Канаду занимает ~2 недели (прямая отправка). С Нового года вернётся быстрая локальная экспресс-доставка (2–5 дней).",
    patientPortal: "Кабинет Пациента",
    findMyAngle: "Мой Угол",
    cartOrder: "Корзина",
  },
  de: {
    estBadge: "SEIT 1996",
    barTagline: "30 Jahre Wirbelsäulen-Biomechanik • Versand USA, Kanada & EU • 60 Tage Test",
    whyNotInversion: "Warum keine Inversion?",
    boardsPricing: "Boards & Preise",
    protocols: "Protokolle",
    since1996: "Tradition seit 1996",
    spineGoals: "Rückenziele",
    guides: "Ratgeber",
    shipping50: "US- & Kanada-Versand",
    shippingNoticeBanner: "Versandhinweis: Lieferungen in die USA & nach Kanada dauern aktuell ca. 2 Wochen per Direktversand. Der schnellere Express-Versand (2–5 Tage) startet ab Neujahr wieder.",
    patientPortal: "Patientenportal",
    findMyAngle: "Mein Winkel",
    cartOrder: "Warenkorb",
  },
};

export function Header({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const hl = HEADER_LABELS[lang];
  const hx = HEADER_EXTRA[lang];
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { applyHsaSavings, toggleHsaSavings } = useHsaSavings();

  const isStateDetailPage = /^\/shipping\/[^/]+\/?$/.test(pathname);
  const switchBasePath = isStateDetailPage ? "/shipping/" : pathname;

  const navLinks = [
    {
      label: hl.whyNotInversion,
      href: getLocalizedHref("/compare/evminov-vs-inversion-table/", lang),
      highlight: false,
    },
    {
      label: hl.boardsPricing,
      href: getLocalizedHref("/products/", lang),
      highlight: false,
    },
    {
      label: hl.since1996,
      href: getLocalizedHref("/centers/", lang),
      highlight: true,
    },
    {
      label: hl.spineGoals,
      href: getLocalizedHref("/conditions/", lang),
      highlight: false,
    },
    {
      label: hl.guides,
      href: getLocalizedHref("/guides/", lang),
      highlight: false,
    },
    {
      label: hl.shipping50,
      href: getLocalizedHref("/shipping/", lang),
      highlight: false,
    },
  ];

  // Update chevron visibility for horizontal scrollable nav
  const syncScrollChevrons = () => {
    const el = navRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const rafId = window.requestAnimationFrame(syncScrollChevrons);
    window.addEventListener("resize", syncScrollChevrons, { passive: true });
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", syncScrollChevrons);
    };
  }, [lang]);

  // Subtle reading progress bar along bottom edge of sticky header
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        setIsScrolled(window.scrollY > 24);
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
          setScrollProgress(Math.min(100, Math.round((window.scrollY / docHeight) * 100)));
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const scrollNavBy = (delta: number) => {
    navRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Announcement & Heritage Trust Bar (single compact row on mobile, full bar on desktop) */}
      <aside
        aria-label={hx.heritageBarAria}
        className="border-b border-white/10 bg-[#0B1628] text-white"
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-2 px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-xs">
          <div className="hidden min-w-0 flex-1 items-center gap-2 md:flex">
            <span className="shrink-0 font-extrabold tracking-[0.05em] text-[#34D399]">
              {hl.estBadge}
            </span>
            <span className="text-white/30" aria-hidden="true">
              •
            </span>
            <span className="truncate font-medium text-slate-200">
              {hl.barTagline}
            </span>
          </div>

          <div className="flex w-full items-center justify-between gap-2 md:w-auto md:justify-end md:gap-3">
            {/* Compact HSA/FSA ~30% Toggle Pill */}
            <button
              type="button"
              onClick={toggleHsaSavings}
              aria-pressed={applyHsaSavings}
              className="inline-flex min-h-[30px] shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden sm:inline">
                {applyHsaSavings ? hx.hsaOnShort : dict.nav.hsaToggleLabel}
              </span>
              <span className="sm:hidden">{hx.hsaMobileShort}</span>
              <span
                className={`inline-block h-3.5 w-6 rounded-full p-0.5 transition-colors ${
                  applyHsaSavings ? "bg-emerald-400" : "bg-slate-600"
                }`}
              >
                <span
                  className={`block h-2.5 w-2.5 rounded-full bg-white transition-transform ${
                    applyHsaSavings ? "translate-x-2.5" : "translate-x-0"
                  }`}
                />
              </span>
            </button>

            {/* 6-Language Switcher (horizontally scrollable safety on tiny screens) */}
            <nav
              aria-label={hx.langSwitcherAria}
              className="no-scrollbar flex min-w-0 items-center gap-0.5 overflow-x-auto"
            >
              <Globe
                className="mr-1 hidden h-3.5 w-3.5 shrink-0 text-slate-400 sm:block"
                aria-hidden="true"
              />
              {LOCALES.map((loc) => {
                const active = loc === lang;
                return (
                  <Link
                    key={loc}
                    href={getLocalizedHref(switchBasePath, loc)}
                    hrefLang={LOCALE_META[loc].hreflang}
                    className={`shrink-0 rounded px-1.5 py-1 text-[11px] font-bold transition ${
                      active
                        ? "bg-emerald-500 text-slate-950"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {LOCALE_META[loc].shortLabel}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>

      {/* Main White Sticky Header (pinned top-0 with scrolled glass elevation & emerald glow) */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-200 ${
          isScrolled
            ? "border-emerald-500/25 bg-white/95 shadow-[0_6px_24px_-4px_rgba(11,19,43,0.12),0_1px_4px_rgba(16,185,129,0.08)]"
            : "border-slate-200/90 bg-white/95 shadow-[0_1px_12px_rgba(11,31,58,0.05)]"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5">
          {/* Official Evminov Monogram + Wordmark */}
          <Link
            href={getLocalizedHref("/", lang)}
            aria-label={hx.homeAria}
            className="shrink-0 rounded-xl py-0.5 focus-visible:outline-teal-700"
          >
            <EvminovBrandLockup size={38} />
          </Link>

          {/* Center Horizontal Scrollable Navigation with Circular Chevron Arrows ("Птички") */}
          <div className="relative hidden min-w-0 flex-1 items-center lg:flex">
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => scrollNavBy(-200)}
                aria-label={hx.scrollLeftAria}
                className="z-10 mr-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-950"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}

            <nav
              ref={navRef}
              onScroll={syncScrollChevrons}
              aria-label={hx.primaryNavAria}
              className="no-scrollbar flex items-center gap-1 overflow-x-auto scroll-smooth px-1"
            >
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`whitespace-nowrap rounded-lg px-3 py-2 text-[13.5px] transition-colors ${
                      item.highlight
                        ? "font-bold text-emerald-700 hover:bg-emerald-50"
                        : isActive
                        ? "bg-slate-100 font-bold text-[#0B1F3A]"
                        : "font-medium text-slate-600 hover:bg-slate-50 hover:text-[#0B1F3A]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {canScrollRight && (
              <button
                type="button"
                onClick={() => scrollNavBy(200)}
                aria-label={hx.scrollRightAria}
                className="z-10 ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-950"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Right Action Pills: WhatsApp + Patient Portal + Find My Angle + Cart/Order */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* Primary WhatsApp Instant-Chat Pill */}
            <a
              href={SITE_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sendGTMEvent("click_whatsapp", { location: "header_pill" })}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-50 px-3 py-2 text-xs font-extrabold text-emerald-800 shadow-xs transition hover:bg-[#16A34A] hover:text-white"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Patient Portal Outlined Pill */}
            <Link
              href={getLocalizedHref("/portal/", lang)}
              aria-label={hl.patientPortal}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-2 text-xs font-bold text-[#0B1F3A] shadow-xs transition hover:border-emerald-500/60 hover:bg-emerald-50/40 sm:px-3.5 sm:text-[13px]"
            >
              <User className="h-4 w-4 shrink-0 text-emerald-600" />
              <span className="hidden sm:inline">{hl.patientPortal}</span>
              <span className="hidden min-[380px]:inline sm:hidden">{hx.portalShort}</span>
            </Link>

            {/* Find My Angle Pill */}
            <Link
              href={getLocalizedHref("/calculator/", lang)}
              className="hidden xl:inline-flex items-center rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-[13px] font-bold text-[#0B1F3A] shadow-xs transition hover:border-slate-300 hover:bg-slate-50"
            >
              {hl.findMyAngle}
            </Link>

            {/* Cart / Order Soft Pill */}
            <Link
              href={getLocalizedHref("/order/", lang)}
              aria-label={hl.cartOrder}
              onClick={() => sendGTMEvent("click_order_cta", { location: "header_cart" })}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-[#EFF3F8] px-3 py-2 text-xs font-extrabold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white sm:px-4 sm:text-[13px]"
            >
              <ShoppingCart className="h-4 w-4 shrink-0" />
              <span className="hidden min-[410px]:inline">{hl.cartOrder}</span>
            </Link>

            {/* Mobile Hamburger Trigger (WCAG 44x44px touch target) */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={hx.toggleMenuAria}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Thin Clinical Scroll Progress Bar */}
        <div
          aria-hidden="true"
          className="h-[2px] w-full bg-transparent"
        >
          <div
            className="h-full bg-gradient-to-r from-[#023373] via-[#4EABBF] to-emerald-500 transition-[width] duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Mobile Clinical Directory Drawer (scrollable within dvh, clears bottom mobile dock) */}
        {mobileOpen && (
          <div className="max-h-[calc(100dvh-104px)] overflow-y-auto overscroll-contain border-t border-slate-200 bg-white px-4 pb-28 pt-4 shadow-2xl lg:hidden">
            {/* Quick Action Cards */}
            <div className="mb-4 grid grid-cols-2 gap-2.5">
              <Link
                href={getLocalizedHref("/centers/", lang)}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-3"
              >
                <p className="text-xs font-extrabold text-emerald-900">{hl.since1996}</p>
                <p className="mt-0.5 text-[11px] text-emerald-700">{hx.mobileSince1996Sub}</p>
              </Link>
              <Link
                href={getLocalizedHref("/portal/", lang)}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl border border-sky-200 bg-sky-50/70 p-3"
              >
                <p className="text-xs font-extrabold text-[#0B1F3A]">{hl.patientPortal}</p>
                <p className="mt-0.5 text-[11px] text-slate-600">{hx.mobilePortalSub}</p>
              </Link>
            </div>

            <nav aria-label={hx.mobileNavAria} className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex min-h-[44px] items-center rounded-xl px-3.5 py-2.5 text-sm font-semibold ${
                    item.highlight
                      ? "bg-emerald-50 text-emerald-800"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={getLocalizedHref("/calculator/", lang)}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                {hl.findMyAngle}
              </Link>
            </nav>

            <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4">
              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendGTMEvent("click_whatsapp", { location: "mobile_drawer" })}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-4 py-2.5 text-sm font-extrabold text-white shadow-sm hover:bg-emerald-700"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp • {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Current US & Canada 2-Week Shipping Schedule Notice Banner */}
      <div
        role="status"
        className="border-b border-amber-200/80 bg-gradient-to-r from-amber-50 via-emerald-50/60 to-amber-50 text-slate-900"
      >
        <div className="mx-auto flex max-w-[1400px] items-start justify-center gap-2 px-3 py-1.5 text-left text-[11px] font-semibold leading-snug sm:items-center sm:px-4 sm:py-2 sm:text-center sm:text-xs">
          <Truck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-700 sm:mt-0" aria-hidden="true" />
          <span>{hl.shippingNoticeBanner}</span>
        </div>
      </div>
    </>
  );
}
