import React from 'react'
import Card from './Card'

const Projects = () => {
  const projects = [
  {
    id: "bitebase",
    name: "BiteBase",
    image : "/logoWider.png",
    description:
      "A full-stack restaurant management and ordering platform with authentication, menu management, cart functionality, and a responsive user interface.",
    techStack: "FULL STACK",
    github: "https://github.com/i-zaidrangrez/BiteBase",
    live: "YOUR_LIVE_URL",
    status: "WORKING",
    color : "bg-green-500"
  },
  {
    id: "bullseye",
    name: "Portfolio (Bullseye Theme Based)",
    image : "/Bullseye.png",
    description:
      "An interactive frontend project focused on modern UI design, smooth animations, and engaging user interactions.",
    techStack: "FRONTEND",
    github: "https://github.com/i-zaidrangrez/Bullseye-web",
    live: "YOUR_LIVE_URL",
    status: "PENDING",
    color : "bg-red-500"
  },
];
  return (
    <div className='h-full w-full'>
        <div className='h-2/10  w-full flex flex-col gap-2 justify-center px-10'>
            <h1 className='text-accent font-heading text-5xl uppercase'>Projects</h1>
            <p className='text-text font-body italic'>A selection of things I've built, explored, and learned from.</p>
        </div>
        <div className='h-full w-full py-10 px-5 flex gap-2 flex-wrap justify-between'>
            {projects.map((elem)=>{
              return <Card elem={elem}/>
            })}
        </div>
    </div>
  )
}

export default Projects