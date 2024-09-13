import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import useModal from "../../../../Hooks/useModal";




const AllUsers = () => {
    const {openModal,closeModal} = useModal()

    // const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()

    const {data : users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn : async() =>{
         const res = await axiosSecure.get('/users',{withCredentials: true})
            return res.data
        }
    })
    

    const handleMakeAdmin = (id) =>{
        openModal({
            title: 'Warning!!!',
            message:'Are you sure to make this user admin?',
            type: 'confirm',
            onConfirm: ()=>handleConfirmAdmin(id)
        })
        const handleConfirmAdmin = (id) =>{
            closeModal()
            axiosSecure.patch(`/user/admin/${id}`)
            .then(res => {
                if(res.data.modifiedCount > 0){
                    openModal({
                        title: 'success!',
                        message:'User is admin now',
                        autoCloseTime: 3000,
                    })
                    refetch()
                }
            })
          }
    }

    const handleDeleteUser = (id) =>{
      
        openModal({
            title: 'Warning!!!',
            message:'Are you sure to delete this user?',
            type: 'confirm',
            onConfirm: ()=>handleConfirmDelete(id)
        })
        const handleConfirmDelete = (id) =>{
            closeModal()
            axiosSecure.delete(`/user/admin/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    openModal({
                        title: 'success!',
                        message:'User has been deleted from database.',
                        autoCloseTime: 4000,
                    })
                    refetch()
                }
            })
          }
    }
 
    return (
        <div>
            <SectionTitle title='manage all users' subTitle='how many??'></SectionTitle>
            <div>
                <p>TOTAL USERS : {users?.length}</p>
            </div>
            <div>
            <div>
      
      {/* table content */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                 #
                </th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>

                {
                    users.map((user, index) =>  <tr key={user._id}>
                       <td>
                          {index+1}
                        </td>
                        <td>
                          <div className="flex items-center gap-3">
                           <h3>{user.name}</h3>
                          </div>
                        </td>
                        <td>
                          {user.email}
                        </td>
                        <td>
                          {
                            user.role==='admin'? 'Admin' : 
                            <button onClick={()=>handleMakeAdmin(user._id)} className="btn hover:bg-yellow-500"><FaUsers></FaUsers></button>
                          }
                        </td>
                        <td>
                          <button onClick={()=>handleDeleteUser(user._id)} className="btn hover:bg-yellow-500"><FaTrash></FaTrash></button>
                        </td>
                      </tr>)
                }
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default AllUsers;