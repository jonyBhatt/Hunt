"use server";

import prisma from "@/lib/db/prisma";
import { CreateUser } from "@/types";
import bcrypt from "bcrypt";

export async function createUser({
  name,
  username,
  email,
  password,
}: CreateUser) {
  // console.log(name, username, email, password);
  const hashPass = await bcrypt.hash(password, 10);
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        username,
        password: hashPass,
      },
    });

    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
}
