
import { ChevronLeftCircle } from "lucide-react";
import Link from "next/link";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto bg-gray-200 pt-4">
      <Link href="/" >
        <ChevronLeftCircle className="" size={24} color="#770d72" />
      </Link>
      <div className="min-h-screen flex justify-center items-center">
        {children}
      </div>
    </section>
  );
}
