"use client";

import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { PiShareFat } from "react-icons/pi";
import { HiOutlineSave } from "react-icons/hi";
import { SiSimpleanalytics } from "react-icons/si";
import { PiStudent } from "react-icons/pi";
import { MdAutorenew } from "react-icons/md";

import Image from "next/image";
import CourseDetails from "@/components/trainings/BlogsDetails";
import CourseEnrollment from "@/components/trainings/CourseEnrollment";
import WhatYouWillGet from "@/components/trainings/Whatyouwillget";
import CourseContent from "@/components/trainings/CourseContent";
import Content from "@/components/trainings/Content";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";


const AddToCart = () => {
  const [selected, setSelected] = useState("course");
  const [trainingInfo, setTrainingInfo] = useState("")
  const params = useParams()

  const {_id} = params;
  console.log(_id)
  

  const images = [
     "/eBay (1).png",
     '/etsy.png',
     "/tt1.png"
  ]

  const trainingNames = [
     "eBay Training",
     'Etsy Training',
     "Tiktok Training"
  ];

  const getOneTraining = async () => {
    try {
      const response = await axios.get(`/api/training/get_trainingById?id=${_id}`);
      console.log(response.data);
      setTrainingInfo(response.data);
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect( () => {
    getOneTraining();
  },[])



    return (
    <div className="container mx-auto py-[45px] px-10 md:py-[55px] md:px-24">
      <div className="flex ">
        <CiStar className="text-orange-300 text-2xl" fill="orange" />
        <CiStar className="text-orange-300 text-2xl" />
        <CiStar className="text-orange-300 text-2xl" />
        <CiStar className="text-orange-300 text-2xl" />
        <CiStar className="text-orange-300 text-2xl" />
      </div>

      <div className="flex justify-between gap-3 mt-3">
        <div className="flex flex-col gap-3">
          {/* <p className="font-bold textGray text-3xl">{trainingNames[id]}</p> */}
          <p className="font-bold textGray text-3xl">ok</p>
          <p className=" text-sm text-gray-400">Uncategorized</p>
        </div>
        <div className="flex gap-2">
          <p className="flex justify-center items-center gap-1 text-gray-400">
            <HiOutlineSave />
            Wishlist
          </p>
          <p className="flex justify-center items-center gap-1 text-gray-400">
            <PiShareFat />
            Share
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-2">
        <div className="lg:w-[70%]">
          <Image
            // src={'/ebay.png'}
            // src={images[id]}
            src={trainingInfo.imageUrl}
            width={400}
            height={300}
            alt="eBay Training"
            className="w-full rounded-lg h-[340px] "
          />
        </div>

        <div className="lg:w-[30%]">
          <div>
            <div className="border border-gray-300 overflow-hidden rounded-xl">
              <div className="flex justify-center items-center flex-col gap-4 py-10 bg-gray-100">
                <p className="font-bold textGray text-2xl">{trainingInfo.trainingPrice}</p>

                <div className="relative group cursor-pointer text-white py-3 bg-[#29ab87]  px-8 hover:bg-white hover:border hover:text-[#29ab87] duration-300 transition-all ease-in-out hover:border-[#29ab87] rounded-full ">
                  {/* Enroll Now */}
                  Add to Cart
                  {/* <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span> */}
                </div>
              </div>
              <div className="p-2 flex flex-col  justify-between gap-3 py-3">
                <p className="flex  gap-2">
                  <SiSimpleanalytics /> All Levels
                </p>
                <p className="flex  gap-2">
                  <PiStudent /> 4 Total Enrolled
                </p>
                <p className="flex  gap-2">
                  <MdAutorenew />
                  August 29, 2024 Last Updated
                </p>
              </div>
            </div>

            <div className="flex border-gray-300 border mt-3 rounded-xl px-2  flex-col gap-4 py-5">
              <p className="font-bold textGray text-xl">A course by</p>

              <p className="flex gap-3 items-center font-black textGray">
                <span className="text-white rounded-full w-[40px] flex items-center justify-center h-[40px] bg-[#29ab87]">
                  E
                </span>
                empowerers
              </p>

              {/* <span className="hidden md:block absolute left-0 bottom-0 w-0 h-[2px] bg-[#77C9B3] transition-all duration-300 group-hover:w-1/2"></span> */}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] lg:w-[70%] mt-5">
        <div className="flex border-b border-gray-300">
          <p
            className={`px-10 py-3 cursor-pointer relative ${
              selected === "course"
                ? "text-[#29ab87] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setSelected("course")}
          >
            Course
            {selected === "course" && (
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#29ab87]"></span>
            )}
          </p>
          <p
            className={`px-10 py-3 cursor-pointer relative ${
              selected === "review"
                ? "text-[#29ab87] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setSelected("review")}
          >
            Review
            {selected === "review" && (
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#29ab87]"></span>
            )}
          </p>
        </div>



        <CourseDetails />
        <CourseEnrollment />
        <WhatYouWillGet />
        <CourseContent />
        <Content />
      </div>
    </div>
  );
};

export default AddToCart;
