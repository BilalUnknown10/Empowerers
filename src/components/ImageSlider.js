


"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/empowering.jpg", "/ebay.jpg", "/etsy.jpg", "/tiktok.jpg"];
  const intervalRef = useRef(null);
  const userInteracted = useRef(false); // Tracks if the user manually interacted

  const startAutoSlide = () => {
    if (userInteracted.current) return; // Prevent auto-slide after user interaction
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const prevSlide = () => {
    userInteracted.current = true; // Mark as user interaction
    stopAutoSlide();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    userInteracted.current = true;
    stopAutoSlide();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div
        className="relative overflow-hidden"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="slider"
              className="w-full  object-contain flex-shrink-0"
            />
          ))}
        </div>

        {/* Left Arrow */}
        <IoIosArrowBack
          className="hidden md:block absolute top-1/2 left-2 h-10 w-10 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer"
          onClick={prevSlide}
        />

        {/* Right Arrow */}
        <IoIosArrowForward
          className="hidden md:block absolute top-1/2 right-2 h-10 w-10 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}

export default ImageSlider;


