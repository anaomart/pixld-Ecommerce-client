import React from "react";
import { Link } from "react-router-dom";
import { DisplayColors } from "../displayColors/DisplayColors";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscHeart } from "react-icons/vsc";

export default function ProductCard({
  product: { name, image, price, desc, color, id },
}) {
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
        <div className="flex justify-end gap-2 text-right">
          <span className="">
            <AiOutlineShoppingCart
              size={20}
              className="transition hover:text-green-500"
            />
          </span>
          <span className="">
            <VscHeart size={20} className="hover:text-red-500" />
          </span>
        </div>
        <p className="w-80 text-base text-gray-400">{desc.slice(1, 80)}...</p>
        <DisplayColors colors={color} />
        <p className="text-2xl font-semibold">${price}</p>
      </div>
    </Link>
  );
}
