import { z } from "zod";

export const loginValue = {
  email: "",
  password: "",
  rememberMe: false,
};

export const loginSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().default(false),
});

export type loginType = z.infer<typeof loginSchema>;

export const resetValues = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const resetSchema = z
  .object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z.string(),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type resetType = z.infer<typeof resetSchema>;

// .regex(
//   /^(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/,
//   "Password must contain at least 1 uppercase letter, 1 number, and 1 special character"
// )
// .min(8, "Password must be at least 8 characters long")
