import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useIsAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosApi = useAxiosSecure();

  const { data: isAdmin = false, isPending } = useQuery({
    queryKey: ['user', user?.email], // Adjust query key for uniqueness
    queryFn: async () => {
      if (!user?.email) {
        // Return a fallback value if the email is undefined
        return false; 
      }
      const res = await axiosApi.get(`user/admin/${user?.email}`);
      return res.data.isAdmin;
    },
    enabled: !!user?.email, // Only run query if email exists
  });

  return { isAdmin, isPending };
};

export default useIsAdmin;
