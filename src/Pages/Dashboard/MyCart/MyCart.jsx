import { FaTrash } from "react-icons/fa6";
import SetTitle from "../../../components/SetTitle";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useCart from "./../../../Hooks/useCart";
import useModal from "../../../Hooks/useModal";
import { axiosSecure } from "./../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { useState } from "react";
import OptionSection from "../../../components/OptionSection";
import DashboardButton from "../../../components/DashboardButton/DashboardButton";

const MyCart = () => {
  const { openModal, closeModal } = useModal();
  const { cart, refetch, isLoading } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);
  console.log({ selectedItems });

  const navigate = useNavigate();
  const totalPrice = cart
    .reduce((acc, currentvalue) => {
      return acc + parseFloat(currentvalue.price);
    }, 0)
    .toFixed(2);

  const selectedProducts = cart.filter((item) =>
    selectedItems.includes(item.menuId)
  );
  console.log({ selectedProducts });

  const CheckOutPrice = selectedProducts
    .reduce((acc, currentvalue) => {
      return acc + parseFloat(currentvalue.price);
    }, 0)
    .toFixed(2);
  console.log(CheckOutPrice);

  const totalPriceNum = parseFloat(totalPrice).toFixed(2);

  const handleCheckBoxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

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
              autoCloseTime: 2000,
            });
            refetch();
          }
        });
    };
  };
  const isValidObjectId = (id) => /^[a-f\d]{24}$/i.test(id);

  const handleCheckOut = () => {
    const validItems = selectedItems.filter((id) => isValidObjectId(id));
    if (validItems.length > 0) {
      const queryParams = validItems.join(",");
      console.log({ queryParams });
      navigate(`/dashboard/payment?items=${queryParams}`);
    } else {
      // modal for add an item
      openModal({
        title: "oops!",
        message: "no valid items selected",
        autoCloseTime: 2000,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center h-screen">
        <progress className="progress w-3/4 mx-auto h-3"></progress>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl text-[#AFEEEE] pl-2 md:pl-10">
      <SetTitle title="My Cart"></SetTitle>
      <SectionTitle title="wanna add more?" subTitle="my cart"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 mr-2 mb-10  md:mr-10 gap-5">
        <OptionSection text={`TOTAL ORDERS : ${cart?.length}`}></OptionSection>
        <OptionSection
          text={`ESTIMATED SHIPPING FEE : ${cart?.length * 10}`}
        ></OptionSection>
        <OptionSection
          text={`TOTAL PRICE OF CART : ${totalPriceNum}`}
        ></OptionSection>
      </div>
      <div className="flex flex-col gap-5 md:mr-10">
        {/* table content */}
        {cart?.length > 0 && (
          <div className="col-span-2 card rounded-none glass min-h-[320px]">
            <div className=" h-[330px] max-w-[calc(100vw-110px)] md:max-w-[calc(100vw-230px)]  !overflow-x-auto overflow-y-auto scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-700 ml-[12px] md:p-5">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-[#FF7F50]">
                    <th className="text-center sm:p-2"></th>
                    <th className="text-center sm:p-2">ITEM IMAGE</th>
                    <th className="text-center sm:p-2">ITEM NAME</th>
                    <th className="text-center sm:p-2">PRICE</th>
                    <th className="text-center sm:p-2">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item._id} className="border-none">
                      {console.log(item._id)}
                      <td className="sm:p-2">
                        <div className="flex justify-center items-center">
                          <input
                            // checked={selectedItems.includes(item.menuId)}
                            onChange={() => handleCheckBoxChange(item.menuId)}
                            type="checkbox"
                            className="checkbox bg-gray-400"
                          />
                        </div>
                      </td>
                      <td className="sm:p-2">
                        <div className="flex justify-center items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={item.image} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center sm:p-2">{item.name}</td>
                      <td className="text-center sm:p-2">{item.price}</td>
                      <td className="text-center sm:p-2">
                        <button
                          onClick={() => handleCartDelete(item._id)}
                          className=" badge badge-error badge-md hover:bg-yellow-500"
                        >
                          <FaTrash></FaTrash>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {/* checkout content */}
        <div className="col-span-1 bg-[#2D2D2D] flex flex-col mr-2 md:mr-0 p-5 text-xs ">
          <div className="mb-10">
            {/* <h4 className="text-center text-[#FF7F50] mb-4">Order Summary</h4> */}
            <div className="mb-10">
              <OptionSection text={"Order Summary"} />
            </div>
            <h5 className="mb-2">Location :</h5>
            <p>
              <FaLocationArrow className="inline mr-2"></FaLocationArrow> Add
              Shipping Address
            </p>
          </div>
          <div className="space-y-3 flex-grow">
            <div className="flex justify-between">
              <span>Subtotal ({selectedItems.length} items)</span>
              <span>$ {CheckOutPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping fee (Estimated)</span>
              <span>$ {(selectedItems.length * 10).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>In Total Amount </span>
              <span>
                ${" "}
                {(
                  parseFloat(CheckOutPrice) +
                  selectedItems.length * 10
                ).toFixed(2)}
              </span>
            </div>
          </div>
          <div className="pt-5 xl:mb-10 flex justify-center">
            <DashboardButton
              onClick={handleCheckOut}
              className="w-full"
              text="checkout"
              small
            ></DashboardButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
