import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/header";
import Footer from "./components/footer";

const blogCards = [
  {
    title: "Retirement Planning",
    description: "Smart retirement strategies for job professionals.",
    href: "/seoBlogs/RetirementPlanning",
  },
  {
    title: "SIP Investment Guide",
    description: "Build long-term wealth with disciplined SIP investing.",
    href: "/seoBlogs/SIP",
  },
  {
    title: "Tax Saving Investments",
    description: "Tax-efficient investing with mutual funds and insurance.",
    href: "/seoBlogs/TaxSaving",
  },
  {
    title: "Mutual Funds Guide",
    description: "Understand fund types, risk, and growth strategies.",
    href: "/seoBlogs/MutualFunds",
  },
  {
    title: "SWP in Mutual Funds",
    description: "Create stable income using SWP withdrawal planning.",
    href: "/seoBlogs/SWP",
  },
  {
    title: "STP in Mutual Funds",
    description: "Manage lump sum investments with structured STP transfers.",
    href: "/seoBlogs/STP",
  },
  {
    title: "Life Insurance Guide",
    description: "Protect your family while planning long-term wealth.",
    href: "/seoBlogs/LifeInsurance",
  },
  {
    title: "Life & General Insurance",
    description: "Balance protection and growth with complete insurance planning.",
    href: "/seoBlogs/GeneralInsurance",
  },
  {
    title: "Best Investment Consultant",
    description: "How to choose the right advisor for wealth management.",
    href: "/seoBlogs/BestInvestmentConsultant",
  },
  {
    title: "Best Mutual Fund Consultant",
    description: "Find expert guidance for SIP, STP, and SWP strategies.",
    href: "/seoBlogs/BestMutualFundsConsultant",
  },
];

export default function Insights() {
  return (
    <>
      <Head>
        <title>Insights | Sankalpshree Wealth</title>
        <meta
          name="description"
          content="Explore expert blog insights on SIP, STP, SWP, mutual funds, insurance, and wealth management."
        />
      </Head>

      <main>
        <Navbar />

        <section
          className="bg-cover h-[360px] md:h-[420px] lg:h-[500px] flex items-center justify-center flex-col relative font-dm"
          style={{ backgroundImage: "url('/images/home.png')" }}
        >
          <div className="absolute inset-0 bg-gray-800/50"></div>
          <div className="lg:max-w-[1300px] mx-auto px-4 flex items-center justify-center flex-col w-full gap-3 relative z-10 text-center">
            <h1 className="font-lexend text-3xl lg:text-5xl text-white font-bold">Insights</h1>
            <p className="text-white text-sm font-medium lg:text-base max-w-2xl">
              Explore 10 expert blogs on SIP, STP, SWP, mutual funds, insurance, and smarter
              wealth management strategies.
            </p>
            <a
              href="/contact-us"
              className="ml-0 mt-2 rounded-full bg-white text-black font-semibold text-sm lg:text-base px-2 py-1 lg:px-3 lg:py-1.5 flex items-center transition-colors duration-200"
            >
              Contact Us
              <span className="ml-2 w-8 h-8 rounded-full bg-theme1 flex items-center justify-center">
                <svg className="lg:w-5 lg:h-5 w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
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

        <section className="bg-[#F8F9FB] py-12 lg:py-16">
          <div className="max-w-[1300px] mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogCards.map((blog, index) => (
                <Link
                  key={blog.href}
                  href={blog.href}
                  className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition group"
                >
                  <div className="h-40 bg-gradient-to-r from-theme1/95 to-indigo-500/90 flex items-center justify-center p-4">
                    <h2 className="text-white text-center font-semibold text-lg leading-snug">
                      {blog.title}
                    </h2>
                  </div>

                  <div className="p-4">
                    <p className="text-gray-600 text-sm leading-6 min-h-[72px]">{blog.description}</p>
                    <p className="mt-4 text-theme1 text-sm font-semibold inline-flex items-center">
                      Read blog
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-2">Article {index + 1} of 10</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
