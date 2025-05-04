// components/Assignments.js

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaTasks,
  FaRobot,
  FaSearchDollar,
  FaMapMarkedAlt,
} from 'react-icons/fa';

const assignments = [
  {
    title: 'Assignment 1: Artificial Intelligence for eBay',
    icon: <FaRobot className="text-indigo-600 text-4xl transition-colors duration-300 group-hover:text-indigo-800" />,
    description:
      'Use ChatGPT to create prompts for product research, listing, and customer support. Submit your prompts for review and get feedback from our Team.',
  },
  {
    title: 'Assignment 2: White Label Product Hunting',
    icon: <FaSearchDollar className="text-green-600 text-4xl transition-colors duration-300 group-hover:text-green-800" />,
    description:
      'Find a profitable product using the taught criteria for dropshipping or white labeling in Module 3. Share your research for evaluation by the Empowerers team.',
  },
  {
    title: 'Assignment 3: Pakistan-Based Product Hunting',
    icon: <FaMapMarkedAlt className="text-red-600 text-4xl transition-colors duration-300 group-hover:text-red-800" />,
    description:
      'Hunt a product from the local market in Pakistan and suggest sourcing options. Get expert feedback to refine your selection skills.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Assignments() {
  return (
    <section className="bg-[#222] py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaTasks className="text-[#29ab87] text-4xl" />
          Assignments
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {assignments.map((assignment, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-[#333] border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex items-center mb-4 gap-4">
                {assignment.icon}
                <h3 className="text-gray-200 group-hover:text-[#29ab87] text-lg font-semibold transition-colors duration-300">
                  {assignment.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm">{assignment.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
