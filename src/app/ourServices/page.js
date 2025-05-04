import MainHeader from "@/components/MainHeader";
import AwesomeServices from "@/components/Services/AwesomeServices";
import NewsLetter from "@/components/Services/NewsLetter";
import WhatWeProvide from "@/components/Services/WhatWeProvide";
import Image from "next/image";
import React from "react";
import { FaStoreAlt } from "react-icons/fa";
import { FaCommentsDollar } from "react-icons/fa";
import { FaStoreSlash } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function ourServicesPage() {
  return (
    <>
      <MainHeader headings={"Services"} />
      <AwesomeServices />
      <WhatWeProvide />
    <NewsLetter />
    </>
  );
}

export default ourServicesPage;
