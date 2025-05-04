"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();
  const hanfleLink = (e) => {
    router.push(e);
  };
  return (
    <div className="bg-[#29AB87] relative">
      <div className=" container  mx-auto pt-5 sm:pt-2 px-10  md:px-10  text-white">
        <div className="flex flex-wrap gap-5  justify-between  my-5 sm:my-12">
          <div>
            <Link href={"/"}>
              <Image
                width={500}
                height={500}
                src="/empowerer_logo_re_bg.png"
                alt=""
                className="w-[300px]  drop-shadow-md  mx-auto sm:mx-0 bg-gray-300 px-3 py-3  rounded-lg"
              />
            </Link>
            <p className="navbar_size mt-8">
              Being the pioneer organization in the eBay <br /> marketplace
              education in Pakistan, to date, <br /> Empowerers is considered
              the most detailed <br /> and most advanced organization in the
              knowledge <br /> and skills of the eBay marketplace.
            </p>
          </div>
          <div>
            <h1 className=" text-2xl text-black font-bold tracking-wide mb-3">
              Quick Links
            </h1>
            <p className="mb-1  navbar_size ">
              <span
                onClick={() => hanfleLink("about-us")}
                className="border-b-1 border-transparent hover:border-white  transition-all duration-200"
              >
                About Us
              </span>
            </p>
            <p className="mb-1 hover: navbar_size">
              <span
                onClick={() => hanfleLink("ourServices")}
                className="border-b-1 border-transparent hover:border-white  transition-all duration-200"
              >
                Services
              </span>
            </p>
            <p className="mb-1 hover: navbar_size">
              <span
                onClick={() => hanfleLink("blog")}
                className="border-b-1 border-transparent hover:border-white  transition-all duration-200"
              >
                Blog
              </span>
            </p>
            <p className="hover: navbar_size">
              <span
                onClick={() => hanfleLink("contact-us")}
                className="border-b-1 border-transparent hover:border-white  transition-all duration-200"
              >
                Contact Us
              </span>
            </p>
          </div>
          <div>
            <h1 className=" text-2xl text-black font-bold tracking-wide mb-3">
              Resources
            </h1>
            <p className="mb-1 hover: navbar_size">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Courses
              </span>
            </p>
            <p className="mb-1 hover: navbar_size">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Our Experts
              </span>
            </p>
            <p className="mb-1 hover: navbar_size">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Student
              </span>
            </p>
            <p className="mb-1 hover: navbar_size">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Verification
              </span>
            </p>
            <p className="hover: navbar_size">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Platform
              </span>
            </p>
          </div>
          <div>
            <h1 className=" text-2xl text-black font-bold tracking-wide mb-3">
              Support
            </h1>
            <p className="mb-1 hover: navbar_size">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Forums
              </span>
            </p>
            <p className="mb-1 hover: navbar_size">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Documentation
              </span>
            </p>
            <p className="mb-1 hover: navbar_size">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Services
              </span>
            </p>
            <p className="mb-1 hover: navbar_size">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Verification
              </span>
            </p>
            <p className="hover: navbar_size">
              <span className="border-b-1 border-transparent hover:border-white  transition-all duration-200">
                Community
              </span>
            </p>
          </div>
          <div className="">
            <h1 className=" text-2xl text-black font-bold tracking-wide mb-3">
              Contact Us{" "}
            </h1>

            <p className=" mb-1 navbar_size">+92 3327195240</p>
            <p className="navbar_size mb-2 underline">info@empowerers.co</p>
            <div className="navbar_size flex gap-4  items-center ">
              <Link href={"#"}>
                <FaFacebook />
              </Link>
              <Link href={"#"}>
                <FaLinkedin />
              </Link>
              <Link href={"#"}>
                <FaTiktok />
              </Link>
              <Link href={"#"}>
                <FaYoutube />
              </Link>
              <Link href={"#"}>
                <IoMailSharp />
              </Link>
            </div>
          </div>
          {/* Email section
        <div className='mx-40 px-20 mb-14'>
            <label htmlFor="email"  className='text-2xl'>Email <span className='text-red-600'>*</span></label><br />
            <input type="text" id='email'
            placeholder='Your Email address'
            className='outline-none rounded-md text-black mt-2 w-[400px] p-3 navbar_size bg-gray-300' /> <br />
            <button className='mt-8 px-8 py-2 rounded-md  hover:bg-white hover:text-[#29ab87] border navbar_size tracking-wide'>Subscribe</button>
        </div> */}
        </div>
        <div className="absolute  right-0 border-t w-[100vw] border-white-[2px] bottom-16">
          {""}
        </div>
        <div className=" px-20 text-center  py-5 ">
          <p className="">Empowerers | © All right reserved 2025 </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
