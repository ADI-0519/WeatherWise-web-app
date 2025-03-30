"use client"

import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface InputProps{
    
    setError: React.Dispatch<React.SetStateAction<string>>
}

export default function Input({setError}:InputProps) {

    const router = useRouter()
    const [data,setData] = useState({})
    const [location, setLocation] = useState("")
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY!}&q=${location}&days=7&aqi=yes&alerts=yes`

    async function handleSearch(event:React.FormEvent){
        event?.preventDefault()
        try{
            const response = await fetch(url, {method: "GET"})
            if (!response.ok){
                throw new Error("")
            }
            else{
                const data = await response.json()
                setData(data)
                setLocation("")
                setError("")
                localStorage.setItem("userData", JSON.stringify(data));
                router.push("/Location/"+location)
            }
        }
        catch (error){
            setError("City not found. Please enter a valid city")
            setData({})
        }
           
    }

  return (
    <form className = "flex md:w-1/4 w-full items-center" onSubmit={handleSearch}>
            
            <input 
                className = "text-white w-full bg-transparent border-b-2 placeholder-white md:text-start text-center outline-none" 
                placeholder = "Search and save your places" 
                type = "text" 
                value = {location}
                onChange={(str) => {setLocation(str.target.value)}}
            />
           
           <div className='flex flex-col justify-center items-center'>
            <button type="submit">
                    <div className='cursor-pointer ml-[-25px]'>
                        <AiOutlineSearch />
                    </div>
            </button>
            
           </div>
        
    </form>
    
  )
}
