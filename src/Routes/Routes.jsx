import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import ErrorElement from "../components/ErrorElement";
import Dashboard from "../Layout/Dashboard";

const Shop = lazy(() => import("../Pages/Shop/Shop/Shop"));
const MenuPage = lazy(() => import("../Pages/MenuPage/MenuPage/MenuPage"));
const ContactUs = lazy(() => import("../Pages/ContactUs/ContactUs"));
const SignUp = lazy(() => import("../Pages/SignUp/SignUp"));
const Login = lazy(() => import("../Pages/Login/Login"));
// const Dashboard = lazy(() => import("../Layout/Dashboard"));
const AdminHome = lazy(() => import("../Pages/Dashboard/AdminHome/AdminHome"));
const Reservation = lazy(() =>
  import("./../Pages/Dashboard/Reservation/Reservation")
);
const Payment = lazy(() => import("./../Pages/Dashboard/Payment/Payment"));
const MyCart = lazy(() => import("../Pages/Dashboard/MyCart/MyCart"));
const AddReview = lazy(() =>
  import("./../Pages/Dashboard/AddReview/AddReview")
);
const Mybooking = lazy(() =>
  import("./../Pages/Dashboard/Mybooking/Mybooking")
);
const AllUsers = lazy(() =>
  import("../Pages/Dashboard/Admin/AllUsers/AllUsers")
);
const AddItem = lazy(() => import("../components/AddItem/AddItem"));
const ManageItems = lazy(() =>
  import("../Pages/Dashboard/Admin/AllUsers/ManageItems/ManageItems")
);
const PaymentSuccess = lazy(() =>
  import("../Pages/Dashboard/Payment/PaymentSuccess")
);
const PaymentFailed = lazy(() =>
  import("../Pages/Dashboard/Payment/PaymentFailed")
);
const UserHome = lazy(() => import("../Pages/Dashboard/UserHome/UserHome"));
const PaymentHistory = lazy(() =>
  import("../Pages/Dashboard/PaymentHistory/PaymentHistory")
);
const UpdateItems = lazy(() =>
  import("../Pages/Dashboard/Admin/UpdateItems/UpdateItems")
);
const ManageBookings = lazy(() =>
  import("../Pages/Dashboard/Admin/ManageBookings/ManageBookings")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "/shop/:category",
        element: <Shop></Shop>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      //general user routes
      {
        path: "user-home",
        element: (
          <PrivateRoute>
            <UserHome></UserHome>
          </PrivateRoute>
        ),
      },
      {
        path: "user-reservation",
        element: (
          <PrivateRoute>
            <Reservation></Reservation>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
      {
        path: "payment/success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "payment/fail/:tranId",
        element: <PaymentFailed></PaymentFailed>,
      },
      {
        path: "myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "myBooking",
        element: (
          <PrivateRoute>
            <Mybooking></Mybooking>
          </PrivateRoute>
        ),
      },
      //admin route
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "updateItems/:id",
        element: <UpdateItems></UpdateItems>,
      },
      {
        path: "manageBookings",
        element: <ManageBookings></ManageBookings>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
