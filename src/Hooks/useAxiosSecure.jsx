import axios from "axios";
import { useContext, useMemo } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useModal from './useModal';

export const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-rho-six.vercel.app',
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { LogoutUser, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const { openModal } = useModal();

    useMemo(() => {
        const interceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                const status = error.response?.status;
                if (status === 401 || status === 403) {
                    openModal({
                        title: 'OOPS',
                        message: 'Session expired! Please log in again',
                        autoCloseTime: 3000,
                    });
                    await LogoutUser();
                    navigate('/login', { replace: true });
                    setLoading(false);
                } else if (status >= 500) {
                    openModal({
                        title: 'OOPS',
                        message: 'A server-side error occurred! Please try again later.',
                        autoCloseTime: 3000,
                    });
                } else {
                    openModal({
                        title: 'OOPS',
                        message: 'Something went wrong.',
                        autoCloseTime: 3000,
                    });
                }
                console.error('Error in interceptor:', error);
                return Promise.reject(error);
            }
        );

        return () => axiosSecure.interceptors.response.eject(interceptor);
    }, [LogoutUser, navigate, openModal, setLoading]);

    

    return axiosSecure;
};

export default useAxiosSecure;
