"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ count }: any) => {
  const search = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const params = new URLSearchParams(search);

  const ITEM_PER_PAGE = 2;

  const page = search.get("page") || "1";

  const hasPrev = ITEM_PER_PAGE * parseInt(page) - 1 > 0;
  const hasNext = ITEM_PER_PAGE * parseInt(page) - 1 + ITEM_PER_PAGE < count;

  console.log(hasPrev, hasNext);

  const handleChange = (type: string) => {
    type === "prev"
      ? params.set("page", `${parseInt(page) - 1}`)
      : params.set("page", `${parseInt(page) - 1}`);
    replace(`${pathName}?${params}`);
  };

  return (
    <div className="flex justify-between items-center mt-5 p-3 ">
      <Button
        size="lg"
        variant="secondary"
        disabled={!hasPrev}
        onClick={() => handleChange("prev")}
      >
        Previous
      </Button>
      <Button size="lg" disabled={!hasNext}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
