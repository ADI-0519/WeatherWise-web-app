"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import { signIn, useSession } from "next-auth/react";

export default function Page() {

  const session = useSession()
    async function login(){
      await signIn()
    }
  
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gradient-to-tr from-blue-600 to-teal-400 h-screen text-white">
      <div className="bg-white/25 w-full rounded-md flex flex-col h-full">

          <div className="flex flex-row h-full items-center justify-center">
            <div className="bg-white/65 w-2/3 rounded-xl flex flex-col h-auto p-10 shadow-lg min-h-[450px]">
          
              <div className="h-1/2 flex flex-col items-center justify-center text-black gap-7">

                <h1 className="text-7xl font-bold m-4">Login</h1>
                <button className = "font-semibold shadow-md text-white cursor-pointer transition-all duration-100 rounded-xl px-6 py-3 bg-blue-500 hover:bg-blue-600" onClick={login}>
                  Log in with Google
                </button>


                <button className = "font-semibold shadow-md text-white cursor-pointer transition-all duration-100 rounded-xl px-6 py-3 bg-gray-900 hover:bg-gray-950" onClick={login}>
                  Log in with Github
                </button>

                <button className = "font-semibold shadow-md text-white cursor-pointer transition-all duration-100 rounded-xl px-6 py-3 bg-purple-500 hover:bg-purple-600" onClick={login}>
                  Log in with Facebook
                </button>

              </div>

              
            
          </div>
      </div>

          <p className="p-10 flex flex-row text-black justify-center text-sm">By Adi Ranjan</p>
      </div>
    </div>
  );
}
