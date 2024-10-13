'use client'

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/app/styles/carousel.css';
import Image from 'next/image';
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
        <SwiperSlide><Image width={2000} height={2000} alt="image" src='genki_smash.jpeg'/></SwiperSlide>
        <SwiperSlide><Image width={2000} height={2000} alt="image" src='hitatch.jpeg' /></SwiperSlide>
        <SwiperSlide><Image width={2000} height={2000} alt="image" src='kotomi_saito.JPG' /></SwiperSlide>
        <SwiperSlide><Image width={2000} height={2000} alt="image" style={{objectPosition:'center'}} src='miyajima.JPG' /></SwiperSlide>
        <SwiperSlide><Image width={2000} height={2000} alt="image" style={{objectPosition:'center'}} src='nobi.JPG' /></SwiperSlide>
        <SwiperSlide><Image width={2000} height={2000} alt="image" src='ohanasi.jpeg' /></SwiperSlide>
        <SwiperSlide><Image width={2000} height={2000} alt="image" style={{objectPosition:'center'}} src='oinori.JPG' /></SwiperSlide>
        <SwiperSlide><Image width={2000} height={2000} alt="image" style={{objectPosition:'center'}} src='yuuhi.JPG' /></SwiperSlide>
        <SwiperSlide><Image width={2000} height={2000} alt="image" style={{objectPosition:'center'}} src='yuuta_saito.JPG' /></SwiperSlide>
        <SwiperSlide>
          <Image width={2000} height={2000} alt="image" src="/genki.JPG"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
