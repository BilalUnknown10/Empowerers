import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const locations = [
    {
      city: "Multan",
      name: "Abuzar Razzaq",
      phone: "+92 30 8090 1111",
      address: "House No. 166 B Block Model Town Multan",
      imgSrc: "/multan.jpeg",
    },
    {
      city: "Multan Central",
      name: "Farhan Jabbar",
      phone: "+92 345 8333370",
      address: "Hamza Street, Gulshan e Mehar Colony, Near Nishan Hospital, Chungi No. 6, Bosan Road, Multan",
      imgSrc: "/multan_centeral.jpeg",
    },
    {
      city: "Lahore Central",
      name: "Umair Ijaz",
      phone: "+92 30 4989 1111",
      address: "E6, Executive Floor, Al-Qadeer Heights, Babar Block, New Garden Town, Lahore",
      imgSrc: "/lahore-150x150.jpeg",
    },
    {
      city: "Sialkot",
      name: "Faryad Hussain",
      phone: "+92 30 1989 1111",
      address: "1st Floor, Shahab Plaza, Opposite UMT, Shahab Pura Road Sialkot",
      imgSrc: "/Sialkot-150x150.jpg",
    },
    {
      city: "Faisalabad",
      name: "Usman Ali",
      phone: "+92 30 7989 1111",
      address: "Office # 01, First Floor, p-354, Kashmir Road, Amin Town, Faisalabad",
      imgSrc: "/fsd.jpg",
    },
    {
      city: "Sahiwal",
      name: "Salman Habib",
      phone: "+92 30 5989 1111",
      address: "Start X 2nd Floor, Central Plaza, High Street, Furniture Bazar Sahiwal",
      imgSrc: "/Sahiwal-150x150.jpg",
    },
    {
      city: "Peshawar",
      name: "Abu Marwan Khan",
      phone: "+92 32 5989 1111",
      address: "Office # GF02 Ground Floor, Majestic Tower, Near Meezan Bank, Peshawar Cantt",
      imgSrc: "/pashawar.jpeg",
    },
    {
      city: "Sawat",
      name: "Anwar Khan",
      phone: "+92 30 4989 1111",
      address: "Office # 01, 1st floor Qadar Plaza, Old Post Office Road, Mingora Sawat",
      imgSrc: "/sawat.jpeg",
    },
    {
      city: "Wazirabad",
      name: "Faryad Hussain",
      phone: "+92 30 2989 1111",
      address: "Minal Plaza Near Punjab Bank, Wazirabad Bypass Wazirabad",
      imgSrc: "/wzr.jpeg",
    },
  ];
  

const LocationCards = () => {
  return (
    <div className="flex container mx-auto flex-wrap justify-center gap-6 p-6">
      {locations.map((location, index) => (
        <div
          key={index}
          className={`w-[260px] bg-white shadow-lg rounded-2xl overflow-hidden p-4 text-center `}
        >
          <Image src={location.imgSrc} width={300} height={200} alt={location.city} className="rounded-lg" />
          <h2 className="text-lg font-bold mt-3">{location.city}</h2>
          <p className="testGray">{location.name}</p>
          <div className="flex items-center justify-center gap-1 testGray   mt-2">
            {/* <FaPhoneAlt /> */}
            <span className="text-[16px]">{location.phone}</span>
          </div>
          <div className="flex items-start  justify-center gap-1 testGray mt-2 text-sm">
            <div className="w-[20px] flex items-center">

            <IoLocationSharp className="mt-1 text-xl text-red-500" />
            </div>
            <span>{location.address}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationCards;
