import { useState } from "react";
import Modal from "./Modal";
import { TiTick } from "react-icons/ti";

const ModalTest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="text-center p-20">
            <h1 >Modal test</h1>
            <button className="btn mt-5" onClick={openModal}>open modal</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex flex-col items-center justify-around relative ">
                <TiTick  className="text-2xl w-20 h-20 text-white bg-green-500 rounded-full succes-animation absolute -inset-y-16 "/>  
                <h2 className=" mt-10 mb-3 text-slate-800 text-xl">Registration!</h2>
                <p className=" text-2xl text-black mb-10">Succesfully done!</p>
                </div>
            </Modal>
        </div>
    );
};

export default ModalTest;