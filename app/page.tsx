"use client"

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const [error,setError] = useState("")
  
  return (
    <div className="bg-gradient-to-bl from-sky-600 to-purple-500 h-screen text-white">

      <div className="bg-white/25 w-full rounded-md flex flex-col h-full">

        <div className = "flex flex-col justify-between px-12 py-5 mx-6 mt-10 md:flex-row items-center ">
           <Input setError={setError}/>
          
        </div>

        <div className="w-1/8 pl-12 ml-5 text-red-300 min-h-[24px]">
          {error}
        </div>

        <div className="h-full w-full items-center flex flex-col justify-center ">

          <h1 className="text-7xl">WeatherWise</h1>
          <h4>Enter a city to get the forecast</h4>
           
        </div>

        <p className = "p-10 items-center justify-center flex flex-row text-black">By Adi Ranjan</p>
      </div>
      
    </div>
  );
}
