import React from 'react'
import './projects.css'
import gpt3 from '../../assets/gpt3.png'
import ytclone from '../../assets/ytclone.png'
import construction from '../../assets/construction.jpeg'
import {Project} from '../../components'
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='port__projects section__padding' id='projects'>
      <div className='port__projects-heading'>
        <h1 className='gradient__text'>My Projects</h1>
        <a href='https://github.com/ScottNiblock?tab=repositories'> <button type='button'> Check out my GitHub <FaGithub/></button></a>
    </div>
    <div className='port__projects-container'>
      <Project imgUrl={gpt3} title="GPT-3 Website" description="A website based on OpenAI's GPT-3 that demonstrates aesthetic and responsive web design. Content is intentionally redundant with some omitted functionality" webUrl='https://gpt3sn.scottniblock.com/' />
      <Project imgUrl={ytclone} title="Youtube Clone" description="This project is a YouTube clone built using React, MUI, and RapidAPI. It replicates the core features of YouTube, including video search, display, and channel details, providing a seamless user experience." webUrl='https://yt-clone-scottniblock-com.preview-domain.com/' />
      <Project imgUrl={construction} title="Coming Soon" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" webUrl='https://example.com/' />
    </div>
    </div>
  )
}

export default Projects
