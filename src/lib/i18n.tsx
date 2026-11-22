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
  services: { en: "Spaces", ta: "வீட்டின் இடங்கள்" },
  gallery: { en: "Gallery", ta: "புகைப்படங்கள்" },
  about: { en: "About", ta: "எங்களை பற்றி" },
  contact: { en: "Contact", ta: "தொடர்பு" },
  heroBadge: {
    en: "Vadapalani · Ashok Nagar, Chennai",
    ta: "வடபழனி · அசோக் நகர், சென்னை",
  },
  heroTitle: {
    en: "Vadapalani Shooting House",
    ta: "வடபழனி திரைப்பட படப்பிடிப்பு இல்லம்",
  },
  heroSubtitle: {
    en: "2-Floor independent house with an empty big entrance. 2 BHK on each floor, versatile for middle class to rich house setups for movies, TV serials, and web series.",
    ta: "2 தளங்கள் கொண்ட தனி இல்லம் - விசாலமான முன் நுழைவு வாயில், ஒவ்வொரு தளத்திலும் 2 BHK அமைப்பு. நடுத்தர வர்க்கம் முதல் பணக்கார குடும்ப காட்சிகள் வரை படம்பிடிக்க ஏற்றது.",
  },
  viewOurWork: { en: "View Property Spaces", ta: "வீட்டின் பகுதிகளைப் பார்க்கவும்" },
  watchVideo: { en: "Watch Video Tour", ta: "வீடியோ டூர் பார்க்கவும்" },
  bookRecce: { en: "Book Location Recce", ta: "லொகேஷன் பார்க்க முன்பதிவு செய்க" },
  ourServices: { en: "Property Spaces", ta: "வீட்டின் முக்கிய பகுதிகள்" },
  latestWorks: { en: "Property Photos", ta: "புகைப்பட தொகுப்பு" },
  callManager: { en: "Call for Booking", ta: "அழைக்க" },
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
