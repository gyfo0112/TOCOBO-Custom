import React from 'react'
import { collabData } from '../util/collaboration'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles/Collaboration.scss'

const Collaboration = () => {
  const loopedData = [...collabData, ...collabData];

  return (
    <section id="collaboration" className="collab-section">
      <div className="inner collab-inner">
        <h2 className="tit">COLLABORATION</h2>
      </div>

      <Swiper
        slideToClickedSlide={true} 
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          320: { spaceBetween: 15 },
          768: { spaceBetween: 30 },
          1024: { spaceBetween: 40 }
        }}
        className="collab-slider"
      >
        {loopedData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="collab-card">
              <div className="img-wrap">
                <img src={item.image} alt={item.title} />
              </div>
              <p className="card-txt">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Collaboration