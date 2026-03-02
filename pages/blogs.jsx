import React from 'react'
import Image from "next/image";
import Navbar from "./components/header";
import Footer from "./components/footer";

const Blogs = () => {
  return (
    <>
    <Navbar />
    <section
      className="bg-cover h-[400px] md:h-[450px] lg:h-[500px] flex items-start object-cover object-center justify-center flex-col relative"
      style={{ backgroundImage: "url('/images/home.png')" }}>
      <div className="absolute inset-0 bg-gray-800/50"></div>
      <div className="max-w-[1300px] mx-auto px-4 flex items-start justify-start flex-col w-full gap-3 relative z-10 lg:mt-0 mt-10">
        <h1 className="font-bricolageGrotesque text-3xl lg:text-5xl text-left text-white relative z-0 font-bold">
       Our Blogs
        </h1>
        <p className="text-white text-sm font-medium lg:text-base font-plusJakartaSans max-w-xl">
          Stay updated with the latest industry trends, insights, and expert advice on logistics, supply chain management, and global trade.
        </p>
        <a href="/contact-us" className="ml-0 mt-1 rounded-full bg-white text-black font-semibold text-sm lg:text-base px-2 py-1 lg:px-3 lg:py-1.5 flex items-center transition-colors duration-200">
          Contact us
          <span className="ml-2 w-8 h-8 rounded-full bg-theme1 flex items-center justify-center transition-colors duration-200">
            <svg className="lg:w-5 lg:h-5 w-4 h-4 text-white transition-colors duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M18 6H10M18 6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </span>
        </a>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Blogs
