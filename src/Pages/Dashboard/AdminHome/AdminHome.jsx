// import { FaHandHoldingDollar } from "react-icons/fa6";
// import { FaTelegramPlane } from "react-icons/fa";
// import { HiUsers } from "react-icons/hi2";
// import { SiElement } from "react-icons/si";
// import { SlOptionsVertical } from "react-icons/sl";
// import {  IoSettings } from "react-icons/io5";
// import CanvasJSReact from "@canvasjs/react-charts";
// import { useRef } from "react";
// // import { PiChartBar } from "react-icons/pi";
// const CanvasJSChart = CanvasJSReact.CanvasJSChart;
// const AdminHome = () => {
//   // Original sales data in units
//   const totalSalesData = [
//     { label: "Dessert", value: 250 },
//     { label: "Pizza", value: 300 },
//     { label: "Salad", value: 150 },
//     { label: "Soup", value: 100 },
//     { label: "Drinks", value: 200 },
//     { label: "Others", value: 50 },
//   ];
  
// const colors = {
//     Salad: "#003f5c",
//     Pizza: "#ffa600",
//     Soup: "#dc9094 ",
//     Dessert: "#ff6361",
//     Drinks: "#58508d",
//     Others: "#bc5090",
//   };
//   const totalSales = totalSalesData.reduce((acc, item) => acc + item.value, 0);

//   const dataPoints = totalSalesData.map((item) => ({
//     y: Math.round((item.value / totalSales) * 100),
//     label: item.label,
//     color: colors[item.label]
//   }));

//   console.log(dataPoints);

//   const option = {
//     animationEnabled: true,
//     exportEnabled: true,
// 	backgroundColor: "#1C1C1C",
//     theme: "dark1", // "light1", "dark1", "dark2"
//     title: {
//       text: "",
//     },
//     data: [
//       {
//         type: "pie",
//         indexLabel: "{label}: {y}%",
//         startAngle: 180,
//         dataPoints: dataPoints,
//       },
//     ],
//   };

//   //weekly sales chart code

//   const chartRef = useRef(null);
//   // Common date points for all categories
//   const dates = [
//     new Date(2024, 5, 25),
//     new Date(2024, 5, 26),
//     new Date(2024, 5, 27),
//     new Date(2024, 5, 28),
//     new Date(2024, 5, 29),
//     new Date(2024, 5, 30),
//     new Date(2024, 6, 1),
//   ];

//   // Y-values for each category
//   const salesData = {
//     Salad: [56, 45, 71, 41, 60, 75, 98],
//     Pizza: [86, 95, 71, 58, 60, 65, 89],
//     Soup: [48, 45, 41, 55, 80, 85, 83],
//     Dessert: [61, 55, 61, 75, 80, 85, 105],
//     Drinks: [52, 55, 20, 35, 30, 45, 25],
//     Others: [52, 55, 20, 35, 30, 45, 25],
//   };

//   // Define colors for each data series

//   // Construct dataPoints array for each category
//   const createDataSeries = (name, yValues) => {
//     return {
//       type: "stackedBar",
//       name: name,
//       showInLegend: true,
//       color: colors[name],
//       xValueFormatString: "DD, MMM",
//       yValueFormatString: "$#,##0",
//       dataPoints: dates.map((date, index) => ({ x: date, y: yValues[index] })),
//     };
//   };

//   // Construct all the data series
//   const dataSeries = Object.keys(salesData).map((category) =>
//     createDataSeries(category, salesData[category])
//   );

//   //weekly Chart options
//   const options = {
//     animationEnabled: true,
//     theme: "dark1",
// 	backgroundColor: "#1C1C1C",
//     title: {
//       text: "",
//     },
//     axisX: {
//       valueFormatString: "DDD",
//     },
//     axisY: {
// 		prefix: "$",
// 		gridThickness: 0,
//     },
//     toolTip: {
//       shared: true,
//     },
//     legend: {
//       cursor: "pointer",
//       itemclick: (e) => {
//         if (
//           typeof e.dataSeries.visible === "undefined" ||
//           e.dataSeries.visible
//         ) {
//           e.dataSeries.visible = false;
//         } else {
//           e.dataSeries.visible = true;
//         }
//         chartRef.current.render();
//       },
//     },
//     data: dataSeries,
//   };

//   return (
//     <div className="md:mr-5">
//      <div>
      
//      </div>
//       <div className="grid md:grid-cols-2 ">
//         <div className="grid md:grid-cols-2 gap-5 p-4">
//           <div className="bg-[#1C1C1C] text-slate-400">
//             <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
//               <span className="text-sm font-semibold ">Revenue</span>
//               <span className="cursor-pointer">
//                 <SlOptionsVertical />
//               </span>
//             </div>
//             <div className="flex justify-center my-6 ">
//               <p>
//                 <FaHandHoldingDollar className="text-6xl text-yellow-400" />
//               </p>
//             </div>
//             <div className="mb-6">
//               <p className="font-raleway text-3xl font-bold text-center">
//                 $ 18654
//               </p>
//             </div>
//           </div>
//           <div className="bg-[#1C1C1C]">
//             <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400 ">
//               <span className="text-sm font-semibold ">Customers</span>
//               <span className="cursor-pointer">
//                 <SlOptionsVertical />
//               </span>
//             </div>
//             <div className="flex justify-center my-6 ">
//               <p>
//                 <HiUsers className="text-6xl text-yellow-400" />
//               </p>
//             </div>
//             <div className="mb-6">
//               <p className="font-raleway text-3xl font-bold text-slate-400 text-center">
//                 63
//               </p>
//             </div>
//           </div>
//           <div className="bg-[#1C1C1C]">
//             <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400 ">
//               <span className="text-sm font-semibold ">Products</span>
//               <span className="cursor-pointer">
//                 <SlOptionsVertical />
//               </span>
//             </div>
//             <div className="flex justify-center my-6 ">
//               <p>
//                 <SiElement className="text-6xl text-yellow-400" />
//               </p>
//             </div>
//             <div className="mb-6">
//               <p className="font-raleway text-3xl font-bold text-slate-400 text-center">
//                 107
//               </p>
//             </div>
//           </div>
//           <div className="bg-[#1C1C1C]">
//             <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400 ">
//               <span className="text-sm font-semibold ">Orders</span>
//               <span className="cursor-pointer">
//                 <SlOptionsVertical />
//               </span>
//             </div>
//             <div className="flex justify-center my-6 ">
//               <p>
//                 <FaTelegramPlane className="text-6xl text-yellow-400" />
//               </p>
//             </div>
//             <div className="mb-6">
//               <p className="font-raleway text-3xl font-bold text-slate-400 text-center">
//                 249
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className=" bg-[#1C1C1C] ml-4 my-4">
//           <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-white opacity-80">
//             <span className="text-sm font-semibold ">
//               Weekly sales in restaurant
//             </span>
//             <span className="cursor-pointer">
//               <SlOptionsVertical />
//             </span>
//           </div>
// 		  <div className="m-5">
// 		  <CanvasJSChart
//               options={options}
//               onRef={(ref) => (chartRef.current = ref)}
//             />
// 		  </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 mb-5">
        
//         <div className="ml-4 relative">
// 			<div className="w-12 bg-[#1C1C1C] absolute right-0 top-0 z-10"><IoSettings className="text-4xl text-white p-2"></IoSettings></div>
// 			<div className="w-20 h-4 bg-[#1C1C1C] absolute right-0 bottom-12 z-10"></div>
//           <CanvasJSChart options={option}/>
// 		  <div className="text-yellow-400 text-center bg-[#1C1C1C] pt-2 pb-5 text-sm md:text-xl">Percentage sales of menu</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;


const AdminHome = () => {
  return (
    <div>
      <h1>admin home component here</h1>
    </div>
  );
};

export default AdminHome;