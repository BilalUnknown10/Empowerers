"use client";

import { useState, useEffect } from "react";
import { VscDash } from "react-icons/vsc";

const CountdownTimer = ({ targetDate, eventName }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center  py-[45px] sm:py-[55px] container mx-auto flex-col md:px-24 gap-5 sm:gap-10 px-10">
      <div className="flex justify-center flex-col sm:flex-row items-center gap-10 ">
        <div className="flex space-x-4 flex-col  gap-2 sm:flex-row text-center text-white text-2xl justify-center items-center font-bold">
          <div>
            <h1 className="font-bold text-xl sm:text-3xl textGray drop-shadow-md ">
              {eventName} : Remaining Time
            </h1>
          </div>
          <div className="flex  ">
            <div className=" border border-gray-800 sm:px-6 sm:py-3 px-2 py-1 rounded-lg">
              <p className="textGray">{timeLeft.days}</p>
              <span className="text-sm textGray">Days</span>
            </div>
            <div className="flex w-[30px] items-center">
              <VscDash className="text-5xl text-[#29ab87]" />
            </div>
            <div className=" border border-gray-800 sm:px-6 sm:py-3 px-2 py-1 rounded-lg">
              <p className="textGray">{timeLeft.hours}</p>
              <span className="text-sm textGray">Hours</span>
            </div>
            <div className="flex w-[30px] items-center">
              <VscDash className="text-5xl text-[#29ab87]" />
            </div>
            <div className=" border border-gray-800 sm:px-6 sm:py-3 px-2 py-1 rounded-lg">
              <p className="textGray">{timeLeft.minutes}</p>
              <span className="text-sm textGray">Minutes</span>
            </div>
            <div className="flex w-[30px] items-center">
              <VscDash className="text-5xl text-[#29ab87]" />
            </div>
            <div className=" border border-gray-800 sm:px-6 sm:py-3 px-2 py-1 rounded-lg">
              <p className="textGray">{timeLeft.seconds}</p>
              <span className="text-sm textGray ">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
