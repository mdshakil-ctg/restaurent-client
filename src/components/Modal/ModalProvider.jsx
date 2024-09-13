import { createContext, useState } from 'react';
import Modal from './Modal';


export const ModalContext = createContext();



export const ModalProvider = ({ children }) => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: '',
    onConfirm: null,
    autoCloseTime: null,
    color:'',
    icon: ''
  });
  
console.log(modalData.onConfirm);
  const openModal = (data) => setModalData({ ...data, isOpen: true });
  const closeModal = () => setModalData({ ...modalData, isOpen: false });
  

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal
        isOpen={modalData.isOpen}
        title={modalData.title}
        message={modalData.message}
        type={modalData.type}
        onClose={closeModal}
        onConfirm={modalData.onConfirm}
        autoCloseTime={modalData.autoCloseTime}
      />
    </ModalContext.Provider>
  );
};
