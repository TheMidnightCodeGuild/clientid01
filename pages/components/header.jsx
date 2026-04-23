import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Dot = ({ size = "sm" }) => (
  <span
    className={`rounded-full bg-theme1 shrink-0 ${
      size === "sm" ? "w-1 h-1" : "w-1.5 h-1.5"
    }`}
  />
);

const Navbar = () => {
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const mutualFundItems = [
    { href: "/services#retirement-planning", label: "Retirement Planning" },
    { href: "/services#sip",                 label: "SIP" },
    { href: "/services#swp",                 label: "SWP" },
    { href: "/services#stp",                 label: "STP" },
    { href: "/services#client-portfolio-review", label: "Client Portfolio Review" },
    { href: "/services#kids-marriage",       label: "Kids Marriage" },
    { href: "/services#kids-education",      label: "Kids Education" },
    { href: "/services#tax-saving",          label: "Tax Saving" },
    { href: "/services#dream-car",           label: "Dream Car" },
    { href: "/services#dream-house",         label: "Dream House" },
    { href: "/services#dream-vacation",      label: "Dream Vacation" },
  ];

  const lifeInsuranceItems = [
    { href: "/services#term-insurance",         label: "TERM Insurance" },
    { href: "/services#traditional-insurance",  label: "TRADITIONAL Insurance" },
  ];

  const generalInsuranceItems = [
    { href: "/services#personal-accident-insurance", label: "Personal Accident Insurance" },
    { href: "/services#mediclaim",                   label: "MEDICLAIM" },
  ];

  return (
    <>
      {/* ═══════════════ DESKTOP NAVBAR ═══════════════ */}
      <nav className="hidden md:flex bg-white shadow-lg font-dm fixed top-0 w-full z-50">
        <div className="lg:max-w-[1300px] w-full mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                className="w-auto h-20"
                src="/images/logo.jpeg"
                alt="Sankalpashree Wealth logo"
                width={60}
                height={60}
                priority
              />
              <span className="text-theme1 text-lg font-lexend font-bold leading-tight uppercase tracking-[0.1rem]">
                Sankalpashree <br /> Wealth
              </span>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-6 text-black font-dm text-base font-medium">
              {[
                { href: "/",         label: t("home") },
                { href: "/about-us", label: t("aboutUs") },
                { href: "/gallery",  label: t("gallery") },
                { href: "/Insights", label: "Insights" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="relative py-1 transition-colors group">
                  {label}
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative inline-flex text-gray-800">
                <button
                  type="button"
                  className="flex items-center gap-2 font-medium"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  Services &amp; Products
                  <svg
                    className={`w-3 h-3 transition-transform ${desktopServicesOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M2 5L8 11L14 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 transition-all duration-200 w-[460px] bg-white shadow-xl rounded-2xl p-6 ${
                    desktopServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-6">
                    {/* Wealth column */}
                    <div>
                      <p className="text-lg font-semibold text-black mb-2">{t("wealth")}</p>
                      <div className="space-y-1">
                        <Link href="/services#mutual-funds" className="block text-gray-700 hover:text-theme1 text-base font-medium">
                          {t("mutualFunds")}
                        </Link>
                        <ul className="pl-3 space-y-0.5 border-l-2 border-blue-100">
                          {mutualFundItems.map(({ href, label }) => (
                            <li key={href} className="flex items-center gap-1">
                              <Dot size="sm" />
                              <Link href={href} className="text-gray-500 hover:text-theme1 text-sm">
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Insurance column */}
                    <div>
                      <p className="text-lg font-semibold text-black mb-2">{t("insurance")}</p>
                      <div className="space-y-1">
                        {/* Life Insurance + sub-bullets */}
                        <Link href="/services#life-insurance" className="block text-gray-700 hover:text-theme1 text-base">
                          {t("lifeInsurance")}
                        </Link>
                        <ul className="pl-3 space-y-0.5 border-l-2 border-blue-100">
                          {lifeInsuranceItems.map(({ href, label }) => (
                            <li key={href} className="flex items-center gap-1">
                              <Dot size="sm" />
                              <Link href={href} className="text-gray-500 hover:text-theme1 text-sm">{label}</Link>
                            </li>
                          ))}
                        </ul>

                        {/* General Insurance + sub-bullets */}
                        <Link href="/services#general-insurance" className="block text-gray-700 hover:text-theme1 text-base font-medium pt-1">
                          {t("generalInsurance")}
                        </Link>
                        <ul className="pl-3 space-y-0.5 border-l-2 border-blue-100">
                          {generalInsuranceItems.map(({ href, label }) => (
                            <li key={href} className="flex items-center gap-1">
                              <Dot size="sm" />
                              <Link href={href} className="text-gray-500 hover:text-theme1 text-sm">{label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/blogs" className="relative py-1 transition-colors group">
                {t("blogs")}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Contact Button */}
              <Link
                href="/contact-us"
                className="ml-1 rounded-full bg-theme1 text-white font-medium text-base px-3 py-1.5 flex items-center gap-2 shadow-lg transition"
              >
                {t("contactUs")}
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════ MOBILE TOPBAR ═══════════════ */}
      <nav className="flex md:hidden bg-white shadow-lg font-dm fixed top-0 w-full z-50">
        <div className="w-full px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image className="w-auto h-16" src="/images/logo.jpeg" alt="Sankalpashree Wealth logo" width={60} height={60} priority />
              <span className="text-theme1 text-sm font-lexend font-bold leading-tight tracking-[0.05rem]">
                Sankalpashree <br /> Wealth
              </span>
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════════════ MOBILE DRAWER ═══════════════ */}
      <div className={`fixed md:hidden inset-0 z-50 ${mobileMenuOpen ? "" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMobileMenu}
        />
        <div className={`absolute top-0 right-0 h-screen w-[85vw] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
              <Image className="w-12 h-auto" src="/images/logo.jpeg" alt="Sankalpashree Wealth logo" width={60} height={60} priority />
              <span className="text-theme1 text-sm font-lexend font-bold leading-tight tracking-[0.05rem]">
                Sankalpashree <br /> Wealth
              </span>
            </Link>
            <button onClick={closeMobileMenu} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Close menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <div className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
            <div className="space-y-2">
              {[
                { href: "/",         label: t("home") },
                { href: "/about-us", label: t("aboutUs") },
                { href: "/gallery",  label: t("gallery") },
                { href: "/Insights", label: "Insights" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} onClick={closeMobileMenu} className="block px-4 py-3 text-base font-medium hover:bg-blue-50 rounded-lg transition-colors">
                  {label}
                </Link>
              ))}

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium hover:bg-blue-50 rounded-lg"
                >
                  Services &amp; Products
                  <svg className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>

                <div className={`mt-2 space-y-2 pl-4 ${mobileServicesOpen ? "block" : "hidden"}`}>
                  <p className="px-2 pt-1 text-xs font-semibold uppercase tracking-widest text-gray-400">{t("wealth")}</p>
                  <Link href="/services#mutual-funds" onClick={closeMobileMenu} className="block py-1.5 px-2 text-gray-700 font-medium hover:text-blue-600 text-sm">
                    {t("mutualFunds")}
                  </Link>
                  <ul className="pl-3 mb-1 space-y-1 border-l-2 border-blue-100">
                    {mutualFundItems.map(({ href, label }) => (
                      <li key={href} className="flex items-center gap-1.5">
                        <Dot size="lg" />
                        <Link href={href} onClick={closeMobileMenu} className="text-sm text-gray-500 hover:text-blue-600">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <p className="px-2 pt-1 text-xs font-semibold uppercase tracking-widest text-gray-400">{t("insurance")}</p>
                  <Link href="/services#life-insurance" onClick={closeMobileMenu} className="block py-1.5 px-2 text-gray-700 hover:text-blue-600 text-sm">
                    {t("lifeInsurance")}
                  </Link>
                  <ul className="pl-3 mb-1 space-y-1 border-l-2 border-blue-100">
                    {lifeInsuranceItems.map(({ href, label }) => (
                      <li key={href} className="flex items-center gap-1.5">
                        <Dot size="lg" />
                        <Link href={href} onClick={closeMobileMenu} className="text-sm text-gray-500 hover:text-blue-600">{label}</Link>
                      </li>
                    ))}
                  </ul>

                  <Link href="/services#general-insurance" onClick={closeMobileMenu} className="block py-1.5 px-2 text-gray-700 font-medium hover:text-blue-600 text-sm">
                    {t("generalInsurance")}
                  </Link>
                  <ul className="pl-3 space-y-1 border-l-2 border-blue-100">
                    {generalInsuranceItems.map(({ href, label }) => (
                      <li key={href} className="flex items-center gap-1.5">
                        <Dot size="lg" />
                        <Link href={href} onClick={closeMobileMenu} className="text-sm text-gray-500 hover:text-blue-600">{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link href="/blogs" onClick={closeMobileMenu} className="block px-4 py-3 text-base font-medium hover:bg-blue-50 rounded-lg transition-colors">
                {t("blogs")}
              </Link>

              {/* Language Switcher – mobile */}
              <div className="pt-2 px-4">
                <LanguageSwitcher />
              </div>

              <div className="pt-4">
                <Link href="/contact-us" onClick={closeMobileMenu} className="block w-full text-center font-medium text-base bg-theme1 hover:opacity-95 text-white px-6 py-3 rounded-lg">
                  {t("contactNow2")}
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
