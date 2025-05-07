"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import useUserStore from "@/store/useUserStore";
import {
  FaBars,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaTiktok,
  FaTimes,
  FaYoutube,
  FaMail,
} from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import News from "./News";
import Link from "next/link";
import SaleBanner from "./SaleBanner";
import axios from "axios";
import { IoIosLogOut } from "react-icons/io";
const tools = [
  { label: "eBoss", href: "https://eboss.pk/" },
  { label: "GoLogin", href: "https://gologin.com/register" },
  { label: "ContentStudio", href: "https://contentstudio.io/" },
  { label: "VidIq", href: "https://vidiq.com/LetsEmpower/" },
  {
    label: "ZikAnalytics",
    href: "https://www.zikanalytics.com/pricing/?ReferrerId=244083",
  },
  {
    label: "Payoneer",
    href: "https://payouts.payoneer.com/partners/or.aspx?pid=YOYIZC74IO2s4KZQp7tgsw%3d%3d&utm_source=affiliatesCN&utm_medium=The+Empowerers+LLP&utm_campaign=RevShare&transaction_id=1023e758b6b90485844f115e222099&offer_id=505&aff_id=43090",
  },
  {
    label: "SendInBlue",
    href: "https://www.brevo.com/?tap_a=30591-fb13f0&tap_s=2845714-4d5a62",
  },
  {
    label: "NameCheap",
    href: "https://www.namecheap.com/?clickID=wUowdbwQGxyPU30Q9YR3mQobUkHyjoxXfTJITk0&irgwc=1&utm_source=IR&utm_medium=Affiliate&utm_campaign=3230165&affnetwork=ir&ref=ir",
  },
];

const trainingPrograms = [
  {
    label: "eBay Training",
    url : "eBay-Training"
    // submenu: [
    //   { label: "eBay VBT (Video Based Training)" },
    //   { label: "eBay Incubator Based Training" },
    //   { label: "eBay Business Course - EBC" },
    //   { label: "eBay Crash Course – ECC 3.0" },
    // ],
  },
  {
    label: "TikTok Shop Training",
    url : "TikTok-Shop-Training"
    // submenu: [
    //   { label: "TikTok Shop VBT (Video Based Training)" },
    //   { label: "TikTok Shop Incubator Based Training" },
    //   { label: "TikTok Shop Online Training - TTS" },
    // ],
  },
  {
    label: "Etsy Training",
    url : "Etsy-Training"
    // submenu: [
    //   { label: "Etsy VBT (Video Based Training)" },
    //   { label: "Etsy Incubator Based Training" },
    //   { label: "Etsy Training Program - ETP" },
    // ],
  },
];
// const services = [
//   { label: "eCommerce Consultation" },
//   { label: "Staff Augmentation" },
//   { label: "Managerial Services",
//     submenu : [{label : "ok"}]
//    },
//   { label: "Fulfillment Centers" },
//   {
//     label: "Shared Spaces in Incubators",
//     submenu: [
//       {
//         label: "Multan",
//         submenu: [
//           { label: "Multan Head Office" },
//           { label: "Multan Central Incubator" },
//         ],
//       },
//       { label: "Lahore" },
//       { label: "Faisalabad" },
//       { label: "Rawalpindi" },
//       { label: "Sialkot" },
//       { label: "Sahiwal" },
//       { label: "Swat" },
//     ],
//   },
//   { label: "Social Media Management" },
//   { label: "Artificial Intelligence Services" },
//   { label: "Cyber Security" },
// ];

function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  const hadnleClick = (e) => {
    router.push(e);
  };

  const { isLogin, username, role, setRole, setIsLogin, setUsername } =
    useUserStore();

  const [showServices, setShowServices] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showTraining, setShowTraining] = useState(false);
  const [trainingMenu, setTrainingMenu] = useState([]);

  const getAllServices = async () => {
    try {
      const response = await axios.get('/api/trainingMenu/all_training_menu');
      console.log(response.data);
      setTrainingMenu(response.data);
    } catch (error) {
      console.log(error, "error in get all services in navbar")
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  const trainingPage = (e) => {
    const pageName = e.target.innerHTML;
    const replace = pageName.replace(/\s+/g, "-");
    const lowerCase = replace.toLowerCase();
    router.push(`/trainingPage/${lowerCase}`)
    console.log(lowerCase)
  }

  useEffect(() => {
    setIsLogin(localStorage.getItem("isLogin"));
    setRole(localStorage.getItem("role"));
    setUsername(localStorage.getItem("username"));
  }, []);

  useEffect(() => {
    getAllServices()
    setShowSidebar(false); // Close sidebar on route change
  }, [role]);

  return (
    <>
      <div className=" hidden bg-[#29ab87] font_inter p-2 lg:flex justify-between items-center text-white px-12">
        <div className="flex-1 flex justify-between items-center">
          {/* Email and contact on top bar */}
          <div className="flex gap-5 text-xl">
            <div className="flex items-center gap-1">
              <FaPhoneAlt />
              <p className=" text-[12px] 2xl:text-[15px]">+92 3327195240</p>
            </div>
            <div className="flex items-center gap-1">
              <MdEmail />
              <p className=" text-[12px] 2xl:text-[16px]">
                info@empowerers.com
              </p>
            </div>
          </div>

          {/* Offers div with sliding animation */}
          <div className="text-xl px-3 py-2 text-white overflow-hidden relative w-[40%] xl:w-[50%]">
            <div className="whitespace-nowrap animate-slide  text-[12px] 2xl:text-[16px]">
              Limited Time Offer: <span className="font-bold">20% Off</span> on
              All Courses!
            </div>
          </div>

          {/* Social media Links */}
          <div className="text-xl flex gap-2 xl:gap-4 items-center">
            <Link href={"#"}>
              <FaFacebook />
            </Link>
            <Link href={"#"}>
              <FaLinkedin />
            </Link>
            <Link href={"#"}>
              <FaTiktok />
            </Link>
            <Link href={"#"}>
              <FaYoutube />
            </Link>
            <Link href={"#"}>
              <IoMailSharp />
            </Link>

            {!isLogin ? (
              <div className="border-l-2 border-gray-400 px-3">
                <div className="flex items-center py-1  text-[12px] 2xl:text-[16px] rounded-sm gap-1 text-xl hover:cursor-pointer">
                  <Link href={"/auth/student-registeration"}>Register</Link>
                  <span>/</span>
                  <Link href={"/auth/Login"}>Login</Link>
                </div>
              </div>
            ): <div className="cursor-pointer " onClick={logout}>LogOut</div>}
            {<p>Hi, {username}</p>}
          </div>
        </div>
      </div>
      <div className=" font_inter py-1 shadow-lg">
        <div className=" flex justify-between md:items-center mx-10 lg:mx-16">
          <div className="h-1/2 sm:h-auto">
            <Link href="/">
              <Image
                alt="Hero image"
                src={"/empowerer_logo.png"}
                className="sm:h-auto  h-1/2 w-auto"
                width={200}
                height={150}
                priority
              />
            </Link>
          </div>
          <div className="lg:hidden flex justify-center items-center">
            <FaBars
              onClick={() => setShowSidebar(!showSidebar)}
              className={`text-2xl  cursor-pointer duration-300 ease-in-out ${
                showSidebar ? "rotate-90" : ""
              }`}
            />
          </div>

          <div className="hidden navbar_size lg:flex  list-none justify-center items-center flex-wrap gap-5 md:font-semibold">
            <Link href={"/"}>
              <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
                Home
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>

            <Link href={"/about-us"}>
              <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
                About Us
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setShowTraining(true)}
            >
              <button
                className="cursor-pointer relative text-gray-700  hover:text-[#77C9B3] flex items-center gap-1"
              >
                Training{" "}
                <span className="text-sm">
                  <FaChevronUp
                    className={`${
                      showTraining ? "" : "-rotate-180"
                    } transition-all ease-in-out duration-300`}
                  />
                </span>
              </button>

              <AnimatePresence>
                {showTraining && (
                  <motion.div
                    onMouseLeave={() => setShowTraining(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute  mt-2 top-10 z-50 w-[15vw] left-[-400px] 2xl:left-[-00px]  bg-white shadow-lg rounded-lg p-6"
                  >
                    <div className=" ">
                      {/* {trainingMenu.map((training, index) => ( */}
                      {trainingMenu.map((training, index) => (
                        <div key={index} className="" onClick={ trainingPage
                          // () => (router.push(`/trainingPage/${training.url}`))
                          }>
                          <h3 className="text-[16px] hover:cursor-pointer hover:text-[#77C9B3] mb-2">
                            {/* {training.Training_Menu} */}
                            {training.Training_Menu}
                          </h3>
                          {/* <ul className="space-y-1 list-disc">
                            {training.submenu.map((sub, subIndex) => (
                              <li key={subIndex} className="  ml-4">
                                <p className="text-gray-700 font-normal text-[12px]">
                                  {sub.label}
                                </p>
                              </li>
                            ))}
                          </ul> */}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href={"/ourServices"}>
              <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
                Services
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>

            {/* <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button
                onClick={() => hadnleClick("/ourServices")}
                className="cursor-pointer relative text-gray-700 gap-2 hover:text-[#77C9B3] flex items-center "
              >
                Services
                <span className="text-sm">
                  <FaChevronUp
                    className={`${
                      showServices ? "" : "-rotate-180"
                    } transition-all ease-in-out duration-300`}
                  />
                </span>
              </button>
              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 top-2 z-100 w-56 bg-white shadow-lg rounded-lg"
                  >
                    <ul className="py-2 text-left">
                      {services.map((service, index) => (
                        <li key={index} className="relative group">
                          <div
                            className=" px-4 py-2 text-gray-800 hover:bg-gray-100 flex justify-between items-center cursor-pointer"
                            onMouseEnter={() => {
                              if (service.submenu) setOpenSubmenu(true); setServiceName(service.service);
                            }}
                            onMouseLeave={() => setOpenSubmenu(false)}
                          >
                            {service.service}
                            {service.submenu.length > 0 && (
                              <FaChevronRight className="text-xs" />
                            )}
                          </div>
                          {service.submenu.length > 0 && openSubmenu && service.service === serviceName && (
                            <AnimatePresence>
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-lg"
                              >
                                <ul className="py-2 text-left">
                                  {service.submenu.map((sub, subIndex) => (
                                    <li
                                      key={subIndex}
                                      className="relative text-start group"
                                    >
                                      <div
                                        className=" px-4 py-2 text-gray-800 hover:bg-gray-100 flex justify-between items-center cursor-pointer"
                                        onMouseEnter={() =>
                                          setOpenSubmenu(sub.subservice)
                                        }
                                      >
                                        {sub.subservice}
                                        {sub.submenu && (
                                          <FaChevronRight className="text-xs" />
                                        )}
                                      </div>
                                      {sub.submenu &&
                                        openSubmenu === sub.label && (
                                          <motion.div
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-lg"
                                          >
                                            <ul className="py-2">
                                              {sub.submenu.map(
                                                (nested, nestedIndex) => (
                                                  <li
                                                    key={nestedIndex}
                                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                                  >
                                                    {nested.label}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </motion.div>
                                        )}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            </AnimatePresence>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}

            <Link href={"/gallery"}>
              <li className="relative group cursor-pointer text-gray-700  hover:text-[#77C9B3]">
                Gallery
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>

            <Link href={"/blog"}>
              <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
                Blog
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>
            <Link href={"/contact-us"}>
              <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
                Contact Us
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
              </li>
            </Link>

            <button
              onMouseEnter={() => setShowTools(true)}
              onMouseLeave={() => setShowTools(false)}
              className="cursor-pointer relative text-gray-700 gap-2 hover:text-[#77C9B3] flex items-center gap-1"
            >
              Tools{" "}
              <span className="text-sm">
                <FaChevronUp
                  className={` ${
                    showTools ? "" : "-rotate-180 "
                  } transition-all ease-in-out duration-300`}
                />
              </span>
              <AnimatePresence>
                {showTools && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} // Start hidden and slightly offset
                    animate={{ opacity: 1, y: 0 }} // Animate to fully visible
                    exit={{ opacity: 0, y: 10 }} // Animate out (fade and move down)
                    transition={{ duration: 0.3 }} // Animation duration
                    onMouseEnter={() => setShowTools(true)}
                    onMouseLeave={() => setShowTools(false)}
                    className="absolute left-0 mt-2 top-2 z-100 w-48 bg-white shadow-lg rounded-lg"
                  >
                    <ul className="py-2">
                      {tools.map((service, index) => (
                        <li key={index}>
                          <Link
                            href={service.href}
                            className="block  text-start pl-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <li className="relative group cursor-pointer text-gray-700 hover:text-[#77C9B3]">
              My Account
              <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span>
            </li>
            {role ? <div>
              {role === "student" ?
               <li className="relative group cursor-pointer text-white py-2 bg-[#29ab87] px-5 hover:bg-white hover:border hover:text-[#29ab87] duration-300 transition-all ease-in-out hover:border-[#29ab87] rounded-full ">
                <Link href={`/dashboard/${role}`}>Dashboard</Link>
                {/* <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span> */}
              </li>
            : <li className="relative group cursor-pointer text-white py-2 bg-[#29ab87] px-5 hover:bg-white hover:border hover:text-[#29ab87] duration-300 transition-all ease-in-out hover:border-[#29ab87] rounded-full ">
                <Link href={`/dashboard/${role}`}>Dashboard</Link>
                {/* <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span> */}
              </li>
              }
            </div>:<div></div>}
          </div>
        </div>

        {/* Sidebar */} 
        <div
          className={`fixed top-0 left-0 h-screen w-[80%] max-w-[300px] bg-white shadow-lg transform ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
        >
          <div className="flex justify-end p-4 border-b border-gray-300">
            <button
              onClick={() => setShowSidebar(false)}
              className="text-2xl bg-black text-white p-2 rounded-full"
            >
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col gap-4 p-6 text-lg">
            <Link href="/">
              <li className="hover:text-[#77C9B3]">Home</li>
            </Link>
            <Link href="/about-us">
              <li className="hover:text-[#77C9B3]">About Us</li>
            </Link>
            <Link href="/trainingPage">
              <li className="hover:text-[#77C9B3]">Trainings</li>
            </Link>
            <Link href="/ourServices">
              <li className="hover:text-[#77C9B3]">Services</li>
            </Link>
            <Link href="/gallery">
              <li className="hover:text-[#77C9B3]">Gallery</li>
            </Link>
            <Link href="/blog">
              <li className="hover:text-[#77C9B3]">Blog</li>
            </Link>
            <Link href="/contact-us">
              <li className="hover:text-[#77C9B3]">Contact Us</li>
            </Link>
            <li
              className="relative cursor-pointer"
              onClick={() => setShowToolsDropdown(!showToolsDropdown)}
            >
              Tools
              {showToolsDropdown && (
                <ul className="absolute left-0 top-full bg-white shadow-lg py-2 w-40">
                  <Link href="/tool1">
                    <li className="px-4 py-2 hover:bg-gray-100">Tool 1</li>
                  </Link>
                  <Link href="/tool2">
                    <li className="px-4 py-2 hover:bg-gray-100">Tool 2</li>
                  </Link>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <SaleBanner />
    </>
  );
}

export default Navbar;
