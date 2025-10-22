import React, { useEffect } from "react";
import {
  Smartphone,
  Globe,
  MessageSquare,
  Code,
  LayoutDashboard,
  Lightbulb,
} from "lucide-react";

import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Rounded from "./Rounded";
import Card from "./Card";

// ..
AOS.init();

export default function OurProvideService() {
  const ref = useRef();
  const upperRef = useRef(null);
  const lowerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    AOS.init();

    const upper = upperRef.current;
    const lower = lowerRef.current;

    let upperScroll = 0;
    let lowerScroll = 0;
    const speed = 0.4; // smooth and steady

    function animateScroll() {
      if (upper && lower) {
        // Move continuously
        upperScroll += speed;
        lowerScroll -= speed;

        // Wrap around seamlessly
        const upperLimit = upper.scrollHeight / 2;
        const lowerLimit = lower.scrollHeight / 2;

        if (upperScroll >= upperLimit) {
          upperScroll = 0;
        }
        if (lowerScroll <= 0) {
          lowerScroll = lowerLimit;
        }

        upper.scrollTo(0, upperScroll);
        lower.scrollTo(0, lowerScroll);
      }

      animationRef.current = requestAnimationFrame(animateScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationRef.current = requestAnimationFrame(animateScroll);
        } else {
          cancelAnimationFrame(animationRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="lg:max-w-7xl mx-auto inter xl:overflow-hidden lg:py-25 py-10 xl:px-0 px-2"
      ref={ref}
    >
      <div className="xl:flex flex-row items-center justify-center gap-12">
        {/* Header */}
        <div className="mb-12 xl:pl-0 pl-2 space-y-6 plus-jakarta">
          <div className="flex items-center gap-2">
            <Rounded />
            <span className="text-[#222325] xl:text-2xl text-xl font-medium">
              Our Services
            </span>
          </div>
          <h2 className="text-balance plus-jakarta xl:text-4xl text-lg font-semibold tracking-tight text-gray-900 ">
            Elevate Your Projects with Timeless<br></br> Elegance and Style
          </h2>
          <button className="btn btn-outline btn-success rounded-3xl text-black">
            View more
          </button>
        </div>

        {/* Services Grid */}
        <div
          className="lg:w-1/2 relative"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {/* Fade overlays */}
          <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="grid grid-cols-2 gap-8 ">
            {/* Column 1 */}
            <div
              ref={upperRef}
              className="h-[820px] overflow-y-auto pr-2 scrollbar-hide"
            >
              <div className="space-y-6">
                {/* duplicated list for smooth looping */}
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <Card
                      icon={Smartphone}
                      title="Mobile App UI/UX & Development"
                      description="From concept to code, I design and build mobile apps that are fast, intuitive, and visually engaging. Every screen is crafted for usability, performance, and real-world impact."
                    />
                    <Card
                      icon={Globe}
                      title="AI-Driven Web App Development"
                      description="From concept to code, I design and build mobile apps that are fast, intuitive, and visually engaging. Every screen is crafted for usability, performance, and real-world impact."
                    />
                    <Card
                      icon={MessageSquare}
                      title="AI Chatbot & Automation Integration"
                      description="From concept to code, I design and build mobile apps that are fast, intuitive, and visually engaging. Every screen is crafted for usability, performance, and real-world impact."
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div
              ref={lowerRef}
              className="h-[820px] overflow-y-auto pr-2 scrollbar-hide"
            >
              <div className="space-y-6">
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <Card
                      icon={Code}
                      title="Full-Stack Web Development"
                      description="From concept to code, I design and build mobile apps that are fast, intuitive, and visually engaging. Every screen is crafted for usability, performance, and real-world impact."
                    />
                    <Card
                      icon={LayoutDashboard}
                      title="Dashboard & Admin System Design"
                      description="From concept to code, I design and build mobile apps that are fast, intuitive, and visually engaging. Every screen is crafted for usability, performance, and real-world impact."
                    />
                    <Card
                      icon={Lightbulb}
                      title="AI Consulting & Strategy"
                      description="From concept to code, I design and build mobile apps that are fast, intuitive, and visually engaging. Every screen is crafted for usability, performance, and real-world impact."
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
