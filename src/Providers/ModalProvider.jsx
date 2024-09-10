import { createContext, useState } from "react";

export const ModalContext = createContext();
const ModalProvider = ({children}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const modalState = {
        isModalOpen,
        closeModal,
        openModal
    }

    return (
        <ModalContext.Provider value={modalState}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;