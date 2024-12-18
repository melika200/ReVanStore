import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div className="md:hidden flex flex-col space-y-4 items-center bg-white">
      <Link
        to="/"
        className="transform transition duration-300 hover:scale-75 hover:text-white hover:bg-gray-600 px-6 py-2"
      >
        Home
      </Link>
      <Link
        to="/product"
        className=" hover:text-white hover:bg-gray-500 px-6 py-2"
      >
        Products
      </Link>
      <Link
        to="/about"
        className=" hover:text-white hover:bg-gray-500 px-6 py-2"
      >
        About
      </Link>
      <Link
        to="/shop"
        className=" hover:text-white hover:bg-gray-500 px-6 py-2"
      >
        Cart
      </Link>
      <Link
        to="/contact"
        className=" hover:text-white hover:bg-gray-500 px-6 py-2"
      >
        Contact
      </Link>
      <div className="right  flex items-center">
        <img src="" alt="" />
        <Link
          to="/login"
          className=" hover:text-white hover:bg-gray-300 px-6 py-2"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
