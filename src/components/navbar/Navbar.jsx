import React, { useState } from 'react'
import './navbar.css'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
const Menu = () =>(
    <>
    <a href='#about'>About</a>
    <a href='#tech'>Tech Stack</a>
    <a href='#projects'>Projects</a>
    <a href='#contact'>Contact</a>
    </>
)
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='port__navbar'>
        <div className='port__navbar-links'>
            <Menu />
        </div>
        <div className='port__navbar-menu'>
            {toggleMenu ? <RiCloseLine  color='#FB8B23' size={27} onClick={() => setToggleMenu(false)}/> : <RiMenu3Line color='#FB8B23' size={27} onClick={() => setToggleMenu(true)}/>}
            {toggleMenu && (
                <div className='port__navbar-menu_links scale-up-center'>
                    <Menu />
                </div>
            )}

        </div>
    </div>
  )
}

export default Navbar
