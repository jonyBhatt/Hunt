import * as z from "zod";

export const mentorSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  bio: z.string(),
  skills: z.string(),
});
