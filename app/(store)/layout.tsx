import Logout from "@/components/shared/Logout";
import Image from "next/image";
import Nav from "./_components/Nav";
import SearchBar from "./_components/search-bar";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default async function OnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className=" container mx-auto font-Rale ">
        <div className=" py-3 flex justify-between items-center border-b">
          <div className="flex items-center gap-6">
            <div className="relative w-8 h-8">
              <Image src="/logo.svg" alt="logo" fill className="rounded-full" />
            </div>
            <div>
              <Nav />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <SearchBar />
            <Link href="/store/cart">
              <HiOutlineShoppingCart size={25} />
            </Link>
            <Logout className="font-bold" />
          </div>
        </div>
      </nav>

      <main className=" container mx-auto py-5 ">{children}</main>
    </>
  );
}
