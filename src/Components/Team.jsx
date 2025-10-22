import React from "react";
import Rounded from "./Rounded";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();
// Sample team data
const teamMembers = [
  {
    name: "Maudud Ahmed",
    role: "CEO at Fusecode",
    img: "https://i.postimg.cc/HLxYRSXJ/Ellipse-2773.png",
  },
  {
    name: "Mehedi Hasan",
    role: "Web Developer",
    img: "https://i.postimg.cc/KYzGw9Bk/Ellipse-2770.png",
  },
  {
    name: "Sagor",
    role: "CEO at Aiwizard",
    img: "https://i.postimg.cc/RVJW6tKx/Rectangle-23815.png",
  },
  {
    name: "Peter Simons",
    role: "UI/UX Designer",
    img: "https://i.postimg.cc/xdCfhsMN/Ellipse-2772.png",
  },
  {
    name: "Redwan Latif",
    role: "UI/UX Designer",
    img: "https://i.postimg.cc/MGT6NsVz/Ellipse-2769.png",
  },
];

export default function TeamSection() {
  return (
    <section className=" py-20 px-4 lg:px-25 bg-white plus-jakarta">
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
      <div
        className="flex flex-wrap justify-center gap-20"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        {teamMembers.map((member, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="relative rounded-full overflow-hidden border-4 border-transparent transition-all duration-500 group-hover:border-green-500">
              <img
                src={member.img}
                alt={member.name}
                className="w-50 h-50 object-cover rounded-full transition-all duration-500 group-hover:w-70 group-hover:h-70"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
