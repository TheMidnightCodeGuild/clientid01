import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * LanguageSwitcher
 * A compact pill toggle that switches between English and Hindi.
 * Designed to sit inside the navbar without disrupting existing layout.
 */
const LanguageSwitcher = () => {
  const { lang, toggleLanguage } = useLanguage();
  const isHindi = lang === "hi";

  return (
    <button
      id="language-switcher-btn"
      onClick={toggleLanguage}
      title={isHindi ? "Switch to English" : "हिंदी में देखें"}
      aria-label={isHindi ? "Switch to English" : "Switch to Hindi"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        border: "1.5px solid #0B2C4D",
        borderRadius: "999px",
        padding: "4px 10px",
        background: isHindi ? "#0B2C4D" : "transparent",
        cursor: "pointer",
        transition: "all 0.22s ease",
        fontSize: "13px",
        fontWeight: 600,
        color: isHindi ? "#ffffff" : "#0B2C4D",
        letterSpacing: "0.03em",
        whiteSpace: "nowrap",
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      {/* Flag icon */}
      <span style={{ fontSize: "15px", lineHeight: 1 }}>
        {isHindi ? "🇮🇳" : "🇬🇧"}
      </span>

      {/* Label shows the CURRENT language */}
      <span style={{ fontFamily: "inherit" }}>
        {isHindi ? "हिंदी" : "EN"}
      </span>

      {/* Animated pill to indicate the other option */}
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "3px",
          background: isHindi ? "rgba(255,255,255,0.15)" : "#0B2C4D",
          color: "#fff",
          borderRadius: "999px",
          padding: "2px 7px",
          fontSize: "11px",
          fontWeight: 700,
          transition: "background 0.22s ease",
        }}
      >
        {isHindi ? "EN" : "HI"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
