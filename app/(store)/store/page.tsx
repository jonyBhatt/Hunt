import React from "react";
import LatestProducts from "../_components/latest-products";

const StorePage = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="font-Rale text-4xl font-medium">
          Welcome to the Forem Store
        </h1>
        <span className="text-md ml-2 tracking-wide font-light font-Rale">
          Discover Your Code-Inspired Essentials: Unleash the Power of Your
          Passion with Coding-Branded Merchandise, from Mugs to Shirts and More
        </span>
      </div>
      <div className="my-8">
        <LatestProducts />
      </div>
    </div>
  );
};

export default StorePage;
