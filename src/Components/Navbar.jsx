import React from "react";
import AgencyLogo from "./AgencyLogo";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
export default function Navbar() {
    const ref = useRef();
  return (
    <div className="navbar  lg:max-w-7xl mx-auto h-[80px]"   data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"      ref={ref}>
      <div className="navbar-start w-1/4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="font-medium text-lg text-[#222325]" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="font-medium text-lg text-[#222325]"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
             <a className="font-medium text-lg text-[#222325]"
                href="#projects"
              >
                Portfolio
              </a>
            </li>
            <li>
               <a className="font-medium text-lg text-[#222325]"
                href="#review"
              >
                Review
              </a>
            </li>
            <li>
               <a className="font-medium text-lg text-[#222325]" href="#about">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <AgencyLogo />
      </div>
    
      <div className="navbar-end  w-3/4">
        <ul className="menu menu-horizontal px-1">
           <li>
              <a className="font-medium text-lg text-[#222325]" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="font-medium text-lg text-[#222325]"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
             <a className="font-medium text-lg text-[#222325]"
                href="#projects"
              >
                Portfolio
              </a>
            </li>
            <li>
               <a className="font-medium text-lg text-[#222325]"
                href="#review"
              >
                Review
              </a>
            </li>
            <li>
               <a className="font-medium text-lg text-[#222325]" href="#about">
                About Us
              </a>
            </li>
        </ul>
        <a
          href="https://www.fiverr.com/fusecode"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="xl:px-6 px-3 xl:py-3 py-1 bg-[#01C561] text-white font-medium rounded-full hover:bg-[#07a051] transition flex items-center justify-center mx-auto xl:gap-2 gap-1">
            Hire Us on Fiverr{" "}
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
          </button>
        </a>
      </div>
    </div>
  );
}
