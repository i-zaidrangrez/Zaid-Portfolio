import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      year: "2026 (Present)",
      role: "MERN Stack Developer",
      type: "Independent / Personal Projects",
      description:
        "Building full-stack web applications while strengthening my skills in frontend development, backend architecture, databases, authentication, and API design.",
      technologies: ["React", "Express.js", "MongoDB" ,"REST APIs"],
    },

    {
      year: "2025 — 2026",
      role: "Web Developer",
      type: "Learning & Building",
      description:
        "Developing practical projects to understand modern web development, focusing on JavaScript, React, responsive UI, state management, and backend fundamentals.",
      technologies: ["JavaScript", "React", "Tailwind CSS", "Redux Toolkit"],
    },

    {
      year: "2025",
      role: "Started Web Development",
      type: "Learning Journey",
      description: (
        <>
          Started learning MERN Stack from{" "}
          <a
            href="https://grras.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GRRAS SOLUTION
          </a>{" "}
          by building projects and gradually developed a deeper interest in
          software engineering, problem solving, and understanding how systems
          work beneath the surface.
        </>
      ),
      technologies: ["MERN Stack", "MySQL", "Git & GitHub"],
    },
  ];
  return (
    <div className="h-full flex flex-col px-10 gap-20">
      <div className="h-2/10  w-full flex flex-col gap-2 justify-center">
        <h1 className="text-accent font-heading text-5xl uppercase">
          EXPERIENCE
        </h1>
        <p className="text-text font-body italic lowercase">
          WHERE I'VE BEEN LEARNING & BUILDING?
        </p>
      </div>
      <div className="h-8/10 flex flex-col gap-10 w-9/10 px-10 py-5">
        {experiences.map((elem) => {
          return <ExperienceCard elem={elem} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
