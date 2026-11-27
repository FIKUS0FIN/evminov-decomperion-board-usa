"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, X, ZoomIn } from "lucide-react";
import { Locale } from "@/i18n/types";
import { getLocalizedHref } from "@/lib/url";
import { PatentDoc, PATENTS } from "@/data/heritage";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export function PatentsLightboxSection({
  lang,
  title,
  subtitle,
}: {
  lang: Locale;
  title: string;
  subtitle: string;
}) {
  const [activeDoc, setActiveDoc] = useState<PatentDoc | null>(null);

  return (
    <section id="patents" className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#023373]">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            <span>Intellectual Property &amp; Registry Scans</span>
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base text-slate-600">{subtitle}</p>
        </div>
        <Link
          href={getLocalizedHref("/centers/", lang)}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 hover:underline"
        >
          <span>Explore Full Heritage &amp; Centers</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Authority Patent KPI Strip */}
      <div className="mt-8 grid grid-cols-2 gap-3 rounded-3xl bg-[#0B1F3A] p-5 text-white sm:grid-cols-5">
        {[
          { value: "US 6,869,387", label: "USPTO Patent Grant" },
          { value: "EP 1 038 512", label: "European Patent (EPO)" },
          { value: "1996–2026", label: "30-Year Continuity" },
          { value: "10-Year", label: "Frame Warranty" },
          { value: "60-Day", label: "Home Evaluation Trial" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-2xl bg-white/[0.06] p-3.5 text-center">
            <p className="font-display text-base font-black text-emerald-400 sm:text-lg">
              {kpi.value}
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-slate-300">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* 6 Interactive Document Scan Cards */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PATENTS.map((doc) => (
          <article
            key={doc.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-teal-600 hover:shadow-lg"
          >
            <button
              type="button"
              onClick={() => setActiveDoc(doc)}
              aria-label={`Inspect ${doc.title} (${doc.docNumber}) scan`}
              className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 text-left"
            >
              <OptimizedImage
                src={doc.image}
                alt={`${doc.title} — ${doc.docNumber}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-extrabold text-slate-950 shadow">
                <ZoomIn className="h-3.5 w-3.5 text-teal-700" />
                Inspect Scan
              </span>
            </button>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700">
                  {doc.badge}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  <CheckCircle2 className="h-3 w-3" /> Verified
                </span>
              </div>
              <h3 className="mt-1.5 font-display text-lg font-black text-slate-950">
                {doc.docNumber}
              </h3>
              <p className="text-xs font-semibold text-slate-500">{doc.office}</p>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
                {doc.caption}
              </p>

              <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3.5">
                <button
                  type="button"
                  onClick={() => setActiveDoc(doc)}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-900 transition hover:border-teal-600 hover:bg-teal-50"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                  Zoom Scan
                </button>
                <a
                  href={doc.registryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 rounded-xl bg-[#0B1F3A] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-teal-800"
                >
                  <span>Registry</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeDoc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeDoc.title} ${activeDoc.docNumber}`}
          onClick={() => setActiveDoc(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-extrabold uppercase text-teal-700">
                  {activeDoc.badge} • {activeDoc.office}
                </span>
                <h3 className="mt-0.5 font-display text-xl font-black text-slate-950">
                  {activeDoc.docNumber} — {activeDoc.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                aria-label="Close document preview"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <OptimizedImage
                src={activeDoc.image}
                alt={`${activeDoc.title} official scan ${activeDoc.docNumber}`}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-contain p-2"
              />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              {activeDoc.caption}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-end gap-3">
              <a
                href={activeDoc.registryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-teal-700 px-4 py-2.5 text-xs font-bold text-white hover:bg-teal-800"
              >
                <span>Open Public Registry Record</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
