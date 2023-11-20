"use server";
import { z } from "zod";
import { getServerSession } from "next-auth";
import prisma from "@/lib/db/prisma";
import { mentorFormSchema } from "@/lib/validation/FormDataSchema";

type INPUT = z.infer<typeof mentorFormSchema>;

export const createPost = async (values: INPUT) => {
  const session = await getServerSession();
  if (!session || !session?.user?.email) {
    return null;
  }
  const result = mentorFormSchema.safeParse(values);

  await prisma.post.create({
    data: {
      title: values.title,
      description: values.description,
      categoryName: values.cat,
      authorEmail: session?.user?.email,
      imageUrl: values.imageUrl,
    },
  });
  if (result.success) {
    return {
      success: true,
    };
  }

  if (result.error) {
    return {
      success: true,
      error: result.error.format(),
    };
  }
};
