import React from "react";
import FindCard from "../card/FindCard";

const FindInHunt = () => {
  return (
    <section className="py-7 flex justify-center items-center flex-col">
      <h2 className="text-[48px] font-bold">What you&lsquo;ll find on Hunt </h2>
      <div className="flex md:flex-row flex-col gap-8">
        <FindCard
          title="A variety of technologies"
          content="From JavaScript and React to Swift and Go, our developers cover it all."
          url="/find.png"
        />
        <FindCard
          title="Code help from experts"
          content="Our developers go through a strict application and vetting process, leaving only the best."
          url="/reliable.png"
        />
        <FindCard
          title="Effortless setup"
          content="Take advantage of our easy set up and billing process to connect with a developer right away."
          url="/effortless.png"
        />
      </div>
    </section>
  );
};

export default FindInHunt;
