export default function NewArrivals() {
  return (
    <div
      className=" relative m-auto my-16 flex h-[350px] w-11/12 overflow-hidden
      rounded-lg   bg-NewArrivals bg-cover bg-center   bg-no-repeat md:w-full"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-[rgba(10,10,10,0.65)] text-white">
        <h1 className=" text-center text-3xl font-bold leading-relaxed  md:text-5xl  md:leading-loose    ">
          New arrivals
        </h1>
        <p className="my-4 w-4/5 text-center text-base  md:text-lg">
          The time is now for it to be okay to be great. People in this world
          shun people for being great. For being a bright color. For standing
          out. But the time is now to be okay to be the greatest you.
        </p>
        <button className="border-[rgba(255, 255, 255, 0.45)]  rounded-md bg-gray-600 px-5 py-2 text-white outline-none transition-all hover:bg-gray-800">
          Explore
        </button>
      </div>
    </div>
  );
}
