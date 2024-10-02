import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";

export const useCardDataApi = (api) =>{
       
    const axiosPublic = useAxiosPublic();
    const {data: datas=[], isLoading,} = useQuery({
        queryKey: [`${api}`],
        queryFn: async() =>{
          await new Promise(resolve => setTimeout(resolve, 5000)); // 2-second delay
            const result = await axiosPublic.get(`/${api}`)
            return result.data
          }
        })
        
        
        
        return {datas, isLoading};


}