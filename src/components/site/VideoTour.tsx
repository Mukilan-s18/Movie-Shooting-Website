import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Film, HelpCircle } from "lucide-react";
import { business } from "@/lib/business";

export function VideoTour() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showHelper, setShowHelper] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const localSrc = business.videoTour.localSrc;
  const youtubeUrl = business.videoTour.youtubeUrl;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        setHasError(true);
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
        ) : hasError ? (
          /* Sleek placeholder if local video is not yet placed */
          <div className="relative flex h-full w-full flex-col items-center justify-center p-6 text-center">
            {/* Background poster */}
            <img
              src="/property/hero.jpg"
              alt="Property Preview"
              className="absolute inset-0 h-full w-full object-cover opacity-30 blur-[2px]"
            />
            <div className="relative z-10 max-w-md rounded-xl border border-border bg-black/85 p-6 backdrop-blur-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/20 text-amber-500">
                <Film className="h-7 w-7" />
              </div>
              <h4 className="mt-4 font-display text-lg font-bold text-white">
                Property Video Tour Slot
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                Ready to showcase your 4K property walkthrough or drone fly-through.
              </p>
              <div className="mt-4 rounded-md border border-amber-500/40 bg-amber-500/10 p-3 text-left text-[11px] text-amber-300">
                <strong>📍 Where to place your video tour:</strong>
                <p className="mt-1 font-mono text-[10px] text-zinc-200">
                  Save your video file as:
                  <br />
                  <span className="font-bold text-amber-400">public/video/tour.mp4</span>
                </p>
                <p className="mt-1 text-[10px] text-zinc-300">
                  Or paste a YouTube/Vimeo link inside:
                  <br />
                  <span className="font-mono text-amber-400">src/lib/business.ts &rarr; videoTour.youtubeUrl</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Local video tour player */
          <div className="group relative h-full w-full">
            <video
              ref={videoRef}
              src={localSrc}
              poster="/property/hero.jpg"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => setHasError(true)}
              className="h-full w-full object-cover"
              onClick={togglePlay}
            />

            {/* Big center play button when paused */}
            {!isPlaying && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Play video tour"
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 transition-colors hover:bg-black/30"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 text-black shadow-2xl transition-transform hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-black" />
                </div>
              </button>
            )}

            {/* Bottom video controls bar */}
            <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
                  {business.name} · Video Walkthrough
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowHelper(!showHelper)}
                  className="flex items-center gap-1 rounded bg-black/60 px-2 py-1 text-[11px] text-amber-400 hover:bg-black/90"
                >
                  <HelpCircle className="h-3.5 w-3.5" /> Video Placement Info
                </button>
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

      {/* Video file placement guide card underneath */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-card p-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Film className="h-4 w-4 text-amber-500" />
          <span>
            <strong className="text-foreground">Video Tour File Path:</strong>{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-amber-500 font-mono text-[11px]">
              public/video/tour.mp4
            </code>
          </span>
        </div>
        <span className="text-[11px]">
          Also supports YouTube / Vimeo embed links in <code className="text-foreground">src/lib/business.ts</code>
        </span>
      </div>
    </div>
  );
}
