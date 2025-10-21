import React from "react";

import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Rounded from "./Rounded";
// ..
AOS.init();

export default function About() {
  const ref = useRef();
  return (
    <section
      className="relative inter lg:max-w-7xl mx-auto overflow-hidden xl:py-30 py-10 xl:px-0 px-2"
      ref={ref}
    >
      <div className="relative z-10 ">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Rounded />
              <span className="text-[#222325] xl:text-2xl text-xl font-medium">
                About Us
              </span>
            </div>

            <h2 className="xl:text-3xl text-xl bricolage font-semibold text-[#222325] xl:leading-[76px] leading-[50px] text-balance mb-8">
              Innovative Software That <br></br>Powers Your Business Forward
            </h2>

            <p className="text-[#353535] xl:leading-[1.6] leading-[1.2] text-lg ">
              At Fusecode Agency, we’re on a mission to push the boundaries of
              innovation through the power of AI. We create intelligent,
              user-focused solutions that blend cutting-edge technology with
              real human experiences
            </p>
            <button className="btn btn-outline btn-success rounded-3xl text-black">Read more</button>
          </div>

          {/* Right Content - Stats Grid */}
          <div
            className="grid grid-cols-2 xl:w-[696px] bricolage"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            {/* Level 2 */}
            <div className="relative px-13 py-15  text-end">
              <div className="xl:text-4xl text-xl font-bold text-gray-900 mb-2">
                Level 2
              </div>
              <div className="text-gray-600">Fiverr Seller</div>
              <span className="absolute left-0 bottom-0 w-full h-[6px] bg-linear-to-r from-white  via-green-200 to-green-500"></span>
            </div>

            {/* 100+ Reviews */}
            <div className="relative px-13 py-15   text-start">
              <div className="xl:text-4xl text-xl font-bold text-gray-900 mb-2">
                100+
              </div>
              <div className="text-gray-600">Fiverr Reviews</div>
              <span className="absolute left-0 bottom-0 w-full h-[6px] bg-linear-to-r from-green-500  via-green-200 to-white"></span>
              <span className="absolute top-0 left-0 h-full w-[6px] bg-linear-to-b from-white  via-green-200 to-green-500"></span>
            </div>
            {/* 7+ Years */}
            <div className="relative px-13 py-15   text-end">
              <div className="xl:text-4xl text-xl font-bold text-gray-900 mb-2">
                7+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>

            {/* 5.0 Rating */}
            <div className="relative px-13 py-15  text-start">
              <div className="xl:text-4xl text-xl font-bold text-gray-900 mb-2">
                5.0
              </div>
              <div className="text-gray-600">Rating on Fiverr</div>
              <span className="absolute top-0 left-0 h-full w-[6px] bg-linear-to-b from-green-500  via-green-200  to-white"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
