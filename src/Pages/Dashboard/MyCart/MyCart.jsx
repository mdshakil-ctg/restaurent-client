import { FaTrash } from "react-icons/fa6";
import SetTitle from "../../../components/SetTitle";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useCart from "./../../../Hooks/useCart";
import useModal from "../../../Hooks/useModal";
import { axiosSecure } from './../../../Hooks/useAxiosSecure';

const MyCart = () => {
  const {openModal, closeModal} = useModal();  
  const { cart, refetch } = useCart();
  
  const totalPrice = cart.reduce((acc, currentvalue) => {
    return acc + currentvalue.price;
  }, 0);
//   console.log(cart);
  
  const handleCartDelete = (id) =>{
    openModal({
        title: 'Warning!!!',
        message:'Are you sure to delete?',
        type: 'confirm',
        onConfirm: ()=>handleConfirmDelete(id)
    })
    const handleConfirmDelete = (id) =>{
        closeModal()
        axiosSecure.delete(`/cartItem/${id}`,{withCredentials:true})
        .then(res => {
            if(res.data.deletedCount > 0){
                openModal({
                    title: 'success!',
                    message:'Item has been removed from cart.',
                    autoCloseTime: 4000,
                })
                refetch()
            }
        })
      }
  } 
  return (
    <div>
      <SetTitle title="wanna add more"></SetTitle>
      <SectionTitle title="payment history" subTitle="my cart"></SectionTitle>
      <div className="flex justify-around items-center text-3xl mb-5">
        <h5>TOTAL ORDERS {cart.length}</h5>
        <h5>TOTAL PRICE ${totalPrice.toFixed(2)}</h5>
        <button className="btn bg-yellow-700">PAY</button>
      </div>
      {/* table content */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                 
                </th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>

                {
                    cart.map((item, index) =>  <tr key={item._id}>
                        <th>
                          <label>
                            {index + 1}
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <img
                                  src={item.image}
                                />
                              </div>
                            </div>
                           
                          </div>
                        </td>
                        <td>
                          {item.name}
                        </td>
                        <td>{item.price}</td>
                        <th>
                          <button onClick={()=>handleCartDelete(item._id)} className="btn hover:bg-yellow-500"><FaTrash></FaTrash></button>
                        </th>
                      </tr>)
                }
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
