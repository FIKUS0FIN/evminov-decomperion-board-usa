"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { sendGTMEvent } from "@/lib/gtm";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  thumbnail: string;
  badge?: string;
  durationLabel?: string;
  subtitle?: string;
  featured?: boolean;
}

export function LiteYouTube({
  videoId,
  title,
  thumbnail,
  badge,
  durationLabel,
  subtitle,
  featured = false,
}: LiteYouTubeProps) {
  const [activated, setActivated] = useState(false);

  const handleActivate = () => {
    setActivated(true);
    sendGTMEvent("video_play", { video_id: videoId, video_title: title });
  };

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-950 ${
        featured
          ? "border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-emerald-400/20"
          : "border border-slate-200/80 shadow-lg"
      }`}
    >
      {activated ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={handleActivate}
          aria-label={`Play video: ${title}`}
          className="group relative block h-full w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400"
        >
          <OptimizedImage
            src={thumbnail}
            alt={title}
            fill
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 58vw"
                : "(max-width: 768px) 100vw, 42vw"
            }
            className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/25 transition-opacity duration-300 group-hover:via-slate-950/15" />

          {/* Top Metadata Pills */}
          {(badge || durationLabel) && (
            <div className="absolute left-3.5 right-3.5 top-3.5 flex items-center justify-between gap-2">
              {badge ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-slate-950/80 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                  <span>{badge}</span>
                </span>
              ) : (
                <span />
              )}
              {durationLabel && (
                <span className="rounded-full border border-white/15 bg-slate-950/85 px-2.5 py-1 font-mono text-[11px] font-bold text-white backdrop-blur-md">
                  {durationLabel}
                </span>
              )}
            </div>
          )}

          {/* Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`relative flex items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-400 ${
                featured
                  ? "h-16 w-16 ring-8 ring-emerald-400/25 sm:h-20 sm:w-20"
                  : "h-14 w-14 ring-4 ring-white/30 sm:h-16 sm:w-16"
              }`}
            >
              <Play
                className={
                  featured
                    ? "ml-1 h-7 w-7 fill-current sm:h-9 sm:w-9"
                    : "ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7"
                }
              />
            </span>
          </div>

          {/* Bottom Caption */}
          <div className="absolute bottom-3.5 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5">
            <p
              className={`font-display font-extrabold text-white drop-shadow ${
                featured ? "text-base sm:text-lg" : "text-sm"
              }`}
            >
              {title}
            </p>
            {subtitle && (
              <p className="mt-0.5 line-clamp-1 text-xs font-medium text-slate-200/90 drop-shadow">
                {subtitle}
              </p>
            )}
          </div>
        </button>
      )}
    </div>
  );
}
