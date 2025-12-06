// import React from 'react'
// import { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../context/AuthContext'
// import { logout } from '../../lib/services'

// const Home = () => {

//   const navigate = useNavigate()

//   const {user, setUser} = useContext(AuthContext)
//   console.log(user)

//   const handleLogout = async () => {
//     const res = await logout();
//     if(res.success) {
//       setUser({auth: false, user: null})
//       navigate("/auth/login")
//     }
//   }

//   return (
//     <div className='w-screen h-screen flex flex-col items-center py-20'>
//      {user && <h1 className='text-green-800 text-lg'>Hello {user.user.name}</h1>}
//       <button type='button' onClick={handleLogout} className='w-[200px] px-4 py-2 my-2 text-center text-red-600 hover:bg-gray-200 rounded-md cursor-pointer'>Logout</button>
//     </div>
//   )
// }

// export default Home

// import React from 'react'
// import { getProductsByCategory, logout } from '../../lib/services'
// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import Loader from '../components/Loader'
// import ProductCard from '../components/ProductCard'

// const Home = () => {

//   const [searchParams] = useSearchParams();

//   const [products, setProducts] = useState(null)
//   const [category, setCategory] = useState(null)

//   const getProducts = async (category) => {
//     let res ;
//     if(category===null || category===""){
//       res = await getProductsByCategory("Mobile")
//     }else{
//       res = await getProductsByCategory(category)
//     }

//     console.log(res)
//     if(!res.success){
//       setProducts([])
//     }else{
//       setCategory(res.category)
//       setProducts(res.products)
//     }

//   }

//   useEffect(() => {
//     const category = searchParams.get("category");
//     console.log(category)
//     getProducts(category)
//   }, [searchParams]);

//   return (
//     <div className='w-[95%] lg:w-[70%] mx-auto py-20'>
//       {products===null ? (
//         <Loader />
//       ) : (
//         products.length===0 ? (
//         <div className='text-6xl'>No Product Found Yet</div>
//         ) : (
//           <>
//           <h1 className='text-2xl font-bold my-10'>{category.name}</h1>
//           <ProductCard products={products} />
//           </>
//         )
//       )}
//     </div>
//   )
// }

// export default Home

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-y-auto">
      <div className=" banner w-full grid grid-cols-1 lg:grid-cols-2 h-[170vh] lg:h-screen bg-[#f0f0f0] overflow-hidden">
        <div className="flex flex-col gap-2 p-8 lg:p-20 h-full">
          <h1 className=" text-4xl lg:text-7xl font-black">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="text-[#c4c4c4] my-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            earum expedita error dolor provident modi consequuntur unde?
          </p>
          <button className="w-full lg:w-fit py-2 px-8 my-4 text-white bg-black rounded-full cursor-pointer">
            Shop Now
          </button>

          <div className="my-8 w-full flex items-center justify-center lg:justify-between flex-wrap gap-8">
            <div className="flex flex-col">
              <span className="font-bold text-xl">200+</span>
              <p className="text-[#c4c4c4] my-2">Lorem, ipsum.</p>
            </div>
            <div className="h-20 bg-[#c4c4c4] w-0.5"></div>

            <div className="flex flex-col">
              <span className="font-bold text-xl">2000+</span>
              <p className="text-[#c4c4c4] my-2">Lorem, ipsum dolor.</p>
            </div>
            <div className="h-20 bg-[#c4c4c4] w-0.5"></div>

            <div className="flex flex-col">
              <span className="font-bold text-xl">30,000+</span>
              <p className="text-[#c4c4c4] my-2">Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
          <img
            className="h-11 w-11 lg:w-14 lg:h-14 absolute top-[33%] left-[6%] lg:left-[20%]"
            src="/icons/Vector (1).svg"
            alt="vector"
          />
          <img
            className="h-[76px] w-[76px] lg:h-[104px] lg:w-[104px]  absolute top-[10%] right-[8%] lg:top-[10%] lg:right-[12%] "
            src="/icons/Vector.svg"
            alt="vector"
          />
          <img
            className="h-full w-[500px] object-cover"
            src="/icons/banner-image.jpg"
            alt="banner image"
          />
        </div>
      </div>
      <div className="min-h-16 flex flex-wrap gap-4 justify-center lg:justify-between items-center px-4 bg-black text-white">
        <span className="text-2xl font-black">VERSAGE</span>
        <span className="text-2xl font-black">ZARA</span>
        <span className="text-2xl font-black">GUCCI</span>
        <span className="text-2xl font-black">PRADA</span>
        <span className="text-2xl font-black">Calvin Klein</span>
      </div>

      <div className="p-8 text-center text-2xl font-black">NEW ARRIVALS</div>

      <div className="cards w-full flex gap-4 p-4 lg:p-20 overflow-x-auto">
        <div className="card w-1/2 lg:w-1/4 flex flex-col p-4 rounded-md">
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="image w-36 lg:w-2xs bg-[#F0EEED] h-36 lg:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="\products\tshrit.png"
              alt="shirt"
            />
          </Link>
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="text-xs lg:text-lg py-1 font-semibold">
            T-SHIRT WITH TAPE DETAILS
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">4.5</span>
              <span>/5</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xl py-1 font-semibold">$120</span>
          </div>
        </div>

        <div className="card w-1/2 lg:w-1/4 flex flex-col p-4 rounded-md">
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="image w-36 lg:w-2xs bg-[#F0EEED] h-36 lg:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="\products\jeans.png"
              alt="shirt"
            />
          </Link>
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="text-xs lg:text-lg py-1 font-semibold">
            SKINNY FIT JEANS
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">3.5</span>
              <span>/5</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xl py-1 font-semibold">$240</span>
            <span className="text-[#c4c4c4] line-through">$260</span>
            <span className="w-fit px-2 py-1 rounded-full bg-red-100 text-red-500">
              -20%
            </span>
          </div>
        </div>

        <div className="card w-1/2 lg:w-1/4 flex flex-col p-4 rounded-md">
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="image w-36 lg:w-2xs bg-[#F0EEED] h-36 lg:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="\products\shirt1.png"
              alt="shirt"
            />
          </Link>
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="text-xs lg:text-lg py-1 font-semibold">
            CHECKERED SHIRT
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">4.5</span>
              <span>/5</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xl py-1 font-semibold">$180</span>
          </div>
        </div>

        <div className="card w-1/2 lg:w-1/4 flex flex-col p-4 rounded-md">
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="image w-36 lg:w-2xs bg-[#F0EEED] h-36 lg:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="\products\shirt.png"
              alt="shirt"
            />
          </Link>
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="text-xs lg:text-lg py-1 font-semibold">
            SLEEVE STRIPED T-SHIRT
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">4.5</span>
              <span>/5</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xl py-1 font-semibold">$130</span>
            <span className="text-[#c4c4c4] line-through">$160</span>
            <span className="w-fit px-2 py-1 rounded-full bg-red-100 text-red-500">
              -30%
            </span>
          </div>
        </div>
      </div>

      <div className="text-center w-full my-8 px-4">
        <button className="w-full lg:w-fit py-2 px-20 rounded-full border border-[#f0f0f0] text-center cursor-pointer">
          Veiw All
        </button>
      </div>

      <div className="w-[95%] mx-auto my-8 h-0.5 bg-[#f0f0f0] rounded-md"></div>

      <div className="p-8 text-center text-2xl font-black">TOP SELLINGS</div>

      <div className="cards w-full flex gap-4 p-4 lg:p-20 overflow-x-auto">
        <div className="card w-1/2 lg:w-1/4 flex flex-col p-4 rounded-md">
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="image w-36 lg:w-2xs bg-[#F0EEED] h-36 lg:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="\products\shirt3.png"
              alt="shirt"
            />
          </Link>
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="text-xs lg:text-lg py-1 font-semibold">
            VERTICAL STRIPED SHIRT
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">5.0</span>
              <span>/5</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xl py-1 font-semibold">$212</span>
            <span className="text-[#c4c4c4] line-through">$232</span>
            <span className="w-fit px-2 py-1 rounded-full bg-red-100 text-red-500">
              -20
            </span>
          </div>
        </div>

        <div className="card w-1/2 lg:w-1/4 flex flex-col p-4 rounded-md">
          <Link className="image w-36 lg:w-2xs bg-[#F0EEED] h-36 lg:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="\products\tshirt2.png"
              alt="shirt"
            />
          </Link>
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="text-xs lg:text-lg py-1 font-semibold">
            COURAGE GRAPHIC T-SHIRT
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">4.0</span>
              <span>/5</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xl py-1 font-semibold">$145</span>
          </div>
        </div>

        <div className="card w-1/2 lg:w-1/4 flex flex-col p-4 rounded-md">
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="image w-36 lg:w-2xs bg-[#F0EEED] h-36 lg:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="\products\shorts.png"
              alt="shirt"
            />
          </Link>
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="text-xs lg:text-lg py-1 font-semibold">
            LOOSE FIT BERMUDA SHORTS
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">3.0</span>
              <span>/5</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xl py-1 font-semibold">$80</span>
          </div>
        </div>

        <div className="card w-1/2 lg:w-1/4 flex flex-col p-4 rounded-md">
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="image w-36 lg:w-2xs bg-[#F0EEED] h-36 lg:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="\products\jeans2.png"
              alt="shirt"
            />
          </Link>
          <Link  to={'/product/T-SHIRT WITH TAPE DETAILS'} className="text-xs lg:text-lg py-1 font-semibold">
            FADED SKINNY JEANS
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 5.svg"
                  alt="star"
                />
              </span>
            </div>
            <div>
              <span className="font-bold">4.5</span>
              <span>/5</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-xl py-1 font-semibold">$240</span>
          </div>
        </div>
      </div>

      <div className="text-center w-full my-8 px-4">
        <button className="w-full lg:w-fit py-2 px-20 rounded-full border border-[#f0f0f0] text-center cursor-pointer">
          Veiw All
        </button>
      </div>

      <div className="w-[98%] lg:w-[90%] min-h-[70vh] my-8 mx-auto px-2 lg:px-20 bg-[#f0f0f0] rounded-4xl">
        <h2 className="text-center py-12 px-8 text-4xl font-black">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="cards w-full flex-wrap flex gap-4 py-3 lg:py-8">
          <div className="w-full lg:w-[39%] h-[190px] lg:h-[289px] bg-[url('/mens/image1.png')] bg-cover scale-x-[-1] rounded-2xl">
            <h2 className="text-lg font-bold p-8 scale-x-[-1]">Casual</h2>
          </div>

          <div className="w-full lg:w-[59%] h-[190px] lg:h-[289px] bg-[url('/mens/image2.png')] bg-cover scale-x-[-1] rounded-2xl">
            <h2 className="text-lg font-bold p-8 scale-x-[-1]">Formal</h2>
          </div>

          <div className="w-full lg:w-[59%] h-[190px] lg:h-[289px] bg-[url('/mens/image3.png')] bg-cover rounded-2xl">
            <h2 className="text-lg font-bold p-8">Party</h2>
          </div>
          <div className="w-full lg:w-[39%] h-[190px] lg:h-[289px] bg-[url('/mens/image4.png')] bg-cover rounded-2xl">
            <h2 className="text-lg font-bold p-8">Gym</h2>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto my-8 flex justify-between items-center">
        <h2 className="text-4xl font-black">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-4 items-center">
          <span><img src="/icons/arrowLeft.svg" alt="" /></span>
          <span><img src="/icons/arrowRight.svg" alt="" /></span>
        </div>
      </div>

      <div className="reviews w-[98%] lg:w-[90%] mx-auto my-8 flex gap-4 overflow-x-auto">

        <div className="reveiw min-w-[97%] lg:min-w-[358px] h-[186px] lg:h-60 border border-[#f0f0f0] rounded-xl py-6 lg:py-7 px-6 lg:px-8">
          
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
            </div>

            <div className="flex items-center gap-2 py-2">
              <h3 className="text-xl font-bold">Sarah M.</h3>
              <span><img className="h-[15px] w-[15px] lg:h-6 lg:w-6" src="/icons/blueTick.svg" alt="" /></span>
            </div>

            <p className="text-[#c4c4c4] text-sm overflow-y-auto">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
          
        </div>

        <div className="reveiw min-w-[97%] lg:min-w-[358px] h-[186px] lg:h-60 border border-[#f0f0f0] rounded-xl py-6 lg:py-7 px-6 lg:px-8">
          
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
            </div>

            <div className="flex items-center gap-2 py-2">
              <h3 className="text-xl font-bold">Alex K.</h3>
              <span><img className="h-[15px] w-[15px] lg:h-6 lg:w-6" src="/icons/blueTick.svg" alt="" /></span>
            </div>

            <p className="text-[#c4c4c4] text-sm overflow-y-auto">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
        </div>

        <div className="reveiw min-w-[97%] lg:min-w-[358px] h-[186px] lg:h-60 border border-[#f0f0f0] rounded-xl py-6 lg:py-7 px-6 lg:px-8">
          
            <div className="flex gap-1">
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
              <span>
                <img
                  className="h-[15.47px] w-[15.47px] lg:h-[18.49px] lg:w-[18.49px]"
                  src="/icons/Star 4.svg"
                  alt="star"
                />
              </span>
            </div>

            <div className="flex items-center gap-2 py-2">
              <h3 className="text-xl font-bold">James L.</h3>
              <span><img className="h-[15px] w-[15px] lg:h-6 lg:w-6" src="/icons/blueTick.svg" alt="" /></span>
            </div>

            <p className="text-[#c4c4c4] text-sm overflow-y-auto">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;
