import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/lib/photos";

export function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
  onIndexChange,
}: {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onNavigate?: (i: number) => void;
  onIndexChange?: (i: number) => void;
}) {
  const changeIndex = useCallback(
    (newIndex: number) => {
      if (onNavigate) {
        onNavigate(newIndex);
      } else if (onIndexChange) {
        onIndexChange(newIndex);
      }
    },
    [onNavigate, onIndexChange]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") changeIndex((index + 1) % photos.length);
      if (e.key === "ArrowLeft") changeIndex((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, photos.length, onClose, changeIndex]);

  if (index === null) return null;
  const photo = photos[index];
  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md select-none"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 z-50 rounded-full border border-white/30 bg-black/60 p-2.5 text-white transition-all hover:bg-black/90 hover:scale-105"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation();
          changeIndex((index - 1 + photos.length) % photos.length);
        }}
        className="absolute left-3 z-50 rounded-full border border-white/30 bg-black/60 p-3 text-white transition-all hover:bg-amber-500 hover:text-black hover:scale-110 md:left-8"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        {photo.media_type === "video" ? (
          <video
            src={photo.image}
            controls
            autoPlay
            loop
            className="max-h-[75vh] w-full rounded-md object-contain"
          />
        ) : (
          <img
            src={photo.image}
            alt={`${photo.title} - ${photo.place}`}
            className="max-h-[75vh] w-full rounded-md object-contain shadow-2xl"
          />
        )}
        <figcaption className="mt-4 text-center text-white">
          <p className="font-display text-xl font-bold">{photo.title}</p>
          <p className="text-sm text-zinc-300">
            {photo.place} · {index + 1} / {photos.length}
          </p>
        </figcaption>
      </figure>

      <button
        type="button"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation();
          changeIndex((index + 1) % photos.length);
        }}
        className="absolute right-3 z-50 rounded-full border border-white/30 bg-black/60 p-3 text-white transition-all hover:bg-amber-500 hover:text-black hover:scale-110 md:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
