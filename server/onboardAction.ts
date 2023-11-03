import prisma from "@/lib/db/prisma";
import { MentorOnBoardData } from "@/types";

export async function OnBoard({
  firstname,
  lastname,
  email,
  bio,
  skills,
  subject,
}: MentorOnBoardData) {
  if (!firstname || !lastname || !email || !bio || !skills) return null;
  const mentor = await prisma.mentor.create({
    data: {
      firstname,
      lastname,
      email,
      bio,
      skills,
      subject,
      onboard: true,
    },
  });

  return mentor;
}
