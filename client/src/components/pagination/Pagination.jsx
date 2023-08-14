import React from "react";

export default function Pagination({ active, setActivePage }) {
  return (
    <div className="m-auto  md:w-4/5 ">
      <div className="join flex items-center justify-between">
        <div>
          <button
            className="btn-outline join-item btn mr-auto"
            onClick={() => active != 1 && setActivePage(active - 1)}
          >
            Previous page
          </button>
        </div>
        <div>
          <div className="join">
            {Array.from(Array(5)).map((num, index) => (
              <input
                className="btn-square join-item btn"
                type="radio"
                name="options"
                aria-label={index + 1}
                checked={active == index + 1}
                onClick={() => setActivePage(index + 1)}
              />
            ))}
          </div>
        </div>
        <button
          className="btn-outline join-item btn"
          onClick={() => setActivePage(active + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
