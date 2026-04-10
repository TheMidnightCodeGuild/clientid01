"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "./components/header";
import Footer from "./components/footer";
import { useLanguage } from "@/lib/LanguageContext";

const Blogs = () => {
  const { t } = useLanguage();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const parseJsonResponse = async (res) => {
    const text = await res.text();

    if (text.trimStart().startsWith("<")) {
      throw new Error("API returned HTML (route issue)");
    }

    try {
      return JSON.parse(text);
    } catch {
      throw new Error("Invalid JSON response");
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs/viewAllBlogs");
      const data = await parseJsonResponse(res);

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch blogs");
      }

      setBlogs(data.blogs || []);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const d = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p>{t("loadingBlogs")}</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Head>
        <title>
          Blogs | Sankalpshree Invest – Financial Planning, LIC & Wealth Insights
          by Seetaram Sharma, Ujjain
        </title>
        <meta
          name="description"
          content="Read expert financial insights from Mr. Seetaram Sharma at Sankalpshree Invest, Ujjain — covering LIC life insurance tips, mutual fund strategies, Mediclaim guidance, retirement planning, child future planning, and tax-saving advice."
        />
        <meta
          name="keywords"
          content="financial planning blog Ujjain, LIC insurance tips, mutual fund advice Ujjain, Mediclaim guide, retirement planning tips, child future planning, tax planning Ujjain, Seetaram Sharma blog, Sankalpshree Invest blog"
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
            {t("blogsTitle")}
          </h1>
          <p className="text-white text-sm font-medium lg:text-base max-w-xl">
            {t("blogsSubtitle")}
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

      <section className="bg-[#F8F9FB] py-12 lg:py-16">
        <div className="max-w-[1300px] mx-auto px-4">
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          {blogs.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              {t("noBlogsFound")}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog.blogId}
                  className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition"
                >
                  {/* Image */}
                  {blog.imageUrl ? (
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => (e.target.src = "/fallback.png")}
                    />
                  ) : (
                    <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                      {t("noImage")}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-indigo-600 text-sm mt-1 line-clamp-1">
                      {blog.subtitle}
                    </p>

                    <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                      {blog.content}
                    </p>

                    {blog.createdAt && (
                      <p className="text-xs text-gray-400 mt-3">
                        {formatDate(blog.createdAt)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blogs;
