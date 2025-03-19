import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import productsApi from "./productsApi";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
