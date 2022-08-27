import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.codeleap.co.uk/careers/",
  }),
  endpoints: () => ({}),
  reducerPath: "api",
});
