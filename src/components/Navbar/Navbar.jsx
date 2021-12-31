import React from 'react';
import './Navbar.scss'


const Navbar = () => {
    return (
        <header className='navbar'>
            <img src="https://i.ibb.co/db7rdpG/logo-Portfolio.jpg" alt="Logo"/>
            <nav>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Navbar
