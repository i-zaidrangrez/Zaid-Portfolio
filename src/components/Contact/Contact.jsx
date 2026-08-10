import { Locate } from "lucide-react";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="h-[80vh] w-full px-10">
      <div className="h-2/10  w-full flex flex-col gap-2 justify-center">
        <h1 className="text-accent font-heading text-5xl uppercase">
          CONTACT
        </h1>
        <p className="text-text font-body italic lowercase">
          Let's Build something together
        </p>
      </div>
      <div className="h-7/10 w-full flex items-center justify-center">
        <div className="h-full w-1/2 p-10 text-text font-body flex flex-col gap-5">
            <div className="flex gap-5 text-xl items-center"><MdEmail/><a className="text-accent font-heading cursor-pointer" href="mailto:zaidrangrez.me@gmail.com">zaidrangrez.me@email.com</a></div>
            <div className="flex gap-5 text-xl items-center"><GrGithub/><a className="text-accent font-heading cursor-pointer" href="https://github.com/i-zaidrangrez">GitHub Profile</a></div>
            <div className="flex gap-5 text-xl items-center"><FaMapLocationDot/><a className="text-accent font-heading cursor-pointer" href="https://share.google/Aenwt9uIwR5k3ZMoX">Rajasthan , India</a></div>
            <div className="flex gap-5 text-xl items-center"><LiaLinkedin/><a className="text-accent font-heading cursor-pointer" href="https://linkedin.com/in/zaidrangrez">LinkedIn Profile</a></div>
        </div>
        <div className="h-full w-1/2 flex items-center">
         <img src="/Map.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
