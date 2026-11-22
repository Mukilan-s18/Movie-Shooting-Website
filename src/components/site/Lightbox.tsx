import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/lib/photos";

export function Lightbox({
  photos,
  index,
  onClose,
  onIndexChange,
}: {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, photos.length, onClose, onIndexChange]);

  if (index === null) return null;
  const photo = photos[index];
  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-maroon-deep/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-sm border border-background/30 p-2 text-background hover:bg-background/10"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange((index - 1 + photos.length) % photos.length);
        }}
        className="absolute left-3 rounded-full border border-background/30 p-2 text-background hover:bg-background/10 md:left-8"
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
            className="max-h-[75vh] w-full rounded-sm object-contain"
          />
        ) : (
          <img
            src={photo.image}
            alt={`${photo.title} - flower decoration at ${photo.place}`}
            className="max-h-[75vh] w-full rounded-sm object-contain"
          />
        )}
        <figcaption className="mt-4 text-center text-background">
          <p className="font-display text-xl font-semibold">{photo.title}</p>
          <p className="text-sm text-background/70">
            {photo.place} · {index + 1} / {photos.length}
          </p>
        </figcaption>
      </figure>

      <button
        type="button"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange((index + 1) % photos.length);
        }}
        className="absolute right-3 rounded-full border border-background/30 p-2 text-background hover:bg-background/10 md:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
