import React, { useRef } from "react";
import Head from "next/head";
import Navbar from "./components/header";
import Image from "next/image";
import Footer from "./components/footer";
import { useLanguage } from "@/lib/LanguageContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const index = () => {
  const { t } = useLanguage();
  const servicePrevRef = useRef(null);
  const serviceNextRef = useRef(null);
  const servicePaginationRef = useRef(null);

  const services = [
    {
      titleKey: "svc1Title",
      descKey: "svc1Desc",
      icon: "/images/services/mf.png",
    },
    {
      titleKey: "svc3Title",
      descKey: "svc3Desc",
      icon: "/images/services/rp.png",
    },
    {
      titleKey: "svc4Title",
      descKey: "svc4Desc",
      icon: "/images/services/li.png",
    },
    {
      titleKey: "svc5Title",
      descKey: "svc5Desc",
      icon: "/images/services/hi.png",
    },
    {
      titleKey: "svc6Title",
      descKey: "svc6Desc",
      icon: "/images/services/gi.png",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Sankalpshree Invest | Best Financial Advisor in Ujjain – Seetaram
          Sharma | LIC, Mutual Funds & Wealth Planning
        </title>
        <meta
          name="description"
          content="Sankalpashree Wealth, led by Mr. Seetaram Sharma — LIC agent since 2008 and Member Zonal Manager's Club for Agents — is Ujjain's trusted financial advisor. Expert in mutual funds, LIC life insurance, health insurance (Mediclaim), retirement planning, child future planning, portfolio management (PMS), and ."
        />
        <meta
          name="keywords"
          content="best financial advisor Ujjain, Seetaram Sharma Ujjain, LIC agent Ujjain, mutual funds Ujjain, life insurance Ujjain, LIC agent since 2008, retirement planning Ujjain, child future planning, Mediclaim Ujjain, Sankalpashree Wealth, wealth creation Ujjain, wealth protection Ujjain"
        />
      </Head>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-x-[-1]"
          style={{ backgroundImage: "url('/images/home.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="lg:max-w-[1300px] mx-auto w-full px-4">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 py-20 lg:py-0">
              <p className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.4em] py-1.5 px-4 rounded-full text-white bg-white/30 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                {t("since2008")}
              </p>

              <h1 className="text-3xl lg:text-6xl lg:leading-[60px] font-normal text-white font-lexend">
                {t("heroTitle1")} <br className="hidden sm:block" />
                <span className="text-blue-600 font-bold">
                  {t("heroTitle2")}
                </span>
              </h1>

              <div className="max-w-3xl">
                <p className="text-sm sm:text-base text-white italic leading-relaxed font-dm">
                  {t("heroDesc")}
                </p>
                <a
                  href="/contact-us"
                  className="mt-4 inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm text-white font-medium text-base px-4 py-2 transition-colors duration-200 border border-gray-50"
                >
                  {t("contactNow")}
                  <span className="ml-2 w-8 h-8 rounded-full bg-theme1 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
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
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className="bg-[#fffff0] py-16">
        <div className="lg:max-w-[1300px] px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 pb-2">
              <div className="w-3 h-3 bg-theme1 rounded-sm"></div>
              <span className="text-theme1 tracking-wider font-medium uppercase text-sm">
                {t("aboutBadge")}
              </span>
            </div>

            <h2 className="text-3xl font-lexend lg:text-4xl lg:leading-[44px] font-bold text-gray-900 mb-4">
              {t("aboutHeading")}
            </h2>

            <p className="text-gray-600 text-sm lg:text-base mb-6 leading-relaxed">
              {t("aboutBody")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {[
                t("aboutFeature1"),
                t("aboutFeature2"),
                t("aboutFeature3"),
                t("aboutFeature4"),
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B2C4D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                  </svg>
                  <span className="text-gray-700 font-semibold text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/about-us"
              className="inline-flex items-center justify-center rounded-full bg-theme1 px-8 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              {t("knowMore")}
            </a>
          </div>

          <div className="relative w-full">
            <div className="relative rounded-2xl overflow-hidden w-full h-[420px] lg:h-[520px] shadow-xl">
              <Image
                src="/images/main.png"
                alt="Mr. Seetaram Sharma – Founder, Sankalpashree Wealth"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 lg:left-6 lg:right-auto lg:w-[320px] bg-theme1 px-5 py-4 shadow-lg rounded-xl">
              <p className="text-base font-lexend font-semibold text-white leading-snug">
                Mr. Seetaram Sharma
              </p>
              <p className="text-sm text-white/80 mt-1">{t("founderTitle")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-gray-50 py-10 lg:py-32">
        <div className="lg:max-w-[1300px] px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="lg:w-3/4">
              <h1 className="text-2xl text-black italic font-bold mb-2">
                {t("whyChooseUs")}
              </h1>
              <h2 className="text-3xl text-black font-extrabold lg:text-4xl">
                {t("trustedGuidance")}{" "}
                <span className="text-theme1 underline">
                  {t("smartDecisions")}
                </span>
              </h2>
              <p className="mt-3 text-gray-700">{t("whyBody")}</p>
            </div>

            <div className="space-y-6 lg:space-y-10">
              <div className="flex">
                <span className="flex-shrink-0 inline-flex justify-center items-center shadow-md size-[55px] rounded-full border border-gray-200 bg-theme1/10 text-theme1">
                  ✓
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {t("expertGuidanceTitle")}
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {t("expertGuidanceBody")}
                  </p>
                </div>
              </div>
              <div className="flex">
                <span className="flex-shrink-0 inline-flex justify-center items-center shadow-md size-[55px] rounded-full border border-gray-200 bg-theme1/10 text-theme1">
                  ✓
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {t("completeInsuranceTitle")}
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {t("completeInsuranceBody")}
                  </p>
                </div>
              </div>
              <div className="flex">
                <span className="flex-shrink-0 inline-flex justify-center items-center shadow-md size-[55px] rounded-full border border-gray-200 bg-theme1/10 text-theme1">
                  ✓
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {t("personalizedPlanningTitle")}
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {t("personalizedPlanningBody")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="w-full bg-theme2">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 justify-items-center text-center px-4 py-12 lg:max-w-[1300px] mx-auto">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl lg:text-4xl font-bold text-white">18+</p>
            <p className="text-sm lg:text-base text-white/80">
              {t("yearsConsulting")}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl lg:text-4xl font-bold text-white">1400+</p>
            <p className="text-sm lg:text-base text-white/80">
              {t("happyClients")}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl lg:text-4xl font-bold text-white">10+</p>
            <p className="text-sm lg:text-base text-white/80">
              {t("servicesOffered")}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl lg:text-4xl font-bold text-white">2000+</p>
            <p className="text-sm lg:text-base text-white/80">
              {t("plansGuided")}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl lg:text-4xl font-bold text-white">100%</p>
            <p className="text-sm lg:text-base text-white/80">
              {t("clientSatisfaction")}
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES CAROUSEL ── */}
      <section className="py-8 lg:py-12">
        <div className="mx-auto lg:max-w-[1300px] px-4">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-theme1 rounded-sm"></div>
              <span className="text-theme1 tracking-wider font-medium">
                {t("ourServices")}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-start sm:items-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black">
                {t("professionalServices")}{" "}
                <span className="text-theme2">{t("servicesWeOffer")}</span>
              </h2>
              <p className="text-gray-600 max-w-md sm:ml-auto leading-relaxed text-left">
                {t("servicesSubtitle")}
              </p>
            </div>
          </div>

          <div className="relative">
            <Swiper
              className="serviceSwiper pb-12"
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ el: servicePaginationRef.current, clickable: true }}
              navigation={{
                prevEl: servicePrevRef.current,
                nextEl: serviceNextRef.current,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = servicePrevRef.current;
                swiper.params.navigation.nextEl = serviceNextRef.current;
                swiper.params.pagination.el = servicePaginationRef.current;
              }}
              onInit={(swiper) => {
                swiper.navigation.init();
                swiper.navigation.update();
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }}
              aria-label="Service highlights slider"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <article className="flex h-full flex-col rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-white to-blue-100/60 p-4 shadow-lg shadow-blue-100/50">
                    <div className="relative mb-5 overflow-hidden rounded-2xl h-48 w-full">
                      <Image
                        src={service.icon}
                        alt={t(service.titleKey)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {t(service.titleKey)}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {t(service.descKey)}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-yellow-700">
                      {t("exploreService")}
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-theme1 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-theme1">
              <div
                ref={servicePaginationRef}
                className="serviceSwiper-pagination !relative !w-auto"
              ></div>
              <div className="flex gap-3">
                <button
                  ref={servicePrevRef}
                  className="serviceSwiper-button-prev inline-flex h-11 w-11 items-center justify-center rounded-full border border-theme1 bg-white text-xl font-bold shadow-sm transition hover:bg-theme1 hover:text-white"
                  aria-label="Previous service"
                  type="button"
                >
                  ←
                </button>
                <button
                  ref={serviceNextRef}
                  className="serviceSwiper-button-next inline-flex h-11 w-11 items-center justify-center rounded-full border border-theme1 bg-white text-xl font-bold shadow-sm transition hover:bg-theme1 hover:text-white"
                  aria-label="Next service"
                  type="button"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-12 bg-gray-50">
        <div className="lg:max-w-[1300px] mx-auto px-4">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-theme1 rounded-sm"></div>
              <span className="text-theme1 tracking-wider font-medium">
                {t("testimonials")}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black">
                {t("hearFromClients")}{" "}
                <span className="text-theme2">{t("ourClients")}</span>
              </h2>
              <p className="text-gray-800 max-w-md sm:ml-auto leading-relaxed">
                {t("testimonialsSubtitle")}
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { textKey: "t1Text", nameKey: "t1Name", roleKey: "t1Role" },
              { textKey: "t2Text", nameKey: "t2Name", roleKey: "t2Role" },
              { textKey: "t3Text", nameKey: "t3Name", roleKey: "t3Role" },
            ].map(({ textKey, nameKey, roleKey }) => (
              <article
                key={nameKey}
                className="relative bg-white p-6 rounded-3xl flex h-full flex-col justify-between border border-gray-800 overflow-hidden"
              >
                <div className="absolute right-4 bottom-4 opacity-10 text-theme1 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 379.51"
                    className="w-14 h-14"
                    fill="currentColor"
                  >
                    <path d="M299.73 345.54c81.25-22.55 134.13-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160.01-60.55C243.33-10.34 430.24-36.22 485.56 46.34c12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.6 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77zm-267.78 0c81.25-22.55 134.14-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160-60.55-27.14-149.49 159.78-175.37 215.1-92.81 12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.59 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77z"></path>
                  </svg>
                </div>
                <div>
                  <p className="testimonial-text text-gray-700 leading-relaxed line-clamp-3">
                    {t(textKey)}
                  </p>
                  <button
                    type="button"
                    className="testimonial-toggle mt-3 text-sm font-semibold text-theme1 hover:text-[#1f5a12] transition"
                    data-expanded="false"
                    data-readmore={t("readMore")}
                    data-readless={t("readLess")}
                    onClick={(e) => {
                      const btn = e.currentTarget;
                      const p = btn.previousElementSibling;
                      const expanded = btn.dataset.expanded === "true";
                      p.classList.toggle("line-clamp-3", expanded);
                      btn.dataset.expanded = expanded ? "false" : "true";
                      btn.textContent = expanded
                        ? btn.dataset.readmore
                        : btn.dataset.readless;
                    }}
                  >
                    {t("readMore")}
                  </button>
                </div>
                <div className="flex items-center gap-4 pt-4 border-top mt-6 border-t">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z"></path>
                    <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {t(nameKey)}
                    </h3>
                    <p className="text-sm text-gray-500">{t(roleKey)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="pb-10">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
              {t("faqHeading")}{" "}
              <span className="text-theme1">{t("faqHeading2")}</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              {t("faqSubtitle")}
            </p>
          </div>
          <div className="space-y-4">
            {[
              { qk: "faq1Q", ak: "faq1A" },
              { qk: "faq2Q", ak: "faq2A" },
              { qk: "faq3Q", ak: "faq3A" },
              { qk: "faq4Q", ak: "faq4A" },
              { qk: "faq5Q", ak: "faq5A" },
              { qk: "faq6Q", ak: "faq6A" },
            ].map(({ qk, ak }) => (
              <article
                key={qk}
                className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                  onClick={(e) => {
                    const item = e.currentTarget.closest(".faq-item");
                    const answer = item.querySelector(".faq-answer");
                    const icon = item.querySelector(".faq-icon");
                    const isOpen =
                      answer.style.maxHeight &&
                      answer.style.maxHeight !== "0px";
                    answer.style.maxHeight = isOpen
                      ? "0px"
                      : answer.scrollHeight + "px";
                    answer.style.paddingBottom = isOpen ? "0" : "";
                    icon.textContent = isOpen ? "+" : "−";
                  }}
                >
                  <span className="font-semibold text-gray-900">{t(qk)}</span>
                  <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                    +
                  </span>
                </button>
                <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                  <p className="pb-5">{t(ak)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative text-white h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/images/home.png"
            alt="cta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between lg:max-w-[1300px] mx-auto py-10 lg:py-2">
          <div className="w-full lg:mt-20 text-center">
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-2">
              {t("ctaHeading")} <br />
              <span className="text-theme2">{t("ctaHeading2")}</span>
            </h1>
            <p className="text-gray-300 mb-6 text-lg italic">
              {t("ctaSubtitle")}
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-theme1 text-white font-semibold py-2.5 px-4 rounded-full shadow-lg transition duration-300 hover:opacity-90"
            >
              {t("getInTouch")}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default index;
