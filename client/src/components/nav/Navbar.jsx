import {
  AiFillDollarCircle,
  AiFillEuroCircle,
  AiFillHeart,
  AiFillPoundCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menuButtonClicked, setMenuButtonClicked] = useState(false);
  const [enterSearch, setEnterSearch] = useState(false);
  const mainPages = [
    { name: "Furniture", path: "/" },
    { name: "Home Care", path: "/" },
    { name: "Aromatherapy", path: "/" },
  ];
  const searchInputButton = () => {
    return enterSearch ? (
      <div
        className={`flex scale-100  items-center gap-1 rounded-lg bg-white px-1   transition-[width] duration-700 ${2}`}
      >
        <AiOutlineSearch size={20} />
        <input
          className="rounded-lg bg-transparent  py-1 outline-none transition-all"
          type="text"
          name="search"
          placeholder="Search"
          onBlur={() => setEnterSearch(false)}
        />
      </div>
    ) : (
      <AiOutlineSearch size={20} onClick={() => setEnterSearch(true)} />
    );
  };
  const printCartAndFav = () => {
    return (
      <>
        <BsFillBagFill
          size={20}
          className="transition-all hover:text-green-600"
        />
        <AiFillHeart size={20} className="transition-all hover:text-red-600" />
      </>
    );
  };
  const printCurrencyChange = () => {
    return (
      <details className="dropdown ">
        <summary className="btn mx-0  border-none bg-transparent">
          <AiFillEuroCircle size={20} />
        </summary>
        <ul className="w-f dropdown-content  menu z-[1] rounded-lg bg-base-100 p-2 shadow">
          <li>
            <a>
              <AiFillDollarCircle size={20} />
            </a>
          </li>
          <li>
            <a>
              <AiFillPoundCircle size={20} />
            </a>
          </li>
        </ul>
      </details>
    );
  };
  const printMainPages = () => {
    return mainPages.map((page) => (
      <a
        href={page.path}
        key={page.name}
        className="mx-1 transition-all duration-200 hover:text-gray-300"
      >
        {page.name}
      </a>
    ));
  };
  return (
    <nav
      className="  fixed z-20 flex w-full
      items-center
      bg-white px-6
      py-2 md:mt-3 md:w-4/5
      md:rounded-xl md:py-1"
    >
      {/* Left */}
      <div className=" flex  flex-1 items-center gap-3">
        <Link to="/" className=" text-4xl font-bold">
          Pixld{" "}
        </Link>
        <div className=" hidden  gap-9 lg:flex">{printMainPages()}</div>
      </div>
      {/* Right */}
      <div className="hidden flex-1 items-center  justify-end  md:flex ">
        <div className="flex cursor-pointer items-center justify-end gap-6 text-secondary">
          {searchInputButton()}
          {printCartAndFav()}

          {printCurrencyChange()}

          <p className="font-medium text-dark-100 ">Sign In</p>
          <p className="font-medium text-dark-100">Sign Up</p>
        </div>
      </div>
      {/* Mobile */}
      {
        <>
          <div
            className=" z-20  md:hidden"
            onClick={() => setMenuButtonClicked((prev) => !prev)}
          >
            <BiMenuAltRight
              size={24}
              className="cursor-pointer  hover:scale-105"
            />
          </div>
          {
            <div
              className={` tra absolute left-0 top-8 flex w-full flex-col justify-evenly bg-white p-4 transition-opacity  duration-300 ease-in-out md:hidden ${
                menuButtonClicked ? "opacity-100" : "opacity-0"
              }`}
            >
              {searchInputButton()}
              <div className=" flex-1 items-center  justify-end  md:flex ">
                <div className="flex cursor-pointer items-center justify-end gap-6 text-secondary">
                  {printCartAndFav()}
                  {printCurrencyChange()}
                </div>
              </div>
              {printMainPages()}
            </div>
          }
        </>
      }
    </nav>
  );
}
