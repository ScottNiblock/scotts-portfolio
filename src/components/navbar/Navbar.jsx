import React, { useState, useEffect } from 'react'
import './navbar.css'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

const Navbar = () => {
    const [prevScrollY, setPrevScrollY] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        // Check scroll direction
        const scrollDirection = currentScrollY > prevScrollY ? 'down' : 'up';
        
        // Update prevScrollY
        setPrevScrollY(currentScrollY);
        
        // Update translateY based on scroll direction
        const navbar = document.getElementById('navbar');
        if (navbar) {
          navbar.style.transform = scrollDirection === 'up' ? 'translateY(0)' : 'translateY(-200px)';
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollY]);
    const [toggleMenu, setToggleMenu] = useState(false)
    const Menu = () =>(
        <>
        <a href='#about' onClick={()=> setToggleMenu(false)}>About</a>
        <a href='#tech' onClick={()=> setToggleMenu(false)}>Tech Stack</a>
        <a href='#projects' onClick={()=> setToggleMenu(false)}>Projects</a>
        <a href='#contact' onClick={()=> setToggleMenu(false)}>Contact</a>
        </>
    )
  return (
    <div className='port__navbar' id='navbar'>
        <div className='port__navbar-links'>
            <Menu />
        </div>
        <div className='port__navbar-menu'>
            {toggleMenu ? <RiCloseLine  color='#3ded97' size={27} onClick={() => setToggleMenu(false)}/> : <RiMenu3Line color='#3ded97' size={27} onClick={() => setToggleMenu(true)}/>}
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
