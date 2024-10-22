import { Link, useLocation} from "react-router-dom";
import paySucImg from "../../../assets/payment/payment-success.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentSuccess = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tranId = queryParams.get("tranId");
  const amount = queryParams.get("amount");
  
  return (
    <div className="border-6 bg-gradient-to-b from-[#4F5AD3] to-[#9294F2]">
      <div>
      <img className="w-full h-auto object-cover" src={paySucImg} alt="" />
      </div>
      <div className="flex justify-center items-start gap-10 pt-10">
        <div className="border-b-2 border-b-slate-500 flex flex-col items-center  ">
          <div>
            {user?.photoURL && (
              <img className="rounded-full" src={user?.photoURL}></img>
            )}
          </div>
          <p className="font-semibold">{user?.displayName}</p>
        </div>
        <div className="text-center">
        <p className="text-2xl mb-2 text-teal-300">
          Thank you! Your payment of BDT. {Number(amount * 100).toFixed(2)} has been recieved.
        </p>
        <h3 className="mb-3 ">
          Order ID: IC - 2348, IC - 65749 | <span className="font-semibold">Transaction ID</span> : {tranId}
        </h3>
        <div>
          <p className="text-center text-sm">Payment Details</p>
          <div className="shadow-lg p-6 flex justify-between mb-6">
        <Link to="/dashboard/myCart">
          <button className="bg-yellow-400 px-8 py-1 hover:bg-yellow-700">OK</button>
        </Link>
            <p>Total Amount : Tk. {Number(amount * 100).toFixed(2)}</p>
            <p>Delivery Cost : Tk. 0.00</p>
          </div>
          <p className="opacity-50 mb-4">
            Please contact us at 1800-or email developer.shakil.cth@gmail.com
            for any query.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
