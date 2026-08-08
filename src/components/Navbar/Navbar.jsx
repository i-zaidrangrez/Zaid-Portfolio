import { ArrowDownToLine } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-18 w-full flex items-center justify-between px-10 py-5  bg-transparent'>
        <div className='text-accent font-heading text-4xl relative'>ZAID <span className='absolute top-[-40%] bg-transparent text-green-400'>&bull;</span></div>
        <div className='w-35/100 border border-text py-3 px-6 text-text font-heading rounded-4xl'>
            <ul className='flex items-center justify-between'>
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