import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaTrash } from "react-icons/fa6";
import useModal from "../../../Hooks/useModal";
import OptionSection from "../../../components/OptionSection";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

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
    <div className="md:p-20 pb-6 pt-5">
      <div className="ml-3">
        <SectionTitle title={'my bookings'} subTitle={'are you ready'}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-3 md:mx-0  lg:grid-cols-3 gap-5 mb-10">
        <OptionSection text={`My Total Bookings: ${data?.length} `}></OptionSection>
        <OptionSection text={'Options'}></OptionSection>
        <OptionSection text={'Cancle Bookings'}></OptionSection>
      </div>
      <div>
        <div className="overflow-x-auto overflow-y-auto h-full max-w-[calc(100vw-110px)] md:max-w-[calc(100vw-230px)] bg-[#1C1C1C] ml-3 md:ml-0 md:px-10 md:py-5">
          <table className="table">
            {/* head */}
            <thead className="text-blue-400">
              <tr> 
                <th className="text-center">Guest Number</th>
                <th className="text-center">Date & Time</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id} className="border-none text-center">
                  
                  <td>{item.guest} Person</td>
                  <td>
                    <div>
                    {item.time} on {item.date}
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeletebooking(item._id)}
                      className="badge badge-md badge-error"
                    >
                      <FaTrash className="text-black"></FaTrash>
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
