import { Admin } from "./types";

export type messageResponce = {
  success: boolean;
  message: string;
};

export type adminLoginResponce = {
  success: boolean;
  admin: Admin;
};
