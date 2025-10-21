import React from "react";
import AgencyLogo from "../Components/AgencyLogo";

export default function Footer() {
  return (
    <div className="bg-neutral inter  xl:pt-22 pt-10 xl:px-0 px-2 ">
      <footer className="xl:flex flex-row items-center justify-between sm:footer-horizontal text-white   lg:max-w-screen-xl mx-auto">
        <aside className="xl:space-y-12 space-y-7 xl:pb-0 pb-6">
          <div className="flex items-end">
            
          <AgencyLogo/>
          </div>
          <div className="bricolage">
            <p className="font-bold xl:text-6xl text-2xl xl:leading-[81px] leading-[45px] text-white">
              Get Started Today
           <br></br>
              Let's Talk
            </p>
          </div>
          <a
            href="https://www.fiverr.com/fusecode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn shadow-none border-none xl:px-9 px-5 xl:py-8 py-4 rounded-3xl bg-[#01C561] text-white  xl:text-xl text-md font-semibold">
              Hire Us on Fiverr{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </a>
        </aside>
        <nav className="flex text-[#D9D9D9]">
          {/*  menu*/}
          <div>
            <ul className="space-y-2 mr-14">
               <li className="xl:text-2xl text-lg  font-semibold text-white">Menu</li>
              <li>
                <a className=" xl:text-lg text-sm " href="#home">
                  Home
                </a>
              </li>

              <li>
                <a className=" xl:text-lg text-sm  " href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className=" xl:text-lg text-sm  " href="#projects">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="xl:text-lg text-sm  " href="#review">
                  Review
                </a>
              </li>
              <li>
                <a className="xl:text-lg text-sm " href="#about">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          {/* privacy */}
          <div>
            <ul className="space-y-2">
              <li className="xl:text-2xl text-lg l font-semibold text-white">Privacy</li>
              <li className="xl:text-lg text-sm ">Cookie Policy</li>
              <li className="xl:text-lg text-sm ">Term Of Services</li>
              <li className="xl:text-lg text-sm ">Policy Service</li>
            </ul>
          </div>
        </nav>
      </footer>
      <p className="xl:text-lg text-md text-[#D9D9D9] text-center pt-8 pb-16">
        © 2025 - All rights Reserved by Fusecode
      </p>
    </div>
  );
}
