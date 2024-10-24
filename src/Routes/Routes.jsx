import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MenuPage from "../Pages/MenuPage/MenuPage/MenuPage";
import Shop from "../Pages/Shop/Shop/Shop";
import ErrorElement from "../components/ErrorElement";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AdminHome from '../Pages/Dashboard/AdminHome/AdminHome';
import Reservation from './../Pages/Dashboard/Reservation/Reservation';
import Payment from './../Pages/Dashboard/Payment/Payment';
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AddReview from './../Pages/Dashboard/AddReview/AddReview';
import Mybooking from './../Pages/Dashboard/Mybooking/Mybooking';
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AddItem from "../components/AddItem/AddItem";
import ManageItems from "../Pages/Dashboard/Admin/AllUsers/ManageItems/ManageItems";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentFailed from "../Pages/Dashboard/Payment/PaymentFailed";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UpdateItems from "../Pages/Dashboard/Admin/UpdateItems/UpdateItems";
import ManageBookings from "../Pages/Dashboard/Admin/ManageBookings/ManageBookings";
import AdminRoute from "./AdminRoute/AdminRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <MenuPage></MenuPage>
        },
        {
          path: '/shop/:category',
          element: <Shop></Shop>
        },
        {
          path: '/contact',
          element: <ContactUs></ContactUs>
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
        
      ]
    },
    {
      path:'/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        //general user routes
        {
          path: 'user-home',
          element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
        },
        {
          path:'user-reservation',
          element:<PrivateRoute><Reservation></Reservation></PrivateRoute>
        },
        {
          path:'payment',
          element: <PrivateRoute><Payment></Payment></PrivateRoute>
        },
        {
          path:'payment-history',
          element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        },
        {
          path:'payment/success',
          element: <PaymentSuccess></PaymentSuccess>
        },
        {
          path:'payment/fail/:tranId',
          element: <PaymentFailed></PaymentFailed>
        },
        {
          path:'myCart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path:'addReview',
          element:<PrivateRoute><AddReview></AddReview></PrivateRoute>
        },
        {
          path: 'myBooking',
          element: <PrivateRoute><Mybooking></Mybooking></PrivateRoute>
        },
        //admin route
        {
          path:'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'allUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'addItem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageItems',
          element: <ManageItems></ManageItems>
        },
        {
          path:'updateItems/:id',
          element: <UpdateItems></UpdateItems>
        },
        {
          path:'manageBookings',
          element: <ManageBookings></ManageBookings>
        },
        {
          path:'payment',
          element: <Payment></Payment>
        },
      ]
    }
  ]);
