import Search from "@/components/shared/SearchBar";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db/prisma";
import Link from "next/link";

const Post = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  // console.log(posts);

  return (
    <div className="bg-slate-200 p-5 rounded-md mt-5 font-Rale">
      <div className="md:flex xs:hidden justify-between items-center">
        <Search placeholder="search...." />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td>Email</td>
            <td>Title</td>
            <td>Description</td>
            <td>Role</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.authorEmail}</td>
              <td className="text-sm max-w-[300px] truncate">{post.title}</td>
              <td className="text-sm truncate max-w-[300px]  w-6 ">
                {post.description}
              </td>
              <td>{post.author.role}</td>
              <td className="flex items-center gap-4">
                <Link href="#">
                  <Button>Approve</Button>
                </Link>
                <Button variant="destructive">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination /> */}
    </div>
  );
};

export default Post;
