import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import logo from "../../../assets/logo/logo-with-text-eraser.png";
import LoaderCup from "../../../components/LoaderCup/LoaderCup";
import useIsAdmin from "../../../Hooks/useIsAdmin";
import "./Navbar.css";

const Navbar = ({ hideHeaderFooterRoutes }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const { user, LogoutUser, setLoading, loading } = useContext(AuthContext);
  const { cart } = useCart();
  const { isAdmin, isPending } = useIsAdmin();
  const axiosPublic = useAxiosPublic();
  const handleLogout = () => {
    LogoutUser()
      .then(() => {
        setLoading(false);
        axiosPublic.post("/logout").then((res) => console.log(res));
      })
      .catch((err) => console.error(err));
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDarkMode = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  if (loading || isPending) {
    <LoaderCup></LoaderCup>;
  }

  const navItems = (
    <>
      <li className="lg:text-gray-400 mr-1">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="lg:text-gray-400 mr-1">
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li className="lg:text-gray-400 mr-1">
        <NavLink to="/shop/soup">Gallary</NavLink>
      </li>

      <li className="lg:text-gray-400 mr-1">
        <NavLink to="/user-reservation">Not Found</NavLink>
      </li>
      <li className="lg:text-gray-400 mr-1">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>

      {user ? (
        <>
          <li className="lg:text-gray-400 mr-1">
            <NavLink
              to={isAdmin ? "/dashboard/adminHome" : "/dashboard/user-home"}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="lg:text-gray-400 mr-1">
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <>
          <li className="lg:text-gray-400 mr-1">
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li className="lg:text-gray-400 mr-1">
            <NavLink to="/login">Log In</NavLink>
          </li>
        </>
      )}

      <li className="mt-1">
        <NavLink to={isAdmin ? "/dashboard/adminHome" : "/dashboard/myCart"}>
          <span className="absolute z-10">
            <FaCartArrowDown className="text-xl sm:text-black md:text-2xl  lg:text-gray-400 " />
          </span>
          <div className="badge badge-xs leading-3 badge-warning relative -top-2 -right-4 z-10">
            {cart?.length}
          </div>
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`navbar px-5 fixed  top-0 z-20 h-16 max-w-screen-xl font-semibold ${
          !hideHeaderFooterRoutes ? "bg-black" : "bg-gray-900 "
        }`}
      >
        <div className="lg:navbar-start w-full flex justify-between ">
          <div className="dropdown">
            <div
              onClick={handleDropdown}
              tabIndex={0}
              role="button"
              className=" ml-2 p-1 text-white  lg:hidden"
            >
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
            {dropdownOpen && (
              <ul
                onClick={() => setDropdownOpen(false)}
                tabIndex={0}
                className="menu menu-sm dropdown-content  z-[1]  ml-5 mt-[18px] w-52  py-2 shadow bg-white bg-opacity-80 text-black !md:text-black !lg:text-gray-400 "
              >
                {navItems}
              </ul>
            )}
          </div>
          <div className="">
            <Link to="/" className="">
              <img
                className="ml-1 w-[100px] h-[60px] object-cover"
                src={logo}
              ></img>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal py-0 px-1">{navItems}</ul>
        </div>
        <div className="navbar-end toggle-button">
          <input className="inputs" type="checkbox" id="toggle" />
          <div onClick={handleDarkMode} className="display">
            <label className="labels" htmlFor="toggle">
              <div className="circle">
                <svg
                  className="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
                <svg
                  className="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
