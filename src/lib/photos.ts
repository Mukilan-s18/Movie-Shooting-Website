import { supabase } from "@/integrations/supabase/client";
import { galleryItems } from "@/lib/business";

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

export const fallbackPhotos: Photo[] = galleryItems.map((g, i) => ({
  id: `static-${i}`,
  title: g.title,
  place: g.place,
  category: g.category,
  image: g.image,
  media_type: "image",
}));

export const photoCategories = [
  "Mansion & Courtyard",
  "Modern Luxury Villa",
  "Police & Court Sets",
  "Interiors & Hall",
  "Terrace & Outdoor",
  "Makeup & Green Room",
];

/** Fetch gallery photos from the database, with signed URLs for each image. */
export async function fetchPhotos(): Promise<Photo[]> {
  try {
    const { data, error } = await supabase
      .from("photos")
      .select("id, title, place, category, image_path, sort_order, created_at, media_type")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) throw error;
    if (!data || data.length === 0) return fallbackPhotos;

    const paths = data.map((row) => row.image_path);
    const { data: signed } = await supabase.storage
      .from("gallery")
      .createSignedUrls(paths, 60 * 60 * 24);

    const urlByPath = new Map<string, string>();
    signed?.forEach((s) => {
      if (s.path && s.signedUrl) urlByPath.set(s.path, s.signedUrl);
    });

    return data.map((row) => ({
      id: row.id,
      title: row.title,
      place: row.place,
      category: row.category,
      image: urlByPath.get(row.image_path) ?? "",
      path: row.image_path,
      media_type: row.media_type ?? "image",
      sort_order: row.sort_order,
    }));
  } catch (e) {
    console.warn("Using fallback photo gallery data:", e);
    return fallbackPhotos;
  }
}

export const photosQueryOptions = {
  queryKey: ["photos"] as const,
  queryFn: fetchPhotos,
  staleTime: 1000 * 60 * 5,
};
