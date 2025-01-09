import {
  ProjectsResponse,
  messageResponce,
  updateRequest,
} from "@/types/api-types";
import { Employee, Project, UpdateProject } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminProjectAPI = createApi({
  reducerPath: "adminProjectAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/admin/project/`,
    credentials: "include",
  }),

  tagTypes: ["project"],

  endpoints: (builder) => ({
    createProject: builder.mutation<messageResponce, Project>({
      query: (data) => ({
        url: "new",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["project"],
    }),

    allProjects: builder.query<ProjectsResponse, void>({
      query: () => ({ url: "all" }),
      providesTags: ["project"],
    }),

    deleteProject: builder.mutation<messageResponce, string>({
      query: (id) => ({ url: `${id}`, method: "DELETE" }),
      invalidatesTags: ["project"],
    }),

    updateProject: builder.mutation<UpdateProject, updateRequest>({
      query: ({ id, data }) => ({ url: `${id}`, method: "PUT", body: data }),
      invalidatesTags: ["project"],
    }),

  
  }),
});

export const {
  useCreateProjectMutation,
  useAllProjectsQuery,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = adminProjectAPI;
