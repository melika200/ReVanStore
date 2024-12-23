import React, { useState } from "react";
import { addToCart } from "../../Pages/Redux/CartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({ products }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);
  console.log(products);

  const handleAddToCart = (e, products) => {
    e.stopPropagation();
    e.preventDefault();
    if (products && products.id && products.price) {
      dispatch(addToCart(products));
      alert("Product Added Successfully!");
    } else {
      console.error("Product or Product ID/Price is undefined");
    }
  };

  const handleShowClick = (id) => {
    setShow(show === id ? null : id);
  };

  return (
    <div>
      <div
        className="bg-white shadow-md cursor-pointer p-4 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
        key={products.id}
      >
        <div
          className="absolute top-3 right-2 flex items-center justify-center w-6 h-6 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all"
          onClick={(e) => handleAddToCart(e, products)}
        >
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block">Add To Cart</span>
        </div>
        <img
          src={products.image}
          className="w-full h-48 object-contain p-3"
          alt={products.title}
        />
        <h1 className="text-center">{products.category}</h1>
        <p className="text-center my-3 font-light text-[11px] animate-pulse">
          {products.title}
        </p>
        <p className="text-gray-500">${products.price}</p>
        <span
          className={`font-light text-[12px] text-justify description ${
            show === products.id ? "block" : "line-clamp-2"
          }`}
        >
          {products.description}
        </span>
        <div className="flex items-center">
          <button
            className="text-blue-500 items-center text-xs mt-2 transform transition duration-300 hover:translate-y-3 outline-none"
            onClick={() => handleShowClick(products.id)}
          >
            {show === products.id ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
}
