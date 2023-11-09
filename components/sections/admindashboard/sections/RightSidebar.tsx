import Image from "next/image";
import React from "react";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const RightSidebar = () => {
  return (
    <div className="sticky top-10  ">
      <div className="relative bg_img py-5 rounded-md mb-5 px-4">
        <div className="absolute bottom-0 top-0 right-0 w-1/2 h-1/2">
          <Image
            src="/svgs/university.svg"
            alt="sbg"
            fill
            className="object-cover opacity-25"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold"> &#x1F525; Motivation</span>
          <h3 className="font-medium font-Rale text-sm">
            Make it work, make it right, make it fast
          </h3>
          <span className="font-Rale text-xs font-bold">Takes 4 minutes</span>
          <p className="font-medium font-Rale text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <Button className="flex gap-2 items-center mt-5">
          <PlayCircle />
          Watch
        </Button>
      </div>

      <div className="relative bg_img py-5 rounded-md mb-5 px-4">
        <div className="absolute bottom-0 top-0 right-0 w-1/2 h-1/2">
          <Image
            src="/svgs/motivation.svg"
            alt="sbg"
            fill
            className="object-cover opacity-25"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold"> &#128640; Productivity</span>
          <h3 className="font-medium font-Rale text-sm">
            Experience is the name everyone gives to their mistakes.
          </h3>
          <span className="font-Rale text-xs font-bold">Takes 4 minutes</span>
          <p className="font-medium font-Rale text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <Button className="flex gap-2 items-center mt-5">
          <PlayCircle />
          Watch
        </Button>
      </div>
    </div>
  );
};

export default RightSidebar;
