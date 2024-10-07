import { useContext} from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import logo from "../../../assets/logo/logo-with-text-eraser.png";
import LoaderCup from "../../../components/LoaderCup/LoaderCup";
import useIsAdmin from "../../../Hooks/useIsAdmin";
import './Navbar.css'


const Navbar = () => {
  
  const { user, LogoutUser, setLoading, loading } = useContext(AuthContext); 
  const {cart} = useCart();
  const {isAdmin, isPending} = useIsAdmin()
  const axiosPublic = useAxiosPublic();
  const handleLogout = () => {
    LogoutUser()
      .then(() => {
        setLoading(false);
        axiosPublic.post('/logout')
        .then(res => console.log(res))
      })
      .catch((err) => console.error(err));
  };

  if(loading || isPending){
    <LoaderCup></LoaderCup>
  }

  const navItems = (
    <>
      <li className="text-gray-400 mr-1">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-gray-400 mr-1">
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li className="text-gray-400 mr-1">
        <NavLink to="/shop/soup">Gallary</NavLink>
      </li>
      
      <li className="text-gray-400 mr-1">
        <NavLink to="/user-reservation">Not Found</NavLink>
      </li>
      <li className="text-gray-400 mr-1">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li className="text-gray-400 mr-1">
        <NavLink to={isAdmin ? "/dashboard/adminHome" :"/dashboard/user-home"}>Dashboard</NavLink>
      </li>

      {user ? (
        <li className="text-gray-400 mr-1">
          <button onClick={handleLogout}>Logout</button>
        </li>
      ) : (
        <>
          <li className="text-gray-400 mr-1">
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li className="text-gray-400 mr-1">
            <NavLink to="/login">Log In</NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to={isAdmin ? "/dashboard/adminHome" :"/dashboard/myCart"}>
        
       <span className="relative z-30"> <FaCartArrowDown className="text-2xl  text-gray-400"/></span>
       <div className="badge badge-sm leading-3 badge-warning absolute top-0 -right-1 z-10">{cart?.length}</div>
        
        </NavLink>
      </li>
    </>
  );


  

  return (
    <>
    
      <div className="navbar p-0 fixed z-20 bg-black max-w-screen-xl font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 py-0 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="w-[160px]"><img className="ml-1 w-[50%] object-cover" src={logo}></img></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal py-0 px-1">{navItems}</ul>
        </div>
       <div className="navbar-end">

       </div>
      </div>
    </>
  );
};

export default Navbar;
