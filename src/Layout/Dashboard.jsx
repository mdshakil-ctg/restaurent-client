import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FaBook, FaHome, FaCompress, FaUserShield } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { GiSecretBook } from "react-icons/gi";
import { HiMenuAlt1, HiTemplate } from "react-icons/hi";
import { TbShoppingBagEdit } from "react-icons/tb";
import { MdPayment, MdReviews, MdLeakAdd } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import profileImg from "../../src/assets/others/profile.png";
import useIsAdmin from "../Hooks/useIsAdmin";
import LoaderCup from "../components/LoaderCup/LoaderCup";
import Footer from "../Pages/Shared/Footer/Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import "./Dashboard.css";
import DashboardNavbar from "../components/DashboardNavbar";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.includes("/user-");
  console.log(hideNavbar);
  //todo: hide the footer for admin routes

  const { isAdmin, isPending } = useIsAdmin();
  const { user } = useContext(AuthContext);
  const { cart, refetch } = useCart();

  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isPending) return <LoaderCup></LoaderCup>;
  return (
    <>
      <div className="flex bg-black">
        {/* dashboard for mini screen */}
        <div className="bg-[#1C2A35] text-white block md:hidden min-h-screen">
          {/* profile display */}
          <div className="bg-yellow-400 w-12 h-12 mx-auto my-6 rounded-2xl flex">
            <img
              src={user?.photoURL || profileImg}
              className=" w-full h-auto object-cover p-3 pb-0 border-2 rounded-2xl"
              alt="user-image"
            />
          </div>
          {/* dashboard navigation */}
          <div>
            {isAdmin ? <ul className="p-3">
              <NavLink to="/dashboard/adminHome">
                <li className="flex items-center  mb-3 px-2 py-1">
                  <AiFillDashboard className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/addItem">
                <li className="flex items-center mb-3 px-2 py-1">
                  <MdLeakAdd className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/manageItems">
                <li className="flex items-center  mb-3 px-2 py-1">
                  <TbShoppingBagEdit className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/manageBookings">
                <li className="flex items-center  mb-3 px-2 py-1">
                  <GiSecretBook className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/allUsers">
                <li className="flex items-center mb-3 px-2 py-1">
                  <FaUserShield className="text-4xl" />
                </li>
              </NavLink>
            </ul> :
            <ul className="p-3">
              <NavLink to="/dashboard/user-home">
                <li className="flex items-center  mb-3 px-2 py-1">
                  <AiFillDashboard className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/user-reservation">
                <li className="flex items-center  mb-3 px-2 py-1">
                  <FaCompress className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/payment-history">
                <li className="flex items-center  mb-3 px-2 py-1">
                  <MdPayment className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/myCart">
                <li className="flex items-center  mb-3 px-2 py-1">
                  <FaCartShopping className="text-4xl" />
                  <span className="ml-2">
                  </span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/addReview">
                <li className="flex items-center mb-3 px-2 py-1">
                  <MdReviews className="text-4xl" />
                </li>
              </NavLink>

              <NavLink to="myBooking">
                <li className="flex items-center mb-3 px-2 py-1">
                  <FaBook className="text-4xl" />
                </li>
              </NavLink>
            </ul>}
          </div>
          <div className="border border-yellow-600 mx-1"></div>
          <div>
            <ul className="p-3">
              <NavLink to="/">
                <li className="flex items-center mb-3 px-2 py-1">
                  <FaHome className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/menu">
                <li className="flex items-center font-medium  mb-3 px-2 py-1">
                  <HiMenuAlt1 className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/shop/soup">
                <li className="flex items-center font-medium mb-3 px-2 py-1">
                  <HiTemplate className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="flex items-center mb-3 px-2 py-1">
                  <FaUserShield className="text-4xl" />
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        
        {/* //dashboard content */}
        <div className="md:w-[230px] lg:w-[300px] min-h-screen  bg-[#1C2A35] text-white p-2 hidden md:block">
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
                  <AiFillDashboard className="text-xl" />
                  <span className="ml-2">dashboard</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/addItem">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <MdLeakAdd className="text-xl" />
                  <span className="ml-2">add items</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/manageItems">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <TbShoppingBagEdit className="text-xl" />
                  <span className="ml-2">manage items</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/manageBookings">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <GiSecretBook className="text-xl" />
                  <span className="ml-2">manage bookings</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/allUsers">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <FaUserShield className="text-xl" />
                  <span className="ml-2">all users</span>
                </li>
              </NavLink>
            </ul>
          ) : (
            <ul className="p-8">
              <NavLink to="/dashboard/user-home">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <AiFillDashboard className="text-xl" />
                  <span className="ml-2">Dashboard</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/user-reservation">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <FaCompress className="text-xl" />
                  <span className="ml-2">Reservation</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/payment-history">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <MdPayment className="text-xl" />
                  <span className="ml-2">payment</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/myCart">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <FaCartShopping className="text-xl" />
                  <span className="ml-2">
                    My Cart <span className="text-sm">({cart?.length})</span>
                  </span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/addReview">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <MdReviews className="text-xl" />
                  <span className="ml-2">Add review</span>
                </li>
              </NavLink>

              <NavLink to="myBooking">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <FaBook className="text-xl" />
                  <span className="ml-2">My Bookings</span>
                </li>
              </NavLink>
            </ul>
          )}

          <div className="border border-yellow-600 mx-4"></div>

          <div>
            <ul className="p-8">
              <NavLink to="/">
                <li className="flex items-center font-medium hover:bg-black hover:rounded-lg hover:text-yellow-300  capitalize px-2 py-1">
                  <FaHome className="text-xl" />
                  <span className="ml-2">home</span>
                </li>
              </NavLink>
              <NavLink to="/menu">
                <li className="flex items-center font-medium hover:bg-black hover:rounded-lg hover:text-yellow-300  capitalize px-2 py-1">
                  <HiMenuAlt1 className="text-xl" />
                  <span className="ml-2">menu</span>
                </li>
              </NavLink>
              <NavLink to="/shop/soup">
                <li className="flex items-center font-medium hover:bg-black hover:rounded-lg hover:text-yellow-300  capitalize px-2 py-1">
                  <HiTemplate className="text-xl" />
                  <span className="ml-2">gallary</span>
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="flex items-center font-medium hover:bg-black hover:rounded-lg hover:text-yellow-300 capitalize px-2 py-1">
                  <FaUserShield className="text-xl" />
                  <span className="ml-2">contact</span>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        {/* outlet content */}
        <div className="flex-1 bg-black text-slate-200 ">
          <DashboardNavbar />
          <Outlet></Outlet>
        </div>
      </div>
      {/* footer content */}
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
