import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Scale } from 'lucide-react'
import React from 'react'

const HeroRight = (props) => {
  const timeline = props.timeline
  useGSAP(()=>{
    timeline.from('.main-text h1',{
      opacity:0,
      stagger:0.2,
    })
    .from('.main-text img',{
      opacity:0,
      y:50
    })
  })
  return (
    <div className='h-full w-fit flex items-center justify-center sm:mt-0 md:-mt-40 px-1 lg:pr-20'>
        <div className='text-secondary-text h-full font-bold font-heading text-center text-6xl md:text-[5vw] lg:text-[7vw] sm:text-8xl flex-col items-center justify-center relative main-text'>
            <h1>ZAID</h1>
            <h1>RANGREZ</h1>
            <img className='absolute left-[5%] top-[5%] sm:left-[5%] sm:top-[0%]' src="/Zaid-Profile-removebg-preview.png" alt="" />
        </div>
    </div>
  )
}

export default HeroRight