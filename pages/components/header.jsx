import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [businessDropdown, setBusinessDropdown] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full mx-auto z-50">
      <div className="lg:max-w-[1300px] mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              className="w-28 h-auto"
              src="/images/logo.png"
              alt="logo"
              width={60}
              height={60}
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-black font-montserrat text-base font-medium">
            <Link
              href="/"
              className="relative rounded-full py-1 transition-colors group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            <Link
              href="/about-us"
              className="relative rounded-full py-1 transition-colors group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>

            <div className="relative inline-flex text-gray-800">
              <button
                type="button"
                className="relative flex items-center gap-2 rounded-full"
                onMouseEnter={() => setBusinessDropdown(true)}
                onMouseLeave={() => setBusinessDropdown(false)}
              >
                Services & Products
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <svg
                  className={`w-2.5 h-2.5 transform transition-transform duration-200 ${
                    businessDropdown ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-200 min-w-[15rem] bg-white shadow-lg rounded-lg p-2 ${
                  businessDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setBusinessDropdown(true)}
                onMouseLeave={() => setBusinessDropdown(false)}
              >
                <Link
                  href="/components/services"
                  className="relative block py-2 px-4 hover:bg-blue-500 hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Mutual Funds
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
                <Link
                  href="/services"
                  className="relative block py-2 px-4 hover:bg-blue-500 hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Child Future Planning
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>

                <Link
                  href="/services"
                  className="relative block py-2 px-4 hover:bg-blue-500 hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Retirement Planning
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
                <Link
                  href="/services"
                  className="relative block py-2 px-4 hover:bg-blue-500 hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Portfolio Management Service (PMS)
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>

                <Link
                  href="/services"
                  className="relative block py-2 px-4 hover:bg-blue-500 hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Life Insurance
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
                <Link
                  href="/ components/Services"
                  className="relative block py-2 px-4 hover:bg-blue-500 hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Mediclaim
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
                <Link
                  href="/services/Web&mobile"
                  className="relative block py-2 px-4 hover:bg-blue-500 hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
                >
                  Tax Planning
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
            </div>
            <Link
              href="/blogs"
              className="relative rounded-full py-1 transition-colors group"
            >
              Blogs
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>

            <Link
              href="/contact-us"
              className="font-medium text-base transition-colors duration-200 font-montserrat bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-full py-2"
            >
              Contact now
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed md:hidden top-0 right-0 w-full h-screen bg-white transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Link href="/" className="flex items-center">
              <Image
                className="w-16 h-auto"
                src="/images/logo.png"
                alt="logo"
                width={60}
                height={60}
                priority
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
            <div className="space-y-4">
              <Link
                href="/"
                className="block px-4 py-3 text-lg hover:bg-blue-50 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                href="/components/About"
                className="block px-4 py-3 text-lg hover:bg-blue-50 rounded-lg transition-colors"
              >
                About Us
              </Link>

              {/* Mobile Business Solutions */}
              <div>
                <button
                  onClick={() => setBusinessDropdown(!businessDropdown)}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg hover:bg-blue-50 rounded-lg"
                >
                  Business Solutions
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      businessDropdown ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  className={`mt-2 space-y-2 pl-8 ${
                    businessDropdown ? "block" : "hidden"
                  }`}
                >
                  <Link
                    href="/services/Dynamicsgp"
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Microsoft Dynamics GP
                  </Link>
                  <Link
                    href="/services/F&O"
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Microsoft Dynamics 365 F&O
                  </Link>
                  <Link
                    href="/services/Bc"
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Dynamics 365 Business Central
                  </Link>
                  <Link
                    href="/services/Powerbi"
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Power BI and Power Apps
                  </Link>
                  <Link
                    href="/services/Sap"
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    SAP Business One/HANA
                  </Link>
                  <Link
                    href="/services/Servicenow"
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Service Now
                  </Link>
                  <Link
                    href="/services/Web&mobile"
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Web & Mobile Apps
                  </Link>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/Contactus"
                  className="block w-full text-center font-medium text-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Contact now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
