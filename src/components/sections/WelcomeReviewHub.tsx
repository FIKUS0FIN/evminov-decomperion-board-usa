"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { LiteYouTube } from "@/components/ui/LiteYouTube";
import { sendGTMEvent } from "@/lib/gtm";

const SAMPLE_PROMPTS = [
  "Mounted my Evminov Carpathian pine board to a 16\" drywall stud in 15 minutes. 10 minutes at 15 degrees feels dramatically safer than hanging upside down on an inversion table!",
  "Fast California delivery and sturdy natural wood craftsmanship. Using the Free-Standing Stand in my apartment with zero wall holes — my lower back feels noticeably looser every evening.",
];

export function WelcomeReviewHub() {
  const [draft, setDraft] = useState(SAMPLE_PROMPTS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      sendGTMEvent("review_copy_click", { channel: "google_review_hub" });
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-10">
      <div className="grid gap-6 md:grid-cols-2">
        <LiteYouTube
          videoId={SITE_CONFIG.videos.wallMounting.id}
          title={SITE_CONFIG.videos.wallMounting.title}
          thumbnail={SITE_CONFIG.videos.wallMounting.thumbnail}
        />
        <LiteYouTube
          videoId={SITE_CONFIG.videos.methodDemo.id}
          title={SITE_CONFIG.videos.methodDemo.title}
          thumbnail={SITE_CONFIG.videos.methodDemo.thumbnail}
        />
      </div>

      {/* Smista vCard-inspired 1-Tap Clipboard Review Flywheel */}
      <div className="rounded-3xl border border-amber-200 bg-amber-50/60 p-6 md:p-8">
        <div className="flex items-center gap-1 text-amber-500">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <h2 className="mt-3 font-display text-2xl font-black text-slate-950">
          Love Your Evminov Board? Share Your Experience in 15 Seconds
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          Honest verified owner feedback helps others find a safer alternative to upside-down inversion tables. Customize your note below, copy it with one click, and share it on Google or YouTube.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {SAMPLE_PROMPTS.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setDraft(sample)}
              className="rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 hover:bg-amber-100"
            >
              Template {idx + 1}
            </button>
          ))}
        </div>

        <textarea
          rows={3}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="mt-3 w-full rounded-2xl border border-amber-200 bg-white p-4 text-sm text-slate-900"
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? "Copied to Clipboard!" : "1-Tap Copy Review"}</span>
          </button>
          <a
            href={SITE_CONFIG.youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-50"
          >
            <span>Open Evminov USA Channel</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
