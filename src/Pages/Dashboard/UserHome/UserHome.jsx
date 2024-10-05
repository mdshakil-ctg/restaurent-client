import { useContext } from "react";
import { AuthContext } from "./../../../Providers/AuthProvider";
import { FaPhoneFlip, FaWallet } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import { SlOptionsVertical } from "react-icons/sl";
import { BsShop } from "react-icons/bs";
import { FaCartFlatbed } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { PiNotebookBold } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
const UserHome = () => {
  const { user, loading } = useContext(AuthContext);
  const { cart, isLoading } = useCart();

  if (loading || isLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  return (
    <div className="scrollbar-gutter-stable h-[70vh] flex flex-col">
      <div className="grid grid-cols-3 gap-5 p-4 flex-grow-0">
        {/* Menus */}
        <div className="bg-[#1C1C1C] text-slate-400">
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
            <span className="text-sm font-semibold">Menus</span>
            <span className="cursor-pointer">
              <SlOptionsVertical  className="text-yellow-400"/>
            </span>
          </div>
          <div className="flex justify-center my-6">
            <FaWallet className="text-4xl text-yellow-400" />
          </div>
          <div className="mb-6">
            <p className="font-raleway text-3xl font-bold text-center">209</p>
          </div>
        </div>
        {/* Total Shop */}
        <div className="bg-[#1C1C1C]">
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
            <span className="text-sm font-semibold">Total Shop</span>
            <span className="cursor-pointer">
              <SlOptionsVertical className="text-yellow-400"/>
            </span>
          </div>
          <div className="flex justify-center my-6">
            <BsShop className="text-4xl text-yellow-400" />
          </div>
          <div className="mb-6">
            <p className="font-raleway text-3xl font-bold text-center text-slate-400">
              67
            </p>
          </div>
        </div>
        {/* Contacts */}
        <div className="bg-[#1C1C1C]">
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
            <span className="text-sm font-semibold">Contacts</span>
            <span className="cursor-pointer">
              <SlOptionsVertical className="text-yellow-400"/>
            </span>
          </div>
          <div className="flex justify-center my-6">
            <FaPhoneFlip className="text-4xl text-yellow-400" />
          </div>
          <div className="mb-6">
            <p className="font-raleway text-3xl font-bold text-center text-slate-400">
              17
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mx-4  flex-grow overflow-auto">
        {/* User Profile */}
        <div className="bg-[#1C1C1C] flex flex-col">
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
            <span className="text-sm font-semibold">User Profile</span>
            <span className="cursor-pointer text-yellow-400">
              <SlOptionsVertical />
            </span>
          </div>
          <div className="flex flex-col text-xs text-slate-400 items-center justify-center flex-grow">
            <img
              className="w-20 rounded-full mb-2"
              src={user?.photoURL}
              alt="user-photo"
            />
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <p>Phone: +880 1819 000000</p>
          </div>
        </div>
        {/* User Activities */}
        <div className="bg-[#1C1C1C] flex flex-col">
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
            <span className="text-sm font-semibold">User Activities</span>
            <span className="cursor-pointer text-yellow-400">
              <SlOptionsVertical />
            </span>
          </div>
          <div className="flex flex-col text-xs text-slate-400 gap-2 items-center justify-center flex-grow  pl-[20%]">
            <div className="flex  w-full gap-2 pl-3">
              <FaCartFlatbed className="text-blue-400 text-xl" />
              <p className="text-sm flex-grow">ORDERS : {cart?.length}</p>
            </div>
            <div className="flex  w-full gap-2 pl-3">
              <MdReviews  className="text-pink-400 text-xl" />
              <p className="text-sm flex-grow">REVIEWS : 3</p>
            </div>
            <div className="flex w-full gap-2 pl-3">
              <PiNotebookBold  className="text-green-400 text-xl" />
              <p className="text-sm flex-grow">BOOKINGS : 16</p>
            </div>
            <div className="flex w-full gap-2 pl-3">
              <RiSecurePaymentLine   className="text-red-400 text-xl" />
              <p className="text-sm flex-grow">PAYMENT : 9</p>
            </div>
          
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
