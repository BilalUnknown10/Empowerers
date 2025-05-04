'use client';

import { motion } from 'framer-motion';
import { FaChartBar, FaBullhorn, FaUserTie, FaLaptop } from 'react-icons/fa';

const items = [
    {
      icon: <FaChartBar size={28} className="text-red-500" />,
      title: "Start & Grow",
      subtitle: "Your eBay Business",
      ring: "ring-pink-100",
    },
    {
      icon: <FaBullhorn size={28} className="text-yellow-500" />,
      title: "Product Research",
      subtitle: "Dropshipping & Stock",
      ring: "ring-indigo-100",
    },
    {
      icon: <FaUserTie size={28} className="text-blue-500" />,
      title: "Boost with AI",
      subtitle: "ChatGPT & Photoroom",
      ring: "ring-indigo-100",
    },
    {
      icon: <FaLaptop size={28} className="text-purple-500" />,
      title: "Handle Orders",
      subtitle: "Support & Scaling",
      ring: "ring-yellow-100",
    },
  ];
  
  

export default function LearningSection() {
  return (
    <section className="py-20 bg-[#333] text-center px-4 pt-40">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-300"
      >
        What you will Learn
        <br />
        <span className="inline-block mt-2 text-[#29ab87]">from the course</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-200 max-w-2xl mx-auto mt-6 text-base"
      >
        In our comprehensive course, you will gain a wealth of knowledge and valuable skills that
        will empower you to master the art of sales funnel optimization.
      </motion.p>

      {/* Responsive Stack */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-16 gap-10 md:gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center">
            {/* Icon Circle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              className={`w-20 h-20 flex items-center justify-center rounded-full ring-4 ${item.ring} bg-white`}
            >
              {item.icon}
            </motion.div>

            {/* Text below or beside icon */}
            <div className="text-center md:text-left mt-3 md:mt-0 md:ml-3">
              <p className="text-gray-200 font-medium text-sm">{item.title}</p>
              <p className="text-gray-200 text-sm">{item.subtitle}</p>
            </div>

            {/* Connector Line */}
            {index !== items.length - 1 && (
              <div className="hidden md:block w-12 h-1 bg-gray-300 mx-3 rounded-full"></div>
            )}
            {index !== items.length - 1 && (
              <div className="block md:hidden h-8 w-1 bg-gray-300 my-3 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
