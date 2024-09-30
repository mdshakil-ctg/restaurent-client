import { FaTrash } from "react-icons/fa6";
import SetTitle from "../../../components/SetTitle";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useCart from "./../../../Hooks/useCart";
import useModal from "../../../Hooks/useModal";
import { axiosSecure } from "./../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { useState } from "react";

const MyCart = () => {
  const { openModal, closeModal } = useModal();
  const { cart, refetch, isLoading } = useCart();
  const [selectedItems, setSelectedItems] = useState([])
  // console.log({ selectedItems });

    const navigate = useNavigate();
  const totalPrice = cart.reduce((acc, currentvalue) => {
    return acc + parseFloat(currentvalue.price);
  }, 0).toFixed(2);

  const selectedProducts = cart.filter(item => selectedItems.includes(item.menuId));
  console.log({selectedProducts});

  const CheckOutPrice = selectedProducts.reduce((acc, currentvalue) => {
    return acc + parseFloat(currentvalue.price);
  }, 0).toFixed(2);
  console.log(CheckOutPrice);

  const totalPriceNum = parseFloat(totalPrice).toFixed(2);

  const handleCheckBoxChange = id =>{
    if(selectedItems.includes(id)){
      setSelectedItems(selectedItems.filter(itemId => itemId !== id))
    }
    else{
      setSelectedItems([...selectedItems, id])
    }
  }

  const handleCartDelete = (id) => {
    openModal({
      title: "Warning!!!",
      message: "Are you sure to delete?",
      type: "confirm",
      onConfirm: () => handleConfirmDelete(id),
    });

    const handleConfirmDelete = (id) => {
      closeModal();
      axiosSecure
        .delete(`/cartItem/${id}`, { withCredentials: true })
        .then((res) => {
          if (res.data.deletedCount > 0) {
            openModal({
              title: "success!",
              message: "Item has been removed from cart.",
              autoCloseTime: 4000,
            });
            refetch();
          }
        });
    };
  };
  const isValidObjectId = (id) => /^[a-f\d]{24}$/i.test(id);

    const handleCheckOut = () =>{
      const validItems = selectedItems.filter(id => isValidObjectId(id));
      if(validItems.length > 0){
        const queryParams = validItems.join(',');
        console.log({queryParams});
        navigate(`/dashboard/payment?items=${queryParams}`)
      }
      else{
        // modal for add an item
        console.log('no valid items selected');
      }
    }

    if(isLoading){
      return <div className="flex items-center h-screen">
        <progress className="progress w-3/4 mx-auto h-3"></progress>
      </div>
    }


  return (
    <div>
      <SetTitle title="My Cart"></SetTitle>
      <SectionTitle title="wanna add more?" subTitle="my cart"></SectionTitle>
      <div className="flex justify-around items-center text-3xl mb-5">
        <h5>TOTAL ORDERS {cart.length}</h5>
        <h5>TOTAL PRICE ${totalPriceNum}</h5>
      </div>
      {/* table content */}
      {
        cart?.length > 0 &&      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                
                <tr key={item._id}>
                    <th>
                      <label>
                        <input
                        // checked={selectedItems.includes(item.menuId)}
                        onChange={()=> handleCheckBoxChange(item.menuId)}
                        type="checkbox" className="checkbox" />
                      </label>
                    </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleCartDelete(item._id)}
                      className="btn hover:bg-yellow-500"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      }
      {/* checkout content */}
      <div className="w-1/2 mx-auto mt-14 card bg-slate-200 p-16">
        <div className="my-6">
          <h5>Location</h5>
          <p>
            <FaLocationArrow className="inline mr-2"></FaLocationArrow> Add
            Shipping Address
          </p>
        </div>
        <div className="space-y-3">
          <h5>Order Summary</h5>
          <div className="flex justify-between">
            <span>Subtotal({selectedItems.length} items)</span>
            <span>$ {CheckOutPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping fee </span>
            <span>$ {(selectedItems.length * 10).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>In Total Amount </span>
            <span>$ {(parseFloat(CheckOutPrice) + (selectedItems.length * 10)).toFixed(2)}</span>
          </div>
          
            <button 
            onClick={handleCheckOut}
            className="btn bg-yellow-200 mt-6">
              PROCEED TO CHECKOUT
            </button>
         
        </div>
      </div>
    </div>
  );
};

export default MyCart;
