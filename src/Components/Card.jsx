import React from 'react';

const Card = ({ name, role, img }) => (
  <div className="bg-white p-4 rounded-2xl overflow-hidden relative group cursor-pointer">
    <img src={img} alt={name} className="w-full  pb-16  rounded-2xl" />
    <div className="absolute bottom-4 left-4">
      <h3 className="font-semibold text-2xl text-[#222325]">{name}</h3>
      <p className="text-xl text-[#4E4E4E]">{role}</p>
    </div>
  </div>
);

export default Card;