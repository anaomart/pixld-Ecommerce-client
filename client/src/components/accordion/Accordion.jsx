import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
export function Accordion({ productsName, name }) {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(productsName);
  const checkedBox = {};
  console.log(checkedBox);
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
        {productsName
          ? productsName.map((product) => (
              <div
                className="flex gap-3 "
                onClick={() => {
                  checkedBox[product] = checkedBox[product]
                    ? !checkedBox[product]
                    : true;
                  console.log(checkedBox);
                }}
              >
                <input
                  type="checkbox"
                  id={product}
                  name={product}
                  value={product}
                />
                <label for="oneName">{product}</label>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
