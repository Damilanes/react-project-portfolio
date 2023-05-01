import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Caleb.jpg'
import AVTR2 from '../../assets/Bolajjj.jpg'
import AVTR3 from '../../assets/Bolaji.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const data = [
  {
  avatar: AVTR1,
  name: 'Caleb Anyagba',
  review: "Damilola and I have known each other for a many years. We currently work in the same start-up, and his work ethic is very admirable. He always aim at completing any given tax and giving an effective result. It's an honour to be working with him. "
  },
  {
  avatar: AVTR2,
  name: 'Mobolaji Israel',
  review: "I have known Damilola since our university days at University of Lagos, Akoka. His ability to chase new ideas head on and handle projects very responsibly is what I admire a lot about him. We have worked on various science projects together which has given efective results. He is always ready for new challenges. It gives me joy to know I have him in my corner. I am grateful."
  },
  {
  avatar: AVTR3,
  name: 'Bolaji Olokode',
  review: "I met Damilola at the University of Lagos, Akoka. We were course mates. He has always shown great courage while handling projects. He has been a good leader since our school days, and takes responsibility for his actions. He never sieze to encourage and motivate me to face new challenges. He has great work ethics. I'm happy he is my friend and I'm grateful for our days together."

  },

]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5> Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
          {
            data.map(({avatar, name, review}, index) => {
              return (
                <SwiperSlide key = {index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />

                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
              </SwiperSlide>
              )
            })
          }





      </Swiper>


    </section>

  )
}

export default Testimonials