import { featuredPost } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import { ArrowBigUp } from "lucide-react";

const MainSection = () => {
  const mostReviewedMentor = featuredPost.reduce((prev, current) => {
    return prev.reviews.length > current.reviews.length ? prev : current;
  });
  return (
    <section className="mx-auto max-w-4xl">
      <div className="flex justify-between w-full">
        <div className=" w-full border-r border-r-gray-500 pr-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold md:text-3xl sm:text-md">Fresh Updates</h1>
            <p className="text-sm font-light">Featured</p>
          </div>
          {featuredPost.map((item) => (
            <div
              className="flex items-center justify-between gap-4 my-4"
              key={item.name}
            >
              <div className="flex items-center gap-4">
                <div className="relative sm:h-16 sm:w-16 md:h-20 md:w-28 mt-6">
                  <Image src={item.image} alt="image" fill />
                </div>
                <div>
                  <p>{item.name}</p>
                  <span className="text-sm font-light truncate">
                    {item.content}
                  </span>
                  <ul className="mt-1 flex gap-2.5 items-center">
                    {item.tags.map((item) => (
                      <li
                        className="text-xs font-light text-gray-700"
                        key={item.title}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-4 rounded-sm border border-gray-300 flex flex-col justify-center items-center cursor-pointer">
                <ArrowBigUp className="w-8 h-8" />
                {item.vote}
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default MainSection;
