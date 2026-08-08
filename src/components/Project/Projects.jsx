import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <div className='h-full w-full '>
        <div className='h-2/10  w-full flex flex-col gap-2 justify-center px-10'>
            <h1 className='text-accent font-heading text-5xl uppercase'>Projects</h1>
            <p className='text-text font-body italic'>A selection of things I've built, explored, and learned from.</p>
        </div>
        <div className='h-full w-full py-10 px-5 flex gap-2 flex-wrap justify-between'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Projects