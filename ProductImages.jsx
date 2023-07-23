import React from "react";
export function ProductImages({ activeImage, images, setActiveImage }) {
  return (
    <div className="flex-1 my-2">
      <div className=" my-3">
        <img src={activeImage} alt="activeImage" className="mb-2 rounded-lg" />
      </div>
      <div className="flex gap-4">
        {images.map((image) => (
          <div>
            <img
              src={image}
              alt={image}
              className=" w-fit py-2 rounded-lg"
              onClick={() => setActiveImage(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
