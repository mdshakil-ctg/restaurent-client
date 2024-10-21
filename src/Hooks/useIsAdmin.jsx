import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useIsAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosApi = useAxiosSecure();
  console.log('before',loading)

  const { data: isAdmin = false, isPending } = useQuery({
    queryKey: ['user', user?.email], // Adjust query key for uniqueness
    queryFn: async () => {
      if (!user?.email) {
        // Return a fallback value if the email is undefined
        return false; 
      }
      if(!loading){
        const res = await axiosApi.get(`user/admin/${user?.email}`);
      return res.data.isAdmin ?? false;
      }
    },
    enabled: !!user?.email // Only run query if email exists or loading is false
  });
  console.log('after',loading);

  return { isAdmin, isPending };
};

export default useIsAdmin;
