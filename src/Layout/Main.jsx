import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const hideHeaderFooterRoutes = ['/login', '/signup'];
    const sholdHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

    return (
        <div>
            {sholdHideHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {sholdHideHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;