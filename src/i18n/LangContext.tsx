import { createContext, useContext, useState, type ReactNode } from "react";
import type { Lang } from "./translations";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"));
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
