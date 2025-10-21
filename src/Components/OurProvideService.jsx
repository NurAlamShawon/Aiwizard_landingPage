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
        "I develop intelligent web applications that blend sleek design with AI capabilities such as chatbots, smart search, and process automation — delivering seamless, data-aware user experiences.",
    },
    {
      icon: (
        <MessageSquare className="h-6 w-6 text-[#01C561] group-hover:text-white" />
      ),
      title: "AI Chatbot & Automation Integration",
      description:
        "Integrate GPT-powered assistants into your app or website. From customer support to lead engagement, I build chatbots that understand, respond, and automate intelligently.",
    },
    {
      icon: <Code className="h-6 w-6 text-[#01C561] group-hover:text-white" />,
      title: "Full-Stack Web Development",
      description:
        "I handle both frontend and backend to deliver secure, scalable, and high-performing web solutions. Perfect for startups or agencies looking for complete, end-to-end development.",
    },
    {
      icon: (
        <LayoutDashboard className="h-6 w-6 text-[#01C561] group-hover:text-white" />
      ),
      title: "Dashboard & Admin System Design",
      description:
        "I design and develop smart dashboards and admin panels that turn complex data into actionable insights — with clean visuals, smooth navigation, and real-time analytics.",
    },
    {
      icon: (
        <Lightbulb className="h-6 w-6 text-[#01C561] group-hover:text-white" />
      ),
      title: "AI Consulting & Strategy",
      description:
        "Unsure where to start with AI? I provide strategic guidance on integrating AI into your business model — identifying opportunities, designing solutions, and planning implementation efficiently.",
    },
  ];

  return (
    <section
      className="lg:max-w-screen-xl mx-auto inter xl:overflow-hidden xl:py-30 py-10 xl:px-0 px-2"
      ref={ref}
    >
      <div>
        {/* Header */}
        <div className="mb-12 xl:pl-0 pl-2">
          <div className="mb-4 flex items-center">
            <Doubledot />
            <span className="xl:text-3xl text-2xl font-semibold text-[#222325]">
              Our Services
            </span>
          </div>
          <h2 className="text-balance bricolage xl:text-6xl text-lg font-bold tracking-tight text-gray-900 ">
            Make Your Projects Look More <br></br>Elegant And Stylish
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:pl-2">
          {services.map((service, index) => (
            <div
              className="relative"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              key={index}
            >
              {/* Green bar */}
              <div className="absolute -left-1.5 top-8 h-[89px] w-[8px] rounded-3xl bg-[#01C561]"></div>

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
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <a
                  href="https://www.fiverr.com/fusecode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
                >
                  Order Now
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
