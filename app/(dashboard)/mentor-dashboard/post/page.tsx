import MentorPostForm from "@/components/form/mentor-post-form";
import AllPosts from "@/components/sections/mentor-dashboard/AllPosts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Post = () => {
  return (
    <div className="my-8 container mx-auto ">
      <div className="flex justify-between items-center">
        <h2 className=" text-3xl font-bold font-Rale">Your Posts</h2>
        <Link href="/mentor-dashboard/post/create-post">
          <Button size="lg">Create</Button>
        </Link>
      </div>
      <div className="my-8">
        <AllPosts />
      </div>
    </div>
  );
};

export default Post;
