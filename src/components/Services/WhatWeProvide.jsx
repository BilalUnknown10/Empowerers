import React from "react";
import { FaThList } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { FaCommentsDollar } from "react-icons/fa";
import { FaStoreSlash } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const WhatWeProvide = () => {
  return (
    <div className="bg-[#ECF0EA] ">
      {" "}
      <div className="py-[45px] sm:py-[55px] px-10 md:px-24 container mx-auto">
        <div className=" text-center">
        <h1 className="font-bold text-2xl sm:text-5xl text-[#29AB87] drop-shadow-md mb-5">
        What We Provide
          </h1>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-around gap-5 sm:gap-10">
            <div className="flex flex-col items-center rounded-md text-center text-[#29AB87] border p-5 w-[480px]">
              <FaThList className="h-20 w-20" />
              <h1 className="text-2xl sm:text-3xl font-bold my-2 sm:my-5">
                eCommerce Consultation​
              </h1>
              <p className="text-[16px] ">
                Empowerers are Providing Consultation about Ecommerce business
                Consultation.
              </p>
            </div>
            <div className="flex  flex-col items-center text-center rounded-md text-[#29AB87] border p-5 w-[480px]">
              <FaStoreAlt className="h-20 w-20" />
              <h1 className="text-2xl sm:text-3xl font-bold my-2 sm:my-5">
                Staff Augmentation (eBay, ETSY, Tiktok Shop)​
              </h1>
              <p className="text-[16px] ">
                We provide expert staff augmentation for Etsy, eBay, and TikTok
                Shop, ensuring your online store is managed by professionals who
                understand the nuances of each platform.
              </p>
            </div>
            <div className="flex  flex-col items-center rounded-md text-center text-[#29AB87] border p-5 w-[480px]">
              <FaCommentsDollar className="h-20 w-20" />
              <h1 className="text-2xl sm:text-3xl font-bold my-2 sm:my-5">
                Managerial Services (eBay, ETSY, Tiktock Shop)​
              </h1>
              <p className="text-[16px] ">
                Our team handles everything from inventory management to
                customer support, allowing you to focus on growing your brand
              </p>
            </div>
            <div className="flex  flex-col items-center rounded-md text-center text-[#29AB87] border p-5 w-[480px]">
              <FaStoreSlash className="h-20 w-20" />
              <h1 className="text-2xl sm:text-3xl font-bold my-2 sm:my-5">
                Fulfillments Centers​</h1>
              <p className="text-[16px] ">
                Empowerers Providing Fullfilment center in UK, USA and Aus.
              </p>
            </div>
            <div className="flex  flex-col items-center rounded-md text-center text-[#29AB87] border p-5 w-[480px]">
              <FaRegHandshake className="h-20 w-20" />
              <h1 className="text-2xl sm:text-3xl font-bold my-2 sm:my-5">
                Shared Spaces in incubators
              </h1>
              <p className="text-[16px] ">
                Our incubators provide shared spaces designed to foster
                collaboration and innovation among entrepreneurs.
              </p>
            </div>
            <div className="flex  flex-col rounded-md items-center text-center text-[#29AB87] border p-5 w-[480px]">
              <FaFacebook className="h-20 w-20" />
              <h1 className="text-2xl sm:text-3xl font-bold my-2 sm:my-5">
                Social Media Management​
              </h1>
              <p className="text-[16px] ">
                We provide comprehensive social media management services that
                enhance your brand's online presence across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
