import { BsArrowRight } from "react-icons/bs";
import sofa from "../../assets/collections/sofa.jpeg";
import chairs from "../../assets/collections/chairs.jpeg";
import homeCare from "../../assets/collections/homeCare.jpeg";
import Card from "./Card";
export default function ShopByCollection() {
  //   const collections = [
  //     { name: "sofa", image: sofa, position: 2 },
  //     { name: "chairs", image: chairs, position: 1 },
  //     { name: "homeCare", image: homeCare, position: 1 },
  //   ];

  return (
    <section className="  ">
      <div className="  my-7 flex flex-col items-center justify-center md:flex-row md:justify-between ">
        <h3 className="text-3xl font-semibold">Shop By collection</h3>
        <a href="/" className="mr-3 cursor-pointer text-base">
          Browse all collections
          <BsArrowRight className=" ml-2 inline" />{" "}
        </a>
      </div>
      {/* collections */}
      <div className="flex flex-col gap-3 p-4 md:flex-row">
        <div className=" relative flex-1 ">
          <Card
            image={sofa}
            name={"sofa"}
            classN={"rounded-lg bg-cover  object-cover md:h-full"}
          />
        </div>
        <div className="relative flex flex-1 flex-col gap-3">
          <div className="relative">
            <Card image={chairs} name={"chairs"} classN={"rounded-lg"} />
          </div>
          <div className="relative">
            <Card image={homeCare} name={"HomeCare"} classN={"rounded-lg"} />
          </div>
        </div>
      </div>
    </section>
  );
}
