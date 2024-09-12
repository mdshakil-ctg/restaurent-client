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
import Secret from "../Pages/Shared/Secrets/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/MyCart/MyCart";
import UserHome from "../Pages/UserHome/UserHome";
import Reservation from "../Pages/Reservation/Reservation";
import Payment from "../Pages/Payment/Payment";
import AddReview from "../Pages/AddReview/AddReview";
import Mybooking from "../Pages/Mybooking/Mybooking";

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
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:'/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path:'/dashboard',
          element:<UserHome></UserHome>
        },
        {
          path:'/dashboard/reservation',
          element:<Reservation></Reservation>
        },
        {
          path:'/dashboard/payment',
          element: <Payment></Payment>
        },
        {
          path:'/dashboard/myCart',
          element:<MyCart></MyCart>
        },
        {
          path:'/dashboard/addReview',
          element:<AddReview></AddReview>
        },
        {
          path: '/dashboard/myBooking',
          element: <Mybooking></Mybooking>
        }
      ]
    }
  ]);
