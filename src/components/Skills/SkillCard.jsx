import { Radio } from 'lucide-react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'


const SkillCard = (props) => {
    const color = props.color
  return (
    
      <div className={` flex flex-wrap items-start justify-start gap-2 px-10 py-5 flex-col`} style={{ color }}>
        <a href={props.link} className={` px-3 py-2 border border-text rounded-2xl flex gap-3 items-center justify-center`}>{props.name}{props.icon}</a>
      </div>
  )
}

export default SkillCard