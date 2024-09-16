// modal body
import  { useEffect } from 'react';
import { TiTick } from 'react-icons/ti';
import { RxCross2 } from "react-icons/rx";
import './Modal.css';

const Modal = ({ isOpen, title, message, onClose, onConfirm, type,autoCloseTime }) => {
 
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
      <div className={`modal-content ${type==='confirm' ? 'warning' : 'success'}`}>
      <div className="flex flex-col items-center justify-around relative ">
                {
                  type === 'confirm' ? 
                  <RxCross2 className="text-sm w-12 h-12 text-white bg-[#FE4B60] rounded-full warning-animation absolute -inset-y-12 "/>  :
                  <TiTick className="text-2xl w-12 h-12 text-white bg-green-500 rounded-full succes-animation absolute -inset-y-12 "/>
                }
                
                
                
                <h2 className=" mt-10 mb-3 text-xl uppercase">{title}</h2>
                <p className=" text-2xl mb-10 capitalize">{message}</p>
                </div>
      <div className="modal-actions">
          {type === 'confirm' && (<>
            <button onClick={onConfirm} className="px-3 py-1 rounded-sm font-semibold text-slate-700 bg-[#fe4b60d2] mr-4 hover:bg-[#fe4b60]">
              Yes
            </button>
          <button onClick={onClose} className=" px-3 py-1 rounded-sm font-semibold border border-red-400 hover:bg-[#fe4b6069]">
            No
          </button></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

