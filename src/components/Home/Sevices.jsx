import React from "react";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaBriefcase,
  FaChalkboardTeacher,
  FaMarkdown,
  FaPeopleCarry,
  FaRegBuilding,
  FaStreetView,
} from "react-icons/fa";
const ourServicesLeft = [
  {
    icon: <FaChalkboardTeacher className="w-10 h-10 text-[#29ab87]" />,
    text: "eCommerce Consultancy",
  },
  {
    icon: <FaRegBuilding className="w-10 h-10 text-[#29ab87]" />,
    text: "Staff Augmentation | (eBay, ETSY, Tiktok Shop)",
  },
  {
    icon: <FaBriefcase className="w-10 h-10 text-[#29ab87]" />,
    text: "Managerial Services | (eBay, ETSY, Tiktok Shop)",
  },
];

const ourServicesRight = [
  {
    icon: <FaPeopleCarry className="w-10 h-10 text-[#29ab87]" />,
    text: "Fulfillments Centers",
  },
  {
    icon: <FaStreetView className="w-10 h-10 text-[#29ab87]" />,
    text: "Shared Spaces in incubators",
  },
  {
    icon: <FaMarkdown className="w-10 h-10 text-[#29ab87]" />,
    text: "Social Media Management",
  },
];

const Sevices = () => {
  return (
    <div className="bg-[#ecf0ea] md:py-[55px] py-[45px]">
      <div className=" md:px-24 container mx-auto px-10">
        <div className="text-center font-bold lg:hidden  flex justify-center mt-[45px] text-2xl sm:text-5xl">
          <h1 className="text-[#29ab87] tracking-wide drop-shadow-lg ">
          Our Services
          </h1>
        </div>
        <div className=" sm:my-10  mb-[45px] sm:mb-0 flex  justify-between items-center gap-16 relative">
          <div className="absolute border lg:flex  hidden border-gray-400 w-[100px] rotate-30 top-1/3 left-[20vw] -translate-y-1/2"></div>
          <div className="absolute border lg:flex  hidden border-gray-400 w-[90px] rotate-0 top-1/2 left-[20vw] -translate-y-1/2"></div>
          <div className="absolute border lg:flex  hidden border-gray-400 w-[100px] rotate-150 top-[70%] left-[20vw] -translate-y-1/2"></div>

          <div className="absolute border lg:flex  hidden border-gray-400 w-[100px] -rotate-30 top-1/3 right-[20vw] -translate-y-1/2"></div>
          <div className="absolute border lg:flex  hidden border-gray-400 w-[90px] rotate-0 top-1/2 right-[20vw] -translate-y-1/2"></div>
          <div className="absolute border lg:flex  hidden border-gray-400 w-[100px] -rotate-150 top-[70%] right-[20vw] -translate-y-1/2"></div>

          <div className=" w-1/2 lg:w-[30%]">
            {ourServicesLeft.map((leftData, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center flex-col-reverse items-center  h-[150px]"
                >
                  <h1 className="text-2xl text-center">
                    {leftData.text.split("|").map((line, index) => (
                      <span
                        className="text-[16px] sm:text-[18px] text-center"
                        key={index}
                      >
                        {line}
                      </span>
                    ))}
                  </h1>
                  <div>{leftData.icon}</div>
                </div>
              );
            })}
          </div>
          <div className="w-[40%] lg:flex hidden justify-center items-center">
            <div
              className="w-[350px] h-[350px] border border-gray-200 rounded-full flex items-center justify-center bg-[#ecf0ea]"
              style={{
                boxShadow:
                  "inset 0 20px 15px rgba(0, 0, 0, 0.03), inset 0 -20px 15px rgba(0, 0, 0, 0.03), inset 20px 0 15px rgba(0, 0, 0, 0.03), inset -20px 0 15px rgba(0, 0, 0, 0.03)",
              }}
            >
              <h1 className="text-2xl sm:text-4xl font-bold tracking-wide text-[#29ab87] drop-shadow-lg">
                Our Services
              </h1>
            </div>
          </div>

          <div className=" w-1/2 lg:w-[30%]">
            {ourServicesRight.map((leftData, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center flex-col items-center  h-[150px]"
                >
                  <div>{leftData.icon}</div>
                  <h1 className="text-[16px[ sm:text-[18px] text-center">
                    {leftData.text}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        {/* {counterStart ? <div className="md:flex md:justify-between flex-wrap gap-10">
        <Counter value={1400} Data={"Students"}/>
        <Counter value={100} Data={"Meetup in 3 Months"}/>
        <Counter value={200} Data={"Satisfied Clients"}/>
        <Counter value={20} Data={"Fullfilment Centers In UK, US, and AUS"}/>
      </div> : ""*/}
      </div>
    </div>
  );
};

export default Sevices;
