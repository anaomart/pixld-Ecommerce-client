import { FaQuoteRight } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export default function Card({ text, image, name }) {
  return (
    <div className=" flex flex-col  gap-4 rounded-sm bg-white p-6  shadow-2xl md:px-12">
      <p>
        <FaQuoteRight size="20" />
      </p>
      <p className="min-w-[200px]">{text}</p>
      <div className="flex items-center gap-2">
        <img className="w-10 rounded-full" src={image} alt={name} />
        <p className="text-lg font-semibold">{name}</p>
      </div>
    </div>
  );
}
