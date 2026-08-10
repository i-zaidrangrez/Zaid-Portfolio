import { ArrowDownToLine } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-18 w-full items-center justify-between px-10 py-5 flex'>
        <div className='text-accent font-heading text-4xl relative'>ZAID <span className='absolute top-[-40%] bg-transparent text-green-400'>&bull;</span></div>
        <div className='w-fit text-text font-heading'>
            <ul className='h-full w-full items-center justify-between gap-5 border border-text py-3 px-6 rounded-4xl hidden md:flex'>
                <li>Projects</li>
                <li>About</li>
                <li>Skills</li>
                <li>Contact</li>
                <li>Experience</li>
            </ul>
        </div>
            <button className='flex items-center text-sm py-2 px-3 border border-text text-text gap-2 font-heading'>Resume <ArrowDownToLine size={20} /></button>
    </div>
  )
}

export default Navbar