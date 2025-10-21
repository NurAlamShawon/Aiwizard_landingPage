import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";

export default function HomeSection() {
  return (
    <div
      className="bg-[url('https://i.postimg.cc/hPyC2H3M/Group.png')] bg-cover 
    bg-center xl:bg-right
    bg-no-repeat
    relative xl:overflow-hidden
    "
      id="home"
    >
     
     
      <HeroSection />
    </div>
  );
}
