import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { replace, useNavigate } from "react-router-dom";
import useModal from './useModal';


export const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-rho-six.vercel.app',
    // baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const {LogoutUser,setLoading} = useContext(AuthContext)
    const navigate = useNavigate()
    const {openModal={}} = useModal();
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async(error) =>{
        const status = error.response.status;
        if(status === 501 || status === 503){
            openModal({
                title:'OOPS',
                message:'Session expired! Please login again',
                autoCloseTime: 3000
            })
           await LogoutUser()
            navigate('/login', replace)
            setLoading(false)
        }
        if(status >= 500){
            openModal({
                title:'OOPS',
                message:'A server side error occured! Please try later',
                autoCloseTime: 3000
            })
        }
        else{
            openModal({
                title:'OOPS',
                message:'Something went wrong',
                autoCloseTime: 3000 
            })
        }
        console.log('in the interceptor',error);
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;