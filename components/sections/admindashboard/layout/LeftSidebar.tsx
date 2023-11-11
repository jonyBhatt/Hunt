import Logout from "@/components/shared/Logout";
import { Button } from "@/components/ui/button";
import { adminSideBar } from "@/utils/constants";
import MenuLink from "@/utils/sidebarLinks";
import Image from "next/image";
import React from "react";

const LeftSidebar = () => {
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-4">
        <Image
          src="/normal.jpg"
          alt="normal"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <span className="font-Kanit font-semibold">John Doe</span>
        </div>
      </div>
      <ul className="list-none">
        {adminSideBar.map((ctx) => (
          <li key={ctx.title} className="">
            <span className="font-Rale font-bold text-sm my-4">
              {ctx.title}
            </span>
            {ctx.list.map((item) => (
              <MenuLink
                icon={item.icon}
                title={item.title}
                url={item.url}
                key={item.title}
              />
            ))}
          </li>
        ))}
      </ul>
      <Logout />
    </div>
  );
};

export default LeftSidebar;
