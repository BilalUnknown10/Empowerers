"use client";

import useUserStore from "@/store/useUserStore";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SaleBanner = () => {
  const router = useRouter();
  const [offer, setOffer] = useState("");
  const [loading, setLoading] = useState(false);
  const {setTopMenu, topMenu} = useUserStore();
  console.log("From top menu : ", topMenu);

  const getOffer = async () => {
    try {
      const response = await axios.get(`/api/offer/get_offers`);
      setOffer(response.data[0]);
      setTopMenu(response.data[0]);
      setLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  }

  useEffect(() => {
    getOffer();
  },[]);
  return (
    // <div className="h-[230px]  sm:h-[200px] justify-center flex flex-col sm:flex-row items-center px-16 ">
    //   <motion.div
    //     className="sm:w-1/2 flex flex-col sm:flex-row justify-center items-center"
    //     animate={{ scale: [1, 1.1, 1] }} // Scale up and down
    //     transition={{ duration: 2, repeat: 10, ease: "easeInOut" }} // Loop 3 times
    //   >
    //     <Image
    //       // src="/sale2.png"
    //       src={offer.imageUrl}
    //       alt="sale"
    //       width={300}
    //       height={300}
    //       className="h-[100px] sm:!h-[160px] !w-auto"
    //     />
    //   </motion.div>

    //   <div className="flex sm:pl-16 sm:w-1/2">
    //     <div className="flex flex-col f gap-3">
    //       <div>
    //         <p className=" text-2xl lg:text-5xl font-bold textGray">
    //           {/* Limited Time Offer */}
    //           {offer.offerName}
    //         </p>
    //       </div>
    //       <div>
    //         <p className="textGray text-xl lg:text-[30px]">
    //           {/* 20% Off on All Courses!{" "} */}
    //           {offer.offerDetails}
    //         </p>
    //       </div>
    //       <button onClick={()=>router.push('/contact-us')} className="tracking-wide cursor-pointer text-[16px] font-bold text-white bg-[#29ab87] border border-[#29ab87] hover:text-[#29ab87] hover:bg-white px-7 py-2 w-[200px]  rounded-full transition-all duration-300 ease-in-out ">
    //         Get In Touch
    //       </button>
    //     </div>
    //   </div>
    // </div>
   <>
    {loading ?  <div className="h-[230px]  sm:h-[200px] justify-center flex flex-col sm:flex-row items-center px-16 ">
      <motion.div
        className="sm:w-1/2 flex flex-col sm:flex-row justify-center items-center"
        animate={{ scale: [1, 1.1, 1] }} // Scale up and down
        transition={{ duration: 2, repeat: 10, ease: "easeInOut" }} // Loop 3 times
      >
        <Image
          // src="/sale2.png"
          src={offer.imageUrl}
          alt="sale"
          width={300}
          height={300}
          className="h-[100px] sm:!h-[160px] !w-auto"
        />
      </motion.div>

      <div className="flex sm:pl-16 sm:w-1/2">
        <div className="flex flex-col f gap-3">
          <div>
            <p className=" text-2xl lg:text-5xl font-bold textGray">
              {/* Limited Time Offer */}
              {offer.offerName}
            </p>
          </div>
          <div>
            <p className="textGray text-xl lg:text-[30px]">
              {/* 20% Off on All Courses!{" "} */}
              {offer.offerDetails}
            </p>
          </div>
          <button onClick={()=>router.push('/contact-us')} className="tracking-wide cursor-pointer text-[16px] font-bold text-white bg-[#29ab87] border border-[#29ab87] hover:text-[#29ab87] hover:bg-white px-7 py-2 w-[200px]  rounded-full transition-all duration-300 ease-in-out ">
            Get In Touch
          </button>
        </div>
      </div>
    </div> : 
    <div className="flex justify-center h-[230px] items-center">
      <div className="w-16 h-16 border-t-4 border-[#29ab87] border-solid rounded-full animate-spin"></div>
    </div> }
   </>
  );
};

export default SaleBanner;
