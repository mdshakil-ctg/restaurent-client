import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdPayment, MdReviews } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

import useIsAdmin from "../Hooks/useIsAdmin";

const Dashboard = () => {
  
    const {isAdmin, isPending} = useIsAdmin();
    // console.log(isAdmin);
    if(isPending) return <span> Loading...</span>
  return (
    <div className="flex">
      <div className="w-[300px] bg-yellow-300 min-h-screen p-2">
        {/* //dashboard content */}
        <h1 className="uppercase mt-6 mb-20 text-center font-bold text-[20px] leading-6 font-serif ">
          bistro boss <br /> <span className="text-[16px]">restaurant</span>
        </h1>
       {
        isAdmin ?  <ul className="p-8 space-y-3">
        <li className="text-xl font-semibold uppercase">
          <NavLink to="/dashboard">
            <FaHome className="text-3xl inline  pb-2" /> admin home
          </NavLink>
        </li>
        <li className="text-xl font-semibold uppercase ">
          <NavLink to="/dashboard/addItem">
            <ImSpoonKnife className="text-3xl inline  pb-2" /> add items
          </NavLink>
        </li>
        <li className="text-xl font-semibold uppercase ">
          <NavLink to="/dashboard/manageItems">
            <MdPayment className="text-3xl inline  pb-2" /> manage items
          </NavLink>
        </li>
        <li className="text-xl font-semibold uppercase ">
          <NavLink to="/dashboard/manageBookings">
            <FaCartShopping className="text-3xl inline  pb-2" /> manage bookings
          </NavLink>
        </li>
        <li className="text-xl font-semibold uppercase ">
          <NavLink to="/dashboard/allUsers">
            <MdReviews className="text-3xl inline  pb-2" /> all users
          </NavLink>
        </li>
      </ul> :

       <ul className="p-8 space-y-3">
       <li className="text-xl font-semibold uppercase">
         <NavLink to="/dashboard/user-home">
           <FaHome className="text-3xl inline  pb-2" /> USER HOME
         </NavLink>
       </li>
       <li className="text-xl font-semibold uppercase ">
         <NavLink to="/dashboard/reservation">
           <ImSpoonKnife className="text-3xl inline  pb-2" /> Reservation
         </NavLink>
       </li>
       <li className="text-xl font-semibold uppercase ">
         <NavLink to="/dashboard/payment-history">
           <MdPayment className="text-3xl inline  pb-2" /> payment history
         </NavLink>
       </li>
       <li className="text-xl font-semibold uppercase ">
         <NavLink to="/dashboard/myCart">
           <FaCartShopping className="text-3xl inline  pb-2" /> My Cart
         </NavLink>
       </li>
       <li className="text-xl font-semibold uppercase ">
         <NavLink to="/dashboard/addReview">
           <MdReviews className="text-3xl inline  pb-2" /> Add review
         </NavLink>
       </li>
       <li className="text-xl font-semibold uppercase ">
         <NavLink to="myBooking">
           <FaBook className="text-3xl inline  pb-2" /> my bookings
         </NavLink>
       </li>
     </ul>
       }

        <div className="divider">Default</div>

        <div>
          <ul>
            <li className="text-xl font-semibold uppercase">
              <NavLink to="/">
                <FaHome className="text-3xl inline  pb-2" /> Home
              </NavLink>
            </li>
            <li className="text-xl font-semibold uppercase ">
              <NavLink to="/menu">
                <ImSpoonKnife className="text-3xl inline  pb-2" /> Menu
              </NavLink>
            </li>
            <li className="text-xl font-semibold uppercase ">
              <NavLink to="/shop/soup">
                <MdPayment className="text-3xl inline  pb-2" /> Shop
              </NavLink>
            </li>
            <li className="text-xl font-semibold uppercase ">
              <NavLink to="/contact">
                <FaCartShopping className="text-3xl inline  pb-2" /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
