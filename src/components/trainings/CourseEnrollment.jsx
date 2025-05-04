"use client";
import React from "react";

const CourseEnrollment = () => {
  return (
    <div className=" py-10">
      {/* Who Must Enroll */}
      <h2 className="text-4xl font-extrabold textGray mb-4">Who Must Enroll:</h2>
      <ul className="list-decimal ml-6 text-gray-700 space-y-2">
        <li>People entering into the eCommerce business.</li>
        <li>
          Manufacturers of products with eBay potential (e.g., leather products, raw gemstones, Damascus steel, niche-based apparel, etc.).
        </li>
        <li>
          Anyone who wants to learn simple, proven, and profitable ways for massive success on eBay from professionals.
        </li>
        <li>
          Those who want to learn how to sell on eBay the RIGHT way, in a LIVE eBay environment.
        </li>
        <li>
          Those who want to learn profitable strategies and achieve financial success through a legitimate, proven approach.
        </li>
      </ul>

      {/* Requirements */}
      <h2 className="text-4xl font-extrabold textGray mt-10 mb-4">Requirements:</h2>
      <ul className="list-decimal ml-6 text-gray-700 space-y-2">
        <li>Must have access to a computer with a stable internet connection.</li>
        <li>Must be focused on achieving PKR 100,000/month within 6 months after training.</li>
        <li>
          Must have a mindset to become an eCommerce entrepreneur, not just a Virtual Assistant. Willingness to learn through a step-by-step proven system is crucial.
        </li>
        <li>
          An understanding that you are learning from a team of eBay “EXPERTS” who can guide you to success quickly.
        </li>
      </ul>
    </div>
  );
};

export default CourseEnrollment;
