import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  return (
    <div className="cards grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      {products.map((product) => {
        return (
          <div
            key={product._id}
            className="card flex flex-col p-4 bg-white shadow-md rounded-md"
          >
            <div className="image w-36 lg:w-2xs h-36 lg:h-56 overflow-hidden rounded-md">
              <Link to={`/product/${product.name}`}>
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={product.images[0]}
                  alt=""
                />
              </Link>
            </div>
            <Link
              to={`/product/${product.name}`}
              className="text-xl py-1 font-semibold"
            >
              {product.name}
            </Link>
            <div className="text-xl py-1 font-semibold">${product.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
