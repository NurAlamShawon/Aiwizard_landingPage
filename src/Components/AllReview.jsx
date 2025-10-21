import React, { useRef, useState } from "react";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Doubledot from "./Doubledot";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Rounded from "./Rounded";
// ..
AOS.init();

export default function AllReview() {
  const ref = useRef();
  const testimonials = [
    {
      id: 1,
      name: "frank_harri",
      location: "United States",
      rating: 5,
      text: '"I am beyond satisfied with the AI mobile app delivered by this seller. Every interaction was smooth and reassuring, making the development process stress-free. I highly recommend their services to anyone looking for a high-quality AI-powered mobile app."',
      color: "bg-emerald-500",
    },
    {
      id: 2,
      name: "richard_sus",
      location: "United States",
      rating: 5,
      text: '"I’m always impressed by his work, this is not the first time I’ve hired him, and he delivered flawlessly once again. The AI content video generator app works seamlessly with all AI voice functionalities. I will choose him again for future projects."',
      color: "bg-red-500",
    },
    {
      id: 3,
      name: "stephjustin",
      location: "Cyprus",
      rating: 5,
      text: '"I am thoroughly impressed with the professionalism and technical expertise demonstrated by the developer. They delivered a sophisticated AI-powered job portal application featuring a modern and intuitive user interface. Thank you for your delivery."',
      color: "bg-blue-500",
    },
    {
      id: 4,
      name: "r_yusha",
      location: "United States",
      rating: 5,
      text: '"I recently tried the new AI-powered voice assistant in this e-commerce app, and I’m genuinely impressed. It makes shopping so much faster and more intuitive. The assistant is smart, responsive, and understands my queries almost perfectly. It even remembers my preferences, making future shopping experiences smoother. Thank you."',
      color: "bg-emerald-500",
    },
    {
      id: 5,
      name: "steven_kimberl",
      location: "United States",
      rating: 5,
      text: '"He did a fantastic job developing my AI-powered e-commerce app for my candy store. The 3 screens, integrated products, and chatbot features are all perfect. The pink and white theme looks playful and inviting. He exceeded my expectations. I absolutely recommend him and will surely work with him again."',
      color: "bg-red-500",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div
      className="relative inter lg:max-w-7xl mx-auto xl:py-20 py-10 xl:px-0 px-2"
      ref={ref}
    >
      <div className="flex justify-between items-center">
        {/* info side */}
        <div className="mb-22 ">
          <div className="flex items-center gap-2">
            <Rounded />
            <span className="text-[#222325] xl:text-2xl text-xl font-medium">
              Reviews
            </span>
          </div>
          <h2 className="xl:text-4xl text-2xl bricolage xl:leading-[76px] leading-[50px]  font-semibold text-[#222325] text-start">
            Trusted by Happy<br></br> Clients on Fiverr
          </h2>
        </div>
        {/* slider buttons on right */}
        <div className="relative ">
          <button
            ref={prevRef}
            disabled={isBeginning}
            className={`absolute lg:right-[80px] right-[90px]   -translate-y-1/2 z-10 p-3 rounded-md transition-opacity bg-green-300 text-white ${
              isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
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
            className={`absolute lg:right-0 right-2  -translate-y-1/2 z-10 p-3  rounded-md transition-opacity bg-green-300 text-white  ${
              isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom navigation buttons */}

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          // Run this AFTER swiper and refs are both ready
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className=" relative lg:w-[360px] w-[250px] lg:h-[605px] h-[700px] mx-auto border-2 rounded-2xl  border-gray-400">
              {/* Floating Quote Icon - completely outside clipped div */}
              <div
                className={`w-14 h-14 ${testimonial.color} absolute top-[119px] -left-6 rounded-full flex items-center justify-center shadow-lg z-50`}
              >
                <Quote className="w-7 h-7 text-white" />
              </div>

              {/* Clipped Card */}
              <div
                className="bg-white w-full h-full py-30 space-y-4 px-12 text-center relative z-0"
                style={{
                  clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)",
                  borderRadius: "25px",
                }}
              >
                {/* Name */}
                <h3 className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>

                {/* Rating */}
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-orange-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {testimonial.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
