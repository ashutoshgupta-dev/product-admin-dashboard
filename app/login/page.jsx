"use client"
import login from "@/lib/api/auth";
import { saveSession } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
const LoginPage = () => {
    const router=useRouter()
    const [credentials, setCredentials] = useState({username: "",password: ""});
    const [error,setError]=useState("");
    const [isSubmitting, setIsSubmitting]=useState(false)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setError("")
        if(isSubmitting) return
        setIsSubmitting(true)

        try {
            const data= await login(credentials)
            saveSession(data.token,{username:data.username,id:data.id})
            router.replace("/product")
            
        } catch (error) {
            setError(error.message|| "invalid username or password")
        }finally{
            setIsSubmitting(false)
        }

    }

    const handleOnchange=(e)=>{
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value
        })
    }
    
  
    

  return (
    <div className="flex min-h-screen justify-center items-center ">
      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white/10 backdrop-blur-2xl border shadow-2xl px-18 py-15 rounded border-white/20">
           
          <h1 className="text-center text-3xl mb-10">Sign in</h1>

          {error&&( 
             <div>
                {error}
             </div>
          )}

          <label htmlFor="name" className="text-gray-800 text-sm block">Username</label>
          <input className="block outline-0 border rounded w-full px-2 py-2 mt-2 mb-4 " id="name" name="username" value={credentials.username} onChange={handleOnchange} type="text" placeholder="username..." />

          <label htmlFor="pass" className="text-gray-800 text-sm block">Password</label>
          <input className="block outline-0 border rounded w-full px-2 py-2 mt-2 mb-5 " id="pass" name="password" value={credentials.password} onChange={handleOnchange} type="password" placeholder="password..." />

          {/* submit button */}
          <button type="submit" disabled={isSubmitting} className="w-full text-white tracking-wide bg-gray-700 px-4 py-2 rounded hover:bg-gray-500 disabled:opacity-50">
              {isSubmitting?"Signing in...":"Login"}
          </button>
      </form>
    </div>
  )
}

export default LoginPage
