import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userRequest } from "../../utils/fetchMethods";
import Loading from "../../utils/Loading";
import { ProductImages } from "../../../../ProductImages";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";
import { DisplayColors } from "../../components/displayColors/DisplayColors";
import { Accordion } from "../../components/accordion/Accordion";
export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [activeImage, setActiveImage] = useState(product?.imageCover);
  useEffect(() => {
    const getProduct = async () => {
      const response = await userRequest.get("/product/" + productId);
      setProduct(response.data);
      setActiveImage(response.data.images[3]);
    };
    getProduct();
  }, [productId]);
  console.log(product);
  return (
    <section className="md:m-auto md:w-10/12 ">
      {product ? (
        <>
          <h2 className="my-4 text-center text-sm font-semibold md:text-left md:text-xl">
            {product.categoryName}
            {product.subcategoryName}
            {product?.name}
          </h2>
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row ">
            {/* Images  */}

            <ProductImages
              images={product.images}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
            />
            <div className="flex-1">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold md:text-3xl ">
                  {product.name}
                </h3>
                <p className="text-xl font-semibold md:text-2xl">
                  ${product.price}
                </p>
                {/* Rating */}
                <span className="flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </span>
                {/* desc */}
                <p className="my-8">{product.description}</p>
                {/* Colors */}
                <DisplayColors colors={product.color} />
                {/* Button cart and fav */}
                <div className="flex items-center gap-3 ">
                  <button className="w-44 rounded-lg bg-blue-700  py-1 text-white">
                    Add to cart
                  </button>
                  <span className="cursor-pointer hover:text-red-600">
                    <AiOutlineHeart />
                  </span>
                </div>
                {/* Info  */}
                <div>
                  <Accordion
                    productsName={[product.productFeatures]}
                    name={"Features"}
                  />
                  <Accordion
                    productsName={[product.instruction]}
                    name={"Instruction"}
                  />
                  <Accordion
                    productsName={[product.material]}
                    name={"Material"}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Details */}
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
}
