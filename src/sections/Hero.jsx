import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './styles/Hero.scss'
import { heroSlides } from '../util/hero'

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hero-container">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction'
        }}
        navigation={{
          nextEl: '.arr-next',
          prevEl: '.arr-prev'
        }}
        className="hero-slider"
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide
            className={`hero-slide ${slide.id}`}
            key={slide.id}
          >
            
            <div 
              className="bg-layer bg-desktop" 
              style={{ backgroundImage: `url(${slide.image.desktop})` }}
            ></div>
            <div 
              className="bg-layer bg-mobile" 
              style={{ backgroundImage: `url(${slide.image.mobile})` }}
            ></div>

            <div className="inner">
              <div className="t-wrap">
                <h2
                  className="tit"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p className="txt">{slide.subtitle}</p>
                <p className="txt-desc">{slide.desc}</p>
                <a href={slide.ctaHref} className='btn'>
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className={`hero-nav ${activeIndex === 2 ? 'is-white' : ''}`}>
          <div className="arr-prev">prev</div>
          <div className="swiper-pagination"></div>
          <div className="arr-next">next</div>
        </div>
      </Swiper>
    </div>
  )
}

export default Hero