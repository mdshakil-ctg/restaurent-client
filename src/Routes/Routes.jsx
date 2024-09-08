import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MenuPage from "../Pages/MenuPage/MenuPage/MenuPage";
import Shop from "../Pages/Shop/Shop/Shop";
import ErrorElement from "../components/ErrorElement";
import ContactUs from "../Pages/ContactUs/ContactUs";

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
        }
      ]
    },
  ]);
