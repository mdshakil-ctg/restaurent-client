import { useContext } from 'react';
import Button from './../Pages/Shared/Button/Button';
import { AuthContext } from '../Providers/AuthProvider';
import  { axiosSecure } from '../Hooks/useAxiosSecure';
import { useLocation, useNavigate } from 'react-router-dom';
import useModal from '../Hooks/useModal';
// import { ModalContext } from '../Providers/ModalProvider';
// import useCart from '../Hooks/useCart';
const ShopCard = ({ data }) => {
  // const {refetch} = useCart();
  // const { openModal, SetModalMessage } = useContext(ModalContext);
  
  const {openModal} = useModal();
  const { name, image, recipe, price, _id } = data;
  const navigate = useNavigate();
  const location = useLocation()
  const {user} = useContext(AuthContext)
  console.log(user);
  const handleAddtoCart = () => {
    console.log('clicked')
    // const modalData = {
    //   name:name,
    //   type:'Add To Cart',
    //   message:'Succesfully done!'
    // }
    if(user && user?.email){
      axiosSecure.post(`/carts`, {
        menuId: _id,
        name,
        image,
        price,
        email: user.email
      }, {withCredentials:true})
      .then(res => {
        console.log(res);
        if(res.data.insertedId){
          openModal({
            title:'Success!',
            message:'Your cart has been added',
            type: 'success',
            autoCloseTime: 5000,
          })
          // openModal()
          // SetModalMessage(modalData)
          // refetch();
        }
      })
     
    }
    else{  
      navigate('/login', { state: { from: location.pathname } });
    }
  }

// console.log(data)
  return (
    <div className="card bg-base-100 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="bg-slate-700 text-white p-1 rounded-lg absolute top-2 right-2 text-sm font-semibold ">$ {price}</div>
    </h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <Button handleAddtoCart={handleAddtoCart}  info={"add to cart"}></Button>
    </div>
  </div>
</div>
  );
};

export default ShopCard;
