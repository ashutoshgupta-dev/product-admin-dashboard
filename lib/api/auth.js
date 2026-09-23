import api from "../axios";

const login=async(username,password)=>{
    const res=await api.post('/auth/login',{username,password});
    return res.data
}

export default login