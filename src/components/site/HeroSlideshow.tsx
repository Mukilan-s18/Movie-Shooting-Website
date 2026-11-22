import { useEffect, useState } from "react";
import type { Photo } from "@/lib/photos";

export function HeroSlideshow({ photos }: { photos: Photo[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!photos || photos.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.min(photos.length, 5)); // cycle through top 5
    }, 5000);
    return () => clearInterval(interval);
  }, [photos]);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden bg-black">
        {photos.slice(0, 5).map((photo, index) => {
          const isActive = index === currentIndex;
          const isVideo = photo.media_type === "video" || photo.image.endsWith(".mp4");
          return (
            <div
              key={photo.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {isVideo ? (
                <video
                  src={photo.image}
                  autoPlay={isActive}
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover opacity-80"
                />
              ) : (
                <img
                  src={photo.image}
                  alt={photo.title}
                  className={`h-full w-full object-cover opacity-70 ${
                    isActive ? "animate-ken-burns" : ""
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
