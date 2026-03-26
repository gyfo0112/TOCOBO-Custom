import React, { useRef, useEffect } from 'react'
import { collectionData } from '../util/collection'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './styles/Collection.scss'

const Collection = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  const loopedData = [...collectionData, ...collectionData]

  useEffect(() => {
    if (swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current
      swiperRef.current.params.navigation.nextEl = nextRef.current
      swiperRef.current.navigation.destroy()
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [])

  return (
    <div className='inner collection-inner'>
      <div className="t-wrap">
        <h2 className="tit">ADERERROR COLLECTION</h2>
        <p className="txt">Accessory</p>
      </div>

      <div className="slider-area">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            }
          }}
          loop={true}
          pagination={{
            el: '.swiper-pagination',
            type: 'progressbar'
          }}
          modules={[Pagination, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="collection-slider"
        >
          {loopedData.map((sl, i) => (
            <SwiperSlide key={i}>
              <a href="#">
                <div className="name">{sl.name}</div>
                <div className="img-wrap">
                  <img src={sl.image} alt={sl.name} />
                </div>
                <div className="options">{sl.options}</div>
                <div className="price">{sl.price}</div>
              </a>
            </SwiperSlide>
          ))}
          
          <div className="swiper-pagination"></div>
        </Swiper>
        
        <a href="#" className='prev' onClick={(e)=>e.preventDefault()} ref={prevRef}>prev</a>
        <a href="#" className='next' onClick={(e)=>e.preventDefault()} ref={nextRef}>next</a>
      </div>
    </div>
  )
}

export default Collection