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
    <div className="min-h-svh max-w-screen-lg p-12">
      <SectionTitle
        title="manage all bookings"
        subTitle="at a glance!"
      ></SectionTitle>
      <div>
        <div className="flex justify-between gap-6 bg-black p-5">
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400  w-1/3">
            <div className="text-sm font-semibold ">
              Total Bookings : <span>{bookings?.length}</span>
            </div>
            <span className="cursor-pointer">
              <SlOptionsVertical className="text-yellow-400" />
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35]  text-slate-400 w-1/3">
            <span className="text-sm font-semibold ">Options</span>
            <span className="cursor-pointer">
              <SlOptionsVertical className="text-yellow-400" />
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35]  text-slate-400 w-1/3">
            <span className="text-sm font-semibold ">Menulist</span>
            <span className="cursor-pointer">
              <SlOptionsVertical className="text-yellow-400" />
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
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
