export const saveSession=(token,user)=>{
   localStorage.setItem("token",token)
   localStorage.setItem("user",JSON.stringify(user))
}

export const clearSession=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
}

export const getToken=()=>{
    if(typeof window === "undefined") return null;
    return localStorage.getItem('token');
}

export const getUser=()=>{
    if(typeof window === "undefined") return null;
    const rawUser=localStorage.getItem("user");
    return rawUser? JSON.parse(rawUser):null;
}