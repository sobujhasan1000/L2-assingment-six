import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getDonation: builder.query({
      query: () => ({
        url: "/getdonation",
        method: "GET",
      }),
    }),
    postDonation: builder.mutation({
      query: (data) => ({
        url: "/postdonation",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetDonationQuery, usePostDonationMutation } = baseApi;
