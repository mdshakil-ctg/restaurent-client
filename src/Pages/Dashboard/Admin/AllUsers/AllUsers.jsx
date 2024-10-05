import { useQuery } from "@tanstack/react-query";
import { SlOptionsVertical } from "react-icons/sl";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import {  FaUsers } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { SiElement } from "react-icons/si";
import { TiEdit } from "react-icons/ti";
import useModal from "../../../../Hooks/useModal";
// import { useContext } from "react";
// import { AuthContext } from './../../../../Providers/AuthProvider';

const AllUsers = () => {
  const { openModal = {}, closeModal } = useModal();

  // const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    openModal({
      title: "Warning!!!",
      message: "Are you sure to make this user admin?",
      type: "confirm",
      onConfirm: () => handleConfirmAdmin(user),
    });
    const handleConfirmAdmin = (user) => {
      closeModal();
      axiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
        if (res.data.modifiedCount > 0) {
          openModal({
            title: "success!",
            message: `${user.name} is admin now`,
            autoCloseTime: 3000,
          });
          refetch();
        }
      });
    };
  };

  const handleDeleteUser = (user) => {
    openModal({
      title: "Warning!!!",
      message: `Are you sure to delete ${user.name} from Database?`,
      type: "confirm",
      onConfirm: () => handleConfirmDelete(user),
    });
    const handleConfirmDelete = (user) => {
      closeModal();
      axiosSecure.delete(`/user/admin/${user._id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          openModal({
            title: "success!",
            message: `${user.name} has been deleted from database.`,
            autoCloseTime: 4000,
          });
          refetch();
        }
      });
    };
  };

  return (
    <div className="min-h-svh max-w-screen-lg px-12">
      <SectionTitle
        title="manage all users"
        subTitle="how many??"
      ></SectionTitle>

<div className="grid grid-cols-3 gap-8 p-4 mb-10 max-w-screen-sm mx-auto">
          <div className="bg-[#1C1C1C]">
            <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400 ">
              <span className="text-sm font-semibold ">Total Customers</span>
              <span className="cursor-pointer">
                <SlOptionsVertical />
              </span>
            </div>
            <div className="flex justify-center my-6 ">
              <p>
                <HiUsers className="text-6xl text-yellow-400" />
              </p>
            </div>
            <div className="mb-6">
              <p className="font-raleway text-3xl font-bold text-slate-400 text-center">
                {users?.length}
              </p>
            </div>
          </div>
        
          <div className="bg-[#1C1C1C]">
            <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400 ">
              <span className="text-sm font-semibold ">Total Payments</span>
              <span className="cursor-pointer">
                <SlOptionsVertical />
              </span>
            </div>
            <div className="flex justify-center my-6 ">
              <p>
                <SiElement className="text-6xl text-yellow-400" />
              </p>
            </div>
            <div className="mb-6">
              <p className="font-raleway text-3xl font-bold text-slate-400 text-center">
                107
              </p>
            </div>
          </div>
          <div className="bg-[#1C1C1C]">
            <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400 ">
              <span className="text-sm font-semibold ">Orders</span>
              <span className="cursor-pointer">
                <SlOptionsVertical />
              </span>
            </div>
            <div className="flex justify-center my-6 ">
              <p>
                <FaTelegramPlane className="text-6xl text-yellow-400" />
              </p>
            </div>
            <div className="mb-6">
              <p className="font-raleway text-3xl font-bold text-slate-400 text-center">
                249
              </p>
            </div>
          </div>
        </div>

      <div>
        <div>
          {/* table content */}
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="text-slate-400">
                  <tr>
                    <th>#</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ROLE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id} className="border-none">
                      <td>{index + 1}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <h3>{user.name}</h3>
                        </div>
                      </td>
                      <td>{user.email}</td>
                      <td>
                        {user.role === "admin" ? (
                          <span className="text-yellow-300 text-base bg-black rounded">ADMIN</span>
                        ) : (
                          
                          <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs ">
                          <FaUsers className="text-2xl badge badge-info hover:bg-yellow-400 hover:text-slate-900 rounded" />
                        </button>
                        )}
                      </td>
                      <td>
                        <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-xs ">
                          <TiEdit className="text-2xl badge badge-error hover:badge-warning hover:text-slate-900 rounded" />
                        </button>
                      </td>
                    </tr>
                  ))}
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
