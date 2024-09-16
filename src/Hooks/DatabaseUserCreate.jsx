import { axiosPublic } from "./useAxiosPublic";



const DatabaseUserCreate = async(data) => {
  
 const result = await axiosPublic.post('/users', data)
    return result;
};

export default DatabaseUserCreate;