import React from "react";
import { Button } from "../ui/button";

const GetStarted = () => {
  return (
    <section className="bg_image flex justify-center items-center flex-col gap-8 text-white">
      <h1 className="text-3xl font-bold">Get Started Today</h1>
      <div className="flex items-center gap-8">
        <Button className="font-bold " size="lg">
          Get Help Now
        </Button>
        <Button className="font-bold" size="lg" variant="secondary">
          Become a mentor
        </Button>
      </div>
    </section>
  );
};

export default GetStarted;
