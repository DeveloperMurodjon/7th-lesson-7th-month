import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL || process?.env?.VITE_BASE_URL,
  }),
  endpoints: (build) => ({
    getAll: build.query({
      query: () => "products",
    }),
    getByID: build.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetAllQuery, useGetByIDQuery } = productsApi;
export default productsApi;
