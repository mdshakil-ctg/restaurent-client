import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";


const Navbar = () => {
  const { user, LogoutUser, setLoading } = useContext(AuthContext); 
  const {cart} = useCart();


  const handleLogout = () => {
    LogoutUser()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="">
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/shop/soup">Our Shop</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>

      {user ? (
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      ) : (
        <>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to="/dashboard/myCart">
        
       <span className="relative z-30"> <FaCartArrowDown className="text-2xl"/></span>
       <div className="badge badge-warning badge-sm absolute top-0 right-0 z-40">{cart?.length}</div>
        
        </NavLink>
      </li>
    </>
  );

  return (
    <>
    
      <div className="navbar fixed z-20 bg-black bg-opacity-30 max-w-screen-xl text-white font-semibold">
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
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      {/* {loading && <progress className="progress"></progress>} */}
    </>
  );
};

export default Navbar;
