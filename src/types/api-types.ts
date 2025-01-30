import { adminProjectType } from "./reducer-types";
import { Admin, Employee, UpdateProject, updateEmp } from "./types";

// Commen Types

export type GetLoggedUserResponce = {
  success: boolean;
  user: Admin | Employee;
};

// ************************************************************************************************

export type messageResponce = {
  success: boolean;
  message: string;
  // error?: { message: string };
};

export type adminLoginResponce = {
  success: boolean;
  admin: Admin;
};

export type updateAdminRequest = {
  id: string;
  admin: Admin;
};

// Admin Project

export type createProject = {
  startDate: string;
  endDate: string;
  projectName: string;
  budget: number | null;
  projectManager: string;
  projectDescription?: string;
};

export type ProjectsResponse = {
  projects: adminProjectType[];
};

export type updateRequest = {
  id: string;
  data: UpdateProject;
};

//*********************************************************************************************************

export type allRequest = {
  allRequests: Employee[];
};

export type empLoginRequest = {
  email: string;
  skill: string;
  gender: string;
};

export type empUpdateRequest = {
  id: string;
  data: updateEmp;
};

export type empSkillResponse = {
  allSkills: { _id: string; count: number }[];
};

export type empTrendsResponse = {
  labels: string[];
  datasets: {
    data: number[];
  };
};
