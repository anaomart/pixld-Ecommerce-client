import React from "react";
import { FaQuoteRight } from "react-icons/fa";
export default function Card({ text, image, name }) {
  return (
    <div className=" flex flex-col gap-4 rounded-sm bg-white px-12 py-1 shadow-2xl">
      <p>
        <FaQuoteRight size="20" />
      </p>
      {text}
      <div className="flex items-center gap-2">
        <img className="w-10 rounded-full" src={image} alt={name} />
        <p className="text-lg font-semibold">{name}</p>
      </div>
    </div>
  );
}
