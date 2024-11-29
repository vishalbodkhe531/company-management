import z from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .optional(),
  email: z.string().trim().email("Invalid email address"),
  password: z
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters long"),

  firstName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .optional(),
  lastName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .optional(),
  projectTitle: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .optional(),

  phoneNo: z
    .string()
    .trim()
    .regex(/^\+?\d{7,15}$/, "Invalid phone number")
    .optional(),

  resignationDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use 'YYYY-MM-DD'.")
    .refine(
      (date) => new Date(date) < new Date(),
      "Resignation date cannot be in the feature"
    )
    .optional(),

  address: z.string().trim().optional(),

  department: z.string().trim().optional(),
});
