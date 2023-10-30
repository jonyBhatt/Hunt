import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db/prisma";
import bcrypt from "bcrypt";
export const Options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user) return null;

        const matchPass = await bcrypt.compare(
          credentials?.password!,
          user?.password!
        );

        if (matchPass) {
          return {
            id: user?.id,
            email: user?.email,
          };
        } else {
          return null;
        }
      },
    }),
  ],
};
