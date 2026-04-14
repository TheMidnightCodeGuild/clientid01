import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/header";
import Footer from "./components/footer";

const strings = {
  servicesPageTitle: "Our Services",
  servicesPageSubtitle:
    "Comprehensive financial services tailored to help you build wealth, protect your family, and secure your future.",
  contactUs: "Contact Us",
  mfTitle: "Mutual Funds",
  mfDesc:
    "Mutual funds pool money from investors to purchase a diversified portfolio of stocks, bonds, or other securities. We guide you to the right fund based on your risk appetite and financial goals.",
  mfF1: "Expert fund selection based on risk profile",
  mfF2: "Diversified portfolio across equity, debt, and hybrid funds",
  mfF3: "Regular performance monitoring and portfolio reviews",
  mfF4: "SIP and lump-sum investment options",
  mfF5: "Tax-efficient fund choices for maximum returns",
  rpTitle: "Retirement Planning",
  rpDesc:
    "Build a retirement corpus that sustains your lifestyle without any financial compromise. We create structured investment plans so you retire with confidence and financial independence.",
  rpF1: "Goal-based retirement corpus calculation",
  rpF2: "SIPs and annuity-linked investment strategies",
  rpF3: "Risk-adjusted portfolio to protect wealth near retirement",
  rpF4: "Pension and provident fund integration guidance",
  rpF5: "Regular plan reviews to stay on track",
  liTitle: "Life Insurance",
  liDesc:
    "Life insurance provides your family with financial security in your absence. We help you choose the right policy — term, endowment, or ULIP — to match your protection and investment needs.",
  liF1: "Policies from leading insurers including LIC",
  liF2: "Sum assured calculation based on income and liabilities",
  liF3: "Term plans for pure risk coverage at low cost",
  liF4: "Endowment and money-back plans for savings with protection",
  liF5: "Policy review and nomination guidance",
  hiTitle: "Health Insurance",
  hiDesc:
    "A medical emergency can wipe out savings if you are uninsured. We recommend the best health insurance plans to protect you and your family from rising healthcare costs.",
  hiF1: "Individual, family floater, and senior citizen plans",
  hiF2: "Wide network hospitals for cashless treatment",
  hiF3: "Coverage for pre-hospitalisation and post-hospitalisation expenses",
  hiF4: "Critical illness riders and top-up plans for extra coverage",
  hiF5: "Claim assistance and policy renewal support",
  giTitle: "General Insurance",
  giDesc:
    "General insurance protects your assets — home, vehicle, and more — from unexpected losses. We help you find the right plan at the best premium.",
  giF1: "Motor insurance for cars and two-wheelers",
  giF2: "Home insurance against fire, theft, and natural disasters",
  giF3: "Quick claim settlement support",
  giF4: "Comprehensive and third-party coverage options",
  giF5: "Annual policy renewals and premium comparison",
  sipTitle: "SIP – Systematic Investment Plan",
  sipDesc:
    "SIP allows you to invest a fixed amount in mutual funds at regular intervals. It instills financial discipline, leverages rupee cost averaging, and grows wealth steadily over time.",
  sipF1: "Start with as little as ₹500 per month",
  sipF2: "Rupee cost averaging reduces market timing risk",
  sipF3: "Flexible SIP dates and amounts",
  sipF4: "Step-up SIP to increase contributions with income growth",
  sipF5: "Long-term wealth compounding for all life goals",
  swpTitle: "SWP – Systematic Withdrawal Plan",
  swpDesc:
    "SWP lets you withdraw a fixed amount from your mutual fund at regular intervals. It is ideal for retirees and those seeking a steady income stream without liquidating all investments.",
  swpF1: "Regular monthly income from mutual fund corpus",
  swpF2: "Partial redemption preserves remaining investment",
  swpF3: "Tax-efficient compared to FD interest income",
  swpF4: "Customisable frequency — monthly, quarterly, or annual",
  swpF5: "Ideal for retirement income planning",
  stpTitle: "STP – Systematic Transfer Plan",
  stpDesc:
    "STP enables automatic transfer of funds from one mutual fund to another at regular intervals. It is commonly used to safely move from debt to equity funds over time.",
  stpF1: "Gradual transfer from liquid/debt to equity funds",
  stpF2: "Reduces timing risk when entering equity markets",
  stpF3: "Fixed and flexible STP options",
  stpF4: "Helps deploy idle funds parked in liquid/debt schemes",
  stpF5: "Ideal for investors with lump sum looking to reduce risk",
  cprTitle: "Client Portfolio Review",
  cprDesc:
    "Regular portfolio reviews ensure your investments remain aligned with your financial goals, risk appetite, and market conditions. We provide structured, periodic assessments with actionable recommendations.",
  cprF1: "Comprehensive review of all holdings across mutual funds",
  cprF2: "Performance analysis vs. benchmarks and goals",
  cprF3: "Rebalancing recommendations based on life stage changes",
  cprF4: "Risk assessment and portfolio health check",
  cprF5: "Transparent reporting with clear next-step action plan",
  kidsMarriageTitle: "Kids Marriage Planning",
  kidsMarriageDesc:
    "Start saving early to build a comfortable corpus for your child's marriage. Our goal-based SIP plans help you accumulate wealth systematically so you are fully prepared when the big day arrives.",
  kidsMarriageF1: "Goal-based SIP tailored to marriage timeline and budget",
  kidsMarriageF2: "Corpus estimation accounting for inflation and rising costs",
  kidsMarriageF3: "Regular portfolio review to stay on track with the target",
  kidsMarriageF4:
    "Flexible step-up SIP to increase contributions as income grows",
  kidsMarriageF5: "Tax-efficient fund selection to maximize net returns",
  kidsEducationTitle: "Kids Education Planning",
  kidsEducationDesc:
    "Secure your child's academic future with a disciplined investment plan. We help you select the right mix of equity and debt funds aligned to your child's age and education goalpost.",
  kidsEducationF1:
    "Goal-based plan mapped to school, college, and higher education milestones",
  kidsEducationF2:
    "Inflation-adjusted corpus planning for rising education costs",
  kidsEducationF3:
    "Equity-oriented SIPs for long-term growth with gradual de-risking",
  kidsEducationF4: "Periodic reviews to rebalance as the goal approaches",
  kidsEducationF5: "Guidance on child-specific plans and ULIP alternatives",
  taxSavingTitle: "Tax Saving",
  taxSavingDesc:
    "Reduce your tax liability while building long-term wealth. We guide you through ELSS mutual funds and other tax-saving instruments under Section 80C.",
  taxSavingF1:
    "ELSS mutual funds with the shortest lock-in (3 years) under 80C",
  taxSavingF2: "Up to ₹1.5 lakh deduction under Section 80C annually",
  taxSavingF3:
    "Dual benefit of tax saving and potential for equity-linked returns",
  taxSavingF4: "Comparison of ELSS vs PPF, NSC, and other 80C options",
  taxSavingF5: "Health insurance premium deduction guidance under Section 80D",
  dreamCarTitle: "Dream Car",
  dreamCarDesc:
    "Turn your dream of owning the perfect car into a reality with a structured savings plan. We help you set a realistic timeline and invest systematically.",
  dreamCarF1: "Goal corpus calculation based on target car price and timeline",
  dreamCarF2: "Short-to-medium term debt or hybrid fund recommendations",
  dreamCarF3: "SIP plan that accumulates the down payment or full amount",
  dreamCarF4: "Guidance on balancing loan vs lump-sum purchase strategy",
  dreamCarF5: "Regular progress tracking to stay on target",
  dreamHouseTitle: "Dream House",
  dreamHouseDesc:
    "Owning your dream home is one of life's biggest financial goals. We help you create a step-by-step investment roadmap from accumulating a down payment to planning EMI without financial stress.",
  dreamHouseF1:
    "Down payment corpus planning through disciplined SIP investments",
  dreamHouseF2:
    "Timeline-based asset allocation (equity for long term, debt near goal)",
  dreamHouseF3:
    "Guidance on home loan tax benefits under Section 80C and 24(b)",
  dreamHouseF4:
    "Strategies to prepay home loan faster using surplus investments",
  dreamHouseF5: "Coordinated plan covering insurance, EMI, and emergency fund",
  dreamVacationTitle: "Dream Vacation",
  dreamVacationDesc:
    "Whether it's a family trip abroad or a bucket-list adventure, we help you plan and save for it without disrupting your everyday finances.",
  dreamVacationF1: "Short-term goal-based investment plan for holiday corpus",
  dreamVacationF2:
    "Liquid or ultra-short debt funds for capital safety near the date",
  dreamVacationF3:
    "Forex and travel insurance guidance for international trips",
  dreamVacationF4: "Recurring deposit or SIP comparison for the best return",
  dreamVacationF5:
    "Structured saving so vacation doesn't dip into emergency funds",
  paiTitle: "Personal Accident Insurance",
  paiDesc:
    "Personal Accident Insurance provides financial protection in case of accidental death, disability, or injury. It ensures you and your family are financially secure against unforeseen accidents.",
  paiF1: "Lump sum benefit on accidental death or permanent disability",
  paiF2: "Weekly compensation for temporary total disability",
  paiF3: "Medical expense reimbursement for accident-related treatment",
  paiF4: "Coverage for partial and permanent disabilities",
  paiF5: "Affordable premiums with wide coverage options",
  termTitle: "TERM Insurance",
  termDesc:
    "Term insurance is the purest form of life cover — high sum assured at low premium. It ensures your family receives financial support in your absence without the complexity of investment-linked products.",
  termF1: "High life cover at the most affordable premium",
  termF2: "Coverage up to age 85 with flexible policy terms",
  termF3: "Critical illness and accidental death benefit riders",
  termF4: "Return of premium option available",
  termF5: "Online and offline policy options from top insurers",
  tradTitle: "TRADITIONAL Insurance",
  tradDesc:
    "Traditional insurance plans combine life cover with guaranteed savings. These plans are ideal for conservative investors seeking assured returns along with insurance protection.",
  tradF1: "Guaranteed maturity benefit with life cover",
  tradF2: "Annual bonus additions to increase corpus",
  tradF3: "Loan facility against policy for liquidity",
  tradF4: "Safe, low-risk savings with life protection",
  tradF5: "Ideal for long-term savings goals like child education or wedding",
  medTitle: "MEDICLAIM",
  medDesc:
    "Mediclaim reimburses hospitalisation expenses incurred due to illness or injury. It is one of the most essential insurance covers for every individual and family to manage unexpected medical bills.",
  medF1: "Cashless hospitalisation across a wide network of hospitals",
  medF2: "Coverage for pre- and post-hospitalisation expenses",
  medF3: "Day-care procedures and ambulance charges included",
  medF4: "Family floater plans for comprehensive family coverage",
  medF5: "Tax benefit on paid premium under Section 80D",
};
const t = (key) => strings[key] ?? key;

const Services = () => {
  return (
    <main className="font-dm">
      <Head>
        <title>
          Services | Sankalpshree Invest – LIC, Mutual Funds, Insurance &amp;
          Wealth Planning by Seetaram Sharma, Ujjain
        </title>
        <meta
          name="description"
          content="Explore financial services by Mr. Seetaram Sharma at Sankalpshree Invest, Ujjain — LIC life insurance (agent since 2008), mutual funds, health insurance (Mediclaim), retirement planning, child future planning, and . Member Zonal Manager's Club for Agents, LIC."
        />
        <meta
          name="keywords"
          content="LIC agent Ujjain, life insurance Ujjain, mutual funds Ujjain, Mediclaim Ujjain, retirement planning Ujjain, child future planning Ujjain, , Seetaram Sharma LIC, Sankalpashree Wealth"
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

            {/* ── Kids Marriage ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="kids-marriage"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("kidsMarriageTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">
                  {t("kidsMarriageDesc")}
                </p>
                <ul className="space-y-4">
                  {[
                    "kidsMarriageF1",
                    "kidsMarriageF2",
                    "kidsMarriageF3",
                    "kidsMarriageF4",
                    "kidsMarriageF5",
                  ].map((k) => (
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
                  src="/images/services/mf.png"
                  alt="Kids Marriage Planning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── Kids Education ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="kids-education"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("kidsEducationTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">
                  {t("kidsEducationDesc")}
                </p>
                <ul className="space-y-4">
                  {[
                    "kidsEducationF1",
                    "kidsEducationF2",
                    "kidsEducationF3",
                    "kidsEducationF4",
                    "kidsEducationF5",
                  ].map((k) => (
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
                  src="/images/services/sip.png"
                  alt="Kids Education Planning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── Tax Saving ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="tax-saving"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("taxSavingTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">
                  {t("taxSavingDesc")}
                </p>
                <ul className="space-y-4">
                  {[
                    "taxSavingF1",
                    "taxSavingF2",
                    "taxSavingF3",
                    "taxSavingF4",
                    "taxSavingF5",
                  ].map((k) => (
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
                  src="/images/services/rp.png"
                  alt="Tax Saving"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── Dream Car ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="dream-car"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("dreamCarTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">
                  {t("dreamCarDesc")}
                </p>
                <ul className="space-y-4">
                  {[
                    "dreamCarF1",
                    "dreamCarF2",
                    "dreamCarF3",
                    "dreamCarF4",
                    "dreamCarF5",
                  ].map((k) => (
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
                  src="/images/services/gi.png"
                  alt="Dream Car Planning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── Dream House ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="dream-house"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("dreamHouseTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">
                  {t("dreamHouseDesc")}
                </p>
                <ul className="space-y-4">
                  {[
                    "dreamHouseF1",
                    "dreamHouseF2",
                    "dreamHouseF3",
                    "dreamHouseF4",
                    "dreamHouseF5",
                  ].map((k) => (
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
                  src="/images/services/li.png"
                  alt="Dream House Planning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* ── Dream Vacation ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="dream-vacation"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  {t("dreamVacationTitle")}
                </h3>
                <p className="text-gray-600 mb-4 max-w-full">
                  {t("dreamVacationDesc")}
                </p>
                <ul className="space-y-4">
                  {[
                    "dreamVacationF1",
                    "dreamVacationF2",
                    "dreamVacationF3",
                    "dreamVacationF4",
                    "dreamVacationF5",
                  ].map((k) => (
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
                  alt="Dream Vacation Planning"
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
