import React from "react";
import { useRouter } from "next/navigation";
const Welcome = () => {
  const route=useRouter()
  const handleStartLearning=()=>{
    route.push('/trainingPage')
  }
  return (
    <div className="bg-[#ecf0ea]">
      <div className="md:py-[55px] py-[45px]   container mx-auto   flex lg:flex-row gap-10 flex-col  justify-center items-center px-10  md:px-24">
        <div className=" lg:w-1/2 flex flex-col gap-5 ">
          <h1 className="text-2xl md:text-5xl font-bold text-[#29ab87] text-start  drop-shadow-lg">
            Welcome To Empowrerers
          </h1>
          <p className=" mt-[-10px] text-xl italic text-start text-[#29ab87] ">
            Learning often happens in classrooms but it doesn’t have to.
          </p>
          <div className="flex sm:items-start items-center sm:ml-4 flex-col text-2xl">
            {/* <TypeAnimation
                sequence={[
                  'Concerned about the job-shrinking market? Tired of finding a job over and over again? Learn eBay. Join Empowerers.',
                  1000,
                  '', // Clear text before restarting
                  500 // Short pause before repeating
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity} // Infinite loop
              /> */}

            <ul className="flex flex-col text-[14px] sm:text-[18px] gap-2">
              <li className="list-disc">
                Concerned about the job-shrinking market
              </li>
              <li className="list-disc">
                Tired of finding a job over and over again
              </li>
              <li className="list-disc">
                Empowerers Offering Ecommerce learning courses in reasonable
                prices
              </li>
              <li className="list-disc">
                Empowerers offers EBay, Etsy, and many other courses
              </li>
            </ul>

            {/* <p>Concerned about the job-shrinking market? Tired of finding a job over and over again? Learn eBay. Join Empowerers.</p> */}
            {/* <p>Empowerers Offering Ecommerce learning courses in reasonable prices. Empowerers offers EBay, Etsy, and many other courses.</p> */}
          </div>

          <div className=" mt-5 flex justify-center lg:justify-start items-center">
            <button onClick={()=>handleStartLearning()} 
            
            className="tracking-wide cursor-pointer text-[12px] font-bold text-white bg-[#29ab87] hover:text-[#29ab87] hover:bg-transparent border border-[#29ab87]  px-5 py-2 rounded-full transition-all duration-300 ease-in-out">
              Start Learning
            </button>
          
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <img src="/bann1.png" alt="" className="max-h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
