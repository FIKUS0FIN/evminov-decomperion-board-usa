import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { inter, jakarta, onest } from "@/lib/fonts";
import { Locale, LOCALE_META } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/site-config";
import { IS_CANADA } from "@/lib/region-config";
import { getCanonicalUrl, getHreflangAlternates } from "@/lib/url";
import { CONSENT_KEY } from "@/lib/consent";
import { HsaSavingsProvider } from "@/context/HsaSavingsContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StickyMobileDock } from "@/components/layout/StickyMobileDock";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { OrganizationAndWebsiteSchema } from "@/components/seo/JsonLd";
import { WebMcpInitializer } from "@/components/seo/WebMcpInitializer";
import { AIChatWidget } from "@/components/ui/AIChatWidget";

export const sharedViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b1f3a",
  interactiveWidget: "resizes-content",
};

const CANADA_HOME_META: Record<
  Locale,
  { siteTitle: string; siteDescription: string; keywords: string[] }
> = {
  en: {
    siteTitle: "Evminov Spine Systems Canada | Inclined Spine Decompression Board (CAD)",
    siteDescription:
      "Authentic handcrafted Carpathian pine Evminov spine decompression boards shipped across Canada (all 13 provinces) in CAD. Safer 8°–35° alternative to inversion tables, 60-day trial & itemized Extended Health / HSA receipt.",
    keywords: [
      "evminov board canada",
      "spinal decompression board canada",
      "inversion table alternative canada",
      "herniated disc home relief canada",
      "extended health benefits spine equipment",
    ],
  },
  es: {
    siteTitle: "Evminov Spine Systems Canadá | Tabla de Descompresión Espinal (CAD)",
    siteDescription:
      "Tablas Evminov originales de pino de los Cárpatos en Canadá (precios en CAD). Alternativa segura de 8°–35° a las mesas de inversión, envío a las 13 provincias y prueba de 60 días.",
    keywords: [
      "tabla evminov canada",
      "descompresion espinal canada",
      "alternativa mesa de inversion canada",
    ],
  },
  fr: {
    siteTitle: "Evminov Spine Systems Canada | Planche de Décompression Vertébrale (CAD)",
    siteDescription:
      "Planches Evminov authentiques en pin des Carpates livrées partout au Canada en CAD (Québec, Ontario et 13 provinces). Alternative sûre 8°–35° aux tables d'inversion, essai 60 jours et reçu d'assurance.",
    keywords: [
      "planche evminov canada",
      "decompression vertebrale quebec",
      "alternative table inversion canada",
      "soulagement dos sciatique montreal",
    ],
  },
  de: {
    siteTitle: "Evminov Spine Systems Kanada | Wirbelsäulen-Dekompressionsboard (CAD)",
    siteDescription:
      "Authentische handgefertigte Evminov Boards aus Karpaten-Kiefer mit Versand in ganz Kanada (Preise in CAD). Sichere 8°–35° Alternative zur Inversionsbank, 60 Tage Test & Quittung.",
    keywords: [
      "evminov board kanada",
      "wirbelsäulendekompression kanada",
      "alternative inversionsbank kanada",
    ],
  },
  uk: {
    siteTitle: "Evminov Spine Systems Канада | Оригінальний Профілактор Євмінова (CAD)",
    siteDescription:
      "Оригінальні дошки (Профілактори) Євмінова у Канаді з цінами в CAD і доставкою в усі 13 провінцій (Онтаріо, Квебек, Британська Колумбія, Альберта). Безпечна декомпресія 8°–35°, 60 днів тесту та чек для Extended Health.",
    keywords: [
      "профілактор євмінова канада",
      "дошка євмінова купити канада",
      "декомпресія хребта канада",
      "альтернатива інверсійному столу канада",
    ],
  },
  ru: {
    siteTitle: "Evminov Spine Systems Канада | Оригинальная Доска Евминова (CAD)",
    siteDescription:
      "Оригинальные доски Евминова в Канаде в CAD с доставкой во все 13 провинций (Торонто, Монреаль, Ванкувер, Калгари). Безопасная декомпрессия 8°–35°, 60 дней теста и чек для страховки.",
    keywords: [
      "доска евминова канада",
      "профилактор евминова купить канада",
      "декомпрессия позвоночника канада",
    ],
  },
};

export function getSharedMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  const activeMeta = IS_CANADA ? CANADA_HOME_META[lang] : dict.meta;
  const canonical = getCanonicalUrl("/", lang);
  const ogLocale = IS_CANADA ? `${lang}_CA` : LOCALE_META[lang].ogLocale;
  const googleVerify = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined;
  const bingVerify = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || undefined;

  return {
    metadataBase: new URL(SITE_CONFIG.canonicalOrigin),
    title: {
      default: activeMeta.siteTitle,
      template: IS_CANADA ? "%s | Evminov Canada" : "%s | Evminov USA",
    },
    description: activeMeta.siteDescription,
    keywords: activeMeta.keywords,
    alternates: {
      canonical,
      languages: getHreflangAlternates("/"),
    },
    verification:
      googleVerify || bingVerify
        ? {
            google: googleVerify,
            other: bingVerify ? { "msvalidate.01": bingVerify } : undefined,
          }
        : undefined,
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: canonical,
      siteName: SITE_CONFIG.legalName,
      title: activeMeta.siteTitle,
      description: activeMeta.siteDescription,
      images: [
        {
          url: `${SITE_CONFIG.canonicalOrigin}/images/social/evminov-decompression-studio-preview.jpg`,
          width: 1200,
          height: 630,
          alt: "Evminov Spine Decompression Board handcrafted in Carpathian pine",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: activeMeta.siteTitle,
      description: activeMeta.siteDescription,
      images: [
        `${SITE_CONFIG.canonicalOrigin}/images/social/evminov-decompression-studio-preview.jpg`,
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function WebsiteLayout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  const dict = getDictionary(lang);

  // Smista-parity unconditional Consent Mode v2 + Clarity full coverage bootstrap
  const consentInitScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.clarity = window.clarity || function(){(window.clarity.q = window.clarity.q || []).push(arguments);};
window.clarity('consent');
window.clarity('consentv2', { ad_Storage: 'granted', analytics_Storage: 'granted' });
gtag('consent', 'default', {
  ad_storage: 'granted',
  analytics_storage: 'granted',
  ad_personalization: 'granted',
  ad_user_data: 'granted',
  functionality_storage: 'granted',
  personalization_storage: 'granted',
  security_storage: 'granted'
});
gtag('set', 'ads_data_redaction', false);
gtag('set', 'url_passthrough', true);
(function(){
  try {
    var c = localStorage.getItem('${CONSENT_KEY}');
    if (c) {
      window.clarity('set', 'cookie_banner_choice', c);
      gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_personalization: 'granted',
        ad_user_data: 'granted',
        functionality_storage: 'granted',
        personalization_storage: 'granted',
        security_storage: 'granted'
      });
    }
  } catch(e) {}
})();
`;

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon-48x48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="ai-catalog" href="/.well-known/ai-catalog.json" />
        <link rel="api-catalog" href="/.well-known/api-catalog" />
        <link
          rel="alternate"
          type="text/markdown"
          href="/llms.txt"
          title="Evminov Spine Systems LLM Index"
        />
        <link
          rel="alternate"
          type="text/markdown"
          href="/llms-full.txt"
          title="Evminov Spine Systems Complete AI Knowledge Base"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="Evminov Spine Systems RSS Feed"
        />
        <script
          id="consent-defaults"
          dangerouslySetInnerHTML={{ __html: consentInitScript }}
        />
        <OrganizationAndWebsiteSchema lang={lang} />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable} ${onest.variable} font-sans antialiased bg-white text-slate-900`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:rounded-xl focus:bg-slate-950 focus:px-4 focus:py-2.5 focus:font-bold focus:text-white focus:shadow-xl"
        >
          {dict.nav.skipToContent}
        </a>
        <GoogleTagManager />
        <WebMcpInitializer />
        <ConsentBanner lang={lang} />
        <HsaSavingsProvider>
          <div className="flex min-h-screen flex-col">
            <Header lang={lang} />
            <main
              id="main-content"
              className="relative z-0 flex-grow"
            >
              <Breadcrumbs lang={lang} />
              {children}
            </main>
            <Footer lang={lang} />
            <StickyMobileDock lang={lang} />
            <AIChatWidget lang={lang} />
          </div>
        </HsaSavingsProvider>
      </body>
    </html>
  );
}
