import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./components/header";
import Image from "next/image";
import Footer from "./components/footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contactus() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/sankalpshreeinvest@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "New Contact Form Submission – Sankalpshree Invest",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            _captcha: "false",
          }),
        }
      );

      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <Head>
        <title>
          Contact Us | Sankalpshree Invest – Reach Seetaram Sharma, LIC Agent
          &amp; Financial Advisor, Ujjain
        </title>
        <meta
          name="description"
          content="Contact Mr. Seetaram Sharma at Sankalpshree Invest, Ujjain — LIC agent since 2008, Member Zonal Manager's Club for Agents, and expert financial advisor. Reach us for mutual funds, LIC life insurance, Mediclaim, retirement planning, child future planning, PMS, and tax planning. Call +91 94250-93166."
        />
        <meta
          name="keywords"
          content="contact LIC agent Ujjain, Seetaram Sharma contact, Sankalpshree Invest contact, financial advisor Ujjain contact, mutual funds consultation Ujjain, LIC insurance Ujjain, 94250-93166, sankalpshreeinvest@gmail.com"
        />
      </Head>
      <Navbar />

      {/* Banner Section */}
      <section
        className="bg-cover h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center flex-col relative font-dm"
        style={{ backgroundImage: "url('/images/home.png')" }}
      >
        <div className="absolute inset-0 bg-gray-800/50"></div>
        <div className="lg:max-w-[1300px] mx-auto px-4 flex items-center justify-center flex-col w-full gap-3 relative z-10 text-center">
          <h1 className="font-lexend text-3xl lg:text-5xl text-left text-white font-bold">
            {t("contactPageTitle")}
          </h1>
          <p className="text-white text-sm font-medium lg:text-base max-w-xl">
            {t("contactPageSubtitle")}
          </p>
          <a
            href="tel:+919425093166"
            className="ml-0 mt-1 rounded-full bg-white text-black font-semibold text-sm lg:text-base px-2 py-1 lg:px-3 lg:py-1.5 flex items-center transition-colors duration-200"
          >
            {t("callUs")}
            <span className="ml-2 w-8 h-8 rounded-full bg-theme1 flex items-center justify-center">
              <svg className="lg:w-5 lg:h-5 w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M18 6H10M18 6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto lg:max-w-[1300px] px-4">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            {/* ── Left: Contact Info Panel ── */}
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <Image
                    src="https://pagedone.io/asset/uploads/1696488602.png"
                    alt="ContactUs"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                    width={500}
                    height={300}
                  />
                  <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                    {t("contactPageTitle")}
                  </h1>
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                    <div className="bg-white/20 rounded-lg p-6 block">
                      {/* Phone */}
                      <a href="tel:+919425093166" className="flex items-center mb-6">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h5 className="text-white text-lg font-semibold leading-6 ml-5">+91 94250-93166</h5>
                      </a>
                      {/* Email */}
                      <a href="mailto:sankalpshreeinvest@gmail.com" className="flex items-center mb-6">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <h5 className="text-white text-lg font-semibold leading-6 ml-5">sankalpshreeinvest@gmail.com</h5>
                      </a>
                      {/* Address */}
                      <div className="flex items-start">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-1">
                          <path d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z" stroke="#ffffff" strokeWidth="2" />
                          <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="#ffffff" strokeWidth="2" />
                        </svg>
                        <h5 className="text-white text-base font-semibold leading-6 ml-5">{t("address")}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Contact Form ── */}
            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                {t("sendMessage")}
              </h2>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <svg className="w-16 h-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-800">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. We will get back to you shortly.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 mb-10"
                    placeholder={t("namePlaceholder")}
                    required
                  />
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 mb-10"
                    placeholder={t("emailPlaceholder")}
                    required
                  />
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 pl-4 mb-10"
                    placeholder={t("phonePlaceholder")}
                  />
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-3xl border border-gray-200 focus:outline-none focus:border-indigo-400 p-4 mb-10"
                    placeholder={t("messagePlaceholder")}
                    required
                  />

                  {status === "error" && (
                    <p className="text-red-500 text-sm mb-4 text-center">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-300 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      t("send")
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
