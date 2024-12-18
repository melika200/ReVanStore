import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../Redux/CartSlice";
import { FaTrashAlt } from "react-icons/fa";
export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="container mx-auto py-12">
        {cart.carts.length > 0 ? (
          <div>
            <h3>Cart</h3>
            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-10">
              <div className="w-2/3">
                <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                  <p>Products</p>
                  <div className="flex space-x-14">
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                    <p>Remove</p>
                  </div>
                </div>
                <div className="">
                  {cart.carts.map((item) => (
                    <div
                      className="flex justify-between items-center border-b p-3"
                      key={item.id}
                    >
                      <div className="md:flex space-x-4 items-center">
                        <img
                          src={item.image}
                          alt={item.category}
                          className="w-16 h-16 object-contain rounded"
                        />
                        <div className="flex-1 ml-4">
                          <h3 className="text-xl font-semibold">
                            {item.category}
                          </h3>
                        </div>
                      </div>
                      <div className="flex space-x-12 items-center">
                        <p>${item.price}</p>
                        <div className="flex items-center justify-center border">
                          <button
                            className="text-xl font-bold px-1.5 border-r"
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                          >
                            -
                          </button>
                          <p className="text-xl px-2">{item.quantity}</p>
                          <button
                            className="text-xl px-1 border-l"
                            onClick={() => dispatch(increaseQuantity(item.id))}
                          >
                            +
                          </button>
                        </div>
                        <p>${(item.quantity * item.price).toFixed(2)}</p>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-sm font-semibold mb-5">Cart Total</h3>
                <div className="flex justify-between mb-5 border-b pb-1">
                  <span className="texi-sm">Total Items:</span>
                  <span>{cart.totalQuantity}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Total Price:</span>
                  <span>{cart.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center ">
            <img src="./Empty.jpg" alt="Empty Image" className="h-96" />
          </div>
        )}
      </div>
    </>
  );
}
