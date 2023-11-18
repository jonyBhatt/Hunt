import React from "react";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MentorAllPost from "@/components/card/mentor-all-posts";
import { fetchPosts } from "@/server/mentor/FecthPosts";
import MentorPostForm from "@/components/form/mentor-post-form";

const PostPage =   () => {
  // const { data } = await fetchPosts();
  // console.log(data);

  return (
    <div className="my-8 container mx-auto">
      <div className="flex items-center justify-between">
        <h2 className=" md:text-3xl xs:text-xl font-bold font-Rale">
          Your Posts
        </h2>
        {/* <Button size="lg" className="flex items-center gap-2">
          <PlusCircle />
          <Link href="/mentor-dashboard/post/create-post">Create Post</Link>
        </Button> */}
      </div>
      <div className="my-8 gap-3 flex md:justify-between xs:justify-center items-center flex-wrap">
        {/* {data?.map((item) => (
          <>
            <MentorAllPost
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              authorName={item.author.name}
              cat={item.categoryName}
              date={item.created_At}
              imageUrl={item.imageUrl}
            />
          </>
        ))} */}
        <MentorPostForm/>
      </div>
    </div>
  );
};

export default PostPage;
