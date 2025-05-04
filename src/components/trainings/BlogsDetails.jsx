"use client";
import React, { useState } from "react";

const CourseDetails = () => {
  const [selectedTab, setSelectedTab] = useState("learn");

  const tabs = [
    { id: "learn", label: "What You will Learn" },
    { id: "enroll", label: "Who Must Enroll" },
    { id: "requirements", label: "Requirements" },
    { id: "benefits", label: "What You will get" },
    { id: "bonus", label: "Bonus" },
    { id: "content", label: "Course Content" },
  ];

  return (
    <div className=" py-10">
      {/* Title */}
      <h2 className="text-2xl textGray font-bold mb-4">About Course</h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              selectedTab === tab.id
                ? "bg-green-300 text-gray-800 shadow-md"
                : "bg-green-200 text-gray-600"
            } transition-all`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6">
        <h1 className="text-4xl textGray font-extrabold text-gray-900">
          What You Will Learn in it:
        </h1>

        <p className="text-lg font-bold mt-3 text-gray-900">
          LEARN TOP ETHICAL SECRETS AND HACKS TO GROW YOUR EBAY BUSINESS AND
          TOUCH PKR 100,000/ MONTH IN JUST 6 MONTHS (if you follow all steps)
        </p>

        <ul className="list-decimal ml-6 mt-4 text-gray-700 space-y-2">
          <li>
            Practice tons of insider tips, tricks, and strategies that will help
            you be super-successful on eBay from the team of 9 highly
            professional and expert Trainers of EMPOWERERS. These trainers have
            a proven record of more than $5 Million eBay sales.
          </li>
          <li>
            Learn how to do eBay business the RIGHT way for maximum sales,
            profits, and income. Either through eBay freelancing, selling your
            own products, or services.
          </li>
          <li>
            How easily you can sell your products on eBay and then you will
            graduate to having a full-blown eBay business.
          </li>
          <li>
            Learn little-known eBay “hacks” from a proven team of trainers who
            have helped over 30,000 people to learn how to sell on eBay – with
            6-figure income.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
