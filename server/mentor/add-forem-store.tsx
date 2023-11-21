"use server";

import prisma from "@/lib/db/prisma";
import { z } from "zod";
import { storeSchema } from "@/components/form/add-forem-store";
import { revalidatePath } from "next/cache";

type StoreSchema = z.infer<typeof storeSchema>;

export async function addToStore(values: StoreSchema) {
  try {
    await prisma.store.create({
      data: {
        title: values.title,
        imageUrl: values.imageUrl,
        cost: values.cost,
      },
    });
    revalidatePath("/mentor-dashboard/forem-store");
    return {
      success: true,
    };
  } catch (error) {
    return {
      error,
    };
  }
}
