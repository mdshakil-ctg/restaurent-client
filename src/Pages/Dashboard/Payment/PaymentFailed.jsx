import { useParams } from "react-router-dom";


const PaymentFailed = () => {
    const {tranId}  = useParams()
    
    return (
        <div className="flex justify-center items-center h-full">
            <h1>Your Payment is not successfull. Please try again later. <br />
            Transaction id : {tranId}</h1>
        </div>
    );
};

export default PaymentFailed;