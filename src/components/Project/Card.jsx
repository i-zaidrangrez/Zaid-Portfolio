import { Radio } from "lucide-react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Card = () => {
  return (
    <div className="border border-text rounded h-[80vh] w-495/1000">
      <div className="h-1/2 w-full"></div>
      <div className="text-text font-heading flex items-center px-5 text-2xl w-full h-1/10 ">
        HEADING
      </div>
      <div className="text-text font-body h-25/100  px-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, optio
        nesciunt dolor neque voluptates ipsum officiis illum eaque voluptas
        tenetur.
      </div>
      <div className=" px-5">
        <button className="border border-text rounded-sm px-3 text-text">
          FULL STACK
        </button>
      </div>
      <div className="h-1/10 w-full flex py-2 px-5 justify-end gap-10 ">
        <button className="border border-accent px-3 rounded-2xl text-text flex items-center justify-center gap-3">
          GITHUB <FaGithub />
        </button>
        <button className="border border-accent px-3 rounded-2xl text-text flex items-center justify-center gap-3">
          GO LIVE <Radio />
        </button>
      </div>
    </div>
  );
};

export default Card;
