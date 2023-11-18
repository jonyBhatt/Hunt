import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const UserCard = () => {
  return (
    <div>
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Events
            </h1>
          </CardTitle>
          <CardDescription>
            Nearly your events. Must join the events and participate
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default UserCard;
