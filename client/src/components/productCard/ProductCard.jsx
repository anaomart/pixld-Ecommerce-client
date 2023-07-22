import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({
  product: { name, image, price, desc, color, id },
}) {
  console.log(JSON.parse(color[0]));
  return (
    <Link
      to={`/product/${id}`}
      className="flex w-fit max-w-[360px] flex-col rounded-lg shadow-xl"
    >
      <div className=" max-w-[360px]">
        <img
          src={image}
          alt={image}
          className=" w-full rounded-t-lg object-cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 px-4 py-2">
        <h3 className="text-2xl font-bold ">{name}</h3>
        <p className="w-80 text-base text-gray-400">{desc.slice(1, 80)}...</p>
        <div className="flex gap-2">
          {JSON.parse(color[0])?.map((color) => (
            <p
              className={`ml-1  h-5 w-5 rounded-full  `}
              style={{ background: color }}
            ></p>
          ))}
        </div>
        <p className="text-2xl font-semibold">${price}</p>
      </div>
    </Link>
  );
}