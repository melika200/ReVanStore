import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  products: [],
  SearchTerm: "",
  FilterData: [],
};
const ProductSlice = createSlice({
  name: "product",
  initialState: initialstate,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.FilterData = action.payload;
    },
    setSearchTerm(state, action) {
      state.SearchTerm = action.payload;
      state.FilterData = state.products.filter((product) =>
        product.title.toLowerCase().includes(state.SearchTerm.toLowerCase())
      );
    },
  },
});
export const { setProducts, setSearchTerm } = ProductSlice.actions;
export default ProductSlice.reducer;
