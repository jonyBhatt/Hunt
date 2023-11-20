import React from "react";
import Card from "../card/Card";
import { User2 } from 'lucide-react'
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { MdAddHomeWork } from "react-icons/md";
const CardSections = () => {
  const data = [
    {
      id: "1",
      title: "Total User",
      description: "Your all users are here",
      icon: <User2 size={30} />,
      number: "100",
    },
    {
      id: "2",
      title: "Total Post",
      description: "Your all posts are here",
      icon: <BsFillPostcardHeartFill size={30} />,
      number: "54",
    },
    {
      id: "3",
      title: "Total Job Post",
      description: "Total job post by mentors",
      icon: <MdAddHomeWork size={30} />,
      number: "21",
    },
  ];
  return (
    <div className="flex justify-between  items-center gap-6">
      {
        data.map((ctx) => (
          <Card key={ctx.id} title={ctx.title} description={ctx.description} icon={ctx.icon} number={ctx.number} id={ctx.id} />
        ))
      }
    </div>
  );
};

export default CardSections;
