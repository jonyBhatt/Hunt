import Events from "@/components/sections/mentor-dashboard/Events";
import { Button } from "@/components/ui/button";
import React from "react";

const EventPage = () => {
  return (
    <div className="my-8 container mx-auto">
      <div className="flex border-b-2 border-b-primary pb-2 justify-between items-center">
        <h1>Events</h1>
        <Button>Add Event</Button>
      </div>
      <div className="my-11 flex flex-col gap-6">
        <h2>Your Events</h2>
        <Events />
      </div>
    </div>
  );
};

export default EventPage;
