import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Providers/AuthProvider";
import OptionSection from "../../../components/OptionSection";

const PaymentHistory = () => {
  const { user, setError} = useContext(AuthContext);
  const [payHistory, setPayHistory] = useState([]);
  const axiosSecure = useAxiosSecure();
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    if (user?.email) {
      setLoading(true)
      axiosSecure.get(`/payment-history/${user?.email}`)
      .then((res) => {
        console.log(res.data.progress);
        setPayHistory(res.data);
        setLoading(false)
      })
      .catch(err =>{
        setError(err?.message)
        setLoading(false)
      }) 
    }
  }, [axiosSecure,setError, user?.email]);

  if(loading){
    return <div className=" h-[95vh] flex justify-center items-center ">
      <div className=" flex justify-center flex-grow"><span className="loading loading-ring w-24"></span></div>
    </div>
  }
  

  return (
    <div className="max-w-screen-lg  lg:px-5  mx-auto">
      <div className="px-5">
      <SectionTitle
        title="payment history"
        subTitle="at a glance!"
      ></SectionTitle>
      <div className="grid !w-full lg:grid-cols-3 gap-5 mb-5">
        <OptionSection text={`Total Payment : ${payHistory?.length}`}/>
        <OptionSection text={`Email : ${user?.email}`}/>
      </div>
      </div>
      <div>
        <div className="bg-[#1C2A35] max-w-[calc(100vw-110px)] md:max-w-[calc(100vw-230px)]  h-[100vh] !overflow-x-auto overflow-y-auto scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-700 ml-[12px] md:p-10">
          {
            PaymentHistory.length > 0 ? <table className="table">
            {/* head */}
            <thead>
              <tr className="text-slate-300 ">
                <th>Category</th>
                <th>TotalAmount</th>
                <th>Trans Id</th>
                <th>Currency</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {payHistory.map((item) => (
                <tr key={item._id} className="hover border-none hover:text-black">
                  <td>Food</td>
                  <td className="text-red-200">$ {Number(item.totalAmount).toFixed(2)}</td>
                  <td>{item.tran_id}</td>
                  <td>{item.currency}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table> :
          <div className="py-6 text-center text-xl font-serif"><p>You have not made any payments yet. Start shopping to see your payment history here!</p></div>
          }
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
