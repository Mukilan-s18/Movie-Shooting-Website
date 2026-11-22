import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ta";

type Translations = {
  [key: string]: {
    en: string;
    ta: string;
  };
};

export const translations: Translations = {
  home: { en: "Home", ta: "முகப்பு" },
  services: { en: "The Property", ta: "வீட்டின் இடங்கள்" },
  gallery: { en: "Photo Gallery", ta: "புகைப்படங்கள்" },
  about: { en: "Specs & Amenities", ta: "விவரக்குறிப்புகள்" },
  contact: { en: "Book Shoot / Recce", ta: "முன்பதிவு செய்ய" },
  heroBadge: {
    en: "Exclusive Movie Shooting Villa · Chennai",
    ta: "சென்னையின் பிரத்யேக திரைப்பட படப்பிடிப்பு இல்லம்",
  },
  heroTitle: {
    en: "Exclusive Film Shooting Villa in Chennai",
    ta: "சென்னையின் பிரத்யேக திரைப்பட படப்பிடிப்பு பங்களா",
  },
  heroSubtitle: {
    en: "A 7,500 sq.ft. luxury private shooting house with double-height living room, master suite, island kitchen, lush lawn, skyline terrace, 100 KVA silent genset and star vanity room for movies, web series & ad films.",
    ta: "திரைப்படங்கள், இணைய தொடர்கள் மற்றும் விளம்பர படங்களுக்கான 7,500 சதுர அடி சொகுசு படப்பிடிப்பு பங்களா - பிரம்மாண்ட ஹால், மாஸ்டர் பெட்ரூம், நவீன சமையலறை, புல்வெளி மற்றும் 100 KVA சைலண்ட் ஜெனரேட்டர் வசதிகளுடன்.",
  },
  viewOurWork: { en: "Explore Property", ta: "வீட்டின் பகுதிகளைப் பார்க்கவும்" },
  watchVideo: { en: "Watch Video Tour", ta: "வீடியோ டூர் பார்க்கவும்" },
  bookRecce: { en: "Book Location Recce", ta: "லொகேஷன் பார்க்க முன்பதிவு செய்க" },
  ourServices: { en: "Property Spaces & Rooms", ta: "வீட்டின் முக்கிய பகுதிகள்" },
  latestWorks: { en: "Property Photo Tour", ta: "புகைப்பட தொகுப்பு" },
  whatFamiliesSay: { en: "Director & Producer Reviews", ta: "இயக்குனர்கள் & தயாரிப்பாளர்கள் கருத்துக்கள்" },
  planningFunction: {
    en: "Planning your next shoot at this property?",
    ta: "இந்த இல்லத்தில் படப்பிடிப்பு நடத்த திட்டமிடுகிறீர்களா?",
  },
  callManager: { en: "Call Location Manager", ta: "லொகேஷன் மேனேஜரை அழைக்கவும்" },
  whatsappUs: { en: "WhatsApp for Recce", ta: "வாட்ஸ்அப் மூலம் தொடர்புகொள்ள" },
};

type I18nContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof translations) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("cinewood_lang") as Language;
    if (stored && (stored === "en" || stored === "ta")) {
      setLang(stored);
    }
  }, []);

  const changeLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("cinewood_lang", newLang);
  };

  const t = (key: keyof typeof translations) => {
    return translations[key]?.[lang] || translations[key]?.["en"] || (key as string);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
