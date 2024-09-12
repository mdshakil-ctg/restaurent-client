// modal body
import  { useEffect } from 'react';
import { TiTick } from 'react-icons/ti';
import './Modal.css';

const Modal = ({ isOpen, title, message, onClose, onConfirm, type, autoCloseTime }) => {
  // Auto close after specified time (for success or warning)
  useEffect(() => {
    if (isOpen && autoCloseTime) {
      const timer = setTimeout(() => {
        onClose();  // Auto-close the modal after the timeout
      }, autoCloseTime);

      return () => clearTimeout(timer);  // Clear timer if the component unmounts or re-renders
    }
  }, [isOpen, autoCloseTime, onClose]);

  if (!isOpen) return null;

  return (

    <div className={`modal-overlay`}>
      <div className="modal-content">
      <div className="flex flex-col items-center justify-around relative ">
                <TiTick className="text-2xl w-20 h-20 text-white bg-green-500 rounded-full succes-animation absolute -inset-y-16 "/>  
                <h2 className=" mt-10 mb-3 text-xl">{title}</h2>
                <p className=" text-3xl mb-10">{message}</p>
                </div>
      </div>
      <div className="modal-actions">
          {type === 'confirm' && (
            <button onClick={onConfirm} className="confirm-button">
              Confirm
            </button>
          )}
          <button onClick={onClose} className="close-button">
            Close
          </button>
        </div>
    </div>
  );
};

export default Modal;

