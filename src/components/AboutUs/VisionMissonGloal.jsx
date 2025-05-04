import React from "react";

const VisionMissonGloal = () => {
  return (
    <div className="bg-[#ECF0EA]">
      <div className="my-[55px] flex-col sm:flex-row px-10  py-[55px] container mx-auto  flex md:px-24 gap-10">
        <div className=" ">
          <div className="mb-10">
            <h1 className="font-bold text-2xl sm:text-5xl text-[#29AB87] drop-shadow-md mb-5">
              Vision Statement
            </h1>
            <p className="text-[16px] text-[#7A7A7A]">
              To become an organization where we shall empower the people of
              Pakistan (overseas and residents) to establish their businesses or
              services on the world’s famous eCommerce marketplaces.
            </p>
          </div>
          <div>
          <h1 className="font-bold text-2xl sm:text-5xl text-[#29AB87] drop-shadow-md mb-5">
          Mission Statement
            </h1>
            <p className="text-[16px] text-[#7A7A7A]">
              Create an enabling environment for the people of Pakistan to
              empower them to dominate the world’s famous eCommerce marketplaces
              by offering their services, or by selling their products on these
              marketplaces.
            </p>
          </div>
        </div>
        <div className=" ">
        <h1 className="font-bold text-2xl sm:text-5xl text-[#29AB87] drop-shadow-md mb-5">
        Our Goals
          </h1>
          <ul className="list-disc text-[16px] text-[#7A7A7A] flex flex-col gap-5">
            <li>
              The financial goal of generating activity of ( PKR 1 Billion
              through its students and Facebook group members.
            </li>
            <li>
              The social goal of empowering one thousand people (especially
              women) to earn at least USD 300 per month.
            </li>
            <li>
              To make at least three collaborations with the women empowerment
              organizations to further pursue our goal of empowering women by
              providing them latest eCommerce skills so they can earn and
              support their families
            </li>
            <li>
                
              To empower at least 15 Pakistani manufacturers (with products
              already having demand on USA or UK eCommerce marketplaces) so they
              can sell or manage the availability of these products, so other
              Pakistani sellers can sell these products
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionMissonGloal;
