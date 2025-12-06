import { useState, useEffect } from 'react'
import { AuthContext } from "./context/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { userFound } from '../lib/services';
import PrivateRoute from './privateRoute/PrivateRoute';
import PublicRoute from './publicRoute/PublicRoute';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const res = await userFound();
    console.log(res)
    setUser({ auth: res.auth, user: res.user });
  };

  useEffect(() => {
    getUser();
  }, []);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home /> 
    },
    {
      path: "/product/:name",
      element: < PrivateRoute >
      <ProductDetail />
      </PrivateRoute>
    },
    {
      path: "/auth/login",
      element: < PublicRoute >
      <Login /> 
      </PublicRoute>
    },
    {
      path: "/auth/register",
      element: < PublicRoute >
      <Register /> 
      </PublicRoute>
    },
  ])

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <div className=" overflow-hidden min-h-screen w-full">
          <Navbar />
          <RouterProvider router={router} />
        </div>
      </AuthContext.Provider>
    </>
  )
}

export default App