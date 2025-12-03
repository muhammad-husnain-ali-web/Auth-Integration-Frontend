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

import React from 'react'
import { getProductsByCategory, logout } from '../../lib/services'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'


const Home = () => {

  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState(null)
  const [category, setCategory] = useState(null)

  const getProducts = async (category) => {
    let res ;
    if(category===null || category===""){
      res = await getProductsByCategory("Mobile")
    }else{
      res = await getProductsByCategory(category)
    }
    
    console.log(res)
    if(!res.success){
      setProducts([])
    }else{
      setCategory(res.category)
      setProducts(res.products)
    }

  }

  useEffect(() => {
    const category = searchParams.get("category");
    console.log(category)
    getProducts(category)
  }, [searchParams]);

  return (
    <div className='w-[95%] lg:w-[70%] mx-auto py-20'>
      {products===null ? (
        <Loader />
      ) : (
        products.length===0 ? (
        <div className='text-6xl'>No Product Found Yet</div>
        ) : (
          <>
          <h1 className='text-2xl font-bold my-10'>{category.name}</h1>
          <ProductCard products={products} />
          </>
        )
      )}
    </div>
  )
}

export default Home
