import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Quote, Star, Loader2, Clapperboard } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  project?: string;
  place: string;
  text: string;
  rating: number;
};

const fallbackTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Senthil Kumar",
    role: "Director of Photography",
    project: "Kollywood Feature Film",
    place: "Chennai",
    text: "The natural lighting inside the Chettinad central courtyard is phenomenal. The 100 KVA silent Caterpillar generator meant we shot sync-sound without a single hum or audio glitch. Completed our 12-day schedule right on time.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Ananya Murthy",
    role: "Line Producer",
    project: "Top OTT Crime Thriller Series",
    place: "Mumbai & Chennai",
    text: "Having the police station lockup set and the modern luxury villa on the exact same property saved our production 3 full days of company shifting. The vanity suites and 50-car parking made handling our 90-member crew effortlessly smooth.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Vikramaditya Rao",
    role: "Commercials Director",
    project: "Automotive & Lifestyle TVCs",
    place: "Bangalore",
    text: "The modern architectural living room, infinity pool deck, and high ceiling acoustics gave our brand campaign a world-class look. The location manager was extremely supportive with light rigging and overnight setup permissions.",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  const { data: testimonials = fallbackTestimonials, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .order("created_at", { ascending: false });

        if (error || !data || data.length === 0) return fallbackTestimonials;
        return data;
      } catch {
        return fallbackTestimonials;
      }
    },
    initialData: fallbackTestimonials,
  });

  useEffect(() => {
    if (testimonials.length === 0) return;
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  if (isLoading && testimonials === fallbackTestimonials) {
    return (
      <div className="flex h-48 items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const t = testimonials[i] || testimonials[0];
  if (!t) return null;

  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="relative rounded-lg border border-amber-500/30 bg-card p-8 text-center shadow-lg">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
          <Quote className="h-6 w-6" />
        </div>
        <p className="mt-4 min-h-24 text-base leading-relaxed text-foreground md:text-lg">
          “{t.text}”
        </p>
        <div className="mt-5 flex justify-center gap-1 text-amber-500">
          {Array.from({ length: t.rating }).map((_, s) => (
            <Star key={s} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-3 font-display text-lg font-bold text-foreground">{t.name}</p>
        <p className="flex items-center justify-center gap-1 text-xs font-semibold text-amber-500">
          <Clapperboard className="h-3 w-3" />
          {t.role || "Filmmaker"} {t.project ? `· ${t.project}` : ""}
        </p>
        <p className="text-xs text-muted-foreground">{t.place}</p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)}
          className="rounded-full border border-border p-2 text-foreground hover:bg-amber-500 hover:text-black transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((item, idx) => (
            <button
              key={item.id || idx}
              type="button"
              aria-label={`Show review ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-6 bg-amber-500" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next review"
          onClick={() => setI((p) => (p + 1) % testimonials.length)}
          className="rounded-full border border-border p-2 text-foreground hover:bg-amber-500 hover:text-black transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
