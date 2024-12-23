import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NavbarItem from './Components/NavbarItem/NavbarItem';
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Product from './Pages/ProductPage/Product';
import Cart from './Pages/Cart/Cart';
import FilterData from './Pages/ProductPage/FilterData';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Chart from './Components/Chart/Chart';
import Table from './Pages/Table/Table';

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="main">
      <NavbarItem />
      <div className="container-site">
        <div className="menu">
          <Menu />
        </div>
        <div className="context">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const isSignedUp = () => {
  return localStorage.getItem("isSignedUp") === "true";
};

const ProtectedRoute = ({ children }) => {
  return isSignedUp() ? children : <Navigate to="/login" />;
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/filter",
          element: <FilterData />,
        },
        {
          path: "/chart",
          element: <Chart />,
        },
        {
          path: "/table",
          element: <ProtectedRoute><Table /></ProtectedRoute>,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
