// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { getCategory } from "../../lib/services";

// const Navbar = () => {
//   const [showCategory, setShowCategory] = useState(false);
//   const [category, setCategory] = useState(null);

//   const handleCategory = async () => {
//     if (!showCategory) {
//       const res = await getCategory();
//       console.log(res);
//       setCategory(res.categories);
//     }
//     setShowCategory(!showCategory);
//   };

//   return (
//     <div className="relative">
//       <nav>
//         <ul className="h-16 text-white bg-green-800 flex justify-around items-center">
//           <li>
//             <Link to={"/"}>Home</Link>
//           </li>
//           <li>
//             <button onClick={handleCategory} className="cursor-pointer">
//               Category
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <div
//         className={`absolute top-16 right-0 w-40 p-4 bg-white text-black shadow-md
//       transition-all duration-300
//       ${showCategory ? "translate-x-0" : "translate-x-full"}
//     `}
//       >
//         {category && category.map((cat) => {
//               return (
//                 <div key={cat._id} className="category h-16">
//                   <Link to={`/?category=${cat.name}`}>{cat.name}</Link>
//                   <div className="h-0.5 bg-gray-200 w-full"></div>
//                 </div>
//               );
//             })}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getCategory } from "../../lib/services";

const Navbar = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [mobileDropDown, setMobileDropDown] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(false)
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
    <div className="relative ">
      <nav className="h-16 px-3 bg-white gap-2 flex justify-between lg:justify-around items-center">
        <div className="flex gap-2">
          <img onClick={()=>{setMobileDropDown(!mobileDropDown)}} className="lg:hidden cursor-pointer" src={mobileDropDown ? "/icons/cancel.svg": "/icons/menu.svg"} alt="" />
          <h2 className="font-bold text-xl">SHOP.CO</h2>
        </div>
        <ul className="hidden lg:flex gap-4 text-xl">
          <li className="flex items-center gap-1">
            <span>Shop</span>
            <span><img src="/icons/arrow-down.svg" alt="" /></span>
          </li>
          <li>On Sale</li>
          <li>New Arrial</li>
          <li>Brands</li>
        </ul>
      <div className="search w-[40%] hidden lg:flex items-center gap-1 bg-[#f0f0f0] px-3 py-1 rounded-full">
        <img src="/icons/search.svg" alt="" />
        <input type="text" className="px-2 py-2 w-full rounded-full focus:outline-none"  placeholder="Search for products.." />
      </div>
      <div className="icons flex gap-3">
        <img onClick={()=> {setShowSearchBar(!showSearchBar)}} className="lg:hidden cursor-pointer" src="/icons/search-black.svg" alt="" />
        <img src="/icons/cart.svg" alt="user" />
        <img src="/icons/user.svg" alt="user" />
      </div>
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
                  <div className="h-0.5  bg-gray-200 w-full"></div>
                </div>
              );
            })}
      </div>

      <div
        className={`absolute top-16 left-0 z-40 w-3xs p-4 bg-white text-black shadow-md
      transition-all duration-300
      ${mobileDropDown ? "translate-x-0" : "-translate-x-full"}
    `}
      >
        <div className=" w-full flex flex-col">
          <span className="w-full hover:bg-[#f0f0f0] py-2 text-center cursor-pointer">Shop</span>
          <span className="w-full hover:bg-[#f0f0f0] py-2 text-center cursor-pointer">On Sale</span>
          <span className="w-full hover:bg-[#f0f0f0] py-2 text-center cursor-pointer">New Arrial</span>
          <span className="w-full hover:bg-[#f0f0f0] py-2 text-center cursor-pointer">Brands</span>
        </div>
      </div>

          {showSearchBar&&(<div className=' flex justify-center items-center text-white '>
          <div className="search w-10/12 mx-auto bg-[#f0f0f0] fixed top-16 z-10 flex items-center justify-between gap-2 rounded-full py-1 px-4 ">
              <input className='text-[#b0b0b0] w-full py-2 px-2 rounded-sm focus:outline:none' type="text" placeholder='Search for products..' />
            <button className='cursor-pointer'>
                <img src="/icons/search.svg" alt="" />
            </button>
        </div>
      </div>)}

    </div>
  );
};

export default Navbar;
