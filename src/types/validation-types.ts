import {
  OTPSchema,
  adminSchema,
  applyProjectSchema,
  employeeSchema,
  projectSchema,
  updateAdminSchema,
} from "@/components/form-validation /Validation";
import { empSchema } from "@/components/form-validation /empValidation";
import z from "zod";

// Admin Form

export type AdminFormValues = z.infer<typeof adminSchema>;

export type UpdateAdminFormValues = z.infer<typeof updateAdminSchema>;

export type ApplyFormValues = z.infer<typeof applyProjectSchema>;

export type EmployeeFormValues = z.infer<typeof employeeSchema>;

export type OTPFormValues = z.infer<typeof OTPSchema>;

// Admin Project Form

export type ProjectFormValue = z.infer<typeof projectSchema>;

// Employee Section

export type EmpFormValue = z.infer<typeof empSchema>;
