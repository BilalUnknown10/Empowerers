import React from "react";
import Counter from "@/components/Counter";

const Statistics = () => {
  return (
    <div className=" bg-[#ECF0EA] mx-auto">
      <div className="flex justify-between  container mx-auto  py-[45px] sm:py-[55px]">
        <div className="flex flex-col sm:w-1/2 justify-around gap-5 sm:gap-0 sm:flex-row ">
          <Counter value={"1900"} Data={"Students"} />
          <Counter value={"100"} Data={"Meetups in 3 Months"} />
        </div>
        <div className="flex flex-col sm:w-1/2 justify-around gap-5 sm:gap-0 sm:flex-row ">
          <Counter value={"200"} Data={"Satisfied Clients"} />
          <Counter
            value={"20"}
            Data={"Fullfilment Centers In US, UK and Aus"}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
