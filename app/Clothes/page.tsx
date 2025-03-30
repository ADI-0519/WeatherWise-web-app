"use client";

import { useEffect, useState } from "react";

export default function ChatPage() {
  const [data, setD] = useState<any>(null);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  
  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      setD(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    if (data?.location?.region) {
      setPrompt(
        `Give me clothes to wear for today in ${data?.location?.region} for men and then for women. Here is some data about the place: the temperature is ${data?.current?.temp_c}, windspeed = ${data?.current?.wind_mph}, 
          humidity = ${data?.current?.humidity},
          wind direction = ${data?.current?.wind_dir},
          sunrise = ${data?.forecast?.forecastday[0].astro.sunrise},
          sunset = ${data?.forecast?.forecastday[0].astro.sunset},
          feels like = ${data?.current?.feelslike_c},
          air pressure = ${data?.current?.pressure_mb},
          visibility = ${data?.current?.vis_km}, Remember take into account the weather and if it's cold then suggest cold. Don't include any **. Include newline characters to space it out and put it in bullet points. Make sure it is one small paragraph each for men and women.`
      );
    }
  }, [data?.location?.region]); 

  async function getClothes(){
    setLoading(true);
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, type: "groq" }),
      });

      const data = await res.json();
      if (data.choices) {
        setResponse(data.choices[0]?.message?.content || "No response");
      } else {
        setResponse("Invalid response.")
      }
    } catch (error) {
      setResponse("Error fetching response.")
    }
    setLoading(false);
  }

  async function getImage(){
    try{
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify({prompt, type: "unsplash"}),
      })

      const data = await response.json()
      if (data.results){
        setImages(data.results.slice(0, 3).map((img: any) => img.urls.small));
      }
    }
    catch(error){
      setResponse("Error fetching images")
    }


  }

  async function handleClick(){
    await getClothes();
    
  }

  return (
    <div className="bg-white h-screen [background:radial-gradient(100%_100%_at_50%_10%,#fff_20%,#63e_100%)] text-black">
      <div className="bg-white/5 w-full rounded-md flex flex-col h-screen">
        <div className="flex flex-col gap-20 justify-items">

          <div className="m-45 min-h-[150px] items-center flex flex-col justify-center text-black gap-1 ">

            <h1 className="text-8xl">Clothes for today </h1>
            <p> {data?.location?.region}</p>
            
          </div>

          <div className=" h-fit items-center flex flex-col justify-center text-black gap-5 ">

            <button className = "bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition font-semibold shadow-md cursor-pointer" onClick={handleClick}> Click for clothes </button>

          </div>

          <div className="min-h-[200px] h-fit items-center flex flex-col px-2 mx-60 text-white gap-1 mt-30 bg-gradient-to-br from-purple-400 via-[#63e] to-purple-500 rounded-xl shadow-xl">
            {response.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
            ))}
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
