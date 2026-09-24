"use client"
import { clearSession, getUser } from "@/lib/auth"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react";
const NavBar = () => {
    const [user, setUser] = useState(null);
    const router=useRouter();
     
    useEffect(()=>{
        setUser(getUser())
    },[])

    function handleLogout(){
        clearSession()
        router.replace('/login')
    }

  return (
    <nav className="flex justify-between px-10 py-4 bg-green-300">
        <Link href="/products" className=" text-gray-700 sm:px-6 sm:text-2xl font-bold tracking-wide">Admin Dashboard</Link>
        <div className="flex items-center text-gray-600 gap-5 font-semibold tracking-wider">
            {user && <span className=" hidden sm:inline">Hi, {user.username}</span> }
            <button onClick={handleLogout} className="border-gray-400 border px-3 py-2 rounded hover:bg-red-400 outline-0 hover:text-white">
                Logout
            </button>
        </div>
    </nav>
  )
}

export default NavBar
