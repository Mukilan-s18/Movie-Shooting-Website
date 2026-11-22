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
  services: { en: "Sets & Spaces", ta: "அரங்குகள் & இடங்கள்" },
  gallery: { en: "Gallery", ta: "புகைப்படங்கள்" },
  about: { en: "About & Specs", ta: "விவரக்குறிப்புகள்" },
  contact: { en: "Book Shoot / Recce", ta: "முன்பதிவு செய்ய" },
  heroBadge: {
    en: "Chennai's Premier Film & OTT Shooting Destination",
    ta: "சென்னையின் முன்னணி திரைப்பட மற்றும் ஓடிடி படப்பிடிப்பு தளம்",
  },
  heroTitle: {
    en: "The Ultimate Movie Shooting House & Studios in Chennai",
    ta: "சென்னையின் முன்னணி திரைப்பட படப்பிடிப்பு இல்லம் மற்றும் அரங்குகள்",
  },
  heroSubtitle: {
    en: "Heritage Chettinad courtyard bungalows, modern luxury villas, standing police & courtroom sets, 100 KVA silent power backup and star vanity suites for movies, web series & commercials.",
    ta: "திரைப்படங்கள், இணைய தொடர்கள் மற்றும் விளம்பர படங்களுக்கான பாரம்பரிய செட்டிநாடு இல்லம், நவீன சொகுசு பங்களா, காவல் நிலையம், நீதிமன்ற அரங்குகள் மற்றும் முழுமையான படப்பிடிப்பு வசதிகள்.",
  },
  viewOurWork: { en: "Explore Shooting Sets", ta: "படப்பிடிப்பு தளங்களை ஆராய்க" },
  bookRecce: { en: "Book Location Recce", ta: "லொகேஷன் பார்க்க முன்பதிவு செய்க" },
  ourServices: { en: "Standing Sets & Production Spaces", ta: "தயாரான படப்பிடிப்பு அரங்குகள்" },
  latestWorks: { en: "Featured Shooting Locations", ta: "சிறப்பு படப்பிடிப்பு தளங்கள்" },
  whatFamiliesSay: { en: "Director & Producer Reviews", ta: "இயக்குனர்கள் & தயாரிப்பாளர்கள் கருத்துக்கள்" },
  planningFunction: {
    en: "Planning your next feature film or web series shoot?",
    ta: "உங்கள் அடுத்த திரைப்பட படப்பிடிப்புக்கு இடம் தேடுகிறீர்களா?",
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
