import { getServerSession } from "next-auth";
import prisma from "@/lib/db/prisma";

export async function getUserData() {
  const session = await getServerSession();
  if (!session) return null;

  const email = session.user?.email;

  if (!email) return null;

  const currentUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return currentUser;
}
