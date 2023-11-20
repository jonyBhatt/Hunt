"use client";
import { usePathname } from "next/navigation";
import { Search, BellRing, GripVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/utils/mode-toggle";
const Navbar = () => {
  const pathname = usePathname();
  const path = pathname.split("/").pop();
  return (
    <div className="flex justify-between items-center p-5 bg-gray-100 rounded-lg">
      <span className="capitalize">{path}</span>
      {/** Search Menu */}
      <div className="flex justify-between gap-4  rounded-lg items-center">
        <div className="flex items-center gap-1 border border-gray-200 px-4 rounded-full">
          <Search width={24} height={24} className="text-gray-400" />
          <Input
            placeholder="search..."
            type="text"
            className="border-none bg-transparent"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="hover:bg-slate-500 rounded-full p-2 hover:text-white cursor-pointer">
            <BellRing className="cursor-pointer  " />
          </div>
          <div className="hover:bg-slate-500 rounded-full p-2 hover:text-white cursor-pointer">
            <GripVertical className="cursor-pointer  " />
          </div>

          <div className="">
            {/* <ModeToggle /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
