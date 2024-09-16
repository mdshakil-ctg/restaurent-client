import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useIsAdmin = () => {
    const {user} = useContext(AuthContext)
    const axiosApi = useAxiosSecure();

    const {data: isAdmin} = useQuery({
        queryKey: ['user?.email', 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosApi.get(`user/admin/${user?.email}`)
            return res.data.isAdmin
        }
    })
    return {isAdmin}
    
};

export default useIsAdmin;