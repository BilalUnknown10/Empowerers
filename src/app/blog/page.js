"use client";
import BlogCard from "@/components/Blog/BlogCard";
import MainHeader from "@/components/MainHeader";
import React, { useEffect, useState } from "react";
import { BlogsData } from "@/data";
import axios from "axios";

const Page = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    try {
      const response = await axios.get('/api/blog/all_blog');
      setBlogs(response.data);
    } catch (error) {
      console.log(error.response, "error in get all blogs front end");
    }
  }

  useEffect( () => {
    getAllBlogs();
  },[])
  return (
    <div>
      <MainHeader headings={"Blog Page"} />

      <div className="container flex flex-col sm:flex-row gap-5 py-10 sm:py-20 justify-center items-center md:px-24 px-10 mx-auto">
      {
              blogs.map((data, index) => {  
                return (
                  <div key={index} className="lg:w-1/3">
                    <BlogCard
                      imgSrc={data.imageUrl}
                      date={data.date}
                      _id= {data._id}
                      title={data.title}
                      description={data.description}
                    />
                  </div>
                );
              }
            
            )}
      </div>
    </div>
  );
};

export default Page;
