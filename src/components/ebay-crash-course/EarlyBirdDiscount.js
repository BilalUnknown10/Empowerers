"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa';

export default function EarlyBirdDiscount() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#222] py-1 m-0 relative">
      {/* Main Section */}
      <div className="flex container mx-auto px-8 md:px-12 lg:flex-row flex-col justify-center items-center gap-5 sm:gap-10 my-[45px] md:my-[55px]">
        
        {/* Text Column with Animation */}
        <motion.div
          className="lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-lg text-white md:text-xl font-bold">
            Our EBAY CRASH COURSE (ECC) 3.0 is designed for Busy Individuals, House Wives, Students and Job Persons who want to learn fast and earn in Dollars! Plus, there's an exclusive offer you can't afford to miss.
          </h1>
          <button className="mt-3 bg-[#29ab87] text-white hover:bg-transparent hover:text-[#29ab87] border border-[#29ab87] font-semibold px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2">
  Enroll Now <FaArrowRight className="text-lg" />
</button>
        </motion.div>

        {/* Image Column with Animation */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center flex-col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            alt="image"
            src="/qasim-sir-half-1536x1445.png"
            width={450}
            height={300}
          />
        </motion.div>
      </div>
    </div>
  );
}
