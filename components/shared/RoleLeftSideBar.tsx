"use client";
import React from "react";
import { usePathname } from "next/navigation";
import LeftSidebar from "../sections/admindashboard/layout/LeftSidebar";
const RoleLeftSideBar = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/user-dashboard" ? (
        <>User Left sidebar</>
      ) : pathname === "/mentor-dashboard" ? (
        <>mentor side bar</>
      ) : (
        <>
          <LeftSidebar />
        </>
      )}
    </>
  );
};

export default RoleLeftSideBar;
