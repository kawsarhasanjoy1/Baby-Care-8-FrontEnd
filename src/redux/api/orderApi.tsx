import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
    }),

    fetchOrder: build.query({
      query: (email) => ({
        url: `/order/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useFetchOrderQuery } = orderApi;
