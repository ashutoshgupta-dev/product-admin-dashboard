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
    <nav>
        <Link href="/products">Admin Dashboard</Link>
        <div>
            {user && <span>Hi, {user.username}</span> }
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    </nav>
  )
}

export default NavBar
