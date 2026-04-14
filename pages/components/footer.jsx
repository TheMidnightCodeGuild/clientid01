import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-800 font-dmsans w-full text-gray-900">
      <div className="max-w-[1300px] px-4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 py-6">

        {/* Logo + tagline */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <Link href="/" className="inline-block">
              <Image className="w-36 h-auto" src="/images/logo.jpeg" alt="Sankalpashree Wealth logo" width={100} height={65} />
            </Link>
          </div>

          {/* Instagram */}
          <div className="mb-4">
            <Link
              href="https://www.instagram.com/sankalpa_shree_investment?igsh=MW04ODhjaGtoZm95ZQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="inline-flex items-center gap-2 group"
            >
              <span className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-md group-hover:scale-110 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </span>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">@sankalpa_shree_investment</span>
            </Link>
          </div>

          <p className="text-gray-50 font-medium text-sm lg:text-base mb-6">
            {t("footerTagline")}
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-1">
          <div className="text-white font-bold tracking-widest uppercase text-sm lg:text-base mb-4">{t("quickLinks")}</div>
          <nav className="flex flex-col gap-2 lg:gap-3">
            <div><Link href="/"          className="text-sm lg:text-base text-gray-50 hover:text-white">{t("home")}</Link></div>
            <div><Link href="/about-us"  className="text-sm lg:text-base text-gray-50 hover:text-white">{t("aboutUs")}</Link></div>
            <div><Link href="/contact-us" className="text-sm lg:text-base text-gray-50 hover:text-white">{t("contactUs")}</Link></div>
          </nav>
        </div>

        {/* Mutual Funds */}
        <div className="lg:col-span-1">
          <div className="text-white font-bold tracking-widest uppercase text-sm lg:text-base mb-4">{t("mutualFunds")}</div>
          <nav className="flex flex-col gap-2 lg:gap-3">
  
            <div><Link href="/services#retirement-planning"   className="text-sm lg:text-base text-gray-50 hover:text-white">Retirement Planning</Link></div>
            <div><Link href="/services#sip"                   className="text-sm lg:text-base text-gray-50 hover:text-white">SIP</Link></div>
            <div><Link href="/services#swp"                   className="text-sm lg:text-base text-gray-50 hover:text-white">SWP</Link></div>
            <div><Link href="/services#stp"                   className="text-sm lg:text-base text-gray-50 hover:text-white">STP</Link></div>
            <div><Link href="/services#client-portfolio-review" className="text-sm lg:text-base text-gray-50 hover:text-white">Client Portfolio Review</Link></div>
            <div><Link href="/services#kids-marriage"         className="text-sm lg:text-base text-gray-50 hover:text-white">Kids Marriage</Link></div>
            <div><Link href="/services#kids-education"        className="text-sm lg:text-base text-gray-50 hover:text-white">Kids Education</Link></div>
            <div><Link href="/services#tax-saving"            className="text-sm lg:text-base text-gray-50 hover:text-white">Tax Saving</Link></div>
            <div><Link href="/services#dream-car"             className="text-sm lg:text-base text-gray-50 hover:text-white">Dream Car</Link></div>
            <div><Link href="/services#dream-house"           className="text-sm lg:text-base text-gray-50 hover:text-white">Dream House</Link></div>
            <div><Link href="/services#dream-vacation"        className="text-sm lg:text-base text-gray-50 hover:text-white">Dream Vacation</Link></div>
          </nav>
        </div>

        {/* Insurance */}
        <div className="lg:col-span-1">
          <div className="text-white font-bold tracking-widest uppercase text-sm lg:text-base mb-4">{t("footerInsurance")}</div>
          <nav className="flex flex-col gap-2 lg:gap-3">
            <div><Link href="/services#life-insurance"             className="text-sm lg:text-base text-gray-50 hover:text-white">Life Insurance</Link></div>
            <div><Link href="/services#general-insurance"          className="text-sm lg:text-base text-gray-50 hover:text-white">General Insurance</Link></div>
            <div><Link href="/services#personal-accident-insurance" className="text-sm lg:text-base text-gray-50 hover:text-white">Personal Accident Insurance</Link></div>
            <div><Link href="/services#term-insurance"             className="text-sm lg:text-base text-gray-50 hover:text-white">TERM Insurance</Link></div>
            <div><Link href="/services#traditional-insurance"      className="text-sm lg:text-base text-gray-50 hover:text-white">TRADITIONAL Insurance</Link></div>
            <div><Link href="/services#mediclaim"                  className="text-sm lg:text-base text-gray-50 hover:text-white">MEDICLAIM</Link></div>
          </nav>
        </div>

        {/* Contact */}
        <div className="col-span-1">
          <div className="text-white font-bold tracking-widest uppercase text-sm lg:text-base mb-4">{t("footerContact")}</div>
          <nav className="flex flex-col gap-4">
            <Link href="tel:+919425093166" className="flex items-start group">
              <div className="rounded-full w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center shrink-0 text-white">
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 8 6-6" /><path d="M22 8V2h-6" />
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </div>
              <div className="ml-3 mt-0.5 flex-col w-full h-auto text-left text-sm lg:text-base text-gray-50 hover:text-white break-words">
                Personal <br /> +919425093166
              </div>
            </Link>

            <Link href="tel:0734-3501031" className="flex items-start group">
              <div className="rounded-full w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center shrink-0 text-white">
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 8 6-6" /><path d="M22 8V2h-6" />
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </div>
              <div className="ml-3 mt-0.5 flex-col w-full h-auto text-left text-sm lg:text-base text-gray-50 hover:text-white break-words">
                Office <br /> 0734-3501031
              </div>
            </Link>

            <Link href="mailto:sankalpshreeinvest@gmail.com" target="_blank" className="flex items-start group cursor-pointer duration-150">
              <div className="rounded-full relative w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center shrink-0 text-white">
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </div>
              <div className="ml-3 mt-0.5 w-full h-auto text-left text-sm lg:text-base text-gray-50 hover:text-white break-words">
                sankalpshreeinvest@gmail.com
              </div>
            </Link>

            <div className="flex items-start">
              <div className="rounded-full relative w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center shrink-0 text-white">
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                  <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                  <path d="M18 22v-3" />
                  <circle cx="10" cy="10" r="3" />
                </svg>
              </div>
              <div className="text-sm lg:text-base text-gray-50 ml-3 mt-0.5 break-words">
                C/113, 1st Floor, Dindayal Complex, Sanwer Road, Ujjain (M.P.) - 456010
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-900 py-3 w-full text-blue-50">
        <div className="max-w-[1300px] mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <Link href="/" className="font-medium text-sm sm:text-base text-center md:text-left hover:text-white uppercase">
            {t("footerCopyright")}
          </Link>
          <div className="flex flex-wrap justify-center md:justify-end text-center md:text-right text-sm sm:text-base">
            {t("footerDesigned")}&nbsp;
            <Link href="https://www.noxalgo.com" target="_blank" className="font-medium hover:text-white uppercase self-center">
              Noxalgo LLP
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
