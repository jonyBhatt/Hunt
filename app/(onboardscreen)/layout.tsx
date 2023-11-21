import Logout from "@/components/shared/Logout";
import Image from "next/image";

export default async function OnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className=" container mx-auto ">
        <div className=" py-3 flex justify-between items-center border-b">
          <div className="relative w-8 h-8">
            <Image src="/logo.svg" alt="logo" fill className="rounded-full" />
          </div>
          <Logout className="font-bold" />
        </div>
      </nav>

      <main className=" container mx-auto py-5">{children}</main>
    </>
  );
}
