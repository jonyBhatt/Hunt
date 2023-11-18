import React, { useState } from "react";
import { User, Wallet2, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { onBoardUser } from "@/lib/actions/onboard/onboardUsers";
import { redirect } from "next/navigation";
const OnBoard = async () => {
  const user = await onBoardUser();
  if (!user) {
    return null
  }
  if (user.role === "MENTOR") {
    redirect("/mentor-dashboard");
  } else {
    return (
      <div className="flex justify-between flex-col md:flex-row  items-center md:px-16 xs:px-0 ">
        <div className="flex flex-col justify-start items-center">
          <h2 className="font-Kanit text-5xl font-medium">
            Ready for your <br /> next big opportunity?
          </h2>
          <div className="py-4 mt-20">
            <ul className="">
              <li className="flex gap-4 pb-5 items-center border-b mb-8 font-Rale">
                <User className="w-8 h-8 text-gray-600" />
                <span className="text-gray-400 font-medium">
                  Answer a few questions and start building your profile
                </span>
              </li>

              <li className="flex gap-4 pb-5 items-center border-b mb-8 font-Rale">
                <Wallet2 className="w-8 h-8 text-gray-600" />
                <span className="text-gray-400 font-medium">
                  Ask for help and make mentality to help others to grow
                </span>
              </li>

              <li className="flex gap-4 pb-5 items-center border-b mb-8 font-Rale">
                <Receipt className="w-8 h-8 text-gray-600" />
                <span className="text-gray-400 font-medium">
                  Get paid safely and know we&apos;re there to help
                </span>
              </li>
            </ul>
            <Button size="lg" className="rounded-full">
              <Link href="/onboard/onboarding">Onboard</Link>
            </Button>
          </div>
        </div>
        <div className="relative ">
          <Image src="/onboard.jpg" alt="onboard" width={600} height={500} />
        </div>
      </div>
    );
  }
};

export default OnBoard;
