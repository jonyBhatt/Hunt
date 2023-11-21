import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { EventsProps } from "@/types";
const MentorEvent = ({
  title,
  content,
  start,
  end,
  date,
  location
}:EventsProps) => {
  return (
    <Card className="w-[400px] shadow-lg">
      <Image
        src="/post/event1.jpg"
        alt="event"
        width={1000}
        height={800}
        className="object-cover rounded-tl-md rounded-tr-md"
      />
      <CardHeader className="mb-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="grid gap-x-2 gap-y-4 grid-cols-3 place-content-center items-center">
          <span>
            Organizer: <b>Nike</b>
          </span>
          <span>Location: {location}</span>
          <span>Date: {date}</span>
          <span>Start: {start}</span>
          <span>End: {end}</span>
        </CardDescription>
        <CardContent className="line-clamp-4 my-4">{content}</CardContent>
        <CardFooter className="mb-4">
          <Button>Register Now</Button>
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

export default MentorEvent;
