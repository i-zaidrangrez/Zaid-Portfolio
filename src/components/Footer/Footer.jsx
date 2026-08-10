import { Mail } from "lucide-react";
import React from "react";
import { BsGithub, BsMailbox } from "react-icons/bs";
import { FaBiohazard } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="h-20 w-full bg-secondary-background flex items-center justify-between text-secondary-text px-20">
      <div> &copy; 2026 Zaid &middot; All Rights Reserved</div>
      <div className="flex items-center gap-2 text-sm">
        <FaBiohazard size={20} /> BUILT WITH PASSION
      </div>
      <div className="flex items-center gap-2">
        <a href="https://github.com/i-zaidrangrez">
          <BsGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/zaidrangrez">
          <LiaLinkedin size={25} />
        </a>
        <a href="mailto:zaidrangrez.me@gmail.com">
          <MdMail size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
