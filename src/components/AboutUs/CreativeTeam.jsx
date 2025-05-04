import React from "react";

const CreativeTeam = () => {
  const outCreativeTeam = [
    {
      name: "Qasim Sana Ramay",
      image: "/team1.png",
      detail: "FOUNDER AND C.E.O OF EMPOWERERS",
    },
    {
      name: "Asif Latif",
      image: "/team2.png",
      detail: "MANAGER SOURCING",
    },
    {
      name: "Saif Asim",
      image: "/team3.png",
      detail: "MANAGER",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="py-10 text-center">
        <h1 className="font-bold text-2xl sm:text-5xl text-[#29AB87] drop-shadow-md">
          Our Creative Team
        </h1>
      </div>
      <div className="flex gap-5 flex-col sm:flex-row justify-center items-center lg:gap-10 px-10 md:px-24 mt-5">
        {outCreativeTeam.map((info, index) => {
          return (
            <div
              key={index}
              className="border sm:w-1/3 border-gray-300 drop-shadow-md shadow-lg rounded-[10%] overflow-hidden cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
            >
              <div className="md:h-[180px] h-[200px] xl:h-[400px] p-2 ">
                <img
                  src={info.image}
                  alt="Image"
                  className=" object-cover mx-auto rounded-[10%] max-h-full"
                />
              </div>
              <div className="text-center lg:my-5 flex flex-col gap-5 p-5 sm:p-2">
                <h1 className=" font-bold text-[#29AB87] text-[18px] lg:text-[20px]">{info.name}</h1>
                <h1 className="text-[10px] lg:text-[16px] text-[#7a7a7a]">{info.detail}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreativeTeam;
