import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Rounded from "./Rounded";
// ..
AOS.init();

export default function Projects() {
  const ref = useRef();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const projects = [
    {
      title: "AI Social Networking App",
      desc: "Smart social media app with personalized connections & real-time interactions",
      img: "https://i.postimg.cc/05L4DG2Y/image.png",
      src: "https://www.fiverr.com/users/aiwizard_/portfolio/NjhlNzlkOWVmMWUzNmEwMDAxYWJmNWE1",
    },

    {
      title: "Fashion E-Commerce App",
      desc: "Stylish shopping app for clothing, shoes & accessories with smooth navigation and secure checkout",
      img: "https://i.postimg.cc/8zbX2qBG/image.png",
      src: "https://www.fiverr.com/users/aiwizard_/portfolio/NjhlNzlmMjA3NTVhOGIwMDAxMTM1OWM4",
    },
    {
      title: "Healthcare Consultation App",
      desc: "Smart mobile app for booking doctors, managing health records & accessing real-time medical guidance",
      img: "https://i.postimg.cc/SR8DD5NC/image.png",
      src: "https://www.fiverr.com/users/aiwizard_/portfolio/NjhlNzlmZTViMzQxY2UwMDAxMDJkODNh",
    },
    {
      title: "Interactive AI ChatBot App",
      desc: "Real-time AI chat app with personalized responses, smart suggestions & a modern intuitive interface",
      img: "https://i.postimg.cc/fTc8d6PS/image.png",
      src: "https://www.fiverr.com/users/aiwizard_/portfolio/NjhlNjRhNjE2MzI1MjgwMDAxMmY1Njhj",
    },
    {
      title: "AI Mock Interview App",
      desc: "AI-powered app for practicing interviews with real-time feedback to boost confidence & readiness",
      img: "https://i.postimg.cc/vTWtWV0b/image.png",
      src: "https://www.fiverr.com/users/aiwizard_/portfolio/Njg1MmQ0NDQ0YzVlMDMwMDAxNGEzZmU5",
    },
    {
      title: "Video Editor App",
      desc: "AI-powered video editing app with smart tools, smooth transitions & HD export optimization",
      img: "https://i.postimg.cc/mrt3mqmr/image.png",
      src: "https://www.fiverr.com/users/aiwizard_/portfolio/Njg1MmNmMGE2ZWViZDcwMDAxMDEyYjUz",
    },
    {
      title: "AI Website Builder Chatbot App",
      desc: "AI-driven chatbot that generates responsive websites from natural language prompts with real-time code updates",
      img: "https://i.postimg.cc/qB8sD2xs/image.png",
      src: "https://www.fiverr.com/users/aiwizard_/portfolio/Njg1MmQxOGE1ZGExMDkwMDAxZDA5N2Ew",
    },
  ];

  return (
    <section className="lg:py-25 py-10 xl:px-0 px-2 plus-jakarta text-start">
      <div className="lg:w-full">
        {/* Section Header */}
        <div className="mb-22 lg:max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Rounded />
            <span className="text-[#222325] xl:text-xl text-lg font-medium">
              Our Recent Projects
            </span>
          </div>
          <h2 className="xl:text-4xl text-2xl bricolage xl:leading-[76px] leading-[52px]  font-semibold text-[#222325] text-start">
            Turning Complex Challenges<br></br> Into Smart, Scalable Solutions
          </h2>
        </div>

        {/* Custom navigation buttons */}
        <button
          ref={prevRef}
          disabled={isBeginning}
          className={`absolute xl:left-[10px] left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#4d4c4cb2]  rounded-full transition-opacity ${
            isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          ref={nextRef}
          disabled={isEnd}
          className={`absolute xl:right-[10px] right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#4d4c4cb2] transition-opacity ${
            isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <div
          className=" py-9 px-20 bg-[#EEEEEE]"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          ref={ref}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2.5} // large screens
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 2.5, spaceBetween: 30 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              // Attach buttons after mount
              setTimeout(() => {
                if (!swiper?.params?.navigation || !swiper.navigation) return;
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }, 100);
            }}
            onSlideChange={(swiper) => {
              // Update button state
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            pagination={{ clickable: true }}
            className="relative "
          >
            {projects.map((p, i) => (
              <SwiperSlide key={i}>
                <a href={p.src} target="_blank" rel="noopener noreferrer">
                  <div className="relative group h-[663px] bg-white rounded-2xl shadow-md overflow-hidden transition  hover:bg-blue-700 border border-transparent">
                    <div className="relative rounded-2xl p-5">
                      <div className="rounded-xl overflow-hidden mb-5">
                        <img
                          src={p.img}
                          alt={p.title}
                          className="w-full lg:h-[463px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <div className="lg:flex items-center justify-between">
                        {" "}
                        <div className="text-start">
                          {" "}
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white mb-2">
                            {" "}
                            {p.title}{" "}
                          </h3>{" "}
                          <p className="text-gray-600 group-hover:text-white text-sm mb-4">
                            {p.desc}
                          </p>{" "}
                        </div>{" "}
                        <div className="flex justify-end">
                          {" "}
                          <button className="p-2 rounded-full bg-[#01C561] text-white group-hover:bg-white group-hover:text-blue-700 transition cursor-pointer">
                            {" "}
                            <ArrowUpRight size={30} />{" "}
                          </button>{" "}
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-12">
        <a
          href="https://www.fiverr.com/aiwizard_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 bg-[#01C561] text-white font-medium rounded-full hover:bg-green-600 transition flex items-center justify-center mx-auto gap-2">
            View All Works <ArrowUpRight size={18} />
          </button>
        </a>
      </div>
    </section>
  );
}
