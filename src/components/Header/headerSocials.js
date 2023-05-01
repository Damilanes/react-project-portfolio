import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaResearchgate} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div container className = "header__socials">
        <a href="https://www.facebook.com/damilola.aromofisomo.5" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://github.com/DamilolaAromofisomo" target="_blank" rel="noreferrer"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/damilola-aromofisomo-99b076238" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://twitter.com/Dhamilanez?s=09" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
        {/* <a href="http://behance.net/damiloladesigns" target="_blank" rel="noreferrer"><BsBehance/></a> */}
    </div>
  )
}

export default HeaderSocials