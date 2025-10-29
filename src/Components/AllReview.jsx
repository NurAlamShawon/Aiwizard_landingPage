import React, { useRef, useState } from "react";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
      name: "jeremy_a_smith",
      location: "United States",
      rating: 5,
      text: '"I’m very impressed with the seller’s work. He created my AI-powered skincare app exactly as described, with a smooth camera interface and clear, personalized results. The design is professional and the app is easy to use. Excellent value for money and highly recommended for anyone looking for a reliable and talented app developer."',
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "s_akter5",
      location: "United States",
      rating: 5,
      text: '"Great experience. The AI programming app was delivered on time with all features functioning flawlessly, including the chatbot tutor and auto-generated quizzes. Highly recommended."',
      color: "bg-emerald-500",
    },
    {
      id: 3,
      name: "petter_a_jonh",
      location: "United States",
      rating: 5,
      text: '"Fantastic service. My AI mobile app runs smoothly, with perfect functionality and a great user interface. Professional developer with deep knowledge of AI integration. Totally worth it."',
      color: "bg-red-500",
    },
    {
      id: 4,
      name: "gabriel_samue",
      location: "United States",
      rating: 5,
      text: '"I’m very impressed with this seller’s work. He created my AI picture blur correction app, and it performs wonderfully, fixing images quickly and efficiently. Everything is simple to use and works exactly as expected. I would definitely recommend him to anyone looking for reliable development."',
      color: "bg-purple-500",
    },
    {
      id: 5,
      name: "robert_d_baker",
      location: "Canada",
      rating: 5,
      text: '"The AI-powered notification summarizer app was delivered on time and works beautifully. The design is minimal and modern, and all functionalities perform as expected. I highly recommend this seller for professional and reliable app development."',
      color: "bg-teal-500",
    },
    {
      id: 6,
      name: "th_om_as_par",
      location: "United States",
      rating: 5,
      text: '"This is hands down one of the best AI apps I’ve ever used. The AI is smart, fast, and really understands my needs. Highly recommend it to anyone looking for a reliable, intelligent AI solution."',
      color: "bg-yellow-500",
    },
    {
      id: 7,
      name: "gladys_c_leach",
      location: "United States",
      rating: 5,
      text: '"Everything about this app screams quality. The AI works great and feels super intuitive. Super professional and creative. My AI app looks premium and works exactly as I imagined. Highly recommend this seller for any AI project."',
      color: "bg-pink-500",
    },
    {
      id: 8,
      name: "ne_ri_ss_a",
      location: "United States",
      rating: 5,
      text: '"Really satisfied with the LMS app development. The layout is simple yet functional, and the course structure is exactly how I wanted it. The project was completed efficiently and delivered on schedule."',
      color: "bg-green-500",
    },
    {
      id: 9,
      name: "michael_d_walke",
      location: "Denmark",
      rating: 5,
      text: '"Amazing work on the AI camera app. The layout is modern, the color scheme is beautiful, and the AI enhancements perform really well. The whole process was easy and professional, I’m very pleased with the result."',
      color: "bg-indigo-500",
    },
    {
      id: 10,
      name: "kenneth_amanda",
      location: "United States",
      rating: 5,
      text: '"Developing an AI mobile application for the first time was an amazing experience for me. The AI features are outstanding. They make the app feel dynamic and smart, exactly what I envisioned. I am thrilled with the final result and will definitely work with this seller again."',
      color: "bg-orange-500",
    },
    {
      id: 11,
      name: "theodoroski",
      location: "Cyprus",
      rating: 5,
      text: '"He is very knowledgeable in the field and delivered exactly what was promised. The AI-powered fruit app looks vibrant with the crimson-themed UI, and includes all the features like smart product recommendations, restock reminders, and a smooth ordering experience. Everything was completed on time and works flawlessly."',
      color: "bg-cyan-500",
    },
    {
      id: 12,
      name: "matthew_d_gray",
      location: "United States",
      rating: 5,
      text: '"As usual, the seller delivered outstanding work. The navy blue splash screen for my chatbot app looks professional, transitions smoothly, and enhances the app’s overall feel. I’m very satisfied and would recommend this seller to anyone seeking quality development."',
      color: "bg-lime-500",
    },
    {
      id: 13,
      name: "harold_a_lopez",
      location: "United States",
      rating: 5,
      text: '"The AI logic is spot-on, and the animations are buttery smooth. The seller truly went above and beyond to make it perfect. Hands down, one of the best experiences I’ve had on Fiverr. My AI app looks modern, runs perfectly, and performs exactly as I envisioned."',
      color: "bg-rose-500",
    },
    {
      id: 14,
      name: "poyiadjis",
      location: "Canada",
      rating: 5,
      text: '"He is an excellent developer who did a great job on my AI voice note app. The recording and organizing features are working perfectly, and the app feels very smooth and user-friendly. The project was delivered exactly as promised. I strongly recommend him to others."',
      color: "bg-violet-500",
    },
    {
      id: 15,
      name: "elenisis",
      location: "Cyprus",
      rating: 5,
      text: '"Amazing services. He developed an AI-based voice assistant writing app for me, and the results were outstanding. The app is smooth, intuitive, and works exactly as I envisioned. Thanks Sagor."',
      color: "bg-amber-500",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div
      className="relative plus-jakarta lg:max-w-7xl mx-auto lg:py-25 py-10 xl:px-0 px-2"
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
          <h2 className="xl:text-4xl text-2xl plus-jakarta xl:leading-[76px] leading-[50px]  font-semibold text-[#222325] text-start">
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
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
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
              <a
                href="https://www.fiverr.com/aiwizard_"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>

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
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
