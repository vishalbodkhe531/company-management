import { z } from "zod";

export const empSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(50, { message: "First name cannot exceed 50 characters" })
    .optional(),

  lastName: z
    .string()
    .trim()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(50, { message: "Last name cannot exceed 50 characters" })
    .optional(),

  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .optional(),

  address: z
    .string()
    .trim()
    .min(10, { message: "Address must be at least 10 characters long" })
    .max(200, { message: "Address cannot exceed 200 characters" })
    .optional(),

  phoneNumber: z
    .string()
    .trim()
    .length(10, { message: "Phone number must be exactly 10 digits" })
    .regex(/^\d+$/, { message: "Phone number must contain only numbers" }),

  birthDay: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "Birth date must be in the format YYYY-MM-DD",
    }),

  highestQualification: z
    .string()
    .trim()
    .min(2, {
      message: "Highest qualification must be at least 2 characters long",
    })
    .optional(),

  department: z
    .string()
    .trim()
    .min(2, { message: "Department must be at least 2 characters long" }),

  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters long" })
    .optional(),

  gender: z
    .enum(["male", "female", "other"], { message: "Select a valid gender" })
    .optional(),
});