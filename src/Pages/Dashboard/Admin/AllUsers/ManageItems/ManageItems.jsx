import { MdDeleteSweep } from "react-icons/md";
import useMenu from "../../../../../Hooks/useMenu";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const { menu, refetch } = useMenu();
  refetch();
  console.log(menu);

  return (
    <div>
      <SectionTitle
        title="manage all items"
        subTitle="hurry up!"
      ></SectionTitle>
      <div>
        <p>TOTAL ITEMS : {menu.length}</p>
        <div>
          {/* table content  */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Update Item</th>
                  <th>Delete Item</th>
                </tr>
              </thead>
              <tbody>
                {
                    menu.map(item => <tr key={item._id}>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                  <img
                                    src={item?.image} alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            {item?.name}
                            <br />
                            <span className="badge badge-ghost badge-sm">{item?.category}</span>
                          </td>
                          <td>{item.price ? Number(item.price).toFixed(2) : '0.00'}</td>
                          <td>
                            <Link to={`/dashboard/updateItems/${item._id}`}><button className="btn btn-ghost btn-xs">
                            <FaRegEdit></FaRegEdit> 
                            </button></Link>
                          </td>
                          <td>
                            <button className="btn btn-ghost btn-xs">
                            <MdDeleteSweep />
                            </button>
                          </td>
                        </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
