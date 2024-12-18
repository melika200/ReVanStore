import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

export default function FilterData() {
  const filterproduct = useSelector((state) => state.product.FilterData);
  const navigate = useNavigate();
  console.log(filterproduct);

  return (
    <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterproduct.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Your CHOICE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filterproduct.map((item, index) => (
              <div className="" key={index}>
                <ProductCard products={item} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center container mx-auto">
          <img src="/noProduct.jpg" alt="" className="w-[300px] mt-14" />
          <button
            className="border bg-green-500 px-4 py-2 text-white rounded-md my-5"
            onClick={() => navigate("/product")}
          >
            Back to search
          </button>
        </div>
      )}
    </div>
  );
}
