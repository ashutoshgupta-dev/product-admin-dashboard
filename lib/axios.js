import axios from "axios";

// Axios automatically combines : baseURL + endpoint

const api=axios.create({
    baseURL:"https://dummyjson.com"
});


// request interceptor
api.interceptors.request.use((config)=>{
   if(typeof window!=="undefined"){
     const token=localStorage.getItem("token")
     if(token){
        config.headers.Authorization=`Bearer ${token}`
     }
   }
   return config
})

// Response interceptor (to handle all error)

api.interceptors.response.use((response)=>response,
(error)=>{
    if(typeof window!=="undefined" && error.response?.status===401 ){
        localStorage.removeItem("token");
        localStorage.removeItem('user');
        window.location.href='/login';
    }
    const msg=error.response?.data?.message || error.message || "Something went wrong. please try again."
    return Promise.reject(new Error(msg))
})

export default api;
