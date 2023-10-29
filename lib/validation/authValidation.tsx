import { Regex } from "lucide-react";
import * as z from "zod";
export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "It's not a email. Give a perfect email" }),
  password: z.string().min(4, {
    message: "password must be at least 4 characters.",
  }),
});

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: "username cannot be empty" })
      .regex(new RegExp("^[a-zA-Z]{4}[0-9]{4}$"), {
        message: "your user name should mix of 4 characters and 4 numbers",
      }),
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z
      .string()
      .email({ message: "It's not a email. Give a perfect email" }),
    password: z.string().min(4, {
      message: "password must be at least 4 characters.",
    }),
    confirm: z.string().min(4, {
      message: "confirm password must be at least 4 characters.",
    }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });
