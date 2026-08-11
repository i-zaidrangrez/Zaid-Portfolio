import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    <div className='h-fit w-full md:h-fit mb-10 relative'>
        <Navbar/>
        <div className='flex h-fit py-2 w-full flex-wrap items-center justify-between px-10'>
            <HeroLeft/>
            <HeroRight/>
        </div>
    </div>
  )
}

export default Hero