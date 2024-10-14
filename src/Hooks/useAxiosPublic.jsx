import axios from "axios";


export const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-rho-six.vercel.app', 
    // baseURL: 'http://localhost:5000', 
    withCredentials: true,
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;