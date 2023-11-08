import React from "react";
import Card from "../card/Card";

const CardSections = () => {
  return (
    <div className="flex justify-between  items-center gap-6">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardSections;
