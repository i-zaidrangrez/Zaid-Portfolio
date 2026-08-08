import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <div className='flex h-9/10 py-2'>
            <HeroLeft/>
            <HeroRight/>
        </div>
    </div>
  )
}

export default Hero