import React from "react";

export default function Doubledot() {
  return (
    <div className="relative w-18 flex items-center ">
      {" "}
      <div className="w-9 h-9 bg-[#01C561] rounded-full z-50 " />
      <div className="w-9 h-9 bg-[#00ff7b42] rounded-full absolute z-0 left-4" />
    </div>
  );
}
