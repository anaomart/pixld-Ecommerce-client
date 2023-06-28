export default function Hero() {
  return (
    <div
      className={` flex h-screen w-screen flex-col items-center justify-center bg-hero bg-cover  bg-center bg-no-repeat object-cover
      text-white
      `}
    >
      <h1 className=" text-center text-5xl font-bold  leading-relaxed  md:leading-loose    ">
        Autumn Collection is here
      </h1>
      <p className="my-4 w-4/5 text-center text-lg ">
        The time is now for it to be okay to be great. People in this world shun
        people for being great. For being a bright color. For standing out. But
        the time is now to be okay to be the greatest you.{" "}
      </p>
      <button className="border-[rgba(255, 255, 255, 0.45)]  rounded-md bg-gray-600 px-5 py-2 text-white outline-none transition-all hover:bg-gray-800">
        Explore
      </button>
    </div>
  );
}
