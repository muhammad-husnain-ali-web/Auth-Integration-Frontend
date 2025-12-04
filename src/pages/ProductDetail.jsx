import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getProductDetail } from "../../lib/services";
import Loader from "../components/Loader";

const ProductDetail = () => {
  const params = useParams();
  const { name } = params;
  const ref = useRef(null);

  const [isLoading, setISLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const imageChange = async (e) => {
    ref.current.src = e.target.src
  }

  const getProduct = async () => {
    const res = await getProductDetail(name);
    console.log(res);
    setProduct(res.product);
    setISLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="overflow-y-auto">
      {isLoading ? (
        <Loader />
      ) : product === null ? (
        <div>Not Found</div>
      ) : (
        <div className=" w-[98%] lg:w-[70vw] mx-auto grid grid-cols-1 gap-1 md:grid-cols-2 md:my-20 my-10 h-[70vh] ">
          {product && product.images && (
            <div className="w-full h-[50vh] lg:h-[70vh] flex flex-col-reverse lg:flex-row gap-2">
              <div className="3 image grid grid-cols-3 lg:grid-cols-1 gap-2 w-full lg:w-[26%] h-[26%] lg:h-full">
                {product.images.map((img, i) => {
                  return (
                    <div
                      key={i}
                      className="w-full h-full overflow-hidden rounded-md"
                    >
                      <img
                        loading="lazy"
                        onClick={imageChange}
                        className="w-full h-full object-cover rounded-md cursor-pointer"
                        src={img}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>

              <div className="img w-full lg:w-[70%] h-[70%] lg:h-full overflow-hidden rounded-md">
                <img
                  ref={ref}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-md"
                  src={product.images[0]}
                  alt="img"
                />
              </div>
            </div>
          )}
          <div className="w-full h-[50vh] lg:h-[70vh] px-2">
            <h2 className="text-6xl font-black py-2">{product.name}</h2>
            <p className=" text-xl font-bold py-2">${product.price}</p>
            <p className="text-gray-400 w-full h-[15%] overflow-auto">
              {product.description}
            </p>
            <div className="w-full h-0.5 my-4 bg-gray-400 rounded-md"></div>
            <div className="flex gap-3 justify-around items-center ">
              <div className="bg-[#F0F0F0] rounded-full py-2 w-[26%] flex justify-around items-center">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <button className=" w-[70%] py-2 rounded-full bg-black text-white text-center cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
