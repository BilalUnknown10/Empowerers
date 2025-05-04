"use client";
import { useState } from "react";

const dummyCourses = {
  enrolled: [
    { id: 1, name: "React Fundamentals", description: "Learn React from scratch." },
    { id: 2, name: "Next.js Mastery", description: "Advanced Next.js techniques." },
  ],
  active: [
    { id: 3, name: "JavaScript Basics", description: "Introduction to JavaScript." },
    { id: 4, name: "Tailwind CSS", description: "Master responsive styling." },
  ],
  completed: [
    { id: 5, name: "Node.js Backend", description: "Build scalable backend apps." },
  ],
};

export default function Courses() {
  const [activeTab, setActiveTab] = useState("active");

  const tabs = [
    { id: "enrolled", label: "Enrolled Courses" },
    { id: "active", label: "Active Courses" },
    { id: "completed", label: "Completed Courses" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      {/* Tabs Header */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 text-center py-3 text-lg font-medium transition-colors 
            ${
              activeTab === tab.id
                ? "border-b-2 border-[#239371] text-[#239371]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="p-6 text-center">
        {dummyCourses[activeTab].length === 0 ? (
          <div>
            <img
              src="/empty-mailbox.png"
              alt="No Data"
              className="mx-auto mt-4 w-48"
            />
            <p className="text-gray-500 mt-2">No Data Available in this Section</p>
          </div>
        ) : (
          <div className="space-y-4">
            {dummyCourses[activeTab].map((course) => (
              <div
                key={course.id}
                className="bg-white p-4 shadow-md rounded-md flex flex-col md:flex-row justify-between items-center"
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-700">{course.name}</h3>
                  <p className="text-gray-500 text-sm">{course.description}</p>
                </div>
                <button className="mt-2 md:mt-0 bg-[#239371] text-white px-4 py-2 rounded-md hover:bg-[#1c7c5e] transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
