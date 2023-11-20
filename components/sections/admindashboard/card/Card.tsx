import React, { ReactNode } from "react";

type CardProps = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  number: string;
};
const Card = ({ title, description, icon, number }: CardProps) => {
  return (
    <div className="bg-purple-100 p-4 items-start rounded flex gap-5 w-full">
      <div className=" rounded-full  bg-transparent">{icon}</div>
      <div className="flex flex-col gap-4">
        <span className="tracking-wide font-Rale">{title}</span>
        <span className="text-xl font-medium font-Kanit">{number}</span>
        <span className="text-sm font-Rale font-normal">{description}</span>
      </div>
    </div>
  );
};

export default Card;
