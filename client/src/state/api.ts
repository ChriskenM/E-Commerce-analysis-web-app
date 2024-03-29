import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
  LoginResponse,
  RegisterResponse,
  LoginRequest,
  RegisterRequest,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions", "User"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"], // Invalidate "User" tag type after login
    }),
    register: build.mutation<RegisterResponse, RegisterRequest>({
      query: (userInfo) => ({
        url: "auth/register",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["User"], // Invalidate "User" tag type after registration
    }),
  }),
});

export const {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
  useLoginMutation,
  useRegisterMutation,
} = api;
