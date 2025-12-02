import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { logout } from '../../lib/services'

const Home = () => {

  const navigate = useNavigate()

  const {user, setUser} = useContext(AuthContext)
  console.log(user)

  const handleLogout = async () => {
    const res = await logout();
    if(res.success) {
      setUser({auth: false, user: null})
      navigate("/auth/login")
    }
  }

  return (
    <div className='w-screen h-screen flex flex-col items-center py-20'>
     {user && <h1 className='text-green-800 text-lg'>Hello {user.user.name}</h1>}
      <button type='button' onClick={handleLogout} className='w-[200px] px-4 py-2 my-2 text-center text-red-600 hover:bg-gray-200 rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Home
