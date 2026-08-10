import React from "react";

const ExperienceCard = (props) => {
  return (
    <div className="h-full w-full flex border-b border-text">
        {/* date */}
      <div className="h-full w-1/5 flex justify-center text-secondary-text border-t-2 border-accent">
        {props.elem.year}
      </div>
      {/* main  */}
      <div className="w-3/5 px-3 border-l-2 font-body border-accent flex flex-col gap-10">
      {/* heading  */}
        <div>
          <h1 className="font-heading text-accent text-3xl">{props.elem.role}</h1>
          <h2 className="font-body text-secondary-text italic">{props.elem.type}</h2>
        </div>
        {/* descriptions  */}
        <div className="text-text font-body">
          {props.elem.description}
        </div>
        {/* keys  */}
        <div className="font-body text-text pb-10">
            <ul>
                {props.elem.technologies.map((elem)=>{
                    return <li className="flex gap-2 text-lg font-body">&rarr; {elem}</li>
                })}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
