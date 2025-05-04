"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Students = [
  {
    image: "/student1.png",
    name: "Samam Amir",
    city: "Multan",
    message: `A few years ago, I attempted to sell on eBay but struggled to generate sufficient income. However, after joining the Empowerers, I earned my first dollar within just 20 days. Now, after a long and rewarding journey, I am proud to call myself an eBay consultant.`,
  },
  {
    image: "/student2.png",
    name: "Saif Asim",
    city: "Multan",
    message:
      "Founder of a comprehensive eBay A to Z services agency. Unfulfilled by the typical 9-to-5 grind, I decided to take control of my career. Today, I run my own eBay A to Z services agency, backed by a skilled and professional team.",
  },
  {
    image: "/student3.png",
    name: "Hassan Grewal",
    city: "Multan",
    message:
      "Empowerers has been a game-changer for me. The guidance and training on eBay sales have transformed my approach, helping me achieve results I never thought possible. I’m grateful for the support and knowledge I’ve gained from this incredible program.",
  },
  {
    image: "/student4.png",
    name: "Abuzar Razaq",
    city: "Sahiwal",
    message:
      "Running my online company. Joined Empowerers in 2020. Now running my own eBay, Facebook removal, and account reinstatement-based company named OCCUFix.",
  },
];
function StudentSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="text-center bg-[#ecf0ea] py-[45px] md:py-[55px]">
      <div className="container mx-auto  md:px-24 px-10 relative">
      <h1 className="font-bold  text-2xl sm:text-5xl text-[#29AB87] drop-shadow-md mb-5">
        Our Students Say
      </h1>

      <div className=" mx-auto rounded-lg shadow-lg border border-gray-300 my-10 w-[100%] sm:w-[70%] lg:w-[900px] bg-white p-5 text-center">
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={50}
          loop={true}
          slidesPerView={1}
          className="swiper-container"
        >
          {Students.map((student, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center gap-5 my-10 h-[450px] sm:h-[400px]">
                <img
                  src={student.image}
                  alt={student.name}
                  className="lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] mx-auto rounded-full aspect-[16/5]"
                />
                <h1 className="text-xl font-semibold">{student.name}</h1>
                <span className="text-gray-500 -mt-3 mb-2 ">
                  {student.city}
                </span>

                {/* Quote section */}
                <div className="relative text-gray-600  sm:px-20 leading-relaxed flex flex-col items-center">
                  <div className="flex items-start w-full gap-2">
                    <div>
                      <FaQuoteLeft className="text-3xl mt-[-15px] text-gray-300 mr-2" />
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base text-center flex-1">
                      {student.message}
                    </p>
                    <div className="flex justify-end items-end h-full">
                      <FaQuoteRight className="text-3xl mb-[-15px] text-gray-300 " />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="gap-2 flex sm:mt-0">
          <button
            className="h-8 w-8 absolute left-1 sm:left-24 sm:h-12 translate-y-1/2 top-1/2  sm:w-12 rounded-full  border border-[#29ab87] flex items-center justify-center text-[#29ab87] ease-in-out duration-300 hover:bg-blueColor"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <HiChevronLeft className="text-[#29ab87] text-xl sm:text-2xl font-bold" />
          </button>

          <button
            className="h-8 w-8 absolute right-1 sm:right-24 top-1/2  translate-y-1/2 sm:h-12 sm:w-12 rounded-full border border-[#29ab87] text-[#border]  flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <HiChevronRight className="text-[#29ab87] text-xl sm:text-2xl font-bold" />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default StudentSlider;
