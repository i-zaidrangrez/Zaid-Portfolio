import { ArrowRight, Mail } from "lucide-react";
import React from "react";

const HeroLeft = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center w-1/2 px-6 py-5 gap-10">
      <div className="flex-col items-start justify-center gap-3 w-full">
        <h1 className="text-text text-5xl font-heading">
          It's <span>Zaid Rangrez</span>
        </h1>
        <h3 className="text-accent text-xl font-light border-text p-3">
          MERN Stack Developer
        </h3>
      </div>
      <div className="flex-col justify-center items-start w-full py-4">
        <p className="text-secondary-text font-body text-xl">
          I turn ideas into fast, scalable web applications <br /> with clean
          architecture and thoughtful user experiences.
        </p>
      </div>
      <div className="flex w-full gap-5">
        <button className="font-heading text-text border border-text rounded-2xl px-3 py-2 flex gap-3">
          View Projects <ArrowRight />
        </button>
        <button className="font-heading text-text border border-text rounded-2xl px-3 py-2 flex gap-3">
          Contact Me <Mail />
        </button>
      </div>
    </div>
  );
};

export default HeroLeft;
