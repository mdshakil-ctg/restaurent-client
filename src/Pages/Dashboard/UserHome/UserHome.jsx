import { useContext } from "react";
import { AuthContext } from './../../../Providers/AuthProvider';
import { FaCartShopping, FaPhoneFlip, FaWallet } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdBook, MdPayment, MdReviews } from "react-icons/md";
import useCart from "../../../Hooks/useCart";


const UserHome = () => {
    const {user} = useContext(AuthContext);
    const {cart} = useCart()
    console.log(user);
    return (
        <div>
        <h4 className="h3 text-3xl mb-10">HI, WELCOME BACK</h4>
  
        <div className="grid md:grid-cols-4 gap-5 mb-10">
          <div className="flex gap-5 p-5 bg-violet-400">
            <FaWallet className="text-3xl text-white"></FaWallet>
            <div>
              <span>156</span>
              <p>Menu</p>
            </div>
          </div>
          <div className="flex gap-5 p-5 bg-violet-400">
            <FaHome className="text-3xl text-white"></FaHome>
            <div>
              <span>99</span>
              <p>Shop</p>
            </div>
          </div>
          <div className="flex gap-5 p-5 bg-violet-400">
            <FaPhoneFlip className="text-3xl text-white"></FaPhoneFlip>
            <div>
              <span>04</span>
              <p>Contact</p>
            </div>
          </div>
          
        </div>
        <div className="grid grid-cols-2">
          <div className=" bg-pink-300 h-auto">
            <div>
            <img src={user?.photoURL} alt="" />
            </div>
            <p> {user?.displayName}</p>  
          </div>
          <div className=" bg-amber-600">
            <p>Your activiteis</p>
            <div>
                <span><FaCartShopping></FaCartShopping></span>
                <p>Orders : {cart?.length}</p>
            </div>
            <div>
                <span><MdReviews></MdReviews></span>
                <p>Reviews : 3</p>
            </div>
            <div>
                <span><MdBook></MdBook></span>
                <p>Bookings : 1</p>
            </div>
            <div>
                <span><MdPayment></MdPayment></span>
                <p>Payments : 4</p>
            </div>
            </div>
          
        </div>
      </div>
    );
};

export default UserHome;