"use client"

import React from 'react'
import CurrentDate from './CurrentDate'
import { CiCloudOn } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md"
import Button from './Button';

interface CurrentProps{
    temperature:any
    location: any
    type:any

}

export default function Current({temperature, location, type}:CurrentProps) {

  return (
    <div className = "flex flex-col md:mb-0 items-start gap-2 w-1/3">
      
      <div className = "flex flex-row font-bold text-3xl">
        <CurrentDate />
        <CiCloudOn />
      </div>

      <div className = "flex flex-col text-5xl gap-2">

        <div className = "flex flex-row gap-8">
          <p>{temperature}<span>°C</span> </p>
          
          <Button href = "/Clothes" text = "Clothes for today" type = "padded"/>
          
        </div>

        <div className = "text-2xl gap-2">{type}</div>
        
        <div className="flex flex-row rounded-xl items-center bg-white/90 text-black px-2 py-2 text-2xl gap-2">
            <MdLocationOn />
            {location}
        </div>

      </div>
    </div>
  )
}
