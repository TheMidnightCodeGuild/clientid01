import React from "react";
import Navbar from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Navbar />
      <section
        className="bg-cover h-[200px] lg:h-[550px] mt-10 lg:mt-0 flex items-center bg-center object-cover justify-center flex-col relative"
        style={{
          backgroundImage: "url('/images/home.png')",
          objectFit: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      <div className="lg:max-w-[1300px] w-full mx-auto flex flex-col justify-start px-5 pt-10 md:pt-5">
          <h1 className="text-4xl lg:text-5xl uppercase tracking-wider font-bold z-10 font-lexend">
            About us
          </h1>
          <nav className="flex z-10 mt-3 font-lexend" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center text-base text-white">
                  <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path>
                  </svg>
                  Home
                </a>
              </li>

              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path>
                  </svg>
                  <span className="ms-1 text-base text-white md:ms-2">About Us</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="lg:max-w-[1300px] mx-auto px-4">
          <div className="grid lg:grid-cols-[420px_1fr] gap-8 items-start">
            <div className="relative">
              <div className="rounded-[20px] border border-gray-200 overflow-hidden bg-blue-50 p-2">
                <Image
                  src="/images/founder.png"
                  alt="Founder"
                  width={500}
                  height={500}
                  className="w-full h-[500px] object-top object-cover rounded-[20px]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 pb-2 mt-4">
                <div className="w-3 h-3 bg-theme1 rounded-full"></div>
                <span className="text-theme1 tracking-wider font-medium uppercase">
                  Our Founder
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-urbanist">
               Mr. Seetaram Sharma
              </h2>

              <div className="mt-2 text-base text-gray-700 leading-relaxed space-y-4 text-justify">
                <p>
                  Mr. Seetaram Sharma, Founder and Managing Partner of V. K. Ladha
                  &amp; Associates, is a distinguished Chartered Accountant with
                  extensive experience in audit, taxation, project finance, and
                  corporate advisory. His professional approach combines deep
                  technical knowledge, ethical standards, and a practical
                  understanding of complex financial and regulatory
                  environments.
                </p>

                <p>
                  With over four decades of professional practice, he has worked
                  closely with corporates, financial institutions, public sector
                  undertakings, trusts, and educational institutions. His
                  ability to understand client objectives, operational
                  realities, and risk frameworks enables him to deliver clear,
                  actionable, and compliant solutions through structured
                  processes, strong governance, and transparent communication.
                </p>

                <p>
                  With a client-centric and solution-oriented approach, he
                  remains committed to delivering practical advisory support
                  that strengthens financial controls, enhances regulatory
                  compliance, and promotes long-term business sustainability.
                  His deep involvement across engagements allows him to
                  anticipate challenges, mitigate risks, and provide timely
                  guidance tailored to each client’s unique operating
                  environment.lorem2 Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Corporis, non libero neque eaque delectus
                  odio alias? Mollitia, architecto cupiditate dolore atque
                  magni ducimus!
                </p>
              </div>
            </div>
          </div>

      
        </div>
      </section>

      <section className="text-gray-800 py-16">
        <div className="lg:max-w-[1300px] mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl mb-2 font-bold text-gray-800">
              Our Mission,Vision & Values
            </h1>
            <div className="h-1.5 w-32 bg-blue-600 rounded-full"></div>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 md:p-8 text-center rounded-3xl  bg-gray-500">
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
                  Our Mission
                </h2>
                <p className="text-sm md:text-base text-gray-200">
               To provide disciplined, transparent, and goal-based financial
  advisory services that help individuals and families build
  long-term wealth and financial security.
                </p>
              </div>
            </div>
            <div className="p-6 md:p-8 text-center bg-blue-400 rounded-3xl ">
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
                      d="M75.64 27.0001C78.8544 28.8904 81.75 31.2764 84.22 34.0701C86.6553 36.8123 88.6095 39.9464 90 43.3401C90.7797 45.2621 91.3985 47.2456 91.85 49.2701C92.8722 53.8729 92.9538 58.6349 92.09 63.2701C91.6139 65.769 90.8904 68.2144 89.93 70.5701L89.82 70.8201C87.82 75.8201 84.24 80.6601 80.82 85.4401C79.08 87.8601 77.35 90.2501 75.9 92.5701C75.4437 93.2918 74.7997 93.8759 74.037 94.2599C73.2743 94.6439 72.4216 94.8133 71.57 94.7501L44.05 98.8401C42.9151 99.0052 41.7589 98.7497 40.7993 98.1216C39.8397 97.4935 39.1428 96.5362 38.84 95.4301C38.1558 93.4312 37.3097 91.4914 36.31 89.6301C35.4799 88.0297 34.4736 86.5271 33.31 85.1501C31.89 83.5301 30.44 81.8701 29 80.0001C27.3936 77.8366 26.0068 75.5185 24.86 73.0801C23.6541 70.5168 22.7158 67.8359 22.06 65.0801C21.4092 62.3212 21.0903 59.4945 21.11 56.6601C21.139 53.713 21.532 50.7808 22.28 47.9301C23.0789 44.8704 24.2229 41.9114 25.69 39.1101L25.89 38.7501C27.781 35.5013 30.1816 32.5774 33 30.0901C35.7992 27.6436 38.9861 25.6801 42.43 24.2801L42.72 24.1701C45.2934 23.1473 47.9787 22.4324 50.72 22.0401C53.619 21.6331 56.5555 21.566 59.47 21.8401C62.3147 22.0989 65.1218 22.6724 67.84 23.5501C70.5619 24.402 73.1785 25.5594 75.64 27.0001ZM71.76 114.35C70.2522 116.95 68.0951 119.114 65.5 120.63C63.3058 121.908 60.8442 122.658 58.31 122.82C55.7639 122.982 53.2189 122.486 50.92 121.38C49.2737 120.569 47.7893 119.464 46.54 118.12L71.76 114.35ZM74.16 100.24V101.89V102.46C74.235 103.542 74.235 104.628 74.16 105.71L73.66 108.09L43.1 112.63L42.57 111.41L41.38 106.53V105.11L74.08 100.24H74.16ZM56.16 3.73006C56.1888 2.71858 56.6157 1.75936 57.3479 1.0609C58.08 0.362439 59.0583 -0.0187988 60.07 5.72397e-05H60.33C61.2705 0.0838162 62.1484 0.506773 62.8 1.19006C63.4885 1.91553 63.8685 2.87992 63.86 3.88006C63.8653 3.94662 63.8653 4.01349 63.86 4.08006L63.65 12.2701C63.655 12.3567 63.655 12.4435 63.65 12.5301C63.5762 13.4981 63.1357 14.4015 62.4183 15.0558C61.7009 15.71 60.7608 16.0656 59.79 16.0501H59.52C58.5829 15.9803 57.7055 15.563 57.06 14.8801C56.3673 14.1532 55.9868 13.184 56 12.1801C55.9948 12.1135 55.9948 12.0466 56 11.9801L56.2 3.76006L56.16 3.73006ZM14 18.1001C13.2611 17.4029 12.8234 16.445 12.78 15.4301C12.7572 14.9246 12.8349 14.4195 13.0084 13.9442C13.1819 13.4689 13.4479 13.0326 13.791 12.6607C14.1341 12.2888 14.5475 11.9885 15.0074 11.7773C15.4672 11.5661 15.9643 11.448 16.47 11.4301C17.4827 11.3874 18.4713 11.7468 19.22 12.4301L25.36 18.1601C26.1031 18.853 26.5422 19.8115 26.5815 20.8268C26.6209 21.8421 26.2573 22.8317 25.57 23.5801C24.8698 24.3204 23.9082 24.7582 22.89 24.8001C21.8804 24.8423 20.8951 24.4827 20.15 23.8001L14 18.1001ZM4.00002 60.3201C3.49304 60.3388 2.98733 60.2574 2.51184 60.0805C2.03634 59.9036 1.60037 59.6348 1.22887 59.2893C0.857364 58.9438 0.557613 58.5284 0.346757 58.067C0.1359 57.6055 0.0180757 57.1071 2.0735e-05 56.6001C-0.024423 56.0982 0.0514234 55.5965 0.223125 55.1244C0.394828 54.6522 0.65894 54.219 1.00002 53.8501C1.34515 53.4827 1.75974 53.1875 2.21977 52.9815C2.6798 52.7755 3.17614 52.6629 3.68002 52.6501L12.06 52.3701C12.5672 52.3473 13.0738 52.4256 13.5504 52.6003C14.027 52.7751 14.4641 53.0429 14.8363 53.3881C15.2085 53.7333 15.5084 54.1491 15.7184 54.6112C15.9285 55.0734 16.0446 55.5726 16.06 56.0801V56.1401V56.2801C16.0496 57.2237 15.6939 58.1309 15.06 58.8301C14.7077 59.1967 14.2855 59.4892 13.8183 59.6901C13.3512 59.891 12.8485 59.9964 12.34 60.0001H12.19L3.91002 60.2801L4.00002 60.3201ZM109.6 48.4301H109.73C110.689 48.3721 111.634 48.6753 112.38 49.2801C113.166 49.928 113.669 50.8573 113.78 51.8701C113.78 51.8701 113.78 51.9701 113.78 51.9901C113.826 52.97 113.495 53.9305 112.856 54.6743C112.216 55.4182 111.316 55.8889 110.34 55.9901L102 57.0001C100.988 57.1036 99.9772 56.8016 99.1879 56.1605C98.3987 55.5194 97.896 54.5914 97.79 53.5801C97.6866 52.5669 97.9899 51.5542 98.6331 50.7647C99.2764 49.9752 100.207 49.4735 101.22 49.3701C104 49.0701 106.8 48.7501 109.59 48.4801L109.6 48.4301ZM93.08 15.0501C93.3582 14.6306 93.7167 14.2705 94.1348 13.9904C94.5529 13.7103 95.0224 13.5158 95.5162 13.4182C96.0099 13.3205 96.518 13.3217 97.0113 13.4216C97.5046 13.5215 97.9732 13.7181 98.39 14.0001C98.8069 14.2795 99.164 14.6392 99.4404 15.0581C99.7169 15.477 99.9071 15.9468 100 16.4401C100.195 17.4377 99.9899 18.4718 99.43 19.3201L94.76 26.3201C94.1872 27.1634 93.3027 27.7447 92.3013 27.936C91.2998 28.1273 90.2634 27.9129 89.42 27.3401C88.5766 26.7672 87.9954 25.8827 87.8041 24.8813C87.6128 23.8799 87.8272 22.8434 88.4 22.0001L93.08 15.0001V15.0501ZM61.26 54.9101H67.15C67.3523 54.9101 67.5525 54.9499 67.7394 55.0273C67.9262 55.1047 68.096 55.2181 68.239 55.3611C68.382 55.5041 68.4954 55.6739 68.5728 55.8607C68.6502 56.0476 68.69 56.2478 68.69 56.4501C68.6896 56.756 68.5992 57.0551 68.43 57.3101L54.43 81.2401C54.3262 81.4134 54.1892 81.5645 54.0267 81.6846C53.8642 81.8047 53.6795 81.8914 53.4834 81.9397C53.2872 81.9881 53.0834 81.9971 52.8837 81.9663C52.6841 81.9354 52.4925 81.8653 52.32 81.7601C52.0469 81.5954 51.8312 81.3506 51.7024 81.0589C51.5735 80.7672 51.5378 80.4428 51.6 80.1301L53.67 65.4501L46.67 65.5701C46.4683 65.574 46.2677 65.5381 46.0799 65.4642C45.8921 65.3903 45.7208 65.2801 45.5758 65.1397C45.4308 64.9994 45.315 64.8317 45.235 64.6464C45.1551 64.4611 45.1126 64.2618 45.11 64.0601C45.1012 63.7755 45.1741 63.4945 45.32 63.2501L59.11 39.3301C59.32 38.9807 59.6593 38.7281 60.0542 38.627C60.4491 38.5259 60.868 38.5845 61.22 38.7901C61.4909 38.9374 61.7105 39.1635 61.8498 39.4386C61.9892 39.7136 62.0415 40.0245 62 40.3301L61.3 54.9101H61.26Z"
                      fill="#172554"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_8811_7">
                      <rect width="113.79" height="122.88" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex-grow">
           <h2 className="text-white text-xl md:text-2xl font-bold mb-3">
  Our Vision
</h2>

<p className="text-sm md:text-base text-white">
  To become a trusted financial partner for families by
  delivering ethical investment guidance and sustainable
  wealth creation solutions.
</p>
              </div>
            </div>
            <div className="p-6 md:p-8 text-center rounded-3xl bg-gray-500 ">
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
  Our Values
</h2>

<p className="text-sm md:text-base text-gray-200">
  Integrity, transparency, client-first approach, disciplined
  investing, and long-term relationship building define
  everything we do.
</p>
              </div>
            </div>
          </div>
    </div>
      </section>
      <section className="text-gray-800 py-12">
      <div className="lg:max-w-[1300px] mx-auto px-4 grid lg:grid-cols-2 gap-6 lg:gap-12">
        
        <div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-theme1 rounded-sm"></div>
            <span className="text-theme1 tracking-wider font-medium uppercase">
              Chartered Accountants
            </span>
          </div>

     <h2 className="text-3xl lg:text-4xl font-urbanist font-bold mt-4 mb-6 text-gray-900">
  Over Four Decades of Trusted Audit, Taxation &amp; Advisory Excellence
</h2>

        <p className="text-gray-600 leading-relaxed mb-4">
  V. K. Ladha &amp; Associates, established in 1984, is a distinguished
  Chartered Accountancy firm delivering comprehensive audit,
  taxation, financial advisory, and compliance solutions across
  diverse industries. Our approach combines technical expertise,
  regulatory precision, and a deep understanding of business realities.
</p>
<p className="text-gray-600 leading-relaxed">
  Every engagement is guided by experienced leadership, ensuring
  professional independence, transparent communication, and timely
  execution. Our structured approach combines rigorous analysis,
  sector-specific expertise, and a thorough understanding of evolving
  regulatory frameworks. We work closely with clients to anticipate
  risks, strengthen governance systems, and implement practical
  solutions that enhance financial clarity and operational stability.
 
</p>
        </div>

       
        <div className="grid grid-cols-2 gap-4">
          
          <div className="bg-theme1/10 border pt-16 border-gray-200 rounded-2xl p-6 shadow-sm">
    <p className="text-4xl font-bold text-theme1">40+</p>
<p className="text-gray-600 text-sm">Years of Professional Excellence</p>
          </div>

          
          <div className="bg-gray-100 border pt-16 border-gray-200 rounded-2xl p-6 shadow-sm">
   <p className="text-4xl font-bold text-gray-900">9+</p>
<p className="text-gray-600 text-sm">
  Cities Across India
</p>
          </div>

       
          <div
            className="relative rounded-2xl overflow-hidden shadow-sm col-span-2 h-80 lg:h-72"
            style={{
              backgroundImage: "url('/images/partner-section.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
  
            <div className="absolute inset-0 bg-black/40"></div>

        
            <div className="relative mt-20 z-10 h-full flex flex-col justify-center p-6">
       <p className="text-3xl font-urbanist font-semibold text-white">SCA Experience</p>
<p className="text-sm mt-2 text-white/80 max-w-md">
  Associated as Statutory Central Auditors with banks,
  an NBFC, and a Miniratna PSU, reflecting strong
  governance and institutional trust.
</p>
            </div>
          </div>
        </div>
      </div>
    </section>
<section className="pb-10 px-4 bg-white">
      <div className="relative overflow-hidden max-w-[1300px] mx-auto rounded-[36px] px-10 py-16 lg:py-24 bg-[linear-gradient(135deg,#18ba60_0%,#35c97a_45%,#5ed99a_100%)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.25)]">

        <svg className="absolute -top-10 -right-10 w-[360px] h-[400px] opacity-[0.18]" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="70" fill="white"></circle>
          <path d="M170 0L260 90L170 180V0Z" fill="white"></path>
          <path d="M260 90C310 90 360 140 360 190V0H260V90Z" fill="white"></path>
        </svg>

     
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(#n)' opacity='0.35'/></svg>\")"
          }}></div>

        
        <div className="absolute inset-0 rounded-[36px] ring-1 ring-white/25"></div>

       
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
          <div>
            <h3 className="text-3xl lg:text-4xl font-urbanist font-semibold text-white leading-snug max-w-5xl">
              Trusted chartered accountants for financial decisions.
            </h3>

            <p className="text-white/90 mt-4 max-w-2xl text-xl font-medium">
              Expert audit, taxation, and advisory support you can rely on.
            </p>
          </div>

       
          <Link href="/contact-us" className="group relative inline-flex items-center gap-3 bg-white text-gray-900 rounded-full pl-7 pr-5 py-3 px-20 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-green-900">
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-out-up-right-icon lucide-circle-arrow-out-up-right">
              <path d="M22 12A10 10 0 1 1 12 2"></path>
              <path d="M22 2 12 12"></path>
              <path d="M16 2h6v6"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>    
      <Footer />
    </>
  );
};

export default About;
