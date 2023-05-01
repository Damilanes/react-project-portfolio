import React from 'react'
import './services.css'
import {HiCheck} from 'react-icons/hi'

const Services = () => {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2 className='whatIoffer'>Services</h2>

        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Frontend development with HTML, CSS, JavaScript and React.</p>
              {/* Learn FIGMA */}
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Deployment with Heroku and Firebase.</p>
            </li>

            
             {/* <li>
              <HiCheck className='service_list-icon'/>
              <p>API deployment with Docker.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <HiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}


          </ul>
        </article>
        {/* END OF Content Creation */}

    </section>
  )
}

export default Services