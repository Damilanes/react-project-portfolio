import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'
import Me from '../../assets/mypiczz.png'

const About = () => {
  return (
    <section id="about" className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <img className = 'picture' src={Me} alt="About"/>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Experience</h5>
                <small>1+ Years Working Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
                <h5>Clients</h5>
                <small>4+ Worldwide</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon"/>
                <h5>Projects</h5>
                <small>5+ Completed Projects</small>
            </article>
          </div>

          </div>

          <div className="para">
            <p>
              Damilola is a software developer. He is a founding member of a tech start-up called Data Intelliscence, made up of a team of Data Scientists and software developers.
              He is a certified Product manager. He has served as a Project manager. He has knowledge in Python, javascript, ReactJS.  
            </p>
          </div>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>




      </div>
    </section>
  )
}

export default About