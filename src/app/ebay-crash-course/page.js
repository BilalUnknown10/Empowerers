'use client';

import { motion } from "framer-motion";
import Header from "@/components/ebay-crash-course/Header";
import AsSeenOn from "@/components/ebay-crash-course/AsSeenOn";
import CallToAction from "@/components/ebay-crash-course/CallToAction";
import EarlyBirdDiscount from "@/components/ebay-crash-course/EarlyBirdDiscount";
import FAQ from "@/components/ebay-crash-course/FAQ";
import Testimonials from "@/components/ebay-crash-course/Testimonials";
import VideoSection from "@/components/ebay-crash-course/VideoSection";
import BonusSection from "@/components/ebay-crash-course/BonusSection";
import Assignments from "@/components/ebay-crash-course/Assignments";
import HoverCardModule from "@/components/ebay-crash-course/HoverCardModule";
import OneDollarChallenge from "@/components/ebay-crash-course/OneDollar";
import LearningSection from "@/components/ebay-crash-course/LearningModule";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#222] text-white">
      <Header />
    
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <VideoSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <AsSeenOn />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <EarlyBirdDiscount />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <LearningSection/>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <HoverCardModule/>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
      <Assignments/>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <BonusSection/>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
      <OneDollarChallenge/>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <FAQ />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <CallToAction />
      </motion.div>
    </div>
  );
}
