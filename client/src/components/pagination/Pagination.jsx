import React from "react";

export default function Pagination() {
  return (
    <div className="m-auto  w-4/5 ">
      <div className="join flex items-center justify-between">
        <div>
          <button className="btn-outline join-item btn mr-auto">
            Previous page
          </button>
        </div>
        <div>
          <div className="join">
            <input
              className="btn-square join-item btn"
              type="radio"
              name="options"
              aria-label="1"
              checked
            />
            <input
              className="btn-square join-item btn"
              type="radio"
              name="options"
              aria-label="2"
            />
            <input
              className="btn-square join-item btn"
              type="radio"
              name="options"
              aria-label="3"
            />
            <input
              className="btn-square join-item btn"
              type="radio"
              name="options"
              aria-label="4"
            />
          </div>
        </div>
        <button className="btn-outline join-item btn">Next</button>
      </div>
    </div>
  );
}
