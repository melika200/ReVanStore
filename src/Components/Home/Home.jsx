import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import Services from "../Services/Services";
export default function Home() {
  return (
    <>
      <div
        className="relative bg-cover  bg-center  h-screen overflow-hidden"
        style={{ backgroundImage: "url('/uss.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white font-bold text-4xl mb-4 md:text-5xl">
            Explore Your Favorite Products
          </h1>
          <p className="text-white font-semibold text-lg md:text-2xl my-5">
            Discover amazing places at exclusive deals
          </p>
          <Link
            to="/product"
            className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-orange-600 transform transition duration-300 hover:scale-105 hover:animate-bounce"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="bg-gray-100">
        <Services/>
        <Products />
      </div>
    </>
  );
}
