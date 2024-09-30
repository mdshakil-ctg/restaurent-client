import { useContext} from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import logo from "../../../assets/logo2.png";
import LoaderCup from "../../../components/LoaderCup/LoaderCup";
import useIsAdmin from "../../../Hooks/useIsAdmin";


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
      <li className="text-slate-400 mr-1">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-slate-400 mr-1">
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li className="text-slate-400 mr-1">
        <NavLink to="/shop/soup">Gallary</NavLink>
      </li>
      
      <li className="text-slate-400 mr-1">
        <NavLink to="/reservation">Not Found</NavLink>
      </li>
      <li className="text-slate-400 mr-1">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>

      {user ? (
        <li className="text-slate-400 mr-1">
          <button onClick={handleLogout}>Logout</button>
        </li>
      ) : (
        <>
          <li className="text-slate-400 mr-1">
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li className="text-slate-400 mr-1">
            <NavLink to="/login">Log In</NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to={isAdmin ? "/dashboard/adminHome" :"/dashboard/myCart"}>
        
       <span className="relative z-30"> <FaCartArrowDown className="text-2xl"/></span>
       <div className="badge badge-warning badge-sm absolute top-0 right-0 z-40">{cart?.length}</div>
        
        </NavLink>
      </li>
    </>
  );


  

  return (
    <>
    
      <div className="navbar fixed z-20 bg-black bg-opacity-100 max-w-screen-xl text-white font-semibold">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="w-[140px] h-[60px]"><img className="h-full w-full" src={logo}></img></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
       <div className="navbar-end">

       </div>
      </div>
    </>
  );
};

export default Navbar;
