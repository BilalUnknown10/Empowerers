"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.section
      className="bg-[#2e2e2e] py-12 px-6 text-white text-center rounded shadow-md mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-[#29ab87] text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Ready to Start Your eBay Journey?
      </motion.h2>

      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Join our course and take the first step towards earning online with confidence. Start today!
      </motion.p>

      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="inline-block bg-[#29ab87] text-white font-semibold px-6 py-3 rounded-lg border border-transparent shadow hover:bg-transparent hover:border-[#29ab87] transition duration-300"
      >
        Enroll Now
      </motion.a>
    </motion.section>
  );
}
