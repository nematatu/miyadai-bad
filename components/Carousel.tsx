'use client'

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/app/styles/carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='genki_smash.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='hitatch.jpeg' /></SwiperSlide>
        <SwiperSlide><img src='kotomi_saito.JPG' /></SwiperSlide>
        <SwiperSlide><img style={{objectPosition:'center'}} src='miyajima.JPG' /></SwiperSlide>
        <SwiperSlide><img style={{objectPosition:'center'}} src='nobi.JPG' /></SwiperSlide>
        <SwiperSlide><img src='ohanasi.jpeg' /></SwiperSlide>
        <SwiperSlide><img style={{objectPosition:'center'}} src='oinori.JPG' /></SwiperSlide>
        <SwiperSlide><img style={{objectPosition:'center'}} src='yuuhi.JPG' /></SwiperSlide>
        <SwiperSlide><img style={{objectPosition:'center'}} src='yuuta_saito.JPG' /></SwiperSlide>
        <SwiperSlide>
          <img src="/genki.JPG" alt="genki Image"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
