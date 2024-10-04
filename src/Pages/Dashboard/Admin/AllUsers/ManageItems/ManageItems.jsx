import { MdOutlineDelete  } from "react-icons/md";
import useMenu from "../../../../../Hooks/useMenu";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useModal from "../../../../../Hooks/useModal";
import '../../../../../../src/components/TableScrollbar.css'
const ManageItems = () => {
  const { menu, refetch } = useMenu();

  const axiosSecure = useAxiosSecure();
  const {openModal={}, closeModal} = useModal();
  refetch();
  

  const handleItemDelete = (id, name) =>{

    openModal({
        title: 'Warning!!!',
        message: `Are you sure you want to delete ${name} from the database?`,
        type: 'confirm',
        onConfirm: ()=>handleConfirmItemDelete(id, name)
    })
    const handleConfirmItemDelete = (id, name) =>{
        closeModal()
        axiosSecure.delete(`/deleteItem/${id}`)
        .then(res => {
          console.log({res})
            if(res.data.deletedCount > 0){
                openModal({
                    title: 'success!',
                    message: `${name} has been deleted from the database.`,
                    autoCloseTime: 2000,
                })
                refetch()
            }
            else if(res.data.deletedCount === 0){
              {
                openModal({
                  title: 'sorry',
                  message:`${name} has been not deleted from the database.`,
                  autoCloseTime: 2000,
                })
              }
            }
        })
      }
}

  return (
    <div className="pb-10 pl-16 table-scrollbar">
      <SectionTitle
        title="manage all items"
        subTitle="look up!"
      ></SectionTitle>
      <div className="mb-6">
        <p className="font-raleway ">TOTAL MENU ITEMS : {menu?.length}</p>
        <div>
          {/* table content  */}
          <div className="overflow-x-auto overflow-y-auto max-h-svh table-scrollbar">
            <table className="table mt-6">
              {/* head */}
              <thead className=" w-full">
                <tr className="text-slate-200 ">
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Edit Item</th>
                  <th>Delete Item</th>
                </tr>
              </thead>
              <tbody>
                {
                    menu.map(item => <tr key={item._id} className="border-none">
                          <td className="border-none">
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
                            <span className="badge badge-ghost badge-xs">{item?.category}</span>
                          </td>
                          <td>{item.price ? Number(item.price).toFixed(2) : '0.00'}</td>
                          <td>
                            <Link to={`/dashboard/updateItems/${item._id}`}><button className="btn btn-ghost btn-xs ">
                            <TiEdit className="text-xl hover:bg-yellow-400 hover:text-slate-900 rounded" />
                            </button></Link>
                          </td>
                          <td>
                            <button onClick={()=>{handleItemDelete(item._id, item.name)}} className="btn btn-ghost btn-xs">
                            <MdOutlineDelete className="text-xl hover:bg-yellow-400 hover:text-slate-900 rounded" />
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
