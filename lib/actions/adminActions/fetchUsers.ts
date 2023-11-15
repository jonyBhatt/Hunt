"use server";

import prisma from "@/lib/db/prisma";

export async function FetchUser(q: any, page: any) {
  const ITEM_PER_PAGE = 2
  try {
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: q,
          mode: "insensitive",

          
        },
        
      },
      take:ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (page -1)
    });

    const totalUser = await prisma.user.count({
      where: {
        name: {
          contains: q,
          mode: "insensitive"
        }
      }
    })
    return {users, totalUser};
  } catch (error) {
    console.log(error);
    throw error;
  }
}
