import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { replace, useNavigate } from "react-router-dom";


export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const {LogoutUser,setLoading} = useContext(AuthContext)
    const navigate = useNavigate()
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async(error) =>{
        const status = error.response.status;
        if(status === 401 || status === 403){
           await LogoutUser()
            navigate('/login', replace)
            setLoading(false)
        }
        console.log('in the interceptor',error);
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;