import Navbar from "@/components/sections/admindashboard/layout/Navbar";
import RoleLeftSideBar from "@/components/shared/RoleLeftSideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className=" p-5 bg-gray-200">
        <RoleLeftSideBar />
      </div>
      <main className=" flex-1 p-5">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
