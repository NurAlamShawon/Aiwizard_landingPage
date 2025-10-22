import React from "react";

const Card = ({ icon, title, description }) => (
  <div className="group relative lg:h-[346px] h-[500px] scrollbar-hidden rounded-2xl border border-gray-300 bg-white p-6 transition-all hover:border-emerald-400 hover:bg-[#b9fdda] hover:shadow-lg">
    <div
      className="
        mb-4 inline-flex h-12 w-12 items-center justify-center 
        rounded-full bg-[#E0FFEF] 
        transition-all duration-300
        group-hover:bg-[#01C561] group-hover:text-white
      "
    >
      {React.createElement(icon, { className: "h-6 w-6" })}
    </div>

    <div className="lg:h-52">
      <h3 className="mb-3 plus-jakarta text-lg font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mb-4 text-sm inter leading-relaxed text-gray-600">
        {description}
      </p>
    </div>

    <div className="flex justify-between">
      <a
        href="https://www.fiverr.com/aiwizard_"
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
);

export default Card;
