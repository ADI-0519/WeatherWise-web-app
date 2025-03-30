"use client"

import React from 'react'
import _ from "lodash";

export default function CurrentDate() {
  const currentDate = new Date().toLocaleDateString("en-UK", {weekday:"long",year:"numeric",day:"numeric",month:"long"})
  
  return (
    <div>
      {currentDate}
    </div>
  )
}
