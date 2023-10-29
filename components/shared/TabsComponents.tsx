import React from "react";
import LeftTab from "./LeftTab";
import TrendingTopic from "./TrendingTopic";

const TabsComponents = () => {
  return (
    <section className="flex items-center mx-auto  my-3 sm:max-w-sm xs:justify-center sm:justify-center lg:max-w-4xl w-full border-0 border-b border-gray-300/75">
      <div className=" flex items-center justify-start py-4 gap-3">
        <LeftTab />
        <div className="border border-gray-400 h-8 lg:block sm:hidden xs:hidden md:hidden"></div>
        <div className="md:hidden sm:hidden xs:hidden lg:block">
          <TrendingTopic />
        </div>
      </div>
    </section>
  );
};

export default TabsComponents;
