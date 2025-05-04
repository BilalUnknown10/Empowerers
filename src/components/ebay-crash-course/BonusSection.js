import { motion } from "framer-motion";
import { FaRobot, FaMoneyBillWave, FaFacebookF } from "react-icons/fa";

const bonuses = [
  {
    icon: <FaRobot className="text-4xl text-blue-500" />,
    title: "Advancements of eBay through AI (ChatGPT, Photoroom, Gemini)",
    description:
      "Learn how to leverage AI tools to enhance your eBay listings and improve efficiency, giving you a competitive edge in the marketplace.",
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-green-500" />,
    title: "Financial Closing + Strategies to Grow Your eBay Business",
    description:
      "Master the process of financial closing and discover key strategies to increase your profitability, streamline operations and scale your eBay business to new heights.",
  },
  {
    icon: <FaFacebookF className="text-4xl text-blue-700" />,
    title: "Client Acquisition through Facebook",
    description:
      "Uncover effective strategies for using Facebook to generate leads, build relationships, and acquire potential clients.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export default function BonusSection() {
  return (
    <div className="bg-[#333] text-white pt-20 pb-10 text-center relative z-10">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-snug">
          You&apos;ll Also Get Bonus That <br /> You Won&apos;t Believe!
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto -mb-32 px-4">
        {bonuses.map((bonus, i) => (
          <motion.div
            key={i}
            className="bg-[#222] text-gray-200 p-6 rounded shadow-lg flex flex-col gap-4"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={cardVariants}
          >
            <div className="flex items-start gap-4">
              <div className="pt-1">{bonus.icon}</div>
              <div className="text-base font-semibold">{bonus.title}</div>
            </div>
            <p className="text-gray-200">{bonus.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
