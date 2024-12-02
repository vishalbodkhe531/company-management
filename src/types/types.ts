export type ToastType = {
  message: string;
  description: string;
  firstLable?: string;
  secLable?: string;
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
