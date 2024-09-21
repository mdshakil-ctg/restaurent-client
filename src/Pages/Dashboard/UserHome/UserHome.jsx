import { FaPhone, FaShop, FaWallet } from "react-icons/fa6";

const UserHome = () => {

  
  return (
    <div>
      <h4 className="h3 text-3xl mb-10">HI, WELCOME BACK</h4>

      <div className="grid md:grid-cols-4 gap-5 mb-10">
        <div className="flex gap-5 p-5 bg-violet-400">
          <FaWallet className="text-3xl text-white"></FaWallet>
          <div>
            <p>Revenue</p>
            <span>205</span>
          </div>
        </div>
        <div className="flex gap-5 p-5 bg-violet-400">
          <FaShop className="text-3xl text-white"></FaShop>
          <div>
            <p>Customers</p>
            <span>205</span>
          </div>
        </div>
        <div className="flex gap-5 p-5 bg-violet-400">
          <FaPhone className="text-3xl text-white"></FaPhone>
          <div>
            <p>Products</p>
            <span>205</span>
          </div>
        </div>
        <div className="flex gap-5 p-5 bg-violet-400">
          <FaPhone className="text-3xl text-white"></FaPhone>
          <div>
            <p>Orders</p>
            <span>205</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className=" bg-pink-300 h-auto">
          <div>
          graph
          </div>  
        </div>
        <div className=" bg-amber-600">activiteis</div>
      </div>
    </div>
  );
};

export default UserHome;
