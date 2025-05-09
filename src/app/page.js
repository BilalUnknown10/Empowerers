"use client";
import Counter from "@/components/Counter";
import GallerySlider from "@/components/GallrySlider";
import ImageSlider from "@/components/ImageSlider";
import News from "@/components/News";
import StudentSlider from "@/components/StudentSlider";
import { useEffect, useState } from "react";

import { TypeAnimation } from "react-type-animation";
import {
  FaBars,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaTiktok,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import Welcome from "@/components/Home/Welcome";
import Video from "@/components/Home/Video";
import Training from "@/components/Home/Training";
import Services from "@/components/Home/Sevices";
import Blogs from "@/components/Home/Blogs";
import NewsLetter from "@/components/Services/NewsLetter";
import CountdownTimer from "@/components/Home/CountDownTimer";
import axios from "axios";
export default function Home() {
  const [counterStart, setCounterStart] = useState(false);
  const [newStudent, setNewStudent] = useState(0);
  const [eventTime, setEventTime] = useState([]);

  console.log(eventTime)

  console.log(eventTime);
  const EventTime = async () => {
    try {
      const response = await axios.get(`/api/event/get_events`);
      console.log(response.data)
      setEventTime(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    EventTime();

    const handleScroll = () => {
      // console.log("Current Scroll Position:", window.scrollY);

      if (window.scrollY >= 4400) {
        // console.log("trigger");
        setCounterStart(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);


  const newsLogo = [
    "/ary-logo.png",
    "/tbt-logo.jpg",
    "/ptv-logo.png",
    "/top-logo.png",
    "/mux9-logo.png",
    "/rohi-logo.png",
    "/suno-logo.jpg",
    "/dawah-logo.png",
    "/aik-news-logo.jpg",
    "/ridah-oman1-logo.jpg",
    "/lahor-ring.png",
    "/azad-cahiwala-logo.jpg",
    "/news-hd.jpg",
  ];

  const nextImage = () => {
    setNewStudent((prevValue) => prevValue + 1);
    if (newStudent === Students.length - 1) {
      setNewStudent(0);
    }
    console.log("click");
  };
  // console.log(newStudent)

  return (
    <div className="bg-[#fafafa]">
      <div>
        <ImageSlider />
      </div>
      <Welcome />

      {eventTime.length > 0 ? eventTime.map((event) => (
        <CountdownTimer key={event._id} eventName={`${event.name}`} targetDate={`${event.date}T${event.time}`} />
      )) : ""}

      <Video />

      <Training />

      <Services />
      <Blogs />

      <StudentSlider />

      <div className=" mt-[55px] ">
        <div className="text-center font-bold text-2xl sm:text-5xl my-16">
          <h1 className="text-[#29ab87] tracking-wide drop-shadow-lg ">
            Memorable Moments
          </h1>
        </div>
        <div>
          <GallerySlider />
        </div>
      </div>

      <div className="md:my-[55px] w-[70%] mx-auto  hover:shadow-2xl transition-all ease-in-out duration-500 flex justify-center items-center py-20 rounded-lg">
        <iframe
          className="w-[800px] h-[300px] sm:h-[500px]"
          src="https://www.youtube.com/embed/78oNsr98dBY?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fempowerers.co&widgetid=1&forigin=https%3A%2F%2Fempowerers.co%2F&aoriginsup=1&gporigin=https%3A%2F%2Fempowerers.co%2F&vf=1"
          frameBorder="0"
        ></iframe>
      </div>

      <div className="  py-[30px] bg-gray-200 overflow-hidden">
        <div className="flex bg-gray-200 gap-20 px-10 animate-scroll">
          {newsLogo.concat(newsLogo).map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img src={logo} alt="no Image" className="h-[120px] " />
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 10s linear infinite;
            width: max-content; /* Prevent shrinking */
          }
        `}</style>
      </div>
      <NewsLetter />
    </div>
  );
}
