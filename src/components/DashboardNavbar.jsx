import { MdEmail } from "react-icons/md";
import { IoNotifications, IoSettings } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
const DashboardNavbar = () => {
    return (
        <div className="bg-[#1C1C1C]  flex justify-between items-center px-6 py-3 ">
         <div className="relative">
          {/* <input className="border bg-[#16212A] w-full " type="text" name="" id="" /> */}
          <input className="w-[300px] h-[30px] pr-10 pl-4 m-0 bg-black font-medium placeholder:text-sm focus:outline-none focus:border-b  focus:border-b-yellow-300 " type="text" name="" id="" placeholder=""  />
          <FaSearch className="absolute top-2 text-yellow-400 right-2 cursor-pointer "></FaSearch>
        </div>
        
        <div className="space-x-5">
        <div className=" inline-block relative">
          <MdEmail className="text-white text-xl inline-block cursor-pointer" />
          <div className="w-2 h-2 rounded-full bg-red-600 absolute top-0 -right-1"></div>
        </div>
        <div className=" inline-block relative">
          <IoNotifications className="text-white text-xl inline-block cursor-pointer" />
          <div className="w-2 h-2 rounded-full bg-green-400 absolute top-0 right-0"></div>
        </div>
        <div className=" inline-block relative">
          <IoSettings className="text-white text-xl inline-block cursor-pointer" />
          <div className="w-2 h-2 rounded-full bg-pink-400 absolute top-0 right-0"></div>
        </div>
        </div>
      </div>
    );
};

export default DashboardNavbar;