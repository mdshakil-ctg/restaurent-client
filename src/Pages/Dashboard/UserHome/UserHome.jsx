// import { useContext } from "react";
// import { AuthContext } from "./../../../Providers/AuthProvider";
// import { FaPhoneFlip, FaWallet } from "react-icons/fa6";
// import useCart from "../../../Hooks/useCart";
// import { SlOptionsVertical } from "react-icons/sl";
// import { BsShop } from "react-icons/bs";
// import { FaCartFlatbed } from "react-icons/fa6";
// import { MdReviews } from "react-icons/md";
// import { PiNotebookBold } from "react-icons/pi";
// import { RiSecurePaymentLine } from "react-icons/ri";
// import CanvasJSReact from "@canvasjs/react-charts";
// import OptionSection from "../../../components/OptionSection";
// import { FaHandHoldingHeart } from "react-icons/fa";
// import { FaShareFromSquare } from "react-icons/fa6";
// import { FaCalendarTimes } from "react-icons/fa";
// import proImg from '../../../assets/others/profile.png'
// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const UserHome = () => {
//   const { user, loading } = useContext(AuthContext);
//   const { cart, isLoading } = useCart();

//   if (loading || isLoading) {
//     return <span className="loading loading-ring loading-lg"></span>;
//   }

//   // Data for the user's activity chart
//   const chartOptions = {
//     animationEnabled: true,
//     backgroundColor: "#1C1C1C",
//     theme: "dark2", // Theme for the chart
//     axisY: {
//       prefix: "",
//       gridThickness: 0,
//       },
    
//     data: [
//       {
//         type: "column", // Chart type
//         dataPoints: [
//           { label: "Orders", y: cart?.length || 0 },
//           { label: "Reviews", y: 3 }, // Replace with dynamic value if available
//           { label: "Bookings", y: 16 }, // Replace with dynamic value
//           { label: "Payments", y: 9 }, // Replace with dynamic value
//           { label: "Favourites", y: 18 }, // Replace with dynamic value
//           { label: "Cancelled", y: 5 }, // Replace with dynamic value
//           { label: "Referrals", y: 12 }, // Replace with dynamic value
//         ],
//       }
//     ]
//   };

//   return (
//     <div className=" flex flex-col">
//       <div className="grid md:grid-cols-2 gap-5 p-4 flex-grow-0">
//         {/* Menus */}
//         <div className="bg-[#1C1C1C] text-slate-400">
//           <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
//             <span className="text-sm font-semibold">Menus</span>
//             <span className="cursor-pointer">
//               <SlOptionsVertical className="text-yellow-400" />
//             </span>
//           </div>
//           <div className="flex justify-center my-6">
//             <FaWallet className="text-4xl text-yellow-400" />
//           </div>
//           <div className="mb-6">
//             <p className="font-raleway text-3xl font-bold text-center">209</p>
//           </div>
//         </div>
//         {/* Total Shop */}
//         <div className="bg-[#1C1C1C]">
//           <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
//             <span className="text-sm font-semibold">Total Shop</span>
//             <span className="cursor-pointer">
//               <SlOptionsVertical className="text-yellow-400" />
//             </span>
//           </div>
//           <div className="flex justify-center my-6">
//             <BsShop className="text-4xl text-yellow-400" />
//           </div>
//           <div className="mb-6">
//             <p className="font-raleway text-3xl font-bold text-center text-slate-400">
//               67
//             </p>
//           </div>
//         </div>
//         {/* Contacts */}
//         <div className="bg-[#1C1C1C]">
//           <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
//             <span className="text-sm font-semibold">Contacts</span>
//             <span className="cursor-pointer">
//               <SlOptionsVertical className="text-yellow-400" />
//             </span>
//           </div>
//           <div className="flex justify-center my-6">
//             <FaPhoneFlip className="text-4xl text-yellow-400" />
//           </div>
//           <div className="mb-6">
//             <p className="font-raleway text-3xl font-bold text-center text-slate-400">
//               17
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-4 mt-0">
//       {/* chartjs option */}
//       <div className="">
//         <OptionSection text={'Monthly Activities'}></OptionSection>
//         <CanvasJSChart options={chartOptions} />
//       </div>
//       {/* user activities */}
//       <div className="bg-[#1C1C1C] flex flex-col">
//           <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
//             <span className="text-sm font-semibold">User Activities</span>
//             <span className="cursor-pointer text-yellow-400">
//               <SlOptionsVertical />
//             </span>
//           </div>
//           <div className="flex flex-col text-xs text-slate-400 items-center justify-center flex-grow p-3 lg:p-0">
//             <div className="space-y-2 text-lg">
//             <div className="flex items-center w-full gap-2 pl-3">
//               <FaCartFlatbed className="text-[#99A1C6] " />
//               <p className=" flex-grow">ORDERS : {cart?.length}</p>
//             </div>
//             <div className="flex items-center w-full gap-2 pl-3">
//               <MdReviews className="text-[#51CDA0] " />
//               <p className=" flex-grow">REVIEWS : 3</p>
//             </div>
//             <div className="flex items-center w-full gap-2 pl-3">
//               <PiNotebookBold className="text-[#DF7970] " />
//               <p className=" flex-grow">BOOKINGS : 16</p>
//             </div>
//             <div className="flex items-center w-full gap-2 pl-3">
//               <RiSecurePaymentLine className="text-[#4C9CA0] " />
//               <p className=" flex-grow">PAYMENT : 9</p>
//             </div>
//             <div className="flex items-center w-full gap-2 pl-3">
//               <FaHandHoldingHeart  className="text-[#C6A4B8] " />
//               <p className=" flex-grow">Favourites : 18</p>
//             </div>
//             <div className="flex items-center w-full gap-2 pl-3">
//               <FaCalendarTimes   className="text-[#D9E18D] " />
//               <p className=" flex-grow">Cancelled : 5</p>
//             </div>
//             <div className="flex items-center w-full gap-2 pl-3">
//               <FaShareFromSquare  className="text-[#88B3C6] " />
//               <p className=" flex-grow">Referrals : 12</p>
//             </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid lg:grid-cols-2 gap-4 mx-4 h-64 flex-grow  overflow-auto mb-4">
//         {/* User Profile */}
//         <div className="bg-[#1C1C1C] flex flex-col">
//           <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
//             <span className="text-sm font-semibold">User Profile</span>
//             <span className="cursor-pointer text-yellow-400">
//               <SlOptionsVertical />
//             </span>
//           </div>
//           <div className="flex flex-col text-xs text-slate-400 items-center justify-center flex-grow">
//             <img
//               className="w-20 rounded-full mb-2"
//           src={user?.photoURL ? user.photoURL : proImg}
//               alt="user-photo"
//             />
//             <p>{user?.displayName}</p>
//             <p>{user?.email}</p>
//             <p>Phone: +880 1819 000000</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserHome;


const UserHome = () => {
  return (
    <div>
      <h1>user home component here</h1>
    </div>
  );
};

export default UserHome;