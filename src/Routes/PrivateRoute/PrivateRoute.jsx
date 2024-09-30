import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoaderCup from "../../components/LoaderCup/LoaderCup";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <LoaderCup></LoaderCup>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location.pathname}} replace></Navigate>
};

export default PrivateRoute;