import { useContext } from "react";
import { ModalContext } from "../components/Modal/ModalProvider";


const useModal = () => {
    return useContext(ModalContext)
};

export default useModal;