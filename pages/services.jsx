import React from 'react'
import Image from "next/image";
import Navbar from "./components/header";
import Footer from "./components/footer";

const Services = () => {
  return (
    <>
    <Navbar />
    <section
      className="bg-cover h-[400px] md:h-[450px] lg:h-[500px] flex items-start object-cover object-center justify-center flex-col relative"
      style={{ backgroundImage: "url('/images/home.png')" }}>
      <div className="absolute inset-0 bg-gray-800/50"></div>
      <div className="max-w-[1300px] mx-auto px-4 flex items-start justify-start flex-col w-full gap-3 relative z-10 lg:mt-0 mt-10">
        <h1 className="font-bricolageGrotesque text-3xl lg:text-5xl text-left text-white relative z-0 font-bold">
       Our Services & Products
        </h1>
        <p className="text-white text-sm font-medium lg:text-base font-plusJakartaSans max-w-xl">
          Integrated freight and fulfillment solutions that manage
          transportation, storage, and order delivery seamlessly, helping
          businesses move faster and scale efficiently.
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
    <section className="w-full bg-[#F8F9FB] lg:py-16 py-12">
      <div className="lg:max-w-[1300px] mx-auto px-4 lg:px-6 text-left ">
        <div className="flex flex-col text-left mb-4">
          <h2 className="font-sora text-3xl lg:text-4xl font-semibold text-left mb-2">
            PRODUCTS (Financial Instruments You Invest In)
          </h2>
          <p className="text-gray-600 lg:text-lg text-base text-left mb-4 max-w-full">
            These are actual financial products clients purchase/invest in. These are regulated financial products offered through AMCs / Insurance Companies / PMS providers.
          </p>
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
          <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
            <h3 id="mutual-funds" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Mutual Funds
            </h3>

            <p className="text-gray-600 mb-4 max-w-full">
              A regulated investment product offered through AMCs.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                </svg>
                <p className="text-gray-700 text-sm md:text-base">
                  Mutual Funds
                </p>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                </svg>
                <p className="text-gray-700 text-sm md:text-base">
                  Portfolio Management Service (PMS)
                </p>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                </svg>
                <p className="text-gray-700 text-sm md:text-base">
                  Life Insurance
                </p>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                </svg>
                <p className="text-gray-700 text-sm md:text-base">
                  Mediclaim (Health Insurance)
                </p>
              </li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
            <Image src="/images/1.png" alt="Mutual Funds" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" width={800} height={600} />
          </div>
        </div>
   
        <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
          <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-l-3xl overflow-hidden h-full">
            <Image src="/images/services-main/air-freight.png" alt="Portfolio Management Service" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" width={800} height={600} />
          </div>
          <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
            <h3 id="pms" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Portfolio Management Service (PMS)
            </h3>

            <p className="text-gray-600 mb-4 max-w-full">
              A regulated investment product offered through PMS providers.
            </p>
          </div>
        </div>
     
        <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
          <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
            <h3 id="life-insurance" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Life Insurance
            </h3>

            <p className="text-gray-600 mb-4 max-w-full">
              A regulated protection product offered through Insurance Companies.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
            <Image src="/images/services-main/trucking.png" alt="Life Insurance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" width={800} height={600} />
          </div>
        </div>
      </div>
   
   
   
      <div className="lg:max-w-[1300px] mx-auto px-4 lg:px-6 text-left">
        <div className="flex flex-col text-left mb-4">
          <h2 className="font-sora text-3xl lg:text-4xl font-semibold text-left mb-2">
            SERVICES (Advisory & Planning Support)
          </h2>
          <p className="text-gray-600 text-lg text-left mb-4 max-w-full">
            These are professional financial advisory services. These involve strategy, financial planning, consultation, and goal-based advisory.
          </p>
        </div>
       
        <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
          <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
            <h3 id="mediclaim" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Mediclaim (Health Insurance)
            </h3>

            <p className="text-gray-600 mb-4 max-w-full">
              A regulated health insurance product offered through Insurance Companies.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
            <Image src="/images/services-main/customs-clearance.png" alt="Mediclaim" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" width={800} height={600} />
          </div>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
          <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
            <Image src="/images/services-main/tariff-inquiry.png" alt="Child Future Planning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" width={800} height={600} />
          </div>
          <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
            <h3 id="child-future-planning" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Child Future Planning
            </h3>

            <p className="text-gray-600 mb-4 max-w-full">
              Goal-based planning and consultation to support your child’s future needs.
            </p>
          </div>
        </div>
       
        <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
          <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
            <h3 id="retirement-planning" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Retirement Planning
            </h3>

            <p className="text-gray-600 mb-4 max-w-full">
              Advisory and strategy support for long-term retirement readiness.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
            <Image src="/images/services-main/dgft.png" alt="Retirement Planning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" width={800} height={600} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
          <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-l-3xl overflow-hidden h-full">
            <Image src="/images/services-main/licenses.png" alt="Tax Planning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" width={800} height={600} />
          </div>
          <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
            <h3 id="tax-planning" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Tax Planning
            </h3>

            <p className="text-gray-600 mb-4 max-w-full">
              Strategy and consultation to optimize taxes aligned with your financial goals.
            </p>
          </div>
        </div>
      </div>
 
    
    </section>
    <Footer/>
    </>
  )
}

export default Services