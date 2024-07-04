import React from 'react'
import './tech.css'
import { DiJsBadge, DiReact, DiPython, DiGithubBadge, DiHtml5, }from "react-icons/di"
import { FaCss3Alt} from "react-icons/fa";
import python from '../../assets/python.svg'
const techList = [
    {
        badge: <FaCss3Alt size={48} fill='#2196F3' />,
        title: "CSS"
    },
    {
        badge: <DiHtml5 size={48} fill='#CC5500' />,
        title: "HTML"
    },
    {
        badge: <DiJsBadge size={48} fill='#f5e050'/>,
        title: "JavaScript"
    },
    {
        badge: <DiReact size={48} fill='#00d8ff' />,
        title: "React"
    },
    {
        badge: <img src={python} alt='python'/>,
        title: "Python"
    },
    {
        badge: <DiGithubBadge size={48} />,
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
