import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="container mx-auto ">
      {" "}
      <div className="flex justify-center lg:flex-row flex-col-reverse items-center lg:gap-10 my-[45px] sm:my-[55px] px-10 md:px-24 ">
        <div className="lg:w-1/2">
          <img src="/about.png" alt="Service Image" />
        </div>
        <div className=" lg:w-1/2 flex justify-center items-center lg:justify-start lg:items-start flex-col p-5 gap-5">
          <h1 className="text-2xl sm:text-5xl text-[#29AB87] text-center lg:text-start drop-shadow-md font-bold ">
            We have years of work experience
          </h1>
          <p className="text-[18px] text-center lg:text-start ">
            Being the pioneer organization in the eBay marketplace education in
            Pakistan, to date, Empowerers is considered the most detailed and
            most advanced organization in the knowledge and skills of the eBay
            marketplace.
          </p>
          <div className="flex justify-center sm:justify-start items-center sm:items-start flex-1 flex-col"> 
            <h1 className="sm:text-5xl text-2xl text-[#29AB87] text-center lg:text-start  font-bold">Values</h1>
            <ul className="mt-3 space-y-2">
              {[
                "Continuous improvement",
                "Collective Growth",
                "Professionalism",
                "Excellence",
                "Fun",
              ].map((value, index) => (
                <li key={index} className="flex items-center text-center lg:text-start text-gray-700">
                  <FaChevronDown className="mr-2 bg-[#29AB87] text-white rounded-full text-lg p-[2px]" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
