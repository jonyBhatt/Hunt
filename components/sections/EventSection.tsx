import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { rale } from "@/lib/fonts/font";
import Image from "next/image";

const EventSection = () => {
  return (
    <section
      className={cn( "py-7 bg-[#FAF1FF] container mx-auto font-Rale")}
    >
      <div className="flex items-center justify-around flex-col md:flex-row md:text-start text-center">
        <div className={cn("flex flex-col")}>
          <h2 className="font-bold text-2xl font-Kanit">HUNT</h2>
          <span className="tracking-widest text-sm font-bold font-Rale">events</span>
          <div className="flex flex-col gap-6 mt-7">
            <h1 className="text-4xl font-bold leading-relaxed">
              Technical and career talks <br />{" "}
              <span className="text-primary">for developers</span>{" "}
            </h1>
            <span className={cn("text-[#666666] text-[20px]")}>
              Attend and give developer talks with topics like <br /> new tools
              and frameworks, technical concepts, <br /> live coding, career
              progression, and more.
            </span>
            <Link href="/" className="text-primary text-[20px]">
              See upcoming events
            </Link>
          </div>
        </div>
        <div className="relative w-[400px] h-[400px]">
          <Image src="/hero.png" alt="hero" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};
//"py-7 bg-[#FAF1FF] container mx-auto"
export default EventSection;
