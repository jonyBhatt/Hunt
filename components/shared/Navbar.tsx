import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuItems from "./MenuItems";
import Logout from "./Logout";

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <nav className="py-5 px-4 shadow-md ">
      <div className="flex justify-between items-center">
        {/** medium and sm devices */}
        <div className="lg:hidden md:block">
          <Sheet>
            <SheetTrigger>
              <MenuIcon className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <div className="relative w-8 h-8">
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    fill
                    className="rounded-full"
                  />
                </div>
              </SheetHeader>
              <SheetDescription>
                <MenuItems />
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
        {/** desktop screens */}
        <div className="relative w-8 h-8">
          <Image src="/logo.svg" alt="logo" fill className="rounded-full" />
        </div>
        <div className="border lg:block xs:hidden  md:hidden sm:hidden border-gray-400/75 py-2 px-4 max-w-xs rounded-md w-full">
          Search components
        </div>
        <div className="lg:flex md:hidden sm:hidden xs:hidden gap-4 items-center">
          <Link href="/">Products</Link>
          <Link href="/">Categories</Link>
          <Link href="/">Community</Link>
          <Link href="/">Marketplace</Link>
          <Link href="/">Advertise</Link>
          <Link href="/">About</Link>
        </div>
        <div className="flex items-center gap-3">
          {session && (
            <>
              {" "}
              <Logout />
            </>
          )}
          {!session && (
            <>
              <Button variant="outline">
                <Link href="/signin">Sign In</Link>
              </Button>

              <Button variant="default">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
