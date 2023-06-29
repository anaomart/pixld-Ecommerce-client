import { BsGiftFill } from "react-icons/bs";

export default function DiscountBanner() {
  return (
    <div
      className=" relative m-auto my-16 flex h-[540px] w-11/12 items-center
      justify-center   overflow-hidden rounded-lg bg-discount bg-cover bg-center  bg-no-repeat md:w-full"
    >
      <div
        className=" bottom-0  flex h-[60%] w-[80%] flex-col items-center justify-center rounded-md border
       bg-[rgba(255,255,255,0.65)]
       "
      >
        <h1 className=" text-center text-3xl font-bold leading-relaxed  md:text-4xl  md:leading-loose    ">
          Exclusive discounts for members
        </h1>
        <p className="my-4 w-4/5 text-center text-base  md:text-lg">
          The time is now for it to be okay to be great. People in this world
          shun people for being great. For being a bright color.
        </p>
        <button className="border-[rgba(255, 255, 255, 0.45)]  rounded-md bg-black px-5 py-2 text-white   outline-none transition-all hover:bg-gray-800">
          <a
            href="/"
            className="mr-3 flex cursor-pointer items-center justify-center gap-3 text-base"
          >
            <BsGiftFill className=" ml-2 inline" />
            Get your code
          </a>
        </button>
      </div>
    </div>
  );
}
