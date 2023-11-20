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
import { PostProps } from "@/types";
import Time from "@/utils/dateTime";
import Link from "next/link";
const MentorAllPost = ({
  title,
  description,
  authorName,
  cat,
  date,
  imageUrl,
  id,
}: PostProps) => {
  return (
    <>
      <Card className="w-[300px]">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
        <CardHeader>
          <CardTitle className="truncate">{title}</CardTitle>
          <CardDescription>
            <div className="flex my-2 items-center gap-4 font-Rale">
              <span>
                Author: <b className="uppercase">{authorName}</b>
              </span>
              <span className="text-sm">Time: {Time(date)}</span>
            </div>
            <div className="w-20 p-1 uppercase cursor-pointer mt-4 text-center bg-accent text-white font-Kanit rounded-full">
              {cat}
            </div>
          </CardDescription>
        </CardHeader>

        <CardContent className=" line-clamp-3 w-72  font-Rale text-md ">
          {description}
        </CardContent>
        <CardFooter className="mt-6">
          <Button size="lg">
            <Link href={`/mentor-dashboard/post/${id}`}>Read More</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default MentorAllPost;
