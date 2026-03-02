import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
   
      <footer className="bg-theme1 w-full text-gray-900">
        <div className="lg:max-w-[1300px] px-4  mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 pt-8 lg:pt-12 mb-8 lg:mb-12">
          <div className="col-span-full sm:col-span-2 lg:col-span-1">
            <div className="mb-4 ">
              <Link
                href="/"
                aria-label="Home page"
                target="_blank"
                className="inline-block mb-4">
                <Image
                  className="w-[100px] h-[65px] lg:w-[100px] lg:h-[80px] mt-2 rounded-xl bg-white"
                  src="/images/logo.png"
                  alt=""
                  width={100}
                  height={65}
                />
              </Link>
            </div>
            <p className="text-gray-50 font-semibold text-sm lg:text-base mb-6">
    We at Sankalp Shree Investment specialize in providing mutual fund advisory, insurance and comprehensive financial planning solutions.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://www.linkedin.com/company/"
                target="_blank"
                className="text-blue-50 hover:text-white active:text-blue-600 transition duration-100">
                <svg 
                  className="w-6 h-6 lg:w-7 lg:h-7"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="text-blue-50 hover:text-white active:text-blue-600 transition duration-100">
                <svg
                  className="w-6 h-6 lg:w-7 lg:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                    fill="currentColor"></path>
                </svg>
              </Link>
            
            </div>
          </div>

          <div className="col-span-1">
            <div className="text-white font-extrabold tracking-widest uppercase text-sm lg:text-base mb-4">
              Quick Links
            </div>

            <nav className="flex flex-col gap-2 lg:gap-3">
              <div>
                <Link
                  href="/"
                  className="text-sm lg:text-base text-gray-50 hover:text-white">
                  Home
                </Link>
              </div>

              <div>
                <Link
                  href="/about-us"
                  className="text-sm lg:text-base text-gray-50 hover:text-white">
                  About us
                </Link>
              </div>

              <div>
                <Link
                  href="/Contactus"
                  className="text-sm lg:text-base text-gray-50 hover:text-white">
                  Contact us
                </Link>
              </div>
            </nav>
          </div>

          <div className="col-span-1">
            <div className="text-white font-extrabold tracking-widest uppercase text-sm lg:text-base mb-4">
              Services  & Products
            </div>
            <nav className="flex flex-col gap-2 lg:gap-3">
              <div>
                <Link
                  href="/services/Dynamicsgp"
                  className="text-sm lg:text-base text-gray-50 hover:text-white">
                  Mutual Funds
                </Link>
              </div>
              <div>
                <Link
                  href="/services/F&O"
                  className="text-sm lg:text-base text-gray-50 hover:text-white">
                 Child Future Planning
                </Link>
              </div>
              <div>
                <Link
                  href="/services/Bc"
                  className="text-sm lg:text-base text-gray-50 hover:text-white">
               Retirement Planning
                </Link>
              </div>
              <div>
                <Link
                  href="/services/Powerbi"
                  className="text-sm lg:text-base text-gray-50 hover:text-white">
             Portfolio Management Service (PMS)
                </Link>
              </div>
              <div>
                <Link
                  href="/services/Sap"
                  className="text-sm lg:text-base text-gray-50 hover:text-white">
                Life Insurance
                </Link>
              </div>
              <div>
                <Link
                  href="/services/Servicenow"
                  className="text-sm lg:text-base text-gray-50 hover:text-white">
             Mediclaim
                </Link>
              </div>
              <div>
                <Link
                  href="/services/Web&mobile"
                  className="text-sm lg:text-base text-gray-50 hover:text-white">
               Tax Planning
                </Link>
              </div>
            </nav>
          </div>

          <div className="col-span-1">
            <div className="text-white font-extrabold tracking-widest uppercase text-sm lg:text-base mb-4">
              Contact Us
            </div>
            <nav className="flex flex-col gap-4">
     
                <Link
                  href="tel:94250-93166"
                  className="flex items-start group">
                  <div className="rounded-full w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center">
                    <svg
                      className="w-6 lg:w-8"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17.5" fill="blue"></circle>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.5 11.125C20.5 10.9592 20.5659 10.8003 20.6831 10.6831C20.8003 10.5658 20.9593 10.5 21.125 10.5H24.875C25.0408 10.5 25.1998 10.5658 25.317 10.6831C25.4342 10.8003 25.5 10.9592 25.5 11.125V14.875C25.5 15.0408 25.4342 15.1997 25.317 15.3169C25.1998 15.4342 25.0408 15.5 24.875 15.5C24.7093 15.5 24.5503 15.4342 24.4331 15.3169C24.3159 15.1997 24.25 15.0408 24.25 14.875V12.6333L20.3167 16.5667C20.2595 16.6281 20.1905 16.6773 20.1138 16.7115C20.0371 16.7456 19.9544 16.764 19.8705 16.7655C19.7865 16.767 19.7032 16.7515 19.6254 16.7201C19.5475 16.6887 19.4768 16.6419 19.4175 16.5825C19.3581 16.5232 19.3114 16.4525 19.2799 16.3747C19.2485 16.2968 19.2331 16.2135 19.2345 16.1296C19.236 16.0456 19.2544 15.9629 19.2885 15.8862C19.3227 15.8096 19.372 15.7406 19.4334 15.6833L23.3667 11.75H21.125C20.9593 11.75 20.8003 11.6842 20.6831 11.5669C20.5659 11.4497 20.5 11.2908 20.5 11.125Z"
                        fill="white"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.25 11.75C9.25 11.087 9.51339 10.4511 9.98223 9.98223C10.4511 9.51339 11.087 9.25 11.75 9.25H12.8933C13.61 9.25 14.235 9.73833 14.4092 10.4333L15.33 14.1192C15.4046 14.4175 15.3895 14.7312 15.2867 15.021C15.1838 15.3108 14.9977 15.5638 14.7517 15.7483L13.6742 16.5567C13.5617 16.6408 13.5375 16.7642 13.5692 16.85C14.0395 18.129 14.7822 19.2906 15.7458 20.2542C16.7094 21.2178 17.871 21.9605 19.15 22.4308C19.2358 22.4625 19.3583 22.4383 19.4433 22.3258L20.2517 21.2483C20.4362 21.0023 20.6892 20.8162 20.979 20.7133C21.2688 20.6105 21.5825 20.5954 21.8808 20.67L25.5667 21.5908C26.2617 21.765 26.75 22.39 26.75 23.1075V24.25C26.75 24.913 26.4866 25.5489 26.0178 26.0178C25.5489 26.4866 24.913 26.75 24.25 26.75H22.375C15.1267 26.75 9.25 20.8733 9.25 13.625V11.75Z"
                        fill="white"></path>
                    </svg>
                  </div>
                  <div className="ml-3 mt-0.5 flex-col w-full h-auto text-left text-sm lg:text-base text-gray-50 hover:text-white">
                    +9194250-93166
                  </div>
                </Link>
        
              <Link
                href="mailto:sankalpshreinvest@gmail.com"
                target="_blank"
                className="flex items-start group cursor-pointer duration-150">
                <div className="rounded-full relative w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center">
                  <svg
                    className="w-6 lg:w-8"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.5" cy="17.5" r="17.5" fill="blue"></circle>
                    <path
                      d="M9.25 15.225V22.375C9.25 23.038 9.51339 23.6739 9.98223 24.1428C10.4511 24.6116 11.087 24.875 11.75 24.875H24.25C24.913 24.875 25.5489 24.6116 26.0178 24.1428C26.4866 23.6739 26.75 23.038 26.75 22.375V15.225L19.31 19.8025C18.916 20.0449 18.4626 20.1732 18 20.1732C17.5374 20.1732 17.084 20.0449 16.69 19.8025L9.25 15.225Z"
                      fill="white"></path>
                    <path
                      d="M26.75 13.7567V13.625C26.75 12.962 26.4866 12.3261 26.0178 11.8572C25.5489 11.3884 24.913 11.125 24.25 11.125H11.75C11.087 11.125 10.4511 11.3884 9.98223 11.8572C9.51339 12.3261 9.25 12.962 9.25 13.625V13.7567L17.345 18.7383C17.542 18.8595 17.7687 18.9237 18 18.9237C18.2313 18.9237 18.458 18.8595 18.655 18.7383L26.75 13.7567Z"
                      fill="white"></path>
                  </svg>
                </div>
                <div className="ml-3 mt-0.5 w-full h-auto text-left text-sm lg:text-base text-gray-50 hover:text-white">
                sankalpshreinvest@gmail.com
                </div>
              </Link>
              <div className="flex items-start">
                <div className="rounded-full relative w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center">
                  <svg
                    className="w-6 lg:w-8"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.5" cy="17.5" r="17.5" fill="blue"></circle>
                    <path
                      d="M17.5 9C14.7386 9 12.5 11.2386 12.5 14C12.5 17.5 17.5 23 17.5 23C17.5 23 22.5 17.5 22.5 14C22.5 11.2386 20.2614 9 17.5 9ZM17.5 15.75C16.5335 15.75 15.75 14.9665 15.75 14C15.75 13.0335 16.5335 12.25 17.5 12.25C18.4665 12.25 19.25 13.0335 19.25 14C19.25 14.9665 18.4665 15.75 17.5 15.75Z"
                      fill="white"></path>
                  </svg>
                </div>
                <div className="text-sm lg:text-base text-gray-50 ml-3 mt-0.5">
                C/113, 1st Floor, Dindayal Complex
Sanwer Road, Ujjain  , Madhya Pradesh
                  India
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="pb-4 bg-slate-900 py-2 w-full  flex flex-col lg:flex-row justify-center md:justify-between items-center text-blue-50 gap-2 lg:gap-0">
          <div className="lg:max-w-[1300px] mx-auto px-4">
          <Link
            href="/"
            className="font-medium text-base text-center hover:text-white uppercase">
            © 2026 Sankalp Shree Investment
          </Link>
          <div className="flex text-center text-base mr-10">
            Designed By&nbsp;
            <Link
              href="https://www.noxalgo.com"
              target="_blank"
              className="font-medium hover:text-white uppercase self-center">
              {" "}
           Noxalgo LLP
            </Link>
          </div>
          </div>
        </div>
      </footer>
    
  );
};

export default Footer;
