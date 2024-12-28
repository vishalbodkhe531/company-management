import { Admin } from "./types";

export type messageResponce = {
  success: boolean;
  message: string;
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
