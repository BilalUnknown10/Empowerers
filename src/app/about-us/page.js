"use client";
import React from "react";
import StudentSlider from "@/components/StudentSlider";
import Experience from "@/components/AboutUs/Experience";
import Statistics from "@/components/AboutUs/Statistics";
import CreativeTeam from "@/components/AboutUs/CreativeTeam";
import VisionMissonGloal from "@/components/AboutUs/VisionMissonGloal";
import Buisness from "@/components/AboutUs/Buisness";
import MainHeader from "@/components/MainHeader";

function aboutUsPage() {
  return (
    <>
     <MainHeader headings="About Us" />

      <Experience />

      <Statistics />
      <CreativeTeam />
      <VisionMissonGloal />
      <Buisness />
      <StudentSlider />
    </>
  );
}

export default aboutUsPage;
