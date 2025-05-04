"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Huzaifa",
    video: "/Huzaifa.mp4",
  },
  {
    name: "Moavia",
    video: "/moavia.mp4",
  },
  {
    name: "Sania",
    video: "/Sania.mp4",
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[current];

  return (
    <motion.section
      className="py-10 bg-[#333]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto px-4 text-center text-white">
        <motion.h2
          className="text-3xl font-extrabold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Success Stories
        </motion.h2>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center gap-6">
          <motion.button
            onClick={prevSlide}
            className="p-3 bg-[#1e1e1e] border border-gray-700 rounded-full shadow hover:bg-[#333] hover:scale-110 transition"
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft className="text-white w-5 h-5" />
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.video}
              className="bg-[#1e1e1e] p-6 rounded-lg shadow w-full max-w-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full aspect-video mb-4">
                <video
                  className="w-full h-full rounded-md object-cover"
                  controls
                  src={testimonial.video}
                />
              </div>
              <motion.h4
                className="text-sm font-semibold text-[#e0e0e0]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                — {testimonial.name}
              </motion.h4>
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={nextSlide}
            className="p-3 bg-[#1e1e1e] border border-gray-700 rounded-full shadow hover:bg-[#333] hover:scale-110 transition"
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight className="text-white w-5 h-5" />
          </motion.button>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.video}
              className="bg-[#1e1e1e] p-4 rounded-lg shadow"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full aspect-video mb-4">
                <video
                  className="w-full h-full rounded-md object-cover"
                  controls
                  src={testimonial.video}
                />
              </div>
              <motion.h4
                className="text-sm font-semibold text-[#e0e0e0]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                — {testimonial.name}
              </motion.h4>
            </motion.div>
          </AnimatePresence>

          {/* Arrows for mobile */}
          <div className="mt-4 flex justify-center gap-6">
            <motion.button
              onClick={prevSlide}
              className="p-3 bg-[#1e1e1e] border border-gray-700 rounded-full shadow hover:bg-[#333] hover:scale-110 transition"
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft className="text-[#29ab87] w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="p-3 bg-[#1e1e1e] border border-gray-700 rounded-full shadow hover:bg-[#333] hover:scale-110 transition"
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight className="text-[#29ab87] w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
