import React, { createContext, useContext, useState } from "react";
import translations from "@/lib/translations";

// ─── Context ──────────────────────────────────────────────────
const LanguageContext = createContext();

// ─── Provider ─────────────────────────────────────────────────
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const t = (key) => translations[lang]?.[key] ?? translations["en"][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
