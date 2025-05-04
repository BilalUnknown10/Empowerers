"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa';


const Video = () => {
  return (
    <div className="bg-[#222] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 flex flex-col lg:flex-row justify-center items-center gap-10">
        {/* Left Side: Video */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full aspect-video max-w-[560px]">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://drive.google.com/file/d/1Hta2gL0T32y6L6GgP0NZh3c-NrGYGFLy/preview"
              allow="autoplay"
            ></iframe>
          </div>
        </motion.div>

        {/* Right Side: Text + Buttons */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left px-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Learn “eBay”, the World’s 2nd Largest eCommerce Marketplace in Just 4 Hours.
          </h1>
          <p className="text-[16px] sm:text-[18px] text-white">
            Even if you're an absolute beginner with no prior experience on eBay!
          </p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-[#29ab87] text-white hover:bg-transparent hover:text-[#29ab87] border border-[#29ab87] font-semibold px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2">
  Enroll Now <FaArrowRight className="text-lg" />
</button>
            <div className="text-white text-center">
              <div className="font-bold text-xl">10k</div>
              <div className="text-sm opacity-80">Total Student</div>
            </div>
            <div className="text-white text-center">
              <div className="font-bold text-xl">4.59</div>
              <div className="text-sm opacity-80">Average Rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Video;
