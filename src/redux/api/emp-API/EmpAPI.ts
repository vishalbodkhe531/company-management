import {
  allRequest,
  empLoginRequest,
  messageResponce,
} from "@/types/api-types";
import { Employee } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const empAPI = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/emp/`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Requests"], // Add tag
  endpoints: (builder) => ({
    empRegister: builder.mutation<messageResponce, Employee>({
      query: (emp) => ({
        url: "new",
        method: "POST",
        body: JSON.stringify(emp),
      }),
      invalidatesTags: ["Requests"],
    }),

    empLogin: builder.mutation<messageResponce, empLoginRequest>({
      query: (emp) => ({
        url: "login",
        method: "POST",
        body: JSON.stringify(emp),
      }),
    }),

    acceptRequest: builder.mutation<Employee, string>({
      query: (id) => ({
        url: `/accept-requests/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Requests"],
    }),

    rejectEmpRequests: builder.mutation<Employee, string>({
      query: (id) => ({
        url: `/reject-requests/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Requests"],
    }),

    allEmpRequests: builder.query<allRequest, void>({
      query: () => ({ url: "all-requests" }),
      providesTags: ["Requests"],
    }),
  }),
});

export const {
  useEmpRegisterMutation,
  useAllEmpRequestsQuery,
  useEmpLoginMutation,
  useAcceptRequestMutation,
} = empAPI;
