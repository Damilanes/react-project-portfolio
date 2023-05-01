import React from 'react'
import './header.css'
import CTA from './CTA.js'
// import ME from '../../assets/me.png'
import ME from '../../assets/newpics.png'
import HeaderSocials from './headerSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello, I'm</h2>
        <h1 className = 'myname'>Damilola Aromofisomo</h1>
        <h1 className="textlight">Software Developer</h1>
        <CTA/>
        <HeaderSocials/>

        {/* <img className="me" src={ME} alt="me"  width="400" height="650"/> */}

        <div className="me">
          <img
            src={ME}
            alt="me"
            width="100%"
            height="300"
          />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>


      </div>
    </header>
  )
}

export default header