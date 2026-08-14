import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDownToLine, LineSquiggle } from "lucide-react";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = (props) => {
  const timeline = props.timeline
  const [navPanel, setNavPanel] = useState(false);
  useGSAP(()=>{
    gsap.from('.logo',{
      opacity:0,
      duration:2,
    })
    gsap.from('.main-navbar',{
      y:-50,
      opacity : 0,
      duration:0.5,
    })
    gsap.from('.main-navbar li',{
      y:-50,
      opacity : 0,
      stagger:0.1,
    })
  })
  return (
    <div className="h-18 w-full items-center justify-between px-10 py-5 flex ">
      <div className="text-accent font-heading text-4xl relative logo">
        ZAID{" "}
        <span className="absolute top-[-40%] bg-transparent text-green-400">
          &bull;
        </span>
      </div>
      <div className="fixed top-5 left-1/2 -translate-x-1/2 w-fit text-text font-heading z-50 bg-background rounded-4xl">
        <ul className="h-full w-full items-center justify-between gap-5 border border-text py-3 px-6 rounded-4xl hidden md:flex main-navbar">
          <li><a href="#About" className="hover:text-accent hover:scale-2 hover:border-b hover:border-b-accent duration-500 hover:pb-2">About</a></li>
          <li><a href="#Projects" className="hover:text-accent hover:scale-2 hover:border-b hover:border-b-accent duration-500 hover:pb-2">Projects</a></li>
          <li><a href="#Skills" className="hover:text-accent hover:scale-2 hover:border-b hover:border-b-accent duration-500 hover:pb-2" >Skills</a></li>
          <li><a href="#Experience" className="hover:text-accent hover:scale-2 hover:border-b hover:border-b-accent duration-500 hover:pb-2">Experience</a></li>
          <li><a href="#Contact" className="hover:text-accent hover:scale-2 hover:border-b hover:border-b-accent duration-500 hover:pb-2">Contact</a></li>
        </ul>
      </div>
      <div className="flex gap-5">
        <a
          href="/Zaid_Rangrez.pdf"
          download
          className="flex items-center text-sm py-2 px-3 border border-text text-text gap-2 font-heading hover:bg-text hover:text-secondary-background duration-500"
        >
          Resume <ArrowDownToLine size={20} />
        </a>
        <div className="text-text inline md:hidden" onClick={()=>{setNavPanel(true)}}>
          <IoMdMenu size={35} />
        </div>
      </div>
      {navPanel? <div className="h-screen w-full text-teal-50 z-20 top-0 left-0 bg-secondary-background fixed">
        <div className="absolute z-50 bg-black text-accent font-bold p-5 rounded-full top-5 right-5" onClick={()=>{setNavPanel(false)}}><RxCross2 size={25} /></div>
        <ul className="flex flex-col text-4xl gap-5 font-heading text-accent h-full w-full items-center justify-center">
          <li className="border-t border-b w-full py-2 flex items-center justify-center"><a href="#Projects">Projects</a></li>
          <li className="border-t border-b w-full py-2 flex items-center justify-center"><a href="#About">About</a></li>
          <li className="border-t border-b w-full py-2 flex items-center justify-center"><a href="#Skills">Skills</a></li>
          <li className="border-t border-b w-full py-2 flex items-center justify-center"><a href="#Contact">Contact</a></li>
          <li className="border-t border-b w-full py-2 flex items-center justify-center"><a href="#Experience">Experience</a></li>
        </ul>
      </div> : null}
    </div>
  );
};

export default Navbar;
