import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaResearchgate} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="/#" className='footer_logo'>DAMILOLA AROMOFISOMO</a>
      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://www.facebook.com/damilola.aromofisomo.5" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://github.com/DamilolaAromofisomo" target="_blank" rel="noreferrer"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/damilola-aromofisomo-99b076238" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://twitter.com/Dhamilanez?s=09" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
        
      </div>

      <div className="footer_copyright">
        <small>&copy; Aromofisomo Damilola. All rights reserved. </small>
      </div>

    </footer>
  )
}

export default footer