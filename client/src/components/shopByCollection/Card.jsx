import { BsArrowRight } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export default function Card({ image, name, classN }) {
  return (
    <>
      <img src={image} alt={name} className={classN} />
      <div
        className="absolute
        bottom-5
        left-5
        mr-3
        flex flex-col
         gap-1 
        capitalize
        text-white
        "
      >
        <p className="text-xl font-bold md:text-3xl">{name}</p>
        <a href="/" className="ml-1 text-sm md:text-base">
          Shop <BsArrowRight className=" ml-2 inline" />{" "}
        </a>
      </div>
    </>
  );
}
