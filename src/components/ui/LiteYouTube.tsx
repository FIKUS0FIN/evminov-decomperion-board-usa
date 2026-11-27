"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { sendGTMEvent } from "@/lib/gtm";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  thumbnail: string;
}

export function LiteYouTube({ videoId, title, thumbnail }: LiteYouTubeProps) {
  const [activated, setActivated] = useState(false);

  const handleActivate = () => {
    setActivated(true);
    sendGTMEvent("video_play", { video_id: videoId, video_title: title });
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-lg">
      {activated ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={handleActivate}
          aria-label={`Play video: ${title}`}
          className="group relative block h-full w-full text-left"
        >
          <OptimizedImage
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 text-white shadow-2xl ring-4 ring-white/30 transition-transform group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-sm font-bold text-white drop-shadow">{title}</p>
          </div>
        </button>
      )}
    </div>
  );
}
