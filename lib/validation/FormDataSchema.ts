import { z } from "zod";

export const FormDataSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  skills: z.string().min(1, "Skills is required"),
  bio: z.string(),
});

export const mentorFormSchema = z.object({
  title: z.string().min(1, { message: "Title Required" }),
  description: z.string().min(2, { message: "description cannot be empty" }),
  cat: z.string() || undefined,
  imageUrl: z.string() || "",

});
