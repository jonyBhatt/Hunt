"use server";

import { CreateUser } from "@/types";

export async function createUser({
  name,
  username,
  email,
  password,
}: CreateUser) {
  console.log(name, username, email, password);
}
