import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userRequest } from "../../utils/fetchMethods";
import Loading from "../../utils/Loading";
import { ProductImages } from "../../../../ProductImages";

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [activeImage, setActiveImage] = useState();
  useEffect(() => {
    const getProduct = async () => {
      const response = await userRequest.get("/product/" + productId);
      setProduct(response.data);
      setActiveImage(response.data.images[3]);
    };
    getProduct();
  }, [productId]);

  return (
    <section className="md:m-auto md:w-10/12 ">
      {product ? (
        <>
          <h2 className="my-4 font-semibold">{product?.name}</h2>
          <div className="flex ">
            {/* Images  */}

            <ProductImages
              images={product.images}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
            />
            <div className="flex-1">1</div>
          </div>
          {/* Details */}
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
}
