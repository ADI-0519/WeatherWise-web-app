"use client"

import React from 'react'
import { BsSunrise, BsSunset } from 'react-icons/bs';
import { WiHumidity } from "react-icons/wi";
import { GiWindSlap, GiCompass } from "react-icons/gi"
import { MdAir } from 'react-icons/md';
import { CiTempHigh } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';

interface currentProps{
  windspeed: any,
  humidity:any,
  winddirection: any,
  sunrise: any,
  sunset: any,
  feelslike: any,
  airpressure: any,
  visibility: any

}

export default function WeatherDetails({windspeed, winddirection, humidity, sunrise, sunset, feelslike, airpressure, visibility} : currentProps) {
  return (
    <>
      <h1 className = "mb-4 text-white text-2xl text-pretty ">Weather Details</h1>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 justify-center gap-3 h-fit'>
        
          <div className = "flex flex-col p-4 gap-6 justify-center bg-white/50 rounded-xl text-2xl text-black w-full items-center">
            <div className='flex flex-row'>
              <h3>Wind speed</h3>
              <GiWindSlap fontSize={40} />
            </div>

            <h3 className="">{windspeed} mph</h3>
           
            
          </div>

          <div className = "flex flex-col p-4 gap-6 justify-center bg-white/50 rounded-xl text-2xl text-black w-full items-center">
            <div className='flex flex-row'>
              <h3>Humidity</h3>
              <WiHumidity fontSize={40} />
            </div>

            <h3 className="">{humidity}%</h3>
           
            
          </div>

          <div className = "flex flex-col p-4 gap-6 justify-center bg-white/50 rounded-xl text-2xl text-black w-full items-center">
            <div className='flex flex-row'>
              <h3>Wind direction</h3>
              <GiCompass fontSize={40} />
            </div>

            <h3 className="">{winddirection}</h3>
           
            
          </div>

          <div className = "flex flex-col p-4 gap-6 justify-center bg-white/50 rounded-xl text-2xl text-black w-full items-center">
            <div className='flex flex-row'>
              <h3>Sunrise</h3>
              <BsSunrise fontSize={40} />
            </div>

            <h3 className="">{sunrise}</h3>
           
            
          </div>

          <div className = "flex flex-col p-4 gap-6 justify-center bg-white/50 rounded-xl text-2xl text-black w-full items-center">
            <div className='flex flex-row'>
              <h3>Sunset</h3>
              <BsSunset fontSize={40} />
            </div>

            <h3 className="">{sunset}</h3>
           
            
          </div>

          <div className = "flex flex-col p-4 gap-6 justify-center bg-white/50 rounded-xl text-2xl text-black w-full items-center">
            <div className='flex flex-row'>
              <h3>Feels like</h3>
              <CiTempHigh fontSize={40} />
            </div>

            <h3 className="">{feelslike}°</h3>
           
            
          </div>

          <div className = "flex flex-col p-4 gap-6 justify-center bg-white/50 rounded-xl text-2xl text-black w-full items-center">
            <div className='flex flex-row'>
              <h3>Air pressure</h3>
              <MdAir fontSize={40} />
            </div>

            <h3 className="">{airpressure} HPa</h3>
           
            
          </div>

          <div className = "flex flex-col p-4 gap-6 justify-center bg-white/50 rounded-xl text-2xl text-black w-full items-center">
            <div className='flex flex-row'>
              <h3>Visibility</h3>
              <FaEye fontSize={40} />
            </div>

            <h3 className="">{visibility} km</h3>
           
            
          </div>
          

      </div>

        
    </>
  )
}
