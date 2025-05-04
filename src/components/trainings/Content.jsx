import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";


const courseContent = [
  { title: "Pre Batch Session EBC", time: "15:38" },
  { title: "Orientation Session EBC", time: "02:51:40" },
  { title: "The Poor, The Mediocre, The Rich", time: "00:00" },
  { title: "eBay Account Creation", time: "00:00" },
  { title: "Access to eBay Multiple Account through morelogin (Part 2)", time: "00:00" },
  { title: "Advancement of eBay through AI (ChatGPT, Photoroom, Gemini)", time: "00:00" },
  { title: "Online Arbitrage, All 5 methods of product research", time: "00:00" },
  { title: "Product Research - Part 1 (Dropshipping, White Label, Micro Label)", time: "00:00" },
  { title: "Product Research - Part 2 (Dropshipping, White Label, Micro PL)", time: "02:23:32" },
  { title: "Dropshipping Source Finding & Domestic Source Finding", time: "00:00" },
];

export default function CourseContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto mt-5 p-4 border rounded-xl shadow-lg bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 text-lg font-semibold bg-gray-100 rounded-lg"
      >
        <span className="text-green-600">eBay Training</span>
        {isOpen ? <ChevronDown /> : <ChevronRight />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 overflow-hidden"
          >
            {courseContent.map((item, index) => (
              <li
                key={index}
                className="flex justify-between p-2 border-b last:border-none"
              >
                <span>{item.title}</span>
                <span className="text-gray-500 text-sm">{item.time}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
