"use client"; 

import React from "react";
import { 
  mdiMonitor, 
  mdiAccountCircle, 
  mdiBookOpenPageVariant, 
  mdiHeart, 
  mdiClipboardText, 
  mdiChartBar, 
  mdiCommentQuestion, 
  mdiLogout, 
  mdiBackspace
} from "@mdi/js";
import { useRouter, usePathname } from "next/navigation"; 
import Link from "next/link";

const studentMenu = [
  { href: "/dashboard/student", icon: mdiMonitor, label: "Dashboard" },
  { href: "/dashboard/student/profile", icon: mdiAccountCircle, label: "My Profile" },
  { href: "/dashboard/student/courses", icon: mdiBookOpenPageVariant, label: "Enrolled Courses" },
  { href: "/dashboard/student/wishlist", icon: mdiHeart, label: "Wishlist" },
  { href: "/dashboard/student/quiz", icon: mdiClipboardText, label: "My Quiz Attempts" },
  { href: "/", icon: mdiBackspace, label: "Back" },
  // { href: "/orderHistory", icon: mdiChartBar, label: "Order History" },
  // { href: "/QA", icon: mdiCommentQuestion, label: "Question & Answer" },
];

// Inline Icon Component
const Icon = ({ path, size = 20, className = "" }) => (
  <span className={`inline-flex justify-center items-center ${className}`}>
    <svg viewBox="0 0 24 24" width={size} height={size} className="inline-block">
      <path fill="currentColor" d={path} />
    </svg>
  </span>
);

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current active route

  return (
    <aside className="lg:w-60 flex z-40 top-0 md:h-auto lg:h-full bg-white">
      <div className="flex-1 flex flex-row lg:flex-col  overflow-hidden">
        <ul className="flex-1 overflow-y-auto">
          {studentMenu.map((item, index) => {
            const isActive = pathname === item.href; // Check if the item is active
            return (
              <Link href={item.href} 
                key={index} 
                className={`px-6 py-3 flex items-center cursor-pointer 
                  ${
                    isActive 
                      ? "bg-[#239371] text-white hover:bg-[#395bca]"  // Active item (hover changes background)
                      : "hover:bg-[#e9f4f1] text-black" // Inactive item (hover changes background)
                  }`
                }
              >
                <Icon path={item.icon} className="w-8 h-8 mr-3 text-[#239371] " />
                <a href={item.href} className="text-sm">{item.label}</a>
              </Link>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
