import React from "react";
import Head from "next/head";
import Navbar from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />
      <Head>
        <title>
          About Us | Sankalpshree Invest – Mr. Seetaram Sharma, LIC Agent &
          Financial Advisor, Ujjain Since 2008
        </title>
        <meta
          name="description"
          content="Learn about Mr. Seetaram Sharma — LIC agent since 2008, Member Zonal Manager's Club for Agents, and founder of Sankalpshree Invest, Ujjain. Specializing in mutual funds, LIC life insurance, Mediclaim, child future planning, retirement planning, PMS, and  for individuals and families."
        />
        <meta
          name="keywords"
          content="Seetaram Sharma Ujjain, LIC agent Ujjain since 2008, Sankalpshree Invest founder, financial advisor Ujjain, LIC Zonal Manager's Club member, mutual funds Ujjain, life insurance Ujjain, wealth management Ujjain, best Mutual Fund Advisor Ujjain"
        />
      </Head>
      <main className="font-dm">
        {/* ── HERO BANNER ── */}
        <section
          className="bg-cover h-[400px] lg:h-[500px] flex items-start object-cover object-center justify-center flex-col relative"
          style={{ backgroundImage: "url('/images/home.png')" }}
        >
          <div className="absolute inset-0 bg-gray-800/50"></div>
          <div className="max-w-[1300px] mx-auto px-4 flex items-start justify-start flex-col w-full gap-3 relative z-10 lg:mt-20 mt-10">
            <h1 className="font-dm text-3xl lg:text-5xl text-left text-white relative z-0 font-bold">
              {t("aboutPageTitle")}
            </h1>
            <p className="text-white text-sm font-medium lg:text-base max-w-xl">
              {t("aboutPageSubtitle")}
            </p>
            <Link
              href="/contact-us"
              className="ml-0 mt-1 rounded-full bg-white text-black font-semibold text-sm lg:text-base px-2 py-1 lg:px-3 lg:py-1.5 flex items-center transition-colors duration-200"
            >
              {t("contactUs")}
              <span className="ml-2 w-8 h-8 rounded-full bg-theme1 flex items-center justify-center transition-colors duration-200">
                <svg
                  className="lg:w-5 lg:h-5 w-4 h-4 text-white transition-colors duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M18 6H10M18 6V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </section>

        {/* ── FOUNDER SECTION ── */}
        <section className="bg-gray-50 py-16">
          <div className="lg:max-w-[1300px] mx-auto px-4">
            <div className="grid lg:grid-cols-[420px_1fr] gap-8 items-start">
              <div className="relative">
                <div className="rounded-[20px] border border-gray-200 overflow-hidden bg-theme2/10 p-2">
                  <div className="relative h-[500px] w-full rounded-[20px] overflow-hidden">
                    <Image
                      src="/images/main.png"
                      alt="Mr. Seetaram Sharma"
                      loading="eager"
                      width={500}
                      height={500}
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 pb-2 mt-4">
                  <div className="w-3 h-3 bg-theme2 rounded-full"></div>
                  <span className="text-theme2 tracking-wider font-medium uppercase">
                    {t("ourFounder")}
                  </span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-lexend">
                  Mr. Seetaram Sharma
                </h2>

                <div className="mt-2 lg:text-lg text-base text-gray-700 leading-relaxed space-y-6 text-justify">
                  <p>{t("founderBio1")}</p>
                  <p>{t("founderBio2")}</p>
                  <p>{t("founderBio3")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION / VISION / VALUES ── */}
        <section className="text-gray-800 py-16">
          <div className="lg:max-w-[1300px] mx-auto px-4">
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl mb-2 font-bold text-gray-800">
                {t("missionVisionValues")}
              </h1>
              <div className="h-1.5 w-32 bg-blue-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 md:p-8 text-center rounded-3xl bg-gray-500">
                <div className="w-16 h-16 md:w-20 md:h-20 inline-flex items-center justify-center rounded-full bg-white shadow-xl shadow-black/40 hover:rotate-3 mb-5">
                  <svg
                    className="w-12 md:w-16"
                    viewBox="0 0 123 114"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M51.66 10.21C56.76 10.21 61.67 10.95 66.31 12.32C67.05 12.54 67.8 12.78 68.56 13.04C69.4 13.33 70.23 13.64 71.05 13.97L67.67 20.18C62.7 18.27 57.31 17.23 51.67 17.23H51.66C45.5 17.23 39.63 18.48 34.29 20.74C33.42 21.11 32.56 21.5 31.73 21.92C27.41 24.08 23.49 26.92 20.11 30.3L20.09 30.32C18.97 31.44 17.9 32.63 16.91 33.87C15.91 35.12 14.97 36.42 14.1 37.77C9.61 44.73 7.02 53 7.02 61.87V61.88C7.02 68.04 8.27 73.91 10.53 79.25C10.9 80.12 11.29 80.98 11.71 81.81C13.87 86.12 16.71 90.05 20.1 93.43L20.12 93.45C21.24 94.57 22.43 95.64 23.67 96.64C24.92 97.64 26.22 98.58 27.57 99.45C34.52 103.91 42.79 106.5 51.66 106.5H51.67C57.83 106.5 63.7 105.25 69.04 102.99C69.91 102.62 70.77 102.23 71.6 101.81C75.92 99.65 79.84 96.81 83.22 93.43H83.23L83.26 93.4C84.38 92.28 85.44 91.1 86.44 89.86C87.44 88.61 88.38 87.31 89.25 85.96C93.71 79.02 96.3 70.76 96.3 61.9L103.31 60.82C103.32 61.17 103.32 61.52 103.32 61.87V61.88C103.32 69.01 101.87 75.81 99.26 81.98C98.84 82.98 98.38 83.97 97.89 84.95C95.39 89.95 92.1 94.49 88.19 98.4L88.17 98.42C86.87 99.72 85.49 100.96 84.06 102.11C82.62 103.27 81.11 104.36 79.55 105.36C71.51 110.53 61.94 113.53 51.67 113.53C44.54 113.53 37.74 112.08 31.57 109.47C30.57 109.05 29.58 108.59 28.6 108.1C23.6 105.6 19.06 102.31 15.15 98.4L15.13 98.37C13.83 97.07 12.6 95.7 11.44 94.26C10.28 92.82 9.19 91.31 8.19 89.75C3 81.71 0 72.14 0 61.87V61.86C0 54.73 1.45 47.94 4.06 41.76C4.48 40.76 4.94 39.77 5.43 38.79C7.93 33.79 11.22 29.25 15.13 25.34L15.15 25.32C16.45 24.02 17.83 22.79 19.26 21.63C20.7 20.47 22.21 19.38 23.77 18.38C31.82 13.21 41.39 10.21 51.66 10.21ZM55.88 59.54L88.3 0L92.49 33.81L122.88 49.2L55.88 59.54Z"
                      fill="#F89B31"
                    ></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-100 text-xl md:text-2xl font-bold mb-3">
                    {t("ourMission")}
                  </h2>
                  <p className="text-sm md:text-base text-gray-200">
                    {t("missionText")}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 text-center bg-blue-400 rounded-3xl">
                <div className="w-16 h-16 md:w-20 md:h-20 p-1 inline-flex items-center justify-center rounded-full bg-white shadow-xl shadow-black/20 mb-5">
                  <svg
                    className="w-12 md:w-14"
                    viewBox="0 0 114 123"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_8811_7)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M75.64 27.0001C78.8544 28.8904 81.75 31.2764 84.22 34.0701C86.6553 36.8123 88.6095 39.9464 90 43.3401C90.7797 45.2621 91.3985 47.2456 91.85 49.2701C92.8722 53.8729 92.9538 58.6349 92.09 63.2701C91.6139 65.769 90.8904 68.2144 89.93 70.5701L89.82 70.8201C87.82 75.8201 84.24 80.6601 80.82 85.4401C79.08 87.8601 77.35 90.2501 75.9 92.5701C75.4437 93.2918 74.7997 93.8759 74.037 94.2599C73.2743 94.6439 72.4216 94.8133 71.57 94.7501L44.05 98.8401C42.9151 99.0052 41.7589 98.7497 40.7993 98.1216C39.8397 97.4935 39.1428 96.5362 38.84 95.4301C38.1558 93.4312 37.3097 91.4914 36.31 89.6301C35.4799 88.0297 34.4736 86.5271 33.31 85.1501C31.89 83.5301 30.44 81.8701 29 80.0001C27.3936 77.8366 26.0068 75.5185 24.86 73.0801C23.6541 70.5168 22.7158 67.8359 22.06 65.0801C21.4092 62.3212 21.0903 59.4945 21.11 56.6601C21.139 53.713 21.532 50.7808 22.28 47.9301C23.0789 44.8704 24.2229 41.9114 25.69 39.1101L25.89 38.7501C27.781 35.5013 30.1816 32.5774 33 30.0901C35.7992 27.6436 38.9861 25.6801 42.43 24.2801L42.72 24.1701C45.2934 23.1473 47.9787 22.4324 50.72 22.0401C53.619 21.6331 56.5555 21.566 59.47 21.8401C62.3147 22.0989 65.1218 22.6724 67.84 23.5501C70.5619 24.402 73.1785 25.5594 75.64 27.0001Z"
                        fill="#172554"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_8811_7">
                        <rect
                          width="113.79"
                          height="122.88"
                          fill="white"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-xl md:text-2xl font-bold mb-3">
                    {t("ourVision")}
                  </h2>
                  <p className="text-sm md:text-base text-white">
                    {t("visionText")}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 text-center rounded-3xl bg-gray-500">
                <div className="w-16 h-16 md:w-20 md:h-20 inline-flex items-center justify-center rounded-full bg-white shadow-xl shadow-black/40 mb-5">
                  <svg
                    className="w-12 md:w-14"
                    viewBox="0 0 123 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_8833_137)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M59.07 96.03L1.15 29.77H39.16L59.07 96.03ZM61.18 0.11L45.89 25.24H77.6L61.18 0.11ZM82.18 25.07L65.17 0H96.62L82.18 25.07ZM41.65 25.31L56.55 0H24.61L41.65 25.31ZM101.71 2.98L86.67 25.24H122.88L101.71 2.98ZM22.26 2.98L38.07 25.24H0L22.26 2.98ZM44.73 29.57H78.36L62.04 95.04L44.73 29.57ZM64.91 96.04L122.14 29.77H84.13L64.91 96.04Z"
                        fill="#F89B31"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_8833_137">
                        <rect width="122.88" height="96.04" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-100 text-xl md:text-2xl font-bold mb-3">
                    {t("ourValues")}
                  </h2>
                  <p className="text-sm md:text-base text-gray-200">
                    {t("valuesText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SMART SOLUTIONS ── */}
        <section className="text-gray-800 py-12">
          <div className="lg:max-w-[1300px] mx-auto px-4 grid lg:grid-cols-2 gap-6 lg:gap-12">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-theme1 rounded-sm"></div>
                <span className="text-theme1 tracking-wider font-medium uppercase">
                  {t("financialConsultant")}
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-lexend font-bold mt-4 mb-6 text-gray-900">
                {t("smartSolutionsHeading")}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                {t("smartSolutionsBody1")}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t("smartSolutionsBody2")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-theme1/10 border pt-16 border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-4xl font-bold text-theme1">18+</p>
                <p className="text-gray-600 text-sm">{t("yearsConsulting")}</p>
              </div>
              <div className="bg-gray-100 border pt-16 border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-4xl font-bold text-gray-900">1400+</p>
                <p className="text-gray-600 text-sm">{t("happyClients")}</p>
              </div>
              <div
                className="relative rounded-2xl overflow-hidden shadow-sm col-span-2 h-80 lg:h-72"
                style={{
                  backgroundImage: "url('/images/home.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative mt-20 z-10 h-full flex flex-col justify-center p-6">
                  <p className="text-3xl font-lexend font-semibold text-white">
                    {t("trustedFinancialGuidance")}
                  </p>
                  <p className="text-sm mt-2 text-white/80 max-w-md">
                    {t("trustedGuidanceBody")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="pb-10 px-4 bg-white">
          <div className="relative overflow-hidden max-w-[1300px] mx-auto rounded-[36px] px-10 py-16 lg:py-24 bg-[linear-gradient(135deg,#0E5A74_0%,#F68B1F_55%,#F04A3A_100%)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.25)]">
            <svg
              className="absolute -top-10 -right-10 w-[360px] h-[400px] opacity-[0.18]"
              viewBox="0 0 360 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="70" cy="70" r="70" fill="white"></circle>
              <path d="M170 0L260 90L170 180V0Z" fill="white"></path>
              <path
                d="M260 90C310 90 360 140 360 190V0H260V90Z"
                fill="white"
              ></path>
            </svg>
            <div className="absolute inset-0 rounded-[36px] ring-1 ring-white/25"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              <div>
                <h3 className="text-3xl lg:text-3xl font-lexend font-semibold text-white leading-snug max-w-5xl">
                  {t("ctaAboutHeading")}
                </h3>
                <p className="text-white/90 mt-4 max-w-2xl text-lg font-medium">
                  {t("ctaAboutBody")}
                </p>
              </div>
              <Link
                href="/contact-us"
                className="group relative inline-flex items-center gap-3 bg-white text-gray-900 rounded-full pl-7 pr-5 py-3 px-20 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-green-900"
              >
                {t("contactUs")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12A10 10 0 1 1 12 2"></path>
                  <path d="M22 2 12 12"></path>
                  <path d="M16 2h6v6"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
