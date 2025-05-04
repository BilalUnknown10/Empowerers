"use client";
import { motion } from "framer-motion";

export default function AsSeenOn() {
  const newsLogo = [
    "/Ary.png",
    "/Geo.jpg",
    "/Bol.png",
    "/suno.jpg",
    "/DPakistan.png",
    "/Rohi.jpg",
    "/btalks.png",
    "ecom.png",
    "MH.jpg",
    "/bolchal.jpg",
    "/ogImage.jpg",
    "/ROman.jpg",
    "Media-coverage.png",
  ];

  return (
    <motion.div
      className="py-[30px] bg-[#2e2e2e] overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
  className="text-center text-3xl font-semibold mb-6 text-white"
  initial={{ opacity: 0, scale: 0.8, y: 20 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
    type: "spring",
    stiffness: 100,
    damping: 10,
  }}
  viewport={{ once: true }}
>
  As Seen On
</motion.h2>


      {/* Scrolling logos */}
      <div className="flex bg-[#2e2e2e] gap-20 px-10 animate-scroll">
        {newsLogo.concat(newsLogo).map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <img src={logo} alt="no Image" className="h-[120px] rounded" />
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </motion.div>
  );
}
