import Pagination from "@/components/sections/admindashboard/sections/Pagination";
import Search from "@/components/shared/SearchBar";
import { Button } from "@/components/ui/button";
import { FetchUser } from "@/lib/actions/adminActions/fetchUsers";
import Image from "next/image";
import Link from "next/link";

const User = async ({ searchParams }: any) => {
  const q = searchParams.q || ""
  const users = await FetchUser(q);
  // console.log(users);

  return (
    <div className="bg-slate-200 p-5 rounded-md mt-5 font-Rale">
      <div className="flex justify-between items-center">
        <Search placeholder="Search with name..." />
      </div>
      {users &&
        users.map((user) => (
          <table className="w-full" key={user.id}>
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
                    <span className="capitalize">{user.name}</span>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>13.2.2023</td>
                <td className="lowercase">{user.role}</td>
                <td>active</td>
                <td className="flex items-center gap-4">
                  <Link href={`/admin-dashboard/users/${user.id}`}>
                    <Button>View</Button>
                  </Link>
                  <Button variant="destructive">Delete</Button>
                </td>
              </tr>
            </tbody>
          </table>
        ))}

      <Pagination />
    </div>
  );
};

export default User;
