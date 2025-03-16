import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  products: null,
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});
export const { setProducts, setIsLoading, setError } = productSlice.actions;
export default productSlice.reducer;
