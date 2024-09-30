import { Link, useParams} from "react-router-dom";
import payFailImg from "../../../assets/payment/payment-failed.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentFailed = () => {
  const { user } = useContext(AuthContext);
  const {tranId} = useParams()
  return (
    <div className="border-6 h-screen bg-gradient-to-r from-[#FFFFFF] to-[#E9FCFF]">
    <img className="w-full h-auto" src={payFailImg} alt="" />
    <div className="flex justify-center items-start gap-10 pt-10 mt-10">
      <div className="border-b-2 border-b-slate-500 flex flex-col items-center  ">
        <div>
          {user?.photoURL && (
            <img className="rounded-full" src={user?.photoURL}></img>
          )}
        </div>
        <p className="font-semibold">{user?.displayName}</p>
      </div>
      <div className="text-center">
      <p className="text-2xl mb-2">
        Oops! Your payment transaction has not completed.
      </p>
      <h3 className="mb-3 ">
        Order ID: IC - 2348, IC - 65749 | <span className="font-semibold">Transaction ID</span> : {tranId}
      </h3>
      <div>
        <p className="text-center text-sm">Payment Details</p>
        <div className="shadow-lg p-6 flex justify-between mb-6">
          <p>Total Amount : Tk. 0.00</p>
          <p>Delivery Cost : Tk. 0.00</p>
        </div>
        <p className="opacity-50 mb-4">
          Please contact us at 1800-or email developer.shakil.cth@gmail.com
          for any query.
        </p>
      </div>
      <Link to="/dashboard/myCart">
        <button className="btn btn-warning">OK</button>
      </Link>
      </div>
    </div>
  </div>
  );
};

export default PaymentFailed;
