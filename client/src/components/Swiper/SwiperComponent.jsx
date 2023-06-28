import Watches from "../../assets/watches.jpeg";
import Chairs from "../../assets/Chairs.jpeg";
import Decor from "../../assets/Decor.jpeg";
import furniture from "../../assets/furniture.jpeg";
import Aromatherapy from "../../assets/Aromatherapy.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { BsArrowRight } from "react-icons/bs";
export default function SwiperComponent() {
  const images = [
    { image: Watches, name: "Watches" },
    { image: Decor, name: "Decor" },
    { image: furniture, name: "Furniture" },
    { image: Aromatherapy, name: "Aromatherapy" },
    { image: Chairs, name: "Chairs" },
  ];

  return (
    <section>
      <div className="mx-2 my-7 flex items-center justify-between">
        <h3 className="text-3xl font-semibold">Shop By Category</h3>
        <a href="/" className="mr-3 cursor-pointer text-base">
          Browse all categories <BsArrowRight className=" ml-2 inline" />{" "}
        </a>
      </div>

      <Swiper
        className="mb-3 overflow-hidden"
        spaceBetween={100}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1260: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {images.map(({ image, name }) => (
          <SwiperSlide key={image}>
            <div className=" relative h-96 w-60 rounded-lg text-center ">
              <img
                src={image}
                className="h-full w-full rounded-2xl bg-center object-cover "
              />
              <h2 className="absolute bottom-3 left-[50%] translate-x-[-50%] text-2xl font-bold text-white">
                {name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
