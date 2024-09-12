// import { useEffect, useState } from "react";
// import "./Modal.css";
// import { TiTick } from "react-icons/ti";
// const Modal = ({ isOpen, onClose }) => {

// const [isClosing, setIsClosing] = useState(false);

//   useEffect(() => {
//     ('out of the set time out', isClosing)
//     setIsClosing(true);
//     setTimeout(() => {
//         ('inner settime out',isClosing)
//         setIsClosing(false)
//         onClose();
    
//     }, 5000);
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   return (
    
//       <div className={`modal-overlay ${isClosing ? 'fade-out' : ''} `}>
//       <div className="modal-content">
//       <div className="flex flex-col items-center justify-around relative ">
//                 <TiTick  className="text-2xl w-20 h-20 text-white bg-green-500 rounded-full succes-animation absolute -inset-y-16 "/>  
//                 <h2 className=" mt-10 mb-3 text-xl">Registration!</h2>
//                 <p className=" text-3xl mb-10">Succesfully done!</p>
//                 </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
