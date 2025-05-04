'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';




const ourTrainings = [
  {
    id: 0,
    img: "/trainingEbay.jpg",
    text: "eBay Training",
    url: "eBay-Training",
    features: [
      "25 eBay Sessions* (A to Z) with Practical Demonstrations",
      "1-Year Access* to Recorded Sessions",
      "Exclusive WhatsApp & Facebook Groups* (1 Year)",
      "Dedicated Support* (1 Year)",
      "Incubator Visit Access* (1 Year)",
    ],
  },

      {
    id: 0,
    img: "/EBAY-VBT.jpg",
    text: "Video Based Training",
    url: "eBay-Training",
    features: [
      "90+ Hours of Recorded Content",
      "Complete A to Z eBay Business Guide",
      "Covers 4 Business Models in detail",
      "Market Focus: USA, UK, AUS",
      "Deep Product Research, Pricing, Branding & SEO and more",
      "Guaranteed Updated Content",
      "Access to Empowerers Facebook Community"
    ],
  },

        {
    id: 0,
    img: "/EBAY-EBC.jpg",
    text: ". eBay Business Course – Zoom-Based Training",
    url: "eBay-Training",
    features: [
      "2-Month Training Program",
      "25+ Live Sessions ",
      "Live Practical Demonstrations in each session",
      "1-Year Access to Recordings (VBT)",
      "Dedicated Support Leader for Technical Assistance",
      "1-Year Ongoing Support",
      "Dedicated Exclusive WhatsApp Group",
      "Private Facebook Group"
    ],
  },

    {
    id: 0,
    img: "/EBAY-IBT.jpg",
    text: "Incubator Based Training",
    url: "eBay-Training",
    features: [
      "2-Month Training Program",
      "1-Year Access to VBT (Recorded Course)",
      "Covers 4 eBay Business Models with practical",
      "Access to Empowerers Warehouses for Stock",
      "Exclusive WhatsApp & Facebook Support Groups",
    ],
  },

        {
    id: 0,
    img: "/EBAY-E-ABC.jpg",
    text: "eBay Australia Boot Camp Zoom Based Training",
    url: "eBay-Training",
    features: [
      "12 Live Sessions with Hands-On Training using Real eBay Accounts",
      "Session Recordings (VBT) for Future Reference",
      "Support from Experienced Leaders",
      "Live Q&A Sessions for Instant Clarifications",
      "Dedicated WhatsApp/Facebook Group for Ongoing Assistance",
      "Dedicated Exclusive WhatsApp Group",
      "Access to Empowerers Stock Products"
    ],
  },
 
          {
    id: 0,
    img: "/EBAY-ECC.jpg",
    text: "ECC – eBay Crash Course (3.0)",
    url: "eBay-Training",
    features: [
      "Short Duration, Power-Packed Sessions",
      "10 Core Modules",
      "3 Bonus Modules",
      "3 Practical Assignments",
      "Fast-Paced Recorded Videos – Perfect for busy individuals ",
      "First Dollar Challenge – Earn your first dollar online ",
      "Growth Secret – Unveil the roadmap to becoming an eBay expert"
    ],
  },

 
  {
    id: 1,
    img: "/ETP-Zoom-Based.jpg",
    text: "Etsy Zoom Based Training",
    url: "Etsy-Training",
    features: [
      "2-Month Intensive Program",
      "Practical Assignments",
      "1-Year Access to VBT (Video Training)",
      "Lifetime Access to Updated Content",
      "Empowerers Product Stock Access",
      "Private Community & WhatsApp Group",
      "One Year Post-Course Support"
    ],
  },

  {
    id: 1,
    img: "/ETP-VBT.jpg",
    text: "Etsy Video Based Training",
    url: "Etsy-Training",
    features: [
      "55+ Hours of High-Quality Recorded Sessions",
      "Etsy Store Setup + SEO Optimization",
      "Product Research, Pricing, Branding & Marketing",
      "Full guidance on Digital & Physical Product Selling",
      "Empowerers Private Community for Continuous Support",
    ],
  },

    {
    id: 1,
    img: "/ETP-IBT.jpg",
    text: "Etsy Incubator Based Training",
    url: "Etsy-Training",
    features: [
      "2-Month Based Incubator Training",
      "Practical assignments ",
      "one-on-one mentorship",
      "1-Year Access to VBT",
      "Lifetime Content Updates",
      "Empowerers stock access",
      "Private Community & WhatsApp Group"
    ],
  },


  
  {
    id: 2,
    img: "/trainingTiktok.jpg",
    text: "TikTok Zoom Based Training",
    url: "TikTok-Shop-Training",
    features: [
      "2-Month Intensive Program",
      "Practical Assignments",
      "1-Year Access to VBT (Video Training)",
      "Lifetime Access to Updated Content",
      "Empowerers Product Stock Access",
      "Private Community & WhatsApp Group",
      "Hotline Support for TikTok Issues"
    ],
  },
  
   {
    id: 2,
    img: "/TTS-VBT.jpg",
    text: "TikTok Video Based Training",
    url: "TikTok-Shop-Training",
    features: [
      "90+ Hours of Video Lectures",
      "1-Year Recording Access",
      "Step-by-step TikTok Shop setup & selling guide",
      "Learn product hunting, order management, marketing & more",
    ],
  },

   {
    id: 2,
    img: "/TTS-IBT.jpg",
    text: "TikTok Incubator Based Training",
    url: "TikTok-Shop-Training",
    features: [
      "2-Month Intensive Training Program",
      "Mentorship & One-on-One Support",
      "Networking Opportunities",
      "Lifetime Access to Updated Content",
      "Empowerers Product Stock Access",
      "Private Facebook Community & WhatsApp Group"

    ],
  },
];



function Page() {
  const [trainings, setTrainings] = useState([]);

  const params = useParams();
  const router = useRouter();

  const label = params.label;
  const labelLowerCase = label.toLowerCase();

  const convert = label.replace(/-/g, " ");
  const labelUpperCase = convert.toUpperCase();
  // console.log(labelUpperCase)


  const getTrainingByName = async () => {
  try {
    const response = await axios.post(`/api/training/get_training_name?trainingCategory=${labelLowerCase}`);
    setTrainings(response.data);
  } catch (error) {
    console.log(error.response.data)
  }
}

useEffect( () => {
  getTrainingByName();
  // if(trainings.length > 0) trainingNameToUpperCase();
},[label]);

  return (
    <div className='my-20'>
    <div className='text-center'>
       <h1 className="md:text-5xl text-[#29ab87] text-2xl drop-shadow-lg font-bold">
            {labelUpperCase} 
          </h1>
    </div>
    <div className="md:flex my-12 px-10 md:mx-10  gap-5 lg:flex-row flex-wrap flex-col">
       {
      //  ourTrainings
        // .filter(data => data.url === label)
        trainings.map((data, index) => (
        
          <div
            key={index}
            className="border my-5 lg:w-[400px] border-gray-300 hover:shadow-2xl transition-all ease-in-out duration-300 rounded-2xl bg-white overflow-hidden mt-5 sm:mt-0 flex flex-col min-h-[250px]"
          >
            <img
              src={data.imageUrl}
              alt="Training"
              className="hover:cursor-pointer h-[200px] rounded-t-md"
            />
            <div className="mx-auto my-5 font-bold text-xl">{data.trainingName}</div>
            <div className="m-4">
              {/* {data.features.map((feature, i) => ( */}
              {data.trainingDetails.map((feature, i) => (
                <ul key={i} className="mb-2 list-disc ml-5">
                  <li className="text-[16px]">{feature}</li>
                </ul>
              ))}
            </div>
             <button onClick={()=>router.push(`/ebay-training/${data._id}`)} className=" text-lg bg-[#29ab87] shadow-2xl hover:cursor-pointer text-white tracking-wide font-bold mt-auto py-2 rounded-lg m-2">
                  Enrolled Now
                </button>
          </div>
        ))}
    </div>
    </div>
  );
}

export default Page;
