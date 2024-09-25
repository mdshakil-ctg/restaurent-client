import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [payHistory, setPayHistory] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/payment-history/${user?.email}`).then((res) => {
        console.log(res.data.progress);
        setPayHistory(res.data);
      });
    }
  }, [axiosSecure, user?.email]);

  return (
    <div>
      <SectionTitle
        title="payment history"
        subTitle="at a glance!"
      ></SectionTitle>
      {/* history table */}
      <div>
        <p>Total Succesfully Payments : {payHistory?.length}</p>
        <p>Email : {user?.email}</p>
        <p>{user?.displayName}</p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Category</th>
                <th>TotalAmount</th>
                <th>Trans Id</th>
                <th>Currency</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {payHistory.map((item) => (
                <tr key={item._id} className="hover">
                  <td>Food</td>
                  <td>$ {item.totalAmount.toFixed(2)}</td>
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
