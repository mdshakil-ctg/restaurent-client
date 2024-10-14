import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../../Providers/AuthProvider";
import { FaPhoneFlip, FaWallet } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import { SlOptionsVertical } from "react-icons/sl";
import { BsShop } from "react-icons/bs";
import { FaCartFlatbed } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { PiNotebookBold } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip,Legend } from "recharts";
import OptionSection from "../../../components/OptionSection";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaCalendarTimes } from "react-icons/fa";
import proImg from "../../../assets/others/profile.png";

const UserHome = () => {
  const [showLabels, setShowLabels] = useState(true);
  const { user, loading } = useContext(AuthContext);
  const { cart, isLoading } = useCart();

  // Adjust label visibility based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setShowLabels(width > 767); // Show labels only on screens wider than 768px
    };

    handleResize(); // Set initial label visibility
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading || isLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  const userData = [
    { name: "Orders", value: 2 },
    { name: "Reviews", value: 3 },
    { name: "Bookings", value: 16 },
    { name: "Payments", value: 9 },
    { name: "Favorites", value: 18 },
    { name: "Cancelled", value: 5 },
    { name: "Referrals", value: 12 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff6f61', '#00bcd4', '#a4de6c','#27be3b'];
 

  return (
    <div className=" flex flex-col">
      <div className="grid md:grid-cols-2 gap-5 p-4 flex-grow-0">
        {/* Menus */}
        <div className="bg-[#1C1C1C] text-slate-400">
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
            <span className="text-sm font-semibold">Menus</span>
            <span className="cursor-pointer">
              <SlOptionsVertical className="text-yellow-400" />
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
          <div className="flex justify-between items-center px-4 py-2 bg-[#277dbe] text-slate-400">
            <span className="text-sm font-semibold">Total Shop</span>
            <span className="cursor-pointer">
              <SlOptionsVertical className="text-yellow-400" />
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
              <SlOptionsVertical className="text-yellow-400" />
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-4 mt-0">
        {/* chartjs option */}
        <div className="">
          <OptionSection text={"Monthly Activities"}></OptionSection>
          <div>
            <ResponsiveContainer width="100%" height={500}>
              <PieChart>
                <Pie
                  data={userData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={showLabels ? ({ name, value }) => `${name}: ${value}` : false} // Conditional label rendering
                  labelLine={false}
                  legendType={`${showLabels || 'none'}`}
                >
                  {userData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* user activities */}
        <div className="bg-[#1C1C1C] flex flex-col">
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
            <span className="text-sm font-semibold">User Activities</span>
            <span className="cursor-pointer text-yellow-400">
              <SlOptionsVertical />
            </span>
          </div>
          <div className="flex flex-col text-xs text-slate-400 items-center justify-center flex-grow p-3 lg:p-0">
            <div className="space-y-2 text-lg">
              <div className="flex items-center w-full gap-2 pl-3">
                <FaCartFlatbed className="text-[#8884d8] " />
                <p className=" flex-grow">ORDERS : {cart?.length}</p>
              </div>
              <div className="flex items-center w-full gap-2 pl-3">
                <MdReviews className="text-[#82ca9d] " />
                <p className=" flex-grow">REVIEWS : 3</p>
              </div>
              <div className="flex items-center w-full gap-2 pl-3">
                <PiNotebookBold className="text-[#ffc658] " />
                <p className=" flex-grow">BOOKINGS : 16</p>
              </div>
              <div className="flex items-center w-full gap-2 pl-3">
                <RiSecurePaymentLine className="text-[#ff6f61] " />
                <p className=" flex-grow">PAYMENT : 9</p>
              </div>
              <div className="flex items-center w-full gap-2 pl-3">
                <FaHandHoldingHeart className="text-[#00bcd4] " />
                <p className=" flex-grow">Favourites : 18</p>
              </div>
              <div className="flex items-center w-full gap-2 pl-3">
                <FaCalendarTimes className="text-[#a4de6c] " />
                <p className=" flex-grow">Cancelled : 5</p>
              </div>
              <div className="flex items-center w-full gap-2 pl-3">
                <FaShareFromSquare className="text-[#27be3b] " />
                <p className=" flex-grow">Referrals : 12</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mx-4 h-64 flex-grow  overflow-auto mb-4">
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
              src={user?.photoURL ? user.photoURL : proImg}
              alt="user-photo"
            />
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <p>Phone: +880 1819 000000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
