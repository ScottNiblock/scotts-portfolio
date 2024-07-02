import React from 'react'
import './tech.css'
import { DiJsBadge, DiReact, DiPython, DiGithubBadge, DiHtml5, }from "react-icons/di"
import { SiCsswizardry } from "react-icons/si"; 

const techList = [
    {
        badge: <SiCsswizardry size={35} />,
        title: "CSS"
    },
    {
        badge: <DiHtml5 size={35} />,
        title: "HTML"
    },
    {
        badge: <DiJsBadge size={35} />,
        title: "JavaScript"
    },
    {
        badge: <DiReact size={35} />,
        title: "React"
    },
    {
        badge: <DiPython size={35}/>,
        title: "Python"
    },
    {
        badge: <DiGithubBadge size={35} />,
        title: "GitHub"
    }
]


const Tech = () => {
  return (
    <div className='port__tech section__margin' id='tech'>
      <div className='port__tech-heading'>
        <h1 className='gradient__text'>My Tech Stack</h1>
      </div>
      <div className='port__tech-container'>
        
        {techList.map((item) =>{
            return(
                <div className='port__tech-container_item'>
                    <p>{item.badge}</p>
                    <p>{item.title}</p>
                </div>
            )
        })}
        
      </div>
    </div>
  )
}

export default Tech
