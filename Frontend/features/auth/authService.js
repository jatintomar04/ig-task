import axios from 'axios'


const register = async(formData) => {

   const response = await axios.post(`https://auto-fix-pro.onrender.com/api/auth/register`, formData);
   localStorage.setItem("user", JSON.stringify(response.data));
  
   return response.data
}


const login = async(formData) => {
  
   console.log(formData)
   const response = await axios.post(`https://auto-fix-pro.onrender.com/api/auth/login`, formData);
   localStorage.setItem("user", JSON.stringify(response.data));
   console.log(response.data)
   return response.data
}



const authService = {register , login};

export default authService;