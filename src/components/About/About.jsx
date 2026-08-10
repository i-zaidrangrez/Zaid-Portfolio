import React from "react";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

const About = () => {
  return (
    <div className="h-fit w-screen flex flex-col items-center justify-center mt-80 md:mt-40">
      <div className='h-2/10  w-full flex flex-col gap-2 justify-center px-10'>
            <h1 className='text-accent font-heading text-5xl uppercase'>About</h1>
            <p className='text-text font-body italic'>What kind of developer am i?</p>
        </div>
      <div className="w-full flex items-start flex-col justify-start py-10 pb-20 gap-5 md:gap-20 md:flex-row">
        <AboutLeft/>
        <AboutRight/>
      </div>
    </div>
  );
};

export default About;
