import {
  allRequest,
  empLoginRequest,
  empSkillResponse,
  empTrendsResponse,
  empUpdateRequest,
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

    empLogin: builder.mutation<Employee, empLoginRequest>({
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

    allEmployees: builder.query<allRequest, void>({
      query: () => ({ url: "all-employee" }),
      providesTags: ["Requests"],
    }),

    empUpdate: builder.mutation<Employee, empUpdateRequest>({
      query: ({ data, id }) => ({
        url: id,
        method: "PUT",
        body: data,
      }),
    }),

    logoutEmp: builder.mutation<messageResponce, void>({
      query: () => ({ url: "logout" }),
    }),

    deleteEmp: builder.mutation<messageResponce, string>({
      query: (id) => ({
        url: id,
        method: "DELETE",
      }),
      invalidatesTags: ["Requests"],
    }),

    skillGraph: builder.query<empSkillResponse, void>({
      query: () => ({ url: "department-distribution" }),
      providesTags: ["Requests"],
    }),

    empTrends: builder.query<empTrendsResponse, void>({
      query: () => ({ url: "emp-trends" }),
      providesTags: ["Requests"],
    }),
  }),
});

export const {
  useEmpRegisterMutation,
  useAllEmpRequestsQuery,
  useEmpLoginMutation,
  useAcceptRequestMutation,
  useAllEmployeesQuery,
  useRejectEmpRequestsMutation,
  useEmpUpdateMutation,
  useLogoutEmpMutation,
  useDeleteEmpMutation,
  useSkillGraphQuery,
  useEmpTrendsQuery,
} = empAPI;
