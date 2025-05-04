"use client"
import Image from "next/image";
import React from "react";
import { LuMoveRight } from "react-icons/lu";
import { useRouter } from "next/navigation";

const BlogCard = ({ imgSrc, date, title, link, description, onEdit, onDelete }) => {
  const router = useRouter();
  
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  const handleEdit = () => {
    router.push(`/dashboard/admin/blog/edit/${link}`);
  };

  return (
    <div className="hover:shadow-2xl shadow-xl transition-all ease-in-out duration-300 cursor-pointer w-full h-[420px] xl:h-[440px] rounded-2xl overflow-hidden">
      <div className="relative group">
        <img
          src={imgSrc}
          width={400}
          height={300}
          alt="Blog"
          className="transition !w-full duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></div>
      </div>
      <div className="flex flex-col justify-between flex-1 h-auto gap-2 p-5">
        <p className="text-[#7a7a7a]">{date}</p>
        <p className="text-xl textGray md:text-2xl xl:text-3xl font-bold">
          {truncateText(title, 5)}
        </p>
        <div dangerouslySetInnerHTML={{ __html: truncateText(description, 15) }}></div>
        <div className="flex justify-between gap-2 mt-4">
          <button 
            onClick={handleEdit} 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
            Edit
          </button>
          <button 
            onClick={onDelete} 
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;