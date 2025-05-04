"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Home, LayoutDashboard, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaBlog } from "react-icons/fa6";
import { IoIosLogOut, IoIosMenu } from "react-icons/io";
import { FaEbay, FaEtsy, FaTiktok } from "react-icons/fa";
import useUserStore from "@/store/useUserStore";
import { useRouter } from "next/navigation";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter()
  const {isLogin} = useUserStore();

  

  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Close sidebar when resizing to desktop
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
    { name: "Blog", href: "/dashboard/admin/blog", icon: FaBlog },
    {
      name: "Services",
      href: "/dashboard/admin/services",
      icon: LayoutDashboard,
    },
    {
      name: "Training Menu",
      href: "/dashboard/admin/training/trainingMenu",
      icon: IoIosMenu,
    },
    {
      name: "TikTok Shop Training",
      href: `/dashboard/admin/training/${'tiktok-shop-training'}`,
      icon: FaTiktok,
    },
    {
      name: "eBay Training",
      href: `/dashboard/admin/training/${'ebay-training'}`,
      // href: "/dashboard/admin/training/"
      icon: FaEbay,
    },
    {
      name: "Etsy Training",
      href: `/dashboard/admin/training/${'etsy-training'}`,
      icon: FaEtsy,
    },
    {
      name: "Main Trainings",
      href: `/dashboard/admin/training/${'main'}`,
      icon: FaEtsy,
    },
    {
      name: "Log Out",
      href: "",
      icon: IoIosLogOut,
    },
  ];

  const logout = () => {
    console.log("logOut");
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 shadow-2xl bg-gray-800 text-white rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for Mobile */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64  shadow-2xl text-white bg-white transform ${
          isOpen || !isMobile ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Logo */}
        <div className="p-5">
          <Link href="/" onClick={closeSidebar}>
            <Image
              alt="Hero image"
              src="/empowerer_logo.png"
              className="w-64"
              width={200}
              height={150}
              priority
            />
          </Link>
        </div>

        {/* Menu Items */}
        <nav>
          {menuItems.map((item, index) => (
            <div key={index} onClick={() =>{ closeSidebar(); router.push(item.href)}}>
              <div
                className={`flex items-center space-x-3 px-5 py-3 cursor-pointer ${
                  pathname === item.href
                    ? "bg-[#29ab87] text-white"
                    : "hover:bg-green-200 text-[#29ab87]"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span  onClick={item.name === "Log Out" ? logout : null}>{item.name}</span>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
