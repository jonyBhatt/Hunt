import { Button } from "@/components/ui/button";
import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-5 p-3 ">
      <Button size="lg" variant="secondary" disabled>
        Previous
      </Button>
      <Button size="lg">Next</Button>
    </div>
  );
};

export default Pagination;
