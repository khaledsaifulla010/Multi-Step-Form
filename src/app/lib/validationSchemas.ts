import { z } from "zod";

export const step1Schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
});

export const step2Schema = z.object({
  street: z.string().min(1, "Street Address is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().regex(/^\d{5,}$/, "Zip must be at least 5 digits"),
});

export const step3Schema = z
  .object({
    username: z.string().min(4, "Username must be at least 4 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
