import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Navbar from "./components/header";
import Footer from "./components/footer";
import { useLanguage } from "@/lib/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/images/viewAllImages");
        const text = await res.text();
        if (text.trimStart().startsWith("<"))
          throw new Error("API route error (returned HTML)");
        const data = JSON.parse(text);
        if (!res.ok) throw new Error(data.error || "Failed to fetch images");
        const formattedImages = (data.images || []).map((url) => ({
          url,
          name: url.split("/").pop(),
        }));
        setImages(formattedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goPrev, goNext]);

  if (loading) {
    return (
      <main className="font-dm">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p>{t("loadingImages")}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="font-dm">
      <Head>
        <title>Gallery | Sankalpashree Wealth – Events &amp; Milestones by Seetaram Sharma, Mutual Fund Distributor &amp; LIC Agent, Ujjain</title>
        <meta name="description" content="Browse the gallery of Sankalpashree Wealth — client milestones, LIC insurance events, SIP & financial planning workshops, and team moments from Ujjain. Led by Mr. Seetaram Sharma, LIC agent since 2008 and Member Zonal Manager's Club for Agents." />
        <meta name="keywords" content="Sankalpashree Wealth gallery, Seetaram Sharma events Ujjain, LIC agent Ujjain, Mutual Fund Distributor events Ujjain, SIP workshop Ujjain, wealth planning gallery Ujjain" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Seetaram Sharma – Sankalpashree Wealth" />
        <link rel="canonical" href="https://www.sankalpashreewealth.in/gallery" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sankalpashree Wealth" />
        <meta property="og:title" content="Gallery | Sankalpashree Wealth – Ujjain" />
        <meta property="og:description" content="View client milestones, LIC events, and financial planning workshops at Sankalpashree Wealth, Ujjain — led by Mr. Seetaram Sharma since 2008." />
        <meta property="og:url" content="https://www.sankalpashreewealth.in/gallery" />
        <meta property="og:image" content="https://www.sankalpashreewealth.in/images/home.png" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | Sankalpashree Wealth, Ujjain" />
        <meta name="twitter:description" content="Client milestones, LIC events and SIP workshops from Sankalpashree Wealth, Ujjain — Mr. Seetaram Sharma since 2008." />
        <meta name="twitter:image" content="https://www.sankalpashreewealth.in/images/home.png" />
      </Head>

      <Navbar />

      {/* Hero Banner */}
      <section
        className="bg-cover h-[400px] md:h-[450px] lg:h-[500px] flex items-start justify-center flex-col relative font-dm"
        style={{ backgroundImage: "url('/images/home.png')" }}
      >
        <div className="absolute inset-0 bg-gray-800/50"></div>
        <div className="lg:max-w-[1300px] mx-auto px-4 flex items-start justify-start flex-col w-full gap-3 relative z-10 text-center">
          <h1 className="font-lexend text-3xl lg:text-5xl text-left text-white font-bold">
            {t("galleryPageTitle")}
          </h1>
          <p className="text-white text-sm font-medium lg:text-base max-w-xl">
            {t("galleryPageSubtitle")}
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

      {/* Gallery Grid */}
      <section className="w-full bg-[#F8F9FB] py-12 lg:py-16">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          {images.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {t("noImagesFound")}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <img
                    src={img.url}
                    alt={img.name}
                    onError={(e) => (e.target.src = "/fallback.png")}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay with expand icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Slide counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tracking-widest select-none">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 md:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].name}
              onError={(e) => (e.target.src = "/fallback.png")}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl select-none"
              draggable={false}
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
            className="absolute right-3 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default Gallery;
