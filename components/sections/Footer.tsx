import { sans } from "@/lib/fonts/font";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className={cn(sans.className, "py-5 bg-primary container mx-auto")}>
      <div className="flex justify-between items-center">
        <span className="text-sm text-white">Copyright 2023 Hunt</span>
        <div className="flex gap-6 text-white items-center ">
          <span className="text-sm">Cookie Policy</span>
          <span className="text-sm">Privacy Policy</span>
          <span className="text-sm">Terms of Service</span>
          <span className="text-sm">Careers</span>
          <span className="text-sm">Help Center</span>
          <Link href="/facebook" className="bg-secondary/40 rounded-full p-2">
            <Facebook  />
          </Link>
          <Link href="/facebook" className="bg-secondary/40 rounded-full p-2">
            <Twitter />
          </Link>
          <Link href="/facebook" className="bg-secondary/40 rounded-full p-2">
            <Linkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
