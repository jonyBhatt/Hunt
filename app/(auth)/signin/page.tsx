import LoginForm from "@/components/form/login-form";
import Link from "next/link";
import { getServerSession } from "next-auth";

import React from "react";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/onboard");
  }
  return (
    <div className="flex md:justify-between xs:justify-center items-center">
      <div className="w-[500px] flex flex-col shadow-lg">
        <div className="login-bg flex justify-center items-center custom_border">
          <h1 className="text-white font-bold text-3xl">Login</h1>
        </div>
        <div className="border-t-0 border rounded-bl-2xl rounded-br-2xl border-gray-300 p-4">
          <LoginForm />
          <div className="flex items-center gap-1 mt-4">
            <span className="text-sm text-gray-600">New user?</span>
            <Link href="/signup" className="font-light text-sm text-primary">
              Register Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
