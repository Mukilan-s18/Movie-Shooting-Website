import { propertyGallery } from "@/lib/business";

export type Photo = {
  id: string;
  title: string;
  place: string;
  category: string;
  image: string;
  path?: string;
  media_type?: string;
  sort_order?: number;
};

export const fallbackPhotos: Photo[] = propertyGallery.map((g) => ({
  id: g.id,
  title: g.title,
  place: g.place,
  category: g.category,
  image: g.image,
  media_type: "image",
}));

export const photoCategories = [
  "Entrance",
  "Living Hall",
  "Dining Hall",
  "Kitchen",
];

export async function fetchPhotos(): Promise<Photo[]> {
  return fallbackPhotos;
}

export const photosQueryOptions = {
  queryKey: ["photos"] as const,
  queryFn: fetchPhotos,
  staleTime: 1000 * 60 * 5,
};
