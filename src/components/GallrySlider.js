"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Autoplay, Navigation } from "swiper/modules";

const Gallery = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
];

function GallerySlider() {
  const swiperRef = useRef(null);

  return (
    <div className="">
      <div className="relative ">
        <Swiper
          spaceBetween={10}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.autoplay.start(); // Ensure autoplay starts immediately
          }}
          slidesPerView={1} // Default to 1 image for mobile
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation,Autoplay]}
          className="w-[80%] lg:w-[100%] mx-auto"
        >
          {Gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[350px] object-cover scale-95 hover:scale-100 ease-in-out transition-all duration-300 rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        {/* <div className=" gap-2 flex sm:mt-0">
          <button
            className="h-8 w-8 absolute sm:left-24 left-1 sm:h-12  top-0 translate-y-28 sm:translate-y-24  sm:w-12 rounded-full bg-[#29ab87] flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor"
            onClick={() => swiperRef.current?.slidePrev()} // Slide to previous
          >
            <HiChevronLeft className="text-white text-xl sm:text-2xl font-bold" />
          </button>

          <button
            className="h-8 w-8 absolute right-1 sm:right-24 top-0 translate-y-28 sm:translate-y-24 sm:h-12 sm:w-12 rounded-full bg-[#29ab87] flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor"
            onClick={() => swiperRef.current?.slideNext()} // Slide to previous
          >
            <HiChevronRight className="text-white text-xl sm:text-2xl font-bold" />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default GallerySlider;
