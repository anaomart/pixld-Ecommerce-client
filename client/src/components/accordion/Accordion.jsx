import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
export function Accordion({ productsName, name }) {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(productsName);

  return (
    <div className="my-5 border-b py-2">
      <div
        className="flex cursor-pointer items-center  justify-between"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="text-lg font-semibold capitalize ">{name}</p>{" "}
        {isOpen ? (
          <AiOutlineMinus size={18} className="hover:rotate-12" />
        ) : (
          <AiOutlinePlus size={18} className="" />
        )}
      </div>
      {/* dropDown */}
      <div
        className={` ml-3  mt-2 flex flex-col  gap-3 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <ul>
          {productsName
            ? productsName.map((product) => <li className="">{product}</li>)
            : null}
        </ul>
      </div>
    </div>
  );
}
