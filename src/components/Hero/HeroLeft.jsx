import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Mail } from "lucide-react";
import React from "react";


const HeroLeft = (props) => {
  useGSAP(()=>{
    props.timeline.from('.name span',{
      y:5,
      opacity:0,
      stagger:0.1,
      duration:0.2,
    })
  })
  return (
    <div className="h-full flex flex-col items-center justify-center w-full sm:w-fit md:w-2/3 lg:w-4/10 px-6 py-5 gap-10 sm:mt-5">
      <div className="flex-col items-start justify-center gap-3 w-full">
        <h1 className="text-text text-5xl font-heading">
          It's{" "}
          <span className="text-secondary-text name">
            <span>Z</span>
            <span>A</span>
            <span>I</span>
            <span>D</span>
            <span> </span>
            <span>R</span>
            <span>A</span>
            <span>N</span>
            <span>G</span>
            <span>R</span>
            <span>E</span>
            <span>Z</span>
          </span>
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
      <div className="flex w-full gap-5 flex-col sm:flex-row">
        <a
          href="#Projects"
          className="w-fit font-heading text-text border border-text rounded-2xl px-3 py-2 flex gap-3 hover:bg-text hover:text-secondary-background duration-500"
        >
          View Projects <ArrowRight />
        </a>
        <a
          href="#Contact"
          className="w-fit font-heading text-text border border-text rounded-2xl px-3 py-2 flex gap-3 hover:bg-text hover:text-secondary-background duration-500"
        >
          Contact Me <Mail />
        </a>
      </div>
    </div>
  );
};

export default HeroLeft;
