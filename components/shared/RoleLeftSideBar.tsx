"use client";
import React from "react";
import { usePathname } from "next/navigation";
import LeftSidebar from "../sections/admindashboard/layout/LeftSidebar";
import MentorLeftSidebar from "../sections/mentor-dashboard/layout/m-LeftSideBar";
import UserLeftSidebar from '../sections/user-dashboard/layout/user-Leftbar'
const RoleLeftSideBar = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith("/user-dashboard") ? (
        <><UserLeftSidebar /></>
      ) : pathname.startsWith("/mentor-dashboard") ? (
        <>
          <MentorLeftSidebar />
        </>
      ) : pathname.startsWith("/admin-dashboard") ? (
        <>
          <LeftSidebar />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default RoleLeftSideBar;
