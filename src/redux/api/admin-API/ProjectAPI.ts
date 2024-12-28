import { ProjectsResponse, messageResponce } from "@/types/api-types";
import { Project } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminProjectAPI = createApi({
  reducerPath: "adminProjectAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/admin/project/`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createProject: builder.mutation<messageResponce, Project>({
      query: (data) => ({
        url: "new",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
    }),

    allProjects: builder.query<ProjectsResponse, void>({
      query: () => ({ url: "all" }),
    }),
  }),
});

export const { useCreateProjectMutation, useAllProjectsQuery } =
  adminProjectAPI;
