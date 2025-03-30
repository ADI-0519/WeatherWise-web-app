"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


interface ButtonProps{
  href:string
  type?: string
  text: string

}

export default function Button({href, type, text} : ButtonProps) {
  const router = useRouter()
  

  function handleClick(){
    if (href){
      router.push(href)
    }

  }

  
  


  return (
  
    <div>
      <button className = { `${type == 'normal' ? 'text-white hover:text-purple-300': 'text-black px-2 py-2 bg-sky-600 hover:bg-amber-200'} font-bold text-xl cursor-pointer transition-all duration-100 rounded-xl`} onClick = {handleClick}>{text}</button>
    </div>
      



   
  )
}
