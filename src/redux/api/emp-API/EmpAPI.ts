import { allRequest, messageResponce } from "@/types/api-types";
import { Employee } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const empAPI = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/emp/`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    empRegister: builder.mutation<messageResponce, Employee>({
      query: (emp) => ({
        url: "new",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp),
      }),
    }),

    sendRequest: builder.mutation<messageResponce, Employee>({
      query: (emp) => ({
        url: "send-request",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp),
      }),
    }),

    allEmpRequests: builder.query<allRequest, void>({
      query: () => ({ url: "all-requests" }),
    }),
  }),
});

export const {
  useEmpRegisterMutation,
  useSendRequestMutation,
  useAllEmpRequestsQuery,
} = empAPI;