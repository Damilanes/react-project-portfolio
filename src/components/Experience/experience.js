import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h5>Skills I Possess</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">

                    <article className = "experience_details">
                        <BsPatchCheckFill className='experience_details-icons'/>
                        <div>
                        <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>

                    <article className = "experience_details">
                        <BsPatchCheckFill className= 'experience_details-icons'/>
                        <div>
                            <h4>CSS</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>

                    <article className= "experience_details">
                        <BsPatchCheckFill className= 'experience_details-icons'/>
                        <div>
                            <h4>JavaScript</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>

                    <article className= "experience_details">
                        <BsPatchCheckFill className= 'experience_details-icons'/>
                        <div>
                            <h4>React</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                  </div>
                </div>

                <div className="experience_project">
                    <h3>Project Management</h3>
                    <div className="experience_content">

                        <article className= "experience_details">
                            <BsPatchCheckFill className= 'experience_details-icons'/>
                            <div>
                                <h4>Trello</h4>
                                <small className="text-light">Experienced</small>

                            </div>
                        </article>

                        <article className= "experience_details">
                            <BsPatchCheckFill className= 'experience_details-icons'/>
                            <div>
                                <h4>Slack</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience