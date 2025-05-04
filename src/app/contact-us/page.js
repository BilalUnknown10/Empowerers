"use client"
import Contact from '@/components/Contact/Contact'
import LocationCards from '@/components/Contact/Location'
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/Contact/Map"), { ssr: false });
import MainHeader from '@/components/MainHeader'
import React from 'react'

const page = () => {
  return (
    <div>


        <MainHeader headings={"Contact Us"} />


        <Contact />
        <LocationCards />
        <MapComponent/>
    </div>
  )
}

export default page