"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import Button from "./Button";

export default function Navbar() {
  const { data: session } = useSession();

  return (
  
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      
      <div className="mx-3">
        <Button href = "/" text = "Home" type = "normal" />
      </div>
      
      {session?.user ? (
        <div className="flex items-center gap-4">
          <p>Welcome, {session.user.name}</p>
          <CiUser className="w-8 h-8 rounded-full" />
          <button 
            onClick={() => signOut()} 
            className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-row items-center gap-7 mx-10">
          <Button href = "/Login" text = "Login" type = "normal" />
        </div>
        
      )}
    </nav>
    
  );
}
