import React from "react";
import SkillCard from "./SkillCard";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiGsap,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiMysql,
  SiGithubcopilot,
} from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import { BsOpenai } from "react-icons/bs";

export const frontendSkills = [
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    docs: "https://react.dev/",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    docs: "https://tailwindcss.com/docs",
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
    color: "#764ABC",
    docs: "https://redux-toolkit.js.org/",
  },
  {
    name: "GSAP",
    icon: SiGsap,
    color: "#88CE02",
    docs: "https://gsap.com/docs/v3/",
  },
];

export const backendSkills = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    docs: "https://nodejs.org/docs/latest/api/",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
    docs: "https://expressjs.com/",
  },
  {
    name: "REST APIs",
    icon: VscServerProcess,
    color: "#FFFFFF",
    docs: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
    color: "#FFFFFF",
    docs: "https://www.rfc-editor.org/rfc/rfc7519",
  },
];

export const databaseSkills = [
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    docs: "https://www.mongodb.com/docs/",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    docs: "https://dev.mysql.com/doc/",
  },
];

export const toolsSkills = [
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    docs: "https://git-scm.com/doc",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
    docs: "https://docs.github.com/",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    docs: "https://learning.postman.com/docs/",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "#646CFF",
    docs: "https://vite.dev/guide/",
  },
  {
    name: "OpenAI",
    icon: BsOpenai,
    color: "#FFFFFF",
    docs: "https://platform.openai.com/docs/",
  },
  {
    name: "GitHub Copilot",
    icon: SiGithubcopilot,
    color: "#FFFFFF",
    docs: "https://docs.github.com/en/copilot",
  },
];

const Skills = () => {
  return (
    <div id="Skills" className="h-full w-full scroll-mt-20">
      <div className="h-30  w-full flex flex-col gap-2 justify-center px-10">
        <h1 className="text-accent font-heading text-5xl uppercase">Skills</h1>
        <p className="text-text font-body italic">TECHNOLOGIES I WORK WITH</p>
      </div>

      {/* SKILL CARDS  */}
      <div className="flex h-full w-full gap-10 mt-10 px-3 md:gap-3 flex-wrap md:px-0">
        <div className="border border-text rounded h-full w-full md:w-32/100">
          <div className="h-20 w-full ">
            <h1 className="h-full w-full font-heading text-accent flex items-center justify-center text-2xl">
              FRONTEND
            </h1>
          </div>
          <div className="h-full w-full py-2 font-body flex flex-wrap justify-between">
            {frontendSkills.map((elem) => {
              return (
                <SkillCard
                  name={elem.name}
                  icon={<elem.icon />}
                  color={elem.color}
                  link={elem.docs}
                />
              );
            })}
          </div>
        </div>
        <div className="border border-text rounded h-full w-full md:w-32/100">
          <div className="h-20 w-full ">
            <h1 className="h-full w-full font-heading text-accent flex items-center justify-center text-2xl">
              BACKEND / DATABASE
            </h1>
          </div>
          <div className="h-full w-full py-2 flex font-body flex-wrap justify-between">
            {backendSkills.map((elem) => {
              return (
                <SkillCard
                  name={elem.name}
                  icon={<elem.icon />}
                  color={elem.color}
                  link={elem.docs}
                />
              );
            })}
            {databaseSkills.map((elem) => {
              return (
                <SkillCard
                  name={elem.name}
                  icon={<elem.icon />}
                  color={elem.color}
                  link={elem.docs}
                />
              );
            })}
          </div>
        </div>
        <div className="border border-text rounded h-full w-full md:w-32/100">
          <div className="h-20 w-full ">
            <h1 className="h-full w-full font-heading text-accent flex items-center justify-center text-2xl">
              TOOLS
            </h1>
          </div>
          <div className="h-full w-full py-2 flex flex-wrap font-body justify-between">
            {toolsSkills.map((elem) => {
              return (
                <SkillCard
                  name={elem.name}
                  icon={<elem.icon />}
                  color={elem.color}
                  link={elem.docs}
                />
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="h-[20vh] w-full flex items-start justify-center italic py-20 pb-40">
        <h1 className="text-secondary-text text-2xl font-body">And more i love working with ~</h1>
      </div>
    </div>
  );
};

export default Skills;
