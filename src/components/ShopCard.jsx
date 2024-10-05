import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { axiosSecure } from '../Hooks/useAxiosSecure';
import { useLocation, useNavigate } from 'react-router-dom';
import useModal from '../Hooks/useModal';
import useCart from '../Hooks/useCart';

const ShopCard = ({ data }) => {
  const { openModal } = useModal();
  const {refetch} = useCart()
  const { name, image, recipe, price, _id } = data;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const handleAddtoCart = () => {
    if (user && user?.email) {
      axiosSecure.post(`/carts`, {
        menuId: _id,
        name,
        image,
        price,
        email: user.email,
      }, { withCredentials: true })
      .then(res => {
        if (res.data.insertedId) {
          //call the refetch for update data
          refetch()
          openModal({
            title: 'Success!',
            message: 'Your cart has been added',
            type: 'success',
            autoCloseTime: 2000,
          });
        }
      });
    } else {
      navigate('/login', { state: { from: location.pathname } });
    }
  };

  return (
    <div className=" shadow-xl text-white cursor-pointer bg-black transition-transform duration-300 transform hover:scale-110 group">
      <figure>
        <img
          className='w-full h-[200px] object-cover'
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-satisfy">{name}</h2>
        <div className="bg-slate-700 text-white p-1 rounded-lg absolute top-2 right-2 text-[10px] font-semibold ">$ {price}</div>
        <p className='text-xs mb-3'>{recipe}...</p>
        <div className="card-actions justify-end ">
          <button 
            onClick={handleAddtoCart} 
            className='bg-yellow-400 px-2 py-1 rounded-lg text-xs text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100'
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
