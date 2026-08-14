import { Radio } from "lucide-react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Card = (Props) => {
  return (
    <div className="shadow-md drop-shadow-secondary-background overflow-hidden shadow-white rounded h-[90vh] w-full lg:w-495/1000 pb-5 hover:scale-103 duration-300">
      <div className="h-1/2 w-full">
        <img className="h-full w-full" src={Props.elem.image} alt="" />
      </div>
      <div className="text-text font-heading flex items-center px-5 text-2xl w-full h-1/10 ">
        {Props.elem.name}
      </div>
      <div className="text-text font-body h-25/100  px-5">
        {Props.elem.description}
      </div>
      <div className="px-5 flex gap-2">
        <button className="border border-text rounded-sm px-3 py-1 text-background bg-secondary-text font-heading">
          {Props.elem.techStack}
        </button>
        <button className={`border border-text rounded-sm ${Props.elem.color} font-heading px-3 py-1 text-text relative`}>
          {Props.elem.status}
          <div className={`h-[25%] w-[10%] absolute top-[20%] right-[5%] rounded-full`}></div>
        </button>
      </div>
      <div className="h-1/10 w-full flex py-2 px-5 justify-end gap-10 mb-5">
        <a href={Props.elem.github} className="border border-accent px-3 rounded-2xl text-secondary-background bg-text font-heading flex items-center justify-center gap-3">
          GITHUB <FaGithub />
        </a>
        <a href={Props.elem.live} className="border border-accent px-3 rounded-2xl text-background bg-text font-heading flex items-center justify-center gap-3">
          GO LIVE <Radio />
        </a>
      </div>
    </div>
  );
};

export default Card;
