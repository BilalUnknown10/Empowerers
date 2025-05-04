"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["ALL", "LAHORE", "ISLAMABAD", "ABBOTTABAD", "GILGIT", "KIU"];

const images = [
  { src: "/gallery1.jpg", category: "LAHORE" },
  { src: "/gallery2.jpg", category: "ISLAMABAD" },
  { src: "/gallery3.jpg", category: "ABBOTTABAD" },
  { src: "/gallery4.jpg", category: "GILGIT" },
  { src: "/gallery5.jpg", category: "KIU" },
  { src: "/gallery6.jpg", category: "LAHORE" },
  { src: "/gallery7.jpg", category: "ISLAMABAD" },

];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredImages =
    selectedCategory === "ALL"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="p-5">
      <div className="flex container flex-wrap gap-2 sm:gap-0  mx-auto justify-center space-x-3 my-5 sm:my-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-[10px] sm:text-[16px] rounded-md ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

   <div className="container my-10 mx-auto ">
   <motion.div
        layout
        className="grid  mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden scale-95 hover:scale-100 transition-all ease-in-out duration-300 rounded-lg shadow-md"
            >
              <Image
                src={img.src}
                alt={`Gallery Image ${index + 1}`}
                width={500}
                height={200}
                className="w-full h-auto   object-cover"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
   </div>
    </div>
  );
}
