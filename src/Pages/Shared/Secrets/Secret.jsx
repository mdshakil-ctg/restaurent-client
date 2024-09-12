import { useContext } from "react";
import Modal from "../Modal/Modal";
import { ModalContext } from "../../../Providers/ModalProvider";


const Secret = () => {
    const { isModalOpen, closeModal } = useContext(ModalContext);
    return (
        <div>
            <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
            this is secret route here.
        </div>
    );
};

export default Secret;