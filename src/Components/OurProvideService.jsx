import React from "react";
import {
  Smartphone,
  Globe,
  MessageSquare,
  Code,
  LayoutDashboard,
  Lightbulb,
} from "lucide-react";
import Doubledot from "./Doubledot";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Rounded from "./Rounded";
// ..
AOS.init();

export default function OurProvideService() {
  const ref = useRef();
  const services = [
    {
      icon: (
        <Smartphone className="h-6 w-6 text-[#01C561] group-hover:text-white" />
      ),
      title: "Mobile App UI/UX & Development",
      description:
        "From concept to code, I design and build mobile apps that are fast, intuitive, and visually engaging. Every screen is crafted for usability, performance, and real-world impact.",
    },
    {
      icon: <Globe className="h-6 w-6 text-[#01C561] group-hover:text-white" />,
      title: "AI-Driven Web App Development",
      description:
        "From concept to code, I design and build mobile apps that are fast, intuitive, and visually engaging. Every screen is crafted for usability, performance, and real-world impact.",
    },
    {
      icon: (
        <MessageSquare className="h-6 w-6 text-[#01C561] group-hover:text-white" />
      ),
      title: "AI Chatbot & Automation Integration",
      description:
        "From concept to code, I design and build mobile apps that are fast, intuitive, and visually engaging. Every screen is crafted for usability, performance, and real-world impact.",
    },
    {
      icon: <Code className="h-6 w-6 text-[#01C561] group-hover:text-white" />,
      title: "Full-Stack Web Development",
      description:
        "From concept to code, I design and build mobile apps that are fast, intuitive, and visually engaging. Every screen is crafted for usability, performance, and real-world impact.",
    },
    {
      icon: (
        <LayoutDashboard className="h-6 w-6 text-[#01C561] group-hover:text-white" />
      ),
      title: "Dashboard & Admin System Design",
      description:
        "From concept to code, I design and build mobile apps that are fast, intuitive, and visually engaging. Every screen is crafted for usability, performance, and real-world impact.",
    },
    {
      icon: (
        <Lightbulb className="h-6 w-6 text-[#01C561] group-hover:text-white" />
      ),
      title: "AI Consulting & Strategy",
      description:
        "From concept to code, I design and build mobile apps that are fast, intuitive, and visually engaging. Every screen is crafted for usability, performance, and real-world impact.",
    },
  ];

  return (
    <section
      className="lg:max-w-7xl mx-auto inter xl:overflow-hidden xl:py-30 py-10 xl:px-0 px-2"
      ref={ref}
    >
      <div className="xl:flex flex-row items-center justify-center gap-12">
        {/* Header */}
        <div className="mb-12 xl:pl-0 pl-2 space-y-6">
          <div className="flex items-center gap-2">
            <Rounded />
            <span className="text-[#222325] xl:text-2xl text-xl font-medium">
             Our Services
            </span>
          </div>
          <h2 className="text-balance bricolage xl:text-4xl text-lg font-semibold tracking-tight text-gray-900 ">
          Elevate Your Projects with Timeless<br></br> Elegance and Style
          </h2>
            <button className="btn btn-outline btn-success rounded-3xl text-black">View more</button>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 lg:w-[640px] grid-cols-1 lg:grid-cols-2 xl:pl-2">
          {services.map((service, index) => (
            <div
              className="relative "
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              key={index}
            >
              {/* Card */}
              <div
                key={index}
                className="group relative h-[346px] rounded-2xl border border-gray-300 bg-white p-6 transition-all hover:border-emerald-400 hover:bg-[#b9fdda] hover:shadow-lg"
              >
                <div
                  className="
          mb-4 inline-flex h-12 w-12 items-center justify-center 
          rounded-full bg-[#E0FFEF] 
          transition-all duration-300
          group-hover:bg-[#01C561] group-hover:text-white
        "
                >
                  {service.icon}
                </div>
                <div className="h-52">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>

                <div className="flex justify-between">
                  <p></p>
                  <a
                    href="https://www.fiverr.com/fusecode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
                  >
                    <button className="text-black btn btn-outline rounded-3xl group-hover:bg-white">
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
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
