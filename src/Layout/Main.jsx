import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Suspense } from "react";
import LoaderCup from "../components/LoaderCup/LoaderCup";


const Main = () => {
  const location = useLocation();
  const hideHeaderFooterRoutes = ["/login", "/signup", "/dashboard"];
  const shouldHideHeaderFooter =
    hideHeaderFooterRoutes.includes(location.pathname) ||
    location.pathname.startsWith("dashboard");

  return (
    <div>
      <Navbar hideHeaderFooterRoutes={hideHeaderFooterRoutes}></Navbar>
      <Suspense fallback={<LoaderCup/>}>
        <Outlet></Outlet>
      </Suspense>
      {shouldHideHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
