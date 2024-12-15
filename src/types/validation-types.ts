import {
  OTPSchema,
  adminSchema,
  applyProjectSchema,
  employeeSchema,
  updateAdminSchema,
} from "@/components/form-validation /Validation";
import z from "zod";

export type AdminFormValues = z.infer<typeof adminSchema>;

export type UpdateAdminFormValues = z.infer<typeof updateAdminSchema>;

export type ApplyFormValues = z.infer<typeof applyProjectSchema>;

export type EmployeeFormValues = z.infer<typeof employeeSchema>;

export type OTPFormValues = z.infer<typeof OTPSchema>;
