
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <nav>
                {/* //dashboard content */}
                <ul>
                    <li><NavLink to='/dashboard'>USER HOME</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'>RESERVATION</NavLink></li>
                    <li><NavLink to='/dashboard/payment'>PAYMENT HISTORY</NavLink></li>
                    <li><NavLink to='/dashboard/myCart'>MY CART</NavLink></li>
                    <li><NavLink to='/dashboard/addReview'>ADD REVIEW</NavLink></li>
                    <li><NavLink to='/dashboard/myBooking'>MY BOOKING</NavLink></li>
                </ul>
            </nav>
                <div>
                    <Outlet></Outlet>
                </div>
        </div>
    );
};

export default Dashboard;