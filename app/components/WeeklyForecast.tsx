"use client"

import React from 'react'

interface forecastProps{
  data: ForecastData;

}

interface ForecastData {
  forecast: {
    forecastday: ForecastDay[];
  };
}

interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}


export default function WeeklyForecast({data}:forecastProps) {
  return (
    <>
      <div className="w-2/3 text-black grid grid-cols-7 grid-rows-1 justify-items-center justify-center items-center h-full p-5 gap-5">
        {data?.forecast?.forecastday?.map((day,index) => 
        (
          <div key = {index} className="flex flex-col bg-white/40 rounded-lg h-full w-full items-center">
            <p>{new Date(day.date).toLocaleString("en-UK",{weekday: "short"})}</p>
            <img src = {day?.day?.condition?.icon} alt = {day.day.condition?.text} />
            <div>
              <p>H {day?.day?.maxtemp_c.toFixed()} </p>
              <p>L {day?.day?.mintemp_c.toFixed()}</p>

            </div>
          </div>
        ))}

      </div>

  </>

  )
}
