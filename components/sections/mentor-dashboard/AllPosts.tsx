import MentorAllPost from "@/components/card/GetAllPost";
import prisma from "@/lib/db/prisma";
const AllPosts = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div className="flex xs:justify-center items-center flex-wrap md:flex-row xs:flex-col gap-4">
      {posts.map((post) => (
        <MentorAllPost
          key={post.id}
          title={post.title}
          description={post.description}
          authorName={post.author.name}
          cat={post.categoryName}
          date={post.created_At}
          imageUrl={post.imageUrl}
          id={post.id}
        />
      ))}
    </div>
  );
};

export default AllPosts;
