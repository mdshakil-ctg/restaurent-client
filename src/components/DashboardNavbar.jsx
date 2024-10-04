import { MdEmail } from "react-icons/md";
import { IoNotifications, IoSettings } from "react-icons/io5";

const DashboardNavbar = () => {
    return (
        <div className="bg-[#1C1C1C]  flex justify-end p-5 space-x-5">
        <div className=" inline-block relative">
          <MdEmail className="text-white text-xl inline-block" />
          <div className="w-2 h-2 rounded-full bg-red-600 absolute top-0 -right-1"></div>
        </div>
        <div className=" inline-block relative">
          <IoNotifications className="text-white text-xl inline-block" />
          <div className="w-2 h-2 rounded-full bg-green-400 absolute top-0 right-0"></div>
        </div>
        <div className=" inline-block relative">
          <IoSettings className="text-white text-xl inline-block" />
          <div className="w-2 h-2 rounded-full bg-pink-400 absolute top-0 right-0"></div>
        </div>
      </div>
    );
};

export default DashboardNavbar;