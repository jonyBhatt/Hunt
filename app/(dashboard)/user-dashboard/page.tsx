import UserCard from "@/components/sections/user-dashboard/component/card/card";
import React from "react";

const Dashboard = () => {
  return (
    <div className="my-8">
      <div className="flex items-center gap-6">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default Dashboard;
