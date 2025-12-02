import { useState, useEffect } from 'react'
import { AuthContext } from "./context/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import { userFound } from '../lib/services';
import PrivateRoute from './privateRoute/PrivateRoute';
import PublicRoute from './publicRoute/PublicRoute';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

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
      element: < PrivateRoute >
      <Home /> 
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
        <div className="min-h-screen w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <RouterProvider router={router} />
        </div>
      </AuthContext.Provider>
    </>
  )
}

export default App