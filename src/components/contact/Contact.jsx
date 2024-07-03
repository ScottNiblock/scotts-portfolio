import React from 'react'
import './contact.css'
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='port__contact section__padding gradient__bg' id='contact'>
      <div className='port__contact-heading'>
        <h1 className='gradient__text'>Contact Me</h1>
      </div>
      <div className='port__contact-links'>
   <p><FaPhone /> 512-547-7488</p> 
   <p><MdOutlineMailOutline /> ScottNiblock16@Gmail.com</p> 
   <p><FaLinkedin /> <a href='https://www.linkedin.com/in/scott-niblock-cis/'>Message me on LinkedIn</a></p> 

      </div>
    </div>
  )
}

export default Contact
