import { z } from "zod";

export const registerSchema = z.object({
  Name: z.string().min(1, { message: "Must be 1 or more characters long" }),
  Email: z.string().email({ message: "Please provide your valid email" }),
  Password: z
    .string()
    .min(6, { message: "Password must be 6 characters long" })
    .max(20, { message: "Password must be 20 characters low" }),
});
