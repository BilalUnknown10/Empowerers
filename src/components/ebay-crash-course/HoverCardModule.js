import React, { useState } from 'react';
import { FaBookOpen } from 'react-icons/fa';


const modules = [
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
    heading:
      'Module 10: Advanced eBay Customer Support, Case Handling & Account Health',
    description:
      'Handle customer messages, resolve cases, and maintain strong account health like a pro.',
  },
];

export default function HoverCardModule() {
  return (
    <section className="bg-[#333] py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold flex justify-center items-center gap-3 text-white">
            <FaBookOpen className="text-[#29ab87] text-4xl" />
            10 Core Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-[#222] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 group"
            >
              <div className="p-6 flex flex-col justify-start min-h-[180px]">
                <h3 className="text-xl font-semibold text-[#29ab87] mb-2">
                  {module.heading}
                </h3>

                {/* Mobile: Always show description */}
                <p className="text-white md:hidden">
                  {module.description}
                </p>

                {/* Desktop: Show only on hover */}
                <p className="text-white opacity-0 hidden md:block group-hover:opacity-100 transition-opacity duration-300">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



