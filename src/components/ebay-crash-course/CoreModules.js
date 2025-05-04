'use client';

import { useState } from 'react';
import {
  FaBookOpen,
  FaGift,
  FaTasks,
  FaBullhorn,
  FaDollarSign,
  FaUsers,
} from 'react-icons/fa';

import { motion, AnimatePresence } from 'framer-motion';

const coreModules = [
  {
    heading: 'Module 1: Setting up the Right Mindset – Strategy Session',
    description:
      'Start your journey with the right mindset! This session helps you develop a strategic approach and goal-oriented thinking needed for success on eBay.',
  },
  {
    heading: 'Module 2: eBay Account Creation',
    description:
      'Learn how to create your eBay account step by step, set it up properly, and apply key settings to avoid common early mistakes that can impact your account health.',
  },
  {
    heading: 'Module 3: Product Research (Dropshipping, White Label)',
    description:
      'Learn how to research winning products for the USA market, using practical criteria for Dropshipping & White Label product selection.',
  },
  {
    heading: 'Module 4: eBay Listing Creation',
    description:
      'Master SEO-based product listings with the right titles, images, and descriptions that attract more buyers and boost sales.',
  },
  {
    heading: 'Module 5: Pakistan-Based Product Sourcing',
    description:
      'Find products locally in Pakistan and learn how to sell them profitably on international markets using eBay.',
  },
  {
    heading: 'Module 6: eBay Order Processing',
    description:
      'Manage order processing and delivery time to maintain high performance and avoid defects.',
  },
  {
    heading: 'Module 7: Printing Shipping Labels from eBay',
    description:
      'Learn step-by-step how to print shipping labels directly from eBay for smooth and organized dispatching.',
  },
  {
    heading: 'Module 8: eBay Stock Product Research',
    description:
      'Find profitable stock products with strong demand. Analyze market trends and competition to make smart sourcing decisions.',
  },
  {
    heading: 'Module 9: eBay Stock Product Sourcing',
    description:
      'Source winning products from the right suppliers. Negotiate prices, manage quality, and ensure steady supply for profitability.',
  },
  {
    heading: 'Module 10: Advanced eBay Customer Support, Case Handling & Account Health',
    description:
      'Handle customer messages, resolve cases, and maintain strong account health like a pro.',
  },
];

const assignments = [
  {
    heading: 'Assignment 1: Artificial Intelligence for eBay',
    description:
      'Use ChatGPT prompts for product research, listing, and support. Submit for expert feedback.',
  },
  {
    heading: 'Assignment 2: White Label Product Hunting',
    description:
      'Find a profitable product using taught criteria from Module 3. Submit your research for review.',
  },
  {
    heading: 'Assignment 3: Pakistan-Based Product Hunting',
    description:
      'Hunt a product from the local market and suggest sourcing options. Get expert feedback.',
  },
];

const firstDollar = [
  {
    heading: '1 Dollar Challenge',
    description:
      'Get step-by-step guidance to land your first eBay freelancing client. Watch Bonus 3, join the Facebook group, build your profile, brand yourself, and start attracting clients—and dollars!',
  },
];

const communityAccess = [
  {
    heading: 'Private Group',
    description:
      'Join our Facebook community to connect, share wins, ask questions, and grow together!',
  },
];


// export default function CoreModules() {
//   return (
//     <section className="py-10 px-6 md:px-20 bg-[#2e2e2e] text-white">
//       {/* Welcome Note */}
//       <motion.div
//         className="text-center mb-10"
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold mb-3 flex justify-center items-center gap-2">
//           <FaBullhorn className="text-[#29ab87] text-2xl" /> Welcome to ECC 3.0!
//         </h2>
//         <p className="text-lg leading-relaxed max-w-3xl mx-auto">
//           What exactly you will learn in this training.
//         </p>
//       </motion.div>

//       <div className="space-y-10">
//         <SectionBox icon={<FaBookOpen />} title="10 Core Modules" items={coreModules} />
//         {/* <SectionBox icon={<FaGift />} title="3 Exclusive Bonuses" items={bonuses} /> */}
//         <SectionBox icon={<FaTasks />} title="3 Assignments" items={assignments} />
//         <SectionBox icon={<FaDollarSign />} title="First Dollar Challenge" items={firstDollar} />
//         <SectionBox icon={<FaUsers />} title="Private Community Access" items={communityAccess} />
//       </div>
//     </section>
//   );
// }

export default function CoreModules() {
  const [openIndex, setOpenIndex] = useState(null); // track which accordion is open

  return (
    <section className="py-10 px-6 md:px-20 bg-[#2e2e2e] text-white">
      {/* Welcome Note */}
      <motion.div className="text-center mb-10" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-3 flex justify-center items-center gap-2">
          <FaBullhorn className="text-[#29ab87] text-2xl" /> Welcome to ECC 3.0!
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          What exactly you will learn in this training.
        </p>
      </motion.div>

      <div className="space-y-10">
        <SectionBox icon={<FaBookOpen />} title="10 Core Modules" items={coreModules} openIndex={openIndex} setOpenIndex={setOpenIndex} isAccordion />
        <CardSection icon={<FaTasks />} title="3 Assignments" items={assignments} />
        <CardSection icon={<FaDollarSign />} title="First Dollar Challenge" items={firstDollar} />
        <CardSection icon={<FaUsers />} title="Private Community Access" items={communityAccess} />
      </div>
    </section>
  );
}

function SectionBox({ icon, title, items, isAccordion = false, openIndex, setOpenIndex }) {
  return (
    <motion.div className="border rounded-xl shadow-md overflow-hidden" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
      <div className="bg-[#29ab87] text-white text-center py-2 font-semibold text-lg flex justify-center items-center gap-2">
        {icon}
        {title}
      </div>
      <div className="text-white bg-[#333] px-4 py-4 space-y-2">
        {isAccordion
          ? items.map((item, index) => (
              <Accordion
                key={index}
                heading={item.heading}
                description={item.description}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))
          : null}
      </div>
    </motion.div>
  );
}
function Accordion({ heading, description, isOpen, onClick }) {
  return (
    <div className="border-b py-2">
      <button onClick={onClick} className="w-full text-left flex justify-between items-center font-semibold text-sm md:text-base">
        {heading}
        <span className="text-xl text-[#29ab87]">{isOpen ? '-' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            className="mt-2 text-sm md:text-base text-white whitespace-pre-line"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
function CardSection({ icon, title, items }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
      <div className="bg-[#29ab87] text-white text-center py-2 font-semibold text-lg flex justify-center items-center gap-2 rounded-t-xl">
        {icon}
        {title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#1f1f1f] p-4 rounded-b-xl">
        {items.map((item, index) => (
          <div key={index} className="bg-[#333] rounded-lg p-4 border border-[#444] shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-base font-semibold mb-2">{item.heading}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}




// update 1
// function SectionBox({ icon, title, items }) {
//   return (
//     <motion.div
//       className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl shadow-xl overflow-hidden border border-[#3e3e3e]"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//     >
//       <div className="bg-[#29ab87] text-white py-3 px-5 font-bold text-lg flex items-center gap-3">
//         <div className="bg-white text-[#29ab87] p-2 rounded-full">{icon}</div>
//         <span>{title}</span>
//       </div>

//       <div className="p-6 grid md:grid-cols-2 gap-6">
//         {items.map((item, index) => (
//           <Accordion key={index} heading={item.heading} description={item.description} />
//         ))}
//       </div>
//     </motion.div>
//   );
// }
// function Accordion({ heading, description }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-[#2a2a2a] rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-[#3a3a3a]">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex justify-between items-center text-left font-medium text-white text-sm md:text-base"
//       >
//         <span className="mr-4">{heading}</span>
//         <span className="text-[#29ab87] text-2xl">{isOpen ? '−' : '+'}</span>
//       </button>
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.p
//             className="mt-3 text-gray-300 text-sm md:text-base"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {description}
//           </motion.p>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }



// function SectionBox({ icon, title, items }) {
//   return (
//     <motion.div
//       className="border rounded-xl shadow-md overflow-hidden"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//     >
//       <div className="bg-[#29ab87] text-white text-center py-2 font-semibold text-lg flex justify-center items-center gap-2">
//         {icon}
//         {title}
//       </div>
//       <div className="text-white bg-[#333] px-4 py-4 space-y-2">
//         {items.map((item, index) => (
//           <Accordion key={index} heading={item.heading} description={item.description} />
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function Accordion({ heading, description }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b py-2">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full text-left flex justify-between items-center font-semibold text-sm md:text-base"
//       >
//         {heading}
//         <span className="text-xl text-[#29ab87]">{isOpen ? '-' : '+'}</span>
//       </button>
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.p
//             className="mt-2 text-sm md:text-base text-white whitespace-pre-line"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {description}
//           </motion.p>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }