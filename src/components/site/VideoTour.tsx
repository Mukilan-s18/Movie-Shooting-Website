import { useState } from "react";
import { Play } from "lucide-react";
import { business } from "@/lib/business";

export function VideoTour({ className = "" }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl =
    (business.videoTour.youtubeEmbedUrl ||
      "https://www.youtube.com/embed/SVpk9h9H6_Y?rel=0&modestbranding=1") + "&autoplay=1";

  return (
    <div className={`mx-auto max-w-5xl ${className}`}>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-amber-500/40 bg-black shadow-2xl">
        {isPlaying ? (
          <iframe
            src={embedUrl}
            title="Property Video Tour - Vadapalani Shooting House"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Play Walkthrough Video Tour"
            className="group relative flex h-full w-full items-center justify-center cursor-pointer select-none overflow-hidden"
          >
            {/* Poster Thumbnail */}
            <img
              src="/property/exterior-facade.jpeg"
              alt="Vadapalani Shooting House Property Walkthrough Preview"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Cinema Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 transition-opacity group-hover:opacity-80" />

            {/* Glowing Play Badge */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-black shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-400 sm:h-20 sm:w-20">
                <Play className="ml-1 h-8 w-8 fill-black text-black sm:h-10 sm:w-10" />
              </div>
              <span className="mt-4 rounded-full border border-amber-500/50 bg-black/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 shadow-md backdrop-blur-sm sm:text-sm">
                Watch Property Video Tour
              </span>
              <span className="mt-1 text-[11px] text-white/80">
                Full 2-Floor 2-BHK Walkthrough · 4/5 Varghese Avenue
              </span>
            </div>
          </button>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2 font-medium text-foreground">
          <span className="flex h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse" />
          <span>Walkthrough Video Tour · 2-Floor House (Vadapalani, Chennai)</span>
        </div>
        <a
          href={business.videoTour.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-amber-500 hover:underline"
        >
          Watch on YouTube ↗
        </a>
      </div>
    </div>
  );
}
