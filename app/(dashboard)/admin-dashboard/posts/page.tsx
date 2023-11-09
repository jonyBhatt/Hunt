import Pagination from "@/components/sections/admindashboard/sections/Pagination";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Post = () => {
  return (
    <div className="bg-slate-200 p-5 rounded-md mt-5 font-Rale">
      <div className="flex justify-between items-center">Search</div>
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
          <tr>
            <td>johndoe@gmail.com</td>
            <td className="text-sm max-w-[300px] truncate">
              Next.js 14 Admin Dashboard Tutorial
            </td>
            <td className="text-sm truncate max-w-[300px]  w-6 ">
              Lama, if you create a course on Next.js 14 + Headless CMS
              (preferably the simplest one, without deployment, i.e. not
              Strapi), let it be a one-page Landing page. For example, this
              could be Contenful simple and effective, or another but equally
              simple (although all of them are not relatively simple), but still
              it would be a very interesting lesson and there are very few of
              them on the Internet especially for Next.js 14. This is just an
              idea for future project, if you have the time or inclination to do
              it, Id be happy to take a look!
            </td>
            <td>User</td>
            <td className="flex items-center gap-4">
              <Link href="/admin-dashboard/posts/add">
                <Button>Add Post</Button>
              </Link>
              <Link href="#">
                <Button>Approve</Button>
              </Link>
              <Button variant="destructive">Delete</Button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Post;
