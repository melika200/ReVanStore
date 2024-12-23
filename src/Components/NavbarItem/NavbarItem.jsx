import React, { useState } from "react";
import "./NavbarItem.css";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaBlog,
  FaChartBar,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaSignInAlt,
  FaTable,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";
export default function NavbarItem() {
  const [open, setOpen] = useState(false);
  const ProductChoice = useSelector((state) => state.cart.carts);
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 shadow-lg z-50 bg-white m-4">
        <div className="container flex p-4 items-center justify-between h-16">
          <div className="left flex items-center">
            <img
              src="/8.png"
              alt="logo"
              className="rounded-full w-12 h-12 object-cover"
            />
            <span className="animate-bounce font-bold">ReVan</span>
            <span className="animate-pulse ml-1">Store</span>
          </div>
          <div className="center hidden md:flex space-x-4">
            <Link
              to="/"
              className="transform transition rounded duration-300 hover:scale-75 hover:text-white hover:bg-gray-600 px-6 py-2"
            >
              <FaHome className="text-lg" />
            </Link>
            <Link
              to="/product"
              className="transform transition rounded duration-300 hover:scale-75 hover:text-white hover:bg-gray-600 px-6 py-2"
            >
              <FaShoppingBag className="text-lg" />
            </Link>
            <Link
              to="/table"
              className="transform transition rounded duration-300 hover:scale-75 hover:text-white hover:bg-gray-600 px-6 py-2"
            >
              <FaTable />
            </Link>
            <Link
              to="/about"
              className="transform transition rounded duration-300 hover:scale-75 hover:text-white hover:bg-gray-600 px-6 py-2"
            >
              <FaBlog />
            </Link>
            <Link
              to="/chart"
              className="transform transition rounded duration-300 hover:scale-75 hover:text-white hover:bg-gray-600 px-6 py-2"
            >
              <FaChartBar />
            </Link>
            <Link
              to="/cart"
              className="relative transform transition rounded duration-300 hover:scale-75 hover:text-white hover:bg-gray-600 px-6 py-2"
            >
              <FaShoppingCart className="text-lg" />
              {ProductChoice.length > 0 && (
                <span
                  className="absolute top-0 text-xs w-3 
                    left-3 bg-red-600 rounded-full 
                    flex justify-center items-center
                     text-white"
                >
                  {ProductChoice.length}
                </span>
              )}
            </Link>
            <Link
              to="/contact"
              className="transform transition rounded duration-300 hover:scale-75 hover:text-white hover:bg-gray-600 px-6 py-2"
            >
              <FaUser />
            </Link>
            <div className="right  flex items-center">
              <img src="" alt="" />
              <Link
                to="/login"
                className="transform transition rounded duration-300 hover:scale-75 hover:text-white hover:bg-gray-500 px-6 py-2"
              >
                <FaSignInAlt />
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {open && <Menu />}
      </nav>
    </>
  );
}
