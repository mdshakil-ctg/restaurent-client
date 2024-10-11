<div className="flex flex-col gap-5 mr-10">
        {/* table content */}
        {cart?.length > 0 && (
          <div className="col-span-2 card rounded-none glass min-h-[320px]">
            <div className="overflow-auto h-[330px] scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-700">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-[#FF7F50]">
                    <th className="text-center"></th>
                    <th className="text-center">ITEM IMAGE</th>
                    <th className="text-center">ITEM NAME</th>
                    <th className="text-center">PRICE</th>
                    <th className="text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item._id} className="border-none">
                      {console.log(item._id)}
                      <td>
                        <div className="flex justify-center items-center">
                          <input
                            // checked={selectedItems.includes(item.menuId)}
                            onChange={() => handleCheckBoxChange(item.menuId)}
                            type="checkbox"
                            className="checkbox bg-white"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={item.image} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">{item.name}</td>
                      <td className="text-center">{item.price}</td>
                      <td className="text-center">
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
        <div className="col-span-1 bg-[#2D2D2D] flex flex-col mb-5 p-5 text-xs ">
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
          <div className="pt-5 flex justify-center">
            <DashboardButton
              onClick={handleCheckOut}
              className="w-full"
              text="checkout"
              small
            ></DashboardButton>
          </div>
        </div>
      </div>