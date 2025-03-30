"use client"

import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import WeeklyForecast from '@/app/components/WeeklyForecast';
import WeatherDetails from '@/app/components/WeatherDetails';
import Current from '@/app/components/Current';

interface WeatherDetailProps {
  data:{
    location: {
      region: string;
    }
    current:{
      wind_mph: number;
      humidity: number;
      wind_dir: number;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
      condition: {
        text: string;
      }
      temp_c: string;
      
    };
    forecast: {
      forecastday: {
        date: string;    
        astro: {
          sunrise: string;
          sunset: string;
        }
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          }
        }
      }[];
    }
  }



}

export default function page() {

  const params = useParams();
  const [error,setError] = useState("")
  const [newdata, setD] = useState <WeatherDetailProps["data"] | null> (null);

  useEffect(() => {
    const savedData = localStorage.getItem("userData")
    if (savedData){
      setD(JSON.parse(savedData))
    }
  }, [])

  if (!newdata) {
    return <div>Loading...</div>; 
  }



  return (
    <div className="bg-gradient-to-bl from-sky-600 to-purple-500 h-screen text-white ">

      <div className="bg-white/25 w-full rounded-md flex flex-col h-full">

        <div className = "flex flex-col justify-between px-12 py-5 mx-6 mt-10 md:flex-row items-center ">
            <Input setError={setError}/>

            <div className="flex flex-row gap-7">
              
            </div>

        </div>

        <div className="w-1/8 pl-12 ml-5 text-red-300 min-h-[24px]">
          {error}
        </div>

        <div className="h-fit flex flex-row p-5 m-10 gap-10 ">

          <Current temperature = {newdata?.current?.temp_c} type = {newdata?.current?.condition.text} location = {newdata?.location?.region} />
          <WeeklyForecast data = {newdata}/>
        </div>

        <div className = "flex flex-col p-5 m-10 h-fit ">
          <WeatherDetails   
          windspeed = {newdata?.current?.wind_mph}
          humidity = {newdata?.current?.humidity}
          winddirection = {newdata?.current?.wind_dir}
          sunrise = {newdata?.forecast?.forecastday[0]?.astro.sunrise}
          sunset = {newdata?.forecast?.forecastday[0]?.astro.sunset}
          feelslike = {newdata?.current?.feelslike_c}
          airpressure = {newdata?.current?.pressure_mb}
          visibility = {newdata?.current?.vis_km}/>
        </div>

        <p className = "p-5 items-center justify-center flex flex-row text-black h-fit">By Adi Ranjan</p>
      
      </div>
      
    </div>
  );
}
