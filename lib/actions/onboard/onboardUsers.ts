"use server";

import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";

export async function onBoardUser() {
  const session = await getServerSession();
  if (!session || !session.user) {
    return null;
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email!,
        
      },
      
    });

    return user;
  } catch (error) {
    console.log(error);
  }
}
