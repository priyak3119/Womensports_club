import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ar";

type LangContextType = {
  lang: Lang;
  toggleLang: () => void;
};

const LanguageContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
};
