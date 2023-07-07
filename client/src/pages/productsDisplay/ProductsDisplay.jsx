import { Accordion } from "../../components/accordion/Accordion";
import { useParams } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import ProductCard from "../../components/productCard/ProductCard";
import sofa from "../../assets/collections/sofa.jpeg";
import Pagination from "../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import { publicRequest } from "../../utils/fetchMethods";
import Loading from "../../utils/Loading";
export default function ProductsDisplay() {
  const { category } = useParams();
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getCategories() {
      const subcategory = await publicRequest.get("/subcategory");
      setSubCategories(subcategory.data.Message);
      const products = await publicRequest.get("/product");
      console.log(products);
      setProducts(products.data.Products);
    }
    getCategories();
  }, []);
  return (
    <section className="  px-4  py-3 md:m-auto md:w-10/12 ">
      <div className=" flex justify-between  py-3 ">
        <h2 className="text-2xl font-bold capitalize md:text-4xl">
          {category}
        </h2>
        <div>
          <select className="   rounded-box w-24  p-2  shadow md:mr-16">
            <option className="p-1">one</option>
            <option className="mt-1">two</option>
          </select>
        </div>
      </div>

      <div className="flex gap-8">
        {/* main */}
        <div className=" flex-1 ">
          {/* first */}
          {subCategories.length !== 0 ? (
            subCategories.map(({ name }) => <Accordion name={name} />)
          ) : (
            <Loading />
          )}
        </div>
        <div className="flex flex-[4]  flex-col gap-8">
          {/* second */}
          <div className=" flex flex-wrap justify-center gap-x-20 gap-y-5">
            {products.length !== 0 ? (
              products.map(
                ({ imageCover, price, name, color, description, _id }) => (
                  <ProductCard
                    product={{
                      image: imageCover,
                      desc: description,
                      color: color,
                      price: price,
                      name: name,
                      id: _id,
                    }}
                  />
                )
              )
            ) : (
              <Loading />
            )}
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  );
}
