import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/header";
import Footer from "./components/footer";
import { useLanguage } from "@/lib/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  return (
    <main className="font-dm">
      <Head>
        <title>
          Services | Sankalpshree Invest – LIC, Mutual Funds, Insurance &amp;
          Wealth Planning by Seetaram Sharma, Ujjain
        </title>
        <meta
          name="description"
          content="Explore financial services by Mr. Seetaram Sharma at Sankalpshree Invest, Ujjain — LIC life insurance (agent since 2008), mutual funds, health insurance (Mediclaim), retirement planning, child future planning, portfolio management (PMS), and . Member Zonal Manager's Club for Agents, LIC."
        />
        <meta
          name="keywords"
          content="LIC agent Ujjain, life insurance Ujjain, mutual funds Ujjain, Mediclaim Ujjain, retirement planning Ujjain, child future planning Ujjain, PMS portfolio management Ujjain, , Seetaram Sharma LIC, Sankalpshree Invest services"
        />
      </Head>
      <Navbar />
      <section
        className="bg-cover h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center flex-col relative font-dm"
        style={{ backgroundImage: "url('/images/home.png')" }}
      >
        <div className="absolute inset-0 bg-gray-800/50"></div>

        <div className="lg:max-w-[1300px] mx-auto px-4 flex items-center justify-center flex-col w-full gap-3 relative z-10 text-center">
          <h1 className="font-lexend text-3xl lg:text-5xl text-left text-white font-bold">
            {t("servicesPageTitle")}
          </h1>

          <p className="text-white text-sm font-medium lg:text-base  max-w-xl">
            {t("servicesPageSubtitle")}
          </p>

          <a
            href="/contact-us"
            className="ml-0 mt-1 rounded-full bg-white text-black font-semibold text-sm lg:text-base px-2 py-1 lg:px-3 lg:py-1.5 flex items-center transition-colors duration-200"
          >
            {t("contactUs")}
            <span className="ml-2 w-8 h-8 rounded-full bg-theme1 flex items-center justify-center">
              <svg
                className="lg:w-5 lg:h-5 w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 18L18 6M18 6H10M18 6V14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </section>
      <section className="w-full bg-[#F8F9FB] py-12 lg:py-16">
        {/* CONTAINER */}
        <div className="max-w-[1300px] mx-auto px-4 ">
          {/* ================= PRODUCTS ================= */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="mutual-funds"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("mfTitle")}
                </h3>

                <p className="text-gray-600 mb-4 max-w-full">{t("mfDesc")}</p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("mfF1")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("mfF2")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("mfF3")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("mfF4")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("mfF5")}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/mf.png"
                  alt="Mutual Funds wealth product"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="retirement-planning"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("rpTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">{t("rpDesc")}</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("rpF1")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("rpF2")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("rpF3")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("rpF4")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("rpF5")}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2 lg:order-1 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/rp.png"
                  alt="Retirement planning service"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="life-insurance"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("liTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">{t("liDesc")}</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("liF1")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("liF2")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("liF3")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("liF4")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("liF5")}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2 lg:order-1 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/li.png"
                  alt="Life insurance protection plan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="health-insurance"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("hiTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">{t("hiDesc")}</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("hiF1")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("hiF2")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("hiF3")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("hiF4")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("hiF5")}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/hi.png"
                  alt="Health insurance cover for medical expenses"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="general-insurance"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("giTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">{t("giDesc")}</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("giF1")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("giF2")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("giF3")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("giF4")}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      {t("giF5")}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2 lg:order-1 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/gi.png"
                  alt="General insurance for assets and travel"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── SIP ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="sip"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("sipTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">{t("sipDesc")}</p>
                <ul className="space-y-4">
                  {["sipF1", "sipF2", "sipF3", "sipF4", "sipF5"].map((k) => (
                    <li key={k} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z" />
                      </svg>
                      <p className="text-gray-700 text-sm md:text-base">
                        {t(k)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/sip.png"
                  alt="SIP Systematic Investment Plan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── SWP ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="swp"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("swpTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">{t("swpDesc")}</p>
                <ul className="space-y-4">
                  {["swpF1", "swpF2", "swpF3", "swpF4", "swpF5"].map((k) => (
                    <li key={k} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z" />
                      </svg>
                      <p className="text-gray-700 text-sm md:text-base">
                        {t(k)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1 lg:col-span-2 lg:order-1 rounded-2xl lg:rounded-l-3xl overflow-hidden h-full">
                <img
                  src="/images/services/swp.png"
                  alt="SWP Systematic Withdrawal Plan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── STP ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="stp"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("stpTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">{t("stpDesc")}</p>
                <ul className="space-y-4">
                  {["stpF1", "stpF2", "stpF3", "stpF4", "stpF5"].map((k) => (
                    <li key={k} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z" />
                      </svg>
                      <p className="text-gray-700 text-sm md:text-base">
                        {t(k)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/stp.png"
                  alt="STP Systematic Transfer Plan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── Client Portfolio Review ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="client-portfolio-review"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("cprTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">{t("cprDesc")}</p>
                <ul className="space-y-4">
                  {["cprF1", "cprF2", "cprF3", "cprF4", "cprF5"].map((k) => (
                    <li key={k} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z" />
                      </svg>
                      <p className="text-gray-700 text-sm md:text-base">
                        {t(k)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1 lg:col-span-2 lg:order-1 rounded-2xl lg:rounded-l-3xl overflow-hidden h-full">
                <img
                  src="/images/services/pm.png"
                  alt="Client Portfolio Review"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── Personal Accident Insurance ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="personal-accident-insurance"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("paiTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">{t("paiDesc")}</p>
                <ul className="space-y-4">
                  {["paiF1", "paiF2", "paiF3", "paiF4", "paiF5"].map((k) => (
                    <li key={k} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z" />
                      </svg>
                      <p className="text-gray-700 text-sm md:text-base">
                        {t(k)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/pa.png"
                  alt="Personal Accident Insurance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── TERM Insurance ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="term-insurance"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("termTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">{t("termDesc")}</p>
                <ul className="space-y-4">
                  {["termF1", "termF2", "termF3", "termF4", "termF5"].map(
                    (k) => (
                      <li key={k} className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z" />
                        </svg>
                        <p className="text-gray-700 text-sm md:text-base">
                          {t(k)}
                        </p>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="col-span-1 lg:col-span-2 lg:order-1 rounded-2xl lg:rounded-l-3xl overflow-hidden h-full">
                <img
                  src="/images/services/ti.png"
                  alt="TERM Insurance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── TRADITIONAL Insurance ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="traditional-insurance"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("tradTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">{t("tradDesc")}</p>
                <ul className="space-y-4">
                  {["tradF1", "tradF2", "tradF3", "tradF4", "tradF5"].map(
                    (k) => (
                      <li key={k} className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z" />
                        </svg>
                        <p className="text-gray-700 text-sm md:text-base">
                          {t(k)}
                        </p>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/tai.png"
                  alt="TRADITIONAL Insurance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── MEDICLAIM ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="mediclaim"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("medTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">{t("medDesc")}</p>
                <ul className="space-y-4">
                  {["medF1", "medF2", "medF3", "medF4", "medF5"].map((k) => (
                    <li key={k} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z" />
                      </svg>
                      <p className="text-gray-700 text-sm md:text-base">
                        {t(k)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1 lg:col-span-2 lg:order-1 rounded-2xl lg:rounded-l-3xl overflow-hidden h-full">
                <img
                  src="/images/services/hi.png"
                  alt="MEDICLAIM Health Insurance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          {/* end mb-12 */}
        </div>
        {/* end container */}
      </section>
      <Footer />
    </main>
  );
};

export default Services;
