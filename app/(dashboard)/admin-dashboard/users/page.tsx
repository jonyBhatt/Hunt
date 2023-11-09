import Pagination from "@/components/sections/admindashboard/sections/Pagination";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const User = () => {
  return (
    <div className="bg-slate-200 p-5 rounded-md mt-5 font-Rale">
      <div className="flex justify-between items-center">Search</div>
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-2">
                <Image
                  src="/dashboard/user.png"
                  alt="user"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                <span>John Doe</span>
              </div>
            </td>
            <td>johndoe@gmail.com</td>
            <td>13.2.2023</td>
            <td>Admin</td>
            <td>active</td>
            <td className="flex items-center gap-4">
              <Link href="#">
                <Button>View</Button>
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

export default User;
