import { useQuery } from "@tanstack/react-query";
import { SlOptionsVertical } from "react-icons/sl";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { FcOk } from "react-icons/fc";
import { MdPending } from "react-icons/md";

const ManageBookings = () => {
  const axiosSecure = useAxiosSecure();
  //get the booking data from the database
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data;
    },
  });

  const handleActivity = async (id) => {
    const result = await axiosSecure.put(`/bookings/${id}`);
    console.log(result);
  };

  return (
    <div className="min-h-svh max-w-screen-lg p-4 pt-0 md:p-12 ">
      <div className="text-center md:text-start">
      <SectionTitle
        title="manage all bookings"
        subTitle="at a glance!"
      ></SectionTitle>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-black mb-4 md:mb-12">
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400 ">
            <div className="text-sm font-semibold ">
              Total Bookings : <span>{bookings?.length}</span>
            </div>
            <span className="cursor-pointer">
              <SlOptionsVertical className="text-yellow-400" />
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35]  text-slate-400 ">
            <span className="text-sm font-semibold ">Options</span>
            <span className="cursor-pointer">
              <SlOptionsVertical className="text-yellow-400" />
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35]  text-slate-400">
            <span className="text-sm font-semibold ">Menulist</span>
            <span className="cursor-pointer">
              <SlOptionsVertical className="text-yellow-400" />
            </span>
          </div>
        </div>
        {/* table content */}
        <div className="bg-[#1C2A35] max-w-[calc(100vw-110px)] md:max-w-[calc(100vw-230px)]  min-h-[500px] !overflow-x-auto overflow-y-auto scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-700 md:p-10">
          <table className="table">
            {/* head */}
            <thead className="text-slate-400">
              <tr>
                <th>User Email</th>
                <th>Phone Number</th>
                <th>Date</th>
                <th>Time</th>
                <th>Total Guest</th>
                <th>Activity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="border-none">
                  <td>{booking?.email}</td>
                  <td>{booking?.phone}</td>
                  <td>{booking?.date}</td>
                  <td>{booking?.time}</td>
                  <td>{booking?.guest}</td>
                  <td>
                    {booking?.activity ? (
                      <span>Done</span>
                    ) : (
                      <span>pending</span>
                    )}
                  </td>
                  <td>
                    {booking?.activity ? (
                      <button
                        onClick={() => {
                          handleActivity(booking._id);
                        }}
                        disabled
                        className=" btn-xs"
                      >
                        <FcOk className="text-2xl" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleActivity(booking._id);
                        }}
                        className="btn btn-ghost btn-xs"
                      >
                        <MdPending className="text-2xl" />
                      </button>
                    )}
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

export default ManageBookings;
