import { Navigate, useLocation } from "react-router-dom";
import useIsAdmin from "../../Hooks/useIsAdmin";


const AdminRoute = ({children}) => {
    const {isAdmin, isPending} = useIsAdmin();
    const location = useLocation()

    if(isPending){
        return <progress className="progress w-full"></progress>
    }

    if(isAdmin){
        return children
    }

    return (
        <Navigate to='/login' state={{from: location.pathname}} replace></Navigate>
    );
};

export default AdminRoute;