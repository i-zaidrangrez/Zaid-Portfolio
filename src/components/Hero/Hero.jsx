import React, { useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
    const timeline = gsap.timeline()
  return (
    <div className='h-fit w-full md:h-fit mb-10 relative'>
        <Navbar timeline={timeline} />
        <div className='flex h-fit py-2 w-full flex-wrap items-center justify-between px-10'>
            <HeroLeft timeline={timeline} />
            <HeroRight timeline={timeline} />
        </div>
    </div>
  )
}

export default Hero