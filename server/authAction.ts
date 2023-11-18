"use server";

import prisma from "@/lib/db/prisma";
import { CreateUser, LoginUser } from "@/types";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

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
    return {
      success:true
    }
  } catch (error) {
    console.log(error);
  }
}

export async function Login({ email, password }: LoginUser) {
  try {
    //check is user exist
    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) return {message:"user does not exists"}
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return {message:"Invalid password!"}

    const tokenData = { id: user.id }
    
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    

  } catch (error) {
    // throw new Error(`Error in login ${error}`);
    return {
      error:error
    }
  }
}
