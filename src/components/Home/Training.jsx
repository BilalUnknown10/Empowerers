"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
const outTrainings = [
  {
    id : 0,
    img: "/trainingEbay.jpg",
    text: "eBay Training",
    features: [
      "25 eBay Sessions* (A to Z) with Practical Demonstrations",
      "1-Year Access* to Recorded Sessions",
      "Exclusive WhatsApp & Facebook Groups* (1 Year)",
      "Dedicated Support* (1 Year)",
      "Incubator Visit Access* (1 Year)",
    ],
  },
  {
    id : 1,
    img: "/trainingEtsy.jpg",
    text: "Etsy Training",
    features: [
      "16 Etsy Sessions* (A to Z)",
      "1-Year Recording Access*",
      "Dedicated WhatsApp & Facebook Groups",
      "Technical Support Access",
      "Warehouse Access",
    ],
  },
  {
    id : 2,
    img: "/trainingTiktok.jpg",
    text: "Tik Tok Shop Training",
    features: [
      "18 TikTok Sessions* (A to Z)",
      "90+ Hours of Video Lectures",
      "1-Year Recording Access",
      "Dedicated Technical Support*",
      "Access to Empowerers Stock Products",
    ],
  },
];

const Training = () => {

  const router=useRouter();
  const [mainTrainings, setMainTrainings] = useState([]);

  const getTrainings = async () => {
    try {
      const response = await axios.post(`/api/training/get_training_name?trainingCategory=${'main-training'}`);
      console.log(response.data);
      setMainTrainings(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data)
    }
  };

  const moreTrainings = (e) => {
    const trainingNameToLowerCase = e.toLowerCase();
    const convertToArray  = trainingNameToLowerCase.split(" ");
    const createUrl = convertToArray.join("-");
    router.push(`/trainingPage/${createUrl}`);

  }

  useEffect(() => {
    getTrainings();
  },[]);
  return (
    <div id="training">
      <div className="  container mx-auto py-[45px] px-10 md:py-[55px] md:px-24">
        <div className="flex justify-center   flex-col gap-4 sm:gap-8 items-center  ">
          <h1 className="md:text-5xl text-[#29ab87] text-2xl drop-shadow-lg font-bold">
            Our Training
          </h1>
          <button onClick={()=>router.push('/trainingPage')} className="md:text-[15px] font-semibold md:tracking-wide border hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full px-5 text-[#4a4d48] bg-transparent hover:text-[#29ab87] mt-[-15px]  md:px-10 py-2">
            Explore More 
          </button>
        </div>
        <div className="md:flex md:justify-between mt-10 gap-5 lg:flex-row flex-col  ">
          {mainTrainings.map((data, index) => {
            return (
              <div
                key={index}
                // onClick={() => router.push(`/ebay-training/${data._id}`)}
                onClick={() => {moreTrainings(data.trainingName)}}
                className=" border lg:w-1/3 border-gray-300 hover:shadow-2xl transition-all ease-in-out duration-300 rounded-2xl bg-white overflow-hidden  mt-5 sm:mt-0 flex flex-col min-h-[250px]"
              >
                <img
                  src={`${data.imageUrl}`}
                  alt="no Image"
                  className="hover:cursor-pointer rounded-t-md"
                />
                <div className="mx-auto my-5 font-bold text-xl">
                  {data.trainingName}
                </div>
                <div className=" m-4">
                  {/* {data.features.map((features, index) => { */}
                  {data.trainingDetails.map((features, index) => {
                    return (
                      <ul key={index} className="mb-2 list-disc ml-5">
                        <li className="text-[16px]">{features}</li>
                      </ul>
                    );
                  })}
                </div>
                <button onClick={()=>router.push('/trainingPage')} className=" text-lg bg-[#29ab87] shadow-2xl hover:cursor-pointer text-white tracking-wide font-bold mt-auto py-2 rounded-lg m-2">
                  Enrolled Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Training;
