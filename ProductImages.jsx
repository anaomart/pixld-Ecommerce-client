import React from "react";
export function ProductImages({ activeImage, images, setActiveImage }) {
  return (
    <div className="flex-1">
      <div>
        <img
          src={activeImage}
          alt="activeImage"
          className="mb-2  rounded-xl "
        />
      </div>
      <div className="flex gap-4">
        {images.map(
          (image) =>
            activeImage != image && (
              <div>
                <img
                  src={image}
                  alt={image}
                  className=" w-fit rounded-xl"
                  onClick={() => setActiveImage(image)}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}
