"use client"
import CommentForm from "@/components/Blog/CommentBox";
import { BlogsData } from "@/data";
import axios from "axios";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";



const Page =  ({params}) => {
  const {_id} = use(params);
  const [oneBlog, setOneBlog] = useState([]);
  const getOneBlog = async () => {
    try{
      console.log(_id);
      const response = await axios.get(`/api/blog/get_blog_data?id=${_id}`);
      console.log(response);
      setOneBlog(response.data);
    }catch(error){
      console.log(error, "error in one blog api")
    }
  };

  useEffect(() => {
    if(_id){
      getOneBlog();
    }
  },[]);

    return (
    <div className="container mx-auto md:px-20 px-10">
      <div className="flex justify-center flex-col my-[45px] sm:py-[55px] items-center gap-5 sm:gap-10">
        <p className="textGray text-2xl sm:text-5xl font-bold w-[90%] text-center">
          {oneBlog.title}
        </p>
        <p className="textGray text-xl   w-[90%] text-center">{oneBlog.date}</p>

        <Image
          src={oneBlog.imageUrl}
          width={300}
          height={300}
          className="w-full h-full"
        />

        <div
          dangerouslySetInnerHTML={{ __html: oneBlog.description }}
          className=" text-gray-500 space-y-[10px] text-[18px]"
        />
        {/* {work.description} */}
        <CommentForm />
      </div>
    </div>
   
  );
};

export default Page;
