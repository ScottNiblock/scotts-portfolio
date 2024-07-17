import React from 'react'
import './header.css'
import profile from '../../assets/profile.jpeg'
import { FaDownload } from "react-icons/fa6";
const Header = () => {
  return (
    <div className='port__header section__padding' id='about'>
      <div className='port__header-logo'>
        <img  src={profile} alt='profile'/>
      </div>
      <div className='port__header-content'>
        <h1 className='gradient__text fade-in'>Welcome</h1>
        <div className='port__header-content_bio'>
            <p>Hi there! I'm <b style={{color:'#3ded97'}}>Scott Niblock</b>, a passionate React developer based in Austin, Texas, dedicated to creating dynamic and user-friendly web applications. With a strong foundation in JavaScript and expertise in modern web technologies, I strive to bring innovative solutions to life.</p>
            <p>Explore my portfolio to see the projects I've worked on, learn more about my skills and experiences, and get in touch if you'd like to collaborate or just say hello. I'm always excited to connect with fellow developers, potential clients or employers, and anyone else interested in the ever-evolving world of web development.</p>
            <p>Thank you for visiting, and I hope you enjoy your stay!</p>
        </div>
        <div className='port__header-other'>
          <a href='/Scott_Niblock_SWE_Resume.pdf' download><button type='button'>Download CV <FaDownload/></button></a>
        </div>
      </div>
    </div>
  )
}

export default Header
