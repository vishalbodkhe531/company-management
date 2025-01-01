export type ToastType = {
  message: string;
  description: string;
  firstLabel?: string;
  secLabel?: string;
  caseHandler?: (lable: string) => void;
};

export type User = {
  name: string;
  email: string;
  password: string;
  employeeId?: string;
};

export interface AdminDataType {
  email: string;
  address: string;
  gender: string;
  adminID: string;
  adminRole: string;
  department: string;
  accessLevel: string;
}

export type Admin = {
  name: string;
  email: string;
  password?: string;
  profilePic?: string;
  gender: string;
  _id?: string;
  role?: string;
};

export type adminLogin = {
  email: string;
  password: string;
};

export type OTPRequest = {
  email: string;
  verificationCode?: string;
};

// Admin Project

export type Project = {
  projectName: string;
  startDate: string;
  endDate: string;
  budget: number | null;
  projectManager: string;
  projectDescription?: string;
};

export interface UpdateProject {
  projectName?: string;
  startDate: string;
  endDate: string;
  budget?: number;
  projectManager?: string;
  projectDescription?: string;
  _id: string;
}
