"use server";
import prisma from "@/lib/db/prisma";
export async function fetchPosts() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    return {
      success: true,
      data: posts,
    };
  } catch (error) {
    return {
      error,
    };
  }
}
