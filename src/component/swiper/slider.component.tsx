import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      > 
        <div className='h-24'>
        <SwiperSlide>
          <img src="https://reading-time.co.kr/resources/img/main/vis2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://reading-time.co.kr/resources/img/main/vis4_210906.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://reading-time.co.kr/resources/img/main/vis1.jpg" />
        </SwiperSlide>
        </div>

      </Swiper>
    </>
  );
}
