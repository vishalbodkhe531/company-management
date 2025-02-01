import {
  adminLoginResponce,
  messageResponce,
  updateAdminRequest,
} from "@/types/api-types";
import { Admin, OTPRequest, adminLogin } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminAPI = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/admin/`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    adminRegister: builder.mutation<messageResponce, Admin>({
      query: (admin) => ({
        url: "new",
        method: "POST",
        body: JSON.stringify(admin),
      }),
    }),

    login: builder.mutation<adminLoginResponce, adminLogin>({
      query: (admin) => ({
        url: "login",
        method: "POST",
        body: JSON.stringify(admin),
      }),
    }),

    getLoggedAdmin: builder.query<adminLoginResponce, void>({
      query: () => ({ url: "logged" }),
    }),

    logoutAdmin: builder.mutation<messageResponce, void>({
      query: () => ({
        url: "logout",
      }),
    }),

    updateAdmin: builder.mutation<Admin, updateAdminRequest>({
      query: ({ id, admin }) => ({
        url: id,
        method: "PUT",
        body: admin,
      }),
    }),

    googleSignIn: builder.mutation<Admin, Admin>({
      query: (admin) => ({
        url: "google-login",
        method: "POST",
        body: admin,
      }),
    }),

    sendOTP: builder.mutation<messageResponce, OTPRequest>({
      query: (email) => ({
        url: "send-otp",
        method: "POST",
        body: email,
      }),
    }),

    verifyOTP: builder.mutation<messageResponce, OTPRequest>({
      query: ({ email, verificationCode }) => ({
        url: "varify-otp",
        method: "POST",
        body: { email, verificationCode },
      }),
    }),
  }),
});

export const {
  useAdminRegisterMutation,
  useLoginMutation,
  useGetLoggedAdminQuery,
  useLogoutAdminMutation,
  useUpdateAdminMutation,
  useGoogleSignInMutation,
  useSendOTPMutation,
  useVerifyOTPMutation,
} = adminAPI;
