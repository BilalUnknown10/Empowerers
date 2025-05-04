import React from "react";

const Video = () => {
  return (
    <div className="bg-[#ecf0ea] py-[55px]">
      <div className="flex container mx-auto px-10 md:px-24 lg:flex-row flex-col justify-center items-center gap-5 sm:gap-10 my-[45px] md:my-[55px]">
        <div className=" lg:w-1/2 flex justify-center items-center">
          <iframe
            className="rounded-lg w-auto md:w-[560px]"
            // width="560"
            height="315"
            src="https://www.youtube.com/embed/iGLhevhnF9E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center flex-col  ">
          {/* <h4 className="md:text-2xl text-xl tracking-wider font-semibold text-[#1B5EC6]">Discover about Empowerers</h4> */}
          <h1 className="mb-8 tw text-2xl text-center text-[#4a4d48] lg:text-start md:text-4xl font-bold">
How Empowerers is Empowering Pakistan eCommerce          </h1>
          <p className=" text-[16px] sm:text-[18px] text-center lg:text-start ">
            Founded in Oct 2020, primarily covering Pakistani people (overseas
            and residents), Empowerers started as an online eCommerce education
            organization covering the education of how to earn online on
            eCommerce marketplaces including eBay, ETSY, Shopify, Amazon, Daraz,
            Fiverr, and Upwork.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
