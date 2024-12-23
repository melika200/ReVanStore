import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const fetchFilteredProducts = async (searchTerm) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;
  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filtered;
};

export default function FilterData() {
  const searchTerm = useSelector((state) => state.product.SearchTerm);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["filteredProducts", searchTerm],
    queryFn: () => fetchFilteredProducts(searchTerm),
  });
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {data.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Your CHOICE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {data.map((item, index) => (
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
