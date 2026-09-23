import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { blogPosts } from '../src/data/blogPosts.js';
import { renderHeader } from '../src/components/Header.js';
import { renderFooter } from '../src/components/Footer.js';
import { renderCheckoutDrawer } from '../src/components/CheckoutDrawer.js';
import { renderOrderConfirmationModal } from '../src/components/OrderConfirmationModal.js';
import { renderCustomerPortalModal } from '../src/components/CustomerPortalModal.js';
import { renderMobileStickyBar } from '../src/components/MobileStickyBar.js';
import { renderPatientPortalPage } from '../src/components/PortalPage.js';
import { renderClinicalCentersPage } from '../src/components/RehabilitationCentersPage.js';
import { renderBlogArticlePage } from '../src/components/BlogArticlePage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const BASE_URL = 'https://evminov-decompression-board-usa.apex-root.com';

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function runPrerender() {
  console.log('🚀 Starting Multipage Hub & Spoke SSG Pre-rendering...');

  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ dist/index.html not found! Run "vite build" first.');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

  // Helper to construct a customized page from base template
  function generateHtmlPage({
    title,
    description,
    keywords,
    canonicalPath,
    appHtml,
    jsonLdSchema,
    ogType = 'article',
    articleMeta = null,
  }) {
    let pageHtml = baseTemplate;

    // 1. Replace Title
    pageHtml = pageHtml.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${escapeHtml(title)}</title>`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="title" content="${escapeHtml(title)}" />`
    );

    // 2. Replace Description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(description)}" />`
    );

    // 2.5 Replace Keywords
    if (keywords) {
      pageHtml = pageHtml.replace(
        /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="keywords" content="${escapeHtml(keywords)}" />`
      );
    }

    // 3. Replace Canonical
    const fullCanonical = `${BASE_URL}${canonicalPath}`;
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${fullCanonical}" />`
    );

    // 4. Replace OG Tags
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(title)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(description)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${fullCanonical}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:type" content="${ogType}" />`
    );

    // 4.5 Article specific meta tags
    if (articleMeta) {
      const tagElements = articleMeta.tags && Array.isArray(articleMeta.tags)
        ? articleMeta.tags.map((t) => `<meta property="article:tag" content="${escapeHtml(t)}" />`).join('\n    ')
        : '';
      const extraTags = `
    <meta property="article:published_time" content="${articleMeta.publishedTime || '2026-09-01T00:00:00Z'}" />
    <meta property="article:modified_time" content="2026-09-23T10:00:00Z" />
    <meta property="article:author" content="${escapeHtml(articleMeta.author || 'Evminov Spine Systems LLC')}" />
    <meta property="article:section" content="${escapeHtml(articleMeta.section || 'Spine Health')}" />
    ${tagElements}
      `;
      pageHtml = pageHtml.replace('</head>', `${extraTags}\n  </head>`);
    }

    // 5. Replace Twitter Tags
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(title)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(description)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:url" content="${fullCanonical}" />`
    );

    // 6. Inject Schema.org JSON-LD
    if (jsonLdSchema) {
      const schemaString = JSON.stringify(jsonLdSchema, null, 2);
      pageHtml = pageHtml.replace(
        /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
        `<script type="application/ld+json">\n${schemaString}\n    </script>`
      );
    }

    // 7. Inject Server-Rendered HTML into #app
    pageHtml = pageHtml.replace(
      /<div id="app">[\s\S]*?<\/div>/i,
      `<div id="app">\n${appHtml}\n</div>`
    );

    return pageHtml;
  }

  // -------------------------------------------------------------
  // ROUTE 1: /centers (Rehabilitation Centers Hub)
  // -------------------------------------------------------------
  const centersDir = path.join(distDir, 'centers');
  fs.mkdirSync(centersDir, { recursive: true });

  const centersAppHtml = `
    ${renderHeader()}
    <main id="main-content">
      ${renderClinicalCentersPage()}
    </main>
    ${renderFooter()}
    ${renderCheckoutDrawer()}
    ${renderOrderConfirmationModal()}
    ${renderCustomerPortalModal()}
    ${renderMobileStickyBar()}
  `;

  const centersSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalOrganization',
        '@id': `${BASE_URL}/centers#organization`,
        name: 'Evminov Vertebral Health Center & Clinical Network',
        url: `${BASE_URL}/centers`,
        logo: `${BASE_URL}/images/authentic/evminov-official-logo.png`,
        foundingDate: '1997',
        founder: {
          '@type': 'Person',
          name: 'Vyacheslav Evminov'
        },
        medicalSpecialty: [
          'https://schema.org/PhysicalMedicineAndRehabilitation',
          'https://schema.org/Orthopedics'
        ],
        description: 'World-renowned vertebral rehabilitation center treating scoliosis, herniated discs, and posture disorders across 40+ countries and military rehabilitation hospitals.'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BASE_URL}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Rehabilitation Centers',
            item: `${BASE_URL}/centers`
          }
        ]
      }
    ]
  };

  const centersHtml = generateHtmlPage({
    title: 'Evminov Clinical Centers & Heritage | 40+ Global Clinics & Military Care',
    description: 'Discover 30 years of clinical spine rehabilitation, inventor Vyacheslav Evminov patented methodology, and military hospital recovery programs across 40+ countries.',
    keywords: 'evminov vertebral health center, kyiv spine clinic, 30 years spine rehabilitation, vyacheslav evminov clinical trials, military spine hospital rehabilitation, scoliosis treatment center europe',
    canonicalPath: '/centers',
    appHtml: centersAppHtml,
    jsonLdSchema: centersSchema,
    ogType: 'website'
  });

  fs.writeFileSync(path.join(centersDir, 'index.html'), centersHtml, 'utf-8');
  console.log('  ✓ Generated: dist/centers/index.html');

  // -------------------------------------------------------------
  // ROUTE 2: /portal (Patient Onboarding & Video Protocol Hub)
  // -------------------------------------------------------------
  const portalDir = path.join(distDir, 'portal');
  fs.mkdirSync(portalDir, { recursive: true });

  const portalAppHtml = renderPatientPortalPage();
  const portalSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/portal#webpage`,
        name: 'Patient Rehabilitation Portal | Evminov Spine Systems',
        description: 'Access your personalized 30-day spine rehabilitation program, HD video exercise protocols, and clinical doctor follow-up.'
      },
      {
        '@type': 'Course',
        '@id': `${BASE_URL}/portal#course`,
        name: '30-Day Clinical Spine Rehabilitation & Decompression Video Program',
        description: 'Comprehensive step-by-step video training course for conservative recovery from lumbar disc herniation, sciatica, and postural deformities on the Evminov simulator.',
        provider: {
          '@type': 'Organization',
          name: 'Evminov Spine Systems LLC',
          sameAs: `${BASE_URL}/`
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BASE_URL}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Patient Portal',
            item: `${BASE_URL}/portal`
          }
        ]
      }
    ]
  };

  const portalHtml = generateHtmlPage({
    title: 'Patient Rehabilitation Portal | Evminov Spine Systems',
    description: 'Access your personalized 30-day spine rehabilitation video program, clinical exercise protocols, and doctor follow-up records.',
    keywords: 'evminov patient portal, 30 day spine recovery video protocols, spinal decompression video course, board assembly guide, glisson loop exercise protocol',
    canonicalPath: '/portal',
    appHtml: portalAppHtml,
    jsonLdSchema: portalSchema,
    ogType: 'website'
  });

  fs.writeFileSync(path.join(portalDir, 'index.html'), portalHtml, 'utf-8');
  console.log('  ✓ Generated: dist/portal/index.html');

  // -------------------------------------------------------------
  // ROUTE 3: 8 Clinical Blog Articles (Spokes in Hub & Spoke)
  // -------------------------------------------------------------
  for (const post of blogPosts) {
    const postDir = path.join(distDir, 'blog', post.slug);
    fs.mkdirSync(postDir, { recursive: true });

    const postAppHtml = `
      ${renderHeader()}
      <main id="main-content">
        ${renderBlogArticlePage(post)}
      </main>
      ${renderFooter()}
      ${renderCheckoutDrawer()}
      ${renderOrderConfirmationModal()}
      ${renderCustomerPortalModal()}
      ${renderMobileStickyBar()}
    `;

    const postKeywordsString = post.keywords ? post.keywords.join(', ') : 'spinal decompression, herniated disc, sciatica';

    const postSchemaGraph = [
      {
        '@type': ['MedicalWebPage', 'BlogPosting'],
        '@id': `${BASE_URL}/blog/${post.slug}#webpage`,
        url: `${BASE_URL}/blog/${post.slug}`,
        name: post.title,
        description: post.metaDesc || post.excerpt,
        headline: post.title,
        keywords: postKeywordsString,
        image: `${BASE_URL}/images/social/evminov-social-preview.jpg`,
        datePublished: '2026-09-01T00:00:00Z',
        dateModified: '2026-09-23T10:00:00Z',
        inLanguage: 'en-US',
        articleSection: post.category,
        wordCount: post.wordCount,
        author: {
          '@type': 'Person',
          name: post.author ? post.author.name : 'Vyacheslav Evminov',
          jobTitle: post.author ? post.author.title : 'Spine Rehabilitation Specialist'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Evminov Spine Systems LLC',
          logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/images/authentic/evminov-official-logo.png`
          }
        },
        mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
        medicalAudience: {
          '@type': 'MedicalAudience',
          audienceType: 'Patients, Physical Therapists, Strength Athletes'
        },
        about: {
          '@type': 'MedicalCondition',
          name: post.category
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BASE_URL}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Clinical Guides',
            item: `${BASE_URL}/#blog`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.category,
            item: `${BASE_URL}/#blog`
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: post.title,
            item: `${BASE_URL}/blog/${post.slug}`
          }
        ]
      }
    ];

    if (post.paa && post.paa.length > 0) {
      postSchemaGraph.push({
        '@type': 'FAQPage',
        mainEntity: post.paa.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      });
    }

    const postSchema = {
      '@context': 'https://schema.org',
      '@graph': postSchemaGraph
    };

    const postHtml = generateHtmlPage({
      title: post.metaTitle || `${post.title} | Evminov Spine Systems`,
      description: post.metaDesc || post.excerpt,
      keywords: postKeywordsString,
      canonicalPath: `/blog/${post.slug}`,
      appHtml: postAppHtml,
      jsonLdSchema: postSchema,
      ogType: 'article',
      articleMeta: {
        publishedTime: '2026-09-01T00:00:00Z',
        author: post.author ? post.author.name : 'Vyacheslav Evminov',
        section: post.category,
        tags: post.keywords
      }
    });

    fs.writeFileSync(path.join(postDir, 'index.html'), postHtml, 'utf-8');
    console.log(`  ✓ Generated: dist/blog/${post.slug}/index.html`);
  }

  console.log('🎉 Successfully pre-rendered all 10 Hub & Spoke routes to static HTML!');
}

runPrerender().catch((err) => {
  console.error('❌ Error during pre-rendering:', err);
  process.exit(1);
});
