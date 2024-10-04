import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome, FaCompress, FaUserShield} from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { GiSecretBook } from "react-icons/gi";
import { HiMenuAlt1, HiTemplate  } from "react-icons/hi";
import { TbShoppingBagEdit } from "react-icons/tb";
import { MdPayment, MdReviews, MdLeakAdd } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import profileImg from "../../src/assets/others/profile.png";
import useIsAdmin from "../Hooks/useIsAdmin";
import LoaderCup from "../components/LoaderCup/LoaderCup";
import Footer from "../Pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import './Dashboard.css'
import DashboardNavbar from "../components/DashboardNavbar";

const Dashboard = () => {
  const { isAdmin, isPending } = useIsAdmin();
  const { user } = useContext(AuthContext);
  // console.log(user);
  // console.log(isAdmin);
  if (isPending) return <LoaderCup></LoaderCup>;
  return (
    <>
      <div className="flex bg-black">
        {/* //dashboard content */}
        <div className="w-[300px] bg-[#1C2A35] text-white p-2">
          {/* <h1 className="uppercase mt-6 mb-20 text-center font-bold text-[20px] leading-6 font-serif ">
          bistro boss <br /> <span className="text-[16px]">restaurant</span>
        </h1> */}
          <div>
            <div className="bg-yellow-400 w-16 h-16 mx-auto mt-8 mb-2 rounded-2xl flex">
              <img
                src={user?.photoURL || profileImg}
                className=" w-full h-auto object-cover p-3 pb-0 border-2 rounded-2xl"
                alt="user-image"
              />
            </div>
            <h3 className="text-center text-sm font-satisfy">
              {user.displayName}
            </h3>
          </div>
          {isAdmin ? (
            <ul className="p-8">
              <NavLink to="/dashboard/adminHome">
              <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <AiFillDashboard className="text-xl" /> <span className="ml-2">dashboard</span> 
                </li>
              </NavLink>
              <NavLink to="/dashboard/addItem">
              <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <MdLeakAdd  className="text-xl" /> <span className="ml-2">add items</span> 
                </li>
              </NavLink>
              <NavLink to="/dashboard/manageItems">
              <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <TbShoppingBagEdit className="text-xl" /> <span className="ml-2">manage items</span> 
                </li>
              </NavLink>
              <NavLink to="/dashboard/manageBookings">
              <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <GiSecretBook  className="text-xl" /> <span className="ml-2">manage bookings</span> 
                </li>
              </NavLink>
              <NavLink to="/dashboard/allUsers">
              <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <FaUserShield className="text-xl" /><span className="ml-2">all users</span> 
                </li>
              </NavLink>
            </ul>
          ) : (
            <ul className="p-8">
             
              <NavLink to="/dashboard/user-home">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <AiFillDashboard className="text-xl" /> <span className="ml-2">Dashboard</span> 
                </li>
              </NavLink>
              <NavLink to="/dashboard/reservation">
              <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <FaCompress  className="text-xl" /> <span className="ml-2">Reservation</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/payment-history">
              <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <MdPayment className="text-xl" /> <span className="ml-2">payment</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/myCart">
              <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <FaCartShopping className="text-xl" /> <span className="ml-2">My Cart</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/addReview">
              <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <MdReviews className="text-xl" /> <span className="ml-2">Add review</span>
                </li>
              </NavLink>
              
              <NavLink to="myBooking">
              <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <FaBook className="text-xl" /> <span className="ml-2">My Bookings</span>
                </li>
              </NavLink>
            </ul>
          )}

          <div className="border border-yellow-600 mx-4"></div>

          <div>
            <ul className="p-8">
              <NavLink to="/">
              <li className="flex items-center font-medium hover:bg-black hover:rounded-lg hover:text-yellow-300  capitalize px-2 py-1">
                  <FaHome className="text-xl" /> <span className="ml-2">home</span>
                </li>
              </NavLink>
              <NavLink to="/menu">
              <li className="flex items-center font-medium hover:bg-black hover:rounded-lg hover:text-yellow-300  capitalize px-2 py-1">
                  <HiMenuAlt1  className="text-xl" /> <span className="ml-2">menu</span>
                </li>
              </NavLink>
              <NavLink to="/shop/soup">
              <li className="flex items-center font-medium hover:bg-black hover:rounded-lg hover:text-yellow-300  capitalize px-2 py-1">
                  <HiTemplate  className="text-xl" /> <span className="ml-2">gallary</span>
                </li>
              </NavLink>
              <NavLink to="/contact">
              <li className="flex items-center font-medium hover:bg-black hover:rounded-lg hover:text-yellow-300 capitalize px-2 py-1">
                  <FaUserShield className="text-xl" /> <span className="ml-2">contact</span>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        {/* outlet content */}
        <div className="flex-1 bg-black text-slate-200">
          <DashboardNavbar/>
          <Outlet></Outlet>
        </div>
      </div>
      {/* footer content */}
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
