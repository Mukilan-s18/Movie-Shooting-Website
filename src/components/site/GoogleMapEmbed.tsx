import { useState, useEffect, useRef } from "react";
import { MapPin, Navigation, ExternalLink, Loader2 } from "lucide-react";
import { business } from "@/lib/business";

interface GoogleMapEmbedProps {
  height?: number | string;
  className?: string;
  title?: string;
}

export function GoogleMapEmbed({
  height = 400,
  className = "",
  title = "Google Maps Location - 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai",
}: GoogleMapEmbedProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is available, start loading when user scrolls within 300px
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin: "300px 0px" },
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    } else {
      // Fallback for older browsers
      setShouldLoad(true);
    }
  }, []);

  const handleManualLoad = () => {
    setShouldLoad(true);
  };

  const heightStyle = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm ${className}`}
      style={{ minHeight: heightStyle }}
    >
      {shouldLoad ? (
        <>
          {!isReady && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-muted/90 p-4 text-center backdrop-blur-xs">
              <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
              <p className="mt-3 text-xs font-semibold text-foreground">
                Connecting to Google Street View & 360° Map...
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                4/5 Varghese Avenue, Ashok Nagar, Vadapalani
              </p>
            </div>
          )}
          <iframe
            src={business.mapsEmbedUrl}
            width="100%"
            height={height}
            style={{ border: 0, minHeight: heightStyle }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title={title}
            onLoad={() => setIsReady(true)}
            className={`w-full transition-opacity duration-500 ${
              isReady ? "opacity-100" : "opacity-0"
            }`}
          />
        </>
      ) : (
        /* Ultra-fast High Performance Map Facade */
        <div
          className="relative flex flex-col items-center justify-center p-6 text-center select-none"
          style={{ minHeight: heightStyle }}
        >
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(#d97706 1px, transparent 1px), linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
              backgroundSize: "24px 24px, 48px 48px, 48px 48px",
            }}
          />

          <div className="relative z-10 max-w-md rounded-xl border border-border/80 bg-background/90 p-6 shadow-md backdrop-blur-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-500">
              <MapPin className="h-6 w-6 animate-bounce" />
            </div>

            <h4 className="mt-3 font-display text-sm font-bold tracking-wide text-foreground">
              4/5 Varghese Avenue, Ashok Nagar
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Vadapalani, Chennai (Chennai Cinema District)
            </p>
            <p className="mt-1 font-mono text-[10px] text-muted-foreground/80">
              13.0467° N, 80.2152° E · 2-Floor Filming Property
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={handleManualLoad}
                className="inline-flex items-center gap-1.5 rounded-md bg-amber-500 px-4 py-2 text-xs font-bold text-black shadow-xs transition-transform hover:-translate-y-0.5 hover:bg-amber-400 cursor-pointer"
              >
                <Navigation className="h-3.5 w-3.5" />
                Load Interactive 360° Map
              </button>

              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                Open Google Maps App
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
