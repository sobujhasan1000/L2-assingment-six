import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://l2-b2-frontend-path-assignment-6-server-starter-pack-2p31bxs6u.vercel.app",
  }),
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
