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
import FilterProdcut from "../../components/filterProduct/FilterProdcut";
export default function ProductsDisplay() {
  const [sort, setSort] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const { category } = useParams();
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const query = filter
      .map((ele) => `subcategoryName=${ele.replace(/(?<=\w)\s(?=\w)/g, "-")}`)
      .join("&");
    const filterItems = async () => {
      console.log(query);
      const response = await publicRequest.get(
        `/product?${query}&page=${activePage}`
      );
      setProducts(response.data.Products);
    };
    console.log(query);
    filterItems();
    console.log(query);
  }, [filter]);
  useEffect(() => {
    async function getCategories() {
      const subcategory = await publicRequest.get("/subcategory");
      setSubCategories(subcategory.data.Message);
      // const products = await publicRequest.get(`/product?page=${activePage}`);
      // console.log(products);
      setProducts(products.data.Products);
    }
    getCategories();
  }, [activePage]);
  return (
    <section className="  px-4  py-3 md:m-auto md:w-10/12 ">
      <div className=" flex justify-between  py-3 ">
        <h2 className="text-2xl font-bold capitalize md:text-4xl">
          {category}
        </h2>
        <div>
          <select className="   rounded-box w-36  p-2 text-center  shadow md:mr-16">
            <option
              className="p-1 "
              selected
              disabled
              onClick={() => setSort(0)}
            >
              Sort
            </option>
            <option className="p-1 " onClick={() => setSort(1)}>
              Lower to higher
            </option>
            <option className="mt-1" onClick={() => setSort(0)}>
              Higher to lower
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row ">
        {/* main */}
        <div className=" m-auto flex flex-1 gap-4 text-center md:m-0 md:flex-col md:gap-0 ">
          {/* first */}
          {subCategories.length !== 0 ? (
            subCategories.map(({ name }) => (
              <FilterProdcut
                name={name}
                category={category}
                setFilter={setFilter}
                filter={filter}
              />
            ))
          ) : (
            <Loading />
          )}
        </div>
        <div className="flex flex-[4]  flex-col gap-8">
          {/* second */}
          <div className=" flex flex-wrap justify-center gap-x-20 gap-y-5">
            {products.length !== 0 ? (
              products
                .sort((a, b) => (sort ? a.price - b.price : b.price - a.price))
                .map(({ imageCover, price, name, color, description, _id }) => (
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
                ))
            ) : (
              <Loading />
            )}
          </div>

          <Pagination active={activePage} setActivePage={setActivePage} />
        </div>
      </div>
    </section>
  );
}
