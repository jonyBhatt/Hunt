import React from "react";
import user from "@/public/svgs/user.svg";
import Image from "next/image";
const Card = () => {
  return (
    <div className="bg-purple-100 p-4 items-start rounded flex gap-5 w-full">
      <Image src={user} alt="image" width={24} height={24} />
      <div className="flex flex-col gap-4">
        <span className="tracking-wide font-Rale">Total User</span>
        <span className="text-xl font-medium font-Kanit">10,234</span>
        <span className="text-sm font-Rale font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
    </div>
  );
};

export default Card;
