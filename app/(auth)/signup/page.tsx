import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

import RegisterFrom from "@/components/form/register-form";

const Register = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex md:justify-between xs:justify-center shadow-lg shadow-gray-400 bg-white items-center mb-4 rounded-2xl">
      <div className="w-[500px] flex flex-col ">
        <div className="register-bg flex justify-center items-center custom_border">
          <h1 className="text-white font-bold text-3xl">Register</h1>
        </div>
        <div className="border-t-0 border rounded-bl-2xl rounded-br-2xl border-gray-300 p-4">
          <RegisterFrom />
          <div className="flex items-center gap-1 mt-4">
            <span className="text-sm text-gray-600">
              Already have a account?
            </span>
            <Link href="/signup" className="font-light text-sm text-primary">
              Register Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
