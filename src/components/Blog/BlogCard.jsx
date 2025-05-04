"use client"
import Image from "next/image";
import React from "react";
import { LuMoveRight } from "react-icons/lu";
import { useRouter } from "next/navigation";

const BlogCard = ({ imgSrc, date, title ,_id,description }) => {
  const router= useRouter ()
  const truncateTitle = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (

    <div
    onClick={()=>router.push(`/blog/${_id}`)}
    className="hover:shadow-2xl   shadow-xl transition-all ease-in-out duration-300 cursor-pointer w-[100%] h-[420px] xl:h-[520px] rounded-2xl overflow-hidden">
      <div className="relative group">
        <img
          src={imgSrc}
          width={400}
          height={300}
          alt="Blog"
          className="transition  !w-full duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></div>
      </div>
      <div className="flex flex-col justify-between flex-1 h-auto gap-2 p-5">
        <p className="text-[#7a7a7a]">{date}</p>
        <p className=" text-xl textGray md:text-2xl xl:text-3xl font-bold">
          {truncateTitle(title, 5)}
        </p>

        <div dangerouslySetInnerHTML={{ __html: truncateDescription(description, 15) }}>
        </div>
        <button
        onClick={()=>router.push(`/blog/${_id}`)}
        className=" text-[#7a7a7a] py-2  flex justify-start items-center gap-2 rounded-lg">
          Continue Reading <LuMoveRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
