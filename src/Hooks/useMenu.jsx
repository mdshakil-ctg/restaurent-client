import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic"


const useMenu = () =>{
    const axiosPublic = useAxiosPublic();
    const {data : menu = [], refetch, isLoading, isFetching} = useQuery({
        queryKey: ['menu'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })
    console.log({menu});
    return {menu, refetch, isLoading, isFetching }
}

export default useMenu;