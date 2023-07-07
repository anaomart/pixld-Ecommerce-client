import Watches from "../../assets/watches.jpeg";
import Chairs from "../../assets/Chairs.jpeg";
import Decor from "../../assets/Decor.jpeg";
import furniture from "../../assets/furniture.jpeg";
import Aromatherapy from "../../assets/Aromatherapy.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { publicRequest } from "../../utils/fetchMethods";
import { Link } from "react-router-dom";
import Loading from "../../utils/Loading";
export default function SwiperComponent() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const categories = await publicRequest.get("/category");
      setCategories(categories.data);
    }
    getCategories();
  }, []);
  return (
    <section>
      <div className="my-7  flex flex-col items-center justify-center gap-3  md:flex-row md:justify-between ">
        <h3 className="text-3xl font-semibold">Shop By Category</h3>
        <a href="/" className="mr-3 cursor-pointer text-base">
          Browse all categories <BsArrowRight className=" ml-2 inline" />{" "}
        </a>
      </div>

      {categories.length !== 0 ? (
        <Swiper
          className="mb-3 overflow-hidden"
          spaceBetween={50}
          slidesPerView={1}
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
          {categories.map(({ image, name, slug }) => (
            <SwiperSlide key={image}>
              <Link to={`/category/${slug}`}>
                <div className=" relative  m-auto h-96 w-60 rounded-lg  text-center md:m-0 ">
                  <img
                    src={image}
                    className="h-full w-full rounded-2xl bg-center object-cover "
                  />
                  <h2 className="absolute bottom-3 left-[50%] w-full translate-x-[-50%] text-2xl font-bold text-white">
                    {name}
                  </h2>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loading />
      )}
    </section>
  );
}
