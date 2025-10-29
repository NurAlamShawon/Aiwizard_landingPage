import React, { useEffect, useRef } from "react";
import Rounded from "./Rounded";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();
// Sample team data
const teamMembers = [
  {
    name: "Ali Modasser Nayem",
    role: "UI/UX designer",
    img: "https://i.postimg.cc/tsNL1sVM/withbgprofile-Ali-Modasser-Nayem.jpg",
  },
  {
    name: "Mohammad Rana Arju ",
    role: "Backend Developer",
    img: "https://i.postimg.cc/cvxFbXrD/DSC-1028-copy-Rana-Arju.png",
  },
  {
    name: "Shamsul Haque",
    role: "Mobile app developer",
    img: "https://i.postimg.cc/N2Gxz00X/6325792086443101186-Md-Shamsul-Haque-Sujon.jpg",
  },
  {
    name: "Md. Mostafizur Rahman Emon",
    role: "Mobile app developer",
    img: "https://i.postimg.cc/CdvCKS1W/Media-Md-Mostafizur-Rahman-Emon.jpg",
  },
  {
    name: "Hasibul Islam",
    role: "AI developer",
    img: "https://i.postimg.cc/4YvmmQPt/Whats-App-Image-2025-10-24-at-16-28-42-800f9569-Hasibul-Islam.jpg",
  },
  {
    name: "Md Abu Rayhan",
    role: "Frontend Developer",
    img: "https://i.postimg.cc/BXB0FYrz/Abu-Rayhan-Md-Abu-Rayhan.jpg",
  },
  {
    name: "Rafioul Hasan Sourob",
    role: "Backend Developer",
    img: "https://i.postimg.cc/R33ygXDb/Pi7-Passport-Photo-1-Rafioul-Hasan-Sourob.jpg",
  },
];

export default function TeamSection() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    AOS.init();

    const container = containerRef.current;
    const scroller = scrollRef.current;
    let scrollPos = 0;
    const speed = 0.4; // Adjust for faster/slower horizontal speed

    function animateScroll() {
      if (scroller) {
        scrollPos += speed;

        const scrollWidth = scroller.scrollWidth / 2;
        if (scrollPos >= scrollWidth) scrollPos = 0;

        scroller.scrollTo({
          left: scrollPos,
          behavior: "auto",
        });
      }
      animationRef.current = requestAnimationFrame(animateScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationRef.current = requestAnimationFrame(animateScroll);
        } else {
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (container) observer.observe(container);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      observer.disconnect();
    };
  }, []);
  return (
    <section className=" py-20 xl:px-0 px-4 lg:px-25 bg-white plus-jakarta">
      {/* Header */}
      <div className="flex lg:max-w-7xl mx-auto flex-col lg:flex-row items-center justify-between mb-12">
        <div className="mb-6 lg:mb-0">
          <div className="flex items-center gap-2">
            <Rounded />
            <span className="text-[#222325] xl:text-2xl text-xl font-medium">
              Our Team
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            Meet the Creative Minds<br></br> Behind the Magic
          </h2>
        </div>
        <a
          href="https://www.fiverr.com/aiwizard_"
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

      {/* Team Grid */}
      <div ref={containerRef} className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex space-x-20 overflow-x-auto scrollbar-hide"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {/* duplicate list for smooth infinite scroll */}
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              {teamMembers.map((member, i) => (
                <div
                  key={`${idx}-${i}`}
                  className="flex flex-col items-center group flex-shrink-0"
                >
                  <div className="relative rounded-full overflow-hidden border-4 border-transparent transition-all duration-500 group-hover:border-green-500">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-30 h-30 object-cover rounded-full transition-all duration-500 group-hover:w-45 group-hover:h-45"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
