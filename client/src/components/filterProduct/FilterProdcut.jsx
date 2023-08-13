import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
export default function FilterProdcut({ name, setFilter, filter }) {
  const handleCheckboxChange = (event) => {
    const itemName = event.target.id;
    if (event.target.checked) {
      setFilter((prevItems) => [...prevItems, itemName]);
    } else {
      setFilter((prevItems) => prevItems.filter((item) => item !== itemName));
    }
  };
  return (
    <div className="my-5 border-b py-2" key={name}>
      <div className="flex cursor-pointer items-center  justify-between">
        <label>{name}</label>
        <input
          type="checkbox"
          checked={filter.includes(name)}
          value={name}
          id={name}
          className="text-lg font-semibold capitalize "
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}
