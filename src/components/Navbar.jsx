import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getCategory } from "../../lib/services";

const Navbar = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [category, setCategory] = useState(null);

  const handleCategory = async () => {
    if (!showCategory) {
      const res = await getCategory();
      console.log(res);
      setCategory(res.categories);
    }
    setShowCategory(!showCategory);
  };

  return (
    <div className="relative">
      <nav>
        <ul className="h-16 text-white bg-green-800 flex justify-around items-center">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <button onClick={handleCategory} className="cursor-pointer">
              Category
            </button>
          </li>
        </ul>
      </nav>
      <div
        className={`absolute top-16 right-0 w-40 p-4 bg-white text-black shadow-md
      transition-all duration-300
      ${showCategory ? "translate-x-0" : "translate-x-full"}
    `}
      >
        {category && category.map((cat) => {
              return (
                <div key={cat._id} className="category h-16">
                  <Link to={`/?category=${cat.name}`}>{cat.name}</Link>
                  <div className="h-0.5 bg-gray-200 w-full"></div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Navbar;
