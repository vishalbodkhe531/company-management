import z from "zod";

// Admin Form
export const adminSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .optional(),

  email: z.string().trim().email("Invalid email address").optional(),

  password: z
    .string()
    .trim()
    .length(6, "Password must be exactly 6 characters long")
    .optional(),
  gender: z
    .enum(["male", "female", "other"], {
      message: "Select a valid gender",
    })
    .optional(),
});

export const updateAdminSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .optional(),

  email: z.string().trim().email("Invalid email address").optional(),

  password: z
    .string()
    .trim()
    .refine((password) => !password || password.length >= 6, {
      message: "Password must be at least 6 characters long",
    })
    .optional(),

  gender: z
    .enum(["male", "female", "other"], {
      message: "Select a valid gender",
    })
    .optional(),
});

export const applyProjectSchema = z.object({
  email: z.string().trim().email("Invalid email address"),

  firstName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long"),

  lastName: z.string().trim().min(2, "Name must be at least 2 characters long"),

  projectTitle: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long"),

  phoneNo: z
    .string()
    .trim()
    .regex(/^\+?\d{7,15}$/, "Invalid phone number"),

  resignationDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use 'YYYY-MM-DD'.")
    .refine(
      (date) => new Date(date) < new Date(),
      "Resignation date cannot be in the feature"
    ),

  address: z.string().min(5, "Name must be at least 4 characters long").trim(),

  department: z
    .string()
    .min(1, "Name must be at least 1 characters long")
    .trim(),

  gender: z
    .enum(["Male", "Female", "Other"], {
      required_error: "Gender is required",
    })
    .optional(),
});

export const employeeSchema = z.object({
  fullName: z.string().trim().min(1, "Full Name is required"),

  dateOfBirth: z
    .string()
    .trim()
    .refine(
      (date) => new Date(date) < new Date(),
      "Resignation date cannot be in the feature"
    ),

  gender: z.enum(["Male", "Female", "Other"], {
    required_error: "Gender is required",
  }),
  email: z.string().trim().email("Invalid email address"),
  phoneNumber: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits"),

  address: z.string().trim().min(1, "Address is required"),
  employeeId: z.string().trim().min(1, "Employee ID is required"),
  jobTitle: z.string().trim().min(1, "Job Title is required"),
  department: z.enum(["HR", "IT", "Sales", "Finance"], {
    required_error: "Department is required",
  }),

  employmentType: z.enum(["Full-time", "Part-time", "Contract"]),
});

export const OTPSchema = z.object({
  pin: z
    .string()
    .min(6, {
      message: "Your one-time password must be 6 characters.",
    })
    .regex(/^\d+$/, { message: "OTP must contain only numbers." }),
});

// Admin Project Form

export const projectSchema = z
  .object({
    projectName: z
      .string()
      .min(3, { message: "Project name must be at least 3 characters long." })
      .max(50, { message: "Project name cannot exceed 50 characters." })
      .nonempty({ message: "Project name is required." }),

    projectDescription: z.string().optional(),

    startDate: z.string().nonempty({ message: "Start date is required." }),
    endDate: z.string().nonempty({ message: "End date is required." }),

    budget: z
      .number()
      .nullable()
      .refine((val) => val === null || val > 10000, {
        message: "Budget must be greater than 10000",
      }),

    projectManager: z
      .string()
      .nonempty({ message: "Please select a valid project manager." })
      .refine((manager) => manager !== "Select Manager", {
        message: "Please select a valid project manager.",
      }),
  })
  .superRefine((data, ctx) => {
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);

    if (end < start) {
      ctx.addIssue({
        code: "custom",
        path: ["endDate"],
        message: "End date must be after the start date.",
      });
    }
  });
