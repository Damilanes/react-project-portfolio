import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Catera-Ed-App.png'
import IMG2 from '../../assets/Tour-Milan-Web-App.jpg'
import IMG3 from '../../assets/Italo-Stream-App.jpg'

const data = [
    {
        id: 1,
        Image: IMG1,
        title: 'Catera a platform for caterers to display their work',
        behance: 'https://www.behance.net/gallery/150760301/Catera-App-for-Caterers-UXUI-Case-Study',
        view: 'https://www.behance.net/gallery/150760301/Catera-App-for-Caterers-UXUI-Case-Study'
    },
    {
        id: 2,
        Image: IMG2,
        title: 'A web application design for taking a trip to Milan',
        behance: 'https://www.behance.net/gallery/146001387/TOUR-MILAN',
        view: 'https://www.behance.net/gallery/146001387/TOUR-MILAN'
    },
    {
        id: 3,
        Image: IMG3,
        title: 'A mobile app design for watching Italian football games',
        behance: 'https://www.behance.net/gallery/147067937/ITALO-Case-Study-Design',
        view: 'https://www.behance.net/gallery/147067937/ITALO-Case-Study-Design'
    }
]

const Portfolio = () => {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
  
        <div className="container portfolio_container">
        {
          data.map(({id, image, title, behance, view}) => {
            return (
              <article key={id} className="portfolio__item">
               <div className="portfolio_item-image">
                  <img src={image} alt={title} width="100%" height="100%"/>
                </div>
                <h3 className='titlee'>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={behance} className='btn' target = '_blank' rel="noreferrer">Behance</a>
                <a href={view} className='btn btn-primary' target = '_blank' rel="noreferrer">Behance</a>
                </div>
            </article>
            )
          })
        }
  
  
  
  
  
        </div>
      </section>
    )
  }
  
  export default Portfolio