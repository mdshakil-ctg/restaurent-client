import { useParams } from "react-router-dom";


const PaymentSuccess = () => {
    const {tranId} = useParams();
  
    return (
        <div>
            Payment success page {tranId}
        </div>
    );
};

export default PaymentSuccess;