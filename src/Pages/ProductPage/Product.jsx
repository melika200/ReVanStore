import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { BiArrowFromTop } from "react-icons/bi";
import { setProducts, setSearchTerm } from "../Redux/ProductSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export default function Product() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);
  const showproductRef = useRef(null);
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["photos"],
    queryFn: fetchProducts,
    onSuccess: (data) => {
      dispatch(setProducts(data));
    },
  });

  const handleShowClick = (id) => {
    setShow(show === id ? null : id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const showProducthandler = () => {
    if (showproductRef.current) {
      showproductRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
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
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter");
    console.log(setSearchTerm(search));
    
  };
  
  return (
    <div className="bg-gray-100">
      <div
        className=" bg-cover h-screen relative bg-center"
        style={{ backgroundImage: "url('/12.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30 flex flex-col items-center justify-center text-white">
          <p className="text-4xl">Show products</p>
          <BiArrowFromTop
            onClick={showProducthandler}
            size={50}
            className=" rounded-full my-8 border text-xl cursor-pointer transform transition-transform duration-300 hover:animate-bounce"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-10" ref={showproductRef}>
        <h1 className="font-mono text-4xl text-gray-600 text-center py-6">
          Products
        </h1>
        <div className="relative flex-1 mx-4 my-6">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search your measurable product"
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3 px-3 border rounded-lg outline-none placeholder:text-center"
            />
            <FaSearch className="absolute top-3 right-3 text-red-600" />
          </form>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative">
          {data.map((d) => (
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
              <h1 className="text-center">{d.category}</h1>
              <p className="text-center my-3 font-light text-[11px] animate-pulse">
                {d.title}
              </p>
              <p className="text-gray-500">${d.price}</p>
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
    </div>
  );
}
