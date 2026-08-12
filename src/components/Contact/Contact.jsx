import { Locate } from "lucide-react";
import React, { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const HandleSubmit = (e)=>{
    e.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <div id="Contact" className="h-fit scroll-mt-20 w-full px-2 mt-10 md:px-10">
      <div className="h-2/10  w-full flex flex-col gap-2 justify-center">
        <h1 className="text-accent font-heading text-5xl uppercase">
          CONTACT
        </h1>
        <p className="text-text font-body italic lowercase">
          Let's Build something together
        </p>
      </div>
      <div className="h-full w-full flex items-center justify-between px-2 md:px-10 flex-wrap">
        <div className="h-full w-fit p-2 py-10 md:p-10 text-text font-body flex flex-col gap-5">
            <div className="flex gap-5 text-xl items-center"><MdEmail/><a className="text-secondary-text font-heading cursor-pointer" href="https://mail.google.com/mail/?view=cm&fs=1&to=zaidrangrez.me@gmail.com">Mail</a></div>
            <div className="flex gap-5 text-xl items-center"><GrGithub/><a className="text-secondary-text font-heading cursor-pointer" href="https://github.com/i-zaidrangrez">GitHub Profile</a></div>
            <div className="flex gap-5 text-xl items-center"><FaMapLocationDot/><a className="text-secondary-text font-heading cursor-pointer" href="https://share.google/Aenwt9uIwR5k3ZMoX">Rajasthan , India</a></div>
            <div className="flex gap-5 text-xl items-center"><LiaLinkedin/><a className="text-secondary-text font-heading cursor-pointer" href="https://linkedin.com/in/zaidrangrez">LinkedIn Profile</a></div>
        </div>
        <div className="h-full w-full md:w-1/2 flex">
            <div className="h-[50vh] w-full mb-5">
              <form className="h-full w-full flex flex-col gap-5" action="https://formspree.io/f/xvkproaa" method="POST" onSubmit={(e)=>{HandleSubmit(e)}}>
                <input className="border bg-secondary-text placeholder:text-black w-full border-text placeholder:font-heading flex items-start justify-start rounded-3xl px-10 py-3" type="text" placeholder="Full Name" name="name" onChange={(e)=>{setName(e.target.value)}} value={name} required />
                <input className="border bg-secondary-text placeholder:text-black w-full border-text placeholder:font-heading flex items-start justify-start rounded-3xl px-10 py-3" type="email" placeholder="Email" name="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required />
                <input className="border bg-secondary-text placeholder:text-black w-full border-text placeholder:font-heading flex items-start justify-start rounded-3xl px-10 py-13" type="textarea" placeholder="message" name="message" onChange={(e)=>{setMessage(e.target.value)}} value={message} required />
                <button className="w-fit ml-5 flex font-heading items-center justify-center bg-accent text-text py-2 px-2 gap-2 rounded shadow-2xl shadow-black" type="submit">Send Message <RiSendPlaneFill /></button>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
