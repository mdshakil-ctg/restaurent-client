import { MdOutlineDelete } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import useMenu from "../../../../../Hooks/useMenu";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useModal from "../../../../../Hooks/useModal";
import "../../../../../../src/components/TableScrollbar.css";
import { FaSearch } from "react-icons/fa";
import LoaderCup from "../../../../../components/LoaderCup/LoaderCup";
const ManageItems = () => {
  const { menu, refetch, isLoading, isFetching } = useMenu();

  console.log({isLoading}, {isFetching});

  const axiosSecure = useAxiosSecure();
  const { openModal = {}, closeModal } = useModal();
  

  const handleItemDelete = (id, name) => {
    openModal({
      title: "Warning!!!",
      message: `Are you sure you want to delete ${name} from the database?`,
      type: "confirm",
      onConfirm: () => handleConfirmItemDelete(id, name),
    });
    const handleConfirmItemDelete = (id, name) => {
      closeModal();
      axiosSecure.delete(`/deleteItem/${id}`).then((res) => {
        console.log({ res });
        if (res.data.deletedCount > 0) {
          openModal({
            title: "success!",
            message: `${name} has been deleted from the database.`,
            autoCloseTime: 2000,
          });
          refetch();
        } else if (res.data.deletedCount === 0) {
          {
            openModal({
              title: "sorry",
              message: `${name} has been not deleted from the database.`,
              autoCloseTime: 2000,
            });
          }
        }
      });
    };
  };

  return (
    <div className="pb-10 pl-16">
      <SectionTitle title="manage all items" subTitle="look up!"></SectionTitle>
      <div className="mb-6">
        {/* <div ><p className="">TOTAL MENU ITEMS : {menu?.length}</p></div> */}
        <div className="flex justify-around items-center">
        <div className="flex justify-between items-center px-4 py-2 bg-[#1C2A35] text-slate-300 opacity-80 w-1/3">
          <div className="text-sm font-semibold">
            <span className="">TOTAL MENU ITEMS : {menu?.length}</span>
          </div>
          <span className="cursor-pointer">
            <SlOptionsVertical className="text-yellow-400" />
          </span>
        </div>
        <div className="relative">
          {/* <input className="border bg-[#16212A] w-full " type="text" name="" id="" /> */}
          <input className="w-[300px] h-[40px] pr-10 pl-4 m-0 bg-[#16212A] font-medium placeholder:text-sm focus:outline-none focus:border-b  focus:border-b-yellow-400 " type="text" name="" id="" placeholder="Search Menu"  />
          <FaSearch className="absolute top-3 text-yellow-400 right-3 cursor-pointer "></FaSearch>
        </div>
        
        </div>
        {
          (isLoading || isFetching) && <LoaderCup></LoaderCup> 
        }
        <div>
          {/* table content  */}
          <div className="overflow-x-auto overflow-y-auto max-h-svh text-slate-400">
            <table className="table mt-6">
              {/* head */}
              <thead className=" w-full">
                <tr className="text-slate-400 capitalize text-base">
                  <th>Item Image</th>
                  <th>Item Name & category</th>
                  <th>Price</th>
                  <th>Edit Item</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item) => (
                  <tr key={item._id} className="border-none">
                    <td className="border-none">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item?.name}
                      <br />
                      <span className="badge badge-neutral badge-xs ">
                        {item?.category}
                      </span>
                    </td>
                    <td>
                      $ {item.price ? Number(item.price).toFixed(2) : "0.00"}
                    </td>
                    <td>
                      <Link to={`/dashboard/updateItems/${item._id}`}>
                        <button className="btn btn-ghost btn-xs ">
                          <TiEdit className="text-2xl badge badge-info hover:bg-yellow-400 hover:text-slate-900 rounded" />
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          handleItemDelete(item._id, item.name);
                        }}
                        className="btn btn-ghost btn-xs"
                      >
                        <MdOutlineDelete className="text-2xl badge badge-error hover:bg-yellow-400 hover:text-slate-900 rounded" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
