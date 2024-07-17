import React from 'react'
import './project.css'
const Project = ({imgUrl, title, description, webUrl}) => {
  return (
    <a href={webUrl}>
    <div className='port__project-container'>
      <div className='port__project-image'>
      <img  src={imgUrl} alt='project'/>
      </div>
      <div className='port__project-content'>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={webUrl}>See Full Website</a>
      </div>
    </div>
    </a>
  )
}

export default Project;
