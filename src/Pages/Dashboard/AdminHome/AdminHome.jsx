import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { SiElement } from "react-icons/si";
import { SlOptionsVertical } from "react-icons/sl";
import { IoSettings } from "react-icons/io5";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";
const AdminHome = () => {
  const data = [
    {
      name: "Monday",
      salad: 120,
      pizza: 300,
      soup: 200,
      dessert: 150,
      drinks: 220,
      others: 100,
    },
    {
      name: "Tuesday",
      salad: 90,
      pizza: 270,
      soup: 180,
      dessert: 140,
      drinks: 210,
      others: 80,
    },
    {
      name: "Wednesday",
      salad: 140,
      pizza: 320,
      soup: 240,
      dessert: 160,
      drinks: 230,
      others: 110,
    },
    {
      name: "Thursday",
      salad: 130,
      pizza: 310,
      soup: 210,
      dessert: 150,
      drinks: 220,
      others: 100,
    },
    {
      name: "Friday",
      salad: 150,
      pizza: 350,
      soup: 250,
      dessert: 170,
      drinks: 240,
      others: 120,
    },
    {
      name: "Saturday",
      salad: 160,
      pizza: 360,
      soup: 260,
      dessert: 180,
      drinks: 250,
      others: 130,
    },
    {
      name: "Sunday",
      salad: 110,
      pizza: 280,
      soup: 190,
      dessert: 130,
      drinks: 200,
      others: 90,
    },
  ];
  // Sample data for total sale amount in USD
  const totalAmountData = [
    { name: "Salad", value: 1200 },
    { name: "Pizza", value: 3000 },
    { name: "Soup", value: 2000 },
    { name: "Dessert", value: 1500 },
    { name: "Drinks", value: 1800 },
    { name: "Others", value: 1000 },
  ];

  // Sample data for total number of pieces sold
  const totalPiecesData = [
    { name: "Salad", value: 150 },
    { name: "Pizza", value: 250 },
    { name: "Soup", value: 180 },
    { name: "Dessert", value: 200 },
    { name: "Drinks", value: 220 },
    { name: "Others", value: 90 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff6f61', '#00bcd4', '#a4de6c'];
  // Custom tooltip to show the sales details
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black p-3 ">
          <p className="label">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  

  return (
    <div className="md:mr-5">
      <div></div>
      <div className="grid lg:grid-cols-2 ">
        <div className="grid md:grid-cols-2 gap-5 p-4">
          <div className="bg-[#1C1C1C] text-slate-400">
            <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400">
              <span className="text-sm font-semibold ">Revenue</span>
              <span className="cursor-pointer">
                <SlOptionsVertical className="text-yellow-400" />
              </span>
            </div>
            <div className="flex justify-center my-6 ">
              <p>
                <FaHandHoldingDollar className="text-6xl text-yellow-400" />
              </p>
            </div>
            <div className="mb-6">
              <p className="font-raleway text-3xl font-bold text-center">
                $ 18654
              </p>
            </div>
          </div>
          <div className="bg-[#1C1C1C]">
            <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400 ">
              <span className="text-sm font-semibold ">Customers</span>
              <span className="cursor-pointer">
                <SlOptionsVertical className="text-yellow-400" />
              </span>
            </div>
            <div className="flex justify-center my-6 ">
              <p>
                <HiUsers className="text-6xl text-yellow-400" />
              </p>
            </div>
            <div className="mb-6">
              <p className="font-raleway text-3xl font-bold text-slate-400 text-center">
                63
              </p>
            </div>
          </div>
          <div className="bg-[#1C1C1C]">
            <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400 ">
              <span className="text-sm font-semibold ">Products</span>
              <span className="cursor-pointer">
                <SlOptionsVertical className="text-yellow-400" />
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
                <SlOptionsVertical className="text-yellow-400" />
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
        <div className=" bg-[#1C1C1C] ml-4 my-4">
          <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-400 opacity-80">
            <span className="text-sm font-semibold ">
              Percentage sales of menu
            </span>
            <span className="cursor-pointer">
              <SlOptionsVertical className="text-yellow-400" />
            </span>
          </div>
          <div className="m-5">
          <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        {/* Pie for total sales amount */}
        <Pie
          dataKey="value"
          data={totalAmountData}
          cx="30%"
          cy="65%"
          outerRadius={80}
          label={({ name, value }) => `${name}: $${value}`}
        >
          {totalAmountData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        {/* Pie for total number of pieces sold */}
        <Pie
          dataKey="value"
          data={totalPiecesData}
          cx="70%"
          cy="40%"
          innerRadius={40}
          outerRadius={80}
          label={({ name, value }) => `${name}: ${value}p`}
        >
          {totalPiecesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        {/* Tooltip and unique legend */}
        <Tooltip />
        {/* <Legend  layout="horizontal" align="center" verticalAlign="bottom" /> */}
      </PieChart>

    </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 mb-5">
        <div className="ml-4">
          <div className="text-slate-400 text-center bg-[#1C2A35] p-5 text-sm md:text-xl flex justify-between items-center">
            <p>Weekly sales in restaurant</p>
            <div>
              <IoSettings className="text-yellow-400" />
            </div>
          </div>
          <div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="salad" fill="#82ca9d" />
                <Bar dataKey="pizza" fill="#8884d8" />
                <Bar dataKey="soup" fill="#ffc658" />
                <Bar dataKey="dessert" fill="#ff6f61" />
                <Bar dataKey="drinks" fill="#00bcd4" />
                <Bar dataKey="others" fill="#a4de6c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
