import { GetLoggedUserResponce } from "@/types/api-types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getLoggedUser = createApi({
  reducerPath: "getLoggedUser",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/get-logged-user/`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getLoggedUser: builder.query<GetLoggedUserResponce, void>({
      query: () => ({ url: "/" }),
    }),
  }),
});

export const { useGetLoggedUserQuery } = getLoggedUser;
