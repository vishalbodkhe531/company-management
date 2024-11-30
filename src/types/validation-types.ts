import {
  adminSchema,
  applyProjectSchema,
  employeeSchema,
} from "@/components/form-validation /Validation";
import z from "zod";

export type AdminFormValues = z.infer<typeof adminSchema>;

export type ApplyFormValues = z.infer<typeof applyProjectSchema>;

export type EmployeeFormValues = z.infer<typeof employeeSchema>;
