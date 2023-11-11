"use server";

import prisma from "@/lib/db/prisma";

export async function FetchUser(q: any) {
  try {
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: q,
          mode: "insensitive",
        },
      },
    });
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
