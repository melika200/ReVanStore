import "./Products.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Pages/Redux/CartSlice";
import { setProducts } from "../../Pages/Redux/ProductSlice";

const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export default function Products() {
  // const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["photos"],
    queryFn: fetchProducts,
    onSuccess: (data) => {
      dispatch(setProducts(data));
    },
  });

  const [show, setShow] = useState(null);

  const handleShowClick = (id) => {
    setShow(show === id ? null : id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  console.log(data);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    if (product && product.id && product.price) {
      dispatch(addToCart(product));
      alert("Product Added Successfully!");
    } else {
      console.error("Product or Product ID/Price is undefined");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-mono text-4xl text-gray-600 text-center py-6">
        Products
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative">
        {data.slice(0, 12).map((d) => (
          <div
            className="bg-white shadow-md cursor-pointer p-4 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            key={d.id}
          >
            <div
              className="absolute  top-3 right-2  flex items-center justify-center w-6 h-6
               bg-red-600 group text-white text-sm rounded-full 
                 hover:w-32 hover:bg-red-700 transition-all"
              onClick={(e) => handleAddToCart(e, d)}
            >
              <span className="group-hover:hidden">+</span>
              <span className="hidden group-hover:block">Add To Cart</span>
            </div>
            <img
              src={d.image}
              className="w-full h-48 object-contain p-3"
              alt={d.title}
            />
            <h1 className="text-center">{d.title}</h1>
            <p className="text-center my-3 font-light text-[11px] animate-pulse">
              {d.title}
            </p>
            <p className="text-gray-500">Price:${d.price}</p>
            <span
              className={`font-light text-[12px] text-justify description ${
                show === d.id ? "block" : "line-clamp-2"
              }`}
            >
              {d.description}
            </span>
            <div className="flex items-center">
              <button
                className="text-blue-500 items-center text-xs mt-2 transform transition duration-300 hover:translate-y-3 outline-none"
                onClick={() => handleShowClick(d.id)}
              >
                {show === d.id ? "See Less" : "See More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
