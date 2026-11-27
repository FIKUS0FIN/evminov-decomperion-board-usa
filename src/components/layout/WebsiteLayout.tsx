import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { inter, jakarta } from "@/lib/fonts";
import { Locale, LOCALE_META } from "@/i18n/types";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/site-config";
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
};

export function getSharedMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  const canonical = getCanonicalUrl("/", lang);
  return {
    metadataBase: new URL(SITE_CONFIG.canonicalOrigin),
    title: {
      default: dict.meta.siteTitle,
      template: "%s | Evminov Spine Systems",
    },
    description: dict.meta.siteDescription,
    keywords: dict.meta.keywords,
    alternates: {
      canonical,
      languages: getHreflangAlternates("/"),
    },
    openGraph: {
      type: "website",
      locale: LOCALE_META[lang].ogLocale,
      url: canonical,
      siteName: SITE_CONFIG.brandName,
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
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
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      images: [
        `${SITE_CONFIG.canonicalOrigin}/images/social/evminov-decompression-studio-preview.jpg`,
      ],
    },
    robots: {
      index: true,
      follow: true,
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

  // Genuine Consent Mode v2: default denied until visitor selects their choice
  const consentInitScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.clarity = window.clarity || function(){(window.clarity.q = window.clarity.q || []).push(arguments);};
gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_personalization: 'denied',
  ad_user_data: 'denied',
  functionality_storage: 'granted',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500
});
(function(){
  try {
    var c = localStorage.getItem('${CONSENT_KEY}');
    if (c === 'all' || c === 'analytics' || c === 'marketing') {
      var a = (c === 'all' || c === 'analytics') ? 'granted' : 'denied';
      var m = (c === 'all' || c === 'marketing') ? 'granted' : 'denied';
      gtag('consent', 'update', {
        ad_storage: m,
        analytics_storage: a,
        ad_personalization: m,
        ad_user_data: m,
        personalization_storage: m
      });
      window.clarity('consentv2', { ad_Storage: m, analytics_Storage: a });
      window.clarity('set', 'cookie_banner_choice', c);
    }
  } catch(e) {}
})();
`;

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-white text-slate-900`}
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
              className="relative z-0 flex-grow pb-20 md:pb-0"
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
