import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    crateOrder: build.mutation({
      query: (data) => ({
        url: "orders",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCrateOrderMutation } = orderApi;
