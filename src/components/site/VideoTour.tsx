import { business } from "@/lib/business";

export function VideoTour({ className = "" }: { className?: string }) {
  const embedUrl =
    business.videoTour.youtubeEmbedUrl ||
    "https://www.youtube.com/embed/SVpk9h9H6_Y?rel=0&modestbranding=1";

  return (
    <div className={`mx-auto max-w-5xl ${className}`}>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-amber-500/40 bg-black shadow-2xl">
        <iframe
          src={embedUrl}
          title="Property Video Tour - Movie Shooting House Vadapalani"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
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
