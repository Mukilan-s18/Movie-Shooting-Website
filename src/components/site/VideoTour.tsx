import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Film } from "lucide-react";
import { business } from "@/lib/business";

export function VideoTour() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const localSrc = business.videoTour.localSrc;
  const youtubeUrl = business.videoTour.youtubeUrl;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Video play error:", err);
        });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-amber-500/40 bg-black shadow-2xl">
        {/* If user configured YouTube URL */}
        {youtubeUrl ? (
          <iframe
            src={youtubeUrl}
            title="Property Video Tour"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          /* Real Video tour player using uploaded /video/tour.mp4 */
          <div className="group relative h-full w-full bg-black">
            <video
              ref={videoRef}
              src={localSrc}
              poster="/property/living-hall.jpeg"
              playsInline
              preload="metadata"
              controls={false}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="h-full w-full object-contain cursor-pointer"
              onClick={togglePlay}
            />

            {/* Big center play button when paused */}
            {!isPlaying && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Play video tour"
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/20"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 text-black shadow-2xl transition-transform hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-black" />
                </div>
              </button>
            )}

            {/* Bottom video controls bar */}
            <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="rounded p-1.5 text-white hover:text-amber-400"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-white" />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="rounded p-1.5 text-white hover:text-amber-400"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
                <span className="text-xs font-semibold text-zinc-300">
                  {business.name} · Complete Walkthrough
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleFullscreen}
                  className="rounded p-1.5 text-white hover:text-amber-400"
                  aria-label="Fullscreen"
                >
                  <Maximize className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Property Walkthrough Information banner */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-card p-3.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Film className="h-4 w-4 text-amber-500" />
          <span>
            <strong className="text-foreground">Official Property Video Tour:</strong> Attached from{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-amber-500 font-mono text-[11px]">
              public/property/property/Video tour.mp4
            </code>
          </span>
        </div>
        <span className="text-[11px] text-zinc-400">
          Full HD Walkthrough of Exterior, Living Hall, Dining & Kitchen
        </span>
      </div>
    </div>
  );
}
