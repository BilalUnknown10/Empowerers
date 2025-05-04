"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function News() {
  return (
    <div className="py-3 bg-[#d5dbdb] overflow-hidden text-[13px] italic w-full">
      <Swiper
        // spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        // freeMode={true}÷]
        loop={true}
        speed={15000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="text-center">Latest News Coming Up</SwiperSlide>
        <SwiperSlide className="text-center">Latest News Coming Up</SwiperSlide>
        <SwiperSlide className="text-center">Latest News Coming Up</SwiperSlide>
        <SwiperSlide className="text-center">Latest News Coming Up</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default News;