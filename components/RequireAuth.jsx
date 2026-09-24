"use client"
import { getToken } from '@/lib/auth';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Loader from './Loader';

const RequireAuth = ({children}) => {
  const router=useRouter();
  const [checked,setChecked]=useState(false)
  useEffect(()=>{
    const token=getToken()
    if(!token){
        router.replace('/login')
    }else{
        setChecked(true)
    }
  },[router])
  
  if(!checked) return <Loader/>
  return children;
}

export default RequireAuth
