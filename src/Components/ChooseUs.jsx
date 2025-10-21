import React from "react";
import { Sparkles, Settings, Handshake, TrendingUp, Brain } from "lucide-react";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Rounded from "./Rounded";
// ..
AOS.init();

export default function ChooseUs() {
  const ref = useRef();

  const features = [
    {
      icon: Brain,
      title: "Powered by AI",
      description:
        "We don’t just build tech — we create smart, AI-driven solutions for your business, helping you stay ahead of the competition.",
      color: "bg-emerald-500",
    },
    {
      icon: Settings,
      title: "Your Growth is Our Goal",
      description:
        "We measure success by the impact we create for you. Every strategy, every tool, one core mission: helping your business grow.",
      color: "bg-yellow-500",
    },
    {
      icon: Handshake,
      title: "Human-Centered Design",
      description:
        "AI might do the heavy lifting, but our designs are human-focused, intuitive, and user-friendly.",
      color: "bg-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Powered by AI",
      description:
        "We don’t just build tech — we create smart, AI-driven solutions for your business, helping you stay ahead of the competition.",
      color: "bg-yellow-500",
    },
    {
      icon: TrendingUp,
      title: "Your Growth is Our Goal",
      description:
        "We measure success by the impact we create for you. Every strategy, every tool, one core mission: helping your business grow.",
      color: "bg-emerald-500",
    },
    {
      icon: Handshake,
      title: "Human-Centered Design",
      description:
        "AI might do the heavy lifting, but our designs are human-focused, intuitive, and user-friendly.",
      color: "bg-blue-500",
    },
  ];

  return (
    <section
      className="relative plus-jakarta xl:py-30 py-10  mx-2 lg:max-w-7xl xl:mx-auto"
      ref={ref}
    >
      <div>
        {/* Section Header */}
        <div className="text-start mb-12">
          <div className="flex items-center justify-center gap-0 mb-6 relative w-[286px] ">
            <Rounded />

            <span className="text-[#404145]  font-semibold xl:text-2xl text-xl ml-4">
              Why Choose Us
            </span>
          </div>
          <h2 className="xl:text-[34px] text-2xl bricolage font-semibold text-[#222325] xl:leading-[76px] leading-[35px]">
            Where AI Meets Trust <br></br> Smart Solutions on Fiverr
          </h2>
        </div>

        {/* Content Grid */}
        <div className=" grid lg:grid-cols-3  grid-cols-1 gap-10 pt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white lg:h-[290px] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow hover:border-[#01C561] hover:border-1 "
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div
                className={`${feature.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="xl:text-2xl text-lg font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-[#353535] leading-relaxed xl:text-xl text-md">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
