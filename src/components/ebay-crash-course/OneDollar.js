
import { FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function OneDollarChallenge() {
  return (
    <section className="bg-[#222] py-20 px-6 pt-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-[#333] p-10 rounded-xl shadow-lg border border-[#29ab87] text-center"
      >
        <div className="flex justify-center items-center mb-4">
          <div className="bg-green-100 text-[#29ab87] p-4 rounded-full">
            <FaRocket size={28} />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-gray-200">1 Dollar Challenge</h2>
        <p className="text-gray-200 text-lg mb-6">
          Get step-by-step guidance to land your first eBay freelancing client. Join the Facebook group, build your profile, and attract your first dollar!
        </p>
        <button className="bg-[#29ab87] border border-transparent hover:bg-transparent hover:text-[#29ab87] hover:border-[#29ab87] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
          Join Now
        </button>
      </motion.div>
    </section>
  );
}
