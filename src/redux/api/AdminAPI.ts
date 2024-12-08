import { adminLoginResponce, messageResponce } from "@/types/api-types";
import { Admin, adminLogin } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminAPI = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/admin/`,
  }),
  endpoints: (builder) => ({
    adminRegister: builder.mutation<messageResponce, Admin>({
      query: (admin) => ({
        url: "new",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
      }),
    }),

    login: builder.mutation<adminLoginResponce, adminLogin>({
      query: (admin) => ({
        url: "login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
      }),
    }),
  }),
});

export const { useAdminRegisterMutation, useLoginMutation } = adminAPI;
