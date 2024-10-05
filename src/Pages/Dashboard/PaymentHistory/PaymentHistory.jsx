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
    <div className="max-w-screen-lg px-10 pb-10  mx-auto">
      <SectionTitle
        title="payment history"
        subTitle="at a glance!"
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-5 mb-5">
        <OptionSection text={`Total Payment : ${payHistory?.length}`}/>
        <OptionSection text={`Email : ${user?.email}`}/>
      </div>
      {/* history table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-slate-300">
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
                  <td>$ {Number(item.totalAmount).toFixed(2)}</td>
                  <td>{item.tran_id}</td>
                  <td>{item.currency}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
