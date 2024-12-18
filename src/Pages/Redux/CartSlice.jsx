import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  carts: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState: initialstate,
  reducers: {
    addToCart(state, action) {
      const newitem = action.payload;
      const itemIndex = state.carts.find((item) => item.id === newitem.id);
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newitem.price;
      } else {
        state.carts.push({
          id: newitem.id,
          title: newitem.category,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
          image: newitem.image,
        });
      }
      state.totalPrice += newitem.price;
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const findIndex = state.carts.find((item) => item.id === id);
      if (findIndex) {
        state.totalPrice -= findIndex.totalPrice;
        state.totalQuantity -= findIndex.quantity;
        state.carts = state.carts.filter((item) => item.id !== id);
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const findIndex = state.carts.find((item) => item.id === id);
      if (findIndex) {
        findIndex.quantity++;
        findIndex.totalPrice += findIndex.price;
        state.totalQuantity++;
        state.totalPrice += findIndex.price;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const findIndex = state.carts.find((item) => item.id === id);
      if (findIndex.quantity > 1) {
        if (findIndex) {
          findIndex.quantity--;
          findIndex.totalPrice -= findIndex.price;
          state.totalQuantity--;
          state.totalPrice -= findIndex.price;
        }
      }
    },
  },
});
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
