import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaTrash } from "react-icons/fa6";
import useModal from "../../../Hooks/useModal";

const Mybooking = () => {
  const { openModal = {}, closeModal } = useModal();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data = [], refetch, isLoading } = useQuery({
    queryKey: ["myBookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`myBookings?email=${user?.email}`);
      return res.data.allBookings;
    },
  });
  const handleDeletebooking = (_id) => {
    openModal({
      title: "Warning!!!",
      message: "Are you sure to cancel this Reservation?",
      type: "confirm",
      onConfirm: () => handleConfirmDelete(_id, user),
    });

    const handleConfirmDelete = async (_id, user) => {
      closeModal();
      const res = await axiosSecure.delete(
        `/booking?email=${user.email}&id=${_id}`
      );
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        openModal({
          title: "success!",
          message: `Reserve canceletion done`,
          autoCloseTime: 3000,
        });
        refetch();
      }
    };
  };

  if(isLoading){
    return <div className="flex items-center h-screen">
      <progress className="progress w-3/4 mx-auto h-3"></progress>
    </div>
  }

  return (
    <div>
      {/* mybooking compontnt {myBookings?.length} */}
      mybooking compontnt {data?.length}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Guest Number</th>
                <th>Date & Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={item._id} className="bg-base-200">
                  <th>{i + 1}</th>
                  <td>{item.guest}</td>
                  <td>
                    {item.time} on {item.date}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeletebooking(item._id)}
                      className="btn btn-error"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mybooking;
