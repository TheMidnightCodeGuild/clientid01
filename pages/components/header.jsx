import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

// ─── Language Picker Dropdown ──────────────────────────────────────────────────
function LanguagePicker() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const options = [
    { code: "en", label: t("english"), flag: "🇬🇧" },
    { code: "hi", label: t("hindi"), flag: "🇮🇳" },
  ];

  const current = options.find((o) => o.code === lang);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-medium transition-all duration-200 select-none"
        aria-label="Language selector"
        aria-expanded={open}
      >
        {/* Globe icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-blue-600 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
        <span>{current?.flag}</span>
        <span className="hidden sm:inline">{current?.label}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M2 5L8 11L14 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 z-[200] ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        {/* Header label */}
        <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400 border-b border-gray-100">
          {t("language")}
        </div>
        {options.map((opt) => (
          <button
            key={opt.code}
            onClick={() => {
              setLang(opt.code);
              setOpen(false);
            }}
            className={`flex items-center gap-2 w-full px-3 py-2.5 text-sm font-medium transition-colors duration-150 ${
              lang === opt.code
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span className="text-base">{opt.flag}</span>
            {opt.label}
            {lang === opt.code && (
              <svg
                className="ml-auto w-4 h-4 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Navbar ───────────────────────────────────────────────────────────────
const Navbar = () => {
  const { t } = useLanguage();
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      {/* ═══════════════════════════════════════════
          DESKTOP NAVBAR  —  visible on md and above
      ═══════════════════════════════════════════ */}
      <nav className="hidden md:flex bg-white shadow-lg font-dm fixed top-0 w-full z-50">
        <div className="lg:max-w-[1300px] w-full mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                className="w-auto h-20"
                src="/images/logo.jpeg"
                alt="Sankalpshree-wealth logo"
                width={60}
                height={60}
                priority
              />
              <span className="text-theme1 text-lg font-lexend font-bold leading-tight uppercase tracking-[0.1rem]">
                Sankalpshree <br /> wealth
              </span>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-6 text-black font-dm text-base font-medium">
              <Link href="/" className="relative py-1 transition-colors group">
                {t("home")}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>

              <Link
                href="/about-us"
                className="relative py-1 transition-colors group"
              >
                {t("aboutUs")}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>

              <Link
                href="/gallery"
                className="relative py-1 transition-colors group"
              >
                {t("gallery")}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>

              {/* Services Dropdown */}
              <div className="relative inline-flex text-gray-800">
                <button
                  type="button"
                  className="flex items-center gap-2 font-medium"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  {t("servicesProducts")}
                  <svg
                    className={`w-3 h-3 transition-transform ${desktopServicesOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2 5L8 11L14 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 transition-all duration-200 w-[420px] bg-white shadow-xl rounded-2xl p-6 ${
                    desktopServicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-6">
                    {/* wealth column */}
                    <div>
                      <p className="text-base font-semibold text-theme1 mb-2">
                        {t("wealth")}
                      </p>
                      <div className="space-y-1">
                        <Link
                          href="/services#mutual-funds"
                          className="block text-gray-700 hover:text-theme1 text-base font-medium"
                        >
                          {t("mutualFunds")}
                        </Link>
                        <ul className="pl-3 space-y-0.5 border-l-2 border-blue-100">
                          <li className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-theme1 shrink-0" />
                            <Link
                              href="/services#children-planning"
                              className="text-gray-500 hover:text-theme1 text-sm"
                            >
                              {t("childrenPlanning")}
                            </Link>
                          </li>
                          <li className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-theme1 shrink-0" />
                            <Link
                              href="/services#retirement-planning"
                              className="text-gray-500 hover:text-theme1 text-sm"
                            >
                              {t("retirementPlanning")}
                            </Link>
                          </li>
                          <li className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-theme1 shrink-0" />
                            <Link
                              href="/services#pms"
                              className="text-gray-500 hover:text-theme1 text-sm"
                            >
                              {t("portfolioManagement")}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Insurance column */}
                    <div>
                      <p className="text-base font-semibold text-theme1 mb-2">
                        {t("insurance")}
                      </p>
                      <div className="space-y-1">
                        <Link
                          href="/services#life-insurance"
                          className="block text-gray-700 hover:text-theme1 text-base"
                        >
                          {t("lifeInsurance")}
                        </Link>
                        <Link
                          href="/services#general-insurance"
                          className="block text-gray-700 hover:text-theme1 text-base font-medium pt-1"
                        >
                          {t("generalInsurance")}
                        </Link>
                        <ul className="pl-3 space-y-0.5 border-l-2 border-blue-100">
                          <li className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-theme1 shrink-0" />
                            <Link
                              href="/services#health-insurance"
                              className="text-gray-500 hover:text-theme1 text-sm"
                            >
                              {t("healthInsurance")}
                            </Link>
                          </li>
                          <li className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-theme1 shrink-0" />
                            <Link
                              href="/services#personal-accident-insurance"
                              className="text-gray-500 hover:text-theme1 text-sm"
                            >
                              {t("personalAccidentInsurance")}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/blogs"
                className="relative py-1 transition-colors group"
              >
                {t("blogs")}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>

              {/* Language Picker */}
              <LanguagePicker />

              {/* Contact Button */}
              <Link
                href="/contact-us"
                className="ml-1 rounded-full bg-theme1 text-white font-medium text-base px-3 py-1.5 flex items-center gap-2 shadow-lg transition"
              >
                {t("contactUs")}
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 4l-2 2" />
                    <path d="M22 10.5l-2.5 -.5" />
                    <path d="M13.5 2l.5 2.5" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          MOBILE TOPBAR  —  visible below md
      ═══════════════════════════════════════════ */}
      <nav className="flex md:hidden bg-white shadow-lg font-dm fixed top-0 w-full z-50">
        <div className="w-full px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                className="w-auto h-16"
                src="/images/logo.png"
                alt="Sankalpshree-wealth logo"
                width={60}
                height={60}
                priority
              />
              <span className="text-theme1 text-sm font-lexend font-bold leading-tight tracking-[0.05rem]">
                Shagun Shri <br /> wealth
              </span>
            </Link>

            <div className="flex items-center gap-2">
              {/* Language Picker — mobile */}
              <LanguagePicker />

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          MOBILE DRAWER  —  slide-in panel
      ═══════════════════════════════════════════ */}
      <div
        className={`fixed md:hidden inset-0 z-50 ${mobileMenuOpen ? "" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMobileMenu}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-screen w-[85vw] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={closeMobileMenu}
            >
              <Image
                className="w-12 h-auto"
                src="/images/logo.png"
                alt="Sankalpshree-wealth logo"
                width={60}
                height={60}
                priority
              />
              <span className="text-theme1 text-sm font-lexend font-bold leading-tight tracking-[0.05rem]">
                Shagun Shri <br /> wealth
              </span>
            </Link>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <div className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
            <div className="space-y-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium hover:bg-blue-50 rounded-lg transition-colors"
              >
                {t("home")}
              </Link>

              <Link
                href="/about-us"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium hover:bg-blue-50 rounded-lg transition-colors"
              >
                {t("aboutUs")}
              </Link>

              <Link
                href="/gallery"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium hover:bg-blue-50 rounded-lg transition-colors"
              >
                {t("gallery")}
              </Link>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium hover:bg-blue-50 rounded-lg"
                >
                  {t("servicesProducts")}
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div
                  className={`mt-2 space-y-1 pl-6 ${mobileServicesOpen ? "block" : "hidden"}`}
                >
                  <Link
                    href="/services#mutual-funds"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-700 font-medium hover:text-blue-600 text-sm"
                  >
                    {t("mutualFunds")}
                  </Link>
                  <ul className="pl-3 mb-1 space-y-1 border-l-2 border-blue-100">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-theme1 shrink-0" />
                      <Link
                        href="/services#children-planning"
                        onClick={closeMobileMenu}
                        className="text-xs text-gray-500 hover:text-blue-600"
                      >
                        {t("childrenPlanning")}
                      </Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-theme1 shrink-0" />
                      <Link
                        href="/services#retirement-planning"
                        onClick={closeMobileMenu}
                        className="text-sm text-gray-500 hover:text-blue-600"
                      >
                        {t("retirementPlanning")}
                      </Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-theme1 shrink-0" />
                      <Link
                        href="/services#pms"
                        onClick={closeMobileMenu}
                        className="text-sm text-gray-500 hover:text-blue-600"
                      >
                        {t("portfolioManagement")}
                      </Link>
                    </li>
                  </ul>

                  <Link
                    href="/services#life-insurance"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-blue-600 text-sm"
                  >
                    {t("lifeInsurance")}
                  </Link>

                  <Link
                    href="/services#general-insurance"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-700 font-medium hover:text-blue-600 text-sm"
                  >
                    {t("generalInsurance")}
                  </Link>
                  <ul className="pl-3 space-y-1 border-l-2 border-blue-100">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-theme1 shrink-0" />
                      <Link
                        href="/services#personal-accident-insurance"
                        onClick={closeMobileMenu}
                        className="text-sm text-gray-500 hover:text-blue-600"
                      >
                        {t("personalAccidentInsurance")}
                      </Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-theme1 shrink-0" />
                      <Link
                        href="/services#health-insurance"
                        onClick={closeMobileMenu}
                        className="text-sm text-gray-500 hover:text-blue-600"
                      >
                        {t("healthInsurance")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href="/blogs"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium hover:bg-blue-50 rounded-lg transition-colors"
              >
                {t("blogs")}
              </Link>

              <div className="pt-4">
                <Link
                  href="/contact-us"
                  onClick={closeMobileMenu}
                  className="block w-full text-center font-medium text-base bg-theme1 hover:opacity-95 text-white px-6 py-3 rounded-lg"
                >
                  {t("contactNow")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
