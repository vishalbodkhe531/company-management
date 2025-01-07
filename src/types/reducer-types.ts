import { Admin, Employee } from "./types";

export interface adminReducerInitialState {
  admin: Admin | null;
  loading: boolean;
}

export interface adminProjectType {
  projectName: string;
  startDate: string;
  endDate: string;
  budget: number;
  projectManager: string;
  projectDescription?: string;
  projectStatus: string;
  _id: string;
}

export type adminProjectInitialState = {
  projects: adminProjectType[];
  loading: boolean;
};

// Employee Section

export interface empReducerInitialState {
  employee: Employee | null;
  loading: boolean;
}
