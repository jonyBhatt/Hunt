import Navbar from "@/components/sections/admindashboard/layout/Navbar";
import RightSidebar from "@/components/sections/admindashboard/sections/RightSidebar";
import RoleLeftSideBar from "@/components/shared/RoleLeftSideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className=" p-5 bg-slate-100">
        <RoleLeftSideBar />
      </div>
      <main className=" flex-1 p-5">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
