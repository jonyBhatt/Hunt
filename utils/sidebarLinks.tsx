"use client";

import { Button } from "@/components/ui/button";
import { SideBarProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ icon, title, url }: SideBarProps) => {
  const pathName = usePathname();
  return (
    <>
      <Link
        href={url}
        className={`${"flex items-center gap-3 link rounded-lg"} ${
          pathName === url && "active"
        }`}
      >
        {icon}
        <span className="font-medium font-Rale">{title}</span>
      </Link>
    </>
  );
};

export default MenuLink;
