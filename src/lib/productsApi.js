import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL || process?.env?.VITE_BASE_URL,
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer",
    },
  }),
  endpoints: (build) => ({
    getAll: build.query({
      query: () => `products`,
    }),
    getByID: build.query({
      query: (id) => `products/${id}`,
    }),
    addProduct: build.mutation({
      query: (data) => ({
        url: `/products/add`,
        method: "POST",
        body: JSON.stringify(data),
      }),
    }),
  }),
});

export const { useGetAllQuery, useGetByIDQuery, useAddProductMutation } =
  productsApi;
export default productsApi;
