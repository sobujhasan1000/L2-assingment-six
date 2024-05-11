import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getDonation: builder.query({
      query: () => ({
        url: "/alldonations",
        method: "GET",
      }),
    }),
    postdonation: builder.mutation({
      query: (data) => {
        console.log("insite data", data);
        return { url: "/postdonation", method: "POST", body: data };
      },
    }),
  }),
});

export const { useGetDonationQuery, usePostdonationMutation } = baseApi;
