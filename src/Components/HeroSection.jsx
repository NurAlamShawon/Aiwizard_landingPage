import React from "react";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
export default function HeroSection() {
  const ref = useRef();
  const imgRef = useRef(null);

  return (
    <div
      className=" flex-row xl:flex items-center py-5 lg:py-[80px] xl:px-0 px-2 h-auto lg:h-[750px] gap-12 lg:max-w-7xl mx-auto relative z-10 "
      ref={ref}
    >
      {/* left side */}
      <div
        className="lg:space-y-10   space-y-8"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <h1 className="  lg:max-w-[708px] font-semibold lg:text-5xl  text-2xl text-[#222325] lg:leading-[76px]  leading-[50px]">
          <span className="text-[#1DBF73">AI-Powered</span> Apps & Websites that
          DriveResults from Your Ideas
        </h1>
        <p className="font-medium lg:text-2xl text-lg lg:max-w-[708px] leading-[1.6]">
          We bring your complex ideas to life with AI-powered apps, websites,
          and chatbots — backed by ★5.0 reviews and returning clients on Fiverr.
        </p>
        <div>
          <button>
            <a
              className="xl:px-6 px-3 xl:py-3 py-1 bg-[#01C561] text-white font-medium rounded-full hover:bg-green-600 transition flex items-center justify-center mx-auto xl:gap-2 gap-1"
              href="https://www.fiverr.com/fusecode"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Quotes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </button>
          <a
            href="https://www.fiverr.com/users/fusecode/portfolio?roleIds="
            className="underline underline-offset-8 ml-8 font-semibold xl:text-xl text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Works
          </a>
        </div>
      </div>
      {/* right side */}
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        ref={imgRef}
        className="xl:pt-0 pt-5"
      >
        <div className="relative">
          <div className="relative">
            <img
              src="https://i.postimg.cc/RVJW6tKx/Rectangle-23815.png"
              alt=""
              className="xl:w-[456px] xl:h-[523px] rounded-xl"
            />
          </div>

          <div className="lg:w-sm w-60 lg:h-28 absolute left-1/2 -translate-x-1/2 bottom-8 space-y-3  backdrop-blur-md px-9 py-6 rounded-xl shadow-md">
            <div className="flex items-center text-white">
              <div className="space-y-2 lg:pr-8 pr-3 ">
                <h1 className="lg:text-2xl text-xl font-semibold   text-start">
                  Level 2
                </h1>
                <p className=" font-medium lg:text-sm text-xs text-start">
                  Fiverr Seller
                </p>
              </div>
              <div className="space-y-2 lg:px-8 px-3 border-l border-r border-gray-300">
                <h1 className="lg:text-2xl text-xl font-semibold  text-start">
                  100+
                </h1>
                <p className=" font-medium lg:text-sm text-xs text-start">
                  Reviews
                </p>
              </div>
              <div className="space-y-2 lg:pl-8 pl-3">
                <h1 className="lg:text-2xl text-xl font-semibold  text-start">
                  5.0
                </h1>
                <p className=" font-medium lg:text-sm text-xs text-start">
                  Ratings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
